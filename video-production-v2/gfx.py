"""Shared motion graphics library for Mobilé Inc. video v2.

Provides colors, fonts, easing functions, drawing helpers, and animated
component builders. All scene generators import from this module.

Design language:
- Deep navy gradient backgrounds
- Three-wave color coding: 4G=blue, 5G=green, AI=purple
- Clean sans-serif typography
- Animated data visualizations and kinetic text
"""

import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# ── Dimensions ──────────────────────────────────────────────────────
W, H = 1920, 1080
FPS = 24
CENTER_X, CENTER_Y = W // 2, H // 2

# ── Color Palette ───────────────────────────────────────────────────
C = {
    # Backgrounds
    'bg_dark':      (8, 12, 32),
    'bg_medium':    (16, 22, 52),
    'bg_light':     (24, 32, 68),
    'bg_card':      (20, 28, 60),
    'bg_card_alt':  (28, 36, 72),

    # Text
    'white':        (255, 255, 255),
    'text':         (240, 242, 248),
    'text_dim':     (136, 146, 176),
    'text_muted':   (90, 100, 130),

    # Three waves
    'w1_4g':        (74, 144, 217),     # Blue
    'w1_4g_dim':    (40, 80, 140),
    'w2_5g':        (46, 204, 113),     # Green
    'w2_5g_dim':    (24, 120, 64),
    'w3_ai':        (155, 89, 182),     # Purple
    'w3_ai_dim':    (90, 50, 110),

    # Accents
    'accent':       (78, 205, 196),     # Teal
    'gold':         (242, 201, 76),
    'danger':       (231, 76, 60),
    'orange':       (243, 156, 18),

    # UI
    'line':         (50, 60, 90),
    'line_light':   (70, 80, 110),
    'transparent':  (0, 0, 0, 0),
}

WAVE_COLORS = [C['w1_4g'], C['w2_5g'], C['w3_ai']]
WAVE_NAMES  = ['4G LTE', '5G', 'AI Devices']
WAVE_LABELS = ['Wave 1 — 4G LTE', 'Wave 2 — 5G', 'Wave 3 — AI Devices']

# ── Fonts ───────────────────────────────────────────────────────────
_font_cache = {}

def _load_font(path, size):
    key = (path, size)
    if key not in _font_cache:
        try:
            _font_cache[key] = ImageFont.truetype(path, size)
        except Exception:
            _font_cache[key] = ImageFont.load_default()
    return _font_cache[key]

# Font paths
_SANS      = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
_SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
_MONO      = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
_MONO_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"

def font(size):         return _load_font(_SANS, size)
def font_bold(size):    return _load_font(_SANS_BOLD, size)
def font_mono(size):    return _load_font(_MONO, size)
def font_mono_bold(size): return _load_font(_MONO_BOLD, size)


# ── Easing Functions ────────────────────────────────────────────────

def clamp(v, lo=0.0, hi=1.0):
    return max(lo, min(hi, v))

def ease_linear(t):
    return clamp(t)

def ease_in_quad(t):
    t = clamp(t)
    return t * t

def ease_out_quad(t):
    t = clamp(t)
    return 1 - (1 - t) * (1 - t)

def ease_in_out_quad(t):
    t = clamp(t)
    return 2 * t * t if t < 0.5 else 1 - (-2 * t + 2) ** 2 / 2

def ease_out_cubic(t):
    t = clamp(t)
    return 1 - (1 - t) ** 3

def ease_in_out_cubic(t):
    t = clamp(t)
    return 4 * t * t * t if t < 0.5 else 1 - (-2 * t + 2) ** 3 / 2

def ease_out_expo(t):
    t = clamp(t)
    return 1 if t >= 1 else 1 - 2 ** (-10 * t)

def ease_out_back(t):
    t = clamp(t)
    c1 = 1.70158
    c3 = c1 + 1
    return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2

def ease_out_elastic(t):
    t = clamp(t)
    if t == 0 or t == 1:
        return t
    return 2 ** (-10 * t) * math.sin((t * 10 - 0.75) * (2 * math.pi / 3)) + 1


# ── Animation Helpers ───────────────────────────────────────────────

def progress(t, start, end, easing=ease_out_cubic):
    """Returns 0..1 progress for time t within [start, end], with easing."""
    if t <= start:
        return 0.0
    if t >= end:
        return 1.0
    raw = (t - start) / (end - start)
    return easing(raw)

