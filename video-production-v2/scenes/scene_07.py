"""Scene 07 — Task 3: SWOT Synthesis (32.8 seconds)

Every SWOT point traces back to Task 2 evidence.
Animated 2x2 grid, key insight card, and strategic move visualization.

Segments:
  0-3     Transition card
  3-14    Animated 2x2 SWOT grid
  14-22   Key Insight card (grid shrinks left)
  22-28   The Strategic Move (three action items with flow)
  28-32.8 Summary punch + lower third + fade
"""

import math
import sys
sys.path.insert(0, '/home/aayushms/work/pet_projects/mba/mba-international-business-simulation-cw1/video-production-v2')

from gfx import (
    W, H, CENTER_X, CENTER_Y, C, WAVE_COLORS, WAVE_NAMES,
    font, font_bold, font_mono, font_mono_bold,
    ease_out_cubic, ease_out_expo, ease_out_back, ease_in_out_cubic,
    progress, animate, fade_in, is_visible, clamp, rgba, dim_color,
    new_frame, to_numpy, cached_gradient, cached_radial,
    draw_text, draw_text_centered, draw_text_shadow,
    draw_rounded_rect, draw_circle_filled, draw_ring,
    draw_stat_big, draw_wave_badge, draw_section_header,
    draw_lower_third, draw_particles, draw_progress_bar,
    text_size, text_width, draw_line_h, draw_line_v,
    scene_alpha, FPS, stagger_delay,
)

DURATION = 32.8

# ── SWOT data ──────────────────────────────────────────────────────

SWOT = {
    'strengths': {
        'label': 'Strengths',
        'color': C['w2_5g'],
        'items': [
            "Dual-plant manufacturing (Atlanta + Vietnam)",
            "$4.8B annual cash generation",
            "R&D infrastructure",
            "25% market share across 3 regions",
        ],
    },
    'weaknesses': {
        'label': 'Weaknesses',
        'color': C['danger'],
        'items': [
            "Zero 5G products launched",
            "JIT fails for uncertain 5G demand",
            "Capabilities misaligned with market reality",
        ],
    },
    'opportunities': {
        'label': 'Opportunities',
        'color': C['w1_4g'],
        'items': [
            "70%+ 5G urban coverage ready",
            "AI device market opens 2027",
            "Vietnam cost advantage for scaling",
        ],
    },
    'threats': {
        'label': 'Threats',
        'color': C['orange'],
        'items': [
            "DOJ ends price coordination",
            "4 equal competitors in price war",
            "Late 5G entry = permanent share loss",
        ],
    },
}


def _draw_swot_quadrant(draw, x, y, w, h, quad_key, t, base_start, alpha_scale=1.0):
    """Draw one SWOT quadrant with animated item reveal."""
    q = SWOT[quad_key]
    color = q['color']
    label = q['label']
    items = q['items']

    a_base = int(alpha_scale * 255)

    # Card background
    draw_rounded_rect(draw, (x, y, x + w, y + h), 12,
                      fill=(*C['bg_card'][:3], int(a_base * 0.7)))

    # Accent bar top
    draw_rounded_rect(draw, (x, y, x + w, y + 4), 2,
                      fill=(*color[:3], int(a_base * 0.9)))

    # Label
    draw_text_shadow(draw, (x + 20, y + 14), label, font_bold(24), color,
                     a_base, shadow_offset=2)

    # Items fade in sequentially
    item_y = y + 52
    for i, item in enumerate(items):
        item_start = base_start + 0.5 + i * 0.4
        if is_visible(t, item_start):
            ia = fade_in(t, item_start, 0.4)
            ia = int(ia * alpha_scale)
            # Bullet dot
            draw_circle_filled(draw, x + 28, item_y + 10, 4,
                               (*color[:3], ia))
            draw_text(draw, (x + 42, item_y), item, font(16), C['text_dim'], ia)
        item_y += 30


