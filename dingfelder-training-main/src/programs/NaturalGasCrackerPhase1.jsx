import TrainingModuleShell from './TrainingModuleShell.jsx'

export const NATURAL_GAS_CRACKER_PHASE1_MODULES = [
  {
    path: '/cracker-feed-gas',
    label: 'Feed Gas Compression & Hydrocarbon Release Awareness',
    short: 'Compressors, Isolation, and Leak Recognition in Hydrocarbon Service',
    icon: '🛢️',
    color: '#FFB000',
    regulation: 'Awareness Only — Hydrocarbon compression, leak recognition, and release-zone discipline',
    audience: 'Operations support, controls teams, contractors, and escorted maintenance personnel',
    minutes: 20,
    slides: [
      {
        heading: 'Compression Areas Stay Dangerous Even When They Sound Normal',
        sub: 'Quiet rotating equipment can still be handling large hydrocarbon inventory.',
        body: 'Feed gas systems in a cracker plant move flammable hydrocarbons under pressure through compressors, coolers, valves, seals, and piping. Normal operation can still present fire, release, and rotating-equipment hazards. The safe assumption is that any hydrocarbon compression area must be entered with route discipline, leak awareness, and clear understanding of who owns the equipment.',
        list: [
          'Treat seal areas, vents, drains, and flanges as possible release points.',
          'Stay out of barricaded release zones, rotating-equipment envelopes, and operator-only work areas.',
          'A machine that looks calm may still be carrying flammable gas at high pressure.',
        ],
        callout: {
          label: 'RULE',
          text: 'Do not approach feed gas compression equipment casually. Hydrocarbon inventory and ignition risk remain present during routine operation.',
          color: '#FFB000',
        },
      },
      {
        heading: 'Release Recognition Must Be Fast and Conservative',
        sub: 'Smell, vapor, frost, noise, or abnormal alarms are not observation opportunities.',
        body: 'Gas release signs can include odor, haze, visible vapor, frost, unusual compressor sound, pressure swings, or alarms. Even small leaks can create a flammable cloud or escalate into a larger upset. The correct response is to stop, leave the area by the approved route, notify operations, and avoid creating an ignition source or crossing into the release path.',
        list: [
          'Do not investigate a suspected hydrocarbon leak alone.',
          'Move crosswind or upwind if the route allows and follow site emergency direction.',
          'Report abnormal sound, vibration, or leak indications immediately to the unit owner.',
        ],
      },
      {
        heading: 'Isolation and Restart Belong to Procedure, Not Improvisation',
        sub: 'Hydrocarbon systems punish shortcuts.',
        body: 'Compression systems may involve interlocks, antisurge control, lube systems, seal systems, venting sequences, and coordinated start-stop logic. No contractor or support worker should improvise on a live system or assume that stopping one motor has made the system safe. Any isolation, line opening, or restart requires the plant procedure and the responsible operations lead.',
        list: [
          'Do not defeat permissives, trips, or bypass management controls.',
          'Assume pressure can remain trapped even after apparent shutdown.',
          'Coordinate all intrusive work with operations, maintenance, and the approved permit path.',
        ],
      },
    ],
    quiz: [
      { q: 'What is the safest assumption in a feed gas compression area?', options: ['It is safe if there is no visible flame', 'The area can still contain flammable hydrocarbon inventory during normal operation', 'Only operators need to worry about releases', 'Noise level determines hazard level'], answer: 1 },
      { q: 'What should you do if you detect odor, haze, frost, or abnormal compressor sound?', options: ['Move closer to confirm the source', 'Leave by the approved route and notify operations', 'Wait to see if it clears on its own', 'Touch the piping to check vibration'], answer: 1 },
      { q: 'Why is a simple motor stop not enough to declare the system safe?', options: ['Because operators prefer extra paperwork', 'Because pressure, interlocks, and trapped hydrocarbon inventory may still remain', 'Because compression hazards only disappear after a full shift', 'Because every shutdown means the area is closed for weeks'], answer: 1 },
      { q: 'Which area behavior is acceptable?', options: ['Crossing barricades for a better view', 'Investigating a suspected leak alone', 'Following the unit owner’s route and access limits', 'Assuming all gas releases smell strong'], answer: 2 },
      { q: 'What belongs to procedure rather than improvisation?', options: ['Leak recognition and emergency reporting', 'Isolation, bypass, and restart actions on live hydrocarbon systems', 'Walking through a compressor area', 'Reading a unit sign'], answer: 1 },
    ],
  },
  {
    path: '/cracker-furnace',
    label: 'Cracker Furnace / Pyrolysis Heater Safety',
    short: 'Fired Heater Zones, Coil Failure Awareness, and Hot-Side Discipline',
    icon: '🔥',
    color: '#FF6B00',
    regulation: 'Awareness Only — Fired-heater hot-zone, combustion, and upset hazard awareness',
    audience: 'Operations support, controls contractors, maintenance planners, and escorted visitors',
    minutes: 22,
    slides: [
      {
        heading: 'The Furnace Is a Major Process Hazard, Not Just a Hot Machine',
        sub: 'Heat, fuel, pressure, and hydrocarbon cracking all exist together.',
        body: 'A cracker furnace combines burners, combustion air, fuel systems, radiant heat, tube metal limits, process hydrocarbon feed, steam, and upset potential in one operating envelope. It must be treated as a restricted hot zone with serious line-of-fire consequences if combustion stability or process integrity is lost.',
        list: [
          'Respect furnace-area access rules, radiant heat boundaries, and operating barricades.',
          'Do not assume the hazard is limited to visible flame.',
          'Treat the furnace as both a fired heater and a hydrocarbon process unit.',
        ],
        callout: {
          label: 'HOT-ZONE RULE',
          text: 'Stay out of the furnace operating envelope unless the task, route, and responsible lead have cleared you into the area.',
          color: '#FF6B00',
        },
      },
      {
        heading: 'Abnormal Combustion or Coil Problems Require Immediate Respect',
        sub: 'Flame behavior, tube distress, and furnace alarms are escalation signals.',
        body: 'Poor flame appearance, burner instability, abnormal stack conditions, tube hot spots, loud events, or unexpected trips can indicate a furnace upset. Personnel should not crowd the area to observe. Furnaces are governed by purge rules, permissives, shutdown logic, and operations procedure because the consequences of a bad restart or unstable condition can escalate quickly.',
        list: [
          'Never bypass flame-safeguard, trip, purge, or permissive logic.',
          'Treat unusual flame, vibration, pressure behavior, or hot-side changes as operator-owned events.',
          'Keep non-essential personnel clear during upset, troubleshooting, or restart activity.',
        ],
      },
      {
        heading: 'Maintenance and Controls Work Must Respect Process Ownership',
        sub: 'Instrumentation work does not remove fired-equipment risk.',
        body: 'Controls or instrumentation staff can become focused on loops, transmitters, cabinets, or burner management hardware and lose sight of the larger furnace hazard. Any work touching combustion, trips, permissives, or shutdown logic belongs under the plant’s management of change, procedure, and task control system.',
        list: [
          'Do not treat burner controls as ordinary panel work.',
          'Coordinate intrusive work with operations and the authorized maintenance path.',
          'If the task changes furnace safety logic, treat it as high-consequence work.',
        ],
      },
    ],
    quiz: [
      { q: 'Why is a cracker furnace more than a simple hot surface hazard?', options: ['Because it combines fuel, combustion, hydrocarbon process service, and pressure-related consequences', 'Because furnaces are only dangerous during startup', 'Because the flame is always visible from every angle', 'Because the danger ends outside the control room'], answer: 0 },
      { q: 'What should you do if flame behavior or furnace conditions appear abnormal?', options: ['Move closer for a better look', 'Treat it as an escalation signal and stay clear unless assigned by procedure', 'Reset local controls immediately', 'Assume the issue is cosmetic'], answer: 1 },
      { q: 'Which control action is never acceptable?', options: ['Following the approved restart sequence', 'Coordinating with operations before intrusive work', 'Bypassing purge or flame-safeguard logic to speed testing', 'Respecting access limits'], answer: 2 },
      { q: 'What is the correct mindset for instrumentation work around furnace safety systems?', options: ['It is routine panel work only', 'It still belongs under process ownership and high-consequence controls', 'Only electricians need to think about it', 'It removes the need for area restrictions'], answer: 1 },
      { q: 'Who controls entry and task permission in the furnace operating envelope?', options: ['Any nearby contractor', 'The responsible plant lead and procedure', 'The first person who arrives', 'Only the shift after dark'], answer: 1 },
    ],
  },
  {
    path: '/cracker-quench-fractionation',
    label: 'Quench, Fractionation & Cryogenic Cold-Section Awareness',
    short: 'Quench Towers, Cold Exchangers, and Severe Temperature-Shift Hazards',
    icon: '❄️',
    color: '#52E5FF',
    regulation: 'Awareness Only — Hot-to-cold process transition, quench, and cryogenic exposure awareness',
    audience: 'Operations support, maintenance, controls teams, and escorted contractors',
    minutes: 19,
    slides: [
      {
        heading: 'Cracker Plants Transition From Extreme Heat to Extreme Cold',
        sub: 'The hazard profile changes quickly across the unit.',
        body: 'After cracking, gas is cooled, quenched, compressed, and separated through systems that may include severe temperature differences, heavy hydrocarbon service, fractionation, refrigeration, and condensation. Workers can move from hot areas to unexpectedly cold equipment and still remain inside a serious process hazard zone.',
        list: [
          'Do not assume a colder area is a lower-risk area.',
          'Treat quench and fractionation systems as process-critical hydrocarbon service.',
          'Watch for both thermal injury and release consequences in the same work scope.',
        ],
      },
      {
        heading: 'Cryogenic Surfaces and Cold Releases Need Respect',
        sub: 'Cold burns, brittle materials, and visibility issues can appear fast.',
        body: 'Cold boxes, exchangers, low-temperature lines, and refrigeration equipment can create frost, condensation, brittle metal behavior, and severe contact injury. A release can obscure vision, reduce traction, or displace breathable air in localized areas depending on the material and ventilation. The safe response is to stay out of the affected zone and escalate through operations procedure.',
        list: [
          'Do not touch frosted or visibly cold process equipment.',
          'Treat unexpected frosting, dense vapor, or cold leak indications as abnormal conditions.',
          'Use the plant route and exclusion boundaries during any suspected cold release.',
        ],
        callout: {
          label: 'TEMPERATURE RULE',
          text: 'Extreme cold is still severe process energy. Cold-looking equipment can injure instantly or fail without warning.',
          color: '#52E5FF',
        },
      },
      {
        heading: 'Line Opening and Maintenance Require Stronger Control Here',
        sub: 'Quench and cold-section tasks can combine trapped liquid, pressure, and temperature shock.',
        body: 'Opening, draining, warming, or isolating quench and cryogenic process sections requires exact procedure. Trapped pressure, trapped liquid, cold embrittlement, and misidentified service can make a minor-looking task become a release event. Follow permit, isolation, and line-opening controls exactly and never improvise around drains, vents, or cold equipment.',
        list: [
          'Verify service, temperature condition, and residual inventory before disturbing equipment.',
          'Do not loosen fittings or crack flanges to “see what is left.”',
          'Use the plant’s approved warm-up, isolation, and release controls.',
        ],
      },
    ],
    quiz: [
      { q: 'What is dangerous about the quench and cold section of a cracker plant?', options: ['Only the cold temperature', 'The combination of hydrocarbon service, pressure, and severe temperature changes', 'Nothing after the furnace', 'Only operator fatigue'], answer: 1 },
      { q: 'How should unexpected frost or dense vapor around cold equipment be treated?', options: ['As a normal sign of good cooling', 'As an abnormal condition that requires area respect and escalation', 'As permission to touch the line carefully', 'As a cosmetic issue only'], answer: 1 },
      { q: 'Why is line opening especially sensitive in the cold section?', options: ['Because the tools are heavier', 'Because trapped liquid, pressure, and cold conditions can escalate quickly', 'Because only day shift can do it', 'Because the area is quieter'], answer: 1 },
      { q: 'What should you never do around frosted process equipment?', options: ['Touch it to estimate temperature', 'Respect exclusion boundaries', 'Report abnormal conditions', 'Follow approved routes'], answer: 0 },
      { q: 'Why is a cold area not automatically a low-risk area?', options: ['Because risk depends on color coding only', 'Because severe process energy still exists in low-temperature hydrocarbon systems', 'Because cold removes pressure', 'Because cryogenic systems only run during shutdown'], answer: 1 },
    ],
  },
  {
    path: '/cracker-flare-relief',
    label: 'Flare, Relief & Upset Vent System Awareness',
    short: 'Relief Devices, Flares, Smoky Events, and Unit-Upset Respect',
    icon: '🚨',
    color: '#FF4D6D',
    regulation: 'Awareness Only — Relief-system, flare, and upset-event hazard awareness',
    audience: 'All cracker-unit support personnel, contractors, and escorted visitors',
    minutes: 17,
    slides: [
      {
        heading: 'The Flare System Exists Because the Unit Can Upset',
        sub: 'A flare is a protective system, not background scenery.',
        body: 'Flares, relief valves, knock-out systems, and vent headers are part of the plant’s protective response to abnormal pressure or process conditions. Visible flame, smoky events, loud venting, or sudden flare changes mean the unit may be relieving hydrocarbon or process inventory under upset conditions. That demands conservative behavior from everyone nearby.',
        list: [
          'Do not move toward the event to see what changed.',
          'Assume abnormal flare behavior means the process is under stress.',
          'Stay clear of vent points, relief-discharge areas, and operator response paths.',
        ],
        callout: {
          label: 'UPSET RULE',
          text: 'If the flare looks or sounds abnormal, treat the unit as being in upset response until operations says otherwise.',
          color: '#FF4D6D',
        },
      },
      {
        heading: 'Relief Devices and Vent Paths Must Never Be Treated Casually',
        sub: 'They protect the system by moving hazardous material somewhere else.',
        body: 'Pressure relief devices may discharge flammable or hazardous material to a collection or flare system. That means the hazard has not vanished; it has been redirected. Workers must know where relief paths exist, respect exclusion zones, and never block, cap, isolate, or otherwise interfere with protective devices or discharge routing.',
        list: [
          'Do not park equipment or stage work in known relief-discharge or venting areas.',
          'Never alter relief-device settings or discharge piping outside the authorized engineering path.',
          'Support personnel should know the muster and communications expectation during unit upsets.',
        ],
      },
      {
        heading: 'Communications and Muster Discipline Matter During Upsets',
        sub: 'The unit owner needs room to work.',
        body: 'When a cracker unit is relieving, flaming unusually, or responding to an upset, operations, control room staff, and emergency response teams need clear routes and clean decision-making. Non-essential personnel should follow plant direction, report their status if required, and avoid adding confusion to the response.',
        list: [
          'Follow announced muster, shelter, or evacuation direction immediately.',
          'Do not congest control points, gates, or operator access routes.',
          'Use the approved communication path instead of rumor or self-dispatch.',
        ],
      },
    ],
    quiz: [
      { q: 'What does abnormal flare behavior usually mean?', options: ['The plant is creating a visual effect', 'The process may be in upset response or relieving pressure', 'The area is automatically safe because pressure has been removed', 'Only maintenance should notice it'], answer: 1 },
      { q: 'Why should workers avoid relief-discharge and vent areas?', options: ['Because those zones can receive hazardous material during an upset', 'Because they are always empty', 'Because only office staff may enter', 'Because the noise is annoying'], answer: 0 },
      { q: 'What should non-essential personnel do during a unit upset?', options: ['Move closer to help unless stopped', 'Follow plant direction and keep response routes clear', 'Ignore it unless a fire truck arrives', 'Post rumors to coworkers'], answer: 1 },
      { q: 'What is never acceptable around a relief device?', options: ['Understanding where it discharges', 'Respecting its function', 'Blocking or altering it outside the authorized engineering path', 'Staying clear during a release'], answer: 2 },
      { q: 'What is the flare system best understood as?', options: ['A decorative flame', 'A protective system responding to abnormal process conditions', 'A sign that no hazard remains', 'An optional utility'], answer: 1 },
    ],
  },
  {
    path: '/cracker-process-safety-gas-release',
    label: 'Process Safety / Gas Release Control',
    short: 'PSM Mindset, Unit Ownership, and Serious Release Prevention',
    icon: '🧠',
    color: '#FF8A00',
    regulation: 'Awareness Only — Process safety management mindset and gas-release consequence awareness',
    audience: 'All cracker-unit support personnel, contractors, visitors, and control-system contributors',
    minutes: 18,
    slides: [
      {
        heading: 'The Major Risk Is Loss of Containment',
        sub: 'Process safety is about preventing the rare event that changes everything.',
        body: 'In a natural gas cracker plant, the worst events usually come from loss of containment, bad isolation, wrong line-up, failed safeguards, uncontrolled ignition, or process deviation that grows faster than people can react. Process safety asks a different question than personal safety: not only “can this hurt one person,” but “can this become a unit event.”',
        list: [
          'Take permits, line-ups, overrides, and alarm response seriously.',
          'Understand that one wrong action can affect an entire unit, not just a single workstation.',
          'Respect process ownership, shift handoff, and formal change control.',
        ],
        callout: {
          label: 'PSM RULE',
          text: 'Do not normalize deviations, nuisance alarms, bypasses, or “temporary” conditions on hydrocarbon units.',
          color: '#FF8A00',
        },
      },
      {
        heading: 'Controls, Instrumentation, and Maintenance Changes Can Be High Consequence',
        sub: 'Small technical edits can change the plant’s defensive layers.',
        body: 'A control logic edit, temporary bypass, blocked valve, calibration change, or undocumented field adjustment can weaken layers of protection that operators expect to be available. That is why management of change, permit discipline, and unit-owner coordination exist. The safest contributors understand the process role of the equipment they touch.',
        list: [
          'Do not assume a controls task is low-risk just because it is software or instrumentation work.',
          'Escalate any unexpected deviation between field condition, drawing, and procedure.',
          'Use the plant approval path for overrides, bypasses, temporary changes, or modified sequences.',
        ],
      },
      {
        heading: 'Gas Release Control Starts Before the Leak',
        sub: 'Orderly work prevents emergency response from becoming the first barrier.',
        body: 'Good release prevention means correct line identification, proper isolation, valve verification, communication, walkdown discipline, and stopping when something does not match the plan. The response to uncertainty is not to continue carefully. It is to stop and resolve the uncertainty before hazardous material is set free.',
        list: [
          'Verify system identity before touching valves, vents, drains, or blinds.',
          'Do not proceed through uncertainty around pressure, product, or destination.',
          'Release prevention is successful when the emergency never has to happen.',
        ],
      },
    ],
    quiz: [
      { q: 'What is process safety mainly trying to prevent in a cracker plant?', options: ['Only slips and trips', 'Loss of containment and major unit events', 'Routine paperwork delays', 'Normal operator alarms'], answer: 1 },
      { q: 'Why can small controls or instrumentation changes matter so much?', options: ['Because they can affect safeguards and protective layers', 'Because software has no plant consequence', 'Because only mechanics can create risk', 'Because alarms never matter'], answer: 0 },
      { q: 'What should you do when the field condition does not match the drawing or plan?', options: ['Continue carefully', 'Stop and resolve the mismatch through the proper path', 'Guess based on previous experience', 'Ask the nearest person to approve it informally'], answer: 1 },
      { q: 'Which attitude is unsafe on a hydrocarbon unit?', options: ['Respecting temporary bypasses as high-consequence conditions', 'Normalizing nuisance alarms and repeated deviations', 'Using change control', 'Coordinating with the unit owner'], answer: 1 },
      { q: 'What does good gas-release control look like?', options: ['Emergency response is the first barrier', 'Uncertainty is pushed forward slowly', 'The job is arranged so the release never occurs', 'Everyone works independently'], answer: 2 },
    ],
  },
  {
    path: '/cracker-line-opening',
    label: 'Line Opening / Bleeding / Purging Safety',
    short: 'Residual Pressure, Product ID, and Controlled Opening of Process Systems',
    icon: '🧯',
    color: '#FFD100',
    regulation: 'Awareness Only — Line-opening, purging, and residual-inventory control in process systems',
    audience: 'Maintenance, operations support, turnaround crews, and contractors',
    minutes: 20,
    slides: [
      {
        heading: 'A “Dead” Line Can Still Hold Hazardous Material',
        sub: 'Pressure, liquid, vapor, and residue may remain after isolation.',
        body: 'Line opening in cracker service is high-consequence work because trapped pressure, hydrocarbons, steam, condensate, inert gas, or residue can remain in isolated equipment. Labels and assumptions are not enough. The work must follow the site line-opening procedure, verified isolation steps, and the approved vent-drain-purge plan.',
        list: [
          'Do not assume a closed valve means zero inventory.',
          'Verify blinds, valve position, vent paths, and the expected destination of relieved material.',
          'Treat every first crack, drain, or vent point as a possible release point until proven otherwise.',
        ],
        callout: {
          label: 'FIRST-OPEN RULE',
          text: 'The first opening point is the highest-risk moment. Control the release path before disturbing the system.',
          color: '#FFD100',
        },
      },
      {
        heading: 'Bleeding and Purging Must Follow the Plan Exactly',
        sub: 'Improvised venting creates uncontrolled release paths.',
        body: 'Hydrocarbon systems may require staged pressure relief, inerting, steaming, nitrogen purge, or other controlled clearing steps before maintenance begins. Workers must know what is being displaced, where it is going, and how zero-energy or safe-entry condition is verified. Cracking a flange or loosening a fitting to “see if it’s clear” is not verification.',
        list: [
          'Use the approved vent, drain, and purge points only.',
          'Confirm the receiving system or disposal path before moving inventory.',
          'Do not rely on smell, touch, or sound to decide the system is safe.',
        ],
      },
      {
        heading: 'Positioning and PPE Matter During First Disturbance',
        sub: 'Where you stand can decide whether a small problem becomes an injury.',
        body: 'The first disturbance of a process line can produce spray, vapor, pressure release, thermal exposure, or debris. Workers should position out of line of fire, use the assigned PPE, and keep non-essential personnel clear of the release path. If conditions differ from the plan, the correct response is to stop and re-evaluate.',
        list: [
          'Keep your body and face out of the release path during first opening.',
          'Do not crowd the job with unneeded observers.',
          'Stop immediately if actual conditions differ from the expected service or pressure state.',
        ],
      },
    ],
    quiz: [
      { q: 'Why is line opening high-consequence work in a cracker plant?', options: ['Because paperwork takes longer', 'Because isolated systems can still contain pressure, product, or hazardous residue', 'Because all lines are empty after shutdown', 'Because only hot lines matter'], answer: 1 },
      { q: 'What is the safest approach to the first opening point?', options: ['Loosen it slowly and hope for the best', 'Control the release path and follow the approved opening plan', 'Use smell to verify it is safe', 'Stand directly over it to watch closely'], answer: 1 },
      { q: 'Which bleeding or purging action is unacceptable?', options: ['Using approved vent points', 'Confirming the receiving system', 'Cracking a flange to see if the line is clear', 'Following the site procedure'], answer: 2 },
      { q: 'What should happen if the actual service or pressure state differs from the plan?', options: ['Continue more carefully', 'Stop and re-evaluate through the proper path', 'Let one person decide informally', 'Ignore it if the pressure looks low'], answer: 1 },
      { q: 'Why do positioning and PPE matter during first disturbance?', options: ['Because line opening can create spray, vapor, or pressure release into the line of fire', 'Because they make the job faster', 'Because only observers are at risk', 'Because release paths are always predictable'], answer: 0 },
    ],
  },
  {
    path: '/cracker-turnaround-simops',
    label: 'Turnaround, Decoke & SIMOPS Safety',
    short: 'Outage Work, Overlapping Crews, Steam-Out, and Contractor Coordination',
    icon: '🛠️',
    color: '#B86CFF',
    regulation: 'Awareness Only — Turnaround, decoke, and simultaneous-operations risk awareness',
    audience: 'Turnaround crews, contractors, supervisors, planners, and outage support personnel',
    minutes: 18,
    slides: [
      {
        heading: 'Turnaround Work Changes the Risk Profile of the Entire Unit',
        sub: 'More people, more tasks, more interfaces, more chances to be wrong.',
        body: 'During shutdowns, decoke activity, or major maintenance windows, a cracker plant may have overlapping hot work, line opening, scaffolding, heavy lifts, confined-space entry, cleaning, controls work, and restoration tasks happening at once. This is a simultaneous-operations problem, not a single-job problem.',
        list: [
          'Do not treat turnaround work as routine just because production is down.',
          'Expect changing access routes, temporary utilities, new blind locations, and altered traffic patterns.',
          'Know who owns the work zone and how conflicts are resolved before starting.',
        ],
        callout: {
          label: 'SIMOPS RULE',
          text: 'Your permit may be correct and still become unsafe if nearby work changes the unit conditions.',
          color: '#B86CFF',
        },
      },
      {
        heading: 'Decoke and Steam-Out Work Can Reintroduce Serious Hazards',
        sub: 'Cleaning a furnace system does not eliminate pressure, temperature, or release risk.',
        body: 'Decoke, steam-out, and cleaning steps can involve high temperature, water or steam injection, debris removal, venting, and changing system condition. People can be injured by line-of-fire exposure, unexpected discharge, hot condensate, residual hydrocarbons, or bad communication between crews who think the unit is in a different state.',
        list: [
          'Do not assume the system is harmless because it is being cleaned.',
          'Verify the current step of the outage or decoke plan before entering the area.',
          'Respect exclusion zones, observer roles, and communications discipline.',
        ],
      },
      {
        heading: 'Restart Windows Are High Consequence Too',
        sub: 'The job is not over when tools go away.',
        body: 'As equipment is reassembled and the plant moves toward restart, permits close, blinds change, utilities return, and protective systems come back into service. This is a period when assumptions multiply. Teams must verify status, clear personnel, and hand control back in an orderly way so surprise releases or restarts do not occur.',
        list: [
          'Do not remain in a unit area after your work is done unless authorized.',
          'Return tools, blinds, tags, and temporary controls exactly as required.',
          'Treat startup and recommissioning as serious process events, not housekeeping.',
        ],
      },
    ],
    quiz: [
      { q: 'Why are turnaround and SIMOPS periods especially risky?', options: ['Because fewer people are in the unit', 'Because many overlapping jobs can change the hazard picture at once', 'Because process safety rules are relaxed', 'Because hot work is never allowed'], answer: 1 },
      { q: 'What is unsafe to assume during decoke or steam-out?', options: ['That cleaning work has removed all pressure and release hazards', 'That communications matter', 'That exclusion zones should be respected', 'That unit conditions can change'], answer: 0 },
      { q: 'What should you know before starting outage work?', options: ['Who owns the zone, what nearby work is happening, and how conflicts are controlled', 'Only the weather forecast', 'Only your personal checklist', 'The next shift schedule'], answer: 0 },
      { q: 'Why are restart windows high consequence?', options: ['Because nothing changes during restart', 'Because reassembly, blind changes, and return of utilities can create false assumptions and surprise events', 'Because only operators are present', 'Because permits remain open forever'], answer: 1 },
      { q: 'What should happen when your outage task is complete?', options: ['Stay in the area unless told otherwise', 'Leave temporary controls in place for convenience', 'Return the area and status through the required handoff path', 'Let the next crew guess what changed'], answer: 2 },
    ],
  },
  {
    path: '/cracker-psv-drains-sampling',
    label: 'Sampling, Drains & Small-Bore Hydrocarbon Systems',
    short: 'What Looks Minor Can Still Create a Flammable Release',
    icon: '🧪',
    color: '#22CC66',
    regulation: 'Awareness Only — Small-bore hydrocarbon service, drains, vents, and sampling-point discipline',
    audience: 'Operators, lab support, maintenance, and contractors working around process interfaces',
    minutes: 16,
    slides: [
      {
        heading: 'Small Connections Can Create Big Consequences',
        sub: 'Sampling points, drains, vents, and bleeds may hold live process service.',
        body: 'A small valve, tap, bleeder, or sample point can look routine and still release flammable material, high-pressure gas, or hot product directly into the worker’s path. The size of the connection does not reduce the seriousness of the service. Respect every small-bore opening as a controlled process interface.',
        list: [
          'Do not treat sample points or drains as harmless just because they are small.',
          'Know the service, expected pressure, destination, and procedure before operating a point.',
          'Keep your face and body out of the direct discharge path.',
        ],
      },
      {
        heading: 'Routine Tasks Still Need Unit Discipline',
        sub: 'Frequent work is where complacency grows.',
        body: 'Because sampling and drain operations may happen often, workers can begin to skip verification, PPE, or area control. That is when a known point becomes a release event. Confirm the task, use the proper equipment, and control the discharge path every time instead of relying on memory or habit.',
        list: [
          'Follow the assigned sample, drain, or vent procedure exactly.',
          'Wear the specified PPE and keep ignition sources controlled.',
          'Stop if valve position, flow, color, odor, or behavior differs from expectation.',
        ],
        callout: {
          label: 'COMPLACENCY WARNING',
          text: 'Routine does not mean low-risk. Frequent hydrocarbon tasks require stricter discipline, not less.',
          color: '#22CC66',
        },
      },
      {
        heading: 'Unexpected Behavior Means Stop and Escalate',
        sub: 'The safest worker is the one who refuses to normalize bad process behavior.',
        body: 'If flow does not stop when expected, product looks wrong, pressure seems higher than planned, or the point behaves differently than the procedure describes, stop and escalate through operations. Do not continue to “see if it settles out.” Small-bore events can quickly become line-of-fire injuries or ignition hazards.',
        list: [
          'Do not force a valve, over-tighten a fitting, or improvise a catch method.',
          'Keep non-essential personnel away from the task area.',
          'Escalate abnormal sample or drain behavior immediately.',
        ],
      },
    ],
    quiz: [
      { q: 'Why must small-bore hydrocarbon connections be treated seriously?', options: ['Because size does not remove pressure, flammability, or line-of-fire risk', 'Because they are always easy to isolate', 'Because only operators get injured there', 'Because they never contain process fluid'], answer: 0 },
      { q: 'What is the correct attitude toward routine sampling or drain work?', options: ['Routine means low-risk', 'Memory is enough after the first week', 'Procedure and PPE still matter every time', 'Area control is optional'], answer: 2 },
      { q: 'What should you do if a sample or drain point behaves differently than expected?', options: ['Continue slowly', 'Stop and escalate through operations', 'Tighten until it stops', 'Ignore it if the connection is small'], answer: 1 },
      { q: 'What is unsafe during small-bore process work?', options: ['Keeping the body out of the discharge path', 'Confirming service and destination', 'Improvising catch methods or forcing a valve', 'Following the written task'], answer: 2 },
      { q: 'Why is complacency dangerous around frequent hydrocarbon tasks?', options: ['Because repeated familiarity can make people skip critical controls', 'Because the task becomes automated by law', 'Because the hazards disappear over time', 'Because sample points are never live'], answer: 0 },
    ],
  },
  {
    path: '/cracker-emergency-shelter-muster',
    label: 'Cracker Unit Shelter, Muster & Immediate Response',
    short: 'What To Do During a Hydrocarbon Release, Upset, or Unit Emergency',
    icon: '📣',
    color: '#00C2FF',
    regulation: 'Awareness Only — Immediate emergency response behavior in cracker-unit scenarios',
    audience: 'All cracker-unit personnel, contractors, visitors, and support teams',
    minutes: 15,
    slides: [
      {
        heading: 'You Must Know Whether the Unit Uses Evacuation or Shelter',
        sub: 'Hydrocarbon incidents do not all require the same movement.',
        body: 'A natural gas cracker plant may direct people to evacuate, shelter, hold position, or move crosswind depending on what released, where it is going, and what protective systems are operating. That means workers must not rely on guesswork. Follow the site alarm meaning, unit procedure, and the direction from operations or emergency response.',
        list: [
          'Know the difference between unit upset notification and full-site emergency direction.',
          'Do not assume “run away” is always the correct move for every gas event.',
          'Learn the designated muster points, shelter-in-place expectations, and accountability method.',
        ],
        callout: {
          label: 'RESPONSE RULE',
          text: 'The first job in a process emergency is to follow the plant response model exactly, not to improvise your own.',
          color: '#00C2FF',
        },
      },
      {
        heading: 'Accountability Matters During Process Emergencies',
        sub: 'The plant needs to know who is clear and who may still be in the unit.',
        body: 'During a release or flare upset, response leaders must account for employees, contractors, and visitors. That means workers should report status through the correct channel, avoid unplanned movement, and never leave accountability points without authorization. One missing person can change the entire response.',
        list: [
          'Report to the assigned muster or accountability point unless directed otherwise.',
          'Do not self-dispatch into the unit to look for coworkers.',
          'Make sure escorts know visitor status and location if applicable.',
        ],
      },
      {
        heading: 'Your Behavior Must Help the Unit Owner, Not Burden Them',
        sub: 'Clear roads, clear radios, and disciplined movement save time.',
        body: 'Operators, responders, and control room staff need clean communication during a cracker-unit emergency. Avoid rumor traffic, unnecessary radio use, blocked roads, or crowding gates and control points. Non-essential personnel help most by complying immediately and staying out of the response path.',
        list: [
          'Keep response routes and access points open.',
          'Use only approved communication channels for status and instruction.',
          'Wait for the all-clear through the formal plant process before re-entry.',
        ],
      },
    ],
    quiz: [
      { q: 'Why should workers not improvise their own movement during a process emergency?', options: ['Because every hydrocarbon event requires exactly the same action', 'Because the correct response depends on the release and plant procedure', 'Because alarms are optional', 'Because only visitors need direction'], answer: 1 },
      { q: 'Why is accountability so important during a cracker-unit emergency?', options: ['Because one missing person can change the entire response effort', 'Because it replaces all other emergency systems', 'Because it is only for payroll', 'Because it only matters after the event'], answer: 0 },
      { q: 'What should you do after reaching the assigned muster point?', options: ['Leave when you feel safe', 'Wait for the formal all-clear or further direction', 'Re-enter to check equipment', 'Use rumor to decide next steps'], answer: 1 },
      { q: 'What is unsafe during an upset or release response?', options: ['Keeping roads and control points clear', 'Following the approved communication channel', 'Crowding response access routes or self-dispatching into the unit', 'Reporting your status'], answer: 2 },
      { q: 'What determines whether the correct action is shelter, muster, or evacuation?', options: ['Personal preference', 'The specific plant alarm meaning, procedure, and response direction', 'Only the weather', 'Only the time of day'], answer: 1 },
    ],
  },
]

function makeModuleComponent(module) {
  return function NaturalGasCrackerModule() {
    return <TrainingModuleShell module={module} />
  }
}

export const CrackerFeedGasTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[0])
export const CrackerFurnaceTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[1])
export const CrackerQuenchFractionationTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[2])
export const CrackerFlareReliefTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[3])
export const CrackerProcessSafetyTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[4])
export const CrackerLineOpeningTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[5])
export const CrackerTurnaroundTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[6])
export const CrackerSamplingDrainsTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[7])
export const CrackerEmergencyShelterTraining = makeModuleComponent(NATURAL_GAS_CRACKER_PHASE1_MODULES[8])
