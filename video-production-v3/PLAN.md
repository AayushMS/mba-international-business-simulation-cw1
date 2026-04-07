# Video V3 — Production Plan

## Problem Statement

V2 video has critical issues:
- **Dark navy theme looks AI-generated** — glowing particles, pulsing effects, elastic animations
- **Audio-visual desync** — animations don't match what's being said
- **Information overload** — too many stats, charts, progress bars crammed per scene
- **Uncanny motion graphics** — procedurally generated charts/shapes scream "AI made this"

## Design Philosophy (V3)

**Light, minimal, human.** Inspired by Apple keynote aesthetics.

| Principle | V2 (Bad) | V3 (Target) |
|-----------|----------|-------------|
| Background | Deep navy gradients | Clean white/off-white |
| Animation | Pulsing, elastic, particles | Gentle fades, subtle slides |
| Typography | Glowing text with shadows | Clean dark text, generous spacing |
| Data viz | Animated donut charts, progress bars | Simple static diagrams, clean labels |
| Content density | 5-8 elements per scene phase | 1-2 key ideas per visual beat |
| Screenshots | None | Real website screenshots (proven in v1) |
| Color | Everywhere, garish | Restrained — color only for wave accents |

### Light Color Palette
```
Background:     #FAFBFC (off-white)
Surface:        #FFFFFF (white cards)
Border:         #E5E7EB (subtle gray)
Text Primary:   #1A1A2E (near-black)
Text Secondary: #6B7280 (medium gray)
Text Muted:     #9CA3AF (light gray)
Wave 1 (4G):    #3B82F6 (blue)
Wave 2 (5G):    #10B981 (green)
Wave 3 (AI):    #8B5CF6 (purple)
Accent:         #0EA5E9 (sky blue)
Danger:         #EF4444 (red)
Gold:           #F59E0B (amber)
```

### Typography
- **Headings:** Inter Bold (or DejaVuSans-Bold as fallback)
- **Body:** Inter Regular (or DejaVuSans)
- **Numbers:** JetBrains Mono (or DejaVuSansMono)
- Generous line height, ample padding, centered layouts

### Visual Approach per Scene Type
1. **Title/Transition cards** — Pre-rendered PNGs. Centered text on white bg, thin colored accent line, small wave dots. Like v1 frames but light theme.
2. **Screenshot sections** — Real website screenshots with Ken Burns (zoom/pan). Proven to look human and authentic. Light border/shadow framing.
3. **Explanatory visuals** — Pre-rendered PNG diagrams. One concept per frame. Clean shapes, labels, no animation gimmicks. Think textbook diagram, not dashboard.
4. **Stat callouts** — Large number + short label, centered. No counting animations — just appear cleanly with a fade.

---

## Audio Structure (Fixed — Do Not Change)

| Scene | Duration | Voice | Content Summary |
|-------|----------|-------|-----------------|
| 1. Cold Open | 27.1s | Andrew | Hook: $4.8B company, rules changed, 3 waves |
| 2. Context | 32.5s | Andrew | Assignment overview, 4 tasks, interactive website |
| 3. Three Waves | 51.5s | Ava (37.5s) + Andrew (14.0s) | Core tension: 4G/5G/AI + $90M constraint |
| 4. What We Built | 29.7s | Andrew | Interactive website showcase |
| 5. Task 1 | 38.4s | Andrew | Strategy Process, Three Horizons, vision, goals |
| 6. Task 2 | 87.1s | Ava (43.0s) + Andrew (44.1s) | 13 frameworks deep analysis |
| 7. Task 3 | 32.8s | Andrew | SWOT synthesis from Task 2 evidence |
| 8. Task 4 | 55.1s | Andrew | Recommendation: 5G entry + AI R&D + 4G managed decline |
| 9. Closing | 27.3s | Ava (14.8s) + Andrew (12.4s) | Wrap-up + website URL |

**Audio files location:** `../video-production/audio/`

---

## Phase 1: Design System & Audio-Visual Storyboard

### Objective
Build the foundation: light theme rendering library + precise sentence-level storyboard mapping every narration beat to a visual.

