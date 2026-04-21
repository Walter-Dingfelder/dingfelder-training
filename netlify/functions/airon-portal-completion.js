import { getUser } from '@netlify/identity'
import { getPortalSessionUser, extractPortalSessionToken } from './_portalSession.js'

function env(name, required = true) {
  const value = process.env[name] || ''
  if (required && !value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

async function callPortalCompletion(sessionToken, record) {
  const portalBase = env('PORTAL_APP_URL').replace(/\/$/, '')
  const response = await fetch(`${portalBase}/.netlify/functions/portal-training-completion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionToken}`,
    },
    body: JSON.stringify({ record: record || {} }),
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok) {
    const err = new Error((payload && payload.error) || `Portal completion sync failed: ${response.status}`)
    err.detail = payload && payload.detail
    throw err
  }

  return payload || {}
}

export default async (req) => {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const currentUser = await getUser().catch(() => null) || getPortalSessionUser(req)
    const sessionToken =
      (currentUser && typeof currentUser.portal_session_token === 'string' && currentUser.portal_session_token) ||
      (currentUser && typeof currentUser.portalSessionToken === 'string' && currentUser.portalSessionToken) ||
      extractPortalSessionToken(req)

    if (!sessionToken) {
      return new Response(JSON.stringify({ error: 'No portal-backed session is available for completion sync.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const body = await req.json().catch(() => ({}))
    const result = await callPortalCompletion(sessionToken, body?.record || {})
    return Response.json({
      ok: true,
      synced: !!result?.synced,
      result,
    })
  } catch (error) {
    return new Response(JSON.stringify({
      error: (typeof error?.message === 'string' && error.message.trim()) || 'Unable to sync completion back to the portal.',
      detail: error?.detail || null,
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
