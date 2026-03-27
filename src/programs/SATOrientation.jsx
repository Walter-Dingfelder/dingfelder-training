import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { persistTrainingRecordNetlifyIdentity } from "../auth/netlifyIdentity.js";

// ─── PALETTE & CONSTANTS ──────────────────────────────────────────────────────
const Y = "#FFD100";      // hazard yellow
const BK = "#0f0e0b";     // near black
const DK = "#1a1806";     // dark warm
const GR = "#2a2510";     // grid dark
const MID = "#4a4220";    // mid tone
const LT = "#fff8e1";     // light cream
const RED = "#FF2D2D";    // danger red
const GRN = "#22CC66";    // safe green
const ORG = "#FF8C00";    // warning orange

// ─── SECTION DATA ─────────────────────────────────────────────────────────────
const SECTIONS = [
  // ─────────────────────────────────────────────────────
  {
    id: "welcome",
    zone: "GATE",
    icon: "🏭",
    title: "Welcome to Dingfelder Industrial Campus",
    color: Y,
    slides: [
      {
        heading: "Before You Step Past This Lobby",
        sub: "This orientation is required for ALL visitors before entering any campus area beyond the Welcome Center.",
        body: "The Dingfelder Industrial Campus is a working multi-industry complex. Unlike a typical office building, the areas you may visit contain heavy equipment, high-voltage electrical systems, flammable gas storage, molten metal, and moving industrial vehicles. This course — the Situational Awareness Training (S.A.T.) — takes approximately 15 minutes and is required before your escort can take you onto campus.",
        icon: "🏭",
        callout: null
      },
      {
        heading: "What This Training Covers",
        sub: "Seven checkpoints. Complete all to receive your Visitor Pass.",
        body: "You will learn to recognize the hazards present on campus, understand what the alarms and monitoring systems mean, know where to go in an emergency, and follow the basic rules that keep you safe. Your escort will be with you at all times on campus, but situational awareness is your responsibility.",
        icon: "📋",
        list: ["📡 Gas Monitoring Systems", "⚡ Electrical & Substation Hazards", "🔥 Propane Farm Awareness", "🚧 Moving Equipment Hazards", "🚨 Alarm Systems & Emergency Response", "🚪 Emergency Exits & Muster Points", "🦺 Personal Conduct & PPE Rules"]
      },
      {
        heading: "Your Escort Is Not a Shield",
        sub: "You are responsible for your own situational awareness.",
        body: "Having an escort means you always have a knowledgeable companion. It does NOT mean you can stop paying attention. On an industrial campus, dangerous situations develop quickly. A crane can swing, a gas alarm can sound, or a vehicle can turn a corner with no warning. Your job is to stay alert, stay with your escort, and act immediately when instructed.",
        icon: "👷",
        callout: { color: RED, label: "RULE #1", text: "NEVER leave your escort's side. If separated, STOP where you are and wait." }
      }
    ],
    quiz: [
      { q: "The S.A.T. orientation is required:", options: ["Only for contractors doing maintenance work", "For all visitors before entering any campus area beyond the Welcome Center", "Only for first-time visitors", "Only if visiting the foundry specifically"], answer: 1 },
      { q: "If you become separated from your escort on campus, you should:", options: ["Try to find your way back to the parking lot", "STOP where you are and wait", "Ask any employee for directions", "Continue to your meeting location"], answer: 1 }
    ]
  },

  // ─────────────────────────────────────────────────────
  {
    id: "gasmon",
    zone: "GAS MONITORING",
    icon: "📡",
    title: "Gas Monitoring Systems",
    color: ORG,
    slides: [
      {
        heading: "Why the Campus Has Gas Monitors",
        sub: "Natural gas, propane, and raw wellhead gas are present across the campus.",
        body: "The Dingfelder campus operates three natural gas production wells, a 180,000-gallon propane storage farm, and a natural gas distribution system feeding the foundry, boiler house, and other facilities. Fixed gas detectors are mounted throughout hazardous areas. Portable gas monitors are carried by personnel working in or near gas-handling areas. These systems are your early warning network.",
        icon: "📡",
        callout: { color: ORG, label: "KEY FACT", text: "Natural gas and propane are both colorless. Natural gas smells like rotten eggs because of added mercaptan — but raw wellhead gas may have NO smell at all." }
      },
      {
        heading: "Understanding Gas Detector Alarms",
        sub: "There are two alarm levels. Both require immediate action.",
        body: "Fixed gas detectors display readings as a percentage of LEL — Lower Explosive Limit. The LEL is the minimum gas concentration in air that can ignite. Below the LEL, there's not enough gas to burn. Above the UEL (Upper Explosive Limit), there's too much gas to burn — but you'd be unconscious long before you reached that level.",
        icon: "🔔",
        list: [
          "🟡 LOW ALARM — typically 10% LEL: Alert! Gas detected. Eliminate ignition sources. Investigate source. Notify supervisor.",
          "🔴 HIGH ALARM — typically 25% LEL: EVACUATE the area immediately. Do not operate any electrical switches. Move upwind. Call emergency line.",
          "📊 Propane LEL: 2.1% in air  |  Natural Gas LEL: 5% in air",
          "⚠️ Propane is HEAVIER than air — it sinks and collects in low spots",
          "⚠️ Natural gas is LIGHTER than air — it rises and collects at ceiling level"
        ]
      },
      {
        heading: "What a Visitor Hears & Sees During a Gas Alarm",
        sub: "You will likely hear an alarm before you understand why.",
        body: "Fixed gas detectors trigger audible alarms and strobe lights. In the foundry, propane farm, oilfield facility, and boiler house, these alarms are loud and unmistakable. If you hear a continuous alarm siren or see flashing amber/red lights while on campus:",
        icon: "🚨",
        list: [
          "1. STOP what you are doing immediately",
          "2. Do NOT touch any light switches, phones, or electrical devices",
          "3. Stay with your escort — they will direct you",
          "4. Move upwind and away from the alarm source",
          "5. Do NOT re-enter the area until an authorized employee clears it",
          "6. Evacuate to your designated muster point (covered in a later section)"
        ],
        callout: { color: RED, label: "CRITICAL", text: "A cell phone can be an ignition source in a gas-rich atmosphere. If a gas alarm sounds, do NOT use your phone until you are clear of the area." }
      }
    ],
    quiz: [
      { q: "Propane vapor is heavier than air. During a propane leak outdoors, where is vapor most likely to accumulate?", options: ["At rooftop level — it rises quickly", "In low areas — drainage ditches, depressions, doorway thresholds", "It disperses evenly at all heights", "Only inside buildings"], answer: 1 },
      { q: "You are on a campus tour and hear a continuous alarm siren. Your first action is:", options: ["Take a photo to document the incident", "STOP, do not touch electrical devices, and stay with your escort for direction", "Call 911 from your cell phone immediately", "Return quickly to your vehicle"], answer: 1 },
      { q: "A gas detector alarm at 25% LEL means:", options: ["A minor trace of gas — continue with caution", "EVACUATE the area immediately — this is the high alarm threshold", "The detector needs calibration", "Only trained personnel need to respond"], answer: 1 }
    ]
  },

  // ─────────────────────────────────────────────────────
  {
    id: "electrical",
    zone: "ELECTRICAL HAZARDS",
    icon: "⚡",
    title: "Electrical & Substation Hazards",
    color: Y,
    slides: [
      {
        heading: "The Dingfelder Electrical System",
        sub: "This campus operates at industrial scale — not office scale.",
        body: "The campus electrical system is served by a primary substation rated at over 40 MVA (megavolt-amperes). The induction melting furnaces alone draw 5–10 MW each. Motor Control Centers (MCCs) throughout the foundry and supporting facilities operate at 480V and higher. This is not the same electrical environment as an office building. Exposure to high-voltage electrical systems can be instantly fatal.",
        icon: "⚡",
        callout: { color: RED, label: "SCALE", text: "120 volts can stop a heart. The campus substation operates at tens of thousands of volts. Stay behind every fence, barrier, and warning sign." }
      },
      {
        heading: "Substation — Absolute Exclusion Zone",
        sub: "The EP-001 Transformer Yard and EP-002 Switchgear Building are off-limits to all visitors.",
        body: "The primary electrical substation and switchgear building are surrounded by security fencing and are posted with high-voltage warning signs. No visitor access is permitted under any circumstances. There is no safe distance from which to 'take a closer look.' Arc flash events can project plasma at temperatures hotter than the surface of the sun and have a fatal blast radius measured in feet, not inches.",
        icon: "🚫",
        list: [
          "⚠️ Substation fence = ABSOLUTE BOUNDARY — never approach or touch",
          "⚠️ Never reach through, over, or under any electrical enclosure fence",
          "⚠️ Stay at least 10 feet from all outdoor electrical equipment unless on a paved walkway designated for visitors",
          "⚠️ MCC rooms and electrical panels are restricted — do not follow an employee inside",
          "⚠️ Overhead power lines cross portions of the campus — maintain 20-foot clearance with any object"
        ]
      },
      {
        heading: "Arc Flash — What It Is and Why You Stay Back",
        sub: "An arc flash event can occur with zero warning.",
        body: "An arc flash is an explosive release of energy caused by an electrical fault. It produces temperatures up to 35,000°F, a pressure wave that can knock down personnel, and intense UV radiation. Equipment that appears cold and de-energized can still be live. This is why only trained, PPE-equipped electricians enter electrical areas. As a visitor, your role is simple: stay outside every barrier.",
        icon: "💥",
        callout: { color: RED, label: "VISITOR RULE", text: "If you see electrical sparks, smoke from an electrical enclosure, or smell burning plastic/rubber — alert your escort immediately and move away." }
      }
    ],
    quiz: [
      { q: "You notice an open door to what appears to be an electrical panel room. You should:", options: ["Glance inside briefly — it's just panels", "Stay outside and alert your escort to the open door", "Close the door yourself for safety", "Enter only if a worker is already inside"], answer: 1 },
      { q: "The Dingfelder campus substation is:", options: ["Open to visitors with an escort", "A restricted exclusion zone — no visitor access under any circumstances", "Accessible for photos from inside the fence", "Only restricted during active maintenance"], answer: 1 }
    ]
  },

  // ─────────────────────────────────────────────────────
  {
    id: "propane",
    zone: "PROPANE FARM",
    icon: "🔥",
    title: "Propane Farm Awareness",
    color: RED,
    slides: [
      {
        heading: "Six Tanks. 180,000 Gallons. Respect Every Boundary.",
        sub: "NG-002 Propane Storage Farm — visible from multiple areas of campus.",
        body: "The Dingfelder propane farm consists of six horizontal ASME-rated pressure vessels, each containing up to 30,000 gallons of liquefied propane. The farm sits within a bermed containment area. From a distance, the tanks look unremarkable — white cylinders. Up close, they represent one of the most significant hazard concentrations on campus. As a visitor, you will not enter the propane farm berm under any circumstances.",
        icon: "🔥",
        callout: { color: RED, label: "VISITOR RULE", text: "No visitor access inside the propane farm berm. Viewing from outside the berm boundary only." }
      },
      {
        heading: "Propane Hazards You Must Understand",
        sub: "Even at a safe distance, awareness matters.",
        body: "If a propane release occurs near the farm while you are on campus, you need to understand what propane does and why distance matters immediately.",
        icon: "⚠️",
        list: [
          "🔥 Flammable range: 2.1% – 9.5% in air — ignites from sparks, static, or flame",
          "⬇️ Heavier than air: vapor drifts downwind and into low areas",
          "🥶 Cryogenic: liquid propane is -44°F — skin contact causes instant freeze burns",
          "💥 BLEVE risk: a tank exposed to fire can catastrophically rupture — fatal radius 500+ feet",
          "👃 Smell: added odorant makes it smell like rotten eggs — trust your nose AND the alarms",
          "🚗 Vehicles: do not start a vehicle engine if you smell propane near the farm — spark risk"
        ]
      },
      {
        heading: "If You Detect a Propane Leak Near the Farm",
        sub: "You will not be alone — follow your escort's lead immediately.",
        body: "Your escort has emergency response training. If they say move, you move — immediately and without discussion. The following is what will happen:",
        icon: "🚨",
        list: [
          "1. Your escort will direct you away from the farm — move briskly upwind",
          "2. A 300-foot exclusion zone will be established around the farm",
          "3. Do NOT start or move vehicles until clear of the exclusion zone",
          "4. Do NOT use cell phones until clear of the exclusion zone",
          "5. Proceed to your assigned muster point",
          "6. Account for yourself — emergency coordinators will count heads"
        ],
        callout: { color: ORG, label: "REMEMBER", text: "Upwind means the wind is blowing FROM the tank area TOWARD you — move in the OPPOSITE direction of the wind, away from the farm." }
      }
    ],
    quiz: [
      { q: "You detect a strong rotten-egg smell near the propane farm. Your first action is:", options: ["Look for the source of the smell", "Alert your escort immediately and move briskly upwind without using your phone", "Start your vehicle to leave quickly", "Open windows in any nearby building"], answer: 1 },
      { q: "Propane vapor is heavier than air. A propane leak outdoors will:", options: ["Rise and dissipate safely overhead", "Drift downwind and collect in low-lying areas, drainage ditches, and doorways", "Disperse equally in all directions", "Only accumulate inside buildings"], answer: 1 }
    ]
  },

  // ─────────────────────────────────────────────────────
  {
    id: "moving",
    zone: "MOVING EQUIPMENT",
    icon: "🚧",
    title: "Moving Equipment Hazards",
    color: ORG,
    slides: [
      {
        heading: "Industrial Vehicles Move in Ways Cars Don't",
        sub: "Forklifts, cranes, ladle carriers, and rail equipment operate on the Dingfelder campus.",
        body: "Industrial vehicles are heavier, faster-stopping, longer-swinging, and much less visible from a driver's perspective than a road vehicle. Forklifts turn from the rear wheels — their tail swings wide and can crush a bystander standing at what seems like a safe distance. Overhead cranes move loads that can weigh tens of thousands of pounds. Rail movements can occur with minimal warning.",
        icon: "🚧",
        callout: { color: RED, label: "VISIBILITY", text: "Forklift and crane operators often cannot see you. YOU are responsible for staying out of their path." }
      },
      {
        heading: "The Forklift Blind Spot Problem",
        sub: "Loaded forklifts are driven in reverse — the operator is looking away from travel direction.",
        body: "A forklift carrying a large load travels in reverse to maintain forward visibility for the operator. This means the BACK of the forklift (which is actually the front of travel direction) is coming toward you. The counterweight on the rear of an unloaded forklift is extremely heavy and extends well behind the vehicle.",
        icon: "🔀",
        list: [
          "🚫 Never stand at the end of an aisle or corridor a forklift uses",
          "🚫 Never walk behind a moving forklift",
          "👁️ Make eye contact with the operator before crossing any forklift travel lane",
          "⚠️ Forklift rear counterweights extend 2–3 feet behind the vehicle",
          "🦺 Stand in clearly marked pedestrian zones only",
          "🔔 Forklifts with backup alarms still require your active attention"
        ]
      },
      {
        heading: "Overhead Cranes & Suspended Loads",
        sub: "Never stand beneath a suspended load. Ever.",
        body: "The foundry and beam mill operate overhead bridge cranes capable of lifting tens of thousands of pounds. These cranes travel across the building on runway rails. Loads including ladles of molten metal, steel billets, and large castings are lifted and moved routinely. As a visitor in the foundry, you must stay in designated visitor walkways — these are intentionally located outside crane swing paths.",
        icon: "🏗️",
        list: [
          "🚫 Never walk beneath a suspended crane load",
          "🚫 Never enter a lifting zone without an authorized escort instruction",
          "⚠️ Crane warning horns: step back and look up — identify the load path",
          "⚠️ Molten metal ladles are bright orange/red — treat as immediate hazard, give 30-foot clearance",
          "👀 Watch for crane shadow on the floor — it moves with the load overhead",
          "🦺 Hard hats are required in all foundry and beam mill areas"
        ],
        callout: { color: RED, label: "MOLTEN METAL", text: "If you see a glowing orange ladle or stream of liquid metal, STOP and do not move until your escort confirms it is safe to proceed." }
      },
      {
        heading: "Rail Traffic & Plant Roads",
        sub: "Three-track rail corridor and internal roads carry active traffic.",
        body: "The Dingfelder campus has a three-track rail corridor serving the foundry, salad dressing plant, beam mill, and oilfield facility. Rail movements can happen at any time and rail cars move slowly and very quietly. Internal plant roads carry heavy trucks, tankers, and industrial vehicles.",
        icon: "🚂",
        list: [
          "🚂 Rail crossings: STOP, look both directions, and listen before crossing ANY rail track",
          "🚂 Do not cross between coupled rail cars — always go around the end of a train",
          "🚛 Plant road crossings: treat as active traffic — vehicles have right of way over pedestrians",
          "🚛 Truck loading docks: stay behind the painted safety line at all times",
          "⚠️ Backing trucks and tankers have limited rear visibility — stay clear",
          "🔔 Vehicle horn = warning — stop and identify the vehicle before moving"
        ]
      }
    ],
    quiz: [
      { q: "A forklift is traveling toward you in reverse (operator facing away from you). You should:", options: ["Walk behind it once the load clears", "Stand still — the operator will stop", "Make eye contact with the operator or stay in the pedestrian zone until it passes", "Wave to get the operator's attention and walk past quickly"], answer: 2 },
      { q: "You see an overhead crane moving with what appears to be a glowing orange ladle. You should:", options: ["Watch from where you are — it's interesting", "STOP, do not move, and wait for your escort to confirm it is safe to proceed", "Move quickly to the other side of the building", "Take a photo"], answer: 1 },
      { q: "Before crossing a rail track on the Dingfelder campus you must:", options: ["Check with your escort only if a train is visible", "STOP, look both directions, and listen — then cross only if clear", "Cross quickly to avoid the rail zone", "Wait for a crossing signal"], answer: 1 }
    ]
  },

  // ─────────────────────────────────────────────────────
  {
    id: "alarms",
    zone: "ALARMS & EMERGENCY",
    icon: "🚨",
    title: "Alarm Systems & Emergency Response",
    color: RED,
    slides: [
      {
        heading: "Dingfelder Campus Alarm Types",
        sub: "Different alarms require different immediate actions.",
        body: "The Dingfelder campus uses multiple alarm types integrated through the Industrial Intelligence Platform. As a visitor, you will hear alarms you may not immediately understand. The table below gives you what you need to know — you do NOT need to diagnose the alarm. You need to know what to DO.",
        icon: "🔔",
        list: [
          "🔴 CONTINUOUS SIREN — EVACUATE: Leave the building/area immediately via the nearest exit. Go to your muster point.",
          "🟡 INTERMITTENT HORN (every 3 sec) — GAS ALERT: Do not use electrical devices. Follow escort away from area upwind.",
          "🔵 STEADY HORN + VOICE ANNOUNCEMENT — SHELTER IN PLACE: Move to interior rooms, away from exterior walls and windows.",
          "🔔 FIRE BELL (continuous ring) — FIRE EVACUATION: Exit immediately via marked exit routes. Do not use elevators.",
          "📻 PA SYSTEM ANNOUNCEMENT: Listen for facility name + instruction. Follow immediately."
        ]
      },
      {
        heading: "What 'Evacuate' Means on an Industrial Campus",
        sub: "Industrial evacuation is not the same as a fire drill in an office.",
        body: "On an industrial campus, 'Evacuate' means leave the area immediately and do not stop to collect belongings, do not take photos, and do not try to help unless you have been trained to do so. Emergency response teams need clear paths and need to know exactly where you are — at your muster point.",
        icon: "🚪",
        list: [
          "👟 Move immediately — do not gather belongings",
          "🚪 Use the nearest marked exit — don't backtrack through hazard zones",
          "🚫 Do NOT use elevators during any building alarm",
          "🚫 Do NOT re-enter a building until authorized by a Dingfelder Safety Officer",
          "🧑‍🤝‍🧑 Stay with your escort — they know the muster point for your tour area",
          "📵 No photos during emergency response — this is enforced"
        ]
      },
      {
        heading: "Calling for Emergency Help on Campus",
        sub: "Know how to reach help before you need to.",
        body: "Campus emergency communications work differently from dialing 911 from your cell phone. In many industrial facilities, internal emergency lines reach responders faster than an external 911 call which must be routed to a dispatch center that may not know the campus layout.",
        icon: "📞",
        list: [
          "📞 CAMPUS EMERGENCY LINE: Posted at all building entrances and on the back of your visitor badge",
          "🚨 911: Always appropriate for immediate life threat — but also call the campus line",
          "📻 Your escort has a radio — they can reach emergency coordinators directly",
          "🏥 MEDICAL EMERGENCY: Tell your escort immediately — do NOT move an injured person unless they are in immediate danger",
          "🔥 FIRE: Activate the nearest pull station (red boxes on walls) AND tell your escort"
        ],
        callout: { color: GRN, label: "REMEMBER", text: "The single most effective thing a visitor can do in an emergency is stay with their escort and go to the muster point. Emergency teams will find you there." }
      }
    ],
    quiz: [
      { q: "You hear a continuous siren alarm. Your immediate action is:", options: ["Find out what caused it before moving", "Leave the area immediately via the nearest exit and go to your muster point", "Call 911 from inside the building", "Ask a nearby employee what to do"], answer: 1 },
      { q: "During an evacuation, you realize you left your laptop bag inside. You should:", options: ["Quickly go back — it will only take 30 seconds", "Ask your escort to retrieve it", "Continue to the muster point — do not re-enter", "Wait outside the door while someone else gets it"], answer: 2 }
    ]
  },

  // ─────────────────────────────────────────────────────
  {
    id: "muster",
    zone: "EXITS & MUSTER",
    icon: "🚪",
    title: "Emergency Exits & Muster Points",
    color: GRN,
    slides: [
      {
        heading: "Know Your Exit Before You Need It",
        sub: "Your escort will show you the nearest exit when you enter each building.",
        body: "On the Dingfelder campus, each building has clearly marked emergency exits with illuminated EXIT signs and emergency lighting that activates if power fails. Exit routes are marked with green directional arrows on the floor and walls. When you enter any building, look for the nearest exit before anything else. Count the doors between you and the exit — this habit has saved lives in smoke-filled environments.",
        icon: "🚪",
        callout: { color: GRN, label: "HABIT", text: "Every time you enter a new building: find the nearest exit. Count the steps. Remember the direction." }
      },
      {
        heading: "Campus Muster Points",
        sub: "Muster points are marked on posted evacuation maps and on your visitor badge.",
        body: "Each facility on the Dingfelder campus has a designated muster point — a safe assembly area outside the building where all personnel report during an evacuation. Muster points are located far enough from buildings to be outside the blast radius of a propane or gas event, but close enough to be reached quickly.",
        icon: "📍",
        list: [
          "📍 FOUNDRY (BLDG-010): Muster at the north employee parking lot, north edge",
          "📍 OILFIELD FACILITY (BLDG-040): Muster at the south gate, outside the security fence",
          "📍 PROPANE FARM (NG-002): Muster at the main gate parking area — 500 feet minimum",
          "📍 SALAD DRESSING PLANT (BLDG-020): Muster at the east rail siding, beyond the track",
          "📍 BEAM MILL (BLDG-030): Muster at the west truck staging area",
          "📍 COMMERCIAL AREA (Walmart/Restaurants): Muster at the visitor parking lot, far aisle"
        ]
      },
      {
        heading: "At the Muster Point — What Happens",
        sub: "This is when your presence is confirmed. Do NOT wander.",
        body: "Once at the muster point, stay there. A Dingfelder Safety Coordinator or your escort will conduct a headcount. Visitors are counted separately from employees. If you are not accounted for, emergency responders will assume you are still inside — do not cause a rescue response that puts trained personnel at risk when you are standing in the parking lot. Answer when your name is called.",
        icon: "✅",
        list: [
          "✅ Stay at the muster point until released by a Safety Coordinator",
          "✅ Do not walk to your car — the parking lot may be within an exclusion zone",
          "✅ Answer the headcount — your name will be on the visitor log",
          "✅ If someone in your group is missing, tell the coordinator immediately",
          "✅ Do NOT re-enter any building until a Safety Officer announces all-clear",
          "📵 Limit phone use to contacting family to say you are safe — do not livestream"
        ]
      }
    ],
    quiz: [
      { q: "When you enter a new building on the Dingfelder campus, your first action should be:", options: ["Check your phone for messages", "Identify the nearest emergency exit and note its direction", "Find a place to set your belongings", "Ask your escort for a full building tour"], answer: 1 },
      { q: "At the muster point, you should:", options: ["Walk to your car to wait in comfort", "Stay put, answer the headcount, and wait for the all-clear from a Safety Officer", "Call 911 to report the emergency", "Return to the building to help with evacuation"], answer: 1 }
    ]
  },

  // ─────────────────────────────────────────────────────
  {
    id: "conduct",
    zone: "VISITOR RULES",
    icon: "🦺",
    title: "Personal Conduct & PPE",
    color: Y,
    slides: [
      {
        heading: "Required PPE by Area",
        sub: "Your escort will provide PPE before entering any area that requires it.",
        body: "Personal Protective Equipment (PPE) is not optional at Dingfelder. Different areas require different protection levels. Visitors are provided with appropriate PPE before entering each zone. Refusing to wear PPE means your escort must end the tour — no exceptions. PPE is sized when you check in at the Welcome Center.",
        icon: "🦺",
        list: [
          "🟡 ALL INDUSTRIAL AREAS: Hi-visibility vest (provided at check-in)",
          "⛑️ FOUNDRY, BEAM MILL, OILFIELD: Hard hat (bump cap not acceptable — full hard hat)",
          "👓 FOUNDRY, BEAM MILL, MACHINE AREAS: Safety glasses with side shields",
          "👟 ALL CAMPUS BEYOND LOBBY: Closed-toe shoes required — no sandals, no heels",
          "👂 FOUNDRY PRODUCTION AREAS: Hearing protection (foam earplugs provided)",
          "🥽 SPECIFIC AREAS: Face shield or chemical splash goggles if escort instructs"
        ]
      },
      {
        heading: "Prohibited Items & Behaviors",
        sub: "These rules protect you, your host, and the operation.",
        body: "Some items and behaviors are prohibited in industrial areas not because of bureaucracy, but because they have caused injuries and deaths at facilities like ours. These rules are non-negotiable.",
        icon: "🚫",
        list: [
          "📸 NO PHOTOGRAPHY in restricted areas — ask your escort which areas allow photos",
          "🍔 NO FOOD OR DRINK in any production area — this is also an FDA/food safety rule near BLDG-020",
          "📱 NO CELL PHONE USE while walking through active production areas — keep phone pocketed",
          "🚬 ABSOLUTELY NO SMOKING or vaping anywhere on campus except the designated smoking area near the main gate",
          "🏃 NO RUNNING — ever — in any industrial area",
          "🎧 NO PERSONAL EARBUDS OR HEADPHONES — you must be able to hear alarms and warnings",
          "👆 DO NOT TOUCH any equipment, machinery, pipes, valves, or controls"
        ]
      },
      {
        heading: "You Are Ready. Stay Alert.",
        sub: "Situational awareness is an active practice — not a one-time briefing.",
        body: "Completing this orientation means you understand the basics. On campus, your situational awareness continues: watch where your feet are going, look up for crane movements, listen for alarms and horns, smell for gas, stay with your escort. Industrial facilities have an excellent safety record — and they maintain it because everyone, including visitors, stays engaged.",
        icon: "👁️",
        callout: { color: GRN, label: "GOOD TO KNOW", text: "The Dingfelder campus has a full-time Safety Department. If anything makes you uncomfortable or feels unsafe during your visit, tell your escort immediately. There are no bad concerns." }
      }
    ],
    quiz: [
      { q: "You are wearing sandals when you arrive for your campus tour. The Welcome Center staff informs you PPE is required. What happens?", options: ["You may proceed if you sign a waiver", "Your escort must end the tour — closed-toe shoes are required. No exceptions.", "You can borrow shoes from the facility", "You may visit office areas only"], answer: 1 },
      { q: "During a walking tour of the foundry, you want to take a photo of the molding line. You should:", options: ["Take it quickly while the escort isn't looking", "Ask your escort whether photography is permitted in that area", "Post a video from your phone while walking — it's public interest content", "Take the photo — safety rules don't apply to phones"], answer: 1 }
    ]
  }
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const totalSlides = SECTIONS.reduce((a, s) => a + s.slides.length, 0);
const totalQuestions = SECTIONS.reduce((a, s) => a + s.quiz.length, 0);

function useAnim(dep) {
  const [v, setV] = useState(false);
  useEffect(() => { setV(false); const t = setTimeout(() => setV(true), 30); return () => clearTimeout(t); }, [dep]);
  return v;
}

// Chevron stripe background
function ChevronBg({ color = Y, opacity = 0.04 }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="chev" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon points="0,40 20,0 40,40 30,40 20,20 10,40" fill={color} opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chev)" />
      </svg>
    </div>
  );
}

