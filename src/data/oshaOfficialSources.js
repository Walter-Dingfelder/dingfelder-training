export function getOfficialOshaSources(module) {
  const path = `${module?.path || ""}`.toLowerCase();
  const label = `${module?.label || ""}`.toLowerCase();
  const regulation = `${module?.regulation || ""}`.toLowerCase();
  const haystack = `${path} ${label} ${regulation}`;

  const sourceSets = [
    {
      match: /(lockout|tagout|loto|hazardous energy|stored energy|jam clearing|string-up|cleanout)/,
      title: "Control of Hazardous Energy (Lockout/Tagout)",
      note: "OSHA official lockout/tagout overview, standards, and training references.",
      resources: [
        {
          id: "loto-overview",
          title: "OSHA Lockout/Tagout Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/control-hazardous-energy",
          embedUrl: "https://www.osha.gov/control-hazardous-energy",
        },
        {
          id: "loto-training",
          title: "OSHA Lockout/Tagout Training References",
          kind: "Training library",
          url: "https://www.osha.gov/publications/bytopic/control-of-hazardous-energy-%28lockout-tagout%29",
          embedUrl: "https://www.osha.gov/publications/bytopic/control-of-hazardous-energy-%28lockout-tagout%29",
        },
        {
          id: "loto-standard",
          title: "29 CFR 1910.147",
          kind: "Standard",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147",
        },
      ],
    },
    {
      match: /(arc flash|electrical|shock|mcc|switchgear|panel|temporary power|cords|portable equipment|motor|vfd|disconnect|battery room|dc hazard|qualified vs unqualified|test before touch)/,
      title: "Electrical Safety",
      note: "OSHA electrical hazard references, standards, and training aids.",
      resources: [
        {
          id: "electrical-overview",
          title: "OSHA Electrical Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/electrical",
          embedUrl: "https://www.osha.gov/electrical",
        },
        {
          id: "electrical-solutions",
          title: "OSHA Electrical Possible Solutions",
          kind: "Guidance",
          url: "https://www.osha.gov/electrical/solutions",
          embedUrl: "https://www.osha.gov/electrical/solutions",
        },
        {
          id: "electrical-training",
          title: "Electrical Hazards for Non-Electricians",
          kind: "Training materials",
          url: "https://www.osha.gov/sites/default/files/2020-11/Train-the-Trainer_Electrical_binder-English.pdf",
          embedUrl: "https://www.osha.gov/sites/default/files/2020-11/Train-the-Trainer_Electrical_binder-English.pdf",
        },
      ],
    },
    {
      match: /(confined space|confined)/,
      title: "Confined Spaces",
      note: "OSHA confined-space overview, permits, and hazard resources.",
      resources: [
        {
          id: "confined-overview",
          title: "OSHA Confined Spaces Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/confined-spaces",
          embedUrl: "https://www.osha.gov/confined-spaces",
        },
        {
          id: "confined-guide",
          title: "Protecting Workers in Confined Spaces",
          kind: "Guide",
          url: "https://www.osha.gov/sites/default/files/publications/OSHA3825.pdf",
          embedUrl: "https://www.osha.gov/sites/default/files/publications/OSHA3825.pdf",
        },
        {
          id: "confined-standard",
          title: "29 CFR 1910.146 Examples and Permit References",
          kind: "Standard resource",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.146AppC",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.146AppC",
        },
      ],
    },
    {
      match: /(respiratory|respirator|scba|papr|supplied air|oxygen deficiency|idhl|fit check|seal check|facial hair|cartridge)/,
      title: "Respiratory Protection",
      note: "OSHA respiratory-protection overview, standards, and training videos.",
      resources: [
        {
          id: "resp-overview",
          title: "OSHA Respiratory Protection Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/respiratory-protection",
          embedUrl: "https://www.osha.gov/respiratory-protection",
        },
        {
          id: "resp-training",
          title: "OSHA Respiratory Protection Training Videos",
          kind: "Training videos",
          url: "https://www.osha.gov/respiratory-protection/training",
          embedUrl: "https://www.osha.gov/respiratory-protection/training",
        },
        {
          id: "resp-standard",
          title: "29 CFR 1910.134",
          kind: "Standard",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134",
        },
      ],
    },
    {
      match: /(hearing|noise|tinnitus|audiogram)/,
      title: "Occupational Noise Exposure",
      note: "OSHA hearing-conservation and occupational noise resources.",
      resources: [
        {
          id: "noise-overview",
          title: "OSHA Occupational Noise Exposure Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/noise",
          embedUrl: "https://www.osha.gov/noise",
        },
        {
          id: "noise-programs",
          title: "OSHA Hearing Conservation Programs",
          kind: "Guidance",
          url: "https://www.osha.gov/noise/hearing-programs",
          embedUrl: "https://www.osha.gov/noise/hearing-programs",
        },
        {
          id: "noise-standard",
          title: "29 CFR 1910.95",
          kind: "Standard",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95",
        },
      ],
    },
    {
      match: /(forklift|powered industrial truck|pit )/,
      title: "Powered Industrial Trucks",
      note: "OSHA forklift topic pages, standards, and training eTool.",
      resources: [
        {
          id: "pit-overview",
          title: "OSHA Powered Industrial Trucks Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/powered-industrial-trucks",
          embedUrl: "https://www.osha.gov/powered-industrial-trucks",
        },
        {
          id: "pit-etool",
          title: "OSHA Powered Industrial Trucks eTool",
          kind: "eTool",
          url: "https://www.osha.gov/etools/powered-industrial-trucks",
          embedUrl: "https://www.osha.gov/etools/powered-industrial-trucks",
        },
        {
          id: "pit-standard",
          title: "29 CFR 1910.178",
          kind: "Standard",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178",
        },
      ],
    },
    {
      match: /(machine guarding|guarding|conveyor|rollers|belt tracking|nip point|point of operation|pinch|crush)/,
      title: "Machine Guarding",
      note: "OSHA machine-guarding overview and hazard-recognition resources.",
      resources: [
        {
          id: "mg-overview",
          title: "OSHA Machine Guarding Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/machine-guarding",
          embedUrl: "https://www.osha.gov/machine-guarding",
        },
        {
          id: "mg-etool",
          title: "OSHA Machine Guarding eTool",
          kind: "eTool",
          url: "https://www.osha.gov/etools/machine-guarding",
          embedUrl: "https://www.osha.gov/etools/machine-guarding",
        },
        {
          id: "mg-standard",
          title: "29 CFR 1910.212",
          kind: "Standard",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212",
        },
      ],
    },
    {
      match: /(crane|ladle|rigging|suspended load|hoist)/,
      title: "Crane, Derrick and Hoist Safety",
      note: "OSHA crane, derrick, hoist, and overhead-load references.",
      resources: [
        {
          id: "crane-overview",
          title: "OSHA Crane, Derrick and Hoist Safety Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/cranes-derricks",
          embedUrl: "https://www.osha.gov/cranes-derricks",
        },
        {
          id: "crane-hazards",
          title: "OSHA Crane Hazards and Solutions",
          kind: "Guidance",
          url: "https://www.osha.gov/cranes-derricks/hazards",
          embedUrl: "https://www.osha.gov/cranes-derricks/hazards",
        },
        {
          id: "crane-library",
          title: "OSHA Crane Training Materials",
          kind: "Training library",
          url: "https://www.osha.gov/publications/bytopic/crane%2C-derrick%2C-and-hoist-safety",
          embedUrl: "https://www.osha.gov/publications/bytopic/crane%2C-derrick%2C-and-hoist-safety",
        },
      ],
    },
    {
      match: /(hazcom|sds|ghs|chemical|corrosive|acid|caustic|oxidizer|reactive|solvent|flammable|spill|decontamination|waste handling|container handling|toxic gas|inhalation)/,
      title: "Hazard Communication and Chemical Safety",
      note: "OSHA hazard communication topic pages, SDS references, and pictogram guidance.",
      resources: [
        {
          id: "hazcom-overview",
          title: "OSHA Hazard Communication Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/hazcom",
          embedUrl: "https://www.osha.gov/hazcom",
        },
        {
          id: "hazcom-sds",
          title: "OSHA Safety Data Sheets Brief",
          kind: "Guidance",
          url: "https://www.osha.gov/Publications/OSHA3514.html",
          embedUrl: "https://www.osha.gov/Publications/OSHA3514.html",
        },
        {
          id: "hazcom-pictograms",
          title: "OSHA Labels and Pictograms",
          kind: "Guidance",
          url: "https://www.osha.gov/sites/default/files/publications/OSHA3636.pdf",
          embedUrl: "https://www.osha.gov/sites/default/files/publications/OSHA3636.pdf",
        },
      ],
    },
    {
      match: /(heat illness|heat stress|heat )/,
      title: "Heat Illness Prevention",
      note: "OSHA heat-illness campaign material and worker guidance.",
      resources: [
        {
          id: "heat-campaign",
          title: "OSHA Heat Illness Prevention Campaign",
          kind: "Campaign page",
          url: "https://www.osha.gov/heat",
          embedUrl: "https://www.osha.gov/heat",
        },
        {
          id: "heat-overview",
          title: "OSHA Heat Exposure Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/heat-exposure",
          embedUrl: "https://www.osha.gov/heat-exposure",
        },
        {
          id: "heat-workers",
          title: "OSHA Information for Workers",
          kind: "Worker guidance",
          url: "https://www.osha.gov/heat/worker-information",
          embedUrl: "https://www.osha.gov/heat/worker-information",
        },
      ],
    },
    {
      match: /(fall|working surfaces|working-at-heights|heights|ladder|slip trip)/,
      title: "Fall Protection and Walking-Working Surfaces",
      note: "OSHA fall-protection overview and topic references.",
      resources: [
        {
          id: "fall-overview",
          title: "OSHA Fall Protection Overview",
          kind: "Topic page",
          url: "https://www.osha.gov/fall-protection",
          embedUrl: "https://www.osha.gov/fall-protection",
        },
        {
          id: "fall-standards",
          title: "29 CFR 1910 Subpart D and Related Fall Standards",
          kind: "Standard index",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910",
        },
        {
          id: "video-hub",
          title: "OSHA Video Library",
          kind: "Video hub",
          url: "https://www.osha.gov/video",
          embedUrl: "https://www.osha.gov/video",
        },
      ],
    },
    {
      match: /(fire|hot work|welding|cutting|grinding|extinguisher|spark)/,
      title: "Hot Work and Fire Safety",
      note: "OSHA hot-work and fire-watch references for welding, cutting, grinding, and spark hazards.",
      resources: [
        {
          id: "hotwork-pdf",
          title: "OSHA Fire Watch Duties during Hot Work",
          kind: "Guidance",
          url: "https://www.osha.gov/sites/default/files/publications/OSHA4188.pdf",
          embedUrl: "https://www.osha.gov/sites/default/files/publications/OSHA4188.pdf",
        },
        {
          id: "hotwork-etool",
          title: "OSHA Hot Work Precautions",
          kind: "eTool",
          url: "https://www.osha.gov/etools/shipyard/fire-protection/precautions-hot-work",
          embedUrl: "https://www.osha.gov/etools/shipyard/fire-protection/precautions-hot-work",
        },
        {
          id: "hotwork-standard",
          title: "29 CFR 1910.252 General Requirements",
          kind: "Standard",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252",
        },
      ],
    },
    {
      match: /(hazwoper|hazardous waste|emergency response roles|decon|control zones|buddy system)/,
      title: "HAZWOPER",
      note: "OSHA HAZWOPER standard and related interpretation resources.",
      resources: [
        {
          id: "hazwoper-standard",
          title: "29 CFR 1910.120",
          kind: "Standard",
          url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.120",
          embedUrl: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.120",
        },
        {
          id: "training-reqs",
          title: "OSHA Training Requirements in Standards",
          kind: "Publication",
          url: "https://www.osha.gov/sites/default/files/publications/OSHA2254.pdf",
          embedUrl: "https://www.osha.gov/sites/default/files/publications/OSHA2254.pdf",
        },
        {
          id: "hazwoper-interpretation",
          title: "OSHA Interpretation on Certification / Approval Claims",
          kind: "Interpretation",
          url: "https://www.osha.gov/laws-regs/standardinterpretations/1992-02-05-1",
          embedUrl: "https://www.osha.gov/laws-regs/standardinterpretations/1992-02-05-1",
        },
      ],
    },
  ];

  for (const sourceSet of sourceSets) {
    if (sourceSet.match.test(haystack)) {
      return {
        title: sourceSet.title,
        note: sourceSet.note,
        resources: sourceSet.resources,
      };
    }
  }

  return {
    title: "General OSHA Reference Materials",
    note: "Official OSHA references are not mapped specifically for this module yet. Use the library and video hub below while Dingfelder source mapping is expanded.",
    resources: [
      {
        id: "training-library",
        title: "OSHA Training and Reference Materials Library",
        kind: "Library",
        url: "https://www.osha.gov/training/library/materials",
        embedUrl: "https://www.osha.gov/training/library/materials",
      },
      {
        id: "video-library",
        title: "OSHA Video Library",
        kind: "Video hub",
        url: "https://www.osha.gov/video",
        embedUrl: "https://www.osha.gov/video",
      },
      {
        id: "training-reqs",
        title: "OSHA Training Requirements in Standards",
        kind: "Publication",
        url: "https://www.osha.gov/sites/default/files/publications/OSHA2254.pdf",
        embedUrl: "https://www.osha.gov/sites/default/files/publications/OSHA2254.pdf",
      },
    ],
  };
}
