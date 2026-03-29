import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { persistTrainingRecordNetlifyIdentity } from "../auth/netlifyIdentity.js";
import { resolveModuleRecordMeta } from "../data/moduleRegistry.js";

// ─── DATA ────────────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: "intro",
    title: "LOTO Overview",
    subtitle: "29 CFR 1910.147 — What & Why",
    icon: "⚡",
    color: "#FF6B00",
    slides: [
      {
        heading: "What Is Lockout / Tagout?",
        body: `Lockout/Tagout (LOTO) is a federally-mandated OSHA safety procedure under 29 CFR 1910.147 — "The Control of Hazardous Energy." It protects workers from the unexpected energization, startup, or release of stored energy during service and maintenance activities.`,
        visual: "law",
        fact: "OSHA estimates LOTO prevents 120 fatalities and 50,000 injuries every year in the U.S."
      },
      {
        heading: "Why LOTO Matters at Dingfelder",
        body: `The Dingfelder Foundry operates some of the most energy-dense equipment in manufacturing. Induction furnaces draw 5–10 MW each. The hydraulic DISA MK3 molding machines operate at high pressure. Conveyors, sand systems, and MCCs all store residual energy that can kill or maim if not properly controlled.`,
        visual: "energy",
        fact: "Stored energy types at Dingfelder include: electrical (MCC/furnace), hydraulic (DISA ram), pneumatic (compressed air), gravitational (crane/ladle), and thermal (molten iron up to 2,800°F)."
      },
      {
        heading: "Who Must Follow LOTO?",
        body: `ALL authorized employees performing service or maintenance on equipment at Dingfelder must follow LOTO. Any affected employee working in the area of a LOTO must be notified before work begins. Contractors must coordinate with the Dingfelder Safety Department and comply with the site LOTO program.`,
        visual: "who",
        fact: "Authorized Employee = a person who locks out machines. Affected Employee = a person who operates machines being serviced."
      },
      {
        heading: "The Six Types of Hazardous Energy",
        body: `Before applying LOTO, you must identify ALL energy sources present on the equipment. At Dingfelder, any single machine may have multiple simultaneous energy types that all require isolation.`,
        visual: "six",
        list: ["⚡ Electrical — motors, furnace power supplies, MCC starters", "🔧 Hydraulic — DISA MK3 squeeze ram (high pressure oil)", "💨 Pneumatic — compressed air actuators, sand blast valves", "🔽 Gravitational — suspended loads, cranes, auto-pour tilt frames", "🌡️ Thermal — molten iron, furnace coils, heated sand", "🔩 Mechanical — spring-loaded assemblies, rotating shafts"]
      }
    ],
    quiz: [
      { q: "LOTO is governed by which OSHA standard?", options: ["29 CFR 1910.132", "29 CFR 1910.147", "29 CFR 1926.502", "29 CFR 1910.119"], answer: 1 },
      { q: "Which of these is NOT a type of hazardous energy?", options: ["Hydraulic", "Thermal", "Acoustic vibration", "Gravitational"], answer: 2 },
      { q: "An 'Authorized Employee' is:", options: ["Any employee on the plant floor", "A person who operates the equipment", "A person trained to lock out machines for service", "A manager who approves LOTO permits"], answer: 2 }
    ]
  },
  {
    id: "hardware",
    title: "LOTO Hardware",
    subtitle: "Locks, Tags, Hasps & Devices",
    icon: "🔒",
    color: "#FFD700",
    slides: [
      {
        heading: "Personal Locks — One Person, One Lock",
        body: `Each authorized employee at Dingfelder is issued a personal padlock. Your lock is YOUR responsibility. Only you hold the key. You apply it. You remove it. No supervisor may remove your lock without following the emergency removal procedure documented in the LOTO program.`,
        visual: "lock",
        fact: "Locks must be individually keyed — no two employees share the same key. Locks must be durable and substantial enough to prevent removal without excessive force."
      },
      {
        heading: "Tags — When Locks Cannot Be Applied",
        body: `Tags (Danger/Do Not Operate) are used only when it is physically impossible to apply a lock — for example, on a valve without a hasp point. Tags are NOT a substitute for locks. They provide a WARNING only. At Dingfelder, tags must be completed with: employee name, date, reason, and contact extension.`,
        visual: "tag",
        fact: "OSHA requires that tagout be used only if the employer demonstrates that tagout provides equivalent protection to lockout — a high bar to meet."
      },
      {
        heading: "Hasps — Group Lockout",
        body: `When multiple tradespeople are working on the same isolation point (e.g., during a planned DISA MK3 overhaul with electrical, hydraulic, and pneumatic contractors), a hasp is used. Each worker applies their own personal lock to the hasp. Work cannot resume until ALL locks are removed.`,
        visual: "hasp",
        fact: "A hasp can typically hold 6–8 personal locks. For larger shutdowns, a group lockout box is used where all individual lock keys are stored."
      },
      {
        heading: "Isolation Devices — Dingfelder-Specific",
        body: `Different energy types require different hardware. Know your isolation devices before you start work.`,
        visual: "devices",
        list: ["🔌 Circuit breaker lockout — MCC breakers feeding furnace power supplies", "🔵 Ball valve lockout — compressed air lines to DISA sand blast valves", "🔵 Gate valve lockout — hydraulic supply to DISA MK3 squeeze cylinder", "🔌 Plug lockout — small motors and hand tools", "🧲 Electrical panel lockout — main disconnect covers"]
      }
    ],
    quiz: [
      { q: "When can a tag substitute for a lock?", options: ["Whenever it's more convenient", "Only when physically impossible to apply a lock", "When the supervisor authorizes it", "For short-duration tasks under 15 minutes"], answer: 1 },
      { q: "During group lockout on the DISA MK3, when can the machine be re-energized?", options: ["When the lead tradesperson removes their lock", "When the supervisor authorizes it", "Only after ALL workers have removed their personal locks", "After 30 minutes with no activity"], answer: 2 },
      { q: "Your personal padlock key:", options: ["Should be kept at the crew supervisor's office", "Only you hold it — no shared keys", "Can be held by a buddy for emergencies", "Is interchangeable with other Dingfelder locks"], answer: 1 }
    ]
  },
  {
    id: "procedure",
    title: "The 8-Step LOTO Procedure",
    subtitle: "Standard Sequence — Every Time",
    icon: "📋",
    color: "#00C896",
    slides: [
      {
        heading: "Step 1 — Identify All Energy Sources",
        body: `Before touching the equipment, obtain the Machine-Specific LOTO Procedure (MSLP) from the Dingfelder safety binder or digital twin terminal. Review ALL energy types present. For the DISA MK3, this includes electrical (MCC), hydraulic (squeeze), and pneumatic (sand blow). For the induction furnace, it includes electrical, thermal, and hydraulic (tilting mechanism).`,
        step: 1,
        visual: "step1"
      },
      {
        heading: "Step 2 — Notify Affected Employees",
        body: `Inform all employees in the area that the equipment is being taken offline for service. This includes molding operators, pour technicians, and crane operators if working near the melt deck. Post physical notification at the machine's operator panel.`,
        step: 2,
        visual: "step2"
      },
      {
        heading: "Step 3 — Shut Down Equipment Normally",
        body: `Use the normal shutdown procedure to power down the machine. For the DISA MK3, use Command_CycleStop and allow the machine to complete its current cycle. For induction furnaces, follow the controlled power-down sequence. Do NOT E-stop as your shutdown method — E-stops are emergency devices, not isolation points.`,
        step: 3,
        visual: "step3",
        fact: "E-stops do NOT satisfy LOTO requirements. They are safety devices, not energy isolation devices."
      },
      {
        heading: "Step 4 — Isolate the Energy Source",
        body: `Open the main disconnect, close the ball valve, or activate the appropriate isolating device for each identified energy source. At Dingfelder MCCs, the disconnect must be physically moved to the OFF position — not just turned off via the HMI.`,
        step: 4,
        visual: "step4"
      },
      {
        heading: "Step 5 — Apply Lockout / Tagout Devices",
        body: `Apply your personal padlock to the isolation point. If using a hasp for group work, apply your lock to the hasp. Attach a completed LOTO tag. Complete the tag with: your name, date/time, reason for lockout, and your plant extension or radio channel.`,
        step: 5,
        visual: "step5"
      },
      {
        heading: "Step 6 — Release or Restrain Stored Energy",
        body: `CRITICAL STEP — Isolation alone does not eliminate stored energy. You must: bleed down hydraulic lines (DISA MK3 squeeze circuit), exhaust pneumatic accumulators and valve bodies, block or restrain gravitational loads (crane, auto-pour tilt frame), allow thermal cooldown or use PPE for residual heat, discharge electrical capacitors in furnace power supplies.`,
        step: 6,
        visual: "step6",
        fact: "The DISA MK3 hydraulic system can hold pressure even after the hydraulic pump is off. Always verify zero pressure at the gauge before entering the machine."
      },
      {
        heading: "Step 7 — Verify Isolation (Try-Out Test)",
        body: `Attempt to start the machine using the normal start command. The machine must NOT respond. Also verify with a calibrated meter: electrical circuits read zero voltage, hydraulic circuits read zero pressure, pneumatic circuits are fully vented. This is the TRY-OUT TEST and it is non-negotiable.`,
        step: 7,
        visual: "step7",
        fact: "Never assume isolation is complete. Always VERIFY with instruments. Use a non-contact voltage tester before touching any electrical conductor."
      },
      {
        heading: "Step 8 — Perform the Work Safely",
        body: `Work may now begin. All workers must maintain their personal locks on the isolation point for the duration of the task. If you must leave the area for any reason, you may NOT remove your lock and trust others are still locked out — your lock stays until YOU are ready to restore the equipment.`,
        step: 8,
        visual: "step8"
      }
    ],
    quiz: [
      { q: "Can an E-stop be used as the primary energy isolation device for LOTO?", options: ["Yes, it cuts all power", "No — E-stops are emergency devices, not isolation points", "Yes, if approved by a supervisor", "Only for tasks under 10 minutes"], answer: 1 },
      { q: "After isolating the DISA MK3 hydraulic supply valve, your next action is:", options: ["Begin work immediately", "Wait 5 minutes then start", "Release/bleed stored hydraulic pressure and verify zero at the gauge", "Have a coworker try to restart the machine"], answer: 2 },
      { q: "The Try-Out Test means:", options: ["Testing your lock is strong", "Attempting to start the machine to confirm it will NOT energize", "Checking that your tag is filled out correctly", "Verifying coworkers are notified"], answer: 1 }
    ]
  },
  {
    id: "restore",
    title: "Restoring Equipment",
    subtitle: "Safe Return to Service",
    icon: "🔄",
    color: "#4DA6FF",
    slides: [
      {
        heading: "Restoration — The Reverse Sequence",
        body: `Restoring equipment to service follows a strict sequence that mirrors the LOTO application in reverse. Skipping steps or rushing restoration is one of the most common causes of LOTO-related incidents. Every step must be completed before the next one begins.`,
        visual: "restore",
        list: ["1. Confirm all work is complete — tools cleared, guards reinstalled", "2. Ensure all workers are clear of the danger zone", "3. Remove LOTO devices — each worker removes their own lock", "4. Restore energy sources in the correct sequence per the MSLP", "5. Notify affected employees that the equipment is being returned to service", "6. Test/start the equipment using normal procedures"]
      },
      {
        heading: "Guard Replacement — Non-Negotiable",
        body: `All machine guards, covers, and barriers removed during maintenance MUST be reinstalled before restoration. At Dingfelder, the DISA MK3 requires all guard interlocks (GuardsClosed_OK) to be satisfied before the machine will accept a cycle start command. For furnaces, all cooling water connections and refractory inspection covers must be verified.`,
        visual: "guards",
        fact: "Removing a LOTO lock with guards still open is a serious safety violation and OSHA recordable event."
      },
      {
        heading: "Emergency Lock Removal",
        body: `If an employee leaves the facility without removing their lock, the Dingfelder Safety Manager may authorize an emergency removal following this procedure: (1) Verify the employee is not in the machine, (2) Attempt to contact the employee, (3) Document the removal, (4) Notify the employee upon their return. Emergency removal is NEVER routine — it requires written authorization.`,
        visual: "emergency"
      }
    ],
    quiz: [
      { q: "Before removing your LOTO lock, you must first:", options: ["Get supervisor approval", "Confirm all work is complete and all workers are clear of the machine", "Wait for a shift change", "Complete a written report"], answer: 1 },
      { q: "Who removes your personal LOTO lock?", options: ["The crew lead", "The safety manager", "YOU — the authorized employee who applied it", "Any authorized employee"], answer: 2 },
      { q: "On the DISA MK3, which interlock must be satisfied before a cycle start?", options: ["MoldGap_OK", "GuardsClosed_OK", "Command_JogEnable", "SqueezePressure_High"], answer: 1 }
    ]
  },
  {
    id: "dingfelder",
    title: "Dingfelder Equipment Guide",
    subtitle: "Machine-Specific LOTO Points",
    icon: "🏭",
    color: "#C879FF",
    slides: [
      {
        heading: "DISA MK3 Molding Machine",
        body: `The DISA MK3 is a hydraulically-actuated vertical mold forming machine. It operates a continuous Blow–Squeeze–Push cycle. Two units are in service: MK3_01 (Mold Line A) and MK3_02 (Mold Line B).`,
        visual: "disa",
        list: ["⚡ Electrical: MCC main disconnect (lock)", "🔧 Hydraulic: Supply ball valve at HPU (lock + bleed port verification)", "💨 Pneumatic: Air supply ball valve, accumulator bleed valve", "⚠️ Stored Energy: Squeeze cylinder may hold pressure — verify zero PSI at gauge", "🔽 Gravitational: Sand feed hopper — confirm empty or blocked before entry"]
      },
      {
        heading: "Induction Melting Furnaces (ME-0001, ME-0002)",
        body: `Each induction furnace draws 5–10 MW from a dedicated power supply. The furnaces share one overhead crane system for ladle logistics. The tilt mechanism is hydraulically actuated.`,
        visual: "furnace",
        list: ["⚡ Electrical: Furnace main disconnect at power supply cabinet (lock)", "⚡ Electrical: MCC feeder breaker (secondary lock point)", "🔧 Hydraulic: Tilt cylinder supply valve (lock + bleed)", "🌡️ Thermal: Furnace shell remains HOT — verify cooldown or use Class D PPE", "⚠️ Induction coil: Capacitors in power supply must be discharged — contact Electrical dept"]
      },
      {
        heading: "Sand Preparation System (SP-0000)",
        body: `The sand system includes the Speed Muller, Return Sand Silo, Bucket Elevator, Sand Cooler, Belt Conveyors, Magnetic Separator, and Rotary Shakeout. Multiple energy points exist at each piece of equipment.`,
        visual: "sand",
        list: ["⚡ Electrical: Individual MCC starters for each motor (lock each one)", "💨 Pneumatic: Dust collection blast-air valves (lock + exhaust)", "🔽 Gravitational: Sand silo contents — do not enter silo without silo entry permit", "🔩 Mechanical: Muller rotating blades — verify stopped and blocked", "⚠️ Hot sand: Return sand from shakeout can exceed 300°F — use thermal PPE"]
      },
      {
        heading: "Compressed Air System (CA-0001)",
        body: `The plant compressed air system operates at 1,850 SCFM with multiple compressors, dryers, and a 9,000-gallon receiver. Pneumatic isolation is required whenever working on any air-actuated system.`,
        visual: "air",
        list: ["💨 Main receiver isolation: Inlet valves at each compressor (lock)", "💨 Branch isolation: Ball valves at each zone distribution point (lock)", "⚠️ Air receiver: Must be fully depressurized before any vessel entry or repair", "🔌 Compressor motors: MCC disconnects (lock each compressor separately)", "⚠️ Dryer heaters: Electrical disconnects for heated dryer units"]
      }
    ],
    quiz: [
      { q: "Before entering the DISA MK3 squeeze area, you must verify:", options: ["The machine is in Manual mode", "Zero hydraulic pressure at the gauge after isolation", "The sand hopper is full", "The molding operator has left the area"], answer: 1 },
      { q: "The induction furnace capacitors are a concern because:", options: ["They make the machine louder", "They store electrical energy that must be discharged before contact", "They affect the hydraulic pressure", "They control the tilt mechanism"], answer: 1 },
      { q: "Entering the return sand silo requires:", options: ["Standard LOTO only", "LOTO plus a confined space entry permit", "Only a supervisor's verbal approval", "No special requirements if sand level is low"], answer: 1 }
    ]
  }
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const ProgressBar = ({ current, total, color }) => (
  <div style={{ width: "100%", height: 4, background: "#1a1a1a", borderRadius: 2, overflow: "hidden" }}>
    <div style={{
      height: "100%", width: `${(current / total) * 100}%`,
      background: color, borderRadius: 2,
      transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)"
    }} />
  </div>
);

