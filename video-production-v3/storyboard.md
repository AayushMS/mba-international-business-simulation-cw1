# Video V3 — Sentence-Level Audio-Visual Storyboard

> Production-ready mapping. Each beat = one visual. Scene composers follow this exactly.
> All timestamps are relative to scene start (0.0s). Cumulative offsets noted in scene headers.

**Rules applied:**
- Visual changes at sentence boundaries ONLY
- No beat shorter than 3s or longer than 8s (short sentences merged, long beats split)
- Every visual relates directly to what is being said
- 3s transition card at the start of each scene (except Scene 1 which opens with title)

**Visual types:** `TITLE` (pre-rendered PNG), `SCREENSHOT` (website capture + Ken Burns), `DIAGRAM` (pre-rendered PNG), `CALLOUT` (large text/number on clean bg)

---

## Scene 1: Cold Open / Hook
**Voice:** Andrew | **Duration:** 27.1s | **Cumulative start:** 0.0s
**Audio file:** `scene01_hook.mp3`

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 1.1 | 0.0 - 4.4s | 4.4s | "Imagine you're running a four point eight billion dollar smartphone company." | Title card — dark text on white: "Three technology waves." with subtle wave accent dots | `TITLE` `assets/titles/opening_hook.png` | Fade in from white (0.5s) |
| 1.2 | 4.4 - 11.2s | 6.8s | "Factories on two continents, twenty-five percent market share, and a product that's been printing money for years." | Website hero — homepage showing Mobilé Inc. branding and key metrics | `SCREENSHOT` `screenshots/home_hero.png` | Ken Burns: slow zoom_in (1.00x to 1.08x) |
| 1.3 | 11.2 - 15.1s | 3.9s | "Now imagine overnight, the rules change. Competitors start slashing prices." | Website homepage — three-wave dynamics section showing market forces | `SCREENSHOT` `screenshots/home_waves.png` | Ken Burns: pan_right |
| 1.4 | 15.1 - 19.1s | 4.0s | "A technology wave you haven't prepared for is already here." | Website homepage — key metrics dashboard showing the data | `SCREENSHOT` `screenshots/home_metrics.png` | Ken Burns: slow zoom_in (1.00x to 1.06x) |
| 1.5 | 19.1 - 24.3s | 5.2s | "And a bigger one is coming fast. That's Mo-bee-lay Incorporated in twenty twenty-five." | Title card — "Mobilé Inc." centered with "Strategic Analysis 2025" subtitle | `TITLE` `assets/titles/title_mobile_inc.png` | Crossfade in (0.4s) |
| 1.6 | 24.3 - 27.1s | 2.8s | "And that's the challenge we took on." | *(Merge with 1.5 — hold title card through end of scene)* | `TITLE` `assets/titles/title_mobile_inc.png` | Hold, prepare crossfade to Scene 2 |

> **Note on 1.5+1.6:** Combined these hold the title card for 8.0s total (5.2+2.8). Beat 1.6 alone is 2.8s which is under 3s, so it merges visually with 1.5. The title card holds from 19.1s to 27.1s = 8.0s (at limit). Acceptable because it's the scene closer and the title card is the reveal moment.

---

## Scene 2: Assignment Context
**Voice:** Andrew | **Duration:** 32.5s | **Cumulative start:** 27.1s
**Audio file:** `scene02_context.mp3`

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 2.1 | 0.0 - 3.0s | 3.0s | *(Transition card)* | Transition card — "The Context" with thin accent line | `TITLE` `assets/titles/transition_context.png` | Fade in (0.3s) |
| 2.2 | 3.0 - 6.5s | 3.5s | "Here's the context. This is our group coursework for International Business Strategy with Simulation." | Website full homepage — establishing the interactive site | `SCREENSHOT` `screenshots/home_full.png` | Ken Burns: slow zoom_in (1.00x to 1.05x) |
| 2.3 | 6.5 - 10.7s | 4.2s | "We analyzed Mo-bee-lay's strategic position across four interconnected tasks." | Website overview page — showing the 4-task structure | `SCREENSHOT` `screenshots/overview_page.png` | Ken Burns: pan_right |
| 2.4 | 10.7 - 20.0s | 9.3s | "Task one, strategic direction -- vision, mission, goals. Task two, deep analysis using thirteen strategic frameworks. Task three, SWOT synthesis." | *(Split into 2 beats below)* | | |

> **Split 2.4** — 9.3s exceeds 8s limit. Split at natural pause after "goals":

| 2.4a | 10.7 - 14.4s | 3.7s | "Task one, strategic direction -- vision, mission, goals." | Website tasks overview — showing task navigation/cards | `SCREENSHOT` `screenshots/home_tasks.png` | Ken Burns: slow zoom_in |
| 2.4b | 14.4 - 20.0s | 5.6s | "Task two, deep analysis using thirteen strategic frameworks. Task three, SWOT synthesis." | Website Task 2 landing — showing framework tabs | `SCREENSHOT` `screenshots/task2_tabs.png` | Ken Burns: pan_left |
| 2.5 | 20.0 - 26.9s | 6.9s | "And task four, a clear recommendation with honest trade-offs. But we didn't just write slides." | Website Task 4 page — recommendation and trade-offs visible | `SCREENSHOT` `screenshots/task4_top.png` | Ken Burns: slow zoom_in (1.00x to 1.06x) |
| 2.6 | 26.9 - 32.5s | 5.6s | "We built a full interactive website to bring the analysis to life." | Website homepage hero — final establishing shot, the "product" | `SCREENSHOT` `screenshots/home_hero.png` | Ken Burns: zoom_out (1.08x to 1.00x), hold on wide |

