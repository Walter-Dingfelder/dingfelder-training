
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import aironSplash from './assets/airon-splash.png'

// ─── Training Programs ────────────────────────────────────────────────────────
import LOTOFoundry     from './programs/LOTOFoundry.jsx'
import LOTOFullCampus  from './programs/LOTOFullCampus.jsx'
import SATOrientation  from './programs/SATOrientation.jsx'
import H2STraining     from './programs/H2STraining.jsx'
import ArcFlashTraining from './programs/ArcFlashTraining.jsx'
import EvacuationTraining from './programs/EvacuationTraining.jsx'
import {
  PHASE1_MODULES,
  HazardCommunicationTraining,
  PPEFundamentalsTraining,
  ForkliftSafetyTraining,
  FireExtinguisherTraining,
  MoltenMetalTraining,
  FurnaceMeltDeckTraining,
  SilicaSandTraining,
  CraneLadleTraining,
  PropaneFarmTraining,
  FoodChemicalTraining,
  AmmoniaTraining,
  RetailBackroomTraining,
} from './programs/Phase1Modules.jsx'
import {
  PHASE2A_MODULES,
  WalkingWorkingSurfacesTraining,
  IncidentReportingTraining,
  ContractorSafetyTraining,
  SevereWeatherTraining,
  ConfinedSpaceTraining,
  RespiratoryProtectionTraining,
  HearingConservationTraining,
  HotWorkTraining,
} from './programs/Phase2AModules.jsx'
import {
  PHASE2B_MODULES,
  MachineGuardingTraining,
  FoundryHeatStressTraining,
  CoreRoomVentilationTraining,
  ShakeoutGrindingTraining,
  BeamMillRollingLineTraining,
  OverheadCraneRiggingTraining,
  PinchCrushSteelHandlingTraining,
} from './programs/Phase2BModules.jsx'

import {
  MedicalEmergencyBasicsTraining,
  AEDAwarenessTraining,
  AdultCPRAwarenessTraining,
  PulseCheckAwarenessTraining,
  SevereBleedingControlTraining,
  ChokingResponseTraining,
} from './programs/MedicalResponseModules.jsx'

import {
  EMSActivationTraining,
  HeatIllnessTraining,
  StrokeFASTTraining,
  HeartAttackWarningTraining,
  BurnFirstAidTraining,
  EyeExposureTraining,
} from './programs/MedicalResponseBatch2.jsx'
import MedicalResponseFinalTraining from './programs/MedicalResponseFinal.jsx'
import {
  GLASS_FIBERGLASS_PHASE1_MODULES,
  GlassMeltFurnaceTraining,
  MarbleMeltFeedTraining,
  ForehearthTransferTraining,
  FiberizingSpinnerTraining,
  MatFormingLineTraining,
  FiberglassDustTraining,
  BinderResinSizingTraining,
  GlassLineLOTOTraining,
} from './programs/GlassFiberglassPhase1.jsx'
import {
  STORED_ENERGY_PHASE1_MODULES,
  HydraulicStoredEnergyTraining,
  PneumaticStoredEnergyTraining,
  ElectricalStoredEnergyTraining,
  FermentationStoredEnergyTraining,
  GravityStoredEnergyTraining,
  ElasticStoredEnergyTraining,
  MagneticStoredEnergyTraining,
  ThermalStoredEnergyTraining,
  NuclearStoredEnergyTraining,
} from './programs/StoredEnergyPhase1.jsx'

