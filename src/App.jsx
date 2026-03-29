
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import aironSplash from './assets/airon-splash.png'
import { bootstrapNetlifyIdentity, signInNetlifyIdentity, signOutNetlifyIdentity, createAccountNetlifyIdentity, getUserCaptureFromIdentityUser, loadCurrentUserCaptureNetlifyIdentity, persistUserCaptureNetlifyIdentity, loadTrainingRecordsNetlifyIdentity } from './auth/netlifyIdentity.js'
import { resolveProgramCompletion } from './utils/trainingRecordResolver.js'

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
import {
  NATURAL_GAS_CRACKER_PHASE1_MODULES,
  CrackerFeedGasTraining,
  CrackerFurnaceTraining,
  CrackerQuenchFractionationTraining,
  CrackerFlareReliefTraining,
  CrackerProcessSafetyTraining,
  CrackerLineOpeningTraining,
  CrackerTurnaroundTraining,
  CrackerSamplingDrainsTraining,
  CrackerEmergencyShelterTraining,
} from './programs/NaturalGasCrackerPhase1.jsx'
import {
  WASTE_WATER_TREATMENT_PHASE1_MODULES,
  WasteWaterHeadworksTraining,
  WasteWaterClarifierTraining,
  WasteWaterAtmospheresTraining,
  WasteWaterDigesterTraining,
  WasteWaterDisinfectionTraining,
  WasteWaterChemicalFeedTraining,
  WasteWaterBiosolidsTraining,
  WasteWaterConfinedSpaceTraining,
  WasteWaterEmergencyResponseTraining,
} from './programs/WasteWaterTreatmentPhase1.jsx'
import {
  CONFINED_SPACES_PHASE1_MODULES,
  ConfinedSpacePermitRolesTraining,
  ConfinedSpaceAtmosphericTestingTraining,
  ConfinedSpaceIsolationBlankingTraining,
  ConfinedSpaceAttendantCommunicationsTraining,
  ConfinedSpaceRetrievalRescueTraining,
  ConfinedSpaceTanksPitsSilosTraining,
  ConfinedSpaceSewersWetWellsTraining,
  ConfinedSpaceHotWorkSIMOPSTraining,
} from './programs/ConfinedSpacesPhase1.jsx'
import {
  ELECTRICAL_SAFETY_PHASE1_MODULES,
  ShockArcFlashBlastTraining,
  ElectricallySafeWorkConditionTraining,
  TestBeforeTouchTraining,
  MCCSwitchgearPanelAccessTraining,
  TemporaryPowerCordsPortablesTraining,
  MotorVFDDisconnectIsolationTraining,
  BatteryRoomsDCHazardsTraining,
  QualifiedUnqualifiedBoundariesTraining,
} from './programs/ElectricalSafetyPhase1.jsx'
import {
  CHEMICAL_SAFETY_PHASE1_MODULES,
  HazComLabelsSDSTraining,
  CorrosivesAcidsCausticsTraining,
  OxidizersReactivesIncompatiblesTraining,
  SolventsFlammablesVaporControlTraining,
  ToxicGasFumeInhalationTraining,
  ChemicalTransferSamplingHandlingTraining,
  SpillResponseIsolationDeconTraining,
  ChemicalWasteResiduesContainersTraining,
} from './programs/ChemicalSafetyPhase1.jsx'
import {
  RESPIRATORY_PROTECTION_PHASE1_MODULES,
  RespiratoryHazardRecognitionTraining,
  RespiratoryExposureTypesTraining,
  RespiratorTypesSelectionTraining,
  RespiratorCartridgeChangeoutTraining,
  RespiratorFitSealTraining,
  RespiratorFilterLoadingTraining,
  RespiratorCareInspectionTraining,
  RespiratoryIDLHOxygenEmergencyTraining,
} from './programs/RespiratoryProtectionPhase1.jsx'
import {
  FIRE_SAFETY_HOT_WORK_PHASE1_MODULES,
  FireScienceIgnitionControlTraining,
  HotWorkPermitFireWatchTraining,
  SparkTravelExposureControlTraining,
  FlammableAtmospherePreparationTraining,
  CombustibleLoadHousekeepingTraining,
  PortableExtinguisherIncipientTraining,
  GasCylinderTorchSetupTraining,
  PostWorkSmolderingRestorationTraining,
} from './programs/FireSafetyHotWorkPhase1.jsx'
import {
  TRUCKING_TRANSPORTATION_PHASE1_MODULES,
  YardBackingSpotterTraining,
  LoadingDockTrailerSafetyTraining,
  CouplingUncouplingTraining,
  CargoSecurementTarpingTraining,
  TankerBulkTransferTraining,
  DriverFatigueWeatherTraining,
  VehicleInterfaceTraining,
  RoadsideBreakdownEmergencyTraining,
} from './programs/TruckingTransportationPhase1.jsx'
import {
  MACHINERY_MOVING_RIGGING_PHASE1_MODULES,
  LiftPlanningWeightVerificationTraining,
  CenterOfGravityStabilityTraining,
  RiggingSlingsHardwareTraining,
  JackingSkiddingMovingPathsTraining,
  CraneSignalingTagLinesTraining,
  MobileCranesOutriggersTraining,
  CriticalLiftsEngineeredPlansTraining,
  SetDownUnriggingPinchControlTraining,
} from './programs/MachineryMovingRiggingPhase1.jsx'
import {
  LOTO_PHASE1_MODULES,
  LOTOFundamentalsIsolationTraining,
  LOTOAuthorizedAffectedTraining,
  LOTOZeroEnergyVerificationTraining,
  LOTOGroupShiftChangeTraining,
  LOTOCordPlugMinorServicingTraining,
  LOTOLineValveIsolationTraining,
  LOTOStoredEnergyReaccumulationTraining,
  LOTOContractorCoordinationTraining,
  LOTORestartReturnServiceTraining,
} from './programs/LOTOPhase1.jsx'
import {
  WORKING_AT_HEIGHTS_PHASE1_MODULES,
  FallHazardRecognitionTraining,
  GuardrailsCoversFloorOpeningsTraining,
  LaddersThreePointContactTraining,
  ScaffoldsElevatedPlatformsTraining,
  FallArrestHarnessTraining,
  AnchorPointsSwingFallTraining,
  AerialLiftsMEWPTraining,
  RoofWorkFragileSurfacesTraining,
  FallRescueSuspensionTraumaTraining,
} from './programs/WorkingAtHeightsPhase1.jsx'
import {
  MACHINE_GUARDING_PHASE1_MODULES,
  GuardingFundamentalsPointOfOperationTraining,
  NipPointsEntanglementTraining,
  ConveyorsRollersTrackingTraining,
  InterlocksEStopsBypassTraining,
  JamClearingMinorServicingTraining,
  RotatingEquipmentShaftsFansTraining,
  ClothingGlovesHairEntanglementTraining,
  GuardReinstallationStartupTraining,
} from './programs/MachineGuardingConveyorsPhase1.jsx'
import {
  FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES,
  PITStabilityTriangleTraining,
  PITPreUseInspectionTraining,
  PITPedestrianSeparationTraining,
  PITCapacityAttachmentsTraining,
  PITDockTrailerDriveOffTraining,
  PITRampsGradesSurfaceTraining,
  PITBatteryLPGTraining,
  PITRackingAislesTraining,
  PITOutdoorYardsTraining,
} from './programs/ForkliftsPoweredIndustrialTrucksPhase1.jsx'
import {
  HEARING_CONSERVATION_PHASE1_MODULES,
  NoiseHazardRecognitionTraining,
  HearingDamageTinnitusTraining,
  HearingProtectionSelectionTraining,
  HearingFitSealTraining,
  NoisePatternExposureTraining,
  NoiseCommunicationSituationalAwarenessTraining,
  HearingPPECareTraining,
  AudiogramsThresholdShiftTraining,
} from './programs/HearingConservationPhase1.jsx'

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
  ...NATURAL_GAS_CRACKER_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      CrackerFeedGasTraining,
      CrackerFurnaceTraining,
      CrackerQuenchFractionationTraining,
      CrackerFlareReliefTraining,
      CrackerProcessSafetyTraining,
      CrackerLineOpeningTraining,
      CrackerTurnaroundTraining,
      CrackerSamplingDrainsTraining,
      CrackerEmergencyShelterTraining,
    ][index],
  })),
  ...WASTE_WATER_TREATMENT_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      WasteWaterHeadworksTraining,
      WasteWaterClarifierTraining,
      WasteWaterAtmospheresTraining,
      WasteWaterDigesterTraining,
      WasteWaterDisinfectionTraining,
      WasteWaterChemicalFeedTraining,
      WasteWaterBiosolidsTraining,
      WasteWaterConfinedSpaceTraining,
      WasteWaterEmergencyResponseTraining,
    ][index],
  })),
  ...CONFINED_SPACES_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      ConfinedSpacePermitRolesTraining,
      ConfinedSpaceAtmosphericTestingTraining,
      ConfinedSpaceIsolationBlankingTraining,
      ConfinedSpaceAttendantCommunicationsTraining,
      ConfinedSpaceRetrievalRescueTraining,
      ConfinedSpaceTanksPitsSilosTraining,
      ConfinedSpaceSewersWetWellsTraining,
      ConfinedSpaceHotWorkSIMOPSTraining,
    ][index],
  })),
  ...ELECTRICAL_SAFETY_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      ShockArcFlashBlastTraining,
      ElectricallySafeWorkConditionTraining,
      TestBeforeTouchTraining,
      MCCSwitchgearPanelAccessTraining,
      TemporaryPowerCordsPortablesTraining,
      MotorVFDDisconnectIsolationTraining,
      BatteryRoomsDCHazardsTraining,
      QualifiedUnqualifiedBoundariesTraining,
    ][index],
  })),
  ...CHEMICAL_SAFETY_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      HazComLabelsSDSTraining,
      CorrosivesAcidsCausticsTraining,
      OxidizersReactivesIncompatiblesTraining,
      SolventsFlammablesVaporControlTraining,
      ToxicGasFumeInhalationTraining,
      ChemicalTransferSamplingHandlingTraining,
      SpillResponseIsolationDeconTraining,
      ChemicalWasteResiduesContainersTraining,
    ][index],
  })),
  ...RESPIRATORY_PROTECTION_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      RespiratoryHazardRecognitionTraining,
      RespiratoryExposureTypesTraining,
      RespiratorTypesSelectionTraining,
      RespiratorCartridgeChangeoutTraining,
      RespiratorFitSealTraining,
      RespiratorFilterLoadingTraining,
      RespiratorCareInspectionTraining,
      RespiratoryIDLHOxygenEmergencyTraining,
    ][index],
  })),
  ...FIRE_SAFETY_HOT_WORK_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      FireScienceIgnitionControlTraining,
      HotWorkPermitFireWatchTraining,
      SparkTravelExposureControlTraining,
      FlammableAtmospherePreparationTraining,
      CombustibleLoadHousekeepingTraining,
      PortableExtinguisherIncipientTraining,
      GasCylinderTorchSetupTraining,
      PostWorkSmolderingRestorationTraining,
    ][index],
  })),
  ...TRUCKING_TRANSPORTATION_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      YardBackingSpotterTraining,
      LoadingDockTrailerSafetyTraining,
      CouplingUncouplingTraining,
      CargoSecurementTarpingTraining,
      TankerBulkTransferTraining,
      DriverFatigueWeatherTraining,
      VehicleInterfaceTraining,
      RoadsideBreakdownEmergencyTraining,
    ][index],
  })),
  ...MACHINERY_MOVING_RIGGING_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      LiftPlanningWeightVerificationTraining,
      CenterOfGravityStabilityTraining,
      RiggingSlingsHardwareTraining,
      JackingSkiddingMovingPathsTraining,
      CraneSignalingTagLinesTraining,
      MobileCranesOutriggersTraining,
      CriticalLiftsEngineeredPlansTraining,
      SetDownUnriggingPinchControlTraining,
    ][index],
  })),
  ...LOTO_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      LOTOFundamentalsIsolationTraining,
      LOTOAuthorizedAffectedTraining,
      LOTOZeroEnergyVerificationTraining,
      LOTOGroupShiftChangeTraining,
      LOTOCordPlugMinorServicingTraining,
      LOTOLineValveIsolationTraining,
      LOTOStoredEnergyReaccumulationTraining,
      LOTOContractorCoordinationTraining,
      LOTORestartReturnServiceTraining,
    ][index],
  })),
  ...WORKING_AT_HEIGHTS_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      FallHazardRecognitionTraining,
      GuardrailsCoversFloorOpeningsTraining,
      LaddersThreePointContactTraining,
      ScaffoldsElevatedPlatformsTraining,
      FallArrestHarnessTraining,
      AnchorPointsSwingFallTraining,
      AerialLiftsMEWPTraining,
      RoofWorkFragileSurfacesTraining,
      FallRescueSuspensionTraumaTraining,
    ][index],
  })),
  ...MACHINE_GUARDING_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      GuardingFundamentalsPointOfOperationTraining,
      NipPointsEntanglementTraining,
      ConveyorsRollersTrackingTraining,
      InterlocksEStopsBypassTraining,
      JamClearingMinorServicingTraining,
      RotatingEquipmentShaftsFansTraining,
      ClothingGlovesHairEntanglementTraining,
      GuardReinstallationStartupTraining,
    ][index],
  })),
  ...HEARING_CONSERVATION_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      NoiseHazardRecognitionTraining,
      HearingDamageTinnitusTraining,
      HearingProtectionSelectionTraining,
      HearingFitSealTraining,
      NoisePatternExposureTraining,
      NoiseCommunicationSituationalAwarenessTraining,
      HearingPPECareTraining,
      AudiogramsThresholdShiftTraining,
    ][index],
  })),
  ...FORKLIFTS_POWERED_INDUSTRIAL_TRUCKS_PHASE1_MODULES.map((module, index) => ({
    ...module,
    Component: [
      PITStabilityTriangleTraining,
      PITPreUseInspectionTraining,
      PITPedestrianSeparationTraining,
      PITCapacityAttachmentsTraining,
      PITDockTrailerDriveOffTraining,
      PITRampsGradesSurfaceTraining,
      PITBatteryLPGTraining,
      PITRackingAislesTraining,
      PITOutdoorYardsTraining,
    ][index],
  })),
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
  { key: 'cracker-plant', label: 'Cracker Plant' },
  { key: 'waste-water', label: 'Waste Water Treatment' },
  { key: 'trucking-transportation', label: 'Trucking / Transportation' },
  { key: 'food-retail', label: 'Food / Retail' },
  { key: 'glass-fiberglass', label: 'Glass / Fiberglass' },
  { key: 'stored-energy', label: 'Stored Energy' },
  { key: 'confined-spaces', label: 'Confined Spaces' },
  { key: 'electrical-safety', label: 'Electrical Safety' },
  { key: 'chemical-safety', label: 'Chemical Safety / HazCom' },
  { key: 'respiratory-protection', label: 'Respiratory Protection' },
  { key: 'fire-safety-hot-work', label: 'Fire Safety / Hot Work' },
  { key: 'machine-guarding-conveyors', label: 'Machine Guarding / Conveyors' },
  { key: 'machinery-moving-rigging', label: 'Machinery Moving / Rigging' },
  { key: 'loto', label: 'LOTO' },
  { key: 'working-at-heights', label: 'Working at Heights / Fall Protection' },
  { key: 'hearing-conservation', label: 'Hearing Conservation / Noise Exposure' },
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
  'cracker-plant',
  'waste-water',
  'trucking-transportation',
  'food-retail',
  'glass-fiberglass',
]

