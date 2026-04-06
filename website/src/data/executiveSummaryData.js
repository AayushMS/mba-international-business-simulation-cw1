/**
 * Executive Summary — Mobile Inc. Strategic Analysis
 * 5 marks | All LOs
 *
 * Must capture: (a) core strategic direction, (b) most critical analysis findings,
 * (c) synthesised SWOT position, (d) recommended strategic choice.
 *
 * A board member should be able to read this independently and understand the full picture.
 * Marks for precision and selectivity, NOT length or exhaustive listing.
 */

export const executiveSummary = {
  title: 'Executive Summary: Mobilé Inc. Strategic Position and Recommendation',
  subtitle: 'Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition',

  context: {
    heading: 'The Strategic Situation',
    content:
      'Mobilé Inc. enters 2025 at an inflection point. The DOJ\'s dismantling of tacit price coordination has ended the stable oligopoly that sustained $4.8 billion in annual revenue. Four equally-sized firms (25% share each across USA, Europe, and Asia) now compete openly for the first time. Simultaneously, three technology waves demand attention: defending the mature 4G cash engine, urgently launching a 5G handset (Mobilé has none, despite 70%+ US urban 5G coverage), and investing in AI-device R&D before Apple, Samsung, and Qualcomm close the development window. All three waves compete for the same finite resource pool, constrained by a $90M cash reserve floor.',
  },

  strategicDirection: {
    heading: 'Strategic Direction',
    vision:
      'Lead the global smartphone industry through the 4G-to-5G transition and into the AI-device era by 2028, with financial resilience through disciplined multi-horizon resource allocation.',
    missionCore:
      'Defend established 4G leadership, launch competitive 5G devices, and invest in AI-integrated device R&D — all from a single, finite resource base across three distinct global markets.',
    keyObjectives: [
      'Maintain 4G revenue above $4.0B through Q4 2026 (Wave 1 defence)',
      'Launch first 5G handset in US/EU by Q2 2026 targeting 10%/8% market share (Wave 2 entry)',
      'Commit $150M to AI R&D by end FY2026 with prototype by Q4 2027 (Wave 3 investment)',
      'Maintain cash reserves above $120M with zero emergency borrowing (Financial discipline)',
    ],
  },

  criticalFindings: {
    heading: 'Critical Analysis Findings',
    internal: [
      {
        finding: 'Atlanta\'s learning-curve efficiencies are the only temporal competitive advantage',
        source: 'VRIO',
        implication: 'Leverage for premium production while the window exists',
      },
      {
        finding: 'Entire value chain is configured for 4G only — R&D, production, and marketing are all misaligned with the 5G/AI reality',
        source: 'Value Chain',
        implication: 'The company needs value chain reconfiguration, not optimisation',
      },
      {
        finding: 'Most resources represent competitive parity, not advantage — all four firms start equal',
        source: 'VRIO',
        implication: 'Differentiation must be built through new capabilities (5G product, AI R&D)',
      },
    ],
    external: [
      {
        finding: 'The DOJ intervention is the single most impactful macro force — margin compression reduces investment capacity',
        source: 'PESTLE + Porter\'s',
        implication: 'Cost efficiency is survival-critical; pricing power must come from 5G differentiation',
      },
      {
        finding: 'Speed to 5G market is the #1 Critical Success Factor with the largest competitive gap',
        source: 'CSF',
        implication: '5G launch timing determines whether Mobilé leads or follows for the next decade',
      },
      {
        finding: 'Strategic group positions are still fluid — no competitor has permanently captured 5G first-mover status',
        source: 'Strategic Group',
        implication: 'The window for premium positioning is open but will close within 6-12 months',
      },
    ],
  },

  swotPosition: {
    heading: 'Synthesised SWOT Position',
    synthesis:
      'Mobilé has sufficient internal capabilities (dual-plant manufacturing, $4.8B cash engine, R&D base, global coordination experience) that are fundamentally misaligned with external reality (5G demand, AI R&D race, post-DOJ competition). The dominant strategic gap is the absence of a 5G product (W1) despite proven market demand (O1). The dominant risk is simultaneous investment demands breaching the $90M cash floor (T5).',
    criticalConnection:
      'W1 (no 5G product) → O1 (5G market ready) is THE strategic crisis. Closing this gap through rapid licensing-based launch is the highest-priority action.',
  },

  recommendation: {
    heading: 'Strategic Recommendation',
    choice: 'Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition',
    threeWaveSummary: [
      {
        wave: 'Wave 1 (4G)',
        directive: 'Defend & Extract',
        action: 'Maintain as cash engine with 8% cost reduction via Vietnam expansion. Accept managed share decline (25% → 22%). Do not over-invest.',
        colour: '#3B82F6',
      },
      {
        wave: 'Wave 2 (5G)',
        directive: 'License & Launch Fast',
        action: 'License 5G technology for Q2 2026 US/EU premium launch. Parallel in-house R&D for proprietary second-gen product. Target 10% US / 8% EU share.',
        colour: '#10B981',
      },
      {
        wave: 'Wave 3 (AI)',
        directive: 'Invest Now, Small but Committed',
        action: '$150M AI R&D over FY2025-2026. Dedicated team. 2 partnerships. Prototype Q4 2027. Commercial launch 2028.',
        colour: '#8B5CF6',
      },
    ],
    financialConstraint:
      '$120M cash buffer (30% above $90M floor). Investment sequenced: 5G licensing front-loaded, AI R&D gradual ramp, Vietnam expansion from ongoing cash flow. Zero emergency borrowing.',
    keyTradeOff:
      'This strategy accepts short-term 5G licensing dependency, managed 4G decline, and uncertain AI returns — because the alternative (delay) permanently forfeits 5G first-mover position and AI technology leadership. Financial discipline constrains each wave below its theoretical maximum, but the sequenced approach is achievable within the $90M cash floor.',
  },

  keyMetrics: [
    { metric: 'Current Annual Revenue', value: '~$4.8B', source: '4G LTE (100%)' },
    { metric: 'Market Share (all markets)', value: '25%', source: 'Equal with 3 competitors' },
    { metric: 'Cash Reserve Floor', value: '$90M', source: 'Non-negotiable constraint' },
    { metric: 'Target Cash Buffer', value: '$120M', source: '30% above floor' },
    { metric: '5G US Urban Coverage', value: '70%+', source: 'Infrastructure ready' },
    { metric: 'US 5G Consumer Adoption', value: '38%', source: 'Proven demand' },
    { metric: 'Mobilé 5G Products', value: '0', source: 'Critical competitive gap' },
    { metric: 'AI R&D Commitment', value: '$150M', source: 'FY2025-2026' },
    { metric: 'Asian Market Growth', value: '22-30% p.a.', source: 'Highest opportunity' },
    { metric: 'Normal Borrowing Rate', value: '4.8%', source: 'Acceptable' },
    { metric: 'Emergency Borrowing Rate', value: '7.8%', source: 'Must avoid' },
  ],
};

