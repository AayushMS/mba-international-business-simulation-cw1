/**
 * Task 1: Strategy Process — Strategic Direction for Mobile Inc.
 * 15 marks | LO1
 *
 * Every element traces to specific case data and reflects the three-wave structure.
 * Vision -> Mission -> Goals -> SMART Objectives form a coherent goal hierarchy.
 */

export const vision = {
  statement:
    'To lead the global smartphone industry through the 4G-to-5G transition and into the AI-device era by 2028, delivering differentiated technology across the US, European, and Asian markets while sustaining financial resilience through disciplined multi-horizon resource allocation.',
  justification: [
    {
      point: 'Reflects three-wave structure',
      detail:
        'Explicitly names the 4G-to-5G transition (Waves 1-2) and AI-device era (Wave 3), matching McKinsey Three Horizons (Baghai, Coley and White, 1999).',
    },
    {
      point: 'Time-bounded ambition',
      detail:
        'The 2028 horizon aligns with projected AI-device commercial availability (case study: Apple, Samsung, Qualcomm targeting 2027-28).',
    },
    {
      point: 'Multi-market scope',
      detail:
        'Names all three markets (US, Europe, Asia), acknowledging that each requires differentiated strategy — premium in USA, feature/sustainability in Europe, bifurcated in Asia.',
    },
    {
      point: 'Financial discipline embedded',
      detail:
        'References "disciplined multi-horizon resource allocation", anchoring the vision to the $90M cash reserve floor constraint.',
    },
    {
      point: 'Post-DOJ competitive reality',
      detail:
        'Positions Mobile as a leader emerging from open competition — not defending cartel-era comfort but proactively competing in the post-DOJ landscape.',
    },
  ],
  waveConnections: {
    wave1: 'Sustaining financial resilience — 4G cash engine funds everything',
    wave2: '4G-to-5G transition — urgent competitive gap to close',
    wave3: 'AI-device era by 2028 — the long-term technology leadership bet',
  },
};

export const mission = {
  statement:
    'Mobile Inc. designs, manufactures, and delivers smartphones that serve the distinct needs of consumers across the United States, Europe, and Asia — defending our established 4G leadership in price-sensitive markets, launching competitive 5G devices for brand-conscious and feature-driven segments, and investing in AI-integrated device R&D to secure long-term technology leadership — all while maintaining the financial discipline required to fund three simultaneous technology waves from a single, finite resource base.',
  components: [
    {
      element: 'What we do',
      text: 'Designs, manufactures, and delivers smartphones',
      caseEvidence:
        'Mobile operates dual manufacturing plants (Atlanta: 12 lines, $2.9M/line; Vietnam: $3.3M/line) serving three global markets.',
    },
    {
      element: 'For whom',
      text: 'Consumers across the United States, Europe, and Asia',
      caseEvidence:
        'Three distinct markets: USA (~$80B, 88% penetration), Europe (~450M users), Asia (China alone has ~1B smartphone users, plus India and SE Asia) — each with different buying behaviours.',
    },
    {
      element: 'How we differentiate (Wave 1)',
      text: 'Defending 4G leadership in price-sensitive markets',
      caseEvidence:
        'Vietnam plant at $6/hr labour enables cost-competitive 4G for Asian mass-market; Atlanta learning-curve efficiencies serve premium US/EU.',
    },
    {
      element: 'How we differentiate (Wave 2)',
      text: 'Launching competitive 5G devices for brand-conscious and feature-driven segments',
      caseEvidence:
        '5G coverage exceeds 70% of US urban areas; 38% of US and 28% of EU consumers already own 5G devices — Mobilé has NO 5G handset.',
    },
    {
      element: 'How we differentiate (Wave 3)',
      text: 'Investing in AI-integrated device R&D for long-term technology leadership',
      caseEvidence:
        'Apple, Samsung, Qualcomm active in AI-device development; commercial availability 2027-28. R&D window open now but will not remain open.',
    },
    {
      element: 'Central constraint',
      text: 'Maintaining financial discipline to fund three simultaneous technology waves from a single, finite resource base',
      caseEvidence:
        '$90M cash reserve floor; borrowing at 4.8% normal, 7.8% emergency. Emergency borrowing triggers both financial penalty and investor signal damage.',
    },
  ],
};

