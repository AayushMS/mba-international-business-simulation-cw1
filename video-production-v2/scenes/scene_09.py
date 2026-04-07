"""Scene 09 — Closing (27.3 seconds)

Three waves, one strategy. Summary recap, institutional credits,
website URL, team names, and final farewell.

Segments:
  0-5     Three wave curves + "Three waves. One strategy."
  5-12    Summary stats recap
  12-15   Compelling case text
  15-20   Closing card with institution
  20-24   Website URL
  24-27.3 Team names + "Thanks for watching" + fade
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

DURATION = 27.3


def _draw_animated_wave(draw, t, wave_idx, y_base, amplitude, alpha):
    """Draw a single animated sine wave across the screen."""
    color = WAVE_COLORS[wave_idx]
    freq = 0.004 + wave_idx * 0.001
    phase = t * (0.6 + wave_idx * 0.3)
    points = []
    for x in range(0, W, 3):
        y = y_base + amplitude * math.sin(freq * x + phase)
        points.append((x, int(y)))
    if len(points) > 1:
        draw.line(points, fill=(*color[:3], int(alpha)), width=3)


def make_frame(t):
    img = cached_gradient('s09', C['bg_dark'], (10, 14, 38))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    sa = scene_alpha(t, DURATION)
    draw_particles(draw, t, n=20, alpha_max=20)

    # ── Phase 1 (0-5s): Three wave curves + title ─────────────────
    if is_visible(t, 0):
        wave_alpha = animate(t, 0.3, 2.0, 0, 70, ease_out_cubic)

        # Three wave curves animate across the screen
        y_bases = [CENTER_Y - 60, CENTER_Y, CENTER_Y + 60]
        amplitudes = [45, 55, 40]
        for i in range(3):
            w_start = 0.3 + i * 0.4
            if is_visible(t, w_start):
                wa = animate(t, w_start, w_start + 1.0, 0, wave_alpha, ease_out_cubic)
                _draw_animated_wave(draw, t, i, y_bases[i], amplitudes[i], wa)

        # Title overlay: "Three waves. One strategy."
        if is_visible(t, 1.5):
            title_alpha = fade_in(t, 1.5, 1.0)
            title_y = animate(t, 1.5, 2.5, CENTER_Y + 10, CENTER_Y - 20, ease_out_expo)

            draw_text_shadow(draw, (CENTER_X, int(title_y)),
                             "Three waves. One strategy.",
                             font_bold(56), C['white'], int(title_alpha),
                             shadow_offset=4, anchor='center')

    # ── Phase 2 (5-12s): Summary stats recap ──────────────────────
    if is_visible(t, 5.0, 12.5):
        # Fade out waves
        stats_alpha_base = fade_in(t, 5.0, 0.8)
        if t > 11.5:
            stats_alpha_base = int(stats_alpha_base * (1.0 - progress(t, 11.5, 12.5)))

        stats = [
            ("4", "Tasks", C['accent']),
            ("13", "Frameworks", C['w2_5g']),
            ("3", "Markets", C['w1_4g']),
            ("1", "Recommendation", C['gold']),
        ]

        stat_spacing = 340
        total_stats_w = stat_spacing * (len(stats) - 1)
        stat_x_start = CENTER_X - total_stats_w // 2

        for i, (val, label, color) in enumerate(stats):
            s_start = 5.5 + i * 0.6
            if is_visible(t, s_start):
                sa_s = min(int(stats_alpha_base), fade_in(t, s_start, 0.5))
                slide_y = animate(t, s_start, s_start + 0.4, 20, 0, ease_out_cubic)
                sx = stat_x_start + i * stat_spacing
                sy = CENTER_Y - 60 + int(slide_y)

                # Value
                draw_text_shadow(draw, (sx, sy), val, font_bold(72), color,
                                 sa_s, shadow_offset=3, anchor='center')
                # Label
                draw_text(draw, (sx, sy + 80), label, font(22), C['text_dim'],
                          sa_s, anchor='center')

        # Dividers between stats
        for i in range(len(stats) - 1):
            d_start = 6.0 + i * 0.6
            if is_visible(t, d_start):
                da = min(int(stats_alpha_base * 0.2), fade_in(t, d_start, 0.3))
                dx = stat_x_start + (i + 1) * stat_spacing - stat_spacing // 2
                draw.line([(dx, CENTER_Y - 70), (dx, CENTER_Y + 70)],
                          fill=(*C['line'][:3], int(da)), width=1)

    # ── Phase 3 (12-15s): Compelling case text ────────────────────
    if is_visible(t, 12.0, 15.5):
        txt_alpha = fade_in(t, 12.0, 0.8)
        if t > 14.5:
            txt_alpha = int(txt_alpha * (1.0 - progress(t, 14.5, 15.5)))

        txt_y = animate(t, 12.0, 13.0, CENTER_Y + 10, CENTER_Y - 30, ease_out_expo)

        # "What makes this case compelling:"
        if is_visible(t, 12.2):
            la = min(int(txt_alpha), fade_in(t, 12.2, 0.5))
            draw_text_centered(draw, "What makes this case compelling:",
                               int(txt_y) - 30, font(24), C['text_muted'], int(la * 0.7))

        # Main line
        if is_visible(t, 12.8):
            ma = min(int(txt_alpha), fade_in(t, 12.8, 0.6))
            draw_text_shadow(draw, (CENTER_X, int(txt_y) + 20),
                             "Managing all three simultaneously",
                             font_bold(40), C['accent'], int(ma),
                             shadow_offset=3, anchor='center')

        if is_visible(t, 13.5):
            sa2 = min(int(txt_alpha), fade_in(t, 13.5, 0.5))
            draw_text_centered(draw, "with finite resources",
                               int(txt_y) + 75, font_bold(36), C['text_dim'],
                               int(sa2))

    # ── Phase 4 (15-20s): Closing card ────────────────────────────
    if is_visible(t, 15.0, 20.5):
        card_alpha = fade_in(t, 15.0, 0.8)
        if t > 19.5:
            card_alpha = int(card_alpha * (1.0 - progress(t, 19.5, 20.5)))

        # Three colored dots center screen
        dot_y = CENTER_Y - 120
        for i, color in enumerate(WAVE_COLORS):
            d_start = 15.3 + i * 0.2
            if is_visible(t, d_start):
                da = min(int(card_alpha), fade_in(t, d_start, 0.4))
                dx = CENTER_X + (i - 1) * 50
                pulse = 1.0 + 0.1 * math.sin(t * 2.0 + i * 1.2)
                r = int(8 * pulse)
                # Glow
                draw_circle_filled(draw, dx, dot_y, r + 6,
                                   (*color[:3], int(da * 0.15)))
                draw_circle_filled(draw, dx, dot_y, r,
                                   (*color[:3], int(da)))

        # "Mobilé Inc. Strategic Analysis"
        if is_visible(t, 16.0):
            t_alpha = min(int(card_alpha), fade_in(t, 16.0, 0.6))
            draw_text_shadow(draw, (CENTER_X, CENTER_Y - 50),
                             "Mobil\u00e9 Inc. Strategic Analysis",
                             font_bold(48), C['white'], int(t_alpha),
                             shadow_offset=3, anchor='center')

        # Institution line
        if is_visible(t, 17.0):
            i_alpha = min(int(card_alpha), fade_in(t, 17.0, 0.5))
            draw_text_centered(draw, "MN7002NI  |  Islington College  |  London Metropolitan University",
                               CENTER_Y + 20, font(22), C['text_dim'],
                               int(i_alpha * 0.8))

    # ── Phase 5 (20-24s): Website URL ─────────────────────────────
    if is_visible(t, 20.0, 24.5):
        url_alpha = fade_in(t, 20.0, 0.8)
        if t > 23.5:
            url_alpha = int(url_alpha * (1.0 - progress(t, 23.5, 24.5)))

        url_y = animate(t, 20.0, 21.0, CENTER_Y + 10, CENTER_Y - 50, ease_out_expo)

        # URL
        if is_visible(t, 20.5):
            ua = min(int(url_alpha), fade_in(t, 20.5, 0.6))

            # URL background card
            url_text = "mobile-inc-strategy.vercel.app"
            url_fnt = font_mono_bold(36)
            url_tw = text_width(url_text, url_fnt)
            pad_x, pad_y = 40, 20
            rx = CENTER_X - url_tw // 2 - pad_x
            ry = int(url_y) - pad_y
            rw = url_tw + pad_x * 2
            rh = 50 + pad_y * 2

            draw_rounded_rect(draw, (rx, ry, rx + rw, ry + rh), 16,
                              fill=(*C['bg_card'][:3], int(ua * 0.6)),
                              outline=(*C['accent'][:3], int(ua * 0.4)), width=2)

            draw_text_shadow(draw, (CENTER_X, int(url_y)),
                             url_text, url_fnt, C['accent'], int(ua),
                             shadow_offset=3, anchor='center')

        # Subtitle
        if is_visible(t, 21.5):
            sa3 = min(int(url_alpha), fade_in(t, 21.5, 0.5))
            draw_text_centered(draw, "Explore the full interactive analysis",
                               int(url_y) + 70, font(24), C['text_dim'],
                               int(sa3 * 0.8))

    # ── Phase 6 (24-27.3s): Team names + farewell ─────────────────
    if is_visible(t, 24.0):
        team_alpha = fade_in(t, 24.0, 0.6)

        # Team row 1
        if is_visible(t, 24.2):
            r1a = min(int(team_alpha), fade_in(t, 24.2, 0.4))
            draw_text_centered(draw,
                               "Bishwesh Ram Shrestha  |  Gaurav Dangol  |  Bishan Subedi",
                               CENTER_Y - 60, font(20), C['text_dim'],
                               int(r1a * 0.8))

        # Team row 2
        if is_visible(t, 24.6):
            r2a = min(int(team_alpha), fade_in(t, 24.6, 0.4))
            draw_text_centered(draw,
                               "Aayush Man Singh  |  Ruchan Jung Sijapati  |  Shaswat Nibha Maharjan",
                               CENTER_Y - 25, font(20), C['text_dim'],
                               int(r2a * 0.8))

        # "Thanks for watching." last
        if is_visible(t, 25.2):
            thanks_alpha = fade_in(t, 25.2, 0.6)
            thanks_y = animate(t, 25.2, 25.8, CENTER_Y + 30, CENTER_Y + 50, ease_out_cubic)
            draw_text_shadow(draw, (CENTER_X, int(thanks_y)),
                             "Thanks for watching.",
                             font_bold(38), C['white'], int(thanks_alpha),
                             shadow_offset=3, anchor='center')

    # Gentle overall fade out for last 1s
    if t > DURATION - 1.0:
        fo = progress(t, DURATION - 1.0, DURATION, ease_out_cubic)
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], int(255 * fo)))

    return to_numpy(img)
