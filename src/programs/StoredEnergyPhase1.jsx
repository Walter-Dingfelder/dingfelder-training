import TrainingModuleShell from './TrainingModuleShell.jsx'

export const STORED_ENERGY_PHASE1_MODULES = [
  {
    "path": "/hydraulic-stored-energy",
    "label": "Hydraulic Stored Energy Safety",
    "short": "Accumulators, Trapped Pressure, Blocking, and Restart Control",
    "icon": "💧",
    "color": "#00BFFF",
    "regulation": "Stored energy isolation and maintenance protection",
    "audience": "Maintenance technicians, mill crews, utility teams, and equipment mechanics",
    "minutes": 20,
    "slides": [
      {
        "heading": "Stored Energy Still Hurts After the Machine Stops",
        "sub": "Zero motion does not mean zero force.",
        "body": "Hydraulic systems can keep dangerous force trapped in accumulators, cylinders, vertical loads, hose runs, and isolated components long after pumps are shut down. A quiet machine can still drop, shift, eject fluid, or move when a valve is opened or a fitting is disturbed. Treat stored energy as a live hazard until the system has been isolated, relieved, blocked, and verified.",
        "list": [
          "Do not confuse an E-stop, selector switch, or motor disconnect with full energy control.",
          "Assume any raised member, pressurized line, or trapped cylinder can still move.",
          "If the machine can fall, rotate, extend, retract, or eject fluid, it still has injury potential."
        ],
        "callout": {
          "label": "RULE",
          "text": "The job is not safe when the machine is merely off. It is safe only when hazardous energy is controlled and verified.",
          "color": "#00BFFF"
        }
      },
      {
        "heading": "Know Where Hydraulic Energy Hides",
        "sub": "The dangerous part is often not the obvious part.",
        "body": "Stored hydraulic energy can remain in accumulators, pressure-intensified lines, trapped sections between valves, counterbalance circuits, suspended tooling, tilt systems, clamps, and equipment held up against gravity. On campus-scale industrial systems, it often exists alongside electrical, pneumatic, thermal, and gravity hazards. The safest workers identify every place motion or release can originate before loosening a single component.",
        "list": [
          "Look for accumulators, check valves, lock valves, overhead members, and suspended loads.",
          "Trace where pressure can remain trapped even when a pump is off.",
          "Account for combined hazards: hydraulic force plus gravity, stored motion, hot surfaces, or electrical isolation needs."
        ]
      },
      {
        "heading": "Isolation Means Bleed-Off Plus Blocking",
        "sub": "Pressure relief alone is not enough when a load can fall or shift.",
        "body": "A proper stored-energy shutdown sequence usually includes isolating the source, following the approved bleed-down method, securing or pinning any load that could descend, and verifying the system stays at zero-energy state. Never improvise by cracking fittings, backing off hoses, or trusting that someone else already relieved the system. Blocking, cribbing, pins, and mechanical supports are what protect people when pressure loss lets gravity take over.",
        "list": [
          "Use the approved procedure for bleed-off, not an improvised fitting loosen or quick crack.",
          "Install blocks, pins, stands, or cribbing before entering a crush zone under a suspended or elevated member.",
          "Verify gauges, indicators, valve position, and machine response before placing hands in the danger area."
        ],
        "callout": {
          "label": "NEVER DO",
          "text": "Never rely on hydraulic pressure alone to hold something up while people work beneath or between moving members.",
          "color": "#FF6B00"
        }
      },
      {
        "heading": "Line Opening Can Become a Medical Emergency Fast",
        "sub": "Hydraulic injection injuries can appear small and still destroy tissue.",
        "body": "Hoses, test ports, valves, cylinders, and manifolds can release fluid with enough force to penetrate skin, whip components, or move hardware unexpectedly. The correct approach is to confirm zero-energy state first, stand out of the release path, use the right tools, and keep exposed skin away from any suspected leak point. Injection injuries are not wait and see events. They require immediate medical evaluation even when the wound looks minor.",
        "list": [
          "Never use your hand or fingers to check for a leak.",
          "Keep your face and body out of direct line with fittings, hose ends, and vent points.",
          "Any suspected injection injury gets immediate escalation and medical treatment."
        ]
      },
      {
        "heading": "Verification and Restart Discipline Prevent Surprise Motion",
        "sub": "Most serious mistakes happen during the transition into or out of maintenance.",
        "body": "Machines with stored hydraulic energy often injure people when one source was missed, a block was removed too early, or restoration started before the area was clear. Verification must happen before hands enter the hazard zone, and restart must not begin until everyone is accounted for, all tools are clear, temporary restraints are properly removed, and the responsible person authorizes motion.",
        "list": [
          "Re-check zero-energy state after each step that changes the system.",
          "Remove temporary blocks and pins only under the release sequence.",
          "Before restart, verify all personnel are clear and everyone understands who owns the test."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Hydraulic stored energy control means isolate, bleed, block, verify, then restore in a controlled sequence.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Does shutting off electrical power make a hydraulic system safe to open?",
        "options": [
          "Always",
          "Only if the machine is small",
          "Not necessarily; stored pressure may remain",
          "Yes if a supervisor is nearby"
        ],
        "answer": 2
      },
      {
        "q": "What extra control is needed when a hydraulic member could fall?",
        "options": [
          "A warning sign only",
          "Blocking, cribbing, pins, or another mechanical restraint",
          "Faster work",
          "A flashlight"
        ],
        "answer": 1
      },
      {
        "q": "How should a suspected hydraulic leak be checked?",
        "options": [
          "With your hand",
          "With cardboard or the approved safe method, never bare skin",
          "By tightening fittings while running",
          "By standing in front of the hose"
        ],
        "answer": 1
      },
      {
        "q": "Why are accumulators treated as hazardous after shutdown?",
        "options": [
          "They look complicated",
          "They can retain energy after pumps stop",
          "They are only dangerous when empty",
          "They only matter during startup"
        ],
        "answer": 1
      },
      {
        "q": "What is wrong with cracking a fitting to see if pressure is gone?",
        "options": [
          "Nothing if done carefully",
          "It can create uncontrolled release and injection hazards",
          "It is faster than procedures",
          "It is only bad on large machines"
        ],
        "answer": 1
      },
      {
        "q": "When is the system ready for hands-in work?",
        "options": [
          "When the motor is off",
          "When a coworker says it is fine",
          "After the system is isolated, relieved, blocked, and verified",
          "As soon as the noise stops"
        ],
        "answer": 2
      },
      {
        "q": "What should happen before restart or test motion?",
        "options": [
          "Assume everyone heard the plan",
          "Verify personnel are clear and restart is controlled",
          "Restart quickly before pressure bleeds down",
          "Remove blocks while someone is inside the hazard zone"
        ],
        "answer": 1
      },
      {
        "q": "A small puncture from hydraulic fluid should be treated how?",
        "options": [
          "As minor unless it hurts badly",
          "As an injection emergency needing immediate medical evaluation",
          "With only soap and water",
          "As a bruise"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/pneumatic-stored-energy",
    "label": "Pneumatic Stored Energy Safety",
    "short": "Compressed Air, Receivers, Cylinders, and Sudden Release",
    "icon": "💨",
    "color": "#6FD3FF",
    "regulation": "Compressed air system isolation and pressure-release control",
    "audience": "Maintenance, packaging teams, utility operators, and process mechanics",
    "minutes": 18,
    "slides": [
      {
        "heading": "Compressed Air Is Stored Force",
        "sub": "Air lines and receivers can move parts even after power is off.",
        "body": "Pneumatic systems store energy in receivers, headers, drops, actuators, air bags, and trapped line sections. A machine can appear shut down while cylinders remain loaded, air valves stay pressurized, or a trapped section releases through a fitting or tool connection. Treat compressed air as stored force, not as harmless utility service.",
        "list": [
          "Air pressure can extend cylinders, release clamps, or shift tooling unexpectedly.",
          "Receivers, accumulators, and line sections can stay charged after shutdown.",
          "Residual pressure can also create hose whip, flying debris, and noise injury."
        ],
        "callout": {
          "label": "RULE",
          "text": "No line opening or hands-in work starts until air has been isolated, released, and verified.",
          "color": "#6FD3FF"
        }
      },
      {
        "heading": "Isolation Must Reach the Trapped Section",
        "sub": "Closing one valve is not the same as zero pressure.",
        "body": "A closed supply valve can leave pressure trapped between regulators, valves, cylinders, and quick-connect equipment. Workers must know where the pressure actually remains and how the approved bleed-down point works. Gauges, vent valves, lockable shutoffs, and machine-specific procedures matter because air can stay where workers least expect it.",
        "list": [
          "Identify the isolation point and the correct relief path for the section being opened.",
          "Watch for check valves, dual feeds, and equipment with local reservoirs.",
          "Use gauges and indicators to confirm pressure is truly gone."
        ]
      },
      {
        "heading": "Disconnects and Quick-Connects Need Body Position Control",
        "sub": "Release paths matter as much as the shutdown step.",
        "body": "Hoses, blow-off tools, and portable air-powered devices can whip or discharge contaminants when disconnected under pressure. Keep the body out of line, restrain hoses where required, and vent energy through the correct point before disconnecting equipment. Never trust a coupling simply because the machine looks inactive.",
        "list": [
          "Control the hose before releasing the connection.",
          "Stand out of the direct release path.",
          "Assume contaminants, dust, liquid, or projectiles may discharge with the air."
        ]
      },
      {
        "heading": "Air for Cleaning Has Its Own Hazard Rules",
        "sub": "Compressed air can inject debris into skin and eyes.",
        "body": "Using compressed air for cleanup or testing can drive metal chips, sand, glass fiber, or chemical residue into the body or atmosphere. Air should never be used on skin or clothing and only used for cleanup where the procedure allows it, with proper pressure control and PPE. Compressed air is not a toy and not a substitute for engineering controls.",
        "list": [
          "Do not use air to clean yourself or another worker.",
          "Use approved pressure-reduced tools and eye protection where air cleaning is allowed.",
          "Consider what the air stream can aerosolize or launch."
        ]
      },
      {
        "heading": "Restart Can Re-Pressurize Faster Than People Expect",
        "sub": "A reset valve or utility restore can move equipment immediately.",
        "body": "After maintenance, a system may move as soon as air is restored if clamps, cylinders, gates, or actuators return to their normal state. Clear the area, communicate the re-pressurization step, and verify which devices will move first. Restart discipline prevents the last-minute injury that happens after everyone thinks the job is done.",
        "list": [
          "Announce re-pressurization before restoring air.",
          "Verify all personnel are clear of pinch points and moving devices.",
          "Expect instant motion when pressure returns to the circuit."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Pneumatic safety means isolate, vent, verify, control the release path, then restore pressure deliberately.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why is compressed air treated as stored energy?",
        "options": [
          "Because it is noisy",
          "Because it can remain trapped and move equipment after shutdown",
          "Because it is always toxic",
          "Because it turns into water"
        ],
        "answer": 1
      },
      {
        "q": "What can happen if a quick-connect is opened under pressure?",
        "options": [
          "Nothing if the machine is off",
          "Hose whip or sudden discharge",
          "Only a small hiss",
          "It improves visibility"
        ],
        "answer": 1
      },
      {
        "q": "Why is a closed supply valve not enough by itself?",
        "options": [
          "It can leave a trapped pressurized section downstream",
          "It only works in summer",
          "It increases voltage",
          "It changes pipe color"
        ],
        "answer": 0
      },
      {
        "q": "How should compressed air be used on workers for cleanup?",
        "options": [
          "At low pressure",
          "Only with gloves",
          "Never on skin or clothing",
          "Only outside"
        ],
        "answer": 2
      },
      {
        "q": "What confirms a pneumatic section is safe to open?",
        "options": [
          "A quiet machine",
          "The last operator's memory",
          "Isolation, bleed-down, and verification at the trapped section",
          "A flashing light"
        ],
        "answer": 2
      },
      {
        "q": "What body position is safest during a disconnect?",
        "options": [
          "Directly in front of the coupling",
          "Out of the release path with control of the hose",
          "On top of the line",
          "Wherever the floor is clean"
        ],
        "answer": 1
      },
      {
        "q": "What should workers expect when air is restored?",
        "options": [
          "Nothing moves until later",
          "Immediate actuator or clamp motion may occur",
          "Pressure returns only to gauges",
          "Only alarms change"
        ],
        "answer": 1
      },
      {
        "q": "What can compressed air launch during cleanup?",
        "options": [
          "Only dust",
          "Debris, liquid, or residue",
          "Only harmless mist",
          "Nothing if the nozzle is small"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/electrical-stored-energy",
    "label": "Electrical Stored Energy & Discharge Safety",
    "short": "Capacitors, DC Bus, UPS, Batteries, and Remote Re-Energization",
    "icon": "⚡",
    "color": "#FFD100",
    "regulation": "Electrical isolation awareness; complements arc flash and LOTO programs",
    "audience": "Electricians, controls staff, maintenance, and authorized troubleshooters",
    "minutes": 20,
    "slides": [
      {
        "heading": "Stored Electrical Energy Can Remain After Disconnect",
        "sub": "Off does not always mean discharged.",
        "body": "Capacitors, variable frequency drive DC bus sections, UPS systems, battery strings, control power supplies, and stored charge in electronic equipment can remain energized after the main disconnect is opened. Even when the system is de-energized from the source, the stored charge can still shock, arc, or damage components if workers move too fast.",
        "list": [
          "Follow posted discharge times for drives, power electronics, and capacitor banks.",
          "Do not remove covers early just because line power is open.",
          "Remote or backup power sources may keep selected circuits energized."
        ],
        "callout": {
          "label": "RULE",
          "text": "Electrical isolation is not complete until you verify the absence of voltage and respect the discharge interval.",
          "color": "#FFD100"
        }
      },
      {
        "heading": "Multiple Sources Are Common in Modern Equipment",
        "sub": "Main power, control power, backup power, and generated power can coexist.",
        "body": "Industrial equipment may include UPS-backed controls, batteries, photovoltaic feeds, temporary generators, and separate control transformers. One opened disconnect may remove only one source. The worker must identify every source that can energize the circuit or maintain control logic before touching the system.",
        "list": [
          "Account for line power, control power, battery backup, and generated power.",
          "Watch for external interlocks and remote-start pathways.",
          "Use the approved test-before-touch sequence."
        ]
      },
      {
        "heading": "Capacitors and DC Bus Sections Need Respect",
        "sub": "Residual voltage can remain even when nothing is moving.",
        "body": "Drive cabinets and power electronics often retain charge in capacitors after shutdown. The cabinet may appear inactive while a dangerous voltage is still present. Wait the required time, verify with the proper meter, and do not assume indicator lights alone prove the cabinet is safe.",
        "list": [
          "Use a meter rated for the equipment and the hazard.",
          "Check your meter on a known source before and after testing.",
          "Indicator lamps are not a substitute for voltage verification."
        ]
      },
      {
        "heading": "Batteries Add Chemical, Arc, and Short-Circuit Risk",
        "sub": "Energy release can come from more than wall power.",
        "body": "Battery systems can deliver very high fault current and may release corrosive electrolyte, heat, or gas. Tools, jewelry, and conductive objects can create a violent short circuit. Treat battery-backed systems as active energy sources that need the same disciplined isolation and clearance planning as other electrical systems.",
        "list": [
          "Remove conductive jewelry and use insulated tools where required.",
          "Do not bridge terminals or place metal objects on battery cabinets.",
          "Respect ventilation and chemical exposure controls around battery systems."
        ]
      },
      {
        "heading": "Verification and Re-Energization Must Be Controlled",
        "sub": "The last step can be the most dangerous if people assume the work is over.",
        "body": "Electrical injuries often happen when someone skips the final verification or when a system is re-energized while workers are still exposed. Confirm the absence of voltage, restore barriers and covers, account for all personnel, and communicate before re-energization. Restart only under the authorized sequence.",
        "list": [
          "Verify zero-energy state before contact and verify readiness before re-energization.",
          "Restore guards, covers, and barriers before energizing.",
          "Communicate clearly who owns the re-energization step."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Open, isolate, wait, test, verify, then re-energize only after the area and equipment are fully restored.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why can electrical equipment still be dangerous after the disconnect is opened?",
        "options": [
          "Because electricity gets heavier",
          "Stored charge or backup sources may remain",
          "Only because of bad lighting",
          "Because the panel paint is conductive"
        ],
        "answer": 1
      },
      {
        "q": "What must be respected on VFDs and capacitor banks?",
        "options": [
          "The posted discharge time and voltage verification",
          "Only the fan noise",
          "Only the fuse size",
          "The panel color"
        ],
        "answer": 0
      },
      {
        "q": "What is the correct proof that voltage is absent?",
        "options": [
          "Indicator light is off",
          "A supervisor says it is safe",
          "Meter verification using the approved test-before-touch method",
          "The motor is not moving"
        ],
        "answer": 2
      },
      {
        "q": "Which source is easy to forget in modern equipment?",
        "options": [
          "Battery backup or UPS power",
          "Pipe supports",
          "Compressed air labels",
          "Floor drains"
        ],
        "answer": 0
      },
      {
        "q": "Why are battery systems hazardous?",
        "options": [
          "Only because they are heavy",
          "They can deliver high fault current and chemical exposure",
          "They make gauges inaccurate",
          "They have no stored energy"
        ],
        "answer": 1
      },
      {
        "q": "What should be checked on a meter before and after use?",
        "options": [
          "Its paint color",
          "Its known-source function",
          "Its age only",
          "Its cable length"
        ],
        "answer": 1
      },
      {
        "q": "When should covers and barriers be restored?",
        "options": [
          "After energization",
          "Before controlled re-energization",
          "Only if the room is dusty",
          "Only during inspection"
        ],
        "answer": 1
      },
      {
        "q": "What makes electrical stored energy different from visible motion hazards?",
        "options": [
          "It can remain dangerous with no motion or sound",
          "It is always obvious",
          "It only exists outdoors",
          "It disappears instantly"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/fermentation-stored-energy",
    "label": "Fermentation / Vessel Pressure Safety",
    "short": "Gas Evolution, Tank Overpressure, Foam, and Line Opening",
    "icon": "🫧",
    "color": "#22CC66",
    "regulation": "Process and vessel-pressure awareness for food and beverage operations",
    "audience": "Food process teams, utility staff, sanitation, and maintenance",
    "minutes": 18,
    "slides": [
      {
        "heading": "Fermentation Creates Pressure Even When Nothing Looks Violent",
        "sub": "Gas generation can build force quietly inside tanks and lines.",
        "body": "Fermentation and other biological or chemical processes can generate gas, foam, and vessel pressure over time. A calm-looking tank may still be building force at vents, caps, hoses, transfer lines, or closed sections. Treat fermentation vessels as process equipment, not as harmless containers.",
        "list": [
          "Gas generation can continue after feeding, mixing, or transfer stops.",
          "Pressure can collect in vessels, filters, hoses, and blocked vent paths.",
          "Foam and solids can obstruct the normal relief path."
        ],
        "callout": {
          "label": "RULE",
          "text": "Do not open, loosen, or bypass vessel hardware until the pressure state and relief path are known.",
          "color": "#22CC66"
        }
      },
      {
        "heading": "Blocked Vents Turn Normal Process into Stored-Energy Hazard",
        "sub": "The problem is often restriction, not the tank itself.",
        "body": "A plugged vent, fouled filter, iced line, closed valve, or collapsed hose can prevent gas from leaving the system. That changes normal fermentation into an overpressure hazard. Operators and sanitation crews must know which paths are pressure-relief paths and keep them clear and functional.",
        "list": [
          "Never assume a vessel is safe because it usually runs at low pressure.",
          "Check vent paths, relief devices, and vessel status before intervention.",
          "Treat foam, residue, and process buildup as energy-control concerns when they block relief."
        ]
      },
      {
        "heading": "Line Opening Can Release Gas, Product, and Projectiles",
        "sub": "A clamp or cap can become the first thing pressure moves.",
        "body": "When pressure remains in a vessel or transfer line, opening a clamp, cap, sample port, manway, or hose can release gas, product, and solid material with force. Workers must vent and isolate through the approved method, stand out of the release path, and expect splash, blowdown, and visibility loss.",
        "list": [
          "Open the system only through the approved controlled-relief sequence.",
          "Keep face and body away from caps, ports, and clamp release paths.",
          "Use PPE matched to product, temperature, and sanitation chemistry."
        ]
      },
      {
        "heading": "Atmosphere and Confined Space Risk Can Layer In",
        "sub": "Gas generation can displace oxygen or create toxic exposure.",
        "body": "Fermentation can generate carbon dioxide or other gases that accumulate in low areas, tank tops, enclosed rooms, or pits. That means stored energy may be combined with atmospheric hazard. If the task involves enclosed equipment, pits, or vessel entry, the confined-space process takes over and the job must be treated accordingly.",
        "list": [
          "Do not separate vessel pressure control from atmospheric hazard control.",
          "Escalate enclosed-space work into the proper permit and testing process.",
          "Use gas monitoring and ventilation where required by procedure."
        ]
      },
      {
        "heading": "Restart and Cleaning Need the Same Discipline as Production",
        "sub": "Sanitation, CIP, and startup can recreate pressure unexpectedly.",
        "body": "After cleaning, transfer, or maintenance, pressure may return when gas generation resumes, lines are isolated, or cleaning systems are introduced. Confirm valve lineup, vent condition, and who owns the startup step. A safe opening sequence and a safe restart sequence are both required.",
        "list": [
          "Verify vent paths are open before restart.",
          "Do not assume a cleaned vessel is automatically pressure-free.",
          "Communicate the startup and pressure-restoration step before beginning."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Fermentation safety means control the vessel, the vent path, the opening sequence, and the surrounding atmosphere together.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why can fermentation become a stored-energy hazard?",
        "options": [
          "Because the product changes color",
          "Because gas generation can build pressure in vessels and lines",
          "Because tanks are always hot",
          "Because stainless steel is magnetic"
        ],
        "answer": 1
      },
      {
        "q": "What commonly turns normal low-pressure operation into an overpressure hazard?",
        "options": [
          "A clean floor",
          "A blocked vent or relief path",
          "A larger label",
          "A faster forklift"
        ],
        "answer": 1
      },
      {
        "q": "What should be known before loosening a cap or clamp?",
        "options": [
          "The pressure state and controlled-relief method",
          "Only the batch number",
          "Only the cleaning chemical",
          "Nothing if the vessel is quiet"
        ],
        "answer": 0
      },
      {
        "q": "What gas hazard may accompany fermentation work?",
        "options": [
          "Oxygen enrichment only",
          "Carbon dioxide accumulation or oxygen displacement",
          "Helium release only",
          "None"
        ],
        "answer": 1
      },
      {
        "q": "Why are foaming and solids important here?",
        "options": [
          "They improve product quality",
          "They can obstruct the relief path",
          "They make the floor cleaner",
          "They replace pressure gauges"
        ],
        "answer": 1
      },
      {
        "q": "What should workers avoid during line opening?",
        "options": [
          "Standing in the release path",
          "Wearing PPE",
          "Reading gauges",
          "Checking vents"
        ],
        "answer": 0
      },
      {
        "q": "When can a cleaned vessel be assumed pressure-free?",
        "options": [
          "Always",
          "Only after the vessel state is actually verified",
          "Whenever CIP is complete",
          "If it has cooled down"
        ],
        "answer": 1
      },
      {
        "q": "What process takes over for enclosed-vessel entry?",
        "options": [
          "Forklift policy",
          "Confined-space procedure",
          "Visitor orientation",
          "Rigging plan"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/gravity-stored-energy",
    "label": "Gravity Stored Energy Safety",
    "short": "Suspended Loads, Elevated Members, Counterweights, and Roll-Back",
    "icon": "🏗️",
    "color": "#C77DFF",
    "regulation": "Load support, blocking, and line-of-fire control",
    "audience": "Maintenance, rigging crews, operators, and anyone working below or beside elevated mass",
    "minutes": 18,
    "slides": [
      {
        "heading": "Gravity Is Stored Energy Whenever Something Can Fall, Drop, or Roll",
        "sub": "Mass above you or beside you is force waiting to move.",
        "body": "A suspended load, raised platen, elevated bucket, hanging gate, tilted frame, stacked product, counterweight, or sloped material is gravity-based stored energy. It does not require motors or pressure to be dangerous. If the object can descend, tip, swing, settle, or roll into a worker, the hazard is active.",
        "list": [
          "Treat raised equipment and suspended loads as energized until mechanically secured.",
          "Remember that roll-back and tip-over are gravity events too.",
          "Quiet equipment can still have gravity hazard."
        ],
        "callout": {
          "label": "RULE",
          "text": "No one enters the drop, crush, or swing zone until the load is mechanically secured and verified.",
          "color": "#C77DFF"
        }
      },
      {
        "heading": "Hydraulics and Gravity Often Work Together",
        "sub": "Loss of pressure can hand the entire force back to gravity.",
        "body": "Raised members are often held by hydraulic pressure, pneumatic pressure, or drive torque during normal operation. During maintenance or failure, that restraint can disappear and gravity becomes the dominant force. Blocking, pins, stands, cribbing, and structural supports are what keep the load from moving when energy changes state.",
        "list": [
          "Do not rely on pressure, friction, or a parked control handle to hold weight.",
          "Use supports rated for the load and the geometry.",
          "Plan for how the load could move if the primary holding method fails."
        ]
      },
      {
        "heading": "Body Position Decides the Injury Potential",
        "sub": "The same load is survivable or fatal depending on where the worker stands.",
        "body": "Workers get hurt when they place their body under elevated members, between a suspended load and structure, or downhill from material that can roll. Always identify the direction of travel if support is lost. Stay out of pinch, crush, swing, and roll paths while setting supports or making adjustments.",
        "list": [
          "Never work under a suspended load unless the engineered support method permits it.",
          "Keep feet, hands, knees, and torso out of landing zones.",
          "Think about where the load will go, not where it is now."
        ]
      },
      {
        "heading": "Verification Means the Support Holds Without the Prime Mover",
        "sub": "The secure condition must survive a loss of power or pressure.",
        "body": "A properly secured gravity hazard remains controlled even if hydraulic pressure bleeds off, a brake slips, or the operator steps away. Verify the support condition, not just the initial setup. If the support cannot hold independently, the job is not yet safe.",
        "list": [
          "Test whether the support is actually bearing the load.",
          "Use visual and physical verification where procedure allows.",
          "Re-check stability whenever the setup changes."
        ]
      },
      {
        "heading": "Removal of Supports Is Also a High-Risk Step",
        "sub": "Restoring movement requires the same control as stopping it.",
        "body": "Many incidents happen after the work is finished, when blocks are removed, load paths change, or motion is restored without a clear plan. Communicate the release sequence, clear the zone, and remove supports only under controlled authority.",
        "list": [
          "Do not remove blocks or pins until everyone is clear.",
          "Confirm who is directing the release and restart.",
          "Expect shift, settle, or immediate movement once support changes."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Gravity stored energy is controlled only when the load is positively supported and people are kept out of its travel path.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "When is gravity considered stored energy?",
        "options": [
          "Only during crane lifts",
          "Whenever mass can fall, tip, swing, or roll",
          "Only on tall equipment",
          "Only outdoors"
        ],
        "answer": 1
      },
      {
        "q": "What should never be trusted to hold a raised load during work?",
        "options": [
          "Mechanical blocking",
          "Hydraulic pressure alone",
          "Engineered stands",
          "Pins"
        ],
        "answer": 1
      },
      {
        "q": "What is the safest way to think about body position?",
        "options": [
          "Stand where you can see the load",
          "Stay out of the path the load would take if support failed",
          "Stay close for balance",
          "Touch the load to feel movement"
        ],
        "answer": 1
      },
      {
        "q": "Why must supports be verified under load?",
        "options": [
          "To look organized",
          "To confirm the support really holds without the prime mover",
          "To reduce paperwork",
          "To save time"
        ],
        "answer": 1
      },
      {
        "q": "What can turn a gravity hazard into a crush injury even without powered motion?",
        "options": [
          "A loss of restraint or a shift in load path",
          "A brighter light",
          "A cooler room",
          "A radio call"
        ],
        "answer": 0
      },
      {
        "q": "When are support-removal steps dangerous?",
        "options": [
          "Never if the repair is complete",
          "When they restore movement or change the load path",
          "Only if cranes are present",
          "Only on night shift"
        ],
        "answer": 1
      },
      {
        "q": "What area must stay clear during gravity hazard work?",
        "options": [
          "Only the operator cab",
          "Drop, swing, roll, and pinch zones",
          "Break areas",
          "Aisles not in use"
        ],
        "answer": 1
      },
      {
        "q": "What controls gravity hazard best?",
        "options": [
          "A warning sign",
          "Positive mechanical support plus safe body position",
          "A fast repair",
          "A louder alarm"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/elastic-stored-energy",
    "label": "Elastic / Spring / Tensioned Component Safety",
    "short": "Springs, Belts, Tensioners, Banding, and Sudden Release",
    "icon": "🌀",
    "color": "#FF8A65",
    "regulation": "Stored mechanical energy awareness for tensioned components",
    "audience": "Maintenance, mechanics, packaging teams, and assembly personnel",
    "minutes": 16,
    "slides": [
      {
        "heading": "Elastic Energy Is Force Waiting to Snap Back",
        "sub": "If a component is bent, stretched, compressed, or wound, it can release suddenly.",
        "body": "Springs, torsion bars, recoil devices, tensioned belts, wound cable, banding, clamps, and flexed machine components can all store mechanical energy. Unlike large hydraulic systems, these hazards are often close to the worker's hands, face, and torso. Small parts can release with enough speed to cut, strike, or launch tools and fragments.",
        "list": [
          "Treat compressed, stretched, or wound parts as loaded until proven otherwise.",
          "Stored elastic energy can remain even when the machine is isolated.",
          "The smallest-looking part may move the fastest."
        ],
        "callout": {
          "label": "RULE",
          "text": "Never place your body in the spring-back path of a loaded component.",
          "color": "#FF8A65"
        }
      },
      {
        "heading": "Tensioners and Restraints Need a Planned Release Method",
        "sub": "Improvised loosening is how parts become projectiles.",
        "body": "Before removing guards, bolts, retaining clips, straps, or banding, know what preload the component still holds and how the manufacturer or procedure says to release it. The right release fixture, pin, clamp, or staged loosening method prevents uncontrolled rebound or part ejection.",
        "list": [
          "Do not guess whether the part is still loaded.",
          "Use the specified tool or fixture for tension release.",
          "Release preload gradually under control, not all at once."
        ]
      },
      {
        "heading": "Hands and Faces Get Hit First",
        "sub": "Close-range work increases the injury severity.",
        "body": "Elastic-energy incidents often injure eyes, teeth, fingers, wrists, and forearms because the work is done at arm's length. Keep your face out of line, wear the right PPE, and use tools that preserve distance where possible. Good body position matters even on small maintenance tasks.",
        "list": [
          "Keep your face and torso out of direct line with clips, bands, and tensioners.",
          "Do not brace loaded parts with your free hand.",
          "Use shields or barriers where the procedure requires them."
        ]
      },
      {
        "heading": "Banding, Straps, and Wrapped Material Can Uncoil Violently",
        "sub": "Material storage can create stored-energy hazard too.",
        "body": "Steel banding, packaging straps, coiled stock, and wrapped materials can spring outward when cut or loosened. The danger zone includes bystanders. Control the cut, restrain the material, and expect immediate movement once the last holding point is released.",
        "list": [
          "Stand to the side, not in the opening path.",
          "Control the material before cutting the last restraint.",
          "Keep others clear of the release zone."
        ]
      },
      {
        "heading": "Reassembly Must Restore the Designed Restraint",
        "sub": "An incomplete reassembly can create a hidden loaded hazard.",
        "body": "After maintenance, a mis-seated spring, missing clip, or mis-set tensioner can fail during startup and turn into the next stored-energy incident. Verify the component is fully seated, restrained, and adjusted before the equipment is returned to service.",
        "list": [
          "Do not energize the machine until loaded parts are properly captured.",
          "Check for correct pin, clip, belt, and tensioner placement.",
          "Restart only when the component is restored to its designed condition."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Elastic stored energy is controlled by understanding preload, controlling the release path, and restoring proper restraint before restart.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is elastic stored energy?",
        "options": [
          "Only steam pressure",
          "Force stored in stretched, compressed, bent, or wound parts",
          "Only heavy suspended loads",
          "Only battery power"
        ],
        "answer": 1
      },
      {
        "q": "Why are spring and tensioner tasks dangerous?",
        "options": [
          "They are loud",
          "They can release suddenly at close range",
          "They take longer than welding",
          "They always need a crane"
        ],
        "answer": 1
      },
      {
        "q": "What should be known before removing a retaining clip or band?",
        "options": [
          "Paint color",
          "Whether the component still holds preload and how to release it safely",
          "Who bought the part",
          "How long the machine has run"
        ],
        "answer": 1
      },
      {
        "q": "Where should your face be during tension release?",
        "options": [
          "Directly in line for visibility",
          "Out of the spring-back path",
          "Touching the guard",
          "Above the part"
        ],
        "answer": 1
      },
      {
        "q": "What can happen when steel banding is cut?",
        "options": [
          "Nothing unless it is rusty",
          "Material or the strap can spring outward violently",
          "Only a small drop in pressure",
          "The floor gets slippery"
        ],
        "answer": 1
      },
      {
        "q": "Why use the specified tool or fixture?",
        "options": [
          "To match the manual cover",
          "To control preload and release direction",
          "To make the job louder",
          "To avoid cleanup"
        ],
        "answer": 1
      },
      {
        "q": "What must be verified before restart?",
        "options": [
          "Loaded parts are fully restrained and correctly assembled",
          "Only that the lights work",
          "Only that the guard is nearby",
          "That the area is warm"
        ],
        "answer": 0
      },
      {
        "q": "Which body parts are commonly injured in elastic-energy incidents?",
        "options": [
          "Eyes, hands, face, and forearms",
          "Only knees",
          "Only feet",
          "Only shoulders"
        ],
        "answer": 0
      }
    ]
  },
  {
    "path": "/magnetic-stored-energy",
    "label": "Magnetic Stored Energy Safety",
    "short": "Lifting Magnets, Residual Hold, Pinch Zones, and Tool Attraction",
    "icon": "🧲",
    "color": "#9D4EDD",
    "regulation": "Awareness for industrial magnets, lifting systems, and magnetic-field hazards",
    "audience": "Crane crews, fabrication teams, maintenance, and material handlers",
    "minutes": 16,
    "slides": [
      {
        "heading": "Magnetic Force Can Capture Material Without Warning",
        "sub": "Attraction happens faster than a hand can react.",
        "body": "Industrial magnets create a pull zone that can move steel parts, tools, scrap, slings, and hardware suddenly. Lifting magnets and magnetic fixtures can pinch hands, pull objects into the hazard area, and retain material even after workers think the lift is over. Treat the magnetized zone as an active crush and caught-between hazard.",
        "list": [
          "Keep hands out of the contact zone between the magnet and material.",
          "Assume nearby loose ferrous objects may move toward the magnet.",
          "Do not use fingers to guide steel into a magnet's landing point."
        ],
        "callout": {
          "label": "RULE",
          "text": "If magnetic attraction can close the gap, keep your body out of that gap.",
          "color": "#9D4EDD"
        }
      },
      {
        "heading": "Release Does Not Always Happen Exactly When Expected",
        "sub": "Residual hold and load condition matter.",
        "body": "Surface contamination, shape, air gap, residual magnetism, and control issues can change how a lifting magnet picks or releases material. Workers must never stand under or beside a suspended magnetic load and must expect that a piece may stay attached longer or release sooner than hoped.",
        "list": [
          "Do not trust appearance alone to prove full release.",
          "Keep the drop zone clear until the material is fully down and stable.",
          "Understand that irregular shapes and multiple pieces can behave unpredictably."
        ]
      },
      {
        "heading": "Magnets Create Tool and Hardware Hazards",
        "sub": "The problem is not only the load being lifted.",
        "body": "Loose tools, bolts, fragments, and scrap can be pulled toward a magnetized surface or lifting magnet, creating eye, face, and hand hazards. Good housekeeping and nonessential item removal matter before magnet work begins.",
        "list": [
          "Clear loose ferrous tools and hardware from the work zone.",
          "Do not lean into magnetic fixtures with pocket hardware exposed.",
          "Expect hidden fragments to move when the field is applied."
        ]
      },
      {
        "heading": "People with Sensitive Devices Need Extra Protection",
        "sub": "Magnetic fields can affect more than material handling.",
        "body": "Strong magnetic fields can interfere with certain medical implants or sensitive equipment. Follow site restrictions for pacemakers, implantable devices, badges, or electronics around strong magnetic equipment. Keep signage and access control meaningful.",
        "list": [
          "Honor posted restricted areas around strong magnetic devices.",
          "Do not bring unauthorized electronics or sensitive items into the field zone.",
          "Escalate uncertainty before entry, not after exposure."
        ]
      },
      {
        "heading": "Lift Planning and Landing Control Still Apply",
        "sub": "A magnetic lift is still a lifting operation with line-of-fire risk.",
        "body": "Magnet use does not remove the need for communication, exclusion zones, stable landing areas, and load control. Plan the path, the landing condition, and the release zone before picking the load. The safest magnet operation is the one with no one standing where the material could shift, swing, or drop.",
        "list": [
          "Use exclusion zones and clear communication during lift and release.",
          "Do not let anyone stand beneath or against the load.",
          "Land and confirm stability before anyone approaches."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Magnetic hazards are managed by controlling attraction zones, tool clutter, release uncertainty, and the normal line-of-fire hazards of lifting.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why are magnets treated as stored-energy hazards?",
        "options": [
          "Because they can attract and hold material suddenly",
          "Because they always overheat",
          "Because they only work on aluminum",
          "Because they remove gravity"
        ],
        "answer": 0
      },
      {
        "q": "What body part should stay out of the magnet contact zone?",
        "options": [
          "Only feet",
          "Hands and fingers especially",
          "Only shoulders",
          "Only elbows"
        ],
        "answer": 1
      },
      {
        "q": "Why is release planning important with lifting magnets?",
        "options": [
          "Release can vary with shape, surface, and magnet condition",
          "Release is always identical",
          "Magnets never drop loads",
          "Only paperwork changes"
        ],
        "answer": 0
      },
      {
        "q": "What extra hazard can loose tools create?",
        "options": [
          "They make more noise",
          "They can be pulled into the magnetic zone",
          "They cool the magnet",
          "They prevent lifting"
        ],
        "answer": 1
      },
      {
        "q": "Who may need extra protection around strong magnetic equipment?",
        "options": [
          "Only forklift operators",
          "People with pacemakers or sensitive devices",
          "Only visitors in hard hats",
          "No one"
        ],
        "answer": 1
      },
      {
        "q": "What should be true before workers approach a landed magnetic load?",
        "options": [
          "The magnet is quieter",
          "The material is down, stable, and confirmed released",
          "The crane is still moving",
          "The shift is ending"
        ],
        "answer": 1
      },
      {
        "q": "Does magnetic lifting remove line-of-fire risk?",
        "options": [
          "Yes",
          "No, it is still a lifting operation with shift and drop hazards",
          "Only indoors",
          "Only at low weight"
        ],
        "answer": 1
      },
      {
        "q": "What housekeeping step matters before magnetic work?",
        "options": [
          "Adding more loose hardware",
          "Clearing loose ferrous objects from the area",
          "Turning off the lights",
          "Opening nearby valves"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/thermal-stored-energy",
    "label": "Thermal Stored Energy Safety",
    "short": "Hot Fluids, Steam, Refractory, Residual Heat, and Pressure from Heat",
    "icon": "♨️",
    "color": "#FF6B00",
    "regulation": "Thermal isolation awareness for hot systems and residual-heat hazards",
    "audience": "Operations, maintenance, utilities, and shutdown teams",
    "minutes": 18,
    "slides": [
      {
        "heading": "Heat Is Stored Energy Even After Flame or Power Is Gone",
        "sub": "Residual temperature can still burn, boil, or overpressurize.",
        "body": "Thermal energy remains in refractory, molten material, hot oil, steam systems, process piping, vessels, and metal structure long after a burner shuts down or a heater is de-energized. Workers are injured when they touch, open, drain, or disturb a system that is still holding heat. Treat retained heat as an energy source in its own right.",
        "list": [
          "A system can be off and still be dangerously hot.",
          "Residual heat can create delayed boiling, flashing, and pressure release.",
          "Hot structure around the process may be as dangerous as the process itself."
        ],
        "callout": {
          "label": "RULE",
          "text": "Do not open or touch hot systems until temperature, pressure, and exposure path are all under control.",
          "color": "#FF6B00"
        }
      },
      {
        "heading": "Hot Liquid and Steam Systems Can Re-Pressurize",
        "sub": "Cooling and heating behavior change the release risk.",
        "body": "Steam lines, condensate systems, hot-water loops, hot oil circuits, and heated vessels can trap pressure or generate new pressure as temperature changes. Opening the wrong point can flash liquid to vapor, eject condensate, or release invisible hot gas into the worker's space.",
        "list": [
          "Assume low points, dead legs, and isolated sections may still contain hot pressurized fluid.",
          "Know where to vent, drain, and verify safely.",
          "Stand out of the path where vapor or liquid will go if released."
        ]
      },
      {
        "heading": "Refractory and Structural Steel Hold Heat Longer Than Workers Expect",
        "sub": "Surface appearance is not a temperature reading.",
        "body": "Furnace walls, refractory shapes, ducting, steel frames, and tooling can remain hot enough to burn after visible glow or active flame is gone. The safest approach is to use the approved cooling interval, temperature verification method, and PPE rather than trusting appearance or guesswork.",
        "list": [
          "Do not test temperature with a bare hand or quick touch.",
          "Use the approved measurement and cool-down criteria.",
          "Remember that insulation can hide hot internals while adjacent openings remain dangerous."
        ]
      },
      {
        "heading": "Line Opening and Draining Need Controlled Sequence",
        "sub": "Hot systems punish rushed maintenance.",
        "body": "When hot lines are opened too early, trapped fluid can flash, hoses can jump, and workers can lose visibility in steam or vapor clouds. Isolate the source, wait the required cool-down time, relieve pressure through the approved point, and open the system under control with the body out of the release path.",
        "list": [
          "Follow the hot-system isolation sequence exactly.",
          "Use shields, PPE, and slow controlled opening where required.",
          "Never assume the first drain point is the safest drain point."
        ]
      },
      {
        "heading": "Restart Means Restoring Heat on Purpose",
        "sub": "The first warm-up steps can recreate pressure and exposure quickly.",
        "body": "After maintenance or shutdown, reintroducing heat can expand fluid, close clearances, change pressure, and expose workers who stayed too close. Restart must follow the warm-up plan, with people clear of hot-side exposure paths and abnormal conditions escalated immediately.",
        "list": [
          "Communicate before restoring burners, heaters, or steam.",
          "Keep personnel clear during warm-up and stabilization.",
          "Escalate abnormal temperature, pressure, odor, or leak conditions immediately."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Thermal stored energy control means time, temperature verification, pressure control, and careful line-opening and restart discipline.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "Why is thermal energy considered stored energy?",
        "options": [
          "Because systems can remain dangerously hot after shutdown",
          "Because it only exists during fire",
          "Because steel cannot store heat",
          "Because hot systems cool instantly"
        ],
        "answer": 0
      },
      {
        "q": "What extra hazard can hot liquid create when a line is opened?",
        "options": [
          "It can flash to vapor and eject fluid",
          "It always turns solid",
          "It reduces pressure immediately",
          "It removes PPE"
        ],
        "answer": 0
      },
      {
        "q": "Why is appearance a poor temperature check?",
        "options": [
          "Because hot equipment may not look hot",
          "Because color never changes",
          "Because gauges are illegal",
          "Because all surfaces cool equally"
        ],
        "answer": 0
      },
      {
        "q": "What should be controlled before opening a hot system?",
        "options": [
          "Only temperature",
          "Temperature, pressure, and release path",
          "Only lighting",
          "Only floor traction"
        ],
        "answer": 1
      },
      {
        "q": "What do low points and dead legs sometimes retain?",
        "options": [
          "Only clean air",
          "Hot fluid or condensate under pressure",
          "Only dust",
          "Only cold water"
        ],
        "answer": 1
      },
      {
        "q": "How should workers verify a system is cool enough?",
        "options": [
          "Quick touch",
          "Approved cooldown criteria and temperature verification",
          "Guessing from the clock",
          "Watching someone else"
        ],
        "answer": 1
      },
      {
        "q": "When can restart become hazardous again?",
        "options": [
          "Never after maintenance",
          "When heat is restored and pressure/exposure returns",
          "Only during daytime",
          "Only on steam systems"
        ],
        "answer": 1
      },
      {
        "q": "What is a safe response to abnormal heat or pressure during warm-up?",
        "options": [
          "Ignore it until full load",
          "Escalate immediately",
          "Speed up the startup",
          "Open more valves at random"
        ],
        "answer": 1
      }
    ]
  },
  {
    "path": "/nuclear-stored-energy",
    "label": "Nuclear / Radiological Energy Awareness",
    "short": "Sealed Sources, Radiation Fields, Time-Distance-Shielding, and Access Control",
    "icon": "☢️",
    "color": "#A3E635",
    "regulation": "Awareness only — radiological controls remain under licensed specialist authority",
    "audience": "Contractors, maintenance, supervisors, and non-radiological personnel near specialized equipment",
    "minutes": 16,
    "slides": [
      {
        "heading": "Radiological Energy Demands Strict Boundaries",
        "sub": "This is not routine maintenance energy and not a general-access hazard.",
        "body": "Industrial radiological devices, sealed sources, density gauges, x-ray cabinets, and specialty inspection systems are controlled under strict procedures and specialist authority. For general personnel, the correct posture is recognition, boundary respect, and escalation. Do not treat radiological equipment like ordinary electrical or mechanical hardware.",
        "list": [
          "Know the marking, labeling, and restricted-area signs used on site.",
          "Do not open, relocate, tamper with, or bypass radiological equipment.",
          "Escalate any damaged, displaced, or unmarked source concern immediately."
        ],
        "callout": {
          "label": "RULE",
          "text": "If radiological equipment is involved, stop normal work and turn control over to authorized specialists.",
          "color": "#A3E635"
        }
      },
      {
        "heading": "Time, Distance, and Shielding Are the Core Protective Principles",
        "sub": "Exposure is controlled by how long, how close, and what barrier exists.",
        "body": "Unlike many stored-energy hazards, radiation may not be felt, seen, or heard. The worker must rely on controls, access limits, and specialist procedures rather than senses. Time, distance, and shielding remain the practical framework for non-specialist awareness.",
        "list": [
          "Minimize time in authorized radiological areas.",
          "Maximize distance from the source consistent with the task.",
          "Do not disturb shielding, barriers, or covers."
        ]
      },
      {
        "heading": "Access Control and Accountability Matter",
        "sub": "Unauthorized entry can become an exposure event.",
        "body": "Radiological equipment areas rely on signs, interlocks, barriers, inventory, and controlled access. If a boundary is open, damaged, or bypassed, stop the job. General workers should not improvise around missing controls or assume the source is safe because no alarm is active.",
        "list": [
          "Respect locked or posted access conditions.",
          "Do not bypass interlocks or warning devices.",
          "Report missing labels, damaged housings, or unexpected devices immediately."
        ]
      },
      {
        "heading": "Emergency Response Is Recognition and Isolation, Not Hands-On Fixing",
        "sub": "The safest response is usually to secure the area and call specialists.",
        "body": "If a source housing is damaged, a radiological device falls, or an unplanned exposure is suspected, the priority is to isolate the area, keep people back, notify the responsible authority, and preserve accountability for who may have been exposed. Do not attempt cleanup or relocation unless specifically authorized and trained.",
        "list": [
          "Keep others away and establish a clear exclusion boundary.",
          "Notify the radiological authority and site leadership immediately.",
          "Document who was present and where they were."
        ]
      },
      {
        "heading": "This Topic Belongs in the Stored Energy Filter Because the Consequence Is Delayed, Not Obvious",
        "sub": "Invisible energy still requires disciplined control.",
        "body": "Radiological energy is different from hydraulic pressure or gravity, but it fits the same leadership principle: hidden energy must be recognized, controlled, and never normalized. The right action for most personnel is to identify the hazard and stop before curiosity becomes exposure.",
        "list": [
          "Do not rely on senses to judge radiological safety.",
          "Use recognition and escalation rather than improvisation.",
          "Treat boundary respect as part of the safety system itself."
        ],
        "callout": {
          "label": "KEY REVIEW",
          "text": "Recognize, isolate, respect time-distance-shielding, and turn the problem over to authorized radiological specialists.",
          "color": "#22CC66"
        }
      }
    ],
    "quiz": [
      {
        "q": "What is the correct default action around radiological equipment you are not authorized to service?",
        "options": [
          "Treat it like a normal panel",
          "Recognize it, respect boundaries, and escalate",
          "Open it carefully",
          "Move it away from traffic"
        ],
        "answer": 1
      },
      {
        "q": "What are the three core protective principles for radiation exposure control?",
        "options": [
          "Speed, force, and access",
          "Time, distance, and shielding",
          "Heat, pressure, and voltage",
          "PPE, lighting, and noise"
        ],
        "answer": 1
      },
      {
        "q": "Why is radiological energy especially deceptive?",
        "options": [
          "It is always loud",
          "It may not be seen, felt, or heard",
          "It only exists outdoors",
          "It only affects tools"
        ],
        "answer": 1
      },
      {
        "q": "What should happen if a source housing is damaged?",
        "options": [
          "Repair it if you can",
          "Isolate the area and notify authorized specialists",
          "Carry it outside",
          "Cover it with cardboard"
        ],
        "answer": 1
      },
      {
        "q": "What should workers never bypass around radiological equipment?",
        "options": [
          "Floor drains",
          "Interlocks, barriers, or warning devices",
          "Paint markings only",
          "Tool storage"
        ],
        "answer": 1
      },
      {
        "q": "What matters if a possible exposure event occurred?",
        "options": [
          "Only the equipment serial number",
          "Who was present and where they were",
          "Only the shift schedule",
          "Only the room temperature"
        ],
        "answer": 1
      },
      {
        "q": "Should general personnel rely on their senses to judge radiological safety?",
        "options": [
          "Yes",
          "No",
          "Only with gloves",
          "Only at night"
        ],
        "answer": 1
      },
      {
        "q": "Why include this topic in a stored-energy series?",
        "options": [
          "Because it is a visible motion hazard",
          "Because hidden energy still requires recognition and strict control",
          "Because it replaces LOTO",
          "Because it is the same as magnetism"
        ],
        "answer": 1
      }
    ]
  }
]

function makeModuleComponent(module) {
  return function StoredEnergyModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const HydraulicStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[0])
export const PneumaticStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[1])
export const ElectricalStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[2])
export const FermentationStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[3])
export const GravityStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[4])
export const ElasticStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[5])
export const MagneticStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[6])
export const ThermalStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[7])
export const NuclearStoredEnergyTraining = makeModuleComponent(STORED_ENERGY_PHASE1_MODULES[8])
