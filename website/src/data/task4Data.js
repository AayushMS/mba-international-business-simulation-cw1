/**
 * Task 4: Strategic Choice & Recommendation — Mobile Inc.
 * 15 marks | LO3 + LO4
 *
 * Assessed across five dimensions:
 * 1. Clarity — unambiguous position on markets, waves, competitive posture
 * 2. Three-wave coherence — explicitly addresses how all three waves are managed
 * 3. Analytical consistency — follows from and consistent with Tasks 1-3
 * 4. Trade-off honesty — $90M floor, simultaneous demands, licensing trade-off
 * 5. Executive communication — decision brief, not analysis summary
 */

export const strategicChoice = {
  title: 'Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition',
  summary:
    'Mobilé Inc. should pursue a sequenced dual-investment strategy: launch 5G via technology licensing within 6-9 months to close the critical competitive gap, while simultaneously committing to in-house AI-device R&D to secure long-term technology leadership — all funded by disciplined management of the 4G cash engine with targeted cost reductions.',
  decisionStatement:
    'This is a sequenced investment strategy with a clear priority: 5G speed-to-market is the single most important near-term competitive move, supported by parallel AI R&D commitment and managed 4G transition. The three waves are interdependent — 4G funds the strategy, 5G captures immediate competitive positioning, and AI secures long-term technology leadership — but speed to 5G market is the decisive differentiator in 2025.',
};

