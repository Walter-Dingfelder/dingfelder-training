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

export async function loadCurrentUserCaptureNetlifyIdentity(user) {
  try {
    const currentUser = user || await getUser()
    return {
      user: currentUser,
      capture: getUserCaptureFromIdentityUser(currentUser),
      message: '',
      error: '',
    }
  } catch (error) {
    const currentUser = await getUser().catch(() => null)
    return {
      user: currentUser,
      capture: getUserCaptureFromIdentityUser(currentUser),
      message: '',
      error: normalizeIdentityError(error),
    }
  }
}

export async function persistUserCaptureNetlifyIdentity(user, capture) {
  try {
    const currentUser = user || await getUser()

    if (!currentUser || typeof currentUser.update !== 'function') {
      return {
        user: currentUser,
        capture,
        message: '',
        error: 'Unable to save your account record right now.',
      }
    }

    const fullName = `${capture?.profile?.firstName || ''} ${capture?.profile?.lastName || ''}`.trim()

    const updatedUser = await currentUser.update({
      data: {
        ...(currentUser.user_metadata || {}),
        airon_capture: capture,
        full_name: fullName || currentUser?.user_metadata?.full_name || '',
        company_name: capture?.profile?.companyName || '',
        department_name: capture?.profile?.departmentName || '',
        role_name: capture?.profile?.roleName || '',
        employee_id: capture?.profile?.employeeId || '',
        user_type: capture?.profile?.userType || 'employee',
        accepted_terms: Boolean(capture?.acceptance?.accepted),
        accepted_terms_version: capture?.acceptance?.version || '',
        accepted_terms_at: capture?.acceptance?.acceptedAt || '',
      },
    })

    return {
      user: updatedUser,
      capture: getUserCaptureFromIdentityUser(updatedUser) || normalizeUserCaptureShape(capture),
      message: 'Saved-record setup synced to your A.I.R.O.N. account.',
      error: '',
    }
  } catch (error) {
    const currentUser = await getUser().catch(() => null)
    return {
      user: currentUser,
      capture: normalizeUserCaptureShape(capture),
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