const CAMPUS_AND_ALL_ENVIRONMENTS = ['campus', ...INDUSTRIAL_ENVIRONMENTS]
const MEDICAL_AND_ALL_ENVIRONMENTS = ['medical', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const CHEMICAL_SAFETY_ALL_ENVIRONMENTS = ['chemical-safety', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const RESPIRATORY_ALL_ENVIRONMENTS = ['respiratory-protection', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const FIRE_SAFETY_ALL_ENVIRONMENTS = ['fire-safety-hot-work', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS = ['machinery-moving-rigging', ...INDUSTRIAL_ENVIRONMENTS]
const LOTO_ALL_ENVIRONMENTS = ['loto', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const CONFINED_SPACES_ALL_ENVIRONMENTS = ['confined-spaces', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const CONFINED_SPACES_INDUSTRIAL_ENVIRONMENTS = ['confined-spaces', ...INDUSTRIAL_ENVIRONMENTS]
const WORKING_AT_HEIGHTS_ALL_ENVIRONMENTS = ['working-at-heights', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const MACHINE_GUARDING_ALL_ENVIRONMENTS = ['machine-guarding-conveyors', ...CAMPUS_AND_ALL_ENVIRONMENTS]
const HEARING_ALL_ENVIRONMENTS = ['hearing-conservation', ...CAMPUS_AND_ALL_ENVIRONMENTS]

const PROGRAM_CATEGORY_TAGS = {
  '/sat': ['campus'],

  '/loto': ['loto', 'foundry'],
  '/loto-campus': LOTO_ALL_ENVIRONMENTS,
  '/loto-fundamentals-isolation-boundaries': LOTO_ALL_ENVIRONMENTS,
  '/loto-authorized-vs-affected-employees': LOTO_ALL_ENVIRONMENTS,
  '/loto-zero-energy-verification': LOTO_ALL_ENVIRONMENTS,
  '/loto-group-lockout-shift-change': LOTO_ALL_ENVIRONMENTS,
  '/loto-cord-plug-minor-servicing-limits': LOTO_ALL_ENVIRONMENTS,
  '/loto-valve-line-bleed-block-isolation': LOTO_ALL_ENVIRONMENTS,
  '/loto-stored-energy-release-reaccumulation': ['loto', 'stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/loto-contractor-multi-employer-coordination': LOTO_ALL_ENVIRONMENTS,
  '/loto-restart-return-to-service-checks': LOTO_ALL_ENVIRONMENTS,
  '/fall-hazard-recognition-exposure-mapping': WORKING_AT_HEIGHTS_ALL_ENVIRONMENTS,
  '/guardrails-covers-floor-openings-control': WORKING_AT_HEIGHTS_ALL_ENVIRONMENTS,
  '/portable-fixed-ladders-three-point-contact': WORKING_AT_HEIGHTS_ALL_ENVIRONMENTS,
  '/scaffolds-temporary-elevated-work-platforms': ['working-at-heights', 'campus', ...INDUSTRIAL_ENVIRONMENTS, 'fire-safety-hot-work'],
  '/personal-fall-arrest-harness-basics': WORKING_AT_HEIGHTS_ALL_ENVIRONMENTS,
  '/anchor-points-swing-fall-clearance': WORKING_AT_HEIGHTS_ALL_ENVIRONMENTS,
  '/aerial-lifts-mewps-basket-work': ['working-at-heights', 'campus', ...INDUSTRIAL_ENVIRONMENTS, 'machinery-moving-rigging'],
  '/roof-work-fragile-surfaces-weather': ['working-at-heights', 'campus', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass'],
  '/fall-rescue-suspension-trauma-response': WORKING_AT_HEIGHTS_ALL_ENVIRONMENTS,
  '/guarding-fundamentals-point-of-operation': MACHINE_GUARDING_ALL_ENVIRONMENTS,
  '/in-running-nip-points-entanglement': MACHINE_GUARDING_ALL_ENVIRONMENTS,
  '/conveyors-rollers-belt-tracking-hazards': MACHINE_GUARDING_ALL_ENVIRONMENTS,
  '/interlocks-e-stops-guard-bypass-risk': MACHINE_GUARDING_ALL_ENVIRONMENTS,
  '/jam-clearing-cleaning-minor-servicing-boundaries': ['machine-guarding-conveyors', 'loto', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/rotating-equipment-shafts-couplings-fans': MACHINE_GUARDING_ALL_ENVIRONMENTS,
  '/clothing-gloves-hair-entanglement-prevention': MACHINE_GUARDING_ALL_ENVIRONMENTS,
  '/guard-inspection-reinstallation-startup-after-removal': ['machine-guarding-conveyors', 'loto', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/noise-hazard-recognition-area-mapping': HEARING_ALL_ENVIRONMENTS,
  '/hearing-damage-tinnitus-exposure-basics': HEARING_ALL_ENVIRONMENTS,
  '/earplugs-earmuffs-dual-protection-selection': HEARING_ALL_ENVIRONMENTS,
  '/fit-seal-wear-time-common-failure-modes': HEARING_ALL_ENVIRONMENTS,
  '/continuous-impact-intermittent-noise-exposures': HEARING_ALL_ENVIRONMENTS,
  '/communication-alarms-situational-awareness-noisy-areas': ['hearing-conservation', 'campus', ...INDUSTRIAL_ENVIRONMENTS, 'trucking-transportation', 'machinery-moving-rigging'],
  '/hearing-ppe-cleaning-hygiene-storage-replacement': HEARING_ALL_ENVIRONMENTS,
  '/audiograms-threshold-shift-reporting-symptoms': HEARING_ALL_ENVIRONMENTS,
  '/h2s': ['process-gas', 'cracker-plant', 'waste-water', 'confined-spaces', 'chemical-safety', 'respiratory-protection'],
  '/cracker-feed-gas': ['cracker-plant', 'process-gas'],
  '/cracker-furnace': ['cracker-plant', 'process-gas'],
  '/cracker-quench-fractionation': ['cracker-plant', 'process-gas'],
  '/cracker-flare-relief': ['cracker-plant', 'process-gas', 'fire-safety-hot-work'],
  '/cracker-process-safety-gas-release': ['cracker-plant', 'process-gas'],
  '/cracker-line-opening': ['cracker-plant', 'process-gas', 'loto'],
  '/cracker-turnaround-simops': ['cracker-plant', 'process-gas', 'working-at-heights'],
  '/cracker-psv-drains-sampling': ['cracker-plant', 'process-gas'],
  '/cracker-emergency-shelter-muster': ['cracker-plant', 'process-gas'],
  '/wastewater-headworks-influent': ['waste-water', 'machine-guarding-conveyors'],
  '/wastewater-open-basins-clarifiers': ['waste-water', 'working-at-heights'],
  '/wastewater-h2s-gas-detection': ['waste-water', 'respiratory-protection'],
  '/wastewater-digesters-biogas': ['waste-water', 'fire-safety-hot-work'],
  '/wastewater-disinfection-chemicals': ['waste-water', 'chemical-safety'],
  '/wastewater-chemical-feed-polymer': ['waste-water', 'chemical-safety'],
  '/wastewater-biosolids-dewatering': ['waste-water', 'machine-guarding-conveyors', 'hearing-conservation'],
  '/wastewater-wet-well-confined-space': ['waste-water', 'confined-spaces'],
  '/wastewater-bypass-overflow-response': ['waste-water'],
  '/yard-backing-spotter-coordination': ['trucking-transportation', 'hearing-conservation'],
  '/loading-dock-trailer-creep-drive-off': ['trucking-transportation'],
  '/coupling-uncoupling-chocking-landing-gear': ['trucking-transportation', 'stored-energy'],
  '/cargo-securement-flatbed-tarping': ['trucking-transportation', 'machinery-moving-rigging', 'working-at-heights'],
  '/tanker-bulk-transfer-hose-connections': ['trucking-transportation', 'chemical-safety', 'fire-safety-hot-work'],
  '/driver-fatigue-weather-road-conditions': ['trucking-transportation'],
  '/pedestrian-forklift-heavy-vehicle-interface': ['trucking-transportation'],
  '/breakdown-incident-highway-emergency-response': ['trucking-transportation', 'fire-safety-hot-work'],
  '/rigging-lift-planning-weight-verification': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/rigging-center-of-gravity-stability': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/rigging-slings-hardware-hitch-selection': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/rigging-jacking-skidding-rollers-moving-paths': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/rigging-signaling-tag-lines-suspended-load-control': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/rigging-mobile-cranes-outriggers-ground-pressure': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/rigging-critical-lifts-tandem-engineered-plans': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/rigging-set-down-unrigging-pinch-zone-control': MACHINERY_MOVING_INDUSTRIAL_ENVIRONMENTS,
  '/arcflash': ['campus', ...INDUSTRIAL_ENVIRONMENTS, 'stored-energy', 'electrical-safety'],
  '/electrical-shock-vs-arc-flash-blast': ['electrical-safety', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/electrically-safe-work-condition': ['electrical-safety', 'loto', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/test-before-touch': ['electrical-safety', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/mcc-switchgear-panel-access': ['electrical-safety', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/temporary-power-cords-portables': ['electrical-safety', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/motor-vfd-disconnect-isolation': ['electrical-safety', 'loto', 'stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/battery-rooms-dc-hazards': ['electrical-safety', 'stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/qualified-vs-unqualified-boundaries': ['electrical-safety', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/chemical-hazcom-labels-sds-pictograms': CHEMICAL_SAFETY_ALL_ENVIRONMENTS,
  '/chemical-corrosives-acids-caustics': ['chemical-safety', 'campus', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'trucking-transportation'],
  '/chemical-oxidizers-reactives-incompatibles': ['chemical-safety', 'campus', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'trucking-transportation'],
  '/chemical-solvents-flammables-vapor-control': ['chemical-safety', 'fire-safety-hot-work', 'campus', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'food-retail', 'glass-fiberglass', 'trucking-transportation'],
  '/chemical-toxic-gas-fume-inhalation': ['chemical-safety', 'respiratory-protection', 'campus', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'trucking-transportation'],
  '/chemical-transfer-sampling-container-handling': ['chemical-safety', 'campus', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'trucking-transportation'],
  '/chemical-spill-response-isolation-decon': CHEMICAL_SAFETY_ALL_ENVIRONMENTS,
  '/chemical-waste-residues-empty-containers': CHEMICAL_SAFETY_ALL_ENVIRONMENTS,
  '/respiratory-hazard-recognition': RESPIRATORY_ALL_ENVIRONMENTS,
  '/respiratory-dust-fume-mist-vapor-gas': RESPIRATORY_ALL_ENVIRONMENTS,
  '/respiratory-apr-papr-supplied-air-scba': RESPIRATORY_ALL_ENVIRONMENTS,
  '/respiratory-cartridge-selection-changeout': ['respiratory-protection', 'campus', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'chemical-safety'],
  '/respiratory-fit-check-facial-hair': RESPIRATORY_ALL_ENVIRONMENTS,
  '/respiratory-filter-loading-breathing-resistance': ['respiratory-protection', 'campus', 'foundry', 'waste-water', 'food-retail', 'glass-fiberglass', 'confined-spaces', 'chemical-safety'],
  '/respiratory-cleaning-storage-inspection': RESPIRATORY_ALL_ENVIRONMENTS,
  '/respiratory-idlh-oxygen-deficiency-emergency-escape': ['respiratory-protection', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'glass-fiberglass', 'confined-spaces', 'chemical-safety'],

  '/fire-science-ignition-control': FIRE_SAFETY_ALL_ENVIRONMENTS,
  '/hot-work-permits-fire-watch': ['fire-safety-hot-work', 'campus', ...INDUSTRIAL_ENVIRONMENTS, 'confined-spaces'],
  '/spark-travel-welding-cutting-grinding': ['fire-safety-hot-work', 'campus', ...INDUSTRIAL_ENVIRONMENTS, 'confined-spaces'],
  '/flammable-atmospheres-area-preparation': ['fire-safety-hot-work', 'campus', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'chemical-safety'],
  '/combustible-dust-fiber-housekeeping': FIRE_SAFETY_ALL_ENVIRONMENTS,
  '/portable-extinguishers-incipient-stage': FIRE_SAFETY_ALL_ENVIRONMENTS,
  '/gas-cylinders-hoses-torch-setup': ['fire-safety-hot-work', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/post-work-smoldering-fire-system-restoration': ['fire-safety-hot-work', 'campus', ...INDUSTRIAL_ENVIRONMENTS, 'confined-spaces'],


  '/evacuation': CAMPUS_AND_ALL_ENVIRONMENTS,

  '/medical-emergency-basics': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/aed-awareness': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/adult-cpr-awareness': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/pulse-check-awareness': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/severe-bleeding-control': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/choking-response': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/ems-activation': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/heat-illness': ['medical', 'campus', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass'],
  '/stroke-fast': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/heart-attack-warning': MEDICAL_AND_ALL_ENVIRONMENTS,
  '/burn-first-aid': ['medical', 'campus', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass'],
  '/eye-exposure': ['medical', 'campus', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'chemical-safety'],
  '/medical-response-final': ['medical'],

  '/hazcom': CHEMICAL_SAFETY_ALL_ENVIRONMENTS,
  '/ppe': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/forklift': ['campus', 'foundry', 'food-retail', 'glass-fiberglass', 'trucking-transportation'],
  '/fire-extinguishers': FIRE_SAFETY_ALL_ENVIRONMENTS,
  '/molten-metal': ['foundry'],
  '/furnace-melt-deck': ['foundry'],
  '/silica-sand': ['foundry', 'respiratory-protection'],
  '/crane-ladle': ['foundry', 'beam-mill', 'glass-fiberglass'],
  '/propane-farm': ['campus', 'process-gas', 'fire-safety-hot-work'],
  '/food-chemical': ['campus', 'food-retail', 'chemical-safety', 'respiratory-protection'],
  '/ammonia': ['campus', 'food-retail', 'chemical-safety', 'respiratory-protection'],
  '/retail-backroom': ['campus', 'food-retail'],

  '/walking-working-surfaces': ['working-at-heights', ...CAMPUS_AND_ALL_ENVIRONMENTS],
  '/incident-reporting': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/contractor-safety': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/severe-weather': CAMPUS_AND_ALL_ENVIRONMENTS,
  '/confined-space': CONFINED_SPACES_ALL_ENVIRONMENTS,
  '/respiratory-protection': ['respiratory-protection', 'campus', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass', 'trucking-transportation', 'confined-spaces', 'chemical-safety'],
  '/hearing-conservation': HEARING_ALL_ENVIRONMENTS,
  '/hot-work': ['campus', ...INDUSTRIAL_ENVIRONMENTS, 'confined-spaces', 'fire-safety-hot-work'],
  '/confined-space-permit-roles': CONFINED_SPACES_ALL_ENVIRONMENTS,
  '/confined-space-atmospheric-testing': CONFINED_SPACES_ALL_ENVIRONMENTS,
  '/confined-space-isolation-blanking': ['confined-spaces', 'loto', ...INDUSTRIAL_ENVIRONMENTS],
  '/confined-space-attendant-communications': CONFINED_SPACES_ALL_ENVIRONMENTS,
  '/confined-space-retrieval-rescue': CONFINED_SPACES_ALL_ENVIRONMENTS,
  '/confined-space-tanks-pits-silos': ['confined-spaces', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass'],
  '/confined-space-sewers-wet-wells': ['confined-spaces', 'campus', 'process-gas', 'waste-water'],
  '/confined-space-hot-work-simops': ['confined-spaces', 'fire-safety-hot-work', 'foundry', 'process-gas', 'cracker-plant', 'waste-water', 'glass-fiberglass'],


  '/machine-guarding-molding-line': ['foundry', 'beam-mill', 'glass-fiberglass', 'waste-water', 'food-retail', 'machine-guarding-conveyors'],
  '/foundry-heat-stress-burn-prevention': ['foundry'],
  '/core-room-binder-ventilation': ['foundry', 'chemical-safety', 'respiratory-protection'],
  '/shakeout-cleaning-grinding': ['foundry', 'hearing-conservation'],
  '/beam-mill-rolling-line': ['beam-mill', 'machine-guarding-conveyors', 'hearing-conservation'],
  '/overhead-crane-rigging': ['foundry', 'beam-mill', 'glass-fiberglass'],
  '/pinch-crush-steel-handling': ['foundry', 'beam-mill', 'glass-fiberglass', 'machine-guarding-conveyors'],

  '/hydraulic-stored-energy': ['stored-energy', 'loto', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'food-retail', 'glass-fiberglass'],
  '/pneumatic-stored-energy': ['stored-energy', 'loto', 'foundry', 'beam-mill', 'process-gas', 'cracker-plant', 'waste-water', 'food-retail', 'glass-fiberglass'],
  '/electrical-stored-energy': ['stored-energy', 'electrical-safety', 'loto', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/fermentation-stored-energy': ['stored-energy', 'process-gas', 'waste-water', 'food-retail'],
  '/gravity-stored-energy': ['stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/elastic-stored-energy': ['stored-energy', 'campus', 'foundry', 'beam-mill', 'food-retail', 'glass-fiberglass'],
  '/magnetic-stored-energy': ['stored-energy', 'campus', 'foundry', 'beam-mill', 'glass-fiberglass'],
  '/thermal-stored-energy': ['stored-energy', 'campus', ...INDUSTRIAL_ENVIRONMENTS],
  '/nuclear-stored-energy': ['stored-energy', 'campus'],

  '/glass-melt-furnace': ['glass-fiberglass'],
  '/marble-melt-feed': ['glass-fiberglass'],
  '/forehearth-transfer': ['glass-fiberglass'],
  '/fiberizing-spinner': ['glass-fiberglass', 'machine-guarding-conveyors', 'hearing-conservation'],
  '/mat-forming-line': ['glass-fiberglass', 'machine-guarding-conveyors', 'hearing-conservation'],
  '/fiberglass-dust': ['glass-fiberglass', 'respiratory-protection'],
  '/binder-resin-sizing': ['glass-fiberglass', 'chemical-safety', 'respiratory-protection'],
  '/glass-line-loto': ['glass-fiberglass', 'loto', 'machine-guarding-conveyors'],
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
  '/loto-fundamentals-isolation-boundaries',
  '/loto-authorized-vs-affected-employees',
  '/loto-zero-energy-verification',
  '/loto-group-lockout-shift-change',
  '/loto-cord-plug-minor-servicing-limits',
  '/loto-valve-line-bleed-block-isolation',
  '/loto-stored-energy-release-reaccumulation',
  '/loto-contractor-multi-employer-coordination',
  '/loto-restart-return-to-service-checks',
  '/h2s',
  '/cracker-feed-gas',
  '/cracker-furnace',
  '/cracker-quench-fractionation',
  '/cracker-flare-relief',
  '/cracker-process-safety-gas-release',
  '/cracker-line-opening',
  '/cracker-turnaround-simops',
  '/cracker-psv-drains-sampling',
  '/cracker-emergency-shelter-muster',
  '/arcflash',
  '/electrical-shock-vs-arc-flash-blast',
  '/electrically-safe-work-condition',
  '/test-before-touch',
  '/mcc-switchgear-panel-access',
  '/temporary-power-cords-portables',
  '/motor-vfd-disconnect-isolation',
  '/battery-rooms-dc-hazards',
  '/qualified-vs-unqualified-boundaries',
  '/chemical-corrosives-acids-caustics',
  '/chemical-oxidizers-reactives-incompatibles',
  '/chemical-solvents-flammables-vapor-control',
  '/chemical-toxic-gas-fume-inhalation',
  '/chemical-transfer-sampling-container-handling',
  '/chemical-spill-response-isolation-decon',
  '/chemical-waste-residues-empty-containers',
  '/molten-metal',
  '/furnace-melt-deck',
  '/silica-sand',
  '/crane-ladle',
  '/propane-farm',
  '/confined-space',
  '/confined-space-permit-roles',
  '/confined-space-atmospheric-testing',
  '/confined-space-isolation-blanking',
  '/confined-space-attendant-communications',
  '/confined-space-retrieval-rescue',
  '/confined-space-tanks-pits-silos',
  '/confined-space-sewers-wet-wells',
  '/confined-space-hot-work-simops',
  '/respiratory-protection',
  '/respiratory-hazard-recognition',
  '/respiratory-dust-fume-mist-vapor-gas',
  '/respiratory-apr-papr-supplied-air-scba',
  '/respiratory-cartridge-selection-changeout',
  '/respiratory-fit-check-facial-hair',
  '/respiratory-filter-loading-breathing-resistance',
  '/respiratory-cleaning-storage-inspection',
  '/respiratory-idlh-oxygen-deficiency-emergency-escape',
  '/fire-science-ignition-control',
  '/hot-work-permits-fire-watch',
  '/spark-travel-welding-cutting-grinding',
  '/flammable-atmospheres-area-preparation',
  '/combustible-dust-fiber-housekeeping',
  '/portable-extinguishers-incipient-stage',
  '/gas-cylinders-hoses-torch-setup',
  '/post-work-smoldering-fire-system-restoration',
  '/yard-backing-spotter-coordination',
  '/loading-dock-trailer-creep-drive-off',
  '/coupling-uncoupling-chocking-landing-gear',
  '/cargo-securement-flatbed-tarping',
  '/tanker-bulk-transfer-hose-connections',
  '/driver-fatigue-weather-road-conditions',
  '/pedestrian-forklift-heavy-vehicle-interface',
  '/breakdown-incident-highway-emergency-response',
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
  '/fall-hazard-recognition-exposure-mapping',
  '/guardrails-covers-floor-openings-control',
  '/portable-fixed-ladders-three-point-contact',
  '/scaffolds-temporary-elevated-work-platforms',
  '/personal-fall-arrest-harness-basics',
  '/anchor-points-swing-fall-clearance',
  '/aerial-lifts-mewps-basket-work',
  '/roof-work-fragile-surfaces-weather',
  '/fall-rescue-suspension-trauma-response',
  '/guarding-fundamentals-point-of-operation',
  '/in-running-nip-points-entanglement',
  '/conveyors-rollers-belt-tracking-hazards',
  '/interlocks-e-stops-guard-bypass-risk',
  '/jam-clearing-cleaning-minor-servicing-boundaries',
  '/rotating-equipment-shafts-couplings-fans',
  '/clothing-gloves-hair-entanglement-prevention',
  '/guard-inspection-reinstallation-startup-after-removal',
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
      maxHeight: '88vh',
        overflow: 'auto',
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


const USER_CAPTURE_VERSION = 'AIRON-TRAINING-USE-AND-RECORD-v1'
const USER_CAPTURE_STORAGE_PREFIX = 'airon.userCapture.'
const VALID_CATEGORY_FILTER_KEYS = new Set(CATEGORY_FILTERS.map(filter => filter.key).filter(key => key !== 'all'))

function getUserCaptureStorageKey(user) {
  const rawIdentity = `${user?.id || user?.email || ''}`.trim().toLowerCase()
  return rawIdentity ? `${USER_CAPTURE_STORAGE_PREFIX}${rawIdentity}` : null
}

function getEmptyUserCapture() {
  return {
    acceptance: {
      accepted: false,
      version: USER_CAPTURE_VERSION,
      acceptedAt: '',
    },
    profile: {
      firstName: '',
      lastName: '',
      companyName: '',
      departmentName: '',
      roleName: '',
      employeeId: '',
      userType: 'employee',
    },
  }
}


function mergeUserCaptureData(baseCapture, overlayCapture) {
  const empty = getEmptyUserCapture()
  return {
    acceptance: {
      ...empty.acceptance,
      ...(baseCapture?.acceptance || {}),
      ...(overlayCapture?.acceptance || {}),
    },
    profile: {
      ...empty.profile,
      ...(baseCapture?.profile || {}),
      ...(overlayCapture?.profile || {}),
    },
  }
}

function loadUserCapture(user) {
  const empty = getEmptyUserCapture()
  const identityCapture = getUserCaptureFromIdentityUser(user)
  let localCapture = null

  if (typeof window !== 'undefined') {
    const key = getUserCaptureStorageKey(user)
    if (key) {
      try {
        localCapture = JSON.parse(window.localStorage.getItem(key) || 'null')
      } catch {
        localCapture = null
      }
    }
  }

  return mergeUserCaptureData(mergeUserCaptureData(empty, localCapture), identityCapture)
}

function saveUserCaptureToLocalCache(user, nextPartial) {
  const current = loadUserCapture(user)
  const merged = mergeUserCaptureData(current, nextPartial)

  if (typeof window !== 'undefined') {
    const key = getUserCaptureStorageKey(user)
    if (key) {
      window.localStorage.setItem(key, JSON.stringify(merged))
    }
  }

  return merged
}

function hasAcceptedUserCapture(capture) {
  return Boolean(capture?.acceptance?.accepted && capture?.acceptance?.version === USER_CAPTURE_VERSION)
}

function hasCompletedUserProfile(profile) {
  return Boolean(
    profile?.firstName?.trim() &&
    profile?.lastName?.trim() &&
    profile?.roleName?.trim() &&
    profile?.userType?.trim()
  )
}

function isUserCaptureComplete(capture) {
  return hasAcceptedUserCapture(capture) && hasCompletedUserProfile(capture?.profile || {})
}

function splitProgramsForCategory(programs, selectedCategory) {
  return programs.reduce((acc, prog) => {
    if (prog.__resolution?.satisfied) {
      acc.completed.push(prog)
      return acc
    }

    if (!selectedCategory || selectedCategory === 'all') {
      acc.specific.push(prog)
      return acc
    }

    if (prog.__resolution?.completionBucket === 'common') {
      acc.common.push(prog)
      return acc
    }

    if (prog.__resolution?.completionBucket === 'specific') {
      acc.specific.push(prog)
      return acc
    }

    const tags = getProgramCategories(prog.path)
    const sharedTags = tags.filter(tag => tag !== selectedCategory && tag !== 'campus' && VALID_CATEGORY_FILTER_KEYS.has(tag))
    if (sharedTags.length > 0) {
      acc.common.push(prog)
    } else {
      acc.specific.push(prog)
    }
    return acc
  }, { completed: [], specific: [], common: [] })
}

function HeaderActionButton({ children, onClick, accent = 'neutral', type = 'button' }) {
  const palette = accent === 'primary'
    ? {
        border: '1px solid rgba(255,209,0,0.35)',
        background: 'rgba(255,209,0,0.08)',
        color: '#FFD100',
      }
    : accent === 'success'
      ? {
          border: '1px solid rgba(34,204,102,0.35)',
          background: 'rgba(34,204,102,0.08)',
          color: '#9DFFBC',
        }
      : {
          border: '1px solid rgba(255,255,255,0.12)',
          background: '#101010',
          color: '#E6E6E6',
        }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        appearance: 'none',
        border: palette.border,
        background: palette.background,
        color: palette.color,
        borderRadius: 10,
        padding: '9px 12px',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        letterSpacing: 0.5,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

function SignInPanel({
  open,
  email,
  password,
  busy,
  error,
  onEmailChange,
  onPasswordChange,
  onClose,
  onSubmit,
  onOpenCreateAccount,
}) {
  if (!open) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.74)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 2000,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 460,
        borderRadius: 18,
        border: '1px solid rgba(255,209,0,0.22)',
        background: '#0D0D0D',
        boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '18px 20px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(180deg, rgba(255,209,0,0.06), rgba(255,209,0,0.00))',
        }}>
          <div style={{
            color: '#FFD100',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Sign in
          </div>
          <div style={{
            color: '#FFFFFF',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 28,
            lineHeight: 1,
            fontWeight: 800,
          }}>
            Access your training record
          </div>
          <div style={{
            color: '#A0A0A0',
            fontSize: 13,
            lineHeight: 1.6,
            marginTop: 10,
            maxWidth: 380,
          }}>
            Testing remains open without login. Sign in when you want your saved record, certificates, and future reports tied to your account.
          </div>
        </div>

        <form onSubmit={onSubmit} style={{ padding: 20 }}>
          <label style={{ display: 'block', marginBottom: 14 }}>
            <div style={{
              color: '#BEBEBE',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              Email
            </div>
            <input
              type="email"
              value={email}
              onChange={event => onEmailChange(event.target.value)}
              autoComplete="email"
              required
              style={{
                width: '100%',
                boxSizing: 'border-box',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.12)',
                background: '#141414',
                color: '#FFFFFF',
                padding: '12px 14px',
                fontSize: 14,
                outline: 'none',
              }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: 10 }}>
            <div style={{
              color: '#BEBEBE',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={event => onPasswordChange(event.target.value)}
              autoComplete="current-password"
              required
              style={{
                width: '100%',
                boxSizing: 'border-box',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.12)',
                background: '#141414',
                color: '#FFFFFF',
                padding: '12px 14px',
                fontSize: 14,
                outline: 'none',
              }}
            />
          </label>

          <div style={{
            color: '#7E7E7E',
            fontSize: 12,
            lineHeight: 1.6,
            marginBottom: 12,
          }}>
            If your invite or recovery email already signed you in on this browser, use the Account panel to finish setup.
          </div>

          {error && (
            <div style={{
              marginBottom: 14,
              borderRadius: 10,
              border: '1px solid rgba(255,107,0,0.32)',
              background: 'rgba(255,107,0,0.10)',
              color: '#FFB48F',
              padding: '10px 12px',
              fontSize: 13,
              lineHeight: 1.5,
            }}>
              {error}
            </div>
          )}

          <div style={{
            marginTop: 10,
            color: '#8D8D8D',
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            New here? Create your account first, then complete the A.I.R.O.N. acceptance and profile setup.
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginTop: 18 }}>
            <button
              type="button"
              onClick={onOpenCreateAccount}
              style={{
                appearance: 'none',
                border: '1px solid rgba(255,209,0,0.35)',
                background: 'rgba(255,209,0,0.08)',
                color: '#FFD100',
                borderRadius: 10,
                padding: '9px 12px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 0.5,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Create Account
            </button>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <HeaderActionButton onClick={onClose}>Close</HeaderActionButton>
              <HeaderActionButton type="submit" accent="primary">
                {busy ? 'Signing In…' : 'Sign In'}
              </HeaderActionButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


function CreateAccountPanel({
  open,
  email,
  password,
  confirmPassword,
  busy,
  error,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onClose,
  onSubmit,
  onOpenSignIn,
}) {
  if (!open) return null

  const passwordsMatch = password && confirmPassword && password === confirmPassword
  const ready = Boolean(email.trim() && password && confirmPassword && passwordsMatch)

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.74)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 2000,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 520,
        borderRadius: 18,
        border: '1px solid rgba(255,209,0,0.22)',
        background: '#0D0D0D',
        boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '18px 20px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(180deg, rgba(255,209,0,0.06), rgba(255,209,0,0.00))',
        }}>
          <div style={{
            color: '#FFD100',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Create account
          </div>
          <div style={{
            color: '#FFFFFF',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 28,
            lineHeight: 1,
            fontWeight: 800,
          }}>
            Start your saved-record path
          </div>
          <div style={{
            color: '#A0A0A0',
            fontSize: 13,
            lineHeight: 1.6,
            marginTop: 10,
            maxWidth: 420,
          }}>
            Create your A.I.R.O.N. account first. After that, you will complete the acceptance and profile steps before using the retained-record path.
          </div>
        </div>

        <form onSubmit={onSubmit} style={{ padding: 20 }}>
          {[
            ['Email', email, onEmailChange, 'email', 'email'],
            ['Password', password, onPasswordChange, 'password', 'new-password'],
            ['Confirm password', confirmPassword, onConfirmPasswordChange, 'password', 'new-password'],
          ].map(([label, value, onChange, type, autoComplete]) => (
            <label key={label} style={{ display: 'block', marginBottom: 14 }}>
              <div style={{
                color: '#BEBEBE',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                {label}
              </div>
              <input
                type={type}
                value={value}
                onChange={event => onChange(event.target.value)}
                autoComplete={autoComplete}
                required
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: '#141414',
                  color: '#FFFFFF',
                  padding: '12px 14px',
                  fontSize: 14,
                  outline: 'none',
                }}
              />
            </label>
          ))}

          {!!confirmPassword && password !== confirmPassword && (
            <div style={{
              marginBottom: 14,
              padding: '10px 12px',
              borderRadius: 12,
              background: 'rgba(255,107,0,0.10)',
              border: '1px solid rgba(255,107,0,0.24)',
              color: '#FFB48F',
              fontSize: 13,
              lineHeight: 1.5,
            }}>
              Passwords do not match yet.
            </div>
          )}

          {error && (
            <div style={{
              marginBottom: 14,
              padding: '10px 12px',
              borderRadius: 12,
              background: 'rgba(255,107,0,0.10)',
              border: '1px solid rgba(255,107,0,0.24)',
              color: '#FFB48F',
              fontSize: 13,
              lineHeight: 1.5,
            }}>
              {error}
            </div>
          )}

          <div style={{
            color: '#8D8D8D',
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            Already have an account? Sign in instead.
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginTop: 18 }}>
            <button
              type="button"
              onClick={onOpenSignIn}
              style={{
                appearance: 'none',
                border: '1px solid rgba(255,209,0,0.35)',
                background: 'rgba(255,209,0,0.08)',
                color: '#FFD100',
                borderRadius: 10,
                padding: '9px 12px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 0.5,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Sign In Instead
            </button>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <HeaderActionButton onClick={onClose}>Close</HeaderActionButton>
              <button
                type="submit"
                disabled={!ready || busy}
                style={{
                  appearance: 'none',
                  border: '1px solid rgba(255,209,0,0.35)',
                  background: ready && !busy ? 'rgba(255,209,0,0.12)' : '#252525',
                  color: ready && !busy ? '#FFD100' : '#777',
                  borderRadius: 10,
                  padding: '9px 12px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: 0.5,
                  cursor: ready && !busy ? 'pointer' : 'not-allowed',
                  whiteSpace: 'nowrap',
                }}
              >
                {busy ? 'Creating...' : 'Create Account'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


function formatTrainingHistoryDate(value) {
  if (!value) return '—'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return '—'
  return parsed.toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function summarizeTrainingRecord(record) {
  if (!record || typeof record !== 'object') {
    return {
      title: 'Unknown module',
      scoreLabel: '—',
      statusLabel: '—',
      certificateLabel: '—',
      completedLabel: '—',
    }
  }

  const scoreLabel =
    Number.isFinite(Number(record?.quizCorrect)) && Number.isFinite(Number(record?.quizTotal))
      ? `${Number(record.quizCorrect)} / ${Number(record.quizTotal)}`
      : Number.isFinite(Number(record?.score))
      ? String(Number(record.score))
      : '—'

  return {
    title: typeof record?.moduleTitle === 'string' && record.moduleTitle.trim() ? record.moduleTitle : 'Unknown module',
    scoreLabel,
    statusLabel: record?.passed ? 'Passed' : 'Review required',
    certificateLabel: record?.certificateEligible
      ? (typeof record?.certificateClass === 'string' && record.certificateClass.trim() ? record.certificateClass : 'Completion Record')
      : 'Not eligible',
    completedLabel: formatTrainingHistoryDate(record?.completedAt),
  }
}

function AccountPanel({ open, authState, captureState, trainingRecordsState, onClose, onOpenSignIn, onOpenSetup, onRefreshTrainingRecords }) {
  if (!open) return null

  const privacyText = 'Your information is used only to create and maintain your training record, save test results, retain certificates, and send training-related notices. We do not sell your data, rent your data, or use it for advertising.'
  const accepted = hasAcceptedUserCapture(captureState)
  const profileComplete = hasCompletedUserProfile(captureState?.profile || {})
  const setupComplete = isUserCaptureComplete(captureState)
  const records = Array.isArray(trainingRecordsState?.records) ? trainingRecordsState.records : []
  const latestRecord = records[0] || null
  const latestSummary = summarizeTrainingRecord(latestRecord)
  const passedCount = records.filter(item => item?.passed).length
  const certificateEligibleCount = records.filter(item => item?.certificateEligible).length

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.74)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 1900,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1040,
        borderRadius: 18,
        border: '1px solid rgba(255,209,0,0.18)',
        background: '#0D0D0D',
        boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '18px 20px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(180deg, rgba(255,209,0,0.06), rgba(255,209,0,0.00))',
        }}>
          <div style={{
            color: '#FFD100',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Account and privacy
          </div>
          <div style={{
            color: '#FFFFFF',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 28,
            lineHeight: 1,
            fontWeight: 800,
            marginBottom: 10,
          }}>
            {authState.user ? (setupComplete ? 'Saved record ready' : 'Finish your saved record setup') : 'Testing remains open without login'}
          </div>
          <div style={{
            color: '#A4A4A4',
            fontSize: 14,
            lineHeight: 1.65,
            maxWidth: 640,
          }}>
            {authState.user
              ? 'Signed-in users can retain accepted terms, profile information, future scores, and certificates. Complete setup once, then use the same account for all retained records.'
              : 'You can keep testing without login while the user system is being built. Sign in when you want the portal to attach future attempts, reports, and certificates to a saved personal record.'}
          </div>
        </div>

        <div style={{ padding: 20 }}>
          <div style={{
            display: 'grid',
            gap: 14,
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}>
            <div style={{
              padding: '14px 15px',
              borderRadius: 12,
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                color: '#BEBEBE',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                Account status
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                {authState.user ? 'Signed in' : 'Guest testing mode'}
              </div>
              <div style={{ color: '#8C8C8C', fontSize: 13, lineHeight: 1.6 }}>
                {authState.user?.email || 'No saved identity is attached to this browser session yet.'}
              </div>
            </div>

            <div style={{
              padding: '14px 15px',
              borderRadius: 12,
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                color: '#BEBEBE',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                Setup status
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                {authState.user ? (setupComplete ? 'Ready for retained records' : 'Setup required') : 'Not started'}
              </div>
              <div style={{ color: '#8C8C8C', fontSize: 13, lineHeight: 1.6 }}>
                Acceptance: {accepted ? 'Accepted' : 'Pending'} · Profile: {profileComplete ? 'Complete' : 'Pending'}
              </div>
            </div>

            <div style={{
              padding: '14px 15px',
              borderRadius: 12,
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                color: '#BEBEBE',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                Saved record path
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 13, lineHeight: 1.7 }}>
                Logged-in users will be the retained path for future scores, certificates, reports, and training history. Guest testing stays open until enforcement is turned on.
              </div>
            </div>
          </div>

          {authState.user && (
            <>
              <div style={{
                marginTop: 14,
                display: 'grid',
                gap: 14,
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              }}>
                <div style={{
                  padding: '14px 15px',
                  borderRadius: 12,
                  background: '#111111',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{
                    color: '#BEBEBE',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>
                    Training history
                  </div>
                  <div style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                    {trainingRecordsState?.hydrating ? 'Loading retained records…' : `${records.length} retained module${records.length === 1 ? '' : 's'}`}
                  </div>
                  <div style={{ color: '#8C8C8C', fontSize: 13, lineHeight: 1.6 }}>
                    Passed: {passedCount} · Certificate eligible: {certificateEligibleCount}
                  </div>
                </div>

                <div style={{
                  padding: '14px 15px',
                  borderRadius: 12,
                  background: '#111111',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{
                    color: '#BEBEBE',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>
                    Latest result
                  </div>
                  <div style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                    {latestSummary.title}
                  </div>
                  <div style={{ color: '#8C8C8C', fontSize: 13, lineHeight: 1.6 }}>
                    {latestSummary.statusLabel} · Score {latestSummary.scoreLabel} · {latestSummary.completedLabel}
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: 14,
                borderRadius: 12,
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 15px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div>
                    <div style={{
                      color: '#FFFFFF',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 24,
                      lineHeight: 1,
                      fontWeight: 800,
                      marginBottom: 6,
                    }}>
                      Retained training history
                    </div>
                    <div style={{ color: '#8C8C8C', fontSize: 13, lineHeight: 1.6 }}>
                      Completed modules saved under your A.I.R.O.N. account.
                    </div>
                  </div>
                  <HeaderActionButton onClick={onRefreshTrainingRecords}>
                    Refresh Records
                  </HeaderActionButton>
                </div>

                {trainingRecordsState?.error && (
                  <div style={{
                    margin: 14,
                    padding: '12px 14px',
                    borderRadius: 10,
                    background: 'rgba(255,107,0,0.10)',
                    border: '1px solid rgba(255,107,0,0.24)',
                    color: '#FFB48F',
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}>
                    {trainingRecordsState.error}
                  </div>
                )}

                {trainingRecordsState?.hydrating ? (
                  <div style={{ padding: '16px 15px', color: '#BEBEBE', fontSize: 13 }}>
                    Loading retained module history from your A.I.R.O.N. account…
                  </div>
                ) : records.length === 0 ? (
                  <div style={{ padding: '16px 15px', color: '#8C8C8C', fontSize: 13, lineHeight: 1.7 }}>
                    No retained module history is saved yet. Completed modules will appear here after the retained training-record write path is wired to the module flow.
                  </div>
                ) : (
                  <div style={{ display: 'grid', gap: 0 }}>
                    {records.slice(0, 12).map((record) => {
                      const summary = summarizeTrainingRecord(record)
                      return (
                        <div
                          key={record.attemptId || `${record.modulePath}:${record.completedAt}`}
                          style={{
                            padding: '14px 15px',
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                            display: 'grid',
                            gap: 10,
                            gridTemplateColumns: 'minmax(0, 1.6fr) repeat(4, minmax(110px, 1fr))',
                            alignItems: 'start',
                          }}
                        >
                          <div style={{ minWidth: 0 }}>
                            <div style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700, marginBottom: 6 }}>
                              {summary.title}
                            </div>
                            <div style={{ color: '#8C8C8C', fontSize: 12, lineHeight: 1.5 }}>
                              {record.categoryLabel || 'A.I.R.O.N. training'}{record.modulePath ? ` · ${record.modulePath}` : ''}
                            </div>
                          </div>
                          <div>
                            <div style={{ color: '#BEBEBE', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>
                              Completed
                            </div>
                            <div style={{ color: '#E6E6E6', fontSize: 12, lineHeight: 1.5 }}>
                              {summary.completedLabel}
                            </div>
                          </div>
                          <div>
                            <div style={{ color: '#BEBEBE', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>
                              Score
                            </div>
                            <div style={{ color: '#E6E6E6', fontSize: 12, lineHeight: 1.5 }}>
                              {summary.scoreLabel}
                            </div>
                          </div>
                          <div>
                            <div style={{ color: '#BEBEBE', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>
                              Status
                            </div>
                            <div style={{ color: record?.passed ? '#8DFFB4' : '#FFB48F', fontSize: 12, lineHeight: 1.5, fontWeight: 700 }}>
                              {summary.statusLabel}
                            </div>
                          </div>
                          <div>
                            <div style={{ color: '#BEBEBE', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>
                              Certificate
                            </div>
                            <div style={{ color: '#E6E6E6', fontSize: 12, lineHeight: 1.5 }}>
                              {summary.certificateLabel}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </>
          )}

          <div style={{
            marginTop: 14,
            padding: '12px 14px',
            borderRadius: 12,
            background: 'rgba(34,204,102,0.08)',
            border: '1px solid rgba(34,204,102,0.18)',
            color: '#A7F4BE',
            fontSize: 13,
            lineHeight: 1.65,
          }}>
            {privacyText}
          </div>

          <div style={{
            marginTop: 16,
            display: 'flex',
            gap: 10,
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
          }}>
            {!authState.user && (
              <HeaderActionButton accent="primary" onClick={onOpenSignIn}>
                Sign In
              </HeaderActionButton>
            )}
            {authState.user && !setupComplete && (
              <HeaderActionButton accent="success" onClick={onOpenSetup}>
                Complete Setup
              </HeaderActionButton>
            )}
            <HeaderActionButton onClick={onClose}>
              Close
            </HeaderActionButton>
          </div>
        </div>
      </div>
    </div>
  )
}

function UserCaptureGate({
  open,
  authState,
  captureState,
  onClose,
  onSave,
  saving = false,
  error = '',
}) {
  const [step, setStep] = useState('acceptance')
  const [acceptChecked, setAcceptChecked] = useState(false)
  const [profile, setProfile] = useState(() => captureState?.profile || getEmptyUserCapture().profile)
  const [localError, setLocalError] = useState('')

  useEffect(() => {
    if (!open) return
    setLocalError('')
    setProfile(captureState?.profile || getEmptyUserCapture().profile)
    if (hasAcceptedUserCapture(captureState)) {
      setAcceptChecked(true)
      setStep(hasCompletedUserProfile(captureState?.profile || {}) ? 'complete' : 'profile')
    } else {
      setAcceptChecked(false)
      setStep('acceptance')
    }
  }, [open, captureState])

  if (!open || !authState.user) return null

  const privacyBulletStyle = {
    color: '#C9C9C9',
    fontSize: 13,
    lineHeight: 1.7,
    margin: 0,
  }

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const saveAcceptanceAndContinue = async () => {
    setLocalError('')
    const next = await onSave({
      acceptance: {
        accepted: true,
        version: USER_CAPTURE_VERSION,
        acceptedAt: new Date().toISOString(),
      },
    })

    if (!next) {
      setLocalError('Unable to save your acceptance right now.')
      return
    }

    setAcceptChecked(true)
    setStep(hasCompletedUserProfile(next.profile || {}) ? 'complete' : 'profile')
  }

  const saveProfileAndComplete = async () => {
    setLocalError('')
    const next = await onSave({
      profile,
    })

    if (!next) {
      setLocalError('Unable to save your profile right now.')
      return
    }

    setStep('complete')
  }

  const profileReady = hasCompletedUserProfile(profile)

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.82)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 2100,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 840,
        maxHeight: '88vh',
        overflow: 'auto',
        borderRadius: 20,
        border: '1px solid rgba(255,209,0,0.20)',
        background: '#090909',
        boxShadow: '0 18px 60px rgba(0,0,0,0.52)',
      }}>
        <div style={{
          padding: '20px 22px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(180deg, rgba(255,209,0,0.06), rgba(255,209,0,0.00))',
        }}>
          <div style={{
            color: '#FFD100',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Saved record setup
          </div>
          <div style={{
            color: '#FFFFFF',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 34,
            lineHeight: 1,
            fontWeight: 800,
            marginBottom: 10,
          }}>
            Finish your A.I.R.O.N. training account
          </div>
          <div style={{
            color: '#A4A4A4',
            fontSize: 14,
            lineHeight: 1.65,
            maxWidth: 680,
          }}>
            Before saved-record training begins, review the training-use acceptance, acknowledge the OSHA notice, and complete your basic profile.
          </div>
        </div>

        <div style={{ padding: 22 }}>
          <div style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            marginBottom: 18,
          }}>
            {[
              ['acceptance', 'Acceptance'],
              ['profile', 'Profile'],
              ['complete', 'Ready'],
            ].map(([key, label]) => {
              const active = step === key
              return (
                <div
                  key={key}
                  style={{
                    borderRadius: 999,
                    padding: '8px 12px',
                    border: `1px solid ${active ? 'rgba(255,209,0,0.38)' : 'rgba(255,255,255,0.10)'}`,
                    background: active ? 'rgba(255,209,0,0.08)' : '#101010',
                    color: active ? '#FFD100' : '#8D8D8D',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: 1.2,
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </div>
              )
            })}
          </div>


          {(error || localError) && (
            <div style={{
              marginBottom: 16,
              padding: '12px 14px',
              borderRadius: 12,
              background: 'rgba(255,107,0,0.10)',
              border: '1px solid rgba(255,107,0,0.26)',
              color: '#FFB48F',
              fontSize: 13,
              lineHeight: 1.6,
            }}>
              {error || localError}
            </div>
          )}

          {step === 'acceptance' && (
            <div>
              <div style={{ color: '#FFFFFF', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                A.I.R.O.N. Training Use and Record Acceptance
              </div>
              <div style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                background: '#101010',
                padding: 18,
                display: 'grid',
                gap: 14,
              }}>
                <div>
                  <div style={{ color: '#FFD100', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                    Training use
                  </div>
                  <p style={privacyBulletStyle}>
                    A.I.R.O.N. Safety Training is provided for serious industrial training, hazard awareness, procedure support, knowledge checks, retained training records, and related reporting. Completion of a module here does not by itself guarantee qualification, job authorization, or certification.
                  </p>
                </div>

                <div>
                  <div style={{ color: '#FFD100', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                    OSHA notice
                  </div>
                  <p style={privacyBulletStyle}>
                    Dingfelder Enterprises does not represent this platform as OSHA-approved, OSHA-endorsed, or OSHA-certified. Completion of training here does not make you “OSHA certified.” Where OSHA standards require employer-specific training, hands-on qualification, retraining, or documentation, those obligations remain with the employer.
                  </p>
                </div>

                <div>
                  <div style={{ color: '#FFD100', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                    Data and records
                  </div>
                  <p style={privacyBulletStyle}>
                    If you use saved-record features, your information may be used only to create and maintain your training profile, record your test attempts and completion status, retain certificates and training history, send training-related notices or reports, and support employer-assigned reporting where applicable. We do not sell your data, rent your data, or use your data for advertising.
                  </p>
                </div>

                <div>
                  <div style={{ color: '#FFD100', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                    Employer-sponsored training
                  </div>
                  <p style={privacyBulletStyle}>
                    If you are completing training as part of an employer-sponsored or employer-assigned program, your employer or authorized training administrator may receive your assigned training status, completion history, scores, certificates, and related training records.
                  </p>
                </div>
              </div>

              <label style={{
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
                marginTop: 16,
                color: '#D8D8D8',
                fontSize: 14,
                lineHeight: 1.6,
              }}>
                <input
                  type="checkbox"
                  checked={acceptChecked}
                  onChange={event => setAcceptChecked(event.target.checked)}
                  style={{ marginTop: 4 }}
                />
                <span>
                  I have read and accept the A.I.R.O.N. Training Use and Record Acceptance, including the OSHA Notice, and I understand that this system does not make me OSHA certified and may be used only to maintain my training record, save results, retain certificates, and provide training-related reporting or notices.
                </span>
              </label>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap', marginTop: 18 }}>
                <HeaderActionButton onClick={onClose}>Close</HeaderActionButton>
                <button
                  type="button"
                  onClick={saveAcceptanceAndContinue}
                  disabled={!acceptChecked || saving}
                  style={{
                    appearance: 'none',
                    border: '1px solid rgba(255,209,0,0.35)',
                    background: acceptChecked ? 'rgba(255,209,0,0.12)' : '#252525',
                    color: acceptChecked ? '#FFD100' : '#777',
                    borderRadius: 10,
                    padding: '9px 12px',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: 0.5,
                    cursor: acceptChecked && !saving ? 'pointer' : 'not-allowed',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {saving ? 'Saving…' : 'Accept and Continue'}
                </button>
              </div>
            </div>
          )}

          {step === 'profile' && (
            <div>
              <div style={{ color: '#FFFFFF', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                Complete your saved-record profile
              </div>

              <div style={{
                display: 'grid',
                gap: 14,
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              }}>
                {[
                  ['firstName', 'First name', 'text'],
                  ['lastName', 'Last name', 'text'],
                  ['companyName', 'Company', 'text'],
                  ['departmentName', 'Department', 'text'],
                  ['roleName', 'Role / title', 'text'],
                  ['employeeId', 'Employee / contractor ID', 'text'],
                ].map(([field, label, type]) => (
                  <label key={field} style={{ display: 'block' }}>
                    <div style={{
                      color: '#BEBEBE',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      marginBottom: 8,
                    }}>
                      {label}
                    </div>
                    <input
                      type={type}
                      value={profile[field] || ''}
                      onChange={event => handleProfileChange(field, event.target.value)}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        borderRadius: 10,
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: '#141414',
                        color: '#FFFFFF',
                        padding: '12px 14px',
                        fontSize: 14,
                        outline: 'none',
                      }}
                    />
                  </label>
                ))}

                <label style={{ display: 'block' }}>
                  <div style={{
                    color: '#BEBEBE',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>
                    User type
                  </div>
                  <select
                    value={profile.userType || 'employee'}
                    onChange={event => handleProfileChange('userType', event.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      borderRadius: 10,
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: '#141414',
                      color: '#FFFFFF',
                      padding: '12px 14px',
                      fontSize: 14,
                      outline: 'none',
                    }}
                  >
                    <option value="employee">Employee</option>
                    <option value="contractor">Contractor</option>
                    <option value="visitor">Visitor</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>
              </div>

              <div style={{
                marginTop: 14,
                color: '#8D8D8D',
                fontSize: 13,
                lineHeight: 1.65,
              }}>
                Minimum required fields for the saved-record path are first name, last name, role/title, and user type. Company, department, and employee ID can be added now or updated later.
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap', marginTop: 18 }}>
                <HeaderActionButton onClick={() => setStep('acceptance')}>Back</HeaderActionButton>
                <button
                  type="button"
                  onClick={saveProfileAndComplete}
                  disabled={!profileReady || saving}
                  style={{
                    appearance: 'none',
                    border: '1px solid rgba(34,204,102,0.35)',
                    background: profileReady ? 'rgba(34,204,102,0.12)' : '#252525',
                    color: profileReady ? '#9DFFBC' : '#777',
                    borderRadius: 10,
                    padding: '9px 12px',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: 0.5,
                    cursor: profileReady && !saving ? 'pointer' : 'not-allowed',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {saving ? 'Saving…' : 'Save Profile'}
                </button>
              </div>
            </div>
          )}

          {step === 'complete' && (
            <div>
              <div style={{ color: '#FFFFFF', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                Saved-record path is ready
              </div>
              <div style={{
                border: '1px solid rgba(34,204,102,0.20)',
                borderRadius: 14,
                background: 'rgba(34,204,102,0.06)',
                padding: 18,
                color: '#C8F8D6',
                fontSize: 14,
                lineHeight: 1.7,
              }}>
                Your account is now set up for retained A.I.R.O.N. training records. As the user system goes live, this path will hold your accepted terms, profile information, future scores, and certificates.
              </div>

              <div style={{
                display: 'grid',
                gap: 12,
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                marginTop: 16,
              }}>
                <div style={{ padding: '14px 15px', borderRadius: 12, background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ color: '#BEBEBE', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                    Account
                  </div>
                  <div style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 700 }}>{authState.user?.email}</div>
                </div>
                <div style={{ padding: '14px 15px', borderRadius: 12, background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ color: '#BEBEBE', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                    Profile
                  </div>
                  <div style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 700 }}>
                    {profile.firstName || captureState?.profile?.firstName || 'First'} {profile.lastName || captureState?.profile?.lastName || 'Last'}
                  </div>
                  <div style={{ color: '#8C8C8C', fontSize: 13, marginTop: 6 }}>
                    {(profile.roleName || captureState?.profile?.roleName || 'Role')} · {(profile.userType || captureState?.profile?.userType || 'employee')}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap', marginTop: 18 }}>
                <HeaderActionButton onClick={onClose}>Close</HeaderActionButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProgramCard({ prog, onOpen }) {
  const resolution = prog.__resolution || {}
  const satisfied = Boolean(resolution.satisfied)
  const completedLabel = resolution.completedLabel || ''
  const bucketLabel = satisfied
    ? 'Completed'
    : resolution.completionBucket === 'common'
    ? 'Common'
    : resolution.completionBucket === 'specific'
    ? 'Specific'
    : ''

  return (
    <div
      onClick={onOpen}
      style={{
        background: '#0f0f0f',
        border: `1px solid ${satisfied ? 'rgba(34,204,102,0.28)' : '#1e1e1e'}`,
        borderTop: `3px solid ${satisfied ? '#22CC66' : prog.color}`,
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
        e.currentTarget.style.borderColor = satisfied ? 'rgba(34,204,102,0.45)' : `${prog.color}88`
        e.currentTarget.style.borderTopColor = satisfied ? '#22CC66' : prog.color
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#0f0f0f'
        e.currentTarget.style.borderColor = satisfied ? 'rgba(34,204,102,0.28)' : '#1e1e1e'
        e.currentTarget.style.borderTopColor = satisfied ? '#22CC66' : prog.color
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

          {(bucketLabel || completedLabel) && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {bucketLabel && (
                <span style={{
                  borderRadius: 999,
                  padding: '3px 8px',
                  border: `1px solid ${satisfied ? 'rgba(34,204,102,0.28)' : 'rgba(255,209,0,0.22)'}`,
                  background: satisfied ? 'rgba(34,204,102,0.10)' : 'rgba(255,209,0,0.06)',
                  color: satisfied ? '#9DFFBC' : '#FFD100',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}>
                  {bucketLabel}
                </span>
              )}

              {completedLabel && (
                <span style={{
                  color: '#9DFFBC',
                  fontSize: 11,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}>
                  {completedLabel}
                </span>
              )}
            </div>
          )}
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
        }}>{satisfied ? completedLabel || `~${prog.minutes} min` : `~${prog.minutes} min`}</span>
        <span style={{
          color: satisfied ? '#9DFFBC' : prog.color,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 12, letterSpacing: 2, fontWeight: 700,
        }}>{resolution.actionLabel || 'START →'}</span>
      </div>
    </div>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div style={{ marginTop: 18, marginBottom: 12 }}>
      <div style={{
        color: '#FFD100',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        letterSpacing: 2,
        textTransform: 'uppercase',
      }}>
        {title}
      </div>
      <div style={{
        color: '#7B7B7B',
        fontSize: 12,
        marginTop: 6,
      }}>
        {subtitle}
      </div>
    </div>
  )
}



function PortalHome({ authState, onSignIn, onSignOut, onCreateAccount }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [tick, setTick] = useState(0)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showCreateAccount, setShowCreateAccount] = useState(false)
  const [showAccountPanel, setShowAccountPanel] = useState(false)
  const [showSetupGate, setShowSetupGate] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginBusy, setLoginBusy] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [createEmail, setCreateEmail] = useState('')
  const [createPassword, setCreatePassword] = useState('')
  const [createConfirmPassword, setCreateConfirmPassword] = useState('')
  const [createBusy, setCreateBusy] = useState(false)
  const [createError, setCreateError] = useState('')
  const [captureState, setCaptureState] = useState(() => getEmptyUserCapture())
  const [captureHydrating, setCaptureHydrating] = useState(false)
  const [captureSaving, setCaptureSaving] = useState(false)
  const [captureError, setCaptureError] = useState('')
  const [trainingRecordsState, setTrainingRecordsState] = useState({
    records: [],
    hydrating: false,
    error: '',
  })

  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    let cancelled = false

    async function hydrateSavedRecord() {
      if (authState.user?.email) {
        setLoginEmail(authState.user.email)
        setCreateEmail(authState.user.email)
        setCaptureError('')

        const localOrIdentityCapture = loadUserCapture(authState.user)
        setCaptureState(localOrIdentityCapture)
        setCaptureHydrating(true)

        const remote = await loadCurrentUserCaptureNetlifyIdentity(authState.user)
        if (cancelled) return

        let nextCapture = localOrIdentityCapture

        if (remote.capture) {
          nextCapture = saveUserCaptureToLocalCache(remote.user || authState.user, remote.capture)
        }

        if (!remote.capture && isUserCaptureComplete(localOrIdentityCapture)) {
          const migrated = await persistUserCaptureNetlifyIdentity(authState.user, localOrIdentityCapture)
          if (cancelled) return
          if (migrated.capture) {
            nextCapture = saveUserCaptureToLocalCache(migrated.user || authState.user, migrated.capture)
          }
          if (migrated.error) {
            setCaptureError(migrated.error)
          }
        } else if (remote.error) {
          setCaptureError(remote.error)
        }

        setCaptureState(nextCapture)
        setCaptureHydrating(false)

        if (!isUserCaptureComplete(nextCapture)) {
          setShowSetupGate(true)
        }
      } else {
        setCaptureState(getEmptyUserCapture())
        setCaptureHydrating(false)
        setCaptureSaving(false)
        setCaptureError('')
        setShowSetupGate(false)
        setShowAccountPanel(false)
        setShowCreateAccount(false)
      }
    }

    hydrateSavedRecord()

    return () => {
      cancelled = true
    }
  }, [authState.user])

  useEffect(() => {
    if (authState.user) {
      hydrateTrainingRecords(authState.user)
    } else {
      setTrainingRecordsState({ records: [], hydrating: false, error: '' })
    }
  }, [authState.user])

  useEffect(() => {
    if (authState.user) {
      setShowSignIn(false)
      setShowCreateAccount(false)
      setLoginError('')
      setCreateError('')
      setLoginPassword('')
      setCreatePassword('')
      setCreateConfirmPassword('')
    }
  }, [authState.user])

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

  const resolvedPrograms = useMemo(() => {
    return PROGRAMS.map(prog => ({
      ...prog,
      __resolution: resolveProgramCompletion(prog, trainingRecordsState.records),
    }))
  }, [trainingRecordsState.records])

  const filteredPrograms = useMemo(() => {
    return resolvedPrograms.filter(prog => {
      const categories = getProgramCategories(prog.path)
      const type = getProgramType(prog.path)
      return matchesCategoryFilter(categories, categoryFilter) && matchesTypeFilter(type, typeFilter)
    })
  }, [resolvedPrograms, categoryFilter, typeFilter])

  const groupedPrograms = useMemo(() => splitProgramsForCategory(filteredPrograms, categoryFilter), [filteredPrograms, categoryFilter])
  const completedPrograms = useMemo(() => filteredPrograms.filter(prog => prog.__resolution?.satisfied), [filteredPrograms])
  const availablePrograms = useMemo(() => filteredPrograms.filter(prog => !prog.__resolution?.satisfied), [filteredPrograms])

  const handleSignInSubmit = async (event) => {
    event.preventDefault()
    setLoginBusy(true)
    setLoginError('')

    const result = await onSignIn(loginEmail, loginPassword)

    if (result.error) {
      setLoginError(result.error)
      setLoginBusy(false)
      return
    }

    const nextCapture = loadUserCapture(result.user)
    setCaptureState(nextCapture)
    setCaptureHydrating(true)
    setLoginBusy(false)
    setLoginPassword('')
    setShowSignIn(false)
    setShowAccountPanel(true)
  }


  const handleCreateAccountSubmit = async (event) => {
    event.preventDefault()
    setCreateBusy(true)
    setCreateError('')

    if (createPassword !== createConfirmPassword) {
      setCreateError('Passwords do not match.')
      setCreateBusy(false)
      return
    }

    const result = await onCreateAccount(createEmail, createPassword)

    if (result.error) {
      setCreateError(result.error)
      setCreateBusy(false)
      return
    }

    const nextCapture = loadUserCapture(result.user)
    setCaptureState(nextCapture)
    setCaptureHydrating(true)
    setCreateBusy(false)
    setCreatePassword('')
    setCreateConfirmPassword('')
    setShowCreateAccount(false)
    setShowAccountPanel(true)
  }

  const handleProgramOpen = (prog) => {
    const portalSearch = buildPortalSearch(categoryFilter, typeFilter)
    const seriesPaths = filteredPrograms.map(item => item.path)
    savePortalContext(portalSearch, seriesPaths)
    navigate(prog.path, {
      state: {
        portalSearch,
        seriesPaths,
        activeCategory: categoryFilter,
        activeType: typeFilter,
        reviewMode: Boolean(prog.__resolution?.satisfied),
        latestPassingRecord: prog.__resolution?.latestPassingRecord || null,
      },
    })
  }

  const handleCaptureSave = async (partial) => {
    if (!authState.user) return null

    const nextCapture = mergeUserCaptureData(captureState, partial)
    setCaptureSaving(true)
    setCaptureError('')

    const persisted = await persistUserCaptureNetlifyIdentity(authState.user, nextCapture)
    setCaptureSaving(false)

    if (persisted.error) {
      setCaptureError(persisted.error)
      return null
    }

    const durableNext = saveUserCaptureToLocalCache(persisted.user || authState.user, persisted.capture || nextCapture)
    setCaptureState(durableNext)
    return durableNext
  }

  const hydrateTrainingRecords = async (user = authState.user) => {
    if (!user) {
      setTrainingRecordsState({ records: [], hydrating: false, error: '' })
      return
    }

    setTrainingRecordsState(prev => ({ ...prev, hydrating: true, error: '' }))
    const result = await loadTrainingRecordsNetlifyIdentity(user)
    setTrainingRecordsState({
      records: Array.isArray(result.records) ? result.records : [],
      hydrating: false,
      error: result.error || '',
    })
  }

  const setupComplete = isUserCaptureComplete(captureState)

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
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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

          <div style={{
            minWidth: 0,
            padding: '8px 10px',
            borderRadius: 10,
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${authState.error ? 'rgba(255,107,0,0.45)' : authState.user ? 'rgba(34,204,102,0.45)' : 'rgba(255,209,0,0.28)'}`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: authState.error ? '#FF6B00' : authState.user ? '#22CC66' : '#FFD100',
              boxShadow: authState.user ? '0 0 12px rgba(34,204,102,0.35)' : 'none',
              flexShrink: 0,
            }} />
            <div style={{ minWidth: 0 }}>
              <div style={{
                color: authState.error ? '#FF9B6B' : authState.user ? '#8DFFB4' : '#FFD100',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
              }}>
                {authState.error ? 'Auth callback issue' : authState.user ? (captureHydrating ? 'Checking saved record' : (setupComplete ? 'Saved record ready' : 'Setup required')) : authState.ready ? 'Identity ready' : 'Identity loading'}
              </div>
              <div style={{
                color: '#D4D4D4',
                fontSize: 12,
                lineHeight: 1.3,
                maxWidth: 280,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {authState.error || authState.user?.email || (authState.ready ? 'Invite links can now complete on-site.' : 'Checking session...')}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            {!authState.user && (
              <>
                <HeaderActionButton accent="primary" onClick={() => setShowSignIn(true)}>
                  Sign In
                </HeaderActionButton>
                <HeaderActionButton onClick={() => setShowCreateAccount(true)}>
                  Create Account
                </HeaderActionButton>
              </>
            )}
            <HeaderActionButton onClick={() => setShowAccountPanel(true)}>
              Account
            </HeaderActionButton>
            {authState.user && (
              <HeaderActionButton onClick={async () => { await onSignOut() }}>
                Sign Out
              </HeaderActionButton>
            )}
          </div>
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
          maxWidth: 680,
        }}>
          Free industrial learning sessions hosted by Dingfelder Enterprises. Training environments include the Dingfelder Industrial Campus.
          Sign in and complete your saved-record setup to begin retaining accepted terms, profile data, future scores, and certificates under your A.I.R.O.N. account.
        </p>

        {(authState.message || authState.error) && (
          <div style={{
            marginTop: 18,
            maxWidth: 760,
            padding: '12px 14px',
            borderRadius: 12,
            background: authState.error ? 'rgba(255,107,0,0.10)' : 'rgba(34,204,102,0.08)',
            border: `1px solid ${authState.error ? 'rgba(255,107,0,0.30)' : 'rgba(34,204,102,0.24)'}`,
            color: authState.error ? '#FFB48F' : '#A7F4BE',
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            {authState.error || authState.message}
          </div>
        )}

        {authState.user && captureHydrating && (
          <div style={{
            marginTop: 16,
            maxWidth: 760,
            padding: '12px 14px',
            borderRadius: 12,
            background: 'rgba(255,209,0,0.08)',
            border: '1px solid rgba(255,209,0,0.24)',
            color: '#F6DD83',
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            Checking your saved-record setup from the A.I.R.O.N. account record.
          </div>
        )}

        {authState.user && captureError && (
          <div style={{
            marginTop: 16,
            maxWidth: 760,
            padding: '12px 14px',
            borderRadius: 12,
            background: 'rgba(255,107,0,0.10)',
            border: '1px solid rgba(255,107,0,0.24)',
            color: '#FFB48F',
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            {captureError}
          </div>
        )}

        {authState.user && !setupComplete && (
          <div style={{
            marginTop: 16,
            maxWidth: 760,
            padding: '12px 14px',
            borderRadius: 12,
            background: 'rgba(255,209,0,0.08)',
            border: '1px solid rgba(255,209,0,0.24)',
            color: '#F6DD83',
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            Your account is signed in, but your saved-record setup is not complete yet. Review the acceptance policy and finish your profile before launch.
          </div>
        )}
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
            flexWrap: 'wrap',
            gap: 8,
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
                    lineHeight: 1.1,
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
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

        {categoryFilter !== 'all' ? (
          <>
            {groupedPrograms.completed.length > 0 && (
              <>
                <SectionHeading
                  title="Completed"
                  subtitle="Requirements already satisfied by a retained passing record. Open any completed card in review mode."
                />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 12,
                }}>
                  {groupedPrograms.completed.map(prog => (
                    <ProgramCard key={prog.path} prog={prog} onOpen={() => handleProgramOpen(prog)} />
                  ))}
                </div>
              </>
            )}

            {groupedPrograms.specific.length > 0 && (
              <>
                <SectionHeading
                  title="Specific"
                  subtitle="Cards written specifically for the selected environment or category."
                />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 12,
                }}>
                  {groupedPrograms.specific.map(prog => (
                    <ProgramCard key={prog.path} prog={prog} onOpen={() => handleProgramOpen(prog)} />
                  ))}
                </div>
              </>
            )}

            {groupedPrograms.common.length > 0 && (
              <>
                <SectionHeading
                  title="Common"
                  subtitle="Reusable cards that also apply across other environments or categories."
                />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 12,
                }}>
                  {groupedPrograms.common.map(prog => (
                    <ProgramCard key={prog.path} prog={prog} onOpen={() => handleProgramOpen(prog)} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {completedPrograms.length > 0 && (
              <>
                <SectionHeading
                  title="Completed"
                  subtitle="Requirements already satisfied by a retained passing record."
                />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 12,
                }}>
                  {completedPrograms.map(prog => (
                    <ProgramCard key={prog.path} prog={prog} onOpen={() => handleProgramOpen(prog)} />
                  ))}
                </div>
              </>
            )}

            {availablePrograms.length > 0 && (
              <>
                {completedPrograms.length > 0 && (
                  <SectionHeading
                    title="Available"
                    subtitle="Modules without a retained passing record yet."
                  />
                )}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 12,
                }}>
                  {availablePrograms.map(prog => (
                    <ProgramCard key={prog.path} prog={prog} onOpen={() => handleProgramOpen(prog)} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

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

      <SignInPanel
        open={showSignIn}
        email={loginEmail}
        password={loginPassword}
        busy={loginBusy}
        error={loginError}
        onEmailChange={setLoginEmail}
        onPasswordChange={setLoginPassword}
        onClose={() => setShowSignIn(false)}
        onSubmit={handleSignInSubmit}
        onOpenCreateAccount={() => {
          setShowSignIn(false)
          setCreateEmail(loginEmail)
          setShowCreateAccount(true)
        }}
      />

      <CreateAccountPanel
        open={showCreateAccount}
        email={createEmail}
        password={createPassword}
        confirmPassword={createConfirmPassword}
        busy={createBusy}
        error={createError}
        onEmailChange={setCreateEmail}
        onPasswordChange={setCreatePassword}
        onConfirmPasswordChange={setCreateConfirmPassword}
        onClose={() => setShowCreateAccount(false)}
        onSubmit={handleCreateAccountSubmit}
        onOpenSignIn={() => {
          setShowCreateAccount(false)
          setLoginEmail(createEmail)
          setShowSignIn(true)
        }}
      />

      <AccountPanel
        open={showAccountPanel}
        authState={authState}
        captureState={captureState}
        trainingRecordsState={trainingRecordsState}
        onClose={() => setShowAccountPanel(false)}
        onOpenSignIn={() => {
          setShowAccountPanel(false)
          setShowSignIn(true)
        }}
        onOpenSetup={() => {
          setShowAccountPanel(false)
          setShowSetupGate(true)
        }}
        onRefreshTrainingRecords={() => hydrateTrainingRecords(authState.user)}
      />

      <UserCaptureGate
        open={showSetupGate}
        authState={authState}
        captureState={captureState}
        onClose={() => setShowSetupGate(false)}
        onSave={handleCaptureSave}
        saving={captureSaving}
        error={captureError}
      />
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

function AppRoutes({ authState, onSignIn, onSignOut, onCreateAccount }) {
  return (
    <Routes>
      <Route path="/" element={<PortalHome authState={authState} onSignIn={onSignIn} onSignOut={onSignOut} onCreateAccount={onCreateAccount} />} />
      <Route path="/landing" element={<AIRONLanding />} />
      {PROGRAMS.map(prog => (
        <Route
          key={prog.path}
          path={prog.path}
          element={<prog.Component />}
        />
      ))}
      <Route path="*" element={<PortalHome authState={authState} onSignIn={onSignIn} onSignOut={onSignOut} onCreateAccount={onCreateAccount} />} />
    </Routes>
  )
}

function hasIdentityCallbackInUrl() {
  if (typeof window === 'undefined') return false
  const candidate = `${window.location.search || ''}${window.location.hash || ''}`.toLowerCase()
  return [
    'invite_token=',
    'confirmation_token=',
    'recovery_token=',
    'email_change_token=',
    'access_token=',
    'refresh_token=',
  ].some(token => candidate.includes(token))
}

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const mode = useMemo(() => getSiteMode(window.location.hostname), [])
  const [authState, setAuthState] = useState({
    ready: false,
    user: null,
    message: '',
    error: '',
  })
  const [showSplash, setShowSplash] = useState(() => location.pathname === '/' && !hasIdentityCallbackInUrl())

  useEffect(() => {
    let cancelled = false

    async function initializeIdentity() {
      const result = await bootstrapNetlifyIdentity()
      if (cancelled) return

      setAuthState({
        ready: true,
        user: result.user,
        message: result.message,
        error: result.error,
      })
    }

    initializeIdentity()

    return () => {
      cancelled = true
    }
  }, [])

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

  const handleSignIn = async (email, password) => {
    const result = await signInNetlifyIdentity(email, password)
    setAuthState({
      ready: true,
      user: result.user,
      message: result.message,
      error: result.error,
    })
    return result
  }

  const handleSignOut = async () => {
    const result = await signOutNetlifyIdentity()
    setAuthState({
      ready: true,
      user: result.user,
      message: result.message,
      error: result.error,
    })
  }


  const handleCreateAccount = async (email, password) => {
    const result = await createAccountNetlifyIdentity(email, password)
    setAuthState({
      ready: true,
      user: result.user,
      message: result.message,
      error: result.error,
    })
    return result
  }

  if (showSplash) {
    return <AIRONSplash onDone={handleSplashDone} />
  }

  return <AppRoutes authState={authState} onSignIn={handleSignIn} onSignOut={handleSignOut} onCreateAccount={handleCreateAccount} />
}
