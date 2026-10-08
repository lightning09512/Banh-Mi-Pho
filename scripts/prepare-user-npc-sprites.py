from __future__ import annotations

from pathlib import Path

import numpy as np
import cv2
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
CHARACTERS = ROOT / "assets" / "characters"
FRAME_WIDTH = 247
FRAME_HEIGHT = 396
BASELINE_Y = 374
SHEET_COLUMNS = 6
SHEET_ROWS = 6
WALK_FRAMES = 12


SOURCES = {
    "cong an.jpg": ("saigon-ward-police-officer-walk-horizontal-user.png", "right"),
    "spectator.jpg": ("saigon-ward-inspector-walk-horizontal-user.png", "right"),
    "tourist.jpg": ("saigon-backpacker-tourist-walk-horizontal-user.png", "left"),
    "delivery.png": ("saigon-delivery-rider-walk-horizontal-user.png", "left"),
    "genz.jpg": ("saigon-genz-nightowl-walk-horizontal-user.png", "right"),
    "jogger.jpg": ("saigon-morning-jogger-walk-horizontal-user.png", "left"),
    "reviewer.jpg": ("saigon-food-reviewer-walk-horizontal-user.png", "right"),
    "CBsAC.jpg": ("saigon-construction-worker-walk-horizontal-user.png", "right"),
    "lottery.jpg": ("saigon-lottery-vendor-walk-horizontal-user.png", "right"),
}


def source_frame(sheet: Image.Image, index: int) -> Image.Image:
    row, column = divmod(index, SHEET_COLUMNS)
    x0 = round(column * sheet.width / SHEET_COLUMNS)
    x1 = round((column + 1) * sheet.width / SHEET_COLUMNS)
    y0 = round(row * sheet.height / SHEET_ROWS)
    y1 = round((row + 1) * sheet.height / SHEET_ROWS)
    cell = sheet.convert("RGB").crop((x0, y0, x1, y1))
    rgb = np.asarray(cell)
    samples = rgb.astype(np.int16)
    spread = samples.max(axis=2) - samples.min(axis=2)
    luminance = samples.mean(axis=2)

    # The source sheets have checkerboard baked into RGB/JPG. Build a foreground
    # core from the character's saturated colors and dark outlines, then fill
    # the external silhouette. This preserves neutral white shoes and the pale
    # conical hat that edge-color flood removal mistakenly erased.
    foreground_core = ((spread > 48) | (luminance < 145)).astype(np.uint8) * 255
    kernel = np.ones((3, 3), dtype=np.uint8)
    closed = cv2.morphologyEx(foreground_core, cv2.MORPH_CLOSE, kernel, iterations=1)
    contours, _ = cv2.findContours(closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    silhouette = np.zeros(closed.shape, dtype=np.uint8)
    for contour in contours:
        if cv2.contourArea(contour) >= 36:
            cv2.drawContours(silhouette, [contour], -1, 255, thickness=cv2.FILLED)
    silhouette = cv2.morphologyEx(silhouette, cv2.MORPH_CLOSE, kernel, iterations=1)

    rgba = np.dstack((rgb, silhouette))
    cell = Image.fromarray(rgba)
    bounds = cell.getchannel("A").getbbox()
    if bounds is None:
        raise ValueError(f"Frame {index} is empty")
    return cell.crop(bounds)


def normalize_walk_sheet(source_path: Path, output_path: Path, source_facing: str) -> None:
    source = Image.open(source_path).convert("RGB")
    frames = [source_frame(source, index) for index in range(WALK_FRAMES)]

    max_width = max(frame.width for frame in frames)
    max_height = max(frame.height for frame in frames)
    scale = min((FRAME_WIDTH - 24) / max_width, (BASELINE_Y - 8) / max_height)

    # The source sheets show one side-facing direction. Build a paired opposite
    # direction while preserving full-size, consistently aligned game cells.
    mirrored = [frame.transpose(Image.Transpose.FLIP_LEFT_RIGHT) for frame in frames]
    left_frames, right_frames = (mirrored, frames) if source_facing == "right" else (frames, mirrored)
    rows = [left_frames, right_frames]
    output = Image.new("RGBA", (FRAME_WIDTH * WALK_FRAMES, FRAME_HEIGHT * 2), (0, 0, 0, 0))

    for row_index, row in enumerate(rows):
        for column, frame in enumerate(row):
            width = max(1, round(frame.width * scale))
            height = max(1, round(frame.height * scale))
            # Resize in premultiplied-alpha space so removed checkerboard RGB
            # values cannot bleed into the transparent outline as a pale halo.
            resized = frame.convert("RGBa").resize((width, height), Image.Resampling.LANCZOS).convert("RGBA")
            x = column * FRAME_WIDTH + (FRAME_WIDTH - width) // 2
            y = row_index * FRAME_HEIGHT + BASELINE_Y - height
            output.alpha_composite(resized, (x, y))

    output.save(output_path, optimize=True)


def main() -> None:
    for input_name, (output_name, source_facing) in SOURCES.items():
        normalize_walk_sheet(CHARACTERS / input_name, CHARACTERS / output_name, source_facing)
        print(f"Created {output_name}")


if __name__ == "__main__":
    main()
