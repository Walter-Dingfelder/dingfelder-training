export const REQUIREMENT_REGISTRY = {
  "REQ-CMN-SAT-001": {
    requirementId: "REQ-CMN-SAT-001",
    requirementTitle: "Site Access Training / General Campus Orientation",
    requirementType: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "REQ-CMN-EVAC-001": {
    requirementId: "REQ-CMN-EVAC-001",
    requirementTitle: "Emergency Evacuation and Muster Awareness",
    requirementType: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "REQ-CMN-H2S-001": {
    requirementId: "REQ-CMN-H2S-001",
    requirementTitle: "H2S Awareness",
    requirementType: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "REQ-CMN-ARC-001": {
    requirementId: "REQ-CMN-ARC-001",
    requirementTitle: "Arc Flash Awareness",
    requirementType: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "REQ-CMN-LOTO-001": {
    requirementId: "REQ-CMN-LOTO-001",
    requirementTitle: "Lockout / Tagout Core Awareness",
    requirementType: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "REQ-SPC-LOTO-FDY-001": {
    requirementId: "REQ-SPC-LOTO-FDY-001",
    requirementTitle: "Foundry Lockout / Tagout Supplement",
    requirementType: "specific",
    reviewEnabled: true,
    recordRequired: true,
  },
}

export function getRequirementDefinition(requirementId) {
  if (!requirementId || typeof requirementId !== "string") return null
  return REQUIREMENT_REGISTRY[requirementId] || null
}