### Deliverables
1. **`gfx_light.py`** — Light theme design system
   - Color palette (light backgrounds, dark text, wave accent colors)
   - Font loading (with Inter/fallback)
   - Easing functions (only: `ease_out_cubic`, `ease_in_out_quad` — no elastic/bounce)
   - Drawing helpers: `draw_text`, `draw_text_centered`, `rounded_rect`, `circle`
   - Background generators: solid white, subtle gradient (white to off-white)
   - Frame creation: `new_frame()` returns light bg
   - Screenshot loader: load + resize + add subtle shadow border
   - Ken Burns helpers: `zoom_in`, `zoom_out`, `pan_left`, `pan_right`
   - Scene transition: simple crossfade (no fancy wipes)

2. **`storyboard.md`** — Complete audio-visual mapping
   - Every sentence from the script mapped to a timestamp range
   - Each timestamp range assigned a specific visual (title card / screenshot / diagram / stat)
   - Visual change points aligned to sentence boundaries
   - No visual should last longer than 8s or shorter than 3s
   - Each visual annotated: what the viewer sees while hearing that sentence

### Team: `v3-phase1`
| Teammate | Agent Type | Task |
|----------|-----------|------|
| `design-system-dev` | `executor` | Build `gfx_light.py` with all helpers |
| `storyboard-mapper` | `deep-executor` | Create sentence-level storyboard from script + audio durations |

### Verification Criteria
- [ ] Light theme renders: white background, dark text, no navy/dark gradients
- [ ] No "AI" visual elements: no particles, no pulsing, no elastic easing, no glow effects
- [ ] Every sentence in script has a mapped visual in storyboard
- [ ] Visual changes happen on sentence boundaries (not mid-sentence)
- [ ] No visual beat shorter than 3s or longer than 8s
- [ ] Ken Burns helpers produce smooth, subtle motion (not jarring)

---

## Phase 2: Static Visual Assets (Pre-rendered PNGs)

### Objective
Create all pre-rendered visual assets. These are PNG images — not per-frame animations. By building them as static images first, we ensure they look polished and intentional, not procedurally generated.

### Deliverables

#### Title & Transition Cards (`assets/titles/`)
1. `opening_hook.png` — "Three technology waves." + subtitle + 3 wave dots
2. `title_mobile_inc.png` — "Mobilé Inc." + "Strategic Analysis 2025" + module info
3. `transition_context.png` — Scene 2 intro card
4. `transition_three_waves.png` — "The Core Tension" + wave color bar
5. `transition_what_we_built.png` — "What We Built" card
6. `transition_task1.png` — "Task 1 / Strategy Process" + blue accent
7. `transition_task2.png` — "Task 2 / Internal & External Analysis" + green accent
8. `transition_task3.png` — "Task 3 / SWOT Synthesis" + teal accent
9. `transition_task4.png` — "Task 4 / Strategic Recommendation" + purple accent
10. `closing_card.png` — Team names, module, website URL, 3 wave dots

#### Explanatory Diagrams (`assets/diagrams/`)
11. `three_waves_overview.png` — Three horizontal lanes: 4G (declining curve), 5G (rising), AI (emerging). Clean lines, labels, timeline axis. One simple diagram.
12. `cash_constraint.png` — Simple bar showing total resources vs $90M floor. Visual: tall bar with red dashed line at $90M.
13. `three_horizons.png` — McKinsey Three Horizons S-curves. Clean, textbook-quality. H1=4G, H2=5G, H3=AI.
14. `vision_statement.png` — Vision text in a clean card with blue accent border.
15. `strategic_goals.png` — 4 goals as clean list items with wave-colored bullets.
16. `vrio_summary.png` — Simple 2x2 or table: key resources with VRIO verdict. Minimal.
17. `value_chain_finding.png` — Key insight: JIT works for 4G, breaks for 5G. Simple diagram.
18. `bcg_matrix.png` — Clean 2x2: 4G=Cash Cow, 5G=Question Mark. Simple quadrant.
19. `porters_finding.png` — Key insight card: intense rivalry, 4 equal firms.
20. `csf_gap.png` — Critical gap: zero 5G handsets. Bold text, clean layout.
21. `international_strategy.png` — Bartlett & Ghoshal: standardization → transnational. Simple arrow diagram.
22. `swot_grid.png` — Clean 2x2 SWOT with brief bullet points per quadrant.
23. `recommendation_overview.png` — Three-column layout: 4G (defend), 5G (license + enter), AI (R&D invest).
24. `recommendation_4g.png` — 4G strategy detail: Vietnam shift, 25%→22%, extract cash.
25. `recommendation_5g.png` — 5G strategy detail: license for speed, build IP in parallel.
26. `recommendation_ai.png` — AI strategy detail: $150M R&D, prototype by Q4 2027.
27. `tradeoff_honest.png` — "We can't do everything" — resource constraint honesty.

