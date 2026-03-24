import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ─── Training Programs ────────────────────────────────────────────────────────
import LOTOFoundry     from './programs/LOTOFoundry.jsx'
import LOTOFullCampus  from './programs/LOTOFullCampus.jsx'
import SATOrientation  from './programs/SATOrientation.jsx'
import H2STraining     from './programs/H2STraining.jsx'
import ArcFlashTraining from './programs/ArcFlashTraining.jsx'
import EvacuationTraining from './programs/EvacuationTraining.jsx'

// ─── Route map ───────────────────────────────────────────────────────────────
// Each entry defines one training program available at its path.
// Adding a new program = add one entry here + drop the JSX file in src/programs/
const PROGRAMS = [
  {
    path:       '/sat',
    label:      'S.A.T. Visitor Orientation',
    short:      'Situational Awareness Training',
    icon:       '🏭',
    color:      '#FFD100',
    regulation: 'Internal — Required before campus access',
    audience:   'All Visitors',
    minutes:    15,
    Component:  SATOrientation,
  },
  {
    path:       '/loto',
    label:      'LOTO — Foundry Focus',
    short:      'Lockout / Tagout — Foundry Systems',
    icon:       '🔒',
    color:      '#FF6B00',
    regulation: 'OSHA 29 CFR 1910.147',
    audience:   'Foundry Operators, Molding Line, Sand System',
    minutes:    20,
    Component:  LOTOFoundry,
  },
  {
    path:       '/loto-campus',
    label:      'LOTO — Full Campus',
    short:      'Lockout / Tagout — All Facilities',
    icon:       '🔒',
    color:      '#FF6B00',
    regulation: 'OSHA 29 CFR 1910.147 · NFPA 58 · 1910.119',
    audience:   'Maintenance Techs, Contractors, Multi-Facility Workers',
    minutes:    35,
    Component:  LOTOFullCampus,
  },
  {
    path:       '/h2s',
    label:      'H₂S Awareness & SCBA',
    short:      'Hydrogen Sulfide & Breathing Apparatus',
    icon:       '☠️',
    color:      '#FF3300',
    regulation: 'OSHA 29 CFR 1910.134',
    audience:   'Oilfield Operators, Gas Well Operators, Propane Farm',
    minutes:    20,
    Component:  H2STraining,
  },
  {
    path:       '/arcflash',
    label:      'Arc Flash & Electrical Safety',
    short:      'NFPA 70E — Electrical Hazards',
    icon:       '⚡',
    color:      '#00BFFF',
    regulation: 'NFPA 70E · OSHA 29 CFR 1910.333',
    audience:   'Electricians, Maintenance Techs, Beam Mill Operators',
    minutes:    25,
    Component:  ArcFlashTraining,
  },
  {
    path:       '/evacuation',
    label:      'Emergency Evacuation & Muster',
    short:      'Campus-Wide Emergency Response',
    icon:       '🚨',
    color:      '#22CC66',
    regulation: 'OSHA 29 CFR 1910.38',
    audience:   'All Campus Roles — Required for Everyone',
    minutes:    20,
    Component:  EvacuationTraining,
  },
]