// Zone badge
function ZoneBadge({ zone, color }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", background: `${color}22`, border: `1px solid ${color}55`, borderRadius: 3, marginBottom: 10 }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
      <span style={{ color, fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: 4, fontWeight: 600 }}>{zone}</span>
    </div>
  );
}

// Progress dots
function Dots({ total, current, color }) {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ width: i === current ? 18 : 6, height: 6, borderRadius: 3, background: i <= current ? color : "#2a2510", transition: "all 0.3s ease" }} />
      ))}
    </div>
  );
}

// ─── SLIDE VIEW ───────────────────────────────────────────────────────────────
function SlideView({ slide, color, onNext, onPrev, isFirst, isLast, sectionIdx, slideIdx, totalSlides: ts }) {
  const v = useAnim(`${sectionIdx}-${slideIdx}`);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)", transition: "all 0.35s ease" }}>
      {/* Big icon */}
      <div style={{ fontSize: 56, marginBottom: 14, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}>{slide.icon}</div>

      {/* Heading */}
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: LT, margin: "0 0 6px", lineHeight: 1.15, letterSpacing: 0.3 }}>{slide.heading}</h2>
      {slide.sub && <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 13, color: "#9a8c5a", margin: "0 0 14px", fontStyle: "italic", lineHeight: 1.5 }}>{slide.sub}</p>}

      {/* Body */}
      {slide.body && <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14.5, color: "#c4b882", lineHeight: 1.75, margin: "0 0 14px" }}>{slide.body}</p>}

      {/* List */}
      {slide.list && (
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
          {slide.list.map((item, i) => (
            <div key={i} style={{ padding: "8px 12px", background: "#1e1a08", border: "1px solid #3a3018", borderLeft: `3px solid ${color}`, borderRadius: 3, fontFamily: "'Source Serif 4', serif", fontSize: 13, color: "#bba85a", lineHeight: 1.5 }}>{item}</div>
          ))}
        </div>
      )}

      {/* Callout */}
      {slide.callout && (
        <div style={{ padding: "12px 14px", background: `${slide.callout.color}15`, border: `1px solid ${slide.callout.color}50`, borderLeft: `4px solid ${slide.callout.color}`, borderRadius: 3, marginBottom: 14 }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: 4, color: slide.callout.color, display: "block", marginBottom: 4 }}>{slide.callout.label}</span>
          <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 13.5, lineHeight: 1.5, color: "#ddd" }}>{slide.callout.text}</span>
        </div>
      )}

      {/* Nav */}
      <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 16 }}>
        {!isFirst && (
          <button onClick={onPrev} style={{ flex: 1, padding: "11px", background: "transparent", border: `1px solid #3a3018`, borderRadius: 3, color: "#6a5e30", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 2 }}>← BACK</button>
        )}
        <button onClick={onNext} style={{ flex: 2, padding: "12px", background: color, border: "none", borderRadius: 3, color: BK, cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 3 }}>
          {isLast ? "TAKE CHECKPOINT →" : "NEXT →"}
        </button>
      </div>
    </div>
  );
}

