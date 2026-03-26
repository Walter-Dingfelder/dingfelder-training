# Filter Port Matrix

## Architecture Rule
- Filters are multi-membership tags.
- A single module can appear in multiple environment or topic filters.
- The `ALL` filter renders each module once.

## Environment Filters
- Campus
- Foundry
- Beam Mill
- Process / Gas
- Cracker Plant
- Waste Water Treatment
- Trucking / Transportation
- Food / Retail
- Glass / Fiberglass

## Topic Filters
- Stored Energy
- Confined Spaces
- Electrical Safety
- Chemical Safety / HazCom
- Respiratory Protection
- Hearing Conservation / Noise Exposure
- Fire Safety / Hot Work
- Machinery Moving / Rigging
- LOTO
- Working at Heights / Fall Protection
- Machine Guarding / Conveyors
- Medical

## New Environment Porting Included
- Common campus/core cards now surface under `Cracker Plant` when they apply.
- Process/Gas hazard cards now cross-list into `Cracker Plant`.
- New Cracker Plant Phase 1 cards also surface under `Process / Gas`.
- Common campus/core cards now surface under `Waste Water Treatment` when they apply.
- Waste Water Treatment now includes a dedicated Phase 1 pack plus cross-ported cards like H₂S, confined space, hot work, and stored-energy topics.

## Portal Layout Rule
- Category filters now render in a responsive wrapped grid.
- At current filter count, desktop renders as a stable dual-row category layout.
- Type filters wrap instead of scrolling off-screen.

## Waste Water Treatment Phase 1
- Headworks, Screening & Influent Pump Station Safety
- Open Basin, Clarifier & Fall / Drowning Hazard Awareness
- Wastewater Atmospheres, H₂S & Gas Detection Awareness
- Digester, Biogas & Flammable Gas System Safety
- Disinfection Chemical Safety — Chlorine, Hypochlorite & Dechlorination
- Polymer, Coagulant & Chemical Feed System Safety
- Biosolids, Dewatering & Sludge Handling Safety
- Wet Well, Sewer Entry & Confined Space Coordination
- Bypass, Overflow, Power Loss & Immediate Response

- The `Confined Spaces` topic filter now cross-lists the general confined-space card, H₂S, respiratory protection, hot work, wet-well entry, and the dedicated Confined Spaces Phase 1 pack.
- Confined-space topic cards can surface across campus and industrial environments without duplicating the underlying route in `ALL`.

## Confined Spaces Phase 1
- Confined Space Permit Roles & Entry Authorization
- Confined Space Atmospheric Testing & Ventilation
- Confined Space Isolation, Blanking & Line Breaking
- Confined Space Attendant Duties & Communications
- Confined Space Retrieval & Rescue Readiness
- Tank, Pit, Hopper & Silo Interior Work Safety
- Sewer, Wet Well & Utility Vault Confined Space Hazards
- Hot Work, Coatings & SIMOPS in Confined Spaces

## Electrical Safety Porting Included
- The `Electrical Safety` topic filter cross-lists the legacy `Arc Flash & Electrical Safety` route plus the dedicated Electrical Safety Phase 1 pack.
- Electrical Safety cards surface across Campus and all industrial environments through the multi-tag registry.
- `Electrical Stored Energy & Discharge Safety`, motor isolation, and battery/DC topics also surface under the Stored Energy topic where they apply.

## Electrical Safety Phase 1
- Shock vs Arc Flash vs Arc Blast
- Electrically Safe Work Condition
- Test Before Touch
- MCC, Switchgear & Panel Access Safety
- Temporary Power, Cords & Portable Equipment
- Motor, VFD & Disconnect Isolation
- Battery Rooms & DC Hazards
- Qualified vs Unqualified Person Boundaries

