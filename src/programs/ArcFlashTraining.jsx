import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { persistTrainingRecordNetlifyIdentity } from "../auth/netlifyIdentity.js";

const MODULES = [
  {
    id:"arcflash",
    icon:"⚡",
    label:"Arc Flash Basics",
    color:"#00BFFF",
    slides:[
      {
        heading:"What Is an Arc Flash?",
        body:"An arc flash is an explosive release of energy caused by an electrical fault — a flashover between conductors or from a conductor to ground. Unlike a shock, which requires direct contact, an arc flash releases its energy outward in all directions. It does not require you to touch anything. You only need to be in proximity.",
        icon:"⚡",
        stat:{ value:"35,000°F", label:"ARC FLASH PLASMA TEMPERATURE", sub:"Hotter than the surface of the sun" },
        fact:"On average, 5–10 arc flash incidents occur every day across US industry. At a facility with 40+ MVA service like Dingfelder, a single arc flash event can be fatal from several feet away."
      },
      {
        heading:"The Four Arc Flash Hazards",
        body:"An arc flash event produces four simultaneous threats. Understanding all four changes how you think about distance and PPE — it's not just about fire.",
        icon:"💥",
        list:[
          "🌡️ THERMAL — plasma temperature up to 35,000°F. Burns through clothing instantly at close range. Sets surrounding materials on fire.",
          "💨 PRESSURE WAVE — blast overpressure equivalent to an explosion. Knocks personnel down. Ruptures eardrums. Sends shrapnel at ballistic speeds.",
          "🔊 SOUND — acoustic pressure exceeds 140 dB. Causes permanent hearing damage instantly.",
          "💡 INTENSE LIGHT — UV and IR radiation causes arc-eye (photokeratitis) and retinal burns.",
        ],
        fact:"Standard cotton or polyester clothing will ignite and continue to burn in an arc flash event. Only arc-rated (AR) clothing self-extinguishes when the ignition source is removed."
      },
      {
        heading:"Arc Flash at the Dingfelder Campus — Specific Risks",
        body:"Dingfelder's 40+ MVA primary substation is one of the largest energy concentrations on campus. The incident energy available at various points determines the PPE required and the exclusion distances that must be maintained.",
        icon:"🏭",
        locations:[
          { location:"EP-001 Primary Substation",       voltage:"115 kV / 12.47 kV", category:"EXTREME — Visitors prohibited. Qualified electricians only with full arc flash study." },
          { location:"EP-002 Switchgear Building",      voltage:"4.16 kV",            category:"CAT 4 — Full arc flash suit, 40+ cal/cm² required." },
          { location:"Foundry MCC Rooms (480V)",        voltage:"480V",               category:"CAT 2–3 — Arc flash PPE required. 8–40 cal/cm²." },
          { location:"Beam Mill Drive Panels",          voltage:"480V / 4.16 kV",     category:"CAT 2–4 — Depends on breaker coordination study." },
          { location:"Oilfield Control Panels",         voltage:"120V / 480V",        category:"CAT 1–2 — Minimum arc flash PPE. 4–8 cal/cm²." },
          { location:"Commercial/Restaurant Panels",    voltage:"120V / 208V",        category:"CAT 0–1 — Low arc flash risk. Standard PPE + face shield." },
        ]
      },
      {
        heading:"The Arc Flash Label — How to Read It",
        body:"Every electrical panel, switchgear, and MCC at Dingfelder must have an arc flash label compliant with NFPA 70E. This label contains everything you need to know before opening the enclosure. If there is no label — do NOT open it until it has been labeled by a qualified electrician.",
        icon:"🏷️",
        labelFields:[
          { field:"Incident Energy",         example:"12.4 cal/cm²",    meaning:"Energy released at the working distance. Determines PPE rating required." },
          { field:"Working Distance",         example:"18 inches",       meaning:"Distance used to calculate incident energy. Do not get closer." },
          { field:"PPE Category",             example:"CAT 2",           meaning:"Minimum PPE category per NFPA 70E Table 130.5(C)." },
          { field:"Limited Approach Boundary",example:"3 ft 6 in",       meaning:"Unqualified persons may NOT cross this without escort." },
          { field:"Restricted Approach",      example:"1 ft 0 in",       meaning:"Qualified electricians only, with proper PPE." },
          { field:"Arc Flash Boundary",       example:"6 ft 2 in",       meaning:"Minimum distance from potential arc. Curable burn at boundary." },
        ]
      }
    ],
    quiz:[
      { q:"An arc flash requires you to physically touch an energized conductor to be injured.", options:["True — contact is required for injury","False — arc flash releases energy outward and injures by proximity"], answer:1 },
      { q:"The arc flash label on an MCC says 'Incident Energy: 18 cal/cm².' This means:", options:["The panel runs at 18 volts","You need PPE rated for at least 18 cal/cm² and must not get closer than the listed working distance","18 people can work on this panel safely","The panel was last inspected 18 months ago"], answer:1 },
      { q:"There is no arc flash label on a panel you need to open. You should:", options:["Open it carefully using standard rubber gloves","Do NOT open it — contact a qualified electrician to label it first","Assume it's low-voltage and safe","Ask your supervisor for verbal clearance"], answer:1 }
    ]
  },
  {
    id:"nfpa70e",
    icon:"📋",
    label:"NFPA 70E & PPE",
    color:"#00AAFF",
    slides:[
      {
        heading:"NFPA 70E — The Standard That Governs Electrical Safety",
        body:"NFPA 70E is the Standard for Electrical Safety in the Workplace. It is the primary guide for safe work practices involving electrical hazards in the US. At Dingfelder, all electrical work — including any opening of energized enclosures — must comply with NFPA 70E. It is also the standard OSHA references when citing electrical safety violations.",
        icon:"📋",
        list:[
          "NFPA 70E requires an energized electrical work permit for most live-work tasks",
          "De-energizing (LOTO) is the preferred approach — live work requires justification",
          "Arc flash hazard analysis must be performed for all work locations",
          "PPE must be matched to the specific incident energy at each location",
          "Employees must be trained annually to the standard",
        ],
        fact:"NFPA 70E's default position is: if it can be de-energized, it must be. Live electrical work requires a written permit and documented justification for why LOTO cannot be applied."
      },
      {
        heading:"Arc Flash PPE Categories — What You Wear and When",
        body:"NFPA 70E Table 130.5(C) defines four PPE categories based on incident energy. Each category specifies the minimum arc rating in cal/cm². At Dingfelder, your work location's arc flash label tells you which category applies.",
        icon:"🦺",
        ppeCategories:[
          { cat:"CAT 0",   cal:"N/A",      color:"#88CC00", items:"Safety glasses, leather gloves, non-melting long-sleeve shirt. No arc-rated FR clothing required." },
          { cat:"CAT 1",   cal:"4 cal/cm²", color:"#CCCC00", items:"Arc-rated FR shirt and pants or coverall. Face shield (4 cal). Safety glasses. Leather gloves. Hard hat." },
          { cat:"CAT 2",   cal:"8 cal/cm²", color:"#FF8800", items:"Arc-rated FR shirt and pants or coverall. Arc-rated face shield (8 cal) or arc flash suit hood. Hard hat. Leather gloves with insulating rubber gloves." },
          { cat:"CAT 3",   cal:"25 cal/cm²",color:"#FF4400", items:"Arc-rated jacket or coverall or rainwear (25 cal). Arc flash suit hood (25 cal). Hard hat. Leather gloves over insulating rubber gloves." },
          { cat:"CAT 4",   cal:"40 cal/cm²",color:"#CC0000", items:"Full arc flash suit (40+ cal). Arc flash suit hood. Hard hat with integrated face shield. Leather boots. Class 00+ rubber insulating gloves." },
        ]
      },
      {
        heading:"Approach Boundaries — The Three Lines You Must Know",
        body:"NFPA 70E defines three approach boundaries around energized electrical equipment. These are physical distances in space, not just PPE requirements. Your distance from the equipment determines what you may and may not do.",
        icon:"🚧",
        boundaries:[
          { name:"ARC FLASH BOUNDARY",    color:"#FF8800", desc:"At this distance, an unprotected worker would receive a curable burn (1.2 cal/cm²). Anyone inside this line MUST wear appropriate arc flash PPE. At Dingfelder substation, this boundary can be 20+ feet." },
          { name:"LIMITED APPROACH",      color:"#FF4400", desc:"Unqualified persons may NOT cross this line without a qualified electrician escort. The risk of shock and arc flash is significant inside this boundary." },
          { name:"RESTRICTED APPROACH",   color:"#CC0000", desc:"Qualified electricians only. Specific PPE, insulating tools, and insulating barriers required. Contact with energized parts is possible inside this boundary." },
        ],
        fact:"The Arc Flash Boundary is often the largest of the three — at high-voltage equipment, it can extend 10–20 feet or more. The label on the equipment tells you the exact distance."
      },
      {
        heading:"Rubber Insulating Gloves — Use and Inspection",
        body:"Rubber insulating gloves are one of the primary means of protecting against electrical shock during electrical work. They must be worn with leather protectors over them. The class of glove determines the maximum working voltage.",
        icon:"🧤",
        gloveClasses:[
          { cls:"Class 00", color:"#88CC00", maxVolt:"500V AC",  use:"Low-voltage work, commercial panels, 120/208V systems." },
          { cls:"Class 0",  color:"#CCCC00", maxVolt:"1,000V AC",use:"Low-voltage distribution, some MCC work." },
          { cls:"Class 1",  color:"#FF8800", maxVolt:"7,500V AC",use:"Medium-voltage work, 4.16 kV switchgear." },
          { cls:"Class 2",  color:"#FF4400", maxVolt:"17,000V AC",use:"Medium-voltage distribution, 12.47 kV." },
          { cls:"Class 3",  color:"#CC0000", maxVolt:"26,500V AC",use:"High-voltage work — rare, specialist use only." },
          { cls:"Class 4",  color:"#880000", maxVolt:"36,000V AC",use:"High-voltage transmission — specialist use only." },
        ],
        fact:"Rubber insulating gloves must be air-tested before each use (roll-up test) and must be within their 6-month electrical re-test interval. Never use gloves with visible cracks, cuts, or holes — even a pinhole is a failure."
      }
    ],
    quiz:[
      { q:"NFPA 70E's default position on working on energized equipment is:", options:["Live work is acceptable if you wear PPE","De-energize first (LOTO) — live work requires written permit and justification","Energized work is acceptable for tasks under 5 minutes","Supervision is sufficient without additional permits"], answer:1 },
      { q:"The arc flash label says 'Limited Approach Boundary: 3 ft 6 in.' You are an unqualified person. You may:", options:["Enter within 3 ft 6 in if you wear safety glasses","NOT cross the 3 ft 6 in line without a qualified electrician escort","Work inside the boundary if your supervisor approves","Cross the boundary if no live work is being performed"], answer:1 },
      { q:"Your rubber insulating gloves have a small pinhole in the left thumb. You should:", options:["Use them for low-voltage work only","Cover the pinhole with tape before use","Remove them from service — a pinhole is a failure","Use an extra layer of leather gloves over the top"], answer:2 }
    ]
  },
  {
    id:"dingfelder",
    icon:"🏭",
    label:"Dingfelder Electrical Systems",
    color:"#0088FF",
    slides:[
      {
        heading:"The Dingfelder Electrical System — Scale and Scope",
        body:"Understanding the scale of the Dingfelder electrical infrastructure is not optional for anyone who works near it. The campus operates at industrial utility scale — it is not comparable to a commercial building or typical manufacturing facility.",
        icon:"🏭",
        list:[
          "⚡ Primary service: 40+ MVA (megavolt-amperes) utility connection",
          "⚡ Primary substation EP-001: 115 kV → 12.47 kV step-down",
          "⚡ Switchgear building EP-002: 4.16 kV distribution",
          "⚡ Induction furnaces: 5–10 MW each, dedicated power supplies",
          "⚡ Motor Control Centers (MCCs): 480V throughout foundry, beam mill, salad plant",
          "⚡ Distribution feeders: two independent feeders (A and B) — feeder loss = partial blackout",
          "⚡ Emergency lighting: UPS-backed, activates within 10 seconds of power loss",
        ],
        fact:"The two induction furnaces together can draw 10–20 MW simultaneously. For reference, 1 MW = 1,000,000 watts. A typical US home uses about 1.25 kW. These furnaces draw the equivalent of 8,000–16,000 homes."
      },
      {
        heading:"MCC Room Rules — Every Time, No Exceptions",
        body:"Motor Control Centers are the nerve centers of the foundry and beam mill. They contain 480V breakers, motor starters, and variable frequency drives. Every time you enter an MCC room or open an MCC panel door, these rules apply.",
        icon:"🚪",
        list:[
          "1. Verify your work order and check the arc flash label before opening any panel",
          "2. Don arc flash PPE appropriate to the incident energy at this location",
          "3. Never open an energized MCC bucket without an energized work permit",
          "4. Use insulated tools — never use standard hand tools on energized circuits",
          "5. Work with one hand where possible — keeps heart outside the circuit",
          "6. Do not create a current path through your body (ground → energized part)",
          "7. Never rack in/out a breaker under load without arc flash PPE and justification",
          "8. Log in/out on the MCC room access log every entry",
        ]
      },
      {
        heading:"Working Near the Substation — Visitor and Worker Rules",
        body:"The EP-001 primary substation and EP-002 switchgear building are surrounded by security fencing and posted exclusion zone signs. These restrictions apply to all personnel — there are no exceptions based on seniority or familiarity.",
        icon:"⚠️",
        list:[
          "🚫 No visitor access inside substation fence — ever",
          "🚫 No photography near substation without written authorization",
          "⚡ Maintain 20-ft clearance from any outdoor energized equipment unless on a designated paved walkway",
          "⚡ Overhead lines cross portions of the campus — maintain 20-ft vertical clearance with any extended object",
          "👷 Substation access: qualified electricians only, with signed entry log",
          "📋 No solo work in the substation — two-person minimum for any substation entry",
          "🔴 If you see smoke, sparks, or arcing from any substation equipment — evacuate 100 ft and call 911",
        ],
        fact:"An arc flash at the primary substation could have a lethal arc flash boundary extending well beyond the fence perimeter. The fence exists for a reason. It is not a suggestion."
      }
    ],
    quiz:[
      { q:"The Dingfelder primary substation operates at approximately:", options:["480V","12,470V (12.47 kV) on the secondary side, fed from 115 kV utility","208V three-phase","4,160V only"], answer:1 },
      { q:"Before opening any MCC panel door, your first step is:", options:["Check that no production is running","Verify arc flash label and don appropriate PPE for the incident energy listed","Ask the operator if it's safe","Lock out the entire feeder"], answer:1 },
      { q:"You see sparks and a flash from the substation transformer yard. You should:", options:["Approach to investigate — you may be able to operate the emergency disconnect","Evacuate at least 100 feet and call 911 immediately — do NOT enter","Take a photo and report to your supervisor","Call the control room and wait for instructions before moving"], answer:1 }
    ]
  },
  {
    id:"loto_elec",
    icon:"🔒",
    label:"Electrical LOTO",
    color:"#FFD700",
    slides:[
      {
        heading:"Electrical LOTO — De-Energize Before You Work",
        body:"The single most effective protection against arc flash and electrical shock is de-energizing the circuit before you work on it. NFPA 70E and OSHA 29 CFR 1910.147 both require this unless there is a documented and justified reason why energized work is necessary. At Dingfelder, the default answer is always: de-energize and lock out.",
        icon:"🔒",
        list:[
          "Open the main disconnect at the MCC or panel — physical position, not HMI",
          "Apply your personal padlock to the disconnect hasp",
          "Attach completed Danger tag (name, date, reason, contact)",
          "Test: attempt to start equipment — it must NOT respond",
          "Verify with a calibrated non-contact voltage tester — confirm zero volts",
          "Discharge capacitors in furnace power supplies — contact Electrical dept",
          "For group LOTO: each worker applies their own lock to the hasp",
        ],
        fact:"A circuit that is de-energized and locked out has NO arc flash hazard and NO shock hazard. The entire arc flash PPE discussion applies only to work that cannot be de-energized. LOTO eliminates the hazard entirely."
      },
      {
        heading:"Verifying Zero Energy — The Voltage Test",
        body:"Applying a lock is not the end of electrical LOTO. You must verify that the isolation is complete using a calibrated instrument before touching any conductor. This is required even on systems where you personally applied the lockout.",
        icon:"🔬",
        steps:[
          "1. Select a calibrated non-contact voltage tester or digital multimeter",
          "2. Verify the tester works — test on a known live source first (verify tester is functional)",
          "3. Test all conductors in the work area — Line 1, Line 2, Line 3, and neutral",
          "4. Test line-to-line AND line-to-ground for each conductor",
          "5. Confirm all readings are zero volts before any contact",
          "6. If any reading is non-zero — stop. Do not proceed. Investigate the source.",
          "7. Discharge any stored energy (capacitors, UPS, back-fed circuits)",
        ],
        fact:"'Test before touch' is a habit that must become automatic. The NFPA 70E 'Electrically Safe Work Condition' specifically requires test verification as a distinct step — separate from, and after, lockout."
      },
      {
        heading:"Emergency Electrical Response — What To Do",
        body:"Electrical emergencies — shock, arc flash, fire — require a specific response. The wrong action can make an already catastrophic situation fatal for the victim, the rescuer, or both.",
        icon:"🚨",
        steps:[
          "SHOCK VICTIM: Do NOT touch the victim if the circuit may still be energized",
          "SHOCK VICTIM: De-energize the circuit before approaching — use an insulating object to push/pull if immediate",
          "SHOCK VICTIM: Call 911 — even if victim appears unharmed. Internal injuries and cardiac arrhythmia may be delayed",
          "ARC FLASH: Move all personnel away immediately — 100-ft minimum",
          "ELECTRICAL FIRE: CO₂ extinguisher only — NEVER water on energized equipment",
          "MCC ROOM SMOKE: Do NOT open panels — call 911, evacuate, shut main feeder if safe",
          "ALL EVENTS: Power company must be notified for any substation-level incident",
        ]
      }
    ],
    quiz:[
      { q:"The most effective way to protect yourself from arc flash during electrical maintenance is:", options:["Wear CAT 4 arc flash PPE","De-energize the circuit (LOTO) — this eliminates the arc flash hazard completely","Stand back from the panel","Have a spotter watch for arcing"], answer:1 },
      { q:"After locking out an MCC, you must verify zero volts by:", options:["Checking that the disconnect handle is in the OFF position","Testing all conductors with a calibrated voltage tester before any contact","Having the operator confirm the machine isn't running","Checking the panel light is off"], answer:1 },
      { q:"A coworker receives an electrical shock. The circuit may still be energized. You should:", options:["Grab them and pull them away from the equipment","Do NOT touch them — de-energize the circuit first, then call 911","Begin CPR immediately while they are still in contact","Push them away with your rubber-soled boot"], answer:1 }
    ]
  }
,
{
  id:"review",
  icon:"🧠",
  label:"Critical Review & Boundary Decisions",
  color:"#22CC66",
  slides:[
    {
      heading:"The Mistakes That Turn Routine Work Into Arc Flash Events",
      body:"Arc flash incidents rarely begin with dramatic intent. They begin with ordinary shortcuts: opening a panel without confirming qualification, assuming a closed cabinet is harmless, ignoring missing labels, bringing conductive tools into a live boundary, or treating a quick task as an exception to electrical discipline. At Dingfelder, that is how routine maintenance becomes a burn, blast, or fatality event.",
      icon:"🧠",
      list:[
        "Unqualified workers do not enter restricted or arc-flash boundaries.",
        "A missing label is a stop sign, not permission to guess.",
        "De-energized whenever possible is the default — not a best-case idea.",
        "Conductive tools, ladders, jewelry, and clutter multiply risk in energized spaces.",
      ],
      fact:"The most dangerous electrical shortcut is the one that feels normal because nothing bad happened the last time."
    },
    {
      heading:"Distance, Labels, and Boundaries Are Controls",
      body:"Electrical safety is not only about PPE. It is also about staying out of exposure zones. Arc-flash labels communicate incident energy, PPE category, and working distance. Shock boundaries identify who may approach. These controls matter even when no one is touching a conductor. Proximity alone can be enough to kill or permanently injure.",
      icon:"📏",
      list:[
        "Read and obey the label before the task begins.",
        "Qualified and unqualified personnel do not share the same approach rules.",
        "A panel can be dangerous to open even when the job sounds small.",
        "LOTO coordination is part of electrical discipline, not a separate topic.",
      ],
      fact:"A person can suffer life-changing burns from an electrical event without ever touching the source."
    },
    {
      heading:"What Good Electrical Discipline Looks Like",
      body:"The strongest electrical programs feel deliberate: qualified people plan the job, the equipment is de-energized whenever feasible, boundaries are respected, labels are treated as instructions, and the work area stays clean and controlled. When something is missing — a label, a permit decision, a lockout step, a qualified worker — the task stops until the gap is resolved.",
      icon:"⚡",
      list:[
        "Pause when information is missing.",
        "Coordinate electrical LOTO before cabinet or equipment access.",
        "Keep metal tools, ladders, and jewelry out of energized work zones.",
        "Treat 'quick' electrical tasks as seriously as large ones.",
      ],
      fact:"Professional electrical safety looks slower at the front end so nobody pays for haste at the back end."
    }
  ],
  quiz:[
    { q:"Which statement about arc flash is correct?", options:["It only injures workers who touch live conductors", "It can injure by heat, pressure, light, and shrapnel even without direct contact", "It is mainly a low-voltage nuisance", "It is a shock hazard only"], answer:1 },
    { q:"A panel has no arc-flash label. What is the right decision?", options:["Open it carefully and estimate the risk", "Treat the missing information as a stop condition and involve a qualified electrician", "Use heavier gloves and proceed", "Assume it is low energy because there is no label"], answer:1 },
    { q:"Why do approach boundaries matter for unqualified workers?", options:["Because boundaries only apply to managers", "Because proximity to energized equipment can be hazardous even without contact", "Because boundaries are only for utility lines", "Because boundaries mainly protect the equipment"], answer:1 },
    { q:"What does good electrical discipline usually start with?", options:["Working live to save downtime", "De-energizing whenever feasible and coordinating LOTO", "Opening the cabinet to see what is inside", "Borrowing tools from nearby mechanics"], answer:1 },
    { q:"Which item creates avoidable electrical risk near energized equipment?", options:["Nonconductive planning boards", "Metal ladders and loose conductive items", "Written permits", "Qualified supervision"], answer:1 },
    { q:"Why is 'it's just a quick task' a dangerous phrase around electrical work?", options:["Because quick tasks use more voltage", "Because shortcuts erase planning, boundary, and lockout discipline", "Because quick tasks are not allowed by OSHA", "Because quick tasks always require SCBA"], answer:1 },
    { q:"What is the best interpretation of an 18 cal/cm² incident-energy label?", options:["The panel output is 18 volts", "Only 18 people may work nearby", "The task requires protection and working-distance discipline matched to that energy level", "The panel was inspected 18 times"], answer:2 },
    { q:"Who should cross an electrical boundary to open or work inside equipment?", options:["Any experienced operator", "Only a qualified person with the appropriate controls and task justification", "Anyone wearing leather gloves", "Any contractor with tools"], answer:1 },
    { q:"What is the safest response to a cluttered or uncontrolled energized work area?", options:["Work faster before conditions worsen", "Pause, clean/control the area, and re-evaluate the task", "Ignore the clutter if the panel door opens fully", "Use a flashlight and continue"], answer:1 },
    { q:"Why is electrical LOTO part of arc-flash prevention?", options:["Because de-energized equipment removes or reduces the exposure that creates arc-flash risk", "Because LOTO is only needed for paperwork", "Because arc flash and shock have nothing to do with lockout", "Because labels replace lockout"], answer:0 },
    { q:"A maintenance worker is not qualified but says they will only stand close and watch. What is the issue?", options:["Watching is never allowed near any equipment", "Proximity inside restricted boundaries can still expose them to electrical hazards", "Watching is safe if the worker is calm", "Only touching conductors is restricted"], answer:1 },
    { q:"Which summary best matches a credible electrical safety culture?", options:["Move quickly, trust experience, and solve labels later", "Respect boundaries, stop when information is missing, de-energize when possible, and keep the zone controlled", "Rely on PPE first and planning second", "Only the voltage rating matters"], answer:1 }
  ]
}

];

