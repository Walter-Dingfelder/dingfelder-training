import TrainingModuleShell from './TrainingModuleShell.jsx'

export const HEARING_CONSERVATION_PHASE1_MODULES = [
  {
    "path": "/noise-hazard-recognition-area-mapping",
    "label": "Noise Hazard Recognition & Area Mapping",
    "short": "Finding noise exposure zones before they quietly become normalized",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — identify hazardous noise areas and posted requirements",
    "audience": "Production, maintenance, utilities, contractors, supervisors, and employees entering posted noise zones",
    "minutes": 15,
    "slides": [
      {
        "heading": "Noise Exposure Often Hides in Plain Sight",
        "sub": "Workers adapt to loud areas faster than their hearing does.",
        "body": "Noise becomes dangerous when people start treating it as background instead of as energy. Foundry cleaning rooms, rolling lines, spinners, pumps, compressors, vehicle yards, and equipment rooms can all create exposure that feels routine but still damages hearing over time.",
        "list": [
          "Use posted signs, area markings, and equipment history to identify likely noise zones.",
          "Do not assume short tasks are automatically safe just because they feel familiar.",
          "Report newly louder equipment as both a maintenance and exposure concern."
        ],
        "callout": {
          "label": "RULE",
          "text": "Map the noise hazard before the task starts, not after someone removes protection to investigate the sound.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "The Area Matters As Much As the Tool",
        "sub": "Multiple moderate sources can combine into one harmful exposure.",
        "body": "A worker may not be standing next to a single extremely loud machine. Instead, several conveyors, fans, grinders, pumps, alarms, or impact points can build a hazardous sound environment together. Exposure control has to look at the whole zone, not just the most obvious source.",
        "list": [
          "Noise reflects off steel, concrete, tanks, and enclosed structures.",
          "Temporary work like turnarounds or outage work can raise background noise sharply.",
          "Support roles can accumulate exposure even when they are not operating the equipment."
        ]
      },
      {
        "heading": "Recognition Starts With Triggers",
        "sub": "You need practical field cues, not just a number on a chart.",
        "body": "If workers must shout at close distance, routinely miss alarms, or remove hearing protection for communication, the area already needs stronger control discipline. Noise recognition means treating those signs as warning flags that call for protection, planning, and possibly measurement.",
        "list": [
          "Follow posted hearing protection zones even when the area feels \"not that loud today.\"",
          "Escalate unusual ringing, muffled hearing, or repeated communication failures.",
          "Treat changing process conditions as changing exposure conditions too."
        ]
      },
      {
        "heading": "Noise Mapping Supports Safer Routing",
        "sub": "The portal model works best when tasks stay tied to the environment they occur in.",
        "body": "Good noise control also means routing people through safer paths when possible. Avoid sending visitors, spotters, and contractors through the highest-noise corridors when another access route exists. This matches the campus training model: recognize the environment, then control the exposure inside it.",
        "callout": {
          "label": "KEY REVIEW",
          "text": "Hazard recognition is the first layer of hearing conservation. If you fail to identify the noise zone, every later control becomes weaker.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is the best first step in hearing conservation?",
        "options": [
          "Wait until someone reports ringing ears",
          "Identify where the noise hazard exists before work begins",
          "Only monitor office areas",
          "Remove hearing protection to locate the sound"
        ],
        "answer": 1
      },
      {
        "q": "Why can an area be hazardous even without one extremely loud machine?",
        "options": [
          "Because moderate sources can combine into one harmful exposure zone",
          "Because noise only matters in enclosed spaces",
          "Because alarms cancel out equipment noise",
          "Because hearing damage only occurs from impact tools"
        ],
        "answer": 0
      },
      {
        "q": "Which field cue suggests stronger noise control may be needed?",
        "options": [
          "Workers can talk normally across the room",
          "The equipment is painted recently",
          "People must shout at close distance to be understood",
          "The job takes less than ten minutes"
        ],
        "answer": 2
      },
      {
        "q": "What should happen when equipment suddenly sounds louder than normal?",
        "options": [
          "Ignore it unless production stops",
          "Report it as both a maintenance and exposure concern",
          "Remove hearing protection and stand closer",
          "Wait for annual training"
        ],
        "answer": 1
      },
      {
        "q": "Why should routing be considered in hearing conservation?",
        "options": [
          "So more people can experience the process",
          "Because the shortest path is always safest",
          "Because exposure can be reduced by keeping people out of high-noise corridors",
          "Because visitors do not need hearing protection"
        ],
        "answer": 2
      }
    ]
  },
  {
    "path": "/hearing-damage-tinnitus-exposure-basics",
    "label": "Hearing Damage, Tinnitus & Exposure Basics",
    "short": "Understanding cumulative hearing loss before it becomes permanent",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — noise-induced hearing loss awareness",
    "audience": "All personnel assigned to noisy operations, utilities, maintenance, yards, and intermittent high-noise work",
    "minutes": 15,
    "slides": [
      {
        "heading": "Hearing Damage Is Usually Permanent",
        "sub": "The danger is real even when pain is absent.",
        "body": "Noise does not have to feel sharp or dramatic to do harm. Repeated exposure damages the structures that support hearing, and the loss often appears gradually. By the time a worker notices communication trouble or ringing, meaningful damage may already have happened.",
        "list": [
          "Permanent hearing loss often develops silently over time.",
          "Tinnitus is a warning sign, not a harmless annoyance.",
          "You cannot depend on discomfort alone to judge exposure."
        ]
      },
      {
        "heading": "Duration Matters, Not Just Loudness",
        "sub": "Moderate exposure repeated over shifts still adds up.",
        "body": "Hearing conservation is about total exposure, not just a few dramatic moments. A worker moving through several noisy tasks can accumulate damaging dose across the shift even if no single task felt extreme by itself. That is why protection discipline has to stay consistent.",
        "list": [
          "Intermittent noise can still create harmful total daily dose.",
          "Leaving protection off for \"just a minute\" can erase much of its benefit.",
          "Task rotation does not help if every task is noisy."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "Cumulative dose is the issue. The ear does not reset just because the work changes locations.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "Ringing, Muffled Hearing, and Fatigue Matter",
        "sub": "These are not minor side effects to normalize.",
        "body": "After noisy work, some employees notice ringing, muffled voices, or mental fatigue from constant sound. Those signs mean the exposure deserves attention. The right response is not to tough it out; it is to verify controls, hearing protection fit, and reporting expectations.",
        "list": [
          "Report symptoms early instead of waiting for the next annual cycle.",
          "Repeated temporary effects can point toward permanent loss risk.",
          "Communication errors rise when noise and fatigue combine."
        ]
      },
      {
        "heading": "Protecting Hearing Also Protects Operations",
        "sub": "The issue is not just long-term health.",
        "body": "Workers with unmanaged noise exposure can miss radios, alarms, spotter calls, and abnormal equipment sounds. Hearing conservation supports quality, emergency response, and team coordination as well as long-term health protection. That makes it an operating-control issue, not only a medical issue.",
        "callout": {
          "label": "RULE",
          "text": "Treat hearing protection as a performance control and a health control at the same time.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why is noise-induced hearing loss especially dangerous?",
        "options": [
          "It is always painful enough to notice quickly",
          "It often develops gradually and can be permanent",
          "It only affects office workers",
          "It can be reversed with rest every shift"
        ],
        "answer": 1
      },
      {
        "q": "What does tinnitus suggest after noisy work?",
        "options": [
          "That hearing protection is optional",
          "That the worker should remove hearing protection more often",
          "That the exposure deserves attention and follow-up",
          "That alarms are working correctly"
        ],
        "answer": 2
      },
      {
        "q": "What is a major hearing-conservation mistake?",
        "options": [
          "Treating total daily dose as unimportant",
          "Reporting muffled hearing",
          "Using posted hearing zones",
          "Replacing worn protectors"
        ],
        "answer": 0
      },
      {
        "q": "Why does hearing conservation matter operationally?",
        "options": [
          "It improves paint adhesion",
          "It helps workers hear alarms, radios, and abnormal equipment conditions",
          "It removes the need for procedures",
          "It only matters during annual testing"
        ],
        "answer": 1
      },
      {
        "q": "What should a worker do after repeated ringing or muffled hearing?",
        "options": [
          "Normalize it as part of industrial work",
          "Report it and verify controls and fit",
          "Ignore it if the shift is almost over",
          "Use only one protector instead of the required one"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/earplugs-earmuffs-dual-protection-selection",
    "label": "Earplugs, Earmuffs & Dual Protection",
    "short": "Selecting the right hearing protection for the actual exposure and task conditions",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — hearing protection selection and use",
    "audience": "Employees entering posted noise areas, maintenance crews, contractors, and supervisors assigning PPE",
    "minutes": 15,
    "slides": [
      {
        "heading": "Different Protectors Solve Different Problems",
        "sub": "Protection choice has to match the environment and the worker.",
        "body": "Earplugs, earmuffs, and dual protection are not interchangeable in every situation. Heat, sweat, hard-hat use, contamination, short-duration entry, and very high noise all affect which option works best. The right protector is the one that delivers real protection in the conditions of the job.",
        "list": [
          "Plugs often help under hard hats and face shields when inserted correctly.",
          "Muffs can be easier to supervise visually but depend on a full seal.",
          "Dual protection may be required in extreme noise environments."
        ]
      },
      {
        "heading": "Do Not Choose by Convenience Alone",
        "sub": "Fast to grab does not always mean effective to wear.",
        "body": "Workers sometimes select whatever feels quickest rather than what fits the task. That creates a gap between assigned protection and real protection. Selection should consider compatibility with other PPE, contamination, communication needs, and whether the area requires more than one hearing barrier.",
        "list": [
          "Safety glasses, hood edges, and helmet straps can break earmuff seals.",
          "Dirty hands or dusty areas can make poor earplug insertion more likely.",
          "Short entries still require the posted protection level."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never downgrade required hearing protection just because the task seems brief or routine.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "Compatibility With Other PPE Is Critical",
        "sub": "One protector can fail because another piece of PPE was fitted poorly.",
        "body": "Hearing protection has to work with face shields, hard hats, respirators, hoods, and winter gear. If a worker cannot maintain seal and comfort together, the solution is not to remove one layer. The solution is to correct the combination before entering the exposure zone.",
        "list": [
          "Test the full PPE combination before the task begins.",
          "Escalate compatibility problems instead of improvising in the field.",
          "Use dual protection when the procedure or posted area requires it."
        ]
      },
      {
        "heading": "Selection Is Part of the Work Plan",
        "sub": "Noise control should be decided before entry, not at the doorway.",
        "body": "Good crews treat hearing protection as part of pre-job planning. That means checking availability, size, cleanliness, and task compatibility in advance. When the task changes, the hearing-protection choice may need to change too.",
        "callout": {
          "label": "KEY REVIEW",
          "text": "Select hearing protection based on real exposure, required PPE compatibility, and the posted control for the area.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "When might dual protection be required?",
        "options": [
          "Only during audits",
          "In very high-noise areas or where the posted control requires it",
          "Whenever the weather is cold",
          "Only for office maintenance"
        ],
        "answer": 1
      },
      {
        "q": "What can reduce earmuff effectiveness?",
        "options": [
          "A full seal around the ear",
          "Hard-hat straps or eyewear breaking the cushion seal",
          "Clean cushions",
          "Wearing them in posted areas"
        ],
        "answer": 1
      },
      {
        "q": "Why is choosing by convenience a problem?",
        "options": [
          "Because it may ignore actual exposure and PPE compatibility",
          "Because earplugs are always prohibited",
          "Because short tasks never need hearing protection",
          "Because comfort is the only valid criterion"
        ],
        "answer": 0
      },
      {
        "q": "What should happen if hearing protection conflicts with another required PPE item?",
        "options": [
          "Remove the hearing protection",
          "Skip the task controls and work faster",
          "Correct the PPE combination before entering the area",
          "Use the wrong protector temporarily"
        ],
        "answer": 2
      },
      {
        "q": "When should hearing protection selection occur?",
        "options": [
          "After the worker enters the noise zone",
          "Only after a supervisor sees a problem",
          "As part of the pre-job plan",
          "At the end of the shift"
        ],
        "answer": 2
      }
    ]
  },
  {
    "path": "/fit-seal-wear-time-common-failure-modes",
    "label": "Fit, Seal, Wear Time & Failure Modes",
    "short": "Why hearing PPE fails even when workers think they are protected",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — correct use and maintenance of hearing protection",
    "audience": "All personnel using hearing protection in production, maintenance, utilities, and logistics areas",
    "minutes": 15,
    "slides": [
      {
        "heading": "Most Hearing Protection Failures Are User Failures",
        "sub": "The protector can be issued correctly and still be worn incorrectly.",
        "body": "Earplugs that are barely inserted, earmuffs worn over hood edges, or protectors lifted briefly for communication can all destroy real-world performance. Hearing conservation depends on correct fit and uninterrupted wear during the exposure, not on simply possessing the PPE.",
        "list": [
          "A partial insertion can reduce earplug performance dramatically.",
          "Breaking the earmuff seal can make the device almost decorative.",
          "Protection removed for a \"quick conversation\" loses effectiveness quickly."
        ]
      },
      {
        "heading": "Wear Time Matters",
        "sub": "Short unprotected periods create disproportionate loss of protection.",
        "body": "Employees sometimes think a few seconds without protection does not matter. In reality, repeated removal during the exposure period can wipe out the benefit of good fit. Staying protected for the full exposure matters more than getting a perfect fit for only part of it.",
        "list": [
          "Keep hearing protection on until you are in a lower-noise area.",
          "Move to communicate instead of breaking protection in place.",
          "Do not adjust other PPE in a way that defeats hearing protection."
        ],
        "callout": {
          "label": "STOP",
          "text": "Stop and relocate before lifting hearing protection to talk, troubleshoot, or inspect a sound source.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "Inspect for Failure Modes",
        "sub": "Dirty, worn, or damaged protectors do not perform as intended.",
        "body": "Compressed earplugs that no longer recover, cracked muff cushions, weak headbands, contamination, and poor storage all reduce protection. Workers must know how to recognize these failures and remove the device from service before the next entry into a noise zone.",
        "list": [
          "Replace damaged cushions, plugs, and deformed components.",
          "Do not keep dirty hearing PPE in a pocket with debris or oil.",
          "Treat poor condition as a reason to stop and correct, not to improvise."
        ]
      },
      {
        "heading": "Good Habits Beat Good Intentions",
        "sub": "The goal is repeatable protection under real working conditions.",
        "body": "Reliable hearing conservation comes from habits: fit check, full wear time, and immediate replacement of bad PPE. Teams should normalize checking each other’s hearing protection the same way they would check eye or respiratory PPE in a high-hazard area.",
        "callout": {
          "label": "RULE",
          "text": "Correct fit plus full wear time is the actual protection. Anything less is an exposure gap.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is a common real-world hearing protection failure?",
        "options": [
          "Owning the correct protector",
          "Barely inserting earplugs or breaking the earmuff seal",
          "Wearing hearing protection in posted zones",
          "Replacing damaged cushions"
        ],
        "answer": 1
      },
      {
        "q": "Why does wear time matter?",
        "options": [
          "Because short unprotected periods can erase much of the benefit",
          "Because hearing protection only works after lunch",
          "Because noise damage stops once PPE is issued",
          "Because fit is irrelevant"
        ],
        "answer": 0
      },
      {
        "q": "What should a worker do before lifting hearing protection to communicate?",
        "options": [
          "Stay in the noise zone and shout louder",
          "Move to a lower-noise area first",
          "Remove only one earmuff and continue the task",
          "Ignore the posted controls"
        ],
        "answer": 1
      },
      {
        "q": "Which condition is a reason to replace a hearing protector?",
        "options": [
          "Clean cushions",
          "Recovered foam",
          "Cracked earmuff cushions or deformed plugs",
          "Visible inspection before use"
        ],
        "answer": 2
      },
      {
        "q": "What creates actual protection?",
        "options": [
          "Having PPE available nearby",
          "Correct fit plus full wear time",
          "Using hearing protection only when supervisors are present",
          "Switching devices repeatedly mid-task"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/continuous-impact-intermittent-noise-exposures",
    "label": "Continuous, Impact & Intermittent Noise",
    "short": "Managing different noise patterns before workers underestimate the exposure",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — exposure awareness across changing task conditions",
    "audience": "Operators, maintenance, outage crews, mobile-equipment teams, contractors, and supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "Not All Noise Feels the Same",
        "sub": "Steady fan noise and impact bursts create different worker reactions but both can be harmful.",
        "body": "Continuous noise can wear workers down slowly, while impact noise from grinding, hammering, drops, or steel contact can feel sudden and shocking. Intermittent tasks are also risky because employees may keep removing protection between bursts even though the next burst can arrive with little warning.",
        "list": [
          "Continuous noise creates fatigue and communication strain.",
          "Impact noise can be startling and still occur repeatedly across the task.",
          "Intermittent noise often leads to repeated PPE removal and re-exposure."
        ]
      },
      {
        "heading": "Changing Conditions Change Exposure",
        "sub": "Outages, cleaning, turnarounds, and maintenance can create noise patterns different from normal production.",
        "body": "A quiet-looking maintenance task can become high-noise the moment cutting starts, compressed air opens, a pump runs, or equipment comes back online. Workers should not assume the normal operating condition represents the current exposure. Hearing protection decisions have to track the actual state of the job.",
        "list": [
          "Noise control can change when guards, covers, or doors are open for maintenance.",
          "Temporary fans, generators, and vacuum trucks can alter the zone quickly.",
          "Mixed work crews often increase both noise and communication risk."
        ]
      },
      {
        "heading": "Do Not Let Intermittent Work Trick You",
        "sub": "Stopping and starting does not make the exposure harmless.",
        "body": "Some workers mentally discount intermittent noise because it comes in bursts. That mistake leads to poor wear time, delayed protection, and under-reporting. If the task repeatedly produces hazardous bursts, the protection has to stay aligned with the exposure pattern, not with worker convenience.",
        "callout": {
          "label": "NEVER DO",
          "text": "Never wait for the loud event to begin before deciding whether hearing protection is needed.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "Plan for the Loudest Credible Condition",
        "sub": "The safe plan accounts for what can happen, not only what happened last time.",
        "body": "For high-variability jobs, crews should plan hearing controls around the loudest realistic phase of the task. That keeps protection decisions from lagging behind the work. It also reduces the temptation to enter, inspect, and then scramble for PPE after the noise has already started.",
        "callout": {
          "label": "KEY REVIEW",
          "text": "Continuous, impact, and intermittent noise all require disciplined control. The exposure pattern may change, but the protection standard cannot drift with it.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is a risk of intermittent noise?",
        "options": [
          "Workers may keep removing protection between bursts",
          "It cannot damage hearing",
          "It only occurs outdoors",
          "It is always lower than continuous noise"
        ],
        "answer": 0
      },
      {
        "q": "Why can maintenance work change hearing exposure?",
        "options": [
          "Because maintenance is always silent",
          "Because temporary equipment and changed conditions can create new noise patterns",
          "Because open guards reduce all sound",
          "Because hearing protection is not required during shutdown work"
        ],
        "answer": 1
      },
      {
        "q": "What is the wrong way to handle burst noise?",
        "options": [
          "Plan around the loudest credible condition",
          "Wait until the loud event starts before deciding on protection",
          "Keep hearing protection aligned with task conditions",
          "Recognize mixed-work crews raise communication risk"
        ],
        "answer": 1
      },
      {
        "q": "How should hearing protection be chosen for a variable task?",
        "options": [
          "Based on the quietest minute of the task",
          "Based on the loudest realistic phase of the work",
          "Based only on whether the task is outdoors",
          "Based on which PPE looks easiest to wear"
        ],
        "answer": 1
      },
      {
        "q": "Why is impact noise important even if it is brief?",
        "options": [
          "Because it can still create harmful repeated exposure",
          "Because it only affects visitors",
          "Because it makes annual training easier",
          "Because it replaces the need for posted zones"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/communication-alarms-situational-awareness-noisy-areas",
    "label": "Communication, Alarms & Situational Awareness",
    "short": "Keeping coordination intact when noise competes with radios, alarms, and spotter calls",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — hearing conservation and work-communication controls",
    "audience": "Operators, spotters, maintenance teams, crane crews, forklift operators, yard personnel, and supervisors",
    "minutes": 15,
    "slides": [
      {
        "heading": "Noise Changes How Work Must Be Coordinated",
        "sub": "A safe message that is not heard is not a safe control.",
        "body": "In noisy areas, workers can miss verbal warnings, radios, horns, spotter calls, and abnormal equipment sounds. That makes communication planning part of hearing conservation. The team needs agreed signals, line-of-sight expectations, and rules for when communication has failed.",
        "list": [
          "Noise can hide both routine coordination and emergency warnings.",
          "Crane paths, forklift travel, backing, and rotating equipment all rely on reliable communication.",
          "Situational awareness drops when workers split attention between sound, PPE, and movement."
        ]
      },
      {
        "heading": "Move Before You Break Protection",
        "sub": "Do not turn hearing conservation into a communication exception.",
        "body": "When workers need to speak clearly, they should relocate to a lower-noise area or use the approved communication method instead of lifting hearing protection in place. The habit of partially removing protection to catch a quick message creates exactly the exposure gap the program is meant to prevent.",
        "list": [
          "Use hand signals, radios, and pre-job communication plans where required.",
          "Establish what a failed or missed call means before the work starts.",
          "Do not assume someone heard you just because you spoke."
        ],
        "callout": {
          "label": "RULE",
          "text": "In a high-noise area, communication must be deliberate, confirmed, and compatible with hearing protection.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "Alarms and Abnormal Sounds Still Matter",
        "sub": "Hearing protection should not become an excuse to ignore process changes.",
        "body": "Workers in noisy environments should understand what signals, backup alarms, and abnormal sounds matter for their task. Good hearing protection reduces harmful exposure, but crews still need procedures for recognizing problems, stopping when communication is lost, and escalating when sound cues change unexpectedly.",
        "list": [
          "If a signal cannot be heard reliably, the work plan needs another control.",
          "Unexpected changes in sound can indicate mechanical trouble or process upset.",
          "Do not continue movement work when the communication loop has broken."
        ]
      },
      {
        "heading": "Situational Awareness Is a Team Discipline",
        "sub": "Noise-heavy tasks demand stronger shared awareness, not less.",
        "body": "The most effective teams build hearing conservation into traffic control, crane travel, mobile equipment movement, and emergency response. That means protecting hearing while also preserving visibility, confirmation, and stop authority. Good hearing conservation supports operations because it prevents workers from choosing between PPE and awareness.",
        "callout": {
          "label": "KEY REVIEW",
          "text": "Noisy work needs communication controls that work with hearing protection, not around it.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why is communication planning part of hearing conservation?",
        "options": [
          "Because noise can hide warnings, radios, and alarms",
          "Because hearing protection removes all need for communication",
          "Because spotters are not used in noisy work",
          "Because PPE is only a medical issue"
        ],
        "answer": 0
      },
      {
        "q": "What should a worker do before lifting hearing protection to talk?",
        "options": [
          "Stay where they are and speak louder",
          "Move to a lower-noise area or use the approved method",
          "Remove only one earplug during movement work",
          "Wait for the next annual fit check"
        ],
        "answer": 1
      },
      {
        "q": "What does a missed radio or hand signal mean during movement work?",
        "options": [
          "Continue unless production stops",
          "The communication loop has failed and the work may need to stop",
          "That the hearing protection should be discarded",
          "That alarms are unnecessary"
        ],
        "answer": 1
      },
      {
        "q": "How should teams treat abnormal sound changes in equipment?",
        "options": [
          "Ignore them if hearing protection is being worn",
          "Treat them as possible maintenance or process warnings",
          "Stand closer to the equipment to listen better",
          "Use them only for visitor tours"
        ],
        "answer": 1
      },
      {
        "q": "What is the correct communication standard in a high-noise area?",
        "options": [
          "Assume people heard the message",
          "Keep messages informal and unconfirmed",
          "Use deliberate, confirmed communication compatible with hearing protection",
          "Avoid planning because noise conditions change"
        ],
        "answer": 2
      }
    ]
  },
  {
    "path": "/hearing-ppe-cleaning-hygiene-storage-replacement",
    "label": "Cleaning, Hygiene, Storage & Replacement",
    "short": "Maintaining hearing protection so contamination and wear do not erase the control",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — maintain hearing protectors in serviceable condition",
    "audience": "All users of hearing protection, area leads, storeroom support, and supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "Dirty PPE Is Not Reliable PPE",
        "sub": "Hearing protection loses value when it is contaminated or degraded.",
        "body": "Oil, dust, sweat, chemical contamination, and crushed storage can all reduce hearing-protection performance or make workers less likely to wear it correctly. Maintenance is simple but essential: keep devices clean, dry, and protected from damage between uses.",
        "list": [
          "Do not store hearing PPE loose in dirty pockets or tool bags.",
          "Replace disposable items at the right interval, not after visible failure only.",
          "Separate contaminated PPE from clean replacement stock."
        ]
      },
      {
        "heading": "Inspection Should Be Routine",
        "sub": "A quick look before use can prevent a false sense of protection.",
        "body": "Workers should inspect plugs, cushions, bands, and storage condition before entering the noise zone. Hardened cushions, deformed plugs, torn components, and obvious contamination are all signs the protector should be replaced. Supervisors should make this expectation as normal as glove or eye-PPE checks.",
        "list": [
          "Inspect before every use, not only when annual training comes due.",
          "Replace suspect hearing protection immediately.",
          "Use approved stock so fit and performance stay predictable."
        ]
      },
      {
        "heading": "Hygiene Supports Wear Time",
        "sub": "Uncomfortable or dirty PPE is more likely to be removed.",
        "body": "When hearing protection is dirty, sticky, or uncomfortable, workers are more likely to adjust it constantly or take it off early. Good hygiene improves compliance because the protector is easier to wear for the full exposure period. That makes cleaning and replacement part of exposure control, not just housekeeping.",
        "list": [
          "Comfort problems should trigger correction, not noncompliance.",
          "Do not share hearing protection when hygiene or fit would be compromised.",
          "Keep spare clean devices available where the exposure occurs."
        ],
        "callout": {
          "label": "TAKEAWAY",
          "text": "Maintenance supports wear time, and wear time supports protection.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "Replace Before the Failure Becomes Visible in the Field",
        "sub": "Workers should not have to gamble on worn PPE during the task.",
        "body": "Waiting until hearing protection fully fails creates avoidable exposure. Programs work better when replacement is easy, expected, and immediate. Stocking clean spares near work zones reduces the temptation to keep using a protector that is no longer serviceable.",
        "callout": {
          "label": "RULE",
          "text": "If hearing protection is dirty, damaged, or doubtful, replace it before entering the noise zone.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why is cleaning hearing protection important?",
        "options": [
          "Because it improves appearance only",
          "Because contamination and wear can reduce performance and compliance",
          "Because it removes the need for fit checks",
          "Because dirty PPE is acceptable for short jobs"
        ],
        "answer": 1
      },
      {
        "q": "When should hearing protection be inspected?",
        "options": [
          "Before every use",
          "Only during annual audits",
          "Only after it falls on the floor",
          "At the end of the year"
        ],
        "answer": 0
      },
      {
        "q": "What is a problem with dirty or uncomfortable hearing protection?",
        "options": [
          "It makes workers more likely to remove or adjust it early",
          "It increases earplug size",
          "It improves seal automatically",
          "It means no replacement is needed"
        ],
        "answer": 0
      },
      {
        "q": "What should happen if a hearing protector is damaged or doubtful?",
        "options": [
          "Use it until the shift ends",
          "Replace it before entering the noise zone",
          "Store it for emergency use only",
          "Share it with another worker"
        ],
        "answer": 1
      },
      {
        "q": "Why should spare clean hearing protection be available near work zones?",
        "options": [
          "To support immediate replacement and consistent wear time",
          "To encourage people to collect extras",
          "To avoid posted hearing zones",
          "To eliminate training"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/audiograms-threshold-shift-reporting-symptoms",
    "label": "Audiograms, Threshold Shift & Reporting Symptoms",
    "short": "Using testing, symptom reporting, and follow-up before exposure trends are ignored",
    "icon": "🎧",
    "color": "#00C2A8",
    "regulation": "OSHA 29 CFR 1910.95 — hearing conservation program awareness and follow-up",
    "audience": "Employees in hearing conservation programs, supervisors, and safety leads",
    "minutes": 14,
    "slides": [
      {
        "heading": "Testing Is a Warning Tool, Not Just Paperwork",
        "sub": "Audiograms help catch change before it is normalized.",
        "body": "A hearing conservation program does not end with issuing PPE. Testing and follow-up help identify whether workers are staying protected or whether controls are drifting. Audiograms matter because they can reveal change early enough to correct fit, behavior, equipment, or area controls.",
        "list": [
          "Testing supports prevention when the results trigger action.",
          "Threshold shifts should lead to control review, not paperwork closure.",
          "Trend awareness helps target the noisiest tasks and weakest habits."
        ]
      },
      {
        "heading": "Workers Must Report Symptoms Promptly",
        "sub": "Ringing, muffled hearing, and repeated communication trouble are reportable signs.",
        "body": "Employees should not wait for scheduled testing if they notice symptoms after noisy work. Prompt reporting allows the program to check exposure history, PPE fit, area changes, and training effectiveness before the pattern worsens. Silence helps the hazard win.",
        "list": [
          "Report symptoms even if they fade after a few hours.",
          "Do not assume age or routine work is the only explanation.",
          "Supervisors should reinforce reporting without stigma."
        ],
        "callout": {
          "label": "RULE",
          "text": "Report symptoms early. The earlier the program sees the trend, the more options it has to correct it.",
          "color": "#00C2A8"
        }
      },
      {
        "heading": "A Threshold Shift Calls for Review",
        "sub": "The right response is to investigate controls, fit, and exposure sources.",
        "body": "When testing shows change, the response should include more than simply reminding workers to wear PPE. Review the tasks, zones, equipment condition, communication habits, hearing-protection selection, and whether other PPE combinations are defeating the seal. Fix the system, not just the message.",
        "list": [
          "Re-check fit and protector selection.",
          "Review where the employee actually spends time during the shift.",
          "Investigate whether equipment or process changes raised noise exposure."
        ]
      },
      {
        "heading": "Good Programs Close the Loop",
        "sub": "Reporting, testing, and corrective action should connect back to the work.",
        "body": "The most effective hearing conservation programs use symptom reports and test results to improve real field controls. That may mean replacing worn equipment, tightening posted zones, changing routing, retraining fit habits, or improving communication methods. The goal is measurable protection, not administrative completion.",
        "callout": {
          "label": "KEY REVIEW",
          "text": "Audiograms and symptom reporting only create value when they trigger real corrective action in the work environment.",
          "color": "#00C2A8"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is the purpose of audiograms in a hearing conservation program?",
        "options": [
          "To replace hearing protection",
          "To help detect change early enough to improve controls",
          "To excuse workers from noisy tasks permanently",
          "To eliminate the need for symptom reporting"
        ],
        "answer": 1
      },
      {
        "q": "When should a worker report ringing or muffled hearing after noisy work?",
        "options": [
          "Only at the next annual training",
          "Promptly, even if the symptoms fade later",
          "Only if another worker reports the same thing",
          "Only if the area has no posted signs"
        ],
        "answer": 1
      },
      {
        "q": "What should happen after a threshold shift is found?",
        "options": [
          "Close the paperwork and continue as usual",
          "Review fit, tasks, exposure sources, and controls",
          "Remove all hearing protection from the area",
          "Assume age is the only cause"
        ],
        "answer": 1
      },
      {
        "q": "What weakens a hearing conservation program?",
        "options": [
          "Using reports and test results to improve controls",
          "Treating test results as paperwork instead of a trigger for action",
          "Reviewing noisy tasks",
          "Checking PPE compatibility"
        ],
        "answer": 1
      },
      {
        "q": "What is the goal of follow-up after symptoms or testing changes?",
        "options": [
          "Administrative completion only",
          "Real corrective action in the work environment",
          "More noise exposure data with no operational change",
          "Reducing posted zones without measurement"
        ],
        "answer": 1
      }
    ]
  }
]

export const NoiseHazardRecognitionTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[0]} />
export const HearingDamageTinnitusTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[1]} />
export const HearingProtectionSelectionTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[2]} />
export const HearingFitSealTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[3]} />
export const NoisePatternExposureTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[4]} />
export const NoiseCommunicationSituationalAwarenessTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[5]} />
export const HearingPPECareTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[6]} />
export const AudiogramsThresholdShiftTraining = () => <TrainingModuleShell module={HEARING_CONSERVATION_PHASE1_MODULES[7]} />
