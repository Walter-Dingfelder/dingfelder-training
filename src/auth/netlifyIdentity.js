import { getUser, handleAuthCallback, login, logout, signup } from '@netlify/identity'

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
  const currentUser = user || await getUser().catch(() => null)

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
  const currentUser = user || await getUser().catch(() => null)

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

export async function persistTrainingRecordNetlifyIdentity(user, record) {
  const currentUser = user || await getUser().catch(() => null)
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
  const currentUser = user || await getUser().catch(() => null)

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

  const user = await getUser().catch(() => null)

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
  try {
    await logout()
    return {
      user: null,
      message: 'Signed out of the training portal.',
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