#### Screenshot Preparation (`assets/screenshots/`)
28. Copy and prepare key website screenshots from v1 with light borders/shadows applied:
    - `home_hero.png`, `home_waves.png`, `home_metrics.png`
    - `task1_vision.png`, `task1_goals.png`
    - `task2_vrio.png`, `task2_bcg.png`, `task2_porters.png`, `task2_pestle.png`, `task2_valuechain.png`, `task2_csf.png`, `task2_bartlett.png`, `task2_entry_mode.png`, `task2_bowmans.png`
    - `task3_swot.png`
    - `task4_recommendation.png`, `task4_allocation.png`, `task4_tradeoffs.png`

### Team: `v3-phase2`
| Teammate | Agent Type | Task |
|----------|-----------|------|
| `title-card-gen` | `executor` | Generate all title/transition PNG cards using gfx_light.py |
| `diagram-gen` | `deep-executor` | Generate all explanatory diagram PNGs using gfx_light.py |
| `screenshot-prep` | `executor` | Copy + frame website screenshots with light borders |

### Verification Criteria
- [ ] ALL assets render on light/white backgrounds
- [ ] Title cards are minimal: centered text, accent line, generous whitespace
- [ ] Diagrams contain ONE key concept each, not cramming multiple ideas
- [ ] Diagrams use clean geometric shapes, not gradients or glow effects
- [ ] Text on all assets is readable (dark on light, sufficient contrast)
- [ ] No element looks "AI-generated" — no floating particles, no radial glow, no synthetic feel
- [ ] Screenshots have consistent framing treatment
- [ ] Color usage is restrained — wave colors for accents only, not everything colored
- [ ] Assets match what the storyboard expects

---

## Phase 3: Scene Composition — Scenes 1-4 (Intro & Context)

### Objective
Compose the first 4 scenes using the pre-rendered assets + screenshots + audio. These are the narrative setup scenes.

### Scene-by-Scene Approach

**Scene 1 (Cold Open — 27.1s):**
- 0-4s: `opening_hook.png` (static, fade in)
- 4-7s: `title_mobile_inc.png` (fade transition)
- 7-12s: `home_hero.png` screenshot (Ken Burns zoom in) — "Imagine you're running a $4.8B company..."
- 12-17s: `home_waves.png` screenshot (Ken Burns pan right) — "A technology wave you haven't prepared for..."
- 17-22s: `task3_swot.png` screenshot (Ken Burns zoom slight) — "That's Mobilé Inc in 2025..."
- 22-27.1s: `task4_allocation.png` screenshot (Ken Burns pan left) — "That's the challenge we took on."

**Scene 2 (Context — 32.5s):**
- 0-3s: `transition_context.png` (fade in)
- 3-11s: `home_full.png` screenshot (slow Ken Burns) — "This is our group coursework..."
- 11-19s: `overview_page.png` screenshot — "We analyzed Mobilé's strategic position..."
- 19-25s: `home_tasks.png` screenshot — "Task one... Task two... Task three... Task four..."
- 25-32.5s: Website overview screenshot — "We built a full interactive website..."

