
import { useEffect, useMemo, useRef, useState } from "react";
import { persistTrainingRecordNetlifyIdentity } from "../auth/netlifyIdentity.js";
import { useLocation, useNavigate } from "react-router-dom";

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


function forceScrollTop() {
  if (typeof window === "undefined") return;
  const apply = () => {
    window.scrollTo(0, 0);
    const root = document.scrollingElement || document.documentElement || document.body;
    if (root) root.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  };
  apply();
  requestAnimationFrame(apply);
  setTimeout(apply, 0);
}


const PORTAL_CONTEXT_KEY = "airon.portalContext";

function readStoredPortalContext() {
  if (typeof window === "undefined") {
    return { portalSearch: "", seriesPaths: [] };
  }
  try {
    const raw = window.sessionStorage.getItem(PORTAL_CONTEXT_KEY);
    if (!raw) {
      return { portalSearch: "", seriesPaths: [] };
    }
    const parsed = JSON.parse(raw);
    return {
      portalSearch: typeof parsed?.portalSearch === "string" ? parsed.portalSearch : "",
      seriesPaths: Array.isArray(parsed?.seriesPaths) ? parsed.seriesPaths : [],
    };
  } catch {
    return { portalSearch: "", seriesPaths: [] };
  }
}

function writeStoredPortalContext(portalSearch, seriesPaths) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(
      PORTAL_CONTEXT_KEY,
      JSON.stringify({
        portalSearch: typeof portalSearch === "string" ? portalSearch : "",
        seriesPaths: Array.isArray(seriesPaths) ? seriesPaths : [],
      })
    );
  } catch {}
}

function getPortalContext(locationState) {
  const stored = readStoredPortalContext();
  const portalSearch =
    locationState && typeof locationState.portalSearch === "string"
      ? locationState.portalSearch
      : stored.portalSearch;

  const seriesPaths =
    Array.isArray(locationState?.seriesPaths) && locationState.seriesPaths.length > 0
      ? locationState.seriesPaths
      : stored.seriesPaths;

  return { portalSearch, seriesPaths };
}




function labelizeCategoryKey(categoryKey) {
  if (!categoryKey || categoryKey === "all") return "General"
  return categoryKey
    .split("-")
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : part))
    .join(" ")
}

