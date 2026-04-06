/**
 * Task 2 Extended Frameworks — Mobilé Inc.
 * Additional strategic frameworks from MN7002NI lectures (Weeks 05-07)
 *
 * 1. Bowman's Strategy Clock (Week 05)
 * 2. Ansoff Matrix (Week 05)
 * 3. BCG Matrix (Week 06)
 * 4. Bartlett & Ghoshal IR Framework (Week 07)
 * 5. Entry Mode Analysis (Week 07)
 * 6. Levels of Strategy (Week 06)
 * 7. Integration Strategies (Week 06)
 */

// ============================================================
// 1. BOWMAN'S STRATEGY CLOCK
// ============================================================

export const bowmansStrategyClock = {
  frameworkJustification: {
    title: "Why Bowman's Strategy Clock for Mobilé Inc.",
    reasoning:
      "Porter's generic strategies (already analysed) classify Mobilé as a broad differentiator, but this misses how Mobilé's competitive position SHIFTS across three technology waves. Bowman's Strategy Clock provides eight positions on a Price–Perceived Benefit grid, revealing that Mobilé occupies different clock positions for 4G, 5G, and AI — a nuance generic strategies cannot capture.",
    uniqueInsight:
      "The Strategy Clock exposes a strategic migration path: Mobilé must move from Position 2–3 (low price / hybrid) in mature 4G to Position 4–5 (differentiation / focused differentiation) in 5G, and ultimately towards Position 5 (focused differentiation) in AI. This is not just product evolution — it requires fundamentally different pricing, marketing, and capability investments at each stage.",
    reference:
      "Bowman, C. and Faulkner, D. (1997) Competitive and Corporate Strategy. London: Irwin.",
  },
  positions: [
    { id: 1, label: 'Low Price / Low Value', angle: 225, description: 'Bargain-basement segment — not where Mobilé competes' },
    { id: 2, label: 'Low Price', angle: 270, description: 'Cost leadership with acceptable quality' },
    { id: 3, label: 'Hybrid', angle: 315, description: 'Moderate price with above-average perceived benefits' },
    { id: 4, label: 'Differentiation', angle: 0, description: 'Premium perceived benefits at moderate-to-high price' },
    { id: 5, label: 'Focused Differentiation', angle: 45, description: 'Highest perceived benefits, premium pricing, niche leadership' },
    { id: 6, label: 'Risky High Margins', angle: 90, description: 'High price without perceived benefit — unsustainable' },
    { id: 7, label: 'Monopoly Pricing', angle: 135, description: 'Only viable with no competition — irrelevant post-DOJ' },
    { id: 8, label: 'Loss of Market Share', angle: 180, description: 'Standard price, low value — competitors capture share' },
  ],
  mobilePositions: [
    {
      wave: 'Wave 1: 4G',
      waveId: '4g',
      color: '#3B6FD4',
      currentPosition: 3,
      positionLabel: 'Hybrid (Position 3)',
      reasoning:
        'Mobilé\'s 4G product offers reliable quality at competitive pricing. Post-DOJ, the cartel-era premium pricing has eroded, pushing all four firms toward hybrid positioning where price and perceived benefit are both moderate. Atlanta\'s learning-curve efficiencies allow Mobilé to sustain margins here, but differentiation is minimal — all firms offer essentially equivalent 4G products.',
      priceLevel: 'Moderate (post-DOJ price competition)',
      perceivedBenefit: 'Moderate (mature, undifferentiated 4G technology)',
      evidence: '25% equal market share across all firms; DOJ dismantled price coordination; $4.8B revenue from mature 4G product range',
      strategicImplication: 'Defend this position through cost efficiency (Atlanta + Vietnam dual-plant) rather than trying to differentiate a mature 4G product. Extract maximum cash to fund Waves 2 and 3.',
      swotFeed: 'S2 (cash generation from hybrid position), T1 (post-DOJ margin compression)',
    },
    {
      wave: 'Wave 2: 5G',
      waveId: '5g',
      color: '#2B8A5E',
      currentPosition: null,
      targetPosition: 4,
      positionLabel: 'Target: Differentiation (Position 4)',
      reasoning:
        'Mobilé has NO 5G handset — it currently does not exist on the Strategy Clock for 5G. The target is Position 4 (Differentiation) in the US and EU premium segments, where 5G adoption is 38% and 28% respectively. Consumers in these markets value 5G capability, speed, and ecosystem integration — benefits that command a price premium over 4G. Licensing 5G technology enables rapid entry to capture differentiation before competitors establish dominance.',
      priceLevel: 'Premium (first-mover pricing in 5G)',
      perceivedBenefit: 'High (5G speed, low latency, new use cases)',
      evidence: '38% US 5G adoption; 70%+ urban coverage; zero Mobilé 5G product currently; licensing enables 6-9 month launch timeline',
      strategicImplication: 'License 5G for speed-to-market, price at premium to capture early-adopter willingness to pay. Differentiate through market-specific features (US: performance, EU: sustainability, Asia: dual 5G/4G).',
      swotFeed: 'O1 (5G market opportunity), W1 (no current 5G product)',
    },
    {
      wave: 'Wave 2: 5G (Asia)',
      waveId: '5g',
      color: '#2B8A5E',
      currentPosition: null,
      targetPosition: 3,
      positionLabel: 'Target: Hybrid (Position 3) for Asian mass-market',
      reasoning:
        'Asia is bifurcated: premium urban 5G consumers + mass-market 4G users. For the mass-market segment, Mobilé should target Position 3 (Hybrid) — leveraging Vietnam\'s $6/hr labour cost advantage to offer 5G at accessible price points with good perceived value. This serves the ~1B user base where price sensitivity is higher than in the US/EU.',
      priceLevel: 'Moderate (Vietnam cost advantage enables competitive pricing)',
      perceivedBenefit: 'Moderate-High (5G connectivity at accessible price)',
      evidence: 'Asia: ~1B users, 22-30% growth; bifurcated market; Vietnam $6/hr vs Atlanta $28/hr; zero Asian tariff from Vietnam',
      strategicImplication: 'Use Vietnam plant for cost-competitive 5G production serving Asian mass-market. Different clock position from US/EU reflects market-specific strategy.',
      swotFeed: 'O3 (Asian market growth), S1 (Vietnam cost structure)',
    },
    {
      wave: 'Wave 3: AI Devices',
      waveId: 'ai',
      color: '#7B5EA7',
      currentPosition: null,
      targetPosition: 5,
      positionLabel: 'Target: Focused Differentiation (Position 5)',
      reasoning:
        'AI devices represent a new product category (2027-28 commercial availability) where early entrants can command premium positioning. Position 5 (Focused Differentiation) targets the innovation-premium segment — consumers willing to pay top price for AI-integrated smartphone capabilities. Apple, Samsung, and Qualcomm are already investing; Mobilé\'s $150M R&D commitment positions it to compete in this niche rather than mass-market.',
      priceLevel: 'Premium (innovation premium for new category)',
      perceivedBenefit: 'Very High (AI-native features, on-device intelligence)',
      evidence: 'AI-device commercial availability 2027-28; Apple/Samsung/Qualcomm already active; $150M R&D investment required; 2-year development window',
      strategicImplication: 'R&D investment NOW secures Position 5 entry in 2027-28. Cannot enter AI as a low-cost follower — must differentiate or risk Position 6/8 (overpriced or irrelevant).',
      swotFeed: 'O2 (AI device market opportunity), W4 (R&D not yet redirected)',
    },
  ],
  keyFindings: {
    strategicMigration:
      'Mobilé must execute a systematic clockwise migration: Position 3 (4G Hybrid) → Position 4 (5G Differentiation) → Position 5 (AI Focused Differentiation). Each step requires different capabilities, pricing strategies, and market positioning.',
    marketDifferentiation:
      'Different markets require different clock positions simultaneously: US/EU target Position 4-5 (premium differentiation), Asia mass-market targets Position 3 (hybrid value). This is a transnational positioning challenge.',
    riskOfInaction:
      'Without 5G launch, Mobilé risks sliding from Position 3 to Position 8 (loss of market share) as competitors with 5G offerings capture the differentiation positions first.',
  },
}

