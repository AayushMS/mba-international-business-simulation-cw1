# Execution Prompt

Copy and paste everything below the line into a new Claude Code session to execute the full plan.

---

Read the design spec at docs/superpowers/specs/2026-04-06-mobile-inc-design.md and CLAUDE.md thoroughly. Then execute the full plan:

## Step 1: Create the Agent Team

Create agent team "mobile-inc-strategy" with TeamCreate. You are the team-lead.

## Step 2: Create ALL Tasks with Dependencies

Create these tasks in the task list. Set up blockedBy dependencies exactly as specified:

### PHASE 1 (parallel — no dependencies):

**Task A: "Validate and enrich knowledge base"**
Owner: researcher
Description: Read BOTH PDF files in the project root (the question paper and the case study). Cross-reference against ALL files in knowledge-base/. Validate every number, fact, and constraint. Add any missing data points. Enrich framework analyses in knowledge-base/frameworks/ with additional case-specific evidence. Use the `mobile-inc-researcher` skill (at skills/mobile-inc-researcher/SKILL.md) on every output to ensure case-specificity. Use the `strategic-framework-analyst` skill (at skills/strategic-framework-analyst/SKILL.md) when validating each framework analysis. Ensure all 6 frameworks (VRIO, Value Chain, PESTLE, Porter's Five Forces, Strategic Group, CSF) and the SWOT synthesis are complete, evidenced, and case-specific.

**Task B: "Scaffold React+Vite website with interactive components"**
Owner: frontend-dev
Description: Initialize React+Vite app in website/ with these dependencies: react-router-dom, recharts, tailwindcss, @tailwindcss/vite. Build the full component library:
- Layout: Navbar (with navigation to all pages), Sidebar (task quick-links), Footer (team info)
- Charts: ThreeWaveTimeline (interactive timeline showing 4G/5G/AI waves with milestones), FinancialDashboard (revenue, cash position, borrowing gauges), MarketComparison (USA vs Europe vs Asia bar/radar charts), ResourceAllocation (Sankey diagram or stacked chart showing investment across waves)
- Framework diagrams: VRIOMatrix (interactive table with competitive implication highlighting), ValueChainDiagram (clickable SVG primary+support activities), PESTLEGrid (categorized cards with color-coded impact levels), PortersFiveForces (radar/pentagon diagram with force intensity), StrategicGroupMap (2D positioning scatter with labeled competitors), SWOTMatrix (interactive 2x2 grid with evidence popups, color-coded by wave: 4G=blue, 5G=green, AI=purple), CSFTable (gap analysis with progress bars)
- Strategy: VisionMission (display component), GoalsObjectives (interactive cards linked to waves), RecommendationBrief (executive layout)
- Team: ContributionLog (table matching assignment template), MemberCard (individual info)
- Pages: Home (executive summary dashboard), Task1StrategyProcess, Task2Analysis (with Internal/External tabs), Task3SWOT, Task4Recommendation, TeamPage, References
- All data should come from src/data/caseStudyData.js — create this with placeholder structure that content-writer will fill
- Make it visually polished — this is a board-level strategy briefing tool

### PHASE 2 (sequential — each blocked by the previous):

**Task C: "Write Task 1 content — Strategy Process"**
Owner: content-writer
BlockedBy: Task A
Description: Create the Strategy Process content (vision, mission, strategic goals, SMART objectives) for Mobilé Inc. Use knowledge-base/task1-strategy-direction.md as starting point but refine and improve. MUST use the `mobile-inc-researcher` skill (at skills/mobile-inc-researcher/SKILL.md) to ensure every statement is case-specific and three-wave coherent. Output as structured JS data objects in website/src/data/task1Data.js. Marking criteria (15 marks): vision must reflect three-wave nature, mission must be specific to Mobilé's multi-market portfolio, goals must balance 4G/5G/AI, SMART objectives must have quantified targets traceable to case data. Generic statements = zero credit.

**Task D: "Write Task 2 content — Internal & External Analysis"**
Owner: content-writer
BlockedBy: Task C
Description: Create the Internal & External Analysis content — this is the HIGHEST WEIGHTED task (30 marks). Use ALL 6 framework analyses from knowledge-base/frameworks/. MUST use both `mobile-inc-researcher` skill AND `strategic-framework-analyst` skill (both in skills/ directory). Internal: VRIO matrix with competitive implications for each resource, Value Chain with Mobilé-specific activity analysis. External: PESTLE with case-specific factors, Porter's Five Forces with post-DOJ dynamics, Strategic Group with positioning trajectory, CSF with gap analysis. Every framework needs justification ("Why this framework for Mobilé?") and case-specific evidence. Output as structured data in website/src/data/task2Data.js. Red flag: template-filling or generic framework application = limited marks.

**Task E: "Write Task 3 content — SWOT Synthesis"**
Owner: content-writer
BlockedBy: Task D
Description: Create SWOT Synthesis content. Use knowledge-base/frameworks/swot-synthesis.md as starting point. MUST use `strategic-framework-analyst` skill. THREE TESTS for every SWOT point: (1) Evidenced — traces to specific Task 2 framework finding, (2) Case-specific — would not apply to generic smartphone company, (3) Strategically interpreted — carries explicit implication. Must include internal-external connections (S↔O, W↔T links). Must be logically consistent with Task 4 recommendation. Color-code by wave: 4G=blue, 5G=green, AI=purple. Output in website/src/data/task3Data.js.

**Task F: "Write Task 4 content — Strategic Recommendation"**
Owner: content-writer
BlockedBy: Task E
Description: Create Strategic Choice & Recommendation content. Use knowledge-base/task4-recommendation.md as starting point. MUST use `mobile-inc-researcher` skill. Five marking dimensions: (1) Clarity — clear, unambiguous position on markets and waves, (2) Three-wave coherence — all three waves addressed simultaneously, (3) Analytical consistency — follows from Tasks 1-3 with no contradictions, (4) Trade-off honesty — acknowledges $90M floor, simultaneous demands, licensing trade-off, (5) Executive communication — strategic brief, not analysis summary. Output in website/src/data/task4Data.js.

### PHASE 3 (parallel — blocked by Phase 2 completion):

**Task G: "Integrate all content into website pages"**
Owner: frontend-dev
BlockedBy: Task B, Task F
Description: Wire up all data files (task1Data.js through task4Data.js) into the website pages. Home page shows executive summary dashboard with three-wave indicators and key metrics. Task pages use the interactive framework components built in Phase 1. Ensure all cross-references work (SWOT points link to Task 2 evidence, recommendation links to SWOT). Add Harvard references page. Build team contribution log page. Test that `npm run dev` serves a working site.

**Task H: "Write Executive Summary content"**
Owner: content-writer
BlockedBy: Task F
Description: Distil all 4 tasks into ONE cohesive executive summary. MUST use `mobile-inc-researcher` skill. This is NOT task-by-task repetition. It must capture: (a) core strategic direction (vision/mission essence), (b) most critical analysis findings (key VRIO gaps, Porter's rivalry, CSF priorities), (c) synthesised SWOT position (the central W1↔O1 gap), (d) recommended strategic choice (license 5G fast, parallel AI R&D, managed 4G transition). A board member reading only this should understand Mobilé's strategic position and what to do about it. Output in website/src/data/executiveSummaryData.js.

**Task I: "Quality review all content against marking criteria"**
Owner: quality-reviewer
BlockedBy: Task F
Description: Review ALL content (Tasks 1-4 + Executive Summary) using the `marking-criteria-reviewer` skill (at skills/marking-criteria-reviewer/SKILL.md). This is your PRIMARY skill — follow its checklist exactly. For each task: (1) case-specificity check, (2) three-wave coherence check, (3) task-specific criteria check, (4) cross-task consistency check, (5) Harvard referencing check. Score each section against distinction/merit/pass bands. Flag ANYTHING below distinction level with specific improvement instructions. Report findings to team-lead.

### PHASE 4 (blocked by all Phase 3):

**Task J: "Final integration and coherence check"**
Owner: team-lead
BlockedBy: Task G, Task H, Task I
Description: Final review of the entire website. Use `marking-criteria-reviewer` skill for the final quality gate. Check: (1) narrative flows coherently from executive summary through to recommendation, (2) three-wave thread runs through every page, (3) no contradictions between tasks, (4) all interactive components work and display correct data, (5) fix any issues flagged by quality-reviewer in Task I. Run `cd website && npm run dev` and verify the site works.

## Step 3: Spawn Teammates

Spawn these 4 agents using the Agent tool with team_name="mobile-inc-strategy":

1. **name="researcher"**, subagent_type="researcher"
   Prompt: "You are the researcher on team mobile-inc-strategy. Read the team config at ~/.claude/teams/mobile-inc-strategy/config.json. Read CLAUDE.md for project context. Your primary skills are `mobile-inc-researcher` (skills/mobile-inc-researcher/SKILL.md) and `strategic-framework-analyst` (skills/strategic-framework-analyst/SKILL.md) — read both before starting work. Check TaskList for your assigned tasks and begin working. After completing each task, mark it complete and check for new available tasks."

2. **name="frontend-dev"**, subagent_type="designer"
   Prompt: "You are the frontend developer on team mobile-inc-strategy. Read the team config at ~/.claude/teams/mobile-inc-strategy/config.json. Read CLAUDE.md for project context and the design spec at docs/superpowers/specs/2026-04-06-mobile-inc-design.md for the full component list and page structure. You do NOT need skills — focus on building a polished, interactive React+Vite website. Check TaskList for your assigned tasks and begin working. After completing each task, mark it complete and check for new available tasks."

3. **name="content-writer"**, subagent_type="deep-executor"
   Prompt: "You are the content writer on team mobile-inc-strategy. Read the team config at ~/.claude/teams/mobile-inc-strategy/config.json. Read CLAUDE.md for project context. Your primary skills are `mobile-inc-researcher` (skills/mobile-inc-researcher/SKILL.md) — use on EVERY piece of content — and `strategic-framework-analyst` (skills/strategic-framework-analyst/SKILL.md) — use when writing Task 2 and Task 3 content. Read both skill files before starting. The knowledge-base/ directory is your source of truth — read relevant files before writing each task. Check TaskList for your assigned tasks and begin working. Tasks must be done in order (Task 1 → 2 → 3 → 4 → Executive Summary). After completing each task, mark it complete and check for new available tasks."

4. **name="quality-reviewer"**, subagent_type="code-reviewer"
   Prompt: "You are the quality reviewer on team mobile-inc-strategy. Read the team config at ~/.claude/teams/mobile-inc-strategy/config.json. Read CLAUDE.md for project context. Your PRIMARY skill is `marking-criteria-reviewer` (skills/marking-criteria-reviewer/SKILL.md) — read it thoroughly, it IS your job. Also read knowledge-base/marking-criteria.md for the full rubric. Check TaskList for your assigned tasks. You will be activated in Phase 3 after content is written. When your task becomes available, review ALL content against the rubric and report findings to team-lead via SendMessage."

## Step 4: Orchestrate

As team-lead, manage the workflow:
- Monitor task completions via TaskList
- When Phase 1 tasks complete, notify content-writer that Phase 2 can begin
- When content tasks complete sequentially, notify frontend-dev and quality-reviewer that Phase 3 can begin
- When Phase 3 completes, do the final integration yourself (Task J) using the `marking-criteria-reviewer` skill
- Use SendMessage to coordinate between agents — they cannot hear you unless you message them
- After all tasks complete, run `cd website && npm run dev` and report the URL

## Key Rules (from CLAUDE.md)
- Every analytical point must trace to specific case data — no generic statements
- Three-wave coherence throughout (4G defend, 5G launch, AI invest)
- Tasks build on each other — Task 3 traces to Task 2, Task 4 aligns with Tasks 1-3
- Target distinction level (85%+) on every marking criterion
- All references in Harvard format
- knowledge-base/ is the single source of truth — all agents read from it
- Skills in skills/ provide quality guidance — agents MUST use their assigned skills
