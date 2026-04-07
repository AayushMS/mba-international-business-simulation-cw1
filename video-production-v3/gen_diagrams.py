"""Generate all 23 explanatory diagram PNGs for Mobilé Inc. video v3."""

import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from PIL import Image, ImageDraw
from gfx_light import (
    C, W, H, CENTER_X, CENTER_Y,
    font, font_bold, font_mono,
    draw_text, draw_text_centered, draw_rounded_rect, draw_circle_filled,
    new_frame, text_size, text_width,
    WAVE_COLORS, WAVE_NAMES,
)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "diagrams")
os.makedirs(OUT, exist_ok=True)


def save(img, name):
    path = os.path.join(OUT, name)
    img.convert("RGB").save(path)
    print(f"  saved {name}")


def sigmoid(x, center=0, steepness=1):
    return 1 / (1 + math.exp(-steepness * (x - center)))


def draw_wave_dots(draw, y, spacing=40):
    """Draw three small wave-colored dots centered horizontally."""
    start_x = CENTER_X - spacing
    for i, col in enumerate(WAVE_COLORS):
        draw_circle_filled(draw, start_x + i * spacing, y, 5, fill=col)


# ─────────────────────────────────────────────────────────────────────
# 1. three_waves_overview.png
# ─────────────────────────────────────────────────────────────────────
def gen_three_waves_overview():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    # Title
    draw_text_centered(draw, "Three Technology Waves", 60, font_bold(40), C['text_primary'])

    # Axes
    ax_left, ax_right = 200, 1720
    ax_top, ax_bot = 160, 900
    ax_w = ax_right - ax_left
    ax_h = ax_bot - ax_top

    # Y axis
    draw.line([(ax_left, ax_top), (ax_left, ax_bot)], fill=C['border'], width=1)
    # X axis
    draw.line([(ax_left, ax_bot), (ax_right, ax_bot)], fill=C['border'], width=1)

    # X labels (years)
    years = ["2024", "2025", "2026", "2027", "2028"]
    for i, yr in enumerate(years):
        x = ax_left + int(i / (len(years) - 1) * ax_w)
        draw.line([(x, ax_bot), (x, ax_bot + 8)], fill=C['border'], width=1)
        draw_text(draw, (x, ax_bot + 14), yr, font(20), C['text_secondary'], anchor='center')

    # Y label
    draw_text(draw, (ax_left - 30, ax_top + ax_h // 2), "Adoption / Revenue", font(18),
              C['text_muted'], anchor='center')

    # Generate curves
    n_points = 200

    # 4G: starts high, declining
    pts_4g = []
    for i in range(n_points):
        t = i / (n_points - 1)
        x = ax_left + int(t * ax_w)
        val = 0.85 - 0.35 * sigmoid(t, center=0.4, steepness=6)
        y = ax_bot - int(val * ax_h)
        pts_4g.append((x, y))

    # 5G: S-curve rising
    pts_5g = []
    for i in range(n_points):
        t = i / (n_points - 1)
        x = ax_left + int(t * ax_w)
        val = 0.8 * sigmoid(t, center=0.45, steepness=7)
        y = ax_bot - int(val * ax_h)
        pts_5g.append((x, y))

    # AI: gentle emerging curve, starts late
    pts_ai = []
    for i in range(n_points):
        t = i / (n_points - 1)
        x = ax_left + int(t * ax_w)
        val = 0.35 * sigmoid(t, center=0.75, steepness=8)
        y = ax_bot - int(val * ax_h)
        pts_ai.append((x, y))

    # Draw curves
    curves = [(pts_4g, C['w1_4g']), (pts_5g, C['w2_5g']), (pts_ai, C['w3_ai'])]
    for pts, col in curves:
        for j in range(len(pts) - 1):
            draw.line([pts[j], pts[j + 1]], fill=col, width=2)

    # Labels at right edge
    labels = [("4G LTE", pts_4g[-1], C['w1_4g']),
              ("5G", pts_5g[-1], C['w2_5g']),
              ("AI Devices", pts_ai[-1], C['w3_ai'])]
    for label, pt, col in labels:
        draw_text(draw, (pt[0] + 12, pt[1] - 10), label, font_bold(20), col)

    save(img, "three_waves_overview.png")


# ─────────────────────────────────────────────────────────────────────
# 2. 5g_adoption_stats.png
# ─────────────────────────────────────────────────────────────────────
def gen_5g_adoption_stats():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    y_center = CENTER_Y - 60

    # Left stat
    lx = CENTER_X - 280
    draw_text(draw, (lx, y_center - 60), "70%", font_bold(96), C['w2_5g'], anchor='center')
    draw_text(draw, (lx, y_center + 60), "US urban 5G coverage", font(28), C['text_primary'], anchor='center')

    # Right stat
    rx = CENTER_X + 280
    draw_text(draw, (rx, y_center - 60), "38%", font_bold(96), C['w2_5g'], anchor='center')
    draw_text(draw, (rx, y_center + 60), "Consumer 5G adoption", font(28), C['text_primary'], anchor='center')

    # Divider
    draw.line([(CENTER_X, y_center - 80), (CENTER_X, y_center + 90)], fill=C['border'], width=1)

    # Source note
    draw_text_centered(draw, "Source: Case data, end-2024", 920, font(18), C['text_muted'])

    save(img, "5g_adoption_stats.png")


# ─────────────────────────────────────────────────────────────────────
# 3. zero_5g.png
# ─────────────────────────────────────────────────────────────────────
def gen_zero_5g():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "ZERO", CENTER_Y - 100, font_bold(96), C['danger'])
    draw_text_centered(draw, "5G Handsets Launched", CENTER_Y + 30, font_bold(36), C['text_primary'])
    draw_text_centered(draw, "Mobilé Inc. has not entered the 5G market", CENTER_Y + 100, font(24), C['text_secondary'])

    save(img, "zero_5g.png")


