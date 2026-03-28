import TrainingModuleShell from './TrainingModuleShell.jsx'

export const GLASS_FIBERGLASS_PHASE1_MODULES = [
  {
    path: '/glass-melt-furnace',
    label: 'Glass Melt Furnace Safety',
    short: 'Furnace Heat, Burner Systems, and Hot-Zone Discipline',
    icon: '🔥',
    color: '#FF6B00',
    regulation: 'Awareness Only — High-temperature glass melt and burner-train hazard awareness',
    audience: 'Controls retrofit teams, maintenance, escorted contractors, and support personnel',
    minutes: 22,
    slides: [
      {
        heading: 'The Furnace Area Is a Restricted Hot Zone',
        sub: 'Normal production can still be immediately dangerous to non-operators.',
        body: 'Glass melt systems operate at sustained extreme temperatures. A quiet furnace is not a safe furnace. Refractory walls, burner systems, charging points, ports, and surrounding steel can all remain dangerous even when nothing dramatic appears to be happening.',
        list: [
          'Respect barricades, marked walk paths, and operator-only zones.',
          'Do not approach peep ports, openings, or charge points without authorization.',
          'Assume adjacent structure and floor areas may radiate severe heat.',
        ],
        callout: {
          label: 'HOT-ZONE RULE',
          text: 'Stay out of furnace operating envelopes unless the responsible plant lead has cleared the task and the route.',
          color: '#FF6B00',
        },
      },
      {
        heading: 'Burners, Fuel Trains, and Combustion Controls Add Another Hazard Layer',
        sub: 'Heat risk and fuel-system risk exist at the same time.',
        body: 'Retrofit and maintenance crews can be tempted to think only about controls cabinets or instrumentation, but the furnace environment also includes burner trains, purge logic, ignition sequencing, flame supervision, and no-shortcut restart rules.',
        list: [
          'Never bypass purge, permissive, or flame-safeguard logic.',
          'Treat burner work as fuel-system work, not only electrical work.',
          'Any abnormal flame, odor, pressure behavior, or trip condition belongs to operations procedure.',
        ],
      },
      {
        heading: 'First-Visit Behavior Should Be Conservative',
        sub: 'Your goal is to learn the area without becoming part of the hazard.',
        body: 'Before first entry, know where the hot-side access limits are, who owns the furnace area, where to stand during charging or upset response, and how to leave the zone without crossing an unsafe line of fire.',
        list: [
          'Ask where visitors and controls contractors are allowed to stand.',
          'Keep clear of charging, tapping, inspection, and refractory-service activity.',
          'Do not improvise around hot equipment or protective barriers.',
        ],
      },
    ],
    quiz: [
      { q: 'What is the safest assumption around a glass melt furnace?', options: ['It is safe if it looks calm', 'Only flames are dangerous', 'Heat and exposure hazards can still be severe during normal operation', 'The danger is limited to operators inside the control room'], answer: 2 },
      { q: 'Why are burner trains and combustion controls important in this area?', options: ['They only matter during shutdowns', 'They add fuel-system and ignition risk on top of thermal hazards', 'They replace the need for area restrictions', 'They are only relevant to office staff'], answer: 1 },
      { q: 'What should a first-time visitor do near furnace barriers and marked routes?', options: ['Move them if the task seems small', 'Ignore them when wearing PPE', 'Respect them and stay within cleared paths', 'Stand wherever the best view is'], answer: 2 },
      { q: 'Which action is acceptable around purge and ignition logic?', options: ['Bypass it to speed up testing', 'Follow plant procedure and never shortcut safeguards', 'Reset it repeatedly until it catches', 'Let any contractor change it alone'], answer: 1 },
      { q: 'What is the correct approach to an unfamiliar furnace operating area?', options: ['Treat it as restricted until the responsible lead clears the task', 'Walk closer to understand the heat pattern', 'Assume the floor crew will move if needed', 'Use only your own judgment'], answer: 0 },
    ],
  },
  {
    path: '/marble-melt-feed',
    label: 'Marble Melt Feed & Furnace Charging Safety',
    short: 'Feed Handling, Charging Discipline, and Hot-Material Awareness',
    icon: '🔶',
    color: '#FFA24A',
    regulation: 'Awareness Only — Marble melt feed and charging hazard awareness',
    audience: 'Visitors, maintenance, batching support, and escorted contractors',
    minutes: 18,
    slides: [
      {
        heading: 'Charging Is a Line-of-Fire Task',
        sub: 'Material movement near a hot furnace is never routine for bystanders.',
        body: 'Marble or batch feed handling combines material transfer, elevated temperature exposure, and equipment movement. Charging points can create splash, heat surge, dropped-material, and struck-by hazards if people drift into the wrong area.',
        list: [
          'Stay out of feed and charging paths unless assigned to the task.',
          'Watch for loader, conveyor, hopper, or charging-equipment motion.',
          'Do not stand where material or hot debris could eject or fall.',
        ],
      },
      {
        heading: 'Dry, Correct, Controlled Feed Matters',
        sub: 'Bad feed condition can become an immediate hazard.',
        body: 'Contaminated, wet, misidentified, or poorly staged feed can create process upset or unsafe charging conditions. Even if you are not the operator, you should understand why charging discipline is tightly controlled.',
        list: [
          'Use only confirmed material for the intended process.',
          'Moisture, contamination, and wrong-material errors can escalate risk fast.',
          'Charging changes belong to authorized plant procedure, not field improvisation.',
        ],
      },
      {
        heading: 'Observe the Area Before You Cross It',
        sub: 'Charging zones can look open while still being active.',
        body: 'On a first visit, pause and identify the feed route, the active equipment, the operator’s sight lines, and the safe pedestrian path before stepping into the area.',
        list: [
          'Look for the operator’s working envelope before moving.',
          'Avoid crossing between feed equipment and the furnace.',
          'Ask where escorted personnel should wait during charging activity.',
        ],
      },
    ],
    quiz: [
      { q: 'What makes a furnace charging area dangerous for non-operators?', options: ['Only noise', 'Only electrical exposure', 'Material movement, heat, and line-of-fire hazards together', 'Nothing if PPE is worn'], answer: 2 },
      { q: 'Why does feed condition matter?', options: ['It only affects product quality', 'Moisture, contamination, or wrong material can create unsafe charging conditions', 'It does not matter if the conveyor is running', 'Only supervisors need to know'], answer: 1 },
      { q: 'Where should a visitor stand during active charging?', options: ['Anywhere with a clear view', 'Inside the operator work envelope', 'In the designated safe waiting location', 'On the opposite side of the charging point'], answer: 2 },
      { q: 'Who should authorize charging changes or unusual feed handling?', options: ['Any contractor on site', 'Whoever is nearest', 'Authorized plant procedure and responsible operators', 'Only security'], answer: 2 },
      { q: 'What is the right first-visit habit before crossing a charging area?', options: ['Walk quickly through it', 'Observe the route, equipment motion, and safe pedestrian path first', 'Assume stopped equipment means clear passage', 'Wait beside the hopper'], answer: 1 },
    ],
  },
  {
    path: '/forehearth-transfer',
    label: 'Forehearth / Hot Glass Transfer Awareness',
    short: 'Hot-Glass Paths, Exclusion Zones, and Upset Recognition',
    icon: '🌋',
    color: '#FF8A3D',
    regulation: 'Awareness Only — Forehearth and hot-glass transfer hazard awareness',
    audience: 'Controls teams, maintenance, escorted visitors, and support personnel',
    minutes: 18,
    slides: [
      {
        heading: 'Molten-Glass Transfer Has a Fixed Path',
        sub: 'Your job is to stay out of it.',
        body: 'Forehearth and downstream transfer zones route hot glass through dedicated process paths. Those paths must stay clear of unnecessary personnel, carts, ladders, and maintenance staging.',
        list: [
          'Learn where the hot-glass path begins, turns, and feeds downstream equipment.',
          'Do not block operator access or emergency response space.',
          'Exclusion zones are there to protect against catastrophic heat exposure.',
        ],
      },
      {
        heading: 'Upsets Must Be Recognized Early',
        sub: 'A transfer abnormality can escalate faster than a normal pedestrian response.',
        body: 'Leaking, dripping, overflow, unusual glow patterns, smoke, or unexpected operator urgency can indicate a process upset. Do not investigate by moving closer.',
        list: [
          'Back out on the approved route and let operators control the response.',
          'Do not try to help unless you are assigned and authorized.',
          'Treat any abnormal hot-glass behavior as a serious event.',
        ],
        callout: {
          label: 'EXCLUSION ZONE',
          text: 'Forehearth and transfer areas are not observation decks. Stand only where the plant says it is safe.',
          color: '#FF8A3D',
        },
      },
      {
        heading: 'Maintenance and Controls Work Must Respect Process Priority',
        sub: 'You do not own the hot-glass route just because your task is nearby.',
        body: 'Cable work, sensors, controls upgrades, or inspections near a forehearth still have to defer to process safety. Safe access timing, isolation status, and operator coordination come first.',
        list: [
          'Coordinate with operations before opening covers or staging tools nearby.',
          'Do not assume a nearby task is low-risk because your own equipment is cool.',
          'Preserve clear egress and response space at all times.',
        ],
      },
    ],
    quiz: [
      { q: 'What is the main rule around forehearth and hot-glass transfer paths?', options: ['Stay out unless you have authorized reason and safe clearance', 'Cross quickly if you see an opening', 'Stand nearby to watch the process', 'Use the shortest route through it'], answer: 0 },
      { q: 'Which observation suggests a transfer upset?', options: ['Normal operator movement', 'Unexpected dripping, overflow, or unusual hot-glass behavior', 'A clean floor', 'A quiet area'], answer: 1 },
      { q: 'What should you do if you suspect abnormal hot-glass behavior?', options: ['Move closer to confirm', 'Use your phone light to inspect it', 'Back out and let authorized operators control the response', 'Step across the line for a better angle'], answer: 2 },
      { q: 'Why must nearby controls or maintenance tasks coordinate with operations?', options: ['Because paperwork is required', 'Because process safety and access control come before the nearby task', 'Because contractors cannot work in buildings', 'Because all work must stop at lunch'], answer: 1 },
      { q: 'What should never be placed in a hot-glass transfer zone?', options: ['Only paperwork', 'Temporary ladders, carts, or unnecessary staging that intrudes on the route', 'Safety signs', 'Approved barriers'], answer: 1 },
    ],
  },
  {
    path: '/fiberizing-spinner',
    label: 'Fiberizing Unit / Spinner / Attenuation Area Safety',
    short: 'Fiber Formation, Hot Filament Behavior, and No-Go Areas',
    icon: '🧵',
    color: '#7C5CFF',
    regulation: 'Awareness Only — Fiberizing and attenuation-area hazard awareness',
    audience: 'Visitors, maintenance, controls contractors, and non-operators near forming zones',
    minutes: 20,
    slides: [
      {
        heading: 'Fiberizing Is a High-Energy Formation Zone',
        sub: 'This is not just another conveyor line.',
        body: 'Spinner and attenuation areas combine hot material, fast-moving process behavior, and sensitive operating conditions. A line that looks visually light or airy can still be one of the highest-risk places in the plant.',
        list: [
          'Keep out of no-go zones around spinner and fiber-formation equipment.',
          'Do not reach toward running material, broken fiber, or rotating components.',
          'Respect local guarding, marked boundaries, and operator sight lines.',
        ],
      },
      {
        heading: 'Breaks and Upsets Change the Hazard Fast',
        sub: 'A fiber break is not an invitation to step closer.',
        body: 'Operators may respond quickly to product upset, broken filament, or abnormal formation. Uninvolved personnel should not crowd the area, guess at the issue, or add confusion to a time-sensitive response.',
        list: [
          'Do not treat a process break like routine housekeeping.',
          'Wait for operator instruction before re-entering a nearby zone.',
          'Moving filament, heated surfaces, and rotating elements can remain hazardous during upset response.',
        ],
      },
      {
        heading: 'Retrofit Crews Need Boundary Discipline',
        sub: 'Control-system work can still place people into a mechanical hazard field.',
        body: 'Instrumentation, drives, and controls work near the fiberizing unit must account for motion, restart, and area access. Your task may be electrical or controls-focused, but the physical hazard field stays mechanical and thermal.',
        list: [
          'Plan where you can stand, where tools can be staged, and when access is safe.',
          'Coordinate test cycles and restart timing with operations.',
          'Never assume slow-looking process motion is harmless.',
        ],
      },
    ],
    quiz: [
      { q: 'Why is a fiberizing/spinner zone different from a normal material-handling area?', options: ['It has no moving parts', 'It combines hot material, rotating elements, and upset-sensitive process behavior', 'It is only hazardous when shut down', 'It is mainly an office support area'], answer: 1 },
      { q: 'How should a non-operator react to a filament break or process upset?', options: ['Step closer to diagnose it', 'Stay clear and let authorized operators manage the response', 'Grab the nearest loose material', 'Move barriers for visibility'], answer: 1 },
      { q: 'What should never be assumed about slow or delicate-looking process motion?', options: ['That it is harmless', 'That it is documented', 'That it belongs to operations', 'That it can restart'], answer: 0 },
      { q: 'What must retrofit crews coordinate before testing nearby controls?', options: ['Only their own laptop battery', 'Restart timing, access status, and where people will stand', 'The cafeteria schedule', 'Marketing approval'], answer: 1 },
      { q: 'What is the correct posture around no-go zones and guarding?', options: ['Treat them as optional for experienced visitors', 'Respect them fully and stay outside unless specifically authorized', 'Cross them after making eye contact', 'Lean through for a better look'], answer: 1 },
    ],
  },
  {
    path: '/mat-forming-line',
    label: 'Mat Forming Line Safety',
    short: 'Moving Web, Rollers, Visibility, and Intervention Control',
    icon: '📜',
    color: '#00BFFF',
    regulation: 'Awareness Only — Mat-line moving web, roller, and intervention hazard awareness',
    audience: 'Operations support, controls retrofit teams, maintenance, and escorted visitors',
    minutes: 18,
    slides: [
      {
        heading: 'The Moving Web Creates Continuous Exposure',
        sub: 'A quiet line can still pull, pinch, or obscure risk.',
        body: 'Mat-forming lines involve moving web, rollers, conveyors, tension zones, and visibility challenges. Do not treat a broad flat line like an open walkway or an easy place to stand.',
        list: [
          'Keep clear of rollers, pinch points, infeed/outfeed zones, and moving web paths.',
          'Stay on approved walk routes rather than cutting through line areas.',
          'Loose clothing, tools, and distraction do not belong near the web path.',
        ],
      },
      {
        heading: 'Visibility Can Be Worse Than It Looks',
        sub: 'Line length and process focus reduce how quickly operators see you.',
        body: 'Forming lines often create long sight lines, partial obstructions, and operator attention focused on the material path. A person drifting into a bad location may not be noticed soon enough.',
        list: [
          'Never assume an operator sees you because you can see the operator.',
          'Do not stand in corners, crossover points, or blind-side access pockets.',
          'Use designated crossings and wait points only.',
        ],
      },
      {
        heading: 'Intervention Must Be Controlled',
        sub: 'Cleanout, thread-up, adjustment, and jam response are not casual tasks.',
        body: 'Any task that places hands, tools, or body parts near rollers or web path belongs to authorized procedure. Even non-production work can become high risk the moment it enters the hazard zone.',
        list: [
          'Ask where the intervention boundary begins.',
          'Do not normalize “quick fixes” on a moving line.',
          'Restarts must be deliberate, communicated, and verified.',
        ],
      },
    ],
    quiz: [
      { q: 'Why is a mat-forming line hazardous even when it looks calm?', options: ['Because it is always shut down', 'Because moving web, rollers, and tension zones create continuous exposure', 'Because the floor is always wet', 'Because the product is too light to notice'], answer: 1 },
      { q: 'What should you assume about operator visibility on a long forming line?', options: ['They automatically see everyone', 'They may not see a pedestrian in time', 'They can watch every angle', 'Visibility is never an issue'], answer: 1 },
      { q: 'Which task belongs to controlled procedure rather than improvisation?', options: ['Standing in a marked walkway', 'Looking at a sign', 'Thread-up, cleanout, or jam response near the web path', 'Reading a map'], answer: 2 },
      { q: 'What is the right behavior around designated crossings?', options: ['Use them and avoid cutting through live line areas', 'Ignore them when the line is quiet', 'Stand in them to observe', 'Move barriers to shorten the route'], answer: 0 },
      { q: 'What should happen before any restart after an intervention?', options: ['Nothing if the area seems clear', 'A controlled, communicated, verified restart', 'Only a visual guess', 'A contractor hand signal'], answer: 1 },
    ],
  },
  {
    path: '/fiberglass-dust',
    label: 'Fiberglass Dust & Irritation Awareness',
    short: 'Fiber Contact, Eye/Skin Protection, and Cleanup Control',
    icon: '🫧',
    color: '#00D1C1',
    regulation: 'Awareness Only — Fiberglass dust, irritation, and housekeeping awareness',
    audience: 'All personnel entering fiberglass production, finishing, cleanup, or maintenance areas',
    minutes: 16,
    slides: [
      {
        heading: 'Fiberglass Exposure Is Often an Irritation Problem First',
        sub: 'Comfort issues are safety issues when they change behavior.',
        body: 'Fiberglass dust and loose fibers can irritate eyes, skin, nose, and throat. Workers who do not expect that exposure may start rubbing eyes, adjusting PPE poorly, or rushing cleanup in unsafe ways.',
        list: [
          'Use required eye protection, skin coverage, and any assigned respiratory controls.',
          'Do not wipe eyes or face with contaminated gloves or sleeves.',
          'Respect local cleanup and hygiene rules before eating, drinking, or touching your face.',
        ],
      },
      {
        heading: 'Good Housekeeping Prevents Secondary Exposure',
        sub: 'Dust and loose fiber should be controlled, not spread.',
        body: 'Dry sweeping, compressed air misuse, and casual cleanup can redistribute irritating material. Follow the plant’s approved cleanup method instead of creating a wider exposure field.',
        list: [
          'Use the approved cleanup approach for the area.',
          'Keep contaminated waste contained and disposed of correctly.',
          'Do not turn housekeeping into airborne exposure for others.',
        ],
      },
      {
        heading: 'Personal Habits Matter in Fiberglass Areas',
        sub: 'A small bad habit can create hours of discomfort or a real eye exposure.',
        body: 'The right habit is deliberate: stop, decontaminate, clean your hands, and follow wash-up or clothing-handling rules before leaving the area or touching exposed skin.',
        list: [
          'Know where wash stations and eyewash units are located.',
          'Report significant eye, skin, or breathing irritation promptly.',
          'Treat contaminated clothing and gloves as part of the exposure control problem.',
        ],
      },
    ],
    quiz: [
      { q: 'What is a common immediate effect of fiberglass dust or loose-fiber exposure?', options: ['Magnetic interference', 'Eye, skin, nose, or throat irritation', 'Instant hearing loss', 'No possible symptoms'], answer: 1 },
      { q: 'Why is rubbing your eyes with contaminated gloves dangerous?', options: ['It improves visibility', 'It can worsen or create an eye exposure', 'It cools the gloves', 'It has no effect'], answer: 1 },
      { q: 'What is wrong with casual dry sweeping or compressed-air cleanup?', options: ['It can spread irritating material into the air and onto others', 'It is too quiet', 'It reduces exposure', 'It always saves time safely'], answer: 0 },
      { q: 'What should you know before entering fiberglass handling areas?', options: ['Only the break schedule', 'Where the hygiene and eye-flush resources are and what PPE is required', 'The parking policy only', 'Nothing if visiting briefly'], answer: 1 },
      { q: 'How should contaminated gloves or clothing be treated?', options: ['As part of exposure control, not as an afterthought', 'As harmless once dry', 'As normal office wear', 'As optional PPE'], answer: 0 },
    ],
  },
  {
    path: '/binder-resin-sizing',
    label: 'Binder / Resin / Sizing Chemical Safety',
    short: 'Mixing, Exposure Prevention, and Spill Response',
    icon: '🧪',
    color: '#FFD100',
    regulation: 'Awareness Only — Binder, resin, sizing, and additive hazard awareness',
    audience: 'Mix room staff, maintenance, controls contractors, and nearby line personnel',
    minutes: 20,
    slides: [
      {
        heading: 'Chemical Awareness Is Part of the Fiberglass Process',
        sub: 'These systems are not optional background utilities.',
        body: 'Binder, resin, sizing, and additive systems can create splash, skin, inhalation, reactivity, and housekeeping hazards. Even personnel who are not mixing chemicals directly need to know what area controls and labels mean.',
        list: [
          'Read labels and know where SDS access is located.',
          'Do not assume a tote, line, or mix tank is harmless because it is near a production area.',
          'Follow area PPE and restricted-access rules.',
        ],
      },
      {
        heading: 'Mixing and Transfer Are Exposure Moments',
        sub: 'Most chemical problems start during movement, not storage.',
        body: 'Connecting hoses, opening tanks, transferring additives, and cleaning mix equipment can expose workers quickly. The right controls should already be in place before the system is opened.',
        list: [
          'Confirm the material and destination before transfer.',
          'Use the PPE, ventilation, and spill materials specified for the task.',
          'Do not improvise hose changes, bypasses, or container substitutions.',
        ],
      },
      {
        heading: 'Spill and Contact Response Must Be Immediate and Correct',
        sub: 'Delay and guesswork make chemical events worse.',
        body: 'Know how to escalate a spill, where the eyewash or shower is, and what first actions the local procedure expects. Awareness training does not replace plant procedure, but it should stop you from doing the wrong thing.',
        list: [
          'Report releases promptly and control access around the area.',
          'Use emergency eyewash or shower equipment immediately when required.',
          'Do not mix unknown residues or cleanup chemicals together.',
        ],
      },
    ],
    quiz: [
      { q: 'Why do binder, resin, and sizing systems deserve dedicated awareness?', options: ['They are only product-quality concerns', 'They can create splash, inhalation, and contact hazards during normal work', 'They are harmless once labeled', 'They do not affect nearby personnel'], answer: 1 },
      { q: 'When do many chemical exposures occur?', options: ['Only during annual shutdowns', 'During mixing, transfer, connection, and cleanup tasks', 'Only inside laboratories', 'Only after a fire'], answer: 1 },
      { q: 'What should be confirmed before transferring a chemical?', options: ['Only the color', 'The material identity and destination, along with required controls', 'Only the shift leader’s mood', 'Nothing if the hose fits'], answer: 1 },
      { q: 'What should you do first in a serious splash or exposure event?', options: ['Wait to see if it improves', 'Use the emergency response equipment/procedure immediately and report it', 'Keep working', 'Hide the spill'], answer: 1 },
      { q: 'What is wrong with improvised hose changes or container substitutions?', options: ['They can defeat the intended controls and create misapplication or exposure', 'They are always faster and safer', 'They reduce the need for labels', 'Nothing if done carefully'], answer: 0 },
    ],
  },
  {
    path: '/glass-line-loto',
    label: 'Jam Clearing / String-Up / Cleanout LOTO — Glass Mat Line',
    short: 'Intervention Safety for Rollers, Winders, and Cleanout Tasks',
    icon: '🔒',
    color: '#FF3B30',
    regulation: 'Awareness Only — Intervention, string-up, and isolation awareness on fiberglass lines',
    audience: 'Maintenance, controls retrofit teams, operators in training, and contractors',
    minutes: 20,
    slides: [
      {
        heading: 'Intervention Work Is Where Routine Production Stops Being Routine',
        sub: 'String-up, cleanout, and jam clearing expose the body to the hazard zone.',
        body: 'The glass mat line may run quietly and continuously, but intervention tasks change the risk immediately. The line can still hold mechanical, electrical, pneumatic, and restart danger even when material motion appears stopped.',
        list: [
          'Stopped material is not proof of zero energy.',
          'Intervention work belongs to authorized procedure and isolation discipline.',
          'Restart must be controlled, communicated, and verified.',
        ],
        callout: {
          label: 'LOTO AWARENESS',
          text: 'This module supports line-intervention awareness. Site-specific lockout procedure still governs any real isolation task.',
          color: '#FFA726',
        },
      },
      {
        heading: 'String-Up and Cleanout Need the Same Respect as Repair Work',
        sub: 'If your hands or tools enter the hazard zone, the risk is real.',
        body: 'Workers often underestimate cleaning or threading tasks because they are common. But the danger comes from where the body goes, not from whether the task feels routine.',
        list: [
          'Do not call it “just cleaning” if the task enters the hazard zone.',
          'Ask what stored motion, pneumatic, electrical, or mechanical energy remains.',
          'Know who authorizes isolation and who authorizes restart.',
        ],
      },
      {
        heading: 'Controls Retrofit Crews Need Restart Discipline',
        sub: 'A controls team can create restart risk even with good intentions.',
        body: 'During commissioning or retrofit, changes to sensors, drives, or sequence logic can trigger unexpected motion or confusion about machine status. Testing must be coordinated so nobody is inside the danger area when a restart or jog occurs.',
        list: [
          'Do not assume the line may be restarted because your own task is finished.',
          'Verify all personnel are clear before any restart or test cycle.',
          'Treat drive changes and sequence edits as part of machine safety planning.',
        ],
      },
    ],
    quiz: [
      { q: 'Why are jam clearing and string-up high-risk tasks?', options: ['Because they are paperwork heavy', 'Because they place the body near rollers, winders, and restart hazards', 'Because they only happen on night shift', 'Because they are too slow'], answer: 1 },
      { q: 'What is wrong with assuming stopped material means zero energy?', options: ['Nothing if the area is quiet', 'Material can be stopped while hazardous energy still exists', 'It is the same as full isolation', 'It only matters for electricians'], answer: 1 },
      { q: 'How should intervention work near the glass mat line be treated?', options: ['As routine housekeeping', 'As authorized procedure with controlled isolation/restart discipline', 'As optional if done quickly', 'As a visitor activity'], answer: 1 },
      { q: 'When does a task stop being “just cleaning”?', options: ['When it enters the hazard zone', 'When the floor is dirty', 'Only after an injury', 'Only during shutdown'], answer: 0 },
      { q: 'What should workers ask before entering the line hazard area?', options: ['What stored energy and restart potential remain', 'Who wants the task finished first', 'Whether the line sounds loud', 'How close they can stand for a photo'], answer: 0 },
      { q: 'Why do controls retrofit crews need restart discipline?', options: ['Because sequence or drive changes can create unexpected motion or restart confusion', 'Because controls work removes all hazards', 'Because only operators can restart anything', 'Because software has no safety impact'], answer: 0 },
      { q: 'What should happen before any restart or test cycle?', options: ['Assume the area is clear', 'Verify all personnel are clear and the restart is controlled', 'Sound no alarm to avoid confusion', 'Let anyone nearby decide'], answer: 1 },
    ],
  },
]

function makeModuleComponent(module) {
  return function GlassFiberglassModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const GlassMeltFurnaceTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[0])
export const MarbleMeltFeedTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[1])
export const ForehearthTransferTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[2])
export const FiberizingSpinnerTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[3])
export const MatFormingLineTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[4])
export const FiberglassDustTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[5])
export const BinderResinSizingTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[6])
export const GlassLineLOTOTraining = makeModuleComponent(GLASS_FIBERGLASS_PHASE1_MODULES[7])
