
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import aironSplash from './assets/airon-splash.png'

// ─── Training Programs ────────────────────────────────────────────────────────
import LOTOFoundry     from './programs/LOTOFoundry.jsx'
import LOTOFullCampus  from './programs/LOTOFullCampus.jsx'
import SATOrientation  from './programs/SATOrientation.jsx'
import H2STraining     from './programs/H2STraining.jsx'
import ArcFlashTraining from './programs/ArcFlashTraining.jsx'
import EvacuationTraining from './programs/EvacuationTraining.jsx'
import {
  PHASE1_MODULES,
  HazardCommunicationTraining,
  PPEFundamentalsTraining,
  ForkliftSafetyTraining,
  FireExtinguisherTraining,
  MoltenMetalTraining,
  FurnaceMeltDeckTraining,
  SilicaSandTraining,
  CraneLadleTraining,
  PropaneFarmTraining,
  FoodChemicalTraining,
  AmmoniaTraining,
  RetailBackroomTraining,
} from './programs/Phase1Modules.jsx'
import {
  PHASE2A_MODULES,
  WalkingWorkingSurfacesTraining,
  IncidentReportingTraining,
  ContractorSafetyTraining,
  SevereWeatherTraining,
  ConfinedSpaceTraining,
  RespiratoryProtectionTraining,
  HearingConservationTraining,
  HotWorkTraining,
} from './programs/Phase2AModules.jsx'
import {
  PHASE2B_MODULES,
  MachineGuardingTraining,
  FoundryHeatStressTraining,
  CoreRoomVentilationTraining,
  ShakeoutGrindingTraining,
  BeamMillRollingLineTraining,
  OverheadCraneRiggingTraining,
  HydraulicStoredEnergyTraining,
  PinchCrushSteelHandlingTraining,
} from './programs/Phase2BModules.jsx'