export const strategicGoals = [
  {
    id: 'G1',
    title: 'Defend 4G Revenue Base',
    wave: 'wave1',
    waveLabel: '4G LTE',
    description:
      'Protect and optimise the 4G LTE business as the primary cash engine funding all strategic investments, while managing its controlled transition as 5G adoption accelerates.',
    rationale:
      '100% of Mobilé\'s ~$4.8B annual revenue derives from 4G. Post-DOJ price competition is compressing margins, but this revenue stream funds Waves 2 and 3. Abandoning it prematurely starves the entire strategy.',
    keyActions: [
      'Expand Vietnam production capacity for cost-competitive Asian 4G ($6/hr vs $28/hr Atlanta)',
      'Maintain Atlanta premium 4G production leveraging learning-curve efficiencies',
      'Price aggressively in Asian mass-market using Vietnam cost advantage',
      'Accept managed decline in 4G share (25% to ~22%) as deliberate resource reallocation',
    ],
    successMetric: '4G annual revenue maintained above $4.0B through 2026',
  },
  {
    id: 'G2',
    title: 'Achieve Competitive 5G Market Entry',
    wave: 'wave2',
    waveLabel: '5G Sub-6GHz',
    description:
      'Launch a competitive 5G handset range and establish premium brand positioning in the US and European markets before the first-mover window closes.',
    rationale:
      'Mobilé has NOT launched a 5G handset despite 70%+ US urban 5G coverage and 38% US consumer adoption. Each quarter of delay cedes first-mover pricing power and brand loyalty advantages that later entrants find difficult to erode (Strategic Group analysis).',
    keyActions: [
      'Secure 5G technology via licensing for immediate market entry (6-9 months)',
      'Begin parallel in-house 5G R&D for second-generation proprietary product',
      'Target US and European premium segments first (brand-conscious, 5G-ready infrastructure)',
      'Establish carrier partnerships leveraging existing 4G relationships',
    ],
    successMetric: 'First 5G handset launched by Q2 2026 with 10% US / 8% EU 5G market share within 12 months',
  },
  {
    id: 'G3',
    title: 'Secure AI-Device Technology Position',
    wave: 'wave3',
    waveLabel: 'AI-Integrated Devices',
    description:
      'Commit to AI-integrated device R&D to ensure Mobilé Inc. is a technology leader, not a follower, when the AI-device market materialises in 2027-2028.',
    rationale:
      'Apple, Samsung, and Qualcomm are actively developing AI-integrated devices with on-device AI chips for real-time photography, health monitoring, and personalised AI assistants. The R&D window is open NOW in 2025 but will NOT remain open indefinitely — firms waiting until Wave 2 is profitable before investing permanently forfeit technology leadership.',
    keyActions: [
      'Allocate dedicated AI R&D budget ($150M over FY2025-2026)',
      'Establish dedicated AI device development team separate from 5G',
      'Secure at least 2 strategic technology partnerships (AI chip design, AI software)',
      'Target working prototype by Q4 2027 for commercial launch in 2028',
    ],
    successMetric: 'Working AI-device prototype by Q4 2027 with commercial launch capability in 2028',
  },
  {
    id: 'G4',
    title: 'Maintain Financial Resilience',
    wave: 'cross-wave',
    waveLabel: 'Cross-Wave',
    description:
      'Allocate resources across all three waves without breaching the $90M cash reserve floor or triggering emergency borrowing.',
    rationale:
      'The $90M cash floor is the binding constraint. Emergency borrowing at 7.8% (vs 4.8% normal) carries a 3% premium AND sends a damaging signal to investors via the TSR metric. Simultaneous 5G launch + AI R&D + capacity expansion creates acute cash flow pressure.',
    keyActions: [
      'Maintain cash reserves above $120M (30% buffer above $90M floor)',
      'Limit long-term borrowing to $200M maximum at 4.8% standard rate',
      'Achieve zero emergency borrowing throughout planning period',
      'Sequence investments: front-load 5G licensing costs, ramp AI R&D gradually',
    ],
    successMetric: 'Cash reserves never below $120M; zero emergency borrowing through 2027',
  },
  {
    id: 'G5',
    title: 'Optimise Global Production for Multi-Wave Demand',
    wave: 'cross-wave',
    waveLabel: 'Cross-Wave',
    description:
      'Expand and reconfigure manufacturing capacity to serve 4G defense, 5G launch, and future AI-device production across all three markets.',
    rationale:
      'New production capacity takes 2 years from investment decision to operational availability. Capacity committed now arrives precisely when demand is expected to peak. Atlanta (12 lines, deep learning curve) and Vietnam (growing, $6/hr) must be coordinated for multi-wave production.',
    keyActions: [
      'Commission 4 additional production lines at Vietnam ($3.3M/line)',
      'Evaluate contract manufacturing (15-20% premium) for 5G launch bridging',
      'Maintain Atlanta capacity for premium US/EU production',
      'Plan 5G-capable production line conversion at both plants',
    ],
    successMetric: 'Vietnam capacity increased by 33% by Q1 2026; 5G production capability operational by Q3 2026',
  },
];