// ─── Route map ───────────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    path:       '/sat',
    label:      'S.A.T. Visitor Orientation',
    short:      'Situational Awareness Training',
    icon:       '🏭',
    color:      '#FFD100',
    regulation: 'Internal — Required before campus access',
    audience:   'All Visitors',
    minutes:    15,
    Component:  SATOrientation,
  },
  {
    path:       '/loto',
    label:      'LOTO — Foundry Focus',
    short:      'Lockout / Tagout — Foundry Systems',
    icon:       '🔒',
    color:      '#FF6B00',
    regulation: 'OSHA 29 CFR 1910.147',
    audience:   'Foundry Operators, Molding Line, Sand System',
    minutes:    20,
    Component:  LOTOFoundry,
  },
  {
    path:       '/loto-campus',
    label:      'LOTO — Full Campus',
    short:      'Lockout / Tagout — All Facilities',
    icon:       '🔒',
    color:      '#FF6B00',
    regulation: 'OSHA 29 CFR 1910.147 · NFPA 58 · 1910.119',
    audience:   'Maintenance Techs, Contractors, Multi-Facility Workers',
    minutes:    35,
    Component:  LOTOFullCampus,
  },
  {
    path:       '/h2s',
    label:      'H₂S Awareness & SCBA',
    short:      'Hydrogen Sulfide & Breathing Apparatus',
    icon:       '☠️',
    color:      '#FF3300',
    regulation: 'OSHA 29 CFR 1910.134',
    audience:   'Oilfield Operators, Gas Well Operators, Propane Farm',
    minutes:    20,
    Component:  H2STraining,
  },
  {
    path:       '/arcflash',
    label:      'Arc Flash & Electrical Safety',
    short:      'NFPA 70E — Electrical Hazards',
    icon:       '⚡',
    color:      '#00BFFF',
    regulation: 'NFPA 70E · OSHA 29 CFR 1910.333',
    audience:   'Electricians, Maintenance Techs, Beam Mill Operators',
    minutes:    25,
    Component:  ArcFlashTraining,
  },
  {
    path:       '/evacuation',
    label:      'Emergency Evacuation & Muster',
    short:      'Campus-Wide Emergency Response',
    icon:       '🚨',
    color:      '#22CC66',
    regulation: 'OSHA 29 CFR 1910.38',
    audience:   'All Campus Roles — Required for Everyone',
    minutes:    20,
    Component:  EvacuationTraining,
  },

  {
    path:       '/medical-emergency-basics',
    label:      'Medical Emergency Response Basics',
    short:      'Scene Safety, EMS Activation, and First Actions',
    icon:       '🩺',
    color:      '#00C2FF',
    regulation: 'Awareness Only — Emergency response orientation, not certification',
    audience:   'All Campus Personnel, Visitors, Contractors, Public-Facing Teams',
    minutes:    18,
    Component:  MedicalEmergencyBasicsTraining,
  },
  {
    path:       '/aed-awareness',
    label:      'AED Awareness & Use',
    short:      'Automated External Defibrillator Awareness',
    icon:       '⚕️',
    color:      '#00E0B8',
    regulation: 'Awareness Only — Follow trained responder procedures and device prompts',
    audience:   'All Campus Personnel, Front Office, Food Plant, Retail, Public Teams',
    minutes:    20,
    Component:  AEDAwarenessTraining,
  },
  {
    path:       '/adult-cpr-awareness',
    label:      'Adult CPR Awareness',
    short:      'Recognition, Compression Readiness, and Team Response',
    icon:       '❤️',
    color:      '#FF4D6D',
    regulation: 'Awareness Only — Not a CPR certification course',
    audience:   'All Campus Personnel and Public-Facing Teams',
    minutes:    22,
    Component:  AdultCPRAwarenessTraining,
  },
  {
    path:       '/pulse-check-awareness',
    label:      'Pulse Check & Unresponsiveness Assessment',
    short:      'Awareness of Responsiveness, Breathing, and Escalation',
    icon:       '🫀',
    color:      '#B86CFF',
    regulation: 'Awareness Only — Follow employer policy and trained responder procedures',
    audience:   'All Campus Personnel, Security, Leads, Response-Support Staff',
    minutes:    20,
    Component:  PulseCheckAwarenessTraining,
  },
  {
    path:       '/severe-bleeding-control',
    label:      'Severe Bleeding Control',
    short:      'Recognition, Direct Pressure Awareness, and Escalation',
    icon:       '🩸',
    color:      '#FF0033',
    regulation: 'Awareness Only — Immediate escalation and approved response resources',
    audience:   'All Campus Personnel, Shop Workers, Food Plant Staff, Maintenance, Public Teams',
    minutes:    18,
    Component:  SevereBleedingControlTraining,
  },
  {
    path:       '/choking-response',
    label:      'Choking Response',
    short:      'Airway Obstruction Recognition and Rapid Escalation',
    icon:       '🫁',
    color:      '#FFA726',
    regulation: 'Awareness Only — Recognize obstruction and activate emergency response',
    audience:   'Restaurants, Food Plants, Offices, Retail, Campus Services, All Staff',
    minutes:    16,
    Component:  ChokingResponseTraining,
  },

  {
    path:       '/ems-activation',
    label:      '911 / EMS Activation & Site Access',
    short:      'Emergency Call Chain, Location Control, and Responder Access',
    icon:       '📞',
    color:      '#33D17A',
    regulation: 'Awareness Only — Activate EMS immediately and follow site response plans',
    audience:   'All campus personnel, supervisors, security, front office, and visitors under escort',
    minutes:    14,
    Component:  EMSActivationTraining,
  },
  {
    path:       '/heat-illness',
    label:      'Heat Illness Recognition & Response',
    short:      'Heat Exhaustion, Heat Stroke, Cooling, and Escalation',
    icon:       '🌡️',
    color:      '#FF7A00',
    regulation: 'Awareness Only — Recognize symptoms fast and escalate immediately',
    audience:   'Outdoor workers, hot-area crews, foundry teams, yard personnel, and supervisors',
    minutes:    16,
    Component:  HeatIllnessTraining,
  },
  {
    path:       '/stroke-fast',
    label:      'Stroke Recognition (FAST)',
    short:      'Face, Arm, Speech, Time, and Immediate EMS Escalation',
    icon:       '🧠',
    color:      '#7C5CFF',
    regulation: 'Awareness Only — Time-critical recognition and EMS activation',
    audience:   'All campus personnel, office teams, security, leads, and public-facing staff',
    minutes:    12,
    Component:  StrokeFASTTraining,
  },
  {
    path:       '/heart-attack-warning',
    label:      'Heart Attack Warning Signs',
    short:      'Chest Pain, Collapse Risk, and Immediate Emergency Escalation',
    icon:       '💔',
    color:      '#FF4D6D',
    regulation: 'Awareness Only — Recognize warning signs and activate emergency response',
    audience:   'All campus personnel, public teams, leads, supervisors, and security',
    minutes:    12,
    Component:  HeartAttackWarningTraining,
  },
  {
    path:       '/burn-first-aid',
    label:      'Burn First Aid',
    short:      'Thermal, Chemical, and Contact Burn Immediate Actions',
    icon:       '🔥',
    color:      '#FF8A00',
    regulation: 'Awareness Only — Immediate cooling, contamination control, and escalation',
    audience:   'Foundry, maintenance, kitchens, utilities, food plant, and public support teams',
    minutes:    14,
    Component:  BurnFirstAidTraining,
  },
  {
    path:       '/eye-exposure',
    label:      'Eye Exposure / Chemical Splash Response',
    short:      'Eyewash Use, Immediate Flushing, and Rapid Escalation',
    icon:       '👁️',
    color:      '#00C2FF',
    regulation: 'Awareness Only — Flush immediately and follow emergency response procedures',
    audience:   'Chemical users, sanitation teams, maintenance, labs, food plant, and utility workers',
    minutes:    14,
    Component:  EyeExposureTraining,
  },

  {
    path:       '/medical-response-final',
    label:      'Medical Response Final',
    short:      'Capstone Medical Awareness Assessment',
    icon:       '🧭',
    color:      '#00E0B8',
    regulation: 'Awareness Only — Capstone knowledge check, not certification',
    audience:   'All campus personnel completing the medical response track',
    minutes:    24,
    Component:  MedicalResponseFinalTraining,
  },

  {
    path:       '/hazcom',
    label:      'Hazard Communication / SDS / GHS',
    short:      'Chemical Labels, SDS, and Safe Handling',
    icon:       '🧪',
    color:      '#FFD100',
    regulation: 'Chemical labels · SDS · site hazard communication',
    audience:   'All chemical users, sanitation, maintenance, and operations',
    minutes:    18,
    Component:  HazardCommunicationTraining,
  },
  {
    path:       '/ppe',
    label:      'PPE Fundamentals',
    short:      'Basic Protective Equipment by Task and Hazard',
    icon:       '🦺',
    color:      '#22CC66',
    regulation: 'Campus PPE program · task-based protection',
    audience:   'All campus roles, visitors, maintenance, and operations',
    minutes:    16,
    Component:  PPEFundamentalsTraining,
  },
  {
    path:       '/forklift',
    label:      'Forklift / Powered Industrial Truck Safety',
    short:      'Vehicle Separation, Visibility, and Load Control',
    icon:       '🚜',
    color:      '#00BFFF',
    regulation: 'Powered industrial truck awareness · pedestrian separation',
    audience:   'Warehousing, shipping, retail, food plant, and support teams',
    minutes:    18,
    Component:  ForkliftSafetyTraining,
  },
  {
    path:       '/fire-extinguishers',
    label:      'Fire Extinguisher Basics',
    short:      'Portable Extinguishers, Alarm, and First Response',
    icon:       '🧯',
    color:      '#FF6B00',
    regulation: 'Campus emergency response · incipient-stage fire only',
    audience:   'All campus personnel and designated responders',
    minutes:    14,
    Component:  FireExtinguisherTraining,
  },
  {
    path:       '/molten-metal',
    label:      'Molten Metal Awareness',
    short:      'Foundry Heat, Splash, and Contact Hazards',
    icon:       '🔥',
    color:      '#FF5A1F',
    regulation: 'Foundry hot-metal awareness · restricted zone discipline',
    audience:   'Foundry operators, maintenance, contractors, and escorts',
    minutes:    20,
    Component:  MoltenMetalTraining,
  },
  {
    path:       '/furnace-melt-deck',
    label:      'Furnace & Melt Deck Safety',
    short:      'Charging, Tapping, Hot Surfaces, and Restricted Zones',
    icon:       '🏭',
    color:      '#FF7A00',
    regulation: 'Foundry furnace operations · charging and melt-deck controls',
    audience:   'Melt operators, maintenance, furnace support, and supervisors',
    minutes:    20,
    Component:  FurnaceMeltDeckTraining,
  },
  {
    path:       '/silica-sand',
    label:      'Sand System / Dust / Silica Awareness',
    short:      'Molding Sand Handling and Airborne Dust Control',
    icon:       '🌫️',
    color:      '#C7A100',
    regulation: 'Foundry sand handling · dust-control awareness',
    audience:   'Molding line, sand system, maintenance, and cleanup crews',
    minutes:    18,
    Component:  SilicaSandTraining,
  },
  {
    path:       '/crane-ladle',
    label:      'Crane, Ladle & Suspended Load Safety',
    short:      'No-Go Zones, Lift Paths, and Communication Control',
    icon:       '🏗️',
    color:      '#FF8C00',
    regulation: 'Foundry lifting operations · suspended load control',
    audience:   'Crane support, foundry operators, maintenance, and contractors',
    minutes:    18,
    Component:  CraneLadleTraining,
  },
  {
    path:       '/propane-farm',
    label:      'Propane Farm Operations Safety',
    short:      'Storage, Ignition Control, and Emergency Distance',
    icon:       '🛢️',
    color:      '#B5FF00',
    regulation: 'Fuel-gas storage awareness · ignition and distance control',
    audience:   'Propane operators, security, maintenance, and emergency support',
    minutes:    18,
    Component:  PropaneFarmTraining,
  },
  {
    path:       '/food-chemical',
    label:      'Food Plant Chemical Safety & Sanitation',
    short:      'Cleaners, Sanitizers, Utility Separation, and Safe Use',
    icon:       '🥗',
    color:      '#00D77A',
    regulation: 'Food plant sanitation chemical awareness · line verification',
    audience:   'Salad dressing, Juice From The Vine, sanitation, and quality teams',
    minutes:    18,
    Component:  FoodChemicalTraining,
  },
  {
    path:       '/ammonia',
    label:      'Ammonia Refrigeration Awareness',
    short:      'Cold Systems, Leak Recognition, and Immediate Response',
    icon:       '❄️',
    color:      '#52E5FF',
    regulation: 'Refrigeration awareness · leak recognition and response',
    audience:   'Food plant workers, maintenance, contractors, and nearby occupants',
    minutes:    16,
    Component:  AmmoniaTraining,
  },
  {
    path:       '/retail-backroom',
    label:      'Retail Backroom / Baler / Compactor Safety',
    short:      'Backroom Traffic, Waste Equipment, and Lockout Awareness',
    icon:       '📦',
    color:      '#A36BFF',
    regulation: 'Retail support safety · receiving and waste equipment control',
    audience:   'Walmart support, receiving teams, stock associates, and supervisors',
    minutes:    15,
    Component:  RetailBackroomTraining,
  },
  ...PHASE2A_MODULES.map((module, index) => ({
    ...module,
    Component: [
      WalkingWorkingSurfacesTraining,
      IncidentReportingTraining,
      ContractorSafetyTraining,
      SevereWeatherTraining,
      ConfinedSpaceTraining,
      RespiratoryProtectionTraining,
      HearingConservationTraining,
      HotWorkTraining,
    ][index],
  })),
  ...PHASE2B_MODULES.filter(module => module.path !== '/hydraulic-stored-energy').map((module, index) => ({
    ...module,
    Component: [
      MachineGuardingTraining,
      FoundryHeatStressTraining,
      CoreRoomVentilationTraining,
      ShakeoutGrindingTraining,
      BeamMillRollingLineTraining,
      OverheadCraneRiggingTraining,
      PinchCrushSteelHandlingTraining,
    ][index],
  })),
  ...STORED_ENERGY_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      HydraulicStoredEnergyTraining,
      PneumaticStoredEnergyTraining,
      ElectricalStoredEnergyTraining,
      FermentationStoredEnergyTraining,
      GravityStoredEnergyTraining,
      ElasticStoredEnergyTraining,
      MagneticStoredEnergyTraining,
      ThermalStoredEnergyTraining,
      NuclearStoredEnergyTraining,
    ][index],
  })),