const EnergyIcon = ({ type }) => {
  const icons = { law: "📜", energy: "⚡", who: "👷", six: "6️⃣", lock: "🔒", tag: "🏷️", hasp: "⛓️", devices: "🔧", step1: "🔍", step2: "📢", step3: "🛑", step4: "🔌", step5: "🔒", step6: "💨", step7: "✅", step8: "🪛", restore: "🔄", guards: "🛡️", emergency: "🚨", disa: "⚙️", furnace: "🔥", sand: "🏖️", air: "💨" };
  return <span style={{ fontSize: 64, filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))" }}>{icons[type] || "⚡"}</span>;
};

const SlideView = ({ slide, moduleColor, onNext, onPrev, isFirst, isLast }) => {
  const safeSlide = slide || { heading: "LOTO Module", body: "This slide could not be loaded.", visual: "lock" };
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(false); const t = setTimeout(() => setVisible(true), 50); return () => clearTimeout(t); }, [safeSlide.heading]);

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: "all 0.35s ease"
    }}>
      {/* Step badge */}
      {safeSlide.step && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%", background: moduleColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 900, color: "#000", fontFamily: "'Barlow Condensed', sans-serif"
          }}>{safeSlide.step}</div>
          <div style={{ height: 2, flex: 1, background: `${moduleColor}33` }} />
          <span style={{ color: moduleColor, fontSize: 11, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 3, textTransform: "uppercase" }}>Step {safeSlide.step} of 8</span>
        </div>
      )}

      {/* Visual icon */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <EnergyIcon type={safeSlide.visual} />
      </div>

      {/* Heading */}
      <h2 style={{
        margin: "0 0 14px", fontSize: 26, fontWeight: 800,
        fontFamily: "'Barlow Condensed', sans-serif",
        color: "#fff", letterSpacing: 0.5, lineHeight: 1.2
      }}>{safeSlide.heading}</h2>

      {/* Body */}
      <p style={{
        margin: "0 0 16px", fontSize: 15, lineHeight: 1.7,
        color: "#bbb", fontFamily: "'IBM Plex Sans', sans-serif"
      }}>{safeSlide.body}</p>

      {/* List */}
      {safeSlide.list && (
        <ul style={{ margin: "0 0 16px", padding: 0, listStyle: "none" }}>
          {safeSlide.list.map((item, i) => (
            <li key={i} style={{
              padding: "7px 12px", marginBottom: 6,
              background: "#111", border: `1px solid #2a2a2a`,
              borderLeft: `3px solid ${moduleColor}`,
              borderRadius: 4, fontSize: 13,
              color: "#ccc", fontFamily: "'IBM Plex Sans', sans-serif"
            }}>{item}</li>
          ))}
        </ul>
      )}

      {/* Fact callout */}
      {safeSlide.fact && (
        <div style={{
          padding: "12px 16px", background: `${moduleColor}15`,
          border: `1px solid ${moduleColor}40`, borderRadius: 6,
          marginBottom: 16
        }}>
          <span style={{ fontSize: 12, color: moduleColor, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 4 }}>⚠ KEY FACT</span>
          <span style={{ fontSize: 13, color: "#ddd", fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.5 }}>{safeSlide.fact}</span>
        </div>
      )}

      {/* Nav */}
      <div style={{ display: "flex", gap: 10, marginTop: "auto", paddingTop: 16 }}>
        {!isFirst && (
          <button onClick={onPrev} style={{
            flex: 1, padding: "12px", background: "transparent", border: "1px solid #333",
            borderRadius: 6, color: "#888", cursor: "pointer", fontSize: 14,
            fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 1, transition: "all 0.2s"
          }}>← BACK</button>
        )}
        <button onClick={onNext} style={{
          flex: 2, padding: "12px", background: moduleColor, border: "none",
          borderRadius: 6, color: isLast ? "#000" : "#000", cursor: "pointer", fontSize: 15, fontWeight: 700,
          fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 2, transition: "all 0.2s"
        }}>{isLast ? "TAKE QUIZ →" : "NEXT →"}</button>
      </div>
    </div>
  );
};

