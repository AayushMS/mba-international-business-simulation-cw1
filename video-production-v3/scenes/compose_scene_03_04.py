"""Compose Scene 3 (Three Waves, ~51.5s) and Scene 4 (What We Built, ~29.7s).

Renders segments/scene_03.mp4 and segments/scene_04.mp4
"""

import os
import sys

# Ensure we can import gfx_light from parent dir
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from moviepy import (
    ImageClip,
    AudioFileClip,
    concatenate_audioclips,
    concatenate_videoclips,
)
from gfx_light import ken_burns_clip, FPS

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(BASE, "assets")
SEGMENTS = os.path.join(BASE, "segments")
AUDIO_DIR = os.path.join(BASE, "..", "video-production", "audio")

os.makedirs(SEGMENTS, exist_ok=True)


def static_clip(image_path, duration):
    """ImageClip resized to 1920x1080 for a given duration."""
    return ImageClip(image_path).with_duration(duration).resized((1920, 1080))


def compose_scene_03():
    """Scene 3: Three Waves (~51.5s)."""
    print("=== Composing Scene 3: Three Waves ===")

    # Audio: concatenate two files
    audio = concatenate_audioclips([
        AudioFileClip(os.path.join(AUDIO_DIR, "scene03_waves_ava.mp3")),
        AudioFileClip(os.path.join(AUDIO_DIR, "scene03_waves_andrew.mp3")),
    ])
    total_dur = audio.duration
    print(f"  Audio duration: {total_dur:.2f}s")

    # Beat definitions: (asset_path, duration, type, effect)
    # type: 'static' or 'kb' (ken burns)
    beats = [
        # 3.1: Title card (0.0-3.0s)
        (f"{ASSETS}/titles/transition_three_waves.png", 3.0, "static", None),
        # 3.2: Three waves overview (3.0-7.6s)
        (f"{ASSETS}/diagrams/three_waves_overview.png", 4.6, "static", None),
        # 3.3: Home waves screenshot (7.6-14.8s)
        (f"{ASSETS}/screenshots/home_waves.png", 7.2, "kb", "pan_right"),
        # 3.4a: 5G adoption stats (14.8-22.0s)
        (f"{ASSETS}/diagrams/5g_adoption_stats.png", 7.2, "static", None),
        # 3.4b: Zero 5G (22.0-29.1s)
        (f"{ASSETS}/diagrams/zero_5g.png", 7.1, "static", None),
        # 3.5a+3.5b MERGED: AI timeline (29.1-37.5s) — same asset, one clip
        (f"{ASSETS}/diagrams/ai_timeline.png", 8.4, "kb", "zoom_in"),
        # 3.6: Cash constraint (37.5-42.7s)
        (f"{ASSETS}/diagrams/cash_constraint.png", 5.2, "static", None),
        # 3.7a: Three waves overview again (42.7-47.9s)
        (f"{ASSETS}/diagrams/three_waves_overview.png", 5.2, "kb", "zoom_out"),
        # 3.7b: Tradeoff honest (47.9-51.5s)
        (f"{ASSETS}/diagrams/tradeoff_honest.png", 3.6, "static", None),
    ]

    # Sum planned durations
    planned_dur = sum(b[1] for b in beats)
    print(f"  Planned visual duration: {planned_dur:.2f}s")

    # Build clips
    clips = []
    for i, (path, dur, clip_type, effect) in enumerate(beats):
        print(f"  Beat {i+1}/{len(beats)}: {os.path.basename(path)} ({dur:.1f}s, {clip_type})")
        if clip_type == "kb":
            c = ken_burns_clip(path, dur, effect=effect, intensity=0.05)
        else:
            c = static_clip(path, dur)
        clips.append(c)

    video = concatenate_videoclips(clips, method="compose")

    # Adjust last clip if total doesn't match audio
    diff = total_dur - video.duration
    if abs(diff) > 0.05:
        print(f"  Adjusting last clip by {diff:+.2f}s to match audio")
        last_beat = beats[-1]
        new_dur = last_beat[1] + diff
        if last_beat[2] == "kb":
            clips[-1] = ken_burns_clip(last_beat[0], new_dur, effect=last_beat[3], intensity=0.05)
        else:
            clips[-1] = static_clip(last_beat[0], new_dur)
        video = concatenate_videoclips(clips, method="compose")

    video = video.with_audio(audio)
    print(f"  Final duration: {video.duration:.2f}s")

    out_path = os.path.join(SEGMENTS, "scene_03.mp4")
    video.write_videofile(
        out_path,
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        bitrate="6000k",
        preset="medium",
        threads=4,
        logger="bar",
    )
    print(f"  Written: {out_path}")
    return out_path


def compose_scene_04():
    """Scene 4: What We Built (~29.7s)."""
    print("\n=== Composing Scene 4: What We Built ===")

    audio = AudioFileClip(os.path.join(AUDIO_DIR, "scene04_built.mp3"))
    total_dur = audio.duration
    print(f"  Audio duration: {total_dur:.2f}s")

    beats = [
        # 4.1: Title card (0.0-3.0s)
        (f"{ASSETS}/titles/transition_what_we_built.png", 3.0, "static", None),
        # 4.2: Home hero (3.0-8.1s)
        (f"{ASSETS}/screenshots/home_hero.png", 5.1, "kb", "zoom_in"),
        # 4.3: Task2 tabs (8.1-14.8s)
        (f"{ASSETS}/screenshots/task2_tabs.png", 6.7, "kb", "pan_left"),
        # 4.4a: Task2 VRIO (14.8-19.1s)
        (f"{ASSETS}/screenshots/task2_vrio.png", 4.3, "kb", "zoom_in"),
        # 4.4b: Task2 Porters (19.1-23.8s)
        (f"{ASSETS}/screenshots/task2_porters.png", 4.7, "kb", "pan_right"),
        # 4.5: Home metrics (23.8-29.7s)
        (f"{ASSETS}/screenshots/home_metrics.png", 5.9, "kb", "zoom_out"),
    ]

    planned_dur = sum(b[1] for b in beats)
    print(f"  Planned visual duration: {planned_dur:.2f}s")

    clips = []
    for i, (path, dur, clip_type, effect) in enumerate(beats):
        print(f"  Beat {i+1}/{len(beats)}: {os.path.basename(path)} ({dur:.1f}s, {clip_type})")
        if clip_type == "kb":
            c = ken_burns_clip(path, dur, effect=effect, intensity=0.05)
        else:
            c = static_clip(path, dur)
        clips.append(c)

    video = concatenate_videoclips(clips, method="compose")

    # Adjust last clip if total doesn't match audio
    diff = total_dur - video.duration
    if abs(diff) > 0.05:
        print(f"  Adjusting last clip by {diff:+.2f}s to match audio")
        last_beat = beats[-1]
        new_dur = last_beat[1] + diff
        if last_beat[2] == "kb":
            clips[-1] = ken_burns_clip(last_beat[0], new_dur, effect=last_beat[3], intensity=0.05)
        else:
            clips[-1] = static_clip(last_beat[0], new_dur)
        video = concatenate_videoclips(clips, method="compose")

    video = video.with_audio(audio)
    print(f"  Final duration: {video.duration:.2f}s")

    out_path = os.path.join(SEGMENTS, "scene_04.mp4")
    video.write_videofile(
        out_path,
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        bitrate="6000k",
        preset="medium",
        threads=4,
        logger="bar",
    )
    print(f"  Written: {out_path}")
    return out_path


if __name__ == "__main__":
    compose_scene_03()
    compose_scene_04()
    print("\nDone! Both scenes rendered.")