// ─── QUIZ VIEW ────────────────────────────────────────────────────────────────
function QuizView({ section, onPass }) {
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState(null);
  const [rev, setRev] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = section.quiz[cur];
  const color = section.color;
  const v = useAnim(`${section.id}-q${cur}`);

  const pick = (i) => { if (rev) return; setSel(i); setRev(true); if (i === q.answer) setScore(s => s + 1); };
  const next = () => { if (cur + 1 >= section.quiz.length) { setDone(true); return; } setCur(c => c + 1); setSel(null); setRev(false); };
  const passed = score >= Math.ceil(section.quiz.length * 0.7);

  if (done) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <div style={{ fontSize: 60, marginBottom: 16 }}>{passed ? "✅" : "⚠️"}</div>
      <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: 4, color: passed ? GRN : RED, marginBottom: 8 }}>CHECKPOINT {passed ? "CLEARED" : "NOT CLEARED"}</div>
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 28, color: passed ? GRN : RED, margin: "0 0 10px" }}>{section.zone}</h2>
      <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#9a8c5a", marginBottom: 24, lineHeight: 1.6 }}>
        {score}/{section.quiz.length} correct.{!passed && " Please review this section and try again."}
      </p>
      <div style={{ width: 70, height: 70, borderRadius: "50%", background: passed ? `${GRN}22` : `${RED}22`, border: `2px solid ${passed ? GRN : RED}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 24, fontWeight: 700, color: passed ? GRN : RED }}>{score}/{section.quiz.length}</span>
      </div>
      <button onClick={() => onPass(passed)} style={{ padding: "13px 32px", background: passed ? color : "transparent", border: passed ? "none" : `1px solid ${color}`, borderRadius: 3, color: passed ? BK : color, cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 14, letterSpacing: 3, fontWeight: 700 }}>
        {passed ? "CHECKPOINT CLEARED →" : "REVIEW & RETRY"}
      </button>
    </div>
  );

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", opacity: v ? 1 : 0, transition: "opacity 0.3s ease" }}>
      <ZoneBadge zone={`CHECKPOINT · ${section.zone}`} color={color} />
      <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: 3, color: "#6a5e30", marginBottom: 8 }}>QUESTION {cur + 1} OF {section.quiz.length}</div>
      <div style={{ height: 2, background: "#2a2510", borderRadius: 1, marginBottom: 18, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${((cur) / section.quiz.length) * 100}%`, background: color, transition: "width 0.4s ease" }} />
      </div>
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, color: LT, margin: "0 0 20px", lineHeight: 1.3, fontWeight: 600 }}>{q.q}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        {q.options.map((opt, i) => {
          let bg = "#141209", bdr = "#2a2510", clr = "#9a8c5a";
          if (rev) {
            if (i === q.answer) { bg = `${GRN}18`; bdr = GRN; clr = "#aaffcc"; }
            else if (i === sel) { bg = `${RED}18`; bdr = RED; clr = "#ffaaaa"; }
          } else if (sel === i) { bdr = color; }
          return (
            <button key={i} onClick={() => pick(i)} style={{ padding: "13px 14px", background: bg, border: `1px solid ${bdr}`, borderRadius: 3, color: clr, cursor: rev ? "default" : "pointer", fontFamily: "'Source Serif 4', serif", fontSize: 14, textAlign: "left", lineHeight: 1.4, transition: "all 0.15s" }}>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: color, marginRight: 10, fontSize: 13 }}>{String.fromCharCode(65 + i)}.</span>
              {opt}
              {rev && i === q.answer && <span style={{ float: "right", color: GRN }}>✓</span>}
              {rev && i === sel && i !== q.answer && <span style={{ float: "right", color: RED }}>✗</span>}
            </button>
          );
        })}
      </div>
      {rev && (
        <button onClick={next} style={{ marginTop: 16, padding: "12px", background: color, border: "none", borderRadius: 3, color: BK, cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 3 }}>
          {cur + 1 >= section.quiz.length ? "SEE RESULT" : "NEXT QUESTION →"}
        </button>
      )}
    </div>
  );
}