// ============================================================
// 2. ANSOFF MATRIX
// ============================================================

export const ansoffMatrix = {
  frameworkJustification: {
    title: 'Why Ansoff Matrix for Mobilé Inc.',
    reasoning:
      "Mobilé is simultaneously pursuing growth along multiple dimensions — defending existing 4G markets, launching new 5G products, expanding production into Vietnam/Asia, and developing entirely new AI device categories. Ansoff's Growth Matrix classifies each strategic move along the Existing/New Products × Existing/New Markets grid, making explicit the risk profile of each wave strategy.",
    uniqueInsight:
      "Ansoff reveals that Mobilé's three-wave strategy spans ALL FOUR quadrants simultaneously — Market Penetration (4G defence), Product Development (5G in existing markets), Market Development (4G/5G via Vietnam into broader Asia), and Diversification (AI devices). This is an exceptionally aggressive growth posture for a single firm, and the Ansoff classification makes the compounding risk visible.",
    reference:
      "Ansoff, H.I. (1965) Corporate Strategy: An Analytic Approach to Business Policy for Growth and Expansion. New York: McGraw-Hill.",
  },
  quadrants: [
    {
      id: 'market-penetration',
      label: 'Market Penetration',
      subtitle: 'Existing Products × Existing Markets',
      risk: 'Low',
      riskScore: 1,
      color: '#3B6FD4',
      waveId: '4g',
      strategies: [
        {
          strategy: '4G Defence in USA, Europe, and Asia',
          description:
            'Protect existing 25% market share in all three markets with mature 4G product range. Post-DOJ, this means competing on cost efficiency and brand loyalty rather than coordinated pricing.',
          evidence: '~$4.8B current revenue; 25% share across all markets; DOJ ended tacit price coordination',
          actions: [
            'Optimise Atlanta production costs via learning-curve leverage',
            'Use Vietnam $6/hr labour for cost-competitive Asian 4G',
            'Accept managed decline (25% → 22%) to free resources for Waves 2-3',
          ],
        },
      ],
      swotFeed: 'S1 (dual-plant efficiency), S2 (cash generation), T1 (post-DOJ price pressure)',
    },
    {
      id: 'product-development',
      label: 'Product Development',
      subtitle: 'New Products × Existing Markets',
      risk: 'Medium',
      riskScore: 2,
      color: '#2B8A5E',
      waveId: '5g',
      strategies: [
        {
          strategy: '5G Handset Launch via Licensing',
          description:
            'Develop and launch 5G smartphones into existing US, EU, and Asian markets. This is the CRITICAL strategic move — Mobilé has NO 5G product while 38% of US consumers already own 5G devices. Licensing 5G technology (rather than in-house development) reduces time-to-market to 6-9 months.',
          evidence: '38% US 5G adoption; 28% EU adoption; 70%+ urban 5G coverage; zero Mobilé 5G handset; licensing = 6-9 month launch',
          actions: [
            'License 5G modem technology from established chipmakers',
            'Develop market-specific 5G variants (US premium, EU sustainability, Asia dual-band)',
            'Allocate 55% of strategic investment (~$1.1B) to Wave 2',
          ],
        },
        {
          strategy: 'AI Device Development (2027-28)',
          description:
            'Invest $150M in R&D for AI-integrated smartphone features targeting 2027-28 commercial launch. New product category for existing customer base.',
          evidence: 'AI commercial availability 2027-28; Apple/Samsung/Qualcomm active; $150M R&D commitment',
          actions: [
            'Commit $150M R&D budget from 2025',
            'Establish AI research partnerships',
            'Prototype AI features for integration into 5G platform',
          ],
        },
      ],
      swotFeed: 'O1 (5G market), O2 (AI device market), W1 (no 5G product), W4 (R&D gap)',
    },
    {
      id: 'market-development',
      label: 'Market Development',
      subtitle: 'Existing Products × New Markets',
      risk: 'Medium',
      riskScore: 2,
      color: '#F59E0B',
      waveId: '4g',
      strategies: [
        {
          strategy: 'Vietnam Plant → Deeper Asian Market Penetration',
          description:
            'Leverage Vietnam manufacturing (zero Asian tariff, $6/hr labour) to expand 4G presence into broader Asian sub-markets currently underserved. The EVFTA also opens cost-competitive European export routes.',
          evidence: 'Vietnam: $6/hr labour, zero Asian tariff, EVFTA access; Asia: ~1B users, 22-30% growth',
          actions: [
            'Scale Vietnam production capacity (2-year lead time already initiated)',
            'Target Asian mass-market segments with cost-competitive 4G',
            'Use EVFTA for cost-competitive European supply alongside Atlanta',
          ],
        },
      ],
      swotFeed: 'O3 (Asian market growth), O4 (EVFTA trade access), S1 (Vietnam cost advantage)',
    },
    {
      id: 'diversification',
      label: 'Diversification',
      subtitle: 'New Products × New Markets',
      risk: 'High',
      riskScore: 4,
      color: '#7B5EA7',
      waveId: 'ai',
      strategies: [
        {
          strategy: 'AI-Device Category for Emerging Use Cases',
          description:
            'AI devices potentially create entirely new use cases and market segments beyond traditional smartphone functionality — on-device AI assistants, edge computing, AI-augmented productivity. If AI devices attract new customer segments (enterprise, IoT), this becomes true diversification rather than product development.',
          evidence: 'AI-device commercial availability 2027-28; new use case categories emerging; enterprise AI adoption accelerating',
          actions: [
            'Monitor AI device market segmentation for diversification signals',
            'Maintain optionality — invest in R&D but avoid over-committing to unproven segments',
            'Leverage existing brand and distribution as platform for new categories',
          ],
        },
      ],
      swotFeed: 'O2 (AI market), W4 (R&D not redirected), T4 (competitor AI investment)',
    },
  ],
  keyFindings: {
    riskProfile:
      "Mobilé's three-wave strategy spans all four Ansoff quadrants simultaneously. This is an ambitious and inherently risky growth posture. The compounding risk demands rigorous resource allocation discipline — particularly the $90M cash floor constraint which limits how many quadrants can be actively pursued at once.",
    prioritisation:
      'Ansoff clarifies strategic priority: Product Development (5G launch) is the highest-impact move because it addresses the critical gap (no 5G product) in existing high-growth markets. Market Penetration (4G defence) is lowest risk but also lowest growth. Diversification (AI) is highest risk but necessary for long-term positioning.',
    sequencing:
      'The matrix reveals a natural sequencing: secure Market Penetration (4G cash flow) → execute Product Development (5G launch) → pursue Market Development (Vietnam/Asia expansion) → invest in Diversification (AI devices). Attempting all four simultaneously without sequencing risks spreading resources too thin against the $90M floor.',
  },
}