# ─────────────────────────────────────────────────────────────────────
# 4. ai_timeline.png
# ─────────────────────────────────────────────────────────────────────
def gen_ai_timeline():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "AI Device Timeline", 100, font_bold(40), C['text_primary'])

    # Horizontal arrow
    y_line = CENTER_Y
    x_start, x_end = 300, 1620

    draw.line([(x_start, y_line), (x_end, y_line)], fill=C['text_secondary'], width=2)
    # Arrowhead
    draw.polygon([(x_end, y_line), (x_end - 16, y_line - 8), (x_end - 16, y_line + 8)],
                 fill=C['text_secondary'])

    # Markers
    markers = [
        (400, "2025", "R&D Decision", "(NOW)"),
        (960, "2027", "Commercial Launch", None),
        (1500, "2028+", "Market Maturity", None),
    ]
    for mx, year, label, extra in markers:
        draw_circle_filled(draw, mx, y_line, 8, fill=C['w3_ai'])
        draw_text(draw, (mx, y_line - 50), year, font_bold(28), C['text_primary'], anchor='center')
        if extra:
            draw_text(draw, (mx, y_line - 80), extra, font_bold(20), C['danger'], anchor='center')
        draw_text(draw, (mx, y_line + 30), label, font(22), C['text_secondary'], anchor='center')

    # Note at bottom
    draw_text_centered(draw, "Decide now or fall permanently behind", 820, font(22), C['text_muted'])

    save(img, "ai_timeline.png")


# ─────────────────────────────────────────────────────────────────────
# 5. cash_constraint.png
# ─────────────────────────────────────────────────────────────────────
def gen_cash_constraint():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Cash Reserve Constraint", 80, font_bold(40), C['text_primary'])

    # Vertical bar
    bar_w = 200
    bar_h = 600
    bar_x = CENTER_X - bar_w // 2
    bar_y = 200

    # Full bar outline
    draw.rectangle([bar_x, bar_y, bar_x + bar_w, bar_y + bar_h], outline=C['border'], width=1)

    # Red zone (bottom 30%)
    red_top = bar_y + int(bar_h * 0.70)
    draw.rectangle([bar_x + 1, red_top, bar_x + bar_w - 1, bar_y + bar_h - 1],
                   fill=(254, 226, 226))  # light red

    # Green zone (top 70%)
    draw.rectangle([bar_x + 1, bar_y + 1, bar_x + bar_w - 1, red_top],
                   fill=(220, 252, 231))  # light green

    # Dashed red line at 30% from bottom
    dash_y = red_top
    dash_len = 12
    gap = 8
    x = bar_x - 80
    while x < bar_x + bar_w + 80:
        draw.line([(x, dash_y), (x + dash_len, dash_y)], fill=C['danger'], width=2)
        x += dash_len + gap

    # Labels
    draw_text(draw, (bar_x + bar_w + 30, dash_y - 12), "$90M Floor", font_bold(24), C['danger'])

    # Label for green zone
    green_center_y = bar_y + int(bar_h * 0.35)
    draw_text(draw, (bar_x - 20, green_center_y), "Available for", font(20), C['w2_5g'], anchor='right')
    draw_text(draw, (bar_x - 20, green_center_y + 26), "Investment", font(20), C['w2_5g'], anchor='right')

    # Label for red zone
    red_center_y = red_top + int(bar_h * 0.15)
    draw_text(draw, (bar_x - 20, red_center_y), "Untouchable", font(20), C['danger'], anchor='right')
    draw_text(draw, (bar_x - 20, red_center_y + 26), "Reserve", font(20), C['danger'], anchor='right')

    save(img, "cash_constraint.png")


# ─────────────────────────────────────────────────────────────────────
# 6. tradeoff_honest.png
# ─────────────────────────────────────────────────────────────────────
def gen_tradeoff_honest():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "We can't do everything.", CENTER_Y - 80, font_bold(48), C['text_primary'])
    draw_text_centered(draw, "The $90M floor means sequencing investments carefully.",
                       CENTER_Y + 10, font(26), C['text_secondary'])

    draw_wave_dots(draw, CENTER_Y + 90)

    save(img, "tradeoff_honest.png")