// ─── Route map ───────────────────────────────────────────────────────────────
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
  {
    path:       '/hazcom',
    label:      'Hazard Communication / SDS / GHS',
    short:      'Chemical Labels, SDS, and Safe Handling',
    icon:       '🧪',
    color:      '#FFD100',
    regulation: 'Chemical labels · SDS · site hazard communication',
    audience:   'All chemical users, sanitation, maintenance, and operations',
    minutes:    18,
    Component:  HazardCommunicationTraining,
  },
  {
    path:       '/ppe',
    label:      'PPE Fundamentals',
    short:      'Basic Protective Equipment by Task and Hazard',
    icon:       '🦺',
    color:      '#22CC66',
    regulation: 'Campus PPE program · task-based protection',
    audience:   'All campus roles, visitors, maintenance, and operations',
    minutes:    16,
    Component:  PPEFundamentalsTraining,
  },
  {
    path:       '/forklift',
    label:      'Forklift / Powered Industrial Truck Safety',
    short:      'Vehicle Separation, Visibility, and Load Control',
    icon:       '🚜',
    color:      '#00BFFF',
    regulation: 'Powered industrial truck awareness · pedestrian separation',
    audience:   'Warehousing, shipping, retail, food plant, and support teams',
    minutes:    18,
    Component:  ForkliftSafetyTraining,
  },
  {
    path:       '/fire-extinguishers',
    label:      'Fire Extinguisher Basics',
    short:      'Portable Extinguishers, Alarm, and First Response',
    icon:       '🧯',
    color:      '#FF6B00',
    regulation: 'Campus emergency response · incipient-stage fire only',
    audience:   'All campus personnel and designated responders',
    minutes:    14,
    Component:  FireExtinguisherTraining,
  },
  {
    path:       '/molten-metal',
    label:      'Molten Metal Awareness',
    short:      'Foundry Heat, Splash, and Contact Hazards',
    icon:       '🔥',
    color:      '#FF5A1F',
    regulation: 'Foundry hot-metal awareness · restricted zone discipline',
    audience:   'Foundry operators, maintenance, contractors, and escorts',
    minutes:    20,
    Component:  MoltenMetalTraining,
  },
  {
    path:       '/furnace-melt-deck',
    label:      'Furnace & Melt Deck Safety',
    short:      'Charging, Tapping, Hot Surfaces, and Restricted Zones',
    icon:       '🏭',
    color:      '#FF7A00',
    regulation: 'Foundry furnace operations · charging and melt-deck controls',
    audience:   'Melt operators, maintenance, furnace support, and supervisors',
    minutes:    20,
    Component:  FurnaceMeltDeckTraining,
  },
  {
    path:       '/silica-sand',
    label:      'Sand System / Dust / Silica Awareness',
    short:      'Molding Sand Handling and Airborne Dust Control',
    icon:       '🌫️',
    color:      '#C7A100',
    regulation: 'Foundry sand handling · dust-control awareness',
    audience:   'Molding line, sand system, maintenance, and cleanup crews',
    minutes:    18,
    Component:  SilicaSandTraining,
  },
  {
    path:       '/crane-ladle',
    label:      'Crane, Ladle & Suspended Load Safety',
    short:      'No-Go Zones, Lift Paths, and Communication Control',
    icon:       '🏗️',
    color:      '#FF8C00',
    regulation: 'Foundry lifting operations · suspended load control',
    audience:   'Crane support, foundry operators, maintenance, and contractors',
    minutes:    18,
    Component:  CraneLadleTraining,
  },
  {
    path:       '/propane-farm',
    label:      'Propane Farm Operations Safety',
    short:      'Storage, Ignition Control, and Emergency Distance',
    icon:       '🛢️',
    color:      '#B5FF00',
    regulation: 'Fuel-gas storage awareness · ignition and distance control',
    audience:   'Propane operators, security, maintenance, and emergency support',
    minutes:    18,
    Component:  PropaneFarmTraining,
  },
  {
    path:       '/food-chemical',
    label:      'Food Plant Chemical Safety & Sanitation',
    short:      'Cleaners, Sanitizers, Utility Separation, and Safe Use',
    icon:       '🥗',
    color:      '#00D77A',
    regulation: 'Food plant sanitation chemical awareness · line verification',
    audience:   'Salad dressing, Juice From The Vine, sanitation, and quality teams',
    minutes:    18,
    Component:  FoodChemicalTraining,
  },
  {
    path:       '/ammonia',
    label:      'Ammonia Refrigeration Awareness',
    short:      'Cold Systems, Leak Recognition, and Immediate Response',
    icon:       '❄️',
    color:      '#52E5FF',
    regulation: 'Refrigeration awareness · leak recognition and response',
    audience:   'Food plant workers, maintenance, contractors, and nearby occupants',
    minutes:    16,
    Component:  AmmoniaTraining,
  },
  {
    path:       '/retail-backroom',
    label:      'Retail Backroom / Baler / Compactor Safety',
    short:      'Backroom Traffic, Waste Equipment, and Lockout Awareness',
    icon:       '📦',
    color:      '#A36BFF',
    regulation: 'Retail support safety · receiving and waste equipment control',
    audience:   'Walmart support, receiving teams, stock associates, and supervisors',
    minutes:    15,
    Component:  RetailBackroomTraining,
  },
  ...PHASE2A_MODULES.map((module, index) => ({
    ...module,
    Component: [
      WalkingWorkingSurfacesTraining,
      IncidentReportingTraining,
      ContractorSafetyTraining,
      SevereWeatherTraining,
      ConfinedSpaceTraining,
      RespiratoryProtectionTraining,
      HearingConservationTraining,
      HotWorkTraining,
    ][index],
  })),
  ...PHASE2B_MODULES.map((module, index) => ({
    ...module,
    Component: [
      MachineGuardingTraining,
      FoundryHeatStressTraining,
      CoreRoomVentilationTraining,
      ShakeoutGrindingTraining,
      BeamMillRollingLineTraining,
      OverheadCraneRiggingTraining,
      HydraulicStoredEnergyTraining,
      PinchCrushSteelHandlingTraining,
    ][index],
  }))
]

function getSiteMode(hostname) {
  const host = (hostname || '').toLowerCase()
  if (host.includes('airon.')) return 'airon'
  if (host.includes('training.')) return 'training'
  return 'training'
}