def animate(t, start, end, val_from, val_to, easing=ease_out_cubic):
    """Animate a value from val_from to val_to over [start, end]."""
    p = progress(t, start, end, easing)
    return val_from + (val_to - val_from) * p

def fade_in(t, start, duration=0.5):
    """Returns alpha 0..255 for a fade-in starting at `start`."""
    return int(animate(t, start, start + duration, 0, 255, ease_out_cubic))

def fade_out(t, start, duration=0.5):
    """Returns alpha 255..0 for a fade-out starting at `start`."""
    return int(animate(t, start, start + duration, 255, 0, ease_in_quad))

def is_visible(t, start, end=None):
    """Check if t is past start (and before end if given)."""
    if t < start:
        return False
    if end is not None and t > end:
        return False
    return True


# ── Color Helpers ───────────────────────────────────────────────────

def rgba(color, alpha=255):
    """Convert RGB tuple to RGBA with specified alpha."""
    if len(color) == 4:
        return (*color[:3], alpha)
    return (*color, alpha)

def lerp_color(c1, c2, t):
    """Linearly interpolate between two RGB(A) colors."""
    t = clamp(t)
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))

def dim_color(color, factor=0.5):
    """Dim a color by a factor."""
    return tuple(int(c * factor) for c in color[:3])


# ── Image Creation ──────────────────────────────────────────────────

def new_frame():
    """Create a blank RGBA frame at 1920x1080."""
    return Image.new('RGBA', (W, H), (*C['bg_dark'], 255))

def to_numpy(img):
    """Convert PIL RGBA image to RGB numpy array for moviepy."""
    return np.array(img.convert('RGB'))


# ── Background Generators ──────────────────────────────────────────

def gradient_bg(c_top=None, c_bottom=None):
    """Create a vertical gradient background image (RGBA)."""
    c_top = c_top or C['bg_dark']
    c_bottom = c_bottom or C['bg_medium']
    img = Image.new('RGBA', (W, H))
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        r = int(c_top[0] + (c_bottom[0] - c_top[0]) * t)
        g = int(c_top[1] + (c_bottom[1] - c_top[1]) * t)
        b = int(c_top[2] + (c_bottom[2] - c_top[2]) * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))
    return img

def radial_gradient_bg(center_color=None, edge_color=None, cx=None, cy=None):
    """Create a radial gradient background from center to edges."""
    center_color = center_color or C['bg_light']
    edge_color = edge_color or C['bg_dark']
    cx = cx or CENTER_X
    cy = cy or CENTER_Y
    img = Image.new('RGBA', (W, H))
    pixels = img.load()
    max_dist = math.sqrt(max(cx, W - cx) ** 2 + max(cy, H - cy) ** 2)
    # Generate using numpy for speed
    yy, xx = np.mgrid[0:H, 0:W]
    dist = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2) / max_dist
    dist = np.clip(dist, 0, 1)
    arr = np.zeros((H, W, 4), dtype=np.uint8)
    for i in range(3):
        arr[:, :, i] = (center_color[i] + (edge_color[i] - center_color[i]) * dist).astype(np.uint8)
    arr[:, :, 3] = 255
    return Image.fromarray(arr, 'RGBA')


# ── Pre-rendered backgrounds (cached) ──────────────────────────────

_bg_cache = {}

def cached_gradient(key='default', c_top=None, c_bottom=None):
    """Get a cached gradient background (returns a copy)."""
    if key not in _bg_cache:
        _bg_cache[key] = gradient_bg(c_top, c_bottom)
    return _bg_cache[key].copy()

def cached_radial(key='default', center_color=None, edge_color=None):
    if key not in _bg_cache:
        _bg_cache[key] = radial_gradient_bg(center_color, edge_color)
    return _bg_cache[key].copy()


# ── Drawing Primitives ──────────────────────────────────────────────

def text_size(text, fnt):
    """Get (width, height) of text rendered with font."""
    bbox = fnt.getbbox(text)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]

def text_width(text, fnt):
    return text_size(text, fnt)[0]