function useAnim(dep) {
  const [v, setV] = useState(false);
  useEffect(() => { setV(false); const t = setTimeout(() => setV(true), 40); return () => clearTimeout(t); }, [dep]);
  return v;
}

function VoltageGrid({ locations }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:5, marginBottom:12 }}>
      {locations.map((loc,i) => (
        <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:10, padding:"8px 12px", background:"#020810", border:"1px solid #0a1825", borderLeft:"3px solid #0088FF", borderRadius:3 }}>
          <div>
            <div style={{ color:"#90c0ff", fontSize:12, fontFamily:"'IBM Plex Mono',monospace", fontWeight:600 }}>{loc.location}</div>
            <div style={{ color:"#556", fontSize:11, fontFamily:"'IBM Plex Mono',monospace", marginTop:2 }}>{loc.category}</div>
          </div>
          <div style={{ textAlign:"right", flexShrink:0 }}>
            <div style={{ color:"#00BFFF", fontSize:11, fontFamily:"'IBM Plex Mono',monospace" }}>{loc.voltage}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PPECategoryRow({ cat, cal, color, items }) {
  return (
    <div style={{ padding:"9px 12px", marginBottom:6, background:"#020810", border:`1px solid ${color}44`, borderLeft:`3px solid ${color}`, borderRadius:3 }}>
      <div style={{ display:"flex", gap:10, marginBottom:4 }}>
        <span style={{ color, fontSize:12, fontFamily:"'IBM Plex Mono',monospace", fontWeight:700 }}>{cat}</span>
        <span style={{ color:"#558", fontSize:11, fontFamily:"'IBM Plex Mono',monospace" }}>MIN {cal}</span>
      </div>
      <div style={{ color:"#aaa", fontSize:12, fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{items}</div>
    </div>
  );
}

function BoundaryRow({ name, color, desc }) {
  return (
    <div style={{ padding:"10px 12px", marginBottom:6, background:"#020810", border:`1px solid ${color}55`, borderLeft:`4px solid ${color}`, borderRadius:3 }}>
      <div style={{ color, fontFamily:"'IBM Plex Mono',monospace", fontSize:11, letterSpacing:2, marginBottom:5, fontWeight:700 }}>{name}</div>
      <div style={{ color:"#aaa", fontSize:13, fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{desc}</div>
    </div>
  );
}

function GloveRow({ cls, color, maxVolt, use }) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"80px 100px 1fr", gap:8, padding:"7px 10px", marginBottom:4, background:"#020810", border:"1px solid #0a1825", borderRadius:3 }}>
      <span style={{ color, fontFamily:"'IBM Plex Mono',monospace", fontSize:12, fontWeight:700 }}>{cls}</span>
      <span style={{ color:"#00BFFF", fontFamily:"'IBM Plex Mono',monospace", fontSize:11 }}>{maxVolt}</span>
      <span style={{ color:"#888", fontFamily:"'IBM Plex Sans',sans-serif", fontSize:12 }}>{use}</span>
    </div>
  );
}

function LabelField({ field, example, meaning }) {
  return (
    <div style={{ padding:"7px 10px", marginBottom:5, background:"#020810", border:"1px solid #0a1825", borderRadius:3 }}>
      <div style={{ display:"flex", gap:10, marginBottom:2 }}>
        <span style={{ color:"#00BFFF", fontSize:11, fontFamily:"'IBM Plex Mono',monospace", width:160, flexShrink:0 }}>{field}</span>
        <span style={{ color:"#FFD700", fontSize:11, fontFamily:"'IBM Plex Mono',monospace" }}>{example}</span>
      </div>
      <div style={{ color:"#888", fontSize:12, fontFamily:"'IBM Plex Sans',sans-serif" }}>{meaning}</div>
    </div>
  );
}

function ProgressBar({ current, total, color }) {
  return <div style={{ width:"100%", height:3, background:"#020810", borderRadius:2, overflow:"hidden" }}><div style={{ height:"100%", width:`${Math.max(3,(current/total)*100)}%`, background:color, transition:"width 0.4s ease" }} /></div>;
}

function StatBlock({ value, label, sub }) {
  return (
    <div style={{ textAlign:"center", padding:"14px", background:"#020810", border:"1px solid #00BFFF44", borderRadius:4, marginBottom:12 }}>
      <div style={{ fontSize:36, fontFamily:"'IBM Plex Mono',monospace", color:"#00BFFF", fontWeight:700, letterSpacing:2 }}>{value}</div>
      <div style={{ color:"#00BFFF", fontSize:10, letterSpacing:4, marginTop:2 }}>{label}</div>
      <div style={{ color:"#556", fontSize:11, marginTop:4, fontFamily:"'IBM Plex Sans',sans-serif" }}>{sub}</div>
    </div>
  );
}

function SlideView({ slide, color, onNext, onPrev, isFirst, isLast }) {
  const v = useAnim(slide.heading);
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", opacity:v?1:0, transform:v?"translateY(0)":"translateY(10px)", transition:"all 0.3s ease" }}>
      {slide.stat && <StatBlock {...slide.stat} />}
      <div style={{ fontSize:48, marginBottom:12, textAlign:"center", filter:"drop-shadow(0 0 20px rgba(0,180,255,0.5))" }}>{slide.icon}</div>
      <h2 style={{ margin:"0 0 10px", fontSize:22, fontWeight:800, fontFamily:"'IBM Plex Mono',monospace", color:"#e0f0ff", lineHeight:1.2 }}>{slide.heading}</h2>
      {slide.body && <p style={{ margin:"0 0 12px", fontSize:14, lineHeight:1.75, color:"#8aa0c0", fontFamily:"'IBM Plex Sans',sans-serif" }}>{slide.body}</p>}
      {slide.list && <ul style={{ margin:"0 0 12px", padding:0, listStyle:"none" }}>{slide.list.map((item,i)=><li key={i} style={{ padding:"7px 12px", marginBottom:5, background:"#020810", border:"1px solid #0a1825", borderLeft:`3px solid ${color}`, borderRadius:3, fontSize:13, color:"#8aa0c0", fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{item}</li>)}</ul>}
      {slide.steps && <ol style={{ margin:"0 0 12px", padding:0, listStyle:"none" }}>{slide.steps.map((s,i)=><li key={i} style={{ padding:"7px 12px", marginBottom:5, background:"#020810", border:"1px solid #0a1825", borderLeft:`3px solid ${color}`, borderRadius:3, fontSize:13, color:"#8aa0c0", fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{s}</li>)}</ol>}
      {slide.locations && <VoltageGrid locations={slide.locations} />}
      {slide.ppeCategories && <div style={{ marginBottom:12 }}>{slide.ppeCategories.map((p,i)=><PPECategoryRow key={i} {...p} />)}</div>}
      {slide.boundaries && <div style={{ marginBottom:12 }}>{slide.boundaries.map((b,i)=><BoundaryRow key={i} {...b} />)}</div>}
      {slide.gloveClasses && <div style={{ marginBottom:12 }}>{slide.gloveClasses.map((g,i)=><GloveRow key={i} {...g} />)}</div>}
      {slide.labelFields && <div style={{ marginBottom:12 }}>{slide.labelFields.map((f,i)=><LabelField key={i} {...f} />)}</div>}
      {slide.fact && <div style={{ padding:"11px 14px", background:`${color}12`, border:`1px solid ${color}44`, borderLeft:`4px solid ${color}`, borderRadius:3, marginBottom:12 }}><span style={{ fontSize:10, color, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:2, display:"block", marginBottom:3 }}>⚠ KEY FACT</span><span style={{ fontSize:13, color:"#ccc", fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{slide.fact}</span></div>}
      <div style={{ display:"flex", gap:8, marginTop:"auto", paddingTop:14 }}>
        {!isFirst && <button onClick={onPrev} style={{ flex:1, padding:"11px", background:"transparent", border:"1px solid #0a1825", borderRadius:3, color:"#334", cursor:"pointer", fontFamily:"'IBM Plex Mono',monospace", fontSize:12, letterSpacing:1 }}>← BACK</button>}
        <button onClick={onNext} style={{ flex:2, padding:"12px", background:color, border:"none", borderRadius:3, color:"#000", cursor:"pointer", fontSize:14, fontWeight:700, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:2 }}>{isLast?"TAKE QUIZ →":"NEXT →"}</button>
      </div>
    </div>
  );
}

function QuizView({ mod, onComplete }) {
  const [cur, setCur] = useState(0); const [sel, setSel] = useState(null); const [rev, setRev] = useState(false); const [score, setScore] = useState(0); const [done, setDone] = useState(false);
  const q = mod.quiz[cur]; const color = mod.color; const passed = score >= Math.ceil(mod.quiz.length*0.67);
  const pick = i => { if(rev) return; setSel(i); setRev(true); if(i===q.answer) setScore(s=>s+1); };
  const next = () => { if(cur+1>=mod.quiz.length){setDone(true);return;} setCur(c=>c+1); setSel(null); setRev(false); };
  if(done) return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center" }}>
      <div style={{ fontSize:56, marginBottom:14 }}>{passed?"✅":"❌"}</div>
      <h2 style={{ color, fontFamily:"'IBM Plex Mono',monospace", fontSize:24, margin:"0 0 8px" }}>{passed?"MODULE PASSED":"REVIEW REQUIRED"}</h2>
      <p style={{ color:"#556", fontSize:14, marginBottom:20 }}>{score}/{mod.quiz.length} correct.{!passed&&" Score 2/3 or better to pass."}</p>
      <button onClick={()=>onComplete(passed)} style={{ padding:"12px 28px", background:passed?color:"transparent", border:`1px solid ${color}`, borderRadius:3, color:passed?"#000":color, cursor:"pointer", fontFamily:"'IBM Plex Mono',monospace", fontSize:13, letterSpacing:2 }}>{passed?"CONTINUE →":"RETRY"}</button>
    </div>
  );
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ color, fontFamily:"'IBM Plex Mono',monospace", fontSize:11, letterSpacing:3, marginBottom:6 }}>QUIZ — {mod.label.toUpperCase()} · Q{cur+1}/{mod.quiz.length}</div>
      <ProgressBar current={cur} total={mod.quiz.length} color={color} />
      <h2 style={{ color:"#e0f0ff", fontFamily:"'IBM Plex Mono',monospace", fontSize:17, margin:"16px 0", lineHeight:1.4 }}>{q.q}</h2>
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:8 }}>
        {q.options.map((opt,i)=>{
          let bg="#020810",bdr="#0a1825",clr="#8aa0c0";
          if(rev){if(i===q.answer){bg=`${color}18`;bdr=color;clr="#fff";}else if(i===sel){bg="#100008";bdr="#cc2244";clr="#ff99aa";}}
          else if(sel===i){bdr=color;}
          return <button key={i} onClick={()=>pick(i)} style={{ padding:"13px 14px", background:bg, border:`1px solid ${bdr}`, borderRadius:3, color:clr, cursor:rev?"default":"pointer", fontFamily:"'IBM Plex Sans',sans-serif", fontSize:13.5, textAlign:"left", lineHeight:1.4, transition:"all 0.15s" }}><span style={{ color, fontWeight:700, marginRight:8, fontFamily:"'IBM Plex Mono',monospace" }}>{String.fromCharCode(65+i)}.</span>{opt}{rev&&i===q.answer&&<span style={{ float:"right" }}>✓</span>}{rev&&i===sel&&i!==q.answer&&<span style={{ float:"right" }}>✗</span>}</button>;
        })}
      </div>
      {rev && <button onClick={next} style={{ marginTop:16, padding:"12px", background:color, border:"none", borderRadius:3, color:"#000", cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:2 }}>{cur+1>=mod.quiz.length?"SEE RESULTS":"NEXT →"}</button>}
    </div>
  );
}

