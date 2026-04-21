import { getStore } from '@netlify/blobs'
import { getUser } from '@netlify/identity'
import { getPortalSessionUser } from './_portalSession.js'

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

function deriveCaptureKey(currentUser) {
  const email = typeof currentUser?.email === 'string' ? currentUser.email.trim().toLowerCase() : ''
  const stableId =
    (typeof currentUser?.sub === 'string' && currentUser.sub.trim()) ||
    (typeof currentUser?.id === 'string' && currentUser.id.trim()) ||
    email

  if (!stableId) return ''
  return `identity/${stableId}`
}

function makeStore() {
  return getStore({ name: 'airon-user-capture', consistency: 'strong' })
}

export default async (req) => {
  const currentUser = await getUser() || getPortalSessionUser(req)

  if (!currentUser) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const key = deriveCaptureKey(currentUser)
  if (!key) {
    return new Response(JSON.stringify({ error: 'Unable to resolve a durable key for this account.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const store = makeStore()

  if (req.method === 'GET') {
    const entry = await store.get(key, { type: 'json', consistency: 'strong' })
    return Response.json({
      capture: normalizeUserCaptureShape(entry?.capture) || normalizeUserCaptureShape(currentUser?.user_metadata?.airon_capture),
      key,
    })
  }

  if (req.method !== 'PUT' && req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const body = await req.json()
    const capture = normalizeUserCaptureShape(body?.capture)

    if (!capture) {
      return new Response(JSON.stringify({ error: 'Invalid capture payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const entry = {
      version: 1,
      account: {
        email: typeof currentUser?.email === 'string' ? currentUser.email : '',
        id: typeof currentUser?.id === 'string' ? currentUser.id : '',
        sub: typeof currentUser?.sub === 'string' ? currentUser.sub : '',
      },
      capture,
      updatedAt: new Date().toISOString(),
    }

    await store.setJSON(key, entry)

    return Response.json({
      capture,
      key,
      savedAt: entry.updatedAt,
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error:
          (typeof error?.message === 'string' && error.message.trim()) ||
          'Unable to save your account record right now.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
