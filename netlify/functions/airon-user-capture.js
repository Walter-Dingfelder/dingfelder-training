import { getUser } from '@netlify/identity'

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

function getIdentityContext(context) {
  const identity = context?.clientContext?.identity || {}
  const user = context?.clientContext?.user || {}

  return {
    identityUrl: typeof identity?.url === 'string' ? identity.url : '',
    adminToken: typeof identity?.token === 'string' ? identity.token : '',
    userId: typeof user?.sub === 'string' ? user.sub : '',
  }
}

async function updateIdentityUserMetadata(context, currentUser, capture) {
  const { identityUrl, adminToken, userId } = getIdentityContext(context)

  if (!identityUrl || !adminToken) {
    throw new Error('Identity admin context is not available in this function.')
  }

  if (!isUuid(userId)) {
    throw new Error('Unable to resolve a valid Identity user ID for this account.')
  }

  const response = await fetch(`${identityUrl}/admin/users/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_metadata: buildUserMetadata(currentUser, capture),
    }),
  })

  let payload = null
  try {
    payload = await response.json()
  } catch (error) {
    payload = null
  }

  if (!response.ok) {
    const errorMessage =
      (payload && typeof payload.msg === 'string' && payload.msg) ||
      (payload && typeof payload.error === 'string' && payload.error) ||
      (payload && typeof payload.message === 'string' && payload.message) ||
      `Identity admin update failed with status ${response.status}.`
    throw new Error(errorMessage)
  }

  return payload?.data || payload || {}
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

    const updatedUser = await updateIdentityUserMetadata(context, currentUser, capture)

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
