"""Scene 08 — Task 4: Strategic Recommendation (55.1 seconds)

Accelerated 5G Entry with Parallel AI R&D, Funded by Managed 4G Transition.
Three-column wave strategy, resource allocation, trade-offs, timeline.

Segments:
  0-3     Transition card
  3-8     Strategy title animation
  8-20    Three-column wave strategy
  20-32   Resource allocation visualization
  32-42   Honest trade-offs cards
  42-50   Timeline visualization
  50-55.1 Closing statement + fade
"""

import math
import sys
sys.path.insert(0, '/home/aayushms/work/pet_projects/mba/mba-international-business-simulation-cw1/video-production-v2')

from gfx import (
    W, H, CENTER_X, CENTER_Y, C, WAVE_COLORS, WAVE_NAMES,
    font, font_bold, font_mono, font_mono_bold,
    ease_out_cubic, ease_out_expo, ease_out_back, ease_in_out_cubic, ease_linear,
    progress, animate, fade_in, is_visible, clamp, rgba, dim_color,
    new_frame, to_numpy, cached_gradient, cached_radial,
    draw_text, draw_text_centered, draw_text_shadow,
    draw_rounded_rect, draw_circle_filled, draw_ring,
    draw_stat_big, draw_wave_badge, draw_section_header,
    draw_lower_third, draw_particles, draw_progress_bar,
    text_size, text_width, draw_line_h, draw_line_v,
    scene_alpha, FPS, stagger_delay,
)

DURATION = 55.1


def _seg_alpha(t, seg_start, seg_end, fade_in_dur=0.6, fade_out_dur=0.5):
    """Alpha for a segment that fades in at seg_start and fades out at seg_end."""
    if t < seg_start or t > seg_end + fade_out_dur:
        return 0
    a_in = fade_in(t, seg_start, fade_in_dur)
    if t > seg_end:
        a_out = int(255 * (1.0 - progress(t, seg_end, seg_end + fade_out_dur)))
        return min(a_in, a_out)
    return a_in


