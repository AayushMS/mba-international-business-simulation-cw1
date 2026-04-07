#!/usr/bin/env python3
"""Video compositor for Mobile Inc. presentation video.

Assembles 9 scenes from screenshots, title cards, and audio narration
into individual MP4 segments, then concatenates them into a final video.

Uses moviepy 2.x API with PIL for image transforms and Ken Burns effects.
"""

import os
import sys
import time
import gc
import numpy as np
from PIL import Image
from moviepy import (
    ImageClip, AudioFileClip, VideoFileClip, VideoClip,
    CompositeVideoClip, concatenate_videoclips, concatenate_audioclips, AudioClip,
)
from moviepy.video.fx import CrossFadeIn, FadeIn

# === PATHS ===
BASE = "/home/aayushms/work/pet_projects/mba/mba-international-business-simulation-cw1/video-production"
SS = os.path.join(BASE, "screenshots")
FR = os.path.join(BASE, "frames")
AU = os.path.join(BASE, "audio")
SEG = os.path.join(BASE, "segments")
OUT = os.path.join(BASE, "output")

W, H = 1920, 1080
FPS = 24


def ensure_dirs():
    os.makedirs(SEG, exist_ok=True)
    os.makedirs(OUT, exist_ok=True)


def ss_path(name):
    """Screenshot path helper."""
    return os.path.join(SS, name)


def fr_path(name):
    """Frame/title card path helper."""
    return os.path.join(FR, name)


def au_path(name):
    """Audio path helper."""
    return os.path.join(AU, name)


# === IMAGE LOADING ===

def load_image(path, target_w=W, target_h=H):
    """Load image and resize to target dimensions."""
    img = Image.open(path).convert("RGB")
    img = img.resize((target_w, target_h), Image.LANCZOS)
    return np.array(img)


# === CLIP BUILDERS ===

def make_clip_static(img_path, duration):
    """Create a static image clip at 1920x1080."""
    arr = load_image(img_path)
    return ImageClip(arr).with_duration(duration)


def make_clip_zoom(img_path, duration, zoom_start=1.0, zoom_end=1.06):
    """Image clip with Ken Burns zoom effect."""
    scale = max(zoom_end, zoom_start) + 0.02
    big_w, big_h = int(W * scale), int(H * scale)
    img = Image.open(img_path).convert("RGB")
    img = img.resize((big_w, big_h), Image.LANCZOS)
    arr = np.array(img)

    dur = float(duration)

    def make_frame(t):
        progress = t / dur if dur > 0 else 0
        progress = min(max(progress, 0.0), 1.0)
        current_zoom = zoom_start + (zoom_end - zoom_start) * progress
        crop_w = int(W / current_zoom * scale)
        crop_h = int(H / current_zoom * scale)
        crop_w = min(crop_w, big_w)
        crop_h = min(crop_h, big_h)
        x = (big_w - crop_w) // 2
        y = (big_h - crop_h) // 2
        cropped = arr[y:y + crop_h, x:x + crop_w]
        result = Image.fromarray(cropped).resize((W, H), Image.LANCZOS)
        return np.array(result)

    return VideoClip(make_frame, duration=dur)


def make_clip_pan(img_path, duration, direction="right", amount=0.05):
    """Image clip with Ken Burns pan effect."""
    extra = 1.0 + amount
    big_w, big_h = int(W * extra), int(H * extra)
    img = Image.open(img_path).convert("RGB")
    img = img.resize((big_w, big_h), Image.LANCZOS)
    arr = np.array(img)

    dur = float(duration)

    def make_frame(t):
        progress = t / dur if dur > 0 else 0
        progress = min(max(progress, 0.0), 1.0)
        max_x = big_w - W
        max_y = big_h - H
        if direction == "right":
            x = int(max_x * progress)
            y = max_y // 2
        elif direction == "left":
            x = int(max_x * (1 - progress))
            y = max_y // 2
        elif direction == "down":
            x = max_x // 2
            y = int(max_y * progress)
        else:  # up
            x = max_x // 2
            y = int(max_y * (1 - progress))
        x = min(max(x, 0), max_x)
        y = min(max(y, 0), max_y)
        cropped = arr[y:y + H, x:x + W]
        return np.ascontiguousarray(cropped)

    return VideoClip(make_frame, duration=dur)


