"""
Slide content for Mobilé Inc. Strategic Analysis Presentation (28 slides).
Each slide is a dict with: number, type, title, subtitle, body, table_data,
diagram_ref, speaker_notes, references, wave_tags.

Content rules applied:
- Every bullet contains case-specific Mobilé Inc. data
- No banned AI phrases (student-voice-writer skill)
- Three-wave lens on every slide
- SWOT (slides 19-21) traces to Task 2
- Task 4 (slides 22-27) consistent with Tasks 1-3
"""

SLIDES = [
    # ── Slide 1: Title Page ──
    {
        "number": 1,
        "type": "title",
        "title": "Mobilé Inc. Strategic Analysis 2025",
        "subtitle": "International Business Strategy with Simulation - MN7002NI",
        "body": [
            "Aayush Man Singh | np01mb7a250043 | 18029779",
            "Gaurav Dangol | np01mb7a250083 | 18029811",
            "Ruchan Jung Sijapati | NP01MB7A250143 | 20048645",
            "Shaswat Nibha Maharjan | np01mb7a250162",
            "Bishwesh Ram Shrestha | np01mb7a250082 | 25030247",
            "Bishan Subedi | np01mb7a250010 | 25030193",
        ],
        "table_data": None,
        "diagram_ref": "logo_placeholder.png",
        "speaker_notes": (
            "Good morning. We are presenting our strategic analysis of "
            "Mobilé Inc., a US smartphone manufacturer competing across "
            "the US, European, and Asian markets. Our analysis covers "
            "strategy direction, internal and external analysis, SWOT "
            "synthesis, and a clear strategic recommendation."
        ),
        "references": [],
        "wave_tags": [],
    },

    # ── Slide 2: Agenda ──
    {
        "number": 2,
        "type": "agenda",
        "title": "Agenda",
        "subtitle": None,
        "body": [
            "Executive Summary - strategic position at a glance",
            "Three Waves Overview - the 4G/5G/AI challenge facing Mobilé",
            "Task 1: Strategy Process - vision, mission, goals, SMART objectives",
            "Task 2: Internal & External Analysis - VRIO, Value Chain, PESTLE, Porter's, Strategic Group, CSF",
            "Task 3: SWOT Synthesis - evidenced, case-specific, strategically interpreted",
            "Task 4: Strategic Recommendation - the choice, market plans, trade-offs",
            "References",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "Here is how we have structured our presentation. We start with "
            "an executive summary, then walk through the three-wave context "
            "before going into each task. The analysis builds - Task 2 feeds "
            "the SWOT, and the SWOT sets up our recommendation in Task 4."
        ),
        "references": [],
        "wave_tags": [],
    },

    # ── Slide 3: Executive Summary ──
    {
        "number": 3,
        "type": "executive_summary",
        "title": "Executive Summary",
        "subtitle": "Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition",
        "body": [
            "Mobilé Inc. enters 2025 at an inflection point - the DOJ ended tacit price coordination, and all four firms (25% share each) now compete openly for the first time",
            "The company earns ~$4.8B annually from 4G alone but has zero 5G products despite 70%+ US urban 5G coverage and 38% of US consumers already owning 5G devices",
            "Three technology waves compete for one finite resource pool: defend 4G cash, launch 5G urgently, invest in AI R&D before Apple/Samsung/Qualcomm close the window - all above a $90M cash floor",
            "Our recommendation: license 5G for a fast Q2 2026 launch in the US and Europe, commit $150M to AI R&D for a 2027 prototype, and manage 4G decline with 8% cost cuts via Vietnam expansion",
            "The analysis shows Mobilé has the capabilities - manufacturing, R&D base, global presence - but they are all pointed at 4G. The strategic task is realignment, not reinvention",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "This slide gives the board-level picture. The key message is "
            "that Mobilé has what it needs internally - but everything is "
            "configured for 4G while the market is moving to 5G and AI. "
            "Speed to 5G market is the number one priority. We will walk "
            "through the evidence behind each claim in the following slides."
        ),
        "references": [
            "Baghai, Coley and White (1999) - Three Horizons framework",
            "GSMA (2024) - 5G market data",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 4: Three Waves Overview ──
    {
        "number": 4,
        "type": "three_waves",
        "title": "The Three Waves of Value",
        "subtitle": "McKinsey Three Horizons Applied to Mobilé Inc.",
        "body": [
            "Wave 1 - 4G LTE (Horizon 1): Mature cash engine generating ~$4.8B annually at feature level 6. Post-DOJ price competition is eroding margins. Role: defend and extract cash to fund Waves 2 and 3",
            "Wave 2 - 5G Sub-6GHz (Horizon 2): 70%+ US urban coverage, 38% US adoption, 28% EU adoption. Mobilé has NOT launched a single 5G handset - this is the most critical competitive gap",
            "Wave 3 - AI-Integrated Devices (Horizon 3): On-device AI chips for photography, health monitoring, personal assistants. Apple, Samsung, Qualcomm are active. Commercial availability 2027-28. R&D decisions made now determine leader vs follower",
            "The central tension: Wave 1 generates the cash, Wave 2 demands it immediately, Wave 3 requires investment before generating any return - and the $90M cash floor limits how much can be spent at once",
        ],
        "table_data": {
            "headers": ["Wave", "Status", "Revenue", "Key Metric", "Strategic Role"],
            "rows": [
                ["4G LTE", "Mature", "~$4.8B (100%)", "Feature level 6", "Cash engine"],
                ["5G Sub-6GHz", "Surging", "$0 (no product)", "70%+ US coverage", "Urgent launch"],
                ["AI Devices", "Emerging", "$0 (2027-28)", "Apple/Samsung active", "R&D bet"],
            ],
        },
        "diagram_ref": "three_waves_diagram.png",
        "speaker_notes": (
            "This is the framing for everything that follows. Mobilé is "
            "sitting on a $4.8 billion 4G business, but that is a depleting "
            "asset. 5G infrastructure is already built - 70% of US urban "
            "areas - and Mobilé has nothing to sell into that market. "
            "Meanwhile, AI-device R&D cannot wait for 5G to become "
            "profitable. All three waves need money at the same time."
        ),
        "references": [
            "Baghai, Coley and White (1999)",
            "GSMA (2024)",
            "Ericsson (2024)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 5: Task 1 - Vision Statement ──
    {
        "number": 5,
        "type": "task1_vision",
        "title": "Task 1: Vision Statement",
        "subtitle": "Where Mobilé Inc. Is Heading",
        "body": [
            '"To lead the global smartphone industry through the 4G-to-5G transition and into the AI-device era by 2028, delivering differentiated technology across the US, European, and Asian markets while sustaining financial resilience through disciplined multi-horizon resource allocation."',
            "Names all three technology waves - not just 5G, not just AI, but the full transition path from 4G through to AI-integrated devices",
            "2028 horizon matches the projected timeline for AI-device commercial availability (case study: Apple/Samsung/Qualcomm targeting 2027-28)",
            "Covers all three markets - each needing a different approach: premium in the US, feature/sustainability in Europe, bifurcated in Asia",
            "Financial discipline built in - references the resource allocation constraint that defines Mobilé's entire strategic challenge",
            "Grounded in the post-DOJ reality - this is a vision for a company entering open competition, not defending cartel-era comfort",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "Our vision is deliberately specific to Mobilé's situation. A "
            "generic vision like 'be the market leader' would not tell us "
            "anything. This one names the three waves, the three markets, "
            "the 2028 timeline, and the cash constraint. It gives the "
            "company a clear direction to evaluate every decision against."
        ),
        "references": [
            "Baghai, Coley and White (1999)",
            "Johnson et al. (2017) - strategic direction",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 6: Task 1 - Mission Statement ──
    {
        "number": 6,
        "type": "task1_mission",
        "title": "Task 1: Mission Statement",
        "subtitle": "What Mobilé Does, For Whom, and How It Differentiates",
        "body": [
            "What: designs, manufactures, and delivers smartphones - dual plants in Atlanta (12 lines, $2.9M/line) and Vietnam ($3.3M/line, $6/hr labour)",
            "For whom: consumers across three distinct markets - US (~$80B, 88% penetration), Europe (~450M users), Asia (China ~1B users, India/SE Asia mass-market)",
            "How it differentiates across waves: defending 4G using Vietnam's $6/hr cost edge vs Atlanta's $28/hr, launching 5G for brand-conscious US and feature-driven EU segments, and investing in AI R&D before the 2027-28 window closes",
            "Central constraint: all three from a single, finite resource base - the $90M cash floor means we cannot max out everything at once",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "The mission breaks down into what, for whom, and how. Notice "
            "each wave gets its own differentiation approach - we are not "
            "treating this as one strategy for one market. The mission also "
            "names the constraint up front, because any mission that ignores "
            "the cash floor is not realistic for Mobilé."
        ),
        "references": [
            "Johnson et al. (2017)",
            "Hill (2021) - international business strategy",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 7: Task 1 - Strategic Goals ──
    {
        "number": 7,
        "type": "task1_goals",
        "title": "Task 1: Strategic Goals",
        "subtitle": "Five Goals Covering All Three Waves + Cross-Wave Enablers",
        "body": [
            "G1 (Wave 1): Defend 4G revenue base - protect the $4.8B cash engine while managing controlled decline as 5G takes over",
            "G2 (Wave 2): Achieve competitive 5G market entry - launch before the first-mover window closes, target US and European premium segments",
            "G3 (Wave 3): Secure AI-device technology position - R&D commitment now so Mobilé leads, not follows, when AI devices hit market in 2027-28",
            "G4 (Cross-wave): Maintain financial resilience - stay above the $90M cash floor, no emergency borrowing at 7.8%",
            "G5 (Cross-wave): Optimise global production - expand Vietnam (2-year lead time means commit now), coordinate both plants for multi-wave output",
        ],
        "table_data": None,
        "diagram_ref": "goal_hierarchy_diagram.png",
        "speaker_notes": (
            "Five goals - one for each wave plus two cross-wave enablers. "
            "The key thing is how they connect. G1 generates the cash that "
            "funds G2 and G3. G4 constrains how much we can spend. G5 builds "
            "the production capacity needed across all three waves. They are "
            "not independent - they form a system."
        ),
        "references": [
            "Johnson et al. (2017)",
            "Baghai, Coley and White (1999)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 8: Task 1 - SMART Objectives ──
    {
        "number": 8,
        "type": "task1_smart",
        "title": "Task 1: SMART Objectives",
        "subtitle": "Quantified Targets Traceable to Case Data",
        "body": [
            "SO1 (4G): Maintain at least 22% Asian 4G share through Q4 2026, cut per-unit costs by 8% via Vietnam expansion, keep annual 4G revenue above $4.0B",
            "SO2 (5G): Launch first 5G handset in US and EU by Q2 2026, targeting 10% US and 8% EU 5G market share within 12 months",
            "SO3 (AI): Allocate $150M to AI R&D by end FY2026, form dedicated AI team, secure 2 tech partnerships, working prototype by Q4 2027",
            "SO4 (Financial): Cash reserves above $120M at all times (30% buffer over $90M floor), max $200M borrowing at 4.8%, zero emergency borrowing",
            "SO5 (Production): Commission 4 new Vietnam lines ($3.3M each = $13.2M) by Q1 2026 - capacity arrives 2028 at projected peak demand",
        ],
        "table_data": {
            "headers": ["Objective", "Wave", "Key Metric", "Deadline"],
            "rows": [
                ["SO1: 4G Defence", "Wave 1", "22% share, 8% cost cut, $4.0B floor", "Q4 2026"],
                ["SO2: 5G Launch", "Wave 2", "10% US / 8% EU 5G share", "Q2 2026 launch"],
                ["SO3: AI R&D", "Wave 3", "$150M, 2 partnerships, prototype", "Q4 2027"],
                ["SO4: Cash Floor", "All", "$120M min, zero emergency loans", "Ongoing"],
                ["SO5: Capacity", "All", "4 Vietnam lines (+33%)", "Q1 2026"],
            ],
        },
        "diagram_ref": None,
        "speaker_notes": (
            "Every number here traces to the case study. The 22% share "
            "is a deliberate 3 percentage-point decline from 25% - we are "
            "choosing to free up resources for 5G and AI rather than defend "
            "every point of 4G share. The $120M buffer gives us a 30% "
            "safety margin above the $90M floor. These are realistic "
            "targets, not aspirational ones."
        ),
        "references": [
            "Johnson et al. (2017)",
            "GSMA (2024)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 9: Task 2 - VRIO Analysis (Part 1) ──
    {
        "number": 9,
        "type": "task2_vrio",
        "title": "Task 2: VRIO Analysis - Internal Resources",
        "subtitle": "Which of Mobilé's Resources Actually Provide Competitive Advantage?",
        "body": [
            "After the DOJ ended price coordination, Mobilé needs to know which resources can sustain advantage vs which are just parity - VRIO answers that question when all four firms start equal at 25% share",
            "Atlanta learning-curve efficiencies (12 lines, years of operation) = temporary competitive advantage - rivals can invest $2.9M/line but cannot shortcut the accumulated operational knowledge",
            "Vietnam plant ($6/hr labour) = competitive parity only - Samsung, Intel, and LG all operate in Vietnam with access to the same cost advantage",
            "4G cash engine ($4.8B) = competitive parity and declining - all four firms have equivalent 4G businesses, and post-DOJ pricing is compressing margins for everyone",
            "R&D infrastructure = potential advantage IF redirected to 5G and AI - currently producing zero next-gen outputs while Apple/Samsung/Qualcomm advance",
        ],
        "table_data": {
            "headers": ["Resource", "V", "R", "I", "O", "Result"],
            "rows": [
                ["Atlanta learning curve", "Yes", "Partial", "Yes", "Yes", "Temporary advantage"],
                ["Vietnam $6/hr labour", "Yes", "No", "No", "Partial", "Parity"],
                ["4G cash engine ($4.8B)", "Yes", "No", "No", "Yes", "Parity (declining)"],
                ["R&D infrastructure", "Yes", "Partial", "Yes", "Unknown", "Potential advantage"],
                ["Global brand presence", "Yes", "No", "No", "Yes", "Parity"],
                ["JIT production", "Yes", "No", "No", "Yes", "Parity"],
            ],
        },
        "diagram_ref": None,
        "speaker_notes": (
            "The VRIO result is sobering. Mobilé currently holds no "
            "sustained competitive advantages - only Atlanta's learning "
            "curve is a temporary advantage, and the R&D base is a "
            "potential one. Everything else is parity. That means "
            "differentiation has to come from new capabilities - 5G "
            "product and AI R&D - not from what Mobilé already has."
        ),
        "references": [
            "Barney (1991) - VRIO framework",
            "Grant (2019) - RBV",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 10: Task 2 - Value Chain Analysis (Part 2) ──
    {
        "number": 10,
        "type": "task2_value_chain",
        "title": "Task 2: Value Chain Analysis",
        "subtitle": "Where Mobilé Creates Value - and Where the Bottlenecks Are",
        "body": [
            "We chose Value Chain because Mobilé's dual-plant structure, JIT system, and R&D decisions sit at the centre of this case - the framework shows where the real constraints are",
            "Operations strength: dual-plant setup enables market-optimised production - Atlanta ($28/hr, learning curve) for US/EU premium, Vietnam ($6/hr, zero Asian tariff, EVFTA) for Asia/EU cost-competitive",
            "Biggest bottleneck: 2-year lead time for new production capacity - lines committed in 2025 arrive in 2027 at exactly the time 5G demand peaks and AI devices begin",
            "R&D is THE most critical support activity - all directed at 4G right now, producing zero 5G or AI outputs. The in-house vs licensing decision has irreversible long-term IP implications",
            "JIT creates an asymmetric risk for new products: overproduction costs 5-10% penalty, but underproduction means permanently lost sales with no way to recover. For uncertain 5G launch volumes, that is a serious problem. Marketing also has nothing to sell into the fastest-growing 5G segment",
        ],
        "table_data": None,
        "diagram_ref": "value_chain_diagram.png",
        "speaker_notes": (
            "The value chain shows that Mobilé's operations are strong for "
            "4G but not set up for the 5G world. The 2-year production lag "
            "is especially important - any capacity decision we make now "
            "takes effect in 2027. That means we cannot wait to see how 5G "
            "does before expanding. And R&D is the single most important "
            "support activity because the in-house vs licensing choice for "
            "5G affects our competitive position for years."
        ),
        "references": [
            "Porter (1985) - Value Chain",
            "Shingo (1989) - JIT manufacturing",
            "Ferdows (1997) - dual-plant strategy",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 11: Task 2 - PESTLE Analysis (Part 1) ──
    {
        "number": 11,
        "type": "task2_pestle",
        "title": "Task 2: PESTLE Analysis - Macro Forces",
        "subtitle": "What External Forces Are Reshaping Mobilé's Environment?",
        "body": [
            "We chose PESTLE because the DOJ intervention, trade tensions, 5G rollout, AI development, and sustainability mandates all directly reshape Mobilé's options across its three markets",
            "Political: DOJ antitrust action (early 2025) ended tacit pricing - the single most impactful macro force. US-Vietnam trade tensions create ~$12+/unit tariff risk on Asia-to-US exports",
            "Economic: $90M cash floor is the binding financial constraint. Emergency borrowing at 7.8% (3% above normal 4.8%) carries both cost and investor signal damage. Asian growth at 22-30% p.a. is the highest opportunity",
            "Social: 38% US and 28% EU consumers already own 5G devices - proven demand, not speculation. AI-powered use cases (cloud gaming, AR, translation) driving adoption beyond initial forecasts",
            "Technological: 5G infrastructure covers 70%+ of US urban areas - Mobilé's missing product is the bottleneck, not the network. AI on-device chips from Apple/Samsung/Qualcomm mean R&D decisions NOW determine 2027 positioning",
            "Legal/Environmental: EVFTA enables Vietnam-to-Europe exports, while EU repairability and e-waste regulations create both compliance burden and a real differentiation opportunity for European positioning",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "PESTLE tells us the external world is not waiting for Mobilé. "
            "The DOJ changed everything - margins are compressing, "
            "competition is direct, and the stable oligopoly is over. "
            "The 5G infrastructure is built and consumers are buying. "
            "The only thing missing is Mobilé's product. And on the AI "
            "front, the named competitors are already investing."
        ),
        "references": [
            "Johnson et al. (2017) - PESTLE",
            "GSMA (2024)",
            "ITU (2024)",
            "European Commission (2020) - EVFTA",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 12: Task 2 - PESTLE Deep Dive ──
    {
        "number": 12,
        "type": "task2_pestle_detail",
        "title": "Task 2: PESTLE - Impact by Wave",
        "subtitle": "How Each Factor Connects to the Three-Wave Challenge",
        "body": [
            "The DOJ intervention affects all three waves: it compressed 4G margins (reducing cash to fund everything), intensified the 5G race (rivals cutting prices and investing), and raised the stakes for AI R&D (no comfortable profit base to fall back on)",
            "Carrier subsidies for 5G are accelerating consumer adoption faster than base forecasts - this shortens the first-mover window and makes Mobilé's 5G absence more costly with every quarter",
            "Vietnam tariff risk ($12+/unit) blocks the Vietnam-to-US export route but EVFTA keeps Vietnam-to-Europe open - production strategy must factor in this geopolitical split",
            "EU sustainability regulations (repairability, e-waste) can be turned from a compliance cost into a differentiation advantage in the European market if embedded in product design",
        ],
        "table_data": {
            "headers": ["PESTLE Factor", "Wave 1 (4G)", "Wave 2 (5G)", "Wave 3 (AI)"],
            "rows": [
                ["DOJ intervention", "Margin compression", "Race intensified", "Higher stakes"],
                ["$90M cash floor", "Limits defence spend", "Limits launch scale", "Limits R&D budget"],
                ["5G adoption (38% US)", " - ", "Proven demand, urgency", "AI use cases pull demand"],
                ["Vietnam tariffs", "Cost risk for US sales", "5G export blocked", " - "],
                ["EU sustainability", "Compliance needed", "Differentiation possible", "Design factor"],
            ],
        },
        "diagram_ref": None,
        "speaker_notes": (
            "This table shows how each PESTLE factor cuts across all three "
            "waves. The DOJ is the dominating force - it doesn't just affect "
            "4G pricing, it changes the entire competitive structure. And "
            "the $90M cash floor limits what Mobilé can do in response to "
            "every single one of these factors."
        ),
        "references": [
            "Johnson et al. (2017)",
            "WTO (2024) - trade tensions",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 13: Task 2 - Porter's Five Forces (Part 1) ──
    {
        "number": 13,
        "type": "task2_porters",
        "title": "Task 2: Porter's Five Forces",
        "subtitle": "Industry Structure After the DOJ Intervention",
        "body": [
            "We applied Porter's because the DOJ intervention fundamentally changed competitive rivalry - the central force. Understanding all five forces reveals what constrains Mobilé's 5G and AI decisions",
            "Competitive Rivalry - HIGH: four equally-sized firms (25% each) in open conflict for the first time. No pricing power. High exit barriers (sunk costs in manufacturing, R&D). Everyone racing on 5G, AI, and price simultaneously",
            "New Entrants - LOW: very high capital requirements ($2.9-3.3M per production line), years of learning curve, established brands. The fight is among the existing four, not newcomers",
            "Buyer Power - MODERATE to HIGH (rising): low switching costs for consumers, rising price sensitivity post-DOJ, high information availability. First firm to establish 5G brand loyalty partially offsets this",
            "Supplier Power - MODERATE: multiple sources for most components, but 5G licensing creates dependency and AI chips are an emerging bottleneck. The in-house vs license decision directly affects this force",
            "Substitutes - LOW: no real alternative to smartphones in 2025. The substitution risk is within the category - being stuck on 4G while the market moves to 5G and AI",
        ],
        "table_data": None,
        "diagram_ref": "porters_five_forces_diagram.png",
        "speaker_notes": (
            "Porter's Five Forces shows an industry that has become much "
            "more competitive since the DOJ action. Rivalry is the dominant "
            "force - four equal firms with no leader and no follower. The "
            "key insight is that the only way to break out of this symmetric "
            "rivalry is to be first to differentiate through 5G or AI. "
            "That is why speed to 5G market matters so much."
        ),
        "references": [
            "Porter (1980) - Five Forces",
            "Johnson et al. (2017)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 14: Task 2 - Porter's Five Forces (Part 2) ──
    {
        "number": 14,
        "type": "task2_porters_insight",
        "title": "Task 2: Porter's - The Symmetric Oligopoly Problem",
        "subtitle": "Why First-Mover Advantage Is the Only Way to Break the Deadlock",
        "body": [
            "Four firms at 25% each with identical capabilities is analytically unusual and strategically critical - no one has a natural advantage, so the only way to break the symmetry is to move first on 5G or AI",
            "Whoever launches 5G first gains a structural advantage the others cannot easily close: premium pricing, brand loyalty, carrier partnerships all compound over time. Post-DOJ pricing transparency means consumers can compare everything - the firm that offers 5G first captures the switching customers",
            "This symmetric structure is also why the $90M cash floor matters so much: if all four firms try to invest simultaneously and one triggers emergency borrowing, it gets a dual penalty - financial cost (7.8% vs 4.8%) plus TSR damage",
            "For Mobilé, the implication is clear: speed to 5G market is not just important, it is THE mechanism for breaking out of a symmetric oligopoly where no other differentiation exists",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "This is the key Porter's insight for Mobilé specifically. Four "
            "equal firms is not normal - it means the first one to break from "
            "the pack with a 5G product captures an outsized advantage. Think "
            "of it as a race where everyone starts at the same line. That is "
            "why we prioritise speed to 5G market above everything else."
        ),
        "references": [
            "Porter (1980)",
        ],
        "wave_tags": ["5G"],
    },

    # ── Slide 15: Task 2 - Strategic Group Analysis ──
    {
        "number": 15,
        "type": "task2_strategic_group",
        "title": "Task 2: Strategic Group Analysis",
        "subtitle": "Where Mobilé Sits Now vs Where It Needs to Be",
        "body": [
            "All four firms sit in one cluster today - Global 4G Incumbents, 25% each. The DOJ removed the coordination that held them together. Strategic Group Analysis shows where the groups will form and which one Mobilé should aim for",
            "Right now: everyone clusters together - same markets, same 4G-only products, same share. This is unstable and about to break apart",
            "Target Group A - '5G First-Movers': firms that launch 5G first capture premium pricing, brand loyalty, and carrier partnerships. Mobility barriers form quickly once positions are taken",
            "Avoid Group B - '4G Defenders': firms that over-invest in 4G become technology followers. Revenue looks safe short-term but erodes long-term. Group C - 'Technology Leaders' investing in both 5G AND AI R&D is the ultimate destination",
            "Mobilé's trajectory: move to Group A fast (5G licensing), then build toward Group C (5G + AI R&D). But the window for migration is time-limited - once a competitor locks in 5G leadership, the barriers become expensive to overcome",
        ],
        "table_data": None,
        "diagram_ref": "strategic_group_map.png",
        "speaker_notes": (
            "Strategic Group Analysis reveals something PESTLE and Porter's "
            "miss: the timing of strategic moves matters as much as the "
            "direction. Positions are still fluid right now - no one has "
            "permanently captured 5G first-mover status. But that window is "
            "closing. Our recommendation is to move to Group A fast via 5G "
            "licensing, then build toward Group C with AI R&D investment."
        ),
        "references": [
            "Johnson et al. (2017) - Strategic Groups",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 16: Task 2 - CSF Analysis ──
    {
        "number": 16,
        "type": "task2_csf",
        "title": "Task 2: Critical Success Factors",
        "subtitle": "What Must Go Right - Prioritised Across Three Waves",
        "body": [
            "With multiple simultaneous challenges, CSF analysis helps Mobilé distinguish what is truly critical from what is merely important - and that directly informs where to spend the limited cash",
            "#1 - Speed to 5G market (Wave 2): most time-sensitive gap. 38% of US consumers own 5G devices and Mobilé has zero product. Every quarter of delay cedes pricing power that is difficult to recover",
            "#2 - AI R&D commitment (Wave 3): window open now but closing. Apple/Samsung/Qualcomm already active. Delay permanently forfeits technology leadership, not just market share",
            "#3 - 4G cash defence (Wave 1): funds everything else. If 4G collapses, there is no money for 5G or AI. But over-defending 4G at the expense of 5G entry is the bigger risk",
            "#4 and #5 - Financial discipline + production capacity (Cross-wave): the $90M floor shapes all decisions (breach = 7.8% emergency loans + investor damage), and the 2-year lead time on new lines means capacity expansion cannot be deferred",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "CSF gives us the priority ranking. Speed to 5G market comes "
            "first - not because the other factors do not matter, but "
            "because this one has the tightest window and the most "
            "irreversible consequences if we miss it. The ranking is: "
            "5G speed, AI commitment, 4G cash defence, financial "
            "discipline, then production capacity."
        ),
        "references": [
            "Johnson et al. (2017) - CSF",
            "GSMA (2024)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 17: Task 2 - Internal Analysis Summary ──
    {
        "number": 17,
        "type": "task2_internal_summary",
        "title": "Task 2: Internal Analysis - Key Findings",
        "subtitle": "VRIO + Value Chain Combined Picture",
        "body": [
            "Only one resource gives Mobilé a temporal edge: Atlanta's learning-curve efficiencies (12 lines, years of operational knowledge). But that only applies to 4G premium - for 5G, everyone starts from scratch (VRIO)",
            "Vietnam's $6/hr cost advantage is location-based, not proprietary - Samsung, Intel, and LG are all there too (VRIO: parity). Helps on cost, does not differentiate",
            "Every part of the value chain is configured for 4G only - R&D, production, marketing all need redirecting, not just optimising. And R&D is the single highest-impact lever: the in-house vs licensing choice plus AI commitment together set Mobilé's trajectory for 5+ years",
            "Capacity decisions made today produce output in 2027, which is exactly when 5G demand peaks - the 2-year production lead time is the binding operations constraint (Value Chain)",
            "Bottom line: Mobilé has what it needs but everything points the wrong way. The task is realignment toward 5G and AI, not reinvention",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "Pulling together VRIO and Value Chain: Mobilé is not weak - it "
            "has plants, R&D, cash, and global presence. But everything "
            "points at 4G. The internal task is to redirect existing "
            "capabilities toward 5G and AI. That is realignment, not "
            "starting over."
        ),
        "references": [
            "Barney (1991)",
            "Porter (1985)",
            "Grant (2019)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 18: Task 2 - External Analysis Summary ──
    {
        "number": 18,
        "type": "task2_external_summary",
        "title": "Task 2: External Analysis - Key Findings",
        "subtitle": "PESTLE + Porter's + Strategic Group + CSF Combined Picture",
        "body": [
            "One external force dominates everything: the DOJ intervention ended comfortable margins and forced all four firms into open competition for the first time (PESTLE + Porter's)",
            "5G infrastructure is ready and consumers are buying (70%+ US coverage, 38% adoption) - Mobilé's missing product is the bottleneck, not the network (PESTLE + CSF)",
            "Rivalry has never been higher - four equal firms racing on 5G, AI, and price simultaneously with no natural leader (Porter's). First to differentiate captures outsized returns",
            "Group positions are still fluid - no one owns 5G first-mover status permanently, but that will crystallise within 6-12 months (Strategic Group)",
            "On the AI front, Apple/Samsung/Qualcomm are already moving - delay does not just slow Mobilé down, it permanently closes the option to lead (CSF)",
            "Asia at 22-30% growth is the highest opportunity globally, but it needs a bifurcated approach: premium 5G for urban China plus cost-competitive 4G for India/SE Asia (PESTLE + Porter's)",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "The external picture is clear: the market is ready, consumers "
            "are buying, competitors are racing, and the window for both "
            "5G first-mover and AI leadership positions is open but "
            "closing. The external environment is not the problem - "
            "Mobilé's internal misalignment is."
        ),
        "references": [
            "Porter (1980)",
            "Johnson et al. (2017)",
            "GSMA (2024)",
            "Ericsson (2024)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 19: Task 3 - SWOT Matrix ──
    {
        "number": 19,
        "type": "task3_swot_matrix",
        "title": "Task 3: SWOT Synthesis - The Full Picture",
        "subtitle": "Every Point Traces to Task 2 Framework Evidence",
        "body": [],
        "table_data": {
            "headers": ["", "Helpful", "Harmful"],
            "rows": [
                [
                    "Internal",
                    (
                        "S1: Dual-plant manufacturing - Atlanta learning curve "
                        "(temp. advantage) + Vietnam $6/hr cost (parity)\n"
                        "S2: $4.8B 4G cash engine - funds Waves 2 & 3\n"
                        "S3: Existing R&D base + global management experience\n"
                        "S4: JIT production efficiency (stable 4G demand)"
                    ),
                    (
                        "W1: NO 5G product - critical gap despite 70%+ US coverage\n"
                        "W2: 100% revenue from depleting 4G - zero diversification\n"
                        "W3: Vietnam plant still building maturity (not proprietary)\n"
                        "W4: R&D not yet directed at 5G or AI"
                    ),
                ],
                [
                    "External",
                    (
                        "O1: 5G infrastructure ready - 38% US already own 5G\n"
                        "O2: AI-device window open (2025-28) - no one has shipped\n"
                        "O3: Asian growth 22-30% p.a. - highest globally\n"
                        "O4: EVFTA route + EU sustainability differentiation\n"
                        "O5: No competitor has permanently captured 5G first-mover"
                    ),
                    (
                        "T1: Post-DOJ price competition compressing margins\n"
                        "T2: Rivals may capture 5G first-mover before Mobilé\n"
                        "T3: Vietnam tariff risk (~$12+/unit US exports)\n"
                        "T4: Apple/Samsung/Qualcomm already active in AI R&D\n"
                        "T5: Simultaneous demands risk breaching $90M cash floor"
                    ),
                ],
            ],
        },
        "diagram_ref": None,
        "speaker_notes": (
            "Every single point in this SWOT traces back to our Task 2 "
            "frameworks - VRIO, Value Chain, PESTLE, Porter's, Strategic "
            "Group, and CSF. We have not introduced any new information here. "
            "The SWOT is a synthesis, not a brainstorm."
        ),
        "references": [
            "Barney (1991) - VRIO feeding S/W",
            "Porter (1985) - Value Chain feeding S/W",
            "Porter (1980) - Five Forces feeding O/T",
            "Johnson et al. (2017) - PESTLE, Strategic Group, CSF feeding O/T",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 20: Task 3 - SWOT Connections ──
    {
        "number": 20,
        "type": "task3_swot_connections",
        "title": "Task 3: Internal-External Connections",
        "subtitle": "How Strengths/Weaknesses Meet Opportunities/Threats",
        "body": [
            "S1 (dual-plant) -> O3 (Asian growth): Vietnam's $6/hr cost enables competitive pricing in the fastest-growing market (22-30% p.a.) - manufacturing strength directly enables the growth opportunity",
            "S2 (cash engine) <-> T1 (margin compression): a vicious cycle - the cash source that funds everything is being eroded by the same competition that demands the investment",
            "W1 (no 5G) -> O1 (5G market ready): THIS IS THE STRATEGIC CRISIS. 70%+ infrastructure, 38% consumer adoption, and Mobilé has zero product",
            "W4 (R&D misdirected) <-> T4 (competitor AI R&D): zero next-gen outputs from Mobilé while Apple/Samsung/Qualcomm advance - the gap widens every month of inaction",
            "S3 (R&D base) -> O2 (AI window): existing R&D can be redirected to capture AI IF commitment is made now - not starting from zero",
            "And constraining it all: T5 ($90M floor) means you cannot pursue every S-O or W-T strategy simultaneously at full scale. Investments must be sequenced",
        ],
        "table_data": None,
        "diagram_ref": "swot_connections_diagram.png",
        "speaker_notes": (
            "This slide is about the connections, not the individual points. "
            "The most important connection is W1 to O1 - that is the "
            "strategic crisis. A massive market exists and Mobilé has "
            "nothing to offer. The second most important is W4 to T4 - "
            "R&D that is not being used for next-gen while competitors "
            "are investing. And T5 - the cash floor - constrains how "
            "aggressively we can respond to all of this."
        ),
        "references": [
            "Johnson et al. (2017) - SWOT synthesis",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 21: Task 3 - SWOT Strategic Implication ──
    {
        "number": 21,
        "type": "task3_swot_implication",
        "title": "Task 3: SWOT - What This Means for Strategy",
        "subtitle": "Sufficient Capabilities, Misaligned Direction",
        "body": [
            "What the SWOT reveals: a company with sufficient capabilities that are fundamentally misaligned with external reality. Manufacturing (S1), cash (S2), R&D base (S3), efficiency (S4) - all configured for 4G while the market demands 5G and AI responses",
            "Dominant move: close the 5G gap immediately (W1 -> O1) via licensing for speed, while committing to AI R&D (W4 -> O2) for long-term technology leadership",
            "Fund it by defending - not over-investing in - the 4G cash engine (S2 -> managing T1). Accept managed decline as a deliberate trade-off, not a failure",
            "Everything must fit within the $90M cash floor constraint (T5) - investments sequenced, not simultaneous at maximum scale",
            "This leads directly to our Task 4 recommendation: Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "This is the bridge between analysis and recommendation. The "
            "SWOT tells us what to do - close the 5G gap fast, commit to "
            "AI, and manage the cash carefully. Task 4 turns this into a "
            "specific action plan with timelines and targets."
        ),
        "references": [],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 22: Task 4 - Strategic Choice ──
    {
        "number": 22,
        "type": "task4_choice",
        "title": "Task 4: Strategic Recommendation",
        "subtitle": "Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition",
        "body": [
            "Our recommendation is a sequenced dual-investment strategy: license 5G for rapid market entry within 6-9 months, while committing to in-house AI-device R&D - funded by disciplined management of the 4G cash engine",
            "5G speed-to-market is the single most important near-term move (CSF #1). License for speed first (6-9 months), then build proprietary IP for second-generation products (12-18 months post-launch)",
            "AI in parallel: $150M committed over FY2025-2026, dedicated team, 2 partnerships, working prototype Q4 2027 - do NOT wait for 5G to become profitable first",
            "4G managed decline: protect cash generation with 8% cost cuts via Vietnam, accept share decline 25% to 22%. Over-defending 4G at the expense of 5G is the single biggest strategic mistake Mobilé can make",
            "Financial guardrails: $120M cash minimum (30% above $90M floor), sequenced investment, zero emergency borrowing at any point",
            "Analytical consistency: this recommendation directly implements the SMART objectives from Task 1, addresses the SWOT findings from Task 3, and follows the CSF priority ranking from Task 2",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "This is the recommendation. It is not a summary of the "
            "analysis - it is a strategic decision. License 5G for speed, "
            "invest in AI for the future, manage 4G for cash. The three "
            "waves are interdependent and the recommendation treats them "
            "as a system, not as three separate strategies."
        ),
        "references": [
            "Baghai, Coley and White (1999) - Three Horizons",
            "Johnson et al. (2017)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 23: Task 4 - Wave 1: 4G Plan ──
    {
        "number": 23,
        "type": "task4_wave1",
        "title": "Task 4: Wave 1 - 4G Plan",
        "subtitle": "Defend, Extract, Don't Over-Invest",
        "body": [
            "4G is the cash engine that funds everything. Protect it, extract value, manage the decline - but do not pour resources into a depleting asset",
            "Atlanta: maintain premium 4G production using its 12-line learning-curve advantage ($2.9M/line, $28/hr) for US and EU premium segments",
            "Vietnam: expand for cost-competitive Asian 4G - the $6/hr vs $28/hr labour gap gives Mobilé the cost edge needed in price-sensitive India/SE Asia",
            "8% per-unit cost reduction target via Vietnam scale-up - post-DOJ margin compression makes these cuts survival-critical",
            "Share will decline from 25% to ~22% - a deliberate choice, not a failure. Resources freed go to 5G and AI. The real target is the $4.0B revenue floor",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "The 4G plan is about discipline. It is tempting to throw "
            "money at defending every point of share, but that starves "
            "the 5G launch and AI R&D. We need 4G to generate cash, not "
            "to grow. The 22% target gives us room to redirect resources "
            "while keeping revenue above $4 billion."
        ),
        "references": [
            "Ferdows (1997) - dual-plant strategy",
        ],
        "wave_tags": ["4G"],
    },

    # ── Slide 24: Task 4 - Wave 2: 5G Plan ──
    {
        "number": 24,
        "type": "task4_wave2",
        "title": "Task 4: Wave 2 - 5G Plan",
        "subtitle": "License to Launch Fast, Build IP in Parallel",
        "body": [
            "License 5G chipset technology for the first-generation handset - speed is critical, the first-mover window is closing, and in-house R&D alone is too slow",
            "Launch by Q2 2026 in US and European premium segments first - USA has 70%+ 5G coverage and brand-conscious consumers ($80B market); Europe is feature-driven with 55% 5G coverage",
            "Share targets: 10% US and 8% EU 5G market share within 12 months - ambitious but realistic given existing brand and carrier relationships from the 4G era",
            "In-house 5G R&D starts immediately in parallel - second-gen proprietary product in 12-18 months eliminates licensing dependency and builds protectable IP (VRIO: costly to imitate)",
            "Contract manufacturing (15-20% premium) bridges the 5G production gap while dedicated lines come online - a bridge, not a permanent arrangement. In Asia, selective premium 5G for urban China/Japan/Korea only (65% 5G penetration in China validates demand)",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "The 5G plan has two phases. Phase one: license technology "
            "and launch fast. Phase two: in-house R&D for a proprietary "
            "second-generation product. Licensing is the bridge - it "
            "creates short-term supplier dependency but gets us to market "
            "before the first-mover window shuts. The in-house R&D "
            "ensures we are not permanently dependent."
        ),
        "references": [
            "Barney (1991) - VRIO for IP assessment",
            "Porter (1980) - supplier power",
            "GSMA (2024)",
        ],
        "wave_tags": ["5G"],
    },

    # ── Slide 25: Task 4 - Wave 3: AI Plan ──
    {
        "number": 25,
        "type": "task4_wave3",
        "title": "Task 4: Wave 3 - AI Plan",
        "subtitle": "Invest Now, Small but Committed",
        "body": [
            "$150M allocated to AI R&D over FY2025-2026 - roughly 3% of annual revenue over 2 years. Significant but manageable within cash constraints if 4G revenue is defended",
            "A dedicated AI device team, separate from 5G, prevents Wave 2 urgency from cannibalising the Wave 3 budget and focus",
            "At least 2 strategic technology partnerships (AI chip design + AI software) share risk and fill capability gaps against Apple/Samsung/Qualcomm. Target: working prototype by Q4 2027, commercial launch 2028",
            "Focus on on-device AI capabilities - photography enhancement, health monitoring, personal assistants, language processing - all without cloud dependency, which is the differentiator",
            "Timing matters: firms that wait until 5G is profitable before investing in AI permanently forfeit technology leadership. The R&D window is open in 2025 but will not stay open",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "The AI plan is about commitment, not scale. $150 million is "
            "not going to match Apple's R&D budget, but it secures Mobilé's "
            "option to be a player in the AI-device market. The alternative "
            " - waiting - is not a neutral choice. It is a decision to be a "
            "permanent follower. The partnership model helps bridge the "
            "capability gap we have against the big three."
        ),
        "references": [
            "Qualcomm (2024) - AI on-device roadmap",
            "Gartner (2024) - AI development timelines",
        ],
        "wave_tags": ["AI"],
    },

    # ── Slide 26: Task 4 - Market Prioritisation ──
    {
        "number": 26,
        "type": "task4_markets",
        "title": "Task 4: Market Prioritisation",
        "subtitle": "Different Markets, Different Strategies - Same Three Waves",
        "body": [
            "USA (~$80B, 14-20% growth): PRIMARY 5G launch market. Brand-conscious consumers, 70%+ 5G coverage, 38% adoption. Premium positioning via Atlanta. Home market advantage gives brand familiarity edge",
            "Europe (~450M users, 16-22% growth): SECONDARY 5G launch. Feature-rich and sustainability positioning. Dual supply from Atlanta (premium) and Vietnam via EVFTA (cost-competitive). EU sustainability regs turned into differentiation",
            "Asia (China ~1B users, 22-30% growth): PRIMARY 4G defence market. Vietnam $6/hr cost advantage for India/SE Asia mass-market. Selective premium 5G for urban China/Japan/Korea (65% 5G penetration in China). Highest growth, cannot be ignored",
        ],
        "table_data": {
            "headers": ["Market", "Wave 1 (4G)", "Wave 2 (5G)", "Wave 3 (AI)", "Production"],
            "rows": [
                ["USA", "Maintain premium", "PRIMARY launch", "Premium 2028", "Atlanta"],
                ["Europe", "Atlanta + Vietnam (EVFTA)", "SECONDARY launch", "Feature-rich", "Both plants"],
                ["Asia", "PRIMARY defence", "Selective premium", "Later rollout", "Vietnam"],
            ],
        },
        "diagram_ref": None,
        "speaker_notes": (
            "Each market gets a different strategy because each market "
            "has different dynamics. The US is our 5G launch priority "
            "because of brand consciousness and 5G readiness. Europe "
            "is secondary but important for feature differentiation. "
            "Asia is primarily about 4G defence using Vietnam's cost "
            "advantage, with selective 5G in premium urban markets."
        ),
        "references": [
            "Ghemawat (2007) - multi-market strategy",
            "Hill (2021) - international competition",
            "GSMA (2024)",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 27: Task 4 - Trade-Offs and Financial Discipline ──
    {
        "number": 27,
        "type": "task4_tradeoffs",
        "title": "Task 4: Trade-Offs and Financial Discipline",
        "subtitle": "What We Accept, What We Protect, What We Cannot Do",
        "body": [
            "Investing in all three waves at maximum scale simultaneously is not possible - the $90M cash floor and $4.8B finite revenue make sequencing non-negotiable",
            "4G share will decline from 25% to ~22% - a deliberate choice. Resources freed fund the 5G launch and AI R&D that determine whether Mobilé leads or follows",
            "Licensing 5G creates short-term supplier dependency - acceptable because in-house R&D for the second-gen product eliminates this within 12-18 months. AI R&D has uncertain returns 3-4 years out, but not investing guarantees permanent follower status",
            "Financial guardrails: $120M minimum cash (30% above $90M floor), max $200M borrowing at 4.8%, ZERO emergency borrowing. Sequencing: 5G licensing front-loaded, AI R&D gradual ramp, Vietnam expansion from ongoing cash flow",
            "Bottom line: this strategy is 'best achievable within constraints' - not 'optimal unconstrained'. Every decision is bounded by the cash floor, and we are being honest about that",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "Distinction-level analysis requires trade-off honesty. We are "
            "not pretending this strategy solves everything perfectly. 4G "
            "share will drop. Licensing creates dependency. AI R&D might "
            "not work. But the alternatives are worse - delay on 5G means "
            "permanent follower status, and not investing in AI means "
            "missing the next technology wave entirely. Financial discipline "
            "is the governing principle throughout."
        ),
        "references": [
            "Baghai, Coley and White (1999)",
            "Teece, Pisano and Shuen (1997) - dynamic capabilities",
        ],
        "wave_tags": ["4G", "5G", "AI"],
    },

    # ── Slide 28: References ──
    {
        "number": 28,
        "type": "references",
        "title": "References",
        "subtitle": None,
        "body": [
            "Baghai, M., Coley, S. and White, D. (1999) The Alchemy of Growth. New York: Perseus Books.",
            "Barney, J.B. (1991) 'Firm Resources and Sustained Competitive Advantage', Journal of Management, 17(1), pp. 99-120.",
            "Christensen, C.M. (1997) The Innovator's Dilemma. Boston: Harvard Business School Press.",
            "Ericsson (2024) Ericsson Mobility Report. Available at: https://www.ericsson.com/en/reports-and-papers/mobility-report (Accessed: April 2026).",
            "European Commission (2020) EU-Vietnam Free Trade Agreement. Available at: https://policy.trade.ec.europa.eu/ (Accessed: April 2026).",
            "Ferdows, K. (1997) 'Making the Most of Foreign Factories', Harvard Business Review, 75(2), pp. 73-88.",
            "Gartner (2024) Hype Cycle for Artificial Intelligence. Stamford: Gartner Research.",
            "Ghemawat, P. (2007) Redefining Global Strategy. Boston: Harvard Business School Press.",
            "Grant, R.M. (2019) Contemporary Strategy Analysis. 10th edn. Chichester: Wiley.",
            "GSMA (2024) The Mobile Economy 2024. Available at: https://www.gsma.com/mobileeconomy/ (Accessed: April 2026).",
            "Hill, C.W.L. (2021) International Business. 13th edn. New York: McGraw-Hill.",
            "ITU (2024) Measuring Digital Development. Geneva: ITU.",
            "Johnson, G. et al. (2017) Exploring Strategy. 11th edn. Harlow: Pearson.",
            "Porter, M.E. (1980) Competitive Strategy. New York: Free Press.",
            "Porter, M.E. (1985) Competitive Advantage. New York: Free Press.",
            "Prahalad, C.K. and Hamel, G. (1990) 'The Core Competence of the Corporation', Harvard Business Review, 68(3), pp. 79-91.",
            "Qualcomm (2024) The Future of AI on Device. Available at: https://www.qualcomm.com/research/artificial-intelligence (Accessed: April 2026).",
            "Shingo, S. (1989) A Study of the Toyota Production System. Cambridge, MA: Productivity Press.",
            "Teece, D.J., Pisano, G. and Shuen, A. (1997) 'Dynamic Capabilities and Strategic Management', Strategic Management Journal, 18(7), pp. 509-533.",
            "WTO (2024) World Trade Statistical Review 2024. Geneva: WTO.",
        ],
        "table_data": None,
        "diagram_ref": None,
        "speaker_notes": (
            "All references are in Harvard format. We have used a mix of "
            "academic sources - Barney, Porter, Johnson, Teece - and "
            "industry reports from GSMA, Ericsson, Gartner, and Qualcomm "
            "to ground our analysis in both theory and current data."
        ),
        "references": [],
        "wave_tags": [],
    },
]
