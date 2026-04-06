/**
 * Task 3: SWOT Synthesis — Mobile Inc.
 * 15 marks | LO2 + LO3
 *
 * CRITICAL RULE: Every point traces to Task 2 framework findings.
 * No new information introduced. Three tests per point:
 * 1. Evidenced — traces to specific Task 2 framework finding
 * 2. Case-specific — would not apply to generic smartphone company
 * 3. Strategically interpreted — carries explicit implication for Mobilé's choices
 *
 * Wave colour coding: 4G=blue (#3B82F6), 5G=green (#10B981), AI=purple (#8B5CF6)
 */

export const strengths = [
  {
    id: 'S1',
    title: 'Dual-Plant Manufacturing with Cost Differentiation',
    wave: 'wave1',
    waveLabel: '4G + 5G',
    waveColor: '#3B82F6',
    evidence:
      'Atlanta: 12 production lines, $2.9M/line, $28/hr labour with deep learning-curve efficiencies accumulated over years of operation. Vietnam: $3.3M/line, $6/hr labour, zero tariff to Asian market, EVFTA access to Europe.',
    sourceFrameworks: [
      'VRIO: Atlanta learning curve = temporary competitive advantage; rivals can invest ($2.9M/line) but cannot immediately replicate years of production optimisation',
      'Value Chain: Operations configured for market-optimised production — Atlanta serves premium US/EU, Vietnam serves cost-competitive Asia/EU',
    ],
    strategicImplication:
      'Enables market-differentiated production strategy: premium from Atlanta (leveraging learning-curve cost-quality edge) and cost-competitive from Vietnam (leveraging $6/hr labour for Asian mass-market). This dual structure is the manufacturing foundation for competing across both premium 5G segments and cost-sensitive 4G markets simultaneously.',
    connectionToOT: 'S1 → O3 (Asian market growth): Vietnam cost advantage enables capture of 22-30% p.a. Asian growth. S1 → O4 (EVFTA): Vietnam→Europe trade route expands addressable market.',
  },
  {
    id: 'S2',
    title: 'Established 4G Cash Generation Engine ($4.8B Annual Revenue)',
    wave: 'wave1',
    waveLabel: '4G',
    waveColor: '#3B82F6',
    evidence:
      '~$4.8 billion annual revenue from mature 4G LTE business. Strong legacy profitability from cartel era providing current cash generation capability.',
    sourceFrameworks: [
      'VRIO: Valuable resource that funds all strategic investment, though declining as post-DOJ competition compresses margins — competitive parity, not advantage',
      'Value Chain: Established operations, production, and distribution for 4G products across all three markets',
    ],
    strategicImplication:
      'The financial fuel for Waves 2 (5G launch) and Wave 3 (AI R&D). Must be protected from premature erosion, but cannot be over-invested in at the expense of future technology transitions. The cash engine is a depleting asset — its value is measured by what it funds, not what it earns.',
    connectionToOT: 'S2 → T1 (post-DOJ margin compression): The strength is being actively eroded by the threat. Cost efficiency in 4G production is the defence mechanism.',
  },
  {
    id: 'S3',
    title: 'Existing R&D Infrastructure and Global Management Experience',
    wave: 'cross-wave',
    waveLabel: 'All Waves',
    waveColor: '#8B5CF6',
    evidence:
      'R&D base exists with accumulated smartphone development knowledge. Multi-market management team with experience coordinating operations across US ($80B market, 88% penetration), Europe (450M users), and Asia (China alone ~1B smartphone users, plus India and SE Asia).',
    sourceFrameworks: [
      'VRIO: R&D infrastructure = potential (unrealised) advantage if redirected to 5G/AI. Multi-market management = temporary advantage through execution quality.',
      'Value Chain: R&D is the most critical support activity; management coordinates complex multi-market logistics and production allocation',
    ],
    strategicImplication:
      'Mobilé is not starting from zero in either R&D or global coordination. The existing foundation can be redirected toward 5G development and AI research faster than a new entrant could build from scratch. The management capability to coordinate a three-wave, three-market strategy simultaneously is a complex, experience-based capability that rivals have in principle but may not execute as well.',
    connectionToOT: 'S3 → O2 (AI-device window): Existing R&D infrastructure can be redirected to seize the AI-device opportunity IF commitment is made now.',
  },
  {
    id: 'S4',
    title: 'JIT Production and Operational Efficiency',
    wave: 'wave1',
    waveLabel: '4G',
    waveColor: '#3B82F6',
    evidence:
      'Established Just-in-Time production system: no finished goods stockpiling, production matches demand forecasts precisely. Eliminates inventory holding costs.',
    sourceFrameworks: [
      'Value Chain: Inbound logistics — JIT eliminates stockpiling costs and reduces capital tied up in unsold inventory',
      'VRIO: Competitive parity (industry standard) but operationally efficient for stable 4G demand',
    ],
    strategicImplication:
      'Cost-efficient for predictable 4G demand patterns, but introduces asymmetric risk for uncertain 5G launch volumes: overproduction incurs 5-10% cost penalty, while underproduction permanently loses sales that cannot be recovered. JIT is a strength for Wave 1 but becomes a risk management challenge for Wave 2.',
    connectionToOT: 'S4 is a double-edged capability: strength in stable 4G markets, vulnerability when entering uncertain 5G markets with no demand history.',
  },
];