def make_frame(t):
    img = cached_gradient('s08', C['bg_dark'], (10, 14, 38))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    sa = scene_alpha(t, DURATION)
    draw_particles(draw, t, n=25, alpha_max=22)

    # ── Phase 1 (0-3s): Transition card ───────────────────────────
    if is_visible(t, 0):
        hdr_alpha = fade_in(t, 0.2, 0.8)

        task_y = animate(t, 0.2, 1.0, 50, 80, ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(task_y)), "TASK 4",
                         font(28), C['text_dim'], int(hdr_alpha * 0.7),
                         shadow_offset=2, anchor='center')

        title_alpha = fade_in(t, 0.5, 0.7)
        title_y = animate(t, 0.5, 1.3, CENTER_Y - 20, CENTER_Y - 60, ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(title_y)), "Strategic Recommendation",
                         font_bold(58), C['white'], int(title_alpha),
                         shadow_offset=4, anchor='center')

        line_w = animate(t, 0.8, 1.8, 0, 300, ease_out_cubic)
        if line_w > 0:
            draw.line([(CENTER_X - int(line_w), int(title_y) + 70),
                       (CENTER_X + int(line_w), int(title_y) + 70)],
                      fill=(*C['gold'][:3], int(title_alpha * 0.7)), width=3)

        if is_visible(t, 1.2):
            sub_alpha = fade_in(t, 1.2, 0.6)
            draw_text_centered(draw, "Accelerated 5G + Parallel AI R&D",
                               int(title_y) + 88, font(26), C['gold'],
                               int(sub_alpha))

    # ── Phase 2 (3-8s): Strategy title lines ──────────────────────
    if is_visible(t, 3.0, 8.5):
        seg_a = _seg_alpha(t, 3.0, 7.5)

        lines = [
            ("Accelerated 5G Entry", C['w2_5g'], 3.5),
            ("with Parallel AI R&D", C['w3_ai'], 4.5),
            ("Funded by Managed 4G Transition", C['w1_4g'], 5.5),
        ]

        base_y = CENTER_Y - 100
        for i, (text, color, start) in enumerate(lines):
            if is_visible(t, start):
                la = min(seg_a, fade_in(t, start, 0.7))
                slide_x = animate(t, start, start + 0.6, -60, 0, ease_out_expo)
                ly = base_y + i * 80
                draw_text_shadow(draw, (CENTER_X + int(slide_x), ly), text,
                                 font_bold(48), color, int(la),
                                 shadow_offset=3, anchor='center')

    # ── Phase 3 (8-20s): Three-column wave strategy ───────────────
    if is_visible(t, 8.0, 20.5):
        seg_a = _seg_alpha(t, 8.0, 19.5)

        col_w = 520
        col_gap = 30
        total_w = col_w * 3 + col_gap * 2
        col_x_start = CENTER_X - total_w // 2
        col_y = 130

        columns = [
            {
                'header': "Wave 1: Managed Decline",
                'color': C['w1_4g'],
                'start': 8.5,
                'items': [
                    "Defend cash engine",
                    "Shift production \u2192 Vietnam",
                    "Extract cash to fund 5G + AI",
                ],
                'stat_label': "Market Share",
                'stat_from': 25, 'stat_to': 22,
                'stat_suffix': "%",
                'stat_down': True,
            },
            {
                'header': "Wave 2: Accelerated Entry",
                'color': C['w2_5g'],
                'start': 11.0,
                'items': [
                    "License technology",
                    "Market entry: 6-9 months",
                    "Speed > Purity",
                    "Build proprietary IP for Gen 2",
                ],
                'stat_label': "Time to Market",
                'stat_text': "6-9mo",
                'pulse': True,
            },
            {
                'header': "Wave 3: Strategic Investment",
                'color': C['w3_ai'],
                'start': 13.5,
                'items': [
                    "$150M R&D commitment",
                    "Dedicated team",
                    "Strategic partnerships",
                    "Prototype: Q4 2027",
                ],
                'stat_label': "R&D Investment",
                'stat_count_to': 150,
                'stat_prefix': "$",
                'stat_suffix': "M",
            },
        ]

        for ci, col in enumerate(columns):
            cx = col_x_start + ci * (col_w + col_gap)
            c_start = col['start']

            if is_visible(t, c_start):
                ca = min(seg_a, fade_in(t, c_start, 0.7))
                slide_y = animate(t, c_start, c_start + 0.5, 30, 0, ease_out_cubic)
                cy = col_y + int(slide_y)

                # Column card
                col_h = 580
                draw_rounded_rect(draw, (cx, cy, cx + col_w, cy + col_h), 14,
                                  fill=(*C['bg_card'][:3], int(ca * 0.7)))

                # Header bar
                draw_rounded_rect(draw, (cx, cy, cx + col_w, cy + 60), 14,
                                  fill=(*dim_color(col['color'], 0.3)[:3], int(ca * 0.8)))
                # Fix bottom corners of header (overlap with card)
                draw.rectangle([(cx, cy + 46), (cx + col_w, cy + 60)],
                               fill=(*dim_color(col['color'], 0.3)[:3], int(ca * 0.8)))

                draw_text_shadow(draw, (cx + 24, cy + 15), col['header'],
                                 font_bold(22), col['color'], int(ca),
                                 shadow_offset=2)

                # Items
                item_y = cy + 80
                for ii, item in enumerate(col['items']):
                    item_start = c_start + 0.8 + ii * 0.3
                    if is_visible(t, item_start):
                        ia = min(int(ca), fade_in(t, item_start, 0.4))
                        draw_circle_filled(draw, cx + 30, item_y + 10, 4,
                                           (*col['color'][:3], ia))
                        draw_text(draw, (cx + 46, item_y), item,
                                  font(18), C['text_dim'], ia)
                    item_y += 36

                # Stat area at bottom of card
                stat_y = cy + col_h - 180
                draw.line([(cx + 20, stat_y), (cx + col_w - 20, stat_y)],
                          fill=(*C['line'][:3], int(ca * 0.3)), width=1)

                stat_start = c_start + 1.5
                if is_visible(t, stat_start):
                    sa_s = min(int(ca), fade_in(t, stat_start, 0.5))

                    if 'stat_from' in col:
                        # Counting stat (25% -> 22%)
                        val = animate(t, stat_start, stat_start + 2.0,
                                      col['stat_from'], col['stat_to'], ease_out_expo)
                        val_text = f"{val:.0f}{col['stat_suffix']}"
                        draw_text_shadow(draw, (cx + col_w // 2, stat_y + 25),
                                         val_text, font_bold(52), col['color'],
                                         sa_s, shadow_offset=3, anchor='center')
                        draw_text(draw, (cx + col_w // 2, stat_y + 85),
                                  col['stat_label'], font(16), C['text_dim'],
                                  sa_s, anchor='center')
                        # Declining progress bar
                        bar_pct = val / 30.0
                        draw_progress_bar(draw, cx + 40, stat_y + 115, col_w - 80, 14,
                                          bar_pct, col['color'])

                    elif 'stat_text' in col:
                        # Static text with pulsing dot
                        draw_text_shadow(draw, (cx + col_w // 2, stat_y + 25),
                                         col['stat_text'], font_bold(52),
                                         col['color'], sa_s, shadow_offset=3,
                                         anchor='center')
                        draw_text(draw, (cx + col_w // 2, stat_y + 85),
                                  col['stat_label'], font(16), C['text_dim'],
                                  sa_s, anchor='center')
                        # Pulsing green dot
                        if col.get('pulse'):
                            pulse_r = 6 + 3 * math.sin(t * 3.0)
                            pulse_a = int(sa_s * (0.5 + 0.5 * math.sin(t * 3.0)))
                            draw_circle_filled(draw, cx + col_w // 2 + 80, stat_y + 45,
                                               int(pulse_r),
                                               (*C['w2_5g'][:3], pulse_a))

                    elif 'stat_count_to' in col:
                        # Counting up
                        val = animate(t, stat_start, stat_start + 2.0,
                                      0, col['stat_count_to'], ease_out_expo)
                        val_text = f"{col.get('stat_prefix', '')}{val:.0f}{col['stat_suffix']}"
                        draw_text_shadow(draw, (cx + col_w // 2, stat_y + 25),
                                         val_text, font_bold(52), col['color'],
                                         sa_s, shadow_offset=3, anchor='center')
                        draw_text(draw, (cx + col_w // 2, stat_y + 85),
                                  col['stat_label'], font(16), C['text_dim'],
                                  sa_s, anchor='center')
                        # Timeline bar 2025->2027
                        bar_x = cx + 40
                        bar_w = col_w - 80
                        bar_y = stat_y + 115
                        draw_rounded_rect(draw, (bar_x, bar_y, bar_x + bar_w, bar_y + 14), 4,
                                          fill=C['bg_card'])
                        fill_pct = progress(t, stat_start, stat_start + 2.0)
                        fill_w = int(bar_w * fill_pct)
                        if fill_w > 8:
                            draw_rounded_rect(draw, (bar_x, bar_y, bar_x + fill_w, bar_y + 14),
                                              4, fill=(*col['color'][:3], 180))
                        draw_text(draw, (bar_x, bar_y + 20), "2025",
                                  font(12), C['text_muted'], sa_s)
                        draw_text(draw, (bar_x + bar_w, bar_y + 20), "2027",
                                  font(12), C['text_muted'], sa_s, anchor='right')

    # ── Phase 4 (20-32s): Resource allocation visualization ───────
    if is_visible(t, 20.0, 32.5):
        seg_a = _seg_alpha(t, 20.0, 31.5)

        draw_section_header(draw, "Resource Allocation", 130, C['gold'], seg_a)

        # Large horizontal stacked bar
        bar_x = 180
        bar_y = 210
        bar_w = W - 360
        bar_h = 70

        alloc_prog = progress(t, 20.5, 23.0, ease_out_cubic)

        # Allocation percentages shift over time (animated)
        # Start: 70% 4G, 20% 5G, 10% AI -> End: 30% 4G, 45% 5G, 25% AI
        shift_p = progress(t, 23.0, 26.0, ease_in_out_cubic)
        pct_4g = 0.70 - 0.40 * shift_p
        pct_5g = 0.20 + 0.25 * shift_p
        pct_ai = 0.10 + 0.15 * shift_p

        # Bar background
        draw_rounded_rect(draw, (bar_x, bar_y, bar_x + bar_w, bar_y + bar_h), 10,
                          fill=(*C['bg_card'][:3], int(seg_a * 0.5)))

        # Stacked segments
        segments = [
            (pct_4g, C['w1_4g'], "4G"),
            (pct_5g, C['w2_5g'], "5G"),
            (pct_ai, C['w3_ai'], "AI"),
        ]

        sx = bar_x
        for pct, color, label in segments:
            sw = int(bar_w * pct * alloc_prog)
            if sw > 12:
                draw_rounded_rect(draw, (sx, bar_y, sx + sw, bar_y + bar_h), 8,
                                  fill=(*color[:3], int(seg_a * 0.85)))
                # Label inside bar
                if sw > 60:
                    label_text = f"{label}: {pct * 100:.0f}%"
                    draw_text(draw, (sx + sw // 2, bar_y + bar_h // 2 - 10),
                              label_text, font_bold(18), C['white'],
                              int(seg_a * 0.9), anchor='center')
            sx += sw

        # $90M Floor red line
        if is_visible(t, 22.0):
            floor_alpha = fade_in(t, 22.0, 0.5)
            floor_alpha = min(floor_alpha, seg_a)
            floor_y = bar_y + bar_h + 30
            draw.line([(bar_x, floor_y), (bar_x + bar_w, floor_y)],
                      fill=(*C['danger'][:3], int(floor_alpha * 0.6)), width=2)
            # Dashed effect
            for dx in range(0, bar_w, 20):
                draw.line([(bar_x + dx, floor_y), (bar_x + dx + 10, floor_y)],
                          fill=(*C['danger'][:3], int(floor_alpha * 0.8)), width=2)
            draw_text(draw, (bar_x + bar_w + 10, floor_y - 10),
                      "$90M Floor", font_bold(16), C['danger'], int(floor_alpha))

        # "Before" and "After" labels
        if is_visible(t, 21.0):
            label_a = min(seg_a, fade_in(t, 21.0, 0.5))
            draw_text(draw, (bar_x, bar_y - 30), "Resource Shift Over Time",
                      font_bold(20), C['text'], int(label_a))

        # Budget breakdown below
        if is_visible(t, 24.0):
            bd_alpha = min(seg_a, fade_in(t, 24.0, 0.6))
            bd_y = bar_y + bar_h + 70

            budget_items = [
                ("4G Operations", f"~{pct_4g * 100:.0f}%", "Declining but stable", C['w1_4g']),
                ("5G Launch", f"~{pct_5g * 100:.0f}%", "Largest allocation", C['w2_5g']),
                ("AI R&D", f"~{pct_ai * 100:.0f}%", "$150M committed", C['w3_ai']),
                ("Cash Reserve", "$90M", "Non-negotiable floor", C['danger']),
            ]

            item_w = (bar_w - 60) // 4
            for i, (name, value, desc, color) in enumerate(budget_items):
                ix = bar_x + i * (item_w + 20)
                i_start = 24.0 + i * 0.3
                if is_visible(t, i_start):
                    ia = min(int(bd_alpha), fade_in(t, i_start, 0.4))

                    draw_rounded_rect(draw, (ix, bd_y, ix + item_w, bd_y + 120), 10,
                                      fill=(*C['bg_card'][:3], int(ia * 0.6)))
                    draw_rounded_rect(draw, (ix, bd_y, ix + item_w, bd_y + 4), 2,
                                      fill=(*color[:3], int(ia * 0.8)))

                    draw_text(draw, (ix + 16, bd_y + 16), name,
                              font_bold(16), color, ia)
                    draw_text_shadow(draw, (ix + 16, bd_y + 44), value,
                                     font_bold(30), C['text'], ia, shadow_offset=2)
                    draw_text(draw, (ix + 16, bd_y + 86), desc,
                              font(14), C['text_muted'], int(ia * 0.7))

    # ── Phase 5 (32-42s): Honest trade-offs ───────────────────────
    if is_visible(t, 32.0, 42.5):
        seg_a = _seg_alpha(t, 32.0, 41.5)

        draw_section_header(draw, "Honest Trade-Offs", 130, C['gold'], seg_a)

        tradeoffs = [
            {
                'text': "Licensing = dependency, but speed wins",
                'icon': "\u26a1",
                'color': C['w2_5g'],
                'detail': "License 5G tech now, build own IP in parallel",
            },
            {
                'text': "4G share loss accepted (25% \u2192 22%)",
                'icon': "\u2198",
                'color': C['w1_4g'],
                'detail': "Managed decline to fund growth investments",
            },
            {
                'text': "$90M floor limits parallel investment",
                'icon': "\u26a0",
                'color': C['danger'],
                'detail': "Cannot do everything at maximum scale",
            },
            {
                'text': "Sequencing > Maximizing",
                'icon': "\u2b50",
                'color': C['gold'],
                'detail': "5G first (urgent), then AI (strategic horizon)",
            },
        ]

        card_w = 720
        card_h = 110
        card_x = CENTER_X - card_w // 2
        card_y_start = 200

        for i, tf in enumerate(tradeoffs):
            tf_start = 33.0 + i * 1.8
            if is_visible(t, tf_start):
                ta = min(seg_a, fade_in(t, tf_start, 0.5))
                slide_x = animate(t, tf_start, tf_start + 0.5, 120, 0, ease_out_expo)
                cx = card_x + int(slide_x)
                cy = card_y_start + i * (card_h + 20)

                # Card
                draw_rounded_rect(draw, (cx, cy, cx + card_w, cy + card_h), 12,
                                  fill=(*C['bg_card'][:3], int(ta * 0.8)))
                # Left accent bar
                draw_rounded_rect(draw, (cx, cy, cx + 5, cy + card_h), 2,
                                  fill=(*tf['color'][:3], int(ta * 0.9)))

                # Icon circle
                icon_cx = cx + 45
                icon_cy = cy + card_h // 2
                draw_circle_filled(draw, icon_cx, icon_cy, 24,
                                   (*dim_color(tf['color'], 0.3)[:3], int(ta * 0.7)))
                draw_text(draw, (icon_cx, icon_cy - 12), tf['icon'],
                          font_bold(22), tf['color'], int(ta), anchor='center')

                # Main text
                draw_text_shadow(draw, (cx + 85, cy + 18), tf['text'],
                                 font_bold(22), C['text'], int(ta),
                                 shadow_offset=2)
                # Detail
                draw_text(draw, (cx + 85, cy + 55), tf['detail'],
                          font(16), C['text_muted'], int(ta * 0.7))

    # ── Phase 6 (42-50s): Timeline visualization ─────────────────
    if is_visible(t, 42.0, 50.5):
        seg_a = _seg_alpha(t, 42.0, 49.5)

        draw_section_header(draw, "Strategic Timeline", 130, C['accent'], seg_a)

        # Timeline horizontal line
        tl_x = 180
        tl_w = W - 360
        tl_y = 380
        tl_alpha = int(seg_a * 0.6)

        # Draw timeline line
        draw.line([(tl_x, tl_y), (tl_x + tl_w, tl_y)],
                  fill=(*C['line_light'][:3], tl_alpha), width=3)

        # Year markers: 2025, 2026, 2027, 2028
        years = ["2025", "2026", "2027", "2028"]
        for i, year in enumerate(years):
            yx = tl_x + int(tl_w * i / (len(years) - 1))
            y_start = 42.5 + i * 0.3
            if is_visible(t, y_start):
                ya = min(seg_a, fade_in(t, y_start, 0.3))
                # Tick mark
                draw.line([(yx, tl_y - 8), (yx, tl_y + 8)],
                          fill=(*C['text_dim'][:3], int(ya)), width=2)
                draw_text(draw, (yx, tl_y + 16), year, font_bold(18),
                          C['text'], int(ya), anchor='center')

        # $90M floor dashed red line across full timeline
        if is_visible(t, 43.0):
            floor_a = min(seg_a, fade_in(t, 43.0, 0.4))
            floor_line_y = tl_y + 200
            for dx in range(0, tl_w, 20):
                draw.line([(tl_x + dx, floor_line_y),
                           (tl_x + dx + 10, floor_line_y)],
                          fill=(*C['danger'][:3], int(floor_a * 0.4)), width=1)
            draw_text(draw, (tl_x + tl_w + 10, floor_line_y - 8),
                      "$90M Floor", font(13), C['danger'], int(floor_a * 0.6))

        # 4G managed decline phase (blue bar spanning 2025-2028)
        if is_visible(t, 43.5):
            bar_a = min(seg_a, fade_in(t, 43.5, 0.5))
            bar_prog = progress(t, 43.5, 44.5, ease_out_cubic)
            b4g_y = tl_y - 80
            b4g_w = int(tl_w * bar_prog)
            if b4g_w > 10:
                draw_rounded_rect(draw, (tl_x, b4g_y, tl_x + b4g_w, b4g_y + 30), 6,
                                  fill=(*C['w1_4g'][:3], int(bar_a * 0.35)))
                draw_text(draw, (tl_x + 10, b4g_y + 5), "4G Managed Decline",
                          font(14), C['w1_4g'], int(bar_a * 0.8))

        # 5G milestones
        milestones_5g = [
            (0.15, "5G Launch\nQ3 2025", 44.5),
            (0.65, "5G Gen 2\n2027", 45.5),
        ]
        for mx_pct, mlabel, m_start in milestones_5g:
            if is_visible(t, m_start):
                ma = min(seg_a, fade_in(t, m_start, 0.4))
                mx = tl_x + int(tl_w * mx_pct)
                my = tl_y - 140

                # Vertical connector
                draw.line([(mx, my + 40), (mx, tl_y - 5)],
                          fill=(*C['w2_5g'][:3], int(ma * 0.5)), width=2)
                # Diamond marker
                d = 8
                draw.polygon([(mx, my + 40 - d), (mx + d, my + 40),
                              (mx, my + 40 + d), (mx - d, my + 40)],
                             fill=(*C['w2_5g'][:3], int(ma * 0.9)))
                # Label (multi-line)
                lines = mlabel.split('\n')
                for li, line in enumerate(lines):
                    draw_text(draw, (mx, my + li * 18), line,
                              font_bold(14) if li == 0 else font(13),
                              C['w2_5g'], int(ma), anchor='center')

        # AI milestones
        milestones_ai = [
            (0.05, "AI R&D\nStart", 46.0),
            (0.65, "AI Prototype\nQ4 2027", 46.8),
            (0.95, "AI Commercial\n2028", 47.5),
        ]
        for mx_pct, mlabel, m_start in milestones_ai:
            if is_visible(t, m_start):
                ma = min(seg_a, fade_in(t, m_start, 0.4))
                mx = tl_x + int(tl_w * mx_pct)
                my = tl_y + 50

                # Vertical connector
                draw.line([(mx, tl_y + 5), (mx, my)],
                          fill=(*C['w3_ai'][:3], int(ma * 0.5)), width=2)
                # Diamond marker
                d = 8
                draw.polygon([(mx, my - d), (mx + d, my),
                              (mx, my + d), (mx - d, my)],
                             fill=(*C['w3_ai'][:3], int(ma * 0.9)))
                # Label
                lines = mlabel.split('\n')
                for li, line in enumerate(lines):
                    draw_text(draw, (mx, my + 14 + li * 18), line,
                              font_bold(14) if li == 0 else font(13),
                              C['w3_ai'], int(ma), anchor='center')

        # Legend
        if is_visible(t, 44.0):
            leg_a = min(seg_a, fade_in(t, 44.0, 0.4))
            leg_y = tl_y + 160
            legend_items = [
                ("4G Decline", C['w1_4g']),
                ("5G Milestones", C['w2_5g']),
                ("AI Milestones", C['w3_ai']),
            ]
            leg_x = CENTER_X - 200
            for li, (lname, lcolor) in enumerate(legend_items):
                lx = leg_x + li * 140
                draw_circle_filled(draw, lx, leg_y + 6, 5,
                                   (*lcolor[:3], int(leg_a * 0.8)))
                draw_text(draw, (lx + 12, leg_y - 4), lname,
                          font(14), lcolor, int(leg_a * 0.7))

    # ── Phase 7 (50-55.1s): Closing statement ────────────────────
    if is_visible(t, 50.0):
        close_alpha = fade_in(t, 50.0, 0.8)
        close_y = animate(t, 50.0, 51.0, CENTER_Y + 20, CENTER_Y - 30, ease_out_expo)

        draw_text_shadow(draw, (CENTER_X, int(close_y)),
                         "Real strategy, not wishful thinking.",
                         font_bold(48), C['white'], int(close_alpha),
                         shadow_offset=4, anchor='center')

        # Subtle glow behind text
        if is_visible(t, 51.0):
            glow_a = fade_in(t, 51.0, 0.5)
            draw_circle_filled(draw, CENTER_X, int(close_y) + 20, 200,
                               (*C['gold'][:3], int(glow_a * 0.04)))

    # Lower third
    if is_visible(t, 2.0, DURATION - 1.0):
        lt_alpha = fade_in(t, 2.0, 0.8)
        if t > DURATION - 1.5:
            lt_alpha = int(lt_alpha * (1.0 - progress(t, DURATION - 1.5, DURATION)))
        draw_lower_third(draw, "Task 4", "Strategic Recommendation", C['gold'], int(lt_alpha))

    # Scene fade out
    if t > DURATION - 0.5:
        fo = progress(t, DURATION - 0.5, DURATION, ease_out_cubic)
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], int(255 * fo)))

    return to_numpy(img)