// ─── Portal Home Screen ───────────────────────────────────────────────────────
function PortalHome() {
  const navigate = useNavigate()
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 1000)
    return () => clearInterval(t)
  }, [])
  const blink = tick % 2 === 0

  return (
    <div style={{
      minHeight: '100vh',
      background: '#080808',
      fontFamily: "'IBM Plex Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column',
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* ── Header ── */}
      <div style={{
        background: '#0c0c0c',
        borderBottom: '1px solid #1e1e1e',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}>
        <div style={{
          width: 42, height: 42,
          background: '#FF6B00',
          borderRadius: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
        }}>⚡</div>
        <div>
          <div style={{
            color: '#fff',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 18, fontWeight: 800, letterSpacing: 1,
          }}>DINGFELDER INDUSTRIAL CAMPUS</div>
          <div style={{ color: '#444', fontSize: 10, letterSpacing: 3 }}>
            SAFETY TRAINING PORTAL
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: blink ? '#22CC66' : 'transparent',
            border: '1px solid #22CC66',
            transition: 'background 0.15s',
          }} />
          <span style={{
            color: '#22CC66',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11, letterSpacing: 2,
          }}>PORTAL ONLINE</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div style={{
        padding: '36px 24px 24px',
        borderBottom: '1px solid #111',
        maxWidth: 900, width: '100%', margin: '0 auto', boxSizing: 'border-box',
        width: '100%',
      }}>
        <div style={{
          color: '#FF6B00',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 10, letterSpacing: 5, marginBottom: 10,
        }}>FEDERAL COMPLIANCE · INDUSTRIAL SAFETY · DINGFELDER ENTERPRISES</div>
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 52, fontWeight: 900,
          color: '#fff', margin: 0, lineHeight: 1.0, letterSpacing: 0.5,
        }}>
          SAFETY TRAINING<br />
          <span style={{ color: '#FF6B00' }}>PORTAL</span>
        </h1>
        <p style={{
          color: '#555',
          fontSize: 14, lineHeight: 1.6,
          marginTop: 12, marginBottom: 0,
          maxWidth: 520,
        }}>
          Select your required training program below.
          Completion records are generated at the end of each program.
          Programs are assigned by your IRIS role — contact your supervisor
          if you are unsure which programs apply to your role.
        </p>
      </div>

      {/* ── Program Grid ── */}
      <div style={{
        flex: 1,
        padding: '24px',
        maxWidth: 900, width: '100%',
        margin: '0 auto', boxSizing: 'border-box',
      }}>
        <div style={{
          color: '#333',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 11, letterSpacing: 3,
          marginBottom: 16,
        }}>AVAILABLE TRAINING PROGRAMS — {PROGRAMS.length} PROGRAMS</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 12,
        }}>
          {PROGRAMS.map(prog => (
            <div
              key={prog.path}
              onClick={() => navigate(prog.path)}
              style={{
                background: '#0f0f0f',
                border: `1px solid #1e1e1e`,
                borderTop: `3px solid ${prog.color}`,
                borderRadius: 6,
                padding: '18px',
                cursor: 'pointer',
                transition: 'all 0.15s',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#161616'
                e.currentTarget.style.borderColor = prog.color + '88'
                e.currentTarget.style.borderTopColor = prog.color
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#0f0f0f'
                e.currentTarget.style.borderColor = '#1e1e1e'
                e.currentTarget.style.borderTopColor = prog.color
              }}
            >
              {/* Icon + title */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 40, height: 40,
                  background: `${prog.color}18`,
                  border: `1px solid ${prog.color}44`,
                  borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}>{prog.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    color: prog.color,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800, fontSize: 16, letterSpacing: 0.3,
                    lineHeight: 1.2,
                  }}>{prog.label}</div>
                  <div style={{
                    color: '#444', fontSize: 11,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: 0.5, marginTop: 2,
                  }}>{prog.short}</div>
                </div>
              </div>

              {/* Meta */}
              <div style={{
                padding: '8px 10px',
                background: '#080808',
                borderRadius: 4,
                display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <div style={{
                  color: '#555', fontSize: 11,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}>{prog.regulation}</div>
                <div style={{ color: '#3a3a3a', fontSize: 11 }}>
                  {prog.audience}
                </div>
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
              }}>
                <span style={{
                  color: '#333', fontSize: 11,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}>~{prog.minutes} min</span>
                <span style={{
                  color: prog.color,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 12, letterSpacing: 2, fontWeight: 700,
                }}>START →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        padding: '14px 24px',
        borderTop: '1px solid #0f0f0f',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <span style={{
          color: '#222',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11, letterSpacing: 1,
        }}>DINGFELDER INDUSTRIAL · SAFETY TRAINING DIVISION</span>
        <span style={{
          color: '#222',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11, letterSpacing: 1,
        }}>{new Date().getFullYear()} · ALL COMPLETIONS RECORDED</span>
      </div>
    </div>
  )
}

// ─── App — Router ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Routes>
      {/* Portal home */}
      <Route path="/" element={<PortalHome />} />

      {/* Each training program at its own path */}
      {PROGRAMS.map(prog => (
        <Route
          key={prog.path}
          path={prog.path}
          element={<prog.Component />}
        />
      ))}

      {/* 404 fallback — redirect home */}
      <Route path="*" element={<PortalHome />} />
    </Routes>
  )
}
