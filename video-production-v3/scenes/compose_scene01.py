"""Compose Scene 1: Cold Open / Hook — 27.14s"""

import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from moviepy import ImageClip, AudioFileClip, concatenate_videoclips
import moviepy.video.fx as vfx
from gfx_light import ken_burns_clip

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TITLES = os.path.join(BASE, 'assets', 'titles')
SCREENSHOTS = os.path.join(BASE, 'assets', 'screenshots')
AUDIO = os.path.join(BASE, '..', 'video-production', 'audio', 'scene01_hook.mp3')
OUTPUT = os.path.join(BASE, 'segments', 'scene_01.mp4')

# Get exact audio duration
audio = AudioFileClip(AUDIO)
AUDIO_DUR = audio.duration
print(f"Audio duration: {AUDIO_DUR}s")

# Beat durations from storyboard (must sum to audio duration)
beats_raw = [4.4, 6.8, 3.9, 4.0, 8.0]  # = 27.1s
raw_total = sum(beats_raw)

# Adjust last beat to match audio exactly
beats_raw[-1] += (AUDIO_DUR - raw_total)
print(f"Beat durations: {beats_raw}, total: {sum(beats_raw):.3f}s")

# Build clips
clips = []

# Beat 1.1: Title card "Three technology waves" — fade in from white
c = ImageClip(os.path.join(TITLES, 'opening_hook.png')).with_duration(beats_raw[0])
c = c.with_effects([vfx.FadeIn(0.5)])
clips.append(c)

# Beat 1.2: Website hero — Ken Burns zoom_in
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'home_hero.png'), beats_raw[1],
                   effect='zoom_in', intensity=0.06)
clips.append(c)

# Beat 1.3: Three-wave dynamics — Ken Burns pan_right
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'home_waves.png'), beats_raw[2],
                   effect='pan_right', intensity=0.05)
clips.append(c)

# Beat 1.4: Key metrics dashboard — Ken Burns zoom_in
c = ken_burns_clip(os.path.join(SCREENSHOTS, 'home_metrics.png'), beats_raw[3],
                   effect='zoom_in', intensity=0.05)
clips.append(c)

# Beat 1.5+1.6: "Mobilé Inc." title card — crossfade in, hold through end
c = ImageClip(os.path.join(TITLES, 'title_mobile_inc.png')).with_duration(beats_raw[4])
c = c.with_effects([vfx.CrossFadeIn(0.4)])
clips.append(c)

# Concatenate all beats — use compose method for crossfade support
# Only beat 1.5 has CrossFadeIn, so use a small negative padding there
# Simpler: just concatenate with method='chain' (hard cuts) since crossfade on 1.5
# is handled by its own CrossFadeIn effect layered via 'compose'
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

print(f"\nScene 1 complete: {OUTPUT}")
