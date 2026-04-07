"""Generate 10 title/transition card PNGs for Mobilé Inc. video v3.

Output: assets/titles/*.png  (1920x1080, off-white background)
"""

import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

from PIL import ImageDraw
from gfx_light import (
    C, font, font_bold, font_mono,
    draw_text, draw_text_centered, draw_rounded_rect, draw_circle_filled,
    new_frame, text_size, text_width,
    CENTER_X, CENTER_Y, W, H,
    WAVE_COLORS,
)

OUT_DIR = os.path.join(os.path.dirname(__file__), "assets", "titles")
os.makedirs(OUT_DIR, exist_ok=True)


def save(img, name):
    path = os.path.join(OUT_DIR, name)
    img.convert("RGB").save(path)
    print(f"  saved: {path}")


def draw_wave_dots(draw, cy):
    """Three wave-colored dots centered horizontally at cy."""
    dot_r = 8
    spacing = 50
    total_w = dot_r * 2 * 3 + spacing * 2
    x_start = CENTER_X - total_w // 2 + dot_r
    colors = [C['w1_4g'], C['w2_5g'], C['w3_ai']]
    for i, color in enumerate(colors):
        cx = x_start + i * (dot_r * 2 + spacing)
        draw_circle_filled(draw, cx, cy, dot_r, color)


def draw_accent_line(draw, y, width=140, thickness=3, color=None):
    """Draw a thin horizontal line centered at y."""
    color = color or C['accent']
    x1 = CENTER_X - width // 2
    x2 = CENTER_X + width // 2
    draw.rectangle([x1, y, x2, y + thickness - 1], fill=(*color[:3], 255))


def draw_wave_bars(draw, y, thickness=4):
    """Three horizontal colored bars (blue, green, purple) centered at y."""
    bar_w = 40
    spacing = 20
    total_w = bar_w * 3 + spacing * 2
    x_start = CENTER_X - total_w // 2
    colors = [C['w1_4g'], C['w2_5g'], C['w3_ai']]
    for i, color in enumerate(colors):
        x1 = x_start + i * (bar_w + spacing)
        x2 = x1 + bar_w
        draw.rectangle([x1, y, x2, y + thickness - 1], fill=(*color[:3], 255))


# ── 1. opening_hook.png ──────────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

dots_y = CENTER_Y - 110
draw_wave_dots(draw, dots_y)

title_y = CENTER_Y - 70
draw_text_centered(draw, "Three technology waves.", title_y, font_bold(56), C['text_primary'])

sub_y = title_y + 80
draw_text_centered(draw, "One company. $90M on the line.", sub_y, font(26), C['text_muted'])

save(img, "opening_hook.png")


# ── 2. title_mobile_inc.png ──────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

title_y = CENTER_Y - 80
draw_text_centered(draw, "Mobilé Inc.", title_y, font_bold(56), C['text_primary'])

sub_y = title_y + 80
draw_text_centered(draw, "Strategic Analysis 2025", sub_y, font(26), C['text_secondary'])

muted_y = sub_y + 46
draw_text_centered(draw, "MN7002NI | International Business Strategy with Simulation", muted_y, font(20), C['text_muted'])

save(img, "title_mobile_inc.png")


# ── 3. transition_context.png ────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

label_y = CENTER_Y - 100
draw_text_centered(draw, "Scene 2", label_y, font(20), C['text_muted'])

title_y = CENTER_Y - 55
draw_text_centered(draw, "The Context", title_y, font_bold(56), C['text_primary'])

line_y = title_y + 80
draw_accent_line(draw, line_y, width=120, thickness=3, color=C['accent'])

save(img, "transition_context.png")


# ── 4. transition_three_waves.png ────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

label_y = CENTER_Y - 100
draw_text_centered(draw, "Scene 3", label_y, font(20), C['text_muted'])

title_y = CENTER_Y - 55
draw_text_centered(draw, "The Core Tension", title_y, font_bold(56), C['text_primary'])

bars_y = title_y + 82
draw_wave_bars(draw, bars_y, thickness=4)