// ============================================================
// 3. BCG MATRIX
// ============================================================

export const bcgMatrix = {
  frameworkJustification: {
    title: 'Why BCG Matrix for Mobilé Inc.',
    reasoning:
      "Mobilé manages a de facto portfolio of three technology waves, each with different growth rates and market share positions. The BCG Matrix (Growth-Share Matrix) classifies each wave as Star, Cash Cow, Question Mark, or Dog — directly supporting the resource allocation argument that is central to Task 4's recommendation.",
    uniqueInsight:
      "BCG reveals the portfolio imbalance that defines Mobilé's strategic challenge: the Cash Cow (4G) is the ONLY revenue source, funding both a Question Mark (5G with zero market share) and a potential future Star (AI devices). The matrix makes the cash flow dependency visible — if the Cash Cow depletes faster than expected (post-DOJ margin compression), the Question Mark and Star both starve.",
    reference:
      "Henderson, B.D. (1970) 'The Product Portfolio', BCG Perspectives. Boston: Boston Consulting Group.",
  },
  quadrants: [
    {
      id: 'stars',
      label: 'Stars',
      subtitle: 'High Growth + High Share',
      description: 'High growth rate, high relative market share — generate cash but also consume it for growth maintenance',
      color: '#F59E0B',
      position: { x: 'high', y: 'high' },
    },
    {
      id: 'question-marks',
      label: 'Question Marks',
      subtitle: 'High Growth + Low Share',
      description: 'High growth rate, low relative market share — cash-hungry, uncertain future, need investment to become Stars',
      color: '#C0392B',
      position: { x: 'low', y: 'high' },
    },
    {
      id: 'cash-cows',
      label: 'Cash Cows',
      subtitle: 'Low Growth + High Share',
      description: 'Low growth rate, high relative market share — generate surplus cash to fund other quadrants',
      color: '#3B6FD4',
      position: { x: 'high', y: 'low' },
    },
    {
      id: 'dogs',
      label: 'Dogs',
      subtitle: 'Low Growth + Low Share',
      description: 'Low growth rate, low relative market share — break even or drain resources, candidates for divestment',
      color: '#999999',
      position: { x: 'low', y: 'low' },
    },
  ],
  mobileProducts: [
    {
      product: '4G LTE Product Range',
      waveId: '4g',
      color: '#3B6FD4',
      quadrant: 'cash-cows',
      marketGrowth: 'Low (mature, 14-20% overall but 4G segment declining)',
      relativeShare: 'High (25% — equal to all competitors, established position)',
      annualRevenue: '~$4.8B',
      cashFlow: 'Strong positive — funds entire business',
      reasoning:
        "4G is Mobilé's mature product line generating ~$4.8B annually. Market growth for 4G-specific handsets is declining as consumers migrate to 5G. However, Mobilé holds a strong 25% share with established production, distribution, and brand. This is a textbook Cash Cow — high share in a low/declining-growth segment.",
      strategicAction: 'Harvest',
      actionDetail:
        'Maximise cash extraction through cost optimisation (Atlanta learning curve + Vietnam low-cost production). Accept managed market share decline (25% → 22%) to redirect resources to Wave 2 and 3 investments. Do NOT over-invest in 4G innovation — protect margins, not growth.',
      evidence: '$4.8B revenue; 25% share; post-DOJ margin compression; mature technology; 88% US smartphone penetration',
      swotFeed: 'S2 (cash generation), W2 (100% 4G dependency), T1 (post-DOJ price pressure)',
    },
    {
      product: '5G Handset Range (Not Yet Launched)',
      waveId: '5g',
      color: '#2B8A5E',
      quadrant: 'question-marks',
      marketGrowth: 'High (5G adoption: 38% US, 28% EU; 70%+ urban coverage; 16-30% market growth)',
      relativeShare: 'Zero (Mobilé has NOT launched a 5G handset)',
      annualRevenue: '$0 (no product)',
      cashFlow: 'Negative — requires heavy investment with no return yet',
      reasoning:
        "The 5G market is growing rapidly (38% US adoption, 70%+ urban coverage) but Mobilé has exactly 0% market share — it has no 5G product. This is a classic Question Mark: high-growth market, zero share, requiring massive investment to enter. The question is whether Mobilé can convert this to a Star through rapid licensing and launch, or whether competitor first-mover advantages make this a Dog in waiting.",
      strategicAction: 'Invest Heavily',
      actionDetail:
        'Allocate 55% of strategic investment (~$1.1B) to rapid 5G market entry via technology licensing. The goal is to convert this Question Mark into a Star within 12-18 months of launch. Licensing (not in-house development) is critical to speed — Mobilé cannot afford the 2-3 year timeline of building 5G capability internally.',
      evidence: '38% US adoption; 0% Mobilé share; 70%+ urban 5G coverage; licensing = 6-9 month entry; competitors already active',
      swotFeed: 'O1 (5G market growth), W1 (no 5G product), O5 (licensing pathway)',
    },
    {
      product: 'AI-Integrated Device (R&D Stage)',
      waveId: 'ai',
      color: '#7B5EA7',
      quadrant: 'question-marks',
      marketGrowth: 'Very High (emerging market, 2027-28 commercial availability, potentially transformative)',
      relativeShare: 'Zero (pre-market — no firm has launched commercial AI device yet)',
      annualRevenue: '$0 (pre-commercial)',
      cashFlow: 'Negative — $150M R&D investment with no near-term return',
      reasoning:
        "AI devices are pre-market (commercial availability 2027-28) so technically all firms have zero share. However, Apple, Samsung, and Qualcomm are actively investing in R&D — creating a race for first-mover positioning. Mobilé's AI device is a Question Mark that could become a Star if R&D investment succeeds, or a Dog if competitors capture the market first.",
      strategicAction: 'Selective Investment',
      actionDetail:
        'Commit $150M R&D budget to secure a position in AI device development, but do not over-invest before market viability is proven. This is a calculated bet — enough investment to maintain optionality and competitive positioning, not enough to jeopardise the $90M cash floor if AI market materialisation is delayed.',
      evidence: 'AI commercial 2027-28; Apple/Samsung/Qualcomm active; $150M R&D needed; market size uncertain',
      swotFeed: 'O2 (AI market opportunity), W4 (R&D not redirected), T4 (competitor AI investment)',
    },
  ],
  cashFlowDynamics: {
    title: 'BCG Cash Flow Model Applied to Mobilé',
    flow: '4G Cash Cow → funds → 5G Question Mark + AI Question Mark',
    constraint: '$90M minimum cash reserve floor limits total investment capacity',
    risk: 'If 4G cash generation declines faster than projected (post-DOJ competition), both Question Marks lose funding simultaneously',
    keyInsight:
      "Mobilé's entire portfolio strategy depends on one Cash Cow. Most diversified firms have multiple Cash Cows funding multiple investments. Mobilé has ONE — and it is under active margin pressure from the DOJ intervention. This single-source dependency is the most critical portfolio vulnerability BCG reveals.",
  },
  keyFindings: {
    portfolioImbalance:
      'Mobilé has 1 Cash Cow (depleting) and 2 Question Marks (both needing heavy investment). No Stars generating growth + cash. This is an unbalanced portfolio requiring urgent action to convert 5G into a Star before 4G cash flow depletes.',
    investmentPriority:
      'BCG supports the Task 4 recommendation: invest heavily in 5G (convert Question Mark → Star) while selectively investing in AI (maintain optionality). The Cash Cow must be harvested, not defended — resources flow FROM 4G TO 5G/AI.',
    cashConstraint:
      'The $90M cash floor means Mobilé cannot pursue an "invest in everything" strategy. BCG forces a prioritisation: 5G first (highest near-term conversion potential), AI second (longer horizon), 4G defence third (managed decline).',
  },
}

// ============================================================
// 4. BARTLETT & GHOSHAL IR FRAMEWORK
// ============================================================

export const bartlettGhoshal = {
  frameworkJustification: {
    title: 'Why Bartlett & Ghoshal for Mobilé Inc.',
    reasoning:
      "For an International Business Strategy module, Bartlett & Ghoshal's Integration-Responsiveness (IR) framework is essential. Mobilé operates across three distinct markets (USA, Europe, Asia) with fundamentally different consumer preferences, regulatory environments, and competitive dynamics. The IR framework reveals whether Mobilé should standardise globally, adapt locally, or pursue a transnational approach balancing both.",
    uniqueInsight:
      "The IR framework exposes a critical strategic tension: Mobilé's current 4G operations lean toward a Global Strategy (standardised product, efficiency-focused), but the three-wave transition DEMANDS a Transnational approach (high integration for manufacturing/R&D efficiency + high responsiveness for market-specific 5G/AI product variants). This is the most difficult strategic position to execute — and it is exactly what Mobilé needs.",
    reference:
      "Bartlett, C.A. and Ghoshal, S. (1989) Managing Across Borders: The Transnational Solution. Boston: Harvard Business School Press.",
  },
  quadrants: [
    {
      id: 'global',
      label: 'Global Strategy',
      integration: 'High',
      responsiveness: 'Low',
      description: 'Standardised products, centralised decisions, cost efficiency through global scale',
      color: '#3B6FD4',
      position: { x: 'low', y: 'high' },
    },
    {
      id: 'transnational',
      label: 'Transnational Strategy',
      integration: 'High',
      responsiveness: 'High',
      description: 'Simultaneously efficient AND locally responsive — networked, knowledge-sharing, most complex to execute',
      color: '#2B8A5E',
      position: { x: 'high', y: 'high' },
    },
    {
      id: 'international',
      label: 'International Strategy',
      integration: 'Low',
      responsiveness: 'Low',
      description: 'Home-market focused with some international presence — leveraging domestic capabilities abroad',
      color: '#F59E0B',
      position: { x: 'low', y: 'low' },
    },
    {
      id: 'multidomestic',
      label: 'Multi-Domestic Strategy',
      integration: 'Low',
      responsiveness: 'High',
      description: 'Fully localised — each market operates semi-autonomously with adapted products and strategies',
      color: '#7B5EA7',
      position: { x: 'high', y: 'low' },
    },
  ],
  mobileAnalysis: {
    currentStrategy: {
      type: 'global',
      label: 'Global Strategy (Current — 4G operations)',
      reasoning:
        "Mobilé's current 4G operations reflect a Global Strategy: standardised 4G product across all three markets, centralised decision-making, and efficiency-focused dual-plant manufacturing (Atlanta premium + Vietnam cost-competitive). The product is essentially the same in USA, Europe, and Asia — with minimal local adaptation.",
      evidence: [
        'Same 4G product range sold in all three markets',
        'Centralised manufacturing: Atlanta (US/EU) and Vietnam (Asia/EU via EVFTA)',
        'Identical 25% market share across all markets — suggesting undifferentiated positioning',
        'JIT production system designed for standardised output',
      ],
      limitations: [
        'Cannot address EU sustainability requirements with standardised product',
        'Fails to serve bifurcated Asian market (premium 5G urban + mass 4G)',
        'US brand-consciousness requires different marketing than EU/Asia',
        'Post-DOJ competition makes pure cost-efficiency insufficient for differentiation',
      ],
    },
    targetStrategy: {
      type: 'transnational',
      label: 'Transnational Strategy (Target — 5G/AI era)',
      reasoning:
        "The 5G and AI transitions demand a Transnational Strategy: high global integration (shared R&D, manufacturing efficiency, knowledge transfer across markets) combined with high local responsiveness (market-specific 5G variants, localised pricing, regulatory compliance). This is Bartlett & Ghoshal's most complex strategy type — but it is what Mobilé's situation requires.",
      integrationDrivers: [
        'Shared 5G licensing and R&D platform across all markets',
        'Centralised AI R&D investment ($150M) with global application',
        'Dual-plant manufacturing efficiency (Atlanta premium + Vietnam mass-market)',
        'Global brand building for 5G/AI product launch credibility',
      ],
      responsivenessDrivers: [
        'USA: Performance-focused 5G, brand-conscious marketing, advertising-responsive consumers',
        'Europe: Sustainability-integrated 5G, feature-driven positioning, GDPR compliance, EU Green Deal alignment',
        'Asia: Bifurcated strategy — premium 5G for urban centres + cost-competitive 4G/5G for mass market',
        'Pricing: Premium in US/EU, hybrid value in Asian mass-market',
      ],
    },
    waveProgression: [
      {
        wave: 'Wave 1: 4G',
        waveId: '4g',
        strategy: 'global',
        color: '#3B6FD4',
        reasoning: 'Standardised 4G product optimised for cost efficiency — global approach appropriate for mature, undifferentiated technology',
      },
      {
        wave: 'Wave 2: 5G',
        waveId: '5g',
        strategy: 'transnational',
        color: '#2B8A5E',
        reasoning: 'Market-specific 5G variants (US performance, EU sustainability, Asia dual-tier) require local responsiveness; shared R&D and manufacturing require global integration',
      },
      {
        wave: 'Wave 3: AI',
        waveId: 'ai',
        strategy: 'transnational',
        color: '#7B5EA7',
        reasoning: 'AI R&D must be globally integrated (shared knowledge base, $150M concentrated investment) while AI applications must be locally responsive (regulatory requirements, use case preferences, data privacy regimes differ by market)',
      },
    ],
  },
  marketProfiles: [
    {
      market: 'USA',
      size: '~$80B',
      growth: '14-20%',
      integrationNeed: 'Medium',
      responsivenessNeed: 'High',
      keyDrivers: 'Brand-consciousness, advertising responsiveness, performance focus, 38% 5G adoption, home market advantage',
      strategy: 'Leverage home-market position; premium 5G differentiation; Atlanta manufacturing',
    },
    {
      market: 'Europe',
      size: '450M users',
      growth: '16-22%',
      integrationNeed: 'Medium',
      responsivenessNeed: 'High',
      keyDrivers: 'Sustainability focus, feature-driven, GDPR, EU Green Deal, 55% 5G coverage, EVFTA trade route',
      strategy: 'Sustainability-integrated 5G; dual supply (Atlanta + Vietnam via EVFTA); regulatory compliance',
    },
    {
      market: 'Asia',
      size: '~1B users',
      growth: '22-30%',
      integrationNeed: 'High',
      responsivenessNeed: 'Very High',
      keyDrivers: 'Bifurcated: premium 5G urban + mass-market 4G; price sensitivity; Vietnam proximity; zero tariff',
      strategy: 'Dual-tier: premium 5G for urban + cost-competitive 4G/5G via Vietnam; highest responsiveness needed',
    },
  ],
  keyFindings: {
    strategicShift:
      'Mobilé must transition from a Global Strategy (appropriate for standardised 4G) to a Transnational Strategy (required for market-specific 5G/AI). This is not incremental — it requires fundamentally different organisational capabilities including cross-market knowledge sharing, local adaptation capacity, and dual manufacturing flexibility.',
    complexity:
      "Transnational Strategy is Bartlett & Ghoshal's most complex archetype. Mobilé must simultaneously achieve cost efficiency (global integration via dual-plant manufacturing) AND market-specific product adaptation (local responsiveness via differentiated 5G variants). Few firms execute this well — execution quality becomes the critical success factor.",
    moduleRelevance:
      'For an International Business Strategy module, this framework directly addresses the core question: how should a firm competing across fundamentally different markets organise its international operations? Mobilé\'s three-market, three-wave challenge is a textbook case for IR analysis.',
  },
}

// ============================================================
// 5. ENTRY MODE ANALYSIS
// ============================================================

export const entryModeAnalysis = {
  frameworkJustification: {
    title: 'Why Entry Mode Analysis for Mobilé Inc.',
    reasoning:
      "Mobilé's international operations span multiple entry modes — from wholly-owned subsidiaries (Atlanta, Vietnam) to technology licensing (5G) to potential joint ventures (AI partnerships). Entry Mode theory classifies these along a control-risk-commitment spectrum, revealing the strategic logic behind each market entry choice and its implications for the three-wave strategy.",
    uniqueInsight:
      "Entry Mode analysis reveals that Mobilé uses DIFFERENT entry modes for different technology waves — wholly-owned manufacturing for established 4G, technology licensing for urgent 5G entry, and potentially joint venture/partnership structures for AI R&D. This multi-modal approach is strategically coherent but operationally complex, requiring simultaneous management of different governance structures.",
    reference:
      "Hill, C.W.L. (2023) International Business: Competing in the Global Marketplace. 14th edn. New York: McGraw-Hill Education. Chapter 15.",
  },
  spectrum: [
    {
      mode: 'Indirect Export',
      control: 1,
      risk: 1,
      commitment: 1,
      description: 'Selling through domestic intermediaries — minimal international involvement',
      mobileRelevance: false,
    },
    {
      mode: 'Direct Export',
      control: 2,
      risk: 2,
      commitment: 2,
      description: 'Company manages exports directly to foreign markets',
      mobileRelevance: true,
      mobileApplication: 'Atlanta plant exports to Europe directly — established trade route for 4G products. This is Mobilé\'s primary European supply mode.',
      evidence: 'Atlanta → EU export route; established distribution infrastructure',
      waveId: '4g',
    },
    {
      mode: 'Technology Licensing',
      control: 3,
      risk: 2,
      commitment: 2,
      description: 'Licensing technology from/to another firm — trades control for speed and reduced investment',
      mobileRelevance: true,
      mobileApplication: "5G technology licensing is Mobilé's chosen entry mode for the 5G market. Rather than building 5G capability in-house (2-3 year timeline), licensing enables 6-9 month market entry. Control is traded for speed — Mobilé depends on the licensor's technology quality but gains immediate market access.",
      evidence: '5G licensing = 6-9 month launch vs 2-3 year in-house; 15-20% licensing premium; no proprietary IP',
      waveId: '5g',
    },
    {
      mode: 'Joint Venture / Partnership',
      control: 4,
      risk: 3,
      commitment: 3,
      description: 'Shared ownership and control with a local/technology partner — balances risk and capability access',
      mobileRelevance: true,
      mobileApplication: 'AI R&D partnerships represent a joint venture-like structure — shared risk, shared knowledge, access to capabilities Mobilé lacks internally. Apple/Samsung/Qualcomm partnerships or university R&D collaborations for AI device development.',
      evidence: '$150M AI R&D investment; Apple/Samsung/Qualcomm already active; partnership reduces individual risk',
      waveId: 'ai',
    },
    {
      mode: 'Greenfield Investment',
      control: 5,
      risk: 5,
      commitment: 5,
      description: 'Building new wholly-owned facility from scratch — maximum control, maximum commitment',
      mobileRelevance: true,
      mobileApplication: "Vietnam plant expansion represents greenfield investment — Mobilé is building new production capacity from scratch in a foreign location. This provides maximum control over production quality and costs ($6/hr labour, $3.3M/line) but requires 2-year lead time and significant capital commitment.",
      evidence: 'Vietnam: $3.3M/line, $6/hr, 2-year lead time, zero Asian tariff, EVFTA access',
      waveId: '4g',
    },
    {
      mode: 'Wholly Owned Subsidiary',
      control: 5,
      risk: 5,
      commitment: 5,
      description: 'Full ownership and operational control of foreign operations',
      mobileRelevance: true,
      mobileApplication: "Atlanta manufacturing is Mobilé's wholly-owned home-market production base — 12 lines, deep learning curve, $2.9M/line. Full control over quality, production scheduling, and IP. This is the highest-control entry mode and serves as the anchor for US and EU markets.",
      evidence: 'Atlanta: 12 lines, $2.9M/line, $28/hr, years of learning-curve efficiency, zero domestic tariff',
      waveId: '4g',
    },
  ],
  waveEntryModes: [
    {
      wave: 'Wave 1: 4G',
      waveId: '4g',
      color: '#3B6FD4',
      modes: ['Wholly Owned Subsidiary (Atlanta)', 'Greenfield Investment (Vietnam)', 'Direct Export (Atlanta → EU)'],
      controlLevel: 'Maximum',
      reasoning: 'Established technology with known production requirements — high-control modes are appropriate and already in place. No capability gaps require external partnerships.',
    },
    {
      wave: 'Wave 2: 5G',
      waveId: '5g',
      color: '#2B8A5E',
      modes: ['Technology Licensing (5G chipset)', 'Wholly Owned Manufacturing (adapted existing plants)'],
      controlLevel: 'Mixed — low control on technology, high on manufacturing',
      reasoning: 'Speed-to-market imperative forces a lower-control entry mode (licensing) for technology acquisition, while manufacturing retains high control. This hybrid approach trades IP independence for market timing.',
    },
    {
      wave: 'Wave 3: AI',
      waveId: 'ai',
      color: '#7B5EA7',
      modes: ['Joint Venture / R&D Partnership', 'Internal R&D ($150M)', 'Potentially licensing'],
      controlLevel: 'Mixed — partnership for capability, internal for core IP',
      reasoning: 'AI device development may require partnership-based entry modes to access specialised AI/ML capabilities. The optimal mix balances learning (partnership) with IP protection (internal R&D).',
    },
  ],
  keyFindings: {
    multiModalApproach:
      "Mobilé's three-wave strategy requires three different entry mode strategies simultaneously — wholly-owned for established 4G, licensing for urgent 5G, partnership for emerging AI. This multi-modal approach is strategically sound but operationally complex.",
    controlTradeoff:
      'The 5G licensing decision is the most significant entry mode trade-off: Mobilé sacrifices technology control and IP ownership for speed-to-market (6-9 months vs 2-3 years). This is justified by the urgency of the 5G gap but creates long-term dependency on external technology providers.',
    task4Connection:
      "Entry mode analysis directly supports Task 4's recommendation to license 5G technology rather than build in-house. The entry mode framework provides theoretical justification for trading control for speed when market timing is the critical success factor.",
  },
}