...GLASS_FIBERGLASS_PHASE1_MODULES.map((module, index) => ({
  ...module,
  Component: [
    GlassMeltFurnaceTraining,
    MarbleMeltFeedTraining,
    ForehearthTransferTraining,
    FiberizingSpinnerTraining,
    MatFormingLineTraining,
    FiberglassDustTraining,
    BinderResinSizingTraining,
    GlassLineLOTOTraining,
  ][index],
})),
]

function getSiteMode(hostname) {
  const host = (hostname || '').toLowerCase()
  if (host.includes('airon.')) return 'airon'
  if (host.includes('training.')) return 'training'
  return 'training'
}



const CATEGORY_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'campus', label: 'Campus' },
  { key: 'foundry', label: 'Foundry' },
  { key: 'beam-mill', label: 'Beam Mill' },
  { key: 'process-gas', label: 'Process / Gas' },
  { key: 'food-retail', label: 'Food / Retail' },
  { key: 'glass-fiberglass', label: 'Glass / Fiberglass' },
  { key: 'stored-energy', label: 'Stored Energy' },
  { key: 'medical', label: 'Medical' },
]

const TYPE_FILTERS = [
  { key: 'all', label: 'All Types' },
  { key: 'awareness', label: 'Awareness' },
  { key: 'core', label: 'Core' },
  { key: 'high-risk', label: 'High-Risk' },
  { key: 'final', label: 'Final' },
]