export const waveActionPlan = [
  {
    wave: 'wave1',
    waveLabel: 'Wave 1: 4G LTE',
    directive: 'Defend, Extract, Don\'t Over-Invest',
    colour: '#3B82F6',
    what:
      'Protect 4G revenue as the cash engine funding Waves 2 and 3, but accept managed decline. Do NOT pour incremental investment into a depleting asset.',
    actions: [
      {
        action: 'Maintain 4G production at Atlanta for premium US/EU markets',
        rationale: 'Atlanta\'s deep learning-curve efficiencies (years of accumulated production optimisation, $2.9M/line) make it the efficient platform for premium 4G (VRIO: temporary competitive advantage)',
        caseEvidence: 'Atlanta: 12 lines, $28/hr, deep learning curve — efficient for premium but expensive for cost-sensitive products',
      },
      {
        action: 'Expand Vietnam capacity for cost-competitive Asian 4G',
        rationale: 'Vietnam\'s $6/hr labour (vs $28/hr Atlanta) is essential for price-competitive 4G in the Asian mass-market where volume and cost determine survival',
        caseEvidence: 'Vietnam: $6/hr labour, zero Asian tariff, EVFTA European access; Asian market growing 22-30% p.a.',
      },
      {
        action: 'Target 8% per-unit cost reduction via Vietnam scale-up',
        rationale: 'Post-DOJ margin compression (T1) demands cost reduction to maintain cash generation from 4G despite aggressive competitor pricing',
        caseEvidence: 'DOJ dismantled price coordination; all four firms cutting prices; margin compression is structural and permanent',
      },
      {
        action: 'Accept managed market share decline from 25% to ~22%',
        rationale: 'Deliberate trade-off: resources freed from defending every 4G share point fund Wave 2 and Wave 3 investments. This is strategic reallocation, not failure.',
        caseEvidence: '25% starting share across all markets; $4.0B revenue floor still maintained at 22% if costs are managed',
      },
      {
        action: 'Price aggressively in Asian mass-market using Vietnam cost advantage',
        rationale: 'Asian market bifurcation means the mass-market segment (India, SE Asia) competes on price. Vietnam\'s cost structure enables competitive pricing that Atlanta cannot match.',
        caseEvidence: 'Asia: China alone has ~1B smartphone users; India/SE Asia price-sensitive predominantly 4G; Vietnam zero-tariff access',
      },
    ],
    strategicLogic: 'Over-defending a mature technology at the expense of 5G launch is the single biggest strategic mistake Mobilé can make. 4G funds everything — but "fund everything" is its role, not "grow at all costs."',
    swotAlignment: 'Leverages S1 (dual-plant) and S2 (cash engine). Manages T1 (margin compression) through cost reduction rather than revenue maximisation.',
  },
  {
    wave: 'wave2',
    waveLabel: 'Wave 2: 5G Sub-6GHz',
    directive: 'License to Launch Fast, Build IP in Parallel',
    colour: '#10B981',
    what:
      'License 5G technology for an immediate market entry (6-9 months) while beginning in-house 5G R&D for second-generation products that build proprietary IP.',
    actions: [
      {
        action: 'License 5G chipset technology for first-generation handset',
        rationale: 'Speed is the critical factor — the first-mover window is closing (CSF #1). Licensing gets a product to market immediately while in-house R&D alone is too slow.',
        caseEvidence: 'Technology choice: licensing = immediate, costly, no IP vs in-house = slower, builds IP. With 38% US already owning 5G, speed dominates.',
      },
      {
        action: 'Target US and European premium segments first',
        rationale: 'USA (brand-conscious, $80B market, 70%+ 5G coverage) and Europe (feature-driven, sustainability-aware, 55% 5G coverage) offer premium pricing and brand-loyalty opportunities',
        caseEvidence: 'USA: 88% smartphone penetration, 14-20% growth; Europe: 450M users, 16-22% growth, feature/sustainability differentiation viable',
      },
      {
        action: 'Launch by Q2 2026 — every quarter of delay cedes first-mover advantage',
        rationale: 'Strategic Group analysis shows 5G First-Mover positions crystallise quickly with high mobility barriers (time advantage, brand positioning, carrier relationships)',
        caseEvidence: 'No competitor has permanently captured 5G first-mover position yet (O5), but positions will crystallise within 6-12 months',
      },
      {
        action: 'Begin in-house 5G R&D immediately for second-generation proprietary product',
        rationale: 'Licensing creates supplier dependency (Porter\'s: supplier power). Proprietary IP is a sustainable advantage (VRIO: costly to imitate). Second-gen product differentiates from other licensees.',
        caseEvidence: 'In-house R&D: slower but builds proprietary IP. IP protection for 5G technology is legally enforceable.',
      },
      {
        action: 'Use contract manufacturing (15-20% premium) to bridge 5G production gap',
        rationale: 'Current production lines are optimised for 4G. Contract manufacturing bridges the gap while 5G-capable lines are established. 15-20% premium is acceptable for launch speed.',
        caseEvidence: 'Contract manufacturing available at 15-20% premium, no learning-curve benefit — bridge solution only',
      },
      {
        action: 'Target 10% US / 8% EU 5G market share within 12 months of launch',
        rationale: 'These targets are ambitious but achievable as a new market entrant with established brand presence and carrier relationships from 4G era',
        caseEvidence: 'Starting from 0% 5G share; 25% total share provides brand platform; carrier relationships established',
      },
    ],
    strategicLogic: 'The licensing-first strategy accepts a short-term trade-off (supplier dependency, licensing cost, no IP) for a decisive advantage (speed-to-market before the first-mover window closes). Parallel in-house R&D ensures this is a bridge, not a destination.',
    swotAlignment: 'Directly closes W1 (no 5G product). Captures O1 (5G market ready) and O5 (window still open). Mitigates T2 (competitor first-mover risk). Funded by S2 (4G cash engine).',
  },
  {
    wave: 'wave3',
    waveLabel: 'Wave 3: AI-Integrated Devices',
    directive: 'Invest Now, Small but Committed',
    colour: '#8B5CF6',
    what:
      'Commit a meaningful but bounded R&D budget to AI-integrated device development. Do not wait for 5G to become profitable first — the investment window closes.',
    actions: [
      {
        action: 'Allocate $150M to AI R&D over FY2025-2026',
        rationale: 'Approximately 3% of annual revenue over 2 years. Significant but manageable within cash constraints if 4G revenue is defended and investments are sequenced.',
        caseEvidence: '$4.8B annual revenue; $150M = ~3% of revenue over 2 years; $90M cash floor maintained through sequencing',
      },
      {
        action: 'Establish dedicated AI device development team (separate from 5G)',
        rationale: 'AI R&D requires different talent and focus than 5G product development. Separate teams prevent Wave 2 urgency from cannibalising Wave 3 investment.',
        caseEvidence: 'On-device AI requires specialised capabilities: AI chip design, health monitoring, photography AI, personalised assistants, language processing',
      },
      {
        action: 'Secure at least 2 strategic technology partnerships (chip design, AI software)',
        rationale: 'Partnership model shares risk, accelerates development, and provides access to specialised capabilities Mobilé does not yet have (AI chip design, AI training infrastructure)',
        caseEvidence: 'Apple, Samsung, Qualcomm all named as active competitors; partnership strategy provides capabilities gap-fill',
      },
      {
        action: 'Target working prototype by Q4 2027 for commercial launch in 2028',
        rationale: 'Aligns with projected AI-device commercial availability timeline. Prototype in 2027 positions for 2028 launch alongside or ahead of competitors.',
        caseEvidence: 'AI-device commercial availability projected 2027-28; 3-4 years from R&D commitment to revenue',
      },
      {
        action: 'Focus on on-device AI capabilities: photography, health monitoring, personalised assistants',
        rationale: 'These are the specific AI use cases identified in the case study as driving consumer demand. On-device (not cloud) processing is the differentiator.',
        caseEvidence: 'Case study names: real-time photography enhancement, health monitoring, personalised AI assistants, language processing — all without cloud dependency',
      },
    ],
    strategicLogic: 'Firms waiting until Wave 2 is profitable before investing in Wave 3 permanently forfeit technology leadership. $150M invested now, while 4G cash flow remains strong, is far more impactful than $500M invested later against entrenched AI-device leaders.',
    swotAlignment: 'Addresses W4 (R&D not directed at AI). Captures O2 (AI window open). Mitigates T4 (competitor AI activity). Enabled by S3 (existing R&D infrastructure).',
  },
];

