"""Scene 02 — Assignment Context (32.5 seconds)

Introduces the coursework structure: four interconnected tasks,
thirteen strategic frameworks, and the interactive website.
"""

import math
import sys
sys.path.insert(0, '/home/aayushms/work/pet_projects/mba/mba-international-business-simulation-cw1/video-production-v2')

from gfx import (
    W, H, CENTER_X, CENTER_Y, C,
    font, font_bold, font_mono, font_mono_bold,
    ease_out_cubic, ease_out_expo, ease_out_back, ease_in_out_cubic,
    progress, animate, fade_in, is_visible, clamp, rgba, dim_color,
    new_frame, to_numpy, cached_gradient, cached_radial,
    draw_text, draw_text_centered, draw_text_shadow,
    draw_rounded_rect, draw_circle_filled, draw_ring,
    draw_section_header, draw_lower_third, draw_particles,
    text_size, text_width, draw_line_h,
    scene_alpha, FPS,
)

DURATION = 32.5

# Task card definitions
TASKS = [
    {"num": "01", "title": "Strategy Process", "desc": "Vision, Mission, Goals",
     "color": C['w1_4g']},
    {"num": "02", "title": "Deep Analysis", "desc": "13 Frameworks",
     "color": C['accent']},
    {"num": "03", "title": "SWOT Synthesis", "desc": "Evidence-Based",
     "color": C['orange']},
    {"num": "04", "title": "Recommendation", "desc": "Clear Trade-offs",
     "color": C['gold']},
]

FEATURES = [
    "Interactive Charts",
    "Framework Visualizations",
    "Drill-down Analysis",
    "Case Data Tracing",
]


def _draw_task_card(draw, x, y, w, h, task, alpha, highlight=False):
    """Draw a single task card with accent bar and number."""
    color = task['color']
    bg = rgba(C['bg_card'], int(alpha * 0.85))

    # Card background
    draw_rounded_rect(draw, (x, y, x + w, y + h), 14, fill=bg,
                      outline=(*color[:3], int(alpha * 0.3)), width=1)

    # Left accent bar
    draw_rounded_rect(draw, (x, y, x + 5, y + h), 3,
                      fill=(*color[:3], int(alpha * 0.9)))

    # Task number (large, dimmed)
    draw_text(draw, (x + 20, y + 12), task['num'],
              font_bold(52), (*color[:3],), int(alpha * 0.25))

    # Task title
    draw_text(draw, (x + 20, y + 16), task['title'],
              font_bold(24), C['text'], int(alpha))

    # Description
    draw_text(draw, (x + 20, y + 50), task['desc'],
              font(16), C['text_dim'], int(alpha * 0.8))

    # Highlight glow for Task 2 frameworks count
    if highlight and task['num'] == '02':
        fw_text = "13"
        fw_x = x + w - 60
        fw_y = y + 18
        draw_text(draw, (fw_x, fw_y), fw_text,
                  font_bold(36), color, int(alpha * 0.8))


