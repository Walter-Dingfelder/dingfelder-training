import { getUser, handleAuthCallback, login, logout, signup } from '@netlify/identity'

const PORTAL_SESSION_KEY = 'airon.portalLaunchSession'

function loadPortalLaunchSession() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(PORTAL_SESSION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    const expMs = Number(parsed?.expiresAt || 0)
    if (expMs && Date.now() > expMs) {
      window.localStorage.removeItem(PORTAL_SESSION_KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

function savePortalLaunchSession(session) {
  if (typeof window === 'undefined') return null
  try { window.localStorage.setItem(PORTAL_SESSION_KEY, JSON.stringify(session || {})) } catch {}
  return session || null
}

function clearPortalLaunchSession() {
  if (typeof window === 'undefined') return
  try { window.localStorage.removeItem(PORTAL_SESSION_KEY) } catch {}
}

function buildPortalLaunchUser(session) {
  if (!session || !session.email || !session.sessionToken) return null
  return {
    email: session.email,
    id: `portal:${session.email}`,
    sub: `portal:${session.email}`,
    portalSessionToken: session.sessionToken,
    portalSession: true,
    workspaceSlug: session.workspaceSlug || '',
    workspaceName: session.workspaceName || '',
    roleName: session.role || '',
    user_metadata: {
      airon_capture: {
        acceptance: { accepted: true, version: 'portal-launch', acceptedAt: new Date().toISOString() },
        profile: {
          firstName: typeof session.displayName === 'string' ? session.displayName.split(/\s+/)[0] || '' : '',
          lastName: typeof session.displayName === 'string' ? session.displayName.split(/\s+/).slice(1).join(' ') : '',
          companyName: session.workspaceName || session.workspaceSlug || '',
          departmentName: 'Portal Launch',
          roleName: session.role || '',
          employeeId: '',
          userType: 'portal',
        },
      },
    },
  }
}

async function getCurrentAuthUser() {
  const realUser = await getUser().catch(() => null)
  if (realUser) return realUser
  return buildPortalLaunchUser(loadPortalLaunchSession())
}

export async function consumePortalLaunchNetlifyIdentity(token) {
  const launchToken = typeof token === 'string' ? token.trim() : ''
  if (!launchToken) {
    return { user: null, targetPath: '/', message: '', error: 'Training handoff token is missing.' }
  }
  try {
    const response = await fetch(`/.netlify/functions/airon-portal-launch?token=${encodeURIComponent(launchToken)}`, { method: 'GET', credentials: 'include' })
    let payload = null
    try { payload = await response.json() } catch { payload = null }
    if (!response.ok) {
      return { user: null, targetPath: '/', message: '', error: (payload && payload.error) || 'Unable to complete the training handoff.' }
    }
    const session = {
      sessionToken: payload?.sessionToken || '',
      email: payload?.user?.email || '',
      displayName: payload?.user?.displayName || payload?.user?.email || '',
      workspaceSlug: payload?.user?.workspaceSlug || '',
      workspaceName: payload?.user?.workspaceName || '',
      role: payload?.user?.role || '',
      expiresAt: Date.now() + (8 * 60 * 60 * 1000),
    }
    savePortalLaunchSession(session)
    return { user: buildPortalLaunchUser(session), targetPath: payload?.targetPath || '/', message: `Training handoff complete for ${session.email || 'portal launch user'}.`, error: '' }
  } catch (error) {
    return { user: null, targetPath: '/', message: '', error: normalizeIdentityError(error) }
  }
}

function normalizeIdentityError(error) {
  if (!error) return 'Unable to complete the identity action.'
  if (typeof error === 'string') return error
  if (typeof error.message === 'string' && error.message.trim()) return error.message.trim()
  return 'Unable to complete the identity action.'
}



function normalizeUserCaptureShape(rawCapture) {
  if (!rawCapture || typeof rawCapture !== 'object') return null

  return {
    acceptance: {
      accepted: Boolean(rawCapture?.acceptance?.accepted),
      version: typeof rawCapture?.acceptance?.version === 'string' ? rawCapture.acceptance.version : '',
      acceptedAt: typeof rawCapture?.acceptance?.acceptedAt === 'string' ? rawCapture.acceptance.acceptedAt : '',
    },
    profile: {
      firstName: typeof rawCapture?.profile?.firstName === 'string' ? rawCapture.profile.firstName : '',
      lastName: typeof rawCapture?.profile?.lastName === 'string' ? rawCapture.profile.lastName : '',
      companyName: typeof rawCapture?.profile?.companyName === 'string' ? rawCapture.profile.companyName : '',
      departmentName: typeof rawCapture?.profile?.departmentName === 'string' ? rawCapture.profile.departmentName : '',
      roleName: typeof rawCapture?.profile?.roleName === 'string' ? rawCapture.profile.roleName : '',
      employeeId: typeof rawCapture?.profile?.employeeId === 'string' ? rawCapture.profile.employeeId : '',
      userType: typeof rawCapture?.profile?.userType === 'string' ? rawCapture.profile.userType : 'employee',
    },
  }
}

export function getUserCaptureFromIdentityUser(user) {
  return normalizeUserCaptureShape(user?.user_metadata?.airon_capture)
}


async function getAccessTokenFromIdentityUser(user) {
  if (!user) return ''
  if (typeof user?.portalSessionToken === 'string' && user.portalSessionToken) return user.portalSessionToken
  if (typeof user?.token?.access_token === 'string' && user.token.access_token) return user.token.access_token
  if (typeof user?.jwt === 'function') {
    try {
      const token = await user.jwt()
      if (typeof token === 'string' && token) return token
    } catch (error) {
      // ignore token read failure and fall back to cookie-auth if available
    }
  }
  return ''
}

async function callUserCaptureFunction(method, user, capture) {
  const currentUser = user || await getUser()
  const token = await getAccessTokenFromIdentityUser(currentUser)

  const response = await fetch('/.netlify/functions/airon-user-capture', {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(method === 'GET' ? {} : { body: JSON.stringify({ capture }) }),
  })

  let payload = null
  try {
    payload = await response.json()
  } catch (error) {
    payload = null
  }

  if (!response.ok) {
    const serverError =
      (payload && typeof payload.error === 'string' && payload.error.trim()) ||
      `Unable to save your account record right now.`
    throw new Error(serverError)
  }

  return payload || {}
}

export async function loadCurrentUserCaptureNetlifyIdentity(user) {
  const currentUser = user || await getCurrentAuthUser()

  if (!currentUser) {
    return {
      user: null,
      capture: null,
      message: '',
      error: '',
    }
  }

  try {
    const payload = await callUserCaptureFunction('GET', currentUser)
    return {
      user: currentUser,
      capture: normalizeUserCaptureShape(payload?.capture) || getUserCaptureFromIdentityUser(currentUser),
      message: '',
      error: '',
    }
  } catch (error) {
    return {
      user: currentUser,
      capture: getUserCaptureFromIdentityUser(currentUser),
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}

export async function persistUserCaptureNetlifyIdentity(user, capture) {
  const currentUser = user || await getCurrentAuthUser()

  if (!currentUser) {
    return {
      user: null,
      capture: normalizeUserCaptureShape(capture),
      message: '',
      error: 'Unable to save your account record right now.',
    }
  }

  try {
    const payload = await callUserCaptureFunction('PUT', currentUser, normalizeUserCaptureShape(capture))
    return {
      user: currentUser,
      capture: normalizeUserCaptureShape(payload?.capture) || normalizeUserCaptureShape(capture),
      message: 'Saved-record setup synced to your A.I.R.O.N. account.',
      error: '',
    }
  } catch (error) {
    return {
      user: currentUser,
      capture: normalizeUserCaptureShape(capture),
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}



function normalizeTrainingRecordShape(rawRecord) {
  if (!rawRecord || typeof rawRecord !== 'object') return null

  const toNumberOrNull = (value) => {
    const num = Number(value)
    return Number.isFinite(num) ? num : null
  }

  return {
    attemptId: typeof rawRecord?.attemptId === 'string' ? rawRecord.attemptId : '',
    moduleId: typeof rawRecord?.moduleId === 'string' ? rawRecord.moduleId : '',
    moduleVersion: typeof rawRecord?.moduleVersion === 'string' ? rawRecord.moduleVersion : '',
    modulePath: typeof rawRecord?.modulePath === 'string' ? rawRecord.modulePath : '',
    moduleTitle: typeof rawRecord?.moduleTitle === 'string' ? rawRecord.moduleTitle : '',
    categoryKey: typeof rawRecord?.categoryKey === 'string' ? rawRecord.categoryKey : '',
    categoryLabel: typeof rawRecord?.categoryLabel === 'string' ? rawRecord.categoryLabel : '',
    requirementIds: Array.isArray(rawRecord?.requirementIds)
      ? rawRecord.requirementIds.filter(value => typeof value === 'string' && value.trim())
      : [],
    requirementType: typeof rawRecord?.requirementType === 'string' ? rawRecord.requirementType : '',
    completionBucket: typeof rawRecord?.completionBucket === 'string' ? rawRecord.completionBucket : '',
    reviewEnabled: Boolean(rawRecord?.reviewEnabled),
    recordRequired: rawRecord?.recordRequired !== false,
    renewalRequired: rawRecord?.renewalRequired !== false,
    renewalIntervalDays: toNumberOrNull(rawRecord?.renewalIntervalDays),
    notificationLeadDays: toNumberOrNull(rawRecord?.notificationLeadDays),
    assignedPolicySource: typeof rawRecord?.assignedPolicySource === 'string' ? rawRecord.assignedPolicySource : '',
    nextReviewDueAt: typeof rawRecord?.nextReviewDueAt === 'string' ? rawRecord.nextReviewDueAt : '',
    score: toNumberOrNull(rawRecord?.score),
    quizCorrect: toNumberOrNull(rawRecord?.quizCorrect),
    quizTotal: toNumberOrNull(rawRecord?.quizTotal),
    passed: Boolean(rawRecord?.passed),
    completedAt:
      typeof rawRecord?.completedAt === 'string' && rawRecord.completedAt.trim()
        ? rawRecord.completedAt
        : new Date().toISOString(),
    runtimeMinutes: toNumberOrNull(rawRecord?.runtimeMinutes),
    certificateClass:
      typeof rawRecord?.certificateClass === 'string' && rawRecord.certificateClass.trim()
        ? rawRecord.certificateClass.trim()
        : 'Portal Completion Record',
    certificateEligible: Boolean(rawRecord?.certificateEligible),
    source:
      typeof rawRecord?.source === 'string' && rawRecord.source.trim()
        ? rawRecord.source.trim()
        : 'portal',
  }
}

async function callTrainingRecordsFunction(method, user, record) {
  const currentUser = user || await getUser()
  const token = await getAccessTokenFromIdentityUser(currentUser)

  const response = await fetch('/.netlify/functions/airon-training-records', {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(method === 'GET' ? {} : { body: JSON.stringify({ record }) }),
  })

  let payload = null
  try {
    payload = await response.json()
  } catch (error) {
    payload = null
  }

  if (!response.ok) {
    const serverError =
      (payload && typeof payload.error === 'string' && payload.error.trim()) ||
      'Unable to save your training record right now.'
    throw new Error(serverError)
  }

  return payload || {}
}


async function callCertificateEmailFunction(user, payload) {
  const currentUser = user || await getUser()
  const token = await getAccessTokenFromIdentityUser(currentUser)

  const response = await fetch('/.netlify/functions/airon-certificate-email', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload || {}),
  })

  let payloadResponse = null
  try {
    payloadResponse = await response.json()
  } catch (error) {
    payloadResponse = null
  }

  if (!response.ok) {
    const serverError =
      (payloadResponse && typeof payloadResponse.error === 'string' && payloadResponse.error.trim()) ||
      'Unable to send your certificate email right now.'
    throw new Error(serverError)
  }

  return payloadResponse || {}
}

export async function persistTrainingRecordNetlifyIdentity(user, record) {
  const currentUser = user || await getCurrentAuthUser()
  const normalizedRecord = normalizeTrainingRecordShape(record)

  if (!currentUser) {
    return {
      user: null,
      record: normalizedRecord,
      saved: false,
      skipped: true,
      message: '',
      error: '',
    }
  }

  try {
    const payload = await callTrainingRecordsFunction('POST', currentUser, normalizedRecord)
    return {
      user: currentUser,
      record: normalizeTrainingRecordShape(payload?.record) || normalizedRecord,
      saved: true,
      skipped: false,
      message: 'Retained training record saved to your A.I.R.O.N. account.',
      error: '',
    }
  } catch (error) {
    return {
      user: currentUser,
      record: normalizedRecord,
      saved: false,
      skipped: false,
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}

export async function loadTrainingRecordsNetlifyIdentity(user) {
  const currentUser = user || await getCurrentAuthUser()

  if (!currentUser) {
    return {
      user: null,
      records: [],
      message: '',
      error: '',
    }
  }

  try {
    const payload = await callTrainingRecordsFunction('GET', currentUser)
    return {
      user: currentUser,
      records: Array.isArray(payload?.records) ? payload.records.map(normalizeTrainingRecordShape).filter(Boolean) : [],
      message: '',
      error: '',
    }
  } catch (error) {
    return {
      user: currentUser,
      records: [],
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}
export async function bootstrapNetlifyIdentity() {
  let callbackResult = null

  try {
    callbackResult = await handleAuthCallback()
  } catch (error) {
    const currentUser = await getUser().catch(() => null)
    return {
      user: currentUser,
      message: '',
      error: normalizeIdentityError(error),
    }
  }

  const user = await getCurrentAuthUser()

  if (typeof window !== 'undefined' && window.location.hash) {
    window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`)
  }

  if (!callbackResult) {
    return {
      user,
      message: '',
      error: '',
    }
  }

  const callbackType = callbackResult.type || 'identity callback'
  const callbackEmail = callbackResult.user?.email || user?.email || 'your account'

  return {
    user,
    message: `Identity callback complete: ${callbackType} for ${callbackEmail}.`,
    error: '',
  }
}


export async function signInNetlifyIdentity(email, password) {
  try {
    clearPortalLaunchSession()
    const user = await login(email, password)
    return {
      user,
      message: `Signed in as ${user?.email || email}.`,
      error: '',
    }
  } catch (error) {
    const currentUser = await getUser().catch(() => null)
    return {
      user: currentUser,
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}


export async function createAccountNetlifyIdentity(email, password) {
  try {
    await signup(email, password)
    clearPortalLaunchSession()
    const user = await login(email, password)
    return {
      user,
      message: `Account created and signed in as ${user?.email || email}.`,
      error: '',
    }
  } catch (error) {
    const currentUser = await getUser().catch(() => null)
    return {
      user: currentUser,
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}

export async function signOutNetlifyIdentity() {
  const currentUser = await getCurrentAuthUser()
  if (currentUser?.portalSessionToken && !currentUser?.token?.access_token && !currentUser?.jwt) {
    clearPortalLaunchSession()
    return {
      user: null,
      message: 'Signed out of the training portal.',
      error: '',
    }
  }
  try {
    await logout()
    clearPortalLaunchSession()
    return {
      user: null,
      message: 'Signed out of the training portal.',
      error: '',
    }
  } catch (error) {
    return {
      user: currentUser,
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}


export async function emailTrainingCertificateNetlifyIdentity(user, payload) {
  const currentUser = user || await getCurrentAuthUser()

  if (!currentUser) {
    return {
      user: null,
      sent: false,
      destination: '',
      message: '',
      error: 'Sign in to email a retained certificate.',
    }
  }

  try {
    const responsePayload = await callCertificateEmailFunction(currentUser, payload)
    return {
      user: currentUser,
      sent: true,
      destination:
        (typeof responsePayload?.destination === 'string' && responsePayload.destination.trim()) ||
        (typeof currentUser?.email === 'string' ? currentUser.email : ''),
      message:
        (typeof responsePayload?.message === 'string' && responsePayload.message.trim()) ||
        'Certificate email sent.',
      error: '',
      provider:
        (typeof responsePayload?.provider === 'string' && responsePayload.provider.trim()) || '',
      messageId:
        (typeof responsePayload?.messageId === 'string' && responsePayload.messageId.trim()) || '',
    }
  } catch (error) {
    return {
      user: currentUser,
      sent: false,
      destination: typeof currentUser?.email === 'string' ? currentUser.email : '',
      message: '',
      error: normalizeIdentityError(error),
      provider: '',
      messageId: '',
    }
  }
}