export default function ArcFlashTraining() {
  const [screen, setScreen] = useState("home");
  const location = useLocation();
  const activeCategory = typeof location.state?.activeCategory === "string" ? location.state.activeCategory : "electrical-safety";
  const [recordStatus, setRecordStatus] = useState({ busy: false, message: "", error: "" });
  const recordSavedRef = useRef(false);
  const [modIdx, setModIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [phase, setPhase] = useState("slides");
  const [completed, setCompleted] = useState({});
  const [scanLine, setScanLine] = useState(0);
  useEffect(() => { const t = setInterval(()=>setScanLine(x=>(x+1)%100),30); return ()=>clearInterval(t); }, []);

  const mod = MODULES[modIdx];
  const completedCount = Object.keys(completed).length;
  const startMod = idx => { setModIdx(idx); setSlideIdx(0); setPhase("slides"); setScreen("module"); };
  const handleNext = () => { if(slideIdx+1>=mod.slides.length) setPhase("quiz"); else setSlideIdx(s=>s+1); };
  const handlePrev = () => { if(slideIdx>0) setSlideIdx(s=>s-1); };
  const handleQuizDone = passed => {
    if(!passed){setSlideIdx(0);setPhase("slides");return;}
    const newCompleted = {...completed,[mod.id]:true};
    setCompleted(newCompleted);
    const next = MODULES.findIndex((m,i)=>i>modIdx&&!newCompleted[m.id]);
    if(next===-1||Object.keys(newCompleted).length>=MODULES.length){setScreen("complete");} else startMod(next);
  };

  const scanStyle = { background:`linear-gradient(180deg, transparent ${scanLine}%, rgba(0,180,255,0.04) ${scanLine+2}%, transparent ${scanLine+4}%)` };

  if(screen==="home") return (
    <div style={{ minHeight:"100vh", background:"#010408", fontFamily:"'IBM Plex Sans',sans-serif", display:"flex", flexDirection:"column", ...scanStyle }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={{ background:"#00BFFF", padding:"10px 20px", display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontWeight:700, fontSize:13, letterSpacing:2, color:"#000" }}>DINGFELDER INDUSTRIAL — ELECTRICAL SAFETY TRAINING</span>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:11, color:"#001" }}>NFPA 70E · OSHA 1910.333</span>
      </div>
      <div style={{ padding:"32px 24px 20px", borderBottom:"1px solid #040d18" }}>
        <div style={{ color:"#00BFFF", fontFamily:"'IBM Plex Mono',monospace", fontSize:9, letterSpacing:5, marginBottom:10 }}>HAZARD — ELECTRICAL ARC FLASH · SHOCK · ELECTROCUTION</div>
        <h1 style={{ margin:0, fontSize:42, fontWeight:700, fontFamily:"'IBM Plex Mono',monospace", color:"#e0f0ff", lineHeight:1.0 }}>ARC FLASH &<br /><span style={{ color:"#00BFFF" }}>ELECTRICAL SAFETY</span></h1>
        <div style={{ width:50, height:2, background:"#00BFFF", margin:"16px 0 12px" }} />
        <p style={{ color:"#556", fontSize:14, lineHeight:1.6, marginBottom:0 }}>NFPA 70E · OSHA 29 CFR 1910.333 · 40+ MVA Campus Service</p>
      </div>
      <div style={{ padding:"16px 24px", flex:1 }}>
        <div style={{ height:2, background:"#040d18", borderRadius:2, overflow:"hidden", marginBottom:16 }}><div style={{ height:"100%", width:`${(completedCount/MODULES.length)*100}%`, background:"#00BFFF", transition:"width 0.4s" }} /></div>
        {MODULES.map((m,i)=>{
          const done=completed[m.id];
          return <div key={m.id} onClick={()=>startMod(i)} style={{ display:"flex", alignItems:"center", gap:12, padding:"13px 14px", marginBottom:7, background:"#010810", border:`1px solid ${done?m.color+"55":"#040d18"}`, borderRadius:4, cursor:"pointer" }}>
            <div style={{ width:42, height:42, borderRadius:6, background:done?m.color:`${m.color}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, border:`1px solid ${m.color}33`, flexShrink:0 }}>{done?"✓":m.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ color:done?m.color:"#c0d8f0", fontFamily:"'IBM Plex Mono',monospace", fontWeight:700, fontSize:14 }}>{m.label}</div>
              <div style={{ color:"#334", fontSize:11 }}>{m.slides.length} slides · {m.quiz.length} questions</div>
            </div>
            <span style={{ color:done?m.color:"#223", fontSize:16 }}>{done?"✓":"→"}</span>
          </div>;
        })}
      </div>
    </div>
  );


  useEffect(() => {
    if (screen !== "complete") {
      recordSavedRef.current = false;
      setRecordStatus({ busy: false, message: "", error: "" });
      return;
    }

    if (recordSavedRef.current) return;
    recordSavedRef.current = true;

    let cancelled = false;
    setRecordStatus({ busy: true, message: "", error: "" });

    persistTrainingRecordNetlifyIdentity(null, {
      attemptId: `/arcflash:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
      modulePath: "/arcflash",
      moduleTitle: "Arc Flash & Electrical Safety",
      categoryKey: activeCategory,
      categoryLabel: "Electrical Safety",
      score: MODULES.length,
      quizCorrect: MODULES.length,
      quizTotal: MODULES.length,
      passed: true,
      completedAt: new Date().toISOString(),
      runtimeMinutes: 25,
      certificateClass: "Portal Completion Record",
      certificateEligible: true,
      source: "custom-module",
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
      cancelled = true;
    };
  }, [screen, activeCategory]);

  if(screen==="complete") return (
    <div style={{ minHeight:"100vh", background:"#010408", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:28, textAlign:"center" }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={{ fontSize:64, marginBottom:16 }}>✅</div>
      <h1 style={{ color:"#00BFFF", fontFamily:"'IBM Plex Mono',monospace", fontSize:28, margin:"0 0 10px" }}>ARC FLASH TRAINING<br />COMPLETE</h1>
      <p style={{ color:"#556", fontSize:14, fontFamily:"'IBM Plex Sans',sans-serif", marginBottom:24, lineHeight:1.6, maxWidth:440 }}>All 4 modules passed. NFPA 70E awareness training complete for the Dingfelder campus.<br />Annual recertification required. Hands-on equipment training required before live electrical work.</p>
      <div style={{ color:"#224", fontSize:10, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:2 }}>DINGFELDER SAFETY · NFPA 70E · OSHA 1910.333 · {new Date().toLocaleDateString()}</div>

      {recordStatus.message ? (
        <div style={{ padding:"12px 14px", background:"rgba(34,204,102,0.10)", border:"1px solid rgba(34,204,102,0.35)", borderRadius:8, color:"#9AF0B9", fontSize:13, lineHeight:1.6, maxWidth:520, marginBottom:16 }}>
          {recordStatus.message}
        </div>
      ) : null}
      {recordStatus.error ? (
        <div style={{ padding:"12px 14px", background:"rgba(255,107,0,0.10)", border:"1px solid rgba(255,107,0,0.35)", borderRadius:8, color:"#FFB27A", fontSize:13, lineHeight:1.6, maxWidth:520, marginBottom:16 }}>
          {recordStatus.error}
        </div>
      ) : null}
      <button onClick={()=>{setCompleted({});setScreen("home");}} style={{ marginTop:20, padding:"10px 24px", background:"transparent", border:"1px solid #0a1825", borderRadius:3, color:"#334", cursor:"pointer", fontFamily:"'IBM Plex Mono',monospace", fontSize:11, letterSpacing:2 }}>RESTART</button>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#010408", display:"flex", flexDirection:"column", ...scanStyle }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={{ background:"#010c18", borderBottom:`2px solid ${mod.color}44`, padding:"10px 18px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:7 }}>
          <button onClick={()=>setScreen("home")} style={{ background:"none", border:"none", color:"#334", cursor:"pointer", fontFamily:"'IBM Plex Mono',monospace", fontSize:11, letterSpacing:1, padding:0 }}>← HOME</button>
          <div style={{ flex:1 }} />
          <span style={{ color:mod.color, fontFamily:"'IBM Plex Mono',monospace", fontSize:11 }}>{phase==="slides"?`${slideIdx+1}/${mod.slides.length}`:"QUIZ"}</span>
        </div>
        <ProgressBar current={phase==="slides"?slideIdx+1:mod.slides.length+1} total={mod.slides.length+1} color={mod.color} />
        <div style={{ marginTop:9, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:18 }}>{mod.icon}</span>
          <div>
            <div style={{ color:"#c0d8f0", fontFamily:"'IBM Plex Mono',monospace", fontWeight:700, fontSize:13 }}>{mod.label}</div>
            <div style={{ color:"#334", fontSize:10, letterSpacing:2 }}>ARC FLASH & ELECTRICAL SAFETY</div>
          </div>
          <div style={{ marginLeft:"auto", display:"flex", gap:5 }}>
            {MODULES.map((m,i)=><div key={m.id} style={{ width:18, height:18, borderRadius:"50%", background:completed[m.id]?"#22CC66":i===modIdx?m.color:"#040d18", border:`1px solid ${i===modIdx?m.color:"#0a1825"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, transition:"all 0.3s" }}>{completed[m.id]?"✓":m.icon}</div>)}
          </div>
        </div>
      </div>
      <div style={{ flex:1, padding:"18px 20px", display:"flex", flexDirection:"column", maxWidth:700, width:"100%", margin:"0 auto", boxSizing:"border-box" }}>
        {phase==="slides"
          ? <SlideView slide={mod.slides[slideIdx]} color={mod.color} onNext={handleNext} onPrev={handlePrev} isFirst={slideIdx===0&&modIdx===0} isLast={slideIdx===mod.slides.length-1} />
          : <QuizView mod={mod} onComplete={handleQuizDone} />}
      </div>
    </div>
  );
}
