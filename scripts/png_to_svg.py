#!/usr/bin/env python3
"""
Convert PNG icons to SVG format using image tracing.

Usage:
    python scripts/png_to_svg.py icons/databricks/*.png
    python scripts/png_to_svg.py image.png --output image.svg
"""

import argparse
import glob
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image
    import numpy as np
except ImportError:
    print("Error: Pillow and numpy are required.")
    print("Install with: pip install Pillow numpy")
    sys.exit(1)

try:
    import vtracer
    HAS_VTRACER = True
except ImportError:
    HAS_VTRACER = False


def convert_with_vtracer(input_path: Path, output_path: Path) -> bool:
    """Convert PNG to SVG using vtracer library."""
    if not HAS_VTRACER:
        return False

    try:
        vtracer.convert_image_to_svg_py(
            str(input_path),
            str(output_path),
            colormode='color',
            hierarchical='stacked',
            mode='spline',
            filter_speckle=4,
            color_precision=6,
            layer_difference=16,
            corner_threshold=60,
            length_threshold=4.0,
            max_iterations=10,
            splice_threshold=45,
            path_precision=3
        )
        return True
    except Exception as e:
        print(f"  vtracer error: {e}")
        return False


def convert_with_potrace(input_path: Path, output_path: Path) -> bool:
    """Convert PNG to SVG using potrace (must be installed)."""
    try:
        # First convert to BMP (potrace input format)
        img = Image.open(input_path)

        # For color images, we need to handle differently
        if img.mode == 'RGBA':
            # Create a white background
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])
            img = background

        # Convert to bitmap (1-bit)
        img_gray = img.convert('L')
        img_bw = img_gray.point(lambda x: 0 if x < 128 else 255, '1')

        # Save as BMP
        bmp_path = input_path.with_suffix('.bmp')
        img_bw.save(bmp_path)

        # Run potrace
        result = subprocess.run(
            ['potrace', '-s', '-o', str(output_path), str(bmp_path)],
            capture_output=True,
            text=True
        )

        # Clean up BMP
        bmp_path.unlink()

        return result.returncode == 0
    except FileNotFoundError:
        return False
    except Exception as e:
        print(f"  potrace error: {e}")
        return False


def convert_simple_embed(input_path: Path, output_path: Path) -> bool:
    """
    Simple conversion: embed PNG as base64 in SVG.
    This preserves the exact image but isn't true vector.
    """
    import base64

    try:
        img = Image.open(input_path)
        width, height = img.size

        # Read PNG data
        with open(input_path, 'rb') as f:
            png_data = base64.b64encode(f.read()).decode('utf-8')

        svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <image width="{width}" height="{height}"
         xlink:href="data:image/png;base64,{png_data}"/>
</svg>'''

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(svg_content)

        return True
    except Exception as e:
        print(f"  embed error: {e}")
        return False


def convert_color_trace(input_path: Path, output_path: Path) -> bool:
    """
    Convert colored PNG to SVG by tracing color regions.
    Works best for icons with solid colors.
    """
    try:
        img = Image.open(input_path).convert('RGBA')
        width, height = img.size
        pixels = np.array(img)

        # Find unique colors (ignoring fully transparent)
        unique_colors = {}
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[y, x]
                if a > 10:  # Not transparent
                    color_key = (r, g, b)
                    if color_key not in unique_colors:
                        unique_colors[color_key] = []
                    unique_colors[color_key].append((x, y))

        # Generate SVG with rectangles for each pixel (simplified)
        # For better results, use region detection
        svg_parts = [
            f'<?xml version="1.0" encoding="UTF-8"?>',
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">'
        ]

        for (r, g, b), coords in unique_colors.items():
            hex_color = f"#{r:02x}{g:02x}{b:02x}"
            # Group adjacent pixels into rectangles for efficiency
            for x, y in coords:
                svg_parts.append(f'  <rect x="{x}" y="{y}" width="1" height="1" fill="{hex_color}"/>')

        svg_parts.append('</svg>')

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(svg_parts))

        return True
    except Exception as e:
        print(f"  trace error: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Convert PNG icons to SVG")
    parser.add_argument("images", nargs="+", help="PNG image path(s) or glob pattern")
    parser.add_argument("--output", "-o", help="Output path (single image only)")
    parser.add_argument(
        "--method", "-m",
        choices=["auto", "vtracer", "potrace", "embed", "trace"],
        default="auto",
        help="Conversion method (default: auto)"
    )
    parser.add_argument("--dry-run", action="store_true", help="Preview without converting")

    args = parser.parse_args()

    # Collect image paths
    image_paths = []
    for pattern in args.images:
        expanded = glob.glob(pattern, recursive=True)
        if expanded:
            image_paths.extend(expanded)
        elif Path(pattern).exists():
            image_paths.append(pattern)

    image_paths = [p for p in image_paths if p.lower().endswith('.png')]

    if not image_paths:
        print("Error: No PNG files found")
        return 1

    print(f"Found {len(image_paths)} PNG file(s)")

    # Check available methods
    if args.method == "auto":
        if HAS_VTRACER:
            method = "vtracer"
            print("Using vtracer (best quality)")
        else:
            method = "embed"
            print("Using embed method (install vtracer for better results: pip install vtracer)")
    else:
        method = args.method

    print()

    if args.dry_run:
        print("Dry run - would convert:")
        for p in image_paths:
            svg_path = Path(p).with_suffix('.svg')
            print(f"  {p} -> {svg_path}")
        return 0

    # Convert images
    success = 0
    for img_path in image_paths:
        img_path = Path(img_path)

        if args.output and len(image_paths) == 1:
            svg_path = Path(args.output)
        else:
            svg_path = img_path.with_suffix('.svg')

        # Try conversion
        if method == "vtracer":
            ok = convert_with_vtracer(img_path, svg_path)
        elif method == "potrace":
            ok = convert_with_potrace(img_path, svg_path)
        elif method == "embed":
            ok = convert_simple_embed(img_path, svg_path)
        elif method == "trace":
            ok = convert_color_trace(img_path, svg_path)
        else:
            ok = False

        if ok:
            print(f"[OK] {img_path} -> {svg_path}")
            success += 1
        else:
            print(f"[FAIL] {img_path}")

    print(f"\nConverted {success}/{len(image_paths)} images")

    if not HAS_VTRACER and method != "vtracer":
        print("\nTip: Install vtracer for better quality: pip install vtracer")

    return 0


if __name__ == "__main__":
    sys.exit(main())