export const marketPrioritisation = {
  description: 'Market-specific strategy differentiated by wave and local competitive dynamics',
  markets: [
    {
      market: 'USA',
      marketSize: '~$80B annual',
      growth: '14-20% p.a.',
      keyCharacteristic: 'Brand-conscious, premium-dominated, advertising-responsive',
      wave1Strategy: 'Maintain premium 4G positioning via Atlanta plant (learning-curve efficiency, home market brand advantage)',
      wave2Strategy: 'PRIMARY 5G launch market — premium positioning, leverage 70%+ urban 5G coverage, carrier partnerships, brand-conscious consumers',
      wave3Strategy: 'Premium AI-device launch target (2028) — established brand presence supports premium pricing for AI-integrated devices',
      productionSource: 'Atlanta (domestic — zero tariff, learning-curve advantage, $28/hr offset by premium pricing)',
      rationale: 'Home market with strongest brand advantage. 70%+ 5G infrastructure coverage and 38% consumer adoption make it the optimal first 5G launch market. Premium pricing absorbs higher Atlanta production costs.',
    },
    {
      market: 'Europe',
      marketSize: '~450M smartphone users',
      growth: '16-22% p.a.',
      keyCharacteristic: 'Feature-conscious, sustainability-aware, specification-driven premiums',
      wave1Strategy: 'Maintain via dual supply: Atlanta premium + Vietnam cost-competitive (EVFTA route)',
      wave2Strategy: 'SECONDARY 5G launch market — feature and sustainability differentiation, specification-rich positioning, leverage 55% 5G coverage',
      wave3Strategy: 'Feature-rich AI positioning — European premium on technology specifications and sustainability credentials',
      productionSource: 'Both plants: Atlanta for premium line, Vietnam via EVFTA for mid-range cost-competitive line',
      rationale: 'Europe rewards technology leadership and sustainability with genuine price premiums. EVFTA trade route enables cost-competitive production from Vietnam. Sustainability differentiation is a defensible moat.',
    },
    {
      market: 'Asia',
      marketSize: 'China alone ~1B users (largest by volume globally)',
      growth: '22-30% p.a. (highest)',
      keyCharacteristic: 'Bifurcated: premium 5G urban (China 65% 5G penetration) + mass-market 4G (India/SE Asia)',
      wave1Strategy: 'PRIMARY 4G defence market — Vietnam cost advantage ($6/hr), zero tariff, volume play in India/SE Asia',
      wave2Strategy: 'Selective premium 5G for urban China/Japan/Korea (65% 5G penetration in China validates demand)',
      wave3Strategy: 'Later-phase AI rollout — follows US/EU premium launch to capture volume at lower price points',
      productionSource: 'Vietnam (structural logistics advantage, zero tariff, $6/hr labour for cost-competitive production)',
      rationale: 'Highest growth market cannot be ignored. Vietnam plant provides structural cost advantage for mass-market 4G. Premium 5G opportunity in urban China/Korea. Bifurcated strategy serves both segments.',
    },
  ],
};

