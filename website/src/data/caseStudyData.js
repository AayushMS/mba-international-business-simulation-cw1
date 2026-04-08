/**
 * caseStudyData.js — Integration bridge
 * Imports from task-specific data files and re-exports in the shapes
 * that all components consume. All placeholder content is now replaced
 * with validated, case-specific content from the content-writer.
 */

import {
  vision,
  mission,
  strategicGoals,
  smartObjectives,
} from './task1Data.js'

import {
  vrioAnalysis,
  valueChainAnalysis,
  pestleAnalysis,
  portersFiveForces,
  strategicGroupAnalysis,
  csfAnalysis,
} from './task2Data.js'

import {
  strengths,
  weaknesses,
  opportunities,
  threats,
  internalExternalConnections,
} from './task3Data.js'

import {
  strategicChoice,
  waveActionPlan,
  marketPrioritisation,
  financialDiscipline,
  riskManagement,
} from './task4Data.js'

import { executiveSummary as execSummaryData } from './executiveSummaryData.js'

// ─── COMPANY / META ──────────────────────────────────────────────────────────

export const company = {
  name: 'Mobilé Inc.',
  revenue: 4.8,
  marketShare: 25,
  cashReserveFloor: 90,
  borrowingRateNormal: 4.8,
  borrowingRateEmergency: 7.8,
}

// ─── THREE WAVES ─────────────────────────────────────────────────────────────

export const waves = {
  '4g': {
    id: '4g', label: 'Wave 1: 4G LTE', color: '#3B82F6',
    status: 'Defend & Extract',
    description: 'Mature cash engine. ~$4.8B revenue. Under price pressure post-DOJ. Funds Waves 2 and 3.',
    urgency: 'low', horizon: '2023–2026',
    keyFact: '88% smartphone penetration in USA; mature market; DOJ ended price coordination',
    strategicImperative: waveActionPlan[0]?.strategicLogic || 'Protect margin while funding 5G transition',
  },
  '5g': {
    id: '5g', label: 'Wave 2: 5G', color: '#10B981',
    status: 'License & Launch Fast',
    description: 'Critical gap — 70%+ urban 5G coverage, 38% US consumer adoption. Mobilé has NOT launched a 5G handset.',
    urgency: 'critical', horizon: '2025–2027',
    keyFact: '38% US adoption, 28% EU adoption by end-2024. Infrastructure is ready — product gap is the bottleneck.',
    strategicImperative: waveActionPlan[1]?.strategicLogic || 'License 5G for immediate market entry',
  },
  ai: {
    id: 'ai', label: 'Wave 3: AI Devices', color: '#8B5CF6',
    status: 'Invest Now — Small but Committed',
    description: 'Commercial window 2027–28. $150M R&D commitment required now. Apple, Samsung, Qualcomm already active.',
    urgency: 'medium', horizon: '2025–2028',
    keyFact: 'Commercial availability 2027–28. R&D window open now but closing.',
    strategicImperative: waveActionPlan[2]?.strategicLogic || 'Commit R&D budget now to secure 2027–28 launch',
  },
}

// ─── MARKETS ─────────────────────────────────────────────────────────────────

export const markets = (() => {
  const mp = marketPrioritisation.markets
  return {
    usa: { id: 'usa', name: 'USA', ...mp[0] },
    europe: { id: 'europe', name: 'Europe', ...mp[1] },
    asia: { id: 'asia', name: 'Asia', ...mp[2] },
  }
})()

// ─── TASK 1: STRATEGY PROCESS ─────────────────────────────────────────────────

