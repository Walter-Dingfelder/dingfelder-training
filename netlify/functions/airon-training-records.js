import { getStore } from '@netlify/blobs'
import { getUser } from '@netlify/identity'

function toNumberOrNull(value) {
  const num = Number(value)
  return Number.isFinite(num) ? num : null
}

function normalizeTrainingRecordShape(rawRecord) {
  if (!rawRecord || typeof rawRecord !== 'object') return null

  return {
    attemptId: typeof rawRecord?.attemptId === 'string' ? rawRecord.attemptId : '',
    moduleId: typeof rawRecord?.moduleId === 'string' ? rawRecord.moduleId : '',
    moduleVersion: typeof rawRecord?.moduleVersion === 'string' ? rawRecord.moduleVersion : '',
    modulePath: typeof rawRecord?.modulePath === 'string' ? rawRecord.modulePath : '',
    moduleTitle: typeof rawRecord?.moduleTitle === 'string' ? rawRecord.moduleTitle : '',
    categoryKey: typeof rawRecord?.categoryKey === 'string' ? rawRecord.categoryKey : '',
    categoryLabel: typeof rawRecord?.categoryLabel === 'string' ? rawRecord.categoryLabel : '',
    requirementIds: Array.isArray(rawRecord?.requirementIds)
      ? rawRecord.requirementIds.filter(value => typeof value === 'string' && value.trim())
      : [],
    requirementType: typeof rawRecord?.requirementType === 'string' ? rawRecord.requirementType : '',
    completionBucket: typeof rawRecord?.completionBucket === 'string' ? rawRecord.completionBucket : '',
    reviewEnabled: Boolean(rawRecord?.reviewEnabled),
    recordRequired: rawRecord?.recordRequired !== false,
    renewalRequired: rawRecord?.renewalRequired !== false,
    renewalIntervalDays: toNumberOrNull(rawRecord?.renewalIntervalDays),
    notificationLeadDays: toNumberOrNull(rawRecord?.notificationLeadDays),
    assignedPolicySource: typeof rawRecord?.assignedPolicySource === 'string' ? rawRecord.assignedPolicySource : '',
    nextReviewDueAt: typeof rawRecord?.nextReviewDueAt === 'string' ? rawRecord.nextReviewDueAt : '',
    score: toNumberOrNull(rawRecord?.score),
    quizCorrect: toNumberOrNull(rawRecord?.quizCorrect),
    quizTotal: toNumberOrNull(rawRecord?.quizTotal),
    passed: Boolean(rawRecord?.passed),
    completedAt:
      typeof rawRecord?.completedAt === 'string' && rawRecord.completedAt.trim()
        ? rawRecord.completedAt
        : new Date().toISOString(),
    runtimeMinutes: toNumberOrNull(rawRecord?.runtimeMinutes),
    certificateClass:
      typeof rawRecord?.certificateClass === 'string' && rawRecord.certificateClass.trim()
        ? rawRecord.certificateClass.trim()
        : 'Portal Completion Record',
    certificateEligible: Boolean(rawRecord?.certificateEligible),
    source:
      typeof rawRecord?.source === 'string' && rawRecord.source.trim()
        ? rawRecord.source.trim()
        : 'portal',
  }
}

function deriveRecordsKey(currentUser) {
  const email = typeof currentUser?.email === 'string' ? currentUser.email.trim().toLowerCase() : ''
  const stableId =
    (typeof currentUser?.sub === 'string' && currentUser.sub.trim()) ||
    (typeof currentUser?.id === 'string' && currentUser.id.trim()) ||
    email

  if (!stableId) return ''
  return `identity/${stableId}`
}

function makeStore() {
  return getStore({ name: 'airon-training-records', consistency: 'strong' })
}

export default async (req) => {
  const currentUser = await getUser()

  if (!currentUser) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const key = deriveRecordsKey(currentUser)
  if (!key) {
    return new Response(JSON.stringify({ error: 'Unable to resolve a durable key for this account.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const store = makeStore()

  if (req.method === 'GET') {
    const entry = await store.get(key, { type: 'json', consistency: 'strong' })
    return Response.json({
      records: Array.isArray(entry?.records) ? entry.records.map(normalizeTrainingRecordShape).filter(Boolean) : [],
      key,
    })
  }

  if (req.method !== 'PUT' && req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const body = await req.json()
    const record = normalizeTrainingRecordShape(body?.record)

    if (!record) {
      return new Response(JSON.stringify({ error: 'Invalid training record payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const entry = (await store.get(key, { type: 'json', consistency: 'strong' })) || {
      version: 1,
      account: {
        email: typeof currentUser?.email === 'string' ? currentUser.email : '',
        id: typeof currentUser?.id === 'string' ? currentUser.id : '',
        sub: typeof currentUser?.sub === 'string' ? currentUser.sub : '',
      },
      records: [],
      updatedAt: '',
    }

    const existingRecords = Array.isArray(entry.records) ? entry.records.map(normalizeTrainingRecordShape).filter(Boolean) : []
    const nextRecords = [...existingRecords]
    const existingIndex = nextRecords.findIndex((item) => item?.attemptId && item.attemptId === record.attemptId)

    if (existingIndex >= 0) nextRecords[existingIndex] = record
    else nextRecords.unshift(record)

    nextRecords.sort((a, b) => {
      const aTime = Date.parse(a?.completedAt || '')
      const bTime = Date.parse(b?.completedAt || '')
      return (Number.isFinite(bTime) ? bTime : 0) - (Number.isFinite(aTime) ? aTime : 0)
    })

    const payload = {
      version: 1,
      account: {
        email: typeof currentUser?.email === 'string' ? currentUser.email : '',
        id: typeof currentUser?.id === 'string' ? currentUser.id : '',
        sub: typeof currentUser?.sub === 'string' ? currentUser.sub : '',
      },
      records: nextRecords.slice(0, 500),
      updatedAt: new Date().toISOString(),
    }

    await store.setJSON(key, payload)

    return Response.json({
      record,
      recordCount: payload.records.length,
      key,
      savedAt: payload.updatedAt,
    })
  } catch (error) {
    return new Response(JSON.stringify({
      error: (typeof error?.message === 'string' && error.message.trim()) || 'Unable to save your training record right now.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
