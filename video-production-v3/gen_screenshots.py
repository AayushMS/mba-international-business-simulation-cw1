"""Generate framed website screenshots for the video.

Loads each screenshot, applies border+shadow framing, centers on a 1920x1080
off-white background, and saves to assets/screenshots/.
"""

import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

from gfx_light import load_screenshot, frame_screenshot, new_frame, C, W, H

SOURCE_DIR = "/home/aayushms/work/pet_projects/mba/mba-international-business-simulation-cw1/video-production/screenshots"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "assets", "screenshots")

SCREENSHOTS = [
    "home_hero.png",
    "home_waves.png",
    "home_metrics.png",
    "home_full.png",
    "overview_page.png",
    "home_tasks.png",
    "task2_tabs.png",
    "task4_top.png",
    "task2_vrio.png",
    "task2_porters.png",
    "task2_vrio_expanded.png",
    "task2_bowmans.png",
    "task2_integration.png",
    "task2_bartlett.png",
    "task2_entry_mode.png",
    "task3_swot.png",
    "task3_swot_scrolled.png",
    "task3_swot_filtered.png",
    "task1_goals.png",
    "task4_allocation.png",
    "task4_recommendation.png",
    "task4_tradeoffs.png",
]


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    success = 0
    for filename in SCREENSHOTS:
        src = os.path.join(SOURCE_DIR, filename)
        if not os.path.exists(src):
            print(f"WARNING: missing source file, skipping: {src}")
            continue

        img = load_screenshot(src)
        framed = frame_screenshot(img)

        bg = new_frame()
        fx, fy = framed.size
        paste_x = (W - fx) // 2
        paste_y = (H - fy) // 2
        bg.paste(framed, (paste_x, paste_y), framed)

        out_path = os.path.join(OUTPUT_DIR, filename)
        bg.convert("RGB").save(out_path)
        print(f"  OK  {filename}")
        success += 1

    print(f"\nDone: {success}/{len(SCREENSHOTS)} screenshots processed -> {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