export const strategyProcess = {
  vision: {
    statement: vision.statement,
    rationale: vision.justification?.map(j => j.detail).join(' ') || '',
    waveConnections: vision.waveConnections,
    justification: vision.justification,
  },
  mission: {
    statement: mission.statement,
    usa: mission.components?.find(c => c.element.includes('USA') || c.element.includes('Wave 1'))?.text || mission.statement,
    europe: mission.components?.find(c => c.element.includes('Europe'))?.text || mission.statement,
    asia: mission.components?.find(c => c.element.includes('Asia'))?.text || mission.statement,
    components: mission.components,
  },
  goals: strategicGoals.map(g => ({
    id: g.id,
    title: g.title,
    wave: g.wave === 'wave1' ? '4g' : g.wave === 'wave2' ? '5g' : g.wave === 'wave3' ? 'ai' : 'all',
    waveRaw: g.wave,
    description: g.description,
    rationale: g.rationale,
    keyActions: g.keyActions,
    timeframe: g.successMetric,
    successMetric: g.successMetric,
  })),
  smartObjectives: smartObjectives.map(o => ({
    id: o.id,
    wave: o.wave === 'wave1' ? '4g' : o.wave === 'wave2' ? '5g' : o.wave === 'wave3' ? 'ai' : 'all',
    waveRaw: o.wave,
    waveLabel: o.waveLabel,
    statement: o.statement,
    specific: o.smart.specific,
    measurable: o.smart.measurable,
    achievable: o.smart.achievable,
    relevant: o.smart.relevant,
    timeBound: o.smart.timeBound,
    goalRef: o.goalRef,
  })),
}

// ─── TASK 2: VRIO ─────────────────────────────────────────────────────────────

export const vrioData = vrioAnalysis.resources.map(r => ({
  resource: r.resource,
  valuable: r.valuable === true,
  rare: r.rare === true || r.rare === 'partially',
  inimitable: r.costlyToImitate === true || r.costlyToImitate === 'partially',
  organized: r.organised === true || r.organised === 'partially',
  implication: r.competitiveImplication,
  wave: r.waveConnection.includes('Wave 3') ? 'ai'
    : r.waveConnection.includes('Wave 2') ? '5g'
    : r.waveConnection.includes('cross') ? 'all'
    : '4g',
  evidence: [r.valuableEvidence, r.imitateEvidence].filter(Boolean).join(' | '),
  implicationDetail: r.implicationDetail,
  swotFeed: r.swotFeed,
  waveConnection: r.waveConnection,
}))

// ─── TASK 2: VALUE CHAIN ──────────────────────────────────────────────────────

export const valueChain = {
  primary: valueChainAnalysis.primaryActivities.map(a => ({
    id: a.activity.toLowerCase().replace(/[^a-z]/g, '').slice(0, 10),
    name: a.activity,
    description: a.currentState,
    strengths: [a.strength].filter(Boolean),
    weaknesses: [a.vulnerability].filter(Boolean),
    wave: a.swotFeed?.includes('W1') || a.swotFeed?.includes('5g') ? '5g'
      : a.waveImplication?.includes('Wave 3') ? 'ai'
      : '4g',
    strategicInsight: a.strategicInsight,
  })),
  support: valueChainAnalysis.supportActivities.map(a => ({
    id: a.activity.toLowerCase().replace(/[^a-z]/g, '').slice(0, 10),
    name: a.activity,
    description: a.currentState,
    notes: a.strategicInsight || a.criticalDecision || '',
    strengths: [a.strength].filter(Boolean),
    weaknesses: [a.vulnerability].filter(Boolean),
  })),
  crossCuttingInsight: valueChainAnalysis.crossCuttingInsight,
}

// ─── TASK 2: PESTLE ───────────────────────────────────────────────────────────

// Flatten nested PESTLE structure into flat array for PESTLEGrid component
export const pestleData = pestleAnalysis.factors.flatMap(cat =>
  cat.items.map(item => ({
    category: cat.category,
    factor: item.factor,
    impact: item.impact,
    direction: item.impact === 'high' && item.swotFeed?.startsWith('T') ? 'negative'
      : item.impact === 'high' && item.swotFeed?.startsWith('O') ? 'positive'
      : item.swotFeed?.startsWith('T') ? 'negative' : 'positive',
    wave: item.waveAffected?.length === 3 ? 'all'
      : item.waveAffected?.[0] === 'wave3' ? 'ai'
      : item.waveAffected?.[0] === 'wave2' ? '5g' : '4g',
    description: item.description,
    evidence: item.mobileImplication,
    swotFeed: item.swotFeed,
  }))
)

