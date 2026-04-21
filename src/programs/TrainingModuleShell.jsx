
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { persistTrainingRecordNetlifyIdentity } from "../auth/netlifyIdentity.js";
import { resolveModuleRecordMeta } from "../data/moduleRegistry.js";
import ReviewStatusBanner from "../components/ReviewStatusBanner.jsx";
import { buildRenewalPolicyFields, resolveReviewLaunchState } from "../utils/reviewMode.js";

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


const PORTAL_LAUNCH_SESSION_KEY = "airon.portalLaunchSession";

function readPortalLaunchSession() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PORTAL_LAUNCH_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function resolvePortalReturnUrl() {
  const session = readPortalLaunchSession();
  if (typeof session?.portalReturnUrl === "string" && session.portalReturnUrl.trim()) {
    return session.portalReturnUrl.trim();
  }
  const appUrl = typeof session?.portalAppUrl === "string" ? session.portalAppUrl.trim() : "";
  const slug = typeof session?.workspaceSlug === "string" ? session.workspaceSlug.trim() : "";
  if (appUrl && slug) {
    return `${appUrl.replace(/\/$/, "")}/portal/${slug}/my-training.html`;
  }
  return "";
}


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

function formatCategoryLabel(categoryKey) {
  if (typeof categoryKey !== "string" || !categoryKey.trim()) return "A.I.R.O.N. training";
  return categoryKey
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
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
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const recordSavedRef = useRef(false);

  const activeCategory = typeof location.state?.activeCategory === "string" ? location.state.activeCategory : "campus";
  const portalContext = useMemo(() => getPortalContext(location.state), [location.state]);
  const portalSearch = portalContext.portalSearch;
  const seriesPaths = portalContext.seriesPaths;
  const currentSeriesIndex = seriesPaths.indexOf(module.path);
  const nextModulePath = currentSeriesIndex >= 0 ? seriesPaths[currentSeriesIndex + 1] : null;
  const recordMeta = useMemo(() => resolveModuleRecordMeta({
    path: typeof module.path === "string" ? module.path : "",
    label:
      typeof module.label === "string" && module.label.trim()
        ? module.label.trim()
        : "A.I.R.O.N. training module",
    categoryKey: activeCategory,
    categoryLabel: typeof module.category === "string" ? module.category : "",
    source: "shared-shell",
    version: typeof module.version === "string" ? module.version : "1.0.0",
    passScore: Number.isFinite(Number(module.passScore)) ? Number(module.passScore) : 80,
  }), [activeCategory, module.category, module.label, module.passScore, module.path, module.version]);
  const reviewState = useMemo(() => resolveReviewLaunchState(location.state, recordMeta), [location.state, recordMeta]);

  const returnToPortal = () => {
    writeStoredPortalContext(portalSearch, seriesPaths);
    forceScrollTop();
    const portalReturnUrl = resolvePortalReturnUrl();
    if (portalReturnUrl && typeof window !== "undefined") {
      window.location.assign(portalReturnUrl);
      return;
    }
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
  }, [slideIndex, submitted]);

  const slides = module.slides || [];
  const quiz = useMemo(() => (module.quiz || []).map(normalizeQuizItem), [module.quiz]);
  const progress = Math.round(((slideIndex + 1) / slides.length) * 100);
  const allAnswered = quiz.every((_, idx) => answers[idx] !== undefined);
  const score = useMemo(
    () => quiz.reduce((sum, q, idx) => sum + (answers[idx] === q.answer ? 1 : 0), 0),
    [answers, quiz]
  );
  const passThreshold = Math.ceil(quiz.length * 0.7);
  const passed = score >= passThreshold;

  useEffect(() => {
    if (!submitted || !passed) {
      recordSavedRef.current = false;
      return;
    }

    if (recordSavedRef.current) return;
    recordSavedRef.current = true;

    let cancelled = false;
    const completedAt = new Date().toISOString();

    persistTrainingRecordNetlifyIdentity(null, {
      attemptId: `${module.path || module.label || "training-module"}:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
      moduleId: recordMeta.moduleId,
      moduleVersion: recordMeta.version,
      modulePath: typeof module.path === "string" ? module.path : "",
      moduleTitle:
        typeof module.label === "string" && module.label.trim()
          ? module.label.trim()
          : typeof module.short === "string" && module.short.trim()
          ? module.short.trim()
          : "A.I.R.O.N. training module",
      categoryKey: activeCategory,
      categoryLabel: formatCategoryLabel(activeCategory),
      requirementIds: recordMeta.requirementIds,
      requirementType: recordMeta.category,
      completionBucket: recordMeta.category,
      reviewEnabled: Boolean(recordMeta.reviewEnabled),
      recordRequired: recordMeta.recordRequired !== false,
      ...buildRenewalPolicyFields(recordMeta, reviewState.latestRecord, completedAt),
      score,
      quizCorrect: score,
      quizTotal: quiz.length,
      passed: true,
      completedAt,
      runtimeMinutes: Number.isFinite(Number(module.minutes)) ? Number(module.minutes) : null,
      certificateClass: "Portal Completion Record",
      certificateEligible: true,
      source: "shared-shell",
    })
      .then((result) => {
        if (cancelled || !result?.error) return;
        console.error("A.I.R.O.N. retained record write failed.", result.error);
      })
      .catch((error) => {
        if (cancelled) return;
        console.error("A.I.R.O.N. retained record write failed.", error);
      });

    return () => {
      cancelled = true;
    };
  }, [module.label, module.minutes, module.path, module.short, passed, quiz.length, score, submitted, recordMeta, reviewState.latestRecord]);

  if (submitted) {
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
              KNOWLEDGE CHECK — {quiz.length} QUESTIONS
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
              {quiz.map((question, idx) => (
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
              <button
                disabled={!allAnswered}
                onClick={() => {
                  setSubmitted(true)
                  forceScrollTop()
                }}
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
        <ReviewStatusBanner reviewState={reviewState} accentColor={module.color} title="Review mode active" />
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
