import TrainingModuleShell from './TrainingModuleShell.jsx'
export const CHEMICAL_SAFETY_PHASE1_MODULES = [
  {
    "path": "/chemical-hazcom-labels-sds-pictograms",
    "label": "HazCom Labels, SDS & Pictograms",
    "short": "How to identify chemical hazards before opening, mixing, or using a product",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.1200 — Hazard Communication",
    "audience": "All employees, contractors, maintenance personnel, operators, and supervisors who handle or work around chemical products",
    "minutes": 15,
    "slides": [
      {
        "heading": "Every Container Starts With Identification",
        "sub": "You cannot control a chemical hazard you have not identified.",
        "body": "Before a worker opens, transfers, mixes, or disposes of a chemical, they must know exactly what the product is and what hazards it carries. Labels, pictograms, signal words, and the Safety Data Sheet are the first layer of protection. Guessing from smell, color, or past experience is not acceptable.",
        "list": [
          "Read the product identifier before use.",
          "Check whether the container label still matches the contents.",
          "Do not use unmarked bottles, cups, or transfer containers."
        ],
        "callout": {
          "label": "RULE",
          "text": "No label, no use. Stop and identify the chemical before work continues.",
          "color": "#8A5CF6"
        }
      },
      {
        "heading": "Pictograms and Signal Words Matter",
        "sub": "The label is designed to communicate danger quickly.",
        "body": "GHS pictograms and the signal words 'Danger' and 'Warning' are not decoration. They tell the worker whether the product may burn skin, ignite vapors, damage lungs, react violently, or create other specific exposure risks. Workers should use these cues before they ever open the cap or connect a hose.",
        "list": [
          "The corrosion pictogram signals skin, eye, or metal damage potential.",
          "The flame pictogram warns about ignitable vapors or liquids.",
          "The skull and crossbones indicates acute toxicity and severe short-term exposure risk."
        ]
      },
      {
        "heading": "The SDS Tells You How to Work Safely",
        "sub": "Safety Data Sheets are the operating guide for chemical handling.",
        "body": "The SDS explains the hazards, required PPE, incompatibilities, first-aid steps, storage controls, spill handling, and disposal considerations. Workers should know how to access the SDS before the job starts, not after an exposure or a release has already happened.",
        "list": [
          "Review the PPE and first-aid sections before handling unfamiliar products.",
          "Check storage and incompatibility information before staging multiple chemicals together.",
          "Use the SDS to plan response actions for spills, splashes, and vapor releases."
        ]
      },
      {
        "heading": "Secondary Containers Still Require Control",
        "sub": "Shortcuts in transfer and re-containerizing create serious exposure events.",
        "body": "Spray bottles, sample jars, buckets, and temporary containers still need hazard identification. Workers routinely get injured when one person knows what was transferred but the next shift does not. Secondary containers must be labeled according to site rules and never mistaken for drinking or cleaning containers.",
        "list": [
          "Use approved labels for transfer containers.",
          "Never store chemicals in food or drink containers.",
          "Remove abandoned containers and identify them before cleanup."
        ]
      },
      {
        "heading": "HazCom Is a Daily Discipline",
        "sub": "Chemical awareness is not a once-a-year poster topic.",
        "body": "Hazard communication works only when the label, SDS access, task plan, and worker behavior all line up. Every job involving chemicals should start with identification, required PPE, ventilation needs, and the emergency actions for splash, spill, inhalation, or fire.",
        "list": [
          "Know the product before you open it.",
          "Know the exposure route before you stand in it.",
          "Know the response action before anything goes wrong."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "A label tells you what the product is. The SDS tells you how to survive using it.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "What is the first step before using an unfamiliar chemical?",
        "choices": [
          "Smell it to identify the contents",
          "Read the label and confirm the product identifier",
          "Ask a coworker what they think it is",
          "Use a small amount and see what happens"
        ],
        "answer": 1
      },
      {
        "question": "Which source explains PPE, first aid, storage, and spill guidance for a chemical?",
        "choices": [
          "Production schedule",
          "Safety Data Sheet",
          "Time card",
          "Work order"
        ],
        "answer": 1
      },
      {
        "question": "A spray bottle used for transferred solvent can remain unlabeled if only one person uses it.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1
      },
      {
        "question": "Which signal word indicates the more severe hazard level?",
        "choices": [
          "Caution",
          "Attention",
          "Warning",
          "Danger"
        ],
        "answer": 3
      },
      {
        "question": "Which pictogram would most strongly suggest skin and eye burn potential?",
        "choices": [
          "Flame",
          "Corrosion",
          "Environment",
          "Exclamation mark"
        ],
        "answer": 1
      },
      {
        "question": "When should workers look up the SDS?",
        "choices": [
          "After a spill occurs",
          "Only during annual training",
          "Before chemical work begins",
          "Only when maintenance asks"
        ],
        "answer": 2
      },
      {
        "question": "Why are drink bottles unacceptable as chemical containers?",
        "choices": [
          "They are too small",
          "They can be mistaken for consumables",
          "They evaporate faster",
          "They are more expensive"
        ],
        "answer": 1
      },
      {
        "question": "What should you do if a container has no label and the contents are unknown?",
        "choices": [
          "Use it carefully",
          "Dump it in the nearest drain",
          "Stop work and identify it before use",
          "Mix it with water"
        ],
        "answer": 2
      }
    ]
  },
  {
    "path": "/chemical-corrosives-acids-caustics",
    "label": "Corrosives, Acids, Caustics & Chemical Burn Prevention",
    "short": "Preventing skin, eye, metal, and tissue damage from aggressive chemical exposure",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.1200 · 1910.151 — corrosive chemical handling and emergency flushing",
    "audience": "Operators, maintenance technicians, wastewater staff, sanitation teams, lab users, and contractors working with corrosive products",
    "minutes": 18,
    "slides": [
      {
        "heading": "Corrosives Attack Fast",
        "sub": "Acids and caustics can damage skin, eyes, lungs, and equipment within seconds.",
        "body": "Corrosive injuries often worsen after contact continues under gloves, clothing, or face protection. A brief splash can become a severe burn if the worker delays flushing, keeps contaminated PPE on, or underestimates the product strength.",
        "list": [
          "Do not assume a 'small splash' is minor.",
          "Contamination trapped under gloves or sleeves keeps reacting.",
          "Mists and vapors can injure eyes and airways before liquid contact happens."
        ],
        "callout": {
          "label": "CRITICAL",
          "text": "Immediate flush action matters more than finishing the task or saving the batch.",
          "color": "#8A5CF6"
        }
      },
      {
        "heading": "Exposure Routes Must Be Controlled",
        "sub": "Most corrosive incidents happen during transfer, hose connection, or container opening.",
        "body": "Splash direction, hose pressure, head height, valve position, and line residuals all affect who gets exposed first. Workers should stage the job so their body is out of the line of fire and emergency flushing is within reach before they crack a fitting or start a pump.",
        "list": [
          "Stand out of potential splash paths.",
          "Open containers and valves slowly when residual pressure is possible.",
          "Use face protection that matches the task, not just safety glasses alone."
        ]
      },
      {
        "heading": "Flush Immediately and Continuously",
        "sub": "Delay makes corrosive injuries deeper and more severe.",
        "body": "When corrosives contact eyes or skin, flushing starts immediately and contaminated clothing or PPE is removed as safely as possible. Workers should not waste time arguing about concentration or neutralizing agents if the site emergency plan calls for direct flushing first.",
        "list": [
          "Know the nearest eyewash and safety shower before starting.",
          "Keep the victim flushing while additional help is summoned.",
          "Do not send a contaminated worker walking unassisted if vision is impaired."
        ]
      },
      {
        "heading": "Storage and Segregation Prevent Reactions",
        "sub": "Corrosives also create hazards when staged or stored improperly.",
        "body": "Acids, caustics, oxidizers, and incompatible cleaners should not be stored together simply because they are all 'chemicals.' Damaged lids, shared secondary containment, and mislabeled totes have caused violent reactions, toxic gas releases, and facility damage.",
        "list": [
          "Separate incompatible products according to the SDS and site matrix.",
          "Inspect pumps, hoses, and fittings for corrosion damage before transfer.",
          "Use containers and seals compatible with the product being handled."
        ]
      },
      {
        "heading": "Burn Prevention Starts Before the First Valve Moves",
        "sub": "Planning controls the event before exposure occurs.",
        "body": "Corrosive work should begin with the correct PPE, clear eyewash access, compatible tools, known line contents, and a transfer plan that keeps workers out of the splash zone. Chemical burn prevention is primarily a setup discipline, not a reaction skill.",
        "list": [
          "Verify the product, concentration, and destination before transfer.",
          "Keep exposure response equipment immediately available.",
          "Stop if the task setup forces a worker into the splash line."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "Corrosives do not forgive improvisation. Plan the transfer and the emergency response before contact is possible.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "What is the best response to corrosive liquid in the eyes?",
        "choices": [
          "Wait for a supervisor",
          "Begin immediate flushing",
          "Apply neutralizer first",
          "Drive home"
        ],
        "answer": 1
      },
      {
        "question": "Why can a small corrosive splash become severe?",
        "choices": [
          "It reacts only after one hour",
          "Contaminated clothing can hold the product against tissue",
          "Only large splashes burn skin",
          "Corrosives are harmless if diluted"
        ],
        "answer": 1
      },
      {
        "question": "When is the best time to locate the eyewash or shower?",
        "choices": [
          "After exposure",
          "Before the job begins",
          "At the end of the shift",
          "Only during training"
        ],
        "answer": 1
      },
      {
        "question": "Which task commonly causes corrosive splashes?",
        "choices": [
          "Walking through the office",
          "Opening or connecting pressurized lines",
          "Writing a report",
          "Using hearing protection"
        ],
        "answer": 1
      },
      {
        "question": "Can safety glasses alone replace a face shield for high-splash corrosive transfer work?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "Why should incompatible corrosives be segregated?",
        "choices": [
          "To make inventory easier",
          "To reduce fire code paperwork",
          "To prevent dangerous reactions or gas release",
          "To improve paint appearance"
        ],
        "answer": 2
      },
      {
        "question": "What should a worker do if the setup requires standing directly in the likely splash path?",
        "choices": [
          "Proceed carefully",
          "Stop and re-stage the task",
          "Close their eyes",
          "Hold their breath"
        ],
        "answer": 1
      },
      {
        "question": "What must be verified before transfer of an acid or caustic?",
        "choices": [
          "The music on the radio",
          "The product, concentration, and destination",
          "Only the shift schedule",
          "Only the container color"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/chemical-oxidizers-reactives-incompatibles",
    "label": "Oxidizers, Reactives & Incompatible Storage",
    "short": "Preventing violent reactions, decomposition, and unintended gas generation",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.1200 — reactive chemical awareness and incompatible segregation",
    "audience": "Warehouse personnel, operators, chemical receivers, wastewater staff, sanitation leads, and maintenance teams",
    "minutes": 16,
    "slides": [
      {
        "heading": "Not Every Chemical Hazard Burns or Poisons",
        "sub": "Some products become dangerous only when they meet the wrong partner, temperature, or contamination source.",
        "body": "Oxidizers, reactives, and incompatible products can create fires, pressure rise, toxic gas, or violent decomposition. The danger may not be obvious from routine handling until a wrong hose, shared sump, or contaminated scoop provides the trigger.",
        "list": [
          "A chemical can be stable alone but unstable when mixed.",
          "Residue in a line or container can be enough to trigger a reaction.",
          "Incompatibility control is part of safe storage and transfer."
        ]
      },
      {
        "heading": "Oxidizers Intensify Combustion",
        "sub": "They do not need an open flame to make other materials burn harder or faster.",
        "body": "Oxidizers can dramatically increase fire intensity and make ordinary combustibles behave unpredictably. Workers should never assume that because a material is not a fuel itself it cannot worsen a fire. Keep oxidizers separated from oils, organics, rags, and contaminated packaging.",
        "list": [
          "Do not store oxidizers next to fuels or oily waste.",
          "Use clean tools and containers to avoid contamination.",
          "Treat leaking oxidizer residues as a serious reaction risk."
        ]
      },
      {
        "heading": "Incompatibles Must Be Segregated Intentionally",
        "sub": "General 'chemical storage' is not a safe category by itself.",
        "body": "Acids, caustics, oxidizers, reducers, solvents, and specialty products each have different incompatibility rules. Shelving them by convenience or aisle space can create hidden hazards. Transfer lines, totes, floor drains, and shared spill pallets also count as possible mixing points.",
        "list": [
          "Use the site compatibility matrix, not memory alone.",
          "Inspect staging areas for products that can meet through leaks or overflow.",
          "Do not assume the previous contents of a tote are harmless."
        ]
      },
      {
        "heading": "Heat, Sunlight, and Time Can Change the Risk",
        "sub": "Some products degrade or self-react when stored poorly.",
        "body": "Temperature excursions, direct sun, long-term aging, or contamination can convert a manageable product into a much less stable one. Bulging containers, crystal formation, unusual heat, or strong off-gassing are warning signs that normal handling may no longer be safe.",
        "list": [
          "Do not move unstable-looking containers casually.",
          "Escalate unusual heat, swelling, fumes, or crystals immediately.",
          "Follow site disposal rules for aged or suspect chemicals."
        ]
      },
      {
        "heading": "Compatibility Control Prevents the Emergency",
        "sub": "Storage layout and transfer discipline are the first defenses.",
        "body": "Reactive-chemical safety depends on positive identification, segregated storage, clean dedicated tools, and an understanding of what residuals may still be in the system. A calm day can become an emergency quickly when incompatibles are allowed to meet.",
        "list": [
          "Verify source and destination before any transfer.",
          "Keep dedicated equipment for incompatible classes where required.",
          "Do not improvise shared containment for unlike chemicals."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "The safest reactive event is the one prevented by segregation before the containers ever touch.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "Why are oxidizers dangerous around combustible materials?",
        "choices": [
          "They lower fire temperature",
          "They can intensify burning",
          "They make metal stronger",
          "They remove oxygen from the air"
        ],
        "answer": 1
      },
      {
        "question": "What can trigger a reactive chemical event besides direct mixing?",
        "choices": [
          "Line residue or contaminated tools",
          "Too much paperwork",
          "Fresh air",
          "Proper labeling"
        ],
        "answer": 0
      },
      {
        "question": "Is 'chemical storage' a sufficient compatibility category by itself?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "Which condition should be escalated immediately?",
        "choices": [
          "A clean, sealed drum",
          "A bulging, warm container with fumes",
          "A labeled tote on a pallet",
          "An empty approved jug"
        ],
        "answer": 1
      },
      {
        "question": "Why do floor drains and shared secondary containment matter?",
        "choices": [
          "They can allow incompatibles to meet",
          "They increase internet speed",
          "They reduce PPE use",
          "They eliminate labeling needs"
        ],
        "answer": 0
      },
      {
        "question": "What should guide storage decisions for incompatible materials?",
        "choices": [
          "Available shelf space",
          "The site compatibility matrix and SDS",
          "The product color",
          "Personal preference"
        ],
        "answer": 1
      },
      {
        "question": "Can a product be stable alone but dangerous when contaminated?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "What is a key prevention method for reactive chemical incidents?",
        "choices": [
          "Store unlike products together for convenience",
          "Use dedicated clean tools and segregated storage",
          "Keep all lids loose",
          "Transfer without checking the destination"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/chemical-solvents-flammables-vapor-control",
    "label": "Solvents, Flammables & Vapor Control",
    "short": "Managing ignitable liquids, vapors, static, and ventilation during use and transfer",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.106 · 1910.1200 — flammable liquid handling and hazard communication",
    "audience": "Maintenance personnel, painters, cleaners, process operators, warehouse workers, and contractors using or transferring flammable chemicals",
    "minutes": 17,
    "slides": [
      {
        "heading": "The Vapor Is Often the Real Ignition Hazard",
        "sub": "Flammable liquid incidents usually ignite the vapor, not the liquid pool itself.",
        "body": "Solvents and other flammables can release invisible vapor that travels to ignition sources far from the container. Workers who focus only on the liquid spill may miss the more dangerous vapor cloud moving toward hot surfaces, motors, static discharge, or open flames.",
        "list": [
          "Treat the surrounding atmosphere as part of the hazard.",
          "Do not assume distance alone makes ignition impossible.",
          "Control ignition sources before opening the container."
        ]
      },
      {
        "heading": "Bonding, Grounding, and Ventilation Matter",
        "sub": "Transfer operations create the conditions for static and vapor accumulation.",
        "body": "Pouring, pumping, or draining flammable liquids can create static charge and concentrated vapor pockets. Appropriate bonding, grounding, ventilation, and container control reduce the chance that the transfer itself becomes the ignition event.",
        "list": [
          "Use approved transfer methods and containers.",
          "Verify ventilation is working before product movement begins.",
          "Do not bypass bonding or grounding practices where required."
        ]
      },
      {
        "heading": "Hot Work and Flammables Do Not Coexist by Accident",
        "sub": "A grinder, heater, welding task, or hot bearing can ignite a job that looked routine.",
        "body": "Flammable work areas must be protected from sparks, open flame, hot surfaces, and energized equipment that is not suitable for the atmosphere. Workers should think beyond torches and cigarettes; temporary work lights, relays, and nearby vehicles can also become ignition sources.",
        "list": [
          "Separate flammable handling from hot work unless the area is fully controlled.",
          "Do not use unapproved equipment in vapor-prone spaces.",
          "Housekeeping matters because solvent-soaked waste increases fuel load."
        ]
      },
      {
        "heading": "Open Containers Multiply Exposure",
        "sub": "Leaving lids loose or pans uncovered turns a local task into an area hazard.",
        "body": "Workers increase fire, inhalation, and spill exposure when they leave containers open 'for convenience.' Covering containers, minimizing quantities at the point of use, and staging absorbents reduce both ignition risk and release size.",
        "list": [
          "Keep only the working quantity at the job.",
          "Close containers when not actively in use.",
          "Remove solvent-soaked rags and waste to proper containers."
        ]
      },
      {
        "heading": "Vapor Control Is a Job-Setup Discipline",
        "sub": "Most flammable incidents are preventable before the first pour begins.",
        "body": "The safest flammable-liquid task starts with the right container, clear ignition control, functional ventilation, good housekeeping, and an exit plan if vapor or fire conditions change. Workers should stop immediately if they smell unusual vapor buildup, lose ventilation, or see uncontrolled ignition sources nearby.",
        "list": [
          "Plan the work area before opening the product.",
          "Control vapors and ignition together, not separately.",
          "Stop if the atmosphere is no longer controlled."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "If vapors can travel, ignition can travel too. Control both before transfer starts.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "What usually ignites first in a flammable-liquid incident?",
        "choices": [
          "The liquid metal drum",
          "The vapor",
          "The label",
          "The floor drain"
        ],
        "answer": 1
      },
      {
        "question": "Why are bonding and grounding used during some transfers?",
        "choices": [
          "To improve chemical color",
          "To reduce static discharge risk",
          "To make labels stick better",
          "To lower the liquid temperature"
        ],
        "answer": 1
      },
      {
        "question": "Can a distant ignition source still ignite flammable vapors?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "Which condition should stop the task?",
        "choices": [
          "Ventilation loss",
          "A closed lid",
          "An approved container",
          "A complete SDS"
        ],
        "answer": 0
      },
      {
        "question": "Why should point-of-use quantity be limited?",
        "choices": [
          "To reduce release size and vapor load",
          "To increase production time",
          "To confuse inspectors",
          "To reduce label reading"
        ],
        "answer": 0
      },
      {
        "question": "Are solvent-soaked rags part of the hazard?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "What should be controlled before opening a flammable solvent container?",
        "choices": [
          "Only the paperwork",
          "Only the room temperature",
          "Ignition sources and ventilation",
          "Only the lighting color"
        ],
        "answer": 2
      },
      {
        "question": "Leaving flammable containers open when not in use is acceptable if the job is short.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/chemical-toxic-gas-fume-inhalation",
    "label": "Toxic Gas, Fume & Inhalation Hazard Awareness",
    "short": "Recognizing when air contamination, not liquid contact, is the main chemical threat",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.1200 · 1910.134 — inhalation hazard awareness and respiratory protection interface",
    "audience": "Operators, confined-space teams, sanitation workers, wastewater staff, process personnel, hot-work crews, and contractors",
    "minutes": 16,
    "slides": [
      {
        "heading": "The Air Can Be the Chemical Exposure",
        "sub": "Workers often focus on liquid splash and miss the inhalation route.",
        "body": "Some chemical exposures injure primarily through vapor, gas, mist, smoke, or fume. A worker can be seriously harmed without getting a drop on their skin. This is why gas detection, ventilation, enclosure control, and respiratory decisions must be based on the actual atmosphere, not what the worker can or cannot smell.",
        "list": [
          "Do not rely on odor as your exposure monitor.",
          "Invisible atmospheres can still be immediately dangerous.",
          "Hot work, reaction chemistry, and decomposition can create new airborne hazards."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the atmosphere is uncertain, verify it. Do not 'sniff test' a job.",
          "color": "#8A5CF6"
        }
      },
      {
        "heading": "Common Sources of Inhalation Exposure",
        "sub": "Airborne chemical hazards come from many normal-seeming tasks.",
        "body": "Tank opening, line breaking, disinfection work, furnace or hot-process operations, acid cleaning, mixing, and spill response can all produce inhalation hazards. A space that seemed normal moments ago may change rapidly when temperature, agitation, or pressure changes.",
        "list": [
          "Opening the system can release what was previously contained.",
          "Heat can drive off vapors or decompose product into new gases.",
          "Low-lying areas and pits may collect heavier-than-air vapors."
        ]
      },
      {
        "heading": "Detection and Ventilation Come Before Entry",
        "sub": "A worker should not become the first monitoring device.",
        "body": "Workers need the correct detection method for the expected hazard and a ventilation plan that actually reaches the contaminated zone. Simply opening a hatch or turning on a fan without airflow planning does not guarantee safe conditions. Monitoring must match the product and task.",
        "list": [
          "Use the right sensor or monitoring approach for the hazard.",
          "Confirm that air movement reaches the worker breathing zone.",
          "Continue monitoring when conditions can change during the task."
        ]
      },
      {
        "heading": "Respirators Do Not Replace Hazard Recognition",
        "sub": "Respiratory protection only works when the exposure is understood and the equipment matches it.",
        "body": "Workers should not default to 'just wear a respirator' when the atmosphere is unknown, oxygen-deficient, or immediately dangerous to life or health. Respiratory protection must fit the hazard, the concentration, and the site program. In some cases, the right answer is evacuation or supplied air, not a cartridge mask.",
        "list": [
          "Know when escape, evacuation, or SCBA applies.",
          "Do not improvise cartridge selection.",
          "Respirators support the plan; they are not the plan."
        ]
      },
      {
        "heading": "Treat Airborne Exposure as an Immediate-Life Hazard When Needed",
        "sub": "Bad air can disable a worker before they can call for help.",
        "body": "Toxic gas and fume events can progress very quickly. Rescue attempts fail when coworkers rush in without monitoring, PPE, or a plan. If alarms, symptoms, or process conditions indicate loss of atmospheric control, the correct action is to stop, isolate, warn others, and follow the emergency response procedure.",
        "list": [
          "Do not perform impulse rescue into a suspected toxic atmosphere.",
          "Protect the area and escalate early.",
          "Airborne hazards deserve the same respect as visible fire or electrical danger."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "If the air is wrong, the job is wrong. Verify, ventilate, monitor, and control before exposure begins.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "Can a worker suffer serious chemical exposure without any liquid splash?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "Why is odor an unreliable exposure indicator?",
        "choices": [
          "Odor always appears late",
          "Some dangerous atmospheres cannot be smelled reliably",
          "Odor is only relevant outdoors",
          "Odor replaces instrumentation"
        ],
        "answer": 1
      },
      {
        "question": "What should happen before a worker enters a potentially contaminated space?",
        "choices": [
          "They should take a deep breath",
          "Detection and ventilation should be verified",
          "They should ask a coworker to watch",
          "Nothing if the hatch is open"
        ],
        "answer": 1
      },
      {
        "question": "What can heat do to a chemical process?",
        "choices": [
          "Always make it safer",
          "Drive off vapors or create new airborne hazards",
          "Remove all toxic gases",
          "Eliminate oxygen concerns"
        ],
        "answer": 1
      },
      {
        "question": "Does wearing any respirator automatically make an unknown atmosphere safe?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "What is the right response to a suspected toxic atmosphere emergency?",
        "choices": [
          "Rush in to pull the worker out",
          "Stop, isolate, warn others, and follow emergency procedures",
          "Turn away and ignore it",
          "Only close the paperwork"
        ],
        "answer": 1
      },
      {
        "question": "Why should monitoring continue during some tasks?",
        "choices": [
          "To occupy the attendant",
          "Because atmospheric conditions can change",
          "To reduce PPE needs",
          "To avoid label reading"
        ],
        "answer": 1
      },
      {
        "question": "What is a dangerous mistake during toxic-gas incidents?",
        "choices": [
          "Using the right detector",
          "Improvised rescue without a plan",
          "Isolating the area",
          "Calling for help"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/chemical-transfer-sampling-container-handling",
    "label": "Chemical Transfer, Sampling & Container Handling",
    "short": "Preventing exposure during pumping, pouring, line opening, sampling, and staging",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.1200 — task-based chemical handling and exposure prevention",
    "audience": "Operators, lab personnel, wastewater technicians, process crews, maintenance workers, and contractors who move or sample chemicals",
    "minutes": 17,
    "slides": [
      {
        "heading": "Transfer Work Is Where Routine Chemical Injuries Happen",
        "sub": "The moment product leaves one boundary and enters another is a high-exposure task.",
        "body": "Workers get splashed, overpressured, overcome by vapors, or sprayed by residual line contents most often during hose hookup, uncapping, sampling, draining, and pump startup. These steps deserve the same planning attention as major maintenance work.",
        "list": [
          "Assume pressure or product residual may still be present.",
          "Stage the body outside the likely release path.",
          "Verify source and destination before opening the path."
        ]
      },
      {
        "heading": "Containers and Hoses Must Match the Product",
        "sub": "Compatibility and condition matter before the first drop moves.",
        "body": "A container that holds water safely may fail badly with solvent, oxidizer, caustic, or acid service. Hose material, gasket type, lid seal, valve design, and secondary containment all need to match the product and transfer method. Workers should inspect fittings and connections before they trust them.",
        "list": [
          "Use compatible hoses, seals, and transfer containers.",
          "Do not trust cracked lids, soft hoses, or corroded fittings.",
          "Confirm the receiving container has enough capacity and correct labeling."
        ]
      },
      {
        "heading": "Sampling Can Be a Release Event",
        "sub": "A small sample point can still deliver pressure, heat, vapor, or splash.",
        "body": "Sampling tasks often appear harmless because the container is small. In reality, the worker may be closest to the release point and directly in the breathing zone of the product. Sample plans should define purge, cooling, venting, and where the worker stands before the valve is touched.",
        "list": [
          "Use the correct sample bottle and closure for the product.",
          "Control purge and vent paths before cracking the valve.",
          "Never lean over a sample point for a better view."
        ]
      },
      {
        "heading": "Housekeeping and Staging Prevent Secondary Exposure",
        "sub": "A clean transfer area reduces both the primary event and the follow-on event.",
        "body": "Drip pans, absorbents, capped hoses, secured containers, and clear travel paths prevent slips, spread, and cross-contamination after the transfer ends. The task is not complete when the pump stops; it ends when the line is secure and the area is left in a safe state.",
        "list": [
          "Cap and secure transfer points after use.",
          "Remove contaminated tools and PPE from the work zone.",
          "Leave no unlabeled residue or open containers behind."
        ]
      },
      {
        "heading": "Slow, Verified Movements Beat Fast Guesswork",
        "sub": "Most chemical transfer incidents begin with rushing, assumptions, or bad line-up.",
        "body": "Workers should move chemical products deliberately, verify alignment, check valve positions, and maintain communication during transfer and sampling. If the product, line contents, or receiving vessel is uncertain, the job pauses until it is known.",
        "list": [
          "Line up the path before the pump starts.",
          "Communicate during transfer, especially when multiple people are involved.",
          "Stop immediately if pressure, odor, leak, or destination uncertainty changes."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "Sampling and transfer are small tasks with big exposure potential. Treat them like release work, not housekeeping.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "When do many routine chemical injuries occur?",
        "choices": [
          "During lunch",
          "During transfer, sampling, or uncapping",
          "Only during audits",
          "After the shift ends"
        ],
        "answer": 1
      },
      {
        "question": "What should be assumed when opening a chemical line or sample point?",
        "choices": [
          "That it is empty",
          "That pressure or residual may still be present",
          "That the label is wrong",
          "That no PPE is needed"
        ],
        "answer": 1
      },
      {
        "question": "Why must hoses and gaskets match the product?",
        "choices": [
          "For color coordination",
          "For chemical compatibility and integrity",
          "To reduce paperwork",
          "To increase pump speed"
        ],
        "answer": 1
      },
      {
        "question": "Is sampling always low-risk because the container is small?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "What must be confirmed before starting a transfer?",
        "choices": [
          "Source, destination, and line-up",
          "Only the weather",
          "Only the sample bottle color",
          "Only the shift supervisor's lunch time"
        ],
        "answer": 0
      },
      {
        "question": "What should happen after transfer stops?",
        "choices": [
          "Walk away immediately",
          "Secure the line and leave the area safe",
          "Leave the hose open to drain",
          "Store residue in an unlabeled cup"
        ],
        "answer": 1
      },
      {
        "question": "Where should the worker avoid positioning during transfer or sampling?",
        "choices": [
          "Near the control panel",
          "In the likely release path",
          "At a safe viewing angle",
          "At the eyewash station"
        ],
        "answer": 1
      },
      {
        "question": "What should trigger a pause in the task?",
        "choices": [
          "No music playing",
          "Destination uncertainty or unexpected leak/odor",
          "A complete SDS",
          "A clean drip pan"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/chemical-spill-response-isolation-decon",
    "label": "Spill Response, Isolation & Decontamination Basics",
    "short": "Containing small releases safely and knowing when to stop, isolate, and escalate",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.1200 — release recognition and site-level emergency response interface",
    "audience": "All employees, operators, maintenance personnel, sanitation teams, lab workers, and supervisors who may discover or initially respond to chemical releases",
    "minutes": 16,
    "slides": [
      {
        "heading": "Not Every Spill Is an Absorbent-Pad Problem",
        "sub": "Some releases are housekeeping events. Others are emergencies.",
        "body": "Workers need to distinguish between small, understood spills they are authorized to manage and releases that require immediate isolation and escalation. Unknown product, vapor generation, strong reaction, pressurized leak, or worker symptoms change the event from cleanup to emergency response.",
        "list": [
          "Know the site threshold for incidental cleanup versus emergency action.",
          "Do not let eagerness to help override authorization limits.",
          "Unknown chemicals are not routine spills."
        ]
      },
      {
        "heading": "Isolation Comes Before Cleanup",
        "sub": "The first action is to stop exposure and protect people.",
        "body": "If the chemical, quantity, or atmosphere is not fully controlled, the worker should isolate the area, keep others out, warn nearby personnel, and follow the site reporting path. Cleanup tools are useful only after the release is understood and the responder is equipped and authorized.",
        "list": [
          "Protect people before protecting product.",
          "Shut sources only when it can be done safely.",
          "Do not kneel, lean, or step into unknown liquid."
        ]
      },
      {
        "heading": "Decontamination Prevents the Second Injury",
        "sub": "Contamination often spreads after the initial release.",
        "body": "Boots, gloves, tools, door handles, and vehicle pedals can all spread chemical contamination after the first event. Basic decontamination means controlling the spread, removing contaminated PPE appropriately, and preventing the responder from carrying the product into clean areas.",
        "list": [
          "Treat contaminated tools and footwear as part of the spill.",
          "Keep clean and dirty zones separated.",
          "Dispose of contaminated absorbents and PPE correctly."
        ]
      },
      {
        "heading": "Drains, Ventilation, and Compatibility Matter During Response",
        "sub": "A spill can become larger or more dangerous if it reaches the wrong place.",
        "body": "Floor drains, sumps, pits, hot surfaces, incompatible residues, and confined or low-lying spaces can all change spill severity. Responders should think beyond the puddle and ask where the product can go, what it can contact, and what vapor or reaction risk may develop.",
        "list": [
          "Protect drains and pathways when site procedures call for it.",
          "Consider vapor migration and low-point accumulation.",
          "Do not combine cleanup residues from incompatible products."
        ]
      },
      {
        "heading": "Know Your Stop Point",
        "sub": "Good responders know when the right move is escalation, not heroics.",
        "body": "A disciplined worker recognizes when the release exceeds training, authorization, PPE, or available control equipment. At that point the correct response is isolation, notification, accountability, and support for the emergency team—not uncontrolled direct action.",
        "list": [
          "Stay within your training and authorization.",
          "Escalate early when product, quantity, or atmosphere is uncertain.",
          "Helping the response team starts with protecting the scene."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "The best spill response skill is recognizing when to contain and when to isolate and call for a higher-level response.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "What changes a spill from routine cleanup to emergency response?",
        "choices": [
          "A clean floor",
          "Unknown product or uncontrolled atmosphere",
          "A labeled absorbent cart",
          "A supervisor nearby"
        ],
        "answer": 1
      },
      {
        "question": "What should come before cleanup?",
        "choices": [
          "Taking photos for social media",
          "Isolation and protection of people",
          "Finishing nearby production",
          "Removing warning signs"
        ],
        "answer": 1
      },
      {
        "question": "Why is decontamination important after a spill?",
        "choices": [
          "To spread the product evenly",
          "To prevent contamination from traveling to clean areas",
          "To make reports shorter",
          "To reduce the need for labels"
        ],
        "answer": 1
      },
      {
        "question": "Should a worker step into an unknown spilled liquid to inspect it?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "Why do drains and pits matter during spill response?",
        "choices": [
          "They may increase spread or vapor hazard",
          "They always neutralize chemicals",
          "They improve footing",
          "They reduce cleanup time"
        ],
        "answer": 0
      },
      {
        "question": "What should a worker do if the release exceeds their training or equipment?",
        "choices": [
          "Continue anyway",
          "Isolate and escalate",
          "Taste the liquid",
          "Mix it with another product"
        ],
        "answer": 1
      },
      {
        "question": "Can contaminated tools and boots spread the hazard after the spill?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "What is a key rule for incidental spill response?",
        "choices": [
          "Work outside authorization limits",
          "Stay within training and authorization",
          "Always act alone",
          "Never use PPE"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/chemical-waste-residues-empty-containers",
    "label": "Waste Handling, Residues & Empty Container Safety",
    "short": "Managing leftover product, contaminated packaging, and 'empty' containers without surprise exposure",
    "icon": "🧪",
    "color": "#8A5CF6",
    "regulation": "OSHA 29 CFR 1910.1200 — residual hazard recognition for chemical waste and empty packaging",
    "audience": "Operators, warehouse teams, sanitation crews, maintenance staff, waste handlers, and contractors managing residual chemicals or packaging",
    "minutes": 15,
    "slides": [
      {
        "heading": "Empty Does Not Mean Safe",
        "sub": "Residual product, vapor, pressure, and contamination can remain after normal use.",
        "body": "Workers are often injured by containers labeled 'empty' that still hold liquid heel, vapor, crusted residue, or pressure. Drums, totes, cylinders, pails, and sample bottles should all be treated as residual-hazard items until properly closed, managed, and staged for the site waste process.",
        "list": [
          "Assume residue remains until verified otherwise.",
          "Closed containers can still contain vapor or pressure.",
          "Residue on exterior surfaces can transfer to hands, tools, and vehicles."
        ]
      },
      {
        "heading": "Waste Streams Must Stay Identified",
        "sub": "Leftovers and cleanup residues still need positive control.",
        "body": "A waste drum with mixed unknown residue is not 'just trash.' It is a hazard-management problem. Waste containers, absorbents, and contaminated PPE should be labeled and managed according to site rules so responders and waste handlers know what they are dealing with.",
        "list": [
          "Do not create mystery waste containers.",
          "Keep labels legible through the full waste process.",
          "Separate incompatible residues during accumulation."
        ]
      },
      {
        "heading": "Do Not Create New Exposure During Disposal",
        "sub": "Dumping, mixing, rinsing, or puncturing containers casually creates preventable incidents.",
        "body": "Workers should never improvise waste disposal by combining residues, venting containers in occupied areas, or washing chemicals to drains without approval. Disposal actions must respect compatibility, vapor hazard, and the site waste-management process.",
        "list": [
          "Never assume a small amount is harmless.",
          "Do not defeat closures or puncture containers casually.",
          "Use approved collection points and procedures."
        ]
      },
      {
        "heading": "Residue Control Protects the Next Handler",
        "sub": "The person moving the waste later deserves the same hazard information as the original user.",
        "body": "Waste handling safety is not only about the first worker. It also protects janitorial staff, warehouse personnel, transporters, and contractors who may later move the material. Closing, labeling, and staging containers correctly prevents secondary exposure down the line.",
        "list": [
          "Think about the next person who touches the container.",
          "Clean exterior contamination before staging when procedures allow.",
          "Store waste so leaks and incompatibles cannot meet."
        ]
      },
      {
        "heading": "Residual Hazard Awareness Prevents the Surprise Event",
        "sub": "Many chemical injuries happen after the 'real job' seems complete.",
        "body": "The cleanup drum, the used pail, the contaminated wipe, and the drained hose can still injure people. Workers should finish the job by securing residues, managing waste properly, and leaving no hidden chemical exposure for the next shift.",
        "list": [
          "Close out the waste path with the same discipline as the work path.",
          "Treat residue as part of the task, not an afterthought.",
          "If the waste identity is unclear, stop and resolve it."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "Residual chemicals are still chemicals. 'Empty' is not a hazard category.",
          "color": "#8A5CF6"
        }
      }
    ],
    "quiz": [
      {
        "question": "Why can an 'empty' drum still be hazardous?",
        "choices": [
          "It may still contain residue, vapor, or pressure",
          "It is lighter to lift",
          "It cannot be labeled",
          "It is always safe outdoors"
        ],
        "answer": 0
      },
      {
        "question": "Should waste containers remain labeled during accumulation and handling?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "What is a bad disposal practice?",
        "choices": [
          "Using approved collection points",
          "Combining unknown residues casually",
          "Closing containers after use",
          "Keeping labels legible"
        ],
        "answer": 1
      },
      {
        "question": "Why should incompatible residues be separated?",
        "choices": [
          "To make counting easier",
          "To prevent reaction and release",
          "To reduce storage space",
          "To hide odors"
        ],
        "answer": 1
      },
      {
        "question": "Who is protected by good waste-container control?",
        "choices": [
          "Only the original user",
          "Only supervisors",
          "Only transport drivers",
          "The original user and later handlers"
        ],
        "answer": 3
      },
      {
        "question": "Can residue on the outside of a container create exposure?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "What should happen if a waste container's contents are unclear?",
        "choices": [
          "Guess based on odor",
          "Stop and resolve the identity",
          "Pour it into another container",
          "Leave it unlabeled"
        ],
        "answer": 1
      },
      {
        "question": "When does the chemical task truly end?",
        "choices": [
          "When the transfer pump stops",
          "When residues and waste are secured safely",
          "When the label fades",
          "When the break bell rings"
        ],
        "answer": 1
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function ChemicalSafetyModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const HazComLabelsSDSTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[0])
export const CorrosivesAcidsCausticsTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[1])
export const OxidizersReactivesIncompatiblesTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[2])
export const SolventsFlammablesVaporControlTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[3])
export const ToxicGasFumeInhalationTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[4])
export const ChemicalTransferSamplingHandlingTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[5])
export const SpillResponseIsolationDeconTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[6])
export const ChemicalWasteResiduesContainersTraining = makeModuleComponent(CHEMICAL_SAFETY_PHASE1_MODULES[7])
