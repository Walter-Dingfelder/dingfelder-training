import { useState, useEffect } from "react";

// ─── FULL MODULE DATA ──────────────────────────────────────────────────────────

const MODULES = [
  // ══════════════════════════════════════════════════════════════
  {
    id: "foundations",
    title: "LOTO Foundations",
    subtitle: "29 CFR 1910.147 — Law, Scope & Roles",
    icon: "⚖️",
    color: "#FF6B00",
    category: "CORE",
    slides: [
      {
        heading: "The Federal Law Behind LOTO",
        body: "OSHA 29 CFR 1910.147 — The Control of Hazardous Energy Standard — is a federal law that requires employers to establish a written energy control program, provide training to all authorized and affected employees, and verify isolation before any maintenance work begins. Violations carry fines up to $156,259 per willful violation.",
        visual: "⚖️",
        fact: "LOTO violations are consistently in OSHA's Top 5 most cited standards every single year."
      },
      {
        heading: "Scope: Where LOTO Applies on the Dingfelder Campus",
        body: "LOTO applies to every facility on the campus where service or maintenance creates exposure to hazardous energy. This includes the foundry, oil & gas stripping facility, propane farm, salad dressing plant, beam mill, truck service center, and gas station. Even the restaurants and retail store have LOTO obligations for kitchen equipment, HVAC, and compressors.",
        visual: "🏭",
        list: ["BLDG-010 Foundry — furnaces, molding, conveyors", "BLDG-020 Salad Dressing Plant — mixers, pumps, steam", "BLDG-030 Structural Beam Mill — rolling mills, cranes", "BLDG-040 Oilfield Processing — separators, wellheads, compressors", "BLDG-080 Truck Stop / Fuel Center — fuel pumps, lifts", "Restaurants — fryers, ovens, walk-in coolers, HVAC", "Propane Farm — 6 × 30,000-gal horizontal tanks", "Gas Station — fuel dispensers, underground storage tanks"]
      },
      {
        heading: "Roles and Responsibilities",
        body: "Every employee must understand their LOTO role. The wrong assumption about who controls a lockout has killed people.",
        visual: "👷",
        list: ["AUTHORIZED EMPLOYEE — trained to perform LOTO; applies and removes their own lock", "AFFECTED EMPLOYEE — operates or works near equipment being locked out; must be notified", "OTHER EMPLOYEE — anyone else in the area; must not attempt to restart locked-out equipment", "SAFETY MANAGER — maintains written program, audits annually, authorizes emergency removals", "CONTRACTOR — must coordinate with Dingfelder Safety before any LOTO work begins"]
      },
      {
        heading: "The 9 Types of Hazardous Energy — Full Dingfelder Scope",
        body: "The standard six energy types are only the beginning at Dingfelder. Our campus adds three more that are specific to oil & gas, food production, and flammable storage.",
        visual: "⚡",
        list: ["⚡ Electrical — MCCs, furnaces, motors, lighting, 40+ MVA substation", "🔧 Hydraulic — DISA MK3 ram, crane hydraulics, beam mill roll adjustments", "💨 Pneumatic — compressed air (1,850 SCFM plant-wide), pneumatic controls", "🔽 Gravitational — overhead cranes, ladles, beam mill rolls, lift equipment", "🌡️ Thermal — molten iron (2,800°F), steam lines (SDPP), hot sand, fryer oil", "🔩 Mechanical — rotating shafts, spring-loaded mechanisms, flywheels", "🔥 Chemical/Flammable — propane (180,000 gal), natural gas, crude oil, food oils", "☢️ Process Pressure — gas wellhead pressure, separator vessels, accumulator tanks", "🧪 Chemical Reactive — H₂S at wellhead, food-grade acids (vinegar), caustic CIP agents"]
      }
    ],
    quiz: [
      { q: "LOTO is governed by which OSHA standard?", options: ["29 CFR 1910.132 — PPE", "29 CFR 1910.147 — Control of Hazardous Energy", "29 CFR 1926.502 — Fall Protection", "29 CFR 1910.119 — PSM"], answer: 1 },
      { q: "At Dingfelder, which of the following does NOT require LOTO?", options: ["DISA MK3 molding machine maintenance", "Propane tank visual inspection from outside the berm", "Repairing a fryer at the restaurant", "Servicing the beam mill roll drive"], answer: 1 },
      { q: "A contractor arriving to service equipment at the oilfield facility must:", options: ["Follow their own company LOTO program only", "Coordinate with Dingfelder Safety and comply with the site LOTO program", "Only notify the facility manager", "Begin work immediately if they are OSHA certified"], answer: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "hardware",
    title: "LOTO Hardware",
    subtitle: "Locks, Tags, Hasps & Isolation Devices",
    icon: "🔒",
    color: "#FFD700",
    category: "CORE",
    slides: [
      {
        heading: "Personal Padlocks — One Person. One Lock. One Key.",
        body: "Every authorized employee at Dingfelder is issued a uniquely-keyed personal padlock. You apply it. You remove it. No supervisor may remove it except through the documented Emergency Removal Procedure. Locks must be substantial enough to resist forced removal — safety padlocks rated for the purpose are required. No Master Lock No. 3 from the hardware store.",
        visual: "🔒",
        fact: "OSHA requires that each lockout device be individually keyed. Sharing keys or master-keying personal locks is prohibited."
      },
      {
        heading: "Danger Tags — Last Resort Only",
        body: "A DANGER — DO NOT OPERATE tag is only used when the equipment geometry makes it physically impossible to apply a lock (e.g., a gas valve with no hasp point). Tags warn — they do not prevent. Every Dingfelder tag must be filled out with: employee name, date, time, department, reason, and radio channel. Tags must be durable enough to withstand the environment (weatherproof at the propane farm, grease-resistant at the truck service center).",
        visual: "🏷️",
        fact: "OSHA has a very high bar for tagout-only programs. The employer must prove tagout provides equivalent protection to lockout — nearly impossible in most industrial settings."
      },
      {
        heading: "Hasps & Group Lockout Boxes",
        body: "When multiple trades work on the same isolation point simultaneously — common during planned outages at the beam mill, oilfield separator, or DISA MK3 — a hasp or group lockout box is used. Each worker applies their personal lock. ALL locks must be removed before energy can be restored. No single person can unilaterally restore a group lockout.",
        visual: "⛓️",
        list: ["Standard hasp: holds 6–8 individual locks", "Group lockout box: used for major shutdowns with many trades", "Scissor hasp: for circuit breakers and ball valves", "Cable lockout: for equipment with multiple, dispersed isolation points"]
      },
      {
        heading: "Isolation Devices by Energy Type — Dingfelder Campus",
        body: "Different hazards demand different hardware. Know your device before you start.",
        visual: "🔧",
        list: ["⚡ Circuit breaker lockout clips — MCC panels, foundry furnace switchgear, restaurant panels", "🔵 Ball valve lockout — compressed air, propane lines, natural gas distribution, oil process lines", "🔵 Gate valve lockout — hydraulic supply, industrial water, steam lines", "🔌 Electrical plug lockout — shop tools, small motors, restaurant equipment", "🚫 Blind flange — process piping isolation at wellhead and separator", "📦 Pneumatic lockout — airline quick-disconnects at DISA sand valves", "🔴 Chain-and-lock — large manual valves at propane farm where standard hasps won't fit"]
      }
    ],
    quiz: [
      { q: "During a group lockout on the oilfield separator, the last contractor finishes their work and removes their lock. Can the separator be re-energized?", options: ["Yes, all contractors are done", "No — only after ALL workers' locks are removed", "Yes, if the Dingfelder safety manager approves", "Yes, after a 5-minute waiting period"], answer: 1 },
      { q: "Your personal padlock key should be:", options: ["Kept at the supervisor's office for emergencies", "Held only by you — no shared keys", "Left at the job site overnight", "Available to your buddy if you leave the area"], answer: 1 },
      { q: "A blind flange is used for:", options: ["Locking out electrical breakers", "Isolating process piping at the wellhead or separator by physically blocking the line", "Blocking compressed air quick-disconnects", "Preventing gravitational energy release"], answer: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "procedure",
    title: "The 8-Step LOTO Procedure",
    subtitle: "Standard Sequence — Every Facility, Every Time",
    icon: "📋",
    color: "#00C896",
    category: "CORE",
    slides: [
      {
        heading: "Step 1 — Obtain the Machine-Specific LOTO Procedure",
        body: "Every piece of equipment at Dingfelder has a documented Machine-Specific LOTO Procedure (MSLP). Retrieve it from the safety binder at the equipment or via the digital twin terminal. Never improvise an isolation sequence. For oil & gas equipment, the MSLP also specifies gas detection requirements before entry.",
        visual: "📋", step: 1,
        fact: "OSHA requires a documented procedure for each piece of equipment with more than one energy source."
      },
      {
        heading: "Step 2 — Notify All Affected Employees",
        body: "Alert everyone working in or near the equipment area that it is being taken offline. In a multi-facility campus like Dingfelder, upstream and downstream processes may be affected. Notifying only your immediate crew is not enough — the crane operator, auto-pour technician, and material handlers may all need to know.",
        visual: "📢", step: 2
      },
      {
        heading: "Step 3 — Normal Shutdown",
        body: "Stop the equipment using its standard operating procedure. Allow automated cycles to complete if safe to do so. Do NOT use E-stops or emergency shutoffs as your primary shutdown method — they are emergency safety devices, not isolation devices, and many do not cut ALL energy sources.",
        visual: "🛑", step: 3,
        fact: "E-stops, emergency shutoffs, and process interlocks DO NOT satisfy LOTO requirements under 29 CFR 1910.147."
      },
      {
        heading: "Step 4 — Isolate ALL Energy Sources",
        body: "Physically operate every isolating device identified in the MSLP. This means: open the main disconnect at the MCC, close the supply valve on the hydraulic unit, turn the ball valve on the compressed air branch, bleed the gas pressure at the wellhead isolation valve. ALL sources — not just the most obvious one.",
        visual: "🔌", step: 4
      },
      {
        heading: "Step 5 — Apply Lockout/Tagout Devices",
        body: "Apply your personal padlock to each isolation point. Complete and attach a DANGER tag. For group work, apply your lock to the hasp. Every person. Every isolation point. Every time.",
        visual: "🔒", step: 5
      },
      {
        heading: "Step 6 — Release or Restrain ALL Stored Energy",
        body: "Isolation alone does not make equipment safe. Stored energy remains and must be actively controlled.",
        visual: "💨", step: 6,
        list: ["💨 Pneumatic: Open bleed valves, exhaust accumulators — verify zero PSI", "🔧 Hydraulic: Open bleed-down valve at cylinder — verify zero at gauge", "🔽 Gravitational: Block suspended loads, lower crane hooks to ground, chock conveyor tension weights", "🌡️ Thermal: Allow cooldown OR use appropriate thermal PPE — verify temperature", "⚡ Electrical: Discharge capacitor banks (furnace power supplies) — verify with meter", "🔥 Gas/Pressure: Bleed to zero at isolation point — check gauge AND sniff/detect for gas", "🔩 Mechanical: Block rotating elements, restrain spring-loaded components"]
      },
      {
        heading: "Step 7 — Verify Isolation — The Try-Out Test",
        body: "This step is non-negotiable. Attempt to start the equipment using its normal start command. It must not respond. Then verify with instruments: voltage meter reads zero, pressure gauge reads zero, gas detector reads zero LEL. Do not trust your eyes alone — use calibrated instruments.",
        visual: "✅", step: 7,
        fact: "More LOTO fatalities occur from skipping the Try-Out Test than any other single step. Always verify with instruments."
      },
      {
        heading: "Step 8 — Work Safely — Your Lock Stays On",
        body: "Work may begin only after all prior steps are verified. Your personal lock stays on the isolation point for the entire duration of your work. If you leave the area for any reason, your lock stays. When you return, re-verify before resuming. Never remove your lock and trust others are 'still watching' the machine.",
        visual: "🪛", step: 8
      }
    ],
    quiz: [
      { q: "At the oil & gas stripping facility, after closing the wellhead isolation valve you must:", options: ["Begin work immediately", "Bleed the line to zero and verify with gauge AND gas detector before entering", "Wait 10 minutes for pressure to equalize naturally", "Have a coworker confirm the valve is closed"], answer: 1 },
      { q: "Can you remove your LOTO lock and let a coworker 'watch' the machine while you go to lunch?", options: ["Yes, if your coworker is authorized", "No — your lock stays on for your entire shift portion of the work", "Yes, for breaks under 30 minutes", "Yes, if you notify the supervisor"], answer: 1 },
      { q: "Which instrument verifies electrical isolation before touching a conductor?", options: ["A visual inspection of the disconnect position", "A calibrated non-contact voltage tester or multimeter reading zero", "Checking that the motor is not spinning", "Confirming the E-stop light is illuminated"], answer: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "oilgas",
    title: "Oil & Gas Facility",
    subtitle: "BLDG-040 — Wells, Separators, H₂S & Pressure",
    icon: "🛢️",
    color: "#CC4400",
    category: "FACILITY",
    slides: [
      {
        heading: "Oilfield Processing Facility Overview",
        body: "BLDG-040 houses the Dingfelder oil and gas stripping and drying facility, served by three natural gas production wells on campus. This facility operates under both OSHA 29 CFR 1910.147 (LOTO) and OSHA 29 CFR 1910.119 (Process Safety Management / PSM) if quantities exceed PSM thresholds. Gas detection, pressure management, and H₂S awareness are mandatory before any maintenance work.",
        visual: "🛢️",
        fact: "Natural gas is odorless in its raw form from the well. Mercaptan (the rotten egg smell) is added at the metering station. Raw wellhead gas at Dingfelder may NOT have the odorant — never rely on smell alone."
      },
      {
        heading: "Wellhead LOTO — Three Production Wells",
        body: "Each of the three on-campus natural gas wells has a wellhead isolation valve (master gate valve) that is the primary LOTO point. Additional isolation may include the wing valve, flow line valve, and chemical injection point. ALL must be isolated AND bled to zero before any wellhead maintenance.",
        visual: "⛽",
        list: ["🔵 Master gate valve — lock closed with ball valve lockout device", "🔵 Wing valve — secondary isolation, lock closed", "📍 Blind flange — install on flow line if entering wellhead area", "💨 Bleed valve — open to verify zero pressure and gas — use detector", "⚠️ H₂S monitor — required before approach; alarm at 1 ppm, evacuate at 10 ppm", "🔌 Electrical — isolate wellhead controller, pump motor (if artificial lift)"]
      },
      {
        heading: "Separator & Process Vessel LOTO",
        body: "The gas/liquid separator receives production from all three wells. It operates under positive pressure and may contain both liquid hydrocarbons and gas. NEVER enter or open a separator vessel without full isolation, bleed-down, and atmospheric testing.",
        visual: "🏗️",
        list: ["Isolate inlet valve from all three well lines — lock each one", "Isolate outlet gas line valve — lock", "Isolate liquid dump valve — lock", "Bleed separator to zero pressure — verify at pressure gauge", "Atmospheric test: O₂ (19.5–23.5%), LEL < 10%, H₂S < 1 ppm", "Confined space entry permit required if entering the vessel"]
      },
      {
        heading: "H₂S — Hydrogen Sulfide — The Silent Killer",
        body: "Even in small quantities, H₂S is an immediate threat. At the Dingfelder wells, any raw gas stream must be treated as potentially containing H₂S until confirmed otherwise by air monitoring.",
        visual: "☢️",
        list: ["1–5 ppm: Detectable odor (rotten eggs) — be alert", "10 ppm: OSHA ceiling — evacuate immediately", "50–100 ppm: Rapid incapacitation — you may not be able to self-rescue", "300+ ppm: Immediately Dangerous to Life and Health (IDLH)", "REQUIRED PPE: 4-gas monitor (H₂S, CO, O₂, LEL) + SCBA on standby", "NEVER enter an H₂S atmosphere without SCBA and a trained standby person"]
      },
      {
        heading: "Natural Gas Compressors — LOTO Points",
        body: "Gas compressors at the stripping facility present combined electrical, mechanical, and pressure hazards. Compressor LOTO is one of the most complex on campus.",
        visual: "⚙️",
        list: ["⚡ Electrical: MCC disconnect — lock out", "💨 Suction isolation valve — lock closed, bleed to zero", "💨 Discharge isolation valve — lock closed, bleed to zero", "🔩 Mechanical: Blowdown valve open — vent to safe location", "⚠️ Flywheel/crankshaft: Block with mechanical stop before any internal work", "🌡️ Thermal: Allow cooldown or use thermal PPE for hot manifolds"]
      }
    ],
    quiz: [
      { q: "Raw wellhead gas at Dingfelder may not have added odorant, which means:", options: ["It is safe to work on without gas detection", "You must use a calibrated gas detector — never rely on smell alone", "It contains no H₂S", "It is only dangerous above 50 ppm"], answer: 1 },
      { q: "Before opening the separator vessel for internal inspection, you must:", options: ["Isolate and bleed to zero pressure, then conduct atmospheric testing, then obtain a confined space entry permit", "Just close the inlet valve and open the manway", "Obtain supervisor verbal approval", "Only test for H₂S"], answer: 0 },
      { q: "The OSHA ceiling limit for H₂S exposure is:", options: ["50 ppm", "100 ppm", "10 ppm", "1 ppm"], answer: 2 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "propane",
    title: "Propane Farm",
    subtitle: "NG-002 — Six 30,000-Gallon Horizontal Tanks",
    icon: "🔥",
    color: "#FF3300",
    category: "FACILITY",
    slides: [
      {
        heading: "Propane Farm Overview — 180,000 Gallons of LPG",
        body: "The Dingfelder propane farm (NG-002) consists of six horizontal ASME pressure vessels, each holding 30,000 gallons of liquefied petroleum gas (propane / LPG). Total on-site storage: 180,000 gallons. This is an extremely large flammable hazard. The farm is governed by NFPA 58 (Liquefied Petroleum Gas Code) and OSHA 29 CFR 1910.110 in addition to standard LOTO requirements.",
        visual: "🔥",
        fact: "One gallon of liquid propane expands to approximately 270 gallons of vapor at atmospheric pressure. A single tank breach and ignition would be catastrophic."
      },
      {
        heading: "Propane — Properties & Hazards You Must Know",
        body: "Propane is heavier than air (vapor density 1.52 vs. air = 1.0). Leaks settle into low points — trenches, vaults, and building sub-floors. A vapor cloud that finds an ignition source (open flame, static spark, electrical arc, cigarette) can detonate.",
        visual: "💥",
        list: ["Flammable range: 2.1% – 9.5% in air (LEL to UEL)", "Auto-ignition temperature: 842°F / 450°C", "Boiling point: -44°F — liquid propane causes cryogenic burns on contact", "Heavier than air — accumulates in low spots; never enter a low area after a gas alarm", "BLEVE risk: Boiling Liquid Expanding Vapor Explosion if tank is exposed to fire", "No smoking, no open flames, no non-intrinsically-safe tools within the propane farm berm"]
      },
      {
        heading: "Propane Farm LOTO — Tank Isolation Points",
        body: "Each of the six tanks has multiple isolation points. For any maintenance on tank fittings, pressure relief valves, fill connections, or vaporizers, ALL relevant valves must be isolated and the line bled.",
        visual: "🔵",
        list: ["🔵 Liquid service valve — lock closed (ball valve lockout)", "🔵 Vapor service valve — lock closed (ball valve lockout)", "🔵 Pump/compressor suction and discharge valves — lock closed", "🔵 Fill connection valve — lock closed, cap the fill port", "⚡ Vaporizer electrical heaters — disconnect at panel and lock", "⚡ Transfer pump motors — lock out MCC starter", "🚫 Blind flange — install on any piping spool removed for repair", "💨 Bleed/vent: Only to safe outdoor location — NEVER indoors or near ignition"]
      },
      {
        heading: "Hot Work Prohibition & Fire Safety",
        body: "Absolutely NO hot work (welding, cutting, grinding, open flame) is permitted within the propane farm berm or within 35 feet of any propane tank without a Hot Work Permit issued by the Dingfelder Safety Manager AND continuous gas monitoring. The area must read < 10% LEL before a hot work permit can even be considered.",
        visual: "🚒",
        list: ["< 10% LEL required to consider hot work permit — stop and evacuate if above", "Fire watch required during ALL hot work and for 30 minutes after", "Water deluge system on tanks — verify operational before any hot work", "Class BC fire extinguishers required within 25 feet of any propane operation", "Emergency shutdown valve location: know it before you start work", "Wind direction: always position yourself upwind of propane operations"]
      },
      {
        heading: "Emergency Response — Propane Release",
        body: "If you detect propane odor or hear a gas leak hissing from the propane farm, the following sequence must be followed immediately. Do NOT attempt to stop a major propane leak — evacuate.",
        visual: "🚨",
        list: ["1. Alert all personnel in the area — shout and use radio", "2. Evacuate the berm and surrounding 300-foot exclusion zone", "3. Eliminate ALL ignition sources — no phones, no vehicles", "4. Call 911 AND the Dingfelder Emergency Line from outside the exclusion zone", "5. Do NOT re-enter until the fire department clears the area", "6. Muster at the designated Propane Farm Muster Point (posted at gate)"]
      }
    ],
    quiz: [
      { q: "Propane vapor is heavier than air. During a propane leak, where does vapor accumulate?", options: ["At ceiling level — it rises like steam", "In low points — trenches, basements, depressions", "It disperses evenly throughout the space", "Only outdoors in wind conditions"], answer: 1 },
      { q: "The LEL (Lower Explosive Limit) of propane in air is:", options: ["9.5%", "4.4%", "2.1%", "0.1%"], answer: 2 },
      { q: "During a major propane tank release, your first action is:", options: ["Attempt to close the leak valve", "Call 911 from your cell phone inside the berm", "Evacuate the 300-foot exclusion zone and eliminate ignition sources", "Use a CO₂ extinguisher on the leak"], answer: 2 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "beammill",
    title: "Structural Beam Mill",
    subtitle: "BLDG-030 — Rolling Mills, Cranes & High Energy",
    icon: "🏗️",
    color: "#4DA6FF",
    category: "FACILITY",
    slides: [
      {
        heading: "Beam Mill Hazards Overview",
        body: "The Dingfelder Structural Beam Mill (BLDG-030) processes structural steel into finished I-beams, channels, and angles. The rolling process involves extremely high forces, heavy rotating mill rolls, red-hot steel billets, overhead crane lifts, and large hydraulic roll adjustment systems. Beam mill LOTO is among the most complex on campus due to the number of simultaneous energy sources.",
        visual: "🏗️",
        fact: "Rolling mill rolls can weigh several tons each and store enormous mechanical energy during rotation. A coasting roll can take 10+ minutes to stop after electrical isolation."
      },
      {
        heading: "Rolling Mill LOTO Points",
        body: "Each mill stand contains multiple energy sources that must all be controlled before entry into the roll gap area or any nip point.",
        visual: "⚙️",
        list: ["⚡ Electrical: Main drive motor disconnect at MCC — lock", "⚡ Electrical: Roll adjustment motor disconnects — lock each", "🔩 Mechanical: Coasting rolls — verify FULL STOP before entry (use tachometer or timing)", "🔩 Mechanical: Block rolls with mechanical stops if entering roll gap area", "🔧 Hydraulic: Roll adjustment hydraulic supply — isolate valve, bleed to zero", "💨 Pneumatic: Mill coolant air wipe valves — isolate and exhaust", "🌡️ Thermal: Mill guides and rolls remain hot after processing — verify cooldown or use thermal PPE"]
      },
      {
        heading: "Overhead Crane LOTO — Beam Mill",
        body: "The beam mill overhead crane is used for coil loading, billet charging, and finished product removal. Crane LOTO is required whenever anyone works at elevation under the crane runway or on the crane bridge itself.",
        visual: "🏗️",
        list: ["⚡ Crane bridge disconnect — lock at bridge panel", "⚡ Runway disconnect — lock at end-stop disconnect (takes crane offline entirely)", "🔽 Gravitational: Lower all suspended loads to ground before locking out", "🔽 Gravitational: Block crane bridge in position if working on runway below", "⚠️ Never work on runway while crane is energized — use rail clamps", "📢 Notify all crane operators before applying crane LOTO"]
      },
      {
        heading: "Hot Metal & Thermal Hazards",
        body: "Steel billets enter the mill at over 2,000°F. Even after rolling, the finished beams remain dangerously hot for extended periods. Cooling beds are a thermal hazard zone.",
        visual: "🌡️",
        list: ["Steel billet entry temperature: 2,000–2,400°F", "Finished beam temperature at cooling bed entry: 800–1,200°F", "Cooling bed area: no LOTO maintenance until material is confirmed cool (use IR gun)", "Required PPE near hot metal: face shield, aluminized jacket, leather gloves, metatarsal boots", "Never stand in line with rolling direction — ejected scale and material travel far", "Thermal contact burns can occur from surfaces that LOOK cool but remain above 150°F"]
      }
    ],
    quiz: [
      { q: "After electrically isolating the rolling mill drive motor, the rolls may still be moving due to:", options: ["Hydraulic pressure maintaining rotation", "Mechanical rotational inertia — rolls can coast for 10+ minutes", "Thermal expansion", "The pneumatic coolant system"], answer: 1 },
      { q: "Before working below the overhead crane runway, you must:", options: ["Just notify the crane operator verbally", "Apply crane LOTO at the bridge disconnect AND verify the hook is lowered to ground", "Only use a spotter", "Check that no load is on the hook"], answer: 1 },
      { q: "The minimum required action before LOTO maintenance on the cooling bed is:", options: ["Verify the rolling mill is stopped", "Confirm steel temperature is safe using an IR thermometer before beginning work", "Rope off the area", "Wear gloves"], answer: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "saladplant",
    title: "Salad Dressing Plant",
    subtitle: "BLDG-020 — Food Production, Steam & Chemicals",
    icon: "🥗",
    color: "#88CC00",
    category: "FACILITY",
    slides: [
      {
        heading: "Salad Dressing Plant — Unique Hazards",
        body: "BLDG-020 processes soy oil, corn oil, HFCS, corn syrup, white vinegar, and apple cider vinegar. Railcar unloading uses steam-jacketed heating. The facility has a boiler connection (BLDG-100), steam tracing network, and CIP (Clean-In-Place) systems using caustic and acid solutions. These create hazards not seen anywhere else on campus.",
        visual: "🥗",
        fact: "Acetic acid (the active component in vinegar) is corrosive at concentrations above 25%. Food-grade doesn't mean non-hazardous from a chemical standpoint."
      },
      {
        heading: "Steam & Boiler LOTO",
        body: "Steam-jacketed railcar unloading piping and building heat tracing present significant burn risk. Steam lines at the Salad Dressing Plant operate at boiler pressure from BLDG-100.",
        visual: "💨",
        list: ["🔵 Steam supply valve: Lock closed — do NOT rely on steam trap to isolate", "💨 Bleed steam line to atmospheric: Open drain valve and verify no pressure/steam", "🌡️ Allow cooldown: Steam lines remain HOT after isolation — verify < 120°F before touching", "🔵 Condensate return valve: Lock closed separately", "⚠️ Steam burns are fast and severe — full-body thermal protection required near live steam", "🔌 Electrical: Boiler feed pump and condensate pump MCC disconnects — lock"]
      },
      {
        heading: "Chemical LOTO — Acids, Caustics & Food Oils",
        body: "CIP systems use caustic (NaOH) and acid (typically citric or phosphoric) for equipment sanitation. These are genuinely hazardous chemicals requiring chemical LOTO in addition to standard energy isolation.",
        visual: "🧪",
        list: ["🔵 CIP supply valves (caustic and acid circuits): Lock closed separately", "🔵 Product (oil/vinegar) supply valves: Lock closed before opening any lines", "💨 Bleed and drain lines before breaking any flange or fitting", "🧴 Required PPE: face shield, chemical-resistant gloves, apron over standard PPE", "⚠️ Never mix acid and caustic drain streams — neutralization reaction generates heat", "📋 SDS (Safety Data Sheet) must be reviewed before work on any chemical circuit"]
      },
      {
        heading: "Mixers, Pumps & Mechanical Hazards",
        body: "High-speed mixing vessels and transfer pumps create nip points, suction hazards, and impeller strike risks. Never reach into a mixer or pump housing without full electrical isolation verified.",
        visual: "🔩",
        list: ["⚡ Mixer motor: MCC disconnect — lock, verify zero amps, verify impeller is stopped", "⚡ Transfer pump: MCC disconnect — lock, verify zero amps", "🔩 Mechanical: Impellers can coast — verify full stop before any entry", "🔵 Inlet/outlet valves: Lock closed before removing any pump cover", "💨 Pressure relief: Ensure vessel is vented to atmospheric before opening", "🔩 Block or restrain vessel agitator paddles if working inside a tank"]
      }
    ],
    quiz: [
      { q: "Before entering a mixing tank to inspect the agitator, you must:", options: ["Just turn off the mixer switch", "Lock out the motor at the MCC, verify zero amps, verify impeller fully stopped, and vent the vessel", "Notify the food safety manager", "Drain the tank contents only"], answer: 1 },
      { q: "After locking the steam supply valve to the railcar unloading line, your next step is:", options: ["Begin work immediately — the valve is closed", "Bleed the line, verify zero pressure, and verify temperature < 120°F before touching", "Turn off the boiler", "Apply a Danger tag to the valve"], answer: 1 },
      { q: "CIP acid and caustic drain streams must never be mixed because:", options: ["They would contaminate the food product", "Neutralization generates heat and potentially harmful reactions", "OSHA prohibits mixing chemicals", "They would clog the drain"], answer: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "truckservice",
    title: "Truck Service Center & Gas Station",
    subtitle: "BLDG-080 — Lifts, Fuel, USTs & Vehicle Energy",
    icon: "🚛",
    color: "#00AAFF",
    category: "FACILITY",
    slides: [
      {
        heading: "Truck Service Center — Unique Vehicle Hazards",
        body: "The Dingfelder Truck Service Center services Class 8 semi-trucks, tankers, and campus industrial vehicles. Key hazards include heavy vehicle lifts, pressurized fuel systems, air brake systems (stored pneumatic energy), and large battery banks on hybrid and diesel-electric vehicles. LOTO at the truck center requires vehicle-specific energy control procedures.",
        visual: "🚛",
        fact: "A typical Class 8 semi-truck air brake system holds 100–120 PSI. An unrestrained air brake release can move a 40-ton vehicle. Always chock wheels AND drain air tanks before working under a vehicle."
      },
      {
        heading: "Vehicle Lift LOTO",
        body: "The truck center uses both in-ground pit lifts and above-ground hydraulic column lifts capable of lifting 100,000 lb. Lift failure under a loaded vehicle is fatal. LOTO for lifts is mandatory before any work beneath a raised vehicle.",
        visual: "🔧",
        list: ["⚡ Lift power unit: Lock out electrical disconnect at panel", "🔧 Hydraulic: Engage all mechanical locking safeties on each lift column", "⚠️ Safety stands: Independently support vehicle after lift is locked — never rely solely on lift locks", "🔽 Gravitational: Lower vehicle as far as possible before locking; minimize energy in the system", "⚠️ Never work beneath a suspended load unless it is independently supported", "🔵 Hydraulic pressure: Bleed circuit after lockout — verify zero at gauge"]
      },
      {
        heading: "Fuel Systems — Gas Station & Underground Tanks",
        body: "The campus gas station has underground storage tanks (USTs) for diesel, gasoline, and DEF. UST maintenance is governed by both OSHA 29 CFR 1910.147 and EPA 40 CFR 280 for tanks. Any work on fuel dispensers, submersible pumps, or tank manholes requires full fuel isolation.",
        visual: "⛽",
        list: ["🔌 Fuel dispenser: Lock out 120V supply at panel — verify display is dead", "🔵 Submersible pump: Lock out in-tank power (EMP panel in dispenser bay)", "🔵 Emergency shutoff valve: Close and lock at island and at tank", "⚠️ Fuel vapor: Test atmosphere before opening any tank manhole (LEL meter required)", "🔥 No ignition sources: No vehicles, no cell phones, no electrical work near open fuel systems", "🌡️ Static electricity: Bond and ground all equipment before opening fuel tanks"]
      },
      {
        heading: "Air Brake Systems — Stored Pneumatic Energy",
        body: "Class 8 truck air brake systems maintain 100–120 PSI in dual-circuit reservoirs even when the engine is off. This stored energy can actuate brake chambers and move a parked vehicle if not properly controlled.",
        visual: "💨",
        list: ["⚠️ Wheel chocks: Apply BEFORE doing anything else — front AND rear", "💨 Drain air tanks: Open drain valves on ALL air tanks — verify zero PSI", "🔽 Spring brakes: Do NOT release spring brakes (parking brakes) until vehicle is securely chocked", "⚡ Ignition: Remove key and keep with you — or use a steering column lock", "🔋 Battery: Disconnect negative terminal for any electrical work — large batteries = arc risk", "📋 MSLP for each truck model specifies exact air tank drain sequence"]
      }
    ],
    quiz: [
      { q: "Before working beneath a Class 8 truck on the column lift, you must:", options: ["Trust the lift's internal locks", "Lock out the lift power, engage all mechanical column safeties, AND independently support the vehicle with safety stands", "Just drain the air brakes", "Have a spotter watch the lift"], answer: 1 },
      { q: "When opening a UST manway for a submersible pump repair, you must first:", options: ["Turn off the dispenser display", "Test the atmosphere with an LEL meter and bond/ground the equipment before opening", "Just close the emergency shutoff valve", "Drain the tank completely"], answer: 1 },
      { q: "Air brake reservoirs on a parked Class 8 truck:", options: ["Automatically drain when the engine is off", "Maintain 100–120 PSI even with engine off and must be manually drained before work", "Only hold pressure when the brakes are applied", "Are safe to work around without chocking"], answer: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "restaurants",
    title: "Restaurants & Retail",
    subtitle: "Walmart, Burger King, McDonald's — Commercial Kitchen & Refrigeration LOTO",
    icon: "🍔",
    color: "#FF9900",
    category: "FACILITY",
    slides: [
      {
        heading: "Commercial Operations — LOTO Still Applies",
        body: "The Dingfelder campus Walmart, Burger King, and McDonald's may feel like low-hazard environments compared to the foundry. They are not exempt from LOTO requirements. OSHA 29 CFR 1910.147 applies to any equipment with unexpected energization potential, including commercial kitchen equipment, HVAC units, refrigeration compressors, bakery equipment, and automatic doors.",
        visual: "🍔",
        fact: "OSHA cites restaurants and retail stores for LOTO violations every year. Commercial fryers, dough mixers, and meat slicers are leading sources of commercial kitchen injuries."
      },
      {
        heading: "Commercial Kitchen LOTO",
        body: "Restaurant kitchen equipment presents real energy hazards. Fryers contain hot oil above 350°F. Mixers have powerful torque and no-warning restart risk. Slicers have exposed blades. Ovens have heating elements. All require LOTO before any service.",
        visual: "🍳",
        list: ["⚡ Fryer: Unplug or lock disconnect — verify display dead. Allow oil to cool below 100°F before draining", "⚡ Commercial mixer: Unplug or lock panel disconnect — verify bowl is down, verify full stop before any contact with paddle/hook", "⚡ Meat slicer: Unplug, install blade guard — NEVER reach near blade without guard installed", "🌡️ Convection oven: Lock disconnect, allow full cooldown — heating elements store thermal energy", "💨 Hood exhaust fan: Lock out at roof disconnect OR at panel — verify blades stopped", "⚡ Walk-in cooler compressor: Lock at condensing unit disconnect (often roof-mounted)"]
      },
      {
        heading: "Refrigeration Systems — Walmart & Restaurant",
        body: "Large retail and restaurant refrigeration systems (walk-in coolers, freezers, reach-in cases) use refrigerant compressors with significant stored pressure and electrical energy. The Walmart store has extensive refrigeration rack systems.",
        visual: "❄️",
        list: ["⚡ Compressor rack: Lock main disconnect at electrical panel — verify all compressors off", "💨 Refrigerant pressure: Compressor suction and discharge remain pressurized after shutdown — never open a refrigerant circuit without proper certification (EPA 608)", "🌡️ Suction lines: Can be extremely cold (below -20°F for low-temp freezer circuits) — thermal PPE required", "⚠️ Refrigerant leak: R-404A and R-448A used at Dingfelder retail — both are asphyxiants in confined spaces", "⚡ Evaporator fans: Lock disconnect before defrost heater or fan work — heaters can reach 600°F", "🔽 Gravity: Refrigeration unit doors — brace/block before removing hinges or door equipment"]
      },
      {
        heading: "HVAC & Roof Equipment LOTO",
        body: "All three commercial buildings have rooftop HVAC units. Fall hazards combine with energy hazards on rooftop equipment. LOTO for rooftop units requires both energy isolation AND fall protection.",
        visual: "🌬️",
        list: ["⚡ RTU (Rooftop Unit): Lock disconnect at unit — do NOT rely on thermostat to isolate", "🔩 Fan blades: Verify full stop and block before any filter or coil work — blades restart without warning", "💨 Refrigerant circuits: Same rules as refrigeration — EPA 608 certification required to open refrigerant circuits", "⚠️ Fall protection: Required on any roof above 6 feet — use anchor points installed at each RTU", "🌡️ Heat strips: Lock main RTU disconnect — strips can reach 1,000°F and stay hot long after shutdown", "⚡ Condensate pump: Lock dedicated outlet if working on condensate drain pan"]
      }
    ],
    quiz: [
      { q: "Before cleaning the paddle assembly on a commercial mixer at Burger King, you must:", options: ["Just turn the speed dial to zero", "Lock out the electrical disconnect, verify the bowl is secured, and confirm the paddle is fully stopped before any contact", "Use the machine's built-in safety guard", "Turn off the main kitchen breaker"], answer: 1 },
      { q: "A walk-in cooler compressor must be worked on. Who can open the refrigerant circuit?", options: ["Any authorized LOTO employee", "Only a technician with EPA 608 certification — refrigerant circuits require certification to open", "Any maintenance person with gloves and safety glasses", "The store manager with training"], answer: 1 },
      { q: "On a rooftop HVAC unit, after locking the main disconnect, the fan blades:", options: ["Stop instantly and are safe to touch", "May still coast from inertia — verify full stop before any contact", "Are automatically blocked by the disconnect", "Are only a hazard during operation"], answer: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  {
    id: "restore",
    title: "Restoration & Special Permits",
    subtitle: "Safe Return to Service · Hot Work · Confined Space",
    icon: "🔄",
    color: "#C879FF",
    category: "CORE",
    slides: [
      {
        heading: "Restoring Equipment — The Reverse Sequence",
        body: "Returning equipment to service follows a strict sequence that is the mirror image of LOTO application. This is when most restoration accidents happen — pressure to finish, skipped steps, assumptions. Execute every step regardless of time pressure.",
        visual: "🔄",
        list: ["1. Confirm ALL work is complete — tools removed, guards reinstalled, personnel clear", "2. All workers remove their own personal locks", "3. Verify all isolation devices are removed (no lock left behind)", "4. Restore energy sources in sequence per the MSLP", "5. Notify ALL affected employees that equipment is returning to service", "6. Test/start using normal operating procedure"]
      },
      {
        heading: "Hot Work Permit — When LOTO Meets Open Flame",
        body: "Hot work (welding, cutting, grinding, brazing, soldering) near flammable materials requires a Hot Work Permit issued by the Dingfelder Safety Manager. This is separate from LOTO but often overlaps. Hot work near the propane farm, gas station, or salad dressing plant oil tanks requires elevated precautions.",
        visual: "🔥",
        list: ["LEL must be < 10% before permit is issued and continuously during work", "Fire watch: present during work and 30 minutes after completion", "Combustibles removed or shielded within 35 feet of work area", "Permit valid for ONE work session — new permit required each day", "Propane farm: no hot work within 35 feet of any tank", "Gas station: no hot work within 50 feet of any UST vent or manway"]
      },
      {
        heading: "Confined Space Entry — Where LOTO and Atmosphere Testing Meet",
        body: "Many Dingfelder systems require confined space entry in addition to LOTO. Confined spaces include: separator vessels, sand silos, propane tank access vaults, wastewater treatment tanks, underground fuel tank vaults, and boiler vessel interiors.",
        visual: "🕳️",
        list: ["OSHA 29 CFR 1910.146 governs permit-required confined space entry", "Required tests before entry: O₂ (19.5–23.5%), LEL (< 10%), H₂S (< 1 ppm)", "Continuous monitoring throughout entry", "Attendant required outside the space at all times — never enters unless relieved", "Retrieval system required unless it would create greater hazard", "LOTO must be complete on ALL energy sources BEFORE atmospheric testing begins"]
      },
      {
        heading: "Emergency Lock Removal Procedure",
        body: "If an employee leaves the site without removing their personal lock, the Dingfelder Safety Manager may authorize Emergency Removal — but ONLY following the documented procedure. This procedure exists to protect the employee who isn't present, not to make restart convenient.",
        visual: "🚨",
        list: ["1. Verify the employee is NOT in or near the equipment", "2. Attempt to contact the employee by all means available", "3. Safety Manager authorizes removal in writing", "4. Two-person verification that equipment area is clear", "5. Document the removal with date, time, reason, and witnesses", "6. Notify the employee when they return — every time, no exceptions"]
      }
    ],
    quiz: [
      { q: "A Hot Work Permit at the propane farm requires the atmosphere to read:", options: ["< 25% LEL", "< 10% LEL throughout the entire work period", "0% LEL only at startup", "< 50% LEL with a fire watch"], answer: 1 },
      { q: "Before entering the gas/liquid separator for internal inspection, LOTO must be:", options: ["Complete on the inlet valve only", "Complete on ALL energy and pressure sources, followed by atmospheric testing, then a confined space entry permit", "Approved verbally by the supervisor", "Tagged only — locks are not needed for vessel entry"], answer: 1 },
      { q: "Emergency lock removal may be authorized when:", options: ["The supervisor needs to restart production quickly", "An employee left without removing their lock AND the documented procedure is followed after verifying the employee is not near the equipment", "No one else is available to unlock", "The work has been done for more than 8 hours"], answer: 1 }
    ]
  }
,
{
  id: "review",
  title: "Campus Control Review",
  subtitle: "Critical Errors, Verification & Restart Discipline",
  icon: "🧠",
  color: "#22CC66",
  category: "REVIEW",
  slides: [
    {
      heading: "The Five Things That Get People Hurt",
      body: "Across the Dingfelder campus, the same five errors show up again and again: assuming power is off because the machine stopped, locking only electrical energy while leaving pneumatic or hydraulic pressure behind, letting someone else remove your lock, failing to verify zero energy before touching the machine, and restoring equipment before everyone is clear. These are not paperwork mistakes. They are fatal-energy mistakes.",
      visual: "🧠",
      list: [
        "Never trust a stop button, selector switch, or HMI screen as proof of isolation.",
        "Every energy source must be isolated — electrical, hydraulic, pneumatic, thermal, gravity, and pressure.",
        "Only the employee who applied the lock removes that lock, except under documented emergency-removal procedure.",
        "Verification is a separate step. Isolation is not complete until zero energy is proven.",
        "Restoration requires a final area-clear check, communication, and controlled restart.",
      ],
      fact: "The most credible LOTO programs are not the ones with the thickest binders — they are the ones that stop people from taking shortcuts when production pressure rises."
    },
    {
      heading: "Verification Means Proving a Negative",
      body: "A safe zero-energy state must be proven. That means trying the normal start control, checking for stored pressure, confirming blocked motion cannot fall or roll, and making sure residual heat or trapped product cannot suddenly release. On the Dingfelder campus, this matters in every environment: furnaces and conveyors in the foundry, pressure vessels and well equipment in oil and gas, mixers and pumps in food process, and compressors and HVAC units in restaurants and retail.",
      visual: "✅",
      list: [
        "Try-start after lockout where procedure allows.",
        "Bleed, vent, block, or drain stored energy sources.",
        "Treat any remaining movement, pressure, or temperature as hazardous until eliminated.",
        "Repeat verification after interruptions, shift changes, or temporary re-energization.",
      ],
      fact: "A machine that cannot start electrically may still contain enough stored pressure, gravity, or heat to kill a technician."
    },
    {
      heading: "Restart Is Part of the Procedure",
      body: "Restart is not an afterthought. Before re-energizing, the job must be complete, guards restored, tools removed, affected employees notified, and all personnel accounted for. The final step is a deliberate controlled restart — not a casual handoff to production. This is where discipline protects maintenance teams, operators, contractors, and anyone walking the area.",
      visual: "🔁",
      list: [
        "Confirm work is complete and the machine is ready for operation.",
        "Verify guards, panels, doors, and covers are back in place.",
        "Account for every person and every lockout device.",
        "Communicate that lockout is ending before re-energization.",
        "Restore energy in a controlled sequence and watch the first restart carefully.",
      ],
      fact: "A clean restoration sequence is what separates a professional energy-control program from a near miss waiting to happen."
    }
  ],
  quiz: [
    { q: "A conveyor is stopped and silent. What is the correct assumption?", options: ["It is safe because it is not moving", "It is de-energized if the HMI is dark", "It remains hazardous until all energy sources are isolated and verified", "It is safe if production says maintenance can enter"], answer: 2 },
    { q: "Which action is part of verification, not just isolation?", options: ["Applying a tag", "Trying the start control and checking for stored energy", "Telling the operator the machine is down", "Putting tools on the floor nearby"], answer: 1 },
    { q: "A contractor and a Dingfelder technician are working on the same asset. Which is correct?", options: ["Only the contractor needs a lock", "Only Dingfelder applies locks because it is the host site", "Both parties coordinate and follow the site energy-control program", "Whichever party arrives first controls the lockout"], answer: 2 },
    { q: "What is the biggest error when dealing with hydraulic or pneumatic systems?", options: ["Using orange locks instead of red locks", "Assuming shutdown removed all stored pressure", "Using too many tags", "Calling the supervisor before maintenance starts"], answer: 1 },
    { q: "Who should remove a personal lock under normal conditions?", options: ["Any supervisor on duty", "The operator who wants the line restarted", "The employee who applied the lock", "The safety office after the work order closes"], answer: 2 },
    { q: "A line must be briefly energized for testing. What is required next?", options: ["Leave it energized if the test looked good", "Reapply full lockout before continuing work", "Remove only electrical locks", "Finish the task quickly while the line is available"], answer: 1 },
    { q: "Which statement about restart is correct?", options: ["Restart is production's responsibility, not maintenance's", "Once locks come off, the procedure is over", "Restart requires area clear, communication, and controlled re-energization", "Restart should be immediate so downtime stays low"], answer: 2 },
    { q: "A well technician says there is no danger because the breaker is open. What else may still be hazardous?", options: ["Only lighting circuits", "Stored pressure, gravity, trapped product, or thermal energy", "Nothing else matters once electricity is isolated", "Only computer controls"], answer: 1 },
    { q: "What should happen before any lock is removed at shift change?", options: ["Nothing special if the next shift is already here", "A documented transfer that keeps protection continuous", "The area should be left unlocked until the next shift decides", "Production should test the equipment first"], answer: 1 },
    { q: "Which is a critical warning sign of a weak LOTO culture?", options: ["Employees verify zero energy every time", "People say 'we only need this for a minute'", "Contractors ask about the site procedure", "Operators wait for maintenance signoff"], answer: 1 },
    { q: "Why is a stop button not a control of hazardous energy?", options: ["Because OSHA only recognizes breaker switches", "Because it may stop motion without isolating all energy sources", "Because operators are not allowed to touch it", "Because it only works on conveyors"], answer: 1 },
    { q: "Before restoration, which check belongs on every facility?", options: ["Verify the work order number matches accounting", "Count tools, restore guards, notify affected employees, and clear personnel", "Ask production if they are in a hurry", "Test run without telling anyone"], answer: 1 },
    { q: "Which response best matches campus-wide LOTO discipline?", options: ["Every building can improvise its own restart process", "The same verification and restoration discipline applies across all facilities", "Only the foundry requires full LOTO discipline", "Retail and food process equipment are too small to require it"], answer: 1 },
    { q: "A technician isolates electrical power but leaves a suspended load unsupported. What was missed?", options: ["Color coding", "Affecting employees notification", "Gravity energy control", "The paperwork signature"], answer: 2 },
    { q: "What is the safest summary of LOTO?", options: ["Stop the machine and get to work", "Control every energy source, verify zero energy, and restore deliberately", "Tag the machine and rely on coworkers", "Let experienced workers decide case by case"], answer: 1 }
  ]
}

];

// ─── UI HELPERS ───────────────────────────────────────────────────────────────

const CATEGORIES = ["ALL", "CORE", "FACILITY"];

function ProgressBar({ current, total, color }) {
  return (
    <div style={{ width: "100%", height: 3, background: "#1a1a1a", borderRadius: 2, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${Math.max(4, (current / total) * 100)}%`, background: color, transition: "width 0.4s ease", borderRadius: 2 }} />
    </div>
  );
}

function FadeIn({ children, deps }) {
  const [v, setV] = useState(false);
  useEffect(() => { setV(false); const t = setTimeout(() => setV(true), 40); return () => clearTimeout(t); }, deps);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(10px)", transition: "all 0.3s ease", display: "flex", flexDirection: "column", flex: 1 }}>{children}</div>;
}

// ─── SLIDE VIEW ───────────────────────────────────────────────────────────────

function SlideView({ slide, color, onNext, onPrev, isFirst, isLast }) {
  return (
    <FadeIn deps={[slide.heading]}>
      {slide.step && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#000", fontFamily: "'Barlow Condensed',sans-serif", flexShrink: 0 }}>{slide.step}</div>
          <div style={{ flex: 1, height: 1, background: `${color}33` }} />
          <span style={{ color: color, fontSize: 10, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 3 }}>STEP {slide.step} OF 8</span>
        </div>
      )}
      <div style={{ textAlign: "center", fontSize: 52, marginBottom: 14, filter: "drop-shadow(0 0 16px rgba(255,255,255,0.15))" }}>{slide.visual}</div>
      <h2 style={{ margin: "0 0 12px", fontSize: 23, fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", color: "#fff", lineHeight: 1.2 }}>{slide.heading}</h2>
      <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.7, color: "#bbb", fontFamily: "'IBM Plex Sans',sans-serif" }}>{slide.body}</p>
      {slide.list && (
        <ul style={{ margin: "0 0 14px", padding: 0, listStyle: "none" }}>
          {slide.list.map((item, i) => (
            <li key={i} style={{ padding: "7px 12px", marginBottom: 5, background: "#111", border: "1px solid #222", borderLeft: `3px solid ${color}`, borderRadius: 4, fontSize: 12.5, color: "#ccc", fontFamily: "'IBM Plex Sans',sans-serif", lineHeight: 1.5 }}>{item}</li>
          ))}
        </ul>
      )}
      {slide.fact && (
        <div style={{ padding: "11px 14px", background: `${color}18`, border: `1px solid ${color}44`, borderRadius: 6, marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: color, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 2, display: "block", marginBottom: 3 }}>⚠ KEY FACT</span>
          <span style={{ fontSize: 13, color: "#ddd", fontFamily: "'IBM Plex Sans',sans-serif", lineHeight: 1.5 }}>{slide.fact}</span>
        </div>
      )}
      <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 14 }}>
        {!isFirst && <button onClick={onPrev} style={{ flex: 1, padding: "11px", background: "transparent", border: "1px solid #2a2a2a", borderRadius: 6, color: "#666", cursor: "pointer", fontSize: 13, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 1 }}>← BACK</button>}
        <button onClick={onNext} style={{ flex: 2, padding: "11px", background: color, border: "none", borderRadius: 6, color: "#000", cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 2 }}>{isLast ? "TAKE QUIZ →" : "NEXT →"}</button>
      </div>
    </FadeIn>
  );
}

// ─── QUIZ VIEW ────────────────────────────────────────────────────────────────

function QuizView({ questions, color, moduleName, onComplete }) {
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState(null);
  const [rev, setRev] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[cur];
  const passed = score >= 2;

  const pick = (i) => { if (rev) return; setSel(i); setRev(true); if (i === q.answer) setScore(s => s + 1); };
  const next = () => { if (cur + 1 >= questions.length) { setDone(true); return; } setCur(c => c + 1); setSel(null); setRev(false); };

  if (done) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 14 }}>{passed ? "✅" : "❌"}</div>
      <h2 style={{ color, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, margin: "0 0 8px" }}>{passed ? "MODULE PASSED" : "REVIEW REQUIRED"}</h2>
      <p style={{ color: "#888", fontSize: 14, fontFamily: "'IBM Plex Sans',sans-serif", marginBottom: 20, lineHeight: 1.5 }}>
        {score}/{questions.length} correct.{!passed && " Score 2/3 or better to pass. Please review the slides."}
      </p>
      <div style={{ padding: "14px 28px", background: passed ? color : "#222", borderRadius: 8, marginBottom: 20 }}>
        <span style={{ color: "#000", fontWeight: 900, fontSize: 22, fontFamily: "'Barlow Condensed',sans-serif" }}>{score}/{questions.length}</span>
      </div>
      <button onClick={() => onComplete(passed)} style={{ padding: "12px 28px", background: passed ? color : "transparent", border: passed ? "none" : `1px solid ${color}`, borderRadius: 6, color: passed ? "#000" : color, cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, letterSpacing: 2, fontWeight: 700 }}>
        {passed ? "CONTINUE →" : "RETAKE MODULE"}
      </button>
    </div>
  );

  return (
    <FadeIn deps={[cur]}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ color, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: 3 }}>QUIZ — {moduleName.toUpperCase()} · Q{cur + 1}/{questions.length}</span>
        <ProgressBar current={cur} total={questions.length} color={color} />
      </div>
      <h2 style={{ color: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, margin: "0 0 20px", lineHeight: 1.3 }}>{q.q}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        {q.options.map((opt, i) => {
          let bg = "#111", bdr = "#222", clr = "#bbb";
          if (rev) {
            if (i === q.answer) { bg = `${color}22`; bdr = color; clr = "#fff"; }
            else if (i === sel) { bg = "#2a1111"; bdr = "#aa2222"; clr = "#ff7777"; }
          } else if (sel === i) { bdr = color; }
          return (
            <button key={i} onClick={() => pick(i)} style={{ padding: "13px 14px", background: bg, border: `1px solid ${bdr}`, borderRadius: 6, color: clr, cursor: rev ? "default" : "pointer", fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13.5, textAlign: "left", transition: "all 0.15s", lineHeight: 1.4 }}>
              <span style={{ color, fontWeight: 700, marginRight: 8, fontFamily: "'Barlow Condensed',sans-serif" }}>{String.fromCharCode(65 + i)}.</span>
              {opt}
              {rev && i === q.answer && <span style={{ float: "right" }}>✓</span>}
              {rev && i === sel && i !== q.answer && <span style={{ float: "right" }}>✗</span>}
            </button>
          );
        })}
      </div>
      {rev && (
        <button onClick={next} style={{ marginTop: 16, padding: "12px", background: color, border: "none", borderRadius: 6, color: "#000", cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 2 }}>
          {cur + 1 >= questions.length ? "SEE RESULTS" : "NEXT →"}
        </button>
      )}
    </FadeIn>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function LOTOFullCampus() {
  const [screen, setScreen] = useState("home");
  const [filter, setFilter] = useState("ALL");
  const [modIdx, setModIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [phase, setPhase] = useState("slides");
  const [completed, setCompleted] = useState({});

  const mod = MODULES[modIdx];
  const allComplete = MODULES.every(m => completed[m.id]);
  const completedCount = Object.keys(completed).length;

  const startMod = (idx) => { setModIdx(idx); setSlideIdx(0); setPhase("slides"); setScreen("module"); };

  const handleNext = () => {
    if (slideIdx + 1 >= mod.slides.length) setPhase("quiz");
    else setSlideIdx(s => s + 1);
  };
  const handlePrev = () => { if (slideIdx > 0) setSlideIdx(s => s - 1); };
  const handleQuizDone = (passed) => {
    if (!passed) { setSlideIdx(0); setPhase("slides"); return; }
    setCompleted(c => ({ ...c, [mod.id]: true }));
    // Find next uncompleted module
    const next = MODULES.findIndex((m, i) => i > modIdx && !completed[m.id]);
    if (next === -1 || allComplete) { setScreen("complete"); }
    else startMod(next);
  };

  const filtered = filter === "ALL" ? MODULES : MODULES.filter(m => m.category === filter);

  // ── HOME ──────────────────────────────────────────────────────
  if (screen === "home") return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "'IBM Plex Sans',sans-serif", display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "#0c0c0c", borderBottom: "1px solid #1a1a1a", padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 38, height: 38, background: "#FF6B00", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚡</div>
        <div>
          <div style={{ color: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: 1 }}>DINGFELDER INDUSTRIAL CAMPUS</div>
          <div style={{ color: "#444", fontSize: 10, letterSpacing: 3 }}>LOCKOUT / TAGOUT · FULL CAMPUS TRAINING · 29 CFR 1910.147</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ color: "#FF6B00", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 900 }}>{completedCount}/{MODULES.length}</div>
          <div style={{ color: "#444", fontSize: 10, letterSpacing: 2 }}>MODULES DONE</div>
        </div>
      </div>

      {/* Master progress */}
      <div style={{ padding: "0 20px", background: "#0c0c0c", paddingBottom: 14 }}>
        <ProgressBar current={completedCount} total={MODULES.length} color="#FF6B00" />
      </div>

      {/* Hero */}
      <div style={{ padding: "28px 20px 20px", borderBottom: "1px solid #111" }}>
        <div style={{ color: "#FF6B00", fontSize: 10, letterSpacing: 4, fontFamily: "'Barlow Condensed',sans-serif", marginBottom: 8 }}>FEDERAL COMPLIANCE · OSHA 29 CFR 1910.147 · NFPA 58 · 29 CFR 1910.119</div>
        <h1 style={{ margin: 0, fontSize: 38, fontWeight: 900, fontFamily: "'Barlow Condensed',sans-serif", color: "#fff", lineHeight: 1.1 }}>
          LOCKOUT / TAGOUT<br /><span style={{ color: "#FF6B00" }}>FULL CAMPUS PROGRAM</span>
        </h1>
        <p style={{ color: "#555", fontSize: 13, marginTop: 10, marginBottom: 0, lineHeight: 1.6 }}>
          9 modules · All energy types · Foundry · Oil & Gas · Propane Farm · Beam Mill · Food Plant · Truck Center · Restaurants · Retail
        </p>
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 8, padding: "14px 20px", borderBottom: "1px solid #111" }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{ padding: "6px 14px", background: filter === cat ? "#FF6B00" : "transparent", border: `1px solid ${filter === cat ? "#FF6B00" : "#222"}`, borderRadius: 20, color: filter === cat ? "#000" : "#555", cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, letterSpacing: 2, fontWeight: 700 }}>{cat}</button>
        ))}
        <span style={{ marginLeft: "auto", color: "#333", fontSize: 12, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 1, alignSelf: "center" }}>PASS 2/3 TO ADVANCE</span>
      </div>

      {/* Module list */}
      <div style={{ flex: 1, padding: "14px 20px", overflowY: "auto" }}>
        {filtered.map((m, i) => {
          const done = completed[m.id];
          const globalIdx = MODULES.indexOf(m);
          return (
            <div key={m.id} onClick={() => startMod(globalIdx)} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "13px 14px", marginBottom: 7,
              background: "#0f0f0f", border: `1px solid ${done ? m.color + "55" : "#1a1a1a"}`,
              borderRadius: 8, cursor: "pointer", transition: "all 0.15s"
            }}>
              <div style={{ width: 42, height: 42, borderRadius: 8, background: done ? m.color : `${m.color}1a`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, border: `1px solid ${m.color}33`, flexShrink: 0 }}>
                {done ? "✓" : m.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                  <span style={{ color: done ? m.color : "#ddd", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 15 }}>{m.title}</span>
                  <span style={{ padding: "1px 6px", background: `${m.color}22`, border: `1px solid ${m.color}33`, borderRadius: 3, fontSize: 9, color: m.color, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 2 }}>{m.category}</span>
                </div>
                <div style={{ color: "#444", fontSize: 11 }}>{m.subtitle}</div>
              </div>
              <span style={{ color: done ? m.color : "#333", fontSize: 16, flexShrink: 0 }}>{done ? "✓" : "→"}</span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ padding: "12px 20px", borderTop: "1px solid #111", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "#2a2a2a", fontSize: 11, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 1 }}>DINGFELDER SAFETY TRAINING DIVISION</span>
        <span style={{ color: "#2a2a2a", fontSize: 11, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 1 }}>{new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );

  // ── COMPLETE ───────────────────────────────────────────────────
  if (screen === "complete") return (
    <div style={{ minHeight: "100vh", background: "#080808", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 28, textAlign: "center" }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={{ fontSize: 72, marginBottom: 20 }}>🏆</div>
      <h1 style={{ color: "#FF6B00", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>FULL CAMPUS LOTO<br />TRAINING COMPLETE</h1>
      <p style={{ color: "#888", fontSize: 14, marginBottom: 28, lineHeight: 1.7, maxWidth: 480 }}>
        You have completed all 9 LOTO training modules covering the entire A.I.R.O.N. training environment at the Dingfelder Industrial Campus. This session satisfies awareness training requirements under OSHA 29 CFR 1910.147. Present this record to your supervisor and Safety Department. Authorized Employee certification requires hands-on verification in addition to this course.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, width: "100%", maxWidth: 520, marginBottom: 28 }}>
        {MODULES.map(m => (
          <div key={m.id} style={{ padding: "8px 10px", background: `${m.color}12`, border: `1px solid ${m.color}33`, borderRadius: 6, textAlign: "center" }}>
            <div style={{ fontSize: 18, marginBottom: 2 }}>{m.icon}</div>
            <div style={{ color: m.color, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: 0.5, lineHeight: 1.2 }}>{m.title}</div>
          </div>
        ))}
      </div>
      <div style={{ color: "#2a2a2a", fontSize: 11, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 2 }}>
        DINGFELDER · OSHA 29 CFR 1910.147 · NFPA 58 · {new Date().toLocaleDateString()}
      </div>
      <button onClick={() => { setCompleted({}); setScreen("home"); }} style={{ marginTop: 20, padding: "10px 24px", background: "transparent", border: "1px solid #333", borderRadius: 6, color: "#444", cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, letterSpacing: 2 }}>RESTART TRAINING</button>
    </div>
  );

  // ── MODULE ─────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#080808", display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Module header */}
      <div style={{ background: "#0c0c0c", borderBottom: "1px solid #1a1a1a", padding: "11px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, letterSpacing: 1, padding: 0 }}>← HOME</button>
          <div style={{ flex: 1 }} />
          <span style={{ color: mod.color, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: 2 }}>
            {phase === "slides" ? `SLIDE ${slideIdx + 1}/${mod.slides.length}` : "QUIZ"}
          </span>
        </div>
        <ProgressBar current={phase === "slides" ? slideIdx + 1 : mod.slides.length + 1} total={mod.slides.length + 1} color={mod.color} />
        <div style={{ marginTop: 9, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 6, background: `${mod.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, border: `1px solid ${mod.color}33`, flexShrink: 0 }}>{mod.icon}</div>
          <div>
            <div style={{ color: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 15 }}>{mod.title}</div>
            <div style={{ color: "#444", fontSize: 10, letterSpacing: 1 }}>{mod.subtitle}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "18px 20px", display: "flex", flexDirection: "column", maxWidth: 720, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
        {phase === "slides"
          ? <SlideView slide={mod.slides[slideIdx]} color={mod.color} onNext={handleNext} onPrev={handlePrev} isFirst={slideIdx === 0} isLast={slideIdx === mod.slides.length - 1} />
          : <QuizView questions={mod.quiz} color={mod.color} moduleName={mod.title} onComplete={handleQuizDone} />
        }
      </div>
    </div>
  );
}