**Scene 3 (Three Waves — 51.5s):**
- 0-3s: `transition_three_waves.png` (fade in)
- 3-10s: `three_waves_overview.png` diagram — "Mobilé isn't facing one challenge..."
- 10-20s: `home_waves.png` screenshot (Ken Burns) — wave 1 details
- 20-30s: Screenshot of 5G content — wave 2 details + "hasn't launched a single 5G handset"
- 30-37.5s: Diagram/screenshot for AI wave — wave 3 details
- 37.5-44s: `cash_constraint.png` diagram — "$90M cash reserve floor" (Andrew's part)
- 44-51.5s: `tradeoff_honest.png` — "You can't maximize everything"

**Scene 4 (What We Built — 29.7s):**
- 0-3s: `transition_what_we_built.png` (fade in)
- 3-10s: `home_hero.png` screenshot (Ken Burns) — "interactive strategy analysis website"
- 10-17s: `task2_vrio.png` screenshot — "interactive charts, framework visualizations"
- 17-23s: `task2_porters.png` screenshot — "dive into frameworks like VRIO or Porter's..."
- 23-29.7s: `home_metrics.png` screenshot — "Everything traces back to the case data"

### Team: `v3-phase3`
| Teammate | Agent Type | Task |
|----------|-----------|------|
| `scene-1-2` | `deep-executor` | Compose scenes 1 and 2 with audio sync |
| `scene-3-4` | `deep-executor` | Compose scenes 3 and 4 with audio sync |

### Verification Criteria
- [ ] Each scene segment renders as MP4 with correct audio
- [ ] Visual changes happen at sentence boundaries, not mid-word
- [ ] Ken Burns motion is SUBTLE — no jarring zooms or fast pans
- [ ] Transitions between visuals are smooth crossfades (0.3-0.5s)
- [ ] No visual is held for more than 8s (keeps viewer engaged)
- [ ] Content shown on screen matches what's being said (sync check)
- [ ] Light theme maintained throughout — no dark frames
- [ ] No "AI look" — clean, intentional, human-designed feel

---

## Phase 4: Scene Composition — Scenes 5-9 (Analysis & Recommendation)

### Objective
Compose the analytical scenes. These are the most content-heavy and need the most careful visual planning.

### Scene-by-Scene Approach

**Scene 5 (Task 1 — 38.4s):**
- 0-3s: `transition_task1.png`
- 3-12s: `three_horizons.png` diagram — McKinsey Three Horizons explanation
- 12-22s: `vision_statement.png` — Vision statement reveal
- 22-30s: `strategic_goals.png` — Strategic goals list
- 30-38.4s: `cash_constraint.png` + screenshot — "Strategy that ignores your biggest constraint..."

**Scene 6 (Task 2 — 87.1s): [Ava 43s + Andrew 44.1s]**
- 0-3s: `transition_task2.png`
- 3-10s: `vrio_summary.png` — VRIO findings
- 10-18s: `value_chain_finding.png` — Value Chain insight
- 18-26s: `bcg_matrix.png` — BCG Matrix (4G=cash cow, 5G=question mark)
- 26-33s: `task2_bowmans.png` screenshot — Bowman's Strategy Clock
- 33-43s: `task2_vrio.png` screenshot — transition to external (crossfade)
- 43-52s: `porters_finding.png` — Porter's Five Forces finding
- 52-60s: `csf_gap.png` — Critical Success Factors gap
- 60-70s: `international_strategy.png` — Bartlett & Ghoshal
- 70-80s: `task2_entry_mode.png` screenshot — Entry Mode Analysis
- 80-87.1s: Summary visual — "13 frameworks, one message: window closing fast"

**Scene 7 (Task 3 — 32.8s):**
- 0-3s: `transition_task3.png`
- 3-12s: `swot_grid.png` diagram — SWOT overview
- 12-22s: `task3_swot.png` screenshot (Ken Burns) — "strong capabilities... dual-plant, $4.8B..."
- 22-32.8s: Key insight visual — "close the 5G gap while committing to AI R&D"

**Scene 8 (Task 4 — 55.1s):**
- 0-3s: `transition_task4.png`
- 3-10s: `recommendation_overview.png` — Three-pillar strategy overview
- 10-22s: `recommendation_4g.png` — 4G: defend, shift to Vietnam, accept decline
- 22-35s: `recommendation_5g.png` — 5G: license for speed, build IP in parallel
- 35-45s: `recommendation_ai.png` — AI: $150M R&D, prototype by Q4 2027
- 45-55.1s: `tradeoff_honest.png` + `task4_allocation.png` screenshot — honesty about constraints

**Scene 9 (Closing — 27.3s):**
- 0-10s: Key takeaway visual — "managing all three simultaneously"
- 10-20s: Website URL card — "mobile-inc-strategy.vercel.app"
- 20-27.3s: `closing_card.png` — team names, thanks

### Team: `v3-phase4`
| Teammate | Agent Type | Task |
|----------|-----------|------|
| `scene-5-6` | `deep-executor` | Compose scenes 5 and 6 (longest, most complex) |
| `scene-7-8-9` | `deep-executor` | Compose scenes 7, 8, and 9 |

### Verification Criteria
- [ ] Framework diagrams shown match the framework being discussed in audio
- [ ] No screenshot shown while audio talks about a different topic
- [ ] Scene 6 (87.1s) stays visually engaging — no single visual held too long
- [ ] Transition cards appear for exactly 3s before content begins
- [ ] All recommendation details match what audio states (numbers, percentages)
- [ ] Closing card has correct team names and website URL
- [ ] Light theme maintained — no dark frames leak in
- [ ] Explanatory diagrams are readable at 1080p

---

## Phase 5: Final Assembly & Polish

### Objective
Concatenate all 9 scene segments into the final video. Add inter-scene transitions. Export at production quality.

### Deliverables
1. **`compose.py`** — Final assembly script
   - Load all 9 segment MP4s
   - Add 0.3s crossfade transitions between scenes
   - Apply very subtle fade-in at video start (0.5s)
   - Apply fade-to-white at video end (0.8s)
   - Export: H.264, 24fps, 1920x1080, bitrate 8000k, AAC audio

2. **`output/mobile_inc_v3.mp4`** — Final video (~6:30)

### Team: `v3-phase5`
| Teammate | Agent Type | Task |
|----------|-----------|------|
| `assembler` | `executor` | Run final assembly, export video |

### Final Verification Criteria (Most Strict)
- [ ] Total duration within 5s of audio total (381.4s)
- [ ] Audio plays continuously with no gaps or jumps between scenes
- [ ] No black frames or visual glitches at scene boundaries
- [ ] Light theme is consistent start to finish — no dark frame anywhere
- [ ] EVERY visual matches the audio at that timestamp (full sync review)
- [ ] Nothing looks "AI-generated" — no synthetic textures, no glow, no pulsing
- [ ] Text on all frames is crisp and readable
- [ ] Video starts and ends cleanly (fade in/out)
- [ ] Content accuracy: all numbers, names, frameworks mentioned match audio
- [ ] Visual pacing feels natural — not rushed, not stagnant

---

## Verifier Agent Team Protocol

After EACH phase, a **verifier team** is spawned with these constraints:

### Verifier Rules
1. **Minimal context** — Verifier gets ONLY the deliverables and verification criteria. No explanation of "why" decisions were made.
2. **Strict scoring** — Each criterion is PASS/FAIL. No partial credit.
3. **AI Detection Focus** — Verifier actively looks for anything that looks AI-generated:
   - Synthetic color gradients?
   - Floating particles or glow effects?
   - Too-perfect geometric patterns?
   - Text with weird spacing or rendering artifacts?
   - "Corporate AI slideshow" aesthetic?
4. **Sync Verification** — For scene phases, verifier must check audio-visual alignment.
5. **Nitpick Mode** — Verifier reports ANY issue, no matter how small:
   - Slightly wrong font weight?
   - Inconsistent padding?
   - Color that feels off?
   - Visual that doesn't quite match the audio?
6. **Blocking** — Phase does not proceed until ALL verification criteria pass.

### Verifier Team Composition
| Teammate | Agent Type | Task |
|----------|-----------|------|
| `visual-reviewer` | `quality-reviewer` | Check visual quality, AI-detection, aesthetics |
| `sync-checker` | `verifier` | Check audio-visual alignment, content accuracy |

---

## Execution Summary

```
Phase 1: Design System + Storyboard
  └─ Verify → Must pass before Phase 2

Phase 2: Static Visual Assets (PNGs)
  └─ Verify → Must pass before Phase 3

Phase 3: Scenes 1-4 Composition
  └─ Verify → Must pass before Phase 4

Phase 4: Scenes 5-9 Composition
  └─ Verify → Must pass before Phase 5

Phase 5: Final Assembly
  └─ Final Verify → DONE
```

**Total teammates across all phases:** ~15 agents
**Estimated phases:** 5 build + 5 verify = 10 team cycles

---

## File Structure

```
video-production-v3/
├── PLAN.md              ← This file
├── storyboard.md        ← Audio-visual mapping (Phase 1)
├── gfx_light.py         ← Light theme design system (Phase 1)
├── gen_titles.py        ← Title card generator (Phase 2)
├── gen_diagrams.py      ← Diagram generator (Phase 2)
├── gen_screenshots.py   ← Screenshot prep script (Phase 2)
├── assets/
│   ├── titles/          ← Pre-rendered title/transition PNGs
│   ├── diagrams/        ← Pre-rendered explanatory diagram PNGs
│   └── screenshots/     ← Prepared website screenshots
├── scenes/
│   ├── __init__.py
│   ├── scene_01.py ... scene_09.py
├── compose.py           ← Final assembly script (Phase 5)
├── segments/            ← Per-scene MP4 segments
└── output/
    └── mobile_inc_v3.mp4
```