def draw_text(draw, xy, text, fnt, color=None, alpha=255, anchor=None):
    """Draw text with optional alpha. `anchor` can be 'center', 'right'."""
    color = color or C['text']
    x, y = xy
    tw, th = text_size(text, fnt)

    if anchor == 'center':
        x = x - tw // 2
    elif anchor == 'right':
        x = x - tw

    if alpha >= 255:
        draw.text((x, y), text, fill=(*color[:3], 255), font=fnt)
    else:
        draw.text((x, y), text, fill=(*color[:3], int(alpha)), font=fnt)

def draw_text_centered(draw, text, y, fnt, color=None, alpha=255):
    """Draw text horizontally centered at given y."""
    draw_text(draw, (CENTER_X, y), text, fnt, color, alpha, anchor='center')

def draw_text_shadow(draw, xy, text, fnt, color=None, alpha=255, shadow_offset=3, anchor=None):
    """Draw text with a subtle shadow for depth."""
    color = color or C['text']
    x, y = xy
    tw, th = text_size(text, fnt)

    if anchor == 'center':
        x = x - tw // 2
    elif anchor == 'right':
        x = x - tw

    # Shadow
    shadow_alpha = int(alpha * 0.3)
    draw.text((x + shadow_offset, y + shadow_offset), text,
              fill=(0, 0, 0, shadow_alpha), font=fnt)
    # Main text
    draw.text((x, y), text, fill=(*color[:3], int(alpha)), font=fnt)


def draw_rounded_rect(draw, xy, radius, fill=None, outline=None, width=1):
    """Draw a rounded rectangle. xy = (x1, y1, x2, y2)."""
    x1, y1, x2, y2 = xy
    fill = fill or C['bg_card']
    draw.rounded_rectangle([x1, y1, x2, y2], radius=radius,
                           fill=fill, outline=outline, width=width)


def draw_line_h(draw, y, x1=0, x2=W, color=None, width=1):
    """Draw a horizontal line."""
    color = color or C['line']
    draw.line([(x1, y), (x2, y)], fill=(*color[:3], 255), width=width)

def draw_line_v(draw, x, y1=0, y2=H, color=None, width=1):
    """Draw a vertical line."""
    color = color or C['line']
    draw.line([(x, y1), (x, y2)], fill=(*color[:3], 255), width=width)


def draw_circle_filled(draw, cx, cy, r, fill):
    """Draw a filled circle."""
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=fill)

def draw_ring(draw, cx, cy, r, color, width=3):
    """Draw a circle outline (ring)."""
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=width)


# ── Animated Components ─────────────────────────────────────────────

def draw_progress_bar(draw, x, y, w, h, pct, color, bg_color=None, radius=6):
    """Draw an animated progress bar."""
    bg_color = bg_color or C['bg_card']
    # Background
    draw_rounded_rect(draw, (x, y, x + w, y + h), radius, fill=bg_color)
    # Fill
    fill_w = max(0, int(w * clamp(pct)))
    if fill_w > radius * 2:
        draw_rounded_rect(draw, (x, y, x + fill_w, y + h), radius,
                          fill=(*color[:3], 255))

def draw_stat_big(draw, x, y, value_text, label_text, color, alpha=255):
    """Draw a large stat number with label below it."""
    # Value
    draw_text_shadow(draw, (x, y), value_text, font_bold(72), color, alpha, anchor='center')
    # Label
    draw_text(draw, (x, y + 80), label_text, font(22), C['text_dim'], alpha, anchor='center')


def draw_card(draw, x, y, w, h, title, body_lines, accent_color=None, alpha=255):
    """Draw a card with title and body text lines."""
    accent_color = accent_color or C['accent']
    bg = rgba(C['bg_card'], int(alpha * 0.85))
    draw_rounded_rect(draw, (x, y, x + w, y + h), 12, fill=bg)

    # Accent bar at top
    bar_alpha = int(alpha * 0.9)
    draw_rounded_rect(draw, (x, y, x + w, y + 4), 2,
                      fill=(*accent_color[:3], bar_alpha))

    # Title
    draw_text(draw, (x + 24, y + 20), title, font_bold(24), C['text'], alpha)

    # Body lines
    line_y = y + 60
    for line in body_lines:
        draw_text(draw, (x + 24, line_y), line, font(18), C['text_dim'], alpha)
        line_y += 28


