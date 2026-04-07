"""Compose Scene 2: Assignment Context — 32.5s"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from moviepy import ImageClip, AudioFileClip, concatenate_videoclips
import moviepy.video.fx as vfx
from gfx_light import ken_burns_clip

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TITLES = os.path.join(BASE, 'assets', 'titles')
SCREENSHOTS = os.path.join(BASE, 'assets', 'screenshots')
AUDIO = os.path.join(BASE, '..', 'video-production', 'audio', 'scene02_context.mp3')
OUTPUT = os.path.join(BASE, 'segments', 'scene_02.mp4')

# Get exact audio duration
audio = AudioFileClip(AUDIO)
AUDIO_DUR = audio.duration
print(f"Audio duration: {AUDIO_DUR}s")

# Beat durations from storyboard (must sum to audio duration)
beats_raw = [3.0, 3.5, 4.2, 3.7, 5.6, 6.9, 5.6]  # = 32.5s
raw_total = sum(beats_raw)

# Adjust last beat to match audio exactly
beats_raw[-1] += (AUDIO_DUR - raw_total)
print(f"Beat durations: {beats_raw}, total: {sum(beats_raw):.3f}s")

# Build clips
clips = []

# Beat 2.1: Transition card "The Context" — fade in
c = ImageClip(os.path.join(TITLES, 'transition_context.png')).with_duration(beats_raw[0])
clips.append(c)

# Beat 2.2: Website full homepage — Ken Burns zoom_in
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'home_full.png'), beats_raw[1],
                   effect='zoom_in', intensity=0.04)
clips.append(c)

# Beat 2.3: Overview page — Ken Burns pan_right
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'overview_page.png'), beats_raw[2],
                   effect='pan_right', intensity=0.05)
clips.append(c)

# Beat 2.4a: Tasks overview — Ken Burns zoom_in
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'home_tasks.png'), beats_raw[3],
                   effect='zoom_in', intensity=0.04)
clips.append(c)

# Beat 2.4b: Task 2 framework tabs — Ken Burns pan_left
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'task2_tabs.png'), beats_raw[4],
                   effect='pan_left', intensity=0.05)
clips.append(c)

# Beat 2.5: Task 4 recommendation — Ken Burns zoom_in
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'task4_top.png'), beats_raw[5],
                   effect='zoom_in', intensity=0.05)
clips.append(c)

# Beat 2.6: Homepage hero — Ken Burns zoom_out (final establishing shot)
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'home_hero.png'), beats_raw[6],
                   effect='zoom_out', intensity=0.06)
clips.append(c)

# Concatenate all beats
final = concatenate_videoclips(clips, method='compose')
print(f"Video duration before audio: {final.duration}s")

# Attach audio
final = final.with_audio(audio)

# Ensure output dir exists
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

# Export
print(f"Rendering to {OUTPUT}...")
final.write_videofile(OUTPUT, fps=24, codec='libx264', audio_codec='aac',
                      bitrate='6000k', logger='bar')

# Cleanup
final.close()
audio.close()
for c in clips:
    c.close()

print(f"\nScene 2 complete: {OUTPUT}")
