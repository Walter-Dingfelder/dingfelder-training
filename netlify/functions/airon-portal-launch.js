function env(name, required = true) {
  const value = process.env[name] || ''
  if (required && !value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

import { verifySignedToken, makePortalSessionToken } from './_portalSession.js'

export default async (req) => {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const url = new URL(req.url)
    const token = url.searchParams.get('token') || ''
    const payload = verifySignedToken(token)
    if (payload.type !== 'portal_launch') {
      return new Response(JSON.stringify({ error: 'Invalid launch token type.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }
    const sessionToken = makePortalSessionToken(payload)
    const portalAppUrl = env('PORTAL_APP_URL')
    const portalReturnUrl = `${portalAppUrl.replace(/\/$/, '')}/portal/${String(payload.workspaceSlug || '').trim()}/my-training.html`
    return Response.json({
      ok: true,
      sessionToken,
      targetPath: typeof payload.modulePath === 'string' && payload.modulePath.trim() ? payload.modulePath.trim() : '/',
      user: {
        email: payload.email || '',
        displayName: payload.displayName || payload.email || '',
        workspaceSlug: payload.workspaceSlug || '',
        workspaceName: payload.workspaceName || payload.workspaceSlug || '',
        role: payload.role || '',
        assignmentId: payload.assignmentId || '',
        moduleKey: payload.moduleKey || '',
        modulePath: payload.modulePath || '',
        moduleTitle: payload.moduleTitle || '',
        portalAppUrl,
        portalReturnUrl
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: (typeof error?.message === 'string' && error.message.trim()) || 'Unable to complete the portal handoff.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
