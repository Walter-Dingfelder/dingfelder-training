import { getUser, admin } from '@netlify/identity'

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

function buildUserMetadata(currentUser, capture) {
  const safeCapture = normalizeUserCaptureShape(capture)
  const currentMetadata = currentUser?.user_metadata || {}
  const fullName = `${safeCapture?.profile?.firstName || ''} ${safeCapture?.profile?.lastName || ''}`.trim()

  return {
    ...currentMetadata,
    airon_capture: safeCapture,
    full_name: fullName || currentMetadata.full_name || '',
    company_name: safeCapture?.profile?.companyName || '',
    department_name: safeCapture?.profile?.departmentName || '',
    role_name: safeCapture?.profile?.roleName || '',
    employee_id: safeCapture?.profile?.employeeId || '',
    user_type: safeCapture?.profile?.userType || 'employee',
    accepted_terms: Boolean(safeCapture?.acceptance?.accepted),
    accepted_terms_version: safeCapture?.acceptance?.version || '',
    accepted_terms_at: safeCapture?.acceptance?.acceptedAt || '',
  }
}

function isUuid(value) {
  return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
}

async function resolveTargetUser(currentUser) {
  if (currentUser && isUuid(currentUser.id)) return currentUser
  if (currentUser && isUuid(currentUser.sub)) return { ...currentUser, id: currentUser.sub }

  const email = typeof currentUser?.email === 'string' ? currentUser.email.trim().toLowerCase() : ''
  if (!email) return null

  const users = await admin.listUsers()
  const matched = Array.isArray(users)
    ? users.find((user) => typeof user?.email === 'string' && user.email.trim().toLowerCase() === email && isUuid(user.id))
    : null

  return matched || null
}

export default async (req, context) => {
  const currentUser = await getUser()

  if (!currentUser) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (req.method === 'GET') {
    return Response.json({
      capture: normalizeUserCaptureShape(currentUser?.user_metadata?.airon_capture),
      userMetadata: currentUser?.user_metadata || {},
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

    const targetUser = await resolveTargetUser(currentUser)

    if (!targetUser || !isUuid(targetUser.id)) {
      return new Response(JSON.stringify({ error: 'Unable to resolve a valid Identity user ID for this account.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const updated = await admin.updateUser(
      targetUser,
      { user_metadata: buildUserMetadata(targetUser, capture) }
    )

    const updatedUser = updated?.data || updated || {}
    return Response.json({
      capture: normalizeUserCaptureShape(updatedUser?.user_metadata?.airon_capture) || capture,
      userMetadata: updatedUser?.user_metadata || {},
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error:
          (typeof error?.message === 'string' && error.message) ||
          'Unable to save your account record right now.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
