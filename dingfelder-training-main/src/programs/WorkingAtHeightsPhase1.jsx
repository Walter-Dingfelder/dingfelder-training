import TrainingModuleShell from './TrainingModuleShell.jsx'

export const WORKING_AT_HEIGHTS_PHASE1_MODULES = 
[
  {
    "path": "/fall-hazard-recognition-exposure-mapping",
    "label": "Fall Hazard Recognition & Exposure Mapping",
    "short": "Seeing where an ordinary task becomes a fall exposure and where the edge actually is",
    "icon": "🧗",
    "color": "#7A5CFF",
    "regulation": "OSHA walking-working surfaces and fall protection awareness — identify exposure before work begins",
    "audience": "All employees, contractors, supervisors, maintenance, and construction or turnaround crews who access elevated areas",
    "minutes": 16,
    "slides": [
      {
        "heading": "Falls Start With Exposure, Not With the Edge",
        "sub": "Workers get hurt when they notice the drop too late.",
        "body": "A fall hazard begins as soon as a person can reach an unprotected edge, opening, unstable surface, or elevated transition. The danger is often created by the work path, the carried load, the body position, or the need to reach around equipment — not just by standing at the edge itself.",
        "list": [
          "Map where people walk, reach, turn, and handle materials.",
          "Look for edges, openings, brittle surfaces, slippery coatings, and changing elevations.",
          "Treat short-duration tasks the same way you treat long jobs if the exposure is the same."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the task can put a worker at elevation without reliable protection, treat it as a fall-protection job before anyone steps into position.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "The Fall Path Matters",
        "sub": "A worker does not need to fall far to be badly injured.",
        "body": "Serious injury depends on what the person strikes, how they rotate, and whether they hit piping, steel, rail, equipment, vehicles, or liquid surfaces on the way down. A low platform over hard equipment can be more dangerous than a taller clear drop because the body may strike multiple objects during the fall.",
        "list": [
          "Check what is below and beside the work area, not only the edge height.",
          "Identify impalement hazards, machinery, hot surfaces, water, pits, and traffic lanes.",
          "Use the full fall path when choosing guardrails, travel restraint, or fall arrest."
        ]
      },
      {
        "heading": "Work Position Creates Hidden Exposure",
        "sub": "Reaching, pulling, drilling, rigging, or opening access panels changes balance.",
        "body": "Tasks that require force or awkward posture can move a worker outside the protected zone. Carrying tools, hoses, sample bottles, hoses, or parts can block visibility and reduce three-point contact. A location that looks safe while standing still may be unsafe once the actual task begins.",
        "list": [
          "Review the body movement required to do the job, not just to arrive there.",
          "Check whether hoses, cords, rigging, or hand tools pull the worker toward the edge.",
          "Stop work if the task cannot be done from a stable, protected position."
        ]
      },
      {
        "heading": "Environmental Conditions Change the Risk",
        "sub": "Wind, rain, frost, dust, heat, and lighting all change fall exposure.",
        "body": "A safe platform can become unsafe when visibility drops, metal becomes slick, insulation breaks loose, or wind catches clothing and materials. Outdoor work and hot process areas can change quickly enough that the original plan is no longer valid by mid-shift.",
        "list": [
          "Reassess elevated work when weather, illumination, or surface condition changes.",
          "Account for overspray, oil, mud, scale, dust, ice, or condensate.",
          "Pause the job when the environment defeats the original control plan."
        ]
      },
      {
        "heading": "Choose the Control Before the Worker Climbs",
        "sub": "Recognition must lead to a control decision.",
        "body": "The safest sequence is to eliminate the exposure, then use passive protection like guardrails or covers, then use travel restraint or work-positioning, and only then rely on personal fall arrest when the job truly requires it. Workers should know before access begins which method controls the task.",
        "list": [
          "Can the job be done from grade, from behind a barrier, or with a tool extension?",
          "Can guardrails, covers, or a protected platform remove the edge exposure?",
          "If personal fall protection is used, verify anchors, clearance, rescue, and user training before starting."
        ]
      }
    ],
    "quiz": [
      {
        "question": "When does a fall hazard begin?",
        "choices": [
          "When a worker can be exposed to an unprotected elevation hazard",
          "Only when both feet are already at the edge",
          "Only above a fixed height regardless of conditions",
          "Only during construction projects"
        ],
        "answer": 0
      },
      {
        "question": "Why is the fall path important?",
        "choices": [
          "Objects and equipment below can increase injury severity",
          "It only matters for outdoor work",
          "It only matters when ladders are used",
          "It does not matter if the platform is wide"
        ],
        "answer": 0
      },
      {
        "question": "What is a common hidden source of fall exposure?",
        "choices": [
          "Reaching and body movement required to perform the task",
          "Reading the permit carefully",
          "Having a second worker nearby",
          "Wearing gloves"
        ],
        "answer": 0
      },
      {
        "question": "Which environmental change should trigger reassessment?",
        "choices": [
          "Rain, wind, poor lighting, or slick surfaces",
          "A different lunch break",
          "A radio battery change",
          "A shift meeting"
        ],
        "answer": 0
      },
      {
        "question": "What control should be preferred before personal fall arrest?",
        "choices": [
          "Elimination, guardrails, or covers",
          "A faster work pace",
          "Working alone to reduce congestion",
          "Only verbal caution"
        ],
        "answer": 0
      },
      {
        "question": "Why are short tasks still important to control?",
        "choices": [
          "Exposure severity does not disappear because the task is brief",
          "Short tasks are automatically exempt",
          "Workers cannot fall during brief jobs",
          "Brief jobs do not need planning"
        ],
        "answer": 0
      },
      {
        "question": "What should be reviewed before anyone climbs?",
        "choices": [
          "The actual control method for the job",
          "Only who brought the tools",
          "Only the time the work started",
          "Only the weather forecast from yesterday"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Recognize the exposure path before work starts and choose a control that matches the real hazard",
          "Falls are mostly random events that cannot be planned for",
          "Harnesses solve every elevated work problem",
          "Only supervisors need to think about fall hazards"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/guardrails-covers-floor-openings-control",
    "label": "Guardrails, Covers & Floor Opening Control",
    "short": "Using passive protection so workers do not depend on perfect balance or constant attention",
    "icon": "🟪",
    "color": "#7A5CFF",
    "regulation": "OSHA walking-working surfaces — guardrails, covers, and opening control",
    "audience": "Operations, maintenance, contractors, warehouse teams, utility crews, and anyone exposed to edges or openings",
    "minutes": 15,
    "slides": [
      {
        "heading": "Passive Protection Is Stronger Than Human Attention",
        "sub": "A protected edge is safer than asking people to remember the edge every second.",
        "body": "Guardrails and properly secured covers prevent falls without depending on perfect worker behavior. They are especially important where multiple people work, visibility is poor, materials are being moved, or the task pulls attention away from walking surfaces.",
        "list": [
          "Use fixed protection wherever the hazard is routine or recurring.",
          "Do not substitute caution tape for real fall protection.",
          "Treat temporary openings with the same seriousness as permanent ones."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never leave an opening exposed just because the work will only take a minute.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Openings Need Positive Control",
        "sub": "A worker may not recognize an opening until they are already committed to the step.",
        "body": "Floor hatches, pits, sumps, manways, trench plates, and removable grating create fall exposure for both workers and vehicles. Controls must prevent entry, prevent cover movement, and clearly identify the hazard to anyone approaching the area.",
        "list": [
          "Secure covers so they cannot slide, tip, or be displaced by traffic.",
          "Mark or label the opening when the hazard is not obvious.",
          "Use barriers when the cover has to be removed for active work."
        ]
      },
      {
        "heading": "Guardrails Must Protect the Real Work Path",
        "sub": "Protection fails when the worker has to lean, reach, or bypass it.",
        "body": "A guardrail that leaves an access gap, allows material handling through an unprotected opening, or forces workers to step outside the protected path is not controlling the work. Layout matters as much as the presence of a rail.",
        "list": [
          "Check ladders, stairs, landings, and transfer points where people change direction.",
          "Ensure gates and removable rails are controlled when opened.",
          "Do not store materials where they force a worker against the edge."
        ]
      },
      {
        "heading": "Temporary Removal Requires Active Planning",
        "sub": "The moment a guardrail or cover is removed, the job changes class.",
        "body": "Inspection, sampling, maintenance, and rigging often require a barrier or cover to be opened. Once protection is removed, workers need a new control method such as alternate barricading, work-positioning, fall arrest, restricted access, and clear task ownership.",
        "list": [
          "Assign who is responsible for the opening while protection is removed.",
          "Prevent unrelated personnel from entering the area.",
          "Restore the permanent protection as soon as the task allows."
        ]
      },
      {
        "heading": "Vehicles and Material Handling Increase Exposure",
        "sub": "Forklifts, carts, hoses, and long materials change the way people move near openings.",
        "body": "An opening may be safe for a single person walking carefully but unsafe for a team moving pallets, hoses, or long parts. Traffic patterns and load handling can push workers toward the hazard or displace temporary protection.",
        "list": [
          "Review pedestrian and vehicle flow near pits, docks, and removable grating.",
          "Keep approach lanes clear so workers are not forced to sidestep toward the opening.",
          "Use spotters or restricted access when material movement crosses the hazard zone."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why are guardrails and covers preferred controls?",
        "choices": [
          "They do not depend on constant worker attention",
          "They are faster to ignore",
          "They only matter outdoors",
          "They replace all other planning automatically"
        ],
        "answer": 0
      },
      {
        "question": "What is not an adequate substitute for real protection?",
        "choices": [
          "Caution tape by itself",
          "A secured cover",
          "A rated barrier",
          "A controlled gate"
        ],
        "answer": 0
      },
      {
        "question": "What must a cover do besides sit over the opening?",
        "choices": [
          "Stay secured against movement or displacement",
          "Look bright enough to notice",
          "Be light enough for one hand",
          "Remain unlocked for convenience"
        ],
        "answer": 0
      },
      {
        "question": "When does the job change class?",
        "choices": [
          "When a guardrail or cover is removed",
          "When the shift changes",
          "When the weather improves",
          "When the toolbox talk ends"
        ],
        "answer": 0
      },
      {
        "question": "What is a common design failure for guardrails?",
        "choices": [
          "They do not protect the actual work path or transfer point",
          "They are made of metal",
          "They are painted a bright color",
          "They are installed permanently"
        ],
        "answer": 0
      },
      {
        "question": "Why should traffic be reviewed near openings?",
        "choices": [
          "Loads and vehicles can push workers into exposure zones",
          "Traffic has no effect on fall hazards",
          "Only pedestrians matter",
          "It is only relevant in warehouses"
        ],
        "answer": 0
      },
      {
        "question": "What should happen after temporary opening work is complete?",
        "choices": [
          "Permanent protection should be restored promptly",
          "The opening can stay exposed if marked",
          "Workers should remember the hazard",
          "Only the next shift needs to know"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Passive protection is strongest when it controls the real path and remains secure during the work",
          "Guardrails are mostly visual reminders",
          "Openings are safe if people are careful",
          "Only elevated roofs need covers"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/portable-fixed-ladders-three-point-contact",
    "label": "Portable & Fixed Ladders / Three-Point Contact",
    "short": "Using ladders for access instead of turning them into unstable work platforms",
    "icon": "🪜",
    "color": "#7A5CFF",
    "regulation": "OSHA ladder safety and access fundamentals",
    "audience": "All employees and contractors who use step ladders, straight ladders, or fixed ladders for routine access",
    "minutes": 15,
    "slides": [
      {
        "heading": "Ladders Are Access Tools First",
        "sub": "Most ladder incidents begin when the ladder is asked to do a platform’s job.",
        "body": "Ladders are designed to move a person from one level to another or support light, short-duration work within strict body-position limits. Reaching too far, carrying awkward loads, standing too high, or using the wrong ladder type changes a simple access tool into an unstable fall hazard.",
        "list": [
          "Choose the ladder that matches height, load, environment, and electrical exposure.",
          "Use a platform, scaffold, or lift when the task requires side reach, force, or both hands for extended work.",
          "Inspect the ladder before every use."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the job needs a work platform, do not force a ladder to act like one.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Set the Ladder Before You Climb",
        "sub": "A good ladder becomes unsafe when it is placed on the wrong base or at the wrong angle.",
        "body": "Surface condition, footing, angle, top support, and traffic exposure all matter. Straight and extension ladders need stable placement and secure support. Step ladders must be fully opened and locked. Fixed ladders require safe landings and clear access points.",
        "list": [
          "Do not set ladders on debris, slick surfaces, unstable soil, or movable objects.",
          "Keep bases clear of doors, vehicles, hoses, and pedestrian traffic unless controlled.",
          "Verify the top support can resist movement and side load."
        ]
      },
      {
        "heading": "Three-Point Contact Protects Balance",
        "sub": "Hands and feet need constant control during ascent and descent.",
        "body": "Climbing with tools, hoses, sample bottles, or parts in hand defeats body control. Three-point contact means keeping either two hands and one foot or two feet and one hand on the ladder while moving. It is a balance rule, not just a slogan.",
        "list": [
          "Raise tools by line or carry them in a way that does not break contact.",
          "Face the ladder while ascending or descending.",
          "Move deliberately instead of rushing the climb."
        ]
      },
      {
        "heading": "Body Position Defines Stability",
        "sub": "The ladder becomes unstable when the worker’s center of mass leaves the rails.",
        "body": "Overreaching and leaning outside the side rails create the classic ladder tip-over. Many workers stay on the ladder instead of climbing down and repositioning because the task looks almost reachable. That last few inches is where many incidents begin.",
        "list": [
          "Keep the belt-buckle area between the rails.",
          "Climb down and reposition instead of twisting or side reaching.",
          "Do not stand on top caps, top steps, or other prohibited positions."
        ]
      },
      {
        "heading": "Fixed Ladders Need Safe Transition Zones",
        "sub": "Many injuries occur while getting on or off the ladder.",
        "body": "Landings, roof hatches, cages, rails, walk-through posts, and adjacent piping can complicate transition from the ladder to the structure. Workers need a stable handhold and a clear transfer area when stepping on or off at elevation.",
        "list": [
          "Check that the landing area is clear, dry, and not blocked by stored material.",
          "Open hatches and gates in a controlled way that does not push the worker off balance.",
          "Do not use fixed ladders that require awkward twisting into the landing."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is the main purpose of a ladder?",
        "choices": [
          "Access between elevations, with only limited task use",
          "To replace all platforms and lifts",
          "To store tools at height",
          "To support side loading"
        ],
        "answer": 0
      },
      {
        "question": "What is a sign the wrong equipment was chosen?",
        "choices": [
          "The task requires side reach, force, or long-duration two-handed work",
          "The ladder is the correct height",
          "The area is clean",
          "The worker inspected the ladder"
        ],
        "answer": 0
      },
      {
        "question": "What defeats three-point contact?",
        "choices": [
          "Climbing with tools or materials in the hands",
          "Facing the ladder",
          "Moving deliberately",
          "Inspecting the landing"
        ],
        "answer": 0
      },
      {
        "question": "How should a worker respond to overreach?",
        "choices": [
          "Climb down and reposition the ladder",
          "Lean farther but carefully",
          "Stand on the top cap",
          "Ask a coworker to hold the ladder while leaning"
        ],
        "answer": 0
      },
      {
        "question": "What should be checked before placement?",
        "choices": [
          "Surface, angle, support, and traffic exposure",
          "Only the color of the ladder",
          "Only the worker’s gloves",
          "Only the time of day"
        ],
        "answer": 0
      },
      {
        "question": "Where do many fixed-ladder injuries happen?",
        "choices": [
          "At the transition onto or off of the landing",
          "Only in the middle of the ladder",
          "Only during inspection",
          "Only at ground level"
        ],
        "answer": 0
      },
      {
        "question": "What body-position rule helps prevent ladder tip-over?",
        "choices": [
          "Keep your body centered between the rails",
          "Turn sideways for better reach",
          "Carry tools in one hand",
          "Climb faster to reduce exposure"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Use ladders for access, maintain three-point contact, and reposition instead of overreaching",
          "A ladder is safe whenever someone holds it",
          "Only extension ladders are hazardous",
          "The job decides the ladder, not the other way around"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/scaffolds-temporary-elevated-work-platforms",
    "label": "Scaffolds & Temporary Elevated Work Platforms",
    "short": "Treating temporary elevated access as engineered support, not as improvised standing space",
    "icon": "🏗️",
    "color": "#7A5CFF",
    "regulation": "OSHA scaffold and temporary platform awareness",
    "audience": "Maintenance crews, contractors, turnarounds, outages, construction, coatings, mechanical, and inspection teams",
    "minutes": 16,
    "slides": [
      {
        "heading": "Temporary Platforms Need Real Planning",
        "sub": "Just because a platform is temporary does not mean the load and stability are temporary.",
        "body": "Scaffolds and temporary elevated work platforms carry people, tools, and material above grade, equipment, or process areas. They have to be erected, altered, loaded, and accessed in a controlled way because small errors in support, planking, or loading can become catastrophic quickly.",
        "list": [
          "Use only designed and authorized scaffold systems or approved elevated work platforms.",
          "Confirm who is allowed to erect, modify, inspect, and release the scaffold for use.",
          "Do not improvise platforms from pallets, loose planks, or mixed components."
        ],
        "callout": {
          "label": "CRITICAL",
          "text": "A temporary platform is still a structural system. Treat it like one.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Load Paths Matter",
        "sub": "People often notice platform area before they notice what the platform is standing on.",
        "body": "The support beneath the scaffold — soil, concrete, grating, suspended structure, or adjacent steel — has to carry the real load. Weather, washdown, excavation, vibration, or changed work scope can reduce support quality after the platform is erected.",
        "list": [
          "Verify base condition, mudsills, plates, ties, and foundation stability.",
          "Reassess after weather, nearby excavation, or structural changes.",
          "Keep material storage within the platform’s designed load limits."
        ]
      },
      {
        "heading": "Access and Edge Protection Must Stay Intact",
        "sub": "A scaffold becomes dangerous when workers climb the frame or bypass the protected route.",
        "body": "Safe scaffold use requires proper access, complete decking where intended, guardrails where required, and a clear working surface. Missing planks, partial decks, ad hoc ladders, and open ends are common failure points because crews normalize them under schedule pressure.",
        "list": [
          "Use built-in or approved access instead of climbing braces or frames.",
          "Do not remove planks or rails without authorization and immediate alternate controls.",
          "Inspect the work level before each shift and after any alteration."
        ]
      },
      {
        "heading": "Weather and Process Conditions Can Change the Platform",
        "sub": "Wind, heat, overspray, sparks, and line vibration all change risk.",
        "body": "Scaffolds near furnaces, process units, moving equipment, washdown, or outdoor wind exposure can become slick, unstable, or crowded with temporary equipment. Conditions that were acceptable in the morning may not be acceptable after operations change or weather moves in.",
        "list": [
          "Stop and reassess when surfaces become slick or when winds affect balance or materials.",
          "Protect the platform from hot work slag, chemical attack, and process discharge where needed.",
          "Keep housekeeping tight to avoid trip hazards at elevation."
        ]
      },
      {
        "heading": "Alteration Control Prevents Hidden Failure",
        "sub": "Many incidents occur after someone changes a scaffold “just enough” to finish the task.",
        "body": "Unauthorized removal of braces, planks, ties, toe boards, or access parts can undermine the whole system. The platform may still look usable while its safety margin has disappeared. Alterations and releases must stay under the responsible person’s control.",
        "list": [
          "Tag or identify the scaffold according to site practice and status.",
          "Do not move rolling or mobile units with workers on them unless designed and permitted for that operation.",
          "Report damage or unauthorized changes immediately and remove the platform from service when needed."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why must temporary platforms be treated seriously?",
        "choices": [
          "They are structural systems carrying real loads at elevation",
          "They are safe because they are temporary",
          "They only matter during construction",
          "They do not need inspection"
        ],
        "answer": 0
      },
      {
        "question": "What is an unacceptable platform practice?",
        "choices": [
          "Using pallets or loose planks as improvised standing space",
          "Using an approved scaffold",
          "Inspecting after alteration",
          "Checking base condition"
        ],
        "answer": 0
      },
      {
        "question": "What should be verified beneath the scaffold?",
        "choices": [
          "The support and load path carrying the platform",
          "Only the platform color",
          "Only the worker count",
          "Only the hand tools"
        ],
        "answer": 0
      },
      {
        "question": "What is a common access failure?",
        "choices": [
          "Climbing braces or bypassing approved access",
          "Using built-in access",
          "Inspecting the work level",
          "Maintaining guardrails"
        ],
        "answer": 0
      },
      {
        "question": "Which change should trigger reassessment?",
        "choices": [
          "Wind, overspray, heat, washdown, or vibration",
          "A different lunch order",
          "A badge scan",
          "A radio call"
        ],
        "answer": 0
      },
      {
        "question": "Why are unauthorized alterations dangerous?",
        "choices": [
          "They can remove the system’s hidden safety margin",
          "They make the scaffold stronger",
          "They are required for fast jobs",
          "They only affect appearance"
        ],
        "answer": 0
      },
      {
        "question": "What should happen if a scaffold is damaged or altered without approval?",
        "choices": [
          "Remove it from service and report it",
          "Keep using it carefully",
          "Only tell the next shift",
          "Wait until the job ends"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Temporary elevated access still requires engineered support, inspection, and controlled use",
          "Only permanent platforms need planning",
          "Scaffolds are safe if they look stable",
          "Weather does not affect scaffold risk"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/personal-fall-arrest-harness-basics",
    "label": "Personal Fall Arrest Systems & Harness Basics",
    "short": "Understanding what a harness can and cannot do before the worker leaves the protected zone",
    "icon": "🦺",
    "color": "#7A5CFF",
    "regulation": "Fall arrest awareness — full body harness, connection devices, and system limits",
    "audience": "Workers and supervisors who use personal fall arrest, restraint, or positioning systems",
    "minutes": 15,
    "slides": [
      {
        "heading": "A Harness Is One Part of a System",
        "sub": "Wearing gear is not the same thing as having fall protection.",
        "body": "A personal fall arrest system only works when the harness, lanyard or self-retracting device, anchorage, connector, and clearance all function together. A worker can be fully dressed in PPE and still unprotected if any one part of the system is wrong for the job.",
        "list": [
          "Verify the complete system, not just the harness itself.",
          "Different jobs may require arrest, restraint, or positioning instead of interchangeable gear choices.",
          "Use equipment that matches the manufacturer’s instructions and site rules."
        ],
        "callout": {
          "label": "RULE",
          "text": "Do not treat personal fall protection as a clothing item. It is a connected system with strict limits.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Inspect Before Use and After Damage",
        "sub": "Webbing, stitching, connectors, and hardware must all be serviceable.",
        "body": "Cuts, burns, chemical damage, UV degradation, missing labels, bent hardware, and damaged gates can compromise performance long before the gear “looks” destroyed. Workers need to inspect before every use and remove suspect equipment immediately.",
        "list": [
          "Check labels, buckles, D-rings, stitching, hooks, and connectors.",
          "Remove from service gear involved in a fall or suspected overload unless properly evaluated under site rules.",
          "Do not keep damaged equipment in circulation just because replacements are not convenient."
        ]
      },
      {
        "heading": "Fit and Adjustment Affect Survival",
        "sub": "Loose or misrouted gear can injure the worker even if the fall is arrested.",
        "body": "A full body harness has to fit the user and be adjusted correctly so the body remains supported through the pelvis, shoulders, and legs during loading. Twisted straps, loose leg connections, and wrong attachment points create secondary injury risk and poor post-fall suspension position.",
        "list": [
          "Put the harness on the same way every time and perform a self-check before exposure.",
          "Verify the correct dorsal or approved attachment point for the intended system.",
          "Do not use body belts for fall arrest."
        ]
      },
      {
        "heading": "Connection Devices Have Different Behaviors",
        "sub": "Shock-absorbing lanyards, SRLs, and restraint lines do not solve the same problem.",
        "body": "The type of connector changes free-fall distance, arrest force, worker movement, and clearance needs. A short restraint setup may prevent the worker from reaching the edge at all. An arrest setup may stop the fall but still require more clear distance below. Choosing the wrong device can create either a strike hazard or a false sense of protection.",
        "list": [
          "Know whether the system is preventing the fall or arresting it after it starts.",
          "Avoid tying off in ways that add unnecessary free-fall or swing-fall exposure.",
          "Use manufacturer-approved connections and compatible hardware."
        ]
      },
      {
        "heading": "Fall Arrest Requires Rescue Planning",
        "sub": "Stopping the fall is not the end of the emergency.",
        "body": "After the worker is suspended, time, body position, access, and communication matter. A crew that can arrest the fall but cannot reach or recover the worker quickly is still exposing that worker to severe harm. Rescue planning has to exist before the system is used.",
        "list": [
          "Know who performs rescue, what equipment is used, and how access is achieved.",
          "Do not rely on calling 911 as the entire rescue plan for every work location.",
          "Practice or review the recovery method for complex or remote elevated work."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What makes a personal fall arrest setup effective?",
        "choices": [
          "The complete system working together",
          "Only wearing a harness",
          "Only choosing a bright-colored lanyard",
          "Only tightening the chest strap"
        ],
        "answer": 0
      },
      {
        "question": "What should happen to gear that may be damaged?",
        "choices": [
          "It should be removed from service and evaluated or replaced",
          "It should be used carefully",
          "It should be saved for visitors",
          "It should only be checked after the shift"
        ],
        "answer": 0
      },
      {
        "question": "Why does harness fit matter?",
        "choices": [
          "Poor fit can increase injury and suspension problems",
          "Fit only affects comfort",
          "Fit matters only for supervisors",
          "Fit does not matter if the anchor is strong"
        ],
        "answer": 0
      },
      {
        "question": "What is the difference between restraint and arrest?",
        "choices": [
          "Restraint prevents reaching the edge; arrest stops a fall after it starts",
          "They are identical",
          "Arrest requires no clearance",
          "Restraint is only for construction"
        ],
        "answer": 0
      },
      {
        "question": "Why are incompatible connections dangerous?",
        "choices": [
          "They can change loading and system performance in unsafe ways",
          "They only affect appearance",
          "They make rescue easier",
          "They are acceptable in emergencies"
        ],
        "answer": 0
      },
      {
        "question": "What must exist before the worker relies on fall arrest?",
        "choices": [
          "A rescue plan",
          "A faster production target",
          "A second lanyard color",
          "A longer break schedule"
        ],
        "answer": 0
      },
      {
        "question": "What attachment point should be used?",
        "choices": [
          "The correct approved point for the intended system",
          "Any loop on the harness",
          "Only the chest strap",
          "Any nearby belt"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "A harness is only one part of a controlled fall-protection system",
          "Wearing any harness guarantees safety",
          "Inspection matters less than speed",
          "Rescue can be figured out after a fall"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/anchor-points-swing-fall-clearance",
    "label": "Anchor Points, Swing Fall & Clearance",
    "short": "Choosing tie-off locations that actually control the fall path instead of just meeting a distance to steel",
    "icon": "🪝",
    "color": "#7A5CFF",
    "regulation": "Fall arrest anchorage and clearance awareness",
    "audience": "Workers, supervisors, planners, and contractors who choose or approve tie-off locations",
    "minutes": 15,
    "slides": [
      {
        "heading": "Not Every Strong Point Is a Safe Anchor",
        "sub": "A beam, handrail, pipe, or conduit may look solid but still be the wrong tie-off point.",
        "body": "Anchorage has to support the intended system and load path, not just hold something static. Workers often clip to the nearest steel without considering edge sharpness, routing, clearance, or what the structure is designed to carry. Visual convenience is not the same as a valid anchor selection.",
        "list": [
          "Use designated or approved anchor points whenever available.",
          "Do not tie off to handrails, process piping, conduit, or other unsuitable members unless specifically engineered and approved.",
          "Check the route of the lanyard or SRL for sharp edges and obstructions."
        ],
        "callout": {
          "label": "CRITICAL",
          "text": "The nearest clip point may create the worst fall path.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Clearance Must Be Calculated, Not Assumed",
        "sub": "A system can be worn correctly and still allow the worker to strike below.",
        "body": "Free-fall distance, device deceleration, worker height, harness stretch, connector length, and safety margin all contribute to the total clearance needed. Without enough clear distance below, the system may arrest the fall too late or after the worker strikes steel, equipment, or grade.",
        "list": [
          "Know what is below the worker before approving the tie-off point.",
          "Use the actual device characteristics and manufacturer guidance.",
          "Recalculate when the worker moves to a different elevation or anchor position."
        ]
      },
      {
        "heading": "Swing Fall Turns Side Exposure Into Impact",
        "sub": "Being tied off does not prevent side-to-side motion toward structure.",
        "body": "When a worker moves laterally away from the anchor, a fall can create pendulum motion that swings the body into steel, piping, walls, tanks, or equipment. Many workers think tied-off means fully protected, but swing-fall injury can be severe even when the vertical drop is arrested.",
        "list": [
          "Keep the anchor as directly overhead or in line with the work as possible.",
          "Limit side travel and relocate the anchor when the work path shifts.",
          "Review nearby strike hazards before allowing the task to continue."
        ]
      },
      {
        "heading": "Edge Routing Can Destroy the System",
        "sub": "Sharp edges and abrasion are part of the tie-off decision.",
        "body": "Lanyards and lifelines routed over steel edges, grating, concrete corners, or machinery may be cut, damaged, or loaded differently during a fall. A seemingly acceptable anchor becomes unsafe when the path between the worker and the anchor crosses an uncontrolled edge.",
        "list": [
          "Protect or reroute the line when sharp-edge exposure exists.",
          "Use equipment specifically rated for the application when required by site rules and manufacturer guidance.",
          "Do not ignore friction, pinch points, or moving equipment along the line path."
        ]
      },
      {
        "heading": "Tie-Off Planning Changes With the Task",
        "sub": "As the worker moves, the safe anchor may change too.",
        "body": "Long jobs on roofs, platforms, structures, vessels, and elevated equipment often involve multiple positions. Anchor strategy has to move with the work so workers are not tempted to stay clipped into a poor location just to avoid reconnecting.",
        "list": [
          "Plan anchor transitions and movement before exposure begins.",
          "Coordinate tie-off sequences so workers stay protected during relocation.",
          "Stop and revise the plan when the approved anchor path no longer matches the task."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why is the nearest clip point not always acceptable?",
        "choices": [
          "It may create an unsafe load path, poor clearance, or swing-fall exposure",
          "It is always the best option",
          "Any steel is a valid anchor",
          "Distance to the point is the only factor"
        ],
        "answer": 0
      },
      {
        "question": "What must be checked below the worker?",
        "choices": [
          "Total clearance and strike hazards",
          "Only floor color",
          "Only another employee",
          "Only the weather"
        ],
        "answer": 0
      },
      {
        "question": "What causes swing fall?",
        "choices": [
          "Lateral movement away from the anchor",
          "Standing still beneath the anchor",
          "Using a harness correctly",
          "Inspecting the lanyard"
        ],
        "answer": 0
      },
      {
        "question": "Why are sharp edges important?",
        "choices": [
          "They can damage or cut the connection path during a fall",
          "They only affect housekeeping",
          "They matter only for ropes in construction",
          "They improve stability"
        ],
        "answer": 0
      },
      {
        "question": "How can swing-fall risk be reduced?",
        "choices": [
          "Keep the anchor overhead or in line with the work and limit side travel",
          "Move farther sideways for comfort",
          "Tie off to a handrail closer to the edge",
          "Ignore nearby structures"
        ],
        "answer": 0
      },
      {
        "question": "When should clearance be recalculated?",
        "choices": [
          "When the worker, device, or anchor position changes",
          "Only once when the project starts",
          "Never if the harness fits",
          "Only after an incident"
        ],
        "answer": 0
      },
      {
        "question": "What should happen on long tasks with changing positions?",
        "choices": [
          "Anchor transitions should be planned before exposure begins",
          "Workers should stay clipped to the first anchor regardless of movement",
          "Only supervisors need to move anchors",
          "The tie-off point never changes"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Anchor choice must control clearance, swing fall, and edge routing — not just provide something to clip to",
          "Any strong-looking point is enough",
          "Clearance is mostly a paperwork issue",
          "Side travel does not matter once tied off"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/aerial-lifts-mewps-basket-work",
    "label": "Aerial Lifts / MEWPs & Basket Work",
    "short": "Using boom lifts and scissor lifts as controlled work platforms instead of mobile fall hazards",
    "icon": "🚜",
    "color": "#7A5CFF",
    "regulation": "Aerial lift and mobile elevating work platform awareness",
    "audience": "Operators, maintenance crews, contractors, spotters, supervisors, and employees working around lifts",
    "minutes": 16,
    "slides": [
      {
        "heading": "A Lift Is a Platform and a Vehicle",
        "sub": "Aerial lifts add stability, travel, overhead, and fall-protection decisions at the same time.",
        "body": "Boom lifts, scissor lifts, and other mobile elevating work platforms can reduce ladder exposure, but they introduce different failure modes. Ground condition, overhead obstructions, operator movement, basket loading, and surrounding traffic all affect whether the lift stays a safe platform or becomes a tip-over or ejection hazard.",
        "list": [
          "Verify the equipment type fits the task, height, reach, and terrain.",
          "Keep operator training, inspections, and manufacturer limitations in view.",
          "Treat nearby traffic and pedestrians as part of the work area."
        ],
        "callout": {
          "label": "RULE",
          "text": "Use the lift within its design envelope. Do not force reach, height, or travel the machine was not built for.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Ground and Surface Conditions Control Stability",
        "sub": "A level-looking surface can still fail under load or movement.",
        "body": "Soft shoulders, trench edges, grating, covers, ramps, debris, potholes, and wet surfaces can affect tire loading and machine stability. The risk grows when the platform is elevated or when the machine is driven in a raised position under conditions it was not designed to handle.",
        "list": [
          "Inspect the travel and setup path before elevating.",
          "Respect slope, load, and travel limitations from the manufacturer.",
          "Keep clear of drop-offs, unstable shoulders, and underground void concerns."
        ]
      },
      {
        "heading": "The Basket Is Not a Climbing Structure",
        "sub": "Many ejections happen when workers try to gain a few more inches.",
        "body": "Standing on rails, climbing out onto structure, leaning hard against guardrails, or using planks and ladders inside the basket defeats the lift’s design. The machine may be stable while the worker’s body position is not, and sudden movement can eject a person even without a tip-over.",
        "list": [
          "Keep both feet on the basket floor.",
          "Do not bridge from the platform to adjacent structure unless site rules and equipment design specifically permit it.",
          "Reposition the machine instead of climbing on the basket."
        ]
      },
      {
        "heading": "Overhead and Nearby Hazards Must Be Mapped",
        "sub": "Aerial work changes the worker’s relationship to power lines, steel, piping, and structures.",
        "body": "Operators need to track crushing hazards, electrical approach limits, pipe racks, vessel nozzles, cable trays, lighting, and roof or structural steel while moving the basket. Spotters and communication become especially important where visibility is blocked or where the path is tight.",
        "list": [
          "Maintain electrical separation and follow site rules near energized systems.",
          "Watch for pinch points between the basket and fixed structure.",
          "Use clear communication when more than one person influences lift movement."
        ]
      },
      {
        "heading": "Load, Wind, and Travel Choices Affect the Outcome",
        "sub": "Tools, materials, weather, and movement all change machine behavior.",
        "body": "Carrying material, catching wind on sheet goods, or driving while elevated can alter stability quickly. Workers need to know when to lower the platform, remove material, reposition, or suspend use because the machine is outside its safe operating condition.",
        "list": [
          "Keep platform load within limits including workers, tools, and materials.",
          "Do not continue elevated work in conditions that exceed wind or weather limits.",
          "Lower and reset the machine when travel or reach decisions change the stability picture."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why are aerial lifts different from ladders?",
        "choices": [
          "They are both work platforms and mobile machines with stability limits",
          "They eliminate all fall hazards",
          "They never need inspection",
          "They can be used the same way in every environment"
        ],
        "answer": 0
      },
      {
        "question": "What should be reviewed before elevating?",
        "choices": [
          "Ground, travel path, slope, and surface condition",
          "Only the task duration",
          "Only the weather app",
          "Only the basket color"
        ],
        "answer": 0
      },
      {
        "question": "What is an unsafe basket behavior?",
        "choices": [
          "Standing on rails or using a ladder inside the basket",
          "Keeping feet on the floor",
          "Repositioning the machine",
          "Using a spotter where needed"
        ],
        "answer": 0
      },
      {
        "question": "Why are overhead hazards important?",
        "choices": [
          "The basket can be crushed or moved into electrical or structural contact",
          "They only matter outdoors",
          "They do not affect boom lifts",
          "They are covered by the tires"
        ],
        "answer": 0
      },
      {
        "question": "What should happen when reach is no longer adequate?",
        "choices": [
          "Reposition the machine instead of climbing or bridging",
          "Lean farther out of the basket",
          "Stand on a rail",
          "Have a coworker push the basket"
        ],
        "answer": 0
      },
      {
        "question": "Why do load and wind matter?",
        "choices": [
          "They change stability and control of the machine",
          "They only affect comfort",
          "They matter only for scissor lifts",
          "They are ignored indoors"
        ],
        "answer": 0
      },
      {
        "question": "When should the platform be lowered and reset?",
        "choices": [
          "When travel, reach, load, or conditions put the machine outside its safe use envelope",
          "Only at the end of the shift",
          "Never if the task is urgent",
          "Only when supervision arrives"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Aerial lifts reduce ladder exposure only when ground, movement, load, and worker position stay within the machine’s design limits",
          "A lift is safe whenever it reaches the job",
          "Basket rails are meant for standing",
          "Weather has little effect once elevated"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/roof-work-fragile-surfaces-weather",
    "label": "Roof Work, Fragile Surfaces & Weather Exposure",
    "short": "Managing edge exposure, skylights, brittle panels, and weather when elevated work moves onto roofs and structures",
    "icon": "🏠",
    "color": "#7A5CFF",
    "regulation": "Fall prevention awareness for roofs, fragile surfaces, and weather-exposed work",
    "audience": "Maintenance, contractors, HVAC, roofing, inspection, and facility personnel accessing roofs or elevated exterior structures",
    "minutes": 15,
    "slides": [
      {
        "heading": "Roofs Create Wide-Area Fall Exposure",
        "sub": "A roof can feel like flat ground while still containing multiple hidden fall paths.",
        "body": "Edges, skylights, roof hatches, brittle panels, slope changes, wet membrane, loose gravel, and hidden penetrations can all create serious hazards. Because the area looks open and walkable, workers often relax their guard and travel farther from the controlled path than planned.",
        "list": [
          "Control access routes before beginning roof work.",
          "Treat skylights and translucent panels as openings unless specifically protected and rated otherwise.",
          "Review where materials, hoses, and cords will be staged so they do not create trip exposure near edges."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never assume a skylight or roof panel will support a person just because it supports weather.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Weather Can Change the Job in Minutes",
        "sub": "Wind and slick surfaces erase safety margins quickly.",
        "body": "Rain, frost, snow, dew, heat shimmer, glare, and gusting wind can change footing, balance, and material handling. Roof work that was manageable at sunrise may be unsafe by midday or after a passing weather front.",
        "list": [
          "Stop and reassess when wind, precipitation, or visibility changes.",
          "Control lightweight material and sheet goods that can catch wind.",
          "Do not continue roof access on surfaces that no longer provide secure footing."
        ]
      },
      {
        "heading": "Fragile Surfaces Need Positive Identification",
        "sub": "Workers may not recognize brittleness until after the break.",
        "body": "Aged panels, skylights, translucent roofing, corroded grating, deteriorated covers, and damaged roof sections can fail without warning under body weight. Marking, barricading, travel controls, and alternate access routes help prevent workers from stepping into failure zones.",
        "list": [
          "Identify brittle or suspect surfaces during the pre-job walkdown.",
          "Do not place tools or material on surfaces that may already be compromised.",
          "Use covers, barriers, or controlled routes where fragile areas are present."
        ]
      },
      {
        "heading": "Edges and Access Points Need Discipline",
        "sub": "Hatches, ladders, parapets, and roof transitions create concentrated exposure.",
        "body": "Getting on and off the roof, moving through hatches, crossing parapet gaps, and working near edge-mounted equipment often create the highest-risk moments. Many incidents occur during material transfer or setup, before the main task even begins.",
        "list": [
          "Control the landing area at the roof access point.",
          "Keep workers from crowding hatches, ladders, and edge transitions.",
          "Move materials in a way that does not pull workers toward the edge."
        ]
      },
      {
        "heading": "The Plan Must Include Getting Off the Roof Safely",
        "sub": "A controlled finish is part of the job, not an afterthought.",
        "body": "End-of-job fatigue, changing weather, and carrying leftover material can increase exposure during descent. The closeout plan should address equipment retrieval, temporary protection removal, and whether conditions are still acceptable for exit.",
        "list": [
          "Maintain the same controls during demobilization that existed during active work.",
          "Do not remove protection before the last exposed worker is out of the zone.",
          "Pause the closeout if weather or footing worsens during the job."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why can roofs be deceptive?",
        "choices": [
          "They appear walkable while hiding edges, openings, and brittle areas",
          "They are automatically safer than platforms",
          "They only create hazards during storms",
          "They are controlled by ladders alone"
        ],
        "answer": 0
      },
      {
        "question": "How should skylights be treated?",
        "choices": [
          "As openings unless specifically protected and rated otherwise",
          "As safe walking surfaces",
          "As storage areas for tools",
          "As warning devices"
        ],
        "answer": 0
      },
      {
        "question": "What should trigger a roof-work reassessment?",
        "choices": [
          "Wind, rain, frost, glare, or visibility changes",
          "A radio battery change",
          "A normal break period",
          "A different supervisor"
        ],
        "answer": 0
      },
      {
        "question": "Why must fragile surfaces be identified early?",
        "choices": [
          "They can fail without warning under load",
          "They are always obvious from appearance",
          "They only matter for old buildings",
          "They affect only roofers"
        ],
        "answer": 0
      },
      {
        "question": "When do many roof incidents happen?",
        "choices": [
          "During access, setup, and material transfer near edges",
          "Only in the middle of the task",
          "Only during storms",
          "Only when roofs are steep"
        ],
        "answer": 0
      },
      {
        "question": "What should happen during closeout?",
        "choices": [
          "Controls must remain until the last exposed worker is safely out",
          "Protection can be removed early to save time",
          "Only tools matter during descent",
          "Weather no longer matters at the end"
        ],
        "answer": 0
      },
      {
        "question": "What is a bad assumption about a translucent panel or skylight?",
        "choices": [
          "That it will hold a worker just because it is part of the roof",
          "That it needs marking",
          "That it can create exposure",
          "That it should be controlled"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Roof work needs active control of edges, fragile surfaces, weather, and access transitions from start to finish",
          "Roofs are basically flat ground once you get on them",
          "Only roofing contractors need fall planning",
          "Weather matters less on roofs than on ground"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/fall-rescue-suspension-trauma-response",
    "label": "Rescue Planning, Suspension Trauma & Post-Fall Response",
    "short": "Recognizing that stopping the fall is only the first part of protecting the worker",
    "icon": "🆘",
    "color": "#7A5CFF",
    "regulation": "Post-fall rescue and suspension awareness",
    "audience": "Workers, supervisors, attendants, emergency responders, and planners for elevated work",
    "minutes": 15,
    "slides": [
      {
        "heading": "Arrested Does Not Mean Safe",
        "sub": "A fallen worker may still face life-threatening danger while suspended.",
        "body": "After a fall is stopped, the worker may be injured, unconscious, hanging in a poor body position, or unreachable from the ground. Suspension, restricted blood flow, panic, airway compromise, environmental exposure, and secondary hazards can quickly turn a survivable fall into a fatality.",
        "list": [
          "Treat every arrested fall as a rescue emergency.",
          "Plan how the worker will be reached, stabilized, and recovered before the job starts.",
          "Do not assume outside emergency services can solve every elevated recovery fast enough."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "A fall-protection system is incomplete without a realistic rescue plan.",
          "color": "#7A5CFF"
        }
      },
      {
        "heading": "Rescue Planning Must Match the Location",
        "sub": "The recovery method for a roof edge is not the same as the method for a pipe rack or vessel.",
        "body": "Access, height, nearby structure, process hazards, weather, and available equipment determine whether rescue uses ladders, aerial lifts, pre-rigged systems, lowering devices, or on-site emergency teams. A generic statement like “call 911” does not explain how the worker is reached or protected during recovery.",
        "list": [
          "Assign roles, equipment, and communication methods before exposure begins.",
          "Confirm rescue access is not blocked by process equipment, locked gates, or changing conditions.",
          "Coordinate with site emergency response where the job exceeds crew-only capability."
        ]
      },
      {
        "heading": "Suspension Trauma Is Time-Sensitive",
        "sub": "The body does not tolerate hanging motionless well.",
        "body": "A suspended worker may become faint, disoriented, or medically compromised as circulation and breathing are affected. The exact timeline varies, but delay is dangerous. Prompt recovery and medical evaluation are essential after suspension or a significant fall event.",
        "list": [
          "Keep communication with the suspended worker if they are responsive.",
          "Move quickly within the rescue plan instead of improvising under stress.",
          "Treat post-fall medical evaluation as part of the incident response."
        ]
      },
      {
        "heading": "Scene Hazards Continue During Rescue",
        "sub": "The rescue team can become the second casualty if the area remains uncontrolled.",
        "body": "The worker may be hanging near electrical systems, traffic, hot surfaces, process piping, rotating equipment, or unstable structure. Rescue must control those hazards first or in parallel, otherwise the recovery attempt can create a second emergency.",
        "list": [
          "Stabilize the area, stop traffic, isolate hazards, and protect responders.",
          "Do not rush rescuers into the same unprotected exposure.",
          "Keep bystanders back so the rescue path stays clear."
        ]
      },
      {
        "heading": "After Recovery, The System Stays Out of Service",
        "sub": "The incident is not closed just because the worker is down.",
        "body": "Any equipment involved in a fall or rescue must be removed from service and evaluated under site rules. The event should also trigger reporting, investigation, and review of planning, anchor choice, clearance, and rescue readiness so the same weaknesses do not remain in place.",
        "list": [
          "Preserve involved equipment for evaluation as required.",
          "Document what happened, how the rescue worked, and what delayed it.",
          "Re-brief crews before resuming elevated work after the event."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What does an arrested fall become immediately?",
        "choices": [
          "A rescue emergency",
          "A closed incident",
          "Only a first-aid case",
          "Only a paperwork issue"
        ],
        "answer": 0
      },
      {
        "question": "Why is “call 911” not enough by itself?",
        "choices": [
          "It does not explain how the worker will actually be reached and recovered",
          "Emergency responders are never allowed on site",
          "Phone calls are prohibited",
          "It replaces rescue planning automatically"
        ],
        "answer": 0
      },
      {
        "question": "Why is suspension trauma important?",
        "choices": [
          "A hanging worker can deteriorate quickly and needs prompt recovery",
          "It only affects workers after long shifts",
          "It is mainly a comfort issue",
          "It does not require medical evaluation"
        ],
        "answer": 0
      },
      {
        "question": "What must rescuers control besides the fallen worker?",
        "choices": [
          "The surrounding scene hazards that could injure responders",
          "Only the worker’s tool belt",
          "Only the weather forecast",
          "Only the work permit binder"
        ],
        "answer": 0
      },
      {
        "question": "What should happen to equipment involved in a fall?",
        "choices": [
          "It should be removed from service and evaluated per site rules",
          "It can be reused after a quick wipe-down",
          "It belongs to the next shift",
          "It only matters if it looks damaged"
        ],
        "answer": 0
      },
      {
        "question": "What should happen after recovery?",
        "choices": [
          "Reporting, review, and re-briefing before work resumes",
          "The incident should stay informal",
          "Only the injured worker needs information",
          "The job should continue immediately"
        ],
        "answer": 0
      },
      {
        "question": "Why must rescue planning match the location?",
        "choices": [
          "Different heights, access paths, and hazards require different recovery methods",
          "One rescue plan fits every elevated job equally well",
          "Only roofs need location-specific planning",
          "Location matters less than equipment color"
        ],
        "answer": 0
      },
      {
        "question": "What is the main takeaway?",
        "choices": [
          "Stopping the fall is only the first part; realistic rescue planning completes the protection system",
          "A harness ends the emergency by itself",
          "Rescue can always be improvised",
          "Only emergency teams need to think about post-fall response"
        ],
        "answer": 0
      }
    ]
  }
]


function makeModuleComponent(module) {
  return function WorkingAtHeightsModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const FallHazardRecognitionTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[0])
export const GuardrailsCoversFloorOpeningsTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[1])
export const LaddersThreePointContactTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[2])
export const ScaffoldsElevatedPlatformsTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[3])
export const FallArrestHarnessTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[4])
export const AnchorPointsSwingFallTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[5])
export const AerialLiftsMEWPTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[6])
export const RoofWorkFragileSurfacesTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[7])
export const FallRescueSuspensionTraumaTraining = makeModuleComponent(WORKING_AT_HEIGHTS_PHASE1_MODULES[8])

