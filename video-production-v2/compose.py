#!/usr/bin/env python3
"""Video compositor v2 for Mobilé Inc. — motion graphics edition.

Imports scene builders from scenes/, assembles with audio from v1,
writes individual segments then concatenates into final output.
"""

import os
import sys
import time
import gc

from moviepy import (
    VideoClip, AudioFileClip, VideoFileClip,
    CompositeVideoClip, concatenate_videoclips, concatenate_audioclips, AudioClip,
)
from moviepy.video.fx import CrossFadeIn
import numpy as np

# ── Paths ───────────────────────────────────────────────────────────
BASE = os.path.dirname(os.path.abspath(__file__))
V1_AUDIO = os.path.join(os.path.dirname(BASE), "video-production", "audio")
SEG_DIR  = os.path.join(BASE, "segments")
OUT_DIR  = os.path.join(BASE, "output")

FPS = 24

def ensure_dirs():
    os.makedirs(SEG_DIR, exist_ok=True)
    os.makedirs(OUT_DIR, exist_ok=True)

def au(name):
    """Audio path helper (reads from v1 audio dir)."""
    return os.path.join(V1_AUDIO, name)


# ── Audio helpers ───────────────────────────────────────────────────

def make_silence(duration, fps=44100):
    return AudioClip(
        lambda t: np.zeros((1, 2)) if np.isscalar(t) else np.zeros((len(t), 2)),
        duration=duration, fps=fps,
    )

def combine_audio(parts):
    """parts: list of str (file path) or float (silence seconds)."""
    clips = []
    for p in parts:
        if isinstance(p, str):
            clips.append(AudioFileClip(p))
        elif isinstance(p, (int, float)):
            clips.append(make_silence(p))
    return concatenate_audioclips(clips)


# ── Scene wrapper ───────────────────────────────────────────────────

def render_scene(scene_num, make_frame_fn, audio_clip, output_path):
    """Render a single scene to MP4.

    make_frame_fn: callable(t) -> numpy RGB array (H, W, 3)
    audio_clip: moviepy audio clip
    """
    duration = audio_clip.duration
    video = VideoClip(make_frame_fn, duration=duration)
    video = video.with_audio(audio_clip)

    print(f"    Writing {os.path.basename(output_path)} ({duration:.1f}s)...")
    t0 = time.time()
    video.write_videofile(
        output_path,
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        preset="ultrafast",
        logger=None,
    )
    elapsed = time.time() - t0
    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print(f"    Done in {elapsed:.0f}s ({size_mb:.1f} MB)")

    video.close()
    try:
        audio_clip.close()
    except Exception:
        pass
    gc.collect()


# ── Scene definitions ───────────────────────────────────────────────

def build_scene_01():
    """Scene 1: Cold Open / Hook (27.1s)"""
    from scenes.scene_01 import make_frame
    audio = AudioFileClip(au("scene01_hook.mp3"))
    render_scene(1, make_frame, audio, os.path.join(SEG_DIR, "scene01.mp4"))

def build_scene_02():
    """Scene 2: Assignment Context (32.5s)"""
    from scenes.scene_02 import make_frame
    audio = AudioFileClip(au("scene02_context.mp3"))
    render_scene(2, make_frame, audio, os.path.join(SEG_DIR, "scene02.mp4"))

def build_scene_03():
    """Scene 3: Three Waves (51.5s)"""
    from scenes.scene_03 import make_frame
    audio = combine_audio([
        au("scene03_waves_ava.mp3"), 0.3, au("scene03_waves_andrew.mp3"),
    ])
    render_scene(3, make_frame, audio, os.path.join(SEG_DIR, "scene03.mp4"))

def build_scene_04():
    """Scene 4: What We Built (29.7s)"""
    from scenes.scene_04 import make_frame
    audio = AudioFileClip(au("scene04_built.mp3"))
    render_scene(4, make_frame, audio, os.path.join(SEG_DIR, "scene04.mp4"))

def build_scene_05():
    """Scene 5: Task 1 — Strategy Process (38.4s)"""
    from scenes.scene_05 import make_frame
    audio = AudioFileClip(au("scene05_task1.mp3"))
    render_scene(5, make_frame, audio, os.path.join(SEG_DIR, "scene05.mp4"))

