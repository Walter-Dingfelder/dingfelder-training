import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { persistTrainingRecordNetlifyIdentity } from "../auth/netlifyIdentity.js";

// ─── ROLE → CONTEXT MAP ───────────────────────────────────────────────────────
const ROLE_CONTEXT = {
  "Oilfield Operator":     { facility:"BLDG-040", zone:"Wells & Separator",  scba:true  },
  "Gas Well Operator":     { facility:"BLDG-040", zone:"Wellhead Areas",     scba:true  },
  "Propane Farm Tech":     { facility:"NG-002",   zone:"Propane Storage Farm",scba:false },
  "Maintenance Tech":      { facility:"CAMPUS",   zone:"All High-Risk Areas", scba:true  },
  "Electrician":           { facility:"CAMPUS",   zone:"Utility Areas",      scba:false },
  "default":               { facility:"CAMPUS",   zone:"Any Gas-Risk Area",  scba:false },
};

// ─── MODULE DATA ──────────────────────────────────────────────────────────────
const MODULES = [
  {
    id:"what",
    icon:"☠️",
    label:"What Is H₂S",
    color:"#FF3300",
    slides:[
      {
        heading:"Hydrogen Sulfide — The Invisible Killer",
        body:"Hydrogen sulfide (H₂S) is a colorless, flammable, extremely toxic gas produced naturally at oil and gas wells, in separators, and anywhere organic material decomposes. At the Dingfelder oilfield facility, raw wellhead gas from all three production wells must be treated as potentially containing H₂S until air monitoring confirms otherwise.",
        icon:"☠️",
        monitor:{ label:"H₂S DETECTED", ppm:0.5, status:"TRACE", color:"#FFD700" },
        fact:"H₂S is heavier than air (density 1.19 vs air = 1.0) and accumulates in low spots — trenches, vaults, sumps, and the base of separator vessels."
      },
      {
        heading:"Why You Cannot Trust Your Nose",
        body:"At low concentrations (0.01–1 ppm), H₂S smells like rotten eggs. This seems like a useful warning — but it is dangerously unreliable. At concentrations above 100 ppm, H₂S causes immediate olfactory fatigue. Your nose shuts down completely. You lose all smell of the gas. Workers have walked into fatal H₂S atmospheres because they 'couldn't smell anything.'",
        icon:"👃",
        monitor:{ label:"H₂S — OLFACTORY FATIGUE ZONE", ppm:150, status:"DANGER", color:"#FF3300" },
        fact:"NEVER rely on your sense of smell to determine if H₂S is present. Always use a calibrated 4-gas monitor."
      },
      {
        heading:"H₂S Exposure Levels — What Happens to You",
        body:"The effects of H₂S escalate with frightening speed. Understanding these levels is not academic — it determines whether you walk away or whether your coworkers are calling 911 for you.",
        icon:"📊",
        levels:[
          { ppm:"0.01 – 1",    label:"Threshold",      desc:"Detectable rotten-egg odor. Begin monitoring.",             color:"#88CC00" },
          { ppm:"1 – 5",       label:"Nuisance",        desc:"Eye and throat irritation. Verify ventilation.",            color:"#CCCC00" },
          { ppm:"10",          label:"OSHA CEILING",    desc:"Do not exceed — evacuate. Legal exposure limit.",           color:"#FF8800" },
          { ppm:"50 – 100",    label:"Serious",         desc:"Severe eye and respiratory damage within 1 hour.",          color:"#FF5500" },
          { ppm:"100 – 300",   label:"RAPID DANGER",    desc:"Olfactory fatigue. Lose all smell. Rapid incapacitation.", color:"#FF2200" },
          { ppm:"300+",        label:"IDLH",            desc:"Immediately Dangerous to Life and Health. Seconds to death.",color:"#CC0000" },
          { ppm:"500 – 1000",  label:"LETHAL",          desc:"Unconscious within 1–2 breaths. Fatal.",                   color:"#880000" },
        ]
      },
      {
        heading:"Where H₂S Is Found at Dingfelder",
        body:"Not every part of campus has H₂S risk — but the risk areas are serious. Know exactly where they are before you go near them.",
        icon:"📍",
        list:[
          "🛢️ BLDG-040 Well #1, #2, #3 — raw wellhead gas, no odorization",
          "🏗️ Gas/Liquid Separator — H₂S concentrates in vapor space and liquid dump",
          "💨 Separator vent stack — downwind plume in wind conditions",
          "🔧 Oilfield process piping — any open flange or connection",
          "🕳️ Low-lying areas near the separator — H₂S pools in depressions",
          "⚠️ Any area where raw gas is vented, sampled, or tested",
        ],
        fact:"The propane farm (NG-002) does NOT normally contain H₂S — propane is processed and odorized. However, any raw gas from BLDG-040 systems in an upset condition could migrate."
      }
    ],
    quiz:[
      { q:"Why can't you rely on the rotten-egg smell to detect H₂S?", options:["The smell is too faint to notice","H₂S causes olfactory fatigue — your nose shuts down above 100 ppm","The smell only occurs outdoors","H₂S at Dingfelder has been odorized to remove the smell"], answer:1 },
      { q:"The OSHA ceiling limit for H₂S exposure is:", options:["50 ppm","100 ppm","10 ppm","1 ppm"], answer:2 },
      { q:"H₂S is heavier than air. During a release outdoors, it will:", options:["Rise and disperse safely","Drift downwind and pool in low-lying areas, trenches, and sumps","Disperse evenly at breathing height","Only accumulate inside enclosed buildings"], answer:1 }
    ]
  },
  {
    id:"monitor",
    icon:"📡",
    label:"Gas Monitoring",
    color:"#FF8800",
    slides:[
      {
        heading:"Your 4-Gas Monitor — The Tool That Keeps You Alive",
        body:"Every person entering BLDG-040 well areas or the separator must carry a calibrated 4-gas personal monitor. This device continuously samples the air around you and alarms before concentrations reach dangerous levels. A 4-gas monitor measures: H₂S, Carbon Monoxide (CO), Oxygen (O₂), and LEL (combustible gas).",
        icon:"📡",
        monitor:{ label:"4-GAS MONITOR — ALL CLEAR", ppm:0, status:"NORMAL", color:"#22CC66" },
        list:[
          "H₂S — alarm at 1 ppm (low), 5 ppm (high) — factory defaults",
          "CO — alarm at 25 ppm (low), 50 ppm (high)",
          "O₂ — alarm below 19.5% (deficient) or above 23.5% (enriched)",
          "LEL — alarm at 10% LEL (low), 25% LEL (high)",
        ],
        fact:"A monitor that has not been bump-tested today is considered non-functional. Bump test before every entry into a gas-risk area."
      },
      {
        heading:"Reading Your Monitor — Alarms and What They Mean",
        body:"Your monitor will alarm audibly (beep), visually (LED flash), and vibrate. Do not silence and continue. Every alarm is a directive to act.",
        icon:"🔔",
        alarmLevels:[
          { level:"LOW ALARM", color:"#FFD700", action:"Investigate source. Improve ventilation. Alert supervisor. Do not progress further into area." },
          { level:"HIGH ALARM", color:"#FF5500", action:"EVACUATE immediately. Do not touch electrical switches. Move upwind. Call emergency line from safe zone." },
          { level:"STEL ALARM", color:"#FF2200", action:"Short-Term Exposure Limit exceeded. Exit area. Medical evaluation required before re-entry." },
          { level:"TWA ALARM",  color:"#CC0000", action:"Time-Weighted Average exceeded for your shift. Stop work. Report to Safety Manager." },
        ],
        fact:"If your monitor alarms and you are unsure which gas triggered it, assume H₂S and evacuate. You have seconds, not minutes, to decide correctly."
      },
      {
        heading:"Pre-Entry Atmospheric Testing",
        body:"Before entering any enclosed space, separator, or low-lying area at the oilfield facility, atmospheric testing is mandatory. This is not a formality — this is what separates a near-miss from a fatality.",
        icon:"🧪",
        steps:[
          "1. Calibrate or bump-test monitor within 24 hours of use",
          "2. Sample from a safe position — extend monitor on probe or wand into the space first",
          "3. Sample at multiple levels: low (H₂S sinks), mid, and high (CO rises)",
          "4. Allow 30 seconds at each level for readings to stabilize",
          "5. All four readings must be in safe range before entry is permitted",
          "6. Continuous monitoring required throughout — clip to lapel or chest",
        ]
      }
    ],
    quiz:[
      { q:"A 4-gas monitor measures which four gases?", options:["H₂S, CO, O₂, LEL","H₂S, propane, CO₂, NO₂","H₂S, methane, O₂, SO₂","CO, CO₂, LEL, H₂S"], answer:0 },
      { q:"When your monitor sounds a HIGH ALARM, you must:", options:["Silence it and investigate","Note the reading and continue cautiously","EVACUATE immediately — do not touch switches — move upwind","Call your supervisor before moving"], answer:2 },
      { q:"Before entering a low-lying area near the separator, you must:", options:["Check wind direction only","Bump test your monitor and sample the atmosphere — test LOW level first since H₂S sinks","Have a supervisor present","Wear your hard hat"], answer:1 }
    ]
  },
  {
    id:"scba",
    icon:"🫁",
    label:"SCBA & Rescue",
    color:"#0088FF",
    slides:[
      {
        heading:"Self-Contained Breathing Apparatus (SCBA)",
        body:"When H₂S concentrations are unknown, suspected above 10 ppm, or when entering a confined space with gas risk, a Self-Contained Breathing Apparatus (SCBA) must be worn. An SCBA supplies your own air from a compressed cylinder — it does not filter the surrounding air. This distinction is critical: air-purifying respirators and dust masks do NOT protect against H₂S.",
        icon:"🫁",
        fact:"Air-purifying respirators (half-face, full-face with cartridges) are NEVER acceptable for H₂S entry above IDLH or when concentrations are unknown. SCBA only.",
        list:[
          "SCBA cylinder: 30 or 45-minute rating at normal breathing rate",
          "Low-air alarm sounds at ~25% remaining — that's your exit signal",
          "PASS device (Personal Alert Safety System) alarms if you stop moving",
          "Full donning time for trained personnel: 60 seconds or less",
          "Always verify partner SCBA before entering — two-person minimum",
        ]
      },
      {
        heading:"The Buddy System — Non-Negotiable",
        body:"No person enters a potential H₂S atmosphere alone. Ever. This rule has no exceptions, no 'it'll just take a second,' and no 'I've done it before alone.' The reason is simple: at concentrations above 300 ppm, you can lose consciousness with your first breath. If you go in alone, no one knows you're down.",
        icon:"👥",
        list:[
          "Minimum TWO people for any H₂S risk entry",
          "One person is the ENTRANT — inside the space or risk area",
          "One person is the STANDBY — outside, in communication at all times",
          "Standby does NOT enter if entrant goes down — calls for trained rescue",
          "Radio or hard-wire communication maintained throughout entry",
          "Entry permit signed before entry — both names, time in, time out",
        ],
        fact:"The most common H₂S fatalities involve a first victim going down and an untrained second person entering to 'help' — becoming a second victim. The standby's job is to call rescue, not to enter."
      },
      {
        heading:"H₂S Rescue — What You Do and Don't Do",
        body:"If a coworker is overcome by H₂S, your instinct will be to rush in and help. That instinct is wrong and will get you killed. The correct response requires discipline.",
        icon:"🚨",
        steps:[
          "1. DO NOT ENTER without your SCBA fully donned and functioning",
          "2. CALL 911 immediately — announce H₂S victim, give location",
          "3. Call Campus Emergency Line simultaneously",
          "4. Alert other personnel — establish upwind perimeter",
          "5. Only trained, SCBA-equipped rescuers may enter",
          "6. Drag rescue only from safe distance using escape rope or pole",
          "7. Move victim to fresh air — begin rescue breathing if trained",
          "8. Administer oxygen (15 L/min) — maintain until EMS arrives",
        ],
        fact:"H₂S does not absorb through skin. Once removed to fresh air, a victim's prognosis improves dramatically if treated within minutes. Speed of rescue, not heroics inside the space, determines survival."
      }
    ],
    quiz:[
      { q:"Which respiratory protection is acceptable for entry into an unknown H₂S atmosphere?", options:["Half-face respirator with organic vapor cartridges","Any full-face respirator","SCBA only — supplied-air from your own cylinder","P100 filter respirator"], answer:2 },
      { q:"A coworker collapses inside the separator area. You are the standby. Your first action is:", options:["Run in to grab them before you lose them","CALL 911 and the Campus Emergency Line — DO NOT enter without SCBA","Ask other workers for help first","Try to pull them out through the window"], answer:1 },
      { q:"The SCBA low-air alarm means:", options:["Your cylinder is completely empty","You have approximately 25% air remaining — begin exiting immediately","A minor leak is detected in the mask","Your cylinder needs recalibration"], answer:1 }
    ]
  },
  {
    id:"emergency",
    icon:"🚨",
    label:"Emergency Response",
    color:"#CC0000",
    slides:[
      {
        heading:"H₂S Emergency — The Correct Sequence",
        body:"When a gas alarm sounds or H₂S is suspected at BLDG-040, the response sequence must be automatic. Hesitation, debate, and 'wait and see' have no place. This sequence should be memorized.",
        icon:"🚨",
        steps:[
          "1. ALERT — shout 'GAS ALARM' and activate nearest alarm station",
          "2. EVACUATE — all non-SCBA personnel move upwind immediately",
          "3. NO PHONES — do not use cell phones until outside exclusion zone",
          "4. NO VEHICLES — do not start engines near the affected area",
          "5. ACCOUNT — assemble at Oilfield Muster Point (south gate, outside fence)",
          "6. CALL — 911 + Campus Emergency Line from outside the zone",
          "7. HEADCOUNT — report any missing persons to incident commander",
          "8. WAIT — do not re-enter until Safety Officer declares all-clear",
        ]
      },
      {
        heading:"Dingfelder Campus H₂S Muster Points",
        body:"Your muster point depends on your assigned work area. Get there. Stay there. Answer when your name is called.",
        icon:"📍",
        list:[
          "🛢️ BLDG-040 Well Field: South Gate — outside security fence, upwind",
          "🏗️ Separator Area: South Gate — 200 ft minimum from separator",
          "🔧 Oilfield Process Building: South Gate — exterior, west side",
          "⚠️ Campus-Wide H₂S event: Main Visitor Entrance — 500 ft from BLDG-040",
          "Wind direction matters — always position yourself UPWIND of the source",
        ],
        fact:"Upwind means the wind is blowing FROM the leak TOWARD you — so you need to move in the OPPOSITE direction of wind travel, away from the source."
      },
      {
        heading:"After a Gas Event — Re-Entry Protocol",
        body:"The all-clear is not declared just because the alarm stops. H₂S can linger in low spots, equipment voids, and dead-end piping for hours after the initial release. Re-entry requires a formal clearance process.",
        icon:"✅",
        list:[
          "All-clear may ONLY be declared by the Dingfelder Safety Manager",
          "Continuous air monitoring must show < 1 ppm H₂S before re-entry",
          "Ventilation must be verified as functional and continuous",
          "All personnel must re-brief before re-entering",
          "Incident report must be initiated — root cause identified before restart",
          "SCBA standby required for initial re-entry inspection, even after all-clear",
        ]
      }
    ],
    quiz:[
      { q:"After hearing a gas alarm at BLDG-040, you have a vehicle nearby. You should:", options:["Drive the vehicle upwind immediately","Do NOT start the vehicle — ignition is an ignition source — evacuate on foot upwind","Drive to the main gate and call from there","Leave the vehicle and radio for help from inside it"], answer:1 },
      { q:"The all-clear to re-enter BLDG-040 after an H₂S event can be given by:", options:["The most senior operator on site","Any person with an SCBA","The Dingfelder Safety Manager only, after confirmed air monitoring","The 911 dispatcher"], answer:2 },
      { q:"At your assigned muster point, you notice one coworker is missing. You should:", options:["Assume they drove home","Report the missing person to the incident commander immediately","Go back in to find them","Wait 10 minutes before reporting"], answer:1 }
    ]
  }
,
{
  id:"review",
  icon:"🧠",
  label:"Critical Review & Decision Drills",
  color:"#22CC66",
  slides:[
    {
      heading:"The Four Rules That Matter Most",
      body:"If H₂S is involved, the rules must already be in your head before the alarm sounds. Do not trust your sense of smell. Treat every monitor alarm as real. Move upwind or crosswind immediately. Never attempt a rescue unless you are trained, equipped, and directed to do so. These are the rules that prevent one victim from becoming two or three.",
      icon:"🧠",
      list:[
        "Smell is not a detector. A calibrated monitor is.",
        "An alarm is a command to act, not a suggestion to investigate casually.",
        "Wind direction determines where you live and where gas travels.",
        "Unprotected rescue is one of the deadliest decisions in gas work.",
      ],
      fact:"The most common pattern in fatal H₂S events is hesitation, followed by an unprotected rescue attempt."
    },
    {
      heading:"SCBA Is Emergency Life Support — Not Casual PPE",
      body:"SCBA is for trained, fit-tested, ready responders who understand cylinder time, low-air alarms, partner checks, and emergency egress. It is not a substitute for good planning, and it does not turn an untrained worker into a rescuer. On the Dingfelder campus, SCBA awareness means knowing when it is required, what it does, and when you must stay out instead of trying to help.",
      icon:"🫁",
      list:[
        "SCBA supplies breathable air from the cylinder. It does not filter H₂S from the atmosphere.",
        "Cylinder duration is limited and decreases with stress or heavy work.",
        "A low-air alarm is an exit signal, not permission to keep working.",
        "If you are not trained and equipped, your role is evacuation, accountability, and emergency notification.",
      ],
      fact:"Knowing that you are not the rescuer can be the decision that saves everyone."
    },
    {
      heading:"What Good Response Looks Like",
      body:"Strong H₂S response is fast, boring, and disciplined. Alarm sounds. Personnel alert others. Everyone evacuates in the correct direction. No one starts engines or makes ignition hazards in the zone. Accountability happens at muster. Missing persons are reported to command. Re-entry waits for formal clearance. When every step is boring and automatic, the response is working.",
      icon:"🚨",
      list:[
        "Alert others immediately and clearly.",
        "Evacuate without debate or delay.",
        "Report location, headcount, and any missing persons from a safe zone.",
        "Do not re-enter until the incident commander or safety officer declares all-clear.",
      ],
      fact:"The safest emergency response is the one that removes improvisation."
    }
  ],
  quiz:[
    { q:"Why is 'I don't smell anything' never an acceptable reason to stay in an H₂S risk area?", options:["Because H₂S has no smell at any concentration", "Because odor can disappear due to olfactory fatigue even in deadly atmospheres", "Because H₂S only smells inside tanks", "Because smell is blocked by hard hats"], answer:1 },
    { q:"Your monitor alarms high while you are checking a separator. What is your first action?", options:["Finish the reading before leaving", "Move upwind/crosswind and evacuate immediately", "Silence the monitor and call maintenance from the same spot", "Look for the leak source first"], answer:1 },
    { q:"A coworker collapses in a suspected H₂S area and you have no SCBA training. What should you do?", options:["Run in and drag them out quickly", "Hold your breath and attempt rescue", "Stay out, alarm the emergency response system, and report the victim location", "Wait silently to avoid panic"], answer:2 },
    { q:"What is the safest statement about SCBA?", options:["It filters H₂S out of the air like a cartridge respirator", "It supplies breathable air and requires trained users", "Anyone can use it in an emergency without practice", "It is only for fire departments"], answer:1 },
    { q:"Why does wind direction matter during an H₂S release?", options:["Because wind makes monitors stop working", "Because H₂S always rises with the wind", "Because gas movement determines the safe evacuation path", "Because responders only approach from the south"], answer:2 },
    { q:"What is the correct role of a standby person during H₂S entry?", options:["Enter immediately if the entrant goes down", "Maintain communication and summon trained rescue rather than becoming another victim", "Turn off the entrant's monitor to reduce alarms", "Wait until production authorizes an exit"], answer:1 },
    { q:"Which statement shows poor H₂S discipline?", options:["We evacuate when the monitor alarms", "We trust the detector more than our sense of smell", "It is probably a false alarm, so let's just check one more valve", "We report missing personnel at muster"], answer:2 },
    { q:"A low-air alarm sounds on SCBA. What does that mean?", options:["You can keep working for a few extra minutes", "Switch to a dust mask", "Begin immediate exit from the hazard area", "Remove the facepiece and breathe faster"], answer:2 },
    { q:"What is the safest summary of H₂S rescue awareness?", options:["The closest worker should always try first", "Rescue is a trained, equipped, controlled operation — not an impulse", "If you are brave enough, you can ignore procedure", "Gas response is mainly about speed, not discipline"], answer:1 },
    { q:"Why should re-entry wait for formal clearance even after alarms stop?", options:["Because gas can remain or re-accumulate in low areas and equipment voids", "Because alarms are legally required to sound for one hour", "Because all monitors must cool down first", "Because H₂S disappears only after sunrise"], answer:0 },
    { q:"What does a strong H₂S culture look like?", options:["People improvise based on experience", "The team treats alarms, evacuation, accountability, and re-entry control as automatic disciplines", "Only supervisors carry monitors", "Workers rely on smell unless levels are obviously high"], answer:1 },
    { q:"Which choice best protects both you and your coworkers?", options:["Never trust smell, obey alarms, evacuate correctly, and leave rescue to trained responders", "Move closer to confirm the smell before leaving", "Silence alarms to avoid confusion", "Return once the area seems calm"], answer:0 }
  ]
}

];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function useAnim(dep) {
  const [v, setV] = useState(false);
  useEffect(() => { setV(false); const t = setTimeout(() => setV(true), 40); return () => clearTimeout(t); }, [dep]);
  return v;
}