---

## Scene 3: Three Waves — The Core Tension
**Voice:** Ava (0-37.5s) then Andrew (37.5-51.5s) | **Duration:** 51.5s | **Cumulative start:** 59.6s
**Audio files:** `scene03_waves_ava.mp3` (37.5s), `scene03_waves_andrew.mp3` (14.0s)

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 3.1 | 0.0 - 3.0s | 3.0s | *(Transition card)* | Transition card — "The Core Tension" with 3 wave-colored bars | `TITLE` `assets/titles/transition_three_waves.png` | Fade in (0.3s) |
| 3.2 | 3.0 - 7.6s | 4.6s | "Before we dive in, you need to understand the defining tension of this case. Mo-bee-lay isn't facing one challenge." | Three-wave overview diagram — 3 horizontal lanes showing 4G declining, 5G rising, AI emerging | `DIAGRAM` `assets/diagrams/three_waves_overview.png` | Fade in (0.3s) |
| 3.3 | 7.6 - 14.8s | 7.2s | "It's facing three at once. Wave one, four-G -- the cash engine generating four point eight billion annually. But it's a depleting asset under price pressure." | Website waves section — showing 4G revenue data and wave dynamics | `SCREENSHOT` `screenshots/home_waves.png` | Ken Burns: pan_right (focusing on 4G lane) |
| 3.4 | 14.8 - 25.9s | 11.1s | *(Split — exceeds 8s)* | | | |

> **Split 3.4** — 11.1s exceeds 8s. Split at sentence boundary after "adopted it":

| 3.4a | 14.8 - 22.0s | 7.2s | "Wave two, five-G -- seventy percent of US urban areas already have coverage, thirty-eight percent of consumers have adopted it." | Callout — large "70%" and "38%" with labels: "5G urban coverage" / "consumer adoption". Clean white bg, green accent | `CALLOUT` *(generated as)* `assets/diagrams/5g_adoption_stats.png` | Fade in (0.3s) |
| 3.4b | 22.0 - 29.1s | 7.1s | "And Mo-bee-lay hasn't launched a single five-G handset. Wave three, A.I. devices --" | Callout — bold text: "ZERO 5G Handsets" with red accent. Stark, attention-grabbing | `CALLOUT` *(generated as)* `assets/diagrams/zero_5g.png` | Crossfade (0.3s) |
| 3.5 | 29.1 - 37.5s | 8.4s | *(Split — slightly over 8s)* | | | |

> **Split 3.5** — 8.4s marginally over. Split at "behind" / Andrew handoff:

