/**
 * Task 2: Internal & External Analysis — Mobile Inc.
 * 30 marks | LO2 — HIGHEST WEIGHTED TASK
 *
 * Internal: VRIO/RBV + Value Chain
 * External: PESTLE + Porter's Five Forces + Strategic Group + CSF
 *
 * Every framework includes:
 * - Justification ("Why this framework for Mobilé Inc.")
 * - Case-specific evidence (no generic template-filling)
 * - Three-wave connections
 * - SWOT feed (what each framework contributes to Task 3)
 */

// ============================================================
// INTERNAL ANALYSIS
// ============================================================

export const vrioAnalysis = {
  frameworkJustification: {
    title: 'Why VRIO/RBV for Mobilé Inc.',
    reasoning:
      'The post-DOJ shift from tacit price coordination to open competition demands understanding which of Mobilé\'s resources sustain advantage versus which are merely at parity. All four firms start from identical 25% market share in all three markets — VRIO reveals what Mobilé can leverage to differentiate as the competitive equilibrium breaks apart.',
    uniqueInsight:
      'VRIO exposes a critical finding that other frameworks miss: most of Mobilé\'s resources represent competitive parity, not advantage. The company has NO rare, inimitable resource in the 5G or AI space — its only temporal advantages are operational (Atlanta learning curve, management experience). This reframes strategy from "leverage strengths" to "build new capabilities fast."',
    reference: 'Barney, J.B. (1991) \'Firm Resources and Sustained Competitive Advantage\', Journal of Management, 17(1), pp. 99-120.',
  },
  resources: [
    {
      resource: 'Atlanta Manufacturing (12 lines, years of learning-curve efficiencies)',
      valuable: true,
      valuableEvidence: 'Efficient premium production at $2.9M/line with deep operational learning; serves US domestic + European export markets',
      rare: 'partially',
      rareEvidence: 'Rivals have similar capacity, but accumulated learning-curve efficiencies from years of Atlanta operations are not instantly replicable',
      costlyToImitate: true,
      imitateEvidence: 'Learning-curve knowledge is experience-based and tacit — rivals can invest in new capacity ($2.9M/line) but cannot immediately replicate years of production optimisation',
      organised: true,
      organisedEvidence: 'Currently serving US and EU markets efficiently with established logistics and workforce',
      competitiveImplication: 'Temporary Competitive Advantage',
      implicationDetail: 'Atlanta\'s learning curve creates a cost-quality edge for premium products that erodes as rivals invest, but provides a 2-3 year window of operational superiority',
      waveConnection: 'Wave 1 (4G premium production) and Wave 2 (potential 5G manufacturing base)',
      swotFeed: 'Strength S1',
    },
    {
      resource: 'Vietnam Plant ($6/hr labour, zero Asian tariff, EVFTA European access)',
      valuable: true,
      valuableEvidence: 'Lowest labour cost at $6/hr (vs Atlanta\'s $28/hr); zero tariff to Asian market; EVFTA enables European export route',
      rare: false,
      rareEvidence: 'Samsung, Intel, and LG all operate major facilities in Vietnam — the location advantage is accessible to all competitors',
      costlyToImitate: false,
      imitateEvidence: 'Any competitor can invest in Vietnam production at $3.3M/line; labour pool is available to all',
      organised: 'partially',
      organisedEvidence: 'Still growing facility, not yet at Atlanta\'s learning-curve efficiency; capacity expansion underway but 2-year lead time to operational',
      competitiveImplication: 'Competitive Parity',
      implicationDetail: 'Cost advantage is location-based (accessible to all), not proprietary. However, first-mover in Vietnam expansion can secure scale advantages before rivals.',
      waveConnection: 'Wave 1 (cost-competitive 4G for Asia) and Wave 2 (potential 5G production site for Asian premium market)',
      swotFeed: 'Strength S1 (dual-plant structure), Weakness W3 (immature)',
    },
    {
      resource: '4G Cash Generation Engine (~$4.8B annual revenue)',
      valuable: true,
      valuableEvidence: 'Entire current revenue base; funds all strategic investment across Waves 2 and 3',
      rare: false,
      rareEvidence: 'All four firms have equivalent 4G businesses generating similar revenue from the cartel era',
      costlyToImitate: false,
      imitateEvidence: 'All competitors have equivalent 4G businesses — this is not a differentiating resource',
      organised: true,
      organisedEvidence: 'Efficiently extracted through established production and distribution, but margins compressing post-DOJ',
      competitiveImplication: 'Competitive Parity (and declining)',
      implicationDetail: 'A necessary but not differentiating resource. Its value is as a funding mechanism for Waves 2 and 3, not as a source of competitive advantage. Post-DOJ margin compression means this resource is actively depleting.',
      waveConnection: 'Wave 1 (the cash engine itself) funding Waves 2 and 3',
      swotFeed: 'Strength S2 (cash generation), Weakness W2 (total dependency)',
    },
    {
      resource: 'Brand Presence Across Three Global Markets',
      valuable: true,
      valuableEvidence: 'Established brand in US (home market), Europe (export), and Asia (growing presence) — leverageable for 5G launch',
      rare: false,
      rareEvidence: 'All four firms have global presence in the same three markets with equal 25% share',
      costlyToImitate: false,
      imitateEvidence: 'Brand building is achievable for competitors — no firm has differentiated brand identity on 5G yet',
      organised: true,
      organisedEvidence: 'Global distribution and marketing infrastructure in place across all markets',
      competitiveImplication: 'Competitive Parity',
      implicationDetail: 'The brand is a platform, not an advantage. No firm has yet established 5G brand leadership — the first to launch credibly can convert parity into advantage.',
      waveConnection: 'All waves — brand is the launch platform for 5G and AI products',
      swotFeed: 'Strength S3',
    },
    {
      resource: 'Existing R&D Infrastructure',
      valuable: true,
      valuableEvidence: 'Foundation for 5G development and AI research — Mobilé is not starting from zero',
      rare: 'partially',
      rareEvidence: 'Depends on specialisation depth; currently undifferentiated but has accumulated knowledge base',
      costlyToImitate: true,
      imitateEvidence: 'Accumulated R&D knowledge represents years of investment; tacit know-how in smartphone development is experience-based',
      organised: 'unknown',
      organisedEvidence: 'NOT yet applied to 5G or AI — the capability exists but is currently directed entirely at 4G optimisation',
      competitiveImplication: 'Potential (Unrealised) Advantage',
      implicationDetail: 'The R&D base could become a source of competitive advantage IF rapidly redirected toward 5G and AI. Currently, it is an underutilised asset — the potential is there but the organisation has not captured it.',
      waveConnection: 'Wave 2 (5G development) and Wave 3 (AI R&D) — the critical redirection decision',
      swotFeed: 'Strength S3 (foundation), Weakness W4 (not redirected)',
    },
    {
      resource: 'Multi-Market Management Experience',
      valuable: true,
      valuableEvidence: 'Navigating three diverse markets (US premium, EU feature/sustainability, Asia bifurcated) with different consumer profiles and competitive dynamics',
      rare: false,
      rareEvidence: 'All four firms manage across the same three global markets',
      costlyToImitate: 'partially',
      imitateEvidence: 'Experience-based tacit knowledge in multi-market coordination; the quality of execution could differentiate',
      organised: true,
      organisedEvidence: 'Currently managing 4G operations effectively across all three markets; applicable to three-wave coordination',
      competitiveImplication: 'Temporary Competitive Advantage',
      implicationDetail: 'The ability to coordinate a three-wave, three-market strategy simultaneously is a complex capability. Execution quality — not just having the capability — will determine whether this translates to advantage.',
      waveConnection: 'Cross-wave — critical for managing the simultaneous demands of all three waves across all three markets',
      swotFeed: 'Strength S3',
    },
    {
      resource: 'JIT Production Capability',
      valuable: true,
      valuableEvidence: 'Eliminates stockpiling costs; production matches demand forecasts precisely',
      rare: false,
      rareEvidence: 'Industry standard practice — all competitors use similar systems',
      costlyToImitate: false,
      imitateEvidence: 'JIT is well-understood manufacturing methodology; no proprietary system',
      organised: true,
      organisedEvidence: 'Established and operational, but carries risk in volatile demand scenarios (overproduction: 5-10% cost penalty; underproduction: permanently lost sales)',
      competitiveImplication: 'Competitive Parity',
      implicationDetail: 'Standard practice that does not differentiate. However, JIT accuracy becomes critical when launching 5G with uncertain demand — forecasting error carries asymmetric penalties.',
      waveConnection: 'Wave 1 (stable 4G demand) — strength; Wave 2 (uncertain 5G demand) — potential vulnerability',
      swotFeed: 'Strength S4 (for 4G), risk factor for Wave 2',
    },
  ],
  keyFindings: {
    advantageSources: [
      'Atlanta learning-curve efficiencies — temporary advantage for premium production (2-3 year window before rivals replicate)',
      'Existing R&D infrastructure — potential advantage IF rapidly redirected toward 5G and AI development',
      'Multi-market management experience — execution quality in three-wave coordination could differentiate',
    ],
    strategicVulnerabilities: [
      'No 5G capability whatsoever — the most critical gap; zero product in a market where 38% of US consumers already own 5G devices',
      '100% revenue dependency on depleting 4G technology — single-point failure risk as post-DOJ margins compress',
      'Vietnam plant immaturity — cost advantage is location-based (Samsung, Intel, LG also present), not proprietary capability-based',
    ],
    centralInsight:
      'VRIO reveals that most of Mobilé\'s resources represent competitive parity, not advantage. The four firms start equal, and Mobilé\'s only temporal advantages are operational. The strategic imperative is to build new capabilities (5G product, AI R&D) while the operational advantages still provide a window.',
  },
  methodologicalNote:
    'This VRIO analysis uses graduated assessment (partially, unknown) rather than the traditional binary Yes/No for the Rare, Costly to Imitate, and Organised dimensions. This approach better captures Mobilé\'s situation where several resources occupy intermediate positions — for example, Atlanta\'s learning curve is partially rare (rivals have capacity but not accumulated efficiencies) and R&D organisation is genuinely unknown (capability exists but has not been tested on 5G/AI). Binary classification would obscure these strategically important nuances and reduce the analytical precision needed for resource allocation decisions (Barney, 1991; Teece, 2007).',
};

