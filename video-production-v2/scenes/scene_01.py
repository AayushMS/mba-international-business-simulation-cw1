"""Scene 01 — Cold Open / Hook (27.1 seconds)

Three technology waves. One company. $90M on the line.
Big dramatic intro establishing the stakes of the Mobilé Inc. case.
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
    draw_lower_third, draw_particles, draw_wave_curves,
    text_size, text_width, draw_line_h,
    scene_alpha, FPS,
)

DURATION = 27.1


def make_frame(t):
    # Background
    img = cached_gradient('s01', C['bg_dark'], (12, 16, 40))
    draw = img.im  # We need ImageDraw
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    # Global scene alpha
    sa = scene_alpha(t, DURATION)

    # Particles — subtle background animation
    draw_particles(draw, t, n=25, alpha_max=30)

    # ── Phase 1 (0-2s): Three colored dots fade in center ──────────
    if is_visible(t, 0):
        dot_colors = [C['w1_4g'], C['w2_5g'], C['w3_ai']]
        dot_spacing = 60
        for i, color in enumerate(dot_colors):
            dot_alpha = fade_in(t, 0.2 + i * 0.3, 0.6)
            # Dots scale in with a gentle pulse
            base_r = 10
            pulse = 1.0 + 0.15 * math.sin(t * 2.0 + i * 1.2)
            r = int(base_r * pulse * progress(t, 0.2 + i * 0.3, 1.0 + i * 0.3))
            cx = CENTER_X + (i - 1) * dot_spacing
            cy = CENTER_Y - 40
            if r > 0:
                # Glow
                glow_r = r + 8
                draw_circle_filled(draw, cx, cy, glow_r,
                                   (*color[:3], int(dot_alpha * 0.15)))
                draw_circle_filled(draw, cx, cy, r,
                                   (*color[:3], int(dot_alpha)))

    # ── Phase 2 (2-5s): Big dramatic text ──────────────────────────
    if is_visible(t, 2.0):
        # Main title
        title_alpha = fade_in(t, 2.0, 0.8)
        title_y = animate(t, 2.0, 3.0, CENTER_Y - 10, CENTER_Y - 60, ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(title_y)), "Three technology waves.",
                         font_bold(62), C['text'], int(title_alpha),
                         shadow_offset=4, anchor='center')

        # Subtitle
        if is_visible(t, 3.0):
            sub_alpha = fade_in(t, 3.0, 0.7)
            draw_text_centered(draw, "One company.  $90M on the line.",
                               int(title_y) + 80, font(30), C['text_dim'],
                               int(sub_alpha))

    # ── Phase 3 (5-10s): Stats reveal ──────────────────────────────
    if is_visible(t, 5.0):
        # Fade out the intro text and dots
        intro_fade = 1.0 - progress(t, 5.0, 5.8)

        # Revenue stat
        if is_visible(t, 5.5):
            stat_alpha = fade_in(t, 5.5, 0.6)
            revenue_val = animate(t, 5.5, 7.5, 0.0, 4.8, ease_out_expo)
            revenue_text = f"${revenue_val:.1f}B"
            stat_x = CENTER_X - 360
            stat_y = 320
            draw_text_shadow(draw, (stat_x, stat_y), revenue_text,
                             font_bold(80), C['gold'], int(stat_alpha),
                             shadow_offset=4, anchor='center')
            draw_text(draw, (stat_x, stat_y + 90), "Annual Revenue",
                      font(22), C['text_dim'], int(stat_alpha), anchor='center')

        # Market share stat
        if is_visible(t, 6.5):
            stat_alpha = fade_in(t, 6.5, 0.6)
            share_val = animate(t, 6.5, 8.0, 0, 25, ease_out_expo)
            share_text = f"{int(share_val)}%"
            stat_x = CENTER_X
            stat_y = 320
            draw_text_shadow(draw, (stat_x, stat_y), share_text,
                             font_bold(80), C['accent'], int(stat_alpha),
                             shadow_offset=4, anchor='center')
            draw_text(draw, (stat_x, stat_y + 90), "Market Share",
                      font(22), C['text_dim'], int(stat_alpha), anchor='center')

        # Continents stat
        if is_visible(t, 7.5):
            stat_alpha = fade_in(t, 7.5, 0.6)
            cont_val = int(animate(t, 7.5, 8.5, 0, 2, ease_out_expo))
            cont_text = str(cont_val)
            stat_x = CENTER_X + 360
            stat_y = 320
            draw_text_shadow(draw, (stat_x, stat_y), cont_text,
                             font_bold(80), C['w2_5g'], int(stat_alpha),
                             shadow_offset=4, anchor='center')
            draw_text(draw, (stat_x, stat_y + 90), "Manufacturing Continents",
                      font(22), C['text_dim'], int(stat_alpha), anchor='center')

    # ── Phase 4 (10-16s): Wave visualization ───────────────────────
    if is_visible(t, 10.0):
        wave_alpha = fade_in(t, 10.0, 1.0)
        wave_intensity = int(60 * progress(t, 10.0, 11.5))

        # Draw animated sine wave curves
        wave_y_base = 680
        for i, color in enumerate(WAVE_COLORS):
            freq = 0.004 + i * 0.0012
            phase = t * (0.6 + i * 0.35)
            amplitude = 40 + i * 10
            y_offset = i * 50
            points = []
            for x in range(0, W, 3):
                y = wave_y_base + y_offset + amplitude * math.sin(freq * x + phase)
                points.append((x, int(y)))
            if len(points) > 1:
                draw.line(points, fill=(*color[:3], min(wave_intensity, int(wave_alpha * 0.3))),
                          width=3)

        # Wave labels
        wave_labels = [
            ("4G Cash Engine", C['w1_4g']),
            ("5G \u2014 Not Yet Launched", C['w2_5g']),
            ("AI \u2014 2027 Horizon", C['w3_ai']),
        ]
        for i, (label, color) in enumerate(wave_labels):
            label_start = 11.5 + i * 0.6
            if is_visible(t, label_start):
                la = fade_in(t, label_start, 0.5)
                lx = 160 + i * 560
                ly = 610
                # Small colored dot
                draw_circle_filled(draw, lx - 20, ly + 10, 6,
                                   (*color[:3], int(la)))
                draw_text(draw, (lx, ly), label, font_bold(20), color, int(la))

    # ── Phase 5 (16-22s): "The rules changed" ─────────────────────
    if is_visible(t, 16.0):
        # Fade previous content slightly
        rules_alpha = fade_in(t, 16.0, 0.8)

        # Big dramatic text
        rules_y = animate(t, 16.0, 17.0, CENTER_Y + 20, CENTER_Y - 100,
                          ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(rules_y)),
                         "The rules changed.",
                         font_bold(58), C['danger'], int(rules_alpha),
                         shadow_offset=4, anchor='center')

        # DOJ text
        if is_visible(t, 17.5):
            doj_alpha = fade_in(t, 17.5, 0.6)
            draw_text_centered(draw, "DOJ ends price coordination \u2014 2025",
                               int(rules_y) + 80, font(26), C['text_dim'],
                               int(doj_alpha))

        # Animated price arrows going down
        if is_visible(t, 18.5):
            arrow_alpha = fade_in(t, 18.5, 0.5)
            for i in range(3):
                ax = CENTER_X - 120 + i * 120
                arrow_drop = animate(t, 18.5 + i * 0.2, 20.0 + i * 0.2,
                                     0, 80, ease_out_cubic)
                ay_start = int(rules_y) + 140
                ay_end = ay_start + int(arrow_drop)
                if arrow_drop > 5:
                    # Arrow shaft
                    draw.line([(ax, ay_start), (ax, ay_end)],
                              fill=(*C['danger'][:3], int(arrow_alpha * 0.8)),
                              width=3)
                    # Arrow head
                    draw.polygon([(ax - 8, ay_end - 8), (ax + 8, ay_end - 8),
                                  (ax, ay_end + 4)],
                                 fill=(*C['danger'][:3], int(arrow_alpha)))
                # Price label
                price_labels = ["\u25bc Price", "\u25bc Margin", "\u25bc Control"]
                if arrow_drop > 30:
                    draw_text(draw, (ax, ay_end + 12), price_labels[i],
                              font(14), C['danger'], int(arrow_alpha * 0.7),
                              anchor='center')

    # ── Phase 6 (22-27s): Title card ───────────────────────────────
    if is_visible(t, 22.0):
        title_alpha = fade_in(t, 22.0, 0.8)
        # Fade out previous elements
        # Big company name
        name_y = animate(t, 22.0, 23.0, CENTER_Y + 30, CENTER_Y - 80,
                         ease_out_back)
        draw_text_shadow(draw, (CENTER_X, int(name_y)),
                         "Mobile\u0301 Inc.",
                         font_bold(76), C['white'], int(title_alpha),
                         shadow_offset=5, anchor='center')

        # Subtitle
        if is_visible(t, 23.0):
            sub_alpha = fade_in(t, 23.0, 0.6)
            draw_text_centered(draw, "Strategic Analysis 2025",
                               int(name_y) + 90, font(28),
                               C['accent'], int(sub_alpha))

        # Three wave badges
        if is_visible(t, 24.0):
            badge_alpha = fade_in(t, 24.0, 0.6)
            badge_y = int(name_y) + 150
            badge_names = ['4G LTE', '5G', 'AI Devices']
            total_w = 0
            badge_widths = []
            for i, name in enumerate(badge_names):
                bw = text_width(name, font_bold(18)) + 32
                badge_widths.append(bw)
                total_w += bw
            total_w += 30 * (len(badge_names) - 1)  # gaps
            bx = CENTER_X - total_w // 2
            for i in range(3):
                delay = 24.0 + i * 0.2
                if is_visible(t, delay):
                    ba = fade_in(t, delay, 0.4)
                    draw_wave_badge(draw, i, bx, badge_y, int(ba))
                bx += badge_widths[i] + 30

        # Subtle glow behind title
        if is_visible(t, 25.0):
            glow_alpha = fade_in(t, 25.0, 0.5)
            glow_r = 180
            draw_circle_filled(draw, CENTER_X, int(name_y) + 30, glow_r,
                               (*C['accent'][:3], int(glow_alpha * 0.04)))

    # Final scene fade out
    if t > DURATION - 0.5:
        fo = int(255 * (1.0 - progress(t, DURATION - 0.5, DURATION, ease_out_cubic)))
        # Apply fade by drawing a dark overlay
        if fo < 250:
            overlay_alpha = 255 - fo
            draw.rectangle([(0, 0), (W, H)],
                           fill=(*C['bg_dark'][:3], overlay_alpha))

    return to_numpy(img)