export const smartObjectives = [
  {
    id: 'SO1',
    goalRef: 'G1',
    wave: 'wave1',
    waveLabel: '4G Defense',
    statement:
      'Maintain at least 22% market share in the Asian 4G mass-market segment through Q4 2026, while reducing per-unit production costs by 8% via Vietnam plant capacity expansion, ensuring annual 4G revenue does not fall below $4.0 billion.',
    smart: {
      specific: 'Asian market, 4G segment, Vietnam expansion, per-unit cost reduction',
      measurable: '22% market share floor, 8% cost reduction, $4.0B revenue minimum',
      achievable:
        'Vietnam plant expansion is within current investment capability; 22% is a managed 3pp decline from the 25% starting position, reflecting deliberate resource reallocation to Waves 2 and 3',
      relevant:
        'Directly protects the cash engine generating 100% of current revenue ($4.8B). Without this, Waves 2 and 3 cannot be funded.',
      timeBound: 'Q4 2026 (18-month horizon)',
    },
  },
  {
    id: 'SO2',
    goalRef: 'G2',
    wave: 'wave2',
    waveLabel: '5G Launch',
    statement:
      'Launch Mobilé Inc.\'s first 5G handset in the US and European premium segments by Q2 2026, targeting 10% 5G market share in the US and 8% in Europe within 12 months of launch.',
    smart: {
      specific: 'US and European premium segments; first 5G product launch',
      measurable: '10% US 5G share, 8% EU 5G share within 12 months of launch',
      achievable:
        '5G technology available via licensing for immediate market entry; existing brand presence and carrier relationships in both markets provide launch platform',
      relevant:
        'Closes the most critical competitive gap identified in CSF analysis. 38% of US consumers already own 5G devices — Mobilé is missing an existing, growing market.',
      timeBound: 'Launch by Q2 2026; share targets measured by Q2 2027',
    },
  },
  {
    id: 'SO3',
    goalRef: 'G3',
    wave: 'wave3',
    waveLabel: 'AI R&D',
    statement:
      'Allocate a minimum of $150M to AI-integrated device R&D by end of FY2026, establishing an internal AI chip development team and securing at least two strategic technology partnerships, with a working prototype targeted for Q4 2027.',
    smart: {
      specific: 'AI R&D budget commitment, dedicated team formation, strategic partnerships, prototype delivery',
      measurable: '$150M investment, 2 partnerships secured, 1 working prototype',
      achievable:
        'Requires significant but feasible allocation from 4G cash flow (~3% of annual revenue over 2 years). Partnership model shares risk with established AI chip and software providers.',
      relevant:
        'Apple, Samsung, and Qualcomm are all actively developing AI-integrated devices for 2027-28 commercial availability. Delay forfeits technology leadership permanently (CSF analysis).',
      timeBound: 'FY2025-2026 for investment; Q4 2027 for prototype',
    },
  },
  {
    id: 'SO4',
    goalRef: 'G4',
    wave: 'cross-wave',
    waveLabel: 'Financial Discipline',
    statement:
      'Maintain cash reserves above $120M throughout the 2025-2027 planning period (30% buffer above the $90M floor), limiting long-term borrowing to no more than $200M at the standard 4.8% rate, with zero emergency borrowing.',
    smart: {
      specific: 'Cash floor with 30% safety buffer, borrowing ceiling, emergency borrowing prohibition',
      measurable: '$120M minimum cash, $200M maximum borrowing, 0 emergency loan triggers',
      achievable:
        'Requires careful sequencing of 5G licensing (front-loaded) and AI R&D (gradual ramp), with 4G revenue defense ensuring baseline cash generation above $4.0B annually',
      relevant:
        'The $90M floor is the binding financial constraint. Emergency borrowing at 7.8% carries a 3% premium over normal 4.8% rate AND damages investor confidence through TSR metric impact.',
      timeBound: '2025-2027 planning period (continuous monitoring)',
    },
  },
  {
    id: 'SO5',
    goalRef: 'G5',
    wave: 'cross-wave',
    waveLabel: 'Production Expansion',
    statement:
      'Commission 4 additional production lines at the Vietnam facility by Q1 2026, increasing total Asian capacity by 33%, while evaluating contract manufacturing for 5G launch bridging at no more than 18% cost premium above in-house production.',
    smart: {
      specific: 'Vietnam facility, 4 new production lines ($3.3M each = $13.2M), contract manufacturing assessment for 5G bridging',
      measurable: '4 new lines, 33% capacity increase, 18% maximum contract manufacturing premium',
      achievable:
        '$13.2M investment is manageable within cash flow constraints. Contract manufacturing is available in the market at 15-20% premium; 18% cap ensures cost discipline.',
      relevant:
        '2-year lead time means capacity commissioned now arrives in 2028 at projected peak demand. Vietnam\'s $6/hr labour vs Atlanta\'s $28/hr makes it the logical expansion site for cost-competitive production.',
      timeBound: 'Q1 2026 commissioning decision; capacity operational by Q1 2028',
    },
  },
];