export const valueChainAnalysis = {
  frameworkJustification: {
    title: 'Why Value Chain for Mobilé Inc.',
    reasoning:
      'The case provides detailed operational data — dual manufacturing plants (Atlanta and Vietnam), JIT production system, production cost differentials ($28/hr vs $6/hr), trade routes (EVFTA), tariff risks (~$12+/unit), and contract manufacturing options (15-20% premium). Value Chain analysis reveals WHERE in Mobilé\'s operations differential value is created and WHERE operational bottlenecks constrain the three-wave strategy.',
    uniqueInsight:
      'Value Chain exposes a critical misalignment: Mobilé\'s operations are optimised entirely for Wave 1 (4G). The marketing function has no 5G product to sell, R&D is not directed at next-gen technology, and production lines would need retooling for 5G handsets. The value chain needs reconfiguration, not just optimisation.',
    reference: 'Porter, M.E. (1985) Competitive Advantage: Creating and Sustaining Superior Performance. New York: Free Press.',
  },
  primaryActivities: [
    {
      activity: 'Inbound Logistics',
      currentState: 'JIT production system — no finished goods stockpiling; production matches demand forecasts precisely',
      strength: 'Eliminates inventory holding costs; reduces waste and capital tied up in unsold stock',
      vulnerability: 'Overproduction incurs 5-10% cost penalty; underproduction results in permanently lost sales that cannot be recovered in subsequent periods',
      waveImplication: 'JIT is well-suited for predictable 4G demand patterns but creates significant risk for uncertain 5G launch volumes where consumer response is unknown',
      strategicInsight: 'Accurate demand forecasting becomes the critical inbound logistics capability as Mobilé enters new technology categories with no historical demand data',
      swotFeed: 'S4 (JIT efficiency for 4G), risk factor for Wave 2 launch',
    },
    {
      activity: 'Operations (Manufacturing)',
      currentState: 'Dual-plant structure: Atlanta (12 lines, $2.9M/line, $28/hr, deep learning curve) and Vietnam (growing, $3.3M/line, $6/hr, building efficiency)',
      strength: 'Cost-optimised production per market: Atlanta serves US/EU (premium), Vietnam serves Asia/EU via EVFTA (cost-competitive). Dual structure provides geographic diversification.',
      vulnerability: 'Vietnam still immature and building efficiency; new production capacity requires 2-year lead time from investment to operational. Current lines optimised for 4G — retooling or new lines needed for 5G handsets.',
      waveImplication: 'Wave 1: Atlanta premium + Vietnam mass-market is well-configured. Wave 2: Production capability for 5G handsets does not yet exist. Wave 3: AI-device manufacturing requirements are unknown and not planned.',
      strategicInsight: 'The dual-plant structure is a genuine operational advantage for global market coverage, but it is currently configured exclusively for 4G. Manufacturing must be reconfigured in parallel with product development.',
      swotFeed: 'S1 (dual-plant advantage), W3 (Vietnam immaturity)',
    },
    {
      activity: 'Outbound Logistics',
      currentState: 'Atlanta serves US domestic directly; exports to Europe. Vietnam serves Asian market at zero tariff; exports to EU via EVFTA.',
      strength: 'Dual-plant logistics structure provides multiple trade routes: Atlanta→US (direct), Atlanta→EU (export), Vietnam→Asia (zero tariff), Vietnam→EU (EVFTA)',
      vulnerability: 'US-Vietnam trade tensions create ~$12+/unit tariff risk on any Vietnam→USA exports. This blocks Vietnam as a US supply source.',
      waveImplication: 'Tariff risk reinforces Atlanta\'s role as the sole viable US production base. Vietnam\'s value is for Asian and European markets only. EVFTA route is strategically valuable for cost-competitive European supply.',
      strategicInsight: 'The dual-plant logistics network is resilient for current markets but vulnerable to geopolitical disruption on the Vietnam→US route. Production allocation must account for trade policy risk.',
      swotFeed: 'O4 (EVFTA route), T3 (tariff risk)',
    },
    {
      activity: 'Marketing & Sales',
      currentState: 'Established presence in all three markets: US (brand-conscious, advertising-responsive), EU (feature/sustainability positioning), Asia (bifurcated: premium urban + mass-market)',
      strength: 'Market-specific positioning capability — understands that US requires brand leadership, EU demands features and sustainability, Asia needs both premium and cost-competitive offerings',
      vulnerability: 'No 5G product to market — the marketing function is currently unable to address the fastest-growing market segment. All marketing capability is directed at a depleting 4G product range.',
      waveImplication: 'Marketing capability exists and is differentiated by market, but without a 5G product, it is like having a sales force with nothing to sell in the most critical category.',
      strategicInsight: 'The marketing bottleneck is not capability — it is product availability. Closing the 5G product gap immediately activates dormant marketing value across all three markets.',
      swotFeed: 'W1 (no 5G product to market)',
    },
    {
      activity: 'After-Sales Service',
      currentState: 'Product support across three markets (implied); EU repairability regulations creating new requirements',
      strength: 'Established service infrastructure supporting global customer base',
      vulnerability: 'EU repairability and e-waste regulations add compliance burden but also create differentiation opportunity',
      waveImplication: 'Wave 2/3: AI-integrated devices will require entirely new service capabilities — AI support, software updates, health data management, privacy compliance',
      strategicInsight: 'After-sales is an emerging differentiation vector in Europe. Sustainability-aligned service design could command premiums and build loyalty in the EU market.',
      swotFeed: 'O4 (EU sustainability differentiation)',
    },
  ],
  supportActivities: [
    {
      activity: 'Technology Development (R&D)',
      currentState: 'Existing R&D infrastructure, but NOT yet applied to 5G or AI-devices. Apple, Samsung, Qualcomm are all actively developing AI-integrated devices.',
      criticalDecision: 'In-house 5G R&D (builds proprietary IP, slower, lower long-term cost) vs licensing (immediate market entry, no IP ownership, costly, supplier dependency)',
      strength: 'Existing R&D base provides a foundation — Mobilé is not starting from zero',
      vulnerability: 'Currently behind competitors in applying R&D to next-generation technology. Every month of R&D delay widens the competitive gap.',
      waveImplication: 'R&D is THE most critical support activity. Decisions made now on 5G technology sourcing and AI R&D commitment irreversibly determine Mobilé\'s competitive position for 5+ years.',
      strategicInsight: 'The recommended approach is a dual-track: license 5G for speed-to-market while beginning in-house R&D for second-gen proprietary products, plus dedicated AI R&D for Wave 3.',
      swotFeed: 'S3 (R&D foundation), W4 (R&D misdirection)',
    },
    {
      activity: 'Human Resource Management',
      currentState: 'Atlanta: high-cost ($28/hr) but highly experienced workforce. Vietnam: low-cost ($6/hr) but still building expertise.',
      strength: 'Multi-market management team with experience coordinating operations across US, EU, and Asia',
      vulnerability: 'Managing three technology waves requires diverse R&D talent — 4G optimisation, 5G development, AI research — which may not exist in current workforce',
      waveImplication: 'Wave 2 and Wave 3 both require new talent acquisition: 5G engineers for immediate product development, AI/ML specialists for the 2027 horizon',
      strategicInsight: 'HR must shift from a 4G-focused cost structure to a multi-wave talent portfolio. AI talent acquisition is particularly competitive given Apple/Samsung/Qualcomm recruitment.',
    },
    {
      activity: 'Procurement',
      currentState: 'Established 4G component sourcing; new supplier relationships needed for 5G chipsets, antennas, modems',
      strength: 'Established supply chain for 4G production across both plants',
      vulnerability: 'If licensing 5G technology, the licensor becomes a critical single supplier (Porter\'s: supplier power). AI chip sourcing will be an emerging bottleneck.',
      waveImplication: 'Procurement complexity increases dramatically with each new technology wave — new components, new suppliers, new dependencies',
      strategicInsight: 'The 5G licensing vs in-house decision has procurement implications: licensing creates supplier dependency; in-house development requires component-level sourcing capability.',
    },
    {
      activity: 'Firm Infrastructure',
      currentState: 'Corporate governance supporting three-market operations; $90M cash floor constraint requiring sophisticated capital allocation',
      strength: 'Proven ability to manage global operations across three diverse markets',
      vulnerability: 'Strategic planning infrastructure must evolve from single-wave (4G) to three-wave management — a qualitatively different challenge',
      waveImplication: 'The $90M cash floor, simultaneous investment demands, and 2-year capacity lead times require a planning infrastructure that can model trade-offs across three technology horizons simultaneously',
      strategicInsight: 'Firm infrastructure is the invisible constraint — the quality of strategic planning and capital allocation directly determines whether the three-wave strategy succeeds or collapses under its own complexity.',
    },
  ],
  crossCuttingInsight:
    'The Value Chain reveals that Mobilé\'s operations are configured entirely for Wave 1 (4G). Every primary activity — from JIT logistics to manufacturing to marketing — is optimised for a mature, predictable, single-technology product range. The transition to a three-wave company requires reconfiguring the entire value chain, not just adding a new product line. R&D must redirect, production must retool, marketing must reposition, and logistics must adapt to new component supply chains. This is not an incremental change — it is a value chain transformation.',
};

// ============================================================
// EXTERNAL ANALYSIS
// ============================================================

export const pestleAnalysis = {
  frameworkJustification: {
    title: 'Why PESTLE for Mobilé Inc.',
    reasoning:
      'The DOJ antitrust intervention (political/legal), US-Vietnam trade tensions (political/economic), 5G infrastructure rollout (technological), AI development timelines (technological), EU sustainability regulations (environmental/legal), and EVFTA (legal/economic) are all actively reshaping Mobilé\'s competitive landscape across multiple PESTLE dimensions simultaneously. This is not a static macro-environment — it is one undergoing structural transformation.',
    uniqueInsight:
      'PESTLE reveals that the most impactful macro forces are concentrated in the political/legal and technological categories, and they interact: the DOJ intervention (political) compresses margins that fund the 5G response to technological change. Understanding these interactions — not just listing factors — is the analytical contribution.',
    reference: 'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
  },
  factors: [
    {
      category: 'Political',
      items: [
        {
          factor: 'DOJ Antitrust Intervention (Early 2025)',
          impact: 'high',
          description: 'Dismantled tacit price coordination among all four firms, forcing open competition for the first time. This is the single most impactful political factor — it redefined the competitive rules of the entire industry.',
          mobileImplication: 'Margin compression reduces cash available for Wave 2 (5G) and Wave 3 (AI) investments. Revenue defence becomes survival-critical.',
          waveAffected: ['wave1', 'wave2', 'wave3'],
          swotFeed: 'T1 (margin compression)',
        },
        {
          factor: 'US-Vietnam Trade Tensions',
          impact: 'medium',
          description: 'Potential tariffs of ~$12+/unit on Vietnam→USA exports threaten the viability of Vietnam as a US supply source.',
          mobileImplication: 'Reinforces Atlanta as the sole viable US production plant. Vietnam\'s strategic value is limited to Asian and European markets (via EVFTA).',
          waveAffected: ['wave1', 'wave2'],
          swotFeed: 'T3 (tariff risk)',
        },
        {
          factor: 'Carrier Subsidies for 5G Adoption',
          impact: 'medium',
          description: 'Government and carrier initiatives accelerating consumer transition to 5G, increasing urgency of Mobilé\'s product gap.',
          mobileImplication: 'Consumer adoption being accelerated beyond organic demand — makes Mobilé\'s absence from the 5G market even more costly.',
          waveAffected: ['wave2'],
          swotFeed: 'O1 (5G infrastructure ready)',
        },
        {
          factor: 'Government-Funded 6G Research',
          impact: 'low',
          description: 'Active globally but beyond 2030 horizon — not within Mobilé\'s planning window.',
          mobileImplication: 'Foundational R&D in 5G and AI now could position Mobilé for 6G era, but not a direct planning factor.',
          waveAffected: ['wave3'],
          swotFeed: 'N/A (beyond planning horizon)',
        },
      ],
    },
    {
      category: 'Economic',
      items: [
        {
          factor: '$90M Cash Reserve Floor',
          impact: 'high',
          description: 'Hard constraint on total simultaneous investment capacity. Cannot be breached without triggering emergency borrowing (7.8% vs 4.8% normal) plus investor confidence damage.',
          mobileImplication: 'This is THE binding financial constraint. All investment decisions must be modelled against this floor. Emergency borrowing is both a financial cost and a reputational catastrophe via TSR impact.',
          waveAffected: ['wave1', 'wave2', 'wave3'],
          swotFeed: 'T5 (cash floor breach risk)',
        },
        {
          factor: 'Borrowing Rate Structure (4.8% normal / 7.8% emergency)',
          impact: 'medium',
          description: 'The 3% premium on emergency borrowing plus investor signal damage makes breaching the cash floor doubly penalising.',
          mobileImplication: 'Long-term borrowing at 4.8% is an acceptable financing tool; emergency borrowing at 7.8% must be avoided at all costs.',
          waveAffected: ['wave1', 'wave2', 'wave3'],
          swotFeed: 'T5',
        },
        {
          factor: 'Asian Market Growth (22-30% p.a.)',
          impact: 'high',
          description: 'Highest growth rate of all three markets — the world\'s largest volume market (China alone has ~1B smartphone users, plus India and SE Asia), bifurcated between premium 5G (urban China/Korea) and mass-market 4G (India/SE Asia).',
          mobileImplication: 'Cannot be ignored without forfeiting the largest growth opportunity. Vietnam plant provides structural logistics advantage. Must serve both premium and mass segments simultaneously.',
          waveAffected: ['wave1', 'wave2'],
          swotFeed: 'O3 (Asian growth)',
        },
        {
          factor: 'Post-DOJ Margin Compression',
          impact: 'high',
          description: 'Open competition drives price-cutting across all markets. 4G profitability declining, reducing cash generation for Waves 2 and 3.',
          mobileImplication: 'The cash engine that funds everything is being eroded by the same competitive shift that demands 5G and AI investment. A vicious cycle unless 4G costs are aggressively managed.',
          waveAffected: ['wave1'],
          swotFeed: 'T1 (margin compression)',
        },
      ],
    },
    {
      category: 'Social',
      items: [
        {
          factor: '38% US / 28% EU Consumers Already Own 5G Devices',
          impact: 'high',
          description: 'Demonstrates that consumer demand for 5G is not speculative — it is a proven, existing market that Mobilé is currently not serving.',
          mobileImplication: 'Mobilé is missing an existing market, not a hypothetical one. Every month without a 5G product is permanently lost revenue and brand-positioning opportunity.',
          waveAffected: ['wave2'],
          swotFeed: 'O1 (5G demand proven)',
        },
        {
          factor: 'AI-Powered Use Cases Accelerating Demand',
          impact: 'medium',
          description: 'Cloud gaming, AR navigation, real-time translation, seamless remote work — these AI-powered applications are driving 5G adoption beyond base forecasts.',
          mobileImplication: 'Consumer appetite for AI-enhanced smartphone features validates both Wave 2 (5G as delivery platform) and Wave 3 (AI-integrated devices) investment.',
          waveAffected: ['wave2', 'wave3'],
          swotFeed: 'O2 (AI-device window)',
        },
        {
          factor: 'European Sustainability Consciousness',
          impact: 'medium',
          description: 'EU consumers increasingly factor sustainability, repairability, and environmental credentials into smartphone purchase decisions.',
          mobileImplication: 'Creates differentiation opportunity in European market — sustainability-aligned product design and after-sales service can command premiums.',
          waveAffected: ['wave1', 'wave2'],
          swotFeed: 'O4 (sustainability differentiation)',
        },
        {
          factor: 'Asian Market Bifurcation',
          impact: 'medium',
          description: 'Urban China/Japan/Korea demand premium 5G; India/SE Asia demand cost-competitive 4G. Both segments are growing simultaneously.',
          mobileImplication: 'Must serve both with different products and price points — Vietnam plant for cost-competitive 4G, premium 5G for urban premium markets.',
          waveAffected: ['wave1', 'wave2'],
          swotFeed: 'O3 (Asian growth)',
        },
      ],
    },
    {
      category: 'Technological',
      items: [
        {
          factor: '5G Sub-6GHz Coverage Exceeding 70% of US Urban Areas',
          impact: 'high',
          description: 'The 5G infrastructure is built and operational — Mobilé\'s product gap, not technology availability, is the bottleneck.',
          mobileImplication: 'The market is ready and waiting. Mobilé\'s failure to launch a 5G handset is entirely a strategic/execution failure, not a technology constraint.',
          waveAffected: ['wave2'],
          swotFeed: 'O1 (infrastructure ready)',
        },
        {
          factor: 'AI On-Device Chips Emerging (Apple, Samsung, Qualcomm Active)',
          impact: 'high',
          description: 'On-device AI for photography, health monitoring, personalised assistants, language processing. Commercial availability projected 2027-28.',
          mobileImplication: 'R&D decisions made NOW determine whether Mobilé leads or follows in the AI-device wave. The window is open but closing — these named competitors are already investing.',
          waveAffected: ['wave3'],
          swotFeed: 'O2 (AI window), T4 (competitor AI activity)',
        },
        {
          factor: '5G Technology Choice: In-House vs Licensing',
          impact: 'high',
          description: 'In-house R&D builds proprietary IP (slower, lower long-term cost) vs licensing enables immediate market entry (faster, no IP, supplier dependency).',
          mobileImplication: 'This is the defining technology decision for Wave 2. Recommended: license for speed, build IP in parallel for second-generation products.',
          waveAffected: ['wave2'],
          swotFeed: 'W1 (no 5G capability — must choose path)',
        },
        {
          factor: '2-Year Lead Time for New Production Capacity',
          impact: 'medium',
          description: 'New production lines take 2 years from investment decision to becoming operational.',
          mobileImplication: 'Capacity committed now arrives in 2028 — precisely when demand is projected to peak. This decision is irreversibly time-sensitive.',
          waveAffected: ['wave1', 'wave2', 'wave3'],
          swotFeed: 'Cross-wave constraint on production planning',
        },
      ],
    },
    {
      category: 'Legal',
      items: [
        {
          factor: 'DOJ Antitrust Enforcement',
          impact: 'high',
          description: 'Permanent new competitive reality — no return to tacit price coordination. Legal precedent ensures sustained enforcement.',
          mobileImplication: 'Mobilé must compete on capability and cost, not collusion. This is structural, not temporary.',
          waveAffected: ['wave1', 'wave2', 'wave3'],
          swotFeed: 'T1 (permanent open competition)',
        },
        {
          factor: 'EU Repairability and E-Waste Regulations',
          impact: 'medium',
          description: 'EU mandating repairability standards and e-waste reduction — affects product design and lifecycle management.',
          mobileImplication: 'Compliance cost, but also differentiation opportunity: Mobilé can position as the sustainability-forward brand in Europe, commanding premium pricing.',
          waveAffected: ['wave1', 'wave2'],
          swotFeed: 'O4 (sustainability differentiation)',
        },
        {
          factor: 'EU-Vietnam Free Trade Agreement (EVFTA)',
          impact: 'medium',
          description: 'Enables Vietnam→Europe exports at favourable tariff terms, creating a cost-efficient production route to the European market.',
          mobileImplication: 'Vietnam plant can serve both Asian AND European markets at cost advantage. This makes Vietnam expansion strategically valuable beyond Asian market alone.',
          waveAffected: ['wave1', 'wave2'],
          swotFeed: 'O4 (EVFTA trade route)',
        },
        {
          factor: 'IP Protection for 5G/AI Technology',
          impact: 'medium',
          description: 'In-house R&D generates protectable intellectual property; licensing does not. IP portfolio is a long-term competitive asset.',
          mobileImplication: 'Reinforces the case for parallel in-house R&D alongside 5G licensing — the licensing path sacrifices long-term IP accumulation for short-term speed.',
          waveAffected: ['wave2', 'wave3'],
          swotFeed: 'Informs 5G technology sourcing decision',
        },
      ],
    },
    {
      category: 'Environmental',
      items: [
        {
          factor: 'EU Sustainability and E-Waste Pressure',
          impact: 'medium',
          description: 'Product design must factor repairability and recyclability, particularly for the European market.',
          mobileImplication: 'Compliance is mandatory; differentiation through sustainability leadership is optional but potentially profitable. Embedding sustainability into product design creates a competitive moat in the EU.',
          waveAffected: ['wave1', 'wave2'],
          swotFeed: 'O4 (sustainability differentiation)',
        },
        {
          factor: 'ESG Investor Expectations',
          impact: 'low',
          description: 'Sustainability credentials may influence investor confidence and TSR metric.',
          mobileImplication: 'Not a primary driver but contributes to overall investor perception alongside financial performance.',
          waveAffected: ['wave1', 'wave2', 'wave3'],
          swotFeed: 'Minor factor in TSR management',
        },
        {
          factor: 'Manufacturing Environmental Footprint',
          impact: 'low',
          description: 'Vietnam and Atlanta operations must meet increasing environmental standards.',
          mobileImplication: 'Baseline compliance requirement; not a differentiating factor unless proactively exceeded.',
          waveAffected: ['wave1', 'wave2', 'wave3'],
          swotFeed: 'N/A (baseline compliance)',
        },
      ],
    },
  ],
  crossCuttingInsight:
    'PESTLE reveals that the most impactful macro forces — DOJ intervention (political/legal), 5G infrastructure readiness (technological), and the $90M cash constraint (economic) — interact in a reinforcing cycle: the DOJ compresses margins that fund the 5G response to technological change, while the cash floor limits how aggressively Mobilé can respond. The macro-environment is not hostile but is urgently demanding: the opportunities (5G demand, AI window, Asian growth) have time limits, while the threats (margin compression, competitor advance) compound with delay.',
};

export const portersFiveForces = {
  frameworkJustification: {
    title: 'Why Porter\'s Five Forces for Mobilé Inc.',
    reasoning:
      'The DOJ intervention fundamentally altered competitive rivalry — the central force in Porter\'s model — by converting a comfortable oligopoly into aggressive open competition among four equally-sized firms. Understanding how all five forces interact in this post-DOJ landscape reveals the structural constraints and opportunities shaping Mobilé\'s strategic choices.',
    uniqueInsight:
      'Porter\'s reveals that competitive rivalry is overwhelmingly the dominant force. With four equal firms in direct conflict, low new entrant threat, and limited substitution risk, the strategic battlefield is entirely among the incumbents. The mechanism for improving structural position is not defending against new forces but differentiating from equally capable rivals — specifically through 5G first-mover advantage.',
    reference: 'Porter, M.E. (1980) Competitive Strategy: Techniques for Analyzing Industries and Competitors. New York: Free Press.',
  },
  forces: [
    {
      force: 'Competitive Rivalry',
      intensity: 'High',
      intensityScore: 5,
      factors: [
        { factor: 'Number of competitors', detail: '4 equally-sized firms in oligopolistic structure — no market leader, no follower' },
        { factor: 'Market share distribution', detail: '25% each in all three markets — identical starting positions now breaking apart' },
        { factor: 'Post-DOJ dynamics', detail: 'Tacit coordination ended — open price war with all four firms simultaneously racing on 5G, AI, and pricing' },
        { factor: 'Exit barriers', detail: 'Very high — massive sunk costs in manufacturing plants ($2.9-3.3M per line), R&D infrastructure, global distribution' },
        { factor: 'Product differentiation', detail: 'Moderate — feature differentiation exists but price pressure rising; 5G launch is the key differentiator' },
        { factor: 'Strategic stakes', detail: 'All firms racing simultaneously to launch 5G, invest in AI, cut prices, and secure capacity — zero-sum for first-mover position' },
      ],
      mobileImplication: 'Rivalry is the dominant force. Four equal competitors in direct conflict across all markets and technology waves. No firm has pricing power — the race is for differentiation through 5G first-mover advantage and AI technology leadership.',
      swotFeed: 'T1 (intensifying rivalry), T2 (5G first-mover race)',
    },
    {
      force: 'Threat of New Entrants',
      intensity: 'Low',
      intensityScore: 1,
      factors: [
        { factor: 'Capital requirements', detail: 'Very high — manufacturing lines ($2.9-3.3M each), R&D investment, global distribution infrastructure' },
        { factor: 'Economies of scale', detail: 'Critical — JIT production, learning curves, global supply chains all favour incumbents' },
        { factor: 'Brand loyalty', detail: 'Established across three markets — new entrant would need massive marketing investment' },
        { factor: 'Technology barriers', detail: '5G and AI R&D require significant investment, expertise, and time that new entrants lack' },
        { factor: 'Regulatory barriers', detail: 'Antitrust scrutiny, trade agreements (EVFTA), EU regulations create compliance complexity' },
      ],
      mobileImplication: 'Low new entrant threat means the competitive dynamics are exclusively among the existing four firms. Mobilé can focus entirely on outmanoeuvring current rivals rather than defending against newcomers.',
      swotFeed: 'O (competitive focus on existing rivals only)',
    },
    {
      force: 'Bargaining Power of Buyers',
      intensity: 'Moderate-High',
      intensityScore: 3.5,
      factors: [
        { factor: 'Switching costs', detail: 'Low — smartphone brand switching is easy for consumers' },
        { factor: 'Price sensitivity', detail: 'Rising post-DOJ as prices diverge for the first time and consumers gain choice' },
        { factor: 'Information availability', detail: 'High — consumers compare features, prices, and reviews instantly online' },
        { factor: 'Brand loyalty', detail: 'Exists but being tested by 5G differentiation opportunity — first 5G brand may capture lasting loyalty' },
        { factor: 'Carrier influence', detail: 'Carriers have bargaining power through subsidy programmes and device recommendations' },
      ],
      mobileImplication: 'Post-DOJ price transparency gives consumers more choice power. The firm that establishes 5G brand leadership first can partially mitigate buyer power through loyalty and premium differentiation.',
      swotFeed: 'T1 (buyer power increasing pricing pressure)',
    },
    {
      force: 'Bargaining Power of Suppliers',
      intensity: 'Moderate',
      intensityScore: 3,
      factors: [
        { factor: 'Component suppliers', detail: 'Multiple sources for most 4G components, but AI chips are an emerging bottleneck' },
        { factor: '5G technology licensing', detail: 'If Mobilé licenses rather than develops in-house, the licensor gains significant power as a critical single supplier' },
        { factor: 'Labour markets', detail: 'US ($28/hr) constrained and expensive; Vietnam ($6/hr) competitive but shared with Samsung, Intel, LG' },
        { factor: 'Contract manufacturers', detail: 'Available at 15-20% premium — gives flexibility but at cost and without learning-curve benefits' },
      ],
      mobileImplication: 'The 5G licensing decision directly affects supplier power: licensing creates dependency on a single technology provider; in-house R&D avoids this but is slower. AI chip suppliers may become powerful gatekeepers for Wave 3.',
      swotFeed: 'Risk factor for 5G licensing path',
    },
    {
      force: 'Threat of Substitutes',
      intensity: 'Low-Moderate',
      intensityScore: 2,
      factors: [
        { factor: 'Direct substitutes', detail: 'No real substitute for smartphones in 2025 — embedded in consumer and business life' },
        { factor: 'Technology substitution', detail: '4G→5G→AI is an upgrade path, not substitution. The threat is being left behind in the upgrade cycle, not replacement by a different product.' },
        { factor: 'Emerging alternatives', detail: 'Wearables, AR glasses emerging but not yet replacing smartphones; more likely complementary' },
        { factor: 'Functional overlap', detail: 'Tablets, laptops overlap on some functions but don\'t replace mobile for core use cases' },
      ],
      mobileImplication: 'Substitution threat is primarily within the smartphone category (4G→5G→AI). The risk is not that smartphones become obsolete but that Mobilé\'s 4G-only range becomes obsolete while competitors offer 5G and AI.',
      swotFeed: 'Contextual — reinforces urgency of technology transition',
    },
  ],
  overallAssessment: {
    industryAttractiveness: 'Moderate — high growth potential but intense rivalry post-DOJ. The industry is structurally attractive (high barriers, low substitution) but competitively brutal among incumbents.',
    keyStructuralShift: 'The DOJ intervention converted a comfortable, highly profitable oligopoly into aggressive open competition. This single event reshaped all five forces simultaneously — increasing rivalry, empowering buyers, and raising the stakes of every strategic decision.',
    criticalForce: 'Competitive rivalry dominates all strategic decisions. With four equal firms in direct conflict, the primary mechanism for improving structural position is differentiation through 5G first-mover advantage and subsequent AI technology leadership.',
    windowOfOpportunity: '5G brand positioning is the key mechanism for breaking out of the 25%-each equilibrium. The first firm to establish credible 5G leadership gains loyalty advantages and pricing power that improve its structural position.',
  },
};

export const strategicGroupAnalysis = {
  frameworkJustification: {
    title: 'Why Strategic Group Analysis for Mobilé Inc.',
    reasoning:
      'All four firms currently occupy identical strategic positions (25% share, same markets, same 4G-only product range). The DOJ intervention removes the coordination that kept them together. Strategic Group analysis reveals how firms will likely diverge based on different 5G/AI investment choices — and where Mobilé should position itself as groups separate.',
    uniqueInsight:
      'Strategic Group analysis reveals the most important finding of the external analysis: strategic group positions are still fluid. No firm has permanently captured the 5G first-mover position. But once groups diverge, mobility barriers make repositioning expensive and slow. The window for choosing which group to occupy is narrow.',
    reference: 'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
  },
  mappingDimensions: {
    xAxis: { label: 'Technology Breadth', range: '4G Only → 4G + 5G → 4G + 5G + AI Pipeline' },
    yAxis: { label: 'Geographic Market Focus', range: 'Single Market → Dual Market → Full Global Coverage' },
  },
  currentPosition: {
    groupName: 'Global 4G Incumbents',
    members: 'All four firms (including Mobilé Inc.)',
    characteristics: '25% share each, all three markets, 4G-only product lines',
    stability: 'UNSTABLE — this cluster will break apart as firms make different 5G and AI investment choices. The DOJ intervention removed the coordination that maintained identical positioning.',
  },
  projectedGroups: [
    {
      id: 'A',
      name: '5G First-Movers',
      description: 'Firms that launch 5G handsets first, capturing premium pricing, brand loyalty, and carrier partnerships',
      characteristics: [
        'First to market with credible 5G product',
        'Command price premiums in USA and Europe',
        'Establish carrier partnerships and subsidy arrangements',
        'Build brand loyalty before followers enter',
      ],
      mobilityBarriers: 'Time advantage, established brand positioning, carrier relationships — later entrants face higher costs and lower returns',
      isTarget: true,
      targetRationale: 'First-mover premium window is still open but closing. Mobilé must move from licensing to launch within 6-9 months.',
      waveConnection: 'Wave 2 — the defining group for 2025-2026',
    },
    {
      id: 'B',
      name: '4G Defenders',
      description: 'Firms that prioritise 4G cash defence over 5G investment',
      characteristics: [
        'Strong in Asian mass-market (price-competitive 4G)',
        'Short-term cash generation maximised',
        'Declining relevance as 5G adoption accelerates',
        'Risk: becoming permanent technology followers',
      ],
      mobilityBarriers: 'Sunk costs in 4G production lines; declining but still profitable revenue makes transition psychologically and financially difficult',
      isTarget: false,
      targetRationale: 'Defending 4G is necessary (it funds everything) but making it the primary strategy condemns Mobilé to follower status.',
      waveConnection: 'Wave 1 — the comfort zone that must be escaped',
    },
    {
      id: 'C',
      name: 'Technology Leaders',
      description: 'Firms investing heavily in both 5G AND AI R&D, positioned for Wave 3 dominance',
      characteristics: [
        'Both 5G product AND AI R&D pipeline',
        'Positioned for 2027-28 AI-device market',
        'Requires significant upfront investment with delayed returns',
        'Long-term competitive moat through IP portfolio',
      ],
      mobilityBarriers: 'R&D investment, IP portfolio, specialised talent acquisition — extremely costly to replicate once established',
      isTarget: true,
      targetRationale: 'The aspirational end-state. Mobilé should transition from Group A to Group C by combining 5G market presence with AI R&D commitment.',
      waveConnection: 'Wave 3 — the ultimate strategic destination',
    },
    {
      id: 'D',
      name: 'Fast Followers',
      description: 'Firms that license 5G technology for speed but do not invest in proprietary IP or AI R&D',
      characteristics: [
        'Quick to market via licensing',
        'No proprietary IP advantage',
        'Dependent on technology licensors',
        'Vulnerable to commoditisation and cost pressure',
      ],
      mobilityBarriers: 'Low — easy to enter but easy to be displaced by firms with proprietary technology',
      isTarget: false,
      targetRationale: 'Licensing for initial 5G launch is tactically correct, but staying in this group (no in-house R&D) is strategically fatal. Must use licensing as a bridge, not a destination.',
      waveConnection: 'Transitional position only — not a sustainable group membership',
    },
  ],
  strategicTrajectory: {
    phase1: 'Current: Global 4G Incumbent (identical to all three rivals)',
    phase2: 'Near-term: License 5G for rapid launch → enter "5G First-Mover" group (Group A) while beginning in-house R&D',
    phase3: 'Medium-term: Second-gen proprietary 5G + AI R&D pipeline → transition to "Technology Leader" group (Group C)',
    keyInsight: 'The trajectory is A→C with licensing as a bridge through D. The danger is getting stuck in D (licensing dependency) or B (4G defender). Both are strategically fatal long-term positions.',
  },
};

