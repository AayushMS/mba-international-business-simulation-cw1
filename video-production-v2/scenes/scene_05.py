"""Scene 05 — Task 1: Strategy Process (38.4 seconds)

McKinsey Three Horizons mapped to 4G/5G/AI waves.
Vision statement, goals with wave-colored bullets, $90M constraint.
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
    draw_lower_third, draw_particles, draw_text_reveal,
    text_size, text_width, draw_line_h, draw_line_v,
    scene_alpha, FPS, stagger_delay,
)

DURATION = 38.4


def _draw_s_curve(draw, x_start, x_end, y_base, y_top, pct, color, alpha, thickness=3):
    """Draw an S-curve (sigmoid) from left to right, filling up to pct of width."""
    if pct <= 0:
        return
    points = []
    n_points = int((x_end - x_start) * pct)
    if n_points < 2:
        return
    for i in range(n_points):
        frac = i / max(1, (x_end - x_start))
        # Sigmoid: maps 0..1 to 0..1 with S-shape
        sig_x = (frac - 0.5) * 10  # spread
        sig_y = 1.0 / (1.0 + math.exp(-sig_x))
        x = x_start + i
        y = y_base - (y_base - y_top) * sig_y
        points.append((int(x), int(y)))
    if len(points) > 1:
        draw.line(points, fill=(*color[:3], int(alpha)), width=thickness)


def make_frame(t):
    img = cached_gradient('s05', C['bg_dark'], (10, 14, 36))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    sa = scene_alpha(t, DURATION)
    draw_particles(draw, t, n=20, alpha_max=20, seed=55)

    # ── Phase 1 (0-3s): Transition card ────────────────────────────
    if is_visible(t, 0):
        # "Task 1" label
        label_alpha = fade_in(t, 0.2, 0.5)
        label_y = animate(t, 0.2, 1.0, 320, 300, ease_out_expo)

        draw_text_centered(draw, "TASK 1", int(label_y),
                           font(22), C['text_muted'], int(label_alpha * 0.8))

        # Big title
        if is_visible(t, 0.5):
            title_alpha = fade_in(t, 0.5, 0.7)
            title_y = animate(t, 0.5, 1.3, 380, 360, ease_out_expo)
            draw_text_shadow(draw, (CENTER_X, int(title_y)),
                             "Strategy Process",
                             font_bold(64), C['text'], int(title_alpha),
                             shadow_offset=4, anchor='center')

        # Subtitle
        if is_visible(t, 1.2):
            sub_alpha = fade_in(t, 1.2, 0.6)
            draw_text_centered(draw, "Vision, Mission, Goals & SMART Objectives",
                               int(title_y) + 80, font(24), C['text_dim'],
                               int(sub_alpha))
            # Blue accent underline
            line_w = animate(t, 1.5, 2.5, 0, 240, ease_out_cubic)
            if line_w > 0:
                draw.line([(CENTER_X - int(line_w), int(title_y) + 115),
                           (CENTER_X + int(line_w), int(title_y) + 115)],
                          fill=(*C['w1_4g'][:3], int(sub_alpha * 0.6)), width=3)

    # ── Phase 2 (3-12s): Three Horizons framework ─────────────────
    if is_visible(t, 3.0):
        hz_alpha = fade_in(t, 3.0, 0.8)

        # Section header
        draw_section_header(draw, "McKinsey Three Horizons", 80, C['accent'],
                            int(hz_alpha))

        # Axes
        axis_x = 200
        axis_y_bottom = 700
        axis_y_top = 200
        axis_x_end = W - 200
        axis_pct = progress(t, 3.2, 4.2)

        # Y-axis
        if axis_pct > 0:
            y_end = int(axis_y_bottom - (axis_y_bottom - axis_y_top) * axis_pct)
            draw.line([(axis_x, axis_y_bottom), (axis_x, y_end)],
                      fill=(*C['line_light'][:3], int(hz_alpha * 0.6)), width=2)
        # X-axis
        if axis_pct > 0.3:
            x_pct = min(1.0, (axis_pct - 0.3) / 0.7)
            x_end = int(axis_x + (axis_x_end - axis_x) * x_pct)
            draw.line([(axis_x, axis_y_bottom), (x_end, axis_y_bottom)],
                      fill=(*C['line_light'][:3], int(hz_alpha * 0.6)), width=2)

        # Time labels on X-axis
        time_labels = [("Now", 0.15), ("2026", 0.40), ("2027", 0.65), ("2028+", 0.90)]
        for label, frac in time_labels:
            lx = axis_x + int((axis_x_end - axis_x) * frac)
            if is_visible(t, 4.0):
                tl_alpha = fade_in(t, 4.0, 0.5)
                draw_text(draw, (lx, axis_y_bottom + 12), label,
                          font(16), C['text_dim'], int(tl_alpha * hz_alpha / 255),
                          anchor='center')

        # Y-axis label
        if is_visible(t, 4.0):
            yl_alpha = fade_in(t, 4.0, 0.5)
            draw_text(draw, (axis_x - 80, axis_y_top + 60), "Revenue",
                      font(16), C['text_dim'], int(yl_alpha * 0.7))

        # Three S-curves
        horizon_data = [
            # (start_t, color, y_high, y_low, label, desc, curve_type)
            (5.0, C['w1_4g'], axis_y_top + 40, axis_y_bottom - 40,
             "H1: 4G", "Defend & Extract"),
            (6.5, C['w2_5g'], axis_y_top + 100, axis_y_bottom - 80,
             "H2: 5G", "Invest Now"),
            (8.0, C['w3_ai'], axis_y_top + 180, axis_y_bottom - 120,
             "H3: AI", "Future Bet"),
        ]

        for i, (start, color, y_high, y_low, label, desc) in enumerate(horizon_data):
            if is_visible(t, start):
                curve_pct = progress(t, start, start + 2.5, ease_out_cubic)
                c_alpha = fade_in(t, start, 0.6)

                if i == 0:
                    # H1: starts high, curves down
                    points = []
                    n = int((axis_x_end - axis_x - 40) * curve_pct)
                    for j in range(max(2, n)):
                        frac = j / max(1, (axis_x_end - axis_x - 40))
                        # Declining S-curve
                        val = 1.0 - 1.0 / (1.0 + math.exp(-(frac * 8 - 3)))
                        px = axis_x + 20 + j
                        py = y_high + (y_low - y_high) * (1.0 - val)
                        points.append((int(px), int(py)))
                    if len(points) > 1:
                        draw.line(points, fill=(*color[:3], int(c_alpha * 0.8)),
                                  width=3)
                elif i == 1:
                    # H2: starts low, rises steeply
                    points = []
                    n = int((axis_x_end - axis_x - 40) * curve_pct)
                    for j in range(max(2, n)):
                        frac = j / max(1, (axis_x_end - axis_x - 40))
                        val = 1.0 / (1.0 + math.exp(-(frac * 10 - 4)))
                        px = axis_x + 20 + j
                        py = y_low - (y_low - y_high) * val
                        points.append((int(px), int(py)))
                    if len(points) > 1:
                        draw.line(points, fill=(*color[:3], int(c_alpha * 0.8)),
                                  width=3)
                else:
                    # H3: starts at zero, begins rising late
                    points = []
                    n = int((axis_x_end - axis_x - 40) * curve_pct)
                    for j in range(max(2, n)):
                        frac = j / max(1, (axis_x_end - axis_x - 40))
                        val = 1.0 / (1.0 + math.exp(-(frac * 12 - 8)))
                        px = axis_x + 20 + j
                        py = y_low - (y_low - y_high) * val
                        points.append((int(px), int(py)))
                    if len(points) > 1:
                        draw.line(points, fill=(*color[:3], int(c_alpha * 0.8)),
                                  width=3)

                # Label and description
                if curve_pct > 0.5:
                    label_alpha = int(c_alpha * min(1.0, (curve_pct - 0.5) * 4))
                    label_x = axis_x_end - 180
                    label_y = y_high - 10 + i * 20
                    # Colored dot
                    draw_circle_filled(draw, label_x - 16, label_y + 10, 6,
                                       (*color[:3], label_alpha))
                    draw_text(draw, (label_x, label_y), label,
                              font_bold(18), color, label_alpha)
                    draw_text(draw, (label_x, label_y + 24), desc,
                              font(15), C['text_dim'], int(label_alpha * 0.7))

    # ── Phase 3 (12-22s): Vision statement ─────────────────────────
    if is_visible(t, 12.0):
        vis_alpha = fade_in(t, 12.0, 0.8)

        # Card background
        card_x, card_y = 180, 240
        card_w, card_h = W - 360, 200
        card_slide = animate(t, 12.0, 13.0, 30, 0, ease_out_cubic)
        cy_actual = card_y + int(card_slide)

        draw_rounded_rect(draw, (card_x, cy_actual, card_x + card_w, cy_actual + card_h),
                          16, fill=(*C['bg_card'][:3], int(vis_alpha * 0.8)))
        # Accent border top
        draw_rounded_rect(draw, (card_x, cy_actual, card_x + card_w, cy_actual + 4),
                          2, fill=(*C['accent'][:3], int(vis_alpha * 0.8)))

        # "VISION" label
        draw_text(draw, (card_x + 40, cy_actual + 20), "OUR VISION",
                  font(16), C['accent'], int(vis_alpha * 0.7))

        # Word-by-word reveal of vision text
        vision_text = ("Lead the smartphone industry through the 4G\u21925G "
                       "transition and into the AI era by 2028")
        draw_text_reveal(draw, card_x + 40, cy_actual + 55, vision_text,
                         font_bold(30), t, 13.0, words_per_sec=3.5,
                         color=C['text'], line_width=card_w - 80)

    # ── Phase 4 (22-30s): Goals with wave-colored bullets ──────────
    if is_visible(t, 22.0):
        goals_alpha = fade_in(t, 22.0, 0.6)

        # Section header
        draw_section_header(draw, "Strategic Goals", 180, C['accent'],
                            int(goals_alpha))

        goals = [
            ("Defend 4G revenue base", C['w1_4g'], "Protect $4.8B cash engine"),
            ("Launch 5G within 6-9 months", C['w2_5g'], "Close existential gap"),
            ("Commit $150M to AI R&D", C['w3_ai'], "Secure 2028 position"),
            ("$90M cash floor maintained", C['danger'], "Non-negotiable constraint"),
        ]

        for i, (goal, color, detail) in enumerate(goals):
            start = 22.5 + i * 0.6
            if is_visible(t, start):
                ga = fade_in(t, start, 0.5)
                slide_x = animate(t, start, start + 0.4, -60, 0, ease_out_cubic)
                gx = 200 + int(slide_x)
                gy = 240 + i * 100

                # Colored bullet dot
                draw_circle_filled(draw, gx, gy + 18, 10,
                                   (*color[:3], int(ga * 0.9)))
                # Goal text
                draw_text(draw, (gx + 30, gy), goal,
                          font_bold(28), C['text'], int(ga))
                # Detail text
                draw_text(draw, (gx + 30, gy + 38), detail,
                          font(18), C['text_dim'], int(ga * 0.6))

    # ── Phase 5 (30-38.4s): Quote + $90M constraint floor visual ──
    if is_visible(t, 30.0):
        quote_alpha = fade_in(t, 30.0, 0.8)
        q_y = animate(t, 30.0, 31.0, CENTER_Y - 100, CENTER_Y - 140, ease_out_expo)

        # Big quote text
        draw_text_shadow(draw, (CENTER_X, int(q_y)),
                         "\"Strategy that ignores your biggest",
                         font_bold(34), C['text'], int(quote_alpha),
                         shadow_offset=3, anchor='center')
        draw_text_shadow(draw, (CENTER_X, int(q_y) + 50),
                         "constraint isn't strategy at all.\"",
                         font_bold(34), C['text'], int(quote_alpha),
                         shadow_offset=3, anchor='center')

        # $90M constraint floor visualization
        if is_visible(t, 32.0):
            floor_alpha = fade_in(t, 32.0, 0.8)
            floor_y = int(q_y) + 160

            # Resource bar background
            bar_x, bar_w = 300, W - 600
            bar_h = 120
            draw_rounded_rect(draw, (bar_x, floor_y, bar_x + bar_w, floor_y + bar_h),
                              8, fill=(*C['bg_card'][:3], int(floor_alpha * 0.6)))

            # Resources above the floor
            resource_h = animate(t, 32.0, 34.0, 0, 80, ease_out_cubic)
            resource_y = floor_y + (bar_h - int(resource_h))
            if resource_h > 4:
                draw_rounded_rect(draw,
                                  (bar_x + 4, resource_y,
                                   bar_x + bar_w - 4, floor_y + bar_h - 4),
                                  6, fill=(*C['accent'][:3], int(floor_alpha * 0.3)))

            # Floor line ($90M) - red dashed line
            floor_line_y = floor_y + bar_h - 30
            line_alpha = int(floor_alpha * 0.9)
            # Draw dashed line segments
            dash_len, gap_len = 12, 8
            x = bar_x
            while x < bar_x + bar_w:
                x_end = min(x + dash_len, bar_x + bar_w)
                draw.line([(x, floor_line_y), (x_end, floor_line_y)],
                          fill=(*C['danger'][:3], line_alpha), width=2)
                x += dash_len + gap_len

            # Floor label
            draw_text(draw, (bar_x + bar_w + 15, floor_line_y - 10),
                      "$90M FLOOR",
                      font_bold(16), C['danger'], int(floor_alpha * 0.9))

            # Resource labels above
            draw_text_centered(draw, "Available Resources",
                               floor_y - 30, font(18), C['text_dim'],
                               int(floor_alpha * 0.6))

        # Lower third
        lt_alpha = fade_in(t, 30.5, 0.6)
        if t > DURATION - 1.5:
            lt_alpha = int(lt_alpha * (1.0 - progress(t, DURATION - 1.5, DURATION)))
        draw_lower_third(draw, "Task 1", "Strategy Process", C['w1_4g'],
                         int(lt_alpha))

    # Scene fade out
    if t > DURATION - 0.5:
        fo = progress(t, DURATION - 0.5, DURATION, ease_out_cubic)
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], int(255 * fo)))

    return to_numpy(img)
