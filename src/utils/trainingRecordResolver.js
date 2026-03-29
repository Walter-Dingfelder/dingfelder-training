import { getManagedModuleByPath } from "../data/moduleRegistry.js";

function toEpoch(value) {
  const parsed = new Date(value || "");
  const epoch = parsed.getTime();
  return Number.isFinite(epoch) ? epoch : 0;
}

function getRecordRequirementIds(record) {
  return Array.isArray(record?.requirementIds)
    ? record.requirementIds.filter((value) => typeof value === "string" && value.trim())
    : [];
}

function doesRecordMatchManagedModule(record, managedModule, programPath) {
  if (!record || typeof record !== "object" || !record.passed) return false;

  const recordRequirementIds = getRecordRequirementIds(record);
  const managedRequirementIds = Array.isArray(managedModule?.requirementIds)
    ? managedModule.requirementIds.filter((value) => typeof value === "string" && value.trim())
    : [];

  if (managedRequirementIds.length > 0 && recordRequirementIds.some((value) => managedRequirementIds.includes(value))) {
    return true;
  }

  if (typeof managedModule?.moduleId === "string" && managedModule.moduleId && record.moduleId === managedModule.moduleId) {
    return true;
  }

  return record.modulePath === programPath;
}

export function findLatestPassingRecordForProgram(programPath, records) {
  const managedModule = getManagedModuleByPath(programPath);
  const recordList = Array.isArray(records) ? records : [];
  const matches = recordList.filter((record) => doesRecordMatchManagedModule(record, managedModule, programPath));

  if (matches.length === 0) return null;

  matches.sort((a, b) => toEpoch(b?.completedAt) - toEpoch(a?.completedAt));
  return matches[0] || null;
}

export function formatCompletedOnLabel(value) {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function resolveProgramStatus(programPath, records) {
  const latestRecord = findLatestPassingRecordForProgram(programPath, records);
  const completedOn = formatCompletedOnLabel(latestRecord?.completedAt);

  return {
    isCompleted: Boolean(latestRecord?.passed),
    latestRecord,
    actionLabel: latestRecord?.passed ? "REVIEW →" : "START →",
    statusLabel: latestRecord?.passed && completedOn ? `Completed on ${completedOn}` : "",
    completedOn,
  };
}

export function buildProgramResolutionMap(programs, records) {
  return (Array.isArray(programs) ? programs : []).reduce((acc, program) => {
    if (!program?.path) return acc;
    acc[program.path] = resolveProgramStatus(program.path, records);
    return acc;
  }, {});
}