def make_frame(t):
    img = cached_gradient('s02', C['bg_dark'], (10, 14, 38))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    sa = scene_alpha(t, DURATION)
    draw_particles(draw, t, n=20, seed=77, alpha_max=25)

    # ── Phase 1 (0-3s): Section header ─────────────────────────────
    if is_visible(t, 0.0):
        hdr_alpha = fade_in(t, 0.3, 0.6)
        draw_section_header(draw, "THE ASSIGNMENT", 80, C['accent'], int(hdr_alpha))

        # Module code
        if is_visible(t, 0.8):
            mod_alpha = fade_in(t, 0.8, 0.5)
            draw_text(draw, (120, 115), "MN7002NI",
                      font_mono_bold(20), C['accent'], int(mod_alpha))
            draw_text(draw, (260, 117), "International Business Strategy with Simulation",
                      font(20), C['text_dim'], int(mod_alpha))

    # ── Phase 2 (3-8s): Four task cards appear ─────────────────────
    if is_visible(t, 3.0):
        cards_title_alpha = fade_in(t, 3.0, 0.5)
        draw_text_shadow(draw, (CENTER_X, 185), "Four interconnected tasks",
                         font_bold(38), C['text'], int(cards_title_alpha),
                         shadow_offset=3, anchor='center')

    # Card layout: 4 cards in a row
    card_w = 370
    card_h = 85
    card_gap = 30
    total_cards_w = 4 * card_w + 3 * card_gap
    cards_x_start = (W - total_cards_w) // 2
    cards_y = 260

    for i, task in enumerate(TASKS):
        card_start = 4.0 + i * 0.4
        if is_visible(t, card_start):
            ca = fade_in(t, card_start, 0.5)
            # Slide up animation
            slide_y = animate(t, card_start, card_start + 0.5, 40, 0, ease_out_back)
            cx = cards_x_start + i * (card_w + card_gap)
            cy = cards_y + int(slide_y)
            show_highlight = is_visible(t, 8.0)
            _draw_task_card(draw, cx, cy, card_w, card_h, task, int(ca),
                            highlight=show_highlight)

    # ── Phase 3 (8-18s): Connection lines and highlights ───────────
    if is_visible(t, 8.0):
        conn_alpha = fade_in(t, 8.0, 1.0)

        # Draw connection lines between cards
        line_y = cards_y + card_h + 15
        for i in range(3):
            line_start = 8.5 + i * 0.3
            if is_visible(t, line_start):
                la = fade_in(t, line_start, 0.4)
                x1 = cards_x_start + i * (card_w + card_gap) + card_w // 2
                x2 = cards_x_start + (i + 1) * (card_w + card_gap) + card_w // 2
                # Animated line drawing
                line_pct = progress(t, line_start, line_start + 0.6)
                x_end = int(x1 + (x2 - x1) * line_pct)
                draw.line([(x1, line_y), (x_end, line_y)],
                          fill=(*C['accent'][:3], int(la * 0.4)), width=2)
                # Arrow dots at connection points
                if line_pct > 0.1:
                    draw_circle_filled(draw, x1, line_y, 4,
                                       (*C['accent'][:3], int(la * 0.6)))
                if line_pct > 0.9:
                    draw_circle_filled(draw, x2, line_y, 4,
                                       (*C['accent'][:3], int(la * 0.6)))

        # "Tasks build on each other" label
        if is_visible(t, 10.0):
            bl_alpha = fade_in(t, 10.0, 0.5)
            draw_text_centered(draw, "Each task builds on the previous",
                               line_y + 20, font(18), C['text_muted'],
                               int(bl_alpha))

        # Framework count highlight for Task 2
        if is_visible(t, 11.0):
            fw_alpha = fade_in(t, 11.0, 0.5)
            # Highlight box near Task 2 card
            t2_cx = cards_x_start + 1 * (card_w + card_gap) + card_w // 2
            fw_y = cards_y - 40
            fw_count = int(animate(t, 11.0, 12.5, 0, 13, ease_out_expo))
            draw_text(draw, (t2_cx, fw_y), str(fw_count),
                      font_bold(32), C['accent'], int(fw_alpha),
                      anchor='center')
            draw_text(draw, (t2_cx, fw_y + 36), "Strategic Frameworks",
                      font(14), C['accent'], int(fw_alpha * 0.7),
                      anchor='center')

    # ── Phase 4 (18-25s): "We built something different" ───────────
    if is_visible(t, 18.0):
        diff_alpha = fade_in(t, 18.0, 0.7)
        diff_y = animate(t, 18.0, 19.0, 500, 440, ease_out_cubic)
        draw_text_shadow(draw, (CENTER_X, int(diff_y)),
                         "We built something different",
                         font_bold(36), C['white'], int(diff_alpha),
                         shadow_offset=3, anchor='center')

        # Browser mockup outline
        if is_visible(t, 19.5):
            brow_alpha = fade_in(t, 19.5, 0.6)
            bx, by = CENTER_X - 320, int(diff_y) + 70
            bw, bh = 640, 360

            # Browser chrome
            draw_rounded_rect(draw, (bx, by, bx + bw, by + 35), 10,
                              fill=(*C['bg_card'][:3], int(brow_alpha * 0.8)),
                              outline=(*C['line'][:3], int(brow_alpha * 0.4)))
            # Three dots
            for di in range(3):
                dot_colors = [(231, 76, 60), (243, 156, 18), (46, 204, 113)]
                draw_circle_filled(draw, bx + 20 + di * 20, by + 17, 5,
                                   (*dot_colors[di], int(brow_alpha * 0.7)))
            # URL bar
            draw_rounded_rect(draw, (bx + 90, by + 8, bx + bw - 20, by + 27), 5,
                              fill=(*C['bg_dark'][:3], int(brow_alpha * 0.6)))

            # Browser body
            draw_rounded_rect(draw, (bx, by + 35, bx + bw, by + bh), 0,
                              fill=(*C['bg_dark'][:3], int(brow_alpha * 0.5)),
                              outline=(*C['line'][:3], int(brow_alpha * 0.3)))

            # "Interactive Strategy Website" label in the browser
            if is_visible(t, 20.5):
                lbl_alpha = fade_in(t, 20.5, 0.5)
                draw_text(draw, (bx + bw // 2, by + 90),
                          "Interactive Strategy Website",
                          font_bold(28), C['accent'], int(lbl_alpha),
                          anchor='center')

                # Feature items appear
                for fi, feat in enumerate(FEATURES):
                    feat_start = 21.0 + fi * 0.4
                    if is_visible(t, feat_start):
                        fa = fade_in(t, feat_start, 0.4)
                        fy = by + 150 + fi * 42
                        fx = bx + 100
                        # Checkmark
                        draw_text(draw, (fx, fy), "\u2713",
                                  font_bold(20), C['w2_5g'], int(fa))
                        draw_text(draw, (fx + 30, fy + 2), feat,
                                  font(20), C['text'], int(fa))

    # ── Phase 5 (25-32.5s): URL and lower third ───────────────────
    if is_visible(t, 25.0):
        url_alpha = fade_in(t, 25.0, 0.6)

        # Website URL
        url_y = animate(t, 25.0, 26.0, CENTER_Y + 30, CENTER_Y - 20,
                        ease_out_cubic)

        # URL box
        url_text = "mobile-inc-strategy.vercel.app"
        url_w = text_width(url_text, font_mono(24)) + 60
        url_x = CENTER_X - url_w // 2
        draw_rounded_rect(draw, (url_x, int(url_y), url_x + url_w, int(url_y) + 50),
                          10, fill=(*C['bg_card'][:3], int(url_alpha * 0.7)),
                          outline=(*C['accent'][:3], int(url_alpha * 0.4)))
        draw_text(draw, (CENTER_X, int(url_y) + 12), url_text,
                  font_mono(24), C['accent'], int(url_alpha), anchor='center')

        # Subtle glow under URL
        draw_circle_filled(draw, CENTER_X, int(url_y) + 25, 120,
                           (*C['accent'][:3], int(url_alpha * 0.03)))

    # Lower third
    if is_visible(t, 26.5):
        lt_alpha = fade_in(t, 26.5, 0.8)
        draw_lower_third(draw,
                         "MN7002NI  |  International Business Strategy",
                         "Islington College  |  London Metropolitan University",
                         C['accent'], int(lt_alpha))

    # Final fade out
    if t > DURATION - 0.5:
        fo_alpha = int(255 * progress(t, DURATION - 0.5, DURATION, ease_out_cubic))
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], fo_alpha))

    return to_numpy(img)
