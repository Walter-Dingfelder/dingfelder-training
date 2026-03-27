import { getUser, handleAuthCallback, login, logout, signup } from '@netlify/identity'

function normalizeIdentityError(error) {
  if (!error) return 'Unable to complete the identity action.'
  if (typeof error === 'string') return error
  if (typeof error.message === 'string' && error.message.trim()) return error.message.trim()
  return 'Unable to complete the identity action.'
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