# === AUDIO HELPERS ===

def make_silence(duration, fps=44100):
    """Create a silent audio clip."""
    return AudioClip(
        lambda t: np.zeros((1, 2)) if np.isscalar(t) else np.zeros((len(t), 2)),
        duration=duration,
        fps=fps,
    )


def combine_audio(parts):
    """Combine audio file paths and silence durations into one audio clip.
    parts: list of str (file path) or float (silence duration in seconds)
    """
    clips = []
    for p in parts:
        if isinstance(p, str):
            clips.append(AudioFileClip(p))
        elif isinstance(p, (int, float)):
            clips.append(make_silence(p))
    return concatenate_audioclips(clips)


# === EFFECT DISPATCHER ===

def build_effect_clip(path, duration, effect):
    """Build a single clip with the specified effect."""
    if effect == "static":
        return make_clip_static(path, duration)
    elif effect == "zoom_in":
        return make_clip_zoom(path, duration, 1.0, 1.06)
    elif effect == "zoom_out":
        return make_clip_zoom(path, duration, 1.06, 1.0)
    elif effect == "zoom_slight":
        return make_clip_zoom(path, duration, 1.0, 1.03)
    elif effect == "pan_right":
        return make_clip_pan(path, duration, "right")
    elif effect == "pan_left":
        return make_clip_pan(path, duration, "left")
    elif effect == "pan_down":
        return make_clip_pan(path, duration, "down")
    else:
        return make_clip_static(path, duration)


# === SCENE BUILDER ===

def build_scene(image_specs, audio_clip, output_path, crossfade=0.4):
    """Build a scene from image specs and an audio clip, write to file.

    image_specs: list of (path, duration, effect)
    audio_clip: AudioFileClip or combined audio
    output_path: where to save segment
    crossfade: crossfade duration between clips (0 for hard cuts)
    """
    clips = []
    for path, dur, effect in image_specs:
        clips.append(build_effect_clip(path, dur, effect))

    # Concatenate with crossfade between clips
    if crossfade > 0 and len(clips) > 1:
        for i in range(1, len(clips)):
            clips[i] = clips[i].with_effects([CrossFadeIn(crossfade)])
        video = concatenate_videoclips(clips, padding=-crossfade, method="compose")
    else:
        video = concatenate_videoclips(clips, method="chain")

    # Match video duration to audio
    audio_dur = audio_clip.duration
    video = video.with_duration(audio_dur)
    video = video.with_audio(audio_clip)

    video.write_videofile(
        output_path,
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        preset="ultrafast",
        logger=None,
    )

    # Cleanup
    video.close()
    for c in clips:
        try:
            c.close()
        except Exception:
            pass
    try:
        audio_clip.close()
    except Exception:
        pass
    gc.collect()


# === SCENE DEFINITIONS ===