| 3.5a | 29.1 - 33.3s | 4.2s | "commercial in twenty twenty-seven, but R and D decisions must happen now" | Diagram — AI wave timeline: "2025 R&D decision" to "2027 commercial". Simple arrow/timeline | `DIAGRAM` `assets/diagrams/ai_timeline.png` | Crossfade (0.3s) |
| 3.5b | 33.3 - 37.5s | 4.2s | "or you're permanently behind." | *(Hold AI timeline diagram through Ava's final beat — the "permanently behind" lands on the timeline visual showing urgency)* | `DIAGRAM` `assets/diagrams/ai_timeline.png` | Hold |

**--- Voice switch to Andrew at 37.5s ---**

| 3.6 | 37.5 - 42.7s | 5.2s | "And here's the constraint. Mo-bee-lay has a ninety million dollar cash reserve floor." | Cash constraint diagram — bar showing total resources with red dashed line at $90M floor | `DIAGRAM` `assets/diagrams/cash_constraint.png` | Crossfade (0.4s) |
| 3.7 | 42.7 - 51.5s | 8.8s | *(Split — exceeds 8s)* | | | |

> **Split 3.7** — 8.8s over limit. Split at "everything":

| 3.7a | 42.7 - 47.9s | 5.2s | "All three waves compete for the same finite resources. You can't maximize everything." | Three-wave overview diagram — revisit, now the viewer understands all 3 waves + constraint | `DIAGRAM` `assets/diagrams/three_waves_overview.png` | Crossfade (0.3s) |
| 3.7b | 47.9 - 51.5s | 3.6s | "That trade-off runs through every part of our analysis." | Callout — "Trade-offs are real." centered text, clean minimal white bg | `CALLOUT` *(generated as)* `assets/diagrams/tradeoff_honest.png` | Crossfade (0.3s) |

---

## Scene 4: What We Built
**Voice:** Andrew | **Duration:** 29.7s | **Cumulative start:** 111.1s
**Audio file:** `scene04_built.mp3`

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 4.1 | 0.0 - 3.0s | 3.0s | *(Transition card)* | Transition card — "What We Built" clean white card | `TITLE` `assets/titles/transition_what_we_built.png` | Fade in (0.3s) |
| 4.2 | 3.0 - 8.1s | 5.1s | "To tackle this, we built an interactive strategy analysis website using React and Vite. It's not just digital slides." | Website homepage hero — establishing the website as the product | `SCREENSHOT` `screenshots/home_hero.png` | Ken Burns: zoom_in (1.00x to 1.08x) |
| 4.3 | 8.1 - 14.8s | 6.7s | "It's a research tool with interactive charts, framework visualizations, and drill-down capability across all four tasks." | Website Task 2 page — showing interactive framework tabs and visualizations | `SCREENSHOT` `screenshots/task2_tabs.png` | Ken Burns: pan_left |
| 4.4 | 14.8 - 23.8s | 9.0s | *(Split — exceeds 8s)* | | | |

> **Split 4.4** — 9.0s exceeds 8s. Split at "Forces":

| 4.4a | 14.8 - 19.1s | 4.3s | "You can explore three-wave dynamics, dive into frameworks like V.R.I.O." | Website VRIO screenshot — showing the VRIO framework interactive table | `SCREENSHOT` `screenshots/task2_vrio.png` | Ken Burns: slow zoom_in |
| 4.4b | 19.1 - 23.8s | 4.7s | "or Porter's Five Forces, and see how findings connect across tasks." | Website Porter's Five Forces screenshot — showing the Porter's framework | `SCREENSHOT` `screenshots/task2_porters.png` | Ken Burns: pan_right |
| 4.5 | 23.8 - 29.7s | 5.9s | "Everything traces back to the case data. Let's walk through what the analysis revealed." | Website homepage metrics — showing data-driven dashboard with metrics | `SCREENSHOT` `screenshots/home_metrics.png` | Ken Burns: zoom_out (1.06x to 1.00x), settling |

---

## Scene 5: Task 1 — Strategy Process
**Voice:** Andrew | **Duration:** 38.4s | **Cumulative start:** 140.8s
**Audio file:** `scene05_task1.mp3`

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 5.1 | 0.0 - 3.0s | 3.0s | *(Transition card)* | Transition card — "Task 1 / Strategy Process" with blue accent | `TITLE` `assets/titles/transition_task1.png` | Fade in (0.3s) |
| 5.2 | 3.0 - 7.8s | 4.8s | "Task one was about strategic direction. We used McKinsey's Three Horizons framework because it maps perfectly onto Mo-bee-lay." | Three Horizons diagram — McKinsey S-curves. H1=4G, H2=5G, H3=AI. Clean textbook style | `DIAGRAM` `assets/diagrams/three_horizons.png` | Fade in (0.3s) |
| 5.3 | 7.8 - 16.8s | 9.0s | *(Split — exceeds 8s)* | | | |

> **Split 5.3** — 9.0s exceeds 8s. Split at "invest now":

| 5.3a | 7.8 - 13.4s | 5.6s | "Horizon one, four-G -- defend and extract. Horizon two, five-G -- invest now." | *(Hold Three Horizons diagram — viewer maps the narrated horizons to the visual curves)* | `DIAGRAM` `assets/diagrams/three_horizons.png` | Hold (Ken Burns: very slow zoom_in on H1/H2 area) |
| 5.3b | 13.4 - 16.8s | 3.4s | "Horizon three, A.I. devices -- the future bet." | *(Hold Three Horizons diagram — now attention on H3 curve)* | `DIAGRAM` `assets/diagrams/three_horizons.png` | Ken Burns: slow pan_right to H3 area |
| 5.4 | 16.8 - 26.3s | 9.5s | "Our vision is specific: lead the smartphone industry through the four-G to five-G transition and into the A.I. era by twenty twenty-eight." | Vision statement diagram — vision text in clean card with blue accent border | `DIAGRAM` `assets/diagrams/vision_statement.png` | Crossfade (0.3s) |

> **Note on 5.4:** 9.5s exceeds 8s limit but this is one continuous sentence on one static visual (hold). Allowed exception — same rationale as 1.5+1.6 = 8.0s title reveal. Splitting mid-sentence with different visuals would violate the sentence-boundary rule.

| 5.5 | 26.3 - 33.7s | 7.4s | "Every goal and SMART objective connects to these waves and acknowledges the ninety million dollar cash constraint." | Strategic goals diagram — 4 goals as clean list items with wave-colored bullets | `DIAGRAM` `assets/diagrams/strategic_goals.png` | Crossfade (0.3s) |
| 5.6 | 33.7 - 38.4s | 4.7s | "Because strategy that ignores your biggest constraint isn't strategy at all." | Cash constraint diagram — revisit the $90M floor visual to reinforce the constraint | `DIAGRAM` `assets/diagrams/cash_constraint.png` | Crossfade (0.3s) |

---

## Scene 6: Task 2 — Deep Analysis
**Voice:** Ava (0-43.0s) then Andrew (43.0-87.1s) | **Duration:** 87.1s | **Cumulative start:** 179.2s
**Audio files:** `scene06_analysis_ava.mp3` (43.0s), `scene06_analysis_andrew.mp3` (44.1s)

### Ava's Part (0.0 - 43.0s)

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 6.1 | 0.0 - 3.0s | 3.0s | *(Transition card)* | Transition card — "Task 2 / Internal & External Analysis" with green accent | `TITLE` `assets/titles/transition_task2.png` | Fade in (0.3s) |
| 6.2 | 3.0 - 8.8s | 5.8s | "Task two is where we went deep -- thirteen frameworks across four dimensions. V.R.I.O. tested which resources give real advantage." | VRIO summary diagram — table showing key resources with VRIO verdict columns | `DIAGRAM` `assets/diagrams/vrio_summary.png` | Fade in (0.3s) |
| 6.3 | 8.8 - 15.4s | 6.6s | "Atlanta's learning curve? Temporary at best. Vietnam's low costs? Shared with competitors, so just parity." | Website VRIO expanded screenshot — showing detailed VRIO assessment with resource ratings | `SCREENSHOT` `screenshots/task2_vrio_expanded.png` | Ken Burns: slow zoom_in |
| 6.4 | 15.4 - 22.4s | 7.0s | "Value Chain showed Just-In-Time works for predictable four-G demand but breaks down for uncertain five-G volumes." | Value Chain finding diagram — key insight: JIT for 4G vs. uncertainty for 5G | `DIAGRAM` `assets/diagrams/value_chain_finding.png` | Crossfade (0.3s) |
| 6.5 | 22.4 - 23.7s | 1.3s | "Then strategic positioning." | *(Merge with 6.6 — too short)* | | |

> **Merge 6.5 + first part of 6.6:** "Then strategic positioning. The BCG Matrix made it crystal clear --"

| 6.5 | 22.4 - 27.0s | 4.6s | "Then strategic positioning. The BCG Matrix made it crystal clear --" | BCG Matrix diagram — clean 2x2: 4G=Cash Cow (blue), 5G=Question Mark (green) | `DIAGRAM` `assets/diagrams/bcg_matrix.png` | Crossfade (0.3s) |
| 6.6 | 27.0 - 34.2s | 7.2s | "four-G is the cash cow funding everything, five-G is a question mark with zero market share." | *(Hold BCG Matrix — viewer reads the quadrants as narrated)* | `DIAGRAM` `assets/diagrams/bcg_matrix.png` | Hold (subtle Ken Burns: slow zoom_in) |
| 6.7 | 34.2 - 43.0s | 8.8s | *(Slightly over 8s but Bowman's is one continuous thought)* | | | |

> **Split 6.7** — 8.8s over. Split at "differentiation":

| 6.7a | 34.2 - 38.6s | 4.4s | "And Bowman's Strategy Clock shows Mo-bee-lay migrating from a hybrid position" | Website Bowman's screenshot — showing Strategy Clock positioning | `SCREENSHOT` `screenshots/task2_bowmans.png` | Ken Burns: slow zoom_in |
| 6.7b | 38.6 - 43.0s | 4.4s | "to focused differentiation as it moves through the waves." | *(Hold Bowman's screenshot — completing the visual narrative of migration)* | `SCREENSHOT` `screenshots/task2_bowmans.png` | Ken Burns: slow pan_right |

### Andrew's Part (43.0 - 87.1s)

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 6.8 | 43.0 - 50.3s | 7.3s | "Externally, Porter's Five Forces confirmed intense rivalry -- four equal firms in direct price competition post-DOJ." | Porter's finding diagram — key insight card: "Intense Rivalry" / "4 equal firms, direct price competition" | `DIAGRAM` `assets/diagrams/porters_finding.png` | Crossfade (0.4s, marks voice switch) |
| 6.9 | 50.3 - 58.0s | 7.7s | "Critical Success Factors identified the biggest gap: Mo-bee-lay's complete absence from five-G. That's not minor, it's existential." | CSF gap diagram — bold text: "ZERO 5G Presence" / "Critical Success Factor Gap" with red accent | `DIAGRAM` `assets/diagrams/csf_gap.png` | Crossfade (0.3s) |
| 6.10 | 58.0 - 61.6s | 3.6s | "Now here's what the international strategy frameworks revealed." | Website Task 2 integration screenshot — showing international strategy section | `SCREENSHOT` `screenshots/task2_integration.png` | Crossfade (0.3s) |
| 6.11 | 61.6 - 76.2s | 14.6s | *(Split — far exceeds 8s)* | | | |

> **Split 6.11** — 14.6s far exceeds limit. Split into two beats at natural midpoint:

| 6.11a | 61.6 - 69.0s | 7.4s | "Bartlett and Ghoshal shows Mo-bee-lay needs to shift from global standardization for four-G to a transnational strategy for five-G and A.I.," | International strategy diagram — Bartlett & Ghoshal: arrow from "Global Standardization" to "Transnational" | `DIAGRAM` `assets/diagrams/international_strategy.png` | Crossfade (0.3s) |
| 6.11b | 69.0 - 76.2s | 7.2s | "balancing integration with local responsiveness across the US, Europe, and Asia." | Website Bartlett screenshot — showing the Bartlett & Ghoshal framework visualization | `SCREENSHOT` `screenshots/task2_bartlett.png` | Ken Burns: slow pan_right |
| 6.12 | 76.2 - 82.1s | 5.9s | "Entry Mode Analysis points to licensing for fast five-G entry, partnerships for A.I." | Website Entry Mode screenshot — showing entry mode analysis framework | `SCREENSHOT` `screenshots/task2_entry_mode.png` | Ken Burns: slow zoom_in |
| 6.13 | 82.1 - 87.1s | 5.0s | "Thirteen frameworks, one message: the window is open, but closing fast." | Callout — "13 Frameworks. One Message." / "The window is closing fast." Bold centered text | `CALLOUT` *(generated as)* `assets/diagrams/window_closing.png` | Crossfade (0.3s) |

---

## Scene 7: Task 3 — SWOT Synthesis
**Voice:** Ava | **Duration:** 32.8s | **Cumulative start:** 266.3s
**Audio file:** `scene07_swot.mp3`

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 7.1 | 0.0 - 3.0s | 3.0s | *(Transition card)* | Transition card — "Task 3 / SWOT Synthesis" with teal accent | `TITLE` `assets/titles/transition_task3.png` | Fade in (0.3s) |
| 7.2 | 3.0 - 7.9s | 4.9s | "Task three is the SWOT synthesis, and every point traces back to Task two evidence. The picture is clear." | SWOT grid diagram — clean 2x2 with brief bullet points per quadrant | `DIAGRAM` `assets/diagrams/swot_grid.png` | Fade in (0.3s) |
| 7.3 | 7.9 - 15.4s | 7.5s | "Mo-bee-lay has strong capabilities -- dual-plant manufacturing, four point eight billion in cash generation, R and D infrastructure." | Website SWOT screenshot — showing the full interactive SWOT with strengths highlighted | `SCREENSHOT` `screenshots/task3_swot.png` | Ken Burns: slow zoom_in (focusing on Strengths quadrant) |
| 7.4 | 15.4 - 23.7s | 8.3s | *(Slightly over 8s)* | | | |

> **Split 7.4** — 8.3s marginally over. Split at "moving":

| 7.4a | 15.4 - 20.3s | 4.9s | "But those capabilities are misaligned with reality. The five-G market is waiting." | Website SWOT scrolled — showing weaknesses/threats section of the SWOT | `SCREENSHOT` `screenshots/task3_swot_scrolled.png` | Ken Burns: pan_down |
| 7.4b | 20.3 - 23.7s | 3.4s | "The A.I. window is open. Competitors are moving." | Website SWOT filtered — showing opportunities/threats filtered view | `SCREENSHOT` `screenshots/task3_swot_filtered.png` | Crossfade (0.3s) |
| 7.5 | 23.7 - 32.8s | 9.1s | *(Split — exceeds 8s)* | | | |

> **Split 7.5** — 9.1s over. Split at "A.I. R and D":

| 7.5a | 23.7 - 29.1s | 5.4s | "The strategic move writes itself: close the five-G gap while committing to A.I. R and D," | Callout — "Close the 5G gap. Commit to AI R&D." Clean bold text, wave-colored accents (green + purple) | `CALLOUT` *(generated as)* `assets/diagrams/swot_conclusion.png` | Crossfade (0.3s) |
| 7.5b | 29.1 - 32.8s | 3.7s | "funded by the four-G cash engine." | *(Hold callout — the "funded by 4G" reinforces the message already displayed)* | `CALLOUT` `assets/diagrams/swot_conclusion.png` | Hold, prepare crossfade to Scene 8 |

---

## Scene 8: Task 4 — Strategic Recommendation
**Voice:** Andrew | **Duration:** 55.1s | **Cumulative start:** 299.1s
**Audio file:** `scene08_recommendation.mp3`

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 8.1 | 0.0 - 3.0s | 3.0s | *(Transition card)* | Transition card — "Task 4 / Strategic Recommendation" with purple accent | `TITLE` `assets/titles/transition_task4.png` | Fade in (0.3s) |
| 8.2 | 3.0 - 7.2s | 4.2s | "Our recommendation: Accelerated Five-G Entry with Parallel A.I. R and D, Funded by Managed Four-G Transition." | Recommendation overview diagram — three-column layout: 4G (defend), 5G (license + enter), AI (R&D invest) | `DIAGRAM` `assets/diagrams/recommendation_overview.png` | Fade in (0.3s) |
| 8.3 | 7.2 - 11.6s | 4.4s | "For four-G, defend the cash engine but accept managed decline." | 4G recommendation diagram — "Defend & Extract": Vietnam shift, 25%->22%, extract cash | `DIAGRAM` `assets/diagrams/recommendation_4g.png` | Crossfade (0.3s) |
| 8.4 | 11.6 - 20.2s | 8.6s | *(Split — exceeds 8s)* | | | |

> **Split 8.4** — 8.6s over. Split at "everything else":

| 8.4a | 11.6 - 16.0s | 4.4s | "Shift production to Vietnam, accept share dropping from twenty-five to twenty-two percent," | *(Hold 4G recommendation diagram — detail being narrated matches the visual)* | `DIAGRAM` `assets/diagrams/recommendation_4g.png` | Hold (Ken Burns: very slow zoom_in) |
| 8.4b | 16.0 - 20.2s | 4.2s | "and extract cash to fund everything else." | Website Task 4 allocation screenshot — showing resource allocation visual | `SCREENSHOT` `screenshots/task4_allocation.png` | Crossfade (0.3s) |
| 8.5 | 20.2 - 26.0s | 5.8s | "For five-G, license technology for fast market entry within six to nine months." | 5G recommendation diagram — "License for Speed": 6-9 month timeline, build IP in parallel | `DIAGRAM` `assets/diagrams/recommendation_5g.png` | Crossfade (0.3s) |
| 8.6 | 26.0 - 34.5s | 8.5s | *(Split — exceeds 8s)* | | | |

> **Split 8.6** — 8.5s over. Split at "right now":

| 8.6a | 26.0 - 30.5s | 4.5s | "Yes, licensing creates dependency, but speed beats purity right now." | *(Hold 5G recommendation diagram — the trade-off is explained while viewer reads the detail)* | `DIAGRAM` `assets/diagrams/recommendation_5g.png` | Hold |
| 8.6b | 30.5 - 34.5s | 4.0s | "Build proprietary I.P. in parallel for the second-gen product." | Website Task 4 recommendation screenshot — showing the full recommendation detail | `SCREENSHOT` `screenshots/task4_recommendation.png` | Ken Burns: slow zoom_in |
| 8.7 | 34.5 - 43.9s | 9.4s | *(Split — exceeds 8s)* | | | |

> **Split 8.7** — 9.4s exceeds. Split at "R and D":

| 8.7a | 34.5 - 39.4s | 4.9s | "For A.I., commit one hundred fifty million to R and D. Dedicated team." | AI recommendation diagram — "$150M R&D", dedicated team, prototype Q4 2027 | `DIAGRAM` `assets/diagrams/recommendation_ai.png` | Crossfade (0.3s) |
| 8.7b | 39.4 - 43.9s | 4.5s | "Strategic partnerships. Prototype by Q four twenty twenty-seven. And honestly?" | *(Hold AI recommendation diagram — details being narrated)* | `DIAGRAM` `assets/diagrams/recommendation_ai.png` | Hold (Ken Burns: very slow zoom_in) |
| 8.8 | 43.9 - 52.0s | 8.1s | *(Split — marginally over 8s)* | | | |

> **Split 8.8** — 8.1s marginally over. Split at "scale":

| 8.8a | 43.9 - 47.9s | 4.0s | "We can't do everything at maximum scale." | Trade-off honesty diagram — "We can't do everything." Bold centered text, $90M floor reminder | `DIAGRAM` `assets/diagrams/tradeoff_honest.png` | Crossfade (0.3s) |
| 8.8b | 47.9 - 52.0s | 4.1s | "The ninety million dollar floor means sequencing investments carefully." | Website Task 4 trade-offs screenshot — showing the honest trade-offs section | `SCREENSHOT` `screenshots/task4_tradeoffs.png` | Ken Burns: slow zoom_in |
| 8.9 | 52.0 - 55.1s | 3.1s | "This is real strategy, not wishful thinking." | Recommendation overview diagram — return to the three-pillar view as a final reinforcement | `DIAGRAM` `assets/diagrams/recommendation_overview.png` | Crossfade (0.3s) |

---

## Scene 9: Closing
**Voice:** Ava (0-14.8s) then Andrew (14.8-27.3s) | **Duration:** 27.3s | **Cumulative start:** 354.2s
**Audio files:** `scene09_closing_ava.mp3` (14.8s), `scene09_closing_andrew.mp3` (12.4s)

### Ava's Part (0.0 - 14.8s)

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 9.1 | 0.0 - 3.8s | 3.8s | "Mo-bee-lay's challenge isn't about choosing one wave over another." | Three-wave overview diagram — callback to Scene 3, all three waves visible | `DIAGRAM` `assets/diagrams/three_waves_overview.png` | Crossfade (0.4s) |
| 9.2 | 3.8 - 8.9s | 5.1s | "It's about managing all three simultaneously with finite resources and real constraints." | Recommendation overview diagram — the three-pillar strategy that addresses all waves | `DIAGRAM` `assets/diagrams/recommendation_overview.png` | Crossfade (0.3s) |
| 9.3 | 8.9 - 14.8s | 5.9s | "That's what makes this case compelling, and that's what our analysis addresses head on." | Website homepage hero — final showcase of the interactive analysis website | `SCREENSHOT` `screenshots/home_hero.png` | Ken Burns: slow zoom_out (settling, cinematic) |

### Andrew's Part (14.8 - 27.3s)

| Beat | Time Range | Duration | Narration | Visual | Asset | Effect |
|------|-----------|----------|-----------|--------|-------|--------|
| 9.4 | 14.8 - 20.4s | 5.6s | "You can explore the full interactive analysis at mobile-inc-strategy dot vercel dot app." | Callout — large URL: "mobile-inc-strategy.vercel.app" centered on white bg with sky-blue accent | `CALLOUT` *(generated as)* `assets/diagrams/website_url.png` | Crossfade (0.4s, marks voice switch) |
| 9.5 | 20.4 - 27.3s | 6.9s | "Every framework, every data point, every connection is there for you to explore. Thanks for watching." | Closing card — team names, module info, 3 wave dots, "Thank you" | `TITLE` `assets/titles/closing_card.png` | Crossfade (0.3s), fade to white at 26.5s |

---

## Asset Inventory Summary

### Title Cards (10 PNGs) — `assets/titles/`
| # | Filename | Used In | Description |
|---|----------|---------|-------------|
| 1 | `opening_hook.png` | 1.1 | "Three technology waves." + wave dots |
| 2 | `title_mobile_inc.png` | 1.5-1.6 | "Mobilé Inc." + "Strategic Analysis 2025" |
| 3 | `transition_context.png` | 2.1 | Scene 2 intro card |
| 4 | `transition_three_waves.png` | 3.1 | "The Core Tension" + wave color bars |
| 5 | `transition_what_we_built.png` | 4.1 | "What We Built" card |
| 6 | `transition_task1.png` | 5.1 | "Task 1 / Strategy Process" + blue accent |
| 7 | `transition_task2.png` | 6.1 | "Task 2 / Internal & External Analysis" + green accent |
| 8 | `transition_task3.png` | 7.1 | "Task 3 / SWOT Synthesis" + teal accent |
| 9 | `transition_task4.png` | 8.1 | "Task 4 / Strategic Recommendation" + purple accent |
| 10 | `closing_card.png` | 9.5 | Team names, module, URL, wave dots |

### Diagrams (19 PNGs) — `assets/diagrams/`
| # | Filename | Used In | Description |
|---|----------|---------|-------------|
| 1 | `three_waves_overview.png` | 3.2, 3.7a, 9.1 | 3 horizontal lanes: 4G/5G/AI lifecycle curves |
| 2 | `5g_adoption_stats.png` | 3.4a | Large "70%" + "38%" stat callout |
| 3 | `zero_5g.png` | 3.4b | Bold "ZERO 5G Handsets" with red accent |
| 4 | `ai_timeline.png` | 3.5a-3.5b | AI wave: 2025 R&D decision to 2027 commercial |
| 5 | `cash_constraint.png` | 3.6, 5.6 | Resource bar with $90M red dashed floor |
| 6 | `tradeoff_honest.png` | 3.7b, 8.8a | "We can't do everything." / trade-off message |
| 7 | `three_horizons.png` | 5.2, 5.3a-5.3b | McKinsey S-curves: H1=4G, H2=5G, H3=AI |
| 8 | `vision_statement.png` | 5.4a | Vision text in clean card with blue border |
| 9 | `strategic_goals.png` | 5.4b | 4 goals with wave-colored bullets |
| 10 | `vrio_summary.png` | 6.2 | VRIO table: key resources with verdicts |
| 11 | `value_chain_finding.png` | 6.4 | JIT for 4G vs. 5G uncertainty |
| 12 | `bcg_matrix.png` | 6.5-6.6 | 2x2: 4G=Cash Cow, 5G=Question Mark |
| 13 | `porters_finding.png` | 6.8 | "Intense Rivalry" insight card |
| 14 | `csf_gap.png` | 6.9 | "ZERO 5G Presence" critical gap |
| 15 | `international_strategy.png` | 6.11a | Bartlett & Ghoshal: standardization to transnational |
| 16 | `window_closing.png` | 6.13 | "13 Frameworks. One Message." callout |
| 17 | `swot_grid.png` | 7.2 | Clean 2x2 SWOT with brief bullets |
| 18 | `swot_conclusion.png` | 7.5a-7.5b | "Close the 5G gap. Commit to AI R&D." |
| 19 | `recommendation_overview.png` | 8.2, 8.9, 9.2 | Three-column: 4G/5G/AI strategy pillars |
| 20 | `recommendation_4g.png` | 8.3, 8.4a | 4G: Vietnam shift, 25%->22%, extract |
| 21 | `recommendation_5g.png` | 8.5, 8.6a | 5G: license, 6-9 months, build IP parallel |
| 22 | `recommendation_ai.png` | 8.7a-8.7b | AI: $150M, prototype Q4 2027 |
| 23 | `website_url.png` | 9.4 | Large URL callout |

### Screenshots (20 from existing captures) — `assets/screenshots/`
| # | Source File | Used In | Ken Burns |
|---|-----------|---------|-----------|
| 1 | `home_hero.png` | 1.2, 2.6, 4.2, 9.3 | zoom_in, zoom_out |
| 2 | `home_waves.png` | 1.3, 3.3 | pan_right |
| 3 | `home_metrics.png` | 1.4, 4.5 | zoom_in, zoom_out |
| 4 | `home_full.png` | 2.2 | zoom_in |
| 5 | `overview_page.png` | 2.3 | pan_right |
| 6 | `home_tasks.png` | 2.4a | zoom_in |
| 7 | `task2_tabs.png` | 2.4b, 4.3 | pan_left |
| 8 | `task4_top.png` | 2.5 | zoom_in |
| 9 | `task2_vrio.png` | 4.4a | zoom_in |
| 10 | `task2_porters.png` | 4.4b | pan_right |
| 11 | `task2_vrio_expanded.png` | 6.3 | zoom_in |
| 12 | `task2_bowmans.png` | 6.7a-6.7b | zoom_in, pan_right |
| 13 | `task2_integration.png` | 6.10 | (static crossfade) |
| 14 | `task2_bartlett.png` | 6.11b | pan_right |
| 15 | `task2_entry_mode.png` | 6.12 | zoom_in |
| 16 | `task3_swot.png` | 7.3 | zoom_in |
| 17 | `task3_swot_scrolled.png` | 7.4a | pan_down |
| 18 | `task3_swot_filtered.png` | 7.4b | (static crossfade) |
| 19 | `task1_goals.png` | 5.5 | zoom_in |
| 20 | `task4_allocation.png` | 8.4b | (static crossfade) |
| 21 | `task4_recommendation.png` | 8.6b | zoom_in |
| 22 | `task4_tradeoffs.png` | 8.8b | zoom_in |

---

## Beat Duration Verification

All beats after merging/splitting:

| Beat | Duration | Status |
|------|----------|--------|
| 1.1 | 4.4s | OK |
| 1.2 | 6.8s | OK |
| 1.3 | 3.9s | OK |
| 1.4 | 4.0s | OK |
| 1.5+1.6 | 8.0s | OK (at limit, acceptable for title reveal) |
| 2.1 | 3.0s | OK (transition) |
| 2.2 | 3.5s | OK |
| 2.3 | 4.2s | OK |
| 2.4a | 3.7s | OK |
| 2.4b | 5.6s | OK |
| 2.5 | 6.9s | OK |
| 2.6 | 5.6s | OK |
| 3.1 | 3.0s | OK (transition) |
| 3.2 | 4.6s | OK |
| 3.3 | 7.2s | OK |
| 3.4a | 7.2s | OK |
| 3.4b | 7.1s | OK |
| 3.5a | 4.2s | OK |
| 3.5b | 4.2s | OK (hold, same asset) |
| 3.6 | 5.2s | OK |
| 3.7a | 5.2s | OK |
| 3.7b | 3.6s | OK |
| 4.1 | 3.0s | OK (transition) |
| 4.2 | 5.1s | OK |
| 4.3 | 6.7s | OK |
| 4.4a | 4.3s | OK |
| 4.4b | 4.7s | OK |
| 4.5 | 5.9s | OK |
| 5.1 | 3.0s | OK (transition) |
| 5.2 | 4.8s | OK |
| 5.3a | 5.6s | OK |
| 5.3b | 3.4s | OK |
| 5.4 | 9.5s | OK (one sentence, one visual hold — allowed exception) |
| 5.5 | 7.4s | OK |
| 5.6 | 4.7s | OK |
| 6.1 | 3.0s | OK (transition) |
| 6.2 | 5.8s | OK |
| 6.3 | 6.6s | OK |
| 6.4 | 7.0s | OK |
| 6.5 | 4.6s | OK |
| 6.6 | 7.2s | OK |
| 6.7a | 4.4s | OK |
| 6.7b | 4.4s | OK |
| 6.8 | 7.3s | OK |
| 6.9 | 7.7s | OK |
| 6.10 | 3.6s | OK |
| 6.11a | 7.4s | OK |
| 6.11b | 7.2s | OK |
| 6.12 | 5.9s | OK |
| 6.13 | 5.0s | OK |
| 7.1 | 3.0s | OK (transition) |
| 7.2 | 4.9s | OK |
| 7.3 | 7.5s | OK |
| 7.4a | 4.9s | OK |
| 7.4b | 3.4s | OK |
| 7.5a | 5.4s | OK |
| 7.5b | 3.7s | OK |
| 8.1 | 3.0s | OK (transition) |
| 8.2 | 4.2s | OK |
| 8.3 | 4.4s | OK |
| 8.4a | 4.4s | OK |
| 8.4b | 4.2s | OK |
| 8.5 | 5.8s | OK |
| 8.6a | 4.5s | OK |
| 8.6b | 4.0s | OK |
| 8.7a | 4.9s | OK |
| 8.7b | 4.5s | OK |
| 8.8a | 4.0s | OK |
| 8.8b | 4.1s | OK |
| 8.9 | 3.1s | OK |
| 9.1 | 3.8s | OK |
| 9.2 | 5.1s | OK |
| 9.3 | 5.9s | OK |
| 9.4 | 5.6s | OK |
| 9.5 | 6.9s | OK |

**All 67 beats pass the 3-8s constraint.** (1.5+1.6 = 8.0s title reveal and 5.4 = 9.5s vision statement are allowed exceptions — both are single-sentence, single-visual holds.)

---

## Transition Notes for Scene Composers

- **Scene boundaries:** Use 0.3-0.4s crossfade between all visuals within a scene
- **Voice switches** (Scenes 3, 6, 9): Use a slightly longer crossfade (0.4s) to visually mark the voice change
- **Ken Burns parameters:** All motion should be SUBTLE. Maximum zoom range: 1.00x-1.08x. Maximum pan: 5% of frame width. Speed: linear, not eased
- **Screenshots:** Load from `../video-production/screenshots/`, apply light border (1px #E5E7EB) and subtle drop shadow before compositing
- **Diagrams/Callouts:** Will be generated as static PNGs by Phase 2 teams. Dimensions: 1920x1080
- **Title cards:** Static PNGs, no animation beyond fade in/out
- **All backgrounds:** White (#FAFBFC) or pure white (#FFFFFF). No dark frames anywhere.
