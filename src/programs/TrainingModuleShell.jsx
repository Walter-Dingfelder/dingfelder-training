
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PAGE_BG = "#080808";
const PANEL = "#0f0f0f";
const PANEL_ALT = "#111111";
const BORDER = "#1f1f1f";
const TEXT = "#E9E9E9";
const MUTED = "#8A8A8A";
const DIM = "#555";
const MONO = "'IBM Plex Mono', monospace";
const CONDENSED = "'Barlow Condensed', sans-serif";
const SANS = "'IBM Plex Sans', sans-serif";

function DetailList({ items, color }) {
  if (!items?.length) return null;
  return (
    <div style={{ display: "grid", gap: 8, marginTop: 14 }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            background: "#090909",
            border: `1px solid ${color}22`,
            borderLeft: `3px solid ${color}`,
            borderRadius: 6,
            padding: "10px 12px",
            color: "#C7C7C7",
            lineHeight: 1.5,
            fontSize: 14,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function Callout({ callout, color }) {
  if (!callout) return null;
  return (
    <div
      style={{
        marginTop: 16,
        border: `1px solid ${callout.color || color}55`,
        background: `${callout.color || color}12`,
        borderRadius: 8,
        padding: 14,
      }}
    >
      <div
        style={{
          color: callout.color || color,
          fontFamily: CONDENSED,
          fontSize: 13,
          letterSpacing: 2,
          fontWeight: 800,
          marginBottom: 6,
        }}
      >
        {callout.label}
      </div>
      <div style={{ color: TEXT, lineHeight: 1.55 }}>{callout.text}</div>
    </div>
  );
}

function QuizCard({ question, qIndex, answers, setAnswers, color }) {
  const selected = answers[qIndex];
  return (
    <div
      style={{
        background: PANEL,
        border: `1px solid ${BORDER}`,
        borderTop: `3px solid ${color}`,
        borderRadius: 8,
        padding: 18,
      }}
    >
      <div
        style={{
          color: color,
          fontFamily: CONDENSED,
          letterSpacing: 2,
          fontSize: 12,
          marginBottom: 8,
        }}
      >
        CHECKPOINT {qIndex + 1}
      </div>
      <div
        style={{
          color: TEXT,
          fontWeight: 700,
          marginBottom: 14,
          lineHeight: 1.45,
        }}
      >
        {question.q}
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {question.options.map((option, idx) => {
          const active = selected === idx;
          return (
            <button
              key={idx}
              onClick={() => setAnswers((prev) => ({ ...prev, [qIndex]: idx }))}
              style={{
                textAlign: "left",
                background: active ? `${color}18` : "#090909",
                color: active ? TEXT : "#B8B8B8",
                border: `1px solid ${active ? color : "#222"}`,
                borderRadius: 8,
                padding: "12px 14px",
                cursor: "pointer",
                fontFamily: SANS,
                fontSize: 14,
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function TrainingModuleShell({ module }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const slides = module.slides || [];
  const progress = Math.round(((slideIndex + 1) / slides.length) * 100);
  const allAnswered = module.quiz.every((_, idx) => answers[idx] !== undefined);
  const score = useMemo(
    () => module.quiz.reduce((sum, q, idx) => sum + (answers[idx] === q.answer ? 1 : 0), 0),
    [answers, module.quiz]
  );

  if (submitted) {
    const passed = score >= Math.ceil(module.quiz.length * 0.7);
    return (
      <div
        style={{
          minHeight: "100vh",
          background: PAGE_BG,
          color: TEXT,
          fontFamily: SANS,
          padding: 24,
          boxSizing: "border-box",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div
            style={{
              background: PANEL,
              border: `1px solid ${BORDER}`,
              borderTop: `4px solid ${module.color}`,
              borderRadius: 10,
              padding: 24,
            }}
          >
            <div
              style={{
                color: passed ? "#22CC66" : "#FF6B00",
                fontFamily: CONDENSED,
                fontSize: 14,
                letterSpacing: 3,
                marginBottom: 10,
              }}
            >
              {passed ? "MODULE COMPLETE" : "REVIEW REQUIRED"}
            </div>
            <h1
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: CONDENSED,
                fontSize: 42,
                lineHeight: 1,
              }}
            >
              {module.label}
            </h1>
            <p style={{ color: "#BEBEBE", lineHeight: 1.6, marginTop: 14 }}>
              {passed
                ? "Training record generated. The portal can now return to the catalog."
                : "The module is still available. Review your answers and retake when ready."}
            </p>

            <div
              style={{
                marginTop: 18,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 12,
              }}
            >
              <div style={{ background: PANEL_ALT, border: "1px solid #222", borderRadius: 8, padding: 14 }}>
                <div style={{ color: DIM, fontSize: 12, fontFamily: MONO }}>SCORE</div>
                <div style={{ color: "#fff", fontSize: 24, fontWeight: 700 }}>
                  {score} / {module.quiz.length}
                </div>
              </div>
              <div style={{ background: PANEL_ALT, border: "1px solid #222", borderRadius: 8, padding: 14 }}>
                <div style={{ color: DIM, fontSize: 12, fontFamily: MONO }}>RUNTIME</div>
                <div style={{ color: "#fff", fontSize: 24, fontWeight: 700 }}>~{module.minutes} MIN</div>
              </div>
              <div style={{ background: PANEL_ALT, border: "1px solid #222", borderRadius: 8, padding: 14 }}>
                <div style={{ color: DIM, fontSize: 12, fontFamily: MONO }}>DATE</div>
                <div style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
              <Link
                to="/"
                style={{
                  background: module.color,
                  color: "#0b0b0b",
                  textDecoration: "none",
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontWeight: 800,
                  fontFamily: CONDENSED,
                  letterSpacing: 1,
                }}
              >
                RETURN TO PORTAL
              </Link>
              {!passed && (
                <button
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                    setSlideIndex(0);
                  }}
                  style={{
                    background: "#121212",
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: 8,
                    padding: "12px 16px",
                    cursor: "pointer",
                    fontFamily: CONDENSED,
                    letterSpacing: 1,
                  }}
                >
                  RETAKE MODULE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slideIndex >= slides.length) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: PAGE_BG,
          color: TEXT,
          fontFamily: SANS,
          padding: 24,
          boxSizing: "border-box",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ marginBottom: 18, display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <Link to="/" style={{ color: "#888", textDecoration: "none", fontFamily: MONO, fontSize: 12 }}>
              ← BACK TO PORTAL
            </Link>
            <div style={{ color: module.color, fontFamily: MONO, fontSize: 12 }}>
              KNOWLEDGE CHECK — {module.quiz.length} QUESTIONS
            </div>
          </div>
          <div
            style={{
              background: PANEL,
              border: `1px solid ${BORDER}`,
              borderTop: `4px solid ${module.color}`,
              borderRadius: 10,
              padding: 24,
            }}
          >
            <div style={{ color: module.color, fontFamily: CONDENSED, fontSize: 14, letterSpacing: 3 }}>
              FINAL CHECK
            </div>
            <h1 style={{ color: "#fff", margin: "8px 0 10px", fontFamily: CONDENSED, fontSize: 40 }}>
              {module.label}
            </h1>
            <p style={{ color: "#BDBDBD", lineHeight: 1.6, marginBottom: 20 }}>
              Answer each checkpoint to complete the module record.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {module.quiz.map((question, idx) => (
                <QuizCard
                  key={idx}
                  question={question}
                  qIndex={idx}
                  answers={answers}
                  setAnswers={setAnswers}
                  color={module.color}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
              <button
                onClick={() => setSlideIndex(slides.length - 1)}
                style={{
                  background: "#121212",
                  color: "#fff",
                  border: "1px solid #333",
                  borderRadius: 8,
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontFamily: CONDENSED,
                  letterSpacing: 1,
                }}
              >
                REVIEW CONTENT
              </button>
              <button
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
                style={{
                  background: allAnswered ? module.color : "#252525",
                  color: allAnswered ? "#0b0b0b" : "#777",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 16px",
                  cursor: allAnswered ? "pointer" : "not-allowed",
                  fontFamily: CONDENSED,
                  letterSpacing: 1,
                  fontWeight: 800,
                }}
              >
                COMPLETE MODULE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const slide = slides[slideIndex];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: PAGE_BG,
        color: TEXT,
        fontFamily: SANS,
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          <Link to="/" style={{ color: "#888", textDecoration: "none", fontFamily: MONO, fontSize: 12 }}>
            ← BACK TO PORTAL
          </Link>
          <div style={{ color: module.color, fontFamily: MONO, fontSize: 12 }}>
            SLIDE {slideIndex + 1} / {slides.length} · {progress}% COMPLETE
          </div>
        </div>

        <div
          style={{
            height: 8,
            background: "#121212",
            borderRadius: 999,
            overflow: "hidden",
            marginBottom: 18,
            border: "1px solid #1d1d1d",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: module.color,
              transition: "width 0.2s ease",
            }}
          />
        </div>

        <div
          style={{
            background: PANEL,
            border: `1px solid ${BORDER}`,
            borderTop: `4px solid ${module.color}`,
            borderRadius: 10,
            padding: 24,
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div
              style={{
                width: 56,
                height: 56,
                background: `${module.color}18`,
                border: `1px solid ${module.color}33`,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                flexShrink: 0,
              }}
            >
              {module.icon}
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ color: module.color, fontFamily: CONDENSED, fontSize: 14, letterSpacing: 3 }}>
                {module.short}
              </div>
              <h1 style={{ color: "#fff", margin: "6px 0 8px", fontFamily: CONDENSED, fontSize: 42, lineHeight: 1 }}>
                {slide.heading}
              </h1>
              <div style={{ color: "#B8B8B8", fontSize: 16, lineHeight: 1.5 }}>
                {slide.sub}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            <div style={{ background: PANEL_ALT, border: "1px solid #222", borderRadius: 8, padding: 14 }}>
              <div style={{ color: DIM, fontSize: 12, fontFamily: MONO }}>REGULATION</div>
              <div style={{ color: "#fff", marginTop: 4, lineHeight: 1.45 }}>{module.regulation}</div>
            </div>
            <div style={{ background: PANEL_ALT, border: "1px solid #222", borderRadius: 8, padding: 14 }}>
              <div style={{ color: DIM, fontSize: 12, fontFamily: MONO }}>AUDIENCE</div>
              <div style={{ color: "#fff", marginTop: 4, lineHeight: 1.45 }}>{module.audience}</div>
            </div>
            <div style={{ background: PANEL_ALT, border: "1px solid #222", borderRadius: 8, padding: 14 }}>
              <div style={{ color: DIM, fontSize: 12, fontFamily: MONO }}>EST. TIME</div>
              <div style={{ color: "#fff", marginTop: 4, lineHeight: 1.45 }}>~{module.minutes} min</div>
            </div>
          </div>

          <div style={{ marginTop: 20, color: "#D3D3D3", lineHeight: 1.72, fontSize: 15 }}>
            {slide.body}
          </div>

          <DetailList items={slide.list} color={module.color} />
          <Callout callout={slide.callout} color={module.color} />

          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <button
              onClick={() => setSlideIndex((x) => Math.max(0, x - 1))}
              disabled={slideIndex === 0}
              style={{
                background: slideIndex === 0 ? "#171717" : "#121212",
                color: slideIndex === 0 ? "#444" : "#fff",
                border: "1px solid #333",
                borderRadius: 8,
                padding: "12px 16px",
                cursor: slideIndex === 0 ? "not-allowed" : "pointer",
                fontFamily: CONDENSED,
                letterSpacing: 1,
              }}
            >
              PREVIOUS
            </button>
            <button
              onClick={() => setSlideIndex((x) => x + 1)}
              style={{
                background: module.color,
                color: "#0b0b0b",
                border: "none",
                borderRadius: 8,
                padding: "12px 16px",
                cursor: "pointer",
                fontFamily: CONDENSED,
                letterSpacing: 1,
                fontWeight: 800,
              }}
            >
              {slideIndex === slides.length - 1 ? "GO TO QUIZ" : "NEXT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