// ─── TASK 2: PORTER'S ─────────────────────────────────────────────────────────

const FORCE_COLORS = {
  'Competitive Rivalry': '#EF4444',
  'Threat of New Entrants': '#F97316',
  'Bargaining Power of Buyers': '#3B82F6',
  'Bargaining Power of Suppliers': '#EAB308',
  'Threat of Substitutes': '#8B5CF6',
}

export const portersData = {
  forces: portersFiveForces.forces.map(f => ({
    id: f.force.toLowerCase().replace(/[^a-z]/g, '').slice(0, 12),
    name: f.force,
    intensity: f.intensityScore * 20, // convert 1-5 to 0-100
    intensityScore: f.intensityScore,
    intensityLabel: f.intensity,
    color: FORCE_COLORS[f.force] || '#8FA3BF',
    description: f.mobileImplication,
    keyDrivers: f.factors.map(fac => fac.factor),
    factors: f.factors,
    swotFeed: f.swotFeed,
  })),
  overallAttractiveness: portersFiveForces.overallAssessment.industryAttractiveness,
  keyStructuralShift: portersFiveForces.overallAssessment.keyStructuralShift,
  criticalForce: portersFiveForces.overallAssessment.criticalForce,
}

// ─── TASK 2: STRATEGIC GROUP ──────────────────────────────────────────────────

export const strategicGroupData = {
  axes: {
    x: { label: strategicGroupAnalysis.mappingDimensions.xAxis.label },
    y: { label: strategicGroupAnalysis.mappingDimensions.yAxis.label },
  },
  currentPosition: strategicGroupAnalysis.currentPosition,
  projectedGroups: strategicGroupAnalysis.projectedGroups,
  trajectory: strategicGroupAnalysis.strategicTrajectory,
  groups: [
    // Current: Mobilé at modest tech breadth (4G only), full global
    { id: 'mobile', name: 'Mobilé Inc.', x: 3, y: 8, size: 25, color: '#3B82F6', isUs: true, notes: 'Current: 4G only, full global. Must move right (5G launch)' },
    { id: 'comp1', name: 'Competitor A', x: 6, y: 8, size: 25, color: '#10B981', notes: '5G-capable, full global' },
    { id: 'comp2', name: 'Competitor B', x: 5, y: 6, size: 25, color: '#F97316', notes: '5G partial, dual market' },
    { id: 'comp3', name: 'Competitor C', x: 4, y: 7, size: 25, color: '#EAB308', notes: '4G+5G pipeline, full global' },
    // Target position for Mobilé
    { id: 'mobile-target', name: 'Mobilé (Target)', x: 8, y: 9, size: 25, color: '#3B82F6', isUs: true, isTarget: true, notes: 'Target: 5G + AI R&D, full global — Technology Leader group' },
  ],
}

// ─── TASK 2: CSF ──────────────────────────────────────────────────────────────

// Flatten CSF by wave into ranked list for CSFTable component
const csfScoreMap = {
  'none': 85, 'moderate': 55, 'significant': 35, 'growing': 45, 'critical': 15, 'emerging': 60, 'probable': 40,
}
const csfBenchmarkMap = {
  'none': 80, 'moderate': 80, 'significant': 80, 'growing': 80, 'critical': 80, 'emerging': 75, 'probable': 75,
}