export const financialDiscipline = {
  title: 'Financial Discipline & Cash Constraint Management',
  cashFloorManagement: {
    rule: 'Maintain $120M minimum cash reserve — 30% safety buffer above the $90M absolute floor',
    rationale: 'The $90M floor is non-negotiable. A 30% buffer ($120M) provides margin for forecasting error and demand volatility without triggering emergency borrowing.',
    consequence: 'Emergency borrowing at 7.8% carries a 3% premium over normal 4.8% rate AND damages investor confidence through the TSR metric. Both costs compound — financial penalty plus reputational damage.',
  },
  fundingSources: [
    {
      source: '4G Cash Flow (primary)',
      detail: '~$4.8B annual revenue provides the base funding for all investments. 4G cost reduction (8% target via Vietnam expansion) maintains cash generation despite margin compression.',
    },
    {
      source: 'Long-Term Borrowing (supplementary)',
      detail: 'Available at 4.8% p.a. — acceptable for strategic investment if required. Cap at $200M maximum to maintain financial health and investor confidence.',
    },
    {
      source: 'Investment Sequencing (discipline)',
      detail: '5G licensing costs are front-loaded (immediate outlay, rapid return potential). AI R&D ramps gradually over 2 years ($150M total). Vietnam expansion costs are manageable ($13.2M for 4 lines). Sequencing prevents simultaneous cash drain.',
    },
  ],
  investmentSequencing: [
    {
      phase: 'Immediate (Q3 2025)',
      investments: [
        '5G licensing agreement and first-generation product development',
        'Vietnam capacity expansion commissioning (4 lines, $13.2M)',
        'AI R&D team formation and partnership scoping',
      ],
      cashImpact: 'Highest cash outlay period — 5G licensing is the largest single cost',
    },
    {
      phase: 'Near-Term (Q4 2025 - Q1 2026)',
      investments: [
        '5G product launch preparation (manufacturing setup, marketing)',
        'AI R&D partnership agreements signed',
        'In-house 5G R&D initiated for second-generation product',
      ],
      cashImpact: 'Moderate — 5G launch costs partially offset by continuing 4G revenue',
    },
    {
      phase: 'Medium-Term (Q2 2026 - Q4 2026)',
      investments: [
        '5G product launched in US and EU (Q2 2026) — begins generating revenue',
        'AI R&D in active development (ramping to full budget)',
        '4G cost reduction benefits materialising from Vietnam expansion',
      ],
      cashImpact: 'Cash position stabilises — 5G revenue begins, 4G costs reduced',
    },
    {
      phase: 'Horizon (2027-2028)',
      investments: [
        'Second-generation proprietary 5G product (in-house technology)',
        'AI-device prototype (Q4 2027) and commercial launch preparation',
        'Vietnam capacity fully operational (commissioned 2026, operational 2028)',
      ],
      cashImpact: 'Revenue diversified across 4G + 5G; AI investment approaching returns',
    },
  ],
};