function GlobalFonts() {
  return (
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap"
      rel="stylesheet"
    />
  )
}



function AIRONSplash({ onDone }) {
  const [messageIndex, setMessageIndex] = useState(0)
  const loadingMessages = [
    'Initializing training environment...',
    'Synchronizing A.I.R.O.N. systems...',
    'Loading value at zero cost...',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(index => (index + 1) % loadingMessages.length)
    }, 1200)
    const timer = setTimeout(onDone, 4000)
    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onDone])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999999,
      overflow: 'hidden',
      background: '#000',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <GlobalFonts />
      <style>{`
        @keyframes aironSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes aironGlow {
          0% { opacity: 0.82; transform: scaleX(0.42); }
          50% { opacity: 1; transform: scaleX(0.56); }
          100% { opacity: 0.82; transform: scaleX(0.42); }
        }
        @keyframes aironFadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes aironPosterIn {
          0% { opacity: 0; transform: scale(0.985); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at top, rgba(255,107,0,0.16), transparent 32%), radial-gradient(circle at bottom, rgba(255,209,0,0.10), transparent 42%), #000',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px 14px 20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          position: 'relative',
          width: 'min(94vw, 760px)',
          height: 'min(94vh, 1060px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'aironPosterIn 0.5s ease-out both',
        }}>
          <img
            src={aironSplash}
            alt="A.I.R.O.N. splash"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center center',
              borderRadius: 18,
              boxShadow: '0 28px 90px rgba(0,0,0,0.52)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />

          <div style={{
            position: 'absolute',
            left: '50%',
            bottom: 'max(18px, 3vh)',
            transform: 'translateX(-50%)',
            width: 'min(88%, 760px)',
            padding: '14px 18px 16px',
            borderRadius: 18,
            background: 'linear-gradient(180deg, rgba(8,8,8,0.72), rgba(8,8,8,0.88))',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            backdropFilter: 'blur(4px)',
            animation: 'aironFadeUp 0.6s ease-out both',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}>
              <div style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.18)',
                borderTopColor: '#FF6B00',
                borderRightColor: '#FFD100',
                animation: 'aironSpin 1.1s linear infinite',
                flexShrink: 0,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{
                  color: '#FFF',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 12,
                  letterSpacing: 1.6,
                  marginBottom: 8,
                  textTransform: 'uppercase',
                }}>
                  {loadingMessages[messageIndex]}
                </div>
                <div style={{
                  height: 5,
                  overflow: 'hidden',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.10)',
                }}>
                  <div style={{
                    width: '48%',
                    height: '100%',
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, #FF6B00, #FFD100)',
                    transformOrigin: 'left center',
                    animation: 'aironGlow 1.8s ease-in-out infinite',
                  }} />
                </div>
              </div>
            </div>

            <div style={{
              marginTop: 12,
              color: '#C8C8C8',
              fontSize: 11,
              lineHeight: 1.5,
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: 0.7,
              textTransform: 'uppercase',
            }}>
              THE DINGFELDER ENTERPRISES TRIANGLE · YOU'RE GETTING VALUE AT ZERO COST · GOOD THINGS TAKE TIME
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AIRONLanding() {
  const navigate = useNavigate()
  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <GlobalFonts />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.86)), url(${aironSplash})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255,107,0,0.15), transparent 35%, rgba(0,0,0,0.2) 70%, rgba(255,209,0,0.08))',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.32)',
          backdropFilter: 'blur(4px)',
        }}>
          <div>
            <div style={{
              color: '#FFD100',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 4,
            }}>
              A.I.R.O.N. BY DINGFELDER ENTERPRISES
            </div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: 22,
            }}>
              PLAY YOUR WORK · WORK YOUR PLAY
            </div>
          </div>
          <div style={{
            color: '#DDD',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: 1.5,
            textAlign: 'right',
          }}>
            INDUSTRIAL TRAINING<br />SIMULATION · INTEGRATION
          </div>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '48px 24px 52px',
        }}>
          <div style={{
            width: 'min(100%, 840px)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                color: '#FF6B00',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                letterSpacing: 2,
                marginBottom: 12,
              }}>
                BRAND REVEAL · FREE ENTRY POINT · LIVE LEAD ENGINE
              </div>
              <h1 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(54px, 12vw, 92px)',
                lineHeight: 0.9,
                margin: 0,
              }}>
                FREE SAFETY<br />
                <span style={{ color: '#FFD100' }}>TRAINING!!!</span>
              </h1>
              <div style={{
                marginTop: 18,
                color: '#E8E8E8',
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 560,
              }}>
                What if training for the job you want started on your gaming console?<br />
                What if the machine waiting for you at work already knew your character?<br />
                <span style={{ color: '#FFD100', fontWeight: 700 }}>Not to play. To perform.</span><br />
                Serious systems. Serious safety. Serious work.<br />
                Let’s get this job done. I’ll be your guide.
              </div>
              <div style={{
                marginTop: 28,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
              }}>
                <button
                  onClick={() => {
                    const target = `${window.location.protocol}//training.dingfelder.co`
                    window.location.assign(target)
                  }}
                  style={{
                    appearance: 'none',
                    border: 'none',
                    background: 'linear-gradient(90deg, #FF6B00, #FFD100)',
                    color: '#050505',
                    padding: '15px 22px',
                    borderRadius: 10,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: 1,
                    cursor: 'pointer',
                    boxShadow: '0 14px 32px rgba(255,107,0,0.25)',
                  }}
                >
                  GET IT FOR FREE
                </button>
                <button
                  onClick={() => document.getElementById('airon-explore')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    appearance: 'none',
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(0,0,0,0.25)',
                    color: '#fff',
                    padding: '15px 22px',
                    borderRadius: 10,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: 1,
                    cursor: 'pointer',
                  }}
                >
                  EXPLORE A.I.R.O.N.
                </button>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(180deg, rgba(8,8,8,0.72), rgba(8,8,8,0.88))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: 22,
              boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{
                color: '#FFD100',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 2,
                marginBottom: 10,
              }}>
                WHY THIS MATTERS
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 34,
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: 14,
              }}>
                A.I.R.O.N. SAFETY TRAINING
              </div>
              <div style={{ color: '#DDD', lineHeight: 1.7, fontSize: 15 }}>
                Free web-based training builds the audience. The Dingfelder Industrial Campus proves the environment. A.I.R.O.N. becomes the product people remember when they need integration, installation, or industrial intelligence.
              </div>

              <div style={{
                display: 'grid',
                gap: 12,
                marginTop: 18,
              }}>
                {[
                  'Free industrial safety learning sessions',
                  'Dingfelder Industrial Campus as training environment',
                  'Future Roblox bridge and site acknowledgements',
                  'A.I.R.O.N. customers, integrations, and installations',
                ].map(item => (
                  <div key={item} style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    padding: '10px 12px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#FF6B00',
                      marginTop: 8,
                      flexShrink: 0,
                    }} />
                    <div style={{ color: '#F1F1F1', lineHeight: 1.5, fontSize: 14 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div
          id="airon-explore"
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '0 24px 36px',
          }}
        >
          <div style={{
            width: 'min(100%, 1040px)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 14,
          }}>
            {[
              {
                title: 'TRAINING',
                body: 'Free industrial learning sessions hosted by Dingfelder Enterprises and delivered through A.I.R.O.N.',
              },
              {
                title: 'SIMULATION',
                body: 'Dingfelder Industrial Campus serves as the branded environment where systems, safety, and readiness come together.',
              },
              {
                title: 'INTEGRATION',
                body: 'The long play is customer integrations, installations, and operational intelligence under the A.I.R.O.N. brand.',
              },
            ].map(card => (
              <div key={card.title} style={{
                padding: 18,
                borderRadius: 16,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{
                  color: '#FFD100',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: 2,
                  marginBottom: 10,
                }}>{card.title}</div>
                <div style={{
                  color: '#F0F0F0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 8,
                }}>
                  A.I.R.O.N.
                </div>
                <div style={{ color: '#D2D2D2', lineHeight: 1.6, fontSize: 14 }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 24px',
          color: '#A0A0A0',
          fontSize: 11,
          fontFamily: "'IBM Plex Mono', monospace",
          letterSpacing: 1.1,
          background: 'rgba(0,0,0,0.24)',
        }}>
          A.I.R.O.N. BY DINGFELDER ENTERPRISES · TRAINING, SIMULATION, OPERATIONAL INTELLIGENCE
        </div>
      </div>
    </div>
  )
}

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
      <GlobalFonts />

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
          background: 'linear-gradient(180deg, #FF6B00, #FFD100)',
          borderRadius: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          color: '#080808',
          fontWeight: 900,
        }}>▲</div>
        <div>
          <div style={{
            color: '#fff',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 20, fontWeight: 800, letterSpacing: 1,
          }}>A.I.R.O.N. SAFETY TRAINING</div>
          <div style={{ color: '#6A6A6A', fontSize: 10, letterSpacing: 3 }}>
            BY DINGFELDER ENTERPRISES · DINGFELDER INDUSTRIAL CAMPUS
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

      <div style={{
        padding: '36px 24px 24px',
        borderBottom: '1px solid #111',
        maxWidth: 980,
        margin: '0 auto',
        boxSizing: 'border-box',
        width: '100%',
      }}>
        <div style={{
          color: '#FF6B00',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 10, letterSpacing: 5, marginBottom: 10,
        }}>FREE LEARNING SESSIONS · INDUSTRIAL SAFETY · A.I.R.O.N. BY DINGFELDER ENTERPRISES</div>
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 52, fontWeight: 900,
          color: '#fff', margin: 0, lineHeight: 1.0, letterSpacing: 0.5,
        }}>
          A.I.R.O.N.<br />
          <span style={{ color: '#FFD100' }}>SAFETY TRAINING</span>
        </h1>
        <p style={{
          color: '#868686',
          fontSize: 14, lineHeight: 1.7,
          marginTop: 14, marginBottom: 0,
          maxWidth: 640,
        }}>
          Free industrial learning sessions hosted by Dingfelder Enterprises.
          Training environments include the Dingfelder Industrial Campus.
          Select a module below to begin and build operational confidence before the job starts.
        </p>
      </div>

      <div style={{
        flex: 1,
        padding: '24px',
        maxWidth: 980,
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}>
        <div style={{
          color: '#444',
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
                    color: '#666', fontSize: 11,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: 0.5, marginTop: 2,
                  }}>{prog.short}</div>
                </div>
              </div>

              <div style={{
                padding: '8px 10px',
                background: '#080808',
                borderRadius: 4,
                display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <div style={{
                  color: '#777', fontSize: 11,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}>{prog.regulation}</div>
                <div style={{ color: '#989898', fontSize: 11 }}>
                  {prog.audience}
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
              }}>
                <span style={{
                  color: '#666', fontSize: 11,
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
          color: '#444',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11, letterSpacing: 1,
        }}>A.I.R.O.N. SAFETY TRAINING · DINGFELDER ENTERPRISES</span>
        <span style={{
          color: '#444',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11, letterSpacing: 1,
        }}>{new Date().getFullYear()} · TRAINING ENVIRONMENTS INCLUDE THE DINGFELDER INDUSTRIAL CAMPUS</span>
      </div>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PortalHome />} />
      <Route path="/landing" element={<AIRONLanding />} />
      {PROGRAMS.map(prog => (
        <Route
          key={prog.path}
          path={prog.path}
          element={<prog.Component />}
        />
      ))}
      <Route path="*" element={<PortalHome />} />
    </Routes>
  )
}

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const mode = useMemo(() => getSiteMode(window.location.hostname), [])
  const [showSplash, setShowSplash] = useState(() => location.pathname === '/')

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowSplash(false)
    }
  }, [location.pathname])

  const handleSplashDone = () => {
    setShowSplash(false)
    if (mode === 'airon') {
      navigate('/landing', { replace: true })
    } else {
      navigate('/', { replace: true })
    }
  }

  if (showSplash) {
    return <AIRONSplash onDone={handleSplashDone} />
  }

  return <AppRoutes />
}
