import { useEffect, useMemo, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { emailTrainingCertificateNetlifyIdentity, loadTrainingRecordsNetlifyIdentity } from "../auth/netlifyIdentity.js"
import { navigateToNextCard, navigateToPortal, getNextCardPath } from "../programs/portalNavigation.js"
import {
  downloadTrainingCertificateHtml,
  formatTrainingTimestamp,
  getCompletedByLabel,
} from "../utils/trainingCertificate.js"

const PANEL_BG = "#0D0D0D"
const PANEL_ALT = "#111111"
const BORDER = "rgba(255,255,255,0.10)"
const TEXT = "#FFFFFF"
const MUTED = "#A7A7A7"

function SummaryCard({ label, value, accentColor }) {
  return (
    <div
      style={{
        background: PANEL_ALT,
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        padding: "14px 15px",
      }}
    >
      <div
        style={{
          color: "#9A9A9A",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div style={{ color: accentColor || TEXT, fontSize: 18, fontWeight: 800, lineHeight: 1.4 }}>{value}</div>
    </div>
  )
}

export default function CompletionResultScreen({
  accentColor = "#FFD100",
  title,
  modulePath,
  passed = true,
  score,
  quizCorrect,
  quizTotal,
  runtimeMinutes,
  completedAt,
  recordStatus,
  statusLabel,
  subtitle,
  completedBy,
  heroContent = null,
  onRestart = null,
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const historyAnchorRef = useRef(null)
  const [historyState, setHistoryState] = useState({
    loading: false,
    records: [],
    error: "",
  })
  const [emailState, setEmailState] = useState({
    busy: false,
    message: "",
    error: "",
  })

  const canIssueCertificate = Boolean(recordStatus?.saved || recordStatus?.record?.completedAt || recordStatus?.message)
  const canEmailCertificate = Boolean(canIssueCertificate && recordStatus?.user?.portalSession)
  const effectiveCompletedAt = recordStatus?.record?.completedAt || completedAt || new Date().toISOString()
  const completedByLabel = getCompletedByLabel(recordStatus, completedBy)
  const accountEmail =
    (typeof recordStatus?.user?.email === "string" && recordStatus.user.email.trim()) ||
    ""
  const nextCardPath = useMemo(() => getNextCardPath(modulePath, location.state), [modulePath, location.state])

  useEffect(() => {
    let cancelled = false
    setHistoryState(prev => ({ ...prev, loading: true, error: "" }))

    loadTrainingRecordsNetlifyIdentity(null).then((result) => {
      if (cancelled) return
      setHistoryState({
        loading: false,
        records: Array.isArray(result?.records) ? result.records : [],
        error: result?.error || "",
      })
    })

    return () => {
      cancelled = true
    }
  }, [canIssueCertificate])

  const currentRecord = useMemo(() => ({
    moduleTitle: title,
    modulePath,
    completedAt: effectiveCompletedAt,
    completedBy: completedByLabel,
    score: typeof score === "number" ? score : quizCorrect,
    quizCorrect: typeof quizCorrect === "number" ? quizCorrect : score,
    quizTotal: typeof quizTotal === "number" ? quizTotal : undefined,
    certificateClass: "Portal Completion Record",
    passed,
  }), [completedByLabel, effectiveCompletedAt, modulePath, passed, quizCorrect, quizTotal, score, title])

  const latestRecords = useMemo(
    () => (Array.isArray(historyState.records) ? historyState.records.filter(item => item?.passed).slice(0, 6) : []),
    [historyState.records]
  )

  const scoreValue =
    typeof quizCorrect === "number" && typeof quizTotal === "number"
      ? `${quizCorrect}/${quizTotal}`
      : typeof score === "number" && typeof quizTotal === "number"
      ? `${score}/${quizTotal}`
      : typeof score === "number"
      ? `${score}`
      : "Complete"

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: TEXT,
        fontFamily: "'IBM Plex Sans', sans-serif",
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gap: 18 }}>
        <div
          style={{
            background: PANEL_BG,
            border: `1px solid ${BORDER}`,
            borderTop: `5px solid ${accentColor}`,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 18px 60px rgba(0,0,0,0.40)",
          }}
        >
          <div
            style={{
              padding: "18px 20px 14px",
              borderBottom: `1px solid ${BORDER}`,
              background: "linear-gradient(180deg, rgba(255,209,0,0.06), rgba(255,209,0,0.00))",
            }}
          >
            <div
              style={{
                color: accentColor,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {statusLabel || (passed ? "Requirement met" : "Review required")}
            </div>
            <div
              style={{
                color: TEXT,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 34,
                lineHeight: 1,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              {title}
            </div>
            <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 780 }}>
              {subtitle ||
                (passed
                  ? "The retained record has been captured. Review the completion summary, send or save the certificate, then continue to your next step."
                  : "Review your answers, then retake the module when ready.")}
            </div>
          </div>

          <div style={{ padding: 20 }}>
            {heroContent ? <div style={{ marginBottom: 18 }}>{heroContent}</div> : null}

            {recordStatus?.busy ? (
              <div
                style={{
                  marginBottom: 16,
                  padding: "12px 14px",
                  borderRadius: 10,
                  background: "rgba(255,209,0,0.10)",
                  border: "1px solid rgba(255,209,0,0.24)",
                  color: "#FFE98D",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                Saving your retained A.I.R.O.N. record…
              </div>
            ) : null}

            {recordStatus?.message ? (
              <div
                style={{
                  marginBottom: 16,
                  padding: "12px 14px",
                  borderRadius: 10,
                  background: "rgba(34,204,102,0.10)",
                  border: "1px solid rgba(34,204,102,0.24)",
                  color: "#9AF0B9",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {recordStatus.message}
              </div>
            ) : null}

            {recordStatus?.error ? (
              <div
                style={{
                  marginBottom: 16,
                  padding: "12px 14px",
                  borderRadius: 10,
                  background: "rgba(255,107,0,0.10)",
                  border: "1px solid rgba(255,107,0,0.24)",
                  color: "#FFB48F",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {recordStatus.error}
              </div>
            ) : null}


{emailState.message ? (
  <div
    style={{
      marginBottom: 16,
      padding: "12px 14px",
      borderRadius: 10,
      background: "rgba(34,204,102,0.10)",
      border: "1px solid rgba(34,204,102,0.24)",
      color: "#9AF0B9",
      fontSize: 13,
      lineHeight: 1.6,
    }}
  >
    {emailState.message}
  </div>
) : null}

{emailState.error ? (
  <div
    style={{
      marginBottom: 16,
      padding: "12px 14px",
      borderRadius: 10,
      background: "rgba(255,107,0,0.10)",
      border: "1px solid rgba(255,107,0,0.24)",
      color: "#FFB48F",
      fontSize: 13,
      lineHeight: 1.6,
    }}
  >
    {emailState.error}
  </div>
) : null}

            <div
              style={{
                display: "grid",
                gap: 14,
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                marginBottom: 18,
              }}
            >
              <SummaryCard label="Completed" value={formatTrainingTimestamp(effectiveCompletedAt)} accentColor={TEXT} />
              <SummaryCard label="Completed by" value={completedByLabel} accentColor={TEXT} />
              <SummaryCard label="Score" value={scoreValue} accentColor={accentColor} />
              <SummaryCard label="Record path" value={canIssueCertificate ? "Retained" : "Guest / unsaved"} accentColor={canIssueCertificate ? "#22CC66" : "#FFB27A"} />
              {typeof runtimeMinutes === "number" ? (
                <SummaryCard label="Runtime" value={`~${runtimeMinutes} min`} accentColor={TEXT} />
              ) : null}
              <SummaryCard label="Certificate" value={canIssueCertificate ? "Ready" : "Available after saved record"} accentColor={canIssueCertificate ? "#22CC66" : "#FFB27A"} />
            </div>

            {canIssueCertificate ? (
              <div
                style={{
                  marginBottom: 14,
                  color: "#8F8F8F",
                  fontSize: 12,
                  lineHeight: 1.6,
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: 0.6,
                }}
              >
                Certificate email delivery uses the retained account inbox{accountEmail ? `: ${accountEmail}` : "."}
              </div>
            ) : null}

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  navigateToPortal(navigate, location.state)
                }}
                style={{
                  background: accentColor,
                  color: "#0b0b0b",
                  border: "none",
                  borderRadius: 10,
                  padding: "12px 16px",
                  fontWeight: 800,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: 1,
                  cursor: "pointer",
                }}
              >
                Return to Portal
              </button>

              <button
                onClick={() => navigateToNextCard(navigate, modulePath, location.state)}
                disabled={!nextCardPath}
                style={{
                  background: nextCardPath ? "#121212" : "#171717",
                  color: nextCardPath ? "#fff" : "#555",
                  border: "1px solid #333",
                  borderRadius: 10,
                  padding: "12px 16px",
                  cursor: nextCardPath ? "pointer" : "not-allowed",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: 1,
                }}
              >
                Next Card
              </button>

              {passed && (
                <>
                  <button
                    onClick={() => {
                      downloadTrainingCertificateHtml(currentRecord, {
                        accentColor,
                        title,
                        completedAt: effectiveCompletedAt,
                        completedBy: completedByLabel,
                        filenameBase: title,
                      })
                    }}
                    disabled={!canIssueCertificate}
                    style={{
                      background: "transparent",
                      color: canIssueCertificate ? "#fff" : "#666",
                      border: `1px solid ${canIssueCertificate ? "#333" : "#222"}`,
                      borderRadius: 10,
                      padding: "12px 16px",
                      cursor: canIssueCertificate ? "pointer" : "not-allowed",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      letterSpacing: 1,
                    }}
                  >
                    Save Certificate
                  </button>

                  {canEmailCertificate ? (
                    <button
                      onClick={async () => {
                        if (!canEmailCertificate || emailState.busy) return
                        setEmailState({ busy: true, message: "", error: "" })
                        const result = await emailTrainingCertificateNetlifyIdentity(recordStatus?.user || null, {
                          record: currentRecord,
                          title,
                          subtitle,
                          completedAt: effectiveCompletedAt,
                          completedBy: completedByLabel,
                          accentColor,
                        })
                        setEmailState({
                          busy: false,
                          message: result?.message || "",
                          error: result?.error || "",
                        })
                      }}
                      disabled={!canEmailCertificate || emailState.busy}
                      style={{
                        background: "transparent",
                        color: canEmailCertificate ? "#fff" : "#666",
                        border: `1px solid ${canEmailCertificate ? "#333" : "#222"}`,
                        borderRadius: 10,
                        padding: "12px 16px",
                        cursor: !canEmailCertificate || emailState.busy ? "not-allowed" : "pointer",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        letterSpacing: 1,
                        opacity: emailState.busy ? 0.65 : 1,
                      }}
                    >
                      {emailState.busy ? "Emailing..." : "Email Certificate"}
                    </button>
                  ) : null}

                  <button
                    onClick={() => historyAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    style={{
                      background: "transparent",
                      color: "#fff",
                      border: "1px solid #333",
                      borderRadius: 10,
                      padding: "12px 16px",
                      cursor: "pointer",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      letterSpacing: 1,
                    }}
                  >
                    View Completed History
                  </button>
                </>
              )}

              {!passed && typeof onRestart === "function" ? (
                <button
                  onClick={onRestart}
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: 10,
                    padding: "12px 16px",
                    cursor: "pointer",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: 1,
                  }}
                >
                  Retake Module
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div
          ref={historyAnchorRef}
          style={{
            background: PANEL_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "16px 20px 14px",
              borderBottom: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  color: TEXT,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 28,
                  lineHeight: 1,
                  fontWeight: 800,
                  marginBottom: 6,
                }}
              >
                Completion history
              </div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>
                Latest retained completions saved under your A.I.R.O.N. account.
              </div>
            </div>

            <button
              onClick={async () => {
                setHistoryState(prev => ({ ...prev, loading: true, error: "" }))
                const result = await loadTrainingRecordsNetlifyIdentity(null)
                setHistoryState({
                  loading: false,
                  records: Array.isArray(result?.records) ? result.records : [],
                  error: result?.error || "",
                })
              }}
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid #333",
                borderRadius: 10,
                padding: "10px 14px",
                cursor: "pointer",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: 1,
              }}
            >
              Refresh Records
            </button>
          </div>

          {historyState.error ? (
            <div style={{ padding: 16, color: "#FFB48F", fontSize: 13, lineHeight: 1.6 }}>{historyState.error}</div>
          ) : null}

          {historyState.loading ? (
            <div style={{ padding: 16, color: MUTED, fontSize: 13 }}>Loading retained completion history…</div>
          ) : latestRecords.length === 0 ? (
            <div style={{ padding: 16, color: MUTED, fontSize: 13, lineHeight: 1.6 }}>
              Sign in and complete setup once to retain completion history, certificates, and future scores under the same account.
            </div>
          ) : (
            <div style={{ display: "grid" }}>
              {latestRecords.map((record) => (
                <div
                  key={record.attemptId || `${record.modulePath}:${record.completedAt}`}
                  style={{
                    display: "grid",
                    gap: 10,
                    gridTemplateColumns: "minmax(0, 1.5fr) repeat(4, minmax(110px, 1fr))",
                    padding: "14px 16px",
                    borderTop: `1px solid ${BORDER}`,
                    alignItems: "start",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: TEXT, fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{record.moduleTitle || record.modulePath}</div>
                    <div style={{ color: "#8C8C8C", fontSize: 13 }}>{record.modulePath || "Portal module"}</div>
                  </div>
                  <div>
                    <div style={{ color: "#8C8C8C", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.3, marginBottom: 6 }}>Completed</div>
                    <div style={{ color: TEXT, fontSize: 13 }}>{formatTrainingTimestamp(record.completedAt)}</div>
                  </div>
                  <div>
                    <div style={{ color: "#8C8C8C", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.3, marginBottom: 6 }}>Score</div>
                    <div style={{ color: TEXT, fontSize: 13 }}>
                      {typeof record.quizCorrect === "number" && typeof record.quizTotal === "number"
                        ? `${record.quizCorrect}/${record.quizTotal}`
                        : typeof record.score === "number"
                        ? record.score
                        : "Complete"}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#8C8C8C", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.3, marginBottom: 6 }}>Status</div>
                    <div style={{ color: record.passed ? "#7DF0A4" : "#FFB48F", fontSize: 13, fontWeight: 700 }}>
                      {record.passed ? "Passed" : "Review"}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#8C8C8C", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.3, marginBottom: 6 }}>Certificate</div>
                    <div style={{ color: TEXT, fontSize: 13 }}>
                      {record.certificateEligible ? record.certificateClass || "Ready" : "Not available"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}