from collections import deque
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
CHARACTERS = ROOT / "assets" / "characters"


def clear_connected_background(
    image: Image.Image,
    background: tuple[int, int, int],
    tolerance: int,
    diagonal: bool,
) -> Image.Image:
    """Remove only near-background pixels connected to an image edge."""
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    seen = bytearray(width * height)
    queue: deque[tuple[int, int]] = deque()

    def is_background(x: int, y: int) -> bool:
        r, g, b, _ = pixels[x, y]
        return max(abs(r - background[0]), abs(g - background[1]), abs(b - background[2])) <= tolerance

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        index = y * width + x
        if seen[index] or not is_background(x, y):
            continue
        seen[index] = 1
        pixels[x, y] = (0, 0, 0, 0)
        neighbors = (
            ((dx, dy) for dy in (-1, 0, 1) for dx in (-1, 0, 1) if dx or dy)
            if diagonal
            else ((-1, 0), (1, 0), (0, -1), (0, 1))
        )
        for dx, dy in neighbors:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height:
                queue.append((nx, ny))

    return rgba


def remove_detached_specks(image: Image.Image, columns: int, rows: int) -> Image.Image:
    """Keep the connected pixel-art character in each cell and discard isolated keying noise."""
    result = image.copy()
    pixels = result.load()
    cell_width = result.width // columns
    cell_height = result.height // rows

    for row in range(rows):
        for column in range(columns):
            left = column * cell_width
            top = row * cell_height
            seen: set[tuple[int, int]] = set()
            components: list[list[tuple[int, int]]] = []

            for start_y in range(top, top + cell_height):
                for start_x in range(left, left + cell_width):
                    if pixels[start_x, start_y][3] == 0 or (start_x, start_y) in seen:
                        continue
                    component: list[tuple[int, int]] = []
                    queue = [(start_x, start_y)]
                    seen.add((start_x, start_y))
                    while queue:
                        x, y = queue.pop()
                        component.append((x, y))
                        for dy in (-1, 0, 1):
                            for dx in (-1, 0, 1):
                                if dx == dy == 0:
                                    continue
                                nx, ny = x + dx, y + dy
                                if not (left <= nx < left + cell_width and top <= ny < top + cell_height):
                                    continue
                                if pixels[nx, ny][3] and (nx, ny) not in seen:
                                    seen.add((nx, ny))
                                    queue.append((nx, ny))
                    components.append(component)

            if not components:
                continue
            main_component = max(components, key=len)
            for component in components:
                if component is main_component:
                    continue
                for x, y in component:
                    pixels[x, y] = (0, 0, 0, 0)

    return result


def main() -> None:
    sources = [
        ("saigon-street-cat-actions-source.png", "saigon-street-cat-actions.png", (0, 0, 0), 20, True, (4, 8)),
        ("saigon-street-dog-actions-source.png", "saigon-street-dog-actions.png", (255, 255, 255), 18, False, (4, 9)),
    ]

    for source_name, output_name, background, tolerance, diagonal, grid in sources:
        source_path = CHARACTERS / source_name
        output_path = CHARACTERS / output_name
        image = Image.open(source_path).convert("RGB")
        columns, rows = grid
        if image.width % columns or image.height % rows:
            raise ValueError(f"{source_name} dimensions do not divide into a {columns}x{rows} grid")
        result = clear_connected_background(image, background, tolerance, diagonal)
        result = remove_detached_specks(result, columns, rows)
        result.save(output_path, optimize=True)
        print(f"{output_path.relative_to(ROOT)}: {result.width}x{result.height} RGBA, {columns}x{rows} cells")


if __name__ == "__main__":
    main()