const QuizView = ({ questions, moduleColor, onComplete, moduleName }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const safeQuestions = Array.isArray(questions) ? questions : [];
  const q = safeQuestions[current];

  const handleSelect = (idx) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === q.answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= safeQuestions.length) { setDone(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
    setRevealed(false);
  };

  const passed = score >= 2;

  if (!q) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>⚠️</div>
        <h2 style={{ color: moduleColor, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 30, margin: "0 0 8px" }}>QUIZ UNAVAILABLE</h2>
        <p style={{ color: "#aaa", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, marginBottom: 24 }}>The selected LOTO quiz items could not be loaded for this module.</p>
        <button onClick={() => onComplete(false)} style={{ padding: "12px 32px", background: "transparent", border: `1px solid ${moduleColor}`, borderRadius: 6, color: moduleColor, cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, letterSpacing: 2, fontWeight: 700 }}>RETURN</button>
      </div>
    );
  }

  if (done) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>{passed ? "✅" : "❌"}</div>
        <h2 style={{ color: moduleColor, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, margin: "0 0 8px" }}>
          {passed ? "MODULE PASSED" : "REVIEW REQUIRED"}
        </h2>
        <p style={{ color: "#aaa", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, marginBottom: 24 }}>
          You answered {score} of {safeQuestions.length} questions correctly.
          {!passed && " You must score 2/3 or better to proceed. Please review the slides."}
        </p>
        <div style={{
          padding: "16px 32px", background: passed ? moduleColor : "#333",
          borderRadius: 8, marginBottom: 16
        }}>
          <span style={{ color: "#000", fontWeight: 800, fontSize: 24, fontFamily: "'Barlow Condensed', sans-serif" }}>
            {score}/{safeQuestions.length}
          </span>
        </div>
        <button onClick={() => onComplete(passed)} style={{
          padding: "12px 32px", background: passed ? moduleColor : "transparent",
          border: passed ? "none" : `1px solid ${moduleColor}`,
          borderRadius: 6, color: passed ? "#000" : moduleColor,
          cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 15, letterSpacing: 2, fontWeight: 700
        }}>{passed ? "CONTINUE →" : "RETAKE MODULE"}</button>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: 20 }}>
        <span style={{ color: moduleColor, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: 3 }}>QUIZ — {moduleName.toUpperCase()} • QUESTION {current + 1}/{questions.length}</span>
        <ProgressBar current={current} total={questions.length} color={moduleColor} />
      </div>

      <h2 style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, margin: "0 0 24px", lineHeight: 1.3 }}>
        {q.q}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {q.options.map((opt, i) => {
          let bg = "#111", border = "#2a2a2a", color = "#ccc";
          if (revealed) {
            if (i === q.answer) { bg = `${moduleColor}25`; border = moduleColor; color = "#fff"; }
            else if (i === selected && i !== q.answer) { bg = "#3a1515"; border = "#cc3333"; color = "#ff8888"; }
          } else if (selected === i) { bg = "#1a1a1a"; border = moduleColor; }

          return (
            <button key={i} onClick={() => handleSelect(i)} style={{
              padding: "14px 16px", background: bg,
              border: `1px solid ${border}`, borderRadius: 6,
              color, cursor: revealed ? "default" : "pointer",
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14,
              textAlign: "left", transition: "all 0.2s", lineHeight: 1.4
            }}>
              <span style={{ color: moduleColor, fontWeight: 700, marginRight: 10, fontFamily: "'Barlow Condensed', sans-serif" }}>{String.fromCharCode(65 + i)}.</span>
              {opt}
              {revealed && i === q.answer && <span style={{ float: "right" }}>✓</span>}
              {revealed && i === selected && i !== q.answer && <span style={{ float: "right" }}>✗</span>}
            </button>
          );
        })}
      </div>

      {revealed && (
        <button onClick={handleNext} style={{
          marginTop: 20, padding: "13px", background: moduleColor, border: "none",
          borderRadius: 6, color: "#000", cursor: "pointer", fontSize: 15, fontWeight: 700,
          fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 2
        }}>{current + 1 >= questions.length ? "SEE RESULTS" : "NEXT QUESTION →"}</button>
      )}
    </div>
  );
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

