"""Scene 06 — Task 2: Deep Analysis (87.1 seconds)

13 frameworks across 4 dimensions. The longest scene, structured as
a series of animated framework visualizations with clear section transitions.

Segments:
  0-3     Transition card
  3-5     Internal Analysis header
  5-15    VRIO table
  15-22   Value Chain
  22-30   BCG Matrix
  30-38   Bowman's Strategy Clock
  38-43   Internal verdict card
  43-48   External Analysis header
  48-56   Porter's Five Forces
  56-62   CSF Analysis
  62-70   International Strategy header + Bartlett & Ghoshal
  70-78   (continued) Bartlett & Ghoshal
  78-84   Entry Mode Analysis
  84-87.1 Summary punchline
"""

import math
import sys
sys.path.insert(0, '/home/aayushms/work/pet_projects/mba/mba-international-business-simulation-cw1/video-production-v2')

from gfx import (
    W, H, CENTER_X, CENTER_Y, C, WAVE_COLORS, WAVE_NAMES,
    font, font_bold, font_mono, font_mono_bold,
    ease_out_cubic, ease_out_expo, ease_out_back, ease_in_out_cubic, ease_linear,
    progress, animate, fade_in, fade_out, is_visible, clamp, rgba, dim_color,
    new_frame, to_numpy, cached_gradient, cached_radial,
    draw_text, draw_text_centered, draw_text_shadow,
    draw_rounded_rect, draw_circle_filled, draw_ring,
    draw_stat_big, draw_wave_badge, draw_section_header,
    draw_lower_third, draw_particles, draw_progress_bar, draw_bar_chart,
    text_size, text_width, draw_line_h, draw_line_v,
    scene_alpha, FPS, stagger_delay, grid_positions,
)

DURATION = 87.1

# ── Segment visibility helper ──────────────────────────────────────

def _seg_alpha(t, seg_start, seg_end, fade_in_dur=0.6, fade_out_dur=0.4):
    """Alpha for a segment that fades in at seg_start and fades out at seg_end."""
    if t < seg_start or t > seg_end + fade_out_dur:
        return 0
    a_in = fade_in(t, seg_start, fade_in_dur)
    if t > seg_end:
        a_out = int(255 * (1.0 - progress(t, seg_end, seg_end + fade_out_dur)))
        return min(a_in, a_out)
    return a_in


# ── VRIO row drawing helper ────────────────────────────────────────

def _draw_vrio_row(draw, x, y, resource, checks, result, result_color, alpha):
    """Draw a single VRIO table row."""
    fnt = font(18)
    fnt_bold_sm = font_bold(16)

    # Resource name
    draw_text(draw, (x, y + 8), resource, fnt, C['text'], alpha)

    # V R I O columns
    col_x = x + 380
    col_gap = 80
    for i, val in enumerate(checks):
        cx = col_x + i * col_gap + 30
        cy = y + 16
        if val == 1:
            # Checkmark
            draw_text(draw, (cx, y + 4), "\u2713", font_bold(22),
                      C['w2_5g'], alpha, anchor='center')
        elif val == 0:
            # Cross
            draw_text(draw, (cx, y + 4), "\u2717", font_bold(22),
                      C['danger'], alpha, anchor='center')
        else:
            # Dash
            draw_text(draw, (cx, y + 6), "\u2014", font(18),
                      C['text_muted'], alpha, anchor='center')

    # Result badge
    res_x = col_x + 4 * col_gap + 20
    tw = text_width(result, fnt_bold_sm)
    draw_rounded_rect(draw, (res_x, y + 4, res_x + tw + 20, y + 32), 12,
                      fill=(*dim_color(result_color, 0.25)[:3], int(alpha * 0.7)),
                      outline=(*result_color[:3], int(alpha * 0.4)), width=1)
    draw_text(draw, (res_x + 10, y + 7), result, fnt_bold_sm,
              result_color, alpha)


