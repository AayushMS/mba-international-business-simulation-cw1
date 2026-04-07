"""Compose Scene 5 (Task 1 — Strategy Process, ~38.4s) and Scene 6 (Task 2 — Deep Analysis, ~87.1s).

Renders segments/scene_05.mp4 and segments/scene_06.mp4
"""

import os
import sys

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


def compose_scene_05():
    """Scene 5: Task 1 — Strategy Process (~38.4s)."""
    print("=== Composing Scene 5: Task 1 — Strategy Process ===")

    audio = AudioFileClip(os.path.join(AUDIO_DIR, "scene05_task1.mp3"))
    total_dur = audio.duration
    print(f"  Audio duration: {total_dur:.2f}s")

    # Beat definitions: (asset_path, duration, type, effect)
    # Beats 5.2 + 5.3a + 5.3b MERGED — same asset three_horizons.png (4.8+5.6+3.4 = 13.8s)
    # Beats using same asset merged into single longer clips per instructions
    beats = [
        # 5.1: Transition card "Task 1 / Strategy Process" (0.0-3.0s)
        (f"{ASSETS}/titles/transition_task1.png", 3.0, "static", None),
        # 5.2+5.3a+5.3b MERGED: Three Horizons diagram (3.0-16.8s) — same asset
        (f"{ASSETS}/diagrams/three_horizons.png", 13.8, "kb", "zoom_in"),
        # 5.4: Vision statement (16.8-26.3s)
        (f"{ASSETS}/diagrams/vision_statement.png", 9.5, "static", None),
        # 5.5: Strategic goals (26.3-33.7s)
        (f"{ASSETS}/diagrams/strategic_goals.png", 7.4, "static", None),
        # 5.6: Cash constraint (33.7-38.4s)
        (f"{ASSETS}/diagrams/cash_constraint.png", 4.7, "static", None),
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

    out_path = os.path.join(SEGMENTS, "scene_05.mp4")
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


def compose_scene_06():
    """Scene 6: Task 2 — Deep Analysis (~87.1s).

    Audio: Ava (43.0s) + Andrew (44.1s) = 87.1s concatenated.
    """
    print("\n=== Composing Scene 6: Task 2 — Deep Analysis ===")

    # Concatenate two audio files
    audio = concatenate_audioclips([
        AudioFileClip(os.path.join(AUDIO_DIR, "scene06_analysis_ava.mp3")),
        AudioFileClip(os.path.join(AUDIO_DIR, "scene06_analysis_andrew.mp3")),
    ])
    total_dur = audio.duration
    print(f"  Audio duration: {total_dur:.2f}s")

    # Beat definitions: (asset_path, duration, type, effect)
    # Merged beats that share same asset:
    #   6.5+6.6 -> bcg_matrix.png (4.6+7.2 = 11.8s)
    #   6.7a+6.7b -> task2_bowmans.png (4.4+4.4 = 8.8s)
    beats = [
        # --- Ava's Part (0.0 - 43.0s) ---
        # 6.1: Transition card "Task 2 / Internal & External Analysis" (0.0-3.0s)
        (f"{ASSETS}/titles/transition_task2.png", 3.0, "static", None),
        # 6.2: VRIO summary diagram (3.0-8.8s)
        (f"{ASSETS}/diagrams/vrio_summary.png", 5.8, "static", None),
        # 6.3: VRIO expanded screenshot (8.8-15.4s)
        (f"{ASSETS}/screenshots/task2_vrio_expanded.png", 6.6, "kb", "zoom_in"),
        # 6.4: Value Chain finding (15.4-22.4s)
        (f"{ASSETS}/diagrams/value_chain_finding.png", 7.0, "static", None),
        # 6.5+6.6 MERGED: BCG Matrix (22.4-34.2s) — same asset
        (f"{ASSETS}/diagrams/bcg_matrix.png", 11.8, "kb", "zoom_in"),
        # 6.7a+6.7b MERGED: Bowman's screenshot (34.2-43.0s) — same asset
        (f"{ASSETS}/screenshots/task2_bowmans.png", 8.8, "kb", "zoom_in"),

        # --- Andrew's Part (43.0 - 87.1s) ---
        # 6.8: Porter's finding (43.0-50.3s)
        (f"{ASSETS}/diagrams/porters_finding.png", 7.3, "static", None),
        # 6.9: CSF gap (50.3-58.0s)
        (f"{ASSETS}/diagrams/csf_gap.png", 7.7, "static", None),
        # 6.10: Task 2 integration screenshot (58.0-61.6s)
        (f"{ASSETS}/screenshots/task2_integration.png", 3.6, "kb", "zoom_in"),
        # 6.11a: International strategy diagram (61.6-69.0s)
        (f"{ASSETS}/diagrams/international_strategy.png", 7.4, "static", None),
        # 6.11b: Bartlett screenshot (69.0-76.2s)
        (f"{ASSETS}/screenshots/task2_bartlett.png", 7.2, "kb", "pan_right"),
        # 6.12: Entry mode screenshot (76.2-82.1s)
        (f"{ASSETS}/screenshots/task2_entry_mode.png", 5.9, "kb", "zoom_in"),
        # 6.13: Window closing callout (82.1-87.1s)
        (f"{ASSETS}/diagrams/window_closing.png", 5.0, "static", None),
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

    out_path = os.path.join(SEGMENTS, "scene_06.mp4")
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
    compose_scene_05()
    compose_scene_06()
    print("\nDone! Both scenes rendered.")
