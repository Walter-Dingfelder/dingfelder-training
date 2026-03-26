import TrainingModuleShell from './TrainingModuleShell.jsx'

export const TRUCKING_TRANSPORTATION_PHASE1_MODULES = [
  {
    "path": "/yard-backing-spotter-coordination",
    "label": "Yard Traffic, Backing & Spotter Coordination",
    "short": "Managing blind spots, reversing, and mixed yard movement without striking people or equipment",
    "icon": "🚛",
    "color": "#3AA0FF",
    "regulation": "FMCSA safety practices · yard traffic rules · backing and spotter controls",
    "audience": "Drivers, yard personnel, dock crews, spotters, and terminal support staff",
    "minutes": 15,
    "slides": [
      {
        "heading": "Backing Events Happen in Seconds and Usually Start With Visibility Loss",
        "sub": "The truck keeps moving, but the driver’s picture of the hazard area disappears.",
        "body": "Most yard strikes occur during low-speed maneuvering when drivers lose sight of pedestrians, spotters, trailers, bollards, curbs, or fixed structures. Mirrors, cameras, and alarms help, but they do not replace a controlled backing plan. A safe reverse move begins before the tractor or trailer starts rolling.",
        "list": [
          "Stop and evaluate the path before backing into a blind or congested area.",
          "Do not assume a person or vehicle stayed where it was last seen.",
          "Use a spotter only when both parties understand the signal plan and stop authority."
        ],
        "callout": {
          "label": "RULE",
          "text": "If the picture is lost, stop the vehicle and rebuild the picture before moving again.",
          "color": "#3AA0FF"
        }
      },
      {
        "heading": "Spotters Are a Control, Not a Decoration",
        "sub": "A spotter who is not visible, understood, or empowered does not reduce risk.",
        "body": "Drivers and spotters need a simple signal system that is confirmed before the move begins. The spotter should stay in a visible safe zone, not squeeze between equipment or walk behind a trailer. Any confusion, loss of eye contact, unexpected pedestrian movement, or radio problem should stop the maneuver immediately.",
        "list": [
          "Agree on stop, back, turn, and emergency-stop communication before movement begins.",
          "Never back toward a spotter you cannot see continuously.",
          "The stop signal outranks production pressure every time."
        ]
      },
      {
        "heading": "Pedestrian Paths and Vehicle Paths Need Real Separation",
        "sub": "Shared yards create false confidence because the speed feels low.",
        "body": "Low speed does not make a truck harmless. Trailer swing, cab turn radius, blind-side backing, and distracted walking all increase risk in gates, docks, scale lanes, maintenance aprons, and fueling areas. Workers on foot should stay out of travel lanes unless their task requires controlled exposure.",
        "list": [
          "Use designated walk paths and stay out of active truck lanes when possible.",
          "Do not cut between parked units or pass behind a reversing trailer.",
          "Treat corners, gates, and dock approaches as conflict points with limited sight lines."
        ]
      },
      {
        "heading": "A Good Yard Move Looks Slow, Predictable, and Boring",
        "sub": "The goal is controlled movement, not impressive maneuvering.",
        "body": "Professional yard operations reduce uncertainty. That means slower approach speeds, clear lane discipline, early signals, and deliberate stopping. Rushing a blind-side dock, trying to save one pull-up, or improvising around people and forklifts is how routine moves become recordable incidents.",
        "list": [
          "Take extra pull-ups when alignment or visibility is poor.",
          "Do not let impatience from waiting traffic change the safety plan.",
          "A few extra seconds is cheaper than a strike, crush, or trailer contact event."
        ]
      }
    ],
    "quiz": [
      {
        "q": "When should a driver stop during a backing move?",
        "options": [
          "Only after contact is made",
          "When eye contact, visibility, or the agreed signal picture is lost",
          "Only if a manager arrives",
          "Never if the move is almost complete"
        ],
        "answer": 1
      },
      {
        "q": "What is the best role of a spotter?",
        "options": [
          "Walk behind the trailer to stay close",
          "Stand where the driver can continuously see them and control the move",
          "Hold a phone flashlight near the tires",
          "Speed up the maneuver"
        ],
        "answer": 1
      },
      {
        "q": "Why are low-speed yard moves still dangerous?",
        "options": [
          "Because engines are loud",
          "Because blind spots, trailer swing, and pedestrian conflicts still exist",
          "Because trucks cannot stop",
          "Because mirrors are illegal"
        ],
        "answer": 1
      },
      {
        "q": "What is the safest response when a dock approach becomes rushed or crowded?",
        "options": [
          "Continue before conditions get worse",
          "Pause, reset the move, and re-establish control",
          "Ignore pedestrians",
          "Let the spotter improvise"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/loading-dock-trailer-creep-drive-off",
    "label": "Loading Dock, Trailer Creep & Drive-Off Prevention",
    "short": "Protecting workers at dock edges and inside trailers during loading, unloading, and trailer exchange",
    "icon": "📦",
    "color": "#4FC3F7",
    "regulation": "Dock safety rules · trailer restraint practices · powered industrial truck interaction controls",
    "audience": "Drivers, forklift operators, warehouse crews, shipping staff, and dock supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "A Trailer at the Dock Is Not Safe Just Because It Is Parked",
        "sub": "Trailers move from creep, suspension bounce, bad brakes, or premature departure.",
        "body": "Dock incidents happen when workers assume a trailer is secure even though it is not restrained, chocked, or confirmed out of service from road use. A small shift can open a gap, drop a dock plate, or throw a forklift operator off balance. Safe docks use a repeatable securement and communication process before anyone enters the trailer.",
        "list": [
          "Use the site’s trailer restraint or chocking procedure every time.",
          "Do not trust a parking brake alone as the only control.",
          "Confirm the trailer is positively released from over-the-road movement before loading begins."
        ],
        "callout": {
          "label": "RULE",
          "text": "No one enters or services a trailer until it is secured and the dock status is clearly communicated.",
          "color": "#4FC3F7"
        }
      },
      {
        "heading": "Drive-Off and Pull-Away Events Are Coordination Failures",
        "sub": "The danger starts before the trailer moves: it starts when signals are unclear.",
        "body": "A driver may think loading is complete while dock staff still have people or equipment inside. A green light, paperwork misunderstanding, or missing lockout tag can create a fatal timing conflict. Dock safety depends on unambiguous signals showing whether the trailer is safe to approach, load, release, or depart.",
        "list": [
          "Use only the approved site signal or status system to indicate release.",
          "Never rely on informal hand waves or assumptions between shifts.",
          "Verify dock personnel are clear before any departure movement."
        ]
      },
      {
        "heading": "Dock Plates, Edges, and Trailer Floors Add Mechanical and Fall Risk",
        "sub": "The truck is only part of the hazard. The structure matters too.",
        "body": "Damaged dock plates, misaligned trailer heights, rotten trailer floors, and open dock edges all create injury exposure. Forklifts entering a weak or shifted trailer can break through floors or pitch at the edge. Workers should inspect the condition, alignment, and support of the trailer interface before starting work.",
        "list": [
          "Look for floor damage, wheel collapse risk, and excessive height mismatch.",
          "Keep open dock edges controlled when no trailer is present.",
          "Stop work if the trailer shifts, settles, or changes position unexpectedly."
        ]
      },
      {
        "heading": "The Safe Dock Is One With Clear Ownership",
        "sub": "Everyone should know who controls release, entry, and stop-work decisions.",
        "body": "Dock incidents increase when drivers, lumpers, forklift operators, and supervisors all assume someone else owns the release decision. The safest operations have one clear site process for securing, loading, checking, clearing, and releasing the trailer. That process should not change because of volume or schedule pressure.",
        "list": [
          "Use the same secure-load-release sequence on every shift.",
          "Treat any broken light, restraint, or communication step as a stop-work condition.",
          "A delayed truck is recoverable; a forklift drop or drive-off injury is not."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What should happen before anyone enters a trailer at a dock?",
        "options": [
          "The trailer should be secured and the dock status clearly communicated",
          "The lights should be turned off",
          "The driver should leave the site",
          "Nothing if the trailer looks steady"
        ],
        "answer": 0
      },
      {
        "q": "What is a common cause of drive-off events?",
        "options": [
          "Cold weather only",
          "Unclear or inconsistent release signals between driver and dock staff",
          "Too much paperwork",
          "Slow forklifts"
        ],
        "answer": 1
      },
      {
        "q": "Why should trailer floors and dock plates be checked?",
        "options": [
          "To improve fuel mileage",
          "Because weak floors or poor alignment can cause collapses or forklift drops",
          "To reduce paperwork",
          "Because DOT requires painting"
        ],
        "answer": 1
      },
      {
        "q": "What is the safest action if the trailer shifts while loading?",
        "options": [
          "Keep going carefully",
          "Stop work and re-secure or reassess the dock setup",
          "Drive faster to finish",
          "Ignore it if the trailer is almost empty"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/coupling-uncoupling-chocking-landing-gear",
    "label": "Coupling, Uncoupling, Chocking & Landing Gear Safety",
    "short": "Preventing trailer drops, rollaways, and crush injuries during tractor-trailer connection work",
    "icon": "🔗",
    "color": "#5AC8FA",
    "regulation": "Commercial vehicle connection practices · trailer support and rollaway prevention controls",
    "audience": "Drivers, yard jockeys, maintenance staff, and dock support personnel",
    "minutes": 14,
    "slides": [
      {
        "heading": "Most Coupling Injuries Come From Assumptions, Not Complexity",
        "sub": "The trailer height, kingpin engagement, and wheel restraint must be verified, not guessed.",
        "body": "A tractor-trailer connection seems routine until a high plate, low plate, missed kingpin, weak landing gear, or unchocked trailer creates a drop or rollaway. Workers get crushed when they trust appearance instead of physical confirmation. The connection process must be deliberate from approach to tug test to landing gear stowage.",
        "list": [
          "Approach slowly and squarely so the fifth wheel engages correctly.",
          "Visually and physically verify lock engagement rather than assuming it latched.",
          "Use chocks or other restraint where site conditions require it."
        ],
        "callout": {
          "label": "RULE",
          "text": "Never place yourself in a crush zone to check or correct a trailer connection.",
          "color": "#5AC8FA"
        }
      },
      {
        "heading": "Landing Gear Is a Support System, Not a Backup Plan for Bad Coupling",
        "sub": "Improper use of landing gear can damage equipment and injure workers.",
        "body": "Landing gear failures often come from overloading, poor ground conditions, rushed cranking, or trying to compensate for an incorrect trailer height. Ground slope, soft surfaces, and partially loaded trailers all change how stable the unit is while uncoupled. Workers should stabilize first and avoid body placement beneath unsupported trailer sections.",
        "list": [
          "Check footing and support conditions before dropping or raising a trailer.",
          "Do not stand under a nose that depends on landing gear you have not assessed.",
          "Correct trailer height before coupling instead of forcing the connection."
        ]
      },
      {
        "heading": "Rollaways Start Small and End Badly",
        "sub": "A slight grade, poor brake condition, or missing restraint can move a unit farther than expected.",
        "body": "Drivers sometimes release air, disconnect lines, or step between units without making sure the trailer is restrained. That is how small movement becomes a crush injury or a dock strike. Secure the unit against movement before disconnecting, and do not rely on memory of what was set earlier.",
        "list": [
          "Set brakes according to procedure and verify wheel restraint where required.",
          "Disconnect in a sequence that does not expose you to shifting equipment.",
          "Re-check control status when interruptions or delays occur."
        ]
      },
      {
        "heading": "Routine Work Still Needs a Full Sequence",
        "sub": "Skipping one verification step removes the safety margin built into the task.",
        "body": "A proper coupling or uncoupling sequence is not red tape. It is the barrier that prevents trailer drops, pin mislocks, line damage, and crush exposures. Consistency matters most during repetitive yard work, because repetition makes people feel certain right before they miss a step.",
        "list": [
          "Use the same sequence every time rather than improvising by trailer type or schedule pressure.",
          "Tug test, visual inspection, and clearance checks each verify different parts of the connection.",
          "Stop and start over if the setup does not feel right."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the safest way to confirm a trailer connection?",
        "options": [
          "Assume the latch worked because the trailer moved",
          "Use a deliberate verification sequence including visual confirmation and a tug test",
          "Kick the tire",
          "Ask another driver later"
        ],
        "answer": 1
      },
      {
        "q": "Why is body placement important during coupling work?",
        "options": [
          "Because the weather may change",
          "Because missed kingpins, rollaways, or trailer drops create crush zones",
          "Because it improves fuel economy",
          "Because it reduces paperwork"
        ],
        "answer": 1
      },
      {
        "q": "What can make landing gear unsafe?",
        "options": [
          "Checking ground conditions",
          "Forcing an incorrect trailer height or supporting a trailer on poor footing",
          "Using the crank handle",
          "Inspecting the trailer nose"
        ],
        "answer": 1
      },
      {
        "q": "What should happen if a coupling setup does not feel correct?",
        "options": [
          "Finish quickly",
          "Stop and re-establish the sequence before continuing",
          "Let another worker stand between the units",
          "Ignore it if the trailer is empty"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/cargo-securement-flatbed-tarping",
    "label": "Cargo Securement, Flatbeds & Tarping Fall Hazards",
    "short": "Controlling load shift, tie-down failure, and elevated fall exposure during open-deck transport work",
    "icon": "🪢",
    "color": "#66CCFF",
    "regulation": "FMCSA cargo securement practices · fall prevention during tarping and load access",
    "audience": "Drivers, flatbed crews, shippers, and personnel securing or inspecting transported loads",
    "minutes": 15,
    "slides": [
      {
        "heading": "Load Securement Is About Movement Forces, Not Good Intentions",
        "sub": "A load that looks stable at rest may move once the road, brakes, wind, or cornering forces act on it.",
        "body": "Tie-downs, edge protection, blocking, and securement patterns must match the cargo type, weight distribution, and road forces the load will experience. Improvised tie-downs or damaged straps create a false sense of control. The right securement plan prevents forward shift, roll, bounce, and release during the entire trip.",
        "list": [
          "Use securement sized and rated for the actual load and transport conditions.",
          "Inspect chains, straps, anchors, and binders before relying on them.",
          "Understand how braking, cornering, wind, and vibration change the load picture."
        ],
        "callout": {
          "label": "RULE",
          "text": "Do not climb onto a load or release securement until you understand what stored or shifting force may be present.",
          "color": "#66CCFF"
        }
      },
      {
        "heading": "Flatbed Work Adds Fall and Struck-By Risk",
        "sub": "The same task can expose workers overhead, at the edge, and beside tensioned equipment.",
        "body": "Workers get injured while walking on uneven cargo, throwing tarps, reaching over tall loads, or releasing binders under tension. Wet surfaces, ice, and damaged dunnage increase slip and fall risk. A safe approach limits climbing, uses stable access methods, and respects the release energy in chains, straps, and tarp systems.",
        "list": [
          "Avoid standing on unstable or rounded cargo surfaces when better access is available.",
          "Treat tensioned straps, chains, and binder handles as energy sources.",
          "Do not stand in the path of a possible rebound or load shift during release."
        ]
      },
      {
        "heading": "Release Can Be More Dangerous Than Installation",
        "sub": "Loads settle, shift, and preload restraints during transport.",
        "body": "A securement system that was safe when installed may behave differently after hours on the road. Tarp bows, binders, straps, and chains can store significant tension. Releasing restraints without assessing how the cargo has moved can put workers directly in the line of fire or at the edge of a load that now leans differently.",
        "list": [
          "Look for leaning, bulging, broken packaging, or changed strap angle before releasing anything.",
          "Loosen restraints in a controlled sequence rather than all at once.",
          "Keep bystanders clear when securement is being adjusted or removed."
        ]
      },
      {
        "heading": "The Best Load Job Leaves Little to Chance",
        "sub": "Good securement is methodical long before the wheels turn.",
        "body": "Shippers and drivers should agree on the load plan before material is placed. That includes tie-down count, blocking method, edge protection, access strategy, and post-load inspection expectations. When the plan is made early, workers do not have to improvise from a trailer deck with poor footing and limited options.",
        "list": [
          "Build the load so the securement method is practical, inspectable, and repeatable.",
          "Account for weather, route, and re-check intervals before departure.",
          "A tarp or binder should never be the first time the load plan is thought through."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why can a load that looks stable at rest still be dangerous?",
        "options": [
          "Because trucks are noisy",
          "Because braking, turning, vibration, and wind can change load forces",
          "Because cargo never moves",
          "Because straps do not matter"
        ],
        "answer": 1
      },
      {
        "q": "What additional hazard does flatbed work create besides load shift?",
        "options": [
          "Printer failure",
          "Fall exposure while climbing or tarping loads",
          "GPS drift",
          "Low fuel"
        ],
        "answer": 1
      },
      {
        "q": "Why is releasing securement often dangerous?",
        "options": [
          "Because straps are expensive",
          "Because loads may have shifted and restraints may now hold stored tension",
          "Because the trailer is empty",
          "Because binders cannot move"
        ],
        "answer": 1
      },
      {
        "q": "What is the safest securement approach?",
        "options": [
          "Improvised tie-downs based on what is nearby",
          "A planned method matched to cargo type, weight, and transport forces",
          "Release all binders at once",
          "Climb onto every load for inspection"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/tanker-bulk-transfer-hose-connections",
    "label": "Tanker, Bulk Transfer & Hose Connection Safety",
    "short": "Managing spills, pressure release, contamination, and vehicle movement during product transfer work",
    "icon": "🛢️",
    "color": "#55B8FF",
    "regulation": "Bulk transfer safety practices · hose connection verification · release and contamination controls",
    "audience": "Tanker drivers, bulk transfer crews, terminal operators, and receiving personnel",
    "minutes": 15,
    "slides": [
      {
        "heading": "Bulk Transfer Work Combines Vehicle Risk and Process Risk",
        "sub": "A parked tanker is still part of an active energy and product system.",
        "body": "Transfer incidents happen when workers focus on the truck but ignore the line conditions, or focus on the product but ignore the vehicle status. Hoses, fittings, vents, pumps, and containment all need to match the product and the transfer plan. The safest transfer starts with identity verification, line-up confirmation, and movement prevention.",
        "list": [
          "Verify product, destination, hose compatibility, and connection points before opening anything.",
          "Secure the vehicle against movement according to site procedure.",
          "Do not assume a hose connection is correct because it physically fits."
        ],
        "callout": {
          "label": "RULE",
          "text": "Confirm the right product and the right path before the first valve or hatch is opened.",
          "color": "#55B8FF"
        }
      },
      {
        "heading": "Pressure, Residual Product, and Static Can Surprise Workers",
        "sub": "A transfer line may still contain force even when flow looks stopped.",
        "body": "Residual pressure, trapped product, thermal expansion, and static charge can all create sudden release during connection or disconnection. Operators should understand the venting, bonding, grounding, and bleed-off controls required for the product and equipment involved. Disconnecting early or improvising drains can turn a routine transfer into a spray or vapor event.",
        "list": [
          "Use the prescribed vent, bleed, grounding, or bonding steps before disconnecting.",
          "Treat slow flow or no flow as a condition to diagnose, not a cue to force the system.",
          "Keep body position out of the expected release path."
        ]
      },
      {
        "heading": "Containment and Communication Matter as Much as the Pump",
        "sub": "Spills grow when crews do not own the stop-work and notification plan.",
        "body": "Every transfer should have a clear shutdown path, containment readiness, and a shared understanding of who has stop authority. Drips, vapor release, mismatched couplings, and overfill alarms all matter early. Small transfer failures become major releases when workers wait too long to stop, isolate, and communicate.",
        "list": [
          "Know how to stop flow quickly before starting the job.",
          "Do not normalize minor leaks, odors, or repeated fitting problems.",
          "Use the site reporting and emergency process at the first sign conditions are outside normal."
        ]
      },
      {
        "heading": "Transfer Discipline Protects Product, People, and the Route Ahead",
        "sub": "A clean departure depends on a clean connection and disconnect process.",
        "body": "Workers must confirm closure, drain-back, cap replacement, hose storage, paperwork, and vehicle readiness before leaving the rack or customer site. A transfer is not finished when flow stops; it is finished when the system is returned to a safe transport condition. Rushed departure after unloading is a common source of road release and contamination events.",
        "list": [
          "Verify all connections are disconnected, capped, and secured for transport.",
          "Account for residual product in hoses and fittings before moving the vehicle.",
          "A disciplined finish prevents the next hazard from following the truck onto the road."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What should be verified before a bulk transfer begins?",
        "options": [
          "Only the truck color",
          "Product identity, hose path, connection points, and vehicle securement",
          "Only the paperwork signature",
          "That the hose can physically fit"
        ],
        "answer": 1
      },
      {
        "q": "Why can disconnecting a hose be hazardous even after flow stops?",
        "options": [
          "Because all hoses are defective",
          "Because residual pressure, product, or static may still be present",
          "Because pumps always restart",
          "Because trucks cannot be parked"
        ],
        "answer": 1
      },
      {
        "q": "What is the right response to a leak, odor, or mismatched fitting during transfer?",
        "options": [
          "Continue and watch it",
          "Stop, isolate, and follow the site communication process",
          "Ignore it if the job is almost done",
          "Increase pump speed"
        ],
        "answer": 1
      },
      {
        "q": "When is a transfer truly finished?",
        "options": [
          "When visible flow stops",
          "When the system is disconnected, closed, secured, and ready for safe transport",
          "When the driver leaves the site",
          "When the receipt prints"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/driver-fatigue-weather-road-conditions",
    "label": "Driver Fatigue, Weather & Road Condition Decisions",
    "short": "Making safe go / no-go decisions when human limits and road conditions start to erode control",
    "icon": "🌧️",
    "color": "#7ACBFF",
    "regulation": "Fatigue management practices · defensive driving decision standards · severe weather controls",
    "audience": "Commercial drivers, dispatch support, yard leads, and transportation supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "Many Transportation Incidents Start Before the Vehicle Moves",
        "sub": "The real failure is often the decision to continue when conditions were already degrading.",
        "body": "Fatigue, distraction, illness, poor visibility, icing, wind, standing water, and traffic pressure all reduce the margin for safe operation. Drivers must be able to slow down, stop, delay, reroute, or refuse movement when conditions no longer support controlled travel. A late load is recoverable; a fatigue or weather crash may not be.",
        "list": [
          "Recognize performance decline early rather than trying to power through it.",
          "Use weather and route information to make real adjustments, not just to explain the incident later.",
          "Dispatch pressure does not eliminate the driver’s duty to operate safely."
        ],
        "callout": {
          "label": "RULE",
          "text": "When fatigue or road conditions remove your safety margin, the correct action is to change the plan.",
          "color": "#7ACBFF"
        }
      },
      {
        "heading": "Fatigue Looks Like Slowed Judgment Before It Looks Like Sleep",
        "sub": "Drivers often underestimate how impaired they already are.",
        "body": "Missed signs, wandering attention, poor lane discipline, delayed braking, memory gaps, irritability, and frequent correction are all fatigue indicators. Workers should not wait for microsleeps to take the hazard seriously. If alertness is dropping, the route needs a safe pause or a different plan.",
        "list": [
          "Treat reduced focus and increased correction as warning signs, not normal driving.",
          "Do not replace rest with caffeine expectations or self-confidence.",
          "A professional response to fatigue is to manage it, not deny it."
        ]
      },
      {
        "heading": "Weather Changes the Vehicle and the Route",
        "sub": "Stopping distance, visibility, traction, and trailer stability all shift with conditions.",
        "body": "Rain, snow, ice, fog, dust, smoke, and high wind each change the safe operating envelope. Loads that were acceptable in clear weather may become unstable or harder to control under new conditions. Drivers must adapt speed, spacing, route, and stop decisions to what the road is actually doing right now.",
        "list": [
          "Reduce speed before traction or visibility problems force the issue.",
          "Watch for bridge icing, ponding water, crosswinds, and reduced stopping traction.",
          "Do not let schedule pressure override condition-based decisions."
        ]
      },
      {
        "heading": "Good Transportation Operations Support Conservative Decisions",
        "sub": "The system should reward good judgment, not punish safe delay.",
        "body": "Supervisors and dispatchers should expect drivers to stop work when conditions become unsafe. Reporting fatigue or road hazards early gives the operation more options than a late emergency. The healthiest transportation culture does not celebrate drivers for forcing a bad plan to completion.",
        "list": [
          "Escalate route, fatigue, and weather concerns early rather than waiting for a near miss.",
          "Use approved communication channels to update the travel plan.",
          "Safe transportation depends on truthful status, not heroic optimism."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the right response when fatigue or weather reduces driving safety margin?",
        "options": [
          "Keep the schedule no matter what",
          "Change the plan by slowing, stopping, delaying, or rerouting",
          "Ignore it until an alarm sounds",
          "Drive faster to finish sooner"
        ],
        "answer": 1
      },
      {
        "q": "What is an early sign of fatigue?",
        "options": [
          "Improved reaction time",
          "Missed cues and slowed judgment",
          "Better focus",
          "Higher fuel efficiency"
        ],
        "answer": 1
      },
      {
        "q": "Why should drivers adapt speed and spacing in bad weather?",
        "options": [
          "To reduce paperwork",
          "Because traction, visibility, and stopping distance change",
          "Because trailers get lighter",
          "Because dispatch requires it"
        ],
        "answer": 1
      },
      {
        "q": "What kind of transportation culture is safest?",
        "options": [
          "One that rewards hiding fatigue",
          "One that supports conservative, condition-based decisions",
          "One that ignores weather reports",
          "One that discourages communication"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/pedestrian-forklift-heavy-vehicle-interface",
    "label": "Pedestrian, Forklift & Heavy Vehicle Interface",
    "short": "Keeping people separated from moving trucks, forklifts, and trailers in mixed industrial traffic areas",
    "icon": "🚧",
    "color": "#6FC5FF",
    "regulation": "Traffic management practices · pedestrian separation · vehicle interface controls",
    "audience": "Drivers, forklift operators, warehouse crews, yard staff, and contractors",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Most Dangerous Traffic Areas Mix Different Speeds and Different Assumptions",
        "sub": "Forklifts, trucks, pickups, and pedestrians do not see or react the same way.",
        "body": "Industrial traffic injuries often happen at the interfaces: dock lanes, gate approaches, staging areas, maintenance aprons, and customer yards. Each user expects the others to see them and yield, but visibility and stopping capability are different for each vehicle. Safe traffic systems separate people from equipment whenever possible and control the crossings that remain.",
        "list": [
          "Do not assume a forklift driver and a truck driver have the same field of view.",
          "Treat every uncontrolled crossing as a conflict point until proven otherwise.",
          "Marked lanes help only when everyone respects them."
        ],
        "callout": {
          "label": "RULE",
          "text": "Separate people and vehicles by design first, then use procedures to control the remaining intersections.",
          "color": "#6FC5FF"
        }
      },
      {
        "heading": "Truck Drivers Often Miss What Forklift Operators Think Is Obvious",
        "sub": "Vehicle height, mirrors, trailer walls, and backing angle change what is visible.",
        "body": "A driver in a tractor cab may not see a low-profile forklift or a person moving near the trailer corners. A forklift operator inside a trailer may not know a driver is preparing to move. That is why dock communication, restraint systems, and controlled approach rules matter more than hand signals or assumptions.",
        "list": [
          "Use formal communication and status controls before vehicle approach or departure.",
          "Stay out of pinch points between forklifts, trucks, and dock structures.",
          "Never enter a blind-side area just because movement looks slow."
        ]
      },
      {
        "heading": "Pedestrians Need Predictable Crossing Rules",
        "sub": "Random shortcuts create exposure where equipment operators do not expect foot traffic.",
        "body": "Workers on foot often take the shortest path between doors, trailers, or staging areas. That shortcut may cut behind a reversing unit, in front of a forklift, or between trailers where no operator expects them. The safest facilities use designated walkways, crossing points, and exclusion zones around active loading and backing operations.",
        "list": [
          "Use designated crossing points instead of informal gaps between equipment.",
          "Do not pass behind a reversing vehicle or between active loading equipment.",
          "Visibility clothing helps, but it does not create right-of-way."
        ]
      },
      {
        "heading": "Traffic Control Needs Consistency Across Shifts and Contractors",
        "sub": "A good traffic plan fails when it changes informally from crew to crew.",
        "body": "Contractors, visiting drivers, temporary labor, and off-shift crews are often the least familiar with the site layout. Rules for staging, backing, parking, and pedestrian paths should stay consistent and visible. A transportation yard becomes safer when new arrivals can understand the traffic system before entering the active area.",
        "list": [
          "Post and communicate traffic rules where drivers and visitors can see them before entry.",
          "Do not let local habits replace the formal traffic-control plan.",
          "Consistency is what makes a traffic system usable under pressure."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Where do many industrial traffic injuries happen?",
        "options": [
          "Only on public highways",
          "At the interfaces where pedestrians, forklifts, and trucks mix",
          "Only in offices",
          "Only during night shift"
        ],
        "answer": 1
      },
      {
        "q": "Why are designated crossings important?",
        "options": [
          "They reduce printer use",
          "They keep pedestrians out of unexpected conflict zones",
          "They increase trailer speed",
          "They eliminate mirrors"
        ],
        "answer": 1
      },
      {
        "q": "What should control truck approach and departure at docks?",
        "options": [
          "Assumptions and hand waves",
          "Formal communication and dock-status controls",
          "Driver mood",
          "Forklift horn alone"
        ],
        "answer": 1
      },
      {
        "q": "What makes a traffic-control plan dependable?",
        "options": [
          "Changing it every shift",
          "Consistency for employees, contractors, and visiting drivers",
          "Keeping it informal",
          "Using only verbal instructions"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/breakdown-incident-highway-emergency-response",
    "label": "Breakdown, Incident & Highway Emergency Response",
    "short": "Staying alive during roadside stops, disabled equipment events, and transportation emergencies",
    "icon": "🆘",
    "color": "#80D4FF",
    "regulation": "Commercial vehicle emergency practices · scene protection · roadside exposure controls",
    "audience": "Drivers, transportation supervisors, roadside support, and field service personnel",
    "minutes": 14,
    "slides": [
      {
        "heading": "The Roadside Is an Active Hazard Zone, Not a Waiting Room",
        "sub": "Once a vehicle is disabled, passing traffic becomes the immediate threat.",
        "body": "A breakdown or crash does not end the hazard; it changes the hazard. Shoulder width, visibility, speed, weather, lighting, and traffic pattern determine how dangerous the stop becomes. The first priority is protecting people from secondary impact while notifying the proper response channels.",
        "list": [
          "Move to the safest reachable location if the vehicle can still be controlled.",
          "Protect yourself from passing traffic before focusing on cargo or schedule.",
          "Use warning devices and scene controls according to procedure and conditions."
        ],
        "callout": {
          "label": "RULE",
          "text": "At a roadside event, traffic exposure usually becomes the first life-safety problem.",
          "color": "#80D4FF"
        }
      },
      {
        "heading": "Vehicle Fires, Spills, and Damage Change the Response",
        "sub": "The right action depends on what new hazards the event created.",
        "body": "A disabled truck may also involve fire, leaking fuel, cargo release, energized components, or unstable positioning. Drivers should not improvise close-up intervention when the scene has already escalated beyond incipient control. The safest choice may be evacuation, isolation, and accurate information to responders.",
        "list": [
          "Treat smoke, vapor, leaking product, or severe damage as escalation indicators.",
          "Do not crawl under, between, or beside unstable equipment on an active roadside.",
          "Give responders clear information about cargo, location, and immediate conditions."
        ]
      },
      {
        "heading": "Visibility and Positioning Matter at Night and in Bad Weather",
        "sub": "The same stop becomes much more dangerous when others cannot see it in time.",
        "body": "Fog, rain, snow, curves, hills, darkness, and glare reduce the distance other drivers have to perceive and avoid the disabled unit. Workers setting warning devices or leaving the cab must think about sight lines and escape paths, not just compliance. Standing in the wrong place while deploying warnings can be more dangerous than the breakdown itself.",
        "list": [
          "Use the safest available side and path when exiting the vehicle.",
          "Account for traffic speed and visibility before placing warning devices.",
          "Keep an escape route in mind while working near traffic."
        ]
      },
      {
        "heading": "A Calm, Structured Response Beats Heroics",
        "sub": "Emergency credibility comes from good information and controlled actions.",
        "body": "Drivers and field support personnel should follow the company and regulatory emergency process for notification, location reporting, cargo description, injury status, and scene control. Trying to solve every problem alone on the roadside often increases exposure. Structured communication brings the right resources faster and protects the people already at the scene.",
        "list": [
          "Report exact location, lane or shoulder status, and any fire, spill, or injury information.",
          "Do not re-enter a worsening scene to save property.",
          "Protect people first, then stabilize information flow."
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is often the first life-safety problem during a roadside breakdown?",
        "options": [
          "Paperwork",
          "Exposure to passing traffic",
          "Low battery on the phone",
          "The next delivery appointment"
        ],
        "answer": 1
      },
      {
        "q": "What should smoke, leaking product, or severe vehicle damage signal?",
        "options": [
          "That the job is almost over",
          "That the scene may require isolation and responder support instead of improvisation",
          "That the driver should crawl under the vehicle",
          "That the truck is ready to move"
        ],
        "answer": 1
      },
      {
        "q": "Why do night and bad weather make breakdowns more dangerous?",
        "options": [
          "Because paperwork gets wet",
          "Because visibility and reaction distance for other drivers are reduced",
          "Because tires stop working",
          "Because warning devices are illegal"
        ],
        "answer": 1
      },
      {
        "q": "What kind of response is best at a transportation emergency?",
        "options": [
          "Heroic improvisation alone",
          "A calm, structured response with protection and clear communication",
          "Silence until the truck is repaired",
          "Immediate cargo recovery no matter the exposure"
        ],
        "answer": 1
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function TruckingTransportationModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const YardBackingSpotterTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[0])
export const LoadingDockTrailerSafetyTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[1])
export const CouplingUncouplingTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[2])
export const CargoSecurementTarpingTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[3])
export const TankerBulkTransferTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[4])
export const DriverFatigueWeatherTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[5])
export const VehicleInterfaceTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[6])
export const RoadsideBreakdownEmergencyTraining = makeModuleComponent(TRUCKING_TRANSPORTATION_PHASE1_MODULES[7])