// ============================================================
// 6. LEVELS OF STRATEGY
// ============================================================

export const levelsOfStrategy = {
  frameworkJustification: {
    title: 'Why Levels of Strategy for Mobilé Inc.',
    reasoning:
      "The Levels of Strategy framework (Corporate → Business → Functional → Operational) provides an organising lens for how Mobilé's strategic decisions cascade from portfolio-level choices down to operational execution. For a company managing three technology waves across three markets, clarity on WHICH level each decision belongs to prevents strategic confusion.",
    reference:
      "Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regnér, P. (2017) Exploring Strategy. 11th edn. Harlow: Pearson. Chapter 7.",
  },
  levels: [
    {
      level: 'Corporate Strategy',
      question: 'What businesses should we be in? How do we allocate resources across them?',
      color: '#7B5EA7',
      mobileApplication: [
        'Three-wave portfolio management: deciding resource split across 4G, 5G, and AI',
        'Geographic scope: operating across USA, Europe, and Asia simultaneously',
        'Investment sequencing: 55% to 5G, 25% to 4G defence, 20% to AI R&D',
        'Cash floor management: maintaining $90M reserve across all investments',
        'Dual-plant manufacturing strategy (Atlanta + Vietnam) as corporate infrastructure',
      ],
      decisionExamples: [
        'Allocate 55% of investment to 5G vs alternative splits',
        'Commit $150M to AI R&D before proven market demand',
        'Accept 4G market share decline (25% → 22%) to fund other waves',
      ],
    },
    {
      level: 'Business Strategy',
      question: 'How do we compete in each market? What is our competitive advantage?',
      color: '#2B8A5E',
      mobileApplication: [
        'USA: Premium differentiation strategy for 5G, brand-led marketing, first-mover positioning',
        'Europe: Sustainability-integrated differentiation, EVFTA cost advantage, feature-focused positioning',
        'Asia: Dual-tier competitive strategy — premium 5G in urban + cost-competitive mass-market via Vietnam',
        'Post-DOJ competitive response: transitioning from tacit coordination to genuine differentiation',
      ],
      decisionExamples: [
        'Price 5G at premium in US/EU vs competitive in Asia',
        'Position as sustainability leader in EU market',
        'Offer dual 5G/4G product range for bifurcated Asian market',
      ],
    },
    {
      level: 'Functional Strategy',
      question: 'How does each function support the business strategy?',
      color: '#3B6FD4',
      mobileApplication: [
        'R&D: Redirect from 4G optimisation to 5G development and AI research',
        'Manufacturing: Retool Atlanta/Vietnam for 5G production; plan AI device manufacturing',
        'Marketing: Build 5G brand positioning across three markets with differentiated messaging',
        'Finance: Manage cash flow within $90M floor constraint; sequence investments',
        'HR: Acquire 5G/AI technical talent; manage dual-plant workforce',
      ],
      decisionExamples: [
        'Redirect R&D budget from 4G to 5G/AI',
        'Hire 5G engineering talent vs retrain existing workforce',
        'Design market-specific marketing campaigns',
      ],
    },
    {
      level: 'Operational Strategy',
      question: 'How do we execute day-to-day to deliver functional strategy?',
      color: '#999999',
      mobileApplication: [
        'JIT production scheduling for 5G launch with uncertain demand forecasts',
        'Supply chain reconfiguration for 5G components (licensing arrangements)',
        'Production line retooling or new line installation ($2.9M-$3.3M per line)',
        'Quality control adaptation for new 5G/AI product specifications',
        'Logistics optimisation: Atlanta→US/EU + Vietnam→Asia/EU trade routes',
      ],
      decisionExamples: [
        'Number of production lines to convert/add for 5G',
        'JIT parameters for uncertain 5G demand forecasting',
        'Vietnam capacity ramp-up timeline (2-year lead time)',
      ],
    },
  ],
  keyFinding:
    "The Levels of Strategy framework reveals that Mobilé's three-wave challenge touches ALL four strategic levels simultaneously. Corporate strategy determines the wave portfolio and resource allocation. Business strategy differentiates competitive positioning by market. Functional strategy redirects capabilities toward 5G/AI. Operational strategy executes the physical transformation. Failure at ANY level cascades through all others — this is why the strategic challenge is so complex.",
}

