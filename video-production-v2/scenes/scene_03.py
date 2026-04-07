"""Scene 03 — Three Waves: The Core Tension (51.5 seconds)

Visualizes the three simultaneous technology waves (4G, 5G, AI)
and the $90M cash-reserve constraint that forces trade-offs.
"""

import math
import sys
sys.path.insert(0, '/home/aayushms/work/pet_projects/mba/mba-international-business-simulation-cw1/video-production-v2')

from gfx import (
    W, H, CENTER_X, CENTER_Y, C, WAVE_COLORS, WAVE_NAMES, WAVE_LABELS,
    font, font_bold, font_mono, font_mono_bold,
    ease_out_cubic, ease_out_expo, ease_out_back, ease_in_out_cubic,
    ease_out_quad, ease_linear,
    progress, animate, fade_in, is_visible, clamp, rgba, dim_color,
    new_frame, to_numpy, cached_gradient, cached_radial,
    draw_text, draw_text_centered, draw_text_shadow,
    draw_rounded_rect, draw_circle_filled, draw_ring,
    draw_progress_bar, draw_section_header, draw_lower_third,
    draw_particles, draw_wave_badge,
    text_size, text_width, draw_line_h,
    scene_alpha, FPS,
)

DURATION = 51.5

# ── Wave card dimensions ───────────────────────────────────────────
CARD_W = 520
CARD_H = 420
CARD_GAP = 40
CARDS_Y = 200
CARDS_X_START = (W - 3 * CARD_W - 2 * CARD_GAP) // 2