## Chemical Safety / HazCom Porting Included
- The `Chemical Safety / HazCom` topic filter cross-lists the core `Hazard Communication / SDS / GHS` route plus the dedicated Chemical Safety Phase 1 pack.
- Existing chemical-heavy routes now also surface under the topic filter, including:
  - `Food Plant Chemical Safety & Sanitation`
  - `Ammonia Refrigeration Awareness`
  - `Disinfection Chemical Safety — Chlorine, Hypochlorite & Dechlorination`
  - `Polymer, Coagulant & Chemical Feed System Safety`
  - `Binder / Resin / Sizing Chemical Safety`
  - `H₂S Awareness & SCBA`
  - `Respiratory Protection`
  - `Eye Exposure & Flush Response`
  - `Core Room / Binder / Ventilation Safety`
- Chemical topic cards now surface across Campus and applicable industrial environments through the multi-tag registry.

## Chemical Safety Phase 1
- HazCom Labels, SDS & Pictograms
- Corrosives, Acids, Caustics & Chemical Burn Prevention
- Oxidizers, Reactives & Incompatible Storage
- Solvents, Flammables & Vapor Control
- Toxic Gas, Fume & Inhalation Hazard Awareness
- Chemical Transfer, Sampling & Container Handling
- Spill Response, Isolation & Decontamination Basics
- Waste Handling, Residues & Empty Container Safety

## Respiratory Protection Porting Included
- The `Respiratory Protection` topic filter cross-lists the existing `Respiratory Protection` route plus the dedicated Respiratory Protection Phase 1 pack.
- Existing lung-heavy routes now also surface under the topic filter, including:
  - `H₂S Awareness & SCBA`
  - `Sand System / Dust / Silica Awareness`
  - `Fiberglass Dust & Irritation Awareness`
  - `Wastewater Atmospheres, H₂S & Gas Detection Awareness`
  - `Toxic Gas, Fume & Inhalation Hazard Awareness`
  - `Binder / Resin / Sizing Chemical Safety`
  - `Core Room / Binder / Ventilation Safety`
  - `Ammonia Refrigeration Awareness`
- Respiratory topic cards now surface across Campus and applicable industrial environments through the multi-tag registry.

## Respiratory Protection Phase 1
- Respiratory Hazard Recognition
- Dust, Fume, Mist, Vapor & Gas Basics
- APR vs PAPR vs Supplied Air vs SCBA
- Cartridge Selection & Changeout Basics
- Fit Check, Seal Check & Facial Hair Limits
- Filter Loading, Work Rate & Breathing Resistance
- Cleaning, Storage & Inspection
- IDLH, Oxygen Deficiency & Emergency Escape


## Fire Safety / Hot Work Porting Included
- The `Fire Safety / Hot Work` topic filter cross-lists the existing `Fire Extinguisher Basics` and `Hot Work / Welding / Cutting Permit Safety` routes plus the dedicated Fire Safety / Hot Work Phase 1 pack.
- Existing fire-heavy routes now also surface under the topic filter, including:
  - `Solvents, Flammables & Vapor Control`
  - `Propane Farm Operations Safety`
  - `Flare, Relief & Upset Vent System Awareness`
  - `Digester, Biogas & Flammable Gas System Safety`
  - `Hot Work, Coatings & SIMOPS in Confined Spaces`
- Fire topic cards now surface across Campus and applicable industrial environments through the multi-tag registry.

## Fire Safety / Hot Work Phase 1
- Fire Science, Fuel & Ignition Control
- Hot Work Permits, Boundaries & Fire Watch
- Welding, Cutting, Grinding & Spark Travel Control
- Flammable Atmospheres, Vapors & Area Preparation
- Combustible Dust, Fiber, Oily Waste & Housekeeping
- Portable Extinguishers, Alarm & Incipient-Stage Decisions
- Gas Cylinders, Hoses, Regulators & Torch Setup Safety
- Post-Work Monitoring, Smoldering & Fire System Restoration


## Trucking / Transportation Porting Included
- The `Trucking / Transportation` environment filter cross-lists common campus/core cards through the multi-tag registry.
- Transportation operations now surface shared cards that apply broadly, including:
  - `Hazard Communication / SDS / GHS`
  - `PPE Fundamentals`
  - `Forklift / Powered Industrial Truck Safety`
  - `Fire Extinguisher Basics`
  - `Walking-Working Surfaces / Slip Trip Fall`
  - `Incident Reporting / Near Miss Response`
  - `Contractor Safety Rules`
  - `Severe Weather / Shelter / Accountability`
  - applicable Electrical, Chemical, Respiratory, Fire, and Stored Energy topic cards where they fit the environment
