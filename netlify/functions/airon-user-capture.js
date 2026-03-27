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

    const updated = await admin.updateUser(
      { id: currentUser.id },
      { user_metadata: buildUserMetadata(currentUser, capture) }
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
