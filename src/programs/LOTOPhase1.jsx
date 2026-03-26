import TrainingModuleShell from './TrainingModuleShell.jsx'

export const LOTO_PHASE1_MODULES = [
  {
    "path": "/loto-fundamentals-isolation-boundaries",
    "label": "LOTO Fundamentals & Isolation Boundaries",
    "short": "Identifying machines, energy sources, and where the isolation boundary actually begins and ends",
    "icon": "🔒",
    "color": "#FF6B00",
    "regulation": "OSHA 29 CFR 1910.147 — hazardous energy control fundamentals",
    "audience": "Maintenance, electricians, operators, supervisors, contractors, and line leaders",
    "minutes": 16,
    "slides": [
      {
        "heading": "LOTO Starts With the Isolation Boundary",
        "sub": "The machine is not the boundary. The hazardous energy sources are.",
        "body": "A correct lockout begins by defining every source of hazardous energy that can reach the job. Electrical feeds, hydraulic pressure, pneumatic supply, gravity loads, springs, steam, gas, and thermal energy can all cross the work area. The isolation boundary must include the points that stop energy from reaching the task.",
        "list": [
          "Identify the equipment being serviced and every connected energy source.",
          "Trace utilities, secondary feeds, and stored-energy devices beyond the immediate machine frame.",
          "Document where the worker is protected and where uncontrolled energy could still re-enter the job."
        ],
        "callout": {
          "label": "RULE",
          "text": "If energy can still reach the work, the isolation boundary is not complete.",
          "color": "#FF6B00"
        }
      },
      {
        "heading": "Hazardous Energy Is More Than Electricity",
        "sub": "Workers get hurt when they only lock out the obvious source.",
        "body": "Electrical disconnects matter, but pressure, motion, elevated parts, counterweights, flywheels, residual heat, and line contents also have to be controlled. One machine can contain multiple energy forms, and each one needs an isolation method that matches the hazard.",
        "list": [
          "Look for primary energy, control energy, and stored or residual energy.",
          "Review prints, P&IDs, manuals, and previous lockout procedures when available.",
          "Treat unknown systems as energized until proven otherwise."
        ]
      },
      {
        "heading": "Prepare, Notify, Shut Down, Isolate",
        "sub": "The sequence matters because people and equipment are connected.",
        "body": "Before the first lock goes on, the job must be planned. Affected employees need notice, equipment has to be shut down in an orderly way, and the correct isolation devices have to be located and operated. Skipping preparation leads to rushed or incomplete lockouts.",
        "list": [
          "Notify operators, nearby workers, and supervision before shutdown.",
          "Use normal stopping procedures before operating disconnects or valves unless emergency conditions require otherwise.",
          "Match the shutdown sequence to the actual process so equipment does not create a secondary hazard."
        ]
      },
      {
        "heading": "Documentation Prevents Memory-Based Lockout",
        "sub": "A repeat job can still fail if people work from habit.",
        "body": "Complex systems need a written procedure or equivalent documented method that identifies the equipment, hazards, shutdown order, isolation devices, stored-energy steps, and verification expectations. Good documentation makes the lockout repeatable across shifts and crews.",
        "list": [
          "Name the asset or system clearly.",
          "List all disconnects, valves, blocks, blanks, drains, and vent points.",
          "State the zero-energy verification method before work begins."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What defines the true lockout boundary?",
        "choices": [
          "All energy sources that can reach the job",
          "Only the operator panel",
          "Only the main electrical disconnect",
          "The machine frame"
        ],
        "answer": 0
      },
      {
        "question": "Which statement is correct?",
        "choices": [
          "Pressure, gravity, and heat can be hazardous energy",
          "Only electrical energy requires lockout",
          "Control circuits remove all hazards by themselves",
          "Stored energy does not matter after shutdown"
        ],
        "answer": 0
      },
      {
        "question": "What should happen before shutdown?",
        "choices": [
          "Affected employees should be notified",
          "Locks should be applied without notice",
          "Verification should be skipped on routine jobs",
          "The machine should be restarted once to confirm"
        ],
        "answer": 0
      },
      {
        "question": "Why is written documentation important?",
        "choices": [
          "It makes the lockout repeatable and complete",
          "It replaces verification testing",
          "It eliminates the need for training",
          "It is only for incident investigations"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Control every energy path into the work area",
          "Lock one disconnect and begin immediately",
          "Treat process lines as safe if the motor is off",
          "Use memory instead of procedure on familiar jobs"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-authorized-vs-affected-employees",
    "label": "Authorized vs Affected Employees",
    "short": "Knowing who applies locks, who must stay clear, and who needs notice before restart",
    "icon": "👷",
    "color": "#FF7A1A",
    "regulation": "OSHA 29 CFR 1910.147 — employee role definition and training scope",
    "audience": "Operators, maintenance, contractors, leads, temporary workers, and supervisors",
    "minutes": 14,
    "slides": [
      {
        "heading": "Authorized and Affected Are Different Roles",
        "sub": "The difference changes what the worker is allowed to do.",
        "body": "Authorized employees isolate and lock out equipment to perform servicing. Affected employees operate or use the equipment, work in the area, or are impacted by shutdown and restart. They still need training, but they do not remove another person’s lock or improvise lockout steps.",
        "list": [
          "Authorized employees perform isolation and verification activities.",
          "Affected employees recognize lockout devices and respect equipment status.",
          "Supervision must ensure role confusion does not creep into the job."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Do not let unqualified or affected workers remove barriers, reposition valves, or energize equipment because the job 'looks finished.'",
          "color": "#FF3300"
        }
      },
      {
        "heading": "Role Clarity Prevents Informal Workarounds",
        "sub": "Most lockout breakdowns start with assumptions between crews.",
        "body": "During production pressure, people may assume maintenance has finished or believe a quick jog is harmless. Clear role assignment prevents operators, helpers, or neighboring crews from interfering with a protected job. It also supports contractor coordination when multiple employers are present.",
        "list": [
          "Assign one person to coordinate communication at the job boundary.",
          "State who is authorized to isolate, verify, test, and restore.",
          "Stop the job when roles are unclear."
        ]
      },
      {
        "heading": "Training Is Different for Each Group",
        "sub": "Everyone needs training, but not the same training.",
        "body": "Authorized workers need detailed instruction on recognizing energy sources, isolation methods, stored-energy control, verification, and restart. Affected workers need to know the purpose of LOTO, how to identify devices, and the prohibition against tampering or restart.",
        "list": [
          "Role-specific training should match the actual equipment people encounter.",
          "Retraining is needed when procedures change or deficiencies appear.",
          "Visitors and temporary labor need clear boundaries even if they never apply a lock."
        ]
      },
      {
        "heading": "Shift Relief and Handoffs Need Named Responsibility",
        "sub": "If nobody owns the transfer, everyone assumes someone else does.",
        "body": "Role assignment must survive shift change, contractor swap, and supervisor turnover. Workers need to know exactly who controls the active lockout, who is entering or leaving the job, and who is responsible for final release. Informal verbal handoff is not enough on higher-risk jobs.",
        "list": [
          "Use a positive transfer process for lock ownership.",
          "Confirm the incoming worker understands the hazard status before the outgoing worker departs.",
          "Document group lock and multi-shift changes."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Who applies lockout devices to perform servicing?",
        "choices": [
          "Authorized employees",
          "Affected employees",
          "Visitors",
          "Only managers"
        ],
        "answer": 0
      },
      {
        "question": "What should affected employees understand?",
        "choices": [
          "The purpose of lockout and that they must not tamper or restart",
          "How to remove another person's lock if production is waiting",
          "That tags are optional if equipment seems off",
          "That only electricians need to know about LOTO"
        ],
        "answer": 0
      },
      {
        "question": "What is a common cause of lockout failure?",
        "choices": [
          "Role confusion between crews",
          "Too much documentation",
          "Too much notice before shutdown",
          "Using more than one lock"
        ],
        "answer": 0
      },
      {
        "question": "What should happen if role assignment is unclear?",
        "choices": [
          "Stop and clarify before continuing",
          "Let the most experienced operator decide alone",
          "Proceed if the machine appears de-energized",
          "Skip the lockout and work carefully"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Everyone has a role, but not everyone has lock authority",
          "Affected employees should remove locks during restart",
          "Role training is optional on repeat jobs",
          "Shift change eliminates previous lock responsibilities"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-zero-energy-verification",
    "label": "Zero-Energy Verification",
    "short": "Proving the machine is actually de-energized instead of assuming shutdown equals safe",
    "icon": "✅",
    "color": "#FF8C2A",
    "regulation": "OSHA 29 CFR 1910.147 — verification of isolation before servicing",
    "audience": "Authorized employees, electricians, mechanics, troubleshooting teams, contractors",
    "minutes": 17,
    "slides": [
      {
        "heading": "Shutdown Is Not Verification",
        "sub": "A stopped machine can still be dangerous.",
        "body": "Verification is the deliberate act of proving that energy has been isolated and residual hazards have been controlled. Equipment can look dead while still retaining pressure, electrical charge, suspended loads, trapped line contents, or stored motion. Zero-energy status has to be confirmed before hands enter the danger zone.",
        "list": [
          "Use the procedure’s verification step every time.",
          "Verify the actual hazard, not just the motor status light.",
          "Treat indicators and HMIs as supplemental, not proof by themselves."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Zero energy is proven, not assumed.",
          "color": "#FFD100"
        }
      },
      {
        "heading": "Try, Test, and Observe",
        "sub": "Verification often requires more than one method.",
        "body": "Depending on the equipment, verification may include trying the start control, testing circuits with the right meter, observing pressure decay, opening drains or vents, checking for motion, or confirming blocks and pins are carrying the load. Each energy form needs a suitable confirmation method.",
        "list": [
          "Return controls to neutral after any try-start attempt.",
          "Use test instruments correctly and verify the meter on a known source when required.",
          "Do not place body parts in the hazard zone while proving zero energy."
        ]
      },
      {
        "heading": "Residual and Reaccumulating Energy Matter",
        "sub": "Systems can regain hazard after the first check.",
        "body": "Accumulator pressure, line refill, thermal expansion, gravity movement, capacitor recharge, and trapped process material can cause hazardous energy to reappear. Some jobs need repeated verification during the work, especially when the system is opened, manipulated, or left idle.",
        "list": [
          "Bleed, vent, drain, block, pin, discharge, or secure the system as required.",
          "Monitor the job for pressure return, temperature change, or shifting load.",
          "Re-verify after any condition that could change hazard status."
        ]
      },
      {
        "heading": "Verification Must Match the Task",
        "sub": "The work determines how much proof is enough.",
        "body": "Basic cleaning at a guarded boundary is not the same as entering a vessel, breaking a line, or removing guards near moving parts. The verification method has to be appropriate for the severity and complexity of the exposure. High-risk tasks require disciplined, documented proof.",
        "list": [
          "Match the verification method to the equipment and exposure.",
          "Escalate when the system condition is unclear or instrumentation is unreliable.",
          "Never skip verification because the equipment 'has been off all day.'"
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is verification?",
        "choices": [
          "Proving energy is isolated and residual hazards are controlled",
          "Seeing that the machine is not moving",
          "Reading an HMI screen and trusting it",
          "Locking one disconnect and starting work"
        ],
        "answer": 0
      },
      {
        "question": "What can make a stopped machine still dangerous?",
        "choices": [
          "Stored pressure, charge, or suspended load",
          "A clean floor",
          "A closed work order",
          "A completed pre-job meeting"
        ],
        "answer": 0
      },
      {
        "question": "What should happen after a try-start test?",
        "choices": [
          "Controls should be returned to neutral or off",
          "The machine should be left in start position",
          "Tags can be removed",
          "Affected employees should clear the area permanently"
        ],
        "answer": 0
      },
      {
        "question": "Why might re-verification be needed?",
        "choices": [
          "Energy can reaccumulate during the job",
          "Once checked, hazard never changes",
          "Meters eliminate all uncertainty forever",
          "Re-verification is only for electrical work"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Never confuse shutdown with zero energy",
          "Indicators are always enough by themselves",
          "Residual pressure is harmless after lockout",
          "If the job is routine, verification can be skipped"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-group-lockout-shift-change",
    "label": "Group Lockout, Shift Change & Transfer of Control",
    "short": "Maintaining lock ownership and hazard control when more than one worker or shift is involved",
    "icon": "🔐",
    "color": "#FF9638",
    "regulation": "OSHA 29 CFR 1910.147 — group lockout and transfer-of-control expectations",
    "audience": "Maintenance teams, electricians, supervisors, contractors, turnaround crews",
    "minutes": 16,
    "slides": [
      {
        "heading": "Group Lockout Needs One Clear Coordination Method",
        "sub": "Complex jobs fail when ownership becomes vague.",
        "body": "When more than one worker is exposed, the lockout method must protect every person individually while maintaining an overall job coordinator or responsible lead. Group lock boxes, primary isolation locks, sign-on boards, and documented turnover procedures are common controls. The system must show exactly who is protected and who still has exposure.",
        "list": [
          "Every exposed worker needs personal protection through the group method.",
          "The responsible coordinator manages status, but does not replace individual accountability.",
          "Lock box contents and isolation status should be visible and auditable."
        ]
      },
      {
        "heading": "Shift Change Is a Hazard Event",
        "sub": "Protection can be lost during handoff even when the equipment never changes.",
        "body": "Outgoing and incoming workers must positively transfer lock ownership before anyone leaves the job. A shift relief that happens by assumption or text message can leave the equipment locked without a protected worker or, worse, expose the incoming worker without confirmed isolation.",
        "list": [
          "Incoming personnel should review the active isolation and work status.",
          "Outgoing personnel should not remove their protection until the transfer is complete.",
          "Supervisors should verify that the handoff was executed, not just announced."
        ],
        "callout": {
          "label": "RULE",
          "text": "No worker should be exposed during a handoff gap.",
          "color": "#FF6B00"
        }
      },
      {
        "heading": "Multiple Employers Need One Coordinated Plan",
        "sub": "Contractors and host employees must understand the same protection boundary.",
        "body": "Turnarounds, outages, and major repairs often involve several contractors plus host maintenance and operations. The lockout method must define who controls the isolation, how workers sign into exposure, how status is communicated, and who authorizes restart. Separate crews cannot run independent assumptions on the same system.",
        "list": [
          "Align contractor and host procedures before the job starts.",
          "Use one agreed status communication method at the worksite.",
          "Escalate immediately when the contractor method and host method conflict."
        ]
      },
      {
        "heading": "Documentation Matters Most When the Job Gets Large",
        "sub": "Complexity amplifies small communication failures.",
        "body": "As the number of workers, shifts, and systems grows, written documentation becomes the backbone of group lockout. Job boards, permit logs, sign-on rosters, and turnover notes help crews understand which systems are locked, who is exposed, and what remains before restart.",
        "list": [
          "Document change in shift, scope, or responsible person.",
          "Verify actual worker status before releasing any group protection.",
          "Treat missing documentation as an active hazard, not paperwork only."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What must a group lockout still provide?",
        "choices": [
          "Individual protection for each exposed worker",
          "Only one lock for the whole plant",
          "A way to skip verification",
          "A shortcut around written procedures"
        ],
        "answer": 0
      },
      {
        "question": "Why is shift change high risk?",
        "choices": [
          "Protection can be lost during handoff",
          "All machines automatically restart",
          "Operators gain lock authority",
          "The procedure no longer applies"
        ],
        "answer": 0
      },
      {
        "question": "When should an outgoing worker remove personal protection?",
        "choices": [
          "Only after the transfer is complete",
          "As soon as the next shift enters the building",
          "When the supervisor sends a text",
          "Before the incoming worker reviews the job"
        ],
        "answer": 0
      },
      {
        "question": "What is essential on multi-employer jobs?",
        "choices": [
          "One coordinated protection and communication plan",
          "Separate uncoordinated lockout methods",
          "Verbal assumptions between crews",
          "Restart by whichever crew finishes first"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Ownership and transfer of control must be visible and deliberate",
          "Group lockout removes the need for personal accountability",
          "Shift changes are administrative only",
          "Documentation is optional if the crew is experienced"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-cord-plug-minor-servicing-limits",
    "label": "Cord-and-Plug, Minor Servicing & Exception Limits",
    "short": "Understanding when limited exceptions apply and when full lockout still controls the job",
    "icon": "🔌",
    "color": "#FFA54A",
    "regulation": "OSHA 29 CFR 1910.147 — limited exceptions and servicing boundaries",
    "audience": "Operators, maintenance, electricians, setup staff, sanitation teams, supervisors",
    "minutes": 15,
    "slides": [
      {
        "heading": "Exceptions Are Narrow, Not General Permission",
        "sub": "People get hurt when exceptions become habits.",
        "body": "Cord-and-plug control and certain minor servicing exceptions are limited cases, not a broad replacement for lockout. The worker must maintain exclusive control of the plug, or the task must meet the exact criteria for routine, repetitive, integral minor servicing with effective alternative protection. If the task exposes a worker to hazardous motion or stored energy, full LOTO usually applies.",
        "list": [
          "Read the task against the exception criteria, not convenience.",
          "Stored energy can eliminate the exception even when a plug exists.",
          "If guards come off or body parts enter danger zones, reassess immediately."
        ]
      },
      {
        "heading": "Exclusive Control Means Personal Control",
        "sub": "If someone else can reconnect it, the exception fails.",
        "body": "For cord-and-plug equipment, the plug has to be under the exclusive control of the worker performing the task. If the plug is out of sight, unsecured, or available to someone else, that condition does not provide adequate protection. The answer may be a plug lockout device or full upstream isolation depending on the system.",
        "list": [
          "Keep the disconnect means within control and visibility.",
          "Do not rely on verbal warning alone.",
          "Use a lockable device when control of the plug cannot be guaranteed."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Do not leave a plug disconnected around the corner and assume nobody will reconnect it.",
          "color": "#FF3300"
        }
      },
      {
        "heading": "Minor Servicing Has Strict Conditions",
        "sub": "Routine does not automatically mean exempt.",
        "body": "The exception for minor tool changes or adjustments only applies when the activity is routine, repetitive, integral to production, and protected by alternative measures that provide effective employee safety. If the task becomes troubleshooting, clearing jams, entering a hazard zone, or exposing stored energy, full LOTO is the safer path.",
        "list": [
          "Challenge the phrase 'we always do it this way.'",
          "Alternative measures must provide equivalent protection, not just speed.",
          "Escalate to full lockout whenever the conditions no longer match the exception."
        ]
      },
      {
        "heading": "The Burden of Proof Is on Safety, Not Speed",
        "sub": "If the exception is debatable, use full lockout.",
        "body": "The safest practice is to require the exception to be clearly justified, documented if needed, and understood by supervision and the worker. Gray areas are warning signs. A few extra minutes of full lockout cost less than a hand injury, amputation, or fatality caused by an assumed exception.",
        "list": [
          "Use formal lockout when the task or exposure is uncertain.",
          "Train operators and setup staff on where the exception ends.",
          "Review near misses involving jogging, clearing, and setup work."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is true about LOTO exceptions?",
        "choices": [
          "They are narrow and must fit the actual conditions",
          "They allow most servicing without lockout",
          "They apply whenever the machine is familiar",
          "They remove the need for training"
        ],
        "answer": 0
      },
      {
        "question": "When does cord-and-plug control work?",
        "choices": [
          "When the worker has exclusive control of the plug",
          "When the plug is somewhere nearby",
          "When an operator promises not to reconnect it",
          "When the cord is unplugged but out of sight"
        ],
        "answer": 0
      },
      {
        "question": "What can cancel a minor-servicing exception?",
        "choices": [
          "Exposure to hazardous motion or stored energy",
          "A routine production schedule",
          "A short job duration",
          "A clean work area"
        ],
        "answer": 0
      },
      {
        "question": "What should you do if the exception is debatable?",
        "choices": [
          "Use full lockout",
          "Proceed because it saves time",
          "Ask a coworker to watch the machine",
          "Rely on a handwritten note"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Exceptions must be earned by conditions, not assumed by habit",
          "Routine work never needs lockout",
          "A disconnected plug is always enough",
          "Alternative measures can be informal"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-valve-line-bleed-block-isolation",
    "label": "Valve, Line, Bleed & Block Isolation",
    "short": "Controlling fluid, gas, steam, and process-line energy with isolation, venting, draining, and blinds where required",
    "icon": "🧯",
    "color": "#FFAE5C",
    "regulation": "OSHA 29 CFR 1910.147 — process isolation, line control, and stored-pressure release",
    "audience": "Process technicians, wastewater staff, utility crews, mechanics, contractors, and operators",
    "minutes": 17,
    "slides": [
      {
        "heading": "Pipes and Valves Can Kill Even When Motors Are Off",
        "sub": "Line contents, trapped pressure, and backfeed make process work different.",
        "body": "On process systems, hazardous energy often arrives through piping instead of rotating equipment. Shut valves, blinds, blocks, bleeds, drains, and vents must be chosen based on line contents, pressure, temperature, and the consequence of leakage or backflow. Isolation must protect the opening point, not just the nearest operator station.",
        "list": [
          "Identify every path that can feed the line section being opened or serviced.",
          "Consider residual product, thermal expansion, and upstream or downstream pressure.",
          "Use positive isolation methods when the hazard justifies them."
        ],
        "callout": {
          "label": "RULE",
          "text": "A closed valve is not automatically a safe line.",
          "color": "#FF6B00"
        }
      },
      {
        "heading": "Bleed, Vent, Drain, and Prove",
        "sub": "Isolation is not complete until the trapped energy is released or contained.",
        "body": "After blocking the source, the trapped contents need to be relieved in a controlled way. This may mean depressuring to a flare or recovery system, draining to a safe receiver, venting to an approved point, or confirming zero pressure at the actual work location. Hazardous residues can remain even after the gauge reads zero.",
        "list": [
          "Use the site’s approved release path for the material involved.",
          "Control splash, toxic vapor, ignition, and environmental release risks.",
          "Verify pressure and contents at the work point, not only at the isolation point."
        ]
      },
      {
        "heading": "Know When a Single Valve Is Not Enough",
        "sub": "Critical lines may need double block and bleed, blanks, or blinds.",
        "body": "Certain line openings and high-consequence services require more than one valve. Depending on the process and site standard, the safe condition may require double block and bleed, line blanks, spectacle blinds, spool removal, or physical separation. The method should match the hazard severity and the reliability of the isolation device.",
        "list": [
          "Escalate when the contents are flammable, toxic, corrosive, or high-energy.",
          "Do not assume an old or leaking valve will hold under work conditions.",
          "Coordinate with operations before altering system lineup."
        ]
      },
      {
        "heading": "Line Opening Is a Job-Control Event",
        "sub": "Isolation, communication, and PPE all have to work together.",
        "body": "Opening process piping often overlaps with permits, gas testing, chemical controls, hot work restrictions, and confined space concerns. The release path, barricade zone, PPE, communication plan, and emergency action must all be set before the first bolt is loosened or the first connection broken.",
        "list": [
          "Treat the first crack open as the point of highest uncertainty.",
          "Position workers out of the line of fire and splash path.",
          "Stop if the system condition does not match the expected safe state."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is true about process-line isolation?",
        "choices": [
          "A motor being off does not make the piping safe",
          "Lines are safe if the pump is stopped",
          "Only electrical disconnects matter in lockout",
          "Line work is not part of hazardous energy control"
        ],
        "answer": 0
      },
      {
        "question": "What should happen after blocking a line source?",
        "choices": [
          "Trapped energy should be relieved or contained safely",
          "The line should be opened immediately",
          "Verification can be skipped",
          "The crew should rely on upstream gauges only"
        ],
        "answer": 0
      },
      {
        "question": "When might a single valve be insufficient?",
        "choices": [
          "When the service is high consequence and needs stronger isolation",
          "When the job is short",
          "When the line is painted clearly",
          "When the operator is nearby"
        ],
        "answer": 0
      },
      {
        "question": "Where should safe condition be verified?",
        "choices": [
          "At the actual work location",
          "Only in the control room",
          "At the nearest pump motor",
          "At the previous shift's paperwork"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Line isolation requires blocking, relieving, and proving the actual work point",
          "Closed valves always equal zero hazard",
          "Line opening is a simple mechanical task only",
          "Residual contents can be ignored after shutdown"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-stored-energy-release-reaccumulation",
    "label": "Stored Energy Release & Reaccumulation",
    "short": "Handling pressure, springs, gravity, thermal, and other residual energy after the lock goes on",
    "icon": "⚙️",
    "color": "#FFB86A",
    "regulation": "OSHA 29 CFR 1910.147 — residual-energy control after isolation",
    "audience": "Mechanics, electricians, process technicians, riggers, sanitation, and operators",
    "minutes": 16,
    "slides": [
      {
        "heading": "The Lock Stops the Source, Not Always the Hazard",
        "sub": "Residual energy can still injure the worker after isolation.",
        "body": "Hydraulic accumulators, pneumatic receivers, springs, elevated parts, flywheels, thermal mass, capacitor charge, trapped product, and magnetic force can remain hazardous after the isolation device is operated. The job is not safe until that energy is released, restrained, blocked, or otherwise controlled.",
        "list": [
          "List stored-energy sources separately from the primary isolation points.",
          "Use pins, blocks, bleeds, drains, discharge methods, or restraints as required.",
          "Consider whether the hazard can rebuild during the task."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Locking out the source is only one part of controlling hazardous energy.",
          "color": "#FFD100"
        }
      },
      {
        "heading": "Release Has to Be Controlled",
        "sub": "Letting energy go in an uncontrolled way can be the injury event.",
        "body": "Bleeding a line, dropping a load, releasing a spring, or discharging a component must be done with the same planning and PPE discipline as the work itself. The safest method often uses engineered restraint, gradual release, remote position, or secondary protection instead of a quick manual action.",
        "list": [
          "Keep people out of line-of-fire zones during release.",
          "Use tools and methods designed for the energy involved.",
          "Do not assume pressure is harmless because it is 'only residual.'"
        ]
      },
      {
        "heading": "Watch for Reaccumulation",
        "sub": "Energy can return even after the first release.",
        "body": "Thermal expansion, leakage past valves, gravity shift, spring rebound, capacitor recharge, and process refill can recreate hazardous conditions. Long jobs, troubleshooting, and staged disassembly are especially vulnerable. The crew must know when to re-check, re-bleed, or re-secure the system.",
        "list": [
          "Monitor gauges, temperatures, load position, and component state during the job.",
          "Re-verify after pause points, repositioning, or system changes.",
          "Stop when the energy condition behaves unexpectedly."
        ]
      },
      {
        "heading": "Stored Energy Links LOTO to Other Topics",
        "sub": "Electrical, rigging, confined space, and line opening jobs all overlap here.",
        "body": "Many serious injuries occur where lockout and stored energy meet. A line opening can release pressure, a disconnect can leave charge in a drive, a rigging task can shift gravity load, and a vessel entry can involve trapped product or agitator motion. Workers should treat stored energy as part of the lockout plan, not a separate afterthought.",
        "list": [
          "Coordinate with electrical, process, and rigging controls when the job overlaps disciplines.",
          "Use the site procedure to define who controls the residual-energy step.",
          "Document special release or re-secure points in the job plan."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What does the lockout device stop?",
        "choices": [
          "The energy source, but not automatically all residual hazard",
          "Every form of hazard instantly",
          "All stored energy without additional action",
          "Any need for verification"
        ],
        "answer": 0
      },
      {
        "question": "Which is an example of stored energy?",
        "choices": [
          "Accumulator pressure or a suspended load",
          "A completed work order",
          "A painted valve tag",
          "A housekeeping checklist"
        ],
        "answer": 0
      },
      {
        "question": "Why must energy release be controlled?",
        "choices": [
          "The release itself can injure workers",
          "Residual energy is too weak to matter",
          "It only affects paperwork",
          "It is never necessary after isolation"
        ],
        "answer": 0
      },
      {
        "question": "Why might re-checking be needed?",
        "choices": [
          "Energy can reaccumulate during the job",
          "The lock may disappear on its own",
          "Every job requires restart first",
          "Re-checking is only for electrical work"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Control residual and reaccumulating energy as part of lockout",
          "Primary isolation removes all other hazards",
          "Stored energy belongs only in rigging topics",
          "Residual pressure can be ignored on short jobs"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-contractor-multi-employer-coordination",
    "label": "Contractor Coordination & Multi-Employer LOTO",
    "short": "Aligning host and contractor lockout methods so every exposed worker is protected by one coherent plan",
    "icon": "🤝",
    "color": "#FFC67A",
    "regulation": "OSHA 29 CFR 1910.147 — outside personnel coordination and hazardous-energy communication",
    "audience": "Supervisors, host employers, contractors, project managers, outage teams, turnaround leads",
    "minutes": 15,
    "slides": [
      {
        "heading": "Outside Personnel Change the Risk Profile",
        "sub": "Different employers often bring different assumptions.",
        "body": "Contractors may use different device styles, terminology, and authorization structures than the host site. Without alignment, one crew can believe the system is safe while another thinks it is still under active lockout. The host employer and outside employer must communicate their procedures and make the protection method compatible before work starts.",
        "list": [
          "Share the host procedure and the contractor procedure before field work begins.",
          "Resolve differences in lock ownership, verification, and restart authority.",
          "Use one clear boundary for who is exposed and who is protected."
        ]
      },
      {
        "heading": "One Job, One Coherent Protection Plan",
        "sub": "Separate mental models create hidden gaps.",
        "body": "Large outages and projects often involve utilities, process systems, rigging, electrical trades, and specialty vendors at once. The job needs a unified method for sign-on, status communication, verification, turnover, and release. Separate crews cannot each protect the same system with incompatible assumptions.",
        "list": [
          "Define the responsible host contact for the lockout.",
          "Define the contractor point of contact for worker exposure status.",
          "Use a common field status display or lock box method when possible."
        ],
        "callout": {
          "label": "RULE",
          "text": "If host and contractor methods conflict, stop and align them before exposure begins.",
          "color": "#FF6B00"
        }
      },
      {
        "heading": "Restart Authority Must Be Explicit",
        "sub": "No one should guess who can release the system.",
        "body": "At the end of the job, the release path must identify who confirms workers are clear, who verifies guards and tools are restored, who authorizes the removal of group devices, and who communicates restart to affected employees. Restart is often where multi-employer jobs fail because one party assumes another completed the check.",
        "list": [
          "Name the release authority in the job plan.",
          "Require positive confirmation from exposed employers before restart.",
          "Do not energize until all contractor and host protections are resolved."
        ]
      },
      {
        "heading": "Documentation and Orientation Prevent Rework and Injury",
        "sub": "Pre-job clarity reduces field improvisation.",
        "body": "Contractor orientation should explain site lockout rules, device requirements, escalation expectations, and stop-work authority. Documentation should show who is on the job, which systems are isolated, and what remains before release. This improves safety and shortens downtime caused by confusion.",
        "list": [
          "Use onboarding and pre-task planning to establish expectations.",
          "Audit contractor understanding during the job, not only at the gate.",
          "Capture lessons learned from lockout coordination problems."
        ]
      }
    ],
    "quiz": [
      {
        "question": "Why do contractors increase lockout complexity?",
        "choices": [
          "Different procedures and assumptions can create gaps",
          "Their locks always fail",
          "They do not need site orientation",
          "They remove the need for documentation"
        ],
        "answer": 0
      },
      {
        "question": "What should exist before field work starts?",
        "choices": [
          "One coherent protection plan understood by host and contractor",
          "Independent informal methods for each crew",
          "Verbal assumptions only",
          "A restart plan without isolation details"
        ],
        "answer": 0
      },
      {
        "question": "What must be explicit at the end of the job?",
        "choices": [
          "Who has restart and release authority",
          "Which crew is least busy",
          "Which device color looks official",
          "That production pressure overrides lockout"
        ],
        "answer": 0
      },
      {
        "question": "When should conflicting methods be resolved?",
        "choices": [
          "Before worker exposure begins",
          "After the first near miss",
          "During restart",
          "After the project closes"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Multi-employer lockout requires aligned procedures and explicit communication",
          "Contractors can follow their own separate methods on the same system",
          "Restart authority is obvious without planning",
          "Orientation is optional if contractors are experienced"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/loto-restart-return-to-service-checks",
    "label": "Restart, Re-Energization & Return-to-Service Checks",
    "short": "Making sure the system is safe to restore after guards, tools, people, and lock ownership are confirmed clear",
    "icon": "▶️",
    "color": "#FFD08A",
    "regulation": "OSHA 29 CFR 1910.147 — lock removal, employee accountability, and safe restart",
    "audience": "Authorized employees, operators, supervisors, contractors, startup and turnover crews",
    "minutes": 15,
    "slides": [
      {
        "heading": "Restart Is Part of the Lockout Procedure",
        "sub": "Release deserves the same discipline as shutdown.",
        "body": "The final phase of lockout includes inspection, accountability, communication, and controlled re-energization. Workers must verify tools are removed, guards are restored, system integrity is ready, and all exposed people are clear before any device is removed. Restart is not a casual production step; it is a hazard-control step.",
        "list": [
          "Inspect the equipment and work area before removing locks.",
          "Confirm all workers are accounted for and clear of exposure.",
          "Restore components, covers, guards, and restraints required for safe operation."
        ]
      },
      {
        "heading": "Lock Removal Follows Ownership Rules",
        "sub": "A personal lock represents a person's protection status.",
        "body": "As a rule, the employee who applied the lock removes it. Exceptional removal methods require a defined site process because removing someone else's lock is a serious event. The release process has to respect ownership, group lock status, and contractor sign-off requirements.",
        "list": [
          "Verify every person is clear before lock removal.",
          "Follow the site procedure for exceptional lock removal.",
          "Do not collapse the release process because operations are waiting."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never restart because 'everybody is probably out of there.'",
          "color": "#FF3300"
        }
      },
      {
        "heading": "Communication Before Re-Energization Protects Affected Employees",
        "sub": "People near the equipment need warning before energy returns.",
        "body": "Operators, nearby crews, and affected employees must be informed that lockout is ending and that the system is about to be energized. This warning reduces unexpected start-up exposure and helps catch mistakes before power, pressure, or motion returns to the system.",
        "list": [
          "Notify the operator and area personnel before restart.",
          "Use alarms, radios, boards, or direct confirmation as the site requires.",
          "Stop if anyone is uncertain about equipment status."
        ]
      },
      {
        "heading": "Controlled Startup Confirms the System Is Truly Ready",
        "sub": "A safe restart is deliberate, not abrupt.",
        "body": "After lock removal and notification, the initial startup should be performed in a controlled way that confirms expected response and reveals any remaining issue early. Unexpected vibration, leakage, abnormal current, wrong rotation, or personnel confusion are signs to stop and reassess before full return to service.",
        "list": [
          "Watch the equipment closely during the first energization.",
          "Be ready to stop if the system does not behave as expected.",
          "Capture restart issues for procedure improvement and retraining."
        ]
      }
    ],
    "quiz": [
      {
        "question": "What is restart in a lockout procedure?",
        "choices": [
          "A controlled hazard-control step",
          "Only a production issue",
          "Separate from lockout responsibilities",
          "Something operators handle without notice"
        ],
        "answer": 0
      },
      {
        "question": "What should be confirmed before lock removal?",
        "choices": [
          "Tools are removed, guards restored, and workers are clear",
          "Only that the motor is cool",
          "Only that the work order is closed",
          "That the shift is ending"
        ],
        "answer": 0
      },
      {
        "question": "Who normally removes a personal lock?",
        "choices": [
          "The employee who applied it",
          "Any nearby operator",
          "The first supervisor on scene",
          "Any contractor on the job"
        ],
        "answer": 0
      },
      {
        "question": "Why notify affected employees before restart?",
        "choices": [
          "To protect people from unexpected re-energization",
          "To speed up production only",
          "Because notice replaces inspection",
          "So verification can be skipped"
        ],
        "answer": 0
      },
      {
        "question": "What is the main message?",
        "choices": [
          "Return to service must be inspected, communicated, and controlled",
          "Restart should be immediate once work looks done",
          "Exceptional lock removal is routine",
          "Abnormal startup signs can be ignored if the equipment runs"
        ],
        "answer": 0
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function LOTOModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const LOTOFundamentalsIsolationTraining = makeModuleComponent(LOTO_PHASE1_MODULES[0])
export const LOTOAuthorizedAffectedTraining = makeModuleComponent(LOTO_PHASE1_MODULES[1])
export const LOTOZeroEnergyVerificationTraining = makeModuleComponent(LOTO_PHASE1_MODULES[2])
export const LOTOGroupShiftChangeTraining = makeModuleComponent(LOTO_PHASE1_MODULES[3])
export const LOTOCordPlugMinorServicingTraining = makeModuleComponent(LOTO_PHASE1_MODULES[4])
export const LOTOLineValveIsolationTraining = makeModuleComponent(LOTO_PHASE1_MODULES[5])
export const LOTOStoredEnergyReaccumulationTraining = makeModuleComponent(LOTO_PHASE1_MODULES[6])
export const LOTOContractorCoordinationTraining = makeModuleComponent(LOTO_PHASE1_MODULES[7])
export const LOTORestartReturnServiceTraining = makeModuleComponent(LOTO_PHASE1_MODULES[8])
