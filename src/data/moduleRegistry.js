import { getRequirementById } from "./requirementRegistry.js";

const MANAGED_MODULE_REGISTRY = {
  "/sat": {
    moduleId: "MOD-SAT-001",
    path: "/sat",
    title: "S.A.T. Visitor Orientation",
    category: "common",
    categoryKey: "campus",
    categoryLabel: "Campus",
    requirementIds: ["REQ-CMN-SAT-001"],
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    version: "1.0.0",
    source: "custom-module",
  },
  "/evacuation": {
    moduleId: "MOD-EVAC-001",
    path: "/evacuation",
    title: "Emergency Evacuation & Muster",
    category: "common",
    categoryKey: "campus",
    categoryLabel: "Campus",
    requirementIds: ["REQ-CMN-EVAC-001"],
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    version: "1.0.0",
    source: "custom-module",
  },
  "/h2s": {
    moduleId: "MOD-H2S-001",
    path: "/h2s",
    title: "H₂S Awareness & SCBA",
    category: "common",
    categoryKey: "process-gas",
    categoryLabel: "Process / Gas",
    requirementIds: ["REQ-CMN-H2S-001"],
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    version: "1.0.0",
    source: "custom-module",
  },
  "/arcflash": {
    moduleId: "MOD-ARC-001",
    path: "/arcflash",
    title: "Arc Flash & Electrical Safety",
    category: "common",
    categoryKey: "electrical-safety",
    categoryLabel: "Electrical Safety",
    requirementIds: ["REQ-CMN-ARC-001"],
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    version: "1.0.0",
    source: "custom-module",
  },
  "/loto-campus": {
    moduleId: "MOD-LOTO-CAMPUS-001",
    path: "/loto-campus",
    title: "LOTO — Full Campus",
    category: "common",
    categoryKey: "loto",
    categoryLabel: "LOTO",
    requirementIds: ["REQ-CMN-LOTO-001"],
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    version: "1.0.0",
    source: "custom-module",
  },
  "/loto": {
    moduleId: "MOD-LOTO-FDY-001",
    path: "/loto",
    title: "LOTO — Foundry Focus",
    category: "specific",
    categoryKey: "loto",
    categoryLabel: "LOTO",
    requirementIds: ["REQ-SPC-LOTO-FDY-001"],
    prerequisiteRequirementIds: ["REQ-CMN-LOTO-001"],
    reviewEnabled: true,
    recordRequired: true,
    passScore: 80,
    version: "1.0.0",
    source: "custom-module",
  },
};

export const MODULE_REGISTRY = MANAGED_MODULE_REGISTRY;
export const MODULE_REGISTRY_LIST = Object.values(MODULE_REGISTRY);

function slugifyModulePath(value) {
  const input = typeof value === "string" && value.trim() ? value.trim() : "module";
  return input
    .replace(/^\//, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();
}

function makeAutoModuleId(path) {
  return `MOD-AUTO-${slugifyModulePath(path)}`;
}

function makeAutoRequirementId(path) {
  return `REQ-AUTO-${slugifyModulePath(path)}`;
}

export function getManagedModuleByPath(path) {
  if (typeof path !== "string" || !path.trim()) return null;
  return MODULE_REGISTRY[path] || null;
}

export function resolveModuleRecordMeta({
  path,
  label,
  categoryKey = "",
  categoryLabel = "",
  source = "portal",
  version = "1.0.0",
  passScore = 80,
} = {}) {
  const managed = getManagedModuleByPath(path);
  if (managed) {
    const primaryRequirement = getRequirementById(managed.requirementIds?.[0]);
    return {
      ...managed,
      renewalRequired: primaryRequirement?.renewalRequired !== false,
      renewalIntervalDays:
        Number.isFinite(Number(primaryRequirement?.renewalIntervalDays)) ? Number(primaryRequirement.renewalIntervalDays) : 365,
      notificationLeadDays:
        Number.isFinite(Number(primaryRequirement?.notificationLeadDays)) ? Number(primaryRequirement.notificationLeadDays) : 30,
      assignedPolicySource:
        typeof primaryRequirement?.assignedPolicySource === "string" && primaryRequirement.assignedPolicySource.trim()
          ? primaryRequirement.assignedPolicySource
          : "requirement-default",
      source: source || managed.source || "portal",
    };
  }

  const requirementId = makeAutoRequirementId(path || label || "module");
  const requirement = getRequirementById(requirementId);

  return {
    moduleId: makeAutoModuleId(path || label || "module"),
    path: typeof path === "string" ? path : "",
    title: typeof label === "string" && label.trim() ? label.trim() : "Training Module",
    category: requirement?.category || "specific",
    categoryKey: categoryKey || "uncategorized",
    categoryLabel: categoryLabel || "Uncategorized",
    requirementIds: [requirementId],
    reviewEnabled: true,
    recordRequired: true,
    passScore,
    renewalRequired: requirement?.renewalRequired !== false,
    renewalIntervalDays:
      Number.isFinite(Number(requirement?.renewalIntervalDays)) ? Number(requirement.renewalIntervalDays) : 365,
    notificationLeadDays:
      Number.isFinite(Number(requirement?.notificationLeadDays)) ? Number(requirement.notificationLeadDays) : 30,
    assignedPolicySource:
      typeof requirement?.assignedPolicySource === "string" && requirement.assignedPolicySource.trim()
        ? requirement.assignedPolicySource
        : "requirement-default",
    version,
    source: source || "portal",
  };
}

export function getRequirementStatusForRecord(record, requirementId) {
  if (!record || typeof record !== "object") return false;
  if (!Array.isArray(record.requirementIds)) return false;
  return Boolean(record.passed) && record.requirementIds.includes(requirementId);
}
