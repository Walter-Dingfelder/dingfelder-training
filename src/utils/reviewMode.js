function toFinitePositiveInt(value, fallback) {
  const num = Number(value);
  return Number.isFinite(num) && num > 0 ? Math.round(num) : fallback;
}

function addDays(dateValue, days) {
  const parsed = new Date(dateValue || "");
  if (Number.isNaN(parsed.getTime())) return "";
  const next = new Date(parsed.getTime());
  next.setDate(next.getDate() + days);
  return next.toISOString();
}

export function formatReviewDateTime(value) {
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

export function formatReviewFrequencyLabel(days) {
  const safeDays = toFinitePositiveInt(days, 0);
  if (!safeDays) return "No scheduled review";
  if (safeDays === 365) return "Every 12 months";
  if (safeDays === 180) return "Every 6 months";
  if (safeDays === 90) return "Every 90 days";
  if (safeDays === 30) return "Every 30 days";
  return `Every ${safeDays} days`;
}

function computeRenewalStatus(nextReviewDueAt, notificationLeadDays) {
  if (!nextReviewDueAt) {
    return { code: "satisfied", label: "Satisfied", tone: "success" };
  }

  const now = Date.now();
  const due = new Date(nextReviewDueAt).getTime();
  if (!Number.isFinite(due)) {
    return { code: "satisfied", label: "Satisfied", tone: "success" };
  }

  const daysUntilDue = Math.ceil((due - now) / 86400000);

  if (daysUntilDue < 0) {
    return { code: "overdue", label: "Overdue", tone: "danger" };
  }

  if (daysUntilDue <= toFinitePositiveInt(notificationLeadDays, 30)) {
    return {
      code: "due-soon",
      label: `Due in ${daysUntilDue} day${daysUntilDue === 1 ? "" : "s"}`,
      tone: "warning",
    };
  }

  return { code: "satisfied", label: "Satisfied", tone: "success" };
}

export function buildRenewalPolicyFields(recordMeta = {}, existingRecord = null, completedAt = new Date().toISOString()) {
  const renewalRequired =
    typeof existingRecord?.renewalRequired === "boolean"
      ? existingRecord.renewalRequired
      : recordMeta?.renewalRequired !== false;

  const renewalIntervalDays = renewalRequired
    ? toFinitePositiveInt(
        existingRecord?.renewalIntervalDays,
        toFinitePositiveInt(recordMeta?.renewalIntervalDays, 365)
      )
    : 0;

  const notificationLeadDays = renewalRequired
    ? toFinitePositiveInt(
        existingRecord?.notificationLeadDays,
        toFinitePositiveInt(recordMeta?.notificationLeadDays, 30)
      )
    : 0;

  const assignedPolicySource =
    typeof existingRecord?.assignedPolicySource === "string" && existingRecord.assignedPolicySource.trim()
      ? existingRecord.assignedPolicySource.trim()
      : typeof recordMeta?.assignedPolicySource === "string" && recordMeta.assignedPolicySource.trim()
      ? recordMeta.assignedPolicySource.trim()
      : "requirement-default";

  const nextReviewDueAt = renewalRequired && completedAt ? addDays(completedAt, renewalIntervalDays) : "";

  return {
    renewalRequired,
    renewalIntervalDays,
    notificationLeadDays,
    assignedPolicySource,
    nextReviewDueAt,
  };
}

export function resolveReviewLaunchState(locationState = {}, recordMeta = {}) {
  const latestRecord = locationState && typeof locationState === "object" ? locationState.latestRecord || null : null;
  const reviewMode = Boolean(locationState?.reviewMode || latestRecord?.passed);

  const completedAt =
    typeof latestRecord?.completedAt === "string" && latestRecord.completedAt.trim()
      ? latestRecord.completedAt
      : "";

  const renewalRequired =
    typeof latestRecord?.renewalRequired === "boolean"
      ? latestRecord.renewalRequired
      : recordMeta?.renewalRequired !== false;

  const renewalIntervalDays = renewalRequired
    ? toFinitePositiveInt(
        latestRecord?.renewalIntervalDays,
        toFinitePositiveInt(recordMeta?.renewalIntervalDays, 365)
      )
    : 0;

  const notificationLeadDays = renewalRequired
    ? toFinitePositiveInt(
        latestRecord?.notificationLeadDays,
        toFinitePositiveInt(recordMeta?.notificationLeadDays, 30)
      )
    : 0;

  const nextReviewDueAt =
    typeof latestRecord?.nextReviewDueAt === "string" && latestRecord.nextReviewDueAt.trim()
      ? latestRecord.nextReviewDueAt
      : renewalRequired && completedAt
      ? addDays(completedAt, renewalIntervalDays)
      : "";

  const assignedPolicySource =
    typeof latestRecord?.assignedPolicySource === "string" && latestRecord.assignedPolicySource.trim()
      ? latestRecord.assignedPolicySource.trim()
      : typeof recordMeta?.assignedPolicySource === "string" && recordMeta.assignedPolicySource.trim()
      ? recordMeta.assignedPolicySource.trim()
      : "requirement-default";

  const status = computeRenewalStatus(nextReviewDueAt, notificationLeadDays);

  return {
    reviewMode,
    latestRecord,
    completedAt,
    completedLabel: formatReviewDateTime(completedAt),
    lastScoreLabel:
      Number.isFinite(Number(latestRecord?.quizCorrect)) && Number.isFinite(Number(latestRecord?.quizTotal))
        ? `${Number(latestRecord.quizCorrect)}/${Number(latestRecord.quizTotal)}`
        : Number.isFinite(Number(latestRecord?.score))
        ? String(Number(latestRecord.score))
        : "—",
    renewalRequired,
    renewalIntervalDays,
    notificationLeadDays,
    frequencyLabel: renewalRequired ? formatReviewFrequencyLabel(renewalIntervalDays) : "No scheduled review",
    nextReviewDueAt,
    nextReviewDueLabel: formatReviewDateTime(nextReviewDueAt),
    assignedPolicySource,
    statusCode: status.code,
    statusLabel: status.label,
    statusTone: status.tone,
    certificateReady: Boolean(latestRecord?.certificateEligible),
  };
}
