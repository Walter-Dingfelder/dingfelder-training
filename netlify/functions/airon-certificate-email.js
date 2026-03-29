
import { getUser } from '@netlify/identity'

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatTrainingTimestamp(value) {
  const date = value ? new Date(value) : new Date()
  if (Number.isNaN(date.getTime())) return ''
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`
}

function sanitizeFilename(value) {
  return String(value || 'training-certificate')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'training-certificate'
}

function isValidEmail(value) {
  const email = typeof value === 'string' ? value.trim() : ''
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function buildScoreText(record) {
  if (typeof record?.quizCorrect === 'number' && typeof record?.quizTotal === 'number') {
    return `${record.quizCorrect}/${record.quizTotal}`
  }

  if (typeof record?.score === 'number') return String(record.score)
  return 'Complete'
}

function buildCertificateHtml(record, options = {}) {
  const accentColor = options.accentColor || '#FFD100'
  const title = options.title || record?.moduleTitle || 'Training Completion Certificate'
  const subtitle = options.subtitle || 'Dingfelder Industrial Campus / A.I.R.O.N.'
  const completedBy = options.completedBy || record?.completedBy || options.destination || 'Signed-in account'
  const completedAt = formatTrainingTimestamp(record?.completedAt || options.completedAt || new Date().toISOString())
  const scoreText = buildScoreText(record)

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body { margin: 0; background: #050505; color: #f4f4f4; font-family: Arial, Helvetica, sans-serif; }
  .wrap { max-width: 920px; margin: 0 auto; padding: 48px 24px; }
  .card { border: 1px solid rgba(255,255,255,0.14); border-top: 6px solid ${accentColor}; border-radius: 20px; padding: 28px; background: #0d0d0d; }
  .eyebrow { color: ${accentColor}; font-size: 12px; letter-spacing: 0.24em; text-transform: uppercase; margin-bottom: 10px; }
  h1 { margin: 0 0 10px; font-size: 42px; line-height: 0.95; }
  p { color: #b5b5b5; line-height: 1.7; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px; margin-top: 24px; }
  .cell { border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: #111111; padding: 14px 16px; }
  .label { color: #8e8e8e; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px; }
  .value { color: #ffffff; font-size: 18px; font-weight: 700; line-height: 1.45; }
  .accent { color: ${accentColor}; }
  .footer { margin-top: 28px; color: #7f7f7f; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; }
</style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="eyebrow">A.I.R.O.N. certificate of completion</div>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(subtitle)}</p>

      <div class="grid">
        <div class="cell">
          <div class="label">Completed by</div>
          <div class="value">${escapeHtml(completedBy)}</div>
        </div>
        <div class="cell">
          <div class="label">Completed on</div>
          <div class="value">${escapeHtml(completedAt)}</div>
        </div>
        <div class="cell">
          <div class="label">Score</div>
          <div class="value accent">${escapeHtml(scoreText)}</div>
        </div>
        <div class="cell">
          <div class="label">Record class</div>
          <div class="value">${escapeHtml(record?.certificateClass || 'Portal Completion Record')}</div>
        </div>
      </div>

      <div class="footer">Dingfelder Enterprises · Dingfelder Industrial Campus</div>
    </div>
  </div>
</body>
</html>`
}

function buildTextBody(record, options = {}) {
  const title = options.title || record?.moduleTitle || 'Training Module'
  const completedBy = options.completedBy || record?.completedBy || options.destination || 'Signed-in account'
  const completedAt = formatTrainingTimestamp(record?.completedAt || options.completedAt || new Date().toISOString())
  const scoreText = buildScoreText(record)

  return [
    'Please find the retained completion summary below.',
    '',
    `Module: ${title}`,
    `Completed by: ${completedBy}`,
    `Completed on: ${completedAt}`,
    `Score: ${scoreText}`,
    `Record class: ${record?.certificateClass || 'Portal Completion Record'}`,
    '',
    'Your certificate HTML file is attached to this email.',
  ].join('\n')
}

