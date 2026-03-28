import TrainingModuleShell from './TrainingModuleShell.jsx'

export const ELECTRICAL_SAFETY_PHASE1_MODULES = [
{
  "path": "/electrical-shock-vs-arc-flash-blast",
  "label": "Shock vs Arc Flash vs Arc Blast",
  "short": "Understanding the difference between contact shock, thermal arc energy, and pressure effects",
  "icon": "⚡",
  "color": "#00BFFF",
  "regulation": "NFPA 70E electrical hazard awareness — shock and arc-risk distinction",
  "audience": "Electricians, maintenance technicians, operators, supervisors, contractors, and unqualified persons working near energized equipment",
  "minutes": 16,
  "slides": [
    {
      "heading": "Electrical Incidents Are Not All the Same",
      "sub": "People often say “electrical accident” as if every event behaves alike.",
      "body": "Shock, arc flash, and arc blast involve different exposure mechanisms. Shock is current passing through the body. Arc flash is intense heat and light from an electrical fault. Arc blast is the pressure wave and flying debris that can accompany that fault. Preventing one does not automatically control the others.",
      "list": [
        "Shock can occur with no visible flash.",
        "Arc flash can burn a person without direct body contact.",
        "Arc blast can throw tools, doors, and people even when the heat is survivable."
      ],
      "callout": {
        "label": "RULE",
        "text": "Identify the actual electrical hazard before choosing boundaries, PPE, and work controls.",
        "color": "#00BFFF"
      }
    },
    {
      "heading": "Shock Hazard = Current Through the Body",
      "sub": "Body contact with energized parts creates the shock path.",
      "body": "Shock hazard depends on voltage, the body’s contact path, skin condition, and how long contact lasts. Damp conditions, metal structures, conductive tools, and damaged insulation can all increase danger. Even relatively low voltages can injure or kill under the wrong conditions.",
      "list": [
        "Treat exposed energized parts as lethal unless proven otherwise.",
        "Wet, sweaty, or contaminated skin lowers resistance.",
        "Both hand-to-hand and hand-to-ground paths can cross vital organs."
      ]
    },
    {
      "heading": "Arc Flash = Thermal Energy Release",
      "sub": "An electrical fault can release extreme heat in a fraction of a second.",
      "body": "Arc flash can ignite clothing, burn skin, damage vision, and destroy nearby equipment. A worker does not have to touch the equipment to be injured. The hazard depends on available fault current, clearing time, equipment condition, and worker position relative to the fault.",
      "list": [
        "Do not confuse “no contact” with “no danger.”",
        "Fault clearing speed strongly affects incident energy.",
        "Doors, covers, and barriers reduce exposure only when properly installed and closed."
      ]
    },
    {
      "heading": "Arc Blast = Pressure, Sound, and Debris",
      "sub": "A violent fault can create a blast event in addition to the thermal event.",
      "body": "Arc blast can rupture eardrums, knock workers off ladders or platforms, and send molten metal or hardware across the room. It is one reason stable body position and distance matter even when PPE is worn. Blast effects can make falls and struck-by injuries part of the electrical event.",
      "list": [
        "Pressure effects are especially dangerous near switchgear and MCC buckets.",
        "Face shields do not replace proper body position and boundary control.",
        "Open cubicles and loose hardware increase projectile risk."
      ]
    },
    {
      "heading": "Controls Must Match the Exposure",
      "sub": "Different electrical hazards require overlapping but distinct controls.",
      "body": "De-energizing controls shock, arc flash, and blast together. When energized work is justified, the job plan must define the boundaries, test method, PPE, tools, and worker roles based on the actual task and equipment. Generic caution is not enough.",
      "list": [
        "Establish an electrically safe work condition whenever feasible.",
        "Use the right voltage-rated tools and meters.",
        "Keep unqualified persons outside the boundary."
      ],
      "callout": {
        "label": "TAKEAWAY",
        "text": "The safest electrical job is the one verified de-energized before hands go inside.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "Which statement best distinguishes shock from arc flash?",
      "choices": [
        "Shock is pressure and arc flash is current through the body",
        "Shock is current through the body; arc flash is thermal energy from a fault",
        "Shock only happens above 480 volts",
        "Arc flash only occurs outdoors"
      ],
      "answer": 1
    },
    {
      "question": "A worker can be burned by arc flash even if they never touch energized parts.",
      "choices": [
        "True",
        "False"
      ],
      "answer": 0
    },
    {
      "question": "Arc blast most directly adds which hazard?",
      "choices": [
        "Noise reduction",
        "Pressure wave and flying debris",
        "Lower voltage exposure",
        "Improved grounding"
      ],
      "answer": 1
    },
    {
      "question": "Which condition increases shock danger?",
      "choices": [
        "Dry insulated gloves used properly",
        "Wet or contaminated skin",
        "Closed equipment doors",
        "Greater distance from exposed parts"
      ],
      "answer": 1
    },
    {
      "question": "What control reduces shock, arc flash, and blast together?",
      "choices": [
        "Standing on one foot",
        "Working faster",
        "Establishing an electrically safe work condition",
        "Opening more cabinet doors"
      ],
      "answer": 2
    }
  ]
},
{
  "path": "/electrically-safe-work-condition",
  "label": "Electrically Safe Work Condition",
  "short": "De-energizing, isolating, locking, and verifying before work begins",
  "icon": "🔌",
  "color": "#00BFFF",
  "regulation": "NFPA 70E Article 120 — establishing an electrically safe work condition",
  "audience": "Qualified electrical workers, maintenance technicians, supervisors, and authorized contractors",
  "minutes": 18,
  "slides": [
    {
      "heading": "The Goal Is Verified De-Energized, Not Assumed Safe",
      "sub": "Switching something off is only one step in the process.",
      "body": "An electrically safe work condition means all sources are identified, disconnected, locked and tagged where required, stored energy is released, and absence of voltage is verified with the right instrument. Work starts only after those steps are complete and the equipment condition matches the job plan.",
      "list": [
        "Normal stop buttons are not isolation points.",
        "Multiple feeds and control power sources must be included.",
        "Stored electrical energy can remain after disconnecting the main supply."
      ]
    },
    {
      "heading": "Identify Every Energy Source",
      "sub": "Electrical systems often have more than one way to stay alive.",
      "body": "Main power, backfeeds, UPS systems, generators, capacitors, photovoltaic circuits, control transformers, batteries, and interlocked starters can all keep parts energized. One-line diagrams help, but field verification matters because modifications, mislabeled gear, and undocumented ties are common failure points.",
      "list": [
        "Trace both power and control circuits.",
        "Look for secondary sources and remote feeds.",
        "Do not trust labels blindly when the consequence is exposure."
      ]
    },
    {
      "heading": "Isolate, Lock, Tag, and Secure",
      "sub": "Isolation must physically interrupt the energy path.",
      "body": "Open the disconnecting means, apply lockout/tagout per site procedure, and prevent unexpected re-energization. Where multiple crews are involved, group lockout and clear responsibility are essential. Isolation must stay intact for the full duration of the job.",
      "list": [
        "The person exposed to the hazard must be protected by the lockout system.",
        "Temporary removal of locks requires formal control.",
        "Panel doors and warning stickers are not lockout devices."
      ]
    },
    {
      "heading": "Release Stored Electrical Energy",
      "sub": "Residual charge can injure even after the source is opened.",
      "body": "Capacitors, VFD DC buses, soft starters, and battery-backed controls can hold energy after disconnection. Follow the equipment-specific wait time, discharge process, and manufacturer instructions. Never assume that “enough time has passed” without verification.",
      "list": [
        "Observe posted discharge times for capacitive equipment.",
        "Use approved grounding or discharge methods where required.",
        "Treat indicator lights as helpful, not authoritative, unless the procedure says otherwise."
      ]
    },
    {
      "heading": "Test Before Touch",
      "sub": "Verification is the step that proves the work condition.",
      "body": "Use an adequately rated and functioning test instrument. Prove the meter on a known live source, test the target conductors phase-to-phase and phase-to-ground as applicable, then re-prove the meter on a known live source. This live-dead-live sequence confirms both the equipment state and the test tool function.",
      "list": [
        "Wear the required PPE during verification.",
        "Test all conductors that could be energized.",
        "If results conflict with expectations, stop and re-evaluate."
      ]
    },
    {
      "heading": "Only Then Does the Work Truly Begin",
      "sub": "The work package starts after safe condition verification, not before.",
      "body": "Covers can be removed, components can be handled, and hands can enter the boundary only after the safe work condition is established. If the condition changes, the verification must be repeated. Re-energization at the end requires controlled restoration and worker accountability.",
      "list": [
        "Document the status before proceeding.",
        "Maintain the lockout and boundary until restoration is authorized.",
        "Treat unexpected voltage as a stop-work event."
      ],
      "callout": {
        "label": "LOCK",
        "text": "Off is not enough. Verified absence of voltage is the decisive step.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "Which action makes the work condition electrically safe by itself?",
      "choices": [
        "Turning the selector switch to OFF",
        "Opening the cabinet door",
        "Verifying absence of voltage after isolation and lockout",
        "Posting a danger sign"
      ],
      "answer": 2
    },
    {
      "question": "Why is live-dead-live used when testing?",
      "choices": [
        "To warm up the meter",
        "To prove the meter works before and after testing the equipment",
        "To discharge capacitors faster",
        "To avoid wearing PPE"
      ],
      "answer": 1
    },
    {
      "question": "Which source is often missed during isolation planning?",
      "choices": [
        "A painted floor line",
        "Backfeed or control power source",
        "Closed drain valve",
        "Housekeeping cart"
      ],
      "answer": 1
    },
    {
      "question": "What should happen if test results do not match the expected equipment state?",
      "choices": [
        "Continue carefully",
        "Ignore it if the disconnect is open",
        "Stop work and re-evaluate the isolation",
        "Remove the PPE"
      ],
      "answer": 2
    },
    {
      "question": "Residual energy after opening a disconnect may remain in:",
      "choices": [
        "Capacitors and DC buses",
        "Only floor drains",
        "Only motors above 100 hp",
        "Only outdoor equipment"
      ],
      "answer": 0
    }
  ]
},
{
  "path": "/test-before-touch",
  "label": "Test Before Touch",
  "short": "Meter selection, live-dead-live verification, and proving absence of voltage",
  "icon": "🧪",
  "color": "#00BFFF",
  "regulation": "NFPA 70E absence-of-voltage verification practice",
  "audience": "Qualified workers performing troubleshooting, verification, or electrical isolation tasks",
  "minutes": 15,
  "slides": [
    {
      "heading": "Testing Is a Procedure, Not a Gesture",
      "sub": "A quick meter check without discipline creates false confidence.",
      "body": "Workers get hurt when they assume a circuit is dead after a quick glance at a meter or noncontact tester. Proper voltage verification uses the right instrument, the right range, the right test points, and a repeatable sequence that proves both the circuit condition and the instrument performance.",
      "list": [
        "Use a meter rated for the system category and voltage.",
        "Understand what the task requires you to prove.",
        "Do not substitute convenience for method."
      ]
    },
    {
      "heading": "Use the Right Instrument for the Job",
      "sub": "Meters are not interchangeable just because they display numbers.",
      "body": "The instrument must be suitable for the equipment category, voltage, and environment. Test leads, probes, and accessories must also be intact and rated. Damaged leads, weak batteries, and incorrect settings can turn a safe procedure into a dangerous guess.",
      "list": [
        "Inspect the meter, leads, and probe tips before use.",
        "Confirm settings before contacting conductors.",
        "Know the difference between a preliminary indicator and a proving instrument."
      ]
    },
    {
      "heading": "Live-Dead-Live Prevents a Hidden Meter Failure",
      "sub": "The meter must prove itself before and after the actual test.",
      "body": "First verify the instrument on a known energized source. Then test the isolated equipment at every relevant point. Then re-verify the instrument on a known energized source. If the meter cannot read known voltage before or after, the absence-of-voltage test is invalid.",
      "list": [
        "Known live means a source you expect to be energized and can access safely.",
        "Test phase-to-phase and phase-to-ground where applicable.",
        "Repeat the sequence whenever conditions change."
      ]
    },
    {
      "heading": "Test the Actual Exposure Points",
      "sub": "A disconnect can be open while another section remains energized.",
      "body": "Workers should test the points they may contact, not only the easiest points to reach. Line side, load side, control terminals, and externally fed devices may not all behave the same. Verification must match the actual work boundary.",
      "list": [
        "Open equipment carefully and maintain the boundary.",
        "Identify hidden or downstream-fed terminals.",
        "Do not stop after only one conductor or one side of the equipment."
      ]
    },
    {
      "heading": "If Anything Looks Wrong, Stop",
      "sub": "Confusion during testing is a warning, not a nuisance.",
      "body": "Unexpected readings, unstable values, damaged insulation, signs of overheating, or uncertain equipment identification require stop-work and re-evaluation. The test is not successful until the worker fully understands the condition of the circuit.",
      "list": [
        "Question strange readings instead of explaining them away.",
        "Get a second qualified person involved when needed.",
        "Re-verify the circuit after any interruption in the task."
      ],
      "callout": {
        "label": "TAKEAWAY",
        "text": "A good test proves the circuit and proves the tester.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "What is the purpose of the first “live” step in live-dead-live?",
      "choices": [
        "To discharge the circuit",
        "To prove the meter works before testing the equipment",
        "To avoid using PPE",
        "To energize the equipment"
      ],
      "answer": 1
    },
    {
      "question": "You should test only the easiest terminal to reach if the disconnect is open.",
      "choices": [
        "True",
        "False"
      ],
      "answer": 1
    },
    {
      "question": "Which item must be inspected before use?",
      "choices": [
        "Only the display screen",
        "Meter, leads, probes, and settings",
        "Only the probe color",
        "Only the battery door"
      ],
      "answer": 1
    },
    {
      "question": "What should you do after getting an unexpected reading?",
      "choices": [
        "Assume the meter is wrong and continue",
        "Stop and re-evaluate the condition",
        "Ignore it if the job is small",
        "Touch the conductor with a gloved hand"
      ],
      "answer": 1
    },
    {
      "question": "Why is the second “live” step required?",
      "choices": [
        "To prove the meter still works after testing",
        "To increase the arc flash boundary",
        "To bypass lockout",
        "To energize the load side"
      ],
      "answer": 0
    }
  ]
},
{
  "path": "/mcc-switchgear-panel-access",
  "label": "MCC, Switchgear & Panel Access Safety",
  "short": "Boundary discipline, door positions, body position, and exposure control around energized gear",
  "icon": "🗄️",
  "color": "#00BFFF",
  "regulation": "NFPA 70E energized equipment access and boundary awareness",
  "audience": "Qualified workers, operators, supervisors, and contractors entering electrical rooms or opening gear",
  "minutes": 16,
  "slides": [
    {
      "heading": "Opening Gear Changes the Exposure",
      "sub": "The hazard picture changes when covers and doors come open.",
      "body": "Closed and properly maintained equipment offers a different risk profile than open or withdrawn components. MCC buckets, panelboards, and switchgear compartments must be approached as controlled exposure zones. Workers should know when the task remains routine and when it becomes energized work.",
      "list": [
        "Room entry is not the same as panel access.",
        "Opening the enclosure may increase shock and arc exposure.",
        "Only the people needed for the task should be at the gear."
      ]
    },
    {
      "heading": "Body Position Matters",
      "sub": "Where you stand affects how much energy reaches you if a fault occurs.",
      "body": "Workers should avoid placing the torso directly in front of gear when operating doors, handles, or disconnects. Stable footing, side positioning where appropriate, and awareness of escape path reduce injury potential during abnormal operation. Good position also prevents falls if a blast wave occurs.",
      "list": [
        "Avoid leaning into the opening plane of the door.",
        "Keep nonessential body parts out of the line of exposure.",
        "Know where you will move if a condition changes."
      ]
    },
    {
      "heading": "Boundaries Protect More Than the Technician",
      "sub": "Electrical work often exposes nearby personnel who are not part of the task.",
      "body": "When gear is open or energized work is taking place, the area must be controlled so unqualified persons, operators, and bystanders do not drift into the boundary. Floor markings can help, but the job briefing and active control of the space are what keep people out.",
      "list": [
        "Post or station controls when the work area is busy.",
        "Do not rely on people to “just stay back.”",
        "Coordinate with operations before opening major gear."
      ]
    },
    {
      "heading": "Condition of the Equipment Changes the Risk",
      "sub": "Dust, corrosion, missing deadfronts, and loose hardware matter.",
      "body": "Electrical rooms in industrial settings can suffer vibration, contamination, moisture, and deferred maintenance. Signs of poor condition increase the chance of abnormal operation or fault escalation. A worker who notices a bad condition must treat it as part of the hazard assessment, not as a separate maintenance issue for later.",
      "list": [
        "Stop if the enclosure is damaged or improperly assembled.",
        "Escalate evidence of overheating, contamination, or loose parts.",
        "Do not assume old equipment is safe because it is familiar."
      ]
    },
    {
      "heading": "Routine Operation Is Not a Free Pass",
      "sub": "Even normal switching requires a disciplined approach.",
      "body": "Some operation of properly maintained enclosed equipment may be considered routine, but that does not remove the need for training, awareness, and correct procedure. The line between normal operation and justified exposure changes fast when the equipment is in poor condition or the task departs from normal use.",
      "list": [
        "Use the approved operating method every time.",
        "Do not improvise around stiff handles or faulty doors.",
        "Escalate abnormal conditions before trying again."
      ],
      "callout": {
        "label": "RULE",
        "text": "Treat open gear as an active hazard zone until the task is complete and the enclosure is restored.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "Why does opening an electrical enclosure matter?",
      "choices": [
        "It reduces all hazards",
        "It can increase shock and arc exposure",
        "It eliminates the need for boundaries",
        "It proves the equipment is maintained"
      ],
      "answer": 1
    },
    {
      "question": "Who should be inside the controlled electrical work area?",
      "choices": [
        "Anyone curious about the task",
        "Only the people needed for the work",
        "All nearby operators",
        "Any contractor in the room"
      ],
      "answer": 1
    },
    {
      "question": "Which condition should trigger stop-work or escalation?",
      "choices": [
        "Closed labeled enclosure in good condition",
        "Corrosion, contamination, or loose hardware",
        "A clear floor marking",
        "An approved operating procedure"
      ],
      "answer": 1
    },
    {
      "question": "A good body position helps reduce which added risk during a fault?",
      "choices": [
        "Sun glare",
        "Fall or blast injury",
        "Noise complaints",
        "Trip mileage"
      ],
      "answer": 1
    },
    {
      "question": "Routine operation means no discipline is needed around energized gear.",
      "choices": [
        "True",
        "False"
      ],
      "answer": 1
    }
  ]
},
{
  "path": "/temporary-power-cords-portables",
  "label": "Temporary Power, Cords & Portable Equipment",
  "short": "Portable electrical hazards, damaged cords, wet locations, and field-power discipline",
  "icon": "🧰",
  "color": "#00BFFF",
  "regulation": "Portable electrical equipment and temporary power awareness",
  "audience": "Maintenance, contractors, temporary crews, outage teams, and general industrial workers using cord-connected equipment",
  "minutes": 14,
  "slides": [
    {
      "heading": "Portable Power Creates Permanent Risk",
      "sub": "Temporary electrical setups often outlast the planning behind them.",
      "body": "Extension cords, temporary panels, portable lights, power tools, and field heaters are common in outages, construction, cleanup, and maintenance. They are also frequent sources of shock, damaged insulation, overloading, and trip hazards when crews normalize them instead of managing them as energized equipment.",
      "list": [
        "Treat temporary power as a controlled system, not a convenience.",
        "Inspect before every use.",
        "Remove damaged gear from service immediately."
      ]
    },
    {
      "heading": "Cords Fail at the Ends First",
      "sub": "Plugs, strain relief, and jacket damage are common failure points.",
      "body": "Cuts, crushed jackets, exposed conductors, improvised tape repairs, missing grounding pins, and overheated connectors are all reasons to remove a cord from service. Workers should never “make do” with field-damaged cord sets just to keep a task moving.",
      "list": [
        "Do not tape over damaged insulation and keep working.",
        "Ground pins and molded ends are part of the safety system.",
        "Protect cords from doors, traffic, sharp edges, and hot surfaces."
      ]
    },
    {
      "heading": "Wet Areas Increase Shock Exposure",
      "sub": "Water and conductive contamination reduce the margin for error.",
      "body": "Temporary power near washdown areas, cooling towers, wastewater basins, rain exposure, or damp floors increases shock risk. GFCI protection, proper equipment rating, and cord management become especially important in these environments.",
      "list": [
        "Assume wet locations change the hazard level.",
        "Use approved protection devices for the application.",
        "Keep connections out of standing water and splash zones."
      ]
    },
    {
      "heading": "Portable Tools Need More Than a Quick Trigger Pull",
      "sub": "Inspection and suitability matter before the tool is energized.",
      "body": "A drill, grinder, saw, light string, or portable fan should be checked for casing damage, switch condition, guard condition, and cord integrity before use. The worker also needs the right source voltage and protection for the environment. Portable electrical hazards often combine with rotating parts and hot work exposures.",
      "list": [
        "Use tools only as designed and rated.",
        "Do not defeat guards or grounding provisions.",
        "Tag out defective tools so they are not reused."
      ]
    },
    {
      "heading": "Housekeeping Is Part of Electrical Safety",
      "sub": "Cord routing and temporary setup control prevent both shock and trip events.",
      "body": "Temporary power should be routed, supported, protected, and removed when no longer needed. Good housekeeping reduces damage, confusion during emergencies, and accidental unplugging or overloads. Temporary systems become more dangerous the longer crews ignore them.",
      "list": [
        "Route cords clear of water, wheels, and sharp steel.",
        "Remove unused temporary drops quickly.",
        "Do not daisy-chain power strips or overload cord sets."
      ],
      "callout": {
        "label": "TAKEAWAY",
        "text": "Temporary power deserves permanent discipline.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "Which cord condition requires removal from service?",
      "choices": [
        "Clean jacket and intact grounding pin",
        "Exposed conductors or missing ground pin",
        "Proper strain relief",
        "Dry plug body"
      ],
      "answer": 1
    },
    {
      "question": "Why do wet areas raise electrical risk?",
      "choices": [
        "They make cords lighter",
        "They can reduce resistance and increase shock exposure",
        "They improve insulation",
        "They eliminate the need for GFCI"
      ],
      "answer": 1
    },
    {
      "question": "A taped repair over damaged cord insulation is acceptable for the rest of the shift.",
      "choices": [
        "True",
        "False"
      ],
      "answer": 1
    },
    {
      "question": "What is a common temporary power mistake?",
      "choices": [
        "Inspecting before use",
        "Routing cords away from traffic",
        "Daisy-chaining overloaded power strips",
        "Removing unused drops"
      ],
      "answer": 2
    },
    {
      "question": "Portable tools should be checked for:",
      "choices": [
        "Only trigger feel",
        "Cord, guard, casing, and switch condition",
        "Only paint color",
        "Only tool weight"
      ],
      "answer": 1
    }
  ]
},
{
  "path": "/motor-vfd-disconnect-isolation",
  "label": "Motor, VFD & Disconnect Isolation",
  "short": "Isolating drives, motors, starters, and disconnects without leaving hidden energy behind",
  "icon": "⚙️",
  "color": "#00BFFF",
  "regulation": "Electrical isolation and stored-energy awareness for drives and motor systems",
  "audience": "Electricians, millwrights, mechanics, maintenance technicians, and control-system personnel",
  "minutes": 17,
  "slides": [
    {
      "heading": "Drives and Motors Combine Multiple Hazard Types",
      "sub": "Mechanical motion and electrical energy often remain linked during service work.",
      "body": "Motor circuits can include line voltage, control voltage, stored energy in drive capacitors, rotating inertia, and remote start commands. A worker servicing the motor end may still be exposed to hazards from the drive end or control system if the isolation plan is incomplete.",
      "list": [
        "Include power, control, and automatic restart functions in the plan.",
        "Do not assume motor work is mechanical-only.",
        "Coordinate electrical and mechanical isolation together."
      ]
    },
    {
      "heading": "Disconnect Open Does Not Always Mean Drive Safe",
      "sub": "VFDs and soft starters can hold dangerous charge after supply isolation.",
      "body": "Many drives contain DC bus capacitors that remain energized for a period after the line disconnect is opened. Manufacturer instructions, discharge times, and absence-of-voltage verification are mandatory before contact. Control circuits or separate supplies may also remain live.",
      "list": [
        "Observe posted wait times before opening the drive.",
        "Verify the actual DC bus condition where the procedure requires it.",
        "Include externally supplied controls and feedback devices."
      ]
    },
    {
      "heading": "Motor Ends Can Restart from Remote Logic",
      "sub": "Unexpected motion may come from automation or interlocks, not the local operator.",
      "body": "Remote PLC commands, auto-restart settings, process permissives, and reset from another location can re-energize a motor system unexpectedly if isolation is not complete. Lockout has to cover the actual start path, not just the closest disconnect in sight.",
      "list": [
        "Trace who can command the equipment to run.",
        "Disable automatic restart features where applicable.",
        "Verify zero-energy state at the point of exposure."
      ]
    },
    {
      "heading": "Mechanical Stored Energy Still Counts",
      "sub": "Electrical isolation does not remove every motion hazard.",
      "body": "Fans, pumps, conveyors, rollers, gates, and suspended loads may continue moving or may move under gravity or pressure after electrical isolation. The safest job coordinates electrical LOTO with blocking, bleed-off, or other mechanical controls so the system cannot move unexpectedly.",
      "list": [
        "Wait for rotation to stop and verify it cannot restart.",
        "Block or secure moving members when needed.",
        "Include hydraulic and pneumatic tie-ins in the work plan."
      ]
    },
    {
      "heading": "Restoration Requires the Same Discipline as Isolation",
      "sub": "Re-energizing a drive or motor system can injure people if accountability fails.",
      "body": "Before restoration, tools must be removed, guards replaced, personnel accounted for, and the start path confirmed. The first restart should be deliberate and controlled. Problems often happen when crews rush the handoff back to operations.",
      "list": [
        "Verify clear status on both the motor and drive side.",
        "Announce restart and restore in the approved order.",
        "Treat unexplained trip or alarm activity as a stop-and-check event."
      ],
      "callout": {
        "label": "RULE",
        "text": "Motor work is complete only when both electrical and motion hazards are controlled.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "What hazard may remain after opening a VFD disconnect?",
      "choices": [
        "Only low lighting",
        "Stored charge in the DC bus",
        "No hazard remains",
        "Only room temperature rise"
      ],
      "answer": 1
    },
    {
      "question": "Why is remote start logic important during isolation?",
      "choices": [
        "It can provide unexpected restart paths",
        "It improves grounding",
        "It lowers incident energy",
        "It replaces lockout"
      ],
      "answer": 0
    },
    {
      "question": "Which statement is correct?",
      "choices": [
        "Motor work is always mechanical work",
        "Electrical isolation alone removes all hazards",
        "Motor systems can retain electrical and motion hazards together",
        "Only high-voltage motors require verification"
      ],
      "answer": 2
    },
    {
      "question": "What should happen before restart?",
      "choices": [
        "Tools may remain in place if the area is quiet",
        "Personnel accountability and guard restoration must be confirmed",
        "Only the electrician needs to know",
        "Restart should be automatic"
      ],
      "answer": 1
    },
    {
      "question": "A posted drive discharge wait time should be:",
      "choices": [
        "Ignored if the disconnect is open",
        "Observed as part of the safe work procedure",
        "Cut in half for urgent work",
        "Replaced with a visual guess"
      ],
      "answer": 1
    }
  ]
},
{
  "path": "/battery-rooms-dc-hazards",
  "label": "Battery Rooms & DC Hazards",
  "short": "DC shock, short-circuit energy, charging gas, and chemical exposure awareness",
  "icon": "🔋",
  "color": "#00BFFF",
  "regulation": "Battery-system electrical and chemical hazard awareness",
  "audience": "Electricians, maintenance, facilities teams, UPS technicians, and anyone working around stationary battery systems",
  "minutes": 15,
  "slides": [
    {
      "heading": "DC Systems Behave Differently from AC Systems",
      "sub": "Familiar AC assumptions can lead workers into DC-specific mistakes.",
      "body": "Battery banks, UPS systems, and charger cabinets can deliver high fault current, sustained arcing, and chemical exposure even when the load side appears simple. DC shock and short-circuit energy deserve the same seriousness as AC work, but the behavior of the arc and the battery system can feel different to workers who are used to building power only.",
      "list": [
        "Battery systems can remain available during utility outages.",
        "DC faults may sustain differently than AC faults.",
        "Small tools can become arc sources if they bridge terminals."
      ]
    },
    {
      "heading": "Charging and Venting Create Secondary Hazards",
      "sub": "Battery rooms involve more than electrical contact.",
      "body": "Depending on battery type and charging condition, hydrogen generation, electrolyte exposure, and ventilation needs become part of the hazard assessment. A worker who ignores room ventilation, ignition sources, or spill response is not controlling the full battery-room risk.",
      "list": [
        "Respect posted ventilation and ignition-control rules.",
        "Know the electrolyte and eyewash response requirements.",
        "Report damaged, swollen, leaking, or overheated cells immediately."
      ]
    },
    {
      "heading": "Short-Circuit Risk Is Immediate and Violent",
      "sub": "Metal jewelry and tools can become fault paths in an instant.",
      "body": "A dropped wrench or conductive watchband across battery terminals can create intense heat, molten metal, and burn injury. Insulated tools, removed jewelry, and controlled hand placement are critical. Workers should plan their movement before entering tight battery racks or cabinets.",
      "list": [
        "Remove rings, watches, necklaces, and other conductive items.",
        "Use insulated tools where required.",
        "Keep covers and terminal shields in place unless the task requires removal."
      ]
    },
    {
      "heading": "Isolation and Verification Still Matter",
      "sub": "Battery-backed systems may remain live when utility-fed systems are down.",
      "body": "UPS outputs, battery strings, and charger circuits can energize downstream equipment unexpectedly. Isolation plans must include the DC source and any bypass path. Verification should match the circuit you may contact, not only the source you believe is active.",
      "list": [
        "Include battery disconnects and bypass arrangements in the plan.",
        "Do not assume “power outage” means “dead system.”",
        "Coordinate chemical and electrical emergency response together."
      ]
    },
    {
      "heading": "Good Housekeeping Prevents Bad Battery Events",
      "sub": "Storage, access control, and cleanliness are part of safe operation.",
      "body": "Battery rooms should stay clean, ventilated, clearly marked, and free from unnecessary combustibles. Obstructed egress, poor signage, and cluttered racks slow emergency response and increase the consequence of a fault or leak.",
      "list": [
        "Keep aisles, eyewash access, and exits clear.",
        "Label battery hazards clearly.",
        "Treat unusual odor, heat, or swelling as an urgent condition."
      ],
      "callout": {
        "label": "TAKEAWAY",
        "text": "Battery systems combine electrical fault energy with gas and chemical hazards.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "What is a major battery-room hazard besides shock?",
      "choices": [
        "Hydrogen generation and chemical exposure",
        "Only low light",
        "Reduced fault current",
        "Automatic de-energization"
      ],
      "answer": 0
    },
    {
      "question": "Why should conductive jewelry be removed around battery systems?",
      "choices": [
        "It interferes with ventilation",
        "It can bridge terminals and cause a short circuit",
        "It lowers battery voltage",
        "It is required only for appearance"
      ],
      "answer": 1
    },
    {
      "question": "A power outage guarantees battery-backed equipment is de-energized.",
      "choices": [
        "True",
        "False"
      ],
      "answer": 1
    },
    {
      "question": "Which tool practice is correct in battery work?",
      "choices": [
        "Use any metal tool available",
        "Use insulated tools where required",
        "Keep all terminal covers removed",
        "Brace tools across multiple terminals"
      ],
      "answer": 1
    },
    {
      "question": "What should be done if a battery is leaking or swelling?",
      "choices": [
        "Ignore it unless the system trips",
        "Report and control it immediately",
        "Add water and keep working",
        "Cover it with cardboard"
      ],
      "answer": 1
    }
  ]
},
{
  "path": "/qualified-vs-unqualified-boundaries",
  "label": "Qualified vs Unqualified Person Boundaries",
  "short": "Who may cross the boundary, who may observe, and who must stay out",
  "icon": "🚧",
  "color": "#00BFFF",
  "regulation": "NFPA 70E worker qualification and approach boundary awareness",
  "audience": "Supervisors, operators, contractors, escorts, and all personnel working near electrical tasks",
  "minutes": 14,
  "slides": [
    {
      "heading": "Training Level Changes What a Worker May Do",
      "sub": "Being experienced around equipment is not the same as being qualified for the task.",
      "body": "A qualified person has demonstrated skills and knowledge related to the construction and operation of the equipment and has training to identify and avoid the electrical hazards involved. Unqualified persons may work nearby in some cases, but they cannot be allowed to drift into tasks or spaces that require electrical qualification.",
      "list": [
        "Role clarity matters before the work starts.",
        "Supervisors should not assume familiarity equals qualification.",
        "Visitors and operators need boundary control too."
      ]
    },
    {
      "heading": "Boundaries Are Active Controls",
      "sub": "Tape, doors, barricades, and escorts are part of the work plan.",
      "body": "Approach limits and restricted work areas protect both the people doing the task and everyone nearby. If unqualified persons must pass through the area for operational reasons, the work plan needs active control measures. Passive hope is not a boundary.",
      "list": [
        "Use barricades, attendants, or controlled access when needed.",
        "Reposition staging and traffic routes before starting work.",
        "Pause the task if the boundary cannot be maintained."
      ]
    },
    {
      "heading": "Observation Does Not Equal Participation",
      "sub": "People often step too close because they think they are only watching.",
      "body": "Unqualified observers, trainees, operators, and supervisors can still be harmed by arc flash or shock exposure. Watching a task does not make a person protected. The job briefing should establish who is needed inside the area and who should remain outside.",
      "list": [
        "Keep unnecessary personnel out of the task area.",
        "Do not let schedules or curiosity override the boundary.",
        "Escorts should understand the hazard, not just the destination."
      ]
    },
    {
      "heading": "Contractors Must Follow the Same Boundary Rules",
      "sub": "Outside labor is not exempt from qualification requirements.",
      "body": "Shutdowns, outages, and projects often bring mixed crews together. The host site and contractor employer must coordinate who is qualified for what work and who controls the boundary. Confusion between organizations is a common failure mode.",
      "list": [
        "Verify qualification, scope, and host-site expectations before work.",
        "Do not assume contractor status equals electrical qualification.",
        "Use one controlled plan for mixed crews."
      ]
    },
    {
      "heading": "The Boundary Must Hold Until the Task Is Over",
      "sub": "People tend to relax too early once the hard part seems finished.",
      "body": "Electrical work areas must stay controlled until covers are restored, the task is complete, and the exposure is removed. Workers often drift in during cleanup or reassembly, exactly when attention is dropping. The safe finish is part of the job, not an afterthought.",
      "list": [
        "Maintain control through reassembly and restoration.",
        "Release the area deliberately, not casually.",
        "Treat changing crowding or access pressure as a stop-and-reset trigger."
      ],
      "callout": {
        "label": "RULE",
        "text": "Only qualified people cross the boundary for the task, and only for as long as the task requires.",
        "color": "#00BFFF"
      }
    }
  ],
  "quiz": [
    {
      "question": "What best defines a qualified person in electrical work?",
      "choices": [
        "Anyone with years in the plant",
        "Anyone wearing PPE",
        "A person trained and demonstrated competent for the equipment and hazards involved",
        "Any contractor"
      ],
      "answer": 2
    },
    {
      "question": "Why are boundaries important for unqualified persons?",
      "choices": [
        "They make work slower",
        "They prevent accidental exposure to electrical hazards",
        "They are only decorative",
        "They replace training"
      ],
      "answer": 1
    },
    {
      "question": "An operator may step inside the work area to watch as long as they do not touch anything.",
      "choices": [
        "True",
        "False"
      ],
      "answer": 1
    },
    {
      "question": "What is a common mixed-crew failure mode?",
      "choices": [
        "Too much documentation",
        "Unclear qualification and boundary control between organizations",
        "Too many insulated tools",
        "Too much lighting"
      ],
      "answer": 1
    },
    {
      "question": "When can the boundary be released?",
      "choices": [
        "As soon as the main repair is done",
        "Only after the exposure is removed and the task is complete",
        "Whenever the supervisor leaves",
        "After the first test reading"
      ],
      "answer": 1
    }
  ]
}
]

function makeModuleComponent(module) {
  return function ElectricalSafetyModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const ShockArcFlashBlastTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[0])
export const ElectricallySafeWorkConditionTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[1])
export const TestBeforeTouchTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[2])
export const MCCSwitchgearPanelAccessTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[3])
export const TemporaryPowerCordsPortablesTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[4])
export const MotorVFDDisconnectIsolationTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[5])
export const BatteryRoomsDCHazardsTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[6])
export const QualifiedUnqualifiedBoundariesTraining = makeModuleComponent(ELECTRICAL_SAFETY_PHASE1_MODULES[7])