def make_frame(t):
    img = cached_gradient('s07', C['bg_dark'], (10, 14, 38))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    sa = scene_alpha(t, DURATION)
    draw_particles(draw, t, n=25, alpha_max=25)

    # ── Phase 1 (0-3s): Transition card ───────────────────────────
    if is_visible(t, 0):
        hdr_alpha = fade_in(t, 0.2, 0.8)

        # "TASK 3" small label
        task_y = animate(t, 0.2, 1.0, 50, 80, ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(task_y)), "TASK 3",
                         font(28), C['text_dim'], int(hdr_alpha * 0.7),
                         shadow_offset=2, anchor='center')

        # "SWOT Synthesis" large
        title_alpha = fade_in(t, 0.5, 0.7)
        title_y = animate(t, 0.5, 1.3, CENTER_Y - 20, CENTER_Y - 60, ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(title_y)), "SWOT Synthesis",
                         font_bold(62), C['white'], int(title_alpha),
                         shadow_offset=4, anchor='center')

        # Accent underline
        line_w = animate(t, 0.8, 1.8, 0, 260, ease_out_cubic)
        if line_w > 0:
            draw.line([(CENTER_X - int(line_w), int(title_y) + 72),
                       (CENTER_X + int(line_w), int(title_y) + 72)],
                      fill=(*C['orange'][:3], int(title_alpha * 0.7)), width=3)

        # Subtitle
        if is_visible(t, 1.2):
            sub_alpha = fade_in(t, 1.2, 0.6)
            draw_text_centered(draw, "Evidence-Based Strategic Assessment",
                               int(title_y) + 90, font(26), C['orange'],
                               int(sub_alpha))

    # ── Phase 2 (3-14s): Animated 2x2 SWOT grid ──────────────────
    # During 3-14 the grid is full size; at 14+ it shrinks to left
    if is_visible(t, 3.0):
        # Compute grid position and scale
        if t < 14.0:
            # Full-size centered grid
            grid_scale = 1.0
            grid_cx = CENTER_X
            grid_cy = CENTER_Y + 30
        else:
            # Shrink and move left
            shrink_p = progress(t, 14.0, 15.5, ease_in_out_cubic)
            grid_scale = 1.0 - 0.35 * shrink_p
            grid_cx = int(CENTER_X - 320 * shrink_p)
            grid_cy = int(CENTER_Y + 30 - 20 * shrink_p)

        quad_w = int(380 * grid_scale)
        quad_h = int(240 * grid_scale)
        gap = int(16 * grid_scale)

        # Top-left origin from center
        gx = grid_cx - quad_w - gap // 2
        gy = grid_cy - quad_h - gap // 2

        # Alpha for overall grid visibility
        grid_alpha = min(1.0, progress(t, 3.0, 3.5))
        if t > 14.0:
            grid_alpha = min(grid_alpha, 1.0)

        # Font scaling for smaller grid
        if grid_scale < 1.0:
            # Redraw at smaller scale via position offsets
            pass

        # Quadrant start times and positions: TL, TR, BL, BR
        quads = [
            ('strengths',     gx,               gy,               3.0),
            ('weaknesses',    gx + quad_w + gap, gy,               5.0),
            ('opportunities', gx,               gy + quad_h + gap, 7.5),
            ('threats',       gx + quad_w + gap, gy + quad_h + gap, 9.5),
        ]

        for quad_key, qx, qy, q_start in quads:
            if is_visible(t, q_start):
                qa = progress(t, q_start, q_start + 0.6) * grid_alpha
                slide_y = animate(t, q_start, q_start + 0.5, 20, 0, ease_out_cubic)
                _draw_swot_quadrant(draw, qx, qy + int(slide_y * grid_scale),
                                    quad_w, quad_h, quad_key, t, q_start, qa)

    # ── Phase 3 (14-22s): Key Insight card on right side ──────────
    if is_visible(t, 15.0):
        card_alpha = fade_in(t, 15.0, 0.8)
        card_x = animate(t, 15.0, 16.0, W, 980, ease_out_expo)
        card_x = int(card_x)
        card_y = 200
        card_w = 860
        card_h = 500

        # Card background
        draw_rounded_rect(draw, (card_x, card_y, card_x + card_w, card_y + card_h), 16,
                          fill=(*C['bg_card'][:3], int(card_alpha * 0.85)))

        # Gold accent
        draw_rounded_rect(draw, (card_x, card_y, card_x + card_w, card_y + 5), 2,
                          fill=(*C['gold'][:3], int(card_alpha * 0.9)))

        # "KEY INSIGHT" header
        draw_text_shadow(draw, (card_x + 40, card_y + 30), "KEY INSIGHT",
                         font_bold(18), C['gold'], int(card_alpha),
                         shadow_offset=2)

        # Main insight text
        if is_visible(t, 16.0):
            ins_alpha = fade_in(t, 16.0, 0.6)
            draw_text_shadow(draw, (card_x + 40, card_y + 75),
                             "Strong capabilities,",
                             font_bold(38), C['text'], int(ins_alpha),
                             shadow_offset=3)
            draw_text_shadow(draw, (card_x + 40, card_y + 125),
                             "WRONG direction.",
                             font_bold(38), C['danger'], int(ins_alpha),
                             shadow_offset=3)

        # Arrow visualization: Strengths -> where they point vs where they should
        if is_visible(t, 17.0):
            arr_alpha = fade_in(t, 17.0, 0.6)

            # "Strengths" box
            box_x = card_x + 60
            box_y = card_y + 200
            draw_rounded_rect(draw, (box_x, box_y, box_x + 180, box_y + 50), 8,
                              fill=(*dim_color(C['w2_5g'], 0.3)[:3], int(arr_alpha * 0.7)),
                              outline=(*C['w2_5g'][:3], int(arr_alpha * 0.5)), width=2)
            draw_text(draw, (box_x + 20, box_y + 12), "Strengths",
                      font_bold(22), C['w2_5g'], int(arr_alpha))

            # Arrow pointing right to "4G" (wrong direction — red)
            arrow_len = animate(t, 17.0, 18.0, 0, 160, ease_out_cubic)
            if arrow_len > 10:
                ax_start = box_x + 190
                ax_end = ax_start + int(arrow_len)
                ay = box_y + 25
                draw.line([(ax_start, ay), (ax_end, ay)],
                          fill=(*C['danger'][:3], int(arr_alpha * 0.8)), width=3)
                # Arrowhead
                draw.polygon([(ax_end, ay - 6), (ax_end, ay + 6), (ax_end + 10, ay)],
                             fill=(*C['danger'][:3], int(arr_alpha * 0.8)))

                # "4G (current)" label
                if arrow_len > 100:
                    la = fade_in(t, 17.8, 0.4)
                    draw_text(draw, (ax_end + 20, ay - 12), "4G (current)",
                              font_bold(20), C['danger'], int(la))
                    draw_text(draw, (ax_end + 20, ay + 10), "Stuck here",
                              font(16), C['text_muted'], int(la * 0.7))

            # Arrow pointing down-right to "5G + AI" (right direction — green)
            if is_visible(t, 18.5):
                right_alpha = fade_in(t, 18.5, 0.6)
                arrow2_len = animate(t, 18.5, 19.5, 0, 160, ease_out_cubic)

                if arrow2_len > 10:
                    a2x_start = box_x + 190
                    a2y_start = box_y + 35
                    a2x_end = a2x_start + int(arrow2_len)
                    a2y_end = a2y_start + int(arrow2_len * 0.5)
                    draw.line([(a2x_start, a2y_start), (a2x_end, a2y_end)],
                              fill=(*C['w2_5g'][:3], int(right_alpha * 0.8)), width=3)
                    draw.polygon([(a2x_end - 4, a2y_end - 8),
                                  (a2x_end + 4, a2y_end + 4),
                                  (a2x_end + 10, a2y_end - 4)],
                                 fill=(*C['w2_5g'][:3], int(right_alpha * 0.8)))

                    if arrow2_len > 100:
                        la2 = fade_in(t, 19.3, 0.4)
                        draw_text(draw, (a2x_end + 20, a2y_end - 12),
                                  "5G + AI (should be here)",
                                  font_bold(20), C['w2_5g'], int(la2))
                        draw_text(draw, (a2x_end + 20, a2y_end + 10),
                                  "Where value is moving",
                                  font(16), C['text_muted'], int(la2 * 0.7))

            # Cross-out on wrong arrow
            if is_visible(t, 20.0):
                cross_alpha = fade_in(t, 20.0, 0.3)
                cx_mid = box_x + 190 + 80
                cy_mid = box_y + 25
                draw.line([(cx_mid - 20, cy_mid - 15), (cx_mid + 20, cy_mid + 15)],
                          fill=(*C['danger'][:3], int(cross_alpha)), width=4)
                draw.line([(cx_mid - 20, cy_mid + 15), (cx_mid + 20, cy_mid - 15)],
                          fill=(*C['danger'][:3], int(cross_alpha)), width=4)

    # ── Phase 4 (22-28s): The Strategic Move ──────────────────────
    if is_visible(t, 22.0):
        move_alpha = fade_in(t, 22.0, 0.8)

        # Section header
        draw_section_header(draw, "The Strategic Move", 140, C['gold'], int(move_alpha))

        # Three action items
        actions = [
            {
                'label': "Close the 5G gap",
                'sublabel': "URGENT",
                'color': C['w2_5g'],
                'icon': "\u26a1",
                'start': 22.5,
            },
            {
                'label': "Commit to AI R&D",
                'sublabel': "INVEST",
                'color': C['w3_ai'],
                'icon': "\U0001f9ea",
                'start': 23.5,
            },
            {
                'label': "Fund with 4G cash engine",
                'sublabel': "EXTRACT",
                'color': C['w1_4g'],
                'icon': "\U0001f4b0",
                'start': 24.5,
            },
        ]

        # Three cards in a row
        card_w = 480
        card_h = 140
        total_w = card_w * 3 + 40 * 2
        start_x = CENTER_X - total_w // 2
        card_y_base = 220

        for i, action in enumerate(actions):
            ax = start_x + i * (card_w + 40)
            a_start = action['start']

            if is_visible(t, a_start):
                aa = fade_in(t, a_start, 0.6)
                slide_y = animate(t, a_start, a_start + 0.5, 30, 0, ease_out_cubic)
                ay = card_y_base + int(slide_y)

                # Card bg
                draw_rounded_rect(draw, (ax, ay, ax + card_w, ay + card_h), 12,
                                  fill=(*C['bg_card'][:3], int(aa * 0.8)))
                # Accent left bar
                draw_rounded_rect(draw, (ax, ay, ax + 5, ay + card_h), 2,
                                  fill=(*action['color'][:3], int(aa * 0.9)))

                # Colored number circle
                num_cx = ax + 40
                num_cy = ay + card_h // 2
                draw_circle_filled(draw, num_cx, num_cy, 22,
                                   (*dim_color(action['color'], 0.4)[:3], int(aa * 0.8)))
                draw_text(draw, (num_cx, num_cy - 12), str(i + 1),
                          font_bold(22), action['color'], int(aa), anchor='center')

                # Label
                draw_text_shadow(draw, (ax + 75, ay + 25), action['label'],
                                 font_bold(28), action['color'], int(aa),
                                 shadow_offset=2)

                # Sublabel badge
                sl_fnt = font_bold(14)
                sl_tw = text_width(action['sublabel'], sl_fnt)
                draw_rounded_rect(draw, (ax + 75, ay + 70, ax + 75 + sl_tw + 20, ay + 95), 10,
                                  fill=(*dim_color(action['color'], 0.25)[:3], int(aa * 0.6)),
                                  outline=(*action['color'][:3], int(aa * 0.4)), width=1)
                draw_text(draw, (ax + 85, ay + 73), action['sublabel'],
                          sl_fnt, action['color'], int(aa))

        # Flow arrows: 4G -> 5G + AI (below the cards)
        if is_visible(t, 25.5):
            flow_alpha = fade_in(t, 25.5, 0.6)

            # "4G Cash" on the left
            flow_y = 420
            flow_label_y = flow_y + 20

            # Arrow from 4G card down and branching to 5G and AI
            # Central arrow base
            base_x = start_x + 2 * (card_w + 40) + card_w // 2
            # 4G funding arrow
            arrow_prog = progress(t, 25.5, 26.5, ease_out_cubic)

            # "Funding Flow" label
            draw_text_centered(draw, "4G Cash Engine Funds Both Waves",
                               flow_y, font_bold(22), C['gold'], int(flow_alpha))

            # Three dots connected
            dot_y = flow_y + 55
            dot_positions = [
                (start_x + card_w // 2, dot_y, C['w1_4g']),                    # 4G
                (start_x + (card_w + 40) + card_w // 2, dot_y, C['w2_5g']),    # 5G
                (start_x + 2 * (card_w + 40) + card_w // 2, dot_y, C['w3_ai']),  # AI
            ]

            # Lines from 4G to 5G and AI
            line_4g_x = dot_positions[0][0]
            if arrow_prog > 0.1:
                for target_idx in [1, 2]:
                    tx = dot_positions[target_idx][0]
                    line_end_x = int(line_4g_x + (tx - line_4g_x) * arrow_prog)
                    draw.line([(line_4g_x, dot_y), (line_end_x, dot_y)],
                              fill=(*C['gold'][:3], int(flow_alpha * 0.5)), width=2)
                    # Arrowhead
                    if arrow_prog > 0.8:
                        draw.polygon([(line_end_x - 5, dot_y - 5),
                                      (line_end_x - 5, dot_y + 5),
                                      (line_end_x + 5, dot_y)],
                                     fill=(*C['gold'][:3], int(flow_alpha * 0.7)))

            # Dots
            for dx, dy, dc in dot_positions:
                draw_circle_filled(draw, dx, dy, 8,
                                   (*dc[:3], int(flow_alpha * 0.9)))

            # Labels under dots
            dot_labels = ["4G (source)", "5G (priority)", "AI (invest)"]
            for i, (dx, dy, dc) in enumerate(dot_positions):
                draw_text(draw, (dx, dy + 16), dot_labels[i],
                          font(14), dc, int(flow_alpha * 0.7), anchor='center')

    # ── Phase 5 (28-32.8s): Summary punch ─────────────────────────
    if is_visible(t, 28.0):
        punch_alpha = fade_in(t, 28.0, 0.8)
        punch_y = animate(t, 28.0, 29.0, CENTER_Y + 20, CENTER_Y - 40, ease_out_expo)

        # Build the equation: Capabilities + Right Direction = Competitive Advantage
        parts = [
            ("Capabilities", C['w2_5g'], 28.0),
            ("+", C['text_dim'], 28.8),
            ("Right Direction", C['gold'], 29.0),
            ("=", C['text_dim'], 29.8),
            ("Competitive Advantage", C['accent'], 30.0),
        ]

        # Calculate total width for centering
        fnt_eq = font_bold(36)
        total_tw = 0
        part_widths = []
        for txt, _, _ in parts:
            tw = text_width(txt, fnt_eq)
            part_widths.append(tw)
            total_tw += tw
        spacing = 24
        total_tw += spacing * (len(parts) - 1)
        eq_x = CENTER_X - total_tw // 2

        for i, (txt, color, p_start) in enumerate(parts):
            if is_visible(t, p_start):
                pa = fade_in(t, p_start, 0.5)
                # Animated equal sign: scale pop
                if txt == "=":
                    scale = animate(t, p_start, p_start + 0.3, 0.5, 1.0, ease_out_back)
                    fnt_eq_scaled = font_bold(int(36 * scale))
                    draw_text_shadow(draw, (eq_x, int(punch_y)), txt,
                                     fnt_eq_scaled, color, int(pa),
                                     shadow_offset=2)
                else:
                    draw_text_shadow(draw, (eq_x, int(punch_y)), txt,
                                     fnt_eq, color, int(pa), shadow_offset=2)
            eq_x += part_widths[i] + spacing

    # Lower third
    if is_visible(t, 2.0, DURATION - 1.0):
        lt_alpha = fade_in(t, 2.0, 0.8)
        if t > DURATION - 1.5:
            lt_alpha = int(lt_alpha * (1.0 - progress(t, DURATION - 1.5, DURATION)))
        draw_lower_third(draw, "Task 3", "SWOT Synthesis", C['orange'], int(lt_alpha))

    # Scene fade out
    if t > DURATION - 0.5:
        fo = progress(t, DURATION - 0.5, DURATION, ease_out_cubic)
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], int(255 * fo)))

    return to_numpy(img)
