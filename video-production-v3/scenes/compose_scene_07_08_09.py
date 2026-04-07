"""Compose Scene 7 (SWOT, ~32.8s), Scene 8 (Recommendation, ~55.1s),
and Scene 9 (Closing, ~27.3s).

Renders segments/scene_07.mp4, segments/scene_08.mp4, segments/scene_09.mp4
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from moviepy import (
    ImageClip,
    AudioFileClip,
    concatenate_audioclips,
    concatenate_videoclips,
    CompositeVideoClip,
)
import moviepy.video.fx as vfx
from gfx_light import ken_burns_clip, FPS

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(BASE, "assets")
SEGMENTS = os.path.join(BASE, "segments")
AUDIO_DIR = os.path.join(BASE, "..", "video-production", "audio")

os.makedirs(SEGMENTS, exist_ok=True)


def static_clip(image_path, duration):
    """ImageClip resized to 1920x1080 for a given duration."""
    return ImageClip(image_path).with_duration(duration).resized((1920, 1080))


def build_scene(beats, clips_list):
    """Build clips from beat definitions. Returns list of moviepy clips."""
    clips = []
    for i, (path, dur, clip_type, effect) in enumerate(beats):
        print(f"  Beat {i+1}/{len(beats)}: {os.path.basename(path)} ({dur:.1f}s, {clip_type})")
        if clip_type == "kb":
            c = ken_burns_clip(path, dur, effect=effect, intensity=0.05)
        else:
            c = static_clip(path, dur)
        clips.append(c)
    return clips


def adjust_and_render(beats, clips, audio, out_path):
    """Concatenate clips, adjust last clip to match audio, render to file."""
    video = concatenate_videoclips(clips, method="compose")

    diff = audio.duration - video.duration
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


# ─────────────────────────────────────────────────────────────────────
# Scene 7: Task 3 — SWOT Synthesis (~32.8s)
# ─────────────────────────────────────────────────────────────────────

def compose_scene_07():
    """Scene 7: SWOT Synthesis (~32.8s)."""
    print("=== Composing Scene 7: SWOT Synthesis ===")

    audio = AudioFileClip(os.path.join(AUDIO_DIR, "scene07_swot.mp3"))
    total_dur = audio.duration
    print(f"  Audio duration: {total_dur:.2f}s")

    beats = [
        # 7.1: Transition card (0.0-3.0s)
        (f"{ASSETS}/titles/transition_task3.png", 3.0, "static", None),
        # 7.2: SWOT grid diagram (3.0-7.9s)
        (f"{ASSETS}/diagrams/swot_grid.png", 4.9, "static", None),
        # 7.3: Website SWOT screenshot (7.9-15.4s)
        (f"{ASSETS}/screenshots/task3_swot.png", 7.5, "kb", "zoom_in"),
        # 7.4a: SWOT scrolled — weaknesses/threats (15.4-20.3s)
        (f"{ASSETS}/screenshots/task3_swot_scrolled.png", 4.9, "kb", "pan_right"),
        # 7.4b: SWOT filtered — opportunities/threats (20.3-23.7s)
        (f"{ASSETS}/screenshots/task3_swot_filtered.png", 3.4, "kb", "zoom_in"),
        # 7.5a+7.5b MERGED: SWOT conclusion callout (23.7-32.8s) — same asset
        (f"{ASSETS}/diagrams/swot_conclusion.png", 9.1, "kb", "zoom_in"),
    ]

    planned_dur = sum(b[1] for b in beats)
    print(f"  Planned visual duration: {planned_dur:.2f}s")

    clips = build_scene(beats, [])
    return adjust_and_render(beats, clips, audio, os.path.join(SEGMENTS, "scene_07.mp4"))


# ─────────────────────────────────────────────────────────────────────
# Scene 8: Task 4 — Strategic Recommendation (~55.1s)
# ─────────────────────────────────────────────────────────────────────

def compose_scene_08():
    """Scene 8: Strategic Recommendation (~55.1s)."""
    print("\n=== Composing Scene 8: Strategic Recommendation ===")

    audio = AudioFileClip(os.path.join(AUDIO_DIR, "scene08_recommendation.mp3"))
    total_dur = audio.duration
    print(f"  Audio duration: {total_dur:.2f}s")

    beats = [
        # 8.1: Transition card (0.0-3.0s)
        (f"{ASSETS}/titles/transition_task4.png", 3.0, "static", None),
        # 8.2: Recommendation overview diagram (3.0-7.2s)
        (f"{ASSETS}/diagrams/recommendation_overview.png", 4.2, "static", None),
        # 8.3+8.4a MERGED: 4G recommendation diagram (7.2-16.0s) — same asset
        (f"{ASSETS}/diagrams/recommendation_4g.png", 8.8, "kb", "zoom_in"),
        # 8.4b: Task 4 allocation screenshot (16.0-20.2s)
        (f"{ASSETS}/screenshots/task4_allocation.png", 4.2, "kb", "zoom_in"),
        # 8.5+8.6a MERGED: 5G recommendation diagram (20.2-30.5s) — same asset
        (f"{ASSETS}/diagrams/recommendation_5g.png", 10.3, "kb", "zoom_in"),
        # 8.6b: Task 4 recommendation screenshot (30.5-34.5s)
        (f"{ASSETS}/screenshots/task4_recommendation.png", 4.0, "kb", "zoom_in"),
        # 8.7a+8.7b MERGED: AI recommendation diagram (34.5-43.9s) — same asset
        (f"{ASSETS}/diagrams/recommendation_ai.png", 9.4, "kb", "zoom_in"),
        # 8.8a: Tradeoff honest diagram (43.9-47.9s)
        (f"{ASSETS}/diagrams/tradeoff_honest.png", 4.0, "static", None),
        # 8.8b: Task 4 tradeoffs screenshot (47.9-52.0s)
        (f"{ASSETS}/screenshots/task4_tradeoffs.png", 4.1, "kb", "zoom_in"),
        # 8.9: Recommendation overview — return to three-pillar (52.0-55.1s)
        (f"{ASSETS}/diagrams/recommendation_overview.png", 3.1, "kb", "zoom_out"),
    ]

    planned_dur = sum(b[1] for b in beats)
    print(f"  Planned visual duration: {planned_dur:.2f}s")

    clips = build_scene(beats, [])
    return adjust_and_render(beats, clips, audio, os.path.join(SEGMENTS, "scene_08.mp4"))


# ─────────────────────────────────────────────────────────────────────
# Scene 9: Closing (~27.3s)
# ─────────────────────────────────────────────────────────────────────

def compose_scene_09():
    """Scene 9: Closing (~27.3s). Two audio files concatenated."""
    print("\n=== Composing Scene 9: Closing ===")

    # Concatenate Ava (14.8s) + Andrew (12.4s) audio
    audio = concatenate_audioclips([
        AudioFileClip(os.path.join(AUDIO_DIR, "scene09_closing_ava.mp3")),
        AudioFileClip(os.path.join(AUDIO_DIR, "scene09_closing_andrew.mp3")),
    ])
    total_dur = audio.duration
    print(f"  Audio duration: {total_dur:.2f}s")

    beats = [
        # 9.1: Three waves overview — callback (0.0-3.8s)
        (f"{ASSETS}/diagrams/three_waves_overview.png", 3.8, "kb", "zoom_in"),
        # 9.2: Recommendation overview (3.8-8.9s)
        (f"{ASSETS}/diagrams/recommendation_overview.png", 5.1, "kb", "zoom_in"),
        # 9.3: Home hero — final showcase (8.9-14.8s)
        (f"{ASSETS}/screenshots/home_hero.png", 5.9, "kb", "zoom_out"),
        # 9.4: Website URL callout (14.8-20.4s)
        (f"{ASSETS}/diagrams/website_url.png", 5.6, "static", None),
        # 9.5: Closing card — with fade-to-white in last 0.8s (20.4-27.3s)
        (f"{ASSETS}/titles/closing_card.png", 6.9, "static", None),
    ]

    planned_dur = sum(b[1] for b in beats)
    print(f"  Planned visual duration: {planned_dur:.2f}s")

    clips = build_scene(beats, [])

    # Adjust last clip to match audio
    video = concatenate_videoclips(clips, method="compose")
    diff = total_dur - video.duration
    if abs(diff) > 0.05:
        print(f"  Adjusting last clip by {diff:+.2f}s to match audio")
        last_beat = beats[-1]
        new_dur = last_beat[1] + diff
        clips[-1] = static_clip(last_beat[0], new_dur)
        video = concatenate_videoclips(clips, method="compose")

    # Apply fade-to-white in the last 0.8s of the final video
    video = video.with_effects([vfx.FadeOut(0.8, (255, 255, 255))])
    video = video.with_audio(audio)
    print(f"  Final duration: {video.duration:.2f}s")

    out_path = os.path.join(SEGMENTS, "scene_09.mp4")
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
    compose_scene_07()
    compose_scene_08()
    compose_scene_09()
    print("\nDone! Scenes 7, 8, 9 rendered.")