def draw_wave_badge(draw, wave_idx, x, y, alpha=255, size='normal'):
    """Draw a colored wave indicator badge (0=4G, 1=5G, 2=AI)."""
    color = WAVE_COLORS[wave_idx]
    label = WAVE_NAMES[wave_idx]
    fnt = font_bold(18 if size == 'normal' else 14)
    tw = text_width(label, fnt)
    pad_x, pad_y = 16, 8
    rx = x + tw + pad_x * 2
    ry = y + 28 + pad_y if size == 'normal' else y + 22 + pad_y

    draw_rounded_rect(draw, (x, y, rx, ry), 14,
                      fill=(*dim_color(color, 0.3), int(alpha * 0.8)),
                      outline=(*color[:3], int(alpha * 0.6)), width=1)
    draw_text(draw, (x + pad_x, y + pad_y), label, fnt,
              color, alpha)
    return rx  # return right edge for positioning


def draw_section_header(draw, text_str, y, accent_color=None, alpha=255):
    """Draw a section header with accent line."""
    accent_color = accent_color or C['accent']
    fnt = font(16)
    draw_text(draw, (120, y), text_str.upper(), fnt, C['text_muted'], int(alpha * 0.7))
    tw = text_width(text_str.upper(), fnt)
    draw.line([(120 + tw + 16, y + 10), (W - 120, y + 10)],
              fill=(*accent_color[:3], int(alpha * 0.2)), width=1)


# ── Chart Components ────────────────────────────────────────────────