def scene01():
    """Cold Open (27.1s)"""
    audio = AudioFileClip(au_path("scene01_hook.mp3"))
    print(f"  Scene 1: Cold Open ({audio.duration:.1f}s)")

    specs = [
        (fr_path("title_cold_open.png"), 4.0, "static"),
        (fr_path("title_mobile_inc.png"), 3.0, "static"),
        (ss_path("home_hero.png"), 5.0, "zoom_in"),
        (ss_path("task2_bcg.png"), 5.0, "pan_right"),
        (ss_path("task3_swot.png"), 5.0, "zoom_in"),
        (ss_path("task4_allocation.png"), 5.1, "pan_left"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene01.mp4"))


def scene02():
    """Assignment Context (32.5s)"""
    audio = AudioFileClip(au_path("scene02_context.mp3"))
    print(f"  Scene 2: Assignment Context ({audio.duration:.1f}s)")

    specs = [
        (ss_path("home_hero.png"), 8.0, "zoom_slight"),
        (ss_path("home_waves.png"), 8.0, "pan_right"),
        (ss_path("home_tasks.png"), 8.0, "zoom_in"),
        (ss_path("overview_page.png"), 8.5, "pan_left"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene02.mp4"))


def scene03():
    """Three Waves (51.5s combined)"""
    audio = combine_audio([
        au_path("scene03_waves_ava.mp3"),
        0.3,
        au_path("scene03_waves_andrew.mp3"),
    ])
    print(f"  Scene 3: Three Waves ({audio.duration:.1f}s)")

    specs = [
        (ss_path("home_waves.png"), 12.0, "zoom_in"),
        (ss_path("home_metrics.png"), 10.0, "pan_right"),
        (ss_path("task2_updated_top.png"), 10.0, "zoom_slight"),
        (ss_path("home_hero.png"), 5.5, "pan_left"),
        (ss_path("home_tasks.png"), 14.0, "zoom_in"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene03.mp4"))


def scene04():
    """What We Built (29.7s)"""
    audio = AudioFileClip(au_path("scene04_built.mp3"))
    print(f"  Scene 4: What We Built ({audio.duration:.1f}s)")

    specs = [
        (ss_path("nav_seq_home.png"), 5.0, "zoom_in"),
        (ss_path("nav_seq_task1.png"), 5.0, "pan_right"),
        (ss_path("nav_seq_task2.png"), 5.5, "zoom_slight"),
        (ss_path("nav_seq_task3.png"), 5.0, "pan_left"),
        (ss_path("nav_seq_task4.png"), 9.2, "zoom_in"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene04.mp4"))


def scene05():
    """Task 1 - Strategy Process (38.4s)"""
    audio = AudioFileClip(au_path("scene05_task1.mp3"))
    print(f"  Scene 5: Task 1 ({audio.duration:.1f}s)")

    specs = [
        (fr_path("transition_task1.png"), 2.5, "static"),
        (ss_path("task1_top.png"), 8.0, "zoom_in"),
        (ss_path("task1_vision.png"), 9.0, "pan_right"),
        (ss_path("task1_goals.png"), 9.0, "zoom_slight"),
        (ss_path("task1_smart.png"), 9.9, "pan_left"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene05.mp4"))


def scene06():
    """Task 2 - Analysis (87.1s combined)"""
    audio = combine_audio([
        au_path("scene06_analysis_ava.mp3"),
        0.4,
        au_path("scene06_analysis_andrew.mp3"),
    ])
    print(f"  Scene 6: Task 2 Analysis ({audio.duration:.1f}s)")

    specs = [
        (fr_path("transition_task2.png"), 2.5, "static"),
        (ss_path("task2_vrio.png"), 8.0, "zoom_in"),
        (ss_path("task2_vrio_expanded.png"), 8.0, "pan_right"),
        (ss_path("task2_valuechain.png"), 7.0, "zoom_slight"),
        (ss_path("task2_bcg.png"), 8.0, "pan_left"),
        (ss_path("task2_bowmans.png"), 8.0, "zoom_in"),
        (ss_path("task2_pestle.png"), 7.0, "pan_right"),
        (ss_path("task2_porters.png"), 7.0, "zoom_in"),
        (ss_path("task2_csf.png"), 7.0, "pan_left"),
        (ss_path("task2_bartlett.png"), 8.0, "zoom_slight"),
        (ss_path("task2_entry_mode.png"), 8.0, "pan_right"),
        (ss_path("task2_ansoff.png"), 7.1, "zoom_in"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene06.mp4"))


def scene07():
    """Task 3 - SWOT (32.8s)"""
    audio = AudioFileClip(au_path("scene07_swot.mp3"))
    print(f"  Scene 7: SWOT ({audio.duration:.1f}s)")

    specs = [
        (fr_path("transition_task3.png"), 2.5, "static"),
        (ss_path("task3_swot.png"), 10.0, "zoom_in"),
        (ss_path("task3_swot_scrolled.png"), 10.0, "pan_right"),
        (ss_path("task3_swot_filtered.png"), 10.3, "zoom_slight"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene07.mp4"))


def scene08():
    """Task 4 - Recommendation (55.1s)"""
    audio = AudioFileClip(au_path("scene08_recommendation.mp3"))
    print(f"  Scene 8: Recommendation ({audio.duration:.1f}s)")

    specs = [
        (fr_path("transition_task4.png"), 2.5, "static"),
        (ss_path("task4_top.png"), 10.0, "zoom_in"),
        (ss_path("task4_recommendation.png"), 14.0, "pan_right"),
        (ss_path("task4_allocation.png"), 14.0, "zoom_slight"),
        (ss_path("task4_tradeoffs.png"), 14.6, "pan_left"),
    ]
    build_scene(specs, audio, os.path.join(SEG, "scene08.mp4"))


def scene09():
    """Closing (27.3s combined)"""
    audio = combine_audio([
        au_path("scene09_closing_ava.mp3"),
        0.3,
        au_path("scene09_closing_andrew.mp3"),
    ])
    print(f"  Scene 9: Closing ({audio.duration:.1f}s)")

    specs = [
        (ss_path("home_hero.png"), 10.0, "zoom_out"),
        (fr_path("closing_card.png"), 17.3, "static"),
    ]
    # Longer crossfade for closing card fade-in
    build_scene(specs, audio, os.path.join(SEG, "scene09.mp4"), crossfade=1.0)


# === FINAL CONCATENATION ===

def concatenate_final():
    """Load all 9 segments and concatenate into final output."""
    print("\n--- Final Assembly ---")
    segment_files = [os.path.join(SEG, f"scene{i:02d}.mp4") for i in range(1, 10)]

    for sf in segment_files:
        if not os.path.exists(sf):
            print(f"  ERROR: Missing segment {sf}")
            return False

    clips = []
    total_dur = 0
    for sf in segment_files:
        clip = VideoFileClip(sf)
        clips.append(clip)
        total_dur += clip.duration
        print(f"  Loaded {os.path.basename(sf)}: {clip.duration:.1f}s")

    print(f"  Total duration before crossfade: {total_dur:.1f}s ({total_dur / 60:.1f} min)")

    # Add brief crossfade between segments
    cf_dur = 0.3
    for i in range(1, len(clips)):
        clips[i] = clips[i].with_effects([CrossFadeIn(cf_dur)])

    final = concatenate_videoclips(clips, padding=-cf_dur, method="compose")
    output_path = os.path.join(OUT, "mobile_inc_presentation.mp4")

    print(f"  Writing final video...")
    print(f"  Settings: preset=medium, bitrate=6000k, fps={FPS}")
    t0 = time.time()

    final.write_videofile(
        output_path,
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        preset="medium",
        bitrate="6000k",
        logger=None,
    )

    elapsed = time.time() - t0
    final_duration = final.duration

    final.close()
    for c in clips:
        try:
            c.close()
        except Exception:
            pass
    gc.collect()

    # Report
    file_size = os.path.getsize(output_path)
    size_mb = file_size / (1024 * 1024)
    print(f"\n{'=' * 50}")
    print(f"  DONE")
    print(f"{'=' * 50}")
    print(f"  Output: {output_path}")
    print(f"  Duration: {final_duration:.1f}s ({final_duration / 60:.1f} min)")
    print(f"  File size: {size_mb:.1f} MB")
    print(f"  Encode time: {elapsed:.0f}s")
    return True


# === MAIN ===

def main():
    print("=" * 60)
    print("Mobile Inc. Video Compositor")
    print("=" * 60)

    ensure_dirs()

    scene_builders = [
        scene01, scene02, scene03, scene04, scene05,
        scene06, scene07, scene08, scene09,
    ]

    t_start = time.time()

    for i, builder in enumerate(scene_builders, 1):
        t0 = time.time()
        print(f"\n[{i}/9] Building scene...")
        try:
            builder()
            elapsed = time.time() - t0
            seg_path = os.path.join(SEG, f"scene{i:02d}.mp4")
            seg_size = os.path.getsize(seg_path) / (1024 * 1024)
            print(f"  Done in {elapsed:.1f}s ({seg_size:.1f} MB)")
        except Exception as e:
            print(f"  ERROR in scene {i}: {e}")
            import traceback
            traceback.print_exc()
            sys.exit(1)

    total_build = time.time() - t_start
    print(f"\nAll 9 scenes built in {total_build:.0f}s ({total_build / 60:.1f} min)")

    concatenate_final()

    total_time = time.time() - t_start
    print(f"\nTotal time: {total_time:.0f}s ({total_time / 60:.1f} min)")


if __name__ == "__main__":
    main()