save(img, "transition_three_waves.png")


# ── 5. transition_what_we_built.png ──────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

label_y = CENTER_Y - 100
draw_text_centered(draw, "Scene 4", label_y, font(20), C['text_muted'])

title_y = CENTER_Y - 55
draw_text_centered(draw, "What We Built", title_y, font_bold(56), C['text_primary'])

line_y = title_y + 80
draw_accent_line(draw, line_y, width=140, thickness=3, color=C['accent'])

save(img, "transition_what_we_built.png")


# ── 6. transition_task1.png ──────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

label_y = CENTER_Y - 120
draw_text_centered(draw, "Task 1", label_y, font(20), C['text_muted'])

title_y = CENTER_Y - 70
draw_text_centered(draw, "Strategy Process", title_y, font_bold(56), C['text_primary'])

sub_y = title_y + 80
draw_text_centered(draw, "Vision, Mission, Goals & SMART Objectives", sub_y, font(26), C['text_secondary'])

line_y = sub_y + 50
draw_accent_line(draw, line_y, width=140, thickness=3, color=C['w1_4g'])

save(img, "transition_task1.png")


# ── 7. transition_task2.png ──────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

label_y = CENTER_Y - 120
draw_text_centered(draw, "Task 2", label_y, font(20), C['text_muted'])

title_y = CENTER_Y - 70
draw_text_centered(draw, "Internal & External Analysis", title_y, font_bold(56), C['text_primary'])

sub_y = title_y + 80
draw_text_centered(draw, "VRIO | Value Chain | PESTLE | Porter's | Strategic Group | CSF", sub_y, font(26), C['text_secondary'])

line_y = sub_y + 50
draw_accent_line(draw, line_y, width=140, thickness=3, color=C['w2_5g'])

save(img, "transition_task2.png")


# ── 8. transition_task3.png ──────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

label_y = CENTER_Y - 120
draw_text_centered(draw, "Task 3", label_y, font(20), C['text_muted'])

title_y = CENTER_Y - 70
draw_text_centered(draw, "SWOT Synthesis", title_y, font_bold(56), C['text_primary'])

sub_y = title_y + 80
draw_text_centered(draw, "Evidence-Based Strategic Assessment", sub_y, font(26), C['text_secondary'])

line_y = sub_y + 50
draw_accent_line(draw, line_y, width=140, thickness=3, color=C['accent'])

save(img, "transition_task3.png")


# ── 9. transition_task4.png ──────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

label_y = CENTER_Y - 120
draw_text_centered(draw, "Task 4", label_y, font(20), C['text_muted'])

title_y = CENTER_Y - 70
draw_text_centered(draw, "Strategic Recommendation", title_y, font_bold(56), C['text_primary'])

sub_y = title_y + 80
draw_text_centered(draw, "Accelerated 5G Entry with Parallel AI R&D", sub_y, font(26), C['text_secondary'])

line_y = sub_y + 50
draw_accent_line(draw, line_y, width=140, thickness=3, color=C['w3_ai'])

save(img, "transition_task4.png")


# ── 10. closing_card.png ─────────────────────────────────────────────

img = new_frame()
draw = ImageDraw.Draw(img)

dots_y = CENTER_Y - 130
draw_wave_dots(draw, dots_y)

title_y = CENTER_Y - 90
draw_text_centered(draw, "Mobilé Inc. Strategic Analysis", title_y, font_bold(56), C['text_primary'])

sub_y = title_y + 80
draw_text_centered(draw, "MN7002NI | Islington College | London Metropolitan University", sub_y, font(26), C['text_secondary'])

team1_y = sub_y + 56
draw_text_centered(draw, "Bishwesh Ram Shrestha | Gaurav Dangol | Bishan Subedi", team1_y, font(20), C['text_muted'])

team2_y = team1_y + 34
draw_text_centered(draw, "Aayush Man Singh | Ruchan Jung Sijapati | Shaswat Nibha Maharjan", team2_y, font(20), C['text_muted'])

save(img, "closing_card.png")


print(f"\nAll 10 PNGs written to {OUT_DIR}")
