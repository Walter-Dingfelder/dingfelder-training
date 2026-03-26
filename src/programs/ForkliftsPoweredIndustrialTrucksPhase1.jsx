import TrainingModuleShell from './TrainingModuleShell.jsx'
export const FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES = [
  {
    "path": "/pit-stability-triangle-load-center",
    "label": "PIT Stability Triangle, Load Center & Tip-Over Risk",
    "short": "Why forklift balance changes with load weight, height, speed, and turning",
    "icon": "🚜",
    "color": "#F59E0B",
    "regulation": "Powered industrial truck stability fundamentals and safe operating practice",
    "audience": "Forklift operators, supervisors, spotters, trainers, and mixed-traffic personnel",
    "minutes": 16,
    "slides": [
      {
        "heading": "A Forklift Is Stable Only Inside Its Design Envelope",
        "sub": "The truck can feel solid right up until the balance shifts past recovery.",
        "body": "Forklifts carry heavy loads on a short wheelbase and rely on counterweight, axle geometry, and the stability triangle to stay upright. Fast turns, elevated loads, off-center weight, and sudden braking move the center of gravity toward the edge of that triangle. Once it crosses the stability limit, the truck can tip with very little warning.",
        "list": [
          "Treat travel speed, steering input, mast tilt, and load height as stability controls.",
          "Do not assume a truck that handled one load safely can handle a taller, longer, or off-center load the same way.",
          "Remember that the combined center of gravity changes every time the load changes."
        ],
        "callout": {
          "label": "RULE",
          "text": "The truck is stable only while the combined center of gravity stays inside the stability triangle.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Load Center Changes Capacity Fast",
        "sub": "A load that sticks farther out acts heavier than the number on the pallet tag suggests.",
        "body": "Forklift capacity depends on where the weight sits relative to the forks and mast. Long loads, attachments, damaged pallets, and weight that is not tight to the carriage all increase leverage against the truck. That reduces true lifting capacity and increases the chance of forward tip, dropped load, or loss of steering control.",
        "list": [
          "Know the rated load center and what happens when it is exceeded.",
          "Attachments, extensions, and unusual packaging change capacity and handling.",
          "If the load is unstable or the truck feels light at the rear, stop and reassess."
        ]
      },
      {
        "heading": "Turns, Ramps, and Uneven Surfaces Multiply Instability",
        "sub": "The truck does not tip because of one mistake; it tips because the margins were consumed.",
        "body": "Operators often combine speed, a raised load, a turn, and a rough floor in the same movement. That stacks risk. Ramps shift weight, potholes shock the mast, and sharp steering loads the outside wheels. Good operators slow early, square up, and keep the load low whenever they are moving.",
        "list": [
          "Slow before the turn instead of trying to recover during the turn.",
          "Keep loads low and stable while traveling.",
          "Approach ramps, dock plates, and broken pavement with a controlled plan."
        ]
      },
      {
        "heading": "Tip-Over Response Is Not Intuitive",
        "sub": "Trying to jump can place the operator in the crush path.",
        "body": "In a sit-down forklift tip-over, the safest action is usually to stay belted, brace, and lean away from the direction of the fall. Jumping exposes the operator to overhead guard, mast, or truck frame crush points. The better strategy is to prevent the event through speed control, proper loading, and disciplined turning before the truck reaches the edge of stability.",
        "list": [
          "Wear the restraint system when the truck is designed with one.",
          "Do not normalize sharp turns with raised loads just because the floor looks open.",
          "Treat a near tip as a serious warning that the operating envelope was exceeded."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What keeps a forklift stable during operation?",
        "options": [
          "The paint condition",
          "The combined center of gravity staying inside the stability triangle",
          "The horn being used",
          "The forks being level at all times"
        ],
        "answer": 1
      },
      {
        "q": "What usually happens when the load center moves farther out from the carriage?",
        "options": [
          "Capacity effectively decreases",
          "Capacity automatically increases",
          "Turning becomes safer",
          "The rear axle becomes locked"
        ],
        "answer": 0
      },
      {
        "q": "Which travel habit best protects stability?",
        "options": [
          "Turning quickly before slowing",
          "Traveling with the load high for better visibility",
          "Slowing before turns and keeping the load low",
          "Using mast tilt to balance while moving"
        ],
        "answer": 2
      },
      {
        "q": "During a sit-down forklift tip-over, what should the operator avoid doing?",
        "options": [
          "Bracing and staying belted",
          "Leaning away from the fall",
          "Trying to jump clear",
          "Stopping the unsafe maneuver earlier"
        ],
        "answer": 2
      }
    ]
  },
  {
    "path": "/pit-pre-use-inspection-defect-removal",
    "label": "Pre-Use Inspection, Defect Removal & Out-of-Service Decisions",
    "short": "Finding the steering, brake, mast, tire, or horn problem before it becomes an incident",
    "icon": "📝",
    "color": "#F59E0B",
    "regulation": "Powered industrial truck inspection and safe removal from service",
    "audience": "Forklift operators, leads, maintenance, and supervisors responsible for fleet readiness",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Shift Starts With the Truck Condition, Not the Schedule",
        "sub": "A bad truck does not become safe because the dock is busy.",
        "body": "Pre-use inspection is where operators catch steering problems, brake weakness, horn failures, mast issues, chain damage, leaking hydraulics, missing data plates, and tire defects before the truck enters traffic. The inspection is not paperwork theater. It is the first and cheapest chance to stop a struck-by, dropped-load, or runaway event.",
        "list": [
          "Check the condition that affects travel, lifting, warning, and visibility.",
          "Use the documented inspection method rather than a rushed visual glance.",
          "Do not accept a truck with known defects just because it was running earlier."
        ],
        "callout": {
          "label": "RULE",
          "text": "If a defect can affect safe operation, the truck comes out of service until the condition is corrected.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Critical Defects Are Not All Obvious",
        "sub": "The dangerous failure may be the one that feels small at first.",
        "body": "A weak parking brake, dead reverse alarm, binding mast roller, chain issue, low hydraulic level, worn tire, or steering play can all turn routine movement into an emergency. Operators should understand the difference between cosmetic damage and conditions that directly reduce control, stopping, lifting integrity, or warning to others.",
        "list": [
          "Focus on systems that control movement, load support, braking, warning, and operator protection.",
          "Know which findings require immediate lockout from use.",
          "Escalate unusual noises, jerky movement, or hydraulic drift even if the truck still moves."
        ]
      },
      {
        "heading": "Out-of-Service Control Prevents the Next Person From Guessing",
        "sub": "A bad truck parked quietly in the corner is still a hazard if someone can start it.",
        "body": "Once a defect is found, the truck must be clearly removed from service according to site procedure. That usually means tagging, key control, communication, and routing the unit into the maintenance process. A verbal warning alone is not enough when multiple shifts or contractors use the same equipment pool.",
        "list": [
          "Use the site tag or digital defect system consistently.",
          "Do not leave a questionable truck available for someone else to “see if it still works.”",
          "Make the equipment status obvious to all users."
        ]
      },
      {
        "heading": "Inspection Also Protects the Load and the Facility",
        "sub": "A truck that “only” has a mast or steering issue can still damage product, racks, docks, and structures.",
        "body": "Not every PIT event injures a person, but equipment contact, rack impact, door strike, and dock damage are still serious safety signals. They show the truck or the operating method was not under control. A disciplined inspection culture reduces both injury potential and the hidden operational losses that come from equipment contact.",
        "list": [
          "Report contact events and near misses instead of treating them as normal warehouse wear.",
          "Tie inspection quality to incident prevention, not just maintenance cost.",
          "A truck that cannot be trusted around structures cannot be trusted around people either."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why is the pre-use inspection important?",
        "options": [
          "It delays work on purpose",
          "It identifies defects before the truck enters traffic",
          "It replaces training",
          "It is only for new operators"
        ],
        "answer": 1
      },
      {
        "q": "Which defect should remove a forklift from service?",
        "options": [
          "A dirty cup holder",
          "A weak brake or steering problem",
          "A faded paint mark",
          "A missing decal unrelated to operation"
        ],
        "answer": 1
      },
      {
        "q": "What should happen after a truck is removed from service?",
        "options": [
          "Leave it available in case someone needs it",
          "Let the next shift decide",
          "Tag/control it so another person does not use it unknowingly",
          "Use it only for short trips"
        ],
        "answer": 2
      },
      {
        "q": "Why do rack or dock contact events matter even when nobody is hurt?",
        "options": [
          "They only affect accounting",
          "They indicate the truck or method was not under control",
          "They prove the truck is powerful",
          "They are expected in busy operations"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/pit-pedestrian-separation-blind-corners",
    "label": "Pedestrian Separation, Horn Use & Blind Corner Discipline",
    "short": "Keeping people out of the truck envelope in aisles, intersections, docks, and mixed-traffic zones",
    "icon": "🚶",
    "color": "#F59E0B",
    "regulation": "Powered industrial truck pedestrian protection and mixed-traffic controls",
    "audience": "Operators, pedestrians, warehouse teams, spotters, and supervisors in shared work areas",
    "minutes": 14,
    "slides": [
      {
        "heading": "Most PIT Serious Injuries Start With Shared Space",
        "sub": "The operator and the pedestrian often enter the same envelope at the same time.",
        "body": "Forklift incidents frequently happen where trucks and people cross paths: aisle ends, dock approaches, plant corridors, freezer entries, staging areas, and blind corners. Low speed does not remove the hazard. A forklift can still crush, pin, or strike a person before either party can react.",
        "list": [
          "Separate pedestrian routes from truck travel routes wherever possible.",
          "Treat aisle crossings and blind corners as conflict points that need reduced speed and active warning.",
          "Never assume the operator sees you just because the truck is nearby."
        ],
        "callout": {
          "label": "RULE",
          "text": "No one belongs inside the truck envelope without positive communication and space control.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Horn Use Helps Only When It Supports a Bigger Traffic Plan",
        "sub": "The horn is a warning tool, not a substitute for control.",
        "body": "Operators should use horns, mirrors, lighting, and speed control to support safe travel, but none of those tools make a blind move automatically safe. Pedestrians still need marked routes, stopping discipline, and attention to travel lanes. A habitual horn with no route control can create false confidence instead of real separation.",
        "list": [
          "Use the horn where sight lines are limited or local rules require it.",
          "Slow down before entering the blind area instead of sounding the horn while keeping speed.",
          "Expect distraction, hearing protection, or background noise to reduce the warning effect."
        ]
      },
      {
        "heading": "Loads and Rack Ends Erase Visibility Fast",
        "sub": "If the operator cannot see clearly, the travel plan must change.",
        "body": "Tall, wide, or unstable loads block forward sight and can hide people, posts, doors, or parked equipment. In those cases the operator may need to travel in reverse, use a spotter, or change the path entirely. The decision should be made before movement starts, not while entering a blind zone.",
        "list": [
          "Do not force a move forward when the load blocks the safe travel picture.",
          "Use spotters only when the communication method and stop authority are clear.",
          "Rebuild visibility before entering congested areas."
        ]
      },
      {
        "heading": "Pedestrian Discipline Is Part of PIT Safety",
        "sub": "People on foot create risk when they shortcut the controls.",
        "body": "Workers on foot often normalize crossing between racks, cutting behind moving trucks, stepping around dock doors, or reaching into traffic lanes for convenience. That behavior eliminates the operator’s margin. PIT safety succeeds only when pedestrians respect routes, stopping points, and the operator’s blind areas just as seriously as the operator does.",
        "list": [
          "Use marked walk paths and wait zones instead of improvising shortcuts.",
          "Never stand under raised forks or elevated loads.",
          "Treat backing alarms, travel lights, and corner warnings as stop-and-check cues."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Where do many serious PIT injuries occur?",
        "options": [
          "Only in training yards",
          "In shared spaces like aisle ends, docks, and blind corners",
          "Only on public roads",
          "Only during maintenance"
        ],
        "answer": 1
      },
      {
        "q": "What is the main purpose of horn use?",
        "options": [
          "Replace speed control",
          "Serve as a warning within a larger traffic-control plan",
          "Allow travel through pedestrian routes",
          "Reduce the need for visibility"
        ],
        "answer": 1
      },
      {
        "q": "What should an operator do when a load blocks forward visibility?",
        "options": [
          "Drive faster to clear the area",
          "Proceed normally if the horn works",
          "Change the plan by reversing safely, using a spotter, or rerouting",
          "Raise the load higher"
        ],
        "answer": 2
      },
      {
        "q": "What is a critical pedestrian responsibility around forklifts?",
        "options": [
          "Walking wherever space appears open",
          "Using designated routes and staying out of truck travel envelopes",
          "Passing under raised forks quickly",
          "Approaching from the operator’s blind side"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/pit-capacity-attachments-unusual-loads",
    "label": "Capacity, Attachments, Long Loads & Unusual Handling Conditions",
    "short": "Why clamps, fork extensions, drums, bundles, and long loads change the safe operating limit",
    "icon": "📦",
    "color": "#F59E0B",
    "regulation": "Powered industrial truck capacity control and load-specific handling practices",
    "audience": "Operators handling mixed materials, long stock, bundles, drums, attachments, or nonstandard loads",
    "minutes": 15,
    "slides": [
      {
        "heading": "The Capacity Plate Describes a Specific Condition, Not Every Condition",
        "sub": "Change the load shape or the attachment and you may change the safe limit.",
        "body": "Forklift capacity is usually rated for a defined load center, mast configuration, and equipment setup. Attachments such as clamps, rotators, drum handlers, and extensions can reduce available capacity and change the way the load behaves. Long stock, sheet goods, coils, or liquid containers can shift the center of gravity and create dynamic instability during travel or turning.",
        "list": [
          "Read the capacity information for the actual truck and attachment combination.",
          "Do not guess capacity from a similar truck nearby.",
          "Treat unusual loads as engineered handling tasks, not normal pallets with different packaging."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the attachment or load condition changes, verify the truck’s safe capacity before you lift.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Long, Flexible, or Round Loads Behave Differently",
        "sub": "The farther the weight extends, the harder the truck is to control.",
        "body": "Beams, bundles, sheet packs, pipes, drums, and oversized pallets do not move like a standard compact load. They can sag, roll, whip, or shift in turns and when crossing uneven ground. Operators should reduce speed, widen turns, and verify clearances long before the load reaches a rack upright, doorway, pedestrian zone, or truck bed.",
        "list": [
          "Plan extra clearance for the load, not just the forklift body.",
          "Control the lift height and mast angle to limit load shift.",
          "Use spotters or alternate equipment when sight lines or clearances are poor."
        ]
      },
      {
        "heading": "Fork Extensions and Improvised Handling Increase Risk",
        "sub": "Convenience changes the engineering of the lift.",
        "body": "Using unapproved extensions, lifting from only one fork, dragging loads with the tips, or grabbing unstable materials because “it is only a short move” increases the chance of drop, fork damage, mast overload, or loss of control. The safe response is to stop and get the correct equipment, attachment, or handling plan.",
        "list": [
          "Do not improvise with unapproved fork length or attachment combinations.",
          "Keep the load engaged and supported as designed.",
          "Escalate awkward material moves instead of normalizing risky methods."
        ]
      },
      {
        "heading": "The Goal Is Controlled Handling, Not Creative Handling",
        "sub": "A lift that looks impressive is often a lift that consumed too much margin.",
        "body": "Operators sometimes get pressured to “make it work” with the truck already available. That is where unusual-load incidents start. Professional handling means recognizing when the load, attachment, clearances, or destination exceed normal PIT practice and then changing the plan before damage or injury occurs.",
        "list": [
          "Ask whether the truck, attachment, and route are truly matched to the task.",
          "Use alternate equipment when the load is long, unstable, or poorly supported.",
          "Treat near misses with unusual loads as warnings, not proof the method is acceptable."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why can an attachment change forklift capacity?",
        "options": [
          "Because attachments make the truck more colorful",
          "Because they change weight distribution and load handling characteristics",
          "Because they eliminate the need for inspection",
          "Because they only affect steering at top speed"
        ],
        "answer": 1
      },
      {
        "q": "What is true of long or round loads?",
        "options": [
          "They behave the same as standard pallets",
          "They often need more clearance and more conservative handling",
          "They are safest when traveled high",
          "They do not affect turning"
        ],
        "answer": 1
      },
      {
        "q": "What is a poor handling practice?",
        "options": [
          "Verifying the rating for the actual truck and attachment",
          "Stopping to get the correct equipment",
          "Using unapproved extensions for convenience",
          "Reducing speed with unusual loads"
        ],
        "answer": 2
      },
      {
        "q": "What is the best approach when a load exceeds normal PIT practice?",
        "options": [
          "Move it quickly before anyone notices",
          "Change the plan and get the right equipment or controls",
          "Tilt it back harder and continue",
          "Use only one fork"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/pit-docks-trailers-drive-off-prevention",
    "label": "Dock Edges, Trailer Entry & Drive-Off Prevention",
    "short": "Controlling trailer movement, dock plates, and edge hazards before entering with a truck",
    "icon": "🛻",
    "color": "#F59E0B",
    "regulation": "Dock safety and powered industrial truck loading practices",
    "audience": "Operators, dock teams, shipping crews, transportation staff, and supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Trailer Is Part of the Lift Plan",
        "sub": "A forklift entering a trailer depends on the trailer being stable, secured, and supported.",
        "body": "Dock injuries happen when operators treat the trailer as a solid floor without verifying wheel restraint, chocks, dock-lock engagement, landing gear condition, floor integrity, and communication with the driver. Trailer creep, drop, early departure, and plate movement can turn a routine transfer into a crush or fall event.",
        "list": [
          "Confirm the trailer is restrained before entry begins.",
          "Verify dock plate, bridge, or leveler condition and position.",
          "Control driver communication so the trailer cannot be pulled away while loading continues."
        ],
        "callout": {
          "label": "RULE",
          "text": "Never enter a trailer with a PIT until restraint, bridge condition, and communication controls are verified.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Dock Edges and Trailer Floors Remove Recovery Time",
        "sub": "A short mistake at the edge becomes a severe event immediately.",
        "body": "Forklifts operating near dock edges, tailboard transitions, wet floors, or damaged trailer decking have very little margin for steering error. Speed, sharp turns, overloaded pallets, and poor lighting make that worse. Operators should enter squarely, keep speed low, and stop if the trailer floor or bridge condition looks questionable.",
        "list": [
          "Approach dock plates and trailer transitions straight and under control.",
          "Do not continue over rotten, damaged, or unstable trailer flooring.",
          "Account for wet surfaces, ice, debris, and poor lighting."
        ]
      },
      {
        "heading": "Trailer Creep and Drive-Offs Are Usually Coordination Failures",
        "sub": "The driver, dock team, and PIT operator must be working from the same status picture.",
        "body": "Many dock events begin when a driver believes loading is done, a restraint was never applied, or a trailer shifted under repeated forklift entry. Visual systems, lock indicators, signs, wheel chocks, and driver control procedures all help, but they only work when the team uses them consistently and confirms the trailer status before each operating phase.",
        "list": [
          "Use the site’s positive trailer status method instead of assumptions.",
          "Recheck trailer stability after repeated entry, heavy loads, or unusual movement.",
          "Stop work immediately if the trailer, bridge, or dock lock condition changes."
        ]
      },
      {
        "heading": "The Dock Is a Mixed-Traffic Interface, Not Just a Shipping Zone",
        "sub": "Forklifts, pedestrians, trailers, and truck drivers all converge here.",
        "body": "Loading docks compress multiple risks into one location: powered trucks, people on foot, suspended dock plates, trailer movement, weather exposure, and freight handling. Strong dock discipline protects both transportation flow and injury prevention. Weak discipline turns every trailer into a temporary hazard zone.",
        "list": [
          "Keep pedestrians clear of active dock doors and forklift travel paths.",
          "Control staging so freight does not block escape routes or steering paths.",
          "Treat every dock door as an edge hazard even when the door is usually covered."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What must be verified before entering a trailer with a forklift?",
        "options": [
          "That the trailer looks large enough",
          "Restraint, bridge condition, and driver communication controls",
          "Only the freight count",
          "Only the horn"
        ],
        "answer": 1
      },
      {
        "q": "Why are dock edges and trailer transitions dangerous?",
        "options": [
          "They provide more turning room",
          "They leave very little recovery time for mistakes",
          "They make steering more precise",
          "They eliminate the need for inspections"
        ],
        "answer": 1
      },
      {
        "q": "What is a common cause of drive-off or trailer creep incidents?",
        "options": [
          "Too many labels on freight",
          "Poor coordination and failure to verify trailer status",
          "Excessive warehouse lighting",
          "Low battery charge only"
        ],
        "answer": 1
      },
      {
        "q": "How should pedestrians treat active dock doors?",
        "options": [
          "As normal shortcuts",
          "As controlled hazard zones to stay clear of",
          "As staging space",
          "As observation points"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/pit-ramps-grades-surface-conditions",
    "label": "Ramps, Grades, Surface Conditions & Travel Speed Control",
    "short": "Managing traction, braking, slope direction, and turning when the floor is no longer forgiving",
    "icon": "📐",
    "color": "#F59E0B",
    "regulation": "Powered industrial truck travel control on grades, transitions, and variable surfaces",
    "audience": "Operators working on ramps, yards, freezer floors, dock aprons, and uneven industrial surfaces",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Surface Can Take Away Control Before the Operator Feels It",
        "sub": "Forklift handling changes fast on ramps, transitions, potholes, or slick floors.",
        "body": "Traction, stopping distance, and steering response vary with surface condition. Wet concrete, dock plates, broken asphalt, steel plates, ice, packaging debris, and grade changes all reduce the time available to correct an error. Operators should treat surface condition as part of the lift plan, not as background scenery.",
        "list": [
          "Scan for wet spots, broken pavement, dock plate gaps, debris, and floor damage.",
          "Reduce speed before entering a lower-traction or uneven area.",
          "Do not combine speed, sharp turning, and slope changes in the same move."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the surface reduces traction or control, reduce speed and simplify the maneuver before the truck reaches it.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Grade Direction Matters With a Load",
        "sub": "The load should stay uphill so the truck keeps better control of the center of gravity.",
        "body": "Traveling on a grade changes how weight transfers across the truck. Operators should follow site and truck procedures for loaded and unloaded direction of travel, avoid turning on grades, and keep the load positioned to protect stability. A ramp is not the place to experiment with speed or steering corrections.",
        "list": [
          "Know the correct grade travel orientation for the truck and load condition.",
          "Avoid turning while on the slope whenever possible.",
          "Approach the grade with a straight, controlled path."
        ]
      },
      {
        "heading": "Small Surface Changes Can Create Big Load Instability",
        "sub": "A pothole or edge strike can shift the mast and the load all at once.",
        "body": "Even when the truck stays upright, uneven surfaces can jar the load, break packaging, shift pallets, or change fork engagement. That matters more with tall loads, liquids, drums, or anything fragile. If the path quality is poor, slow down or change the route rather than hoping the load stays stable.",
        "list": [
          "Treat floor defects as load-control hazards, not just ride-comfort issues.",
          "Reevaluate when the load is top-heavy, liquid, tall, or weakly packaged.",
          "Do not try to 'power through' a bad section of travel path."
        ]
      },
      {
        "heading": "Good PIT Travel Looks Deliberate, Not Fast",
        "sub": "Smooth travel protects stability, people, and the facility.",
        "body": "Professional operators build safe margin by taking wider setup, slowing before grades or turns, and resisting pressure to rush around people or obstacles. A few extra seconds on a rough path are always cheaper than dropped material, damaged racks, or a tip-over event.",
        "list": [
          "Slow early instead of braking late.",
          "Use route selection as a safety control.",
          "Treat hurried travel on poor surfaces as a preventable choice, not an unavoidable condition."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why do ramps and slick surfaces matter so much for PIT operation?",
        "options": [
          "They change traction, braking, and steering response",
          "They improve visibility",
          "They raise the truck’s capacity",
          "They reduce the need for horn use"
        ],
        "answer": 0
      },
      {
        "q": "What is a good practice on grades?",
        "options": [
          "Turn sharply to reduce time on the slope",
          "Follow the correct travel orientation and avoid turning on the grade",
          "Raise the load for visibility",
          "Accelerate before the ramp"
        ],
        "answer": 1
      },
      {
        "q": "Why can potholes or surface changes still be dangerous even without a tip-over?",
        "options": [
          "They can shift or damage the load",
          "They improve pallet stability",
          "They only affect ride comfort",
          "They reduce mast movement"
        ],
        "answer": 0
      },
      {
        "q": "What does good PIT travel look like on rough or variable surfaces?",
        "options": [
          "Fast and aggressive",
          "Deliberate, slowed, and route-controlled",
          "Unplanned but confident",
          "High-speed if the route is familiar"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/pit-battery-charging-lpg-cylinder-changeout",
    "label": "Battery Charging, LPG Cylinder Changeout & Refueling Hazards",
    "short": "Controlling charging gases, acid exposure, LPG leaks, and ignition risk around PIT energy supply",
    "icon": "🔋",
    "color": "#F59E0B",
    "regulation": "PIT fueling and charging safety — electrical, chemical, and ignition controls",
    "audience": "Operators, battery-room personnel, maintenance, dock support, and warehouse supervisors",
    "minutes": 15,
    "slides": [
      {
        "heading": "Energy Supply Tasks Add Chemical and Ignition Hazards",
        "sub": "Charging and cylinder changeout are not routine shortcuts; they are controlled tasks.",
        "body": "Battery charging and LPG cylinder changeout expose workers to corrosive electrolyte, electrical shorting, hydrogen generation, frost injury, fuel leaks, and ignition sources. The hazard profile is different from driving the truck, so the controls must also change. Eye protection, ventilation, spark control, and proper connection handling matter every time.",
        "list": [
          "Treat fueling and charging areas as controlled work zones, not casual parking spots.",
          "Follow the sequence for shutdown, connection, disconnection, and leak check.",
          "Keep ignition sources, smoking, and improvised tools out of the area."
        ],
        "callout": {
          "label": "RULE",
          "text": "If charging, fueling, ventilation, or leak-control conditions are not right, stop the task before energy is added or removed.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Battery Charging Can Release Hydrogen and Acid Hazards",
        "sub": "An apparently quiet charging area can still contain explosion and splash risk.",
        "body": "Lead-acid battery charging can generate hydrogen, and damaged components can expose workers to electrolyte splash or corrosion. Improper cables, metal tools, poor ventilation, and blocked eye-wash access raise the consequence. Charging tasks should be orderly, ventilated, and kept clear of ignition sources and conductive clutter.",
        "list": [
          "Inspect cables and connectors before use.",
          "Protect the charging area from sparks, flames, and metal contact across terminals.",
          "Keep eye protection and emergency flush access available when acid exposure is possible."
        ]
      },
      {
        "heading": "LPG Changeout Requires Leak Awareness and Secure Handling",
        "sub": "The cylinder is part of the fuel system and must be treated that way.",
        "body": "Improper cylinder handling can create release, valve damage, connection failure, or ignition exposure. Workers should secure the cylinder, verify valve condition, use the correct connection method, and check for leaks before returning the truck to service. A rushed changeout can create a flammable atmosphere in seconds.",
        "list": [
          "Move and secure cylinders in the intended orientation.",
          "Do not force damaged fittings or ignore odor/frost signs of release.",
          "Confirm the system is tight before startup."
        ]
      },
      {
        "heading": "Charging and Refueling Areas Need Housekeeping and Access Control",
        "sub": "Congested areas turn small errors into bigger events.",
        "body": "Clutter, blocked exits, poor ventilation, stacked combustibles, and unauthorized traffic can turn a manageable charging or fueling task into a fire or medical event. Keep the area clean, well-identified, and controlled for the workers performing the task. The area should support safe work, not fight it.",
        "list": [
          "Keep combustibles, unnecessary tools, and random traffic out of charging/refueling zones.",
          "Maintain ventilation and emergency access.",
          "Escalate damaged chargers, cylinders, hoses, or connectors immediately."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why is PIT charging or refueling a separate hazard task from driving?",
        "options": [
          "It adds chemical, ignition, and connection hazards",
          "It is less important than driving",
          "It only matters on weekends",
          "It eliminates the need for PPE"
        ],
        "answer": 0
      },
      {
        "q": "What gas can be generated during lead-acid battery charging?",
        "options": [
          "Nitrogen",
          "Hydrogen",
          "Oxygen only",
          "Helium"
        ],
        "answer": 1
      },
      {
        "q": "What is a good LPG cylinder changeout practice?",
        "options": [
          "Force the fitting if it seems close",
          "Ignore odor if the truck starts",
          "Verify secure handling and leak-tight connection before return to service",
          "Use any available cylinder regardless of condition"
        ],
        "answer": 2
      },
      {
        "q": "What should charging and refueling areas have?",
        "options": [
          "Combustible storage near the charger",
          "Poor ventilation so the area stays warm",
          "Good housekeeping, ventilation, and controlled access",
          "Open flame heaters"
        ],
        "answer": 2
      }
    ]
  },
  {
    "path": "/pit-racking-stacking-warehouse-aisles",
    "label": "Racking, Stacking, Aisle Width & Warehouse Contact Prevention",
    "short": "Avoiding rack strikes, falling product, and pinch points during placement and retrieval",
    "icon": "🏗️",
    "color": "#F59E0B",
    "regulation": "PIT operation around storage systems, aisles, and elevated product",
    "audience": "Warehouse operators, forklift drivers, supervisors, and shipping / receiving teams",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Rack Is Part of the Hazard Picture",
        "sub": "A rack strike can injure people long after the contact event.",
        "body": "Forklift contact with uprights, beam connections, rack guards, doors, and stored material can destabilize product or damage the structure. Operators should approach straight, confirm aisle clearance, and place loads without forcing alignment. Racks and stacks are not forgiving when the truck is rushed or misaligned.",
        "list": [
          "Do not use the truck to shove, realign, or 'nudge' product into place.",
          "Report rack contact immediately even if the damage looks minor.",
          "Treat elevated storage as a line-of-fire hazard for people below."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the load does not line up cleanly, stop and reset the approach instead of forcing the placement.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Aisle Width and Turning Space Are Operating Controls",
        "sub": "Clearance is not a guess; it is part of the safe handling method.",
        "body": "Warehouse aisles, freezer runs, retail backrooms, and plant storerooms often leave little room for correction. Operators should account for truck length, rear-end swing, load overhang, and the actual turning radius with the material being handled. Poor setup forces last-second steering changes that create rack contact and pedestrian exposure.",
        "list": [
          "Set up early for the approach rather than oversteering at the rack face.",
          "Keep aisles clear of loose pallets, debris, and staged material.",
          "Do not let congestion redefine the safe turning path."
        ]
      },
      {
        "heading": "Stacking Quality Matters as Much as Lift Quality",
        "sub": "A badly placed load creates the next person’s hazard.",
        "body": "Loads that are overhanging, unsupported, tilted, or stacked on damaged pallets can fall later even if they survived the original lift. Warehouse safety depends on stable placement, compatible packaging, and respecting weight and height limits. The goal is not just to get the load up there; it is to leave it secure.",
        "list": [
          "Verify pallet and packaging condition before stacking.",
          "Do not stack unstable loads just because there is open vertical space.",
          "Leave the storage position safer for the next lift, not harder."
        ]
      },
      {
        "heading": "Housekeeping and Contact Reporting Protect the Whole System",
        "sub": "Small collisions become bigger failures when nobody acts on them.",
        "body": "Many serious warehouse events are preceded by unreported strikes, bent guards, loose debris, or known congestion. Operators and supervisors should treat those conditions as system warnings. Clean aisles, intact rack protection, and honest reporting make the storage area predictable and safer for every shift.",
        "list": [
          "Report rack strikes and dropped material immediately.",
          "Remove debris and empty pallets that shrink aisle margin.",
          "Use contact events as triggers for correction, not blame alone."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why does rack contact matter even when nothing falls immediately?",
        "options": [
          "Because it can damage structure and create later failure risk",
          "Because it improves aisle spacing",
          "Because it is only a paperwork problem",
          "Because it proves the rack is strong"
        ],
        "answer": 0
      },
      {
        "q": "What should an operator do if the load does not line up cleanly?",
        "options": [
          "Force it into place with the truck",
          "Reset the approach and realign",
          "Raise it higher and push harder",
          "Ask a pedestrian to guide the fork tips by hand"
        ],
        "answer": 1
      },
      {
        "q": "What makes stacking safe?",
        "options": [
          "Open vertical space only",
          "Stable packaging, good placement, and respecting limits",
          "Using damaged pallets when in a hurry",
          "Tilting the load until it fits"
        ],
        "answer": 1
      },
      {
        "q": "Why is housekeeping part of PIT safety in aisles?",
        "options": [
          "Debris and congestion reduce turning and travel margin",
          "It changes the truck color",
          "It increases battery charge",
          "It makes horns louder"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/pit-outdoor-yards-weather-mixed-traffic",
    "label": "Outdoor Yards, Weather, Lighting & Mixed-Traffic Decisions",
    "short": "Handling forklifts safely where pedestrians, trucks, weather, and uneven ground all interact",
    "icon": "🌧️",
    "color": "#F59E0B",
    "regulation": "PIT operation in outdoor yards, mixed traffic, and variable environmental conditions",
    "audience": "Yard operators, warehouse teams, transportation support, and industrial outdoor material handlers",
    "minutes": 14,
    "slides": [
      {
        "heading": "Outdoor Forklift Work Adds Surface and Visibility Problems",
        "sub": "Weather and lighting can erase the margin that looked acceptable indoors.",
        "body": "Rain, snow, ice, mud, potholes, shadows, and low-light yard conditions all change the way a powered industrial truck behaves. Loads can become slick, visibility can collapse, and braking distance can grow well beyond what operators expect from indoor warehouse work. Outdoor travel requires a more conservative plan.",
        "list": [
          "Adjust speed and routing for actual surface and lighting conditions.",
          "Do not carry indoor habits into outdoor yards without reassessing the environment.",
          "Treat weather as a stability and visibility control issue, not an inconvenience."
        ],
        "callout": {
          "label": "RULE",
          "text": "When weather, lighting, or surface quality reduces control, the operating plan must become more conservative immediately.",
          "color": "#F59E0B"
        }
      },
      {
        "heading": "Mixed Traffic Means the Forklift Is Not the Only Moving Hazard",
        "sub": "Yards combine forklifts, trucks, trailers, pedestrians, and fixed obstacles in one operating picture.",
        "body": "Outdoor industrial yards often place forklifts beside tractor-trailers, spotters, mechanics, contractors, and pedestrians at the same time. That means blind spots, changing routes, and conflicting expectations. Operators should use route discipline, communication, and speed control instead of trying to improvise around every moving problem.",
        "list": [
          "Coordinate with truck traffic and stay out of blind-side zones when possible.",
          "Expect pedestrians and drivers to make mistakes in poor conditions.",
          "Use designated yard patterns and staging rules."
        ]
      },
      {
        "heading": "Load Security Changes Outside",
        "sub": "Wind, rain, and uneven ground make unstable loads worse.",
        "body": "Wrapped product, empty containers, long bundles, and light packaging can shift or blow in outdoor movement. Uneven ground also increases mast bounce and fork movement. Operators should reconsider travel speed, route, and whether the forklift is the right tool for the weather and the load.",
        "list": [
          "Slow down and shorten the route when wind or surface bounce can shift the load.",
          "Do not carry unstable material farther than necessary.",
          "Stop if the weather or ground condition exceeds the safe handling limit."
        ]
      },
      {
        "heading": "Professional Yard Operation Means Knowing When Not to Move",
        "sub": "Sometimes the safest forklift decision is to wait or change the method.",
        "body": "Production pressure often pushes outdoor operators to keep moving during poor lighting, storm conditions, or severe congestion. That is when preventable PIT incidents happen. A mature operation gives the operator authority to delay, reroute, re-stage, or escalate rather than pretending every condition is equally manageable.",
        "list": [
          "Pause when visibility, traction, or traffic control breaks down.",
          "Escalate conditions that require barriers, sanding, cleanup, or traffic control.",
          "Treat operator stop authority as a safety system, not resistance."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why is outdoor PIT work different from indoor travel?",
        "options": [
          "Because weather and lighting can change traction, visibility, and load control",
          "Because outdoor forklifts ignore load limits",
          "Because horns are unnecessary outdoors",
          "Because pedestrians do not exist outside"
        ],
        "answer": 0
      },
      {
        "q": "What makes a mixed-traffic yard risky?",
        "options": [
          "Only the weather",
          "Forklifts, trucks, trailers, pedestrians, and changing routes interacting together",
          "The truck color",
          "Too many safety signs"
        ],
        "answer": 1
      },
      {
        "q": "How can weather affect load handling?",
        "options": [
          "It always improves stability",
          "Wind, rain, and uneven ground can increase load shift and mast bounce",
          "It only affects operator comfort",
          "It removes the need for route planning"
        ],
        "answer": 1
      },
      {
        "q": "What is a professional response to severe congestion or poor conditions?",
        "options": [
          "Keep moving to avoid delay",
          "Pause, reroute, or escalate the condition",
          "Raise the load higher",
          "Ignore the condition if the truck is powerful"
        ],
        "answer": 1
      }
    ]
  }
]


function makeModuleComponent(module) {
  return function ForkliftPITModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const PITStabilityTriangleTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[0])
export const PITPreUseInspectionTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[1])
export const PITPedestrianSeparationTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[2])
export const PITCapacityAttachmentsTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[3])
export const PITDockTrailerDriveOffTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[4])
export const PITRampsGradesSurfaceTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[5])
export const PITBatteryLPGTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[6])
export const PITRackingAislesTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[7])
export const PITOutdoorYardsTraining = makeModuleComponent(FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES[8])