export const riskManagement = {
  title: 'Key Risks Acknowledged and Mitigated',
  risks: [
    {
      risk: '5G Licensing Dependency',
      severity: 'medium',
      description: 'Licensing 5G technology from an established supplier creates reliance on a single technology provider (Porter\'s: increased supplier power)',
      mitigation: 'Parallel in-house 5G R&D for second-generation product (12-18 months post-launch) transitions to proprietary technology. Licensing is a bridge, not a destination.',
      residualRisk: 'If in-house R&D fails or is delayed, licensing dependency extends. Manage through milestone-based R&D governance.',
    },
    {
      risk: '4G Revenue Decline Faster Than Expected',
      severity: 'high',
      description: 'Post-DOJ price competition may erode 4G margins faster than modelled, reducing cash generation below the levels needed to fund Waves 2 and 3',
      mitigation: 'Aggressive cost reduction (8% target) via Vietnam expansion. $120M cash buffer (30% above floor). Long-term borrowing available at 4.8% as secondary funding source.',
      residualRisk: 'If 4G declines faster than cost reductions can offset, investment in AI R&D may need to be scaled back. 5G launch priority is preserved.',
    },
    {
      risk: 'Cash Floor Breach',
      severity: 'high',
      description: 'Simultaneous 5G + AI + capacity investment could breach the $90M floor, triggering emergency borrowing at 7.8% plus investor confidence damage',
      mitigation: '$120M buffer target. Investment sequencing (front-load 5G licensing, ramp AI gradually). Monthly cash flow monitoring with trigger points for investment pace adjustment.',
      residualRisk: 'Black swan events (unexpected market collapse, trade war escalation) could breach even the buffer. Contingency: defer AI R&D scale-up, not 5G launch.',
    },
    {
      risk: 'AI R&D May Not Yield Competitive Product',
      severity: 'medium',
      description: '$150M invested in AI R&D with no guarantee of competitive output against Apple/Samsung/Qualcomm who have larger R&D budgets and established AI expertise',
      mitigation: 'Partnership strategy shares risk with established technology providers. Milestone-based investment gates allow course correction. Focus on specific use cases (photography, health, assistants) rather than broad AI platform.',
      residualRisk: 'If AI product is uncompetitive, Mobilé remains a 4G+5G company without a Wave 3 play. Acceptable compared to not investing and permanently forfeiting the option.',
    },
    {
      risk: 'Vietnam Tariff Escalation',
      severity: 'medium',
      description: 'US-Vietnam trade tensions could impose ~$12+/unit tariffs on Vietnam→US exports and potentially affect other trade routes',
      mitigation: 'Vietnam strategy focuses on Asian and European markets (zero tariff, EVFTA respectively). Atlanta maintained as sole US production base. Dual-plant structure provides geographic risk diversification.',
      residualRisk: 'If tariffs extend to affect EVFTA route or Asian trade, Vietnam\'s strategic value diminishes. Atlanta capacity becomes even more critical.',
    },
  ],
};