// ============================================================
// 7. INTEGRATION STRATEGIES
// ============================================================

export const integrationStrategies = {
  frameworkJustification: {
    title: 'Why Integration Strategies for Mobilé Inc.',
    reasoning:
      "Integration strategy analysis (horizontal vs vertical, forward vs backward) reveals how Mobilé's value chain boundaries are shifting across the three waves. The 5G licensing decision is explicitly a choice NOT to vertically integrate, while the Vietnam plant expansion represents vertical integration in manufacturing. These decisions have direct implications for control, cost, and competitive positioning.",
    reference:
      "Johnson, G., Whittington, R., Scholes, K., Angwin, D. and Regnér, P. (2017) Exploring Strategy. 11th edn. Harlow: Pearson. Chapter 8.",
  },
  types: [
    {
      type: 'Vertical Integration — Backward',
      description: 'Owning/controlling upstream supply chain (components, raw materials, technology)',
      color: '#3B6FD4',
      mobileDecisions: [
        {
          decision: '5G Technology: Choose NOT to backward-integrate',
          explanation: 'Mobilé is licensing 5G chipset technology rather than developing it in-house. This is a deliberate choice against backward vertical integration — trading control and IP ownership for speed-to-market (6-9 months vs 2-3 years).',
          wave: '5g',
          tradeoff: 'Speed + lower upfront cost vs. long-term technology dependency + licensing premium (15-20%)',
        },
        {
          decision: 'AI R&D: Partial backward integration',
          explanation: 'The $150M AI R&D investment represents an attempt to build internal AI capability — partial backward integration to avoid complete dependency on external AI technology providers.',
          wave: 'ai',
          tradeoff: 'IP ownership + long-term control vs. higher upfront cost + uncertain timeline',
        },
      ],
    },
    {
      type: 'Vertical Integration — Forward',
      description: 'Owning/controlling downstream distribution and customer-facing operations',
      color: '#2B8A5E',
      mobileDecisions: [
        {
          decision: 'Direct market presence in all three markets',
          explanation: 'Mobilé maintains forward-integrated distribution and marketing in USA, Europe, and Asia. This provides direct customer relationships and market intelligence — critical for the differentiated 5G launch positioning.',
          wave: 'all',
          tradeoff: 'Market control + customer data + brand ownership vs. higher fixed costs across three markets',
        },
      ],
    },
    {
      type: 'Horizontal Integration',
      description: 'Acquiring or collaborating with firms at the same value chain stage',
      color: '#7B5EA7',
      mobileDecisions: [
        {
          decision: 'AI partnerships = horizontal collaboration',
          explanation: 'Future AI device development may involve partnerships with other device manufacturers or AI-specialist firms. This is horizontal collaboration at the product development stage — sharing risk and capability without full merger/acquisition.',
          wave: 'ai',
          tradeoff: 'Shared risk + capability access vs. shared returns + potential IP leakage',
        },
        {
          decision: 'No acquisition of competitors (post-DOJ)',
          explanation: 'The DOJ intervention that dismantled tacit price coordination makes horizontal integration through acquisition of competitors politically and legally risky. Organic growth and partnership are the viable paths.',
          wave: 'all',
          tradeoff: 'Regulatory compliance + organic capability building vs. slower market share growth',
        },
      ],
    },
  ],
  keyFinding:
    "Integration strategy analysis reveals a deliberate pattern: Mobilé is SELECTIVELY integrating and dis-integrating across different technology waves. 4G operations are fully vertically integrated (owned manufacturing, direct distribution). 5G entry deliberately avoids backward integration (licensing over in-house). AI strategy pursues partial integration (internal R&D + external partnerships). This wave-specific integration approach reflects the different maturity, urgency, and capability requirements of each technology.",
}