def make_frame(t):
    img = cached_gradient('s06', C['bg_dark'], (10, 14, 36))
    from PIL import ImageDraw as ID
    draw = ID.Draw(img)

    draw_particles(draw, t, n=20, alpha_max=18, seed=66)

    # ================================================================
    # SEGMENT: Transition card (0-3s)
    # ================================================================
    if is_visible(t, 0, 3.5):
        tc_alpha = _seg_alpha(t, 0, 3.0)

        # "Task 2" label
        label_alpha = int(tc_alpha * 0.7)
        draw_text_centered(draw, "TASK 2", 300, font(22), C['text_muted'], label_alpha)

        # Big title
        if is_visible(t, 0.3):
            ta = fade_in(t, 0.3, 0.6)
            ty = animate(t, 0.3, 1.0, 380, 360, ease_out_expo)
            draw_text_shadow(draw, (CENTER_X, int(ty)), "Deep Analysis",
                             font_bold(64), C['text'], int(min(ta, tc_alpha)),
                             shadow_offset=4, anchor='center')

        # Subtitle
        if is_visible(t, 0.8):
            sa = fade_in(t, 0.8, 0.5)
            draw_text_centered(draw, "13 Frameworks Across 4 Dimensions",
                               445, font(24), C['text_dim'],
                               int(min(sa, tc_alpha)))
            # Teal accent underline
            lw = animate(t, 1.0, 2.0, 0, 220, ease_out_cubic)
            if lw > 0:
                draw.line([(CENTER_X - int(lw), 480),
                           (CENTER_X + int(lw), 480)],
                          fill=(*C['accent'][:3], int(min(sa, tc_alpha) * 0.6)),
                          width=3)

    # ================================================================
    # SEGMENT: Internal Analysis header (3-5s)
    # ================================================================
    if is_visible(t, 3.0, 5.5):
        ia_alpha = _seg_alpha(t, 3.0, 5.0)
        draw_section_header(draw, "Internal Analysis", 80, C['w1_4g'], ia_alpha)

    # ================================================================
    # SEGMENT: VRIO Table (5-15s)
    # ================================================================
    if is_visible(t, 5.0, 15.5):
        v_alpha = _seg_alpha(t, 5.0, 14.5)

        # Section label
        draw_section_header(draw, "VRIO Framework", 80, C['w1_4g'], v_alpha)

        # Table header
        hdr_y = 130
        hdr_alpha = int(v_alpha * 0.7)
        draw_text(draw, (160, hdr_y), "Resource", font_bold(16),
                  C['text_dim'], hdr_alpha)
        col_labels = ["V", "R", "I", "O"]
        col_x = 540
        col_gap = 80
        for i, lbl in enumerate(col_labels):
            draw_text(draw, (col_x + i * col_gap + 22, hdr_y), lbl,
                      font_bold(18), C['accent'], hdr_alpha, anchor='center')
        draw_text(draw, (col_x + 4 * col_gap + 20, hdr_y), "Result",
                  font_bold(16), C['text_dim'], hdr_alpha)

        # Separator line
        draw_line_h(draw, hdr_y + 30, 160, W - 160, C['line'], 1)

        # VRIO rows
        rows = [
            ("Atlanta Learning Curve", [1, 1, 0, -1], "Temporary Advantage", C['gold']),
            ("Vietnam Low Costs", [1, 0, -1, -1], "Competitive Parity", C['text_muted']),
            ("Dual-Plant Manufacturing", [1, 1, 1, 1], "Sustained Advantage", C['w2_5g']),
            ("R&D Infrastructure", [1, 1, 1, -1], "Unexploited", C['orange']),
        ]

        for i, (resource, checks, result, color) in enumerate(rows):
            row_start = 6.0 + i * 1.2
            if is_visible(t, row_start):
                row_alpha = int(min(fade_in(t, row_start, 0.5), v_alpha))
                slide_x = animate(t, row_start, row_start + 0.4, 40, 0, ease_out_cubic)
                row_y = hdr_y + 46 + i * 52
                _draw_vrio_row(draw, 160 + int(slide_x), row_y, resource,
                               checks, result, color, row_alpha)

        # Key insight
        if is_visible(t, 11.0):
            ins_alpha = int(min(fade_in(t, 11.0, 0.6), v_alpha))
            insight_y = hdr_y + 46 + 4 * 52 + 30
            draw_rounded_rect(draw, (160, insight_y, W - 160, insight_y + 60), 8,
                              fill=(*C['bg_card_alt'][:3], int(ins_alpha * 0.5)))
            draw_text(draw, (180, insight_y + 16),
                      "Key: Strong manufacturing base, but R&D advantage sits unexploited",
                      font(18), C['gold'], ins_alpha)

    # ================================================================
    # SEGMENT: Value Chain (15-22s)
    # ================================================================
    if is_visible(t, 15.0, 22.5):
        vc_alpha = _seg_alpha(t, 15.0, 22.0)

        draw_section_header(draw, "Value Chain Analysis", 80, C['w1_4g'], vc_alpha)

        # Horizontal flow of boxes
        boxes = ["Inbound", "Operations", "Outbound", "Marketing", "Service"]
        box_w, box_h = 240, 80
        gap = 30
        total_w = len(boxes) * box_w + (len(boxes) - 1) * gap
        start_x = (W - total_w) // 2
        box_y = 320

        for i, label in enumerate(boxes):
            box_start = 15.5 + i * 0.4
            if is_visible(t, box_start):
                ba = int(min(fade_in(t, box_start, 0.4), vc_alpha))
                bx = start_x + i * (box_w + gap)
                slide_y = animate(t, box_start, box_start + 0.3, 20, 0, ease_out_cubic)
                by = box_y + int(slide_y)

                # Highlight "Operations" box
                is_ops = (label == "Operations")
                fill_color = (*C['w1_4g'][:3], int(ba * 0.3)) if is_ops else (
                    *C['bg_card'][:3], int(ba * 0.7))
                border_color = C['w1_4g'] if is_ops else C['line_light']

                draw_rounded_rect(draw, (bx, by, bx + box_w, by + box_h), 10,
                                  fill=fill_color,
                                  outline=(*border_color[:3], int(ba * 0.6)),
                                  width=2 if is_ops else 1)
                draw_text_centered(draw, label, by + 28, font_bold(20),
                                   C['text'] if is_ops else C['text_dim'], ba)

                # Arrow between boxes
                if i < len(boxes) - 1 and is_visible(t, box_start + 0.2):
                    arr_alpha = int(ba * 0.5)
                    ax = bx + box_w + 5
                    ay = by + box_h // 2
                    draw.line([(ax, ay), (ax + gap - 10, ay)],
                              fill=(*C['accent'][:3], arr_alpha), width=2)
                    # Arrow head
                    draw.polygon([(ax + gap - 10, ay - 5),
                                  (ax + gap - 10, ay + 5),
                                  (ax + gap - 4, ay)],
                                 fill=(*C['accent'][:3], arr_alpha))

        # Annotation for Operations
        if is_visible(t, 18.0):
            ann_alpha = int(min(fade_in(t, 18.0, 0.6), vc_alpha))
            ops_x = start_x + 2 * (box_w + gap)
            ann_y = box_y + box_h + 20

            # Annotation line
            draw.line([(ops_x + box_w // 2, ann_y),
                       (ops_x + box_w // 2, ann_y + 40)],
                      fill=(*C['w1_4g'][:3], int(ann_alpha * 0.5)), width=2)

            # Annotation card
            card_w = 460
            card_x = ops_x + box_w // 2 - card_w // 2
            card_y = ann_y + 45
            draw_rounded_rect(draw, (card_x, card_y, card_x + card_w, card_y + 90), 10,
                              fill=(*C['bg_card'][:3], int(ann_alpha * 0.8)),
                              outline=(*C['w1_4g'][:3], int(ann_alpha * 0.4)), width=1)
            draw_text_centered(draw, "JIT works for predictable 4G demand",
                               card_y + 15, font_bold(20), C['w1_4g'], ann_alpha)
            draw_text_centered(draw, "but breaks down for uncertain 5G volumes",
                               card_y + 48, font_bold(20), C['danger'], ann_alpha)

    # ================================================================
    # SEGMENT: BCG Matrix (22-30s)
    # ================================================================
    if is_visible(t, 22.0, 30.5):
        bcg_alpha = _seg_alpha(t, 22.0, 30.0)

        draw_section_header(draw, "BCG Growth-Share Matrix", 80, C['w2_5g'], bcg_alpha)

        # 2x2 grid
        grid_x, grid_y = 400, 180
        grid_w, grid_h = 540, 440
        half_w, half_h = grid_w // 2, grid_h // 2

        # Draw grid lines
        grid_pct = progress(t, 22.5, 23.5)
        if grid_pct > 0:
            ga = int(bcg_alpha * 0.5)
            # Vertical center line
            draw.line([(grid_x + half_w, grid_y),
                       (grid_x + half_w, grid_y + int(grid_h * grid_pct))],
                      fill=(*C['line_light'][:3], ga), width=2)
            # Horizontal center line
            draw.line([(grid_x, grid_y + half_h),
                       (grid_x + int(grid_w * grid_pct), grid_y + half_h)],
                      fill=(*C['line_light'][:3], ga), width=2)

        # Axis labels
        if is_visible(t, 23.0):
            ax_alpha = int(min(fade_in(t, 23.0, 0.4), bcg_alpha) * 0.6)
            draw_text(draw, (grid_x + grid_w // 2, grid_y - 30),
                      "Market Growth \u2191", font(14), C['text_dim'], ax_alpha,
                      anchor='center')
            draw_text(draw, (grid_x + grid_w + 10, grid_y + half_h),
                      "Market Share \u2192", font(14), C['text_dim'], ax_alpha)
            # High/Low labels
            draw_text(draw, (grid_x - 40, grid_y + 30), "High", font(13),
                      C['text_muted'], ax_alpha)
            draw_text(draw, (grid_x - 40, grid_y + grid_h - 30), "Low", font(13),
                      C['text_muted'], ax_alpha)
            draw_text(draw, (grid_x + 30, grid_y + grid_h + 10), "High", font(13),
                      C['text_muted'], ax_alpha)
            draw_text(draw, (grid_x + grid_w - 50, grid_y + grid_h + 10), "Low",
                      font(13), C['text_muted'], ax_alpha)

        # Quadrant labels
        quadrant_labels = [
            ("Stars", grid_x + 10, grid_y + 10, C['gold']),
            ("Question Marks", grid_x + half_w + 10, grid_y + 10, C['w2_5g']),
            ("Cash Cows", grid_x + 10, grid_y + half_h + 10, C['w1_4g']),
            ("Dogs", grid_x + half_w + 10, grid_y + half_h + 10, C['text_muted']),
        ]
        for label, lx, ly, color in quadrant_labels:
            if is_visible(t, 23.5):
                ql_alpha = int(min(fade_in(t, 23.5, 0.5), bcg_alpha) * 0.5)
                draw_text(draw, (lx, ly), label, font(16), color, ql_alpha)

        # 4G dot in Cash Cow quadrant
        if is_visible(t, 24.5):
            dot_alpha = int(min(fade_in(t, 24.5, 0.5), bcg_alpha))
            dot_x = grid_x + half_w // 2
            dot_y = grid_y + half_h + half_h // 2
            dot_scale = animate(t, 24.5, 25.0, 0.0, 1.0, ease_out_back)
            r = int(24 * dot_scale)
            if r > 0:
                # Glow
                draw_circle_filled(draw, dot_x, dot_y, r + 10,
                                   (*C['w1_4g'][:3], int(dot_alpha * 0.15)))
                draw_circle_filled(draw, dot_x, dot_y, r,
                                   (*C['w1_4g'][:3], int(dot_alpha * 0.9)))
                draw_text(draw, (dot_x, dot_y - 8), "4G",
                          font_bold(14), C['white'], dot_alpha, anchor='center')

        # 5G dot in Question Mark quadrant
        if is_visible(t, 25.5):
            dot_alpha = int(min(fade_in(t, 25.5, 0.5), bcg_alpha))
            dot_x = grid_x + half_w + half_w // 2
            dot_y = grid_y + half_h // 2
            dot_scale = animate(t, 25.5, 26.0, 0.0, 1.0, ease_out_back)
            r = int(20 * dot_scale)
            if r > 0:
                draw_circle_filled(draw, dot_x, dot_y, r + 10,
                                   (*C['w2_5g'][:3], int(dot_alpha * 0.15)))
                draw_circle_filled(draw, dot_x, dot_y, r,
                                   (*C['w2_5g'][:3], int(dot_alpha * 0.9)))
                draw_text(draw, (dot_x, dot_y - 8), "5G",
                          font_bold(14), C['white'], dot_alpha, anchor='center')
            # "0% share" label
            if is_visible(t, 26.0):
                z_alpha = int(min(fade_in(t, 26.0, 0.4), bcg_alpha))
                draw_text(draw, (dot_x + 30, dot_y - 12), "0% share",
                          font_bold(14), C['danger'], z_alpha)

        # Arrow showing desired 5G movement from ? to Star
        if is_visible(t, 27.0):
            arr_alpha = int(min(fade_in(t, 27.0, 0.6), bcg_alpha))
            arr_pct = progress(t, 27.0, 28.5)
            if arr_pct > 0.1:
                # Arrow from question mark quadrant toward star quadrant
                ax1 = grid_x + half_w + half_w // 2 - 30
                ay1 = grid_y + half_h // 2
                ax2 = grid_x + half_w // 2 + 30
                ay2 = grid_y + half_h // 2
                # Interpolate arrow tip position
                tip_x = int(ax1 + (ax2 - ax1) * arr_pct)
                tip_y = int(ay1 + (ay2 - ay1) * arr_pct)
                draw.line([(ax1, ay1), (tip_x, tip_y)],
                          fill=(*C['gold'][:3], int(arr_alpha * 0.7)), width=3)
                # Arrow head
                draw.polygon([(tip_x - 8, tip_y - 8), (tip_x - 8, tip_y + 8),
                              (tip_x + 4, tip_y)],
                             fill=(*C['gold'][:3], int(arr_alpha * 0.8)))

        # Side insight panel
        if is_visible(t, 25.0):
            panel_alpha = int(min(fade_in(t, 25.0, 0.6), bcg_alpha))
            px = grid_x + grid_w + 60
            py = grid_y + 60
            draw_rounded_rect(draw, (px, py, W - 100, py + 200), 10,
                              fill=(*C['bg_card'][:3], int(panel_alpha * 0.7)))
            draw_text(draw, (px + 20, py + 16), "BCG Insight",
                      font_bold(20), C['accent'], panel_alpha)
            draw_text(draw, (px + 20, py + 52), "4G = Cash Cow",
                      font(17), C['w1_4g'], int(panel_alpha * 0.8))
            draw_text(draw, (px + 20, py + 78), "funding everything",
                      font(15), C['text_dim'], int(panel_alpha * 0.6))
            draw_text(draw, (px + 20, py + 112), "5G = Question Mark",
                      font(17), C['w2_5g'], int(panel_alpha * 0.8))
            draw_text(draw, (px + 20, py + 138), "zero market share",
                      font(15), C['text_dim'], int(panel_alpha * 0.6))

    # ================================================================
    # SEGMENT: Bowman's Strategy Clock (30-38s)
    # ================================================================
    if is_visible(t, 30.0, 38.5):
        bw_alpha = _seg_alpha(t, 30.0, 38.0)

        draw_section_header(draw, "Bowman's Strategy Clock", 80, C['gold'], bw_alpha)

        # Draw clock circle
        clock_cx, clock_cy = CENTER_X - 80, 420
        clock_r = 200

        # Clock ring
        ring_pct = progress(t, 30.5, 32.0)
        if ring_pct > 0:
            # Draw arc as segments
            n_seg = int(360 * ring_pct)
            for deg in range(n_seg):
                rad = math.radians(deg - 90)
                x = clock_cx + int(clock_r * math.cos(rad))
                y = clock_cy + int(clock_r * math.sin(rad))
                draw_circle_filled(draw, x, y, 1,
                                   (*C['line_light'][:3], int(bw_alpha * 0.4)))

        # Position labels around clock (simplified 8 positions)
        positions = [
            ("Low Price", -67.5),
            ("Hybrid", -22.5),
            ("Differentiation", 22.5),
            ("Focused Diff.", 67.5),
            ("High Margin", 112.5),
            ("Risky High", 157.5),
            ("Monopoly", 202.5),
            ("Loss of Share", 247.5),
        ]

        for i, (label, angle_deg) in enumerate(positions):
            if is_visible(t, 31.5 + i * 0.15):
                lbl_alpha = int(min(fade_in(t, 31.5 + i * 0.15, 0.3), bw_alpha) * 0.6)
                rad = math.radians(angle_deg - 90)
                lx = clock_cx + int((clock_r + 40) * math.cos(rad))
                ly = clock_cy + int((clock_r + 40) * math.sin(rad))
                # Tick mark
                tx1 = clock_cx + int((clock_r - 8) * math.cos(rad))
                ty1 = clock_cy + int((clock_r - 8) * math.sin(rad))
                tx2 = clock_cx + int((clock_r + 8) * math.cos(rad))
                ty2 = clock_cy + int((clock_r + 8) * math.sin(rad))
                draw.line([(tx1, ty1), (tx2, ty2)],
                          fill=(*C['line_light'][:3], lbl_alpha), width=2)
                draw_text(draw, (lx, ly - 8), label, font(13),
                          C['text_dim'], lbl_alpha, anchor='center')

        # Current position dot: "Hybrid" (position 2, angle -22.5)
        if is_visible(t, 33.0):
            curr_alpha = int(min(fade_in(t, 33.0, 0.5), bw_alpha))
            curr_angle = math.radians(-22.5 - 90)
            curr_x = clock_cx + int(clock_r * 0.6 * math.cos(curr_angle))
            curr_y = clock_cy + int(clock_r * 0.6 * math.sin(curr_angle))
            dot_r = int(12 * animate(t, 33.0, 33.5, 0, 1, ease_out_back))
            if dot_r > 0:
                draw_circle_filled(draw, curr_x, curr_y, dot_r + 6,
                                   (*C['w1_4g'][:3], int(curr_alpha * 0.2)))
                draw_circle_filled(draw, curr_x, curr_y, dot_r,
                                   (*C['w1_4g'][:3], int(curr_alpha * 0.9)))
                draw_text(draw, (curr_x + 20, curr_y - 20), "Current",
                          font_bold(14), C['w1_4g'], int(curr_alpha * 0.8))

        # Target position: "Focused Differentiation" (angle 67.5)
        if is_visible(t, 34.5):
            tgt_alpha = int(min(fade_in(t, 34.5, 0.5), bw_alpha))
            tgt_angle = math.radians(67.5 - 90)
            tgt_x = clock_cx + int(clock_r * 0.6 * math.cos(tgt_angle))
            tgt_y = clock_cy + int(clock_r * 0.6 * math.sin(tgt_angle))
            tgt_r = int(12 * animate(t, 34.5, 35.0, 0, 1, ease_out_back))
            if tgt_r > 0:
                draw_circle_filled(draw, tgt_x, tgt_y, tgt_r + 6,
                                   (*C['w2_5g'][:3], int(tgt_alpha * 0.2)))
                draw_circle_filled(draw, tgt_x, tgt_y, tgt_r,
                                   (*C['w2_5g'][:3], int(tgt_alpha * 0.9)))
                draw_text(draw, (tgt_x + 20, tgt_y - 20), "Target",
                          font_bold(14), C['w2_5g'], int(tgt_alpha * 0.8))

        # Arrow between current and target
        if is_visible(t, 35.5):
            arr_alpha = int(min(fade_in(t, 35.5, 0.5), bw_alpha))
            arr_pct = progress(t, 35.5, 36.5)
            if arr_pct > 0.1:
                curr_angle_r = math.radians(-22.5 - 90)
                tgt_angle_r = math.radians(67.5 - 90)
                cx1 = clock_cx + int(clock_r * 0.6 * math.cos(curr_angle_r))
                cy1 = clock_cy + int(clock_r * 0.6 * math.sin(curr_angle_r))
                cx2 = clock_cx + int(clock_r * 0.6 * math.cos(tgt_angle_r))
                cy2 = clock_cy + int(clock_r * 0.6 * math.sin(tgt_angle_r))
                # Draw curved arrow as line segments along the arc
                n_pts = max(2, int(20 * arr_pct))
                arc_points = []
                for i in range(n_pts):
                    frac = i / max(1, n_pts - 1)
                    angle = math.radians(-22.5 - 90 + frac * 90)  # 90 degrees sweep
                    ax = clock_cx + int(clock_r * 0.6 * math.cos(angle))
                    ay = clock_cy + int(clock_r * 0.6 * math.sin(angle))
                    arc_points.append((ax, ay))
                if len(arc_points) > 1:
                    draw.line(arc_points,
                              fill=(*C['gold'][:3], int(arr_alpha * 0.7)), width=3)

        # Side insight
        if is_visible(t, 33.5):
            ins_alpha = int(min(fade_in(t, 33.5, 0.6), bw_alpha))
            px = clock_cx + clock_r + 100
            py = 260
            draw_rounded_rect(draw, (px, py, W - 100, py + 180), 10,
                              fill=(*C['bg_card'][:3], int(ins_alpha * 0.7)))
            draw_text(draw, (px + 20, py + 16), "Migration Path",
                      font_bold(20), C['gold'], ins_alpha)
            draw_text(draw, (px + 20, py + 52), "Hybrid (4G era)",
                      font(17), C['w1_4g'], int(ins_alpha * 0.8))
            draw_text(draw, (px + 20, py + 76), "\u2193", font(20),
                      C['text_dim'], int(ins_alpha * 0.5))
            draw_text(draw, (px + 20, py + 100), "Focused Differentiation",
                      font(17), C['w2_5g'], int(ins_alpha * 0.8))
            draw_text(draw, (px + 20, py + 128), "(5G / AI waves)",
                      font(15), C['text_dim'], int(ins_alpha * 0.6))

    # ================================================================
    # SEGMENT: Internal verdict (38-43s)
    # ================================================================
    if is_visible(t, 38.0, 43.5):
        iv_alpha = _seg_alpha(t, 38.0, 43.0)

        # Verdict card centered
        card_w, card_h = 800, 260
        card_x = (W - card_w) // 2
        card_y = (H - card_h) // 2 - 40
        card_slide = animate(t, 38.0, 39.0, 30, 0, ease_out_cubic)

        draw_rounded_rect(draw, (card_x, card_y + int(card_slide),
                                 card_x + card_w, card_y + card_h + int(card_slide)),
                          16, fill=(*C['bg_card'][:3], int(iv_alpha * 0.85)))
        # Accent border
        draw_rounded_rect(draw, (card_x, card_y + int(card_slide),
                                 card_x + card_w, card_y + int(card_slide) + 4),
                          2, fill=(*C['w1_4g'][:3], int(iv_alpha * 0.8)))

        draw_text_centered(draw, "Internal Verdict",
                           card_y + int(card_slide) + 30,
                           font_bold(32), C['w1_4g'], iv_alpha)
        draw_text_centered(draw, "Strong base, wrong direction",
                           card_y + int(card_slide) + 80,
                           font_bold(28), C['text'], iv_alpha)

        bullets = [
            "Manufacturing strength is real but insufficient alone",
            "R&D advantage unexploited — no 5G product in pipeline",
            "JIT systems optimized for yesterday's demand patterns",
        ]
        for i, bullet in enumerate(bullets):
            if is_visible(t, 39.5 + i * 0.5):
                ba = int(min(fade_in(t, 39.5 + i * 0.5, 0.4), iv_alpha))
                by = card_y + int(card_slide) + 130 + i * 32
                draw_circle_filled(draw, card_x + 30, by + 8, 4,
                                   (*C['text_dim'][:3], ba))
                draw_text(draw, (card_x + 48, by), bullet,
                          font(17), C['text_dim'], ba)

    # ================================================================
    # SEGMENT: External Analysis header (43-48s)
    # ================================================================
    if is_visible(t, 43.0, 48.5):
        ea_alpha = _seg_alpha(t, 43.0, 48.0)

        # Big section transition
        hdr_y = animate(t, 43.0, 44.0, CENTER_Y + 20, CENTER_Y - 40, ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(hdr_y)), "EXTERNAL ANALYSIS",
                         font_bold(52), C['accent'], ea_alpha,
                         shadow_offset=4, anchor='center')
        if is_visible(t, 44.0):
            sub_a = int(min(fade_in(t, 44.0, 0.5), ea_alpha))
            draw_text_centered(draw, "Market forces, competition & international strategy",
                               int(hdr_y) + 70, font(22), C['text_dim'], sub_a)

    # ================================================================
    # SEGMENT: Porter's Five Forces (48-56s)
    # ================================================================
    if is_visible(t, 48.0, 56.5):
        pf_alpha = _seg_alpha(t, 48.0, 56.0)

        draw_section_header(draw, "Porter's Five Forces", 80, C['danger'], pf_alpha)

        # Central circle - "Industry Rivalry"
        center_cx, center_cy = CENTER_X, 420
        center_r = 90

        if is_visible(t, 48.5):
            c_alpha = int(min(fade_in(t, 48.5, 0.6), pf_alpha))
            # Pulsing glow for "intense"
            pulse = 0.8 + 0.2 * math.sin(t * 3.0)
            glow_r = int(center_r + 20 * pulse)
            draw_circle_filled(draw, center_cx, center_cy, glow_r,
                               (*C['danger'][:3], int(c_alpha * 0.08)))
            draw_circle_filled(draw, center_cx, center_cy, center_r,
                               (*C['bg_card'][:3], int(c_alpha * 0.9)))
            draw_ring(draw, center_cx, center_cy, center_r,
                      (*C['danger'][:3], int(c_alpha * 0.7)), width=3)
            draw_text(draw, (center_cx, center_cy - 20), "Industry",
                      font_bold(20), C['danger'], c_alpha, anchor='center')
            draw_text(draw, (center_cx, center_cy + 8), "Rivalry",
                      font_bold(20), C['danger'], c_alpha, anchor='center')
            draw_text(draw, (center_cx, center_cy + 34), "INTENSE",
                      font_bold(16), C['gold'], int(c_alpha * 0.8), anchor='center')

        # Four forces around center
        forces = [
            ("New Entrants: Moderate", 0, -1, 50.0, C['orange']),      # Top
            ("Substitutes: Growing (AI)", 0, 1, 51.0, C['w3_ai']),     # Bottom
            ("Supplier Power: High", -1, 0, 52.0, C['gold']),          # Left
            ("Buyer Power: High", 1, 0, 53.0, C['accent']),            # Right
        ]

        for label, dx, dy, start, color in forces:
            if is_visible(t, start):
                f_alpha = int(min(fade_in(t, start, 0.6), pf_alpha))
                dist = 220
                fx = center_cx + dx * dist
                fy = center_cy + dy * dist

                # Force box
                fnt = font_bold(16)
                tw = text_width(label, fnt)
                box_w = tw + 32
                box_h = 44
                bx = fx - box_w // 2
                by = fy - box_h // 2

                # Animate from center outward
                slide_pct = progress(t, start, start + 0.5, ease_out_back)
                actual_x = int(center_cx + (bx - center_cx + box_w // 2) * slide_pct) - box_w // 2
                actual_y = int(center_cy + (by - center_cy + box_h // 2) * slide_pct) - box_h // 2

                draw_rounded_rect(draw, (actual_x, actual_y,
                                         actual_x + box_w, actual_y + box_h),
                                  8,
                                  fill=(*C['bg_card'][:3], int(f_alpha * 0.8)),
                                  outline=(*color[:3], int(f_alpha * 0.5)), width=2)
                draw_text(draw, (actual_x + 16, actual_y + 12), label,
                          fnt, color, f_alpha)

                # Connecting line to center
                if slide_pct > 0.5:
                    line_alpha = int(f_alpha * 0.3)
                    lx1 = center_cx + dx * (center_r + 5)
                    ly1 = center_cy + dy * (center_r + 5)
                    draw.line([(lx1, ly1), (actual_x + box_w // 2, actual_y + box_h // 2)],
                              fill=(*color[:3], line_alpha), width=1)

        # Key insight at bottom
        if is_visible(t, 54.0):
            ki_alpha = int(min(fade_in(t, 54.0, 0.5), pf_alpha))
            draw_rounded_rect(draw, (200, 700, W - 200, 750), 8,
                              fill=(*C['bg_card_alt'][:3], int(ki_alpha * 0.6)))
            draw_text_centered(draw, "4 equal firms in direct price competition post-DOJ",
                               712, font_bold(18), C['danger'], ki_alpha)

    # ================================================================
    # SEGMENT: CSF Analysis (56-62s)
    # ================================================================
    if is_visible(t, 56.0, 62.5):
        csf_alpha = _seg_alpha(t, 56.0, 62.0)

        draw_section_header(draw, "Critical Success Factors", 80, C['w2_5g'], csf_alpha)

        # Bar chart data
        csf_bars = [
            ("5G Product Launch", 0.0, C['danger'], "0% — EXISTENTIAL GAP"),
            ("4G Optimization", 80.0, C['w1_4g'], "~80% — Strong"),
            ("AI R&D Pipeline", 30.0, C['w3_ai'], "~30% — Early stage"),
            ("Cash Management", 65.0, C['gold'], "$90M floor constraint"),
        ]

        bar_x = 200
        bar_w = W - 500
        bar_h = 36
        bar_gap = 90

        for i, (label, value, color, detail) in enumerate(csf_bars):
            bar_start = 57.0 + i * 0.6
            if is_visible(t, bar_start):
                ba = int(min(fade_in(t, bar_start, 0.4), csf_alpha))
                by = 180 + i * bar_gap
                slide_x = animate(t, bar_start, bar_start + 0.3, 30, 0, ease_out_cubic)

                # Label
                draw_text(draw, (bar_x + int(slide_x), by), label,
                          font_bold(20), C['text'], ba)

                # Progress bar
                bar_pct = animate(t, bar_start + 0.2, bar_start + 1.2,
                                  0.0, value / 100.0, ease_out_cubic)
                draw_progress_bar(draw, bar_x + int(slide_x), by + 32,
                                  bar_w, bar_h, bar_pct, color)

                # Detail text
                draw_text(draw, (bar_x + bar_w + 20 + int(slide_x), by + 34),
                          detail, font(14), C['text_dim'], int(ba * 0.7))

        # Big callout for 5G gap
        if is_visible(t, 59.5):
            call_alpha = int(min(fade_in(t, 59.5, 0.5), csf_alpha))
            call_y = 180 + 4 * bar_gap + 30
            draw_rounded_rect(draw, (200, call_y, W - 200, call_y + 70), 10,
                              fill=(*dim_color(C['danger'], 0.15)[:3], int(call_alpha * 0.7)),
                              outline=(*C['danger'][:3], int(call_alpha * 0.4)), width=2)
            draw_text_centered(draw, "5G absence is EXISTENTIAL",
                               call_y + 18, font_bold(28), C['danger'], call_alpha)

    # ================================================================
    # SEGMENT: International Strategy / Bartlett & Ghoshal (62-78s)
    # ================================================================
    if is_visible(t, 62.0, 63.5):
        is_alpha = _seg_alpha(t, 62.0, 63.0)
        hdr_y = animate(t, 62.0, 63.0, CENTER_Y + 20, CENTER_Y - 40, ease_out_expo)
        draw_text_shadow(draw, (CENTER_X, int(hdr_y)),
                         "INTERNATIONAL STRATEGY",
                         font_bold(48), C['w3_ai'], is_alpha,
                         shadow_offset=4, anchor='center')

    # Bartlett & Ghoshal matrix (64-78s)
    if is_visible(t, 64.0, 78.5):
        bg_alpha = _seg_alpha(t, 64.0, 78.0)

        draw_section_header(draw, "Bartlett & Ghoshal Framework", 80, C['w3_ai'], bg_alpha)

        # 2x2 matrix
        mx, my = 350, 200
        mw, mh = 550, 440
        half_w, half_h = mw // 2, mh // 2

        # Axes
        axes_pct = progress(t, 64.5, 65.5)
        if axes_pct > 0:
            ax_a = int(bg_alpha * 0.5)
            # Y-axis
            draw.line([(mx, my), (mx, my + int(mh * axes_pct))],
                      fill=(*C['line_light'][:3], ax_a), width=2)
            # X-axis
            draw.line([(mx, my + mh), (mx + int(mw * axes_pct), my + mh)],
                      fill=(*C['line_light'][:3], ax_a), width=2)
            # Center lines
            draw.line([(mx, my + half_h),
                       (mx + int(mw * axes_pct), my + half_h)],
                      fill=(*C['line'][:3], int(ax_a * 0.3)), width=1)
            draw.line([(mx + half_w, my),
                       (mx + half_w, my + int(mh * axes_pct))],
                      fill=(*C['line'][:3], int(ax_a * 0.3)), width=1)

        # Axis labels
        if is_visible(t, 65.0):
            al_alpha = int(min(fade_in(t, 65.0, 0.4), bg_alpha) * 0.7)
            draw_text(draw, (mx - 110, my + half_h - 60), "Global",
                      font(14), C['text_dim'], al_alpha)
            draw_text(draw, (mx - 130, my + half_h - 40), "Integration",
                      font(14), C['text_dim'], al_alpha)
            draw_text(draw, (mx - 70, my - 10), "High", font(13),
                      C['text_muted'], al_alpha)
            draw_text(draw, (mx - 60, my + mh - 10), "Low", font(13),
                      C['text_muted'], al_alpha)
            draw_text(draw, (mx + half_w - 30, my + mh + 15), "Local Responsiveness",
                      font(14), C['text_dim'], al_alpha)
            draw_text(draw, (mx + 10, my + mh + 30), "Low", font(13),
                      C['text_muted'], al_alpha)
            draw_text(draw, (mx + mw - 40, my + mh + 30), "High", font(13),
                      C['text_muted'], al_alpha)

        # Quadrant labels
        quads = [
            ("Global", mx + 20, my + 20, C['w1_4g']),
            ("Transnational", mx + half_w + 20, my + 20, C['w2_5g']),
            ("International", mx + 20, my + half_h + 20, C['text_muted']),
            ("Multinational", mx + half_w + 20, my + half_h + 20, C['text_dim']),
        ]
        for label, qx, qy, color in quads:
            if is_visible(t, 66.0):
                ql_a = int(min(fade_in(t, 66.0, 0.5), bg_alpha) * 0.6)
                draw_text(draw, (qx, qy), label, font_bold(18), color, ql_a)

        # Current position dot: "Global" (top-left)
        if is_visible(t, 67.0):
            c_alpha = int(min(fade_in(t, 67.0, 0.5), bg_alpha))
            dot_x = mx + half_w // 2
            dot_y = my + half_h // 2
            dot_r = int(14 * animate(t, 67.0, 67.5, 0, 1, ease_out_back))
            if dot_r > 0:
                draw_circle_filled(draw, dot_x, dot_y, dot_r + 8,
                                   (*C['w1_4g'][:3], int(c_alpha * 0.15)))
                draw_circle_filled(draw, dot_x, dot_y, dot_r,
                                   (*C['w1_4g'][:3], int(c_alpha * 0.9)))
                draw_text(draw, (dot_x + 20, dot_y - 10), "4G (Current)",
                          font_bold(14), C['w1_4g'], int(c_alpha * 0.8))

        # Target position dot: "Transnational" (top-right)
        if is_visible(t, 69.0):
            t_alpha = int(min(fade_in(t, 69.0, 0.5), bg_alpha))
            tgt_x = mx + half_w + half_w // 2
            tgt_y = my + half_h // 2
            tgt_r = int(14 * animate(t, 69.0, 69.5, 0, 1, ease_out_back))
            if tgt_r > 0:
                draw_circle_filled(draw, tgt_x, tgt_y, tgt_r + 8,
                                   (*C['w2_5g'][:3], int(t_alpha * 0.15)))
                draw_circle_filled(draw, tgt_x, tgt_y, tgt_r,
                                   (*C['w2_5g'][:3], int(t_alpha * 0.9)))
                draw_text(draw, (tgt_x + 20, tgt_y - 10), "5G/AI (Target)",
                          font_bold(14), C['w2_5g'], int(t_alpha * 0.8))

        # Arrow between current and target
        if is_visible(t, 70.5):
            arr_alpha = int(min(fade_in(t, 70.5, 0.6), bg_alpha))
            arr_pct = progress(t, 70.5, 72.0)
            if arr_pct > 0.1:
                sx = mx + half_w // 2 + 18
                sy = my + half_h // 2
                ex = mx + half_w + half_w // 2 - 18
                ey = my + half_h // 2
                tip_x = int(sx + (ex - sx) * arr_pct)
                draw.line([(sx, sy), (tip_x, ey)],
                          fill=(*C['gold'][:3], int(arr_alpha * 0.7)), width=3)
                if arr_pct > 0.8:
                    draw.polygon([(tip_x - 2, ey - 8), (tip_x - 2, ey + 8),
                                  (tip_x + 8, ey)],
                                 fill=(*C['gold'][:3], int(arr_alpha * 0.8)))

        # Market labels around target
        if is_visible(t, 72.5):
            ml_alpha = int(min(fade_in(t, 72.5, 0.5), bg_alpha))
            markets = [("USA", -30), ("Europe", 0), ("Asia", 30)]
            for label, y_off in markets:
                draw_text(draw, (mx + mw + 40, my + half_h // 2 + y_off - 10),
                          label, font_bold(16), C['accent'], int(ml_alpha * 0.7))

        # Side panel
        if is_visible(t, 68.0):
            sp_alpha = int(min(fade_in(t, 68.0, 0.6), bg_alpha))
            px = mx + mw + 30
            py = my + 180
            draw_rounded_rect(draw, (px, py, W - 80, py + 160), 10,
                              fill=(*C['bg_card'][:3], int(sp_alpha * 0.7)))
            draw_text(draw, (px + 16, py + 12), "Strategic Shift",
                      font_bold(18), C['gold'], sp_alpha)
            draw_text(draw, (px + 16, py + 42), "Global Standardization",
                      font(15), C['w1_4g'], int(sp_alpha * 0.7))
            draw_text(draw, (px + 16, py + 62), "(one-size-fits-all 4G)",
                      font(13), C['text_muted'], int(sp_alpha * 0.5))
            draw_text(draw, (px + 16, py + 88), "\u2193  Transnational",
                      font(15), C['w2_5g'], int(sp_alpha * 0.7))
            draw_text(draw, (px + 16, py + 108), "(integration + local",
                      font(13), C['text_muted'], int(sp_alpha * 0.5))
            draw_text(draw, (px + 16, py + 126), " responsiveness)",
                      font(13), C['text_muted'], int(sp_alpha * 0.5))

    # ================================================================
    # SEGMENT: Entry Mode Analysis (78-84s)
    # ================================================================
    if is_visible(t, 78.0, 84.5):
        em_alpha = _seg_alpha(t, 78.0, 84.0)

        draw_section_header(draw, "Entry Mode Analysis", 80, C['w2_5g'], em_alpha)

        # 5G entry path
        if is_visible(t, 78.5):
            e5_alpha = int(min(fade_in(t, 78.5, 0.6), em_alpha))
            row_y = 200

            draw_text(draw, (160, row_y), "5G:", font_bold(28), C['w2_5g'], e5_alpha)

            # Licensing badge
            badge_x = 240
            draw_rounded_rect(draw, (badge_x, row_y - 4, badge_x + 140, row_y + 40), 8,
                              fill=(*dim_color(C['w2_5g'], 0.2)[:3], int(e5_alpha * 0.7)),
                              outline=(*C['w2_5g'][:3], int(e5_alpha * 0.4)), width=1)
            draw_text(draw, (badge_x + 16, row_y + 4), "Licensing",
                      font_bold(20), C['w2_5g'], e5_alpha)

            # Arrow
            arr_pct = progress(t, 79.0, 80.0)
            if arr_pct > 0:
                arr_end = int(badge_x + 160 + 180 * arr_pct)
                draw.line([(badge_x + 155, row_y + 18), (arr_end, row_y + 18)],
                          fill=(*C['w2_5g'][:3], int(e5_alpha * 0.6)), width=3)
                if arr_pct > 0.5:
                    draw.polygon([(arr_end - 2, row_y + 10),
                                  (arr_end - 2, row_y + 26),
                                  (arr_end + 8, row_y + 18)],
                                 fill=(*C['w2_5g'][:3], int(e5_alpha * 0.7)))

            # Result text
            if is_visible(t, 79.5):
                r_alpha = int(min(fade_in(t, 79.5, 0.4), em_alpha))
                draw_text(draw, (badge_x + 360, row_y + 2),
                          "Fast entry (6-9 months)",
                          font_bold(22), C['text'], r_alpha)
                draw_text(draw, (badge_x + 360, row_y + 32),
                          "Speed over control — close the existential gap",
                          font(16), C['text_dim'], int(r_alpha * 0.7))

        # AI entry path
        if is_visible(t, 80.5):
            ea_alpha = int(min(fade_in(t, 80.5, 0.6), em_alpha))
            row_y = 340

            draw_text(draw, (160, row_y), "AI:", font_bold(28), C['w3_ai'], ea_alpha)

            # Partnerships badge
            badge_x = 240
            draw_rounded_rect(draw, (badge_x, row_y - 4, badge_x + 180, row_y + 40), 8,
                              fill=(*dim_color(C['w3_ai'], 0.2)[:3], int(ea_alpha * 0.7)),
                              outline=(*C['w3_ai'][:3], int(ea_alpha * 0.4)), width=1)
            draw_text(draw, (badge_x + 16, row_y + 4), "Partnerships",
                      font_bold(20), C['w3_ai'], ea_alpha)

            # Arrow
            arr_pct = progress(t, 81.0, 82.0)
            if arr_pct > 0:
                arr_end = int(badge_x + 200 + 140 * arr_pct)
                draw.line([(badge_x + 195, row_y + 18), (arr_end, row_y + 18)],
                          fill=(*C['w3_ai'][:3], int(ea_alpha * 0.6)), width=3)
                if arr_pct > 0.5:
                    draw.polygon([(arr_end - 2, row_y + 10),
                                  (arr_end - 2, row_y + 26),
                                  (arr_end + 8, row_y + 18)],
                                 fill=(*C['w3_ai'][:3], int(ea_alpha * 0.7)))

            # Result text
            if is_visible(t, 81.5):
                r_alpha = int(min(fade_in(t, 81.5, 0.4), em_alpha))
                draw_text(draw, (badge_x + 360, row_y + 2),
                          "Joint R&D collaborations",
                          font_bold(22), C['text'], r_alpha)
                draw_text(draw, (badge_x + 360, row_y + 32),
                          "Share risk for 2027-28 horizon technology",
                          font(16), C['text_dim'], int(r_alpha * 0.7))

        # Speed vs Control tradeoff visual
        if is_visible(t, 82.0):
            tv_alpha = int(min(fade_in(t, 82.0, 0.5), em_alpha))
            tv_y = 500

            # Horizontal spectrum bar
            bar_x, bar_w = 300, W - 600
            draw_rounded_rect(draw, (bar_x, tv_y, bar_x + bar_w, tv_y + 8), 4,
                              fill=(*C['line'][:3], int(tv_alpha * 0.4)))

            # Speed label (left)
            draw_text(draw, (bar_x, tv_y - 30), "Speed",
                      font_bold(16), C['w2_5g'], int(tv_alpha * 0.7))

            # Control label (right)
            draw_text(draw, (bar_x + bar_w, tv_y - 30), "Control",
                      font_bold(16), C['w3_ai'], int(tv_alpha * 0.7),
                      anchor='right')

            # 5G dot (speed end)
            dot_x_5g = bar_x + int(bar_w * 0.2)
            draw_circle_filled(draw, dot_x_5g, tv_y + 4, 8,
                               (*C['w2_5g'][:3], int(tv_alpha * 0.8)))
            draw_text(draw, (dot_x_5g, tv_y + 18), "5G: Licensing",
                      font(13), C['w2_5g'], int(tv_alpha * 0.6), anchor='center')

            # AI dot (balanced)
            dot_x_ai = bar_x + int(bar_w * 0.55)
            draw_circle_filled(draw, dot_x_ai, tv_y + 4, 8,
                               (*C['w3_ai'][:3], int(tv_alpha * 0.8)))
            draw_text(draw, (dot_x_ai, tv_y + 18), "AI: Partnerships",
                      font(13), C['w3_ai'], int(tv_alpha * 0.6), anchor='center')

    # ================================================================
    # SEGMENT: Summary punchline (84-87.1s)
    # ================================================================
    if is_visible(t, 84.0):
        sp_alpha = fade_in(t, 84.0, 0.8)
        sp_y = animate(t, 84.0, 85.0, CENTER_Y + 20, CENTER_Y - 60, ease_out_expo)

        # "13 frameworks. One message:"
        draw_text_shadow(draw, (CENTER_X, int(sp_y)),
                         "13 frameworks.  One message:",
                         font_bold(32), C['text_dim'], int(sp_alpha),
                         shadow_offset=3, anchor='center')

        # Big punchline
        if is_visible(t, 85.0):
            pl_alpha = fade_in(t, 85.0, 0.6)
            draw_text_shadow(draw, (CENTER_X, int(sp_y) + 70),
                             "The window is open, but closing fast.",
                             font_bold(42), C['text'], int(pl_alpha),
                             shadow_offset=4, anchor='center')

        # Animated clock/urgency indicator
        if is_visible(t, 85.5):
            clk_alpha = fade_in(t, 85.5, 0.5)
            clk_y = int(sp_y) + 150
            # Simple clock icon: circle with hands
            draw_ring(draw, CENTER_X, clk_y, 24,
                      (*C['danger'][:3], int(clk_alpha * 0.6)), width=2)
            # Minute hand (rotating)
            hand_angle = math.radians(t * 120 - 90)
            hx = CENTER_X + int(18 * math.cos(hand_angle))
            hy = clk_y + int(18 * math.sin(hand_angle))
            draw.line([(CENTER_X, clk_y), (hx, hy)],
                      fill=(*C['danger'][:3], int(clk_alpha * 0.8)), width=2)
            # Center dot
            draw_circle_filled(draw, CENTER_X, clk_y, 3,
                               (*C['danger'][:3], int(clk_alpha * 0.9)))

    # ── Lower third (persistent through scene) ─────────────────────
    # Show lower third at appropriate segments
    if is_visible(t, 5.0, 42.0):
        lt_alpha = fade_in(t, 5.0, 0.8)
        if t > 41.0:
            lt_alpha = int(lt_alpha * (1.0 - progress(t, 41.0, 42.0)))
        draw_lower_third(draw, "Task 2", "Internal Analysis", C['w1_4g'],
                         int(lt_alpha))
    elif is_visible(t, 48.0, 62.0):
        lt_alpha = fade_in(t, 48.0, 0.8)
        if t > 61.0:
            lt_alpha = int(lt_alpha * (1.0 - progress(t, 61.0, 62.0)))
        draw_lower_third(draw, "Task 2", "External Analysis", C['accent'],
                         int(lt_alpha))
    elif is_visible(t, 64.0, 84.0):
        lt_alpha = fade_in(t, 64.0, 0.8)
        if t > 83.0:
            lt_alpha = int(lt_alpha * (1.0 - progress(t, 83.0, 84.0)))
        draw_lower_third(draw, "Task 2", "International Strategy", C['w3_ai'],
                         int(lt_alpha))

    # ── Scene fade out ─────────────────────────────────────────────
    if t > DURATION - 0.5:
        fo = progress(t, DURATION - 0.5, DURATION, ease_out_cubic)
        draw.rectangle([(0, 0), (W, H)],
                       fill=(*C['bg_dark'][:3], int(255 * fo)))

    return to_numpy(img)
