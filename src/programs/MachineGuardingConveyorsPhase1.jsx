import TrainingModuleShell from './TrainingModuleShell.jsx'

export const MACHINE_GUARDING_PHASE1_MODULES = [
  {
    "path": "/guarding-fundamentals-point-of-operation",
    "label": "Guarding Fundamentals & Point of Operation Hazards",
    "short": "Recognizing where hands, clothing, or tools can reach moving machine danger zones",
    "icon": "⚙️",
    "color": "#5A8F29",
    "regulation": "OSHA machine guarding principles — guard the hazard where motion can injure the worker",
    "audience": "Operators, maintenance, sanitation, supervisors, contractors, and anyone working near driven equipment",
    "minutes": 16,
    "slides": [
      {
        "heading": "Machine Guarding Starts at the Hazard Zone",
        "sub": "The guard exists because motion can injure before a worker realizes they are exposed.",
        "body": "The point of operation, in-running parts, and exposed motion zones create injury paths where body parts, tools, or clothing can be caught, crushed, cut, or pulled in. Guarding has to control access at the actual hazard, not just make the machine look enclosed from a distance.",
        "list": [
          "Identify where the machine performs work and where movement can reach the worker.",
          "Look beyond the obvious blade or ram to rollers, gears, chains, couplings, and feed paths.",
          "Treat routine production, setup, cleanup, and troubleshooting as separate exposure situations."
        ],
        "callout": {
          "label": "RULE",
          "text": "If a hand, sleeve, tool, hose, or body part can reach dangerous motion, the hazard is not adequately guarded.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "A Guard Must Prevent Contact, Not Just Look Present",
        "sub": "A loose, shifted, oversized, or bypassed guard is not real protection.",
        "body": "Workers often accept a machine as “guarded” because there is metal around it somewhere. Effective guarding actually prevents dangerous contact, stays in position during operation, and is appropriate for the task. Open gaps, damaged mesh, missing fasteners, and oversized clearances create a false sense of protection.",
        "list": [
          "Check reach distance, opening size, guard strength, and mounting condition.",
          "Do not treat missing panels or temporary coverings as equivalent to engineered guarding.",
          "A guard that workers can easily bypass without authorization is part of the risk, not the solution."
        ]
      },
      {
        "heading": "Different Tasks Create Different Guarding Exposure",
        "sub": "Production is not the only time workers interact with moving equipment.",
        "body": "Normal operation, jam clearing, belt tracking checks, lubrication, cleaning, sanitation, changeover, and troubleshooting all change the worker’s distance and body position relative to motion. A machine that is guarded for production may still expose people during non-routine tasks if the work method is not controlled.",
        "list": [
          "Review how close the worker must get during each task state.",
          "Separate normal operation from servicing, setup, and access work.",
          "Use LOTO or equivalent servicing controls when the task leaves normal guarded operation."
        ]
      },
      {
        "heading": "Guarding Decisions Must Fit the Process",
        "sub": "Fixed guards, interlocked guards, distance guarding, barriers, and safe feed tools each control different problems.",
        "body": "Machines are not all protected the same way. Some hazards need fixed enclosures. Others need interlocked access, safe positioning, presence-sensing systems, remote handling, or hold-down fixtures. The right control depends on whether the job can be done safely without reaching into the hazard zone.",
        "list": [
          "Choose guarding that matches the machine motion and the real task path.",
          "Do not remove protection just because the process is awkward or rushed.",
          "Escalate design problems instead of normalizing unsafe reach-in work."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is the main purpose of machine guarding?",
        "choices": [
          "Prevent contact with hazardous motion",
          "Make equipment quieter",
          "Improve paint protection",
          "Replace lockout procedures"
        ],
        "answer": 0
      },
      {
        "question": "Which statement best describes a false guard condition?",
        "choices": [
          "A panel exists but leaves reach-in openings to dangerous motion",
          "A fixed guard is properly mounted",
          "An interlocked door stops motion when opened",
          "A feed tool keeps hands away"
        ],
        "answer": 0
      },
      {
        "question": "Why must non-routine tasks be reviewed separately from production?",
        "choices": [
          "Because access distance and body position often change",
          "Because production hazards disappear during cleanup",
          "Because only operators are exposed",
          "Because guarding only matters at startup"
        ],
        "answer": 0
      },
      {
        "question": "What is the right response if the job cannot be done safely with existing guarding?",
        "choices": [
          "Escalate and redesign the method or guarding",
          "Work faster before anyone notices",
          "Use a longer screwdriver through the opening",
          "Temporarily hold the guard aside"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/in-running-nip-points-entanglement",
    "label": "In-Running Nip Points, Pinch Points & Entanglement",
    "short": "Seeing where rollers, belts, shafts, chains, and rotating parts can pull a person into the machine",
    "icon": "🧲",
    "color": "#5A8F29",
    "regulation": "OSHA machine guarding awareness — control pull-in, pinch, wrap, and crush exposure",
    "audience": "Operators, mechanics, cleaners, production workers, and contractors near rotating or converging motion",
    "minutes": 15,
    "slides": [
      {
        "heading": "Nip Points Pull Faster Than People React",
        "sub": "A person does not have time to “just let go” once material or clothing is caught.",
        "body": "In-running nip points form wherever parts rotate toward each other or where a rotating part meets a fixed object. Belts and pulleys, chains and sprockets, rollers, couplings, and winding equipment can grab gloves, sleeves, rags, cords, or fingers immediately.",
        "list": [
          "Treat converging motion as a pull-in hazard, not just a pinch hazard.",
          "Do not place hands near moving roll pairs, guide points, or wrap zones.",
          "Remember that loose clothing and cleaning materials can become the first item caught."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never try to guide, straighten, or free moving material by hand inside a nip-point zone.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "Rotating Parts Create Wrap Hazards",
        "sub": "Shafts, couplings, spindles, and fans can wrap material around the body.",
        "body": "A smooth rotating part can still pull in hair, gloves, sleeves, jewelry, or measuring tapes. Once wrap begins, the body can be drawn into adjacent machine structure or struck by rotating components. The danger is not limited to obvious teeth or blades.",
        "list": [
          "Secure hair, remove jewelry, and control loose clothing near rotation.",
          "Keep rags, strings, hoses, and tape away from exposed shafts or couplings.",
          "Maintain guards over rotating components even when workers think the speed is low."
        ]
      },
      {
        "heading": "Pinch, Crush, and Shear Zones Often Sit Beside the Main Process",
        "sub": "Workers focus on the product path and miss the side hazard.",
        "body": "Adjustment points, guide rails, traveling carriages, counterweights, and moving frames create crush and shear zones where body parts can be trapped against structure. These hazards often exist beside the production area rather than at the obvious work face.",
        "list": [
          "Check side clearances, moving frames, gates, and transfer points.",
          "Stay out of travel paths used by carriages, cylinders, rams, and machine doors.",
          "Use tool-assisted adjustments when the process design keeps hands near motion."
        ]
      },
      {
        "heading": "Entanglement Prevention Is Behavioral and Mechanical",
        "sub": "Good guarding still fails if workers normalize reach-in behavior.",
        "body": "Workers may be tempted to guide product, wipe buildup, clear a snag, or pull scrap while the machine is moving. Those habits defeat guarding and training. Prevention requires both engineered barriers and disciplined operating behavior.",
        "list": [
          "Stop and isolate equipment before clearing a snag or buildup.",
          "Use approved tools and safe standoff positions when minor adjustments are allowed.",
          "Report any task that regularly tempts workers to reach into motion."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What makes a nip point especially dangerous?",
        "choices": [
          "It can pull a person in faster than they can react",
          "It is only hazardous at high voltage",
          "It only injures hands, not clothing",
          "It is safe if the machine is familiar"
        ],
        "answer": 0
      },
      {
        "question": "Which item should never be near exposed rotation?",
        "choices": [
          "Loose rags, sleeves, or jewelry",
          "A locked guard",
          "A fixed barrier",
          "A warning sign"
        ],
        "answer": 0
      },
      {
        "question": "Where do crush and shear hazards often exist?",
        "choices": [
          "Beside transfer points, moving frames, and side clearances",
          "Only at the emergency stop button",
          "Only inside electrical panels",
          "Only at the main operator station"
        ],
        "answer": 0
      },
      {
        "question": "What should you do if the job routinely tempts workers to reach into motion?",
        "choices": [
          "Report it so the task or guarding can be redesigned",
          "Accept it as normal production behavior",
          "Use bare hands instead of gloves",
          "Move faster and finish before the snag worsens"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/conveyors-rollers-belt-tracking-hazards",
    "label": "Conveyors, Rollers & Belt Tracking Hazards",
    "short": "Managing transfer points, return runs, tracking adjustments, and walk-by exposure around moving product systems",
    "icon": "🛞",
    "color": "#5A8F29",
    "regulation": "Conveyor guarding awareness — protect transfer, return, carry, and maintenance exposure points",
    "audience": "Conveyor operators, line workers, mechanics, cleaners, utility staff, and contractors",
    "minutes": 16,
    "slides": [
      {
        "heading": "Conveyors Create Hazard Zones Along the Whole System",
        "sub": "The danger is not limited to the head pulley or the discharge end.",
        "body": "Carry runs, return runs, take-up areas, tail pulleys, transfer points, skirts, rollers, and crossovers can all expose workers to pull-in, struck-by, and caught-between hazards. A conveyor that looks routine during production can become highly dangerous during adjustment, cleanup, or upset conditions.",
        "list": [
          "Walk the full conveyor path and identify every reach-in or cross-over hazard.",
          "Check both product flow areas and return-side contact points.",
          "Remember that accumulation zones can release material unexpectedly."
        ],
        "callout": {
          "label": "RULE",
          "text": "Treat the conveyor as a system of hazard points, not as a single machine at one end.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "Belt Tracking Problems Create Dangerous Improvisation",
        "sub": "Workers get hurt when they try to guide or observe a moving belt too closely.",
        "body": "A mis-tracking belt may drift, rub, spill material, or threaten to damage structure. That often leads workers to stand too close, peer into roll areas, or attempt informal adjustments while the system is running. Tracking work has to follow the approved method and safe body position.",
        "list": [
          "Never place hands or tools near moving rolls to “help” a belt track.",
          "Use designated adjustment points and stable body position outside the hazard zone.",
          "Escalate chronic tracking problems instead of normalizing repeated close exposure."
        ]
      },
      {
        "heading": "Crossovers and Walkways Need Their Own Controls",
        "sub": "People get injured when production paths become travel paths.",
        "body": "Workers often need to cross conveyors, retrieve dropped items, or pass near return runs during routine movement. Missing crossover points, broken guards, poor housekeeping, and blocked aisles push people into unsafe shortcuts over or under moving equipment.",
        "list": [
          "Use designated crossovers instead of climbing over conveyors.",
          "Keep housekeeping, scrap, and spilled product from blocking safe access routes.",
          "Repair missing toe boards, rails, and guarding before routine travel resumes."
        ]
      },
      {
        "heading": "Cleanup and Spills Change the Exposure",
        "sub": "Dust, scrap, sludge, fibers, or loose product make workers lean into danger zones.",
        "body": "Spills beneath conveyors and around rollers create a strong temptation to reach, rake, hose, or shovel close to moving parts. Wet or unstable footing makes that exposure worse. Cleanup must be planned so the worker stays outside the hazard zone or the conveyor is isolated.",
        "list": [
          "Do not clean under or beside moving contact points without safe clearance.",
          "Treat hosing, vacuuming, scraping, and shoveling as task-specific exposure work.",
          "Use lockout when the cleanup requires entry into guarded or reach-in areas."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Which conveyor areas can expose workers to injury?",
        "choices": [
          "Carry runs, return runs, transfer points, tail pulleys, and crossovers",
          "Only the discharge end",
          "Only electrical cabinets",
          "Only places with warning labels"
        ],
        "answer": 0
      },
      {
        "question": "What is the safest response to a chronic belt-tracking problem?",
        "choices": [
          "Use approved adjustment methods and escalate the root cause",
          "Guide the belt by hand",
          "Lean close to the roller to inspect while it runs",
          "Ignore it until failure"
        ],
        "answer": 0
      },
      {
        "question": "Why are blocked aisles around conveyors dangerous?",
        "choices": [
          "They push people into unsafe shortcuts over or near moving equipment",
          "They only create a housekeeping issue",
          "They improve observation angles",
          "They eliminate the need for crossovers"
        ],
        "answer": 0
      },
      {
        "question": "When should lockout be used during conveyor cleanup?",
        "choices": [
          "When the task requires entry into guarded or reach-in hazard areas",
          "Only after a serious injury",
          "Never for cleanup",
          "Only when management is watching"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/interlocks-e-stops-guard-bypass-risk",
    "label": "Interlocks, E-Stops & Guard Bypass Risk",
    "short": "Understanding why safety devices reduce exposure only when they are maintained and not defeated",
    "icon": "🛑",
    "color": "#5A8F29",
    "regulation": "Machine safeguarding awareness — safety devices must function as designed and not be bypassed",
    "audience": "Operators, maintenance, controls techs, supervisors, and anyone opening guarded access points",
    "minutes": 15,
    "slides": [
      {
        "heading": "Interlocks Are Part of the Guarding System",
        "sub": "A door switch, gate interlock, or light curtain is not optional convenience hardware.",
        "body": "Interlocks and presence-sensing devices are designed to stop or prevent hazardous motion when access is opened. If they are defeated, taped, blocked, misaligned, or ignored, the machine may look protected while the worker is directly exposed to dangerous movement.",
        "list": [
          "Treat interlock faults, nuisance trips, and repeated bypass behavior as serious safety signals.",
          "Use the approved troubleshooting process instead of defeating the device.",
          "Verify that motion actually stops when the protective device changes state."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never tape, hold, jumper, or otherwise defeat a guard interlock to keep production moving.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "Emergency Stops Limit Harm — They Do Not Replace Guards",
        "sub": "E-stops are for rapid response, not for routine exposure control.",
        "body": "An emergency stop can reduce how long dangerous motion continues after a problem is recognized, but it does not guarantee instant stop or safe approach. A worker should not rely on the presence of an E-stop as permission to place hands or body parts near operating equipment.",
        "list": [
          "Know where emergency stops are, but do not use them as your primary safeguard.",
          "Understand machine stopping time and residual motion after stop command.",
          "Inspect E-stop access so it is not blocked by product, pallets, hoses, or debris."
        ]
      },
      {
        "heading": "Bypass Behavior Usually Signals a Process Problem",
        "sub": "Workers bypass devices when the machine is hard to run safely.",
        "body": "Frequent bypassing often means the guarding design conflicts with the work method, the access point is needed too often, sensors are unreliable, or the production target pressures people into unsafe shortcuts. That is a management and engineering problem, not just an operator problem.",
        "list": [
          "Capture why the bypass temptation exists instead of only disciplining the symptom.",
          "Repair unreliable devices and redesign awkward access tasks.",
          "Keep troubleshooting under lockout or other approved safe state controls."
        ]
      },
      {
        "heading": "Testing Safety Devices Requires Discipline",
        "sub": "A safety component is only trustworthy if its function is verified after maintenance or disturbance.",
        "body": "Guard switches, E-stops, reset circuits, and stop functions have to be checked after repair, adjustment, cleaning, or impact. A damaged actuator or a misaligned switch can leave the machine able to run even though workers believe the protection is active.",
        "list": [
          "Function-test safety devices after work and before releasing the machine.",
          "Do not return equipment to service with known safety-device defects.",
          "Document repeated device failures so the underlying cause is corrected."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is the main purpose of an interlock?",
        "choices": [
          "Stop or prevent hazardous motion when access protection is opened",
          "Replace the need for guards",
          "Allow faster maintenance",
          "Increase product throughput"
        ],
        "answer": 0
      },
      {
        "question": "Why is an emergency stop not a substitute for guarding?",
        "choices": [
          "It reduces harm after recognition but does not make reach-in exposure acceptable",
          "It always stops motion instantly",
          "It is only for electrical faults",
          "It removes all stored energy"
        ],
        "answer": 0
      },
      {
        "question": "Repeated guard bypassing usually means what?",
        "choices": [
          "There is a process, design, or reliability problem driving unsafe behavior",
          "The guard is working perfectly",
          "Training is unnecessary",
          "The machine is safer than expected"
        ],
        "answer": 0
      },
      {
        "question": "When should safety devices be function-tested?",
        "choices": [
          "After maintenance, adjustment, cleaning, or impact and before release",
          "Only once at installation",
          "Only after an incident",
          "Never if the device looks fine"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/jam-clearing-cleaning-minor-servicing-boundaries",
    "label": "Jam Clearing, Cleaning & Minor Servicing Boundaries",
    "short": "Knowing when routine line attention becomes servicing that requires isolation and zero-energy control",
    "icon": "🧰",
    "color": "#5A8F29",
    "regulation": "OSHA servicing and machine guarding awareness — routine attention cannot drift into unprotected hazardous-energy exposure",
    "audience": "Operators, mechanics, sanitation crews, utility workers, line leads, and contractors",
    "minutes": 16,
    "slides": [
      {
        "heading": "Routine Attention Can Turn Into Servicing Fast",
        "sub": "A small jam, wipe-down, or adjustment can become hazardous-energy work in seconds.",
        "body": "Production teams often view jam clearing, scrap removal, buildup cleanup, and sensor adjustment as quick routine tasks. But when the task requires reaching past guards, exposing body parts to motion, or entering a hazard zone, it is no longer harmless line attention. The work method must match the exposure.",
        "list": [
          "Ask whether the task keeps the worker outside normal guarded operation.",
          "Treat access inside the hazard zone as a servicing trigger unless a fully protected method exists.",
          "Do not let “it only takes a second” replace the actual hazard analysis."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "If the task requires exposure to hazardous motion or stored energy, stop and use the correct isolation method.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "Minor Servicing Exceptions Are Narrow",
        "sub": "Workers misuse the exception when the task is frequent but still dangerous.",
        "body": "Some standards allow limited exceptions for specific routine, repetitive tasks during normal production only when effective alternative protection is in place. That is not permission to reach into moving machines because the jam is familiar. The exception depends on true equivalency of protection, not on speed or habit.",
        "list": [
          "Use the exception only when the approved method keeps the worker protected.",
          "Do not confuse “common task” with “safe task.”",
          "Escalate any recurring jam that cannot be handled outside the hazard zone."
        ]
      },
      {
        "heading": "Cleaning Changes Body Position and Visibility",
        "sub": "Wiping, scraping, washing, vacuuming, or blowing down usually moves the worker closer to danger.",
        "body": "Housekeeping tools, hoses, vacuums, and washdown methods can pull workers into pinch points, hide moving contact areas, or create unstable footing. A cleaning task around machine motion needs defined boundaries, not improvisation.",
        "list": [
          "Keep tools, hoses, and hands outside nip and entanglement zones.",
          "Account for slippery floors, hidden return runs, and reduced visibility during washdown.",
          "Use lockout when the cleaning method requires entry into the guarded zone."
        ]
      },
      {
        "heading": "Restart After Service Is Part of the Hazard",
        "sub": "A machine is not safe just because the jam is gone.",
        "body": "After clearing or servicing, guards must be reinstalled, tools removed, people accounted for, and the machine released through the approved startup sequence. Surprise restart, incomplete reassembly, or hidden personnel exposure can turn a successful fix into a second incident.",
        "list": [
          "Verify guards, covers, and access doors are back in service position.",
          "Confirm all people are clear and the area is ready before re-energization.",
          "Never restart from inside the hazard zone or while another person is still exposed."
        ]
      }
    ],
    "quiz": [
      {
        "question": "When does a quick line task become servicing?",
        "choices": [
          "When it requires exposure to hazardous motion or entry into the hazard zone",
          "When it takes more than ten minutes",
          "When only maintenance does it",
          "When the machine is loud"
        ],
        "answer": 0
      },
      {
        "question": "What is the main mistake workers make with minor-servicing exceptions?",
        "choices": [
          "Using them as permission to reach into danger without equivalent protection",
          "Documenting the task",
          "Using approved tools",
          "Reporting a repeated jam"
        ],
        "answer": 0
      },
      {
        "question": "Why can cleaning tasks be especially risky?",
        "choices": [
          "They change body position, visibility, and footing near motion",
          "They eliminate pinch points",
          "They always qualify as office work",
          "They make machine guards unnecessary"
        ],
        "answer": 0
      },
      {
        "question": "What must happen before restart after jam clearing or service?",
        "choices": [
          "Guards reinstalled, tools removed, people accounted for, and approved startup followed",
          "Restart immediately to test by sound",
          "Only the operator has to know",
          "Nothing if the jam was small"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/rotating-equipment-shafts-couplings-fans",
    "label": "Rotating Equipment, Shafts, Couplings & Fan Hazards",
    "short": "Controlling exposure around exposed rotation, driven components, and air-moving equipment",
    "icon": "🌀",
    "color": "#5A8F29",
    "regulation": "Mechanical power transmission awareness — guard exposed rotation and contact points",
    "audience": "Maintenance, operators, utilities, HVAC, pump, fan, and process-equipment personnel",
    "minutes": 15,
    "slides": [
      {
        "heading": "Rotating Equipment Injures Through Contact and Projection",
        "sub": "Workers think of rotating hazards as contact-only, but debris and failure also matter.",
        "body": "Exposed shafts, couplings, fan blades, impellers, and rotating hubs can grab material, strike body parts, or throw fragments if components fail. Guards reduce routine contact exposure and help contain incidental projection from minor component damage.",
        "list": [
          "Guard rotating power-transmission parts even when access is infrequent.",
          "Do not stand in line with damaged fan guards or exposed rotating hardware.",
          "Report vibration, rubbing, looseness, and guard contact immediately."
        ],
        "callout": {
          "label": "RULE",
          "text": "Low-speed exposed rotation is still a serious hazard if it can catch, wrap, strike, or throw material.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "Couplings and Shaft Ends Are Commonly Underestimated",
        "sub": "A small exposed rotating feature can cause a major entanglement incident.",
        "body": "Workers often underestimate couplings, shaft projections, and rotating bolts because they look compact or partly shielded. Those features can catch clothing, gloves, strings, zip ties, or hair and pull the person toward the machine before the hazard is recognized.",
        "list": [
          "Keep guards fully covering shaft ends, couplings, and moving connectors.",
          "Never use rags or hands near exposed rotating connectors to check leaks or vibration.",
          "Control clothing and tool lanyards around rotating assemblies."
        ]
      },
      {
        "heading": "Fans and Air-Moving Equipment Need Guarding Too",
        "sub": "Airflow equipment can injure even when the blades are behind a grille.",
        "body": "Fan guards must prevent finger, tool, and debris entry while allowing safe airflow. Damaged grilles, oversized openings, missing panels, and improvised covers create strike and cut exposure. Large fans also create noise, projection, and balance hazards during maintenance or upset conditions.",
        "list": [
          "Inspect fan guards, access panels, and intake/exhaust screens routinely.",
          "Isolate equipment before reaching through an opening to clear obstruction or debris.",
          "Do not assume a grille is adequate if the opening allows reach-in contact."
        ]
      },
      {
        "heading": "Mechanical Condition Is Part of the Guarding System",
        "sub": "Poor alignment and damaged components increase contact and failure risk.",
        "body": "Guarding and mechanical reliability are linked. Bent guards, rubbing covers, damaged bearings, loose hardware, and vibration all increase the chance that a worker will interact with the machine unsafely or that the machine will fail while someone is nearby.",
        "list": [
          "Repair mechanical defects that repeatedly damage guards or require unsafe access.",
          "Do not keep running equipment whose condition defeats the guarding design.",
          "Treat repeated guard contact as a reliability and safety problem together."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why do rotating components need guards even at low speed?",
        "choices": [
          "They can still catch, wrap, strike, or throw material",
          "Only high-speed equipment is dangerous",
          "Guards are only decorative on pumps and fans",
          "Low speed eliminates entanglement"
        ],
        "answer": 0
      },
      {
        "question": "Which rotating features are commonly underestimated?",
        "choices": [
          "Couplings and shaft ends",
          "Painted motor housings",
          "Nameplates",
          "Closed electrical cabinets"
        ],
        "answer": 0
      },
      {
        "question": "What is a key rule for fans and air-moving equipment?",
        "choices": [
          "Isolate before reaching through an opening to clear debris",
          "Use your hand to check blade clearance while it coasts",
          "Ignore damaged grilles if airflow is normal",
          "Assume every grille opening is protective"
        ],
        "answer": 0
      },
      {
        "question": "What does repeated guard damage often signal?",
        "choices": [
          "A deeper mechanical reliability problem that also affects safety",
          "That the guard is too strong",
          "That no inspection is needed",
          "That the equipment is safer than expected"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/clothing-gloves-hair-entanglement-prevention",
    "label": "Clothing, Gloves, Hair & Entanglement Prevention",
    "short": "Preventing the worker from bringing the first caught object into the hazard zone",
    "icon": "🧤",
    "color": "#5A8F29",
    "regulation": "Machine guarding exposure control — personal apparel can become the first point of entanglement",
    "audience": "All personnel working near rotating equipment, conveyors, rollers, drills, fans, or driven machinery",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Machine Often Catches the Item Before It Catches the Person",
        "sub": "Gloves, sleeves, strings, rags, and hair are often the first link in the injury chain.",
        "body": "Workers sometimes focus only on keeping fingers away from motion, but entanglement often begins when clothing or carried material contacts the machine first. Once an item is caught, the body follows. Preventing entanglement includes controlling what the worker wears, carries, and drags near motion.",
        "list": [
          "Secure hair, sleeves, and loose outerwear before entering the work area.",
          "Keep wipes, cords, lanyards, strings, and sampling tubing away from rotating or converging motion.",
          "Do not carry loose material near belts, shafts, rollers, or couplings."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never use gloved hands to guide, steady, or wipe moving equipment unless the approved method specifically protects against entanglement.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "Gloves Can Help or Harm Depending on the Task",
        "sub": "PPE selection has to match the motion hazard, not just the material hazard.",
        "body": "Gloves may protect against cuts, heat, or chemicals, but around rotating or pulling-in motion they can also become the part that gets caught first. The right decision depends on the hazard pair: product/material exposure and machine motion exposure together.",
        "list": [
          "Do not assume more PPE automatically means safer machine work.",
          "Evaluate glove use specifically for rotating and nip-point tasks.",
          "Follow site rules for where gloves must be removed near entanglement hazards."
        ]
      },
      {
        "heading": "Tool Lanyards, Radios, and Accessories Need Control",
        "sub": "Modern gear creates new snag points near machinery.",
        "body": "Badge reels, drawstrings, earbud cords, radio wires, hoodie strings, and tool lanyards can all enter moving parts. A worker who is otherwise cautious can still be pulled toward the machine by an accessory that catches first.",
        "list": [
          "Remove or secure accessories before work near motion.",
          "Keep radio cords and lanyards out of machine reach envelopes.",
          "Treat accessories like part of the body path when planning the task."
        ]
      },
      {
        "heading": "Entanglement Prevention Is a Work-Prep Step",
        "sub": "Apparel control has to happen before the job starts, not after a near miss.",
        "body": "The safest time to correct loose clothing, hair, and accessories is before entering the machine area. Supervisors and crews should treat entanglement control the same way they treat glasses, hard hats, or hearing protection: part of the job setup, not a personal preference.",
        "list": [
          "Use pre-job checks to catch clothing and accessory problems early.",
          "Correct each other before work begins near rotating equipment.",
          "Stop work when the task requires apparel that conflicts with the machine hazard."
        ]
      }
    ],
    "quiz": [
      {
        "question": "How does entanglement often begin?",
        "choices": [
          "A clothing item, glove, cord, or hair gets caught first",
          "Only bare fingers can be caught",
          "It only happens during maintenance",
          "It starts with electrical shock"
        ],
        "answer": 0
      },
      {
        "question": "Why can gloves create extra risk near rotating equipment?",
        "choices": [
          "They may become the first item caught in the motion hazard",
          "They eliminate thermal hazards",
          "They make every task safer automatically",
          "They remove the need for guarding"
        ],
        "answer": 0
      },
      {
        "question": "Which accessories can become snag points?",
        "choices": [
          "Drawstrings, badge reels, cords, radios, and lanyards",
          "Only steel-toe boots",
          "Only hard hats",
          "Only safety glasses"
        ],
        "answer": 0
      },
      {
        "question": "When should entanglement prevention be checked?",
        "choices": [
          "Before entering the machine area as part of work prep",
          "Only after a near miss",
          "Only during annual training",
          "Only when maintenance is present"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/guard-inspection-reinstallation-startup-after-removal",
    "label": "Guard Inspection, Reinstallation & Startup After Guard Removal",
    "short": "Making sure guards return to full protection before the machine is released back to service",
    "icon": "✅",
    "color": "#5A8F29",
    "regulation": "Machine guarding maintenance awareness — removed protection must be restored and verified before restart",
    "audience": "Maintenance, supervisors, operators, contractors, and line leads returning equipment to service",
    "minutes": 15,
    "slides": [
      {
        "heading": "A Machine Is Not Ready Just Because the Repair Is Done",
        "sub": "Guard restoration is part of the job, not an afterthought after the wrench work ends.",
        "body": "When a guard is removed for maintenance, access, cleaning, alignment, or troubleshooting, the return-to-service step has to restore full protection. Missing fasteners, loose mesh, misalignment, missing interlock actuators, and temporary covers create a machine that may run but is not safe to release.",
        "list": [
          "Treat guard restoration as a required completion step before startup.",
          "Check fit, attachment, opening size, and device function after reinstalling.",
          "Do not leave partial reassembly for the next shift."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "If the machine cannot be returned with guarding fully restored, it is not ready for production.",
          "color": "#5A8F29"
        }
      },
      {
        "heading": "Startup Creates a Fresh Exposure Window",
        "sub": "Workers are often still close when the machine is first released.",
        "body": "After service, people may still be near the hazard zone, tools may remain inside the envelope, and the machine may behave differently on first motion. Startup has to include clear communication, personnel accountability, and a controlled first run.",
        "list": [
          "Verify everyone is clear and knows startup is about to occur.",
          "Remove tools, rags, hoses, and temporary supports from the machine area.",
          "Use the approved startup sequence and observe from a safe position."
        ]
      },
      {
        "heading": "Function Matters as Much as Appearance",
        "sub": "A good-looking guard can still fail if the safety function is wrong.",
        "body": "A reinstalled guard must do more than look aligned. Interlocks must function, access doors must latch, viewing panels must be secure, and the guard must resist routine vibration and contact. Visual acceptance alone is not enough when the machine depends on that protection.",
        "list": [
          "Function-test interlocked or access-controlled guards before release.",
          "Look for vibration, rubbing, movement, and gap growth during trial run.",
          "Correct the defect before production if the guard does not stay protective."
        ]
      },
      {
        "heading": "Documentation and Handover Prevent Repeat Exposure",
        "sub": "The next shift needs to know the machine status clearly.",
        "body": "Maintenance completion, remaining restrictions, test results, and any required follow-up must be communicated at handoff. Poor handover causes operators to assume the machine is fully restored when it may still be on restricted status or awaiting a final correction.",
        "list": [
          "Document what was removed, restored, tested, and any remaining issues.",
          "Communicate startup limitations or hold points clearly to operations.",
          "Do not hand over a machine with undocumented safety deficiencies."
        ]
      }
    ],
    "quiz": [
      {
        "question": "When is a machine ready for production after guard removal?",
        "choices": [
          "Only after guarding is fully restored and verified",
          "As soon as the mechanical repair is complete",
          "When the supervisor is in a hurry",
          "When the machine can jog"
        ],
        "answer": 0
      },
      {
        "question": "What must happen before startup?",
        "choices": [
          "People accounted for, tools removed, and startup communicated",
          "Only the mechanic needs to know",
          "Nothing if the jam is cleared",
          "Startup from inside the hazard zone is acceptable"
        ],
        "answer": 0
      },
      {
        "question": "Why is visual guard appearance alone not enough?",
        "choices": [
          "The safety function must also work correctly under motion",
          "Paint color can hide defects",
          "Operators prefer different styles",
          "Visual checks replace testing"
        ],
        "answer": 0
      },
      {
        "question": "What does good handover prevent?",
        "choices": [
          "Repeat exposure caused by assumptions about machine status",
          "The need for documentation",
          "Any future inspection",
          "Normal startup communication"
        ],
        "answer": 0
      }
    ]
  }
]


function makeModuleComponent(module) {
  return function MachineGuardingModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const GuardingFundamentalsPointOfOperationTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[0])
export const NipPointsEntanglementTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[1])
export const ConveyorsRollersTrackingTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[2])
export const InterlocksEStopsBypassTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[3])
export const JamClearingMinorServicingTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[4])
export const RotatingEquipmentShaftsFansTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[5])
export const ClothingGlovesHairEntanglementTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[6])
export const GuardReinstallationStartupTraining = makeModuleComponent(MACHINE_GUARDING_PHASE1_MODULES[7])