export const weaknesses = [
  {
    id: 'W1',
    title: 'No 5G Handset Product — The Critical Competitive Gap',
    wave: 'wave2',
    waveLabel: '5G',
    waveColor: '#10B981',
    evidence:
      'Mobilé has NOT yet launched a 5G handset despite: 5G Sub-6GHz coverage exceeding 70% of US urban areas, 38% of US consumers already owning 5G devices, 28% of EU consumers owning 5G devices, carrier subsidies actively accelerating adoption.',
    sourceFrameworks: [
      'CSF: Speed to 5G market ranked as the #1 Critical Success Factor — the most time-sensitive gap with the largest competitive exposure',
      'VRIO: Complete absence of 5G capability — not even at competitive parity',
      'Value Chain: Marketing function has no 5G product to sell in the fastest-growing market category',
    ],
    strategicImplication:
      'THE defining weakness. While competitors race to establish premium 5G brand positioning, Mobilé has nothing to offer. Every quarter of delay cedes first-mover pricing power and brand loyalty advantages that later entrants find difficult to erode. This is not a gap that can be closed gradually — speed of response determines whether Mobilé captures premium positioning or enters as a discount follower.',
    connectionToOT: 'W1 → O1 (5G infrastructure ready): The gap between this weakness and the available opportunity is THE strategic crisis. Also W1 → T2 (competitors capturing first-mover): The weakness directly enables the threat.',
  },
  {
    id: 'W2',
    title: 'Total Revenue Dependency on Depleting 4G Technology',
    wave: 'wave1',
    waveLabel: '4G',
    waveColor: '#3B82F6',
    evidence:
      '100% of $4.8B revenue comes from 4G LTE handset range. Zero revenue diversification across technology waves. Post-DOJ margin compression is actively reducing the value of this single revenue source.',
    sourceFrameworks: [
      'VRIO: 4G cash generation rated as competitive parity and declining — not a differentiating resource. All four firms have equivalent 4G businesses.',
      'Value Chain: Single-technology operations across the entire value chain — every activity optimised for 4G only',
      'CSF: Cash generation maximisation ranked as #3 CSF — critical but not the primary objective',
    ],
    strategicImplication:
      'All three technology waves depend on a single, declining revenue source. Post-DOJ margin compression directly threatens funding for Waves 2 (5G launch investment) and 3 (AI R&D). This creates a vicious cycle: the competitive pressure that demands 5G and AI investment simultaneously erodes the cash base that funds those investments.',
    connectionToOT: 'W2 → T1 (post-DOJ pricing): Revenue dependency on a source under active competitive attack. The weakness amplifies the threat.',
  },
  {
    id: 'W3',
    title: 'Vietnam Plant Still Building Maturity and Efficiency',
    wave: 'wave1',
    waveLabel: '4G + 5G',
    waveColor: '#3B82F6',
    evidence:
      'Vietnam facility is growing but not yet at Atlanta\'s learning-curve efficiency levels. Cost advantage ($6/hr labour) is location-based — Samsung, Intel, and LG all operate major facilities in Vietnam with access to the same labour pool. New capacity takes 2 years from investment to operational.',
    sourceFrameworks: [
      'VRIO: Vietnam cost advantage rated as competitive parity — location-based, accessible to all competitors, not a proprietary capability',
      'Value Chain: Operations — Vietnam immature relative to Atlanta; building efficiency but not yet at full potential',
    ],
    strategicImplication:
      'Cannot yet fully exploit Vietnam\'s theoretical cost advantage for Asian market dominance. Capacity expansion committed now takes 2 years to become operational — arriving at projected peak demand in 2028. The immaturity is not permanent but creates a temporal vulnerability: Mobilé cannot scale Asian operations instantly when demand accelerates.',
    connectionToOT: 'W3 → T3 (tariff risk): Vietnam plant already faces trade tension uncertainty; immaturity compounds the vulnerability. W3 → O3 (Asian growth): Cannot fully capture the highest-growth opportunity without expanded Vietnam capacity.',
  },
  {
    id: 'W4',
    title: 'R&D Not Yet Directed Toward 5G or AI',
    wave: 'wave2',
    waveLabel: '5G + AI',
    waveColor: '#10B981',
    evidence:
      'Existing R&D infrastructure is not applied to next-generation technology. R&D is currently optimised entirely for 4G product improvement while Apple, Samsung, and Qualcomm are actively developing AI-integrated devices with on-device AI chips.',
    sourceFrameworks: [
      'VRIO: R&D infrastructure rated as "potential (unrealised) advantage" — capability exists but organisation has not captured its value for next-gen technology',
      'CSF: AI R&D commitment ranked as #2 Critical Success Factor; technology decision for 5G (build vs license) is unresolved',
      'Value Chain: Technology development identified as THE most critical support activity with irreversible long-term implications',
    ],
    strategicImplication:
      'The R&D capability exists in principle but is generating zero 5G or AI outputs while competitors advance. Must be urgently redirected: license 5G technology for immediate market entry while beginning in-house R&D for proprietary second-gen products, plus dedicated AI R&D for Wave 3. The redirection decision is the most consequential strategic choice in the case.',
    connectionToOT: 'W4 → T4 (competitors active in AI R&D): Mobilé\'s R&D underutilisation while Apple/Samsung/Qualcomm advance compounds the competitive risk. W4 → O2 (AI-device window): The window is open but requires R&D commitment to exploit.',
  },
];

