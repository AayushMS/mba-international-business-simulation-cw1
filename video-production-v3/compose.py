"""
compose.py — Assembles 9 scene segments into the final video.

Strategy:
1. Use ffmpeg concat demuxer (stream-copy) for fast concatenation — no re-encode.
2. Apply 0.5s white fade-in via ffmpeg lavfi filter on the concat output — re-encodes
   the full video but with hardware-friendly settings.

This avoids moviepy's frame-by-frame Python loop which is too slow for a 381s video.
"""

import os
import subprocess
import tempfile

FFMPEG = "/home/aayushms/.local/lib/python3.12/site-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SEGMENTS_DIR = os.path.join(BASE_DIR, "segments")
OUTPUT_DIR = os.path.join(BASE_DIR, "output")
OUTPUT_PATH = os.path.join(OUTPUT_DIR, "mobile_inc_v3.mp4")
SCENE_COUNT = 9


def run(cmd, check=True):
    print(f"$ {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout[-2000:])
    if result.stderr:
        print(result.stderr[-2000:])
    if check and result.returncode != 0:
        raise RuntimeError(f"Command failed with code {result.returncode}")
    return result


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Step 1: Build concat list file
    concat_list = os.path.join(OUTPUT_DIR, "concat_list.txt")
    with open(concat_list, "w") as f:
        for i in range(1, SCENE_COUNT + 1):
            path = os.path.join(SEGMENTS_DIR, f"scene_{i:02d}.mp4")
            f.write(f"file '{path}'\n")
    print(f"Wrote {concat_list}")

    # Step 2: Concatenate + apply white fade-in in one ffmpeg pass
    # fade filter: t=in (fade in), st=0 (start time), d=0.5 (duration), c=white
    print("Running ffmpeg concat + white fade-in encode...")
    run([
        FFMPEG, "-y",
        "-f", "concat", "-safe", "0", "-i", concat_list,
        "-vf", "fade=t=in:st=0:d=0.5:color=white",
        "-c:v", "libx264", "-b:v", "8000k", "-preset", "medium",
        "-pix_fmt", "yuv420p",
        "-profile:v", "high",
        "-c:a", "aac", "-b:a", "192k",
        "-r", "24",
        "-movflags", "+faststart",
        OUTPUT_PATH,
    ])

    # Verify
    probe = run([
        FFMPEG, "-i", OUTPUT_PATH,
    ], check=False)
    # ffmpeg prints info to stderr
    info = probe.stderr
    print("\n--- Output file info ---")
    for line in info.splitlines():
        if any(k in line for k in ("Duration", "Video:", "Audio:", "Stream")):
            print(line)

    size_mb = os.path.getsize(OUTPUT_PATH) / (1024 * 1024)
    print(f"\nDone. {OUTPUT_PATH} ({size_mb:.1f} MB)")


if __name__ == "__main__":
    main()