const INDUSTRIAL_ENVIRONMENTS = [
  'foundry',
  'beam-mill',
  'process-gas',
  'food-retail',
  'glass-fiberglass',
]

const CAMPUS_AND_ALL_ENVIRONMENTS = ['campus', ...INDUSTRIAL_ENVIRONMENTS]
const MEDICAL_AND_ALL_ENVIRONMENTS = ['medical', ...CAMPUS_AND_ALL_ENVIRONMENTS]

const PROGRAM_CATEGORY_TAGS = {
  '/sat': ['campus'],

  '/loto': ['foundry'],
  '/loto-campus': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/h2s': ['process-gas'],
  '/arcflash': ['campus', ...INDUSTRIAL_ENVIRONMENTS, 'stored-energy'],
  '/evacuation': CAMPUS_AND_ALL_ENVIRONMENTS,

  '/medical-emergency-basics': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/aed-awareness': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/adult-cpr-awareness': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/pulse-check-awareness': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/severe-bleeding-control': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/choking-response': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/ems-activation': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/heat-illness': ['medical', 'campus', 'foundry', 'beam-mill', 'process-gas', 'food-retail', 'glass-fiberglass'],
  '/stroke-fast': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/heart-attack-warning': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/burn-first-aid': ['medical', 'campus', 'foundry', 'beam-mill', 'process-gas', 'food-retail', 'glass-fiberglass'],
  '/eye-exposure': ['medical', 'campus', 'foundry', 'process-gas', 'food-retail', 'glass-fiberglass'],
  '/medical-response-final': ['medical'],

  '/hazcom': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/ppe': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/forklift': ['campus', 'foundry', 'food-retail', 'glass-fiberglass'],
  '/fire-extinguishers': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/molten-metal': ['foundry'],
  '/furnace-melt-deck': ['foundry'],
  '/silica-sand': ['foundry'],
  '/crane-ladle': ['foundry', 'beam-mill', 'glass-fiberglass'],
  '/propane-farm': ['campus', 'process-gas'],
  '/food-chemical': ['campus', 'food-retail'],
  '/ammonia': ['campus', 'food-retail'],
  '/retail-backroom': ['campus', 'food-retail'],

  '/walking-working-surfaces': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/incident-reporting': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/contractor-safety': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/severe-weather': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/confined-space': ['campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/respiratory-protection': ['campus', 'foundry', 'process-gas', 'food-retail', 'glass-fiberglass'],
  '/hearing-conservation': ['campus', 'foundry', 'beam-mill', 'food-retail', 'glass-fiberglass'],
  '/hot-work': ['campus', ...INDUSTRIAL_ENVIRONMENTS],

  '/machine-guarding-molding-line': ['foundry'],
  '/foundry-heat-stress-burn-prevention': ['foundry'],
  '/core-room-binder-ventilation': ['foundry'],
  '/shakeout-cleaning-grinding': ['foundry'],
  '/beam-mill-rolling-line': ['beam-mill'],
  '/overhead-crane-rigging': ['foundry', 'beam-mill', 'glass-fiberglass'],
  '/pinch-crush-steel-handling': ['foundry', 'beam-mill', 'glass-fiberglass'],

  '/hydraulic-stored-energy': ['stored-energy', 'foundry', 'beam-mill', 'process-gas', 'food-retail', 'glass-fiberglass'],
  '/pneumatic-stored-energy': ['stored-energy', 'foundry', 'beam-mill', 'process-gas', 'food-retail', 'glass-fiberglass'],
  '/electrical-stored-energy': ['stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/fermentation-stored-energy': ['stored-energy', 'process-gas', 'food-retail'],
  '/gravity-stored-energy': ['stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/elastic-stored-energy': ['stored-energy', 'campus', 'foundry', 'beam-mill', 'food-retail', 'glass-fiberglass'],
  '/magnetic-stored-energy': ['stored-energy', 'campus', 'foundry', 'beam-mill', 'glass-fiberglass'],
  '/thermal-stored-energy': ['stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/nuclear-stored-energy': ['stored-energy', 'campus'],

  '/glass-melt-furnace': ['glass-fiberglass'],
  '/marble-melt-feed': ['glass-fiberglass'],
  '/forehearth-transfer': ['glass-fiberglass'],
  '/fiberizing-spinner': ['glass-fiberglass'],
  '/mat-forming-line': ['glass-fiberglass'],
  '/fiberglass-dust': ['glass-fiberglass'],
  '/binder-resin-sizing': ['glass-fiberglass'],
  '/glass-line-loto': ['glass-fiberglass'],
}

const CORE_PROGRAMS = new Set([
  '/sat',
  '/hazcom',
  '/ppe',
  '/evacuation',
  '/walking-working-surfaces',
  '/incident-reporting',
  '/contractor-safety',
  '/severe-weather',
])

const HIGH_RISK_PROGRAMS = new Set([
  '/loto',
  '/loto-campus',
  '/h2s',
  '/arcflash',
  '/molten-metal',
  '/furnace-melt-deck',
  '/silica-sand',
  '/crane-ladle',
  '/propane-farm',
  '/confined-space',
  '/respiratory-protection',
  '/hot-work',
  '/machine-guarding-molding-line',
  '/beam-mill-rolling-line',
  '/overhead-crane-rigging',
  '/hydraulic-stored-energy',
  '/pneumatic-stored-energy',
  '/electrical-stored-energy',
  '/fermentation-stored-energy',
  '/gravity-stored-energy',
  '/elastic-stored-energy',
  '/magnetic-stored-energy',
  '/thermal-stored-energy',
  '/nuclear-stored-energy',
  '/pinch-crush-steel-handling',
  '/glass-melt-furnace',
  '/marble-melt-feed',
  '/forehearth-transfer',
  '/fiberizing-spinner',
  '/glass-line-loto',
  '/adult-cpr-awareness',
  '/aed-awareness',
  '/pulse-check-awareness',
  '/severe-bleeding-control',
  '/heat-illness',
])

const FINAL_PROGRAMS = new Set([
  '/medical-response-final',
])

function isValidCategoryKey(key) {
  return CATEGORY_FILTERS.some(filter => filter.key === key)
}

function isValidTypeKey(key) {
  return TYPE_FILTERS.some(filter => filter.key === key)
}

function getProgramCategories(path) {
  return PROGRAM_CATEGORY_TAGS[path] || ['campus']
}

function getProgramType(path) {
  if (FINAL_PROGRAMS.has(path)) return 'final'
  if (CORE_PROGRAMS.has(path)) return 'core'
  if (HIGH_RISK_PROGRAMS.has(path)) return 'high-risk'
  return 'awareness'
}

function matchesCategoryFilter(categories, active) {
  return active === 'all' || categories.includes(active)
}

function matchesTypeFilter(value, active) {
  return active === 'all' || value === active
}


const PORTAL_CONTEXT_KEY = 'airon.portalContext'

function buildPortalSearch(category, type) {
  const params = new URLSearchParams()
  if (category && category !== 'all') params.set('category', category)
  if (type && type !== 'all') params.set('type', type)
  const query = params.toString()
  return query ? `?${query}` : ''
}

function parsePortalSearch(search) {
  const params = new URLSearchParams(search || '')
  const rawCategory = params.get('category') || 'all'
  const rawType = params.get('type') || 'all'
  const category = isValidCategoryKey(rawCategory) ? rawCategory : 'all'
  const type = isValidTypeKey(rawType) ? rawType : 'all'
  return { category, type }
}

function savePortalContext(portalSearch, seriesPaths) {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(
      PORTAL_CONTEXT_KEY,
      JSON.stringify({
        portalSearch: typeof portalSearch === 'string' ? portalSearch : '',
        seriesPaths: Array.isArray(seriesPaths) ? seriesPaths : [],
      })
    )
  } catch {}
}

function GlobalFonts() {
  return (
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap"
      rel="stylesheet"
    />
  )
}


function AIRONSplash({ onDone }) {
  const [messageIndex, setMessageIndex] = useState(0)
  const [canContinue, setCanContinue] = useState(false)

  const loadingMessages = [
    'Initializing training environment...',
    'Synchronizing A.I.R.O.N. systems...',
    'Loading value at zero cost...',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(index => (index + 1) % loadingMessages.length)
    }, 900)

    const gate = setTimeout(() => {
      setCanContinue(true)
    }, 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(gate)
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999999,
      overflow: 'hidden',
      background: '#000',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <GlobalFonts />

      <style>{`
        @keyframes aironPulse {
          0% { opacity: 0.72; transform: scaleX(0.88); }
          50% { opacity: 1; transform: scaleX(1); }
          100% { opacity: 0.72; transform: scaleX(0.88); }
        }
        @keyframes aironSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes aironFadeUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes aironPosterIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.985); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at center top, rgba(255,107,0,0.16), transparent 32%), radial-gradient(circle at center bottom, rgba(255,209,0,0.10), transparent 42%), rgb(0,0,0)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px 14px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          position: 'relative',
          width: 'min(88vw, 700px)',
          height: 'min(74vh, 900px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: '0.55s ease-out 0s 1 normal both running aironPosterIn',
        }}>
          <img
            src={aironSplash}
            alt="A.I.R.O.N. splash"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center center',
              borderRadius: 18,
              boxShadow: 'rgba(0, 0, 0, 0.52) 0px 28px 90px',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />

          <div style={{
            width: 'min(88vw, 360px)',
            maxWidth: 360,
            minWidth: 0,
            marginTop: 14,
            padding: '6px 10px 8px',
            borderRadius: 12,
            background: 'linear-gradient(180deg, rgba(8,8,8,0.78), rgba(8,8,8,0.92))',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.34)',
            backdropFilter: 'blur(4px)',
            animation: '0.6s ease-out 0s 1 normal both running aironFadeUp',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: 'rgba(255,255,255,0.18) rgba(255,255,255,0.18) rgb(255, 209, 0) rgb(255, 107, 0)',
                borderImage: 'initial',
                animation: '1.1s linear 0s infinite normal none running aironSpin',
                flexShrink: 0,
              }} />
              <div style={{ flex: '1 0 0%' }}>
                <div style={{
                  color: '#fff',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 8,
                  letterSpacing: 1.3,
                  marginBottom: 3,
                  textTransform: 'uppercase',
                }}>
                  {loadingMessages[messageIndex]}
                </div>
                <div style={{
                  height: 2,
                  overflow: 'hidden',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.08)',
                }}>
                  <div style={{
                    width: '42%',
                    height: '100%',
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, #FF6B00, #FFD100)',
                    animation: 'aironPulse 1.6s ease-in-out infinite',
                    transformOrigin: 'center',
                  }} />
                </div>
              </div>
            </div>

            <div style={{
              marginTop: 5,
              color: 'rgb(200, 200, 200)',
              fontSize: 8,
              lineHeight: 1.35,
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: 0.5,
              textTransform: 'uppercase',
            }}>
              THE DINGFELDER ENTERPRISES TRIANGLE · YOU'RE GETTING VALUE AT ZERO COST · GOOD THINGS TAKE TIME
            </div>

            {canContinue && (
              <button
                type="button"
                onClick={onDone}
                style={{
                  marginTop: 8,
                  width: '100%',
                  appearance: 'none',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'linear-gradient(rgba(255, 209, 0, 0.95), rgba(255, 107, 0, 0.92))',
                  color: 'rgb(5, 5, 5)',
                  padding: '6px 10px',
                  borderRadius: 8,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 1.2,
                  cursor: 'pointer',
                  boxShadow: 'rgba(255, 107, 0, 0.22) 0px 12px 28px',
                }}
              >
                CONTINUE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


function AIRONLanding() {
  const navigate = useNavigate()
  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <GlobalFonts />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.86)), url(${aironSplash})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255,107,0,0.15), transparent 35%, rgba(0,0,0,0.2) 70%, rgba(255,209,0,0.08))',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.32)',
          backdropFilter: 'blur(4px)',
        }}>
          <div>
            <div style={{
              color: '#FFD100',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 4,
            }}>
              A.I.R.O.N. BY DINGFELDER ENTERPRISES
            </div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: 22,
            }}>
              PLAY YOUR WORK · WORK YOUR PLAY
            </div>
          </div>
          <div style={{
            color: '#DDD',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: 1.5,
            textAlign: 'right',
          }}>
            INDUSTRIAL TRAINING<br />SIMULATION · INTEGRATION
          </div>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '48px 24px 52px',
        }}>
          <div style={{
            width: 'min(100%, 840px)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                color: '#FF6B00',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                letterSpacing: 2,
                marginBottom: 12,
              }}>
                BRAND REVEAL · FREE ENTRY POINT · LIVE LEAD ENGINE
              </div>
              <h1 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(54px, 12vw, 92px)',
                lineHeight: 0.9,
                margin: 0,
              }}>
                FREE SAFETY<br />
                <span style={{ color: '#FFD100' }}>TRAINING!!!</span>
              </h1>
              <div style={{
                marginTop: 18,
                color: '#E8E8E8',
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 560,
              }}>
                What if training for the job you want started on your gaming console?<br />
                What if the machine waiting for you at work already knew your character?<br />
                <span style={{ color: '#FFD100', fontWeight: 700 }}>Not to play. To perform.</span><br />
                Serious systems. Serious safety. Serious work.<br />
                Let’s get this job done. I’ll be your guide.
              </div>
              <div style={{
                marginTop: 28,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
              }}>
                <button
                  onClick={() => {
                    const target = `${window.location.protocol}//training.dingfelder.co`
                    window.location.assign(target)
                  }}
                  style={{
                    appearance: 'none',
                    border: 'none',
                    background: 'linear-gradient(90deg, #FF6B00, #FFD100)',
                    color: '#050505',
                    padding: '15px 22px',
                    borderRadius: 10,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: 1,
                    cursor: 'pointer',
                    boxShadow: '0 14px 32px rgba(255,107,0,0.25)',
                  }}
                >
                  GET IT FOR FREE
                </button>
                <button
                  onClick={() => document.getElementById('airon-explore')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    appearance: 'none',
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(0,0,0,0.25)',
                    color: '#fff',
                    padding: '15px 22px',
                    borderRadius: 10,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: 1,
                    cursor: 'pointer',
                  }}
                >
                  EXPLORE A.I.R.O.N.
                </button>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(180deg, rgba(8,8,8,0.72), rgba(8,8,8,0.88))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: 22,
              boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{
                color: '#FFD100',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 2,
                marginBottom: 10,
              }}>
                WHY THIS MATTERS
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 34,
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: 14,
              }}>
                A.I.R.O.N. SAFETY TRAINING
              </div>
              <div style={{ color: '#DDD', lineHeight: 1.7, fontSize: 15 }}>
                Free web-based training builds the audience. The Dingfelder Industrial Campus proves the environment. A.I.R.O.N. becomes the product people remember when they need integration, installation, or industrial intelligence.
              </div>

              <div style={{
                display: 'grid',
                gap: 12,
                marginTop: 18,
              }}>
                {[
                  'Free industrial safety learning sessions',
                  'Dingfelder Industrial Campus as training environment',
                  'Future Roblox bridge and site acknowledgements',
                  'A.I.R.O.N. customers, integrations, and installations',
                ].map(item => (
                  <div key={item} style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    padding: '10px 12px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#FF6B00',
                      marginTop: 8,
                      flexShrink: 0,
                    }} />
                    <div style={{ color: '#F1F1F1', lineHeight: 1.5, fontSize: 14 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div
          id="airon-explore"
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '0 24px 36px',
          }}
        >
          <div style={{
            width: 'min(100%, 1040px)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 14,
          }}>
            {[
              {
                title: 'TRAINING',
                body: 'Free industrial learning sessions hosted by Dingfelder Enterprises and delivered through A.I.R.O.N.',
              },
              {
                title: 'SIMULATION',
                body: 'Dingfelder Industrial Campus serves as the branded environment where systems, safety, and readiness come together.',
              },
              {
                title: 'INTEGRATION',
                body: 'The long play is customer integrations, installations, and operational intelligence under the A.I.R.O.N. brand.',
              },
            ].map(card => (
              <div key={card.title} style={{
                padding: 18,
                borderRadius: 16,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{
                  color: '#FFD100',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: 2,
                  marginBottom: 10,
                }}>{card.title}</div>
                <div style={{
                  color: '#F0F0F0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 8,
                }}>
                  A.I.R.O.N.
                </div>
                <div style={{ color: '#D2D2D2', lineHeight: 1.6, fontSize: 14 }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 24px',
          color: '#A0A0A0',
          fontSize: 11,
          fontFamily: "'IBM Plex Mono', monospace",
          letterSpacing: 1.1,
          background: 'rgba(0,0,0,0.24)',
        }}>
          A.I.R.O.N. BY DINGFELDER ENTERPRISES · TRAINING, SIMULATION, OPERATIONAL INTELLIGENCE
        </div>
      </div>
    </div>
  )
}

function PortalHome() {
  const navigate = useNavigate()
  const location = useLocation()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const blink = tick % 2 === 0
  const [categoryFilter, setCategoryFilter] = useState(() => parsePortalSearch(location.search).category)
  const [typeFilter, setTypeFilter] = useState(() => parsePortalSearch(location.search).type)

  useEffect(() => {
    const parsed = parsePortalSearch(location.search)
    setCategoryFilter(parsed.category)
    setTypeFilter(parsed.type)
  }, [location.search])

  useEffect(() => {
    const nextSearch = buildPortalSearch(categoryFilter, typeFilter)
    if (location.pathname === '/' && location.search !== nextSearch) {
      navigate({ pathname: '/', search: nextSearch }, { replace: true })
    }
  }, [categoryFilter, typeFilter, location.pathname, location.search, navigate])

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter(prog => {
      const categories = getProgramCategories(prog.path)
      const type = getProgramType(prog.path)
      return matchesCategoryFilter(categories, categoryFilter) && matchesTypeFilter(type, typeFilter)
    })
  }, [categoryFilter, typeFilter])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#080808',
      fontFamily: "'IBM Plex Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column',
    }}>
      <GlobalFonts />

      <div style={{
        background: '#0c0c0c',
        borderBottom: '1px solid #1e1e1e',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}>
        <div style={{
          width: 42, height: 42,
          background: 'linear-gradient(180deg, #FF6B00, #FFD100)',
          borderRadius: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          color: '#080808',
          fontWeight: 900,
        }}>▲</div>
        <div>
          <div style={{
            color: '#fff',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 20, fontWeight: 800, letterSpacing: 1,
          }}>A.I.R.O.N. SAFETY TRAINING</div>
          <div style={{ color: '#6A6A6A', fontSize: 10, letterSpacing: 3 }}>
            BY DINGFELDER ENTERPRISES · DINGFELDER INDUSTRIAL CAMPUS
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: blink ? '#22CC66' : 'transparent',
            border: '1px solid #22CC66',
            transition: 'background 0.15s',
          }} />
          <span style={{
            color: '#22CC66',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11, letterSpacing: 2,
          }}>PORTAL ONLINE</span>
        </div>
      </div>

      <div style={{
        padding: '36px 24px 24px',
        borderBottom: '1px solid #111',
        maxWidth: 980,
        margin: '0 auto',
        boxSizing: 'border-box',
        width: '100%',
      }}>
        <div style={{
          color: '#FF6B00',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 10, letterSpacing: 5, marginBottom: 10,
        }}>FREE LEARNING SESSIONS · INDUSTRIAL SAFETY · A.I.R.O.N. BY DINGFELDER ENTERPRISES</div>
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 52, fontWeight: 900,
          color: '#fff', margin: 0, lineHeight: 1.0, letterSpacing: 0.5,
        }}>
          A.I.R.O.N.<br />
          <span style={{ color: '#FFD100' }}>SAFETY TRAINING</span>
        </h1>
        <p style={{
          color: '#868686',
          fontSize: 14, lineHeight: 1.7,
          marginTop: 14, marginBottom: 0,
          maxWidth: 640,
        }}>
          Free industrial learning sessions hosted by Dingfelder Enterprises.
          Training environments include the Dingfelder Industrial Campus.
          Select a module below to begin and build operational confidence before the job starts.
        </p>
      </div>

      <div style={{
        flex: 1,
        padding: '24px',
        maxWidth: 980,
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}>
        <div style={{
          color: '#444',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 11, letterSpacing: 3,
          marginBottom: 16,
        }}>AVAILABLE TRAINING PROGRAMS — {filteredPrograms.length} OF {PROGRAMS.length}</div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginBottom: 18,
        }}>
          <div style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 4,
          }}>
            {CATEGORY_FILTERS.map(filter => {
              const active = categoryFilter === filter.key
              return (
                <button
                  key={filter.key}
                  onClick={() => setCategoryFilter(filter.key)}
                  style={{
                    appearance: 'none',
                    border: `1px solid ${active ? '#FF8A00' : '#2b2b2b'}`,
                    background: active ? 'linear-gradient(180deg, #FFB000, #FF7A00)' : '#0c0c0c',
                    color: active ? '#080808' : '#8f8f8f',
                    borderRadius: 999,
                    padding: '10px 14px',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: 1,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>

          <div style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 4,
          }}>
            {TYPE_FILTERS.map(filter => {
              const active = typeFilter === filter.key
              return (
                <button
                  key={filter.key}
                  onClick={() => setTypeFilter(filter.key)}
                  style={{
                    appearance: 'none',
                    border: `1px solid ${active ? '#22CC66' : '#2b2b2b'}`,
                    background: active ? 'rgba(34, 204, 102, 0.14)' : '#0c0c0c',
                    color: active ? '#8DFFB4' : '#8f8f8f',
                    borderRadius: 999,
                    padding: '8px 12px',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: 1.2,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 12,
        }}>
          {filteredPrograms.map(prog => (
            <div
              key={prog.path}
              onClick={() => {
                const portalSearch = buildPortalSearch(categoryFilter, typeFilter)
                const seriesPaths = filteredPrograms.map(item => item.path)
                savePortalContext(portalSearch, seriesPaths)
                navigate(prog.path, {
                  state: {
                    portalSearch,
                    seriesPaths,
                  },
                })
              }}
              style={{
                background: '#0f0f0f',
                border: `1px solid #1e1e1e`,
                borderTop: `3px solid ${prog.color}`,
                borderRadius: 6,
                padding: '18px',
                cursor: 'pointer',
                transition: 'all 0.15s',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#161616'
                e.currentTarget.style.borderColor = prog.color + '88'
                e.currentTarget.style.borderTopColor = prog.color
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#0f0f0f'
                e.currentTarget.style.borderColor = '#1e1e1e'
                e.currentTarget.style.borderTopColor = prog.color
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 40, height: 40,
                  background: `${prog.color}18`,
                  border: `1px solid ${prog.color}44`,
                  borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}>{prog.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    color: prog.color,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800, fontSize: 16, letterSpacing: 0.3,
                    lineHeight: 1.2,
                  }}>{prog.label}</div>
                  <div style={{
                    color: '#666', fontSize: 11,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: 0.5, marginTop: 2,
                  }}>{prog.short}</div>
                </div>
              </div>

              <div style={{
                padding: '8px 10px',
                background: '#080808',
                borderRadius: 4,
                display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <div style={{
                  color: '#777', fontSize: 11,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}>{prog.regulation}</div>
                <div style={{ color: '#989898', fontSize: 11 }}>
                  {prog.audience}
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
              }}>
                <span style={{
                  color: '#666', fontSize: 11,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}>~{prog.minutes} min</span>
                <span style={{
                  color: prog.color,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 12, letterSpacing: 2, fontWeight: 700,
                }}>START →</span>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div style={{
            marginTop: 14,
            border: '1px solid #1f1f1f',
            borderRadius: 8,
            background: '#0d0d0d',
            padding: '18px',
            color: '#7d7d7d',
            fontSize: 13,
          }}>
            No modules match the current filters. Try a different environment or training type.
          </div>
        )}
      </div>

      <div style={{
        padding: '14px 24px',
        borderTop: '1px solid #0f0f0f',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <span style={{
          color: '#444',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11, letterSpacing: 1,
        }}>A.I.R.O.N. SAFETY TRAINING · DINGFELDER ENTERPRISES</span>
        <span style={{
          color: '#444',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11, letterSpacing: 1,
        }}>{new Date().getFullYear()} · TRAINING ENVIRONMENTS INCLUDE THE DINGFELDER INDUSTRIAL CAMPUS</span>
      </div>
    </div>
  )
}

const forceScrollTop = () => {
  if (typeof window === 'undefined') return;
  const apply = () => {
    window.scrollTo(0, 0);
    const root = document.scrollingElement || document.documentElement || document.body;
    if (root) root.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  };
  apply();
  requestAnimationFrame(apply);
  setTimeout(apply, 0);
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PortalHome />} />
      <Route path="/landing" element={<AIRONLanding />} />
      {PROGRAMS.map(prog => (
        <Route
          key={prog.path}
          path={prog.path}
          element={<prog.Component />}
        />
      ))}
      <Route path="*" element={<PortalHome />} />
    </Routes>
  )
}

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const mode = useMemo(() => getSiteMode(window.location.hostname), [])
  const [showSplash, setShowSplash] = useState(() => location.pathname === '/')

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowSplash(false)
    }
  }, [location.pathname])

  useEffect(() => {
    forceScrollTop()
  }, [location.pathname])

  const handleSplashDone = () => {
    setShowSplash(false)
    forceScrollTop()
    if (mode === 'airon') {
      navigate('/landing', { replace: true })
    } else {
      navigate('/', { replace: true })
    }
  }

  if (showSplash) {
    return <AIRONSplash onDone={handleSplashDone} />
  }

  return <AppRoutes />
}