def draw_bar_chart(draw, x, y, w, h, bars, max_val=None, anim_pct=1.0):
    """Draw an animated horizontal bar chart.

    bars: list of (label, value, color)
    """
    if not bars:
        return
    max_val = max_val or max(v for _, v, _ in bars)
    bar_h = min(40, (h - 20) // len(bars) - 10)
    gap = (h - bar_h * len(bars)) // (len(bars) + 1)

    for i, (label, value, color) in enumerate(bars):
        by = y + gap + i * (bar_h + gap)
        # Label
        draw_text(draw, (x, by + bar_h // 2 - 10), label, font(16), C['text_dim'])
        # Bar background
        bar_x = x + 160
        bar_w = w - 160
        draw_rounded_rect(draw, (bar_x, by, bar_x + bar_w, by + bar_h), 4,
                          fill=C['bg_card'])
        # Bar fill
        fill_pct = (value / max_val) * anim_pct if max_val > 0 else 0
        fill_w = int(bar_w * fill_pct)
        if fill_w > 8:
            draw_rounded_rect(draw, (bar_x, by, bar_x + fill_w, by + bar_h), 4,
                              fill=(*color[:3], 220))
        # Value text
        if anim_pct > 0.1:
            val_text = f"{value * anim_pct:.0f}" if isinstance(value, (int, float)) else str(value)
            draw_text(draw, (bar_x + fill_w + 10, by + bar_h // 2 - 10),
                      val_text, font_mono(14), C['text_dim'])


def draw_pie_segment(draw, cx, cy, r, start_angle, end_angle, color, alpha=255):
    """Draw a pie chart segment."""
    draw.pieslice(
        [cx - r, cy - r, cx + r, cy + r],
        start=start_angle, end=end_angle,
        fill=(*color[:3], alpha)
    )


def draw_donut_chart(draw, cx, cy, r_outer, r_inner, segments, anim_pct=1.0):
    """Draw an animated donut chart.

    segments: list of (fraction, color, label)
    """
    angle = -90  # Start from top
    for frac, color, label in segments:
        sweep = frac * 360 * anim_pct
        if sweep > 0.5:
            draw_pie_segment(draw, cx, cy, r_outer, angle, angle + sweep, color)
            angle += sweep

    # Punch out center
    draw_circle_filled(draw, cx, cy, r_inner, (*C['bg_dark'], 255))


# ── Layout Helpers ──────────────────────────────────────────────────

def grid_positions(n, cols, x_start, y_start, cell_w, cell_h, gap=20):
    """Return list of (x, y) positions for a grid layout."""
    positions = []
    for i in range(n):
        col = i % cols
        row = i // cols
        px = x_start + col * (cell_w + gap)
        py = y_start + row * (cell_h + gap)
        positions.append((px, py))
    return positions


def stagger_delay(index, base_delay=0.0, per_item=0.15):
    """Calculate stagger delay for item at index."""
    return base_delay + index * per_item


# ── Composite Helpers ───────────────────────────────────────────────

def overlay_image(base, overlay, position=(0, 0)):
    """Paste overlay onto base with alpha compositing."""
    base.paste(overlay, position, overlay)
    return base


def draw_lower_third(draw, label, sublabel, color=None, alpha=255):
    """Draw a lower-third identification bar."""
    color = color or C['accent']
    y = H - 120
    # Background bar
    draw_rounded_rect(draw, (80, y, 600, y + 80), 8,
                      fill=(0, 0, 0, int(alpha * 0.6)))
    # Accent strip
    draw.rectangle([(80, y), (86, y + 80)], fill=(*color[:3], int(alpha)))
    # Text
    draw_text(draw, (100, y + 12), label, font_bold(24), C['text'], alpha)
    draw_text(draw, (100, y + 46), sublabel, font(16), C['text_dim'], int(alpha * 0.8))


# ── Convenience: Animated text block with word-by-word reveal ──────

def draw_text_reveal(draw, x, y, text, fnt, t, start_t,
                     words_per_sec=3.0, color=None, line_width=None, alpha_base=255):
    """Draw text that reveals word by word. Returns height used."""
    color = color or C['text']
    if t < start_t:
        return 0

    words = text.split()
    elapsed = t - start_t
    n_visible = int(elapsed * words_per_sec) + 1

    if line_width is None:
        line_width = W - x - 120

    # Word wrap and draw
    lines = []
    current_line = []
    for i, word in enumerate(words):
        test_line = ' '.join(current_line + [word])
        tw = text_width(test_line, fnt)
        if tw > line_width and current_line:
            lines.append(current_line[:])
            current_line = [word]
        else:
            current_line.append(word)
    if current_line:
        lines.append(current_line)

    line_h = fnt.getbbox('Ay')[3] + 8
    word_idx = 0
    cy = y
    for line_words in lines:
        cx = x
        for word in line_words:
            if word_idx < n_visible:
                a = min(alpha_base, int(alpha_base * min(1.0, (elapsed - word_idx / words_per_sec) * 3)))
                draw_text(draw, (cx, cy), word, fnt, color, a)
            cx += text_width(word + ' ', fnt)
            word_idx += 1
        cy += line_h

    return cy - y


# ── Scene transition helpers ────────────────────────────────────────

def scene_fade_in(t, duration=0.6):
    """Global scene fade-in alpha (0..255)."""
    return fade_in(t, 0, duration)

def scene_fade_out(t, scene_dur, duration=0.4):
    """Global scene fade-out alpha (255..0)."""
    return fade_out(t, scene_dur - duration, duration)

def scene_alpha(t, scene_dur, fade_in_dur=0.6, fade_out_dur=0.4):
    """Combined fade in/out alpha for a scene."""
    a_in = scene_fade_in(t, fade_in_dur)
    a_out = scene_fade_out(t, scene_dur, fade_out_dur)
    return min(a_in, a_out)


# ── Background animation: subtle floating particles ─────────────────

def draw_particles(draw, t, n=30, seed=42, color=None, alpha_max=40):
    """Draw subtle floating particles for visual interest."""
    color = color or C['accent']
    rng = np.random.RandomState(seed)
    for i in range(n):
        base_x = rng.randint(0, W)
        base_y = rng.randint(0, H)
        speed_x = rng.uniform(-0.3, 0.3)
        speed_y = rng.uniform(-0.5, -0.1)
        radius = rng.uniform(1.5, 4)
        phase = rng.uniform(0, 2 * math.pi)

        x = (base_x + speed_x * t * 60 + math.sin(t * 0.5 + phase) * 20) % W
        y = (base_y + speed_y * t * 60) % H
        a = int(alpha_max * (0.5 + 0.5 * math.sin(t * 0.8 + phase)))
        draw_circle_filled(draw, int(x), int(y), int(radius),
                           (*color[:3], a))


# ── Animated wave S-curves ──────────────────────────────────────────

def draw_wave_curves(draw, t, y_base=540, amplitude=60, alpha=80):
    """Draw animated sine wave curves for 4G/5G/AI visual."""
    for i, color in enumerate(WAVE_COLORS):
        freq = 0.003 + i * 0.001
        phase = t * (0.5 + i * 0.3)
        y_offset = i * 30
        points = []
        for x in range(0, W, 3):
            y = y_base + y_offset + amplitude * math.sin(freq * x + phase)
            points.append((x, int(y)))
        if len(points) > 1:
            draw.line(points, fill=(*color[:3], alpha), width=2)
