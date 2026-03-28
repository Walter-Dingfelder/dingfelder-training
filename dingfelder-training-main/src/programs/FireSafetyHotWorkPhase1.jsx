import TrainingModuleShell from './TrainingModuleShell.jsx'

export const FIRE_SAFETY_HOT_WORK_PHASE1_MODULES = [
  {
    "path": "/fire-science-ignition-control",
    "label": "Fire Science, Fuel & Ignition Control",
    "short": "How fires start, grow, spread, and get prevented before hot work begins",
    "icon": "🔥",
    "color": "#FF5A36",
    "regulation": "OSHA 29 CFR 1910.252 · NFPA 51B — ignition-source control and combustible management",
    "audience": "All personnel performing, supervising, or permitting hot work and fire-exposure tasks",
    "minutes": 15,
    "slides": [
      {
        "heading": "Every Fire Needs the Right Conditions, Not Bad Luck",
        "sub": "Fuel, oxygen, heat, and a workable reaction path have to line up.",
        "body": "Industrial fires are usually preventable because they follow recognizable conditions. Vapors, dust, packaging, oily waste, insulation, coatings, and ordinary trash become part of the fuel package. Welding arcs, grinding sparks, heaters, electrical faults, friction, or hot surfaces provide ignition. Workers reduce fire risk by breaking the chain before work starts.",
        "list": [
          "Do not think only in terms of open flame; sparks and hot surfaces ignite too.",
          "A clean-looking work area may still contain hidden combustibles inside walls, under grating, or behind equipment.",
          "The safest hot-work job is the one where fuel and ignition are separated before work begins."
        ],
        "callout": {
          "label": "RULE",
          "text": "Control fuel and ignition before the first spark is made.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "Fire Loads Travel Beyond the Immediate Task",
        "sub": "Workers often protect the torch point and ignore the surroundings.",
        "body": "A cutting or welding point is only one part of the exposure area. Heat conducts through steel, sparks ricochet, and hot slag drops through cracks, drains, cable trays, trenches, and floor openings. A job that looks contained at the work face may ignite debris or vapor elsewhere on the same elevation or below it.",
        "list": [
          "Survey above, below, behind, and on the opposite side of walls or decks.",
          "Treat open grating, drains, pits, and penetrations as fire-travel paths.",
          "Do not assume noncombustible structure means the nearby contents are noncombustible."
        ]
      },
      {
        "heading": "Vapors, Dusts, and Fibers Change the Risk Fast",
        "sub": "Some atmospheres ignite long before workers see visible flame.",
        "body": "Flammable vapor clouds, combustible dust suspensions, and dry fibers can turn a routine maintenance job into a flash fire. Solvent wipe-downs, paint prep, resin work, product residues, and housekeeping failures can all change the job from acceptable to prohibited until the area is cleaned, ventilated, isolated, or tested.",
        "list": [
          "Never start hot work in a potentially flammable atmosphere without evaluation.",
          "Dust and fiber accumulations can ignite from small ignition sources and spread quickly.",
          "Recent chemical use or line opening may matter more than what the room looks like right now."
        ]
      },
      {
        "heading": "The Permit Process Exists to Force This Evaluation",
        "sub": "Hot-work control fails when crews treat the permit as a formality.",
        "body": "A permit is the written proof that the area was examined, combustibles were addressed, the right fire watch was assigned, extinguishers were present, detection/protection impacts were considered, and post-work monitoring was planned. When people rush around the permit, they usually skip the very steps that prevent delayed fires.",
        "list": [
          "Use the permit to verify conditions, not just to document them after the fact.",
          "Stop work if the area changes, the job scope changes, or protection can no longer be maintained.",
          "No hot work should begin until the fire controls are truly in place."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What basic strategy prevents most industrial fires before work starts?",
        "choices": [
          "Separate ignition from fuel",
          "Use more cutting speed",
          "Lower the room lights",
          "Keep the permit unsigned"
        ],
        "answer": 0
      },
      {
        "question": "Which of these can ignite a fire even without an open flame?",
        "choices": [
          "A grinding spark",
          "A lunch break",
          "A cold hose",
          "A clipboard"
        ],
        "answer": 0
      },
      {
        "question": "Why must workers inspect below and behind the work area?",
        "choices": [
          "Heat and sparks can travel",
          "Because permits require photos only",
          "To count tools",
          "To improve lighting"
        ],
        "answer": 0
      },
      {
        "question": "Which condition makes hot work more dangerous even in a clean-looking room?",
        "choices": [
          "Hidden vapors or dust",
          "Fresh paint on the wall only",
          "A quiet shift",
          "A shorter hose"
        ],
        "answer": 0
      },
      {
        "question": "What should a hot-work permit prove?",
        "choices": [
          "That fire controls were verified before work",
          "That production wants the job done faster",
          "That any extinguisher is acceptable",
          "That the worker has gloves"
        ],
        "answer": 0
      },
      {
        "question": "What is a common fire-travel path?",
        "choices": [
          "Floor openings and drains",
          "A closed handbook",
          "A time clock",
          "A lunch cooler"
        ],
        "answer": 0
      },
      {
        "question": "When should work stop and be re-evaluated?",
        "choices": [
          "When conditions or scope change",
          "Only after lunch",
          "Only after ignition occurs",
          "Never after the permit is opened"
        ],
        "answer": 0
      },
      {
        "question": "What is the key message of this module?",
        "choices": [
          "Control fuel and ignition before sparks begin",
          "Fire risk exists only outdoors",
          "Permits replace inspection",
          "Combustibles matter only if they are visible"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/hot-work-permits-fire-watch",
    "label": "Hot Work Permits, Boundaries & Fire Watch",
    "short": "Permit discipline, exposure boundaries, and what a real fire watch must do",
    "icon": "📋",
    "color": "#FF5A36",
    "regulation": "NFPA 51B · OSHA 29 CFR 1910.252 — hot-work authorization and continuous fire watch",
    "audience": "Welders, cutters, mechanics, supervisors, contractors, and assigned fire-watch personnel",
    "minutes": 16,
    "slides": [
      {
        "heading": "The Permit Defines the Safe Work Envelope",
        "sub": "It tells the crew where hot work may occur and under what conditions.",
        "body": "Hot-work permits should identify the exact location, scope, combustibles removed or protected, fire-watch assignment, extinguisher placement, special atmospheric concerns, and how long post-work observation must continue. Crews get hurt when they treat one permit like permission to spark anywhere nearby.",
        "list": [
          "The permit must match the actual location and task.",
          "A permit for one deck or room does not automatically cover adjacent exposure zones.",
          "Changes in process status, ventilation, weather, or occupancy can invalidate the permit."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the job moves, changes, or expands, the hot-work permit must be re-evaluated.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "A Fire Watch Is an Active Safety Role",
        "sub": "It is not a backup duty for someone who is also trying to do other work.",
        "body": "The fire watch must know the permit boundaries, stay focused on ignition exposure, understand how to raise the alarm, and be prepared to use the proper extinguisher for an incipient-stage fire if trained and conditions allow. A distracted watcher who is turning valves, carrying tools, or helping with the main task is not providing real fire protection.",
        "list": [
          "The fire watch needs a clear line of sight or equivalent observation of the exposure area.",
          "They must know the evacuation and alarm method before work starts.",
          "Fire watch continues through the required post-work period, not just while sparks are visible."
        ]
      },
      {
        "heading": "Boundaries Must Include Adjacent and Hidden Exposures",
        "sub": "The dangerous area is often larger than the taped-off work point.",
        "body": "Walls, pipe chases, mezzanines, false ceilings, pits, and opposite sides of process equipment can all be part of the exposure boundary. The permit should address barriers, coverings, shutdowns, cleanup, and watch positions for the full exposure field, not only the welder’s immediate stance area.",
        "list": [
          "Use noncombustible shields where removal of combustibles is not possible.",
          "Include lower levels where sparks or slag can fall.",
          "Do not leave nearby doors, ducts, or openings unconsidered."
        ]
      },
      {
        "heading": "Stopping Work Is Part of the Fire-Watch Job",
        "sub": "The permit is not valid if the controls fall apart mid-task.",
        "body": "If combustibles return to the area, atmospheric conditions change, fire protection is impaired, the assigned fire watch is pulled away, or extinguishers and hose lines are no longer available, the correct action is to stop the job and correct the condition. Production pressure does not override a failing permit.",
        "list": [
          "Stop the task when the watch cannot maintain the exposure zone.",
          "Stop if barriers, covers, or isolations move or fail.",
          "Stop if the work begins to produce more heat or spark travel than the permit anticipated."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What does a hot-work permit define?",
        "choices": [
          "The safe work envelope and controls",
          "Only the welder’s name",
          "The lunch schedule",
          "The final inspection date only"
        ],
        "answer": 0
      },
      {
        "question": "When is a fire watch not adequate?",
        "choices": [
          "When they are also doing other tasks",
          "When they have an extinguisher",
          "When they know the alarm number",
          "When they understand the permit"
        ],
        "answer": 0
      },
      {
        "question": "How long can fire-watch duties last?",
        "choices": [
          "Through the required post-work period",
          "Only until visible sparks stop",
          "Only during setup",
          "Only until the supervisor leaves"
        ],
        "answer": 0
      },
      {
        "question": "What should happen if the job moves to another area?",
        "choices": [
          "Re-evaluate the permit",
          "Use the same permit without review",
          "Ignore the boundary",
          "Turn off the extinguisher"
        ],
        "answer": 0
      },
      {
        "question": "Which area must be considered in the boundary?",
        "choices": [
          "Adjacent, hidden, and lower-level exposures",
          "Only the worker’s boots",
          "Only the tool box",
          "Only the permit table"
        ],
        "answer": 0
      },
      {
        "question": "What is the right action if the fire watch is pulled away?",
        "choices": [
          "Stop work",
          "Keep working faster",
          "Reduce sparks manually",
          "Close the permit later"
        ],
        "answer": 0
      },
      {
        "question": "Which tool can help where combustibles cannot be removed?",
        "choices": [
          "Noncombustible shielding",
          "A cardboard cover",
          "More solvent",
          "A fan pointed at the spark"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Permit and fire-watch discipline prevent hidden fires",
          "Fire watch is optional for short jobs",
          "The permit is only paperwork",
          "Boundaries stop at the work point"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/spark-travel-welding-cutting-grinding",
    "label": "Welding, Cutting, Grinding & Spark Travel Control",
    "short": "Managing spark spread, hot slag, and conductive heating during hot work",
    "icon": "⚙️",
    "color": "#FF5A36",
    "regulation": "OSHA 29 CFR 1910.252 — spark containment, slag control, and hot-work execution",
    "audience": "Welders, millwrights, fabricators, maintenance crews, and contractor hot-work teams",
    "minutes": 16,
    "slides": [
      {
        "heading": "The Spark Pattern Matters as Much as the Tool",
        "sub": "Different tools throw heat and particles in different ways.",
        "body": "Grinding throws long spark streams, cutting drops hot slag, and welding creates both arc exposure and spatter. Crews must orient the task to control where the ignition source lands. A tool aimed toward a fiber line, a cable tray, or a dust pocket can create a fire far outside the worker’s immediate attention.",
        "list": [
          "Know the travel direction of sparks before starting work.",
          "Use curtains, shields, or repositioning to change the spark path.",
          "Treat downward spark drop as seriously as horizontal spark travel."
        ],
        "callout": {
          "label": "RULE",
          "text": "Aim the work so heat and sparks land in a protected zone, not in combustible exposure areas.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "Conductive Heating Can Ignite the Opposite Side",
        "sub": "Metal carries heat where the worker cannot see it.",
        "body": "Even when sparks are contained, heated metal can ignite paint, insulation, oil, packaging, or residue on the opposite side of a plate, wall, or duct. This is why a spotter or secondary inspection may be needed on the far side of the work. Fire risk is not limited to the visible face being welded or cut.",
        "list": [
          "Check both sides of metal partitions and equipment housings.",
          "Watch for trapped residues, liners, and lagging that can heat up unseen.",
          "Do not assume a thick steel surface makes the opposite side safe."
        ]
      },
      {
        "heading": "Grinding and Cleanup Create Their Own Fire Exposures",
        "sub": "Post-cut cleanup is still part of hot work.",
        "body": "Workers often finish the cut and then use grinders, wire wheels, or compressed air without rechecking exposures. Those steps can move ember fragments, stir dust, or reintroduce ignition into an area that was only partially cleaned. Housekeeping is part of spark control, not a separate lower-risk phase.",
        "list": [
          "Recheck the area before grinding or cleanup starts.",
          "Do not blow hot particles into corners, pits, or process equipment.",
          "Use approved cleanup methods for residues and debris."
        ]
      },
      {
        "heading": "Monitor for Heat, Odor, Smoke, and Delayed Ignition",
        "sub": "Some hot-work fires begin after the crew thinks the task is done.",
        "body": "Workers should watch for unusual odor, smoking insulation, discoloration, glowing particles, or heat retained in nearby materials. The absence of flame at task completion does not mean the job is fire-free. Slow-starting smolder can become open flame minutes later if the area is abandoned too quickly.",
        "list": [
          "Touch-survey only when safe and appropriate; do not expose hands to hot surfaces.",
          "Use the fire watch to look for signs of hidden smolder.",
          "Extend observation when the work involved enclosed spaces or layered materials."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is the first control for spark travel?",
        "choices": [
          "Aim the work toward a protected zone",
          "Increase grinder speed",
          "Add more oxygen",
          "Stand closer"
        ],
        "answer": 0
      },
      {
        "question": "Why might the opposite side of a metal wall be dangerous?",
        "choices": [
          "Heat can conduct through the metal",
          "The wall becomes cold",
          "Permits do not apply there",
          "Sparks cannot travel there"
        ],
        "answer": 0
      },
      {
        "question": "Which activity can still create ignition risk after the main cut is done?",
        "choices": [
          "Grinding and cleanup",
          "Writing notes",
          "Clocking out",
          "Closing the toolbox"
        ],
        "answer": 0
      },
      {
        "question": "What kind of sign can indicate delayed ignition?",
        "choices": [
          "Smoke or unusual odor",
          "A quiet room",
          "A longer extension cord",
          "A new permit form"
        ],
        "answer": 0
      },
      {
        "question": "Why should lower levels be checked during spark-producing work?",
        "choices": [
          "Hot slag can fall through openings",
          "They always stay cooler",
          "They are outside the permit",
          "Only managers use them"
        ],
        "answer": 0
      },
      {
        "question": "What should be done before switching from cutting to grinding?",
        "choices": [
          "Recheck exposures",
          "Assume the area is still safe",
          "Remove the fire watch",
          "Store the extinguisher"
        ],
        "answer": 0
      },
      {
        "question": "What is the safest assumption about hot work in layered or enclosed materials?",
        "choices": [
          "Delayed smolder is possible",
          "Fire cannot start there",
          "Heat disappears instantly",
          "Only flame matters"
        ],
        "answer": 0
      },
      {
        "question": "What is the main lesson?",
        "choices": [
          "Control spark direction and monitor for hidden heat",
          "Grinding is never part of hot-work planning",
          "Metal cannot transfer heat",
          "Visible flame is the only concern"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/flammable-atmospheres-area-preparation",
    "label": "Flammable Atmospheres, Vapors & Area Preparation",
    "short": "Preparing spaces with fuels, solvents, gas systems, and vapor-release potential before ignition work",
    "icon": "🛢️",
    "color": "#FF5A36",
    "regulation": "OSHA hot-work and flammable-atmosphere control — ignition prohibited until the atmosphere is safe",
    "audience": "Maintenance, operations, contractors, line-opening teams, gas-system workers, and supervisors",
    "minutes": 17,
    "slides": [
      {
        "heading": "No Hot Work in a Potentially Flammable Atmosphere",
        "sub": "This is a stop-work condition until the release risk is eliminated.",
        "body": "A room, pit, vessel, or outdoor process area may look quiet and still contain ignitable vapor or gas from line residue, leaks, venting, chemical transfer, drainage, or poor ventilation. Hot work must not begin until the area has been isolated, cleaned, purged, ventilated, and tested as required by the site procedure.",
        "list": [
          "Do not rely on smell alone to decide that vapors are gone.",
          "Recent draining, sampling, or opening activity can leave an ignitable atmosphere behind.",
          "A permit is invalid if atmospheric conditions were not properly addressed."
        ],
        "callout": {
          "label": "STOP",
          "text": "Ignition work and possible vapor release cannot occupy the same uncontrolled space.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "Residual Fuels Hide in More Places Than the Main Line",
        "sub": "Drips, dead legs, low points, absorbent surfaces, and nearby containers matter.",
        "body": "Workers often isolate the obvious line but forget about trapped liquid in hoses, pump cavities, low spots, absorbent insulation, rags, sumps, sample containers, or residues inside adjacent equipment. That leftover fuel can heat, off-gas, or flash when sparks are introduced.",
        "list": [
          "Inspect surrounding containers, drains, and cleanup materials.",
          "Empty and secure small containers before hot work begins.",
          "Treat oily absorbents and contaminated rags as fuel sources."
        ]
      },
      {
        "heading": "Ventilation and Testing Must Match the Real Space",
        "sub": "A fan at the doorway is not the same as verified atmospheric control.",
        "body": "Ventilation must move vapor away from the work and avoid pushing fuel toward ignition sources elsewhere. Testing, where required, has to represent the actual breathing zone and low or stagnant points where heavier-than-air gases may collect. One reading at the edge of the room is not enough when the hazard can stratify or migrate.",
        "list": [
          "Test where the hazard can accumulate, not only where it is convenient.",
          "Re-test when the process condition or air movement changes.",
          "Coordinate atmospheric control with line opening, purging, and confined-space rules where they apply."
        ]
      },
      {
        "heading": "Area Preparation Includes Nearby Processes and Vehicle Traffic",
        "sub": "A safe setup can be defeated by new fuel entering the zone.",
        "body": "Forklifts, portable fuel cans, moving chemical totes, vented drums, vehicle exhaust, or process upset can reintroduce flammable conditions after the permit is opened. The preparation step must control what can enter the hot-work zone as well as what was already there.",
        "list": [
          "Restrict traffic that brings fuel, vapor, or ignition into the zone.",
          "Coordinate with operations before starting line work or process changes nearby.",
          "Stop the job if fuel conditions return."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is the rule for hot work in a potentially flammable atmosphere?",
        "choices": [
          "Do not start until the atmosphere is made safe",
          "Start with a bigger extinguisher",
          "Use faster welding speed",
          "Keep the door closed and continue"
        ],
        "answer": 0
      },
      {
        "question": "Which is a common hidden fuel source?",
        "choices": [
          "Oily rags and low-point residue",
          "A dry clipboard",
          "A stainless handrail only",
          "A clean permit form"
        ],
        "answer": 0
      },
      {
        "question": "Why is smell an unreliable test?",
        "choices": [
          "Ignitable atmospheres may be present without obvious odor",
          "Smell is always too strong",
          "Permits replace odor checks",
          "Gas only exists outdoors"
        ],
        "answer": 0
      },
      {
        "question": "What makes ventilation inadequate by itself?",
        "choices": [
          "It may not represent real vapor control or testing",
          "It always increases fire",
          "It replaces isolation",
          "It prevents all monitoring"
        ],
        "answer": 0
      },
      {
        "question": "Where should testing focus when applicable?",
        "choices": [
          "Where vapor can accumulate or stagnate",
          "Only by the doorway",
          "Only above the worker’s head",
          "Only in the office"
        ],
        "answer": 0
      },
      {
        "question": "What can reintroduce fire risk after area prep?",
        "choices": [
          "Nearby process changes or fuel traffic",
          "A completed JSA",
          "A new wrench",
          "A clean welding hood"
        ],
        "answer": 0
      },
      {
        "question": "When should the job stop after the permit is opened?",
        "choices": [
          "If fuel conditions return",
          "Only after flame appears",
          "Only at shift change",
          "Never if the supervisor approved it"
        ],
        "answer": 0
      },
      {
        "question": "What is the main lesson?",
        "choices": [
          "Hot work and uncontrolled vapor release cannot share the same space",
          "Atmospheric testing is optional",
          "Residual fuel does not matter",
          "A fan solves every hazard"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/combustible-dust-fiber-housekeeping",
    "label": "Combustible Dust, Fiber, Oily Waste & Housekeeping",
    "short": "Managing fire load from dust, fibers, packaging, residue, and poor cleanup around hot work",
    "icon": "🧹",
    "color": "#FF5A36",
    "regulation": "Combustible housekeeping and ignition-source control — cleanup is part of fire prevention",
    "audience": "Operations, maintenance, janitorial support, contractors, and supervisors in dusty or fiber-generating areas",
    "minutes": 15,
    "slides": [
      {
        "heading": "Housekeeping Is a Fire Control, Not a Cosmetic Task",
        "sub": "Dust, fiber, lint, paper, packaging, and oily waste are part of the fuel package.",
        "body": "Workers often think the major risk is the torch or grinder itself, when the real fire growth hazard is the material lying nearby. Small fires accelerate when residue, absorbents, cardboard, insulation, or dry buildup are left in place. Good housekeeping reduces both ignition likelihood and fire spread.",
        "list": [
          "Remove loose combustible material before work starts.",
          "Treat oily wipes, contaminated absorbents, and trash as real fuel.",
          "Do not ignore ledges, cable trays, or tops of equipment where dust collects."
        ],
        "callout": {
          "label": "RULE",
          "text": "A clean hot-work zone is part of the permit, not a courtesy.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "Dust and Fiber Hazards Are Easy to Underestimate",
        "sub": "They may look harmless until sparks or heat reach them.",
        "body": "Wood dust, grain residues, resin dust, fiberglass scraps, lint, dry sludge, and other fine material can ignite or support rapid surface fire when heated. Even when a dust cloud is not explosive, settled dust can carry flame along floors, trays, and structural surfaces. Dry accumulations turn routine hot work into a spreading-fire problem.",
        "list": [
          "Do not sweep dust into another uncontrolled area and call it finished.",
          "Use approved cleanup methods instead of creating airborne clouds.",
          "Check hidden collection points such as corners, beams, and ventilation intakes."
        ]
      },
      {
        "heading": "Temporary Combustibles Matter Too",
        "sub": "A safe area can become unsafe when staging and packaging move in.",
        "body": "Pallets, cartons, shrink wrap, drop cloths, spare filters, and maintenance supplies are often staged near the work because they are convenient. That convenience defeats the permit if those materials can be reached by sparks, radiant heat, or molten slag. Temporary materials should be relocated or protected before work begins.",
        "list": [
          "Keep staging and packaging outside the spark envelope.",
          "Do not store waste bins in the hot-work zone.",
          "Remove or cover vulnerable materials before setup is complete."
        ]
      },
      {
        "heading": "Cleanup Continues After the Task Ends",
        "sub": "Residual waste can support delayed ignition after the crew leaves.",
        "body": "Discarded electrodes, cut-offs, slag, abrasive debris, and warm trash may start smoldering after work appears complete. Final housekeeping should remove hot residue, verify containers are appropriate, and leave the area in a state that will not continue heating after the permit closes.",
        "list": [
          "Do not throw hot debris into ordinary trash or oily-waste bins without control.",
          "Check rags, filters, and absorbents for retained heat.",
          "Close the job only after the zone is truly clean and stable."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why is housekeeping part of hot-work safety?",
        "choices": [
          "It removes fuel that can feed ignition",
          "It improves appearance only",
          "It replaces the permit",
          "It cools the welding arc"
        ],
        "answer": 0
      },
      {
        "question": "Which material should be treated as combustible fuel?",
        "choices": [
          "Oily absorbents and dry dust",
          "A steel wrench",
          "A concrete wall",
          "A signed permit"
        ],
        "answer": 0
      },
      {
        "question": "What is a common hidden dust collection point?",
        "choices": [
          "Ledges and cable trays",
          "A sealed locker",
          "A closed binder",
          "A water cooler"
        ],
        "answer": 0
      },
      {
        "question": "What should happen to pallets and packaging near hot work?",
        "choices": [
          "Move or protect them",
          "Leave them if they are stacked neatly",
          "Spray them with water and continue",
          "Use them as barriers"
        ],
        "answer": 0
      },
      {
        "question": "Why can cleanup still be dangerous after the task ends?",
        "choices": [
          "Hot debris can keep smoldering",
          "Permits stop working",
          "Sparks disappear instantly",
          "Trash cannot burn"
        ],
        "answer": 0
      },
      {
        "question": "What is the safer cleanup approach for fine material?",
        "choices": [
          "Use approved methods that do not create clouds",
          "Blow it everywhere with compressed air",
          "Kick it under equipment",
          "Ignore it if no flame is visible"
        ],
        "answer": 0
      },
      {
        "question": "What should not be left in the hot-work zone?",
        "choices": [
          "Waste bins and staging materials",
          "A noncombustible shield",
          "An approved extinguisher",
          "The fire watch"
        ],
        "answer": 0
      },
      {
        "question": "What is the key lesson?",
        "choices": [
          "Housekeeping controls both ignition and fire spread",
          "Only flames matter, not residue",
          "Dust is a cosmetic issue",
          "Trash can wait until tomorrow"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/portable-extinguishers-incipient-stage",
    "label": "Portable Extinguishers, Alarm & Incipient-Stage Decisions",
    "short": "When to fight a small fire, when to evacuate, and how extinguisher choice matters",
    "icon": "🧯",
    "color": "#FF5A36",
    "regulation": "OSHA 29 CFR 1910.157 — extinguisher use, alarm activation, and incipient-stage limitations",
    "audience": "All campus personnel, hot-work crews, fire-watch personnel, and supervisors",
    "minutes": 15,
    "slides": [
      {
        "heading": "Extinguishers Are for Small, Early, Controllable Fires",
        "sub": "They are not a substitute for evacuation or emergency response.",
        "body": "Portable extinguishers are intended for incipient-stage fires when the worker is trained, has a safe exit behind them, knows the extinguisher type, and the fire has not grown beyond immediate control. Workers are put at risk when they stay too long, choose the wrong extinguisher, or delay alarm and evacuation while trying to be a hero.",
        "list": [
          "Activate the alarm and follow site emergency steps without delay.",
          "Only attempt extinguishment when conditions remain small and survivable.",
          "If the fire grows, smoke thickens, or the exit becomes uncertain, leave immediately."
        ],
        "callout": {
          "label": "RULE",
          "text": "Fight only an incipient fire you can control and safely escape from.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "Extinguisher Type Must Match the Fire Class",
        "sub": "Wrong extinguisher selection can fail or make things worse.",
        "body": "Ordinary combustibles, flammable liquids, energized electrical equipment, and metal fires do not behave the same way. Workers need to know the site extinguisher layout and limitations. A common ABC extinguisher covers many early-stage hazards, but it is not the right answer for every specialized fire.",
        "list": [
          "Know which extinguisher types are installed in your area.",
          "Do not use water on energized electrical or incompatible liquid fire conditions.",
          "Special hazards may require specialized extinguishing media."
        ]
      },
      {
        "heading": "PASS Works Only When Position and Judgment Are Right",
        "sub": "Pull, Aim, Squeeze, Sweep is not the whole decision process.",
        "body": "Workers should stay low if smoke is present, keep the exit path behind them, approach only as close as needed, and sweep the base of the fire while observing whether the fire actually goes down. If the fire does not respond quickly, the decision should shift from fighting to evacuation and alarm confirmation.",
        "list": [
          "Never let the fire move between you and the exit.",
          "Watch for re-flash after the first apparent knockdown.",
          "Do not empty the extinguisher blindly into smoke without verifying effect."
        ]
      },
      {
        "heading": "After Use, the Scene Is Not Automatically Safe",
        "sub": "Re-ignition, hidden heat, and equipment status still matter.",
        "body": "A knocked-down fire may still have hot residue, damaged wiring, leaking fuel, or smoldering material that can restart. The area must remain controlled, reported, and evaluated. Used extinguishers must be replaced or serviced, and the underlying cause must be addressed before work resumes.",
        "list": [
          "Report every extinguisher use, even if the fire seemed minor.",
          "Do not restart work until the area is cleared by the site process.",
          "Treat re-ignition potential as real until the source is secured."
        ]
      }
    ],
    "quiz": [
      {
        "question": "When is extinguisher use appropriate?",
        "choices": [
          "For an incipient-stage fire with a safe exit",
          "For any fire regardless of size",
          "Only after the exit is blocked",
          "When no one has training"
        ],
        "answer": 0
      },
      {
        "question": "What should happen immediately when fire is discovered?",
        "choices": [
          "Alarm/notification and emergency steps must begin",
          "Ignore it if an extinguisher is nearby",
          "Wait for smoke to increase",
          "Finish the task first"
        ],
        "answer": 0
      },
      {
        "question": "Why does extinguisher type matter?",
        "choices": [
          "Different fire classes need appropriate media",
          "All extinguishers work on every fire",
          "Labels are optional",
          "Only size matters"
        ],
        "answer": 0
      },
      {
        "question": "What is wrong with fighting a fire after the exit path is compromised?",
        "choices": [
          "You can become trapped",
          "The fire gets smaller",
          "PASS works better",
          "The permit closes automatically"
        ],
        "answer": 0
      },
      {
        "question": "What should you watch for after apparent knockdown?",
        "choices": [
          "Re-flash or re-ignition",
          "A cleaner floor",
          "Lower paperwork volume",
          "Nothing else matters"
        ],
        "answer": 0
      },
      {
        "question": "What must be done after an extinguisher is used?",
        "choices": [
          "Report it and keep the scene controlled",
          "Put it back and leave",
          "Refill it yourself immediately",
          "Ignore the cause"
        ],
        "answer": 0
      },
      {
        "question": "What is the biggest judgment limit of PASS?",
        "choices": [
          "It does not decide whether the fire is still safe to fight",
          "It replaces training",
          "It only works outdoors",
          "It eliminates the need for alarms"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Only fight small controllable fires with a safe exit",
          "Every worker should stay until the extinguisher is empty",
          "Any extinguisher is fine",
          "Alarm comes after firefighting"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/gas-cylinders-hoses-torch-setup",
    "label": "Gas Cylinders, Hoses, Regulators & Torch Setup Safety",
    "short": "Fuel-gas cylinder handling, hose routing, regulator checks, and torch setup discipline",
    "icon": "🧰",
    "color": "#FF5A36",
    "regulation": "OSHA 29 CFR 1910.253 — fuel-gas and oxygen equipment for welding and cutting",
    "audience": "Welders, cutters, maintenance crews, contractors, and supervisors overseeing gas-torch work",
    "minutes": 16,
    "slides": [
      {
        "heading": "Cylinder Control Starts Before the Torch Is Lit",
        "sub": "Storage, securing, and transport errors create the first fire and explosion hazards.",
        "body": "Fuel-gas and oxygen cylinders must be secured, protected from impact, and handled with the correct caps, carts, and separation practices. A damaged valve, fallen cylinder, or leaking connection can create a release hazard before any cutting or welding begins.",
        "list": [
          "Keep cylinders upright and secured when in use and during storage.",
          "Use proper transport methods; do not drag, roll, or carry by the valve.",
          "Protect valve assemblies and keep incompatible gases controlled per site rules."
        ],
        "callout": {
          "label": "RULE",
          "text": "A torch setup is only as safe as the cylinders, regulators, and hose system feeding it.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "Connections, Regulators, and Hoses Need Inspection",
        "sub": "Small leaks become large ignition problems around hot work.",
        "body": "Before use, workers should inspect regulators, flashback arrestors where required, hose condition, fittings, and routing. Damaged, taped, or improvised hose repairs are not acceptable. A leak check and setup inspection should happen before the torch is ignited, not after a flame problem develops.",
        "list": [
          "Replace damaged hoses and fittings instead of improvising.",
          "Route hoses away from sharp edges, wheels, sparks, and hot surfaces.",
          "Check for leaks before lighting the torch."
        ]
      },
      {
        "heading": "Oxygen Is Not Just Another Utility Gas",
        "sub": "It accelerates combustion and changes fire behavior fast.",
        "body": "Workers must not use oxygen for ventilation, cooling, dust blowoff, or personal comfort. Oxygen-enriched conditions make ordinary materials ignite more easily and burn more intensely. Oil or grease contamination on oxygen equipment adds an especially dangerous ignition risk.",
        "list": [
          "Keep oxygen equipment clean and free from oil or grease.",
          "Never use oxygen to purge clothing or work areas.",
          "Treat oxygen leaks as a serious fire escalation hazard."
        ]
      },
      {
        "heading": "Shutdown Matters as Much as Startup",
        "sub": "The job is not complete until the torch system is left safe.",
        "body": "Valves should be shut in the correct sequence, pressure relieved as required, equipment cooled and stored safely, and hoses left protected from traffic or hot surfaces. Leaving a charged system in place after the task increases the chance of leak, damage, or unauthorized use.",
        "list": [
          "Follow site sequence for valve shutoff and pressure relief.",
          "Do not leave torches energized or unattended.",
          "Store or stage the equipment so it cannot be damaged after the job."
        ]
      }
    ],
    "quiz": [
      {
        "question": "How should cylinders normally be positioned?",
        "choices": [
          "Upright and secured",
          "Laid loose on the floor",
          "Hung by the cap",
          "Stacked horizontally"
        ],
        "answer": 0
      },
      {
        "question": "When should hose and regulator inspection occur?",
        "choices": [
          "Before lighting the torch",
          "After the first cut",
          "Only if a flame problem occurs",
          "At the end of the week"
        ],
        "answer": 0
      },
      {
        "question": "What is wrong with taped or improvised hose repair?",
        "choices": [
          "It is not an acceptable leak-control method",
          "It improves flow too much",
          "It cools the hose",
          "It is required for cutting"
        ],
        "answer": 0
      },
      {
        "question": "Why is oxygen misuse dangerous?",
        "choices": [
          "It can enrich the atmosphere and intensify combustion",
          "It always puts fires out",
          "It is harmless in clothing",
          "It only matters in laboratories"
        ],
        "answer": 0
      },
      {
        "question": "What should oxygen never be used for?",
        "choices": [
          "Cooling or blowing off dust",
          "Approved welding operations",
          "Regulated torch use",
          "Site-authorized processes"
        ],
        "answer": 0
      },
      {
        "question": "How should hoses be routed?",
        "choices": [
          "Away from sharp edges, traffic, sparks, and heat",
          "Under wheels for convenience",
          "Across hot slag",
          "Wherever they are shortest"
        ],
        "answer": 0
      },
      {
        "question": "What must happen after the job?",
        "choices": [
          "System shutdown and safe staging",
          "Leave the torch charged for speed later",
          "Lean cylinders against a wall",
          "Ignore the hose position"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Torch safety depends on disciplined cylinder and hose setup",
          "Only the flame matters",
          "Oxygen can be used like shop air",
          "Shutdown is optional"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/post-work-smoldering-fire-system-restoration",
    "label": "Post-Work Monitoring, Smoldering & Fire System Restoration",
    "short": "Preventing delayed ignition after the job and restoring protection before the area returns to service",
    "icon": "⏱️",
    "color": "#FF5A36",
    "regulation": "NFPA 51B — post-work fire watch and restoration of normal fire protection",
    "audience": "Hot-work crews, fire-watch personnel, supervisors, and operations teams returning areas to service",
    "minutes": 15,
    "slides": [
      {
        "heading": "Many Hot-Work Fires Start After the Crew Thinks They Are Finished",
        "sub": "Smoldering is slower, quieter, and easy to miss if the area is abandoned too early.",
        "body": "Heat retained in insulation, dust, product residue, wood blocking, cable jackets, gaskets, roofing, lagging, or trash can continue building after the visible task is done. That is why post-work observation exists. Closing the permit too early removes the exact safeguard meant to catch delayed ignition.",
        "list": [
          "Treat smoke odor, warm surfaces, and discoloration as active warning signs.",
          "Maintain observation for the period required by site procedure and permit conditions.",
          "Extend monitoring when the work involved enclosed spaces or hidden combustible layers."
        ],
        "callout": {
          "label": "RULE",
          "text": "The job is not done when sparks stop; it is done when the area is stable and protected again.",
          "color": "#FF5A36"
        }
      },
      {
        "heading": "Restoration Means More Than Picking Up Tools",
        "sub": "Barriers, detection, suppression, and process status all have to be reset correctly.",
        "body": "If detectors were covered, sprinklers isolated, drains protected, curtains installed, or process equipment opened, those temporary conditions must be restored according to the site process before the area is released. Workers should never walk away from a modified fire-protection condition and assume the next shift will handle it.",
        "list": [
          "Verify detector covers are removed and impairment steps are closed properly.",
          "Return hose lines, extinguishers, and barriers to the intended readiness state.",
          "Confirm operations understands that the area is released and protection is restored."
        ]
      },
      {
        "heading": "A Good Final Check Looks for Both Fire and Process Readiness",
        "sub": "The area must be safe for normal occupancy and safe for the next task.",
        "body": "Final checks should confirm no embers remain, waste is removed, cylinders and hoses are secured, line openings are closed, and equipment is not left in an energized or abnormal state. The end of the permit is also the handoff point back to normal operations, so anything unresolved must be communicated before the area is turned over.",
        "list": [
          "Close out temporary controls in a deliberate order.",
          "Do not return the area to service with unresolved fire or equipment concerns.",
          "Use turnover communication to prevent the next crew from inheriting hidden risk."
        ]
      },
      {
        "heading": "Every Near-Miss Fire Teaches Something About the Setup",
        "sub": "Delayed heat, smoke, or extinguisher use should trigger review, not silence.",
        "body": "If a fire nearly started, if smoke was found late, or if protection had to be used, the incident should be captured and reviewed. These events reveal weaknesses in permit boundaries, housekeeping, shielding, watch position, area preparation, or restoration discipline. Learning from them is part of fire prevention.",
        "list": [
          "Report near misses and delayed-ignition findings.",
          "Use the event to improve future permit setup and watch practices.",
          "Do not hide a close call just because the fire stayed small."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why does post-work fire watch continue after sparks stop?",
        "choices": [
          "Delayed ignition and smolder can still develop",
          "The permit requires extra paperwork only",
          "Extinguishers must cool down",
          "Because the job is already over"
        ],
        "answer": 0
      },
      {
        "question": "What is one sign of possible delayed ignition?",
        "choices": [
          "Smoke odor or retained heat",
          "A clean toolbox",
          "A signed badge",
          "A longer break"
        ],
        "answer": 0
      },
      {
        "question": "What must happen to temporary fire-protection impairments?",
        "choices": [
          "They must be restored and closed out properly",
          "They can be left for the next shift",
          "They end automatically",
          "They only matter during inspections"
        ],
        "answer": 0
      },
      {
        "question": "Which condition should be verified before release?",
        "choices": [
          "Detectors, barriers, and extinguishers are restored appropriately",
          "The worker has left the building",
          "The torch is still pressurized",
          "The waste bin is closer to the job"
        ],
        "answer": 0
      },
      {
        "question": "What should a final check include besides fire signs?",
        "choices": [
          "Process and equipment readiness",
          "Only the permit signature",
          "Only the welder’s tools",
          "Only housekeeping photos"
        ],
        "answer": 0
      },
      {
        "question": "Why should near-miss fire events be reported?",
        "choices": [
          "They reveal setup weaknesses for future jobs",
          "They are not important if the fire stayed small",
          "They delay every shift unnecessarily",
          "They automatically close all permits"
        ],
        "answer": 0
      },
      {
        "question": "What is the right release point for the job?",
        "choices": [
          "When the area is stable and protection is restored",
          "As soon as visible sparks stop",
          "When the supervisor leaves",
          "When the first cut is complete"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Post-work monitoring prevents delayed fires and unsafe restoration",
          "The job ends when the torch cools",
          "Protection impairments do not matter after work",
          "Near misses should stay informal"
        ],
        "answer": 0
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function FireSafetyHotWorkModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const FireScienceIgnitionControlTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[0])
export const HotWorkPermitFireWatchTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[1])
export const SparkTravelExposureControlTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[2])
export const FlammableAtmospherePreparationTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[3])
export const CombustibleLoadHousekeepingTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[4])
export const PortableExtinguisherIncipientTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[5])
export const GasCylinderTorchSetupTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[6])
export const PostWorkSmolderingRestorationTraining = makeModuleComponent(FIRE_SAFETY_HOT_WORK_PHASE1_MODULES[7])