export const goalHierarchy = {
  description:
    'The goal hierarchy demonstrates how vision flows through mission to goals and SMART objectives, with each level reinforcing the three-wave structure and the central financial discipline constraint.',
  levels: [
    {
      level: 'Vision',
      summary: 'Lead through 4G-to-5G transition into AI era by 2028 with financial resilience',
      threeWaveAlignment: 'Names all three technology waves and the resource allocation challenge explicitly',
    },
    {
      level: 'Mission',
      summary: 'Design, manufacture, deliver smartphones across three markets and three waves from a finite resource base',
      threeWaveAlignment: 'Specifies what Mobilé does for each wave: defend 4G, launch 5G, invest in AI',
    },
    {
      level: 'Strategic Goals (G1-G5)',
      summary: 'Five goals covering each wave (G1-G3) plus cross-wave enablers (G4-G5)',
      threeWaveAlignment: 'Each wave has a dedicated goal; financial discipline and production capacity serve all three',
    },
    {
      level: 'SMART Objectives (SO1-SO5)',
      summary: 'Quantified, time-bound targets traceable to specific case data',
      threeWaveAlignment: 'Each objective links to a specific goal and wave, with measurable targets derived from case study figures',
    },
  ],
  coherenceCheck:
    'The hierarchy is internally consistent: SO1 (4G defense) generates cash for SO2 (5G launch) and SO3 (AI R&D), constrained by SO4 (financial discipline) and enabled by SO5 (production expansion). No objective contradicts another; resource allocation is explicitly sequenced.',
};

export const references = [
  {
    key: 'baghai1999',
    citation:
      'Baghai, M., Coley, S. and White, D. (1999) The Alchemy of Growth: Practical Insights for Building the Enduring Enterprise. New York: Perseus Books.',
    usage: 'McKinsey Three Horizons framework applied to three-wave structure',
  },
  {
    key: 'johnson2017',
    citation:
      'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
    usage: 'Strategic direction frameworks: vision, mission, goals, objectives',
  },
  {
    key: 'gsma2024',
    citation:
      'GSMA (2024) The Mobile Economy 2024. Available at: https://www.gsma.com/mobileeconomy/ (Accessed: April 2026).',
    usage: '5G adoption rates and market growth data',
  },
  {
    key: 'hill2021',
    citation:
      'Hill, C.W.L. (2021) International Business: Competing in the Global Marketplace. 13th edn. New York: McGraw-Hill.',
    usage: 'Multi-market strategy and international business strategy concepts',
  },
  {
    key: 'christensen1997',
    citation:
      'Christensen, C.M. (1997) The Innovator\'s Dilemma: When New Technologies Cause Great Firms to Fail. Boston: Harvard Business School Press.',
    usage: 'Technology wave transitions and the risk of incumbent firms over-investing in sustaining (4G) at the expense of disruptive (5G/AI) technologies',
  },
  {
    key: 'prahalad1990',
    citation:
      'Prahalad, C.K. and Hamel, G. (1990) \'The Core Competence of the Corporation\', Harvard Business Review, 68(3), pp. 79-91.',
    usage: 'Core competence framework applied to R&D capability redirection and multi-wave resource allocation',
  },
];