export const csfAnalysis = {
  frameworkJustification: {
    title: 'Why CSF for Mobilé Inc.',
    reasoning:
      'Mobilé faces five simultaneous pressures competing for finite resources: 4G defence, 5G launch, AI R&D, capacity expansion, and financial discipline. CSF analysis prioritises what MUST go right versus what is merely important, directly informing the resource allocation decisions that define the strategy.',
    uniqueInsight:
      'CSF analysis produces a clear priority ranking that resolves the three-wave resource allocation dilemma: Speed to 5G market is the most critical factor (time-sensitive, largest gap), followed by AI R&D commitment (irreversible window), then 4G cash defence (funds everything), then financial discipline and production capacity. This ranking directly informs the strategic recommendation.',
    reference: 'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
  },
  csfByWave: [
    {
      wave: 'wave1',
      waveLabel: 'Wave 1: 4G — Defend & Extract',
      factors: [
        {
          csf: 'Cost-Efficient Production',
          whyCritical: 'Post-DOJ price competition demands lowest possible unit costs to maintain margins while rivals cut prices aggressively',
          currentPosition: 'Atlanta ($28/hr) expensive for cost-sensitive products; Vietnam ($6/hr) cost-competitive but still growing',
          gap: 'moderate',
          gapDetail: 'Vietnam needs further capacity expansion and maturity to fully exploit cost advantage; Atlanta viable only for premium',
        },
        {
          csf: 'Asian Market Pricing Competitiveness',
          whyCritical: 'Highest growth market (22-30% p.a.) where price sensitivity dominates in the mass-market segment (India, SE Asia)',
          currentPosition: 'Vietnam plant provides logistics advantage with zero Asian tariff, but capacity is limited',
          gap: 'moderate',
          gapDetail: 'Need more Vietnam capacity to serve growing Asian demand at competitive prices',
        },
        {
          csf: 'Cash Generation Maximisation',
          whyCritical: '4G revenue ($4.8B) funds ALL other strategic investments — Waves 2 and 3 cannot proceed without this cash engine',
          currentPosition: 'Revenue strong from cartel era but margins compressing post-DOJ',
          gap: 'growing',
          gapDetail: 'Revenue declining as open competition drives price-cutting; cash generation under increasing pressure',
        },
        {
          csf: 'Supply-Demand Matching (JIT)',
          whyCritical: 'Overproduction penalty (5-10%); underproduction permanently loses sales. Accuracy is non-negotiable.',
          currentPosition: 'JIT capability established and operational for 4G',
          gap: 'none',
          gapDetail: 'Existing capability adequate for predictable 4G demand patterns',
        },
      ],
    },
    {
      wave: 'wave2',
      waveLabel: 'Wave 2: 5G — Launch Urgently',
      factors: [
        {
          csf: 'Speed to Market (5G Handset)',
          whyCritical: 'First-mover premium window is closing; 38% of US consumers already own 5G devices; infrastructure covers 70%+ of US urban areas — the market exists and Mobilé has NOTHING to sell in it',
          currentPosition: 'No 5G product whatsoever — zero capability, zero pipeline',
          gap: 'critical',
          gapDetail: 'THE most critical gap in the entire analysis. Every quarter of delay cedes pricing power and brand loyalty that later entrants cannot recover.',
        },
        {
          csf: '5G Technology Capability (In-House or Licensed)',
          whyCritical: 'Must have competitive 5G technology to launch — the technology sourcing decision determines speed, cost, and long-term IP position',
          currentPosition: 'Decision not yet made between in-house R&D (slower, builds IP) and licensing (faster, no IP, dependency)',
          gap: 'critical',
          gapDetail: 'No 5G technology of any kind. Must choose path immediately.',
        },
        {
          csf: 'Premium Brand Positioning (USA/Europe)',
          whyCritical: 'First 5G brand to establish premium positioning captures loyalty advantages and pricing power that are difficult to erode',
          currentPosition: 'Brand exists and is established in both markets, but has no 5G product to differentiate on',
          gap: 'critical',
          gapDetail: 'Brand infrastructure exists but is dormant for 5G — needs a product to activate the positioning',
        },
        {
          csf: 'Carrier Partnerships for 5G',
          whyCritical: 'Carrier subsidies are accelerating consumer 5G adoption; carrier relationships determine device placement and recommendations',
          currentPosition: 'Existing 4G carrier relationships but no 5G offering to negotiate around',
          gap: 'significant',
          gapDetail: 'Relationships exist but cannot be leveraged without a 5G product',
        },
      ],
    },
    {
      wave: 'wave3',
      waveLabel: 'Wave 3: AI-Devices — Invest for 2027',
      factors: [
        {
          csf: 'AI R&D Investment Commitment',
          whyCritical: 'Delay = permanently following, not leading. Apple, Samsung, Qualcomm already active. R&D window open now but will not remain open indefinitely.',
          currentPosition: 'No known commitment; R&D infrastructure exists but not directed at AI',
          gap: 'critical',
          gapDetail: 'Zero AI R&D commitment while competitors are actively investing. The window is open but closing.',
        },
        {
          csf: 'AI Chip Sourcing / Development',
          whyCritical: 'On-device AI requires specialised processors. AI chip supply chains are emerging and early partnerships matter.',
          currentPosition: 'No known AI chip capability — neither in-house nor sourced',
          gap: 'critical',
          gapDetail: 'Must either develop in-house or secure supplier partnerships. Chip sourcing will be a competitive bottleneck.',
        },
        {
          csf: 'AI Talent Acquisition',
          whyCritical: 'Specialised AI/ML engineering talent required for on-device AI capabilities — photography, health, assistants, language',
          currentPosition: 'Existing R&D team with smartphone expertise, but AI-specific capabilities unknown',
          gap: 'probable',
          gapDetail: 'AI talent is scarce and competitors (Apple, Samsung) are active recruiters. Must begin talent acquisition immediately.',
        },
      ],
    },
    {
      wave: 'cross-wave',
      waveLabel: 'Cross-Wave CSFs',
      factors: [
        {
          csf: 'Financial Discipline ($90M Floor)',
          whyCritical: 'Breaching the $90M cash floor triggers emergency borrowing at 7.8% (3% premium) AND sends damaging investor signal via TSR impact. Both costs compound.',
          currentPosition: 'Cash position currently healthy but under increasing pressure from simultaneous investment demands',
          gap: 'emerging',
          gapDetail: 'Currently manageable but will become critical as 5G launch costs, AI R&D, and capacity expansion compete for the same cash pool',
        },
        {
          csf: 'Three-Wave Resource Balancing',
          whyCritical: 'Over-investing in one wave starves the others. Under-investing in any wave has irreversible consequences (4G: cash starvation; 5G: permanent follower; AI: forfeited leadership).',
          currentPosition: 'Currently 100% allocated to 4G — zero investment diversification across waves',
          gap: 'critical',
          gapDetail: 'The most fundamental strategic gap: no resource diversification across the three waves. Must be addressed immediately.',
        },
        {
          csf: 'Global Coordination Capability',
          whyCritical: 'Operating a coherent three-wave strategy across USA (premium 5G), EU (feature/sustainability), and Asia (bifurcated) simultaneously is a complex coordination challenge',
          currentPosition: 'Management experience in three-market operations exists from 4G era',
          gap: 'moderate',
          gapDetail: 'Single-wave coordination experience must evolve to three-wave coordination — a qualitatively harder challenge',
        },
      ],
    },
  ],
  priorityRanking: [
    {
      rank: 1,
      csf: 'Speed to 5G Market',
      wave: 'wave2',
      rationale: 'Most time-sensitive factor with the largest competitive gap. Every quarter of delay cedes first-mover advantage permanently. The infrastructure is ready, consumers are buying, competitors are launching — and Mobilé has nothing.',
    },
    {
      rank: 2,
      csf: 'AI R&D Commitment',
      wave: 'wave3',
      rationale: 'R&D window is open now but will close. Apple, Samsung, Qualcomm are already active. Once the window closes, catching up requires exponentially more investment with diminishing returns. Investment must begin before Wave 2 is profitable.',
    },
    {
      rank: 3,
      csf: '4G Cash Defence',
      wave: 'wave1',
      rationale: 'The cash engine that funds everything. Without 4G revenue defence, Waves 2 and 3 cannot be funded. But this is a supporting CSF — not the primary strategic objective.',
    },
    {
      rank: 4,
      csf: 'Financial Discipline ($90M Floor)',
      wave: 'cross-wave',
      rationale: 'The binding constraint that shapes all investment sequencing. Breach triggers both financial penalty and reputational damage. Must be respected throughout the planning period.',
    },
    {
      rank: 5,
      csf: 'Production Capacity Expansion',
      wave: 'cross-wave',
      rationale: '2-year lead time makes this decision urgent despite being ranked fifth. Capacity commissioned now arrives at peak demand in 2028. Delay means permanent under-capacity.',
    },
  ],
};