function formatCategoryLabel(categoryKey) {
  if (typeof categoryKey !== "string" || !categoryKey.trim()) return "A.I.R.O.N. training";
  return categoryKey
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

export default function LOTOTraining() {
  const location = useLocation();
  const [screen, setScreen] = useState("home"); // home | module | complete
  const [moduleIdx, setModuleIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [phase, setPhase] = useState("slides"); // slides | quiz
  const [completedModules, setCompletedModules] = useState({});
  const [allDone, setAllDone] = useState(false);
  const recordSavedRef = useRef(false);
  const activeCategory = typeof location.state?.activeCategory === "string" ? location.state.activeCategory : "foundry";

  const mod = MODULES[moduleIdx] || MODULES[0];

  useEffect(() => {
    if (screen !== "complete") {
      recordSavedRef.current = false;
      return;
    }

    if (recordSavedRef.current) return;
    recordSavedRef.current = true;

    let cancelled = false;

    const recordMeta = resolveModuleRecordMeta({
      path: "/loto",
      label: "LOTO — Foundry Focus",
      categoryKey: activeCategory,
      categoryLabel: formatCategoryLabel(activeCategory),
      source: "custom-module",
    });

    persistTrainingRecordNetlifyIdentity(null, {
      attemptId: `/loto:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
      moduleId: recordMeta.moduleId,
      moduleVersion: recordMeta.version,
      modulePath: "/loto",
      moduleTitle: "LOTO — Foundry Focus",
      categoryKey: activeCategory,
      categoryLabel: formatCategoryLabel(activeCategory),
      requirementIds: recordMeta.requirementIds,
      requirementType: recordMeta.category,
      completionBucket: recordMeta.category,
      reviewEnabled: Boolean(recordMeta.reviewEnabled),
      recordRequired: recordMeta.recordRequired !== false,
      score: MODULES.length,
      quizCorrect: MODULES.length,
      quizTotal: MODULES.length,
      passed: true,
      completedAt: new Date().toISOString(),
      runtimeMinutes: 20,
      certificateClass: "Portal Completion Record",
      certificateEligible: true,
      source: "custom-module",
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
  }, [activeCategory, screen]);

  const startModule = (idx) => {
    setModuleIdx(idx);
    setSlideIdx(0);
    setPhase("slides");
    setScreen("module");
  };

  const handleNextSlide = () => {
    if (slideIdx + 1 >= mod.slides.length) { setPhase("quiz"); }
    else setSlideIdx(s => s + 1);
  };

  const handlePrevSlide = () => {
    if (slideIdx > 0) setSlideIdx(s => s - 1);
  };

  const handleQuizComplete = (passed) => {
    if (!passed) { setSlideIdx(0); setPhase("slides"); return; }
    setCompletedModules(c => ({ ...c, [mod.id]: true }));
    const nextIdx = moduleIdx + 1;
    if (nextIdx >= MODULES.length) { setAllDone(true); setScreen("complete"); }
    else { startModule(nextIdx); }
  };

  // ── HOME ──────────────────────────────────────────────────────────────────
  if (screen === "home") return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a",
      fontFamily: "'IBM Plex Sans', sans-serif",
      display: "flex", flexDirection: "column"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "#0d0d0d", borderBottom: "1px solid #1e1e1e", padding: "16px 24px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 40, height: 40, background: "#FF6B00", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⚡</div>
        <div>
          <div style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 800, letterSpacing: 1 }}>A.I.R.O.N. SAFETY TRAINING</div>
          <div style={{ color: "#555", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>LOTO — FOUNDRY FOCUS</div>
        </div>
        <div style={{ marginLeft: "auto", padding: "4px 12px", background: "#FF6B0022", border: "1px solid #FF6B0044", borderRadius: 4 }}>
          <span style={{ color: "#FF6B00", fontSize: 11, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 2 }}>OSHA 29 CFR 1910.147</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "40px 24px 28px", borderBottom: "1px solid #151515" }}>
        <div style={{ color: "#FF6B00", fontSize: 11, letterSpacing: 4, fontFamily: "'Barlow Condensed', sans-serif", marginBottom: 10, textTransform: "uppercase" }}>Federal Compliance Training</div>
        <h1 style={{ margin: 0, fontSize: 42, fontWeight: 900, fontFamily: "'Barlow Condensed', sans-serif", color: "#fff", lineHeight: 1.1 }}>
          LOCKOUT / TAGOUT<br />
          <span style={{ color: "#FF6B00" }}>TRAINING PROGRAM</span>
        </h1>
        <p style={{ color: "#666", fontSize: 14, marginTop: 12, marginBottom: 0, lineHeight: 1.6 }}>
          Control of Hazardous Energy · 5 Modules · Required for all authorized employees
        </p>
      </div>

      {/* Modules */}
      <div style={{ padding: "20px 24px", flex: 1 }}>
        <div style={{ color: "#444", fontSize: 11, letterSpacing: 3, fontFamily: "'Barlow Condensed', sans-serif", marginBottom: 14, textTransform: "uppercase" }}>Training Modules</div>
        {MODULES.map((m, i) => {
          const done = completedModules[m.id];
          const locked = i > 0 && !completedModules[MODULES[i - 1].id];
          return (
            <div key={m.id} onClick={() => !locked && startModule(i)} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 16px", marginBottom: 8,
              background: locked ? "#090909" : "#111",
              border: `1px solid ${done ? m.color + "60" : locked ? "#151515" : "#1e1e1e"}`,
              borderRadius: 8, cursor: locked ? "not-allowed" : "pointer",
              transition: "all 0.2s", opacity: locked ? 0.5 : 1
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 8,
                background: done ? m.color : locked ? "#1a1a1a" : `${m.color}22`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                border: done ? "none" : `1px solid ${m.color}44`, flexShrink: 0
              }}>{done ? "✓" : m.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: done ? m.color : "#ddd", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: 0.5 }}>{m.title}</div>
                <div style={{ color: "#555", fontSize: 12 }}>{m.subtitle}</div>
              </div>
              <div style={{ color: locked ? "#333" : done ? m.color : "#444", fontSize: 18, flexShrink: 0 }}>
                {locked ? "🔒" : done ? "✓" : "→"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ padding: "16px 24px", borderTop: "1px solid #151515", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#333", fontSize: 12 }}>Pass each module to unlock the next</span>
        <span style={{ color: "#333", fontSize: 12 }}>Minimum score: 2/3 per module</span>
      </div>
    </div>
  );

  // ── COMPLETE ───────────────────────────────────────────────────────────────
  if (screen === "complete") return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 32, textAlign: "center"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={{ fontSize: 80, marginBottom: 24 }}>🏆</div>
      <h1 style={{ color: "#FF6B00", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 38, fontWeight: 900, margin: "0 0 12px" }}>TRAINING COMPLETE</h1>
      <p style={{ color: "#aaa", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
        You have completed all 5 LOTO training modules.<br />
        This session satisfies the Dingfelder LOTO awareness requirement under 29 CFR 1910.147.<br />
        Present your completion record to your supervisor.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%", maxWidth: 400, marginBottom: 32 }}>
        {MODULES.map(m => (
          <div key={m.id} style={{ padding: "10px", background: `${m.color}15`, border: `1px solid ${m.color}40`, borderRadius: 6 }}>
            <span style={{ color: m.color, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13 }}>{m.icon} {m.title}</span>
          </div>
        ))}
      </div>
      <div style={{ color: "#444", fontSize: 12, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 2 }}>
        DINGFELDER SAFETY TRAINING · OSHA 29 CFR 1910.147 · {new Date().toLocaleDateString()}
      </div>
    </div>
  );

  // ── MODULE ─────────────────────────────────────────────────────────────────
  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", display: "flex", flexDirection: "column",
      fontFamily: "'IBM Plex Sans', sans-serif"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Module header */}
      <div style={{ background: "#0d0d0d", borderBottom: "1px solid #1e1e1e", padding: "12px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <button onClick={() => setScreen("home")} style={{
            background: "none", border: "none", color: "#555", cursor: "pointer",
            fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, letterSpacing: 1, padding: 0
          }}>← BACK</button>
          <div style={{ flex: 1 }} />
          <span style={{ color: mod.color, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: 2 }}>
            {phase === "slides" ? `${slideIdx + 1}/${mod.slides.length}` : "QUIZ"}
          </span>
        </div>
        <ProgressBar
          current={phase === "slides" ? slideIdx + 1 : mod.slides.length + 1}
          total={mod.slides.length + 1}
          color={mod.color}
        />
        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>{mod.icon}</span>
          <div>
            <div style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 16 }}>{mod.title}</div>
            <div style={{ color: "#555", fontSize: 11 }}>{mod.subtitle}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", maxWidth: 700, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
        {phase === "slides"
          ? <SlideView
              slide={mod.slides[slideIdx]}
              moduleColor={mod.color}
              onNext={handleNextSlide}
              onPrev={handlePrevSlide}
              isFirst={slideIdx === 0}
              isLast={slideIdx === mod.slides.length - 1}
            />
          : <QuizView
              questions={mod.quiz}
              moduleColor={mod.color}
              moduleName={mod.title}
              onComplete={handleQuizComplete}
            />
        }
      </div>
    </div>
  );
}
