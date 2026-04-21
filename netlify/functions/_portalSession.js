import crypto from 'crypto'

function env(name, required = true) {
  const value = process.env[name] || ''
  if (required && !value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

function base64urlDecode(value) {
  const normalized = String(value || '').replace(/-/g, '+').replace(/_/g, '/')
  const pad = normalized.length % 4
  const padded = normalized + (pad ? '='.repeat(4 - pad) : '')
  return Buffer.from(padded, 'base64').toString('utf8')
}

function base64urlEncode(value) {
  return Buffer.from(value).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

function signBody(body, secret) {
  return crypto.createHmac('sha256', secret).update(body).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

export function verifySignedToken(token) {
  const raw = String(token || '').trim()
  if (!raw || !raw.includes('.')) throw new Error('Invalid handoff token.')
  const [body, signature] = raw.split('.')
  const expected = signBody(body, env('TRAINING_HANDOFF_SECRET'))
  const expectedBuf = Buffer.from(expected)
  const actualBuf = Buffer.from(String(signature || ''))
  if (expectedBuf.length !== actualBuf.length || !crypto.timingSafeEqual(expectedBuf, actualBuf)) {
    throw new Error('Training handoff signature is invalid.')
  }
  const payload = JSON.parse(base64urlDecode(body))
  const now = Math.floor(Date.now() / 1000)
  if (!payload || typeof payload !== 'object' || !payload.exp || Number(payload.exp) < now) {
    throw new Error('Training handoff token has expired.')
  }
  return payload
}

export function signPayload(payload) {
  const body = base64urlEncode(JSON.stringify(payload))
  const signature = signBody(body, env('TRAINING_HANDOFF_SECRET'))
  return `${body}.${signature}`
}

export function makePortalSessionToken(launchPayload) {
  const now = Math.floor(Date.now() / 1000)
  return signPayload({
    type: 'portal_session',
    email: String(launchPayload.email || '').trim().toLowerCase(),
    displayName: String(launchPayload.displayName || '').trim(),
    workspaceSlug: String(launchPayload.workspaceSlug || '').trim(),
    workspaceName: String(launchPayload.workspaceName || '').trim(),
    role: String(launchPayload.role || '').trim(),
    assignmentId: String(launchPayload.assignmentId || '').trim(),
    moduleKey: String(launchPayload.moduleKey || '').trim(),
    modulePath: String(launchPayload.modulePath || '').trim(),
    moduleTitle: String(launchPayload.moduleTitle || '').trim(),
    iat: now,
    exp: now + (8 * 60 * 60)
  })
}

export function extractPortalSessionToken(req) {
  const auth = req.headers.get('authorization') || ''
  if (auth.startsWith('Bearer ')) return auth.replace(/^Bearer\s+/i, '').trim()
  const alt = req.headers.get('x-portal-session') || ''
  return String(alt || '').trim()
}

export function getPortalSessionUser(req) {
  const token = extractPortalSessionToken(req)
  if (!token) return null
  const payload = verifySignedToken(token)
  if (payload.type !== 'portal_session') throw new Error('Invalid training session type.')
  const email = String(payload.email || '').trim().toLowerCase()
  if (!email) throw new Error('Training session email is missing.')
  return {
    email,
    id: `portal:${email}`,
    sub: `portal:${email}`,
    portal_session: true,
    portal_session_token: token,
    user_metadata: {
      airon_capture: {
        acceptance: { accepted: true, version: 'portal-launch', acceptedAt: new Date().toISOString() },
        profile: {
          firstName: String(payload.displayName || '').trim().split(/\s+/)[0] || '',
          lastName: String(payload.displayName || '').trim().split(/\s+/).slice(1).join(' '),
          companyName: String(payload.workspaceName || payload.workspaceSlug || '').trim(),
          departmentName: 'Portal Launch',
          roleName: String(payload.role || '').trim(),
          employeeId: '',
          userType: 'portal'
        }
      }
    },
    workspaceSlug: String(payload.workspaceSlug || '').trim(),
    workspaceName: String(payload.workspaceName || '').trim(),
    roleName: String(payload.role || '').trim(),
    assignmentId: String(payload.assignmentId || '').trim(),
    moduleKey: String(payload.moduleKey || '').trim(),
    modulePath: String(payload.modulePath || '').trim(),
    moduleTitle: String(payload.moduleTitle || '').trim(),
    portalSessionToken: token
  }
}
