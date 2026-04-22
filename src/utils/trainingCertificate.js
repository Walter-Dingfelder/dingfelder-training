function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function formatTrainingTimestamp(value) {
  const date = value ? new Date(value) : new Date()
  if (Number.isNaN(date.getTime())) return ''
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`
}

export function getCompletedByLabel(recordStatus, fallbackLabel = '') {
  const direct = typeof fallbackLabel === 'string' ? fallbackLabel.trim() : ''
  if (direct) return direct

  const email =
    (typeof recordStatus?.user?.email === 'string' && recordStatus.user.email.trim()) ||
    (typeof recordStatus?.record?.completedBy === 'string' && recordStatus.record.completedBy.trim()) ||
    ''

  if (!email) return 'Signed-in account'
  return email
}


function getCertificateFooterText(record, options = {}) {
  const recordClass = String(record?.certificateClass || options.certificateClass || '').trim().toLowerCase()
  if (recordClass.includes('public') || recordClass.includes('local')) {
    return 'This certificate reflects a local completion copy generated from the current browser session. It may not be retained under a signed-in A.I.R.O.N. account unless the training was launched through a portal-backed or retained-account path.'
  }
  if (recordClass.includes('retained')) {
    return 'This certificate reflects a retained training record saved under your A.I.R.O.N. account. Additional hands-on qualification, authorization, or employer verification may still be required based on the training topic and role.'
  }
  return 'This certificate reflects a portal-backed training completion record. Additional hands-on qualification, authorization, or employer verification may still be required based on the training topic and role.'
}

export function buildTrainingCertificateHtml(record, options = {}) {
  const accentColor = options.accentColor || '#FFD100'
  const title = options.title || record?.moduleTitle || 'Training Completion Certificate'
  const subtitle = options.subtitle || 'Dingfelder Industrial Campus / A.I.R.O.N.'
  const completedBy = getCompletedByLabel({ user: { email: options.completedBy || '' }, record }, options.completedBy)
  const completedAt = formatTrainingTimestamp(record?.completedAt || options.completedAt || new Date().toISOString())
  const scoreText =
    typeof record?.quizCorrect === 'number' && typeof record?.quizTotal === 'number'
      ? `${record.quizCorrect}/${record.quizTotal}`
      : typeof record?.score === 'number'
      ? String(record.score)
      : 'Complete'

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body { margin:0; background:#050505; color:#f4f4f4; font-family:Arial, Helvetica, sans-serif; }
  .wrap { max-width:900px; margin:0 auto; padding:32px 24px 48px; }
  .cert {
    border:1px solid rgba(255,255,255,0.14);
    border-top:6px solid ${accentColor};
    border-radius:18px;
    background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    padding:32px;
    box-shadow:0 18px 60px rgba(0,0,0,0.45);
  }
  .eyebrow { color:${accentColor}; letter-spacing:0.28em; font-size:12px; text-transform:uppercase; font-weight:700; }
  h1 { margin:10px 0 6px; font-size:42px; line-height:1; }
  .sub { color:#bdbdbd; font-size:16px; line-height:1.6; margin-bottom:20px; }
  .grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:14px; margin:24px 0; }
  .card { border:1px solid rgba(255,255,255,0.10); border-radius:12px; background:#0b0b0b; padding:14px 16px; }
  .label { color:#9b9b9b; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:6px; }
  .value { color:#fff; font-size:18px; font-weight:700; line-height:1.4; }
  .foot { margin-top:26px; color:#9b9b9b; font-size:13px; line-height:1.7; }
  @media print {
    body { background:#fff; color:#000; }
    .wrap { max-width:none; padding:0; }
    .cert { box-shadow:none; }
  }
</style>
</head>
<body>
  <div class="wrap">
    <div class="cert">
      <div class="eyebrow">Certificate of Completion</div>
      <h1>${escapeHtml(title)}</h1>
      <div class="sub">${escapeHtml(subtitle)}</div>

      <div class="grid">
        <div class="card">
          <div class="label">Completed By</div>
          <div class="value">${escapeHtml(completedBy || 'Recorded account')}</div>
        </div>
        <div class="card">
          <div class="label">Completed On</div>
          <div class="value">${escapeHtml(completedAt)}</div>
        </div>
        <div class="card">
          <div class="label">Score</div>
          <div class="value">${escapeHtml(scoreText)}</div>
        </div>
        <div class="card">
          <div class="label">Record Class</div>
          <div class="value">${escapeHtml(record?.certificateClass || 'Portal Completion Record')}</div>
        </div>
      </div>

      <div class="foot">
        ${escapeHtml(getCertificateFooterText(record, options))}
      </div>
    </div>
  </div>
</body>
</html>`
}


export function openTrainingCertificatePrintView(record, options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false
  const html = buildTrainingCertificateHtml(record, options)
  const popup = window.open('', '_blank', 'noopener,noreferrer,width=980,height=760')
  if (!popup) {
    return downloadTrainingCertificateHtml(record, options)
  }
  popup.document.open()
  popup.document.write(html + `<script>window.addEventListener('load', function () { setTimeout(function () { window.print(); }, 180); });<\/script>`)
  popup.document.close()
  return true
}

export function downloadTrainingCertificateHtml(record, options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false
  const html = buildTrainingCertificateHtml(record, options)
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  const safeBase =
    (options.filenameBase || record?.moduleTitle || 'dingfelder-certificate')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'dingfelder-certificate'
  anchor.href = url
  anchor.download = `${safeBase}.html`
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.URL.revokeObjectURL(url)
  return true
}

export function openTrainingCertificateEmail(record, options = {}) {
  if (typeof window === 'undefined') return false
  const recipient = typeof options.email === 'string' ? options.email.trim() : ''
  const subject = encodeURIComponent(`Certificate of Completion — ${options.title || record?.moduleTitle || 'Training Module'}`)
  const body = encodeURIComponent(
    [
      `Please find the retained completion summary below:`,
      ``,
      `Module: ${options.title || record?.moduleTitle || 'Training Module'}`,
      `Completed by: ${getCompletedByLabel({ user: { email: options.completedBy || '' }, record }, options.completedBy)}`,
      `Completed on: ${formatTrainingTimestamp(record?.completedAt || options.completedAt || new Date().toISOString())}`,
      `Score: ${
        typeof record?.quizCorrect === 'number' && typeof record?.quizTotal === 'number'
          ? `${record.quizCorrect}/${record.quizTotal}`
          : typeof record?.score === 'number'
          ? String(record.score)
          : 'Complete'
      }`,
      `Record class: ${record?.certificateClass || 'Portal Completion Record'}`,
      ``,
      `The certificate file can also be downloaded directly from the training portal.`,
    ].join('\n')
  )
  window.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${subject}&body=${body}`
  return true
}