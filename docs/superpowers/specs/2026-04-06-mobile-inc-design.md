# Mobilé Inc. Strategic Analysis — Interactive Website & Orchestration System

**Date:** 2026-04-06
**Module:** MN7002NI — International Business Strategy with Simulation
**Deadline:** 10 April 2026
**Weight:** 30% of total module grade

---

## 1. Overview

Build an interactive React+Vite website as a research & preparation tool for a 30-slide group presentation analyzing Mobilé Inc.'s strategic position in 2025. The website contains all deep analysis (frameworks, charts, data) organized by the 4 assignment tasks. The final submission is a PDF of 30 slides — the website helps the team build, review, and rehearse the content.

An agent team (`mobile-inc-strategy`) orchestrates the work with specialized roles: researcher, frontend developer, content writer, and quality reviewer.

## 2. Assignment Summary

### Case Study: Mobilé Inc. in 2025
- US smartphone manufacturer, operations in USA, Europe, Asia
- Three waves of value: 4G LTE (mature cash engine), 5G (urgent launch), AI-integrated devices (2027 horizon R&D)
- DOJ intervention in early 2025 ended tacit price coordination among 4 equal competitors
- Central tension: managing all three waves simultaneously with finite resources
- Constraint: USD 90M minimum cash reserve floor

### Tasks (100 marks total)
| Task | Marks | LO |
|------|-------|----|
| 1. Executive Summary | 5 | All |
| 2. Strategy Process (Vision/Mission/Goals/SMART) | 15 | LO1 |
| 3. Internal & External Analysis | 30 | LO2 |
| 4. SWOT Synthesis | 15 | LO2+LO3 |
| 5. Strategic Choice & Recommendation | 15 | LO3+LO4 |
| 6. Presentation Structure & Originality | 10 | — |
| 7. Individual Reflection (700+ words each) | 10 | — |

### Team Members
| # | Name | College ID | University ID |
|---|------|-----------|---------------|
| 1 | Bishwesh Ram Shrestha | np01mb7a250082 | 25030247 |
| 2 | Gaurav Dangol | np01mb7a250083 | 18029811 |
| 3 | Bishan Subedi | np01mb7a250010 | 25030193 |
| 4 | Aayush Man Singh | np01mb7a250043 | 18029779 |
| 5 | Ruchan Jung Sijapati | NP01MB7A250143 | 20048645 |
| 6 | Shaswat Nibha Maharjan | np01mb7a250162 | — |

## 3. Architecture

### 3.1 Tech Stack
- **Frontend:** React 18 + Vite
- **Charts:** Recharts for data visualization
- **Diagrams:** Custom SVG components for frameworks (Porter's, Value Chain, SWOT)
- **Routing:** React Router v6 (page per task)
- **Styling:** Tailwind CSS
- **Data:** Static JS objects in `src/data/` (no backend needed)

### 3.2 Project Structure
```
mba-international-business-simulation-cw1/
├── CLAUDE.md
├── docs/superpowers/specs/
├── knowledge-base/
│   ├── case-study-summary.md
│   ├── financial-data.md
│   ├── three-waves.md
│   ├── markets.md
│   ├── production.md
│   ├── competitors.md
│   ├── frameworks/ (vrio, value-chain, pestle, porters, strategic-group, csf, swot)
│   ├── task1-strategy-direction.md
│   ├── task2-internal-external.md
│   ├── task3-swot.md
│   ├── task4-recommendation.md
│   ├── marking-criteria.md
│   └── references.md
├── website/
│   └── src/ (components/, pages/, data/, App.jsx, main.jsx)
└── skills/ (3 custom skills)
```

### 3.3 Agent Team: `mobile-inc-strategy`

| Agent | Type | Role |
|-------|------|------|
| team-lead | planner | Orchestration, task management, integration, final review |
| researcher | researcher | Case study analysis, knowledge base creation, framework application |
| frontend-dev | designer | React+Vite website, interactive components, charts, styling |
| content-writer | deep-executor | Strategic analysis content for Tasks 1-4, executive summary |
| quality-reviewer | code-reviewer | Reviews against marking criteria, flags gaps, ensures coherence |

### 3.4 Execution Phases

**Phase 1 — Foundation (Parallel):**
- researcher: builds entire knowledge-base/ from case study PDFs
- frontend-dev: scaffolds React+Vite app, builds layout, chart components, framework diagram components

**Phase 2 — Content (Sequential, depends on Phase 1):**
- content-writer: Task 1 → Task 2 → Task 3 → Task 4 (strict order, each builds on prior)
- frontend-dev: continues building interactive framework components

**Phase 3 — Integration (Parallel, depends on Phase 2):**
- frontend-dev: integrates all content into website pages
- content-writer: writes Executive Summary (depends on all 4 tasks)
- quality-reviewer: reviews all content against marking rubric

**Phase 4 — Final (Sequential):**
- team-lead: final coherence check, ensures three-wave thread runs through all tasks
- quality-reviewer: final pass against distinction-level criteria

## 4. Website Pages

### Home (Executive Summary Dashboard)
- Strategic direction summary card
- Three-wave status indicators (4G: Defend, 5G: Launch, AI: Invest)
- Key metrics dashboard (revenue, market share, cash position)
- Navigation to all 4 tasks

### Task 1: Strategy Process
- Vision statement with three-wave timeline context
- Mission statement with market-specific breakdowns
- Strategic goals as interactive cards linked to waves
- SMART objectives table with measurability indicators
- Goal hierarchy visualization

### Task 2: Internal & External Analysis
- **Internal tab:** Interactive VRIO matrix, clickable Value Chain, production cost comparison
- **External tab:** PESTLE grid (color-coded impact), Porter's Five Forces radar, Strategic Group map, CSF gap analysis
- Cross-referencing: hover findings to see which SWOT points they feed

### Task 3: SWOT Synthesis
- Interactive 2x2 matrix, each point clickable with evidence trail to Task 2
- Internal-external connection lines between S/W and O/T
- Color coding by wave (4G=blue, 5G=green, AI=purple)
- Strategic implication tags

### Task 4: Strategic Recommendation
- Executive decision brief layout
- Three-wave resource allocation Sankey diagram
- Market prioritization matrix
- Risk/constraint section ($90M floor, simultaneous capital demands)
- Trade-off visualization

### Team Page
- Contribution log (matches assignment template)
- Member cards with roles

### References
- Harvard-format reference list organized by type

## 5. Custom Skills

### mobile-inc-researcher
Guides case-specific research. Ensures no generic analysis, traces all claims to case data, enforces three-wave lens.

### strategic-framework-analyst
Applies VRIO, PESTLE, Porter's, Value Chain, SWOT, CSF correctly to Mobilé Inc. Ensures framework justification and internal-external connections.

### marking-criteria-reviewer
Reviews output against the exact marking rubric. Scores against distinction/merit/pass descriptors. Flags gaps in three-wave coherence and Harvard referencing.

## 6. Team Work Division (Presentation)

| Member | Primary Role | Tasks | Presentation (15 min) |
|--------|-------------|-------|----------------------|
| Bishwesh | Strategy Lead | Task 1 + Exec Summary | Exec Summary + Vision/Mission (3 min) |
| Gaurav | Strategy Support | Task 1 (Goals/SMART) | Strategic Goals + SMART (2 min) |
| Bishan | Internal Analyst | Task 2a (Internal) | VRIO + Value Chain (3 min) |
| Aayush | External Analyst | Task 2b (External) | PESTLE + Porter's (3 min) |
| Ruchan | Synthesis Lead | Task 3 + Task 4 | SWOT + Recommendation (3 min) |
| Shaswat | Recommendation Support | Task 4 (Trade-offs) | Risk/constraints + Closing (1 min) |

## 7. Quality Gates

Before any task is marked complete:
1. Every analytical point traces to specific case study data (not generic)
2. Three-wave coherence: does this section acknowledge the simultaneous 4G/5G/AI tension?
3. Consistency with prior tasks (Task 3 must not contradict Task 2, Task 4 must align with Task 1)
4. Marking criteria check: would this score at distinction level (85%+)?
5. Harvard referencing where applicable
6. No unsupported claims appearing for the first time in SWOT
