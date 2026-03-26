
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
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