function buildHtmlBody(record, options = {}) {
  const title = options.title || record?.moduleTitle || 'Training Module'
  const completedBy = options.completedBy || record?.completedBy || options.destination || 'Signed-in account'
  const completedAt = formatTrainingTimestamp(record?.completedAt || options.completedAt || new Date().toISOString())
  const scoreText = buildScoreText(record)

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#050505;color:#f4f4f4;font-family:Arial, Helvetica, sans-serif;">
    <div style="max-width:760px;margin:0 auto;border:1px solid rgba(255,255,255,0.14);border-top:6px solid ${escapeHtml(options.accentColor || '#FFD100')};border-radius:18px;background:#0d0d0d;overflow:hidden;">
      <div style="padding:24px 24px 18px;">
        <div style="color:${escapeHtml(options.accentColor || '#FFD100')};font-size:12px;letter-spacing:0.24em;text-transform:uppercase;margin-bottom:10px;">A.I.R.O.N. certificate delivery</div>
        <div style="font-size:34px;line-height:1;font-weight:800;margin-bottom:10px;">${escapeHtml(title)}</div>
        <div style="color:#b5b5b5;line-height:1.7;">Your retained completion record is attached as an HTML certificate.</div>
      </div>
      <div style="padding:0 24px 24px;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;">
          <div style="border:1px solid rgba(255,255,255,0.10);border-radius:12px;background:#111;padding:14px 16px;">
            <div style="color:#8e8e8e;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:8px;">Completed by</div>
            <div style="font-size:18px;font-weight:700;">${escapeHtml(completedBy)}</div>
          </div>
          <div style="border:1px solid rgba(255,255,255,0.10);border-radius:12px;background:#111;padding:14px 16px;">
            <div style="color:#8e8e8e;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:8px;">Completed on</div>
            <div style="font-size:18px;font-weight:700;">${escapeHtml(completedAt)}</div>
          </div>
          <div style="border:1px solid rgba(255,255,255,0.10);border-radius:12px;background:#111;padding:14px 16px;">
            <div style="color:#8e8e8e;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:8px;">Score</div>
            <div style="font-size:18px;font-weight:700;color:${escapeHtml(options.accentColor || '#FFD100')};">${escapeHtml(scoreText)}</div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`
}

function normalizePayload(body) {
  const record = body?.record && typeof body.record === 'object' ? body.record : {}
  return {
    record,
    title: typeof body?.title === 'string' ? body.title.trim() : '',
    subtitle: typeof body?.subtitle === 'string' ? body.subtitle.trim() : '',
    completedAt: typeof body?.completedAt === 'string' ? body.completedAt : '',
    completedBy: typeof body?.completedBy === 'string' ? body.completedBy.trim() : '',
    accentColor: typeof body?.accentColor === 'string' ? body.accentColor.trim() : '#FFD100',
    destination: typeof body?.destination === 'string' ? body.destination.trim() : '',
  }
}

export default async (req) => {
  const currentUser = await getUser()

  if (!currentUser) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const apiKey = process.env.RESEND_API_KEY || ''
    const fromAddress = process.env.AIRON_CERTIFICATE_FROM || ''
    const configuredProvider = apiKey && fromAddress ? 'resend' : ''

    if (!configuredProvider) {
      return new Response(JSON.stringify({
        error: 'Backend certificate email is not configured yet. Set RESEND_API_KEY and AIRON_CERTIFICATE_FROM in Netlify environment variables.',
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const payload = normalizePayload(await req.json())
    const destination = payload.destination || (typeof currentUser?.email === 'string' ? currentUser.email.trim() : '')

    if (!isValidEmail(destination)) {
      return new Response(JSON.stringify({ error: 'A valid retained account email is required before a certificate can be sent.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const subject = `Certificate of Completion — ${payload.title || payload.record?.moduleTitle || 'Training Module'}`
    const attachmentHtml = buildCertificateHtml(payload.record, { ...payload, destination })
    const resendBody = {
      from: fromAddress,
      to: [destination],
      subject,
      html: buildHtmlBody(payload.record, { ...payload, destination }),
      text: buildTextBody(payload.record, { ...payload, destination }),
      attachments: [
        {
          filename: `${sanitizeFilename(payload.title || payload.record?.moduleTitle || 'training-module')}-certificate.html`,
          content: Buffer.from(attachmentHtml, 'utf8').toString('base64'),
        },
      ],
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(resendBody),
    })

    const resendPayload = await resendResponse.json().catch(() => ({}))

    if (!resendResponse.ok) {
      const providerError =
        (typeof resendPayload?.message === 'string' && resendPayload.message.trim()) ||
        (Array.isArray(resendPayload?.errors) && resendPayload.errors.length
          ? resendPayload.errors.map(item => item?.message || item?.name || 'Provider error').join('; ')
          : '') ||
        'The email provider rejected the certificate send request.'
      throw new Error(providerError)
    }

    return Response.json({
      sent: true,
      destination,
      provider: configuredProvider,
      messageId: typeof resendPayload?.id === 'string' ? resendPayload.id : '',
      message: `Certificate emailed to ${destination}.`,
    })
  } catch (error) {
    return new Response(JSON.stringify({
      error: (typeof error?.message === 'string' && error.message.trim()) || 'Unable to send your certificate email right now.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
