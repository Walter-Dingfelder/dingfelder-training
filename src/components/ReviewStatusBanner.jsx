const TONE_BORDER = {
  success: "rgba(34,204,102,0.45)",
  warning: "rgba(255,209,0,0.45)",
  danger: "rgba(255,77,77,0.55)",
};

const TONE_BG = {
  success: "rgba(34,204,102,0.08)",
  warning: "rgba(255,209,0,0.08)",
  danger: "rgba(255,77,77,0.08)",
};

const TONE_TEXT = {
  success: "#8FF0B3",
  warning: "#FFD100",
  danger: "#FF7A7A",
};

function SummaryCell({ label, value, accent = "#fff" }) {
  if (!value) return null;
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.22)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "10px 12px",
      }}
    >
      <div
        style={{
          color: "#8A8A8A",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          letterSpacing: 1,
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ color: accent, lineHeight: 1.4, fontSize: 14, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

export default function ReviewStatusBanner({ reviewState, accentColor = "#22CC66", title = "Review mode active" }) {
  if (!reviewState?.reviewMode || !reviewState?.completedAt) return null;

  const tone = reviewState.statusTone || "success";
  const statusColor = TONE_TEXT[tone] || accentColor;

  return (
    <div
      style={{
        marginBottom: 18,
        borderRadius: 10,
        border: `1px solid ${TONE_BORDER[tone] || TONE_BORDER.success}`,
        background: TONE_BG[tone] || TONE_BG.success,
        padding: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <div>
          <div
            style={{
              color: accentColor,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            requirement already satisfied
          </div>
          <div
            style={{
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            padding: "6px 10px",
            borderRadius: 999,
            border: `1px solid ${TONE_BORDER[tone] || TONE_BORDER.success}`,
            color: statusColor,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {reviewState.statusLabel}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 10,
        }}
      >
        <SummaryCell label="Completed" value={reviewState.completedLabel} accent="#fff" />
        <SummaryCell label="Score" value={reviewState.lastScoreLabel} accent={accentColor} />
        <SummaryCell label="Review frequency" value={reviewState.frequencyLabel} accent="#fff" />
        <SummaryCell label="Next due" value={reviewState.nextReviewDueLabel || "No due date"} accent={statusColor} />
      </div>
    </div>
  );
}
