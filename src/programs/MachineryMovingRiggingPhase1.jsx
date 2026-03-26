import TrainingModuleShell from './TrainingModuleShell.jsx'

export const MACHINERY_MOVING_RIGGING_PHASE1_MODULES = [
  {
    "path": "/rigging-lift-planning-weight-verification",
    "label": "Lift Planning, Load Charts & Weight Verification",
    "short": "Knowing what the load weighs, what the equipment can do, and what the plan requires before the lift starts",
    "icon": "📋",
    "color": "#6F42C1",
    "regulation": "OSHA 1910.179 · OSHA 1910.184 · ASME B30 lift planning and rigging practice",
    "audience": "Riggers, crane operators, millwrights, maintenance teams, contractors, and lift supervisors",
    "minutes": 16,
    "slides": [
      {
        "heading": "Every Safe Lift Starts With a Verified Plan",
        "sub": "A lift becomes dangerous the moment a crew guesses instead of verifies.",
        "body": "Machinery moving and rigging incidents often begin long before the hook rises. Unknown load weight, missing center-of-gravity information, unverified rigging capacity, poor path planning, and unclear roles all stack risk into the lift. The crew must know the load, the equipment, the route, and the stop conditions before motion starts.",
        "list": [
          "Confirm actual or engineered load weight before selecting rigging and equipment.",
          "Verify crane, hoist, gantry, jack, or roller capacity for the planned configuration, not just the machine nameplate.",
          "Identify lift path, obstructions, pinch zones, and final landing position before the first connection is made."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the crew cannot explain the lift plan clearly, the lift is not ready to begin.",
          "color": "#6F42C1"
        }
      },
      {
        "heading": "Load Charts and Capacity Limits Are Operating Boundaries",
        "sub": "Capacity changes with radius, configuration, angle, and equipment setup.",
        "body": "A crane or hoist is not rated for one universal number under all conditions. Radius, boom length, outrigger position, sling angle, hitch method, and dynamic loading all change what the system can safely handle. Rigging selection must reflect the real lift geometry, not a best-case assumption.",
        "list": [
          "Read the correct chart for the actual machine configuration and lift radius.",
          "Account for sling-angle effects, hardware deration, and load-share assumptions in multi-leg lifts.",
          "Do not substitute field confidence for capacity confirmation."
        ]
      },
      {
        "heading": "Roles and Stop Authority Must Be Settled Before Movement",
        "sub": "Rigging confusion shows up as motion at the wrong time.",
        "body": "Every controlled lift needs assigned roles: person in charge, operator, rigger, signal person, spotter, and workers who must stay clear. Ambiguity causes conflicting commands, unplanned repositioning, and blind movement. The operator should only respond to authorized signals, while any person retains authority to call an emergency stop.",
        "list": [
          "Name the signal person and confirm how stop commands will be communicated.",
          "Keep unauthorized people out of the lift zone and travel path.",
          "Pause the lift if radio traffic, visibility, or task conditions become unclear."
        ]
      },
      {
        "heading": "The Lift Plan Must Include the Set-Down",
        "sub": "Many failures happen at the destination, not during the travel.",
        "body": "Crews sometimes overfocus on getting the load airborne and under-plan the landing area. The receiving surface, cribbing, steel, grout pads, anchor locations, and hand-placement zones all need to be ready before the machine arrives. A load that lands crooked, unstable, or against trapped hands can injure workers even after the hardest part of the move appears finished.",
        "list": [
          "Prepare cribbing, skids, mats, or landing steel before the lift begins.",
          "Know where hands must not go during alignment and final placement.",
          "Do not lower a load onto unstable support, debris, or uncertain contact points."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the most important reason to verify load weight before a lift?",
        "choices": [
          "It helps the crew move faster once the lift starts",
          "It determines whether the selected rigging and lifting equipment are suitable",
          "It is only needed for loads above 10 tons",
          "It mainly matters for paperwork after the lift"
        ],
        "answer": 1
      },
      {
        "q": "What can reduce effective lifting capacity?",
        "choices": [
          "Lower humidity",
          "Sling angle and lift radius",
          "Brighter lighting",
          "Shorter safety meetings"
        ],
        "answer": 1
      },
      {
        "q": "Who can call an emergency stop during a lift?",
        "choices": [
          "Only the operator",
          "Only the supervisor",
          "Any worker who sees a dangerous condition",
          "Only the signal person"
        ],
        "answer": 2
      },
      {
        "q": "Why must the landing area be part of the plan before the lift starts?",
        "choices": [
          "Because the load is safest only while airborne",
          "Because set-down instability and pinch points can injure workers at the destination",
          "Because cribbing only matters for forklift work",
          "Because the landing area can always be adjusted after lowering begins"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/rigging-center-of-gravity-stability",
    "label": "Center of Gravity, Stability & Tipping Forces",
    "short": "How balance, radius, support conditions, and shifting loads control whether a move stays stable",
    "icon": "⚖️",
    "color": "#6F42C1",
    "regulation": "ASME B30 stability principles · crane and rigging best practice",
    "audience": "Riggers, crane operators, machinery movers, supervisors, and contractors",
    "minutes": 15,
    "slides": [
      {
        "heading": "A Load Does Not Need To Look Dangerous To Be Unstable",
        "sub": "Heavy machinery can appear calm while its center of gravity sits in the wrong place.",
        "body": "Tall machines, offset motors, fluid-filled vessels, asymmetrical frames, and partially disassembled equipment often carry weight away from the visual center. If the hook point, jack placement, roller path, or skid support does not account for that, the load can rotate or tip with little warning. Stability depends on where the weight is, not on how balanced the load looks.",
        "list": [
          "Identify the real center of gravity before lifting, jacking, or rolling.",
          "Expect shifted balance in machines with tanks, motors, tooling, and internal components.",
          "Treat unknown internal load distribution as a hazard requiring engineering confirmation."
        ]
      },
      {
        "heading": "Stability Is Controlled by Support Geometry",
        "sub": "A stable load needs its weight to stay over its support base.",
        "body": "Whether using outriggers, skates, rollers, jacks, cribbing, or lifting lugs, the support footprint matters. Narrow bases, uneven contact, soft ground, or offset lift points can move the load line outside the support zone. Once that happens, the load may slide, roll, or tip faster than the crew can react.",
        "list": [
          "Use support points that keep the projected load line within a stable base.",
          "Do not ignore floor slope, mat settlement, or uneven concrete conditions.",
          "Re-check stability whenever the load rotates, is reconfigured, or shifts to a new support method."
        ]
      },
      {
        "heading": "Dynamic Forces Make a Balanced Lift Unbalanced",
        "sub": "Starts, stops, tag-line pulls, snagging, and sudden swing all change loading.",
        "body": "Loads that are stable at rest may destabilize once movement begins. Shock loading, side loading, snagged rigging, abrupt trolley motion, or sudden crane travel can multiply force through equipment and rigging. Even a small imbalance becomes serious when motion adds energy to the system.",
        "list": [
          "Start, travel, and stop smoothly to limit dynamic loading.",
          "Never side-load a hoist or crane by dragging or pulling from an angle.",
          "Stop immediately if the load snags, rotates unexpectedly, or settles unevenly."
        ]
      },
      {
        "heading": "Crews Need Escape Space Around Any Potential Tip Path",
        "sub": "Standing near the load because it looks stable is a common mistake.",
        "body": "If a machine tips, rotates, or drops onto one support, the hazard zone expands instantly. Workers should never stand between the load and a fixed object, under a suspended load, or in the likely path of swing, fall, or crush. Escape space and body positioning are part of the stability plan, not an afterthought.",
        "list": [
          "Keep body parts out of the path of swing, collapse, or tip-over travel.",
          "Use positioning tools and controls that keep workers outside crush zones.",
          "Do not try to catch, steady, or physically stop a shifting load."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What primarily determines whether a heavy machine is stable during a move?",
        "choices": [
          "How confident the crew feels about it",
          "Whether its weight stays supported within a stable base",
          "Whether the machine has already been moved once",
          "Whether it is painted with center lines"
        ],
        "answer": 1
      },
      {
        "q": "Why can a load that looks balanced still rotate unexpectedly?",
        "choices": [
          "Because appearance does not reveal the true center of gravity",
          "Because all loads rotate once lifted",
          "Because hook blocks always cause spinning",
          "Because stable loads are less predictable"
        ],
        "answer": 0
      },
      {
        "q": "Which action can create dynamic loading?",
        "choices": [
          "A smooth lift with no snagging",
          "Stopping and starting abruptly",
          "Using a verified load chart",
          "Leveling the load before travel"
        ],
        "answer": 1
      },
      {
        "q": "What should workers do if a load begins to shift or tip?",
        "choices": [
          "Move closer to control it by hand",
          "Stay in place and wait for instructions",
          "Clear the hazard zone and stop the move",
          "Pull harder on the tag line"
        ],
        "answer": 2
      }
    ]
  },
  {
    "path": "/rigging-slings-hardware-hitch-selection",
    "label": "Rigging Hardware, Slings & Hitch Selection",
    "short": "Choosing and inspecting the right sling, hardware, and hitch method for the actual load",
    "icon": "🪢",
    "color": "#6F42C1",
    "regulation": "OSHA 1910.184 · ASME B30 rigging hardware and sling practice",
    "audience": "Riggers, maintenance teams, lift supervisors, and contractors",
    "minutes": 15,
    "slides": [
      {
        "heading": "Rigging Gear Must Match the Load and the Lift Method",
        "sub": "A sling that is strong enough on paper can still be the wrong choice in the field.",
        "body": "Wire rope, synthetic web, roundslings, chain slings, shackles, hooks, eyebolts, and spreader devices all perform differently depending on edges, temperature, chemical exposure, angle, and hitch configuration. Selection is not just about rated capacity. It is about whether the gear remains suitable for the actual path the force will take through the lift.",
        "list": [
          "Select slings and hardware for load shape, edges, angle, environment, and attachment points.",
          "Use edge protection where sling contact can cut, crush, or abrade the material.",
          "Do not mix hardware that cannot align or load properly together."
        ]
      },
      {
        "heading": "Inspection Happens Before Use, Not After a Failure",
        "sub": "Rigging defects often hide in plain sight when crews are rushing.",
        "body": "Damaged tags, stretched links, bent hooks, cracked welds, crushed wire rope, torn webbing, heat damage, chemical attack, and missing latches are disqualifying conditions. If identification is missing or condition is uncertain, the gear should be removed from service until it is properly evaluated. A sling with an unknown rating is not acceptable rigging.",
        "list": [
          "Inspect slings, hooks, shackles, and fittings before each use.",
          "Remove gear from service when tags are unreadable or defects are found.",
          "Do not field-repair rigging unless the repair method is approved and controlled."
        ]
      },
      {
        "heading": "Hitch Method Changes Force Distribution",
        "sub": "Vertical, basket, and choker hitches do not carry the same way.",
        "body": "The way a sling is hitched determines how load is shared and where crushing or slippage can occur. Basket hitches can increase support in some cases, while chokers can reduce effective capacity and increase compression at the contact point. Multi-leg hitches should not assume equal loading unless the geometry is controlled and verified.",
        "list": [
          "Use the hitch method specified or justified by the lift plan.",
          "Do not assume a two-leg arrangement shares load equally without proper geometry.",
          "Watch for sling migration, bunching, or choke points as tension builds."
        ]
      },
      {
        "heading": "Attachment Points Must Be Rated and Properly Loaded",
        "sub": "A perfect sling setup still fails if the load connection is wrong.",
        "body": "Padeyes, lifting lugs, eyebolts, trunnions, and machine anchor points must be designed or verified for lifting. Side-loaded eyebolts, makeshift wrap points, and unknown structural members can fail without visible warning. The rigging plan must include the connection point, not just the lifting gear.",
        "list": [
          "Verify that attachment points are intended and rated for the planned loading direction.",
          "Do not side-load hardware that is only rated for straight-line loading unless designed for it.",
          "Reject improvised pick points unless engineering has approved them."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why is sling selection about more than rated capacity?",
        "choices": [
          "Because color matters more than strength",
          "Because edges, angle, environment, and hitch method affect suitability",
          "Because all slings work the same under load",
          "Because inspection replaces selection"
        ],
        "answer": 1
      },
      {
        "q": "What should happen if a sling tag is unreadable?",
        "choices": [
          "Use the sling if it looks strong",
          "Use it only for light loads",
          "Remove it from service until it is properly identified",
          "Double it up with another sling"
        ],
        "answer": 2
      },
      {
        "q": "What is true about multi-leg rigging?",
        "choices": [
          "The load always shares equally between legs",
          "Geometry and angle affect how the load is shared",
          "Only the shortest leg matters",
          "Load sharing is not important if the hook is centered"
        ],
        "answer": 1
      },
      {
        "q": "Why are improvised pick points dangerous?",
        "choices": [
          "They make the lift slower",
          "They may not be rated or aligned for the intended loading",
          "They require too much rigging hardware",
          "They reduce communication quality"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/rigging-jacking-skidding-rollers-moving-paths",
    "label": "Jacking, Skidding, Rollers & Machinery Moving Paths",
    "short": "Controlling loads when they are raised, cribbed, rolled, skidded, or translated across a floor",
    "icon": "🛞",
    "color": "#6F42C1",
    "regulation": "Machinery moving best practice · jacking and cribbing controls",
    "audience": "Millwrights, machinery movers, maintenance crews, riggers, and contractors",
    "minutes": 15,
    "slides": [
      {
        "heading": "A Machine Move Is Still a Lift Even When the Hook Is Gone",
        "sub": "Jacks, skates, rollers, and skids can fail or shift just like crane-supported loads.",
        "body": "Many machinery moves happen without a crane in the air, but the hazard remains the same: a heavy object is under imperfect control. Jacking points, crib stacks, roller alignment, pull direction, and floor condition all determine whether the move stays stable. Translation work can expose crews to crush zones for much longer than a simple pick-and-set lift.",
        "list": [
          "Treat jacking, skidding, and rolling as controlled load-handling operations.",
          "Verify floor condition, slope, seams, drains, and load path obstructions before motion begins.",
          "Plan stopping points, re-cribbing locations, and emergency response before the move starts."
        ]
      },
      {
        "heading": "Cribbing Must Build a Stable Support Stack",
        "sub": "Poor cribbing turns a simple elevation change into a collapse hazard.",
        "body": "Crib stacks should be sound, level, aligned, and built to transfer force vertically. Damaged lumber, uneven contact, mixed materials, and improvised wedges can tilt or punch through under load. Cribbing is a structural support method, not a pile of blocking thrown together in the field.",
        "list": [
          "Use approved cribbing material with full, stable contact between layers.",
          "Keep stacks aligned and avoid sudden height differences without engineering review.",
          "Do not place hands under a load while adjusting cribbing or jacks."
        ]
      },
      {
        "heading": "Moving Paths Need Control Over Direction and Drift",
        "sub": "If the load can wander, it can also strike, pinch, or overturn.",
        "body": "When equipment moves on skates, pipes, dollies, or low-friction surfaces, small alignment errors can grow quickly. Pulling systems, come-alongs, chain falls, hydraulic toe jacks, and powered movers should guide the load along a known path. The crew must know how drift will be corrected without stepping into pinch zones.",
        "list": [
          "Use controlled pull systems and alignment methods that keep workers outside the line of fire.",
          "Re-center rollers and skates only after the load is secured and stable.",
          "Do not allow uncontrolled side drift toward columns, walls, trenches, or people."
        ]
      },
      {
        "heading": "Machinery Moves Need Defined Red Zones",
        "sub": "The danger is not only under the load; it is beside, behind, and ahead of it.",
        "body": "The machine can surge, settle, rotate, or roll farther than expected when friction changes or supports transfer. Red zones should include the crush path, the rollback path, and the pull-line exposure area. Workers should stay clear unless their role is necessary and they can perform it from a protected position.",
        "list": [
          "Mark and control no-go zones along the full moving path.",
          "Keep people out of line with tensioned pulling devices and moving rollers.",
          "Stop the move if direction, support, or pull response becomes unpredictable."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why should jacking and rolling work be treated like a lift?",
        "choices": [
          "Because any controlled heavy-load movement can fail or shift",
          "Because cranes are always nearby",
          "Because it automatically requires a forklift",
          "Because only lifts need planning"
        ],
        "answer": 0
      },
      {
        "q": "What makes cribbing unsafe?",
        "choices": [
          "Full-contact aligned stacks",
          "Improvised unstable stacking with damaged material",
          "Preplanned re-cribbing points",
          "Level support surfaces"
        ],
        "answer": 1
      },
      {
        "q": "Why are moving paths important during a machinery move?",
        "choices": [
          "Because the path controls direction, drift, and hazard zones",
          "Because the shortest path is always best",
          "Because the load will self-correct if it drifts",
          "Because path planning only affects speed"
        ],
        "answer": 0
      },
      {
        "q": "What should workers avoid during a skidding or rolling move?",
        "choices": [
          "Standing in pull-line or crush zones",
          "Using a verified route",
          "Stopping to re-check alignment",
          "Using controlled pull methods"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/rigging-signaling-tag-lines-suspended-load-control",
    "label": "Crane Signaling, Tag Lines & Suspended Load Control",
    "short": "Keeping control of the load in the air without drifting into crush, swing, or line-of-fire exposure",
    "icon": "🏗️",
    "color": "#6F42C1",
    "regulation": "OSHA crane signaling practice · suspended load control",
    "audience": "Signal persons, riggers, crane operators, spotters, and lift supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "One Load, One Command System",
        "sub": "Conflicting directions create delayed motion, confusion, and sudden error.",
        "body": "When multiple people shout directions or use inconsistent radio language, the operator may hesitate, misread the instruction, or move on the wrong assumption. Signal systems must be established before the lift begins. Standard hand signals, radio phrases, and emergency stop authority should be clear to everyone involved.",
        "list": [
          "Assign one primary signal person unless conditions require a controlled alternate.",
          "Confirm hand signals, radio phrases, and stop commands before movement begins.",
          "Pause the lift whenever signals are unclear, blocked, or contradicted."
        ]
      },
      {
        "heading": "Tag Lines Help Control Rotation, Not Override Physics",
        "sub": "A tag line is for guidance, not for wrestling the load.",
        "body": "Tag lines can reduce rotation and help maintain orientation, but they can also pull workers into a hazard if used incorrectly. Workers should never wrap tag lines around hands or bodies, stand under the load, or try to out-muscle a swinging machine. The line should keep the worker outside the fall and crush zone while maintaining reasonable control.",
        "list": [
          "Use tag lines long enough to keep workers out of the hazard zone.",
          "Do not wrap, knot, or body-anchor a tag line.",
          "Release control and clear the zone if the load begins to swing beyond safe control."
        ]
      },
      {
        "heading": "Suspended Loads Create Hidden Swing and Pinch Paths",
        "sub": "The hazard zone extends beyond the bottom of the hook.",
        "body": "Loads can swing due to inertia, wind, trolley movement, sudden stops, or changes in radius. Even small rotation can trap a worker between the load and nearby steel, equipment, columns, or foundations. The crew should identify likely swing paths and keep people out of those areas before the pick starts.",
        "list": [
          "Never stand between a suspended load and a fixed object.",
          "Control swing with smooth movement and proper tag-line use.",
          "Stop and re-stabilize the load if rotation increases or drift becomes unpredictable."
        ]
      },
      {
        "heading": "Landing a Suspended Load Is a Separate Hazard Phase",
        "sub": "The final inches create pinch points, not relief.",
        "body": "When the load reaches its destination, workers often step closer for alignment. That is when hands, feet, and body position become most exposed. Use drift pins, push tools, and controlled hand placement methods that keep the crew clear of crush points while the load is lowered onto its supports.",
        "list": [
          "Keep hands off direct pinch points during set-down and alignment.",
          "Use tools or engineered alignment methods rather than body force.",
          "Do not break tension or unhook until the load is stable on its support."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why should one primary signal person be assigned?",
        "choices": [
          "To reduce conflicting commands to the operator",
          "Because other workers cannot speak during a lift",
          "Because tag lines replace signal control",
          "Because the operator does not need stop authority"
        ],
        "answer": 0
      },
      {
        "q": "What is a tag line for?",
        "choices": [
          "Holding the full load weight if the sling slips",
          "Guiding load orientation while keeping workers outside the hazard zone",
          "Tying the load down after landing",
          "Pulling harder when the load swings"
        ],
        "answer": 1
      },
      {
        "q": "Where should workers never stand during suspended-load handling?",
        "choices": [
          "In a clear observation area",
          "Between the load and a fixed object",
          "At the signal position",
          "Outside the travel path"
        ],
        "answer": 1
      },
      {
        "q": "What should happen before rigging is removed after set-down?",
        "choices": [
          "The crew should push the load into place by hand",
          "The load should be confirmed stable on its supports",
          "The hook should be raised quickly to save time",
          "The signal person should leave the area"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/rigging-mobile-cranes-outriggers-ground-pressure",
    "label": "Mobile Cranes, Outriggers & Ground Bearing Pressure",
    "short": "How setup conditions determine whether a mobile crane has a stable foundation for the lift",
    "icon": "🚧",
    "color": "#6F42C1",
    "regulation": "OSHA crane setup practice · mobile crane stability controls",
    "audience": "Mobile crane operators, lift planners, supervisors, and rigging crews",
    "minutes": 15,
    "slides": [
      {
        "heading": "A Strong Crane Still Fails on a Weak Setup",
        "sub": "Ground condition and outrigger support can control the entire lift outcome.",
        "body": "Mobile crane incidents often involve poor setup rather than poor lifting hardware. Underground voids, uncompacted backfill, vaults, trenches, asphalt over weak subgrade, and sloped surfaces can all undermine support. Outrigger force must travel through pads or mats into ground that can actually carry it.",
        "list": [
          "Evaluate soil, pavement, covers, vaults, and buried structures before setup.",
          "Use outrigger pads or mats sized for the expected ground reaction forces.",
          "Do not treat level indicators as proof that the ground is adequate."
        ]
      },
      {
        "heading": "Outrigger Position Changes the Crane’s Stability Envelope",
        "sub": "Configuration matters just as much as rated capacity.",
        "body": "A crane configured with partial outrigger extension, unequal support, or improper leveling may have different chart limits or may be unsuitable for the planned lift. The setup must match the chart being used. Even small deviations can invalidate the assumptions behind the lift plan.",
        "list": [
          "Verify outrigger extension and crane setup against the correct chart.",
          "Level the crane within allowable limits before taking load.",
          "Stop the lift if any support shows settlement or unexpected movement."
        ]
      },
      {
        "heading": "Ground Bearing Is a Planning Item, Not a Field Guess",
        "sub": "Pads and mats are there to distribute force, not decorate the outrigger.",
        "body": "Outrigger pads spread load, but they are only effective when sized and supported correctly. A pad placed over a void, trench edge, culvert, or weak surface can still punch through. Lift planning should identify known underground hazards and include an engineered support plan where conditions are uncertain.",
        "list": [
          "Do not set outriggers over trench edges, vault covers, or unknown underground conditions without approval.",
          "Use matting and support methods appropriate for the predicted load reaction.",
          "Reassess ground conditions after rain, excavation, or site disturbance."
        ]
      },
      {
        "heading": "The Setup Zone Must Stay Controlled During the Lift",
        "sub": "A stable crane still creates a high-consequence exclusion zone.",
        "body": "Workers should stay clear of the crane setup area, outrigger line, swing radius, and suspended-load path while the lift is underway. If the support system settles or the crane shifts, nearby workers can be struck or pinned before they can react. A crane lift needs controlled access, not casual walk-through traffic.",
        "list": [
          "Control pedestrian and vehicle access around the crane setup zone.",
          "Keep workers out of swing radius, outrigger zones, and load path areas.",
          "Stop the lift if setup conditions change or unauthorized traffic enters the zone."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What can make a properly selected crane unsafe before the lift even begins?",
        "choices": [
          "A weak or poorly supported ground setup",
          "A newer hook block",
          "A longer pre-lift meeting",
          "A bright paint color"
        ],
        "answer": 0
      },
      {
        "q": "Why do outrigger pads matter?",
        "choices": [
          "They mainly prevent scratches to the ground",
          "They help distribute outrigger force into supporting ground",
          "They allow the crane to exceed its chart",
          "They replace the need to inspect the site"
        ],
        "answer": 1
      },
      {
        "q": "What should crews do if an outrigger support settles during the lift?",
        "choices": [
          "Continue carefully if the load is almost landed",
          "Stop the lift and reassess setup stability",
          "Move workers closer to observe the support",
          "Compensate by pulling on tag lines"
        ],
        "answer": 1
      },
      {
        "q": "Why must the crane setup area remain controlled during the lift?",
        "choices": [
          "Because casual traffic can enter the swing, outrigger, or load hazard zone",
          "Because only operators can be outside",
          "Because setup zones do not need barriers",
          "Because walk-through traffic improves communication"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/rigging-critical-lifts-tandem-engineered-plans",
    "label": "Critical Lifts, Tandem Picks & Engineered Lift Plans",
    "short": "When ordinary planning is not enough and the lift requires engineered controls and tighter discipline",
    "icon": "🧠",
    "color": "#6F42C1",
    "regulation": "Critical lift planning practice · engineered lift control",
    "audience": "Lift directors, crane operators, supervisors, engineers, and contractors",
    "minutes": 16,
    "slides": [
      {
        "heading": "Some Lifts Are Critical Because the Margin for Error Is Too Small",
        "sub": "Consequence, complexity, and uncertainty determine when stronger controls are needed.",
        "body": "Critical lifts may involve high weight, high radius, tandem cranes, unusual geometry, occupied areas, sensitive equipment, energized surroundings, limited access, or a failure consequence the site cannot accept. These lifts should not rely on routine field judgment alone. They need documented engineering, clear approval, and disciplined execution.",
        "list": [
          "Treat unusual, high-consequence, or tightly constrained lifts as critical until proven otherwise.",
          "Use formal review and approval before starting a lift that exceeds routine conditions.",
          "Do not downgrade complexity just because the crew has moved similar equipment before."
        ]
      },
      {
        "heading": "Tandem Lifts Multiply Coordination Risk",
        "sub": "Two cranes do not simply cut the weight in half.",
        "body": "In tandem picks, load share changes with movement, boom geometry, deflection, communication timing, and even slight differences in travel. Without a controlled engineered plan, one crane may take more than its assumed share. Both operators and the person in charge must understand how the sequence is supposed to unfold before the load leaves support.",
        "list": [
          "Use engineered load-share assumptions for tandem lifts.",
          "Coordinate operator commands through a single lift director or signal system.",
          "Do not improvise tandem moves in the field without prior planning and approval."
        ]
      },
      {
        "heading": "Critical Lift Plans Must Define Stop Conditions",
        "sub": "A plan is incomplete if it only describes how to continue.",
        "body": "Engineered lift plans should identify the expected sequence, equipment configuration, exclusion zones, communication method, contingency actions, and clear stop triggers. Unexpected load rotation, support settlement, weather changes, gear mismatch, or path obstruction should halt the operation before the situation worsens.",
        "list": [
          "Define what conditions require an immediate pause or shutdown.",
          "Verify that all required gear and setup conditions match the approved plan.",
          "Hold a pre-lift briefing so each role understands sequence and stop authority."
        ]
      },
      {
        "heading": "Documentation Does Not Replace Field Discipline",
        "sub": "An engineered plan still fails if the crew stops following it.",
        "body": "A stamped drawing or approved plan is only effective when it matches field reality and is followed during execution. If the rigging changes, the route changes, the crane setup changes, or the load is not what was expected, the crew must stop and revalidate the plan. Controlled deviation is not the same as improvisation.",
        "list": [
          "Use the approved plan that matches the actual field configuration.",
          "Stop and revalidate when changes affect capacity, geometry, or hazard exposure.",
          "Do not treat paperwork approval as permission to ignore real-time warning signs."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What makes a lift critical?",
        "choices": [
          "Only the total weight",
          "Complexity, consequence, and reduced margin for error",
          "Whether it uses synthetic slings",
          "Whether it takes longer than one hour"
        ],
        "answer": 1
      },
      {
        "q": "Why are tandem lifts especially risky?",
        "choices": [
          "Because two cranes always split the load equally",
          "Because load share and coordination can change during the move",
          "Because only one operator can see the load",
          "Because tandem lifts cannot use a signal person"
        ],
        "answer": 1
      },
      {
        "q": "What should a critical lift plan include besides the sequence?",
        "choices": [
          "Only a signature page",
          "Stop conditions and contingency actions",
          "A promise not to stop once started",
          "Only a crane model number"
        ],
        "answer": 1
      },
      {
        "q": "What should happen if the field setup does not match the approved plan?",
        "choices": [
          "Continue if the difference seems minor",
          "Stop and revalidate the lift plan",
          "Ask the operator to compensate",
          "Remove the exclusion zone"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/rigging-set-down-unrigging-pinch-zone-control",
    "label": "Set-Down, Unrigging & Pinch / Crush Zone Control",
    "short": "Finishing the move safely by controlling hand placement, load stability, and release of rigging tension",
    "icon": "🧱",
    "color": "#6F42C1",
    "regulation": "Pinch/crush prevention and rigging release practice",
    "audience": "Riggers, millwrights, crane crews, installers, and supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Final Inches Can Be the Most Dangerous Part of the Move",
        "sub": "Workers naturally step closer during alignment, exactly when pinch exposure rises.",
        "body": "During set-down, the load is transitioning from rigging support to structural support, cribbing, grout pads, or machine feet. Small shifts can close hand gaps instantly. Crews often relax once the travel phase is over, but many serious hand and crush injuries happen while guiding, aligning, shimming, or removing rigging.",
        "list": [
          "Treat set-down as a distinct hazard phase with controlled body positioning.",
          "Do not place hands or feet under a load to speed alignment.",
          "Keep communication active until the load is fully stable and the rigging is released."
        ]
      },
      {
        "heading": "Use Tools and Methods That Keep Hands Out of the Pinch",
        "sub": "If alignment requires fingers near the load, the method is wrong.",
        "body": "Push sticks, drift pins, alignment bars, wedges, and jacking adjustments allow crews to position equipment without exposing hands directly between steel surfaces or machine feet. The plan should include how final alignment will happen before the lift begins, especially where anchor bolts, grout forms, or tight foundations are involved.",
        "list": [
          "Use positioning tools that keep workers outside pinch and crush points.",
          "Plan shim, anchor, and alignment steps before the load arrives.",
          "Do not improvise with pry points that can slip or eject unexpectedly."
        ]
      },
      {
        "heading": "Rigging Stays On Until the Load Is Truly Stable",
        "sub": "Tension should not be released just because the machine touched down.",
        "body": "A machine may contact its support before it is actually secure. Uneven feet, unstable cribbing, shifting skates, or incomplete anchoring can allow the load to settle or rotate after initial contact. The crew should confirm stable support before fully releasing tension or disconnecting the rigging.",
        "list": [
          "Keep light control tension until the load is confirmed stable.",
          "Check support contact, cribbing condition, and alignment before unhooking.",
          "Do not stand in the direction the rigging, load, or hardware might move if support shifts."
        ]
      },
      {
        "heading": "Unrigging Still Carries Stored and Residual Hazards",
        "sub": "The end of the lift is not the end of the hazard exposure.",
        "body": "After the load is landed, slings, hooks, shackles, jacks, and pull systems may still carry tension, compression, or awkward stored position. Removing hardware under residual load can cause sudden movement. Crews should unload, verify, and remove rigging in a controlled order instead of rushing to clear the job.",
        "list": [
          "Release hardware only after confirming it is no longer carrying unintended load.",
          "Maintain zone control until all rigging and support equipment are safely removed.",
          "Inspect gear after use and remove damaged equipment from service."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why is set-down often more dangerous than crews expect?",
        "choices": [
          "Because risk disappears once the load stops moving",
          "Because alignment work brings hands and bodies closer to pinch zones",
          "Because the hook is no longer attached",
          "Because only the operator remains at risk"
        ],
        "answer": 1
      },
      {
        "q": "What is the safest way to make small alignment corrections?",
        "choices": [
          "Using fingers near the contact point",
          "Using tools and methods that keep hands out of pinch zones",
          "Standing under the load for a better view",
          "Releasing rigging tension first"
        ],
        "answer": 1
      },
      {
        "q": "When should rigging be removed?",
        "choices": [
          "As soon as the load touches any surface",
          "After the load is confirmed stable on its support",
          "Before final alignment begins",
          "Whenever the crew is ready to move on"
        ],
        "answer": 1
      },
      {
        "q": "Why can unrigging still be hazardous?",
        "choices": [
          "Because hardware may still carry residual tension or shift when released",
          "Because rigging is harmless after landing",
          "Because only slings can move unexpectedly",
          "Because inspections are not needed after use"
        ],
        "answer": 0
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function MachineryMovingRiggingModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const LiftPlanningWeightVerificationTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[0])
export const CenterOfGravityStabilityTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[1])
export const RiggingSlingsHardwareTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[2])
export const JackingSkiddingMovingPathsTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[3])
export const CraneSignalingTagLinesTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[4])
export const MobileCranesOutriggersTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[5])
export const CriticalLiftsEngineeredPlansTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[6])
export const SetDownUnriggingPinchControlTraining = makeModuleComponent(MACHINERY_MOVING_RIGGING_PHASE1_MODULES[7])
