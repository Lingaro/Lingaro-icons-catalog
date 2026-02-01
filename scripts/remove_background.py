#!/usr/bin/env python3
"""
Remove background color from PNG icons and make it transparent.

Usage:
    python scripts/remove_background.py <image_path> [--color WHITE] [--tolerance 30] [--output <path>]
    python scripts/remove_background.py icons/databricks/*.png --color WHITE
    python scripts/remove_background.py image.png --color "#FFFFFF" --tolerance 50
"""

import argparse
import glob
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow is required. Install with: pip install Pillow")
    exit(1)


# Common background colors
COLOR_PRESETS = {
    "WHITE": (255, 255, 255),
    "BLACK": (0, 0, 0),
    "GRAY": (128, 128, 128),
    "LIGHTGRAY": (211, 211, 211),
}


def hex_to_rgb(hex_color: str) -> tuple:
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def parse_color(color_str: str) -> tuple:
    """Parse color string to RGB tuple."""
    color_upper = color_str.upper()
    if color_upper in COLOR_PRESETS:
        return COLOR_PRESETS[color_upper]
    elif color_str.startswith("#"):
        return hex_to_rgb(color_str)
    else:
        # Try parsing as comma-separated RGB
        try:
            parts = [int(x.strip()) for x in color_str.split(",")]
            if len(parts) == 3:
                return tuple(parts)
        except ValueError:
            pass
    raise ValueError(f"Invalid color format: {color_str}")


def remove_background(
    image_path: Path,
    bg_color: tuple = (255, 255, 255),
    tolerance: int = 30,
    output_path: Path = None
) -> Path:
    """
    Remove background color from an image and make it transparent.

    Args:
        image_path: Path to the input image
        bg_color: RGB tuple of the background color to remove
        tolerance: Color matching tolerance (0-255)
        output_path: Output path (defaults to overwriting input)

    Returns:
        Path to the output image
    """
    img = Image.open(image_path)

    # Convert to RGBA if needed
    if img.mode != "RGBA":
        img = img.convert("RGBA")

    pixels = img.load()
    width, height = img.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]

            # Check if pixel matches background color within tolerance
            if (abs(r - bg_color[0]) <= tolerance and
                abs(g - bg_color[1]) <= tolerance and
                abs(b - bg_color[2]) <= tolerance):
                # Make transparent
                pixels[x, y] = (r, g, b, 0)

    # Save
    if output_path is None:
        output_path = image_path

    img.save(output_path, "PNG")
    return output_path


def main():
    parser = argparse.ArgumentParser(
        description="Remove background color from PNG images and make transparent"
    )
    parser.add_argument(
        "images",
        nargs="+",
        help="Image path(s) or glob pattern (e.g., 'icons/*.png')"
    )
    parser.add_argument(
        "--color", "-c",
        default="WHITE",
        help="Background color to remove: WHITE, BLACK, GRAY, #RRGGBB, or R,G,B (default: WHITE)"
    )
    parser.add_argument(
        "--tolerance", "-t",
        type=int,
        default=30,
        help="Color matching tolerance 0-255 (default: 30)"
    )
    parser.add_argument(
        "--output", "-o",
        help="Output path (only for single image, defaults to overwrite)"
    )
    parser.add_argument(
        "--suffix", "-s",
        help="Add suffix to output filename (e.g., '_transparent')"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be processed without making changes"
    )

    args = parser.parse_args()

    # Parse color
    try:
        bg_color = parse_color(args.color)
    except ValueError as e:
        print(f"Error: {e}")
        return 1

    # Expand glob patterns and collect all image paths
    image_paths = []
    for pattern in args.images:
        expanded = glob.glob(pattern, recursive=True)
        if expanded:
            image_paths.extend(expanded)
        elif Path(pattern).exists():
            image_paths.append(pattern)
        else:
            print(f"Warning: No files match '{pattern}'")

    if not image_paths:
        print("Error: No images found")
        return 1

    # Filter to only PNG files
    image_paths = [p for p in image_paths if p.lower().endswith(".png")]

    if not image_paths:
        print("Error: No PNG files found")
        return 1

    print(f"Background color: RGB{bg_color}")
    print(f"Tolerance: {args.tolerance}")
    print(f"Found {len(image_paths)} PNG file(s)")
    print()

    if args.dry_run:
        print("Dry run - would process:")
        for p in image_paths:
            print(f"  {p}")
        return 0

    # Process images
    for img_path in image_paths:
        img_path = Path(img_path)

        # Determine output path
        if args.output and len(image_paths) == 1:
            output_path = Path(args.output)
        elif args.suffix:
            output_path = img_path.with_stem(img_path.stem + args.suffix)
        else:
            output_path = img_path

        try:
            remove_background(img_path, bg_color, args.tolerance, output_path)
            print(f"[OK] {img_path} -> {output_path}")
        except Exception as e:
            print(f"[ERROR] {img_path}: {e}")

    print(f"\nDone! Processed {len(image_paths)} image(s)")
    return 0


if __name__ == "__main__":
    exit(main())