export const opportunities = [
  {
    id: 'O1',
    title: '5G Infrastructure Ready — Market Waiting for Mobilé\'s Product',
    wave: 'wave2',
    waveLabel: '5G',
    waveColor: '#10B981',
    evidence:
      '5G Sub-6GHz network coverage exceeds 70% of US urban areas and major European cities. 38% of US consumers and 28% of EU consumers already own 5G devices. Carrier subsidies actively accelerating adoption. AI-powered use cases (cloud gaming, AR, translation, remote work) driving demand beyond base forecasts.',
    sourceFrameworks: [
      'PESTLE: Technological — infrastructure is built and operational; device availability is the only bottleneck',
      'Porter\'s Five Forces: High growth market attractiveness; low new entrant threat means opportunity is among existing players',
    ],
    strategicImplication:
      'The 5G opportunity is real, immediate, and proven by consumer adoption data — not speculative. The infrastructure investment has been made by carriers; consumers are buying; competitors are launching. Mobilé\'s absence is a product gap, not a market gap. Closing this gap through rapid 5G launch (via licensing) captures first-mover pricing power and brand loyalty in the premium segments of the US and European markets.',
    connectionToSW: 'O1 ← W1 (no 5G product): The gap between this opportunity and Mobilé\'s weakness is THE strategic crisis that must be resolved. O1 ← S1 (dual-plant manufacturing): Manufacturing infrastructure can be leveraged for 5G production.',
  },
  {
    id: 'O2',
    title: 'AI-Device Market Window Open for Early Movers (2025-2028)',
    wave: 'wave3',
    waveLabel: 'AI',
    waveColor: '#8B5CF6',
    evidence:
      'On-device AI capabilities (photography enhancement, health monitoring, personalised AI assistants, language processing) projected commercial availability 2027-2028. Apple, Samsung, and Qualcomm actively developing but no firm has shipped a consumer AI-integrated device yet.',
    sourceFrameworks: [
      'PESTLE: Technological — AI on-device chips emerging; commercial timeline 2027-28',
      'CSF: AI R&D commitment ranked #2 Critical Success Factor; investment window open now but will close',
      'Strategic Group: "Technology Leader" position available for firms investing in both 5G and AI',
    ],
    strategicImplication:
      'Early R&D commitment now secures position in the next technology wave. The window for entering the AI-device race as a potential leader (not follower) is time-limited: firms waiting until Wave 2 (5G) is profitable before investing in Wave 3 permanently forfeit technology leadership. $150M committed to AI R&D over FY2025-2026 is the minimum viable investment.',
    connectionToSW: 'O2 ← S3 (existing R&D infrastructure): R&D base can be redirected toward AI if commitment is made now. O2 ← W4 (R&D not directed at AI): Current R&D misdirection is the obstacle to capturing this opportunity.',
  },
  {
    id: 'O3',
    title: 'Asian Market Explosive Growth (22-30% p.a.)',
    wave: 'wave1',
    waveLabel: '4G + 5G',
    waveColor: '#3B82F6',
    evidence:
      'World\'s largest volume market (~1B users). China alone has ~1B smartphone users with 65% 5G penetration. India and SE Asia: mass-market, price-sensitive, predominantly 4G. Market growth 22-30% p.a. — highest of all three markets.',
    sourceFrameworks: [
      'PESTLE: Economic/Social — highest growth rate, bifurcated demand structure',
      'Porter\'s Five Forces: Market attractiveness validated by growth rates and volume',
    ],
    strategicImplication:
      'Cannot be ignored without forfeiting the largest growth opportunity globally. Requires bifurcated strategy: premium 5G for urban China/Japan/Korea (where 65% 5G penetration validates demand) plus cost-competitive 4G for India/SE Asia (where price sensitivity dominates). Vietnam plant provides structural logistics advantage at zero tariff.',
    connectionToSW: 'O3 ← S1 (dual-plant): Vietnam cost advantage enables competitive positioning in the mass-market segment. O3 ← W3 (Vietnam immaturity): Full capture requires expanded and mature Vietnam operations.',
  },
  {
    id: 'O4',
    title: 'EVFTA Trade Route and European Sustainability Differentiation',
    wave: 'wave1',
    waveLabel: '4G + 5G',
    waveColor: '#3B82F6',
    evidence:
      'EU-Vietnam Free Trade Agreement enables Vietnam→Europe exports at favourable tariff terms. EU consumers value sustainability credentials. EU repairability and e-waste regulations create compliance requirements that can be converted into competitive differentiation.',
    sourceFrameworks: [
      'PESTLE: Legal — EVFTA trade agreement; Environmental — EU sustainability pressure',
      'Porter\'s Five Forces: Buyer power mitigation through sustainability differentiation in European market',
      'Value Chain: After-sales service — EU repairability as differentiation vector',
    ],
    strategicImplication:
      'Dual advantage: cost-efficient production route (Vietnam→EU via EVFTA) plus differentiation through sustainability positioning. Mobilé can serve the European market with cost-competitive production from Vietnam while positioning as the sustainability-forward smartphone brand — a combination that competitors would struggle to match without similar EVFTA-positioned manufacturing.',
    connectionToSW: 'O4 ← S1 (dual-plant): Vietnam plant + EVFTA provides the production route; Atlanta provides premium alternative.',
  },
  {
    id: 'O5',
    title: 'No Competitor Has Permanently Captured 5G First-Mover Position',
    wave: 'wave2',
    waveLabel: '5G',
    waveColor: '#10B981',
    evidence:
      'All four firms currently cluster in the same strategic group ("Global 4G Incumbents") with 25% share each. Strategic group positions are still fluid — divergence is imminent but no firm has yet established permanent 5G brand leadership.',
    sourceFrameworks: [
      'Strategic Group Analysis: All firms in same cluster; the migration to distinct groups (5G First-Movers, 4G Defenders, Technology Leaders, Fast Followers) has not yet crystallised',
    ],
    strategicImplication:
      'The window for capturing 5G brand leadership is still open — but closing rapidly. Once a competitor establishes itself in the "5G First-Mover" strategic group, mobility barriers (time advantage, brand positioning, carrier relationships) make catching up expensive and slow. Mobilé must act within 6-9 months (via licensing) to capture this position before it crystallises.',
    connectionToSW: 'O5 ← W1 (no 5G product): Opportunity exists precisely because no one has captured it permanently — but W1 means Mobilé cannot capture it without urgent action.',
  },
];