export const csfData = csfAnalysis.csfByWave.flatMap(waveGroup =>
  waveGroup.factors.map(f => ({
    id: f.csf.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 20),
    factor: f.csf,
    importance: f.gap === 'critical' ? 'Critical' : f.gap === 'significant' ? 'High' : 'Medium',
    mobileScore: csfScoreMap[f.gap] ?? 50,
    industryBenchmark: csfBenchmarkMap[f.gap] ?? 80,
    wave: waveGroup.wave === 'wave1' ? '4g' : waveGroup.wave === 'wave2' ? '5g' : waveGroup.wave === 'wave3' ? 'ai' : 'all',
    gap: f.gapDetail,
    actions: f.whyCritical,
    currentPosition: f.currentPosition,
  }))
)

export const csfPriorityRanking = csfAnalysis.priorityRanking

// ─── TASK 3: SWOT ─────────────────────────────────────────────────────────────

const normaliseWave = w =>
  w === 'wave1' ? '4g' : w === 'wave2' ? '5g' : w === 'wave3' ? 'ai'
  : w === 'cross-wave' ? 'all' : w || 'all'

export const swotData = {
  strengths: strengths.map(s => ({
    id: s.id,
    text: s.title,
    body: s.strategicImplication,
    wave: normaliseWave(s.wave),
    evidence: s.sourceFrameworks?.join(' | ') || s.evidence,
    evidenceDetail: s.evidence,
    strategicImplication: s.strategicImplication,
    connectionToOT: s.connectionToOT,
  })),
  weaknesses: weaknesses.map(w => ({
    id: w.id,
    text: w.title,
    body: w.strategicImplication,
    wave: normaliseWave(w.wave),
    evidence: w.sourceFrameworks?.join(' | ') || w.evidence,
    evidenceDetail: w.evidence,
    strategicImplication: w.strategicImplication,
    connectionToOT: w.connectionToOT,
  })),
  opportunities: opportunities.map(o => ({
    id: o.id,
    text: o.title,
    body: o.strategicImplication,
    wave: normaliseWave(o.wave),
    evidence: o.sourceFrameworks?.join(' | ') || o.evidence,
    evidenceDetail: o.evidence,
    strategicImplication: o.strategicImplication,
    connectionToSW: o.connectionToSW,
  })),
  threats: threats.map(t => ({
    id: t.id,
    text: t.title,
    body: t.strategicImplication,
    wave: normaliseWave(t.wave),
    evidence: t.sourceFrameworks?.join(' | ') || t.evidence,
    evidenceDetail: t.evidence,
    strategicImplication: t.strategicImplication,
    connectionToSW: t.connectionToSW,
  })),
  connections: internalExternalConnections,
}

// ─── TASK 4: RECOMMENDATION ──────────────────────────────────────────────────

export const recommendation = {
  title: strategicChoice.title,
  strategicChoice: strategicChoice.summary,
  rationale: strategicChoice.decisionStatement,
  resourceAllocation: [
    { wave: '4g', label: '4G Defense', allocation: 25, amount: '~$500M', rationale: waveActionPlan[0]?.strategicLogic },
    { wave: '5g', label: '5G Launch', allocation: 55, amount: '~$1.1B', rationale: waveActionPlan[1]?.strategicLogic },
    { wave: 'ai', label: 'AI R&D', allocation: 20, amount: '$150M R&D', rationale: waveActionPlan[2]?.strategicLogic },
  ],
  waveActionPlan,
  marketPriority: marketPrioritisation.markets.map((m, i) => ({
    market: m.market,
    priority: i + 1,
    rationale: m.rationale,
    wave1Strategy: m.wave1Strategy,
    wave2Strategy: m.wave2Strategy,
    wave3Strategy: m.wave3Strategy,
  })),
  risks: riskManagement.risks.map(r => ({
    risk: r.risk,
    mitigation: r.mitigation,
    severity: r.severity,
    description: r.description,
    residualRisk: r.residualRisk,
  })),
  tradeoffs: [
    {
      choice: 'License 5G (speed) vs Build In-House (IP)',
      gain: 'Product in market within 6-9 months; first-mover positioning captured',
      cost: 'Licensing dependency; no proprietary IP; ongoing licensing costs',
    },
    {
      choice: 'Accept Managed 4G Decline (25% → 22%)',
      gain: 'Resources freed for Wave 2 and 3 investment; cost reduction focus',
      cost: 'Short-term revenue erosion; cannot maximise 4G share and fund other waves simultaneously',
    },
    {
      choice: 'Invest in AI R&D before 5G is Profitable',
      gain: 'Secures Wave 3 leadership option; foundation built before window closes',
      cost: 'Cash outlay without near-term return; $150M with uncertain competitive outcome',
    },
  ],
  financialDiscipline,
  investmentSequencing: financialDiscipline.investmentSequencing,
}

