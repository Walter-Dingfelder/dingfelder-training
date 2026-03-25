
import TrainingModuleShell from "./TrainingModuleShell.jsx";

export const PHASE1_MODULES = [
  {
    path: "/hazcom",
    label: "Hazard Communication / SDS / GHS",
    short: "Chemical Labels, SDS, and Safe Handling",
    icon: "🧪",
    color: "#FFD100",
    regulation: "OSHA Hazard Communication — Chemical labeling and SDS awareness",
    audience: "All campus employees working around chemicals, cleaners, fuels, coatings, and process materials",
    minutes: 18,
    slides: [
      {
        heading: "Every Container Tells a Story",
        sub: "If the label is missing, the hazard is unknown.",
        body: "Across the Dingfelder campus, chemicals appear in foundry binders, cleaners, lubricants, food plant sanitation systems, propane and fuel systems, and maintenance shops. Hazard communication starts before use: read the label, confirm the product identity, and match the container to the job. Never use a chemical from an unmarked bottle, pail, tote, or transfer container.",
        list: [
          "Product identifier must match the task and the container.",
          "Signal words like Danger or Warning indicate relative severity.",
          "Pictograms communicate the type of hazard at a glance.",
        ],
        callout: { label: "SITE RULE", text: "If a secondary container is not labeled, stop and get it corrected before use." }
      },
      {
        heading: "Use the SDS Before Exposure Happens",
        sub: "The Safety Data Sheet is the operating manual for chemical risk.",
        body: "Each chemical used on campus should have an SDS available to the work group. The SDS tells you what the product is, what hazards it creates, what PPE is required, what first aid steps apply, and how to respond to spills or leaks. Read the SDS before you begin work, not after someone has been exposed.",
        list: [
          "Check required gloves, eye protection, and ventilation.",
          "Review first aid steps for skin, eye, inhalation, or ingestion exposure.",
          "Know incompatibilities before mixing or storing materials together.",
        ],
      },
      {
        heading: "Chemical Transfer Is a High-Risk Moment",
        sub: "Most confusion and exposure starts during pouring, mixing, or cleanup.",
        body: "When chemicals are transferred between tanks, buckets, spray bottles, or process systems, the risk of splash, vapor release, and misidentification rises. Confirm the receiving container, control the area, use the listed PPE, and keep absorbents or emergency response supplies ready before opening the system.",
        callout: { label: "REMEMBER", text: "No unlabeled spray bottles. No guessing. No cross-connection between sanitation chemicals, process chemicals, and fuels." }
      },
    ],
    quiz: [
      { q: "What should you do if you find a secondary container with no label?", options: ["Use it if the smell seems familiar", "Stop and get it labeled before use", "Ask a coworker to guess the contents", "Pour it into a different container"], answer: 1 },
      { q: "When should an SDS be reviewed?", options: ["Only after an exposure happens", "Only by supervisors", "Before working with the chemical", "Only for acids"], answer: 2 },
    ],
  },
  {
    path: "/ppe",
    label: "PPE Fundamentals",
    short: "Basic Protective Equipment by Task and Hazard",
    icon: "🦺",
    color: "#22CC66",
    regulation: "Campus PPE program — match PPE to the hazard and the task",
    audience: "All campus roles, visitors with escorts, maintenance, operations, and sanitation teams",
    minutes: 16,
    slides: [
      {
        heading: "PPE Is the Last Layer, Not the First",
        sub: "Use protective equipment after the hazard is understood.",
        body: "Personal protective equipment protects the worker when other controls cannot fully remove the hazard. That means PPE selection starts with hazard recognition. On the Dingfelder campus, PPE needs differ sharply between a visitor walkway, a foundry melt deck, a beam mill electrical room, a food plant chemical washdown area, and a propane handling zone.",
        list: [
          "Know the job, the exposure, and the energy involved.",
          "Wear only PPE that fits and is in serviceable condition.",
          "Replace damaged gloves, shields, lenses, or straps immediately.",
        ],
      },
      {
        heading: "Task-Specific PPE Matters",
        sub: "The correct PPE changes with heat, chemical, impact, and electrical risk.",
        body: "A face shield for grinding is not the same as a face shield for chemical splash, and neither is the same as arc-rated electrical PPE. Gloves for sanitation chemicals are different from gloves used for sharp materials or hot surfaces. Always match the PPE to the task, not just to the location.",
        list: [
          "Eye protection for impact and splash hazards.",
          "Gloves selected for chemical, cut, heat, or electrical exposure.",
          "Hearing, respiratory, and body protection when the task requires it.",
        ],
      },
      {
        heading: "PPE Works Only When Worn Correctly",
        sub: "Partial use or poor fit creates false confidence.",
        body: "Unfastened chin straps, worn-out gloves, loose sleeves near moving equipment, and missing side shields all reduce protection. Inspect PPE before use, wear it for the full duration of the task, and remove contaminated gear safely after the job.",
        callout: { label: "RULE", text: "Do not modify PPE to make it more comfortable if the modification reduces protection." }
      },
    ],
    quiz: [
      { q: "How should PPE be selected?", options: ["By comfort only", "By matching the PPE to the specific hazard and task", "By what most people wear", "By location sign only"], answer: 1 },
      { q: "What should you do with damaged PPE?", options: ["Use it one last time", "Tape it and continue", "Replace it before the task starts", "Wear two damaged items"], answer: 2 },
    ],
  },
  {
    path: "/forklift",
    label: "Forklift / Powered Industrial Truck Safety",
    short: "Vehicle Separation, Visibility, and Load Control",
    icon: "🚜",
    color: "#00BFFF",
    regulation: "Campus vehicle safety — powered industrial truck awareness",
    audience: "Warehouse personnel, retail backroom staff, food plants, shipping, foundry support, and pedestrians",
    minutes: 18,
    slides: [
      {
        heading: "Forklifts Change the Risk Picture Fast",
        sub: "A small truck can still crush, pin, or strike with very little warning.",
        body: "Powered industrial trucks operate across shipping zones, warehouses, backrooms, food plants, and support areas on campus. Their loads block visibility, their rear ends swing wide, and their braking distance increases with weight and surface conditions. Pedestrians must never assume the operator sees them.",
        list: [
          "Maintain separation and stay out of travel lanes.",
          "Make eye contact with the operator before crossing nearby.",
          "Never walk under raised forks or elevated loads.",
        ],
      },
      {
        heading: "Loads Must Be Stable Before Movement",
        sub: "A moving unstable load creates a rollover and drop hazard.",
        body: "Operators must confirm load weight, balance, fork spacing, and travel path before moving. Tall loads, uneven pallets, slick packaging, and soft floor conditions increase the chance of loss of control. In retail and food areas, a dropped load can injure workers and contaminate product at the same time.",
        callout: { label: "SITE RULE", text: "No passengers. No horseplay. No body parts outside the operator compartment during travel." }
      },
      {
        heading: "Pedestrian Safety Is Part of Forklift Safety",
        sub: "Most serious incidents involve poor separation, blind corners, or backing.",
        body: "Pedestrians should use marked walkways, listen for horns, stop at intersections, and avoid shortcuts through loading or staging areas. Operators and spotters should slow at blind corners, back only when safe, and protect shared spaces such as cross aisles, dock zones, and doorways.",
      },
    ],
    quiz: [
      { q: "What should a pedestrian do before moving near a forklift?", options: ["Assume the operator sees them", "Make eye contact and maintain separation", "Walk faster behind it", "Stand between the truck and a rack"], answer: 1 },
      { q: "Which situation increases forklift risk?", options: ["Stable loads and clear aisles", "Marked walkways", "Blind corners and uneven loads", "Using horns at intersections"], answer: 2 },
    ],
  },
  {
    path: "/fire-extinguishers",
    label: "Fire Extinguisher Basics",
    short: "Portable Extinguishers, Alarm, and First Response",
    icon: "🧯",
    color: "#FF6B00",
    regulation: "Campus emergency response — alarm first, extinguisher only for incipient fires",
    audience: "All campus personnel and designated emergency responders",
    minutes: 14,
    slides: [
      {
        heading: "The Alarm Comes Before the Extinguisher",
        sub: "Report the emergency before trying to fight it.",
        body: "Portable extinguishers are for very early-stage fires only. If a fire is growing, producing heavy smoke, involving gas, chemicals, or electrical gear beyond a small controllable source, the correct response is alarm, evacuation, and accountability. The campus needs people out and counted more than it needs a risky attempt to save equipment.",
      },
      {
        heading: "Use the Right Extinguisher for the Right Fire",
        sub: "Wrong agent choice can spread the hazard.",
        body: "Different extinguishers are assigned to different hazards. A fire involving energized equipment, flammable liquids, ordinary combustibles, or kitchen grease does not behave the same way. Read the extinguisher label before use, keep the exit at your back, and only attempt control when you have a safe retreat path.",
        list: [
          "Keep your back to a clear exit path.",
          "Check the gauge and obvious physical condition before use.",
          "If the first attempt fails, leave immediately and close the area down.",
        ],
      },
      {
        heading: "Know When to Stop",
        sub: "Smoke, heat, or uncertainty are signs to leave.",
        body: "If the room is filling with smoke, the fire is climbing a wall, fuel is still feeding the fire, or you are not fully confident in the extinguisher type, stop and evacuate. A portable extinguisher does not replace the site emergency plan.",
        callout: { label: "P.A.S.S.", text: "Pull. Aim. Squeeze. Sweep — but only after the alarm is activated and escape remains open." }
      },
    ],
    quiz: [
      { q: "What should happen before using a portable extinguisher?", options: ["Move the fire to a safer area", "Activate the alarm or report the emergency", "Wait until the fire gets bigger", "Open nearby gas valves"], answer: 1 },
      { q: "When should you stop and evacuate?", options: ["When the fire is growing or smoke is increasing", "Only after the extinguisher is empty", "Never if equipment is valuable", "Only if a supervisor tells you"], answer: 0 },
    ],
  },
  {
    path: "/molten-metal",
    label: "Molten Metal Awareness",
    short: "Foundry Heat, Splash, and Contact Hazards",
    icon: "🔥",
    color: "#FF5A1F",
    regulation: "Foundry hot metal awareness — treat all melt zones as severe hazard areas",
    audience: "Foundry operators, maintenance, contractors, escorts, and authorized visitors near hot metal areas",
    minutes: 20,
    slides: [
      {
        heading: "Molten Metal Has No Safe Casual Distance",
        sub: "Radiant heat, splash, and contact hazards extend beyond the immediate pour point.",
        body: "The Dingfelder Foundry is anchored as BLDG-010 and runs a north-to-south process flow with melt and holding operations feeding downstream molding and finishing systems. Anywhere molten metal is present, the risk includes heat stress, radiant load, splash, steam explosion, ignition of combustibles, and severe burns from contact with hot tools, slag, or spills.",
        callout: { label: "KNOWLEDGE BASE ALIGNMENT", text: "BLDG-010 is the primary foundry building and all hot-metal awareness content should be treated as foundry-critical." }
      },
      {
        heading: "Water and Moisture Are Major Threat Multipliers",
        sub: "Moisture contacting molten metal can create explosive steam expansion.",
        body: "Wet scrap, damp tools, trapped water in pits or vessels, and moisture on refractory or floors can turn a small event into a violent burst. Never introduce unknown materials into hot metal operations and never assume a recently washed or weather-exposed item is dry enough for contact.",
        list: [
          "Keep melt areas clean, dry, and controlled.",
          "Verify ladles, tools, and charge materials are suitable for hot service.",
          "Respect all restricted lines, barricades, and escort limits.",
        ],
      },
      {
        heading: "The Whole Team Protects the Pour",
        sub: "Hot metal movement depends on disciplined spacing and communication.",
        body: "When ladles, transfer vessels, or furnace operations are active, everyone in the zone must understand travel paths, no-go areas, PPE expectations, and who has control of the move. Visitors and non-essential personnel should remain fully clear unless specifically authorized and escorted.",
      },
    ],
    quiz: [
      { q: "Why is moisture dangerous around molten metal?", options: ["It cools the area too fast", "It can create explosive steam expansion", "It makes floors easier to clean", "It reduces splash risk"], answer: 1 },
      { q: "Who should be in the area during active hot-metal movement?", options: ["Anyone who wants a closer look", "Only authorized and controlled personnel", "Only the newest worker", "Visitors without escorts"], answer: 1 },
    ],
  },
  {
    path: "/furnace-melt-deck",
    label: "Furnace & Melt Deck Safety",
    short: "Charging, Tapping, Hot Surfaces, and Restricted Zones",
    icon: "🏭",
    color: "#FF7A00",
    regulation: "Foundry furnace operations — charging and melt deck controls",
    audience: "Melt operators, furnace support, maintenance, contractors, and approved supervisors",
    minutes: 20,
    slides: [
      {
        heading: "The Melt Deck Is a Controlled Access Zone",
        sub: "Heat, electricity, moving charge materials, and molten metal exist together here.",
        body: "The melt deck combines multiple severe hazards in one operating band: furnace electrical systems, charging operations, hot refractory surfaces, tapping, slag handling, and movement of materials. Only trained personnel should enter, and access should stay controlled during charging, tapping, or abnormal conditions.",
      },
      {
        heading: "Charging Requires Material Discipline",
        sub: "Unknown, sealed, wet, or contaminated charge is a major incident source.",
        body: "Before materials enter the furnace process, operators should confirm they are expected, acceptable, and conditionally safe. Closed containers, wet scrap, incompatible materials, and mixed debris can create violent reactions, contamination, or process upsets.",
        list: [
          "Verify incoming charge condition before introduction.",
          "Keep walkways and escape paths clear during furnace work.",
          "Do not bypass restricted lines or barriers for a better view.",
        ],
      },
      {
        heading: "Hot Surfaces Stay Dangerous Long After Visible Activity Ends",
        sub: "A quiet deck does not mean a cold deck.",
        body: "Platforms, tools, refractory, sidewalls, ladle hardware, and nearby structural steel can retain heat well after a visible pour or tap is complete. Treat all furnace-area surfaces as potentially hot until confirmed otherwise and keep combustible items out of melt-deck zones.",
        callout: { label: "RULE", text: "No one enters the melt deck for convenience. Entry is task-based, controlled, and deliberate." }
      },
    ],
    quiz: [
      { q: "What makes the melt deck a controlled access zone?", options: ["Only noise", "Multiple severe hazards operating together", "It is near the parking lot", "It is cooler than the rest of the foundry"], answer: 1 },
      { q: "How should a quiet furnace area be treated after activity ends?", options: ["As cold and safe", "As potentially still hot and hazardous", "As open to visitors", "As a shortcut"], answer: 1 },
    ],
  },
  {
    path: "/silica-sand",
    label: "Sand System / Dust / Silica Awareness",
    short: "Molding Sand Handling and Airborne Dust Control",
    icon: "🌫️",
    color: "#C7A100",
    regulation: "Foundry sand and dust control — dry material handling awareness",
    audience: "Molding line workers, sand system operators, maintenance, contractors, and cleaning crews",
    minutes: 18,
    slides: [
      {
        heading: "The Sand System Is More Than a Conveyor Problem",
        sub: "Dust generation can affect breathing zones, visibility, cleanliness, and equipment reliability.",
        body: "The Dingfelder foundry process includes a dedicated molding and sand band with future sand tower integration above that band. Sand movement, transfer points, shakeout, reclaim, and cleaning tasks can all release dust. Even when a system is enclosed, leaks, housekeeping failures, or maintenance work can expose workers to airborne material.",
        callout: { label: "KNOWLEDGE BASE ALIGNMENT", text: "The master specification identifies the molding and sand system as a core process band and the future sand tower as part of that architecture." }
      },
      {
        heading: "Dry Cleanup Can Make Exposure Worse",
        sub: "The wrong cleanup method turns settled material back into airborne dust.",
        body: "Blowing dust with compressed air or sweeping aggressively can push dust back into breathing zones and across equipment. Follow site cleanup methods designed for dust control, and keep lids, guards, and collection points closed or restored after work.",
        list: [
          "Use approved cleanup methods, not improvised blowdown.",
          "Keep collection points and covers in service after maintenance.",
          "Report leaks or visible dust releases instead of working around them.",
        ],
      },
      {
        heading: "Dust Control Protects People and Process",
        sub: "A clean, controlled sand system supports safer breathing and better operations.",
        body: "Good dust control reduces nuisance accumulation, helps keep walkways visible, limits contamination of adjacent areas, and supports a safer environment for molding and maintenance tasks. Workers should treat repeated visible dust release as a system problem that needs correction, not as a normal condition to ignore.",
      },
    ],
    quiz: [
      { q: "Why is dry blowdown with compressed air a problem in dusty areas?", options: ["It always cools equipment too much", "It can drive settled dust back into the air", "It labels containers incorrectly", "It improves visibility"], answer: 1 },
      { q: "What should workers do about visible repeated dust release?", options: ["Treat it as normal", "Report and correct the system issue", "Ignore it if production continues", "Push it into walkways"], answer: 1 },
    ],
  },
  {
    path: "/crane-ladle",
    label: "Crane, Ladle & Suspended Load Safety",
    short: "No-Go Zones, Lift Paths, and Communication Control",
    icon: "🏗️",
    color: "#FF8C00",
    regulation: "Foundry lifting operations — suspended load and ladle movement control",
    audience: "Foundry operators, crane support, maintenance, contractors, and affected personnel in lift zones",
    minutes: 18,
    slides: [
      {
        heading: "The Load Owns the Space Beneath It",
        sub: "Nobody stands or walks under a suspended load. Ever.",
        body: "Cranes and ladle systems move heavy, often high-consequence loads through operating space. A failure does not need to be complete to be catastrophic; a swing, sudden stop, spilled material, or hook snag can injure people well outside the obvious path. The first rule is simple: stay fully clear of the travel path and the drop zone.",
      },
      {
        heading: "Lift Paths Must Be Protected",
        sub: "Clear communication and separation prevent people from drifting into danger.",
        body: "Lift paths should stay clear before motion begins. Spotters, operators, and affected crews need a common understanding of start point, destination, hold points, and no-go zones. Shortcuts through crane aisles and ladle travel lanes are unacceptable even when the crane appears stationary.",
        list: [
          "Respect floor markings, barriers, and verbal stop calls.",
          "Never stand between a suspended load and a fixed object.",
          "Do not approach for a closer look while a lift is underway.",
        ],
      },
      {
        heading: "Ladles Add Heat to the Suspended Load Hazard",
        sub: "When the suspended load contains hot material, consequences rise sharply.",
        body: "A ladle is not just heavy — it may also contain high-temperature material. That means the hazard includes both impact and thermal consequences. Treat ladle routes as special-risk corridors and maintain full clearance unless you are directly involved in the move.",
        callout: { label: "RULE", text: "No one outruns a bad lift. Your protection is separation and discipline, not reaction time." }
      },
    ],
    quiz: [
      { q: "What is the rule for standing under a suspended load?", options: ["Allowed if the operator sees you", "Allowed for a quick shortcut", "Never permitted", "Allowed if the load is small"], answer: 2 },
      { q: "Why are ladle lifts more severe than ordinary lifts?", options: ["They are quieter", "They combine load hazard with heat or molten contents", "They move slower", "They use painted hooks"], answer: 1 },
    ],
  },
  {
    path: "/propane-farm",
    label: "Propane Farm Operations Safety",
    short: "Storage, Ignition Control, and Emergency Distance",
    icon: "🛢️",
    color: "#B5FF00",
    regulation: "Campus fuel gas safety — propane storage and release awareness",
    audience: "Propane farm operators, maintenance, contractors, security, emergency response, and nearby support staff",
    minutes: 18,
    slides: [
      {
        heading: "The Campus Has a Major Propane Storage Hazard",
        sub: "Treat the propane farm as a controlled ignition-sensitive area.",
        body: "The Dingfelder campus includes a large propane storage farm supporting facility fuel systems. Propane is heavier than air, can travel to ignition sources, and can accumulate in low areas if released. Workers entering or working near the propane farm must control ignition sources, respect access limits, and understand emergency isolation and evacuation expectations.",
      },
      {
        heading: "Normal Operations Must Stay Predictable",
        sub: "Fuel transfer, inspection, and maintenance require disciplined control of the area.",
        body: "During transfer or service work, vehicle movement, hot work, smoking, and unplanned electrical activity can create unacceptable ignition risk. Keep the area controlled, communicate active work, and stop immediately if odor, frost, noise, or instrument readings suggest abnormal release.",
        list: [
          "Control vehicle access and ignition sources.",
          "Do not use improvised leak checks or unauthorized repair methods.",
          "Know where to move if release or fire conditions develop.",
        ],
      },
      {
        heading: "Distance Is a Life-Saving Tool",
        sub: "Do not crowd the scene of a gas release or fire.",
        body: "For propane incidents, unneeded personnel should move away promptly and remain clear for responders and operators. Release conditions can change quickly, especially if vapor finds an ignition source or if pressure relief and fire conditions interact. Curiosity kills time and reduces safe options.",
        callout: { label: "RULE", text: "If you are not assigned to the response, increase distance, report what you know, and stay accountable." }
      },
    ],
    quiz: [
      { q: "Why is propane especially hazardous after a release?", options: ["It is lighter than air and disappears instantly", "It can travel and collect in low areas before ignition", "It is harmless outdoors", "It only burns inside tanks"], answer: 1 },
      { q: "What should unassigned personnel do during a propane incident?", options: ["Move closer for information", "Remain clear and accountable", "Test the leak with a flame", "Drive through the area quickly"], answer: 1 },
    ],
  },
  {
    path: "/food-chemical",
    label: "Food Plant Chemical Safety & Sanitation",
    short: "Cleaners, Sanitizers, Utility Separation, and Safe Use",
    icon: "🥗",
    color: "#00D77A",
    regulation: "Food plant chemical and sanitation awareness — cleaners, sanitizers, and utility controls",
    audience: "Salad dressing production, Juice From The Vine, sanitation teams, maintenance, and quality support",
    minutes: 18,
    slides: [
      {
        heading: "Food Plants Still Have Industrial Chemical Hazards",
        sub: "Clean production does not mean low hazard.",
        body: "The campus includes food and beverage operations with sanitation chemicals, cleaning systems, flavor or ingredient handling, and utilities that can still injure workers if misused. Chemical burns, eye injury, vapors, misconnection, and contamination risk often appear during cleanup, changeover, and line restoration.",
      },
      {
        heading: "Sanitation Work Requires Separation and Verification",
        sub: "Keep product systems, utility systems, and chemical systems clearly distinct.",
        body: "Before applying any cleaner or sanitizer, confirm the circuit, the concentration, the target equipment, and the post-clean status. A misrouted hose, unlabeled tote, or incorrect reconnection can create both a worker safety issue and a product integrity failure.",
        list: [
          "Verify line identity before introducing any chemical.",
          "Wear the listed PPE for splash and handling hazards.",
          "Return the system to a known safe operating state after sanitation.",
        ],
      },
      {
        heading: "Cleaning Time Is Still Hazard Time",
        sub: "Production being down does not reduce the need for control.",
        body: "Slippery floors, open drains, wet hoses, and chemical application all create exposure during sanitation periods. Protect the area, use the right equipment, and communicate clearly so no one enters or restarts a system unexpectedly.",
        callout: { label: "REMEMBER", text: "Food-safe does not mean skin-safe, eye-safe, or inhalation-safe." }
      },
    ],
    quiz: [
      { q: "Which statement is correct about food plant chemicals?", options: ["They are harmless because the plant makes food", "They still require labeling, PPE, and controlled use", "They can be stored in any unmarked bottle", "They do not need line verification"], answer: 1 },
      { q: "What is a key step before introducing a cleaner or sanitizer?", options: ["Guess based on hose color", "Verify the line and target system", "Skip PPE during cleanup", "Start the pumps first"], answer: 1 },
    ],
  },
  {
    path: "/ammonia",
    label: "Ammonia Refrigeration Awareness",
    short: "Cold Systems, Leak Recognition, and Immediate Response",
    icon: "❄️",
    color: "#52E5FF",
    regulation: "Refrigeration awareness — controlled response to ammonia system abnormal conditions",
    audience: "Food plant workers, refrigeration support, maintenance, contractors, and nearby occupants",
    minutes: 16,
    slides: [
      {
        heading: "Refrigeration Systems Can Become Emergency Systems",
        sub: "A utility room leak can become a site emergency quickly.",
        body: "Ammonia refrigeration supports temperature-controlled operations but introduces a chemical release hazard when equipment, piping, seals, or maintenance conditions fail. The danger is not limited to technicians. Nearby occupants need to recognize abnormal odor, irritation, alarms, and area restrictions immediately.",
      },
      {
        heading: "Do Not Investigate a Suspected Leak Alone",
        sub: "Recognition and reporting come before troubleshooting.",
        body: "If you suspect an ammonia release, do not attempt solo entry, improvised leak checks, or informal investigation. Follow the site alarm and evacuation rules, move crosswind or away as directed, and keep unauthorized personnel out of the affected zone until qualified responders take control.",
        list: [
          "Recognize odor, irritation, and alarm conditions early.",
          "Do not re-enter until the area is released by authorized personnel.",
          "Protect ingress paths for responders and utility support staff.",
        ],
      },
      {
        heading: "Utility Rooms Need Respect Even When Quiet",
        sub: "Mechanical spaces demand controlled access and clear housekeeping.",
        body: "Refrigeration spaces contain piping, valves, pressure equipment, and monitoring devices that should not be bypassed, blocked, or casually entered. Keep access clear, report abnormal frost, noise, odor, or instrument behavior, and treat any active release as a real emergency.",
      },
    ],
    quiz: [
      { q: "What should you do first if you suspect an ammonia leak?", options: ["Investigate by yourself", "Report it and follow site response procedures", "Ignore it if production is busy", "Open the system for a better look"], answer: 1 },
      { q: "When can workers re-enter an affected area?", options: ["As soon as the odor seems lower", "Only after authorized release of the area", "After ten minutes", "When a coworker says it looks fine"], answer: 1 },
    ],
  },
  {
    path: "/retail-backroom",
    label: "Retail Backroom / Baler / Compactor Safety",
    short: "Backroom Traffic, Waste Equipment, and Lockout Awareness",
    icon: "📦",
    color: "#A36BFF",
    regulation: "Retail support safety — controlled access to balers, compactors, and receiving areas",
    audience: "Walmart support, receiving teams, stock associates, contractors, and supervisors",
    minutes: 15,
    slides: [
      {
        heading: "Retail Backrooms Are Industrial Spaces in Disguise",
        sub: "Receiving, waste handling, and storage areas combine traffic and equipment risk.",
        body: "The public sales floor may feel familiar, but the backroom runs like a compressed industrial warehouse. Pallets, carts, compactors, balers, powered equipment, and tight aisles create crush, struck-by, and caught-in hazards that require structure and discipline.",
      },
      {
        heading: "Balers and Compactors Need Controlled Use",
        sub: "These machines are not casual trash cans.",
        body: "A baler or compactor can trap, crush, or unexpectedly move if used improperly. Only authorized personnel should operate them, access panels and jam-clearing tasks require the correct shutdown procedure, and no one should ever climb into or reach into equipment that is not fully controlled.",
        list: [
          "Do not bypass guards or interlocks.",
          "Jam clearing is not a quick reach-in task.",
          "Keep pedestrians out of the operating envelope.",
        ],
      },
      {
        heading: "Backroom Housekeeping Prevents Secondary Injuries",
        sub: "Trips, unstable stacks, and blocked exits turn routine work into incidents.",
        body: "Flattened boxes, shrink wrap, carts, and pallets build hazards quickly when the area gets busy. Keep aisles open, stage loads neatly, and do not let waste handling equipment become a congestion point.",
        callout: { label: "RULE", text: "If equipment jams or guards are open, stop use and escalate the issue instead of improvising a fix." }
      },
    ],
    quiz: [
      { q: "Who should operate a baler or compactor?", options: ["Anyone in a hurry", "Only authorized personnel", "Customers if supervised", "Anyone wearing gloves"], answer: 1 },
      { q: "What should happen if a baler jams?", options: ["Reach in quickly to clear it", "Stop use and follow the correct controlled procedure", "Kick the load into place", "Leave it running"], answer: 1 },
    ],
  },
];

export function createModuleComponent(modulePath) {
  const module = PHASE1_MODULES.find((item) => item.path === modulePath);
  return function Phase1ModuleWrapper() {
    return <TrainingModuleShell module={module} />;
  };
}

export const HazardCommunicationTraining = createModuleComponent("/hazcom");
export const PPEFundamentalsTraining = createModuleComponent("/ppe");
export const ForkliftSafetyTraining = createModuleComponent("/forklift");
export const FireExtinguisherTraining = createModuleComponent("/fire-extinguishers");
export const MoltenMetalTraining = createModuleComponent("/molten-metal");
export const FurnaceMeltDeckTraining = createModuleComponent("/furnace-melt-deck");
export const SilicaSandTraining = createModuleComponent("/silica-sand");
export const CraneLadleTraining = createModuleComponent("/crane-ladle");
export const PropaneFarmTraining = createModuleComponent("/propane-farm");
export const FoodChemicalTraining = createModuleComponent("/food-chemical");
export const AmmoniaTraining = createModuleComponent("/ammonia");
export const RetailBackroomTraining = createModuleComponent("/retail-backroom");
