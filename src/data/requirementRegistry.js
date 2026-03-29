export const REQUIREMENT_REGISTRY = {
  "REQ-CMN-SAT-001": {
    requirementId: "REQ-CMN-SAT-001",
    requirementTitle: "Site Access Training / General Campus Orientation",
    requirementType: "common",
    category: "common",
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    renewalMonths: 12,
    renewalRequired: true,
    renewalIntervalDays: 365,
    notificationLeadDays: 30,
    assignedPolicySource: "requirement-default",
    moduleIds: ["MOD-SAT-001"],
    equivalencyCardIds: ["/sat"],
  },
  "REQ-CMN-EVAC-001": {
    requirementId: "REQ-CMN-EVAC-001",
    requirementTitle: "Emergency Evacuation and Muster Awareness",
    requirementType: "common",
    category: "common",
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    renewalMonths: 12,
    renewalRequired: true,
    renewalIntervalDays: 365,
    notificationLeadDays: 30,
    assignedPolicySource: "requirement-default",
    moduleIds: ["MOD-EVAC-001"],
    equivalencyCardIds: ["/evacuation"],
  },
  "REQ-CMN-H2S-001": {
    requirementId: "REQ-CMN-H2S-001",
    requirementTitle: "H2S Awareness",
    requirementType: "common",
    category: "common",
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    renewalMonths: 12,
    renewalRequired: true,
    renewalIntervalDays: 365,
    notificationLeadDays: 30,
    assignedPolicySource: "requirement-default",
    moduleIds: ["MOD-H2S-001"],
    equivalencyCardIds: ["/h2s"],
  },
  "REQ-CMN-ARC-001": {
    requirementId: "REQ-CMN-ARC-001",
    requirementTitle: "Arc Flash Awareness",
    requirementType: "common",
    category: "common",
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    renewalMonths: 12,
    renewalRequired: true,
    renewalIntervalDays: 365,
    notificationLeadDays: 30,
    assignedPolicySource: "requirement-default",
    moduleIds: ["MOD-ARC-001"],
    equivalencyCardIds: ["/arcflash"],
  },
  "REQ-CMN-LOTO-001": {
    requirementId: "REQ-CMN-LOTO-001",
    requirementTitle: "Lockout / Tagout Core Awareness",
    requirementType: "common",
    category: "common",
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    renewalMonths: 12,
    renewalRequired: true,
    renewalIntervalDays: 365,
    notificationLeadDays: 30,
    assignedPolicySource: "requirement-default",
    moduleIds: ["MOD-LOTO-CAMPUS-001"],
    equivalencyCardIds: ["/loto-campus"],
  },
  "REQ-SPC-LOTO-FDY-001": {
    requirementId: "REQ-SPC-LOTO-FDY-001",
    requirementTitle: "Foundry Lockout / Tagout Supplement",
    requirementType: "specific",
    category: "specific",
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    renewalMonths: 12,
    renewalRequired: true,
    renewalIntervalDays: 365,
    notificationLeadDays: 30,
    assignedPolicySource: "requirement-default",
    moduleIds: ["MOD-LOTO-FDY-001"],
    prerequisiteRequirementIds: ["REQ-CMN-LOTO-001"],
    equivalencyCardIds: ["/loto"],
  },
};

export const REQUIREMENTS = Object.values(REQUIREMENT_REGISTRY);

export function getRequirementById(requirementId) {
  if (typeof requirementId !== "string" || !requirementId.trim()) return null;
  return REQUIREMENT_REGISTRY[requirementId] || null;
}

export function getRequirementsByIds(requirementIds) {
  if (!Array.isArray(requirementIds)) return [];
  return requirementIds.map(getRequirementById).filter(Boolean);
}

export function getRequirementTypeLabel(requirementType) {
  return requirementType === "common" ? "Common" : "Specific";
}