export const threats = [
  {
    id: 'T1',
    title: 'Post-DOJ Price Competition Compressing Margins',
    wave: 'wave1',
    waveLabel: '4G (All Waves Affected)',
    waveColor: '#3B82F6',
    evidence:
      'DOJ dismantled tacit pricing arrangements in early 2025. Four equal firms now in open competition for the first time. Rivals cutting prices aggressively across all markets, intensifying price-based competition.',
    sourceFrameworks: [
      'PESTLE: Political/Legal — the DOJ intervention is the single most impactful macro force',
      'Porter\'s Five Forces: Competitive rivalry rated HIGH (5/5) and intensifying; four equally-sized firms with high exit barriers',
    ],
    strategicImplication:
      '4G margins declining reduces the cash available to fund Waves 2 (5G) and 3 (AI). Cost efficiency becomes survival-critical — particularly in price-sensitive Asian markets. The post-DOJ environment means profitability cannot be restored through pricing; only cost reduction and technology differentiation (5G/AI) can rebuild margins.',
    connectionToSW: 'T1 ← S2 (4G cash engine): The cash engine that funds everything is being eroded by this threat. T1 ← W2 (4G revenue dependency): Total dependency on a revenue source under attack amplifies the danger.',
  },
  {
    id: 'T2',
    title: 'Competitors May Capture 5G First-Mover Position Before Mobilé',
    wave: 'wave2',
    waveLabel: '5G',
    waveColor: '#10B981',
    evidence:
      'All three rival firms racing to launch 5G handsets. First firm to establish premium 5G positioning gains brand loyalty advantages that are difficult for later entrants to erode. Strategic group mobility barriers crystallise once positions are established.',
    sourceFrameworks: [
      'Strategic Group Analysis: Group A ("5G First-Movers") has high mobility barriers once established — time advantage, brand positioning, carrier relationships',
      'CSF: Speed to 5G market ranked as #1 Critical Success Factor',
    ],
    strategicImplication:
      'If a competitor establishes 5G brand leadership before Mobilé launches, catching up is exponentially harder and more expensive. The first-mover window is not permanent — it will close within the next 6-12 months as competitors launch products and carrier partnerships are formed. This is an existential threat to Mobilé\'s ability to compete in the premium smartphone market beyond 2026.',
    connectionToSW: 'T2 ← W1 (no 5G product): Mobilé\'s product absence enables this threat. Also T2 vs O5 (window still open): The threat and opportunity are two sides of the same coin — act now or lose permanently.',
  },
  {
    id: 'T3',
    title: 'Vietnam Plant Tariff and Trade Risk',
    wave: 'wave1',
    waveLabel: '4G + 5G',
    waveColor: '#3B82F6',
    evidence:
      'US-Vietnam trade tensions create tariff uncertainty of ~$12+/unit on any Vietnam→USA exports. This blocks Vietnam as a US supply source and could expand to affect other trade routes.',
    sourceFrameworks: [
      'PESTLE: Political — US-Vietnam trade tensions create direct financial risk',
      'Value Chain: Outbound logistics — tariff risk on Vietnam→US route reinforces Atlanta as sole viable US production base',
    ],
    strategicImplication:
      'Constrains Vietnam\'s strategic value to Asian and European markets (via EVFTA) only. Reinforces the importance of maintaining Atlanta manufacturing capacity for US market supply. Production strategy must account for geopolitical risk — cannot assume stable trade relations between the US and Vietnam.',
    connectionToSW: 'T3 ← W3 (Vietnam immaturity): The trade risk compounds the operational immaturity risk. T3 vs S1 (dual-plant): The dual-plant structure partially mitigates this threat by providing Atlanta as US alternative.',
  },
  {
    id: 'T4',
    title: 'Apple/Samsung/Qualcomm Already Active in AI R&D',
    wave: 'wave3',
    waveLabel: 'AI',
    waveColor: '#8B5CF6',
    evidence:
      'Three named real-world competitors (Apple, Samsung, Qualcomm) actively developing AI-integrated devices with on-device AI chips. Commercial availability projected for 2027-2028. All three have larger R&D budgets and established AI expertise.',
    sourceFrameworks: [
      'PESTLE: Technological — AI on-device development already underway by major competitors',
      'CSF: AI R&D commitment ranked #2 Critical Success Factor; delay = permanent follower status',
    ],
    strategicImplication:
      'Mobilé risks being a permanent technology follower in the AI-device wave if R&D investment is delayed. The competitors named in the case study are not Mobilé\'s direct simulation rivals but represent the technology frontier that defines competitive expectations. Mobilé must invest in AI R&D now — even before Wave 2 (5G) generates revenue — or permanently forfeit the ability to compete as a technology leader.',
    connectionToSW: 'T4 ← W4 (R&D not directed at AI): Mobilé\'s R&D underutilisation while competitors advance creates a widening capability gap. T4 vs O2 (AI window): The window is open but these competitors are working to close it.',
  },
  {
    id: 'T5',
    title: 'Simultaneous Investment Demands Risk Breaching $90M Cash Floor',
    wave: 'cross-wave',
    waveLabel: 'All Waves',
    waveColor: '#8B5CF6',
    evidence:
      '5G launch investment + AI R&D commitment + Vietnam capacity expansion + 4G defence spending all compete for the same finite resource pool. Emergency borrowing at 7.8% carries both a 3% financial penalty above the normal 4.8% rate AND damaging investor signal via TSR metric.',
    sourceFrameworks: [
      'PESTLE: Economic — $90M cash floor is the binding financial constraint',
      'CSF: Financial discipline ranked #4 CSF; three-wave resource balancing ranked as a critical cross-wave gap',
    ],
    strategicImplication:
      'The cash constraint is real and binding. Over-ambitious simultaneous investment across all three waves could trigger emergency borrowing — both a financial cost (3% rate premium) and a reputational catastrophe (investor confidence damage through TSR). Investment must be sequenced: front-load 5G licensing costs (immediate return potential), ramp AI R&D gradually, fund Vietnam expansion from ongoing 4G cash flow. The $90M floor means Mobilé cannot pursue all opportunities at their theoretical maximum simultaneously.',
    connectionToSW: 'T5 is the cross-cutting constraint that governs how S2 (cash engine) can be deployed across W1/O1 (5G launch), O2 (AI R&D), and O3 (Asian expansion).',
  },
];