# ─────────────────────────────────────────────────────────────────────
# 7. three_horizons.png
# ─────────────────────────────────────────────────────────────────────
def gen_three_horizons():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "McKinsey Three Horizons Framework", 50, font_bold(38), C['text_primary'])

    ax_left, ax_right = 220, 1700
    ax_top, ax_bot = 150, 880
    ax_w = ax_right - ax_left
    ax_h = ax_bot - ax_top

    # Axes
    draw.line([(ax_left, ax_top), (ax_left, ax_bot)], fill=C['border'], width=1)
    draw.line([(ax_left, ax_bot), (ax_right, ax_bot)], fill=C['border'], width=1)

    # X labels
    xlabels = ["Now", "2026", "2027", "2028+"]
    for i, lbl in enumerate(xlabels):
        x = ax_left + int(i / (len(xlabels) - 1) * ax_w)
        draw.line([(x, ax_bot), (x, ax_bot + 6)], fill=C['border'], width=1)
        draw_text(draw, (x, ax_bot + 12), lbl, font(20), C['text_secondary'], anchor='center')

    # Y label
    draw_text(draw, (ax_left - 40, ax_top + ax_h // 2 - 40), "Revenue /", font(18), C['text_muted'], anchor='center')
    draw_text(draw, (ax_left - 40, ax_top + ax_h // 2 - 14), "Investment", font(18), C['text_muted'], anchor='center')

    n = 200

    # H1: 4G — starts high, gradually declining
    pts_h1 = []
    for i in range(n):
        t = i / (n - 1)
        x = ax_left + int(t * ax_w)
        val = 0.82 - 0.30 * sigmoid(t, center=0.35, steepness=5)
        y = ax_bot - int(val * ax_h)
        pts_h1.append((x, y))

    # H2: 5G — low start, rising sharply
    pts_h2 = []
    for i in range(n):
        t = i / (n - 1)
        x = ax_left + int(t * ax_w)
        val = 0.05 + 0.65 * sigmoid(t, center=0.5, steepness=6)
        y = ax_bot - int(val * ax_h)
        pts_h2.append((x, y))

    # H3: AI — very low, gentle rise
    pts_h3 = []
    for i in range(n):
        t = i / (n - 1)
        x = ax_left + int(t * ax_w)
        val = 0.02 + 0.25 * sigmoid(t, center=0.75, steepness=7)
        y = ax_bot - int(val * ax_h)
        pts_h3.append((x, y))

    # Draw curves
    for pts, col in [(pts_h1, C['w1_4g']), (pts_h2, C['w2_5g']), (pts_h3, C['w3_ai'])]:
        for j in range(len(pts) - 1):
            draw.line([pts[j], pts[j + 1]], fill=col, width=2)

    # Labels — positioned to the left of right edge to avoid clipping
    draw_text(draw, (pts_h1[-1][0] - 10, pts_h1[-1][1] - 35), "H1: 4G — Defend & Extract",
              font_bold(18), C['w1_4g'], anchor='right')
    draw_text(draw, (pts_h2[-1][0] - 10, pts_h2[-1][1] - 35), "H2: 5G — Invest Now",
              font_bold(18), C['w2_5g'], anchor='right')
    draw_text(draw, (pts_h3[-1][0] - 10, pts_h3[-1][1] - 35), "H3: AI — Future Bet",
              font_bold(18), C['w3_ai'], anchor='right')

    save(img, "three_horizons.png")


# ─────────────────────────────────────────────────────────────────────
# 8. vision_statement.png
# ─────────────────────────────────────────────────────────────────────
def gen_vision_statement():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    # Card
    card_w, card_h = 1400, 280
    cx = CENTER_X - card_w // 2
    cy = CENTER_Y - card_h // 2 - 30

    draw_rounded_rect(draw, (cx, cy, cx + card_w, cy + card_h), radius=12,
                      fill=C['surface'], outline=C['border'], width=1)

    # Blue left border
    draw.rectangle([cx, cy + 12, cx + 4, cy + card_h - 12], fill=C['w1_4g'])

    # Label
    draw_text(draw, (cx + 40, cy + 40), "OUR VISION", font_bold(18), C['text_muted'])

    # Vision text (wrap manually)
    vision = "Lead the smartphone industry through the 4G-to-5G"
    vision2 = "transition and into the AI era by 2028"
    draw_text(draw, (cx + 40, cy + 90), vision, font_bold(28), C['text_primary'])
    draw_text(draw, (cx + 40, cy + 135), vision2, font_bold(28), C['text_primary'])

    # Wave dots below card
    draw_wave_dots(draw, cy + card_h + 50)

    save(img, "vision_statement.png")


# ─────────────────────────────────────────────────────────────────────
# 9. strategic_goals.png
# ─────────────────────────────────────────────────────────────────────
def gen_strategic_goals():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Strategic Goals", 120, font_bold(40), C['text_primary'])

    goals = [
        (C['w1_4g'], "Defend 4G revenue while managing controlled transition"),
        (C['w2_5g'], "Launch 5G product line within 6-9 months via licensing"),
        (C['w3_ai'], "Commit $150M to AI R&D with prototype by Q4 2027"),
        (C['gold'],  "Maintain $90M cash floor throughout all investments"),
    ]

    start_y = 280
    line_h = 80
    left_x = 440

    for i, (col, text) in enumerate(goals):
        y = start_y + i * line_h
        draw_circle_filled(draw, left_x, y + 14, 8, fill=col)
        draw_text(draw, (left_x + 28, y), text, font(26), C['text_primary'])

    save(img, "strategic_goals.png")


# ─────────────────────────────────────────────────────────────────────
# 10. vrio_summary.png
# ─────────────────────────────────────────────────────────────────────
def gen_vrio_summary():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "VRIO Analysis — Key Resources", 70, font_bold(38), C['text_primary'])

    # Table setup
    cols = ["Resource", "V", "R", "I", "O", "Verdict"]
    col_widths = [420, 80, 80, 80, 80, 280]
    table_w = sum(col_widths)
    table_x = CENTER_X - table_w // 2
    row_h = 70
    header_y = 180

    # Header row (light gray bg)
    draw.rectangle([table_x, header_y, table_x + table_w, header_y + row_h],
                   fill=(243, 244, 246))
    # Header borders
    draw.rectangle([table_x, header_y, table_x + table_w, header_y + row_h],
                   outline=C['border'], width=1)

    # Header text
    cx = table_x
    for i, col_name in enumerate(cols):
        w = col_widths[i]
        draw_text(draw, (cx + w // 2, header_y + 20), col_name, font_bold(22),
                  C['text_primary'], anchor='center')
        cx += w

    # Draw column dividers for header
    cx = table_x
    for w in col_widths[:-1]:
        cx += w
        draw.line([(cx, header_y), (cx, header_y + row_h)], fill=C['border'], width=1)

    # Data rows
    rows = [
        ("Atlanta Learning Curve", "Yes", "No", "—", "—", "Temporary Advantage", C['w1_4g']),
        ("Vietnam Low-Cost Labor", "Yes", "No", "—", "—", "Competitive Parity", C['text_secondary']),
        ("Dual-Plant Manufacturing", "Yes", "Yes", "Partial", "—", "Potential Advantage", C['w2_5g']),
        ("R&D Infrastructure", "Yes", "Yes", "Yes", "Yes", "Sustained Advantage", C['w2_5g']),
    ]

    for ri, (res, v, r, i_val, o, verdict, v_color) in enumerate(rows):
        ry = header_y + row_h * (ri + 1)
        # Row border
        draw.rectangle([table_x, ry, table_x + table_w, ry + row_h],
                       outline=C['border'], width=1)
        # Column dividers
        cx = table_x
        for w in col_widths[:-1]:
            cx += w
            draw.line([(cx, ry), (cx, ry + row_h)], fill=C['border'], width=1)

        # Cell values
        cx = table_x
        values = [res, v, r, i_val, o, verdict]
        for ci, val in enumerate(values):
            w = col_widths[ci]
            if ci == 0:
                draw_text(draw, (cx + 16, ry + 22), val, font(20), C['text_primary'])
            elif ci == 5:
                f = font_bold(20) if ri == 3 else font(20)
                draw_text(draw, (cx + w // 2, ry + 22), val, f, v_color, anchor='center')
            else:
                draw_text(draw, (cx + w // 2, ry + 22), val, font(20), C['text_primary'], anchor='center')
            cx += w

    save(img, "vrio_summary.png")


# ─────────────────────────────────────────────────────────────────────
# 11. value_chain_finding.png
# ─────────────────────────────────────────────────────────────────────
def gen_value_chain_finding():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Value Chain Analysis — Key Finding", 80, font_bold(38), C['text_primary'])

    # Two columns
    col_w, col_h = 560, 380
    gap = 160
    left_x = CENTER_X - col_w - gap // 2
    right_x = CENTER_X + gap // 2
    top_y = 240

    # Left card — 4G
    draw_rounded_rect(draw, (left_x, top_y, left_x + col_w, top_y + col_h), radius=10,
                      fill=C['surface'], outline=C['border'], width=1)
    draw.rectangle([left_x, top_y, left_x + col_w, top_y + 4], fill=C['w1_4g'])

    draw_text(draw, (left_x + col_w // 2, top_y + 30), "4G Production",
              font_bold(28), C['w1_4g'], anchor='center')
    draw_text(draw, (left_x + col_w // 2, top_y + 90), "Just-In-Time works",
              font_bold(24), C['text_primary'], anchor='center')
    draw_text(draw, (left_x + col_w // 2, top_y + 160), "Predictable demand,",
              font(20), C['text_secondary'], anchor='center')
    draw_text(draw, (left_x + col_w // 2, top_y + 190), "established supply chain",
              font(20), C['text_secondary'], anchor='center')

    # Right card — 5G
    draw_rounded_rect(draw, (right_x, top_y, right_x + col_w, top_y + col_h), radius=10,
                      fill=C['surface'], outline=C['border'], width=1)
    draw.rectangle([right_x, top_y, right_x + col_w, top_y + 4], fill=C['w2_5g'])

    draw_text(draw, (right_x + col_w // 2, top_y + 30), "5G Production",
              font_bold(28), C['w2_5g'], anchor='center')
    draw_text(draw, (right_x + col_w // 2, top_y + 90), "JIT breaks down",
              font_bold(24), C['text_primary'], anchor='center')
    draw_text(draw, (right_x + col_w // 2, top_y + 160), "Uncertain volumes,",
              font(20), C['text_secondary'], anchor='center')
    draw_text(draw, (right_x + col_w // 2, top_y + 190), "new technology requirements",
              font(20), C['text_secondary'], anchor='center')

    # "vs" between
    draw_text(draw, (CENTER_X, top_y + col_h // 2 - 10), "vs", font_bold(32), C['text_muted'], anchor='center')

    save(img, "value_chain_finding.png")


# ─────────────────────────────────────────────────────────────────────
# 12. bcg_matrix.png
# ─────────────────────────────────────────────────────────────────────
def gen_bcg_matrix():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "BCG Growth-Share Matrix", 60, font_bold(38), C['text_primary'])

    # Grid
    gx, gy = 380, 180
    gw, gh = 1000, 700
    mid_x = gx + gw // 2
    mid_y = gy + gh // 2

    # Quadrant borders
    draw.rectangle([gx, gy, gx + gw, gy + gh], outline=C['border'], width=1)
    draw.line([(mid_x, gy), (mid_x, gy + gh)], fill=C['border'], width=1)
    draw.line([(gx, mid_y), (gx + gw, mid_y)], fill=C['border'], width=1)

    # Axis labels
    draw_text(draw, (gx + gw // 2, gy + gh + 20), "Relative Market Share", font_bold(22),
              C['text_secondary'], anchor='center')
    draw_text(draw, (gx + gw // 4, gy + gh + 20), "High", font(18), C['text_muted'], anchor='center')
    draw_text(draw, (gx + gw * 3 // 4, gy + gh + 20), "Low", font(18), C['text_muted'], anchor='center')

    # Y axis labels (rotated not easy, use horizontal)
    draw_text(draw, (gx - 20, gy + gh // 4), "High", font(18), C['text_muted'], anchor='right')
    draw_text(draw, (gx - 20, gy + gh * 3 // 4), "Low", font(18), C['text_muted'], anchor='right')
    draw_text(draw, (gx - 20, gy + gh // 2 - 20), "Market", font_bold(18), C['text_secondary'], anchor='right')
    draw_text(draw, (gx - 20, gy + gh // 2 + 4), "Growth", font_bold(18), C['text_secondary'], anchor='right')

    # Quadrant labels (light)
    draw_text(draw, (gx + gw // 4, gy + 16), "Star", font(20), C['text_muted'], anchor='center')
    draw_text(draw, (gx + gw * 3 // 4, gy + 16), "Question Mark", font(20), C['text_muted'], anchor='center')
    draw_text(draw, (gx + gw // 4, mid_y + 16), "Cash Cow", font(20), C['text_muted'], anchor='center')
    draw_text(draw, (gx + gw * 3 // 4, mid_y + 16), "Dog", font(20), C['text_muted'], anchor='center')

    # 4G circle (Cash Cow — bottom-left)
    cx4g = gx + gw // 4
    cy4g = mid_y + gh // 4
    draw_circle_filled(draw, cx4g, cy4g, 50, fill=(*C['w1_4g'], 40))
    draw.ellipse([cx4g - 50, cy4g - 50, cx4g + 50, cy4g + 50], outline=C['w1_4g'], width=2)
    draw_text(draw, (cx4g, cy4g - 10), "4G", font_bold(28), C['w1_4g'], anchor='center')
    draw_text(draw, (cx4g, cy4g + 60), "$4.8B revenue, stable", font(18), C['text_secondary'], anchor='center')

    # 5G circle (Question Mark — top-right)
    cx5g = gx + gw * 3 // 4
    cy5g = gy + gh // 4
    draw_circle_filled(draw, cx5g, cy5g, 50, fill=(*C['w2_5g'], 40))
    draw.ellipse([cx5g - 50, cy5g - 50, cx5g + 50, cy5g + 50], outline=C['w2_5g'], width=2)
    draw_text(draw, (cx5g, cy5g - 10), "5G", font_bold(28), C['w2_5g'], anchor='center')
    draw_text(draw, (cx5g, cy5g + 60), "Zero share, high growth", font(18), C['text_secondary'], anchor='center')

    save(img, "bcg_matrix.png")


# ─────────────────────────────────────────────────────────────────────
# 13. porters_finding.png
# ─────────────────────────────────────────────────────────────────────
def gen_porters_finding():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Porter's Five Forces — Key Finding", 160, font_bold(38), C['text_primary'])

    draw_text_centered(draw, "Intense Rivalry", CENTER_Y - 40, font_bold(56), C['danger'])
    draw_text_centered(draw, "4 equal firms at 25% market share each", CENTER_Y + 50, font(28), C['text_primary'])
    draw_text_centered(draw, "Post-DOJ price competition eliminates tacit coordination",
                       CENTER_Y + 110, font(24), C['text_secondary'])

    save(img, "porters_finding.png")


# ─────────────────────────────────────────────────────────────────────
# 14. csf_gap.png
# ─────────────────────────────────────────────────────────────────────
def gen_csf_gap():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Critical Success Factors", 160, font_bold(38), C['text_primary'])

    draw_text_centered(draw, "Biggest Gap:", CENTER_Y - 70, font_bold(32), C['text_primary'])
    draw_text_centered(draw, "ZERO 5G Presence", CENTER_Y + 10, font_bold(52), C['danger'])
    draw_text_centered(draw, "While competitors move into 5G, Mobilé has no handset,",
                       CENTER_Y + 100, font(24), C['text_secondary'])
    draw_text_centered(draw, "no timeline, no market entry",
                       CENTER_Y + 136, font(24), C['text_secondary'])

    save(img, "csf_gap.png")


# ─────────────────────────────────────────────────────────────────────
# 15. international_strategy.png
# ─────────────────────────────────────────────────────────────────────
def gen_international_strategy():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Bartlett & Ghoshal Framework", 80, font_bold(38), C['text_primary'])

    # Two boxes with arrow between
    box_w, box_h = 440, 200
    left_x = 240
    right_x = 1240
    box_y = 300

    # Left box
    draw_rounded_rect(draw, (left_x, box_y, left_x + box_w, box_y + box_h), radius=10,
                      fill=C['surface'], outline=C['border'], width=1)
    draw.rectangle([left_x, box_y, left_x + box_w, box_y + 4], fill=C['w1_4g'])
    draw_text(draw, (left_x + box_w // 2, box_y + 40), "Global", font_bold(30), C['text_primary'], anchor='center')
    draw_text(draw, (left_x + box_w // 2, box_y + 80), "Standardization", font_bold(30), C['text_primary'], anchor='center')
    draw_text(draw, (left_x + box_w // 2, box_y + 140), "4G approach", font(22), C['w1_4g'], anchor='center')

    # Right box
    draw_rounded_rect(draw, (right_x, box_y, right_x + box_w, box_y + box_h), radius=10,
                      fill=C['surface'], outline=C['border'], width=1)
    draw.rectangle([right_x, box_y, right_x + box_w, box_y + 4], fill=C['w2_5g'])
    draw_text(draw, (right_x + box_w // 2, box_y + 60), "Transnational", font_bold(30), C['text_primary'], anchor='center')
    draw_text(draw, (right_x + box_w // 2, box_y + 140), "5G & AI approach", font(22), C['w2_5g'], anchor='center')

    # Arrow between
    arrow_y = box_y + box_h // 2
    arrow_left = left_x + box_w + 30
    arrow_right = right_x - 30
    draw.line([(arrow_left, arrow_y), (arrow_right, arrow_y)], fill=C['text_secondary'], width=2)
    draw.polygon([(arrow_right, arrow_y), (arrow_right - 14, arrow_y - 7),
                  (arrow_right - 14, arrow_y + 7)], fill=C['text_secondary'])
    draw_text(draw, (CENTER_X, arrow_y - 30), "Strategy Shift", font_bold(22), C['text_secondary'], anchor='center')

    # Bottom text
    draw_text_centered(draw, "Balance global integration with local responsiveness across US, Europe, Asia",
                       box_y + box_h + 60, font(24), C['text_secondary'])

    # Market labels
    markets = ["USA", "Europe", "Asia"]
    spacing = 200
    start_x = CENTER_X - spacing
    for i, m in enumerate(markets):
        draw_text(draw, (start_x + i * spacing, box_y + box_h + 120), m,
                  font_bold(22), WAVE_COLORS[i], anchor='center')

    save(img, "international_strategy.png")


# ─────────────────────────────────────────────────────────────────────
# 16. window_closing.png
# ─────────────────────────────────────────────────────────────────────
def gen_window_closing():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "13 Frameworks.", CENTER_Y - 100, font_bold(48), C['text_primary'])
    draw_text_centered(draw, "One Message.", CENTER_Y - 30, font_bold(48), C['text_primary'])
    draw_text_centered(draw, "The window is open, but closing fast.", CENTER_Y + 70, font_bold(36), C['accent'])

    save(img, "window_closing.png")


# ─────────────────────────────────────────────────────────────────────
# 17. swot_grid.png
# ─────────────────────────────────────────────────────────────────────
def gen_swot_grid():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "SWOT Synthesis", 50, font_bold(38), C['text_primary'])

    # 2x2 grid
    grid_w, grid_h = 1400, 820
    gx = CENTER_X - grid_w // 2
    gy = 130
    cell_w = grid_w // 2
    cell_h = grid_h // 2

    quadrants = [
        ("Strengths", C['w2_5g'], gx, gy,
         ["Dual-plant manufacturing", "$4.8B cash generation", "R&D infrastructure"]),
        ("Weaknesses", C['danger'], gx + cell_w, gy,
         ["Zero 5G presence", "4G dependency", "Production rigidity"]),
        ("Opportunities", C['w1_4g'], gx, gy + cell_h,
         ["5G market entry", "AI first-mover", "Vietnam cost advantage"]),
        ("Threats", C['w3_ai'], gx + cell_w, gy + cell_h,
         ["Price competition post-DOJ", "Technology obsolescence", "Cash constraint"]),
    ]

    for title, accent, cx, cy, items in quadrants:
        # Cell border
        draw.rectangle([cx, cy, cx + cell_w, cy + cell_h], outline=C['border'], width=1)
        # Header bar — light tinted background (mix accent with white at ~15%)
        bg = C['bg']
        mix = 0.15
        light_fill = (
            int(bg[0] + (accent[0] - bg[0]) * mix),
            int(bg[1] + (accent[1] - bg[1]) * mix),
            int(bg[2] + (accent[2] - bg[2]) * mix),
        )
        draw.rectangle([cx + 1, cy + 1, cx + cell_w - 1, cy + 54], fill=light_fill)
        # Header text on top of the bar
        draw_text(draw, (cx + cell_w // 2, cy + 14), title, font_bold(26), accent, anchor='center')
        # Items
        for j, item in enumerate(items):
            bullet_y = cy + 84 + j * 55
            draw_circle_filled(draw, cx + 40, bullet_y + 10, 4, fill=accent)
            draw_text(draw, (cx + 60, bullet_y), item, font(22), C['text_primary'])

    save(img, "swot_grid.png")


# ─────────────────────────────────────────────────────────────────────
# 18. swot_conclusion.png
# ─────────────────────────────────────────────────────────────────────
def gen_swot_conclusion():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Close the 5G gap.", CENTER_Y - 100, font_bold(48), C['w2_5g'])
    draw_text_centered(draw, "Commit to AI R&D.", CENTER_Y, font_bold(48), C['w3_ai'])
    draw_text_centered(draw, "Funded by the 4G cash engine.", CENTER_Y + 100, font_bold(48), C['w1_4g'])

    save(img, "swot_conclusion.png")


# ─────────────────────────────────────────────────────────────────────
# 19. recommendation_overview.png
# ─────────────────────────────────────────────────────────────────────
def gen_recommendation_overview():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "Strategic Recommendation", 70, font_bold(40), C['text_primary'])

    # Three columns
    col_w = 400
    col_h = 500
    gap = 40
    total_w = col_w * 3 + gap * 2
    start_x = CENTER_X - total_w // 2
    top_y = 180

    columns = [
        ("4G: Defend & Extract", C['w1_4g'],
         ["Managed decline", "Shift to Vietnam", "Fund other waves", "Maintain quality"]),
        ("5G: License & Enter", C['w2_5g'],
         ["6-9 month entry", "License technology", "Build IP in parallel", "Second-gen in-house"]),
        ("AI: Invest in R&D", C['w3_ai'],
         ["$150M commitment", "Dedicated team", "Strategic partnerships", "Prototype Q4 2027"]),
    ]

    for i, (title, accent, items) in enumerate(columns):
        cx = start_x + i * (col_w + gap)
        # Card
        draw_rounded_rect(draw, (cx, top_y, cx + col_w, top_y + col_h), radius=10,
                          fill=C['surface'], outline=C['border'], width=1)
        # Color top bar
        draw.rectangle([cx, top_y, cx + col_w, top_y + 4], fill=accent)
        # Title
        draw_text(draw, (cx + col_w // 2, top_y + 30), title, font_bold(24), accent, anchor='center')
        # Separator
        draw.line([(cx + 30, top_y + 75), (cx + col_w - 30, top_y + 75)], fill=C['border'], width=1)
        # Items
        for j, item in enumerate(items):
            iy = top_y + 105 + j * 65
            draw_circle_filled(draw, cx + 40, iy + 12, 5, fill=accent)
            draw_text(draw, (cx + 62, iy), item, font(22), C['text_primary'])

    save(img, "recommendation_overview.png")


# ─────────────────────────────────────────────────────────────────────
# 20. recommendation_4g.png
# ─────────────────────────────────────────────────────────────────────
def gen_recommendation_4g():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text(draw, (240, 120), "4G Strategy: Defend & Extract", font_bold(40), C['text_primary'])
    # Blue accent line under title
    draw.line([(240, 175), (440, 175)], fill=C['w1_4g'], width=3)

    items = [
        "Shift production to Vietnam (lower cost)",
        "Accept market share decline: 25% → 22%",
        "Extract maximum cash to fund 5G and AI",
        "Maintain quality through transition",
    ]

    for i, item in enumerate(items):
        y = 260 + i * 80
        draw_circle_filled(draw, 280, y + 14, 6, fill=C['w1_4g'])
        draw_text(draw, (310, y), item, font(26), C['text_primary'])

    save(img, "recommendation_4g.png")


# ─────────────────────────────────────────────────────────────────────
# 21. recommendation_5g.png
# ─────────────────────────────────────────────────────────────────────
def gen_recommendation_5g():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text(draw, (240, 120), "5G Strategy: License & Enter", font_bold(40), C['text_primary'])
    draw.line([(240, 175), (440, 175)], fill=C['w2_5g'], width=3)

    items = [
        "License 5G technology for speed",
        "Market entry within 6-9 months",
        "Build proprietary IP in parallel",
        "Second-gen product fully in-house",
    ]

    for i, item in enumerate(items):
        y = 260 + i * 80
        draw_circle_filled(draw, 280, y + 14, 6, fill=C['w2_5g'])
        draw_text(draw, (310, y), item, font(26), C['text_primary'])

    # Muted note at bottom
    draw_text(draw, (240, 700), "Speed beats purity — licensing creates dependency but closes the gap",
              font(20), C['text_muted'])

    save(img, "recommendation_5g.png")


# ─────────────────────────────────────────────────────────────────────
# 22. recommendation_ai.png
# ─────────────────────────────────────────────────────────────────────
def gen_recommendation_ai():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text(draw, (240, 120), "AI Strategy: Invest in R&D", font_bold(40), C['text_primary'])
    draw.line([(240, 175), (440, 175)], fill=C['w3_ai'], width=3)

    items = [
        "Commit $150M to R&D",
        "Dedicated AI research team",
        "Strategic partnerships",
        "Working prototype by Q4 2027",
    ]

    for i, item in enumerate(items):
        y = 260 + i * 80
        draw_circle_filled(draw, 280, y + 14, 6, fill=C['w3_ai'])
        draw_text(draw, (310, y), item, font(26), C['text_primary'])

    # Timeline arrow at bottom
    tl_y = 680
    tl_left, tl_right = 400, 1520
    draw.line([(tl_left, tl_y), (tl_right, tl_y)], fill=C['w3_ai'], width=2)
    draw.polygon([(tl_right, tl_y), (tl_right - 12, tl_y - 6), (tl_right - 12, tl_y + 6)],
                 fill=C['w3_ai'])

    tl_markers = [
        (tl_left, "2025"),
        ((tl_left + tl_right) // 2, "2026"),
        (tl_right - 60, "Q4 2027"),
    ]
    for mx, label in tl_markers:
        draw_circle_filled(draw, mx, tl_y, 6, fill=C['w3_ai'])
        draw_text(draw, (mx, tl_y + 16), label, font_bold(20), C['w3_ai'], anchor='center')

    save(img, "recommendation_ai.png")


# ─────────────────────────────────────────────────────────────────────
# 23. website_url.png
# ─────────────────────────────────────────────────────────────────────
def gen_website_url():
    img = new_frame()
    draw = ImageDraw.Draw(img)

    draw_text_centered(draw, "mobile-inc-strategy.vercel.app", CENTER_Y - 60, font_bold(42), C['accent'])
    draw_text_centered(draw, "Explore the full interactive analysis", CENTER_Y + 30, font(26), C['text_secondary'])
    draw_wave_dots(draw, CENTER_Y + 100)

    save(img, "website_url.png")


# ─────────────────────────────────────────────────────────────────────
# Run all generators
# ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    generators = [
        gen_three_waves_overview,
        gen_5g_adoption_stats,
        gen_zero_5g,
        gen_ai_timeline,
        gen_cash_constraint,
        gen_tradeoff_honest,
        gen_three_horizons,
        gen_vision_statement,
        gen_strategic_goals,
        gen_vrio_summary,
        gen_value_chain_finding,
        gen_bcg_matrix,
        gen_porters_finding,
        gen_csf_gap,
        gen_international_strategy,
        gen_window_closing,
        gen_swot_grid,
        gen_swot_conclusion,
        gen_recommendation_overview,
        gen_recommendation_4g,
        gen_recommendation_5g,
        gen_recommendation_ai,
        gen_website_url,
    ]

    print(f"Generating {len(generators)} diagrams...")
    for gen_fn in generators:
        name = gen_fn.__name__.replace("gen_", "")
        print(f"  [{generators.index(gen_fn)+1}/{len(generators)}] {name}")
        gen_fn()

    print(f"\nDone. {len(generators)} diagrams saved to {OUT}")
