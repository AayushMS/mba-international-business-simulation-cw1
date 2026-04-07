"""Scene 04 — What We Built (29.7 seconds)

Showcases the interactive strategy analysis website built with React + Vite.
Tech stack badges, feature cards, framework names in wave colors.
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
    scene_alpha, FPS, stagger_delay, grid_positions,
)

DURATION = 29.7


def _draw_browser_window(draw, x, y, w, h, alpha):
    """Draw a stylized browser window outline."""
    # Window frame
    draw_rounded_rect(draw, (x, y, x + w, y + h), 12,
                      fill=(*C['bg_card'][:3], int(alpha * 0.6)),
                      outline=(*C['line_light'][:3], int(alpha * 0.5)), width=2)
    # Title bar
    draw.rectangle([(x, y), (x + w, y + 36)],
                   fill=(*C['bg_card_alt'][:3], int(alpha * 0.8)))
    draw_rounded_rect(draw, (x, y, x + w, y + 16), 12,
                      fill=(*C['bg_card_alt'][:3], int(alpha * 0.8)))
    # Three dots
    for i, dot_color in enumerate([(231, 76, 60), (243, 156, 18), (46, 204, 113)]):
        draw_circle_filled(draw, x + 24 + i * 22, y + 18, 6,
                           (*dot_color, int(alpha * 0.7)))
    # URL bar
    draw_rounded_rect(draw, (x + 100, y + 8, x + w - 20, y + 28), 6,
                      fill=(*C['bg_dark'][:3], int(alpha * 0.5)))
    draw_text(draw, (x + 112, y + 9), "mobile-strategy.vercel.app",
              font_mono(13), C['text_dim'], int(alpha * 0.5))


def _draw_tech_badge(draw, text_str, x, y, color, alpha):
    """Draw a rounded tech stack badge."""
    fnt = font_bold(20)
    tw = text_width(text_str, fnt)
    pad_x, pad_y = 20, 10
    draw_rounded_rect(draw, (x, y, x + tw + pad_x * 2, y + 40), 20,
                      fill=(*dim_color(color, 0.25)[:3], int(alpha * 0.7)),
                      outline=(*color[:3], int(alpha * 0.5)), width=2)
    draw_text(draw, (x + pad_x, y + pad_y), text_str, fnt, color, int(alpha))
    return tw + pad_x * 2


def _draw_mini_bar_chart(draw, cx, cy, alpha):
    """Draw a tiny animated bar chart icon."""
    bar_w, gap = 8, 5
    heights = [22, 34, 28, 40]
    colors = [C['w1_4g'], C['w2_5g'], C['accent'], C['gold']]
    start_x = cx - (len(heights) * (bar_w + gap)) // 2
    for i, (h, c) in enumerate(zip(heights, colors)):
        bx = start_x + i * (bar_w + gap)
        by = cy + 20 - h
        draw_rounded_rect(draw, (bx, by, bx + bar_w, cy + 20), 3,
                          fill=(*c[:3], int(alpha * 0.8)))


def _draw_grid_icon(draw, cx, cy, alpha):
    """Draw a 3x3 grid icon."""
    size = 10
    gap = 14
    for row in range(3):
        for col in range(3):
            x = cx - gap + col * gap
            y = cy - gap + 4 + row * gap
            draw_rounded_rect(draw, (x, y, x + size, y + size), 2,
                              fill=(*C['accent'][:3], int(alpha * 0.7)))


def _draw_magnifier_icon(draw, cx, cy, alpha):
    """Draw nested rounded rects as a drill-down metaphor."""
    for i in range(3):
        offset = i * 8
        a = int(alpha * (0.9 - i * 0.25))
        draw_rounded_rect(draw, (cx - 18 + offset, cy - 12 + offset,
                                 cx + 18 + offset, cy + 18 + offset), 4,
                          outline=(*C['w2_5g'][:3], a), width=2)


def _draw_connection_dots(draw, cx, cy, alpha):
    """Draw connected dots icon."""
    positions = [(cx - 14, cy - 6), (cx + 14, cy - 6),
                 (cx - 8, cy + 14), (cx + 8, cy + 14)]
    # Lines
    for i in range(len(positions)):
        for j in range(i + 1, len(positions)):
            draw.line([positions[i], positions[j]],
                      fill=(*C['w3_ai'][:3], int(alpha * 0.4)), width=1)
    # Dots
    for px, py in positions:
        draw_circle_filled(draw, px, py, 4, (*C['w3_ai'][:3], int(alpha * 0.8)))


def make_frame(t):
    img = cached_gradient('s04', C['bg_dark'], (10, 14, 36))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    sa = scene_alpha(t, DURATION)
    draw_particles(draw, t, n=25, alpha_max=25)

    # ── Phase 1 (0-3s): Section header ─────────────────────────────
    if is_visible(t, 0):
        hdr_alpha = fade_in(t, 0.2, 0.8)
        hdr_y = animate(t, 0.2, 1.2, 50, 80, ease_out_expo)

        # "WHAT WE BUILT" header
        draw_text_shadow(draw, (CENTER_X, int(hdr_y)), "WHAT WE BUILT",
                         font_bold(56), C['accent'], int(hdr_alpha),
                         shadow_offset=4, anchor='center')

        # Accent underline
        line_w = animate(t, 0.5, 1.5, 0, 280, ease_out_cubic)
        if line_w > 0:
            draw.line([(CENTER_X - int(line_w), int(hdr_y) + 68),
                       (CENTER_X + int(line_w), int(hdr_y) + 68)],
                      fill=(*C['accent'][:3], int(hdr_alpha * 0.7)), width=3)

        # Subtitle
        if is_visible(t, 1.0):
            sub_alpha = fade_in(t, 1.0, 0.6)
            draw_text_centered(draw, "An interactive strategy analysis platform",
                               int(hdr_y) + 85, font(26), C['text_dim'],
                               int(sub_alpha))

    # ── Phase 2 (3-10s): Tech stack badges + browser window ────────
    if is_visible(t, 3.0):
        badges = [
            ("React", C['w1_4g']),
            ("Vite", C['w2_5g']),
            ("Interactive Charts", C['accent']),
            ("13 Frameworks", C['w3_ai']),
        ]
        badge_y = 230
        # Calculate total width for centering
        fnt_badge = font_bold(20)
        badge_widths = [text_width(b[0], fnt_badge) + 40 for b in badges]
        total_w = sum(badge_widths) + 20 * (len(badges) - 1)
        bx = CENTER_X - total_w // 2

        for i, (label, color) in enumerate(badges):
            start = 3.0 + i * 0.4
            if is_visible(t, start):
                ba = fade_in(t, start, 0.5)
                slide_x = animate(t, start, start + 0.5, -40, 0, ease_out_back)
                actual_x = bx + int(slide_x)
                _draw_tech_badge(draw, label, actual_x, badge_y, color, ba)
            bx += badge_widths[i] + 20

        # Browser window below badges
        if is_visible(t, 5.0):
            bw_alpha = fade_in(t, 5.0, 0.8)
            bw_x, bw_y = 360, 310
            bw_w, bw_h = W - 720, 290
            bw_scale = animate(t, 5.0, 6.0, 0.95, 1.0, ease_out_cubic)
            _draw_browser_window(draw, bw_x, bw_y, bw_w, bw_h, bw_alpha)

            # Inside the browser: wave curves as content
            if is_visible(t, 6.0):
                content_alpha = fade_in(t, 6.0, 0.8)
                # Mini wave curves inside browser
                for i, color in enumerate(WAVE_COLORS):
                    freq = 0.006 + i * 0.002
                    phase = t * (0.4 + i * 0.2)
                    points = []
                    for x in range(bw_x + 20, bw_x + bw_w - 20, 3):
                        y_val = bw_y + 120 + i * 50 + 25 * math.sin(freq * x + phase)
                        points.append((x, int(y_val)))
                    if len(points) > 1:
                        draw.line(points,
                                  fill=(*color[:3], int(content_alpha * 0.4)),
                                  width=2)
                # Placeholder content lines inside browser
                for i in range(4):
                    line_alpha = int(content_alpha * 0.15)
                    ly = bw_y + 50 + i * 22
                    lw = [bw_w - 80, bw_w - 140, bw_w - 100, bw_w - 160][i]
                    draw_rounded_rect(draw, (bw_x + 30, ly, bw_x + 30 + lw, ly + 10), 4,
                                      fill=(*C['text_dim'][:3], line_alpha))

    # ── Phase 3 (10-18s): Feature cards 2x2 grid ──────────────────
    if is_visible(t, 10.0):
        card_data = [
            ("Interactive Charts", _draw_mini_bar_chart, C['w1_4g'],
             "Animated data visualizations", "with real case data"),
            ("Framework Visualizations", _draw_grid_icon, C['accent'],
             "13 strategic frameworks", "rendered interactively"),
            ("Drill-down Analysis", _draw_magnifier_icon, C['w2_5g'],
             "Nested detail levels", "from overview to specifics"),
            ("Cross-task Connections", _draw_connection_dots, C['w3_ai'],
             "Linked findings across", "all four tasks"),
        ]
        positions = grid_positions(4, 2, 200, 250, 700, 180, gap=30)

        for i, ((title, icon_fn, color, line1, line2), (cx, cy)) in enumerate(
                zip(card_data, positions)):
            start = 10.0 + i * 0.5
            if is_visible(t, start):
                ca = fade_in(t, start, 0.6)
                slide_y = animate(t, start, start + 0.5, 30, 0, ease_out_cubic)
                card_y = cy + int(slide_y)

                # Card background
                draw_rounded_rect(draw, (cx, card_y, cx + 700, card_y + 180), 12,
                                  fill=(*C['bg_card'][:3], int(ca * 0.7)))
                # Accent bar
                draw_rounded_rect(draw, (cx, card_y, cx + 5, card_y + 180), 2,
                                  fill=(*color[:3], int(ca * 0.8)))

                # Icon area
                icon_fn(draw, cx + 50, card_y + 60, ca)

                # Text
                draw_text(draw, (cx + 100, card_y + 30), title,
                          font_bold(26), color, int(ca))
                draw_text(draw, (cx + 100, card_y + 72), line1,
                          font(18), C['text_dim'], int(ca * 0.8))
                draw_text(draw, (cx + 100, card_y + 98), line2,
                          font(18), C['text_dim'], int(ca * 0.7))

    # ── Phase 4 (18-25s): Framework names flowing layout ───────────
    if is_visible(t, 18.0):
        frameworks = [
            ("VRIO", C['w1_4g']), ("Value Chain", C['w1_4g']),
            ("BCG Matrix", C['w2_5g']), ("Bowman's Clock", C['w2_5g']),
            ("PESTLE", C['accent']), ("Porter's Five Forces", C['accent']),
            ("CSF", C['w2_5g']), ("Strategic Group", C['w1_4g']),
            ("Ansoff Matrix", C['w3_ai']), ("Bartlett & Ghoshal", C['w3_ai']),
            ("Entry Mode", C['w2_5g']), ("Stakeholder", C['gold']),
            ("Diamond Model", C['w3_ai']),
        ]

        # Section header
        sh_alpha = fade_in(t, 18.0, 0.5)
        draw_section_header(draw, "13 Frameworks Applied", 200, C['accent'], sh_alpha)

        # Flow layout for framework badges
        fnt = font_bold(22)
        pad_x, pad_y = 18, 10
        gap_x, gap_y = 16, 18
        start_x, start_y = 140, 250
        max_x = W - 140
        cx, cy = start_x, start_y
        row_height = 50

        for i, (name, color) in enumerate(frameworks):
            tw = text_width(name, fnt)
            badge_w = tw + pad_x * 2
            # Wrap to next row
            if cx + badge_w > max_x:
                cx = start_x
                cy += row_height + gap_y

            start_t = 18.5 + i * 0.25
            if is_visible(t, start_t):
                fa = fade_in(t, start_t, 0.4)
                scale_offset = animate(t, start_t, start_t + 0.3, 10, 0, ease_out_back)

                draw_rounded_rect(draw,
                                  (cx, cy + int(scale_offset),
                                   cx + badge_w, cy + row_height + int(scale_offset)),
                                  25,
                                  fill=(*dim_color(color, 0.2)[:3], int(fa * 0.6)),
                                  outline=(*color[:3], int(fa * 0.4)), width=1)
                draw_text(draw, (cx + pad_x, cy + pad_y + int(scale_offset)),
                          name, fnt, color, int(fa))

            cx += badge_w + gap_x

        # Counter
        if is_visible(t, 18.5):
            count_val = int(animate(t, 18.5, 22.0, 0, 13, ease_out_expo))
            count_alpha = fade_in(t, 18.5, 0.6)
            draw_text_shadow(draw, (CENTER_X, 580),
                             f"{count_val} frameworks",
                             font_bold(42), C['gold'], int(count_alpha),
                             shadow_offset=3, anchor='center')
            draw_text_centered(draw, "applied to the Mobile\u0301 Inc. case",
                               640, font(22), C['text_dim'], int(count_alpha * 0.7))

    # ── Phase 5 (25-29.7s): "Everything traces back" + CTA ────────
    if is_visible(t, 25.0):
        cta_alpha = fade_in(t, 25.0, 0.8)
        cta_y = animate(t, 25.0, 26.0, CENTER_Y + 20, CENTER_Y - 40, ease_out_expo)

        draw_text_shadow(draw, (CENTER_X, int(cta_y)),
                         "Everything traces back to case data.",
                         font_bold(40), C['text'], int(cta_alpha),
                         shadow_offset=3, anchor='center')

        # Animated arrow
        if is_visible(t, 26.5):
            arrow_alpha = fade_in(t, 26.5, 0.5)
            # Pulsing arrow movement
            arrow_x = CENTER_X + int(20 * math.sin(t * 2.5))
            arrow_y = int(cta_y) + 80
            draw_text_shadow(draw, (arrow_x, arrow_y),
                             "Let's dive in  \u2192",
                             font_bold(32), C['accent'], int(arrow_alpha),
                             shadow_offset=2, anchor='center')

    # Lower third
    if is_visible(t, 2.0, DURATION - 1.0):
        lt_alpha = fade_in(t, 2.0, 0.8)
        if t > DURATION - 1.5:
            lt_alpha = int(lt_alpha * (1.0 - progress(t, DURATION - 1.5, DURATION)))
        draw_lower_third(draw, "What We Built", "Interactive Strategy Platform", C['accent'],
                         int(lt_alpha))

    # Scene fade out
    if t > DURATION - 0.5:
        fo = progress(t, DURATION - 0.5, DURATION, ease_out_cubic)
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], int(255 * fo)))

    return to_numpy(img)