// ─── EXECUTIVE SUMMARY ───────────────────────────────────────────────────────

export const executiveSummary = {
  headline: execSummaryData.subtitle,
  situation: execSummaryData.context.content,
  keyFindings: [
    ...execSummaryData.criticalFindings.internal.map(f => `[Internal — ${f.source}] ${f.finding}`),
    ...execSummaryData.criticalFindings.external.map(f => `[External — ${f.source}] ${f.finding}`),
  ],
  recommendation: execSummaryData.recommendation.choice,
  criticalConstraint: '$90M cash floor + 3 simultaneous technology waves',
  keyMetrics: execSummaryData.keyMetrics,
  swotSynthesis: execSummaryData.swotPosition.synthesis,
  threeWaveSummary: execSummaryData.recommendation.threeWaveSummary,
  keyObjectives: execSummaryData.strategicDirection.keyObjectives,
}

// ─── FINANCIAL METRICS ────────────────────────────────────────────────────────

export const financialMetrics = {
  currentRevenue: 4.8,
  cashPosition: 'Above $120M target (30% buffer over $90M floor)',
  cashFloor: 0.09,
  cashTarget: 0.12,
  borrowingNormal: 4.8,
  borrowingEmergency: 7.8,
  timeline: [
    { year: '2023', revenue: 4.6, wave: '4g' },
    { year: '2024', revenue: 4.8, wave: '4g' },
    { year: '2025', revenue: 4.4, wave: 'transition', note: 'DOJ intervention; 5G investment begins' },
    { year: '2026', revenue: 5.1, wave: '5g', note: '5G launch Q2 2026' },
    { year: '2027', revenue: 5.8, wave: '5g', note: 'AI prototype Q4 2027' },
    { year: '2028', revenue: 6.5, wave: 'ai', note: 'AI commercial launch; Vietnam at full capacity' },
  ],
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────

export const teamMembers = [
  { id: 1, name: 'Bishwesh Ram Shrestha', collegeId: 'np01mb7a250082', universityId: '25030247', role: 'Strategy Lead', tasks: 'Task 1 + Executive Summary', presentationRole: 'Exec Summary + Vision/Mission (3 min)', contribution: 'Led Task 1 strategic direction; authored Vision, Mission, and Executive Summary' },
  { id: 2, name: 'Gaurav Dangol', collegeId: 'np01mb7a250083', universityId: '18029811', role: 'Strategy Support', tasks: 'Task 1 (Goals/SMART)', presentationRole: 'Strategic Goals + SMART (2 min)', contribution: 'Developed five Strategic Goals and five SMART Objectives with case-specific evidence' },
  { id: 3, name: 'Bishan Subedi', collegeId: 'np01mb7a250010', universityId: '25030193', role: 'Internal Analyst', tasks: 'Task 2a (Internal)', presentationRole: 'VRIO + Value Chain (3 min)', contribution: 'Conducted VRIO/RBV analysis and Value Chain analysis of Mobilé\'s internal capabilities' },
  { id: 4, name: 'Aayush Man Singh', collegeId: 'np01mb7a250043', universityId: '18029779', role: 'External Analyst', tasks: 'Task 2b (External)', presentationRole: 'PESTLE + Porter\'s (3 min)', contribution: 'Conducted PESTLE, Porter\'s Five Forces, Strategic Group, and CSF analyses' },
  { id: 5, name: 'Ruchan Jung Sijapati', collegeId: 'NP01MB7A250143', universityId: '20048645', role: 'Synthesis Lead', tasks: 'Task 3 + Task 4', presentationRole: 'SWOT + Recommendation (3 min)', contribution: 'Synthesised SWOT from Task 2 evidence; developed Strategic Recommendation' },
  { id: 6, name: 'Shaswat Nibha Maharjan', collegeId: 'np01mb7a250162', universityId: '—', role: 'Recommendation Support', tasks: 'Task 4 (Trade-offs)', presentationRole: 'Risk/constraints + Closing (1 min)', contribution: 'Developed risk register, trade-off analysis, and financial constraint management' },
]

// ─── REFERENCES ───────────────────────────────────────────────────────────────

import { references as task1Refs } from './task1Data.js'
import { task3References } from './task3Data.js'
import { executiveSummaryReferences } from './executiveSummaryData.js'

const dedupe = refs => {
  const seen = new Set()
  return refs.filter(r => {
    if (seen.has(r.key || r.citation)) return false
    seen.add(r.key || r.citation)
    return true
  })
}

const allRefs = dedupe([
  ...task1Refs,
  ...task3References,
  ...executiveSummaryReferences,
])

export const references = {
  caseStudy: [
    {
      id: 'cs1',
      citation: 'Teesside University / Islington College (2026) MN7002NI International Business Strategy with Simulation — Case Study: Mobilé Inc. SP26 Coursework 1. Middlesbrough: Teesside University.',
      type: 'Case Study',
    },
  ],
  academic: allRefs
    .filter(r => !r.citation.includes('GSMA') && !r.citation.includes('Ericsson') && !r.citation.includes('Deloitte') && !r.citation.includes('Qualcomm'))
    .map((r, i) => ({ id: `ac${i + 1}`, citation: r.citation, type: 'Academic', usage: r.usage })),
  industry: allRefs
    .filter(r => r.citation.includes('GSMA') || r.citation.includes('Ericsson') || r.citation.includes('Deloitte') || r.citation.includes('Qualcomm'))
    .map((r, i) => ({ id: `ind${i + 1}`, citation: r.citation, type: 'Industry', usage: r.usage })),
}

// ─── PRODUCTION ───────────────────────────────────────────────────────────────

export const production = {
  atlanta: { location: 'Atlanta, USA', lines: 12, costPerLine: 2.9, laborCostPerHour: 28, notes: 'Deep learning-curve efficiencies; premium US/EU production; home market (zero tariff)' },
  vietnam: { location: 'Vietnam', lines: 'growing', costPerLine: 3.3, laborCostPerHour: 6, notes: 'Growing facility; $6/hr labour; zero Asian tariff; EVFTA European access. 4 new lines commissioned.' },
  plantLeadTime: 2,
  overproductionPenalty: '5–10% cost',
  underproductionConsequence: 'Permanently lost sales',
}

// ─── COMPETITORS ─────────────────────────────────────────────────────────────

export const competitors = [
  { id: 'mobile', name: 'Mobilé Inc.', isUs: true, marketShare: 25, fiveGLaunched: false, notes: 'No 5G handset launched as of 2025; 4G-only product range' },
  { id: 'comp1', name: 'Competitor A', isUs: false, marketShare: 25, fiveGLaunched: true, notes: 'Actively developing 5G and AI capabilities' },
  { id: 'comp2', name: 'Competitor B', isUs: false, marketShare: 25, fiveGLaunched: 'partial', notes: '5G pipeline in development' },
  { id: 'comp3', name: 'Competitor C', isUs: false, marketShare: 25, fiveGLaunched: 'partial', notes: '5G + AI investment underway' },
]