export const internalExternalConnections = [
  {
    connection: 'S1 → O3',
    internal: 'S1: Dual-plant manufacturing with cost differentiation',
    external: 'O3: Asian market explosive growth (22-30% p.a.)',
    insight: 'Vietnam\'s $6/hr labour cost advantage enables competitive pricing in the world\'s fastest-growing smartphone market. The manufacturing strength directly enables capture of the growth opportunity.',
    strategicAction: 'Expand Vietnam capacity by 4 lines ($13.2M) to serve Asian demand at cost-competitive prices',
  },
  {
    connection: 'S2 → T1',
    internal: 'S2: 4G cash generation engine ($4.8B)',
    external: 'T1: Post-DOJ price competition compressing margins',
    insight: 'The cash engine that funds all three waves is being actively eroded by the competitive shift that demands those investments. A vicious cycle: competition demands investment; competition erodes funding.',
    strategicAction: 'Aggressive cost reduction in 4G production (particularly via Vietnam expansion) to maintain cash generation despite margin compression',
  },
  {
    connection: 'W1 → O1',
    internal: 'W1: No 5G handset product',
    external: 'O1: 5G infrastructure ready, market waiting',
    insight: 'THE strategic crisis: a massive, proven market opportunity exists (70%+ US urban 5G coverage, 38% consumer adoption) and Mobilé has zero product to address it. The gap between weakness and opportunity is the most urgent problem to solve.',
    strategicAction: 'License 5G technology for immediate launch (6-9 months) to close the product gap before the first-mover window closes',
  },
  {
    connection: 'W2 → T1',
    internal: 'W2: Total 4G revenue dependency',
    external: 'T1: Post-DOJ margin compression',
    insight: 'Internal dependency on a single declining revenue source, compounded by external competitive pressure on that source. Revenue diversification through 5G launch is not just growth — it is survival.',
    strategicAction: 'Accelerate 5G revenue generation as diversification away from sole 4G dependency',
  },
  {
    connection: 'W4 → T4',
    internal: 'W4: R&D not directed at 5G or AI',
    external: 'T4: Apple/Samsung/Qualcomm active in AI R&D',
    insight: 'Mobilé\'s R&D is producing zero next-gen outputs while named competitors are actively investing. The capability gap widens every month. R&D redirection is the most time-sensitive internal decision.',
    strategicAction: 'Redirect R&D immediately: dual-track 5G development (license + in-house) plus dedicated AI R&D team',
  },
  {
    connection: 'S3 → O2',
    internal: 'S3: Existing R&D infrastructure',
    external: 'O2: AI-device market window open',
    insight: 'Mobilé has an R&D foundation that can be redirected toward the AI opportunity — it is not starting from zero. If commitment is made now, existing capabilities provide a faster ramp than competitors without smartphone R&D heritage.',
    strategicAction: 'Allocate $150M to AI R&D over FY2025-2026 with dedicated team and 2 strategic technology partnerships',
  },
];