export const executiveSummaryReferences = [
  {
    key: 'baghai1999',
    citation: 'Baghai, M., Coley, S. and White, D. (1999) The Alchemy of Growth: Practical Insights for Building the Enduring Enterprise. New York: Perseus Books.',
    usage: 'Three Horizons framework structuring the three-wave analysis',
  },
  {
    key: 'barney1991',
    citation: 'Barney, J.B. (1991) \'Firm Resources and Sustained Competitive Advantage\', Journal of Management, 17(1), pp. 99-120.',
    usage: 'VRIO framework for internal resource assessment',
  },
  {
    key: 'porter1980',
    citation: 'Porter, M.E. (1980) Competitive Strategy: Techniques for Analyzing Industries and Competitors. New York: Free Press.',
    usage: 'Five Forces industry structure analysis',
  },
  {
    key: 'porter1985',
    citation: 'Porter, M.E. (1985) Competitive Advantage: Creating and Sustaining Superior Performance. New York: Free Press.',
    usage: 'Value Chain analysis of internal activities',
  },
  {
    key: 'johnson2017',
    citation: 'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
    usage: 'PESTLE, Strategic Group, CSF frameworks',
  },
  {
    key: 'gsma2024',
    citation: 'GSMA (2024) The Mobile Economy 2024. Available at: https://www.gsma.com/mobileeconomy/ (Accessed: April 2026).',
    usage: '5G adoption and market data',
  },
  {
    key: 'ghemawat2007',
    citation: 'Ghemawat, P. (2007) Redefining Global Strategy: Crossing Borders in a World Where Differences Still Matter. Boston: Harvard Business School Press.',
    usage: 'Multi-market strategy differentiation',
  },
  {
    key: 'hill2021',
    citation: 'Hill, C.W.L. (2021) International Business: Competing in the Global Marketplace. 13th edn. New York: McGraw-Hill.',
    usage: 'International business strategy concepts',
  },
  {
    key: 'ericsson2024',
    citation: 'Ericsson (2024) Ericsson Mobility Report. Available at: https://www.ericsson.com/en/reports-and-papers/mobility-report (Accessed: April 2026).',
    usage: '5G deployment and coverage data',
  },
  {
    key: 'deloitte2024',
    citation: 'Deloitte (2024) Global Mobile Consumer Trends. Available at: https://www2.deloitte.com/global/en/pages/technology-media-and-telecommunications/articles/gx-global-mobile-consumer-trends.html (Accessed: April 2026).',
    usage: 'Consumer adoption and behaviour data',
  },
  {
    key: 'qualcomm2024',
    citation: 'Qualcomm (2024) The Future of AI on Device. Available at: https://www.qualcomm.com/research/artificial-intelligence (Accessed: April 2026).',
    usage: 'AI-device development timeline and capabilities',
  },
];