def _draw_wave_card(draw, x, y, w, h, wave_idx, alpha, t, anim_start):
    """Draw a detailed wave analysis card with animated stats."""
    color = WAVE_COLORS[wave_idx]
    label = WAVE_LABELS[wave_idx]
    bg = rgba(C['bg_card'], int(alpha * 0.85))

    # Card background
    draw_rounded_rect(draw, (x, y, x + w, y + h), 16, fill=bg,
                      outline=(*color[:3], int(alpha * 0.3)), width=2)

    # Top accent bar
    draw_rounded_rect(draw, (x, y, x + w, y + 5), 3,
                      fill=(*color[:3], int(alpha * 0.9)))

    # Wave header
    draw_text(draw, (x + 28, y + 20), label,
              font_bold(28), color, int(alpha))

    # Content area starts here
    content_y = y + 70

    if wave_idx == 0:  # 4G LTE
        # Revenue stat (count up)
        rev_val = animate(t, anim_start + 0.3, anim_start + 2.5, 0.0, 4.8,
                          ease_out_expo)
        rev_text = f"${rev_val:.1f}B"
        rev_alpha = fade_in(t, anim_start + 0.3, 0.5)
        draw_text_shadow(draw, (x + 28, content_y), rev_text,
                         font_bold(56), C['gold'], int(min(alpha, rev_alpha)),
                         shadow_offset=3)
        draw_text(draw, (x + 28, content_y + 65), "Annual Revenue",
                  font(18), C['text_dim'], int(min(alpha, rev_alpha)))

        # "Cash Engine" badge
        if is_visible(t, anim_start + 1.5):
            badge_a = fade_in(t, anim_start + 1.5, 0.4)
            badge_x = x + 280
            badge_y = content_y + 10
            draw_rounded_rect(draw, (badge_x, badge_y, badge_x + 160, badge_y + 36),
                              18, fill=(*dim_color(C['gold'], 0.2), int(badge_a * 0.7)),
                              outline=(*C['gold'][:3], int(badge_a * 0.4)))
            draw_text(draw, (badge_x + 16, badge_y + 7), "Cash Engine",
                      font_bold(17), C['gold'], int(badge_a))

        # Depleting asset progress bar
        if is_visible(t, anim_start + 2.0):
            dep_a = fade_in(t, anim_start + 2.0, 0.5)
            dep_y = content_y + 120
            draw_text(draw, (x + 28, dep_y), "Asset Depletion",
                      font(16), C['text_dim'], int(min(alpha, dep_a)))
            bar_pct = animate(t, anim_start + 2.0, anim_start + 3.5, 1.0, 0.6,
                              ease_out_cubic)
            draw_progress_bar(draw, x + 28, dep_y + 28, w - 56, 18,
                              bar_pct, C['w1_4g'],
                              bg_color=(*C['bg_dark'][:3], 200))
            pct_text = f"{int(bar_pct * 100)}%"
            draw_text(draw, (x + w - 56, dep_y + 28), pct_text,
                      font_mono(14), C['text_dim'], int(min(alpha, dep_a)),
                      anchor='right')

        # Warning text
        if is_visible(t, anim_start + 3.0):
            warn_a = fade_in(t, anim_start + 3.0, 0.4)
            warn_y = content_y + 190
            draw_text(draw, (x + 28, warn_y), "\u26a0  Under price pressure",
                      font_bold(18), C['danger'], int(min(alpha, warn_a)))
            draw_text(draw, (x + 28, warn_y + 30),
                      "DOJ intervention ended price coordination",
                      font(15), C['text_dim'], int(min(alpha, warn_a) * 0.7))

    elif wave_idx == 1:  # 5G
        # Coverage stat
        cov_val = animate(t, anim_start + 0.3, anim_start + 2.0, 0, 70,
                          ease_out_expo)
        cov_text = f"{int(cov_val)}%"
        cov_alpha = fade_in(t, anim_start + 0.3, 0.5)
        draw_text_shadow(draw, (x + 28, content_y), cov_text,
                         font_bold(48), C['w2_5g'], int(min(alpha, cov_alpha)),
                         shadow_offset=3)
        draw_text(draw, (x + 28, content_y + 55), "US Urban Coverage",
                  font(18), C['text_dim'], int(min(alpha, cov_alpha)))

        # Coverage progress bar
        if is_visible(t, anim_start + 1.0):
            cov_bar_a = fade_in(t, anim_start + 1.0, 0.4)
            cov_bar_pct = animate(t, anim_start + 1.0, anim_start + 2.5,
                                  0.0, 0.7, ease_out_cubic)
            bar_y = content_y + 90
            draw_progress_bar(draw, x + 28, bar_y, w - 56, 16,
                              cov_bar_pct, C['w2_5g'],
                              bg_color=(*C['bg_dark'][:3], 200))

        # Adoption stat
        if is_visible(t, anim_start + 1.8):
            adp_a = fade_in(t, anim_start + 1.8, 0.5)
            adp_val = animate(t, anim_start + 1.8, anim_start + 3.0, 0, 38,
                              ease_out_expo)
            adp_y = content_y + 130
            draw_text(draw, (x + 28, adp_y), f"{int(adp_val)}%",
                      font_bold(36), C['w2_5g'], int(min(alpha, adp_a)))
            draw_text(draw, (x + 130, adp_y + 8), "Consumer Adoption",
                      font(18), C['text_dim'], int(min(alpha, adp_a)))

            # Adoption progress bar
            adp_bar_pct = animate(t, anim_start + 2.0, anim_start + 3.2,
                                  0.0, 0.38, ease_out_cubic)
            draw_progress_bar(draw, x + 28, adp_y + 48, w - 56, 16,
                              adp_bar_pct, C['w2_5g'],
                              bg_color=(*C['bg_dark'][:3], 200))

        # BIG RED WARNING
        if is_visible(t, anim_start + 2.8):
            warn_a = fade_in(t, anim_start + 2.8, 0.5)
            warn_y = content_y + 210
            # Warning box
            draw_rounded_rect(draw, (x + 20, warn_y, x + w - 20, warn_y + 60), 10,
                              fill=(*dim_color(C['danger'], 0.15), int(warn_a * 0.8)),
                              outline=(*C['danger'][:3], int(warn_a * 0.4)))
            # Pulse effect
            pulse = 0.7 + 0.3 * math.sin(t * 3.0)
            draw_text(draw, (x + w // 2, warn_y + 8),
                      "Mobile\u0301: 0 handsets launched",
                      font_bold(22), C['danger'], int(min(alpha, warn_a) * pulse),
                      anchor='center')
            draw_text(draw, (x + w // 2, warn_y + 36),
                      "CRITICAL GAP",
                      font_bold(14), C['danger'], int(min(alpha, warn_a) * 0.7),
                      anchor='center')

    elif wave_idx == 2:  # AI Devices
        # Timeline header
        tl_alpha = fade_in(t, anim_start + 0.3, 0.5)
        draw_text(draw, (x + 28, content_y), "Technology Timeline",
                  font(16), C['text_muted'], int(min(alpha, tl_alpha)))

        # Timeline visualization
        tl_y = content_y + 40
        tl_x1 = x + 40
        tl_x2 = x + w - 40
        tl_w = tl_x2 - tl_x1

        # Timeline line
        if is_visible(t, anim_start + 0.5):
            tl_line_a = fade_in(t, anim_start + 0.5, 0.5)
            line_pct = progress(t, anim_start + 0.5, anim_start + 2.0)
            tl_x_end = int(tl_x1 + tl_w * line_pct)
            draw.line([(tl_x1, tl_y + 20), (tl_x_end, tl_y + 20)],
                      fill=(*C['w3_ai'][:3], int(tl_line_a * 0.6)), width=3)

        # Timeline markers
        markers = [
            (0.0, "2025", "R&D Window Open", anim_start + 1.0),
            (0.5, "2026", "Development", anim_start + 1.5),
            (1.0, "2027-28", "Commercial Launch", anim_start + 2.0),
        ]
        for pos, year, desc, m_start in markers:
            if is_visible(t, m_start):
                m_a = fade_in(t, m_start, 0.4)
                mx = int(tl_x1 + tl_w * pos)
                # Marker dot
                draw_circle_filled(draw, mx, tl_y + 20, 8,
                                   (*C['w3_ai'][:3], int(m_a)))
                draw_circle_filled(draw, mx, tl_y + 20, 4,
                                   (*C['bg_dark'][:3], int(m_a)))
                # Year label above
                draw_text(draw, (mx, tl_y - 5), year,
                          font_bold(16), C['w3_ai'], int(m_a),
                          anchor='center')
                # Description below
                draw_text(draw, (mx, tl_y + 38), desc,
                          font(14), C['text_dim'], int(m_a),
                          anchor='center')

        # Decision urgency text
        if is_visible(t, anim_start + 2.5):
            urg_a = fade_in(t, anim_start + 2.5, 0.5)
            urg_y = content_y + 145
            draw_rounded_rect(draw, (x + 20, urg_y, x + w - 20, urg_y + 75), 10,
                              fill=(*dim_color(C['w3_ai'], 0.12), int(urg_a * 0.7)),
                              outline=(*C['w3_ai'][:3], int(urg_a * 0.3)))
            draw_text(draw, (x + 38, urg_y + 12),
                      "Decide NOW or fall behind",
                      font_bold(22), C['w3_ai'], int(min(alpha, urg_a)))
            draw_text(draw, (x + 38, urg_y + 44),
                      "permanently",
                      font_bold(22), C['danger'], int(min(alpha, urg_a)))

        # R&D investment note
        if is_visible(t, anim_start + 3.5):
            rd_a = fade_in(t, anim_start + 3.5, 0.4)
            rd_y = content_y + 245
            draw_text(draw, (x + 28, rd_y),
                      "\u2192 New plant lead time: 2 years",
                      font(16), C['text_dim'], int(min(alpha, rd_a) * 0.8))
            draw_text(draw, (x + 28, rd_y + 28),
                      "\u2192 R&D investment decisions lock in now",
                      font(16), C['text_dim'], int(min(alpha, rd_a) * 0.8))


def make_frame(t):
    img = cached_gradient('s03', C['bg_dark'], (10, 14, 36))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    sa = scene_alpha(t, DURATION)
    draw_particles(draw, t, n=20, seed=103, alpha_max=22)

    # ── Phase 1 (0-4s): Section header ─────────────────────────────
    if is_visible(t, 0.0):
        hdr_alpha = fade_in(t, 0.3, 0.6)
        draw_section_header(draw, "THE CORE TENSION", 70, C['danger'], int(hdr_alpha))

    if is_visible(t, 1.0):
        sub_alpha = fade_in(t, 1.0, 0.5)
        draw_text(draw, (120, 105), "Three simultaneous challenges",
                  font(24), C['text_dim'], int(sub_alpha))

    # ── Phase 2 (4-14s): Wave 1 card ──────────────────────────────
    if is_visible(t, 4.0):
        w1_alpha = fade_in(t, 4.0, 0.7)
        w1_x = animate(t, 4.0, 4.8, -CARD_W, CARDS_X_START, ease_out_cubic)
        _draw_wave_card(draw, int(w1_x), CARDS_Y, CARD_W, CARD_H,
                        0, int(w1_alpha), t, 4.0)

    # ── Phase 3 (14-24s): Wave 2 card ─────────────────────────────
    if is_visible(t, 14.0):
        w2_alpha = fade_in(t, 14.0, 0.7)
        w2_x = animate(t, 14.0, 14.8, W,
                        CARDS_X_START + CARD_W + CARD_GAP, ease_out_cubic)
        _draw_wave_card(draw, int(w2_x), CARDS_Y, CARD_W, CARD_H,
                        1, int(w2_alpha), t, 14.0)

    # ── Phase 4 (24-34s): Wave 3 card ─────────────────────────────
    if is_visible(t, 24.0):
        w3_alpha = fade_in(t, 24.0, 0.7)
        w3_x = animate(t, 24.0, 24.8, W,
                        CARDS_X_START + 2 * (CARD_W + CARD_GAP), ease_out_cubic)
        _draw_wave_card(draw, int(w3_x), CARDS_Y, CARD_W, CARD_H,
                        2, int(w3_alpha), t, 24.0)

    # ── Phase 5 (34-38s): All three visible, connection lines ──────
    if is_visible(t, 34.0):
        conn_alpha = fade_in(t, 34.0, 0.8)

        # Resource competition lines between cards
        for i in range(2):
            line_start = 34.5 + i * 0.4
            if is_visible(t, line_start):
                la = fade_in(t, line_start, 0.5)
                x1 = CARDS_X_START + i * (CARD_W + CARD_GAP) + CARD_W
                x2 = CARDS_X_START + (i + 1) * (CARD_W + CARD_GAP)
                mid_y = CARDS_Y + CARD_H // 2
                # Animated dashed connecting line
                draw.line([(x1 + 5, mid_y), (x2 - 5, mid_y)],
                          fill=(*C['danger'][:3], int(la * 0.5)), width=2)
                # "vs" label
                mid_x = (x1 + x2) // 2
                draw_text(draw, (mid_x, mid_y - 10), "vs",
                          font_bold(14), C['danger'], int(la * 0.6),
                          anchor='center')

        # "Competing for the same resources" label
        if is_visible(t, 35.5):
            comp_a = fade_in(t, 35.5, 0.5)
            draw_text_centered(draw, "All competing for the same finite resources",
                               CARDS_Y + CARD_H + 30,
                               font(20), C['danger'], int(comp_a * 0.8))

    # ── Phase 6 (38-44s): $90M constraint ─────────────────────────
    if is_visible(t, 38.0):
        # Dim the wave cards by overlaying a semi-transparent dark rect
        dim_pct = progress(t, 38.0, 39.0)
        if dim_pct > 0:
            draw.rectangle([(0, 0), (W, H)],
                           fill=(*C['bg_dark'][:3], int(dim_pct * 180)))
            # Redraw particles on top of dim
            draw_particles(draw, t, n=15, seed=200, color=C['danger'],
                           alpha_max=20)

        constraint_alpha = fade_in(t, 38.5, 0.8)

        # Big $90M number counting up
        cash_val = animate(t, 38.5, 41.0, 0, 90, ease_out_expo)
        cash_text = f"${int(cash_val)}M"
        cash_y = animate(t, 38.5, 39.5, CENTER_Y + 20, CENTER_Y - 80,
                         ease_out_back)
        draw_text_shadow(draw, (CENTER_X, int(cash_y)), cash_text,
                         font_bold(96), C['danger'], int(constraint_alpha),
                         shadow_offset=5, anchor='center')

        # Label
        if is_visible(t, 39.5):
            lbl_a = fade_in(t, 39.5, 0.5)
            draw_text_centered(draw, "Cash Reserve Floor",
                               int(cash_y) + 100, font_bold(30),
                               C['text'], int(lbl_a))

        # Subtitle
        if is_visible(t, 40.5):
            sub_a = fade_in(t, 40.5, 0.5)
            draw_text_centered(draw, "The constraint that defines everything",
                               int(cash_y) + 145, font(22),
                               C['text_dim'], int(sub_a))

        # Animated danger ring pulse
        if is_visible(t, 39.0):
            ring_a = fade_in(t, 39.0, 0.5)
            pulse = 1.0 + 0.08 * math.sin(t * 2.5)
            ring_r = int(160 * pulse)
            draw_ring(draw, CENTER_X, int(cash_y) + 40, ring_r,
                      (*C['danger'][:3], int(ring_a * 0.2)), width=2)

    # ── Phase 7 (44-51.5s): Resource allocation bar ────────────────
    if is_visible(t, 44.0):
        alloc_alpha = fade_in(t, 44.0, 0.8)
        alloc_y = animate(t, 44.0, 45.0, H, CENTER_Y + 120, ease_out_cubic)

        bar_x = 200
        bar_w = W - 400
        bar_h = 50
        bar_y = int(alloc_y)

        # Label above bar
        if is_visible(t, 44.5):
            lab_a = fade_in(t, 44.5, 0.5)
            draw_text_centered(draw, "Total Available Resources",
                               bar_y - 50, font(20), C['text_dim'],
                               int(lab_a))

        # Bar background
        draw_rounded_rect(draw, (bar_x, bar_y, bar_x + bar_w, bar_y + bar_h),
                          12, fill=(*C['bg_card'][:3], int(alloc_alpha * 0.8)))

        # Animated competing segments
        anim_pct = progress(t, 44.5, 47.0)
        # Segments shift over time to show tension
        shift = math.sin(t * 0.8) * 0.05  # subtle oscillation
        fracs = [0.40 + shift, 0.35, 0.25 - shift]
        seg_x = bar_x

        for i, (frac, color) in enumerate(zip(fracs, WAVE_COLORS)):
            seg_w = int(bar_w * frac * anim_pct)
            if seg_w > 4:
                # Small gap between segments
                gap = 2 if i > 0 else 0
                draw_rounded_rect(draw, (seg_x + gap, bar_y + 3,
                                         seg_x + seg_w, bar_y + bar_h - 3),
                                  8, fill=(*color[:3], int(alloc_alpha * 0.85)))
            seg_x += seg_w

        # Segment labels below
        if anim_pct > 0.5:
            seg_x = bar_x
            for i, (frac, color, name) in enumerate(zip(fracs, WAVE_COLORS, WAVE_NAMES)):
                seg_w = int(bar_w * frac * anim_pct)
                label_x = seg_x + seg_w // 2
                seg_label_a = int(alloc_alpha * min(1.0, (anim_pct - 0.5) * 4))
                draw_text(draw, (label_x, bar_y + bar_h + 12), name,
                          font_bold(15), color, seg_label_a, anchor='center')
                seg_x += seg_w

        # "You can't maximize everything" text
        if is_visible(t, 47.5):
            cant_a = fade_in(t, 47.5, 0.6)
            cant_y = bar_y + bar_h + 60
            draw_text_shadow(draw, (CENTER_X, cant_y),
                             "You can\u2019t maximize everything.",
                             font_bold(34), C['text'], int(cant_a),
                             shadow_offset=3, anchor='center')

        # Trade-off arrows
        if is_visible(t, 48.5):
            arrow_a = fade_in(t, 48.5, 0.5)
            # Left-right arrows showing the tension
            arrow_y = bar_y - 15
            # Left arrow (4G pulling left)
            draw.line([(bar_x + 80, arrow_y), (bar_x + 20, arrow_y)],
                      fill=(*C['w1_4g'][:3], int(arrow_a * 0.6)), width=2)
            draw.polygon([(bar_x + 20, arrow_y - 5), (bar_x + 20, arrow_y + 5),
                          (bar_x + 12, arrow_y)],
                         fill=(*C['w1_4g'][:3], int(arrow_a * 0.6)))
            # Right arrow (AI pulling right)
            draw.line([(bar_x + bar_w - 80, arrow_y),
                       (bar_x + bar_w - 20, arrow_y)],
                      fill=(*C['w3_ai'][:3], int(arrow_a * 0.6)), width=2)
            draw.polygon([(bar_x + bar_w - 20, arrow_y - 5),
                          (bar_x + bar_w - 20, arrow_y + 5),
                          (bar_x + bar_w - 12, arrow_y)],
                         fill=(*C['w3_ai'][:3], int(arrow_a * 0.6)))

    # Final fade out
    if t > DURATION - 0.6:
        fo_alpha = int(255 * progress(t, DURATION - 0.6, DURATION, ease_out_cubic))
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], fo_alpha))

    return to_numpy(img)
