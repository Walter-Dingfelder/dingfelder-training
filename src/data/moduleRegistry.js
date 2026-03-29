import { getRequirementDefinition } from "./requirementRegistry.js"

const DEFAULT_MODULE_VERSION = "1.0.0"

export const MODULE_REGISTRY = {
  "/sat": {
    moduleId: "MOD-SAT-001",
    title: "S.A.T. Visitor Orientation",
    moduleVersion: DEFAULT_MODULE_VERSION,
    requirementIds: ["REQ-CMN-SAT-001"],
    requirementType: "common",
    completionBucket: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "/evacuation": {
    moduleId: "MOD-EVAC-001",
    title: "Emergency Evacuation & Muster",
    moduleVersion: DEFAULT_MODULE_VERSION,
    requirementIds: ["REQ-CMN-EVAC-001"],
    requirementType: "common",
    completionBucket: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "/h2s": {
    moduleId: "MOD-H2S-001",
    title: "H₂S Awareness & SCBA",
    moduleVersion: DEFAULT_MODULE_VERSION,
    requirementIds: ["REQ-CMN-H2S-001"],
    requirementType: "common",
    completionBucket: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "/arcflash": {
    moduleId: "MOD-ARC-001",
    title: "Arc Flash & Electrical Safety",
    moduleVersion: DEFAULT_MODULE_VERSION,
    requirementIds: ["REQ-CMN-ARC-001"],
    requirementType: "common",
    completionBucket: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "/loto-campus": {
    moduleId: "MOD-LOTO-CMN-001",
    title: "LOTO — Full Campus",
    moduleVersion: DEFAULT_MODULE_VERSION,
    requirementIds: ["REQ-CMN-LOTO-001"],
    requirementType: "common",
    completionBucket: "common",
    reviewEnabled: true,
    recordRequired: true,
  },
  "/loto": {
    moduleId: "MOD-LOTO-FDY-001",
    title: "LOTO — Foundry Focus",
    moduleVersion: DEFAULT_MODULE_VERSION,
    prerequisiteRequirementIds: ["REQ-CMN-LOTO-001"],
    requirementIds: ["REQ-SPC-LOTO-FDY-001"],
    requirementType: "specific",
    completionBucket: "specific",
    reviewEnabled: true,
    recordRequired: true,
  },
}

function slugToCode(pathOrSlug) {
  return String(pathOrSlug || "")
    .replace(/^\/+/, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase()
}

export function getModuleDefinition(moduleOrPath) {
  const path =
    typeof moduleOrPath === "string"
      ? moduleOrPath
      : typeof moduleOrPath?.path === "string"
      ? moduleOrPath.path
      : ""

  const explicit = path ? MODULE_REGISTRY[path] : null
  if (explicit) {
    return {
      path,
      ...explicit,
      requirementDefs: explicit.requirementIds
        .map((requirementId) => getRequirementDefinition(requirementId))
        .filter(Boolean),
    }
  }

  const fallbackTitle =
    typeof moduleOrPath?.label === "string" && moduleOrPath.label.trim()
      ? moduleOrPath.label.trim()
      : typeof moduleOrPath?.title === "string" && moduleOrPath.title.trim()
      ? moduleOrPath.title.trim()
      : "Training Module"

  const fallbackCode = slugToCode(path || fallbackTitle || "GENERIC")

  return {
    path,
    moduleId: `MOD-AUTO-${fallbackCode}`,
    title: fallbackTitle,
    moduleVersion: DEFAULT_MODULE_VERSION,
    requirementIds: [`REQ-AUTO-${fallbackCode}`],
    requirementType: null,
    completionBucket: null,
    reviewEnabled: true,
    recordRequired: true,
    requirementDefs: [],
  }
}

export function getModuleRecordMeta(moduleOrPath) {
  const moduleDef = getModuleDefinition(moduleOrPath)
  return {
    moduleId: moduleDef.moduleId,
    moduleVersion: moduleDef.moduleVersion,
    requirementIds: moduleDef.requirementIds,
    requirementType: moduleDef.requirementType,
    completionBucket: moduleDef.completionBucket,
    reviewEnabled: Boolean(moduleDef.reviewEnabled),
    recordRequired: Boolean(moduleDef.recordRequired),
  }
}
