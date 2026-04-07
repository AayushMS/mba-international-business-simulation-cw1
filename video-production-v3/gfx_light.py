"""Shared motion graphics library for Mobilé Inc. video v3.

Light theme design system. All scene generators import from this module.

Design language:
- White/off-white backgrounds
- Three-wave color coding: 4G=blue, 5G=green, AI=purple
- Clean flat sans-serif typography — no shadows, no glow
- Minimal Apple-keynote aesthetic
"""

import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# ── Dimensions ──────────────────────────────────────────────────────
W, H = 1920, 1080
FPS = 24
CENTER_X, CENTER_Y = W // 2, H // 2

# ── Color Palette (light theme) ─────────────────────────────────────
C = {
    # Backgrounds
    'bg':           (250, 251, 252),   # #FAFBFC — off-white
    'surface':      (255, 255, 255),   # #FFFFFF — pure white
    'border':       (229, 231, 235),   # #E5E7EB

    # Text
    'text_primary':   (26, 26, 46),    # #1A1A2E — near black
    'text_secondary': (107, 114, 128), # #6B7280
    'text_muted':     (156, 163, 175), # #9CA3AF

    # Three waves
    'w1_4g':  (59, 130, 246),   # #3B82F6 — blue
    'w2_5g':  (16, 185, 129),   # #10B981 — green
    'w3_ai':  (139, 92, 246),   # #8B5CF6 — purple

    # Accents / status
    'accent':  (14, 165, 233),  # #0EA5E9
    'danger':  (239, 68, 68),   # #EF4444
    'gold':    (245, 158, 11),  # #F59E0B
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

_SANS      = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
_SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
_MONO      = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

def font(size):       return _load_font(_SANS, size)
def font_bold(size):  return _load_font(_SANS_BOLD, size)
def font_mono(size):  return _load_font(_MONO, size)


# ── Easing Functions (minimal set) ──────────────────────────────────

def clamp(v, lo=0.0, hi=1.0):
    return max(lo, min(hi, v))

def ease_linear(t):
    return clamp(t)

def ease_in_out_quad(t):
    t = clamp(t)
    return 2 * t * t if t < 0.5 else 1 - (-2 * t + 2) ** 2 / 2

def ease_out_cubic(t):
    t = clamp(t)
    return 1 - (1 - t) ** 3


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
    """Animate a scalar value from val_from to val_to over [start, end]."""
    p = progress(t, start, end, easing)
    return val_from + (val_to - val_from) * p

def fade_in(t, start, duration=0.5):
    """Returns alpha 0..255 for a fade-in starting at `start`."""
    return int(animate(t, start, start + duration, 0, 255, ease_out_cubic))

def fade_out(t, start, duration=0.4):
    """Returns alpha 255..0 for a fade-out starting at `start`."""
    return int(animate(t, start, start + duration, 255, 0, ease_in_out_quad))


# ── Frame Creation ──────────────────────────────────────────────────

def new_frame():
    """Create a blank RGBA frame at 1920x1080 with off-white background."""
    return Image.new('RGBA', (W, H), (*C['bg'], 255))

def to_numpy(img):
    """Convert PIL RGBA image to RGB numpy array for moviepy."""
    return np.array(img.convert('RGB'))


# ── Background Generators ───────────────────────────────────────────

def solid_bg(color=None):
    """Create a solid color background (RGBA)."""
    color = color or C['bg']
    return Image.new('RGBA', (W, H), (*color[:3], 255))

def subtle_gradient_bg():
    """Create a barely-perceptible top-to-bottom white gradient (RGBA)."""
    c_top    = (255, 255, 255)
    c_bottom = (245, 246, 248)
    img = Image.new('RGBA', (W, H))
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        r = int(c_top[0] + (c_bottom[0] - c_top[0]) * t)
        g = int(c_top[1] + (c_bottom[1] - c_top[1]) * t)
        b = int(c_top[2] + (c_bottom[2] - c_top[2]) * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))
    return img


# ── Drawing Helpers ─────────────────────────────────────────────────

def text_size(text, fnt):
    """Get (width, height) of text rendered with font."""
    bbox = fnt.getbbox(text)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]

def text_width(text, fnt):
    return text_size(text, fnt)[0]