- Transportation-specific cards focus on yard movement, dock safety, coupling work, securement, bulk transfer, fatigue/weather decisions, mixed vehicle traffic, and roadside emergencies.

## Trucking / Transportation Phase 1
- Yard Traffic, Backing & Spotter Coordination
- Loading Dock, Trailer Creep & Drive-Off Prevention
- Coupling, Uncoupling, Chocking & Landing Gear Safety
- Cargo Securement, Flatbeds & Tarping Fall Hazards
- Tanker, Bulk Transfer & Hose Connection Safety
- Driver Fatigue, Weather & Road Condition Decisions
- Pedestrian, Forklift & Heavy Vehicle Interface
- Breakdown, Incident & Highway Emergency Response


## Machinery Moving / Rigging Porting Included
- The `Machinery Moving / Rigging` topic filter cross-lists existing crane and load-handling cards where they already apply, including:
  - `Crane, Ladle & Suspended Load Safety`
  - `Overhead Crane & Rigging`
  - `Pinch Point / Crush Zone / Steel Handling`
  - `Cargo Securement, Flatbeds & Tarping Fall Hazards`
- The new rigging topic pack is cross-listed into industrial environments where machinery moving, lifting, skidding, crane setup, or heavy installation work can occur.

## Machinery Moving / Rigging Phase 1
- Lift Planning, Load Charts & Weight Verification
- Center of Gravity, Stability & Tipping Forces
- Rigging Hardware, Slings & Hitch Selection
- Jacking, Skidding, Rollers & Machinery Moving Paths
- Crane Signaling, Tag Lines & Suspended Load Control
- Mobile Cranes, Outriggers & Ground Bearing Pressure
- Critical Lifts, Tandem Picks & Engineered Lift Plans
- Set-Down, Unrigging & Pinch / Crush Zone Control

## LOTO Topic Filter
- Legacy LOTO routes now surface under the `LOTO` topic filter.
- New shell-based LOTO Phase 1 cards cross-list across campus and the industrial environments where lockout applies.
- Related cards like Glass Line LOTO, Electrically Safe Work Condition, Motor / VFD / Disconnect Isolation, Stored Energy, Cracker Line Opening, and Confined Space Isolation / Blanking now also surface under `LOTO`.


## Working at Heights / Fall Protection Topic Filter
- Existing fall-related cards now surface under the `Working at Heights / Fall Protection` topic filter.
- Cross-ported cards include:
  - `Walking-Working Surfaces / Slip Trip Fall`
  - `Open Basin, Clarifier & Fall / Drowning Hazard Awareness`
  - `Cargo Securement, Flatbeds & Tarping Fall Hazards`
  - `Turnaround, Decoke & SIMOPS Safety`
- The new fall-protection topic pack cross-lists across campus and the industrial environments where ladder access, scaffold work, roofs, aerial lifts, or exposed edges can occur.

## Working at Heights / Fall Protection Phase 1
- Fall Hazard Recognition & Exposure Mapping
- Guardrails, Covers & Floor Opening Control
- Portable & Fixed Ladders / Three-Point Contact
- Scaffolds & Temporary Elevated Work Platforms
- Personal Fall Arrest Systems & Harness Basics
- Anchor Points, Swing Fall & Clearance
- Aerial Lifts / MEWPs & Basket Work
- Roof Work, Fragile Surfaces & Weather Exposure
- Rescue Planning, Suspension Trauma & Post-Fall Response