export const tradeOffs = {
  title: 'Trade-Off Honesty — What This Strategy Accepts',
  description: 'Distinction-level analysis requires honest acknowledgment of what the strategy sacrifices and what uncertainties remain.',
  acceptedTradeOffs: [
    {
      tradeOff: 'We CANNOT invest in all three waves simultaneously at maximum scale',
      explanation: 'The $90M cash floor and finite cash generation (~$4.8B) mean investments must be sequenced and prioritised. 5G gets priority for speed; AI gets meaningful but bounded commitment; 4G gets cost reduction, not growth investment.',
      consequence: 'Each wave receives less investment than its theoretical maximum. This is the price of financial discipline.',
    },
    {
      tradeOff: '4G market share will decline — this is a deliberate choice, not a failure',
      explanation: 'Allowing 4G share to decline from 25% to ~22% frees resources for 5G launch and AI R&D. Over-defending every point of 4G share at the expense of 5G entry is the bigger risk.',
      consequence: 'Short-term revenue impact (~3pp share loss) offset by long-term positioning in higher-growth 5G and AI markets.',
    },
    {
      tradeOff: 'Licensing 5G is faster but creates short-term supplier dependency',
      explanation: 'Licensing sacrifices IP ownership and creates reliance on a technology provider. The alternative — in-house R&D only — is too slow and risks missing the first-mover window entirely.',
      consequence: 'Higher unit costs for first-gen 5G product, supplier dependency for 12-18 months until second-gen proprietary product is ready.',
    },
    {
      tradeOff: 'AI R&D investment has uncertain returns 3-4 years out',
      explanation: '$150M committed to a technology wave with no guaranteed commercial outcome. Apple/Samsung/Qualcomm have larger budgets and more AI expertise.',
      consequence: 'If AI-device market does not materialise as projected, or Mobilé\'s product is uncompetitive, the investment generates limited return. However, NOT investing guarantees permanent technology follower status.',
    },
    {
      tradeOff: 'The $90M floor means we cannot pursue all opportunities at their theoretical maximum',
      explanation: 'Every investment decision is constrained by the cash floor. Asian market growth (22-30%) could absorb unlimited investment; AI R&D could always use more; 5G launch could be more aggressive.',
      consequence: 'Strategy is "best achievable within constraints" not "optimal unconstrained." Financial discipline is the governing principle.',
    },
  ],
};

export const analyticalConsistency = {
  title: 'Analytical Consistency — How Task 4 Aligns with Tasks 1-3',
  alignments: [
    {
      task: 'Task 1: Vision',
      visionElement: '"Lead the global smartphone industry through the 4G-to-5G transition and into the AI-device era by 2028"',
      alignment: 'This strategy executes exactly that: 5G launch now (transition), AI R&D commitment (AI era), 4G management (financial resilience). The vision is not aspirational — it is the strategy.',
    },
    {
      task: 'Task 1: Mission',
      visionElement: '"Defending 4G, launching 5G, investing in AI — from a single, finite resource base"',
      alignment: 'All three mission elements have corresponding wave action plans. The "single, finite resource base" constraint is directly addressed through financial discipline and investment sequencing.',
    },
    {
      task: 'Task 1: SMART Objectives',
      visionElement: 'SO1 (22% 4G share), SO2 (Q2 2026 5G launch, 10%/8% share), SO3 ($150M AI R&D), SO4 ($120M cash buffer), SO5 (4 Vietnam lines)',
      alignment: 'Every SMART objective appears as a specific action in the Task 4 wave action plans. The numbers match: same targets, same timelines, same measures.',
    },
    {
      task: 'Task 2: Internal Analysis',
      visionElement: 'VRIO + Value Chain findings',
      alignment: 'Strategy leverages S1 (dual-plant for market-specific production), addresses R&D misalignment (W4), and uses Atlanta learning curve for premium positioning.',
    },
    {
      task: 'Task 2: External Analysis',
      visionElement: 'PESTLE + Porter\'s + Strategic Group + CSF findings',
      alignment: 'Strategy responds to DOJ impact (cost focus), captures 5G opportunity (licensing for speed), positions in target strategic group (A→C trajectory), and follows CSF priority ranking.',
    },
    {
      task: 'Task 3: SWOT',
      visionElement: 'All S/W/O/T points',
      alignment: 'Leverages: S1 (dual-plant), S2 (cash engine), S3 (R&D base). Addresses: W1 (5G launch), W4 (R&D redirect). Captures: O1 (5G market), O2 (AI window), O3 (Asian growth). Mitigates: T1 (cost reduction), T2 (speed-to-market), T4 (AI investment), T5 (cash sequencing).',
    },
  ],
  contradictionCheck:
    'No contradictions identified between Task 4 recommendation and Tasks 1-3 analysis. The recommendation follows logically from the SWOT synthesis, implements the SMART objectives, and is constrained by the financial discipline established in the goal hierarchy.',
};