// ============================================================
// CROSS-FRAMEWORK SYNTHESIS
// ============================================================

export const task2Synthesis = {
  internalFindings: [
    'Atlanta plant\'s learning-curve efficiencies represent the only temporal competitive advantage — rivals can invest but cannot immediately replicate years of production optimisation (VRIO)',
    'Vietnam plant cost advantage ($6/hr) is location-based and accessible to all competitors (Samsung, Intel, LG also present) — competitive parity, not proprietary advantage (VRIO)',
    'Existing R&D infrastructure is a foundation but NOT yet directed toward 5G or AI — the most critical internal misalignment (VRIO + Value Chain)',
    '4G cash engine ($4.8B) is valuable but declining in both absolute margins and competitive advantage as post-DOJ competition intensifies (VRIO)',
    'The entire value chain is configured for 4G only — marketing has no 5G product to sell, R&D is not generating next-gen outputs, production lines need retooling (Value Chain)',
    'Dual-plant logistics structure provides genuine geographic flexibility: Atlanta→US/EU, Vietnam→Asia/EU via EVFTA (Value Chain)',
  ],
  externalFindings: [
    'DOJ intervention is the single most impactful external factor — ended price coordination and forced open competition among four equally-sized firms (PESTLE + Porter\'s)',
    '5G infrastructure is ready (70%+ US urban coverage, 55% EU) — Mobilé\'s product gap, not technology availability, is the bottleneck (PESTLE)',
    'Competitive rivalry is HIGH and intensifying — four equal firms in direct conflict with high exit barriers (Porter\'s)',
    'AI-device window is open but competitors (Apple, Samsung, Qualcomm) are already investing — delay forfeits technology leadership permanently (PESTLE + CSF)',
    'Asian market growth (22-30% p.a.) is the highest opportunity but requires bifurcated strategy — premium 5G for urban China/Korea plus cost-competitive 4G for India/SE Asia (PESTLE)',
    'Strategic group positions are still fluid — no firm has permanently captured 5G first-mover status — but mobility barriers will crystallise rapidly (Strategic Group)',
    'Speed to 5G market is the #1 Critical Success Factor, followed by AI R&D commitment, then 4G cash defence (CSF ranking)',
  ],
  centralTheme:
    'Mobilé\'s internal capabilities (manufacturing, R&D base, global presence) are sufficient to compete, but they are misaligned with the external reality (5G demand, AI R&D race, post-DOJ competition). The strategic task is REALIGNMENT — redirecting existing capabilities toward the most critical external opportunities (5G launch, AI R&D) while defending the cash base (4G) that funds everything.',
};