function MonitorDisplay({ data }) {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(x => x+1), 800); return () => clearInterval(t); }, []);
  const blink = tick % 2 === 0;
  return (
    <div style={{ fontFamily:"'Share Tech Mono', monospace", background:"#0a0a00", border:`1px solid ${data.color}`, borderRadius:4, padding:"10px 14px", marginBottom:14, display:"flex", alignItems:"center", gap:16 }}>
      <div style={{ width:10, height:10, borderRadius:"50%", background: blink ? data.color : "transparent", border:`1px solid ${data.color}`, transition:"background 0.1s" }} />
      <div>
        <div style={{ fontSize:10, color:data.color, letterSpacing:3 }}>{data.label}</div>
        <div style={{ fontSize:22, color:data.color, fontWeight:"bold" }}>{data.ppm} <span style={{ fontSize:13 }}>ppm</span></div>
      </div>
      <div style={{ marginLeft:"auto", padding:"3px 10px", background:`${data.color}22`, border:`1px solid ${data.color}44`, borderRadius:3 }}>
        <span style={{ color:data.color, fontSize:11, letterSpacing:2 }}>{data.status}</span>
      </div>
    </div>
  );
}

function AlarmRow({ level, color, action }) {
  return (
    <div style={{ padding:"9px 12px", marginBottom:6, background:"#0d0800", border:`1px solid ${color}44`, borderLeft:`3px solid ${color}`, borderRadius:3 }}>
      <div style={{ color, fontSize:11, fontFamily:"'Share Tech Mono',monospace", letterSpacing:2, marginBottom:3 }}>{level}</div>
      <div style={{ color:"#bbb", fontSize:13, fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{action}</div>
    </div>
  );
}

function LevelRow({ ppm, label, desc, color }) {
  return (
    <div style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"7px 10px", marginBottom:4, background:"#0a0800", border:`1px solid ${color}33`, borderLeft:`3px solid ${color}`, borderRadius:3 }}>
      <div style={{ width:80, flexShrink:0 }}>
        <div style={{ color, fontSize:11, fontFamily:"'Share Tech Mono',monospace", fontWeight:"bold" }}>{ppm} ppm</div>
        <div style={{ color, fontSize:9, letterSpacing:2, opacity:0.8 }}>{label}</div>
      </div>
      <div style={{ color:"#aaa", fontSize:12, fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{desc}</div>
    </div>
  );
}

function ProgressBar({ current, total, color }) {
  return (
    <div style={{ width:"100%", height:3, background:"#1a1000", borderRadius:2, overflow:"hidden" }}>
      <div style={{ height:"100%", width:`${Math.max(3,(current/total)*100)}%`, background:color, transition:"width 0.4s ease" }} />
    </div>
  );
}

function SlideView({ slide, color, onNext, onPrev, isFirst, isLast }) {
  const v = useAnim(slide.heading);
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", opacity:v?1:0, transform:v?"translateY(0)":"translateY(10px)", transition:"all 0.3s ease" }}>
      {slide.monitor && <MonitorDisplay data={slide.monitor} />}
      <div style={{ fontSize:52, marginBottom:12, textAlign:"center", filter:"drop-shadow(0 0 16px rgba(255,100,0,0.4))" }}>{slide.icon}</div>
      <h2 style={{ margin:"0 0 10px", fontSize:22, fontWeight:800, fontFamily:"'Oswald',sans-serif", color:"#fff", letterSpacing:0.3, lineHeight:1.2 }}>{slide.heading}</h2>
      {slide.body && <p style={{ margin:"0 0 12px", fontSize:14, lineHeight:1.75, color:"#ccc", fontFamily:"'IBM Plex Sans',sans-serif" }}>{slide.body}</p>}
      {slide.levels && <div style={{ marginBottom:12 }}>{slide.levels.map((l,i)=><LevelRow key={i} {...l} />)}</div>}
      {slide.list && <ul style={{ margin:"0 0 12px", padding:0, listStyle:"none" }}>{slide.list.map((item,i)=><li key={i} style={{ padding:"7px 12px", marginBottom:5, background:"#0d0800", border:"1px solid #2a1800", borderLeft:`3px solid ${color}`, borderRadius:3, fontSize:13, color:"#ccc", fontFamily:"'IBM Plex Sans',sans-serif" }}>{item}</li>)}</ul>}
      {slide.steps && <ol style={{ margin:"0 0 12px", padding:0, listStyle:"none" }}>{slide.steps.map((s,i)=><li key={i} style={{ padding:"7px 12px", marginBottom:5, background:"#0d0800", border:"1px solid #2a1800", borderLeft:`3px solid ${color}`, borderRadius:3, fontSize:13, color:"#ccc", fontFamily:"'IBM Plex Sans',sans-serif" }}>{s}</li>)}</ol>}
      {slide.alarmLevels && <div style={{ marginBottom:12 }}>{slide.alarmLevels.map((a,i)=><AlarmRow key={i} {...a} />)}</div>}
      {slide.fact && <div style={{ padding:"11px 14px", background:`${color}15`, border:`1px solid ${color}44`, borderLeft:`4px solid ${color}`, borderRadius:3, marginBottom:12 }}><span style={{ fontSize:10, color, fontFamily:"'Oswald',sans-serif", letterSpacing:2, display:"block", marginBottom:3 }}>⚠ CRITICAL FACT</span><span style={{ fontSize:13, color:"#ddd", fontFamily:"'IBM Plex Sans',sans-serif", lineHeight:1.5 }}>{slide.fact}</span></div>}
      <div style={{ display:"flex", gap:8, marginTop:"auto", paddingTop:14 }}>
        {!isFirst && <button onClick={onPrev} style={{ flex:1, padding:"11px", background:"transparent", border:"1px solid #3a1800", borderRadius:3, color:"#555", cursor:"pointer", fontFamily:"'Oswald',sans-serif", fontSize:13, letterSpacing:1 }}>← BACK</button>}
        <button onClick={onNext} style={{ flex:2, padding:"12px", background:color, border:"none", borderRadius:3, color:"#000", cursor:"pointer", fontSize:14, fontWeight:700, fontFamily:"'Oswald',sans-serif", letterSpacing:2 }}>{isLast?"TAKE QUIZ →":"NEXT →"}</button>
      </div>
    </div>
  );
}

function QuizView({ mod, onComplete }) {
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState(null);
  const [rev, setRev] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = mod.quiz[cur];
  const color = mod.color;
  const passed = score >= Math.ceil(mod.quiz.length * 0.67);

  const pick = i => { if(rev) return; setSel(i); setRev(true); if(i===q.answer) setScore(s=>s+1); };
  const next = () => { if(cur+1>=mod.quiz.length){setDone(true);return;} setCur(c=>c+1); setSel(null); setRev(false); };

  if(done) return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center" }}>
      <div style={{ fontSize:56, marginBottom:14 }}>{passed?"✅":"❌"}</div>
      <h2 style={{ color, fontFamily:"'Oswald',sans-serif", fontSize:26, margin:"0 0 8px" }}>{passed?"MODULE PASSED":"REVIEW REQUIRED"}</h2>
      <p style={{ color:"#888", fontSize:14, fontFamily:"'IBM Plex Sans',sans-serif", marginBottom:20 }}>{score}/{mod.quiz.length} correct.{!passed&&" Score 2/3 or better to pass."}</p>
      <button onClick={()=>onComplete(passed)} style={{ padding:"12px 28px", background:passed?color:"transparent", border:`1px solid ${color}`, borderRadius:3, color:passed?"#000":color, cursor:"pointer", fontFamily:"'Oswald',sans-serif", fontSize:14, letterSpacing:2, fontWeight:700 }}>{passed?"CONTINUE →":"RETRY MODULE"}</button>
    </div>
  );

  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ color, fontFamily:"'Oswald',sans-serif", fontSize:11, letterSpacing:3, marginBottom:6 }}>QUIZ — {mod.label.toUpperCase()} · Q{cur+1}/{mod.quiz.length}</div>
      <ProgressBar current={cur} total={mod.quiz.length} color={color} />
      <h2 style={{ color:"#fff", fontFamily:"'Oswald',sans-serif", fontSize:19, margin:"16px 0", lineHeight:1.3 }}>{q.q}</h2>
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:8 }}>
        {q.options.map((opt,i)=>{
          let bg="#0d0800", bdr="#2a1800", clr="#bbb";
          if(rev){ if(i===q.answer){bg=`${color}18`;bdr=color;clr="#fff";} else if(i===sel){bg="#200000";bdr="#cc2222";clr="#ff8888";} }
          else if(sel===i){bdr=color;}
          return <button key={i} onClick={()=>pick(i)} style={{ padding:"13px 14px", background:bg, border:`1px solid ${bdr}`, borderRadius:3, color:clr, cursor:rev?"default":"pointer", fontFamily:"'IBM Plex Sans',sans-serif", fontSize:14, textAlign:"left", lineHeight:1.4, transition:"all 0.15s" }}><span style={{ color, fontWeight:700, marginRight:8, fontFamily:"'Oswald',sans-serif" }}>{String.fromCharCode(65+i)}.</span>{opt}{rev&&i===q.answer&&<span style={{ float:"right" }}>✓</span>}{rev&&i===sel&&i!==q.answer&&<span style={{ float:"right" }}>✗</span>}</button>;
        })}
      </div>
      {rev && <button onClick={next} style={{ marginTop:16, padding:"12px", background:color, border:"none", borderRadius:3, color:"#000", cursor:"pointer", fontSize:14, fontWeight:700, fontFamily:"'Oswald',sans-serif", letterSpacing:2 }}>{cur+1>=mod.quiz.length?"SEE RESULTS":"NEXT →"}</button>}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function H2STraining() {
  const playerRole = "Oilfield Operator"; // In Roblox: player:GetAttribute("Role")
  const ctx = ROLE_CONTEXT[playerRole] || ROLE_CONTEXT["default"];

  const [screen, setScreen] = useState("home");
  const location = useLocation();
  const activeCategory = typeof location.state?.activeCategory === "string" ? location.state.activeCategory : "process-gas";
  const [recordStatus, setRecordStatus] = useState({ busy: false, message: "", error: "" });
  const recordSavedRef = useRef(false);
  const [modIdx, setModIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [phase, setPhase] = useState("slides");
  const [completed, setCompleted] = useState({});
  const [tick, setTick] = useState(0);

  useEffect(() => { const t = setInterval(()=>setTick(x=>x+1),1200); return ()=>clearInterval(t); }, []);
  const blink = tick%2===0;

  const mod = MODULES[modIdx];
  const allDone = MODULES.every(m=>completed[m.id]);

  const startMod = idx => { setModIdx(idx); setSlideIdx(0); setPhase("slides"); setScreen("module"); };
  const handleNext = () => { if(slideIdx+1>=mod.slides.length) setPhase("quiz"); else setSlideIdx(s=>s+1); };
  const handlePrev = () => { if(slideIdx>0) setSlideIdx(s=>s-1); };
  const handleQuizDone = passed => {
    if(!passed){setSlideIdx(0);setPhase("slides");return;}
    setCompleted(c=>({...c,[mod.id]:true}));
    const next = MODULES.findIndex((m,i)=>i>modIdx&&!completed[m.id]);
    if(next===-1||Object.keys({...completed,[mod.id]:true}).length>=MODULES.length){setScreen("complete");} else startMod(next);
  };

  const completedCount = Object.keys(completed).length;

  if(screen==="home") return (
    <div style={{ minHeight:"100vh", background:"#050400", fontFamily:"'IBM Plex Sans',sans-serif", display:"flex", flexDirection:"column" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      <div style={{ background:"#FF3300", padding:"10px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ fontFamily:"'Oswald',sans-serif", fontWeight:700, fontSize:13, letterSpacing:3, color:"#000" }}>DINGFELDER INDUSTRIAL — REQUIRED SAFETY TRAINING</span>
        <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:11, color:"#000" }}>OSHA 29 CFR 1910.134</span>
      </div>
      <div style={{ padding:"32px 24px 20px", borderBottom:"1px solid #1a1000" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
          <div style={{ width:8, height:8, borderRadius:"50%", background:blink?"#FF3300":"transparent", border:"1px solid #FF3300", transition:"background 0.1s" }} />
          <span style={{ color:"#FF3300", fontFamily:"'Oswald',sans-serif", fontSize:10, letterSpacing:4 }}>HAZARD CLASS — IMMEDIATELY DANGEROUS TO LIFE AND HEALTH</span>
        </div>
        <h1 style={{ margin:0, fontSize:44, fontWeight:700, fontFamily:"'Oswald',sans-serif", color:"#fff", lineHeight:1.0 }}>H₂S AWARENESS<br /><span style={{ color:"#FF8800", fontSize:32 }}>& SCBA TRAINING</span></h1>
        <div style={{ width:50, height:3, background:"#FF3300", margin:"16px 0 14px" }} />
        <p style={{ color:"#888", fontSize:14, lineHeight:1.6, marginBottom:0 }}>Role: <strong style={{ color:"#FF8800" }}>{playerRole}</strong> · Facility: <strong style={{ color:"#FF8800" }}>{ctx.facility}</strong> · {ctx.scba?"SCBA Required":"Monitor Required"}</p>
      </div>
      <div style={{ padding:"16px 24px", flex:1 }}>
        <div style={{ height:3, background:"#1a1000", borderRadius:2, overflow:"hidden", marginBottom:16 }}>
          <div style={{ height:"100%", width:`${(completedCount/MODULES.length)*100}%`, background:"#FF3300", transition:"width 0.4s" }} />
        </div>
        {MODULES.map((m,i)=>{
          const done=completed[m.id];
          return <div key={m.id} onClick={()=>startMod(i)} style={{ display:"flex", alignItems:"center", gap:12, padding:"13px 14px", marginBottom:7, background:"#0a0800", border:`1px solid ${done?m.color+"55":"#2a1800"}`, borderRadius:4, cursor:"pointer" }}>
            <div style={{ width:42, height:42, borderRadius:6, background:done?m.color:`${m.color}1a`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, border:`1px solid ${m.color}44`, flexShrink:0 }}>{done?"✓":m.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ color:done?m.color:"#ddd", fontFamily:"'Oswald',sans-serif", fontWeight:700, fontSize:15 }}>{m.label}</div>
              <div style={{ color:"#555", fontSize:11 }}>{m.slides.length} slides · {m.quiz.length} questions</div>
            </div>
            <span style={{ color:done?m.color:"#444", fontSize:16 }}>{done?"✓":"→"}</span>
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
      attemptId: `/h2s:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
      modulePath: "/h2s",
      moduleTitle: "H₂S Awareness & SCBA",
      categoryKey: activeCategory,
      categoryLabel: "Process / Gas",
      score: MODULES.length,
      quizCorrect: MODULES.length,
      quizTotal: MODULES.length,
      passed: true,
      completedAt: new Date().toISOString(),
      runtimeMinutes: 20,
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
    <div style={{ minHeight:"100vh", background:"#050400", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:28, textAlign:"center" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      <div style={{ fontSize:64, marginBottom:16 }}>✅</div>
      <h1 style={{ color:"#FF8800", fontFamily:"'Oswald',sans-serif", fontSize:30, margin:"0 0 10px" }}>H₂S TRAINING COMPLETE</h1>
      <p style={{ color:"#888", fontSize:14, fontFamily:"'IBM Plex Sans',sans-serif", marginBottom:24, lineHeight:1.6, maxWidth:440 }}>
        You have completed all H₂S Awareness and SCBA modules for the Dingfelder campus.<br />
        Role: <strong style={{ color:"#FF8800" }}>{playerRole}</strong> · Facility: <strong style={{ color:"#FF8800" }}>{ctx.facility}</strong><br /><br />
        Present this completion record to your supervisor. Annual recertification required.
      </p>
      <div style={{ color:"#333", fontSize:11, fontFamily:"'Share Tech Mono',monospace", letterSpacing:2 }}>DINGFELDER SAFETY · OSHA 29 CFR 1910.134 · {new Date().toLocaleDateString()}</div>

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
      <button onClick={()=>{setCompleted({});setScreen("home");}} style={{ marginTop:20, padding:"10px 24px", background:"transparent", border:"1px solid #333", borderRadius:3, color:"#444", cursor:"pointer", fontFamily:"'Oswald',sans-serif", fontSize:12, letterSpacing:2 }}>RESTART</button>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#050400", display:"flex", flexDirection:"column" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      <div style={{ background:"#0a0800", borderBottom:`2px solid ${mod.color}44`, padding:"10px 18px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:7 }}>
          <button onClick={()=>setScreen("home")} style={{ background:"none", border:"none", color:"#555", cursor:"pointer", fontFamily:"'Oswald',sans-serif", fontSize:11, letterSpacing:1, padding:0 }}>← HOME</button>
          <div style={{ flex:1 }} />
          <span style={{ color:mod.color, fontFamily:"'Share Tech Mono',monospace", fontSize:11 }}>{phase==="slides"?`SLIDE ${slideIdx+1}/${mod.slides.length}`:"QUIZ"}</span>
        </div>
        <ProgressBar current={phase==="slides"?slideIdx+1:mod.slides.length+1} total={mod.slides.length+1} color={mod.color} />
        <div style={{ marginTop:9, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:18 }}>{mod.icon}</span>
          <div>
            <div style={{ color:"#fff", fontFamily:"'Oswald',sans-serif", fontWeight:700, fontSize:14 }}>{mod.label}</div>
            <div style={{ color:"#555", fontSize:10, letterSpacing:2 }}>H₂S AWARENESS & SCBA</div>
          </div>
          <div style={{ marginLeft:"auto", display:"flex", gap:6 }}>
            {MODULES.map((m,i)=><div key={m.id} style={{ width:20, height:20, borderRadius:"50%", background:completed[m.id]?"#22CC66":i===modIdx?m.color:"#1a1000", border:`1px solid ${i===modIdx?m.color:"#2a1800"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, transition:"all 0.3s" }}>{completed[m.id]?"✓":m.icon}</div>)}
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