def draw_text(draw, xy, text, fnt, color=None, alpha=255, anchor=None):
    """Draw flat text. anchor: 'center', 'right', or None (left)."""
    color = color or C['text_primary']
    x, y = xy
    tw, _ = text_size(text, fnt)
    if anchor == 'center':
        x = x - tw // 2
    elif anchor == 'right':
        x = x - tw
    draw.text((x, y), text, fill=(*color[:3], int(alpha)), font=fnt)

def draw_text_centered(draw, text, y, fnt, color=None, alpha=255):
    """Draw text horizontally centered at given y."""
    draw_text(draw, (CENTER_X, y), text, fnt, color, alpha, anchor='center')

def draw_rounded_rect(draw, xy, radius, fill=None, outline=None, width=1):
    """Draw a rounded rectangle. xy = (x1, y1, x2, y2)."""
    x1, y1, x2, y2 = xy
    fill = fill or C['surface']
    draw.rounded_rectangle([x1, y1, x2, y2], radius=radius,
                           fill=fill, outline=outline, width=width)

def draw_circle_filled(draw, cx, cy, r, fill):
    """Draw a filled circle."""
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=fill)


# ── Screenshot Helpers ──────────────────────────────────────────────

def load_screenshot(path, target_w=1720, target_h=968):
    """Load a PNG screenshot and resize to fit within target dimensions."""
    img = Image.open(path).convert('RGBA')
    img.thumbnail((target_w, target_h), Image.LANCZOS)
    return img

def frame_screenshot(img):
    """Add subtle drop shadow and thin gray border to a screenshot."""
    border_color = C['border']
    shadow_offset = 8
    shadow_alpha = int(255 * 0.15)

    # Add 1px border by expanding the canvas
    bw, bh = img.size[0] + 2, img.size[1] + 2
    bordered = Image.new('RGBA', (bw, bh), (*border_color, 255))
    bordered.paste(img, (1, 1), img)

    # Create shadow layer
    sw, sh = bw + shadow_offset * 2, bh + shadow_offset * 2
    shadow_layer = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    shadow_fill = Image.new('RGBA', (bw, bh), (0, 0, 0, shadow_alpha))
    shadow_layer.paste(shadow_fill, (shadow_offset, shadow_offset))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=shadow_offset))

    # Composite: shadow first, then bordered image
    result = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    result.paste(shadow_layer, (0, 0), shadow_layer)
    result.paste(bordered, (0, 0), bordered)
    return result

def ken_burns_clip(image_path, duration, effect='zoom_in', intensity=0.05):
    """Return a moviepy VideoClip with a subtle Ken Burns effect.

    Effects: zoom_in, zoom_out, pan_left, pan_right
    Intensity: 0.03-0.07 (subtle)
    """
    from moviepy import VideoClip

    img = Image.open(image_path).convert('RGB')
    iw, ih = img.size
    intensity = clamp(intensity, 0.01, 0.1)

    def make_frame(t):
        p = ease_out_cubic(clamp(t / duration))

        if effect == 'zoom_in':
            scale = 1.0 + intensity * p
        elif effect == 'zoom_out':
            scale = (1.0 + intensity) - intensity * p
        elif effect in ('pan_left', 'pan_right'):
            scale = 1.0 + intensity
        else:
            scale = 1.0

        new_w = int(iw * scale)
        new_h = int(ih * scale)
        resized = img.resize((new_w, new_h), Image.LANCZOS)

        if effect == 'pan_left':
            ox = int((new_w - iw) * p)
            oy = (new_h - ih) // 2
        elif effect == 'pan_right':
            ox = int((new_w - iw) * (1.0 - p))
            oy = (new_h - ih) // 2
        else:
            ox = (new_w - iw) // 2
            oy = (new_h - ih) // 2

        cropped = resized.crop((ox, oy, ox + iw, oy + ih))
        return np.array(cropped)

    return VideoClip(make_frame, duration=duration)


# ── Scene Helpers ───────────────────────────────────────────────────

def crossfade_clips(clip1, clip2, duration=0.4):
    """Simple crossfade transition between two moviepy clips."""
    from moviepy import CompositeVideoClip

    clip2_start = clip1.duration - duration
    clip2_offset = clip2.with_start(clip2_start).crossfadein(duration)
    return CompositeVideoClip([clip1, clip2_offset])

def scene_fade_in(t, duration=0.5):
    """Scene fade-in alpha (0..255)."""
    return fade_in(t, 0, duration)

def scene_fade_out(t, scene_dur, duration=0.4):
    """Scene fade-out alpha (255..0)."""
    return fade_out(t, scene_dur - duration, duration)