def build_scene_06():
    """Scene 6: Task 2 — Deep Analysis (87.1s)"""
    from scenes.scene_06 import make_frame
    audio = combine_audio([
        au("scene06_analysis_ava.mp3"), 0.4, au("scene06_analysis_andrew.mp3"),
    ])
    render_scene(6, make_frame, audio, os.path.join(SEG_DIR, "scene06.mp4"))

def build_scene_07():
    """Scene 7: Task 3 — SWOT (32.8s)"""
    from scenes.scene_07 import make_frame
    audio = AudioFileClip(au("scene07_swot.mp3"))
    render_scene(7, make_frame, audio, os.path.join(SEG_DIR, "scene07.mp4"))

def build_scene_08():
    """Scene 8: Task 4 — Recommendation (55.1s)"""
    from scenes.scene_08 import make_frame
    audio = AudioFileClip(au("scene08_recommendation.mp3"))
    render_scene(8, make_frame, audio, os.path.join(SEG_DIR, "scene08.mp4"))

def build_scene_09():
    """Scene 9: Closing (27.3s)"""
    from scenes.scene_09 import make_frame
    audio = combine_audio([
        au("scene09_closing_ava.mp3"), 0.3, au("scene09_closing_andrew.mp3"),
    ])
    render_scene(9, make_frame, audio, os.path.join(SEG_DIR, "scene09.mp4"))


# ── Final concatenation ─────────────────────────────────────────────

def concatenate_final():
    print("\n--- Final Assembly ---")
    segment_files = [os.path.join(SEG_DIR, f"scene{i:02d}.mp4") for i in range(1, 10)]

    for sf in segment_files:
        if not os.path.exists(sf):
            print(f"  MISSING: {sf}")
            return False

    clips = []
    total_dur = 0
    for sf in segment_files:
        clip = VideoFileClip(sf)
        clips.append(clip)
        total_dur += clip.duration
        print(f"  {os.path.basename(sf)}: {clip.duration:.1f}s")

    print(f"  Total: {total_dur:.1f}s ({total_dur / 60:.1f} min)")

    # Crossfade between segments
    cf = 0.3
    for i in range(1, len(clips)):
        clips[i] = clips[i].with_effects([CrossFadeIn(cf)])
    final = concatenate_videoclips(clips, padding=-cf, method="compose")

    output_path = os.path.join(OUT_DIR, "mobile_inc_v2.mp4")
    print(f"  Writing final video (preset=medium, bitrate=6000k)...")
    t0 = time.time()
    final.write_videofile(
        output_path, fps=FPS, codec="libx264", audio_codec="aac",
        preset="medium", bitrate="6000k", logger=None,
    )
    elapsed = time.time() - t0
    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print(f"\n{'=' * 50}")
    print(f"  DONE: {output_path}")
    print(f"  Duration: {final.duration:.1f}s ({final.duration / 60:.1f} min)")
    print(f"  Size: {size_mb:.1f} MB | Encode: {elapsed:.0f}s")
    print(f"{'=' * 50}")

    final.close()
    for c in clips:
        try:
            c.close()
        except Exception:
            pass
    gc.collect()
    return True


# ── Main ────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("Mobilé Inc. Video v2 — Motion Graphics Edition")
    print("=" * 60)
    ensure_dirs()

    builders = [
        build_scene_01, build_scene_02, build_scene_03,
        build_scene_04, build_scene_05, build_scene_06,
        build_scene_07, build_scene_08, build_scene_09,
    ]

    t_start = time.time()

    # Allow building specific scenes via CLI args
    if len(sys.argv) > 1:
        indices = [int(a) for a in sys.argv[1:]]
    else:
        indices = list(range(1, 10))

    for i in indices:
        t0 = time.time()
        print(f"\n[Scene {i}/9]")
        try:
            builders[i - 1]()
        except Exception as e:
            print(f"  ERROR in scene {i}: {e}")
            import traceback
            traceback.print_exc()
            if '--continue' not in sys.argv:
                sys.exit(1)

    total_build = time.time() - t_start
    print(f"\nScenes built in {total_build:.0f}s ({total_build / 60:.1f} min)")

    if not (len(sys.argv) > 1):
        concatenate_final()

    print(f"Total time: {time.time() - t_start:.0f}s")


if __name__ == "__main__":
    main()
