import TrainingModuleShell from './TrainingModuleShell.jsx'

export const CONFINED_SPACES_PHASE1_MODULES = [
  {
    "path": "/confined-space-permit-roles",
    "label": "Confined Space Permit Roles & Entry Authorization",
    "short": "Authorized Entrants, Attendants, Supervisors, and Permit Discipline",
    "icon": "📝",
    "color": "#4DD0E1",
    "regulation": "Permit-required confined space awareness — entry authorization and role control",
    "audience": "Authorized entrants, attendants, supervisors, contractors, and support personnel",
    "minutes": 18,
    "slides": [
      {
        "heading": "A Permit Is an Entry Control, Not a Piece of Paper",
        "sub": "Confined-space work fails when people treat the permit as a formality.",
        "body": "Permit-required confined spaces involve hazards that can kill quickly: atmospheric danger, engulfment, mechanical movement, line content, electrical exposure, heat, or restricted rescue access. The permit exists to prove that the hazards were identified, the controls were applied, the right people were assigned, and the entry is still valid for the actual job in progress.",
        "list": [
          "No permit means no entry into a permit-required confined space.",
          "The permit must match the exact space, task, isolation condition, and time window.",
          "Changes in scope, atmospheric condition, or crew status can invalidate the permit."
        ],
        "callout": {
          "label": "RULE",
          "text": "A signed permit does not make a space safe by itself. The controls named on the permit must be in place and maintained.",
          "color": "#4DD0E1"
        }
      },
      {
        "heading": "Each Role Has a Different Safety Function",
        "sub": "Confined-space roles are not interchangeable in the middle of the job.",
        "body": "Authorized entrants, attendants, and entry supervisors each have distinct responsibilities. Entrants follow the permit and maintain communication. Attendants monitor entrants and conditions from outside the space. Entry supervisors verify the space is prepared, the permit is valid, and work stops if conditions change. Confusion between these roles creates gaps exactly when quick decisions matter most.",
        "list": [
          "Entrants do the work; attendants monitor and control the boundary.",
          "Attendants do not abandon the post to help inside unless relieved and the rescue plan allows it.",
          "Supervisors confirm the entry conditions and stop work when the permit is no longer valid."
        ]
      },
      {
        "heading": "Contractors and Multi-Craft Entries Need One Clear Owner",
        "sub": "Shared work without a single coordinator creates hidden conflicts.",
        "body": "When operations, maintenance, contractors, cleaners, welders, and electricians all touch the same space, the entry can fail through poor coordination even when each group thinks it is being careful. One entry authority must own the permit status, isolation status, atmospheric plan, and accountability list for everyone involved.",
        "list": [
          "Only one controlling permit should govern the active entry boundary.",
          "Every person entering must be accounted for by the same entry system.",
          "Shift change, craft change, and task expansion require deliberate re-briefing."
        ]
      },
      {
        "heading": "When Conditions Change, Stop and Re-Evaluate",
        "sub": "The safest restart is often a fresh permit review.",
        "body": "New odors, alarm activity, ventilation failure, line disturbance, weather changes, or changed work methods can all invalidate an entry. The correct response is to stop, stabilize, and re-evaluate rather than pushing through to finish the task. Confined-space incidents often happen after crews normalize a small change and keep working.",
        "list": [
          "Pause work when atmospheric readings drift or communication is lost.",
          "Re-verify permit conditions after breaks, delays, or interruptions.",
          "Restart only when the controlling authority confirms the entry is valid again."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Role clarity, permit discipline, and stop-work authority are the backbone of confined-space control.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is the main purpose of a confined-space permit?",
        "options": [
          "To speed up the job",
          "To document and control the hazards and entry conditions",
          "To replace gas testing",
          "To avoid using attendants"
        ],
        "answer": 1
      },
      {
        "q": "Who monitors entrants and conditions from outside the space?",
        "options": [
          "The authorized entrant",
          "The attendant",
          "Any nearby worker",
          "Only the rescue team"
        ],
        "answer": 1
      },
      {
        "q": "What should happen if the job scope changes during entry?",
        "options": [
          "Keep working if the team is experienced",
          "Stop and re-evaluate the permit and controls",
          "Ignore it if the atmosphere is normal",
          "Only tell the next shift"
        ],
        "answer": 1
      },
      {
        "q": "Why is one controlling entry authority important during multi-craft work?",
        "options": [
          "To reduce paperwork only",
          "To avoid conflicting controls and accountability gaps",
          "To let attendants enter the space",
          "To eliminate the need for communication"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/confined-space-atmospheric-testing",
    "label": "Confined Space Atmospheric Testing & Ventilation",
    "short": "Oxygen, Toxicity, Flammability, Stratification, and Continuous Monitoring",
    "icon": "🫧",
    "color": "#00C2FF",
    "regulation": "Permit-required confined space awareness — atmospheric evaluation and ventilation control",
    "audience": "Entrants, attendants, gas testers, supervisors, and rescue support personnel",
    "minutes": 20,
    "slides": [
      {
        "heading": "You Cannot See a Dangerous Atmosphere",
        "sub": "A clean-looking space can still be immediately dangerous to life and health.",
        "body": "Confined spaces can contain oxygen deficiency, toxic gases, flammable vapor, residual process chemicals, or layered atmospheres that are invisible to the eye. Atmosphere is one of the most lethal confined-space hazards because workers can enter feeling normal and lose the ability to self-rescue within seconds or minutes.",
        "list": [
          "Do not rely on smell, comfort, or past experience to judge atmospheric safety.",
          "The same space can test differently depending on process status, weather, ventilation, or task activity.",
          "Atmospheric risk can return after entry even when the initial test was acceptable."
        ],
        "callout": {
          "label": "RULE",
          "text": "Test the atmosphere with the approved instrument and method. Human senses are not a gas monitor.",
          "color": "#00C2FF"
        }
      },
      {
        "heading": "Testing Must Follow a Deliberate Sequence",
        "sub": "Meter use is only useful when the method is correct.",
        "body": "Atmospheric testing requires the correct instrument, a valid calibration or bump-test status, adequate sample time, and a sequence that addresses oxygen, flammability, and toxic contaminants. Vertical spaces, pits, tanks, and sewers can stratify, so top, middle, and bottom readings may differ. A single quick sample at the opening is not enough.",
        "list": [
          "Use the approved pre-use verification before relying on any monitor.",
          "Sample the space in the required order and allow enough time for the instrument to respond.",
          "Check multiple elevations when the space geometry or gas behavior suggests layering."
        ]
      },
      {
        "heading": "Ventilation Must Match the Hazard and the Task",
        "sub": "Moving air is not the same as controlling the atmosphere.",
        "body": "Forced-air ventilation can reduce some atmospheric hazards, but only when it is sized, placed, and maintained correctly. Ventilation may fail to reach dead legs, corners, under-platform areas, vessel bottoms, or internal baffles. Hot work, coatings, cleaning agents, sludge disturbance, and product residue can all change the atmospheric picture after the job begins.",
        "list": [
          "Place ventilation so fresh air reaches the work zone, not just the opening.",
          "Reassess ventilation whenever the task changes or residue is disturbed.",
          "Do not keep working just because a fan is running."
        ]
      },
      {
        "heading": "Continuous Monitoring Matters Because Conditions Drift",
        "sub": "The atmosphere can worsen after entry begins.",
        "body": "Confined-space incidents often begin when a crew trusts the entry test and fails to notice that process migration, residue release, dead battery, blocked sample path, or ventilation loss changed the space later. Continuous or repeated monitoring, along with attendant awareness and stop-work discipline, is what catches the change before it becomes a rescue event.",
        "list": [
          "Treat alarms, rising readings, or uncertain instrument status as stop-work triggers.",
          "Leave the space when readings indicate loss of control or monitor reliability is uncertain.",
          "Re-enter only after the hazard is understood and conditions are restored."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Initial test, proper sampling, effective ventilation, and continuous monitoring all matter together.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why is atmospheric danger especially deadly in confined spaces?",
        "options": [
          "Because it is always loud",
          "Because it can be invisible and disable self-rescue quickly",
          "Because it only affects new workers",
          "Because it only exists in tanks"
        ],
        "answer": 1
      },
      {
        "q": "What is wrong with taking one quick reading at the opening?",
        "options": [
          "Nothing if the space is small",
          "It may miss stratification and remote hazard zones",
          "It saves too much battery",
          "It always overestimates oxygen"
        ],
        "answer": 1
      },
      {
        "q": "What should ventilation accomplish?",
        "options": [
          "Make noise so people know work is happening",
          "Move fresh air to the actual work zone and control the atmosphere",
          "Replace the need for a permit",
          "Allow attendants to leave"
        ],
        "answer": 1
      },
      {
        "q": "What should happen if monitoring alarms or becomes unreliable during entry?",
        "options": [
          "Ignore it if work is almost finished",
          "Stop work, exit if needed, and re-evaluate",
          "Tap the monitor and continue",
          "Wait for the next shift"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/confined-space-isolation-blanking",
    "label": "Confined Space Isolation, Blanking & Line Breaking",
    "short": "LOTO, Double Block and Bleed, Mechanical Blocking, and Unexpected Inflow Prevention",
    "icon": "🔒",
    "color": "#FF8A00",
    "regulation": "Permit-required confined space awareness — hazardous energy and line content isolation",
    "audience": "Maintenance, operators, entrants, permit coordinators, and contractors",
    "minutes": 20,
    "slides": [
      {
        "heading": "A Safe Entry Starts Outside the Space",
        "sub": "The biggest mistake is entering before the space is truly isolated.",
        "body": "Confined spaces injure workers when piping, agitators, mixers, conveyors, screw augers, hydraulic systems, product lines, steam, water, or gas connections remain able to feed energy or material into the space. The hazard is not just motion; it is also engulfment, temperature, pressure, or chemical exposure entering after people are already inside.",
        "list": [
          "Identify every source that can move, fill, heat, pressurize, drain, or contaminate the space.",
          "Do not treat a control switch or local stop button as adequate isolation.",
          "Space isolation is part of job planning, not a last-minute add-on."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the space can receive energy or material while occupied, entry is not controlled.",
          "color": "#FF8A00"
        }
      },
      {
        "heading": "Lockout and Positive Isolation Must Match the Hazard",
        "sub": "Different systems require different levels of separation.",
        "body": "Some confined-space entries can be protected by lockout alone, while others require blinds, blanks, disconnects, spool removal, double block and bleed, drained lines, pinned equipment, or mechanical blocking. The correct method depends on what the connected system can do and what would happen if the isolation failed while workers are inside.",
        "list": [
          "Use positive isolation when process content or energy release would be catastrophic.",
          "Drain, depressurize, and verify lines rather than assuming valves hold.",
          "Block, pin, or secure moving members that could descend, rotate, or shift."
        ]
      },
      {
        "heading": "Line Opening and Cleaning Can Recreate the Hazard",
        "sub": "The space can be re-contaminated during the work itself.",
        "body": "Flushing, steaming, washing, draining, sludge movement, or opening adjacent piping can reintroduce chemicals, heat, or flow to the work zone. Coordination with operations matters because other crews may not realize the entry boundary depends on their system remaining unchanged.",
        "list": [
          "Control line opening under the same permit strategy as the entry.",
          "Communicate clearly before anyone changes valves, pumps, or transfer routes.",
          "Treat any unexpected inflow or process migration as an immediate exit condition."
        ]
      },
      {
        "heading": "Verification Is the Difference Between Planning and Control",
        "sub": "Good paperwork without proof still leaves workers exposed.",
        "body": "Isolation must be verified by the approved method: valve lineup check, zero-energy verification, visual confirmation of blanks, drained condition, test for motion, and confirmation from controlling operations. Workers inside the space depend on that verification being real, current, and communicated to everyone at the boundary.",
        "list": [
          "Verify before entry and re-verify after breaks, shift changes, or altered work scope.",
          "Use the approved zero-energy and zero-content checks for that system.",
          "Never assume isolation stayed intact just because no issue appeared yet."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "A confined space is only as safe as the isolation that keeps energy and material out of it.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why must isolation be planned before entry?",
        "options": [
          "Because permits are easier that way",
          "Because energy or material can enter the space after workers are inside",
          "Because attendants need less training",
          "Because it shortens rescue time"
        ],
        "answer": 1
      },
      {
        "q": "What may be required beyond lockout for some spaces?",
        "options": [
          "Nothing else ever",
          "Blinds, blanks, disconnects, drains, or mechanical blocking",
          "Only paint markings",
          "Only warning signs"
        ],
        "answer": 1
      },
      {
        "q": "Why is line opening inside or near a confined space dangerous?",
        "options": [
          "It improves ventilation",
          "It can reintroduce content or pressure to the work zone",
          "It always lowers oxygen",
          "It only affects supervisors"
        ],
        "answer": 1
      },
      {
        "q": "What turns isolation from a plan into a real control?",
        "options": [
          "A verbal assumption",
          "Verification by the approved method",
          "Finishing fast",
          "Using extra lighting"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/confined-space-attendant-communications",
    "label": "Confined Space Attendant Duties & Communications",
    "short": "Boundary Control, Accountability, Communication Loss, and Stop-Work Authority",
    "icon": "📡",
    "color": "#9C6BFF",
    "regulation": "Permit-required confined space awareness — attendant function and entry accountability",
    "audience": "Attendants, entrants, supervisors, rescue support, and contractors",
    "minutes": 18,
    "slides": [
      {
        "heading": "The Attendant Is a Control, Not an Observer",
        "sub": "A distracted attendant leaves the space unprotected.",
        "body": "The attendant's job is to control the entry boundary, maintain entrant accountability, observe conditions, and initiate the planned response when something changes. This role is not administrative and should not be buried under unrelated tasks, phone use, paperwork overload, or equipment operation.",
        "list": [
          "The attendant must know who is inside the space at all times.",
          "The attendant monitors for condition changes outside and at the opening, not just for conversation.",
          "The entry boundary must stay controlled against unauthorized entry."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the attendant cannot continuously perform attendant duties, the entry is not properly supported.",
          "color": "#9C6BFF"
        }
      },
      {
        "heading": "Communication Must Work for the Real Space",
        "sub": "Noise, geometry, PPE, and equipment can break a communication plan fast.",
        "body": "Radio dead zones, fan noise, respirators, hoses, vessel walls, and vertical depth can all degrade communication. The team has to agree in advance on how entrants, attendants, and supervisors will communicate, what loss of contact means, and what the stop-work trigger will be.",
        "list": [
          "Use a communication method that can actually be heard or received in the work conditions.",
          "Pre-brief what alarm, radio code, signal, or missed check-in triggers exit.",
          "Do not improvise new signals once the job is already underway."
        ]
      },
      {
        "heading": "Unauthorized Entry and Helper Reflex Can Multiply Victims",
        "sub": "Most bad rescues begin with good intentions and no control.",
        "body": "When an entrant is distressed, nearby workers often feel pressure to rush inside. The attendant prevents that impulse from turning one victim into several. The correct response is to initiate the planned rescue path, maintain accountability, and stop untrained people from making a blind entry.",
        "list": [
          "The attendant must stop unauthorized helpers from entering the space.",
          "Emergency action follows the plan; it does not rely on impulse.",
          "Good accountability information helps rescuers act faster and safer."
        ]
      },
      {
        "heading": "Stop-Work Authority Protects Everyone at the Boundary",
        "sub": "Silence and uncertainty are hazards too.",
        "body": "A missed call-back, changing weather, monitor question, ventilation issue, or unexpected worker at the opening can all be valid reasons to pause the job. The safest attendants are willing to stop work early rather than explain later why they hoped the issue would resolve itself.",
        "list": [
          "Stop work when communication is lost or uncertain.",
          "Treat unusual behavior, missed response, or changed outside conditions as meaningful.",
          "Resume only after the entry conditions are clearly restored."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Boundary control, accountability, and disciplined communication are what keep confined-space entries from becoming rescue scenes.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is the attendant's primary role?",
        "options": [
          "To help with the work inside the space",
          "To control the boundary, maintain accountability, and monitor conditions",
          "To operate nearby equipment",
          "To fill out reports after the shift"
        ],
        "answer": 1
      },
      {
        "q": "Why must communication be pre-planned?",
        "options": [
          "Because any method always works",
          "Because space geometry, noise, and PPE can break communication",
          "Because it replaces gas testing",
          "Because it avoids permits"
        ],
        "answer": 1
      },
      {
        "q": "What should the attendant do if a bystander tries to enter during an emergency?",
        "options": [
          "Let them help if they are willing",
          "Stop unauthorized entry and activate the planned response",
          "Ignore them while calling a supervisor",
          "Go inside first"
        ],
        "answer": 1
      },
      {
        "q": "What should happen if communication is lost?",
        "options": [
          "Continue if the task is simple",
          "Stop work and re-establish control",
          "Wait until lunch",
          "Assume the entrant is fine"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/confined-space-retrieval-rescue",
    "label": "Confined Space Retrieval & Rescue Readiness",
    "short": "Non-Entry Rescue, Rescue Delay, Victim Multiplication, and Transfer to EMS",
    "icon": "🛟",
    "color": "#FF5C7A",
    "regulation": "Permit-required confined space awareness — retrieval, rescue planning, and emergency readiness",
    "audience": "Entrants, attendants, supervisors, emergency teams, and contractors",
    "minutes": 18,
    "slides": [
      {
        "heading": "Confined-Space Rescue Has to Be Ready Before Entry Starts",
        "sub": "Calling for help after the collapse is already late.",
        "body": "Rescue planning for confined spaces is different from routine first aid because access is restricted, atmospheres may be deadly, victim retrieval may be vertical or obstructed, and unplanned entry by helpers can multiply casualties. The rescue path, equipment, and responder readiness must exist before anyone crosses the boundary.",
        "list": [
          "Confirm the rescue method before entry, not after an alarm or collapse.",
          "The more complex the space, the less likely an improvised rescue will succeed safely.",
          "Entry teams and rescue teams must understand the same space hazards."
        ],
        "callout": {
          "label": "RULE",
          "text": "A confined-space entry without a real rescue plan is not a controlled entry.",
          "color": "#FF5C7A"
        }
      },
      {
        "heading": "Non-Entry Retrieval Is Usually the First Preference",
        "sub": "Removing the victim without sending in another worker is often the safest option.",
        "body": "Where the space and task allow it, retrieval lines, harnesses, davits, tripods, or other approved systems can let the team begin recovery without exposing another person to the same hazard. This only works when it was planned in advance and the equipment is compatible with the entry geometry and worker position.",
        "list": [
          "Use approved retrieval systems when the entry and task allow them.",
          "Plan anchor points, line routing, and snag hazards before workers go in.",
          "Do not assume a retrieval line will work in every vessel or every task."
        ]
      },
      {
        "heading": "Blind Rescue Attempts Often Create Multiple Victims",
        "sub": "Impulse is deadly in confined-space emergencies.",
        "body": "Many confined-space fatalities involve coworkers who rushed in to help without respiratory protection, atmospheric knowledge, or a safe retrieval path. The correct emergency response is disciplined: summon the planned rescue, control the boundary, provide the best information available, and prevent unplanned entry by would-be rescuers.",
        "list": [
          "Do not enter the space unless you are part of the authorized rescue path and conditions allow it.",
          "Provide rescuers with entrant count, location, task, and known hazards.",
          "Protect access routes so responding teams can work immediately."
        ]
      },
      {
        "heading": "After Retrieval, Medical Transfer Still Matters",
        "sub": "The emergency is not over once the worker is out of the space.",
        "body": "Atmospheric exposure, crushing, suspension effects, chemical contamination, heat stress, and delayed injury can all continue after removal. The team must transfer information to EMS quickly: what the worker was exposed to, how long they were down, what readings or alarms occurred, and what rescue actions were taken.",
        "list": [
          "Account for all entrants and helpers after the event.",
          "Preserve monitor data, permit information, and exposure details for responders.",
          "Do not declare the event over just because the person is outside the space."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Rescue readiness means preplanned retrieval, disciplined boundary control, and fast transfer of accurate information.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "When must the rescue plan exist?",
        "options": [
          "After the first entrant reports inside",
          "Before entry begins",
          "Only if hot work is involved",
          "After the permit is closed"
        ],
        "answer": 1
      },
      {
        "q": "Why is non-entry retrieval preferred when feasible?",
        "options": [
          "It is cheaper paperwork",
          "It can recover a worker without exposing another person to the same hazard",
          "It replaces attendants",
          "It removes the need for gas testing"
        ],
        "answer": 1
      },
      {
        "q": "Why are blind rescue attempts so dangerous?",
        "options": [
          "They take too long",
          "They often create multiple victims",
          "They reduce paperwork",
          "They only fail in tanks"
        ],
        "answer": 1
      },
      {
        "q": "What information helps EMS after retrieval?",
        "options": [
          "Only the worker's badge number",
          "Exposure details, time down, monitor data, and rescue actions",
          "Only the permit color",
          "Only the weather"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/confined-space-tanks-pits-silos",
    "label": "Tank, Pit, Hopper & Silo Interior Work Safety",
    "short": "Bridging, Engulfment, Internal Geometry, and Mechanical Cleaning Hazards",
    "icon": "🏗️",
    "color": "#8BC34A",
    "regulation": "Confined-space awareness — vessels, pits, hoppers, and storage structures",
    "audience": "Maintenance, cleaners, contractors, operators, and shutdown crews",
    "minutes": 18,
    "slides": [
      {
        "heading": "The Space Geometry Can Trap You Before the Atmosphere Does",
        "sub": "Pits, hoppers, and vessels create movement limits that normal rooms do not.",
        "body": "Internal ladders, cone bottoms, tapered walls, agitators, internals, baffles, pits, sumps, and narrow openings change how workers move, communicate, and exit. These spaces may feel manageable at the opening but become much less forgiving once a worker is deeper inside or below grade.",
        "list": [
          "Plan body position, tool handling, hose routing, and egress before entry.",
          "Account for how internals, grating, and cone sections affect movement.",
          "Do not assume a straight retrieval path exists just because the opening is accessible."
        ],
        "callout": {
          "label": "RULE",
          "text": "Confined-space planning must match the actual internal geometry, not just the name of the vessel or pit.",
          "color": "#8BC34A"
        }
      },
      {
        "heading": "Stored Material Can Shift, Bridge, or Engulf",
        "sub": "Solids and semi-solids create hazards that do not behave like flat floors.",
        "body": "Bins, silos, hoppers, pits, and sludge structures can contain bridged solids, crusted residue, unstable material, or voids that collapse when disturbed. A worker standing on product or residue may suddenly sink, become pinned, or be drawn toward a discharge point or internal equipment.",
        "list": [
          "Never trust bridged or crusted material as a walking surface.",
          "Control feed, discharge, vibration, and mechanical movement before entry.",
          "Treat flowable solids and sludge as engulfment hazards, not just housekeeping issues."
        ]
      },
      {
        "heading": "Cleaning Methods Can Add the Hazard Back In",
        "sub": "Jetting, vacuuming, hammering, and scraping can change both atmosphere and stability.",
        "body": "Mechanical cleaning, water jetting, vacuum truck work, hammering buildup, and residue removal can release dust, gases, or chunks of material. The more aggressively the space is cleaned, the more likely it is that atmosphere, footing, visibility, and retrieval conditions will change.",
        "list": [
          "Reassess the hazard when material begins to move or break loose.",
          "Keep attendants and entry supervisors aware of changing internal conditions.",
          "Do not continue on habit if the space starts behaving differently."
        ]
      },
      {
        "heading": "Shutdown Structures Need the Same Discipline as Process Vessels",
        "sub": "Temporary outages can create false confidence.",
        "body": "Pits and storage structures that are empty, idle, or out of service can still contain unstable residual hazards. Workers are most likely to underestimate these entries when the equipment is not operating and the task appears to be simple inspection or cleanup.",
        "list": [
          "Idle does not mean free of residual atmosphere, movement, or engulfment hazards.",
          "Use the same permit discipline for outage work as for live-process structures.",
          "Exit and re-evaluate when the space condition no longer matches the entry plan."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "In pits, tanks, hoppers, and silos, geometry and material behavior are hazards in their own right.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why is internal geometry important in confined-space planning?",
        "options": [
          "It only affects lighting",
          "It changes movement, communication, and rescue paths",
          "It only matters for office tanks",
          "It eliminates atmospheric hazards"
        ],
        "answer": 1
      },
      {
        "q": "Why are bridged solids dangerous in silos or hoppers?",
        "options": [
          "They are slippery only",
          "They can collapse and engulf or trap a worker",
          "They improve footing",
          "They block radio signals"
        ],
        "answer": 1
      },
      {
        "q": "What can aggressive cleaning do inside a confined space?",
        "options": [
          "Make hazards disappear permanently",
          "Release dust, gases, or unstable material",
          "Replace the need for attendants",
          "Guarantee a straight rescue path"
        ],
        "answer": 1
      },
      {
        "q": "What mistake is common during outage or idle-structure entries?",
        "options": [
          "Using too much lighting",
          "Assuming the empty or idle structure is low hazard",
          "Testing the atmosphere twice",
          "Reviewing the permit"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/confined-space-sewers-wet-wells",
    "label": "Sewer, Wet Well & Utility Vault Confined Space Hazards",
    "short": "Flooding, Gas Migration, Biological Exposure, and Remote Utility Energy",
    "icon": "🕳️",
    "color": "#26A69A",
    "regulation": "Confined-space awareness — sewers, wet wells, vaults, and below-grade utility spaces",
    "audience": "Wastewater crews, utility workers, contractors, inspectors, and emergency responders",
    "minutes": 18,
    "slides": [
      {
        "heading": "Below-Grade Utility Spaces Change Fast",
        "sub": "Sewers, vaults, and wet wells can go from stable to lethal quickly.",
        "body": "These spaces combine atmospheric uncertainty, poor natural ventilation, flooding or inflow potential, biological contamination, electrical or mechanical utility systems, and difficult rescue geometry. Rain, upstream process change, pump operation, and line migration can all change the hazard picture while people are still inside.",
        "list": [
          "Account for inflow, pump status, storm conditions, and connected utility systems before entry.",
          "Do not assume a dry or quiet wet well will stay that way during the task.",
          "Below-grade spaces often have the worst natural ventilation on site."
        ],
        "callout": {
          "label": "RULE",
          "text": "Sewer, wet well, and vault entries demand constant awareness of what can flow, migrate, or energize from outside the immediate work area.",
          "color": "#26A69A"
        }
      },
      {
        "heading": "H₂S, Methane, and Oxygen Deficiency Are Real Hazards Here",
        "sub": "Atmospheric readings can shift with flow, sludge, and disturbance.",
        "body": "Wastewater and utility spaces often contain or generate hydrogen sulfide, methane, carbon monoxide, low oxygen, and odor-fatiguing conditions. Disturbing sludge, opening lines, changing pump cycles, or changing weather can all affect the reading pattern after entry begins.",
        "list": [
          "Use atmospheric testing and continuous monitoring suited to the space and task.",
          "Do not trust smell to warn of H₂S or oxygen-deficient conditions.",
          "Treat monitor alarms and changing flow conditions as immediate stop-work triggers."
        ]
      },
      {
        "heading": "Utility Spaces Carry More Than Atmosphere Hazards",
        "sub": "Electrical, mechanical, and biological risks often overlap.",
        "body": "Vaults and wet wells may contain energized equipment, remote starts, pumps, grinders, valves, debris, sharp hardware, sewage contact, and slippery surfaces. A worker can be exposed to electric shock, sudden movement, contamination, and fall hazards in the same entry.",
        "list": [
          "Coordinate utility isolation and confined-space controls together.",
          "Control contamination exposure with the required hygiene and PPE measures.",
          "Keep body position out of direct line with pumps, valves, and moving utility equipment."
        ]
      },
      {
        "heading": "Remote Conditions Can Control the Space More Than Local Conditions",
        "sub": "What happens upstream or in another room can decide whether entry stays safe.",
        "body": "Storm flow, lift station status, process discharge, generator transfer, line opening, and utility switching can all affect below-grade spaces from far away. This is why communication with the controlling operation is essential before and during the entry.",
        "list": [
          "Treat outside system changes as part of the confined-space hazard picture.",
          "Maintain communication with operations while the entry is open.",
          "Exit and re-evaluate when remote conditions are no longer stable."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Sewer, wet well, and utility-vault entries combine atmosphere, inflow, utility energy, and rescue complexity in one space.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why are sewers, wet wells, and vaults especially variable?",
        "options": [
          "Because they are always wider",
          "Because inflow, gas migration, weather, and remote utility changes can alter them quickly",
          "Because attendants cannot stand outside",
          "Because permits are optional"
        ],
        "answer": 1
      },
      {
        "q": "Why is smell unreliable for H₂S protection?",
        "options": [
          "Because H₂S is always blue",
          "Because odor cannot be trusted to indicate safe atmospheric condition",
          "Because monitors are slower",
          "Because ventilation makes H₂S harmless"
        ],
        "answer": 1
      },
      {
        "q": "What other hazards often overlap in utility spaces?",
        "options": [
          "Only paperwork",
          "Electrical, mechanical, contamination, and slip hazards",
          "Only ladders",
          "Only temperature change"
        ],
        "answer": 1
      },
      {
        "q": "Why is communication with operations important during these entries?",
        "options": [
          "To ask for lunch breaks",
          "Because remote system changes can affect the space",
          "Because it replaces testing",
          "Because it eliminates rescue planning"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/confined-space-hot-work-simops",
    "label": "Hot Work, Coatings & SIMOPS in Confined Spaces",
    "short": "Welding, Grinding, Solvents, Fire Load, and Simultaneous Operations Control",
    "icon": "🔥",
    "color": "#FF7043",
    "regulation": "Confined-space awareness — hot work, coatings, and simultaneous operations",
    "audience": "Welders, mechanics, painters, contractors, attendants, and supervisors",
    "minutes": 20,
    "slides": [
      {
        "heading": "Hot Work Inside a Confined Space Changes Everything",
        "sub": "The task itself can create the atmospheric and ignition hazard.",
        "body": "Welding, cutting, grinding, coating, solvent cleaning, adhesive use, and cure operations can consume oxygen, generate fumes, ignite residue, or create flammable vapor in a confined space that previously tested acceptable. The entry conditions must be re-evaluated around the actual task, not just the empty-space condition.",
        "list": [
          "Do not assume an entry test remains valid after hot work or coating begins.",
          "Task-generated fumes and heat are confined-space hazards, not just job-quality issues.",
          "Coordinate the hot-work permit with the confined-space permit."
        ],
        "callout": {
          "label": "RULE",
          "text": "In confined spaces, the work process can become the hazard source in minutes.",
          "color": "#FF7043"
        }
      },
      {
        "heading": "Ventilation and Fire Watch Have to Match the Real Work",
        "sub": "Generic controls are not enough for a changing task.",
        "body": "A fan pointed at an opening and a fire extinguisher nearby are not automatically sufficient. Ventilation must control fumes where the worker is positioned, and fire watch or thermal monitoring must account for sparks, slag, heated metal, smoldering residue, and hidden combustibles on both sides of the work area.",
        "list": [
          "Place ventilation based on the breathing zone and the ignition hazard path.",
          "Control combustibles, residues, and hidden hot spots before and after the task.",
          "Maintain monitoring long enough to catch delayed ignition or atmospheric rebound."
        ]
      },
      {
        "heading": "Simultaneous Operations Can Defeat Good Intentions",
        "sub": "Another crew can undo the control without realizing it.",
        "body": "Painters, cleaners, line breakers, electricians, scaffold crews, and hot-work crews can all be active around the same confined space during outages and turnarounds. One crew's fan, solvent, valve movement, cable routing, or generator exhaust can affect another crew inside the space. SIMOPS control means no one changes the conditions casually.",
        "list": [
          "Coordinate all work scopes at the boundary before the entry starts.",
          "Stop work when an outside crew changes ventilation, isolation, or ignition conditions.",
          "Use one accountable authority for the entry and adjacent simultaneous work."
        ]
      },
      {
        "heading": "Finish Work Does Not Mean Finish Hazard",
        "sub": "Residual heat, fumes, and coatings can remain after tools are down.",
        "body": "A vessel or pit may remain unsafe after welding or coating stops because oxygen remains displaced, vapors are still evaporating, or hot surfaces continue to ignite hidden residues. The closeout phase requires the same discipline as the startup phase: monitor, ventilate, verify, and only release the space when conditions are genuinely restored.",
        "list": [
          "Continue ventilation and monitoring until readings and conditions are stable.",
          "Do not remove the control boundary just because the arc or grinder is off.",
          "Re-evaluate before sending in a new crew after hot work or coating tasks."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Hot work and SIMOPS inside confined spaces require permit coordination, task-based ventilation, and control of changing ignition conditions.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why does hot work change confined-space risk?",
        "options": [
          "Because sparks look dramatic",
          "Because the task can create fumes, oxygen demand, and ignition hazards",
          "Because it reduces permit requirements",
          "Because it improves ventilation"
        ],
        "answer": 1
      },
      {
        "q": "What must be coordinated with the confined-space permit?",
        "options": [
          "Only lunch breaks",
          "The hot-work permit and adjacent operations",
          "Only the weather report",
          "Only the rescue team's schedule"
        ],
        "answer": 1
      },
      {
        "q": "Why are simultaneous operations dangerous around confined spaces?",
        "options": [
          "They make the shift longer",
          "Another crew can change ventilation, isolation, or ignition conditions",
          "They only affect paperwork",
          "They improve accountability"
        ],
        "answer": 1
      },
      {
        "q": "What should happen after hot work stops?",
        "options": [
          "Release the space immediately",
          "Continue monitoring and ventilation until conditions are restored",
          "Remove all barriers at once",
          "Skip gas testing because the task is done"
        ],
        "answer": 1
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function ConfinedSpacesModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const ConfinedSpacePermitRolesTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[0])
export const ConfinedSpaceAtmosphericTestingTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[1])
export const ConfinedSpaceIsolationBlankingTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[2])
export const ConfinedSpaceAttendantCommunicationsTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[3])
export const ConfinedSpaceRetrievalRescueTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[4])
export const ConfinedSpaceTanksPitsSilosTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[5])
export const ConfinedSpaceSewersWetWellsTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[6])
export const ConfinedSpaceHotWorkSIMOPSTraining = makeModuleComponent(CONFINED_SPACES_PHASE1_MODULES[7])