export const swotSynthesisInsight = {
  primaryImplication:
    'The SWOT reveals a company with sufficient internal capabilities that are fundamentally misaligned with external reality. Mobilé has manufacturing (S1), cash (S2), R&D infrastructure (S3), and operational efficiency (S4) — but all are configured for Wave 1 (4G) while the external environment demands Wave 2 (5G) and Wave 3 (AI) responses.',
  dominantStrategicMove:
    'Close the 5G gap immediately (W1 → O1) via licensing for speed, while committing to AI R&D (W4 → O2) to secure future technology leadership, funded by defending but not over-investing in the 4G cash engine (S2 → managing T1). All investments must be sequenced within the $90M cash floor constraint (T5).',
  taskAlignmentNote:
    'This SWOT directly informs the Task 4 recommendation: "Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition." Every strategic choice in Task 4 traces to a specific SWOT finding documented above.',
};

export const task3References = [
  {
    key: 'barney1991',
    citation: 'Barney, J.B. (1991) \'Firm Resources and Sustained Competitive Advantage\', Journal of Management, 17(1), pp. 99-120.',
    usage: 'VRIO framework feeding Strengths and Weaknesses',
  },
  {
    key: 'porter1985',
    citation: 'Porter, M.E. (1985) Competitive Advantage: Creating and Sustaining Superior Performance. New York: Free Press.',
    usage: 'Value Chain feeding Strengths and Weaknesses',
  },
  {
    key: 'porter1980',
    citation: 'Porter, M.E. (1980) Competitive Strategy: Techniques for Analyzing Industries and Competitors. New York: Free Press.',
    usage: 'Five Forces feeding Opportunities and Threats',
  },
  {
    key: 'johnson2017',
    citation: 'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
    usage: 'PESTLE, Strategic Group, CSF frameworks feeding all SWOT quadrants',
  },
];