export const executiveBrief = {
  title: 'Executive Decision Brief',
  forBoard:
    'Mobilé Inc. faces a defining strategic moment. The DOJ intervention has ended the stable oligopoly that generated $4.8B in annual revenue. Three technology waves demand simultaneous attention: defending 4G revenue (our only cash source), launching 5G (where we have zero product despite 70%+ market readiness), and investing in AI (where Apple/Samsung/Qualcomm are already active).',
  decision:
    'We recommend licensing 5G technology for a rapid market launch by Q2 2026, targeting premium US and European segments, while committing $150M to AI R&D for a 2027 prototype. 4G operations shift to cost-reduction mode (8% target via Vietnam expansion) accepting managed share decline from 25% to 22%. Financial discipline is maintained through a $120M cash buffer (30% above the $90M floor) and investment sequencing.',
  whyThisWorks:
    'Speed to 5G market is our #1 critical success factor. Licensing gets us there in 6-9 months. Parallel in-house R&D ensures we are not permanently dependent on the licensor. AI investment secures our position in the 2027-28 technology wave before the window closes. 4G cash management funds everything without breaching our financial constraints.',
  whatItRequires:
    'Board approval for 5G licensing agreement. $150M AI R&D budget over FY2025-2026. 4 additional Vietnam production lines ($13.2M). Acceptance of managed 4G share decline. Monthly cash monitoring against $120M trigger level.',
};

export const task4References = [
  {
    key: 'barney1991',
    citation: 'Barney, J.B. (1991) \'Firm Resources and Sustained Competitive Advantage\', Journal of Management, 17(1), pp. 99-120.',
    usage: 'VRIO-based assessment of licensing vs in-house R&D trade-off',
  },
  {
    key: 'porter1980',
    citation: 'Porter, M.E. (1980) Competitive Strategy: Techniques for Analyzing Industries and Competitors. New York: Free Press.',
    usage: 'Five Forces implications for supplier power in licensing decision',
  },
  {
    key: 'porter1985',
    citation: 'Porter, M.E. (1985) Competitive Advantage: Creating and Sustaining Superior Performance. New York: Free Press.',
    usage: 'Value chain reconfiguration rationale',
  },
  {
    key: 'baghai1999',
    citation: 'Baghai, M., Coley, S. and White, D. (1999) The Alchemy of Growth: Practical Insights for Building the Enduring Enterprise. New York: Perseus Books.',
    usage: 'McKinsey Three Horizons framework for wave prioritisation',
  },
  {
    key: 'johnson2017',
    citation: 'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
    usage: 'Strategic group analysis and CSF prioritisation',
  },
  {
    key: 'ghemawat2007',
    citation: 'Ghemawat, P. (2007) Redefining Global Strategy: Crossing Borders in a World Where Differences Still Matter. Boston: Harvard Business School Press.',
    usage: 'Market-specific strategy differentiation framework',
  },
  {
    key: 'gsma2024',
    citation: 'GSMA (2024) The Mobile Economy 2024. Available at: https://www.gsma.com/mobileeconomy/ (Accessed: April 2026).',
    usage: '5G market readiness and adoption data supporting launch timing',
  },
  {
    key: 'hill2021',
    citation: 'Hill, C.W.L. (2021) International Business: Competing in the Global Marketplace. 13th edn. New York: McGraw-Hill.',
    usage: 'International market prioritisation framework',
  },
];
