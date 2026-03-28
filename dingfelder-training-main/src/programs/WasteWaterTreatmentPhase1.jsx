import TrainingModuleShell from './TrainingModuleShell.jsx'

export const WASTE_WATER_TREATMENT_PHASE1_MODULES = [
  {
    "path": "/wastewater-headworks-influent",
    "label": "Headworks, Screening & Influent Pump Station Safety",
    "short": "Moving Water, Rotating Equipment, and Restricted Entry at the Front End of the Plant",
    "icon": "🚿",
    "color": "#3BC9DB",
    "regulation": "Awareness Only — open channels, screens, pumps, and restricted work zones",
    "audience": "Operators, maintenance, electricians, contractors, and escorted visitors",
    "minutes": 18,
    "slides": [
      {
        "heading": "Headworks Areas Combine Flow, Rotation, and Limited Escape Space",
        "sub": "The front end of a treatment plant is active machinery, not a casual walkway.",
        "body": "Headworks and influent pump stations concentrate incoming wastewater, screening equipment, conveyors, grit handling, pumps, piping, and wet surfaces in one area. Even routine rounds require route awareness, housekeeping discipline, and respect for barriers and operator-only work zones.",
        "list": [
          "Stay off screen decks, channels, and equipment structures unless the task and access are authorized.",
          "Assume grates, channels, and wet concrete can become slip, trip, or fall hazards quickly.",
          "Do not reach into moving screen, rake, conveyor, or pump-adjacent equipment to clear debris."
        ],
        "callout": {
          "label": "RULE",
          "text": "At headworks, moving water and rotating equipment create the hazard picture together. Treat barriers and restricted zones seriously.",
          "color": "#3BC9DB"
        }
      },
      {
        "heading": "Screens and Pumps Are Not Safe Just Because They Are Familiar",
        "sub": "Frequent exposure often hides the risk.",
        "body": "Bar screens, grinders, and influent pumps may cycle automatically, start remotely, or retain stored fluid energy after an apparent shutdown. Clearing jams, removing debris, or opening guards without proper isolation can place hands and body parts into pinch, entanglement, or sudden-start zones.",
        "list": [
          "Use the approved lockout and operator coordination path before intrusive work.",
          "Never assume silence means equipment is de-energized or depressurized.",
          "Keep body position outside rotating, sliding, and sweep paths."
        ]
      },
      {
        "heading": "Good Entry Behavior Prevents Small Problems from Becoming Incidents",
        "sub": "Route discipline matters in wet process areas.",
        "body": "Unauthorized shortcuts, stepping over channels, or setting tools where splash and sludge can move them creates avoidable exposure. In headworks, safe work starts with the approved walkway, the right footwear, and clear communication with operations when access conditions change.",
        "list": [
          "Report damaged grating, low lighting, missing covers, or heavy debris accumulation immediately.",
          "Keep egress routes open and do not stage hoses, cords, or tools across narrow access ways.",
          "Treat odor, unusual vibration, or water level change as a reportable operating abnormality."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What makes headworks areas hazardous even during routine operation?",
        "options": [
          "Only bad weather",
          "Moving water, wet surfaces, and automatic mechanical equipment",
          "Only chemical storage",
          "Only confined spaces"
        ],
        "answer": 1
      },
      {
        "q": "What should you assume about screens, grinders, and pumps?",
        "options": [
          "They are safe when quiet",
          "They may start automatically or retain hazardous energy",
          "They can be cleared by hand if the blockage is visible",
          "They only move during daytime shifts"
        ],
        "answer": 1
      },
      {
        "q": "What is the best response to a damaged grate or blocked walkway?",
        "options": [
          "Step around it and continue",
          "Report it and use the approved route",
          "Cover it with scrap material",
          "Wait until the next shutdown"
        ],
        "answer": 1
      },
      {
        "q": "Why should operators and contractors avoid shortcuts in headworks?",
        "options": [
          "Because shortcuts are slower",
          "Because they can move people into water, slip, or machinery hazard zones",
          "Because the area is noisy",
          "Because it affects lab testing"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-open-basins-clarifiers",
    "label": "Open Basin, Clarifier & Fall / Drowning Hazard Awareness",
    "short": "Walkways, Handrails, Scum Troughs, and No-Go Zones Around Open Water",
    "icon": "🌊",
    "color": "#00B8D9",
    "regulation": "Awareness Only — fall prevention and open-water exposure around process basins",
    "audience": "All wastewater personnel, contractors, samplers, and visitors",
    "minutes": 16,
    "slides": [
      {
        "heading": "Open Water Is a Constant Exposure in Treatment Plants",
        "sub": "Basins and clarifiers do not forgive inattention.",
        "body": "Primary clarifiers, aeration basins, secondary clarifiers, equalization tanks, and channels create continuous fall and drowning exposure. Slippery algae, spray, ice, and narrow walkways can turn a routine walk-down into a serious incident if people bypass rails or lean into the process.",
        "list": [
          "Stay on designated walkways and keep both feet behind rails and edge barriers.",
          "Do not lean over scum troughs, channels, or basin edges to get a better look.",
          "Treat wet, slimy, or icy surfaces as degraded footing even when they appear manageable."
        ],
        "callout": {
          "label": "RULE",
          "text": "No sample, photo, or closer look is worth entering an uncontrolled fall path over open water or process basins.",
          "color": "#00B8D9"
        }
      },
      {
        "heading": "Clarifier Bridges and Mechanisms Create Additional Strike and Pinch Hazards",
        "sub": "The water is not the only hazard present.",
        "body": "Clarifier drives, skimmers, rotating bridges, scum collectors, and scraper mechanisms move slowly enough to be underestimated. Workers can still be pinned, struck, or drawn into hazardous positions if they enter restricted zones or climb where they are not supposed to be.",
        "list": [
          "Do not sit, stand, or place tools on moving bridge components.",
          "Maintain clearance from sweep arms, skimmers, and any rotating collection mechanism.",
          "Use the approved isolation process before intrusive inspection or maintenance."
        ]
      },
      {
        "heading": "Rescue Requires Procedure, Not an Impulse Jump",
        "sub": "Unplanned water rescue often creates a second victim.",
        "body": "If a person falls into a basin or channel, the response must follow the plant emergency procedure. Jumping in without flotation, retrieval equipment, and coordinated rescue support can multiply the emergency and expose others to the same hazard.",
        "list": [
          "Call for help immediately and use site rescue and emergency notification procedures.",
          "Use available reach, throw, or retrieval equipment if trained and it can be done safely.",
          "Do not create an additional victim by entering the water without authorization and rescue capability."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the safest approach around clarifiers and basins?",
        "options": [
          "Lean over carefully",
          "Stay on designated walkways behind rails and barriers",
          "Use the shortest route across the edge",
          "Stand on piping for a better view"
        ],
        "answer": 1
      },
      {
        "q": "Why are clarifier bridges hazardous besides the open water below?",
        "options": [
          "They are noisy",
          "They include moving mechanical parts that can strike or pinch",
          "They are only hazardous at night",
          "They always contain chlorine"
        ],
        "answer": 1
      },
      {
        "q": "What should you do if someone falls into a basin?",
        "options": [
          "Jump in immediately",
          "Follow emergency procedure and use trained rescue resources",
          "Wait for the basin to drain",
          "Shut off nearby lights"
        ],
        "answer": 1
      },
      {
        "q": "Why are wet or algae-coated surfaces dangerous?",
        "options": [
          "They look unprofessional",
          "They reduce traction and increase fall risk",
          "They increase noise",
          "They always indicate electrical faults"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-h2s-gas-detection",
    "label": "Wastewater Atmospheres, H₂S & Gas Detection Awareness",
    "short": "Sewer Gas, Oxygen Deficiency, and Atmospheric Monitoring Basics",
    "icon": "☣️",
    "color": "#8AE234",
    "regulation": "Awareness Only — toxic atmospheres, gas migration, and atmospheric testing discipline",
    "audience": "Operators, mechanics, electricians, lab staff, contractors, and responders",
    "minutes": 18,
    "slides": [
      {
        "heading": "Wastewater Spaces Can Generate Toxic and Oxygen-Deficient Atmospheres",
        "sub": "Bad air is not always visible and often is not obvious soon enough.",
        "body": "Wet wells, digesters, manholes, vaults, channels, and enclosed process spaces can contain hydrogen sulfide, methane, carbon dioxide, oxygen deficiency, or mixed atmospheres. Conditions can shift with flow, temperature, chemical addition, sludge disturbance, and ventilation changes.",
        "list": [
          "Do not trust your senses to judge atmospheric safety.",
          "A normal-looking room or vault can still contain a dangerous atmosphere.",
          "Atmospheric testing belongs to the procedure, not to guesswork."
        ],
        "callout": {
          "label": "RULE",
          "text": "In wastewater work, odor is not a control method. Gas detection, ventilation, and access procedure are the control method.",
          "color": "#8AE234"
        }
      },
      {
        "heading": "Hydrogen Sulfide and Methane Require Fast Recognition",
        "sub": "One is toxic; both can change the emergency picture.",
        "body": "Hydrogen sulfide can rapidly affect breathing and consciousness at dangerous levels, while methane adds flammability and displacement concerns. Workers must recognize alarms, evacuation cues, and the need to report abnormal odor, dead air, or process upset rather than investigating casually.",
        "list": [
          "Do not enter a suspect atmosphere to verify conditions by smell.",
          "Leave alarmed or suspect areas by the approved route and notify the responsible operator.",
          "Treat manholes, wet wells, pits, and below-grade spaces as higher-risk atmospheric locations."
        ]
      },
      {
        "heading": "Gas Detection Is Only Useful If People Respect It",
        "sub": "Instruments do not help when procedures are bypassed.",
        "body": "Gas monitors require the right sensor, bump-test and calibration status, and correct use at the correct height and location. A monitor alarm, ventilation failure, or unexplained atmospheric reading is a stop-work signal for the affected space until the site procedure says otherwise.",
        "list": [
          "Do not silence, ignore, or work around an unexplained alarm condition.",
          "Use the site entry and atmospheric testing procedure for enclosed or permit-required spaces.",
          "Report detector problems immediately and do not substitute guesswork for measurement."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the safest way to judge atmosphere in wastewater spaces?",
        "options": [
          "By smell",
          "By approved gas detection and procedure",
          "By how often the space is used",
          "By temperature alone"
        ],
        "answer": 1
      },
      {
        "q": "Why is H₂S especially dangerous?",
        "options": [
          "It only exists outdoors",
          "It can become highly toxic and quickly incapacitating",
          "It always has a strong smell at every level",
          "It is only a fire hazard"
        ],
        "answer": 1
      },
      {
        "q": "What should a worker do if a gas monitor alarms?",
        "options": [
          "Keep working if the reading is small",
          "Treat it as a stop-work and follow the site response",
          "Turn it off and continue",
          "Move it to another pocket"
        ],
        "answer": 1
      },
      {
        "q": "Which spaces deserve higher atmospheric caution in wastewater plants?",
        "options": [
          "Only offices",
          "Wet wells, manholes, pits, vaults, and enclosed process spaces",
          "Parking lots only",
          "Laboratories only"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-digesters-biogas",
    "label": "Digester, Biogas & Flammable Gas System Safety",
    "short": "Methane Production, Pressure Control, Ignition Discipline, and Process Ownership",
    "icon": "🔥",
    "color": "#FFB000",
    "regulation": "Awareness Only — biogas handling, ignition control, and digester-area restricted work",
    "audience": "Operations, maintenance, instrumentation, contractors, and utility support teams",
    "minutes": 19,
    "slides": [
      {
        "heading": "Digesters Turn Waste Into Gas — and Gas Changes the Hazard Picture",
        "sub": "Biogas systems are process systems, not general-access areas.",
        "body": "Anaerobic digesters, gas holders, flare systems, compressors, piping, traps, and relief devices can contain methane-rich gas under pressure. People entering digester areas must understand ignition control, permit rules, and who owns the equipment before starting any work.",
        "list": [
          "Treat digesters and gas piping as controlled process equipment.",
          "Stay clear of vents, relief discharge zones, and operator-only manifolds.",
          "Do not bring ignition sources into the area without the approved hot-work path."
        ],
        "callout": {
          "label": "RULE",
          "text": "Biogas systems combine flammable gas, pressure, and process upsets. Unauthorized troubleshooting is not acceptable.",
          "color": "#FFB000"
        }
      },
      {
        "heading": "Pressure Control and Vent Paths Must Never Be Defeated",
        "sub": "Small changes can create large consequences.",
        "body": "Digesters rely on pressure control, venting, flame arresting, relief systems, instrumentation, and procedural sequencing. Blocking a vent, mis-positioning a valve, or improvising a line change can create overpressure, release, or ignition hazards well beyond the immediate work point.",
        "list": [
          "Do not cap, plug, or re-route vents without the approved design and procedure.",
          "Assume trapped pressure may remain after a piece of equipment stops running.",
          "Coordinate all intrusive work with operations, maintenance, and the responsible permit authority."
        ]
      },
      {
        "heading": "Upsets Need Conservative Response",
        "sub": "Gas odor, alarms, flame issues, or abnormal pressure are escalation signals.",
        "body": "A digester upset may show as odor, flame instability, unusual pressure behavior, instrument alarms, or process changes downstream. The correct response is to leave the area if conditions are uncertain, notify the unit owner, and follow the plant emergency or upset-response procedure rather than investigating alone.",
        "list": [
          "Do not crowd a flare, vent, or gas release point for observation.",
          "Treat alarm conditions as operational issues requiring the responsible owner.",
          "Know the shelter, muster, and exclusion routes for the digester area."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why should digester and biogas areas be treated as restricted process systems?",
        "options": [
          "Because they are quiet",
          "Because they may contain flammable gas under pressure",
          "Because they are always hot",
          "Because they are only hazardous during maintenance"
        ],
        "answer": 1
      },
      {
        "q": "What should workers avoid doing with vents and relief paths?",
        "options": [
          "Inspecting them from a safe distance",
          "Blocking, plugging, or rerouting them without procedure",
          "Reporting abnormal odor",
          "Following permit rules"
        ],
        "answer": 1
      },
      {
        "q": "What is the right response to abnormal gas odor or pressure behavior?",
        "options": [
          "Investigate alone",
          "Notify the responsible operator and follow upset procedure",
          "Wait until the next shift",
          "Silence the alarm"
        ],
        "answer": 1
      },
      {
        "q": "Why is hot work around digesters tightly controlled?",
        "options": [
          "To reduce paperwork",
          "Because ignition sources near biogas can create major fire or explosion hazards",
          "Because only welders are allowed outside",
          "Because it affects laboratory sampling"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-disinfection-chemicals",
    "label": "Disinfection Chemical Safety — Chlorine, Hypochlorite & Dechlorination",
    "short": "Chemical Release Recognition, Segregation, and Corrosive Exposure Control",
    "icon": "🧪",
    "color": "#4DD0E1",
    "regulation": "Awareness Only — disinfection chemistry, chemical transfer, and release response discipline",
    "audience": "Operators, maintenance, lab teams, delivery support, and contractors",
    "minutes": 18,
    "slides": [
      {
        "heading": "Disinfection Systems Can Be Hazardous Even in Routine Service",
        "sub": "Strong oxidizers and corrosives demand strict handling discipline.",
        "body": "Wastewater facilities may use chlorine gas, sodium hypochlorite, sulfur dioxide, bisulfite, and other treatment chemicals depending on process design. These systems can create inhalation, splash, corrosion, and incompatible-mixing hazards during storage, transfer, dosing, and maintenance.",
        "list": [
          "Know which disinfectant and dechlorination chemicals are actually used at the site.",
          "Treat transfer, drum change, and line maintenance as higher-attention tasks.",
          "Use the site chemical handling procedure, required PPE, and eyewash/shower awareness."
        ],
        "callout": {
          "label": "RULE",
          "text": "Do not treat treatment chemicals as ordinary housekeeping materials. Oxidizers, corrosives, and release hazards demand procedure and segregation.",
          "color": "#4DD0E1"
        }
      },
      {
        "heading": "Mixing and Misrouting Create the Worst Events",
        "sub": "Wrong hose, wrong tote, or wrong valve can escalate immediately.",
        "body": "Many disinfection incidents begin with cross-connection, incompatible chemical contact, poor labeling, or damaged transfer equipment. Workers must confirm chemical identity, line destination, ventilation status, and emergency equipment before starting a task involving storage or dosing systems.",
        "list": [
          "Read labels and verify lineups before opening, transferring, or reconnecting anything.",
          "Never assume similar-looking totes, hoses, or pumps contain the same material.",
          "Keep acids, oxidizers, reducers, and cleaners segregated according to site rules."
        ]
      },
      {
        "heading": "Release Response Starts with Distance and Notification",
        "sub": "A suspected chemical release is not a troubleshooting challenge for bystanders.",
        "body": "If there is an odor, visible vapor, leak, hose failure, or splash emergency involving treatment chemicals, the first actions are to protect yourself, leave the immediate exposure zone, notify the responsible operator, and follow the plant emergency procedure. Casual leak investigation can turn a minor event into an exposure incident.",
        "list": [
          "Know the eyewash, safety shower, alarm, and emergency contact points before starting work.",
          "Do not enter a vapor cloud or corrosive splash area to look for the source.",
          "Support response only within your training level and assigned role."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why do disinfection chemical systems require strict handling discipline?",
        "options": [
          "Because they are rare",
          "Because they can involve corrosive, oxidizing, and inhalation hazards",
          "Because they only affect paperwork",
          "Because they are only used outdoors"
        ],
        "answer": 1
      },
      {
        "q": "What causes many chemical transfer incidents?",
        "options": [
          "Too much lighting",
          "Cross-connection, misrouting, or incompatible mixing",
          "Low noise levels",
          "Using steel-toe boots"
        ],
        "answer": 1
      },
      {
        "q": "What should you do first if a treatment chemical release is suspected?",
        "options": [
          "Move closer to inspect it",
          "Protect yourself, leave the area, and notify operations",
          "Mix water into the spill immediately",
          "Wait for a stronger odor"
        ],
        "answer": 1
      },
      {
        "q": "Why should similar-looking totes and hoses never be assumed safe to interchange?",
        "options": [
          "Because they weigh too much",
          "Because they may contain different and incompatible chemicals",
          "Because they are expensive",
          "Because color never matters"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-chemical-feed-polymer",
    "label": "Polymer, Coagulant & Chemical Feed System Safety",
    "short": "Slip Hazards, Injection Points, Dosing Pumps, and Feed-System Discipline",
    "icon": "⚗️",
    "color": "#5EEAD4",
    "regulation": "Awareness Only — treatment chemical feed systems, leaks, and injection-point work",
    "audience": "Operators, chemical handling teams, mechanics, electricians, and contractors",
    "minutes": 17,
    "slides": [
      {
        "heading": "Chemical Feed Areas Create a Different Kind of Housekeeping Hazard",
        "sub": "The floor can become part of the incident.",
        "body": "Polymer and coagulant feed skids, day tanks, pumps, hose connections, and injection quills can create slippery surfaces, residue buildup, and minor leaks that quickly become walking hazards. A small spill in a chemical room can create a fall event before it creates a process issue.",
        "list": [
          "Treat slick residue and drips as immediate housekeeping and reporting issues.",
          "Use secondary containment and keep containers closed and labeled.",
          "Do not allow hoses, tools, or sample equipment to clutter narrow feed-system access ways."
        ],
        "callout": {
          "label": "RULE",
          "text": "A minor polymer leak can still injure someone if it turns the floor into a slip surface. Housekeeping is part of chemical safety.",
          "color": "#5EEAD4"
        }
      },
      {
        "heading": "Feed Pumps and Injection Points Need Controlled Access",
        "sub": "Pressure and chemistry do not mix well with improvisation.",
        "body": "Dosing pumps, calibration columns, injection quills, and chemical transfer points may contain pressure, chemical residue, or stored line volume. Maintenance, tubing changes, and line opening activities must follow the approved isolation, flushing, and PPE requirements for the system.",
        "list": [
          "Do not crack open tubing or fittings casually to 'see if it is flowing.'",
          "Confirm the chemical identity and flush requirements before disassembly.",
          "Keep face and hands out of likely spray paths when opening feed-system components."
        ]
      },
      {
        "heading": "Quality Control Does Not Replace Exposure Control",
        "sub": "Even routine dosing work deserves discipline.",
        "body": "Adjusting pumps, changing totes, and verifying dosage may happen often, but repetition should not reduce caution. Use the site procedure, protect against splash, and treat every misfeed, unexpected level change, or pump issue as a controlled operating task rather than a quick fix.",
        "list": [
          "Verify labels and concentration before connecting or changing chemical supply.",
          "Use assigned PPE even when the task feels familiar or low-volume.",
          "Report recurring leaks or poor containment instead of normalizing them."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why can a small polymer leak still be a serious safety issue?",
        "options": [
          "It changes water color",
          "It can create an immediate slip hazard",
          "It lowers pump noise",
          "It stops all treatment"
        ],
        "answer": 1
      },
      {
        "q": "What should workers avoid when checking chemical feed systems?",
        "options": [
          "Reading labels",
          "Opening tubing or fittings casually to check flow",
          "Using PPE",
          "Reporting drips"
        ],
        "answer": 1
      },
      {
        "q": "Why should chemical identity be verified before disassembly or tote change?",
        "options": [
          "Because all chemicals react the same",
          "Because flush, PPE, and compatibility needs may differ",
          "Because operators prefer paperwork",
          "Because pumps only run at night"
        ],
        "answer": 1
      },
      {
        "q": "What is the safest attitude toward familiar daily dosing tasks?",
        "options": [
          "They are too routine to require procedure",
          "They still require procedure, PPE, and controlled handling",
          "They can be improvised if the area is clean",
          "They only matter during audits"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-biosolids-dewatering",
    "label": "Biosolids, Dewatering & Sludge Handling Safety",
    "short": "Centrifuges, Presses, Conveyors, Washdown, and Exposure Control",
    "icon": "🧱",
    "color": "#A78BFA",
    "regulation": "Awareness Only — dewatering equipment, sludge handling, and exposure/cleanup discipline",
    "audience": "Operators, mechanics, cleanup crews, truck support, and contractors",
    "minutes": 18,
    "slides": [
      {
        "heading": "Dewatering Areas Combine Mechanical and Biological Exposure",
        "sub": "The hazard is not only the machine.",
        "body": "Belt presses, screw presses, centrifuges, conveyors, hoppers, cake pumps, and truck loading points create pinch, entanglement, splash, and contamination concerns in the same work area. Sludge handling also increases housekeeping and hygiene requirements compared with ordinary dry mechanical rooms.",
        "list": [
          "Respect guarding, pinch points, and exclusion zones around presses and conveyors.",
          "Avoid touching face, food, phones, or personal items with contaminated gloves.",
          "Use the site cleanup and hygiene procedures after sludge-area tasks."
        ],
        "callout": {
          "label": "RULE",
          "text": "In biosolids handling, machine guarding and contamination control both matter. Do not drop either one.",
          "color": "#A78BFA"
        }
      },
      {
        "heading": "Washdown and Cleanup Can Become the Hidden Injury Point",
        "sub": "Most people expect the press hazard, but not the cleanup hazard.",
        "body": "Hoses, wet floors, overspray, and sludge residue create slip and trip exposure during cleanup, especially when combined with moving equipment or poor lighting. Safe cleanup means good drainage, controlled hose routing, and keeping people out of energized machinery while washing down.",
        "list": [
          "Do not wash near unguarded or operating equipment unless procedure allows and controls are in place.",
          "Keep hose routes and washdown tools from blocking egress or crossing travel paths.",
          "Report persistent leaks, floor damage, and drainage issues before they become normalized."
        ]
      },
      {
        "heading": "Truck Loading and Cake Handling Need Traffic Control",
        "sub": "Vehicle movement changes the risk picture again.",
        "body": "Biosolids cake storage and loading often bring forklifts, loaders, trucks, and backing hazards into the same area as pedestrians and process equipment. Clear separation, spotter discipline, and no-go zones prevent struck-by events during otherwise routine loading operations.",
        "list": [
          "Stay out of backing zones and loader swing paths.",
          "Use designated pedestrian routes and communication points.",
          "Do not walk under raised loader buckets or lean into moving transfer points."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What makes dewatering areas different from ordinary mechanical rooms?",
        "options": [
          "They are quieter",
          "They combine machine hazards with biological and housekeeping exposure",
          "They have no moving parts",
          "They only involve paperwork"
        ],
        "answer": 1
      },
      {
        "q": "Why is washdown considered a safety task rather than just cleanup?",
        "options": [
          "Because it can create slip, trip, and proximity hazards around equipment",
          "Because it lowers water quality",
          "Because it increases noise",
          "Because it always requires forklift use"
        ],
        "answer": 1
      },
      {
        "q": "What is the best practice around biosolids loading zones?",
        "options": [
          "Walk behind backing trucks for visibility",
          "Stay in designated pedestrian routes and out of vehicle swing paths",
          "Stand beneath raised buckets to guide operators",
          "Use the shortest route through loading activity"
        ],
        "answer": 1
      },
      {
        "q": "Why is hygiene emphasized in sludge handling areas?",
        "options": [
          "To improve machine speed",
          "To reduce contamination and transfer of exposure away from the task area",
          "To reduce paperwork",
          "To keep the floor shiny"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-wet-well-confined-space",
    "label": "Wet Well, Sewer Entry & Confined Space Coordination",
    "short": "Permit Space Discipline, Rescue Limits, and Entry Team Coordination",
    "icon": "🕳️",
    "color": "#F97316",
    "regulation": "Awareness Only — confined-space coordination around wet wells, manholes, and sewer structures",
    "audience": "Operators, maintenance, utilities, contractors, and stand-by attendants",
    "minutes": 19,
    "slides": [
      {
        "heading": "Many Wastewater Structures Are Permit-Space Problems First",
        "sub": "Wet wells and sewers are not routine walk-in work areas.",
        "body": "Wet wells, valve vaults, lift stations, digester internals, manholes, and below-grade structures can present atmospheric, engulfment, electrical, and access hazards all at once. Even experienced crews must treat entry as a controlled team activity with a permit, testing, ventilation, and rescue planning where required.",
        "list": [
          "Do not enter a wet well or sewer structure because the task seems short.",
          "Atmospheric testing, isolation, and role assignment come before entry.",
          "Treat ladders, limited egress, and water level change as part of the hazard picture."
        ],
        "callout": {
          "label": "RULE",
          "text": "No person should self-authorize entry into a wastewater permit space. Entry authority belongs to the site confined-space process.",
          "color": "#F97316"
        }
      },
      {
        "heading": "Rescue Planning Must Exist Before the Entry Starts",
        "sub": "A stand-by person without a plan is not a rescue system.",
        "body": "Confined-space incidents often worsen when people rush in after a downed worker. Wastewater entries require an attendant, communication method, retrieval equipment where applicable, and clear understanding of who performs rescue and who does not.",
        "list": [
          "Do not attempt an impulsive entry rescue unless the site plan and your role specifically permit it.",
          "Know alarm, communication, and evacuation signals before anyone goes in.",
          "Stop the job if the rescue plan is unclear or the required equipment is missing."
        ]
      },
      {
        "heading": "Entry Conditions Can Change Mid-Task",
        "sub": "The first reading is not the only reading that matters.",
        "body": "Flow changes, sludge disturbance, ventilation interruption, chemical addition, pump cycling, and line isolation changes can alter a space after work begins. Continuous attention to readings, communications, and permit conditions is necessary until the entry is fully closed out.",
        "list": [
          "Do not treat the first acceptable monitor reading as permanent.",
          "Reassess if alarms, odors, process changes, or communication issues appear.",
          "Terminate the entry if required controls can no longer be maintained."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why are wet wells and sewer structures treated as confined-space problems first?",
        "options": [
          "Because they are dry",
          "Because they can combine atmospheric, engulfment, access, and energy hazards",
          "Because they are always easy to evacuate",
          "Because they are only hazardous during rain"
        ],
        "answer": 1
      },
      {
        "q": "What must exist before an entry begins?",
        "options": [
          "A shortcut route",
          "The required permit, testing, role assignment, and rescue planning",
          "Only a flashlight",
          "Only a verbal okay from a coworker"
        ],
        "answer": 1
      },
      {
        "q": "What should an attendant avoid doing?",
        "options": [
          "Monitoring the team",
          "Making an impulsive rescue outside the plan",
          "Keeping communication",
          "Stopping work if conditions change"
        ],
        "answer": 1
      },
      {
        "q": "Why can a confined space become unsafe after entry has already started?",
        "options": [
          "Because time itself causes danger",
          "Because process conditions and atmosphere can change mid-task",
          "Because ladders shrink",
          "Because paperwork expires instantly"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/wastewater-bypass-overflow-response",
    "label": "Bypass, Overflow, Power Loss & Immediate Response",
    "short": "Wet-Weather Events, Pump Failures, Process Upset, and Public/Environmental Protection",
    "icon": "🚨",
    "color": "#22CC66",
    "regulation": "Awareness Only — upset response, abnormal conditions, and emergency communication discipline",
    "audience": "Operations, maintenance, supervisors, utilities staff, and contractors",
    "minutes": 17,
    "slides": [
      {
        "heading": "Wastewater Emergencies Often Begin as Flow or Power Problems",
        "sub": "You may see level, odor, flooding, or equipment alarms before you understand the full event.",
        "body": "Power loss, pump failure, bypass activation, high wet-weather flow, line blockage, overflow, and lift-station upset can escalate quickly into public exposure, environmental release, electrical, and slip hazards. The first safe actions are route control, notification, and protecting people from the affected area.",
        "list": [
          "Treat flooding, rising level, and overflow as area-control events first.",
          "Do not enter standing water around energized or uncertain equipment without the required controls.",
          "Keep unauthorized personnel and vehicles out of active upset zones."
        ],
        "callout": {
          "label": "RULE",
          "text": "A wastewater upset is not just a process problem. It can become an exposure, electrical, traffic, and public-interface problem at the same time.",
          "color": "#22CC66"
        }
      },
      {
        "heading": "Communication and Escalation Matter More Than Heroics",
        "sub": "Fast reporting beats improvisation.",
        "body": "During bypasses and overflow events, teams need accurate information: what failed, what area is affected, whether power is stable, whether sewage is on the ground, and whether public or contractor access must be restricted. Improvised troubleshooting without coordination can delay the correct plant response.",
        "list": [
          "Use the site notification path immediately for overflow, bypass, or loss-of-control events.",
          "Support only the tasks assigned to your role and training level.",
          "Document observed conditions clearly for the responsible lead."
        ]
      },
      {
        "heading": "Restoration Still Requires Controlled Start-Up",
        "sub": "Getting back online can be as hazardous as the upset itself.",
        "body": "After the immediate event, restart, re-energization, valve lineup, and cleanup work still involve stored energy, contaminated surfaces, and changing process conditions. The plant must return to normal through procedure, communication, and verification rather than rushing to make alarms disappear.",
        "list": [
          "Do not bypass interlocks or safeguards to restore flow quickly.",
          "Treat post-upset cleanup water and residue as contaminated until the site procedure says otherwise.",
          "Verify stable conditions before reopening areas to normal traffic."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What should be treated first during a bypass or overflow event?",
        "options": [
          "Publicity",
          "Area control, notification, and protection of people",
          "Painting equipment",
          "Routine sampling"
        ],
        "answer": 1
      },
      {
        "q": "Why is standing water around upset equipment dangerous?",
        "options": [
          "It looks messy",
          "It may involve contamination, slip exposure, or energized equipment",
          "It always means no hazard",
          "It only affects vehicles"
        ],
        "answer": 1
      },
      {
        "q": "What is the best role for most workers during a wastewater upset?",
        "options": [
          "Improvise repairs alone",
          "Follow the site notification and assigned response process",
          "Ignore alarms until management arrives",
          "Restart everything immediately"
        ],
        "answer": 1
      },
      {
        "q": "Why should restoration after an upset stay procedural?",
        "options": [
          "Because paperwork is the goal",
          "Because restart, cleanup, and re-energization can create new hazards",
          "Because nothing changes after an upset",
          "Because only contractors can help"
        ],
        "answer": 1
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function WasteWaterModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const WasteWaterHeadworksTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[0])
export const WasteWaterClarifierTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[1])
export const WasteWaterAtmospheresTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[2])
export const WasteWaterDigesterTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[3])
export const WasteWaterDisinfectionTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[4])
export const WasteWaterChemicalFeedTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[5])
export const WasteWaterBiosolidsTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[6])
export const WasteWaterConfinedSpaceTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[7])
export const WasteWaterEmergencyResponseTraining = makeModuleComponent(WASTE_WATER_TREATMENT_PHASE1_MODULES[8])