function normalizeQuizItem(item) {
  const prompt =
    typeof item?.q === "string" && item.q.trim().length
      ? item.q
      : typeof item?.question === "string" && item.question.trim().length
      ? item.question
      : "";

  const options = Array.isArray(item?.options)
    ? item.options
    : Array.isArray(item?.choices)
    ? item.choices
    : [];

  return {
    ...item,
    q: prompt,
    options,
    answer: typeof item?.answer === "number" ? item.answer : null,
  };
}

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
        {question.q || ""}
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {(question.options || []).map((option, idx) => {
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
  const location = useLocation();
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [recordStatus, setRecordStatus] = useState({ busy: false, message: "", error: "" });
  const recordAttemptRef = useRef("");

  const portalContext = useMemo(() => getPortalContext(location.state), [location.state]);
  const portalSearch = portalContext.portalSearch;
  const seriesPaths = portalContext.seriesPaths;
  const currentSeriesIndex = seriesPaths.indexOf(module.path);
  const nextModulePath = currentSeriesIndex >= 0 ? seriesPaths[currentSeriesIndex + 1] : null;
  const activeCategory = typeof location.state?.activeCategory === "string" ? location.state.activeCategory : "";

  const returnToPortal = () => {
    writeStoredPortalContext(portalSearch, seriesPaths);
    forceScrollTop();
    navigate({ pathname: "/", search: portalSearch || "" });
  };

  const goToNextModule = () => {
    if (!nextModulePath) return;
    writeStoredPortalContext(portalSearch, seriesPaths);
    forceScrollTop();
    navigate(nextModulePath, {
      state: {
        portalSearch,
        seriesPaths,
        activeCategory,
      },
    });
  };

  useEffect(() => {
    writeStoredPortalContext(portalSearch, seriesPaths);
  }, [portalSearch, seriesPaths]);

  useEffect(() => {
    forceScrollTop();
  }, [slideIndex, quizIndex, submitted]);

  useEffect(() => {
    if (!submitted) {
      recordAttemptRef.current = "";
      setRecordStatus({ busy: false, message: "", error: "" });
      return;
    }

    if (recordAttemptRef.current) return;

    const attemptId = `${module.path || module.label}:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    recordAttemptRef.current = attemptId;

    let cancelled = false;
    const passedNow = score >= Math.ceil(quiz.length * 0.7);

    setRecordStatus({ busy: true, message: "", error: "" });

    persistTrainingRecordNetlifyIdentity(null, {
      attemptId,
      modulePath: module.path || "",
      moduleTitle: module.label || "",
      categoryKey: activeCategory || "",
      categoryLabel: labelizeCategoryKey(activeCategory),
      score,
      quizCorrect: score,
      quizTotal: quiz.length,
      passed: passedNow,
      completedAt: new Date().toISOString(),
      runtimeMinutes: Number(module.minutes) || null,
      certificateClass: "Portal Completion Record",
      certificateEligible: Boolean(passedNow),
      source: "shared-shell",
    }).then((result) => {
      if (cancelled) return;
      if (result?.skipped) {
        setRecordStatus({ busy: false, message: "", error: "" });
      } else if (result?.error) {
        setRecordStatus({ busy: false, message: "", error: result.error });
      } else {
        setRecordStatus({
          busy: false,
          message: result?.message || "Retained training record saved to your A.I.R.O.N. account.",
          error: "",
        });
      }
    });

    return () => {
      cancelled = true
    };
  }, [submitted, module.path, module.label, module.minutes, activeCategory, score, quiz.length]);

  const slides = module.slides || [];
  const quiz = useMemo(() => (module.quiz || []).map(normalizeQuizItem), [module.quiz]);
  const progress = Math.round(((slideIndex + 1) / slides.length) * 100);
  const allAnswered = quiz.every((_, idx) => answers[idx] !== undefined);
  const score = useMemo(
    () => quiz.reduce((sum, q, idx) => sum + (answers[idx] === q.answer ? 1 : 0), 0),
    [answers, quiz]
  );
  const currentQuestion = quiz[quizIndex];
  const currentAnswer = answers[quizIndex];
  const isLastQuestion = quizIndex >= quiz.length - 1;

  if (submitted) {
    const passed = score >= Math.ceil(quiz.length * 0.7);
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

            {recordStatus.message ? (
              <div
                style={{
                  marginTop: 14,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(34,204,102,0.35)",
                  background: "rgba(34,204,102,0.10)",
                  color: "#8CF0B1",
                  lineHeight: 1.6,
                }}
              >
                {recordStatus.message}
              </div>
            ) : null}

            {recordStatus.error ? (
              <div
                style={{
                  marginTop: 14,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,107,0,0.35)",
                  background: "rgba(255,107,0,0.10)",
                  color: "#FFB27A",
                  lineHeight: 1.6,
                }}
              >
                {recordStatus.error}
              </div>
            ) : null}

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
                  {score} / {quiz.length}
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
              <button
                onClick={returnToPortal}
                style={{
                  background: module.color,
                  color: "#0b0b0b",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontWeight: 800,
                  fontFamily: CONDENSED,
                  letterSpacing: 1,
                  cursor: "pointer",
                }}
              >
                Return to Portal
              </button>
              <button
                onClick={goToNextModule}
                disabled={!nextModulePath}
                style={{
                  background: nextModulePath ? "#121212" : "#171717",
                  color: nextModulePath ? "#fff" : "#555",
                  border: "1px solid #333",
                  borderRadius: 8,
                  padding: "12px 16px",
                  cursor: nextModulePath ? "pointer" : "not-allowed",
                  fontFamily: CONDENSED,
                  letterSpacing: 1,
                }}
              >
                Next Card
              </button>
              {!passed && (
                <button
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                    setSlideIndex(0);
                    setQuizIndex(0);
                    forceScrollTop();
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
            <button
              onClick={returnToPortal}
              style={{
                color: "#888",
                background: "transparent",
                border: "none",
                padding: 0,
                textDecoration: "none",
                fontFamily: MONO,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              ← BACK TO PORTAL
            </button>
            <div style={{ color: module.color, fontFamily: MONO, fontSize: 12 }}>
              KNOWLEDGE CHECK — QUESTION {quizIndex + 1} / {quiz.length}
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
              Answer each checkpoint one at a time to complete the module record.
            </p>

            {quiz.length > 0 ? (
              <QuizCard
                question={currentQuestion}
                qIndex={quizIndex}
                answers={answers}
                setAnswers={setAnswers}
                color={module.color}
              />
            ) : (
              <div
                style={{
                  background: PANEL_ALT,
                  border: "1px solid #222",
                  borderRadius: 8,
                  padding: 18,
                  color: "#BDBDBD",
                }}
              >
                No quiz items were found for this module.
              </div>
            )}

            <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  setSlideIndex(slides.length - 1);
                  forceScrollTop();
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
                REVIEW CONTENT
              </button>

              {quizIndex > 0 && (
                <button
                  onClick={() => {
                    setQuizIndex((prev) => Math.max(0, prev - 1));
                    forceScrollTop();
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
                  PREVIOUS QUESTION
                </button>
              )}

              <button
                disabled={quiz.length > 0 && currentAnswer === undefined}
                onClick={() => {
                  if (quiz.length === 0 || isLastQuestion) {
                    setSubmitted(true);
                  } else {
                    setQuizIndex((prev) => Math.min(quiz.length - 1, prev + 1));
                  }
                  forceScrollTop();
                }}
                style={{
                  background: quiz.length === 0 || currentAnswer !== undefined ? module.color : "#252525",
                  color: quiz.length === 0 || currentAnswer !== undefined ? "#0b0b0b" : "#777",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 16px",
                  cursor: quiz.length === 0 || currentAnswer !== undefined ? "pointer" : "not-allowed",
                  fontFamily: CONDENSED,
                  letterSpacing: 1,
                  fontWeight: 800,
                }}
              >
                {quiz.length === 0 || isLastQuestion ? "COMPLETE MODULE" : "NEXT QUESTION"}
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
          <button
            onClick={returnToPortal}
            style={{
              color: "#888",
              background: "transparent",
              border: "none",
              padding: 0,
              textDecoration: "none",
              fontFamily: MONO,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            ← BACK TO PORTAL
          </button>
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
              onClick={() => {
                setSlideIndex((x) => Math.max(0, x - 1));
                forceScrollTop();
              }}
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
              onClick={() => {
                setSlideIndex((x) => x + 1);
                forceScrollTop();
              }}
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
