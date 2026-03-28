import TrainingModuleShell from './TrainingModuleShell.jsx'

export const RESPIRATORY_PROTECTION_PHASE1_MODULES = [
  {
    "path": "/respiratory-hazard-recognition",
    "label": "Respiratory Hazard Recognition",
    "short": "Recognizing when a job can damage lungs or overwhelm breathing",
    "icon": "🫁",
    "color": "#6EC1E4",
    "regulation": "OSHA 29 CFR 1910.134 — recognition of airborne exposure and respiratory hazard triggers",
    "audience": "All personnel who work around dusts, fumes, mists, vapors, gases, combustion products, or low-oxygen spaces",
    "minutes": 15,
    "slides": [
      {
        "heading": "Lung Hazards Often Arrive Before Workers Feel the Damage",
        "sub": "Respiratory exposure is easy to normalize because it is often invisible or delayed.",
        "body": "Workers get used to odors, dust clouds, hot fumes, and routine vapors. That familiarity is dangerous. A job can damage lungs, worsen asthma, irritate airways, or create immediate life-threatening breathing conditions even when the task looks ordinary.",
        "list": [
          "Do not judge air safety by smell alone.",
          "A “normal” dusty or smoky job may still exceed safe exposure limits.",
          "People with asthma or other airway conditions can be harmed faster, but healthy workers are not protected by feeling fine."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the air can be inhaled, it must be evaluated like any other serious hazard.",
          "color": "#6EC1E4"
        }
      },
      {
        "heading": "Different Airborne Hazards Behave Differently",
        "sub": "Dust, fume, mist, vapor, and gas are not interchangeable.",
        "body": "Solid particles, metal fume, chemical mist, solvent vapor, and toxic gases enter the body in different ways and require different controls. The same room can contain more than one respiratory hazard at once, which means one simple rule of thumb is never enough.",
        "list": [
          "Dust often comes from handling, grinding, drying, or cleanup.",
          "Fume forms when material is heated and condenses into very small particles.",
          "Vapors and gases can spread beyond the point of release and collect in low or poorly ventilated areas."
        ]
      },
      {
        "heading": "Warning Signs Are Useful, But Late",
        "sub": "Coughing, burning eyes, tight chest, or dizziness mean exposure is already happening.",
        "body": "Workers should never wait for symptoms before taking action. Irritation, shortness of breath, headache, or unusual fatigue may appear after significant exposure has already occurred. Relying on personal tolerance is especially dangerous in mixed crews where one worker may be symptomatic sooner than another.",
        "list": [
          "Stop and report unusual odors, visible haze, or breathing irritation immediately.",
          "Treat respiratory complaints from coworkers as an operating signal, not as weakness.",
          "A job that makes one worker wheeze, cough, or feel faint is not under control."
        ]
      },
      {
        "heading": "Hierarchy of Controls Still Comes First",
        "sub": "Respirators are important, but they are not the first control.",
        "body": "Good respiratory protection begins with eliminating the source, enclosing the process, improving local exhaust, reducing release during transfer, wetting dust when appropriate, and limiting exposure time. Respirators are part of a larger control package, not permission to ignore bad conditions.",
        "list": [
          "Fix the release point before issuing more masks.",
          "Use local exhaust, process covers, hoods, and housekeeping controls.",
          "Pair PPE with work-practice controls and exposure evaluation."
        ]
      },
      {
        "heading": "Know When to Escalate",
        "sub": "Some air conditions move from nuisance to emergency quickly.",
        "body": "Unknown atmospheres, oxygen-deficient spaces, toxic-gas releases, heavy smoke, strong solvent concentration, or sudden breathing distress require immediate escalation. Supervisors and workers must know when the job must stop and when emergency response replaces routine PPE selection.",
        "list": [
          "Unknown atmosphere = stop work until evaluated.",
          "Severe breathing symptoms require immediate medical attention.",
          "IDLH conditions demand emergency procedures, not improvised filtering masks."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "The right first question is always: what is in the air, and how do we know?",
        "body": "Respiratory protection starts with hazard recognition. Identify the airborne hazard, control the release where possible, verify the right PPE, and escalate quickly when the atmosphere is unknown or worsening.",
        "list": [
          "Recognize the hazard type.",
          "Control the release before relying on PPE.",
          "Do not wait for symptoms before acting.",
          "Stop work when the air is unknown or obviously deteriorating."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is a bad way to decide whether air is safe?",
        "choices": [
          "Using exposure data",
          "Using ventilation information",
          "Relying on smell alone",
          "Reviewing the task"
        ],
        "answer": 2
      },
      {
        "question": "Which condition can make a worker more vulnerable to airborne exposure?",
        "choices": [
          "Asthma",
          "Hard hat use",
          "Steel-toe boots",
          "Day shift scheduling"
        ],
        "answer": 0
      },
      {
        "question": "Which statement is true?",
        "choices": [
          "Dust and vapor are the same hazard",
          "A familiar job cannot create respiratory risk",
          "Symptoms may appear after exposure has already occurred",
          "If no one complains, the air is proven safe"
        ],
        "answer": 2
      },
      {
        "question": "What should come before issuing more respirators when possible?",
        "choices": [
          "Source control and ventilation",
          "Ignoring the release point",
          "Reducing training",
          "Removing labels"
        ],
        "answer": 0
      },
      {
        "question": "What should happen when the atmosphere is unknown?",
        "choices": [
          "Continue briefly",
          "Stop until evaluated",
          "Use any cloth covering",
          "Open one door and keep working"
        ],
        "answer": 1
      },
      {
        "question": "Which is an example of a respiratory hazard trigger?",
        "choices": [
          "Visible haze",
          "New solvent odor",
          "Worker chest tightness",
          "All of the above"
        ],
        "answer": 3
      },
      {
        "question": "Why is it dangerous to rely on personal tolerance?",
        "choices": [
          "Everyone reacts the same",
          "Some workers are affected sooner than others",
          "Tolerance improves controls",
          "It removes the need for ventilation"
        ],
        "answer": 1
      },
      {
        "question": "What does coughing or airway irritation indicate?",
        "choices": [
          "Nothing important",
          "Exposure is already occurring",
          "The task is nearly done",
          "The respirator is optional"
        ],
        "answer": 1
      },
      {
        "question": "Which control is part of the hierarchy before PPE?",
        "choices": [
          "Local exhaust",
          "Guessing from experience",
          "Ignoring housekeeping",
          "Using unmarked containers"
        ],
        "answer": 0
      },
      {
        "question": "What is the core question in respiratory hazard recognition?",
        "choices": [
          "Who worked here last?",
          "What is in the air, and how do we know?",
          "Is the room warm?",
          "Did the job used to be safe?"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/respiratory-dust-fume-mist-vapor-gas",
    "label": "Dust, Fume, Mist, Vapor & Gas Basics",
    "short": "Understanding how different airborne contaminants behave and spread",
    "icon": "🌫️",
    "color": "#6EC1E4",
    "regulation": "Respiratory hazard awareness — contaminant type affects controls, limits, and PPE choice",
    "audience": "Operators, maintenance, cleanup crews, lab staff, utility workers, chemical handlers, and supervisors",
    "minutes": 16,
    "slides": [
      {
        "heading": "Particle Size Changes Exposure Risk",
        "sub": "The smallest airborne material is often the easiest to inhale deep into the lungs.",
        "body": "Large visible dust may settle quickly, while fine particles remain suspended and travel farther. Fume from hot work or melt operations can be especially dangerous because the particles are extremely small and can reach deep lung tissue.",
        "list": [
          "Visible dust is not the whole problem.",
          "Fine particulate can remain airborne after the obvious cloud clears.",
          "Small particles often require stronger control than broom-and-air cleanup."
        ]
      },
      {
        "heading": "Fume Comes From Heat",
        "sub": "Welding, cutting, grinding, melting, and high-temperature process work can create metal or chemical fume.",
        "body": "When materials are heated intensely, they can vaporize and then condense into microscopic particulate. Workers may only notice smoke or odor, but the hazard may include toxic metals, combustion byproducts, or process chemicals.",
        "list": [
          "Hot work and furnace areas should never be judged by visibility alone.",
          "Fume can travel outside the immediate task area.",
          "Nearby workers may need protection even if they are not doing the hot work."
        ]
      },
      {
        "heading": "Mist and Aerosol Spread With Pressure and Agitation",
        "sub": "Sprays, washdowns, atomizing nozzles, leaks, and high-pressure releases can create inhalation hazards.",
        "body": "Liquids do not have to become vapor to become airborne. Chemical feed systems, wash chemicals, cooling water treatment, and pressure leaks can generate mist or aerosol that reaches the breathing zone quickly.",
        "list": [
          "High-pressure leaks can create very fine airborne droplets.",
          "A mist can carry corrosive or toxic material.",
          "Splash control alone does not solve inhalation exposure."
        ]
      },
      {
        "heading": "Vapors and Gases Fill Space Differently",
        "sub": "Some contaminants evaporate from liquid surfaces; others are released as gas directly.",
        "body": "Solvent vapors, refrigerants, fuel gas, and toxic gases can move with airflow, displace oxygen, or collect in low points depending on density and conditions. Workers must know whether the hazard can travel beyond the immediate source and whether monitoring is required.",
        "list": [
          "Some vapors and gases are heavier than air and collect low.",
          "Others disperse more readily but still remain hazardous.",
          "Confined or poorly ventilated areas can turn a small release into a major exposure."
        ]
      },
      {
        "heading": "Controls Must Match the Contaminant",
        "sub": "One mask style or one housekeeping habit will not control every hazard.",
        "body": "Dust control may require enclosure, wet methods, or HEPA vacuuming. Fume control may require local exhaust at the source. Vapor and gas hazards may need monitoring, ventilation, line integrity, and the correct cartridge or supplied-air decision. The contaminant type shapes the response.",
        "list": [
          "Identify the contaminant before selecting PPE.",
          "Use the control that matches how the contaminant is created and spreads.",
          "Treat mixed exposures as a system problem, not a single-chemical problem."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "Know what the contaminant is before deciding how to control it.",
        "body": "Dust, fume, mist, vapor, and gas behave differently. Good respiratory protection requires matching the control method and respirator type to the actual contaminant and exposure condition.",
        "list": [
          "Fine particles can stay airborne long after visible dust settles.",
          "Fume is a heat-generated particulate hazard.",
          "Mist can come from pressure, spray, or agitation.",
          "Vapor and gas movement must be understood before entry or task continuation."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why can very fine particulate be more dangerous than visible coarse dust?",
        "choices": [
          "It always smells stronger",
          "It can reach deep into the lungs",
          "It is easier to sweep",
          "It cannot move beyond the source"
        ],
        "answer": 1
      },
      {
        "question": "What commonly creates fume?",
        "choices": [
          "Freezing water",
          "High-heat processes like welding or melting",
          "Quiet office work",
          "Typing labels"
        ],
        "answer": 1
      },
      {
        "question": "Can liquid systems create inhalation hazards without becoming vapor?",
        "choices": [
          "Yes, through mist or aerosol",
          "No, liquids cannot become airborne",
          "Only outdoors",
          "Only at night"
        ],
        "answer": 0
      },
      {
        "question": "Which hazard may collect in low areas depending on density?",
        "choices": [
          "Gas or vapor",
          "A painted handrail",
          "A paper SDS",
          "A hard hat"
        ],
        "answer": 0
      },
      {
        "question": "What is a poor control for combustible or toxic dust cleanup?",
        "choices": [
          "HEPA vacuuming",
          "Enclosure",
          "Compressed-air blowdown",
          "Dust minimization"
        ],
        "answer": 2
      },
      {
        "question": "What should determine respirator selection?",
        "choices": [
          "Color preference",
          "Contaminant type and exposure condition",
          "Who is closest to the door",
          "Which brand is cheapest"
        ],
        "answer": 1
      },
      {
        "question": "Nearby workers may need protection from fume even if they are not doing the hot work.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 0
      },
      {
        "question": "Which statement is correct?",
        "choices": [
          "Mist only affects skin",
          "Vapor and gas movement must be understood before task continuation",
          "Dust always settles immediately",
          "All contaminants use the same control"
        ],
        "answer": 1
      },
      {
        "question": "A high-pressure chemical leak can create what kind of inhalation hazard?",
        "choices": [
          "Aerosol or mist",
          "Only noise",
          "Only heat",
          "Only a labeling issue"
        ],
        "answer": 0
      },
      {
        "question": "What is the key lesson of this module?",
        "choices": [
          "All airborne hazards behave the same",
          "Control methods must match the contaminant",
          "Only visible dust matters",
          "Smell is the best monitor"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/respiratory-apr-papr-supplied-air-scba",
    "label": "APR vs PAPR vs Supplied Air vs SCBA",
    "short": "Choosing the respirator class that matches the actual air hazard",
    "icon": "🎭",
    "color": "#6EC1E4",
    "regulation": "OSHA 29 CFR 1910.134 — respirator class must match atmosphere and exposure condition",
    "audience": "Safety leads, supervisors, permit issuers, maintenance planners, emergency teams, and exposed workers",
    "minutes": 18,
    "slides": [
      {
        "heading": "Not Every Respirator Provides the Same Protection",
        "sub": "A filtering facepiece and an SCBA are not interchangeable tools.",
        "body": "Air-purifying respirators remove specific contaminants from ambient air. Powered air-purifying respirators assist airflow through filters. Supplied-air systems bring breathing air from a separate clean source. SCBA provides a self-contained emergency air supply. Choosing among them depends on oxygen level, contaminant identity, concentration, and emergency conditions.",
        "list": [
          "APR and PAPR require an atmosphere suitable for air purification.",
          "Supplied-air and SCBA are used when ambient air is not acceptable to breathe.",
          "Emergency response planning must identify which class applies before the event occurs."
        ],
        "callout": {
          "label": "RULE",
          "text": "No air-purifying respirator is acceptable for oxygen-deficient or unknown atmospheres.",
          "color": "#6EC1E4"
        }
      },
      {
        "heading": "APR and PAPR Need Known, Controlled Conditions",
        "sub": "Air-purifying devices are for specific contaminants within controlled limits.",
        "body": "APR and PAPR can work very well when the contaminant is known, the concentration is understood, the cartridge or filter is appropriate, and the job is not IDLH. They are not a shortcut for uncertain air conditions or emergency rescue.",
        "list": [
          "Confirm the contaminant identity and exposure range.",
          "Use the right filter or cartridge for the hazard.",
          "Stop if the atmosphere changes outside the planned condition."
        ]
      },
      {
        "heading": "Supplied-Air Respirators Separate the Worker From Ambient Air",
        "sub": "When air quality around the task is unacceptable, the breathing source must come from elsewhere.",
        "body": "Certain coatings, vessel interiors, line work, process cleaning, and other tasks may require a remote breathing-air source. Supplied-air systems reduce reliance on the surrounding atmosphere but add hose management, air-quality, and escape-planning requirements.",
        "list": [
          "Breathing air source quality matters as much as facepiece selection.",
          "Hose routing and emergency escape must be planned.",
          "Workers need training for both normal operation and upset conditions."
        ]
      },
      {
        "heading": "SCBA Is For Emergency or IDLH Conditions",
        "sub": "Self-contained breathing apparatus is not a casual upgrade from APR.",
        "body": "SCBA is typically reserved for immediately dangerous to life or health conditions, toxic-gas emergencies, rescue, unknown atmospheres, or oxygen-deficient locations where normal air cannot be trusted. It requires dedicated training, inspection, readiness checks, and disciplined emergency use.",
        "list": [
          "SCBA supports entry into conditions no filter mask can make safe.",
          "Cylinder duration affects planning and rescue timing.",
          "Emergency teams must maintain readiness, not just equipment ownership."
        ]
      },
      {
        "heading": "Selection Depends on the Atmosphere, Not Preference",
        "sub": "Comfort, familiarity, or convenience do not decide respirator class.",
        "body": "The right question is what the atmosphere demands. If oxygen is low, contaminants are unknown, or concentrations may spike dangerously, APR and PAPR are not enough. If conditions are stable and well characterized, those tools may be appropriate. Selection follows hazard evaluation and written program rules.",
        "list": [
          "Known hazard + controlled concentration may allow APR/PAPR.",
          "Unknown or oxygen-deficient hazard requires supplied air or SCBA.",
          "Emergency response requires preplanned respirator class decisions."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "Know when filtering is acceptable and when supplied breathing air is mandatory.",
        "body": "APR, PAPR, supplied-air, and SCBA each serve a different purpose. The atmosphere decides the class. Unknown air, low oxygen, or IDLH conditions require a breathing-air source independent of the surrounding environment.",
        "list": [
          "Filtering devices do not add oxygen.",
          "Unknown atmosphere means escalate, not improvise.",
          "Emergency teams need the right class ready before the release or entry."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Which respirator type is unacceptable for an oxygen-deficient atmosphere?",
        "choices": [
          "APR",
          "SCBA",
          "Supplied-air respirator",
          "All breathing-air systems"
        ],
        "answer": 0
      },
      {
        "question": "What does PAPR do?",
        "choices": [
          "Adds oxygen from a cylinder",
          "Uses powered airflow through filters",
          "Eliminates fit requirements",
          "Works in unknown atmospheres automatically"
        ],
        "answer": 1
      },
      {
        "question": "When is SCBA typically appropriate?",
        "choices": [
          "Routine office tasks",
          "IDLH or unknown atmosphere response",
          "Any dusty cleanup",
          "Any time a worker prefers it"
        ],
        "answer": 1
      },
      {
        "question": "What must be known for APR/PAPR use?",
        "choices": [
          "Contaminant identity and suitable conditions",
          "Only the worker’s name",
          "Only the room temperature",
          "Only the shift schedule"
        ],
        "answer": 0
      },
      {
        "question": "Supplied-air respirators separate the worker from what?",
        "choices": [
          "The job permit",
          "Ambient air quality",
          "All training requirements",
          "All facepiece maintenance"
        ],
        "answer": 1
      },
      {
        "question": "What is a wrong basis for respirator selection?",
        "choices": [
          "Atmospheric hazard evaluation",
          "Convenience or familiarity",
          "Oxygen level",
          "Exposure condition"
        ],
        "answer": 1
      },
      {
        "question": "Do air-purifying respirators provide oxygen?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "Which condition demands escalation instead of a simple filter mask?",
        "choices": [
          "Unknown atmosphere",
          "Known nuisance dust only",
          "Routine outdoor sweeping",
          "Label review"
        ],
        "answer": 0
      },
      {
        "question": "What affects SCBA planning during response?",
        "choices": [
          "Cylinder duration",
          "Poster color",
          "Clipboard size",
          "Parking lot layout"
        ],
        "answer": 0
      },
      {
        "question": "What is the key message?",
        "choices": [
          "Use the most comfortable respirator",
          "The atmosphere decides the respirator class",
          "Every respirator can be used anywhere",
          "Filtering devices work for all emergencies"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/respiratory-cartridge-selection-changeout",
    "label": "Cartridge Selection & Changeout Basics",
    "short": "Why the wrong cartridge, expired cartridge, or overloaded filter can fail quietly",
    "icon": "🔄",
    "color": "#6EC1E4",
    "regulation": "OSHA 29 CFR 1910.134 — correct cartridge selection and end-of-service management",
    "audience": "Workers using APR/PAPR systems, supervisors, safety coordinators, and storeroom personnel",
    "minutes": 15,
    "slides": [
      {
        "heading": "A Respirator Is Only As Good As The Media Installed",
        "sub": "The facepiece can look fine while the wrong cartridge is doing almost nothing.",
        "body": "Particle filters, organic vapor cartridges, acid-gas cartridges, and combination units are designed for specific hazards. If the contaminant is misidentified or the cartridge choice does not match the task, the worker may receive little real protection despite wearing a respirator correctly.",
        "list": [
          "Select media based on the actual hazard, not habit.",
          "Combination exposures may need combination cartridges.",
          "If the hazard changes, the cartridge decision may need to change too."
        ]
      },
      {
        "heading": "Breakthrough Can Be Hard To Notice",
        "sub": "Some cartridges fail by time, loading, or contaminant concentration before the worker gets a clear warning.",
        "body": "Depending on the contaminant, humidity, temperature, and workload, cartridge performance can drop sooner than expected. Waiting for odor can be dangerously late because some chemicals have poor warning properties and some workers become desensitized to smell.",
        "list": [
          "Do not rely on smell as the primary changeout trigger.",
          "Use the written changeout schedule when one is required.",
          "Heavy use and hot conditions may shorten service life."
        ]
      },
      {
        "heading": "Particulate Filters Load Up Differently",
        "sub": "Dust and fume filters may clog, increase breathing resistance, and reduce effective protection.",
        "body": "A filter that is packed with fine particulate becomes harder to breathe through and may tempt workers to loosen or misuse the facepiece. Grinding dust, foundry dust, fiberglass particulate, and similar tasks can load filters faster than expected.",
        "list": [
          "Replace loaded filters before workers start defeating the seal.",
          "Match particulate rating to the job and contaminant severity.",
          "Keep spare filters available where dusty work is routine."
        ]
      },
      {
        "heading": "Storage and Shelf Life Matter",
        "sub": "Cartridges can be compromised before they ever reach the job.",
        "body": "Improper storage, damaged packaging, contamination, or expired stock can undermine respirator performance. Moisture, vapors, and dirty storage locations reduce reliability. Clean storage and rotation are part of the protection program, not clerical detail.",
        "list": [
          "Store media clean, dry, and according to manufacturer guidance.",
          "Rotate stock and remove expired units.",
          "Do not return used cartridges to clean storage casually."
        ]
      },
      {
        "heading": "Changeout Is A Program Discipline",
        "sub": "Workers should never have to guess when a cartridge is no longer acceptable.",
        "body": "A strong respiratory program defines what media is required, where it applies, when it must be changed, and who verifies availability. Cartridge selection and replacement should be planned in advance for routine work and revisited whenever process chemicals or conditions change.",
        "list": [
          "Written schedules are stronger than memory.",
          "Process changes require revalidation of cartridge choice.",
          "Supervisors must make replacement media available before the task starts."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "Correct selection and timely replacement are part of respirator performance.",
        "body": "Wrong cartridge choice, overloaded particulate filters, and poor storage can all turn a compliant-looking respirator into weak protection. Respirator media must match the hazard and be replaced on schedule.",
        "list": [
          "Know the hazard.",
          "Install the right media.",
          "Replace before breakthrough or overload.",
          "Store cartridges and filters correctly."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What makes a respirator ineffective even when worn correctly?",
        "choices": [
          "Wrong cartridge selection",
          "Correct media choice",
          "Good storage",
          "Program discipline"
        ],
        "answer": 0
      },
      {
        "question": "Why is smell a poor sole indicator for cartridge changeout?",
        "choices": [
          "Some chemicals have poor warning properties",
          "All workers smell the same",
          "Filters get lighter",
          "It saves money"
        ],
        "answer": 0
      },
      {
        "question": "What can happen when particulate filters load heavily?",
        "choices": [
          "Breathing resistance increases",
          "The job becomes quieter",
          "The fit check becomes unnecessary",
          "The hazard disappears"
        ],
        "answer": 0
      },
      {
        "question": "Where should replacement media decisions come from?",
        "choices": [
          "Written program and hazard evaluation",
          "Worker guesswork",
          "Break-room opinion",
          "Color preference"
        ],
        "answer": 0
      },
      {
        "question": "Should used cartridges be tossed back into clean storage casually?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "What may shorten cartridge service life?",
        "choices": [
          "Heat and heavy use",
          "Only cool weather",
          "Only weekends",
          "Clipboard labels"
        ],
        "answer": 0
      },
      {
        "question": "What should happen when process chemicals change?",
        "choices": [
          "Nothing",
          "Cartridge choice should be revalidated",
          "Stop labeling containers",
          "Use any old cartridge"
        ],
        "answer": 1
      },
      {
        "question": "What is a sign particulate filters may need replacement?",
        "choices": [
          "Breathing resistance rises",
          "The room is brighter",
          "The task ends early",
          "The worker changed gloves"
        ],
        "answer": 0
      },
      {
        "question": "Why does storage matter?",
        "choices": [
          "It protects media integrity",
          "It replaces fit testing",
          "It removes exposure limits",
          "It eliminates all training"
        ],
        "answer": 0
      },
      {
        "question": "What is the key lesson?",
        "choices": [
          "Any cartridge is better than none",
          "Media must match the hazard and be replaced on schedule",
          "Odor always gives enough warning",
          "Particulate filters never load up"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/respiratory-fit-check-facial-hair",
    "label": "Fit Check, Seal Check & Facial Hair Limits",
    "short": "Why face seal quality decides whether a respirator works at all",
    "icon": "✅",
    "color": "#6EC1E4",
    "regulation": "OSHA 29 CFR 1910.134 — fit and face-seal integrity requirements",
    "audience": "All tight-fitting respirator users, supervisors, and program administrators",
    "minutes": 14,
    "slides": [
      {
        "heading": "A Good Filter Cannot Compensate For A Bad Seal",
        "sub": "Leakage around the facepiece defeats the purpose of the respirator.",
        "body": "Tight-fitting respirators only protect the wearer when inhaled air is pulled through the intended filter path rather than through gaps at the face. A worker can wear the correct model and correct cartridge and still be unprotected if the seal is broken.",
        "list": [
          "Seal quality matters every time the respirator is donned.",
          "Strap tension, face shape, and placement all affect leakage.",
          "A quick mirror look is not the same as a seal check."
        ]
      },
      {
        "heading": "Fit Testing And Seal Checking Are Different",
        "sub": "One validates the model selection; the other verifies today’s donning condition.",
        "body": "Fit testing determines whether a respirator model and size can work for a specific wearer. User seal checks are performed each time the respirator is worn to confirm the facepiece is seated properly that day. Both are necessary for tight-fitting systems.",
        "list": [
          "Fit testing is periodic program validation.",
          "Seal checks are routine daily-use verification.",
          "Skipping either step reduces real protection."
        ]
      },
      {
        "heading": "Facial Hair In The Seal Area Is A Hard Stop",
        "sub": "Beards, stubble, and even minor growth in the seal path can create leakage.",
        "body": "This is not a style preference issue. Hair under the sealing surface prevents consistent contact between the facepiece and the skin. Workers who need respiratory protection must meet the face-seal requirement for the selected equipment or use an approved alternative configuration when appropriate.",
        "list": [
          "Facial hair in the sealing area is incompatible with tight-fitting respirators.",
          "Do not “test it and see” during exposure work.",
          "Supervisors must enforce the rule consistently."
        ]
      },
      {
        "heading": "Glasses, Sweat, And Motion Also Matter",
        "sub": "Facepiece position can shift during real work.",
        "body": "Eyewear interference, oily skin, sweat, repetitive movement, climbing, talking, and head turning can all affect respirator sealing performance. A seal check at the bench is not enough if the job immediately breaks the facepiece position.",
        "list": [
          "Use approved accessories that preserve the seal.",
          "Recheck the respirator if the facepiece is disturbed.",
          "Stop and refit if breathing conditions change or leakage is suspected."
        ]
      },
      {
        "heading": "Workers Must Feel Empowered To Stop",
        "sub": "Respiratory protection fails when workers fear delaying the task.",
        "body": "If a worker cannot get a proper seal, the job is not ready to proceed. The correct response is to stop, correct the fit problem, or escalate to another respirator type or work plan. Production pressure should never override face-seal integrity.",
        "list": [
          "No seal means no entry or no task continuation.",
          "Supervision should support stop-work decisions for fit problems.",
          "Respirator problems are operational issues, not personal inconveniences."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "Fit and seal are non-negotiable performance requirements.",
        "body": "A respirator works only when the face seal is maintained. Fit testing selects the right model. Seal checks verify daily wear. Facial hair in the seal area breaks the system.",
        "list": [
          "Right model.",
          "Right donning.",
          "Clean seal area.",
          "Stop work if the seal cannot be achieved."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What defeats a respirator even if the correct filter is installed?",
        "choices": [
          "A poor face seal",
          "A completed permit",
          "A clean hard hat",
          "A quiet room"
        ],
        "answer": 0
      },
      {
        "question": "What is the difference between fit testing and seal checking?",
        "choices": [
          "There is no difference",
          "Fit testing selects/validates the model; seal checking verifies today’s donning",
          "Seal checking replaces fit testing forever",
          "Fit testing is only for visitors"
        ],
        "answer": 1
      },
      {
        "question": "Can facial hair in the sealing area interfere with protection?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "When should a user seal check be performed?",
        "choices": [
          "Each time the respirator is donned",
          "Only once a year",
          "Only during audits",
          "Only after lunch"
        ],
        "answer": 0
      },
      {
        "question": "What should happen if a worker cannot achieve a proper seal?",
        "choices": [
          "Proceed carefully",
          "Stop and correct or escalate",
          "Tighten only one strap randomly",
          "Ignore it if the task is short"
        ],
        "answer": 1
      },
      {
        "question": "Which factor can disturb a seal during work?",
        "choices": [
          "Head movement and sweat",
          "Clipboard color",
          "Shift start time",
          "Floor paint"
        ],
        "answer": 0
      },
      {
        "question": "Why is facial-hair enforcement important?",
        "choices": [
          "Style preference",
          "Seal integrity",
          "Uniform appearance only",
          "Noise control"
        ],
        "answer": 1
      },
      {
        "question": "Does a good cartridge compensate for a bad seal?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "What kind of issue is a respirator fit problem?",
        "choices": [
          "Personal problem only",
          "Operational safety issue",
          "Dress-code issue only",
          "Paperwork issue"
        ],
        "answer": 1
      },
      {
        "question": "What is the key lesson?",
        "choices": [
          "Tight-fitting respirators require proper fit and daily seal verification",
          "Any mask works if straps are tight",
          "Seal checks are optional",
          "Beards improve filtration"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/respiratory-filter-loading-breathing-resistance",
    "label": "Filter Loading, Work Rate & Breathing Resistance",
    "short": "Why heat, effort, and loaded filters drive misuse and respiratory fatigue",
    "icon": "🏃",
    "color": "#6EC1E4",
    "regulation": "Respiratory-use awareness — loaded filters and high work rate affect performance and tolerance",
    "audience": "Respirator users in dusty, hot, high-output, or long-duration tasks; supervisors and planners",
    "minutes": 14,
    "slides": [
      {
        "heading": "Breathing Gets Harder As Filters Load",
        "sub": "A respirator can become physically harder to use long before a worker says anything.",
        "body": "Fine dust, fume, and process particulate gradually clog filter media. As resistance rises, workers may unconsciously loosen the facepiece, pull it aside to talk, or skip wearing it on “short” parts of the task. Those workarounds destroy protection.",
        "list": [
          "Watch for respirator misuse as a symptom of overload.",
          "Heavy dust environments need spare filters ready at the point of use.",
          "Supervisors should plan replacement timing into the job."
        ]
      },
      {
        "heading": "High Work Rate Changes The Equation",
        "sub": "The harder the body works, the more punishing poor respirator planning becomes.",
        "body": "Climbing, shoveling, cleanup, emergency work, and hot confined tasks increase breathing demand. A respirator that felt acceptable during setup may become difficult during real exertion, especially when filters are partially loaded or when the worker is already heat stressed.",
        "list": [
          "Plan PPE around actual task intensity, not only around setup conditions.",
          "Heat stress and respiratory burden can stack together.",
          "Break planning matters during long-duration exposure tasks."
        ]
      },
      {
        "heading": "Do Not Mistake Discomfort For License To Remove PPE",
        "sub": "Discomfort is a signal to improve the control plan, not a reason to abandon protection.",
        "body": "Workers may be tempted to crack the seal, remove the respirator briefly, or rush the task. The right fix is to change filters, improve source control, rotate crews, cool the work area, or reassess respirator class. Removing the protection inside the hazard zone simply shifts discomfort into exposure.",
        "list": [
          "Address the cause of the burden instead of normalizing bypass behavior.",
          "Use work-rest planning for hot or high-demand jobs.",
          "Escalate if the selected respirator is no longer practical for the actual task."
        ]
      },
      {
        "heading": "Supervision Should Watch For Performance Clues",
        "sub": "Respiratory misuse often shows up in behavior before it shows up in injury reports.",
        "body": "Frequent face touching, seal breaking, heavy panting, repeated removal in the hazard area, and filter-change improvisation are signs that the job is stressing the respiratory program. These signs require intervention, not discipline alone.",
        "list": [
          "Observe how PPE is used during the hardest part of the job.",
          "Ask whether replacement media and breaks are realistically available.",
          "Use worker feedback to improve planning before the next shift repeats the same failure."
        ]
      },
      {
        "heading": "Task Planning Is Part Of Respiratory Protection",
        "sub": "Respirator performance is shaped by environment, effort, and job duration.",
        "body": "If the task cannot be done safely and realistically with the selected respirator, the plan must change. Better ventilation, different tools, shorter exposure windows, or a different respirator class may be required to keep workers protected and functional.",
        "list": [
          "Match the respirator plan to heat, duration, and exertion.",
          "Loaded filters and high work rate are planning variables.",
          "The right plan prevents workers from having to improvise."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "A loaded filter and a hard job can push workers into unsafe shortcuts.",
        "body": "Respirator burden is a real operating factor. Good planning keeps filters fresh, controls the source, manages work rate, and prevents workers from defeating the seal just to keep up.",
        "list": [
          "Loaded filters increase breathing resistance.",
          "High work rate intensifies burden.",
          "Unsafe shortcuts are a planning failure.",
          "Adjust the work plan before workers start improvising."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What can happen as filters load with dust or fume?",
        "choices": [
          "Breathing resistance increases",
          "Noise exposure disappears",
          "The hazard becomes harmless",
          "Fit checks become optional"
        ],
        "answer": 0
      },
      {
        "question": "Which job factor can intensify respirator burden?",
        "choices": [
          "High work rate",
          "Calendar color",
          "Breakroom layout",
          "Parking availability"
        ],
        "answer": 0
      },
      {
        "question": "What is a bad response to respirator discomfort in the hazard area?",
        "choices": [
          "Changing filters",
          "Improving ventilation",
          "Breaking the face seal to breathe easier",
          "Planning more rest"
        ],
        "answer": 2
      },
      {
        "question": "What should supervisors watch for?",
        "choices": [
          "Frequent respirator removal in the hazard zone",
          "Only paperwork errors",
          "Only finished tasks",
          "Only attendance"
        ],
        "answer": 0
      },
      {
        "question": "What can stack together dangerously?",
        "choices": [
          "Heat stress and respiratory burden",
          "Two clipboards",
          "Two parking spaces",
          "Two labels"
        ],
        "answer": 0
      },
      {
        "question": "If the selected respirator is not practical for the actual task, what should happen?",
        "choices": [
          "The worker should just push through",
          "The plan should be reassessed",
          "The seal should be loosened",
          "Exposure limits stop applying"
        ],
        "answer": 1
      },
      {
        "question": "What does repeated face touching or seal breaking suggest?",
        "choices": [
          "The plan may be stressing the respiratory program",
          "Nothing important",
          "The worker is more experienced",
          "The hazard is gone"
        ],
        "answer": 0
      },
      {
        "question": "Should spare filters be planned at the point of use in heavy dust work?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 0
      },
      {
        "question": "What is discomfort inside the hazard zone a signal to do?",
        "choices": [
          "Remove PPE briefly",
          "Improve the control plan",
          "Ignore it",
          "Speed up"
        ],
        "answer": 1
      },
      {
        "question": "What is the core lesson?",
        "choices": [
          "Respirator burden is a real planning variable",
          "Workers should tolerate any burden",
          "Loaded filters do not matter",
          "Only chemical vapor causes breathing difficulty"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/respiratory-cleaning-storage-inspection",
    "label": "Cleaning, Storage & Inspection",
    "short": "Keeping respirators reliable between uses instead of trusting damaged gear",
    "icon": "🧼",
    "color": "#6EC1E4",
    "regulation": "OSHA 29 CFR 1910.134 — respirator care, inspection, and readiness",
    "audience": "All respirator users, emergency teams, tool-room staff, and supervisors",
    "minutes": 13,
    "slides": [
      {
        "heading": "Dirty Gear Can Fail Quietly",
        "sub": "Respirators do not have to look destroyed to become unreliable.",
        "body": "Cracked valves, distorted face seals, dirty exhalation ports, damaged straps, contaminated storage bags, and missing parts can all degrade protection. A respirator that was serviceable last week is not automatically serviceable today.",
        "list": [
          "Inspect before each use and after cleaning.",
          "Do not assume shared equipment was left ready.",
          "Small damage in the wrong place can defeat the whole system."
        ]
      },
      {
        "heading": "Cleaning Protects Both Equipment And The Wearer",
        "sub": "Residue on a respirator can affect hygiene, seal quality, and material life.",
        "body": "Sweat, dust, chemical residue, and general grime shorten equipment life and make workers less likely to wear the device correctly. Proper cleaning removes contamination and helps maintain facepiece function, clarity, and comfort.",
        "list": [
          "Follow approved cleaning methods for the equipment type.",
          "Do not use random solvents that damage facepiece materials.",
          "Let equipment dry fully before sealed storage."
        ]
      },
      {
        "heading": "Storage Conditions Matter",
        "sub": "The best respirator can be ruined by poor storage habits.",
        "body": "Heat, sunlight, chemical vapor, crushing, and dirty shelving can deform or contaminate respirators between uses. Emergency units are especially vulnerable when they are treated like generic gear instead of controlled life-safety equipment.",
        "list": [
          "Store respirators in clean, dry, protected locations.",
          "Keep them away from direct contamination and mechanical damage.",
          "Do not bury emergency equipment under routine supplies."
        ]
      },
      {
        "heading": "Inspection Must Match The Equipment Class",
        "sub": "Emergency-use equipment requires stricter readiness discipline than routine disposable gear.",
        "body": "Routine APR facepieces, PAPRs, supplied-air systems, and SCBA each have different inspection depth and readiness expectations. Emergency units must be maintained so they can be trusted without delay. Readiness is a program responsibility, not an afterthought.",
        "list": [
          "Know the inspection standard for the equipment in service.",
          "Track missing or defective parts immediately.",
          "Remove questionable units from service instead of hoping they will hold."
        ]
      },
      {
        "heading": "Report And Replace, Do Not Hoard Bad Gear",
        "sub": "Workers sometimes keep damaged respirators because replacements are inconvenient.",
        "body": "That behavior turns a supply or supervision problem into an exposure problem. The respiratory program must make it easy to replace suspect equipment and impossible to normalize using damaged gear “just one more time.”",
        "list": [
          "Tag bad gear out of service.",
          "Make replacement equipment available before tasks begin.",
          "Treat missing parts and damage as a stop-work issue when protection is required."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "Respirator reliability depends on condition, cleanliness, and protected storage.",
        "body": "Inspection, cleaning, and storage are not cosmetic details. They determine whether the respirator will protect the worker when exposure begins.",
        "list": [
          "Inspect before use.",
          "Clean correctly.",
          "Store to prevent damage and contamination.",
          "Remove damaged equipment from service."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What can make a respirator unreliable even if it still looks mostly intact?",
        "choices": [
          "Damaged valves or face seal",
          "A completed shift report",
          "A clean floor",
          "A quiet room"
        ],
        "answer": 0
      },
      {
        "question": "Why is cleaning important?",
        "choices": [
          "It preserves hygiene, seal quality, and equipment life",
          "It eliminates fit testing",
          "It replaces inspection",
          "It removes all need for storage"
        ],
        "answer": 0
      },
      {
        "question": "Should random solvents be used for respirator cleaning?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "What storage condition can damage respirators?",
        "choices": [
          "Heat and crushing",
          "A protected cabinet",
          "Clean dry storage",
          "Controlled readiness"
        ],
        "answer": 0
      },
      {
        "question": "What should happen to questionable equipment?",
        "choices": [
          "Use it once more",
          "Remove it from service",
          "Hide it in a locker",
          "Lend it to another crew"
        ],
        "answer": 1
      },
      {
        "question": "Why do emergency units need disciplined storage?",
        "choices": [
          "They are life-safety equipment",
          "They look expensive",
          "They are harder to label",
          "They do not need inspection"
        ],
        "answer": 0
      },
      {
        "question": "What is a poor practice?",
        "choices": [
          "Tagging damaged gear out",
          "Reporting missing parts",
          "Hoarding bad gear because replacement is inconvenient",
          "Cleaning before storage"
        ],
        "answer": 2
      },
      {
        "question": "When should respirators be inspected?",
        "choices": [
          "Before use",
          "Only annually",
          "Only when management visits",
          "Only after they break"
        ],
        "answer": 0
      },
      {
        "question": "Why should equipment dry before sealed storage?",
        "choices": [
          "To avoid moisture problems and contamination",
          "To make it heavier",
          "To skip inspection",
          "To shorten equipment life"
        ],
        "answer": 0
      },
      {
        "question": "What is the main point?",
        "choices": [
          "Condition and storage determine reliability",
          "Respirators are maintenance-free",
          "Looks are all that matter",
          "Storage does not affect protection"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/respiratory-idlh-oxygen-deficiency-emergency-escape",
    "label": "IDLH, Oxygen Deficiency & Emergency Escape",
    "short": "Knowing when the atmosphere has moved beyond routine filtering protection",
    "icon": "🚨",
    "color": "#6EC1E4",
    "regulation": "OSHA 29 CFR 1910.134 — IDLH, oxygen-deficient atmosphere, and emergency respiratory response awareness",
    "audience": "Confined-space teams, process operators, wastewater crews, gas-system personnel, emergency responders, and supervisors",
    "minutes": 17,
    "slides": [
      {
        "heading": "Some Atmospheres Can Kill Before A Worker Can React",
        "sub": "IDLH conditions are beyond routine task protection.",
        "body": "Immediately dangerous to life or health conditions may involve toxic gas, severe oxygen deficiency, fire products, or a release concentration high enough to disable a worker rapidly. These are not “heavy exposure” jobs. They are emergency or specialized-entry conditions that demand a different level of planning and equipment.",
        "list": [
          "A worker may collapse before self-rescue is possible.",
          "Routine APR use is not a fallback for unknown or oxygen-poor air.",
          "Emergency readiness must be established before the event."
        ]
      },
      {
        "heading": "Oxygen Deficiency Is Its Own Hazard",
        "sub": "A clear atmosphere can still be unbreathable.",
        "body": "Workers often look for odor or visible contamination, but an atmosphere can become oxygen-deficient with little or no warning. Nitrogen, carbon dioxide, fermentation gases, process purge gas, and other displacement scenarios create deadly air even when there is no obvious smoke or chemical smell.",
        "list": [
          "Low oxygen cannot be corrected by a filtering mask.",
          "Monitoring is essential where displacement is possible.",
          "Confined spaces and process vessels demand special caution."
        ]
      },
      {
        "heading": "Escape Planning Must Be Immediate And Realistic",
        "sub": "In a fast-moving air emergency, hesitation costs lives.",
        "body": "Workers must know the egress path, alarm action, communication method, and who initiates emergency response. In some operations, escape respirators or specific emergency equipment may be part of the plan. Improvised rescue by unprepared coworkers is a common fatal error.",
        "list": [
          "Alarm, exit, account for personnel, and call for the trained response.",
          "Do not enter to rescue without the correct equipment and role.",
          "Emergency routes must stay clear and known before work begins."
        ]
      },
      {
        "heading": "Monitoring And Permit Discipline Matter",
        "sub": "The atmosphere must be verified, not assumed safe because it was fine earlier.",
        "body": "Gas testing, oxygen verification, permit controls, and re-evaluation after process changes are critical for spaces and systems where conditions can shift. A reading from the start of the job does not guarantee that the air remains safe an hour later.",
        "list": [
          "Test before entry and as required during the job.",
          "Stop work if readings change or alarms activate.",
          "Treat process upset, purge, release, or ventilation loss as a trigger for re-evaluation."
        ]
      },
      {
        "heading": "Emergency Response Uses The Right Respiratory Class",
        "sub": "IDLH events require the right gear and trained people.",
        "body": "When the air is unknown, oxygen-deficient, or immediately dangerous, the response must rely on supplied breathing air or SCBA as dictated by the emergency plan and the responder role. This is why readiness, inspection, and training matter long before an incident happens.",
        "list": [
          "Unknown atmosphere is not a filter-mask decision point.",
          "Response teams need the correct respiratory class and rescue discipline.",
          "Unplanned entry by unprotected workers turns one victim into several."
        ]
      },
      {
        "heading": "Key Review",
        "sub": "Unknown or oxygen-poor air is a stop-work and emergency-planning condition.",
        "body": "IDLH and oxygen-deficient atmospheres move the situation beyond routine respiratory use. Workers must monitor, stop, evacuate, and rely on trained emergency response rather than improvising with ordinary PPE.",
        "list": [
          "Low oxygen is deadly even without odor.",
          "Filtering respirators do not fix oxygen deficiency.",
          "Escape and accountability must be planned in advance.",
          "Rescue requires training, equipment, and role discipline."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What does IDLH mean?",
        "choices": [
          "Immediately dangerous to life or health",
          "Internal daily log for hazards",
          "Industrial dust loading height",
          "Identical device labeling handbook"
        ],
        "answer": 0
      },
      {
        "question": "Can a filtering respirator fix oxygen deficiency?",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": 1
      },
      {
        "question": "What can create oxygen-deficient air without obvious odor?",
        "choices": [
          "Nitrogen or other displacement gas",
          "Clipboard dust",
          "Paint color",
          "A clean floor"
        ],
        "answer": 0
      },
      {
        "question": "What is the correct response to an unknown atmosphere?",
        "choices": [
          "Use any available filter mask",
          "Stop and treat it as an escalation condition",
          "Hold your breath and continue",
          "Send one worker in quickly"
        ],
        "answer": 1
      },
      {
        "question": "What is a common fatal error during air emergencies?",
        "choices": [
          "Unplanned rescue entry by unprotected coworkers",
          "Checking alarms",
          "Using permits",
          "Accounting for personnel"
        ],
        "answer": 0
      },
      {
        "question": "Why is initial air testing alone not enough for some jobs?",
        "choices": [
          "Conditions can change during the work",
          "Tests never work",
          "Permits replace monitoring",
          "Air always gets cleaner"
        ],
        "answer": 0
      },
      {
        "question": "What should happen if gas readings change or alarms activate?",
        "choices": [
          "Ignore them if the task is almost done",
          "Stop work and re-evaluate",
          "Loosen the respirator",
          "Close the permit later"
        ],
        "answer": 1
      },
      {
        "question": "What must stay clear and known before work begins?",
        "choices": [
          "Escape routes",
          "The lunch menu",
          "The paint code",
          "The social calendar"
        ],
        "answer": 0
      },
      {
        "question": "Which respiratory class may be required for IDLH response?",
        "choices": [
          "Supplied-air or SCBA per plan",
          "Dust mask only",
          "No respiratory protection",
          "Any expired cartridge"
        ],
        "answer": 0
      },
      {
        "question": "What is the key message?",
        "choices": [
          "Unknown or oxygen-poor air is a stop-work and emergency-planning condition",
          "Low oxygen is safe if the room is cool",
          "Rescue should be improvised",
          "Any respirator is better than none"
        ],
        "answer": 0
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function RespiratoryProtectionModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const RespiratoryHazardRecognitionTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[0])
export const RespiratoryExposureTypesTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[1])
export const RespiratorTypesSelectionTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[2])
export const RespiratorCartridgeChangeoutTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[3])
export const RespiratorFitSealTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[4])
export const RespiratorFilterLoadingTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[5])
export const RespiratorCareInspectionTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[6])
export const RespiratoryIDLHOxygenEmergencyTraining = makeModuleComponent(RESPIRATORY_PROTECTION_PHASE1_MODULES[7])
