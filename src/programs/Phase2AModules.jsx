
import TrainingModuleShell from "./TrainingModuleShell.jsx";

export const PHASE2A_MODULES = [
  {
    path: "/walking-working-surfaces",
    label: "Walking-Working Surfaces / Slip Trip Fall",
    short: "Floors, Platforms, Stairs, Housekeeping, and Drain Areas",
    icon: "👣",
    color: "#FFD100",
    regulation: "OSHA 29 CFR 1910 Subpart D",
    audience: "All campus employees, visitors, contractors, food plant teams, and warehouse personnel",
    minutes: 16,
    slides: [
      {
        heading: "A Safe Floor Is a Controlled Surface",
        sub: "Most falls start with a condition that was visible before the injury.",
        body: "Across the Dingfelder campus, walking-working hazards include wet process floors, foundry sand migration, uneven transitions, hoses, cords, pallets, ladder traffic, and ice or weather at exterior routes. Treat every route as an engineered path: keep it clean, lit, and clear before the work begins.",
        list: [
          "Keep aisles, stairs, and landings free of stored material.",
          "Route hoses and cords away from foot traffic whenever possible.",
          "Report broken grating, damaged stair treads, or floor defects immediately.",
        ],
        callout: { label: "SITE RULE", text: "Do not step over hoses, chains, or barricades when a safe route exists around them." }
      },
      {
        heading: "Wet Areas Need Immediate Control",
        sub: "Drain zones and washdown areas change quickly.",
        body: "Food plants, utility rooms, sanitation areas, and loading zones create constantly changing floor conditions. Mop-up after the event is too late. Control starts with drainage, hose placement, absorbents, and warning devices set before the task. Shoes help, but they do not replace housekeeping.",
        list: [
          "Use signs or barriers while the condition exists, not after.",
          "Clean spills from the outside edge inward to avoid spreading residue.",
          "Check soles for buildup before climbing stairs or platforms.",
        ],
      },
      {
        heading: "Falls From Height Start With Access Decisions",
        sub: "Improper ladder or platform use turns routine work into rescue work.",
        body: "Never improvise elevation with boxes, pallets, buckets, or forklift forks. Use approved ladders, platforms, and guard-protected work areas. Maintain three points of contact on ladders and face the ladder while ascending or descending. If the work requires two hands for force or reach, reassess the access method.",
        callout: { label: "REMEMBER", text: "If you need to lean, twist, or overreach, reposition the ladder or use a better access platform." }
      },
    ],
    quiz: [
      { q: "What is the best response to a hose stretched across a walkway?", options: ["Step over it carefully", "Move or reroute it, or block the area until controlled", "Ignore it if the floor is dry", "Cover it with cardboard"], answer: 1 },
      { q: "When should a wet floor warning be placed?", options: ["After cleanup is complete", "Only if a manager asks", "While the condition exists", "At the end of the shift"], answer: 2 },
      { q: "What should you use for overhead reach work?", options: ["A pallet on a forklift", "A stable approved ladder or platform", "An upside-down tote", "A coworker's shoulder"], answer: 1 },
    ],
  },
  {
    path: "/incident-reporting",
    label: "Incident Reporting / Near Miss Response",
    short: "Immediate Reporting, Scene Control, and Learning from Events",
    icon: "📝",
    color: "#FF6B00",
    regulation: "Internal Reporting Protocol — Immediate notification of injuries, releases, equipment strikes, and near misses",
    audience: "All campus roles, supervisors, leads, contractors, and visitors under escort",
    minutes: 14,
    slides: [
      {
        heading: "Near Misses Count as Safety Events",
        sub: "If it almost hurt someone, it matters now.",
        body: "A dropped part that misses a worker, a forklift that stops short, a chemical splash contained before contact, or a gas alarm with no injury are all reportable learning events. Reporting early lets the campus correct the hazard before the same chain of events repeats with worse timing.",
        list: [
          "Report injuries, property damage, unsafe conditions, and near misses.",
          "Preserve the facts: what happened, where, when, and what was involved.",
          "Do not hide events because no one was hurt this time.",
        ],
      },
      {
        heading: "Control the Scene First",
        sub: "Protect people before collecting details.",
        body: "When an event occurs, the first job is scene stability. Stop exposed work, isolate the area, prevent others from entering, and summon the correct response. Do not restart equipment, clean up evidence, or move damaged items unless needed to protect people from immediate danger.",
        callout: { label: "FIRST PRIORITY", text: "Medical aid, hazard isolation, and accountability come before paperwork." }
      },
      {
        heading: "Good Reports Improve the Whole Campus",
        sub: "The goal is correction, not blame.",
        body: "Strong reports identify the hazard, the task underway, the controls that were missing or failed, and the immediate steps taken. This supports better training, better housekeeping, better guarding, and stronger job planning across foundry, food, retail, utilities, and field operations.",
        list: [
          "Use plain facts, not assumptions or opinions.",
          "Include photos only if the area is safe to enter.",
          "Recommend immediate corrective actions when obvious.",
        ],
      },
    ],
    quiz: [
      { q: "Which event should be reported?", options: ["Only recordable injuries", "Only incidents with equipment damage", "Injuries, near misses, and unsafe conditions", "Only events witnessed by a supervisor"], answer: 2 },
      { q: "What comes before documentation?", options: ["Re-starting production", "Protecting people and controlling the scene", "Cleaning up evidence", "Posting on social media"], answer: 1 },
      { q: "What makes a report useful?", options: ["Blaming one employee", "Using assumptions instead of facts", "Clear facts about task, hazard, and actions taken", "Leaving out details to save time"], answer: 2 },
    ],
  },
  {
    path: "/contractor-safety",
    label: "Contractor Safety Rules",
    short: "Site Entry, Work Control, Escorts, and Multi-Employer Hazard Control",
    icon: "🦺",
    color: "#22CC66",
    regulation: "Campus Contractor Control — Orientation, permits, escorts, and host-employer hazard communication",
    audience: "Contractors, project teams, maintenance vendors, and supervising Dingfelder personnel",
    minutes: 18,
    slides: [
      {
        heading: "Contractors Inherit the Site Hazards",
        sub: "Different employer, same exposure.",
        body: "Any contractor entering the Dingfelder campus can be exposed to moving equipment, cranes, electrical hazards, gas systems, foundry heat, confined spaces, sanitation chemicals, and active vehicle traffic. Before work begins, the host and contractor must agree on the hazard picture, work boundaries, emergency expectations, and who controls energy isolation or permits.",
        list: [
          "Check in before work and confirm where you are authorized to go.",
          "Review the area hazards and active operations before unloading tools.",
          "Know the muster point and emergency contact method for the job area.",
        ],
      },
      {
        heading: "No Assumed Authorization",
        sub: "Access is task-specific, not campus-wide.",
        body: "A contractor approved to work in one building is not automatically cleared for another. Escort rules, badges, hot work permits, electrical boundaries, and line-opening approvals depend on the area and the job. If the work scope changes, stop and have the scope re-evaluated.",
        callout: { label: "STOP RULE", text: "If the field condition differs from the pre-job plan, stop and re-brief before continuing." }
      },
      {
        heading: "Shared Areas Need Clear Ownership",
        sub: "Someone must control barricades, energy state, and communications.",
        body: "During contractor work, define who owns the permit, who owns the lockout, who controls the area, and who releases it back to operations. Ambiguity causes injuries. Good contractor control prevents simultaneous operations conflicts like forklifts passing through lift zones or process teams energizing equipment during service work.",
      },
    ],
    quiz: [
      { q: "What should a contractor do if the job scope changes after arrival?", options: ["Continue if tools are already out", "Stop and re-brief the changed scope", "Ask another contractor", "Ignore the difference if minor"], answer: 1 },
      { q: "Does access to one area grant automatic access campus-wide?", options: ["Yes", "Only after lunch", "No, access is task- and area-specific", "Only for maintenance vendors"], answer: 2 },
      { q: "Which item must be clearly assigned during contractor work?", options: ["Who brought coffee", "Who owns control of permits, energy state, and area release", "Which truck parks closest", "Who talks the most"], answer: 1 },
    ],
  },
  {
    path: "/severe-weather",
    label: "Severe Weather / Shelter / Accountability",
    short: "Storm Response, Shelter Areas, and Personnel Accountability",
    icon: "🌩️",
    color: "#00BFFF",
    regulation: "Campus Emergency Response — Severe weather shelter and accountability procedures",
    audience: "All campus personnel, visitors, contractors, and field operations personnel",
    minutes: 15,
    slides: [
      {
        heading: "Weather Changes Faster Than Production Plans",
        sub: "Storm response must be automatic before conditions deteriorate.",
        body: "Lightning, high wind, tornado warnings, heavy rain, and visibility loss affect every Dingfelder operation differently. Outdoor personnel, propane and gas systems, truck traffic, elevated work, and power-dependent systems all require quick protective action. Waiting for visible danger is too late.",
        list: [
          "Monitor alerts and follow supervisor or site emergency instructions immediately.",
          "Secure loose material and stop elevated or exposed outdoor work early.",
          "Move to designated shelter areas when instructed, then account for your team.",
        ],
      },
      {
        heading: "Shelter Is Not Just Any Indoor Space",
        sub: "Know where your nearest designated refuge is before the alarm.",
        body: "Wind events require protected interior shelter. Do not shelter near glass, large doors, unprotected bays, or exterior walls if a safer interior location is designated. Field personnel at wells, yard areas, and loading zones must know where to relocate before the storm reaches the site.",
        callout: { label: "ACCOUNTABILITY", text: "Once sheltered, supervisors must verify who is present, missing, or still in transit." }
      },
      {
        heading: "Restart Only After Release",
        sub: "The hazard can persist after the rain stops.",
        body: "After severe weather, treat damaged roofs, downed lines, flooded walkways, impaired alarms, and wind-shifted material as new hazards. Re-entry and restart must follow an organized release, especially for electrical systems, gas systems, and crane-served areas.",
      },
    ],
    quiz: [
      { q: "When should outdoor or elevated work be stopped for severe weather?", options: ["After the storm is overhead", "Only after equipment gets wet", "Early, when directed or when conditions are deteriorating", "At the end of the shift"], answer: 2 },
      { q: "What should happen after personnel reach shelter?", options: ["Resume emails", "Immediate accountability of the team", "Open exterior doors for visibility", "Leave if rain slows"], answer: 1 },
      { q: "After a storm, when should systems restart?", options: ["Immediately if power is on", "Only after hazards are checked and the area is released", "As soon as operations asks", "Once the parking lot clears"], answer: 1 },
    ],
  },
  {
    path: "/confined-space",
    label: "Confined Space Entry",
    short: "Permit Control, Atmospheric Hazards, and Rescue Readiness",
    icon: "🛢️",
    color: "#FF3300",
    regulation: "OSHA 29 CFR 1910.146",
    audience: "Maintenance technicians, sanitation crews, utility teams, and authorized entrants or attendants",
    minutes: 22,
    slides: [
      {
        heading: "A Confined Space Is a Special Condition, Not a Small Room",
        sub: "Size alone does not define the risk.",
        body: "Tanks, pits, vaults, vessels, mixers, utility sumps, and some process equipment can become confined spaces when entry is limited and hazards can accumulate. Some are permit-required because of atmospheric, engulfment, mechanical, or configuration hazards. Never enter based on familiarity alone.",
        list: [
          "Confirm whether the space is permit-required before anyone opens or enters it.",
          "Identify energy sources, line contents, residual material, and atmospheric concerns.",
          "Assign entrant, attendant, and entry supervisor roles before the permit is opened.",
        ],
      },
      {
        heading: "Testing and Ventilation Are Not Formalities",
        sub: "The atmosphere decides whether entry is possible.",
        body: "Oxygen content, toxic gases, flammable vapors, and process residues must be checked before entry and controlled during the work. If the atmosphere drifts, the entry stops. Ventilation, isolation, blanking, purge confirmation, and communication are part of the safe entry plan, not optional extras.",
        callout: { label: "NEVER", text: "Never enter to rescue a coworker unless you are part of the trained rescue system for that space." }
      },
      {
        heading: "Permit Entry Requires Continuous Discipline",
        sub: "The hazard picture can change while the work is underway.",
        body: "Welding, cleaning chemicals, line opening, sludge movement, or adjacent process changes can turn a stable space into a deadly one. The attendant must stay engaged, the permit must remain current, and entrants must exit immediately if alarms, symptoms, or unexpected conditions develop.",
      },
    ],
    quiz: [
      { q: "What should be confirmed before entering a confined space?", options: ["Only that the opening is large enough", "Whether the space is permit-required and what hazards exist", "Only whether a ladder is present", "Whether the job is behind schedule"], answer: 1 },
      { q: "What should happen if atmospheric conditions change during entry?", options: ["Ignore it if the work is almost done", "Continue with a dust mask", "Stop entry and exit the space", "Close the permit later"], answer: 2 },
      { q: "Who may enter for rescue?", options: ["Any nearby worker", "Only trained rescue personnel under the entry plan", "The attendant", "The supervisor alone"], answer: 1 },
    ],
  },
  {
    path: "/respiratory-protection",
    label: "Respiratory Protection",
    short: "Airborne Hazards, Respirator Limits, and Fit-for-Use Discipline",
    icon: "😷",
    color: "#22CC66",
    regulation: "OSHA 29 CFR 1910.134",
    audience: "Employees exposed to dust, vapors, fumes, mists, gases, or oxygen-deficient conditions",
    minutes: 18,
    slides: [
      {
        heading: "A Respirator Is Not Permission to Enter Any Hazard",
        sub: "Selection must match the contaminant and the environment.",
        body: "Dusts from sand systems, fumes from hot work, sanitation vapors, and gas hazards all require different respiratory controls. Some conditions require ventilation or isolation first. Others require a specific respirator type, medical clearance, fit testing, and cartridge selection. A face covering or wrong cartridge does not make the air safe.",
        list: [
          "Know whether the hazard is particulate, vapor, gas, or oxygen deficiency.",
          "Use only the respirator issued and approved for that exposure.",
          "Inspect seals, straps, valves, and cartridges before use.",
        ],
      },
      {
        heading: "Fit and Seal Matter Every Time",
        sub: "Protection is lost if the respirator does not seat correctly.",
        body: "Facial hair in the seal area, damaged straps, wrong size selection, or poor donning technique can turn approved equipment into ineffective equipment. Perform the required seal checks every time and leave the area if the respirator is damaged or breathing resistance changes unexpectedly.",
        callout: { label: "CRITICAL", text: "SCBA, supplied air, and air-purifying respirators are not interchangeable. Use the one required by the hazard assessment." }
      },
      {
        heading: "Storage and Change-Out Are Part of Protection",
        sub: "A dirty or expired unit cannot protect you.",
        body: "Respirators must be cleaned, stored, and maintained so they stay ready for the next use. Cartridges and filters have service limits. If you smell, taste, or feel irritation while wearing a respirator, exit the area and reassess the control plan immediately.",
      },
    ],
    quiz: [
      { q: "What determines the correct respirator?", options: ["What is easiest to wear", "What matches the identified contaminant and environment", "What a coworker prefers", "What is left in the cabinet"], answer: 1 },
      { q: "What can break the seal of a tight-fitting respirator?", options: ["Proper strap tension", "Facial hair in the seal area", "A clean facepiece", "A fit test"], answer: 1 },
      { q: "What should you do if you smell or taste contaminants while wearing a respirator?", options: ["Work faster", "Ignore it if symptoms are mild", "Exit the area and reassess", "Tighten your hard hat"], answer: 2 },
    ],
  },
  {
    path: "/hearing-conservation",
    label: "Hearing Conservation / Noise Exposure",
    short: "Noise Awareness, Hearing Protection, and Exposure Control",
    icon: "🎧",
    color: "#00BFFF",
    regulation: "OSHA 29 CFR 1910.95",
    audience: "Foundry, beam mill, utilities, maintenance, production, and high-noise support areas",
    minutes: 14,
    slides: [
      {
        heading: "Noise Damage Builds Quietly",
        sub: "Hearing loss often happens before workers notice it.",
        body: "Foundry shakeout, grinding, beam handling, compressors, forklifts, and alarm-rich areas can produce harmful sound levels. Hearing damage is cumulative and can be permanent. If you must shout to be understood at close distance, the area likely demands stronger noise control awareness.",
        list: [
          "Wear the assigned hearing protection in posted areas.",
          "Insert or fit hearing devices correctly every time.",
          "Report damaged earmuffs, missing plugs, or unusual equipment noise.",
        ],
      },
      {
        heading: "The Protector Only Works If Worn Correctly",
        sub: "A loose plug is almost the same as no plug.",
        body: "Earplugs must be inserted properly and earmuffs must seal around the ear. Hard-hat straps, glasses, or hood interfaces can compromise earmuff sealing. Use the required style for the task and replace dirty, damaged, or worn devices immediately.",
      },
      {
        heading: "Control the Noise Source When Possible",
        sub: "PPE is the final barrier, not the only barrier.",
        body: "Loose guards, worn bearings, impact points, and damaged exhaust systems can make equipment louder than normal. Report changes in noise because they may indicate both a hearing hazard and a mechanical problem developing in the system.",
        callout: { label: "REMEMBER", text: "Do not remove hearing protection just to communicate in a noisy area. Move to a safer location first." }
      },
    ],
    quiz: [
      { q: "Why is hearing conservation important?", options: ["Noise damage is temporary and harmless", "Hearing loss can build gradually and become permanent", "Only office areas need hearing protection", "It only matters during audits"], answer: 1 },
      { q: "What reduces earmuff effectiveness?", options: ["A proper seal", "Clean cushions", "Straps or glasses breaking the seal", "Using them in posted areas"], answer: 2 },
      { q: "What should you do if equipment suddenly sounds louder than normal?", options: ["Ignore it", "Report it as both a safety and maintenance concern", "Remove hearing protection", "Stand closer to listen"], answer: 1 },
    ],
  },
  {
    path: "/hot-work",
    label: "Hot Work / Welding / Cutting Permit Safety",
    short: "Ignition Control, Fire Watch, and Area Preparation",
    icon: "🔥",
    color: "#FF6B00",
    regulation: "Hot Work Permit Control — Welding, cutting, grinding, and spark-producing tasks",
    audience: "Maintenance, contractors, fabricators, welders, and supervisors authorizing spark-producing work",
    minutes: 18,
    slides: [
      {
        heading: "Hot Work Means Controlled Ignition",
        sub: "Assume sparks will travel farther than expected.",
        body: "Welding, cutting, torch work, grinding, and some abrasive tasks can ignite combustibles, insulation, vapors, dust, or residue beyond the immediate work point. Before hot work begins, remove combustibles, protect nearby equipment, verify the atmosphere, and define who is responsible for fire watch and shutdown boundaries.",
        list: [
          "Use the permit process where required before work starts.",
          "Inspect both sides of walls, floors, or structures if sparks can pass through.",
          "Stage extinguishing equipment before the first spark is created.",
        ],
      },
      {
        heading: "Area Conditions Decide Whether Work Can Proceed",
        sub: "The same task can be safe in one place and dangerous in another.",
        body: "Foundry maintenance areas, food plants with packaging or sanitation residue, gas and propane systems, and retail backrooms with cardboard loading all react differently to hot work. Barricades, gas testing, line isolation, dust control, and fire-resistant covers may all be required before ignition work is approved.",
        callout: { label: "STOP RULE", text: "If combustibles cannot be controlled or an explosive atmosphere is possible, do not start hot work." }
      },
      {
        heading: "Fire Watch Extends Beyond the Arc Time",
        sub: "Many fires start after the welder thinks the job is over.",
        body: "Smoldering debris, hidden ember travel, and heated metal can ignite after the task ends. Maintain the required watch period, inspect adjacent areas, and confirm the work area is released only after the ignition risk has been fully controlled.",
      },
    ],
    quiz: [
      { q: "What should happen before hot work starts?", options: ["Begin and look for hazards as you go", "Control combustibles, verify conditions, and use the permit process", "Only notify one coworker", "Skip the extinguisher if a hose is nearby"], answer: 1 },
      { q: "Why is fire watch necessary after work ends?", options: ["To count tools", "Fires can start from smoldering material after the task", "Only to close the permit folder", "Because welding helmets need cooling"], answer: 1 },
      { q: "When should hot work be stopped?", options: ["If combustibles cannot be controlled or atmosphere is unsafe", "Only if it rains", "Only if overtime is denied", "After the first spark"], answer: 0 },
    ],
  },
];

function makeModule(module) {
  return function ModulePage() {
    return <TrainingModuleShell module={module} />;
  };
}

export const WalkingWorkingSurfacesTraining = makeModule(PHASE2A_MODULES[0]);
export const IncidentReportingTraining = makeModule(PHASE2A_MODULES[1]);
export const ContractorSafetyTraining = makeModule(PHASE2A_MODULES[2]);
export const SevereWeatherTraining = makeModule(PHASE2A_MODULES[3]);
export const ConfinedSpaceTraining = makeModule(PHASE2A_MODULES[4]);
export const RespiratoryProtectionTraining = makeModule(PHASE2A_MODULES[5]);
export const HearingConservationTraining = makeModule(PHASE2A_MODULES[6]);
export const HotWorkTraining = makeModule(PHASE2A_MODULES[7]);