export const task2References = [
  {
    key: 'barney1991',
    citation: 'Barney, J.B. (1991) \'Firm Resources and Sustained Competitive Advantage\', Journal of Management, 17(1), pp. 99-120.',
    usage: 'VRIO/RBV framework for internal analysis',
  },
  {
    key: 'porter1980',
    citation: 'Porter, M.E. (1980) Competitive Strategy: Techniques for Analyzing Industries and Competitors. New York: Free Press.',
    usage: 'Five Forces framework for industry structure analysis',
  },
  {
    key: 'porter1985',
    citation: 'Porter, M.E. (1985) Competitive Advantage: Creating and Sustaining Superior Performance. New York: Free Press.',
    usage: 'Value Chain framework for internal activity analysis',
  },
  {
    key: 'johnson2017',
    citation: 'Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regner, P. (2017) Exploring Strategy: Text and Cases. 11th edn. Harlow: Pearson.',
    usage: 'PESTLE, Strategic Group, and CSF frameworks',
  },
  {
    key: 'gsma2024',
    citation: 'GSMA (2024) The Mobile Economy 2024. Available at: https://www.gsma.com/mobileeconomy/ (Accessed: April 2026).',
    usage: '5G adoption rates, market growth projections',
  },
  {
    key: 'ericsson2024',
    citation: 'Ericsson (2024) Ericsson Mobility Report. Available at: https://www.ericsson.com/en/reports-and-papers/mobility-report (Accessed: April 2026).',
    usage: '5G network coverage data, technology deployment timelines',
  },
  {
    key: 'deloitte2024',
    citation: 'Deloitte (2024) Global Mobile Consumer Trends. Available at: https://www2.deloitte.com/global/en/pages/technology-media-and-telecommunications/articles/gx-global-mobile-consumer-trends.html (Accessed: April 2026).',
    usage: 'Consumer adoption patterns, market dynamics',
  },
  {
    key: 'qualcomm2024',
    citation: 'Qualcomm (2024) The Future of AI on Device. Available at: https://www.qualcomm.com/research/artificial-intelligence (Accessed: April 2026).',
    usage: 'AI-device development timelines and capabilities',
  },
  {
    key: 'ghemawat2007',
    citation: 'Ghemawat, P. (2007) Redefining Global Strategy: Crossing Borders in a World Where Differences Still Matter. Boston: Harvard Business School Press.',
    usage: 'Multi-market strategy and distance frameworks',
  },
  {
    key: 'hill2021',
    citation: 'Hill, C.W.L. (2021) International Business: Competing in the Global Marketplace. 13th edn. New York: McGraw-Hill.',
    usage: 'International business strategy and market entry concepts',
  },
  {
    key: 'christensen1997',
    citation: 'Christensen, C.M. (1997) The Innovator\'s Dilemma: When New Technologies Cause Great Firms to Fail. Boston: Harvard Business School Press.',
    usage: 'Technology wave transitions — explains why incumbent firms over-invest in sustaining technologies (4G) at the expense of disruptive ones (5G/AI)',
  },
  {
    key: 'prahalad1990',
    citation: 'Prahalad, C.K. and Hamel, G. (1990) \'The Core Competence of the Corporation\', Harvard Business Review, 68(3), pp. 79-91.',
    usage: 'Core competence framework — R&D infrastructure as a core competence requiring strategic redirection',
  },
  {
    key: 'teece2007',
    citation: 'Teece, D.J. (2007) \'Explicating Dynamic Capabilities: The Nature and Microfoundations of (Sustainable) Enterprise Performance\', Strategic Management Journal, 28(13), pp. 1319-1350.',
    usage: 'Dynamic capabilities framework — Mobilé\'s need to sense (5G/AI opportunities), seize (licensing + R&D), and reconfigure (value chain transformation)',
  },
];