## Machine Guarding / Conveyors Porting Included
- The `Machine Guarding / Conveyors` topic filter cross-lists existing anchor routes like `Machine Guarding — Molding Line & Conveyors`, `Beam Mill Rolling Line Safety`, `Fiberizing Unit / Spinner / Attenuation Area Safety`, `Mat Forming Line Safety`, `Jam Clearing / String-Up / Cleanout LOTO — Glass Mat Line`, `Pinch Point / Crush Zone / Steel Handling`, `Headworks, Screening & Influent Pump Station Safety`, and `Biosolids, Dewatering & Sludge Handling Safety`.
- The dedicated Machine Guarding / Conveyors Phase 1 pack surfaces across Campus and industrial environments through the multi-tag registry.
- Guarding restart, jam-clearing, and interlock topics also cross-list into `LOTO` where servicing or guard removal transitions into hazardous-energy control.

## Machine Guarding / Conveyors Phase 1
- Guarding Fundamentals & Point of Operation Hazards
- In-Running Nip Points, Pinch Points & Entanglement
- Conveyors, Rollers & Belt Tracking Hazards
- Interlocks, E-Stops & Guard Bypass Risk
- Jam Clearing, Cleaning & Minor Servicing Boundaries
- Rotating Equipment, Shafts, Couplings & Fan Hazards
- Clothing, Gloves, Hair & Entanglement Prevention
- Guard Inspection, Reinstallation & Startup After Guard Removal


## Hearing Conservation / Noise Exposure Porting Included
- The `Hearing Conservation / Noise Exposure` topic filter cross-lists the legacy `Hearing Conservation / Noise Exposure` route plus the dedicated Hearing Conservation Phase 1 pack.
- Hearing cards now surface across Campus and the industrial environments through the multi-tag registry.
- Existing high-noise cards like `Shakeout / Cleaning / Grinding Area Safety`, `Beam Mill Rolling Line Safety`, `Fiberizing Unit / Spinner / Attenuation Area Safety`, `Mat Forming Line Safety`, `Biosolids, Dewatering & Sludge Handling Safety`, and `Yard Traffic, Backing & Spotter Coordination` now also surface under the hearing topic filter where they operationally fit.

## Hearing Conservation / Noise Exposure Phase 1
- Noise Hazard Recognition & Area Mapping
- Hearing Damage, Tinnitus & Exposure Basics
- Earplugs, Earmuffs & Dual Protection
- Fit, Seal, Wear Time & Failure Modes
- Continuous, Impact & Intermittent Noise
- Communication, Alarms & Situational Awareness
- Cleaning, Hygiene, Storage & Replacement
- Audiograms, Threshold Shift & Reporting Symptoms


## Forklifts / Powered Industrial Trucks Porting Included
- The `Forklifts / Powered Industrial Trucks` topic filter cross-lists the existing `Forklift / Powered Industrial Truck Safety` anchor route plus the transportation-side `Loading Dock, Trailer Creep & Drive-Off Prevention`, `Pedestrian, Forklift & Heavy Vehicle Interface`, and `Retail Backroom / Baler / Compactor Safety` cards where PIT exposure is realistic.
- The dedicated PIT Phase 1 pack cross-lists across Campus, Foundry, Beam Mill, Waste Water Treatment, Trucking / Transportation, Food / Retail, and Glass / Fiberglass where forklifts, dock interfaces, mixed traffic, charging, racking, and outdoor yard movement are part of normal operations.
- Battery charging and LPG cylinder changeout topics also surface under `Electrical Safety`, `Chemical Safety / HazCom`, and `Fire Safety / Hot Work` because PIT energy supply work crosses those hazard families directly.

## Forklifts / Powered Industrial Trucks Phase 1
- PIT Stability Triangle, Load Center & Tip-Over Risk
- Pre-Use Inspection, Defect Removal & Out-of-Service Decisions
- Pedestrian Separation, Horn Use & Blind Corner Discipline
- Capacity, Attachments, Long Loads & Unusual Handling Conditions
- Dock Edges, Trailer Entry & Drive-Off Prevention
- Ramps, Grades, Surface Conditions & Travel Speed Control
- Battery Charging, LPG Cylinder Changeout & Refueling Hazards
- Racking, Stacking, Aisle Width & Warehouse Contact Prevention
- Outdoor Yards, Weather, Lighting & Mixed-Traffic Decisions