// ─── VISITOR PASS ─────────────────────────────────────────────────────────────
function VisitorPass({ name }) {
  const date = new Date().toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" });
  const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const passNum = `DIC-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "0 auto" }}>
      {/* Pass card */}
      <div style={{ position: "relative", background: BK, border: `3px solid ${Y}`, borderRadius: 8, overflow: "hidden", padding: "24px 22px" }}>
        <ChevronBg color={Y} opacity={0.05} />
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Header stripe */}
          <div style={{ background: Y, margin: "-24px -22px 20px", padding: "10px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 3, color: BK }}>DINGFELDER INDUSTRIAL CAMPUS</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: BK, letterSpacing: 2 }}>VISITOR</span>
          </div>

          <div style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
            <div style={{ width: 60, height: 60, background: `${Y}22`, border: `2px solid ${Y}44`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>👷</div>
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: 4, color: "#6a5e30", marginBottom: 4 }}>AUTHORIZED VISITOR</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: LT, lineHeight: 1.1 }}>{name || "CAMPUS VISITOR"}</div>
              <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 12, color: "#9a8c5a", marginTop: 4 }}>S.A.T. Orientation Complete</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            {[{ label: "DATE", val: date }, { label: "TIME", val: time }, { label: "PASS NO.", val: passNum }, { label: "ESCORT REQUIRED", val: "YES — AT ALL TIMES" }].map(({ label, val }) => (
              <div key={label} style={{ padding: "8px 10px", background: "#1a1806", border: "1px solid #3a3018", borderRadius: 3 }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: 3, color: "#6a5e30", marginBottom: 2 }}>{label}</div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 600, color: Y }}>{val}</div>
              </div>
            ))}
          </div>

          {/* Cleared zones */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: 3, color: "#6a5e30", marginBottom: 8 }}>CHECKPOINTS CLEARED</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {SECTIONS.map(s => (
                <div key={s.id} style={{ padding: "3px 8px", background: `${GRN}18`, border: `1px solid ${GRN}44`, borderRadius: 2 }}>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: 2, color: GRN }}>{s.icon} {s.zone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid #3a3018", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: 2, color: "#4a4220" }}>VALID FOR DATE OF ISSUE ONLY</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: 2, color: "#4a4220" }}>DINGFELDER SAFETY DEPT.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function SATOrientation() {
  const [screen, setScreen] = useState("welcome"); // welcome | training | complete
  const location = useLocation();
  const activeCategory = typeof location.state?.activeCategory === "string" ? location.state.activeCategory : "campus";
  const [recordStatus, setRecordStatus] = useState({ busy: false, message: "", error: "" });
  const recordSavedRef = useRef(false);
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [sectionIdx, setSectionIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [phase, setPhase] = useState("slides"); // slides | quiz
  const [cleared, setCleared] = useState({});

  const section = SECTIONS[sectionIdx];
  const clearedCount = Object.keys(cleared).length;
  const allCleared = clearedCount === SECTIONS.length;

  // Global progress
  const completedSlides = SECTIONS.slice(0, sectionIdx).reduce((a, s) => a + s.slides.length, 0) + (phase === "quiz" ? section.slides.length : slideIdx);

  const handleNext = () => {
    if (slideIdx + 1 >= section.slides.length) setPhase("quiz");
    else setSlideIdx(s => s + 1);
  };
  const handlePrev = () => { if (slideIdx > 0) setSlideIdx(s => s - 1); };
  const returnToPortal = () => { window.location.href = "/"; };

  const handleQuizResult = (passed) => {
    if (!passed) { setSlideIdx(0); setPhase("slides"); return; }
    setCleared(c => ({ ...c, [section.id]: true }));
    if (sectionIdx + 1 >= SECTIONS.length) { setScreen("complete"); return; }
    setSectionIdx(i => i + 1); setSlideIdx(0); setPhase("slides");
  };

  // ── WELCOME SCREEN ────────────────────────────────────────────
  if (screen === "welcome") return (
    <div style={{ minHeight: "100vh", background: BK, display: "flex", flexDirection: "column", fontFamily: "'Source Serif 4', serif", position: "relative", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <ChevronBg color={Y} opacity={0.035} />

      {/* Top stripe */}
      <div style={{ background: Y, padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 3, color: BK }}>DINGFELDER INDUSTRIAL CAMPUS</span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, color: BK, letterSpacing: 3 }}>SAFETY & SECURITY</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 28px", position: "relative", zIndex: 1, maxWidth: 640, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: 5, color: "#6a5e30", marginBottom: 12 }}>REQUIRED BEFORE CAMPUS ACCESS</div>
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 52, fontWeight: 700, color: Y, margin: "0 0 6px", lineHeight: 1.0, letterSpacing: 1 }}>
          SITUATIONAL<br />AWARENESS<br /><span style={{ color: LT, fontSize: 38 }}>TRAINING</span>
        </h1>
        <div style={{ width: 60, height: 3, background: Y, margin: "16px 0 20px" }} />
        <p style={{ fontSize: 15, color: "#9a8c5a", lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
          This orientation covers gas monitoring, electrical hazards, propane farm awareness, moving equipment safety, emergency alarms, muster points, and visitor conduct rules.
          <br /><br />
          <strong style={{ color: "#c4b882" }}>Approximately 15 minutes. 7 checkpoints. Required for all visitors.</strong>
        </p>

        {/* Name input */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: 3, color: "#6a5e30", display: "block", marginBottom: 8 }}>YOUR NAME (for visitor pass)</label>
          <input
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
            placeholder="First and Last Name"
            style={{ width: "100%", padding: "13px 16px", background: "#141209", border: `1px solid #3a3018`, borderRadius: 3, color: LT, fontFamily: "'Oswald', sans-serif", fontSize: 16, letterSpacing: 1, outline: "none", boxSizing: "border-box" }}
          />
        </div>

        <button
          onClick={() => { setName(nameInput || "CAMPUS VISITOR"); setScreen("training"); }}
          style={{ padding: "16px 32px", background: Y, border: "none", borderRadius: 3, color: BK, cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 17, fontWeight: 700, letterSpacing: 4, alignSelf: "flex-start" }}
        >BEGIN ORIENTATION →</button>

        {/* Section previews */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, marginTop: 36 }}>
          {SECTIONS.map(s => (
            <div key={s.id} style={{ padding: "8px 6px", background: "#141209", border: "1px solid #2a2510", borderRadius: 3, textAlign: "center" }}>
              <div style={{ fontSize: 18, marginBottom: 3 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, color: "#4a4220", letterSpacing: 1, lineHeight: 1.3 }}>{s.zone}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── COMPLETE SCREEN ───────────────────────────────────────────

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
      attemptId: `/sat:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
      modulePath: "/sat",
      moduleTitle: "S.A.T. Visitor Orientation",
      categoryKey: activeCategory,
      categoryLabel: "Campus",
      score: SECTIONS.length,
      quizCorrect: SECTIONS.length,
      quizTotal: SECTIONS.length,
      passed: true,
      completedAt: new Date().toISOString(),
      runtimeMinutes: 15,
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

  if (screen === "complete") return (
    <div style={{ minHeight: "100vh", background: BK, fontFamily: "'Source Serif 4', serif", position: "relative", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <ChevronBg color={Y} opacity={0.03} />

      <div style={{ background: Y, padding: "12px 24px", position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 3, color: BK }}>A.I.R.O.N. SAFETY TRAINING — ORIENTATION COMPLETE</span>
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "28px 22px", maxWidth: 460, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 56, marginBottom: 10 }}>✅</div>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: 4, color: GRN, marginBottom: 6 }}>ALL CHECKPOINTS CLEARED</div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 32, color: Y, margin: "0 0 8px" }}>ORIENTATION PASSED</h1>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#9a8c5a", lineHeight: 1.6 }}>
            Your visitor pass is below. Present it at the gate and to your escort. It is valid for today only. Your escort must accompany you at all times on campus.
          </p>
        </div>

        <VisitorPass name={name} />

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

        <div style={{ marginTop: 20, padding: "14px", background: "#141209", border: "1px solid #3a3018", borderRadius: 3 }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: 2, color: "#6a5e30", margin: 0, lineHeight: 1.8 }}>
            REMEMBER ON CAMPUS:<br />
            <span style={{ color: Y }}>• Stay with your escort at all times</span><br />
            <span style={{ color: ORG }}>• Gas alarm = stop, don't touch switches, move upwind</span><br />
            <span style={{ color: RED }}>• Evacuation alarm = leave immediately, go to muster point</span><br />
            <span style={{ color: GRN }}>• Never stand under suspended loads or touch any equipment</span>
          </p>
        </div>

        <button onClick={returnToPortal} style={{ marginTop: 16, width: "100%", padding: "12px", background: Y, border: "none", borderRadius: 3, color: BK, cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 3 }}>RETURN TO MAIN PORTAL</button>

        <button onClick={() => { setScreen("welcome"); setCleared({}); setSectionIdx(0); setSlideIdx(0); setPhase("slides"); }} style={{ marginTop: 12, width: "100%", padding: "11px", background: "transparent", border: "1px solid #3a3018", borderRadius: 3, color: "#4a4220", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 12, letterSpacing: 3 }}>RESTART FOR NEXT VISITOR</button>
      </div>
    </div>
  );

  // ── TRAINING SCREEN ───────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: BK, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <ChevronBg color={section.color} opacity={0.025} />

      {/* Header */}
      <div style={{ background: "#0f0e0b", borderBottom: `2px solid ${section.color}44`, padding: "10px 18px", position: "relative", zIndex: 1 }}>
        {/* Master progress bar */}
        <div style={{ height: 2, background: "#1a1806", borderRadius: 1, marginBottom: 10, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(completedSlides / totalSlides) * 100}%`, background: section.color, transition: "width 0.5s ease" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setScreen("welcome")} style={{ background: "none", border: "none", color: "#4a4220", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: 2, padding: 0 }}>← HOME</button>

          {/* Checkpoint trail */}
          <div style={{ display: "flex", gap: 4, flex: 1, justifyContent: "center" }}>
            {SECTIONS.map((s, i) => (
              <div key={s.id} title={s.zone} style={{ width: 22, height: 22, borderRadius: "50%", background: cleared[s.id] ? GRN : i === sectionIdx ? s.color : "#1a1806", border: `1px solid ${i === sectionIdx ? s.color : "#2a2510"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, transition: "all 0.3s", flexShrink: 0 }}>
                {cleared[s.id] ? "✓" : s.icon}
              </div>
            ))}
          </div>

          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, color: "#4a4220", letterSpacing: 2 }}>{clearedCount}/{SECTIONS.length}</span>
        </div>
      </div>

      {/* Zone label */}
      <div style={{ background: section.color, padding: "6px 18px", position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, color: BK }}>
          CHECKPOINT {sectionIdx + 1}/{SECTIONS.length} — {section.zone} {phase === "quiz" ? "· KNOWLEDGE CHECK" : `· SLIDE ${slideIdx + 1}/${section.slides.length}`}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px 20px", display: "flex", flexDirection: "column", maxWidth: 680, width: "100%", margin: "0 auto", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
        {phase === "slides"
          ? <SlideView
              slide={section.slides[slideIdx]}
              color={section.color}
              onNext={handleNext}
              onPrev={handlePrev}
              isFirst={slideIdx === 0 && sectionIdx === 0}
              isLast={slideIdx === section.slides.length - 1}
              sectionIdx={sectionIdx}
              slideIdx={slideIdx}
            />
          : <QuizView section={section} onPass={handleQuizResult} />
        }
      </div>
    </div>
  );
}
