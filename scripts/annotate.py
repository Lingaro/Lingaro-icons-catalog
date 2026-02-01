#!/usr/bin/env python3
"""
AI-powered icon annotation script using OpenAI GPT-4 Vision.
Scans SVG icons and generates descriptions, tags, and use cases.
"""

import os
import sys
import json
import base64
import argparse
from pathlib import Path
from io import BytesIO

from dotenv import load_dotenv
from openai import OpenAI
from tqdm import tqdm

HAS_CAIRO = False
HAS_SVGLIB = False

try:
    import cairosvg
    from PIL import Image
    HAS_CAIRO = True
except (ImportError, OSError):
    pass

if not HAS_CAIRO:
    try:
        from svglib.svglib import svg2rlg
        from reportlab.graphics import renderPM
        from PIL import Image
        HAS_SVGLIB = True
    except (ImportError, OSError):
        pass

if not HAS_CAIRO and not HAS_SVGLIB:
    print("Warning: No SVG renderer available. Install cairosvg or svglib.")

# Load environment variables
load_dotenv()

# Configuration
ICONS_DIR = Path(__file__).parent.parent / "icons"
OUTPUT_FILE = Path(__file__).parent.parent / "assets" / "data" / "icons.json"
DEFAULT_COLOR = "#783cbe"


def svg_to_png_base64(svg_path: Path, size: int = 256) -> str:
    """Convert SVG to base64-encoded PNG for the Vision API."""
    if HAS_CAIRO:
        # Use cairosvg for proper SVG rendering
        png_data = cairosvg.svg2png(
            url=str(svg_path),
            output_width=size,
            output_height=size,
            background_color="white"
        )
        return base64.b64encode(png_data).decode('utf-8')
    elif HAS_SVGLIB:
        # Use svglib + reportlab for SVG to PNG conversion
        drawing = svg2rlg(str(svg_path))
        if drawing is None:
            raise ValueError(f"Failed to parse SVG: {svg_path}")

        # Scale to target size
        scale_x = size / drawing.width if drawing.width else 1
        scale_y = size / drawing.height if drawing.height else 1
        scale = min(scale_x, scale_y)
        drawing.width = drawing.width * scale
        drawing.height = drawing.height * scale
        drawing.scale(scale, scale)

        # Render to PNG bytes
        png_buffer = BytesIO()
        renderPM.drawToFile(drawing, png_buffer, fmt="PNG", bg=0xFFFFFF)
        png_buffer.seek(0)
        return base64.b64encode(png_buffer.read()).decode('utf-8')
    else:
        raise RuntimeError("No SVG renderer available. Install cairosvg or svglib.")


def analyze_icon_with_text(client: OpenAI, icon_name: str, category: str) -> dict:
    """Use GPT-4 (text-only) to generate icon metadata based on name and category."""

    prompt = f"""Generate metadata for an icon in JSON format.
The icon is named "{icon_name}" and is in the "{category}" category.

Based on the icon name and category, provide:
1. "description": A clear, concise description of what this icon likely represents (1-2 sentences)
2. "tags": An array of 5-8 relevant keywords/tags for search (lowercase, single words or short phrases)
3. "use_cases": An array of 2-3 suggested use cases for this icon (e.g., "Data visualization dashboards", "Business presentations")

Important:
- Infer the icon's meaning from its name and category
- Tags should be useful for semantic search
- Keep descriptions professional and objective

Respond with valid JSON only, no markdown formatting."""

    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=500,
            temperature=0.3
        )

        content = response.choices[0].message.content.strip()
        if content.startswith('```'):
            content = content.split('```')[1]
            if content.startswith('json'):
                content = content[4:]
            content = content.strip()

        return json.loads(content)

    except json.JSONDecodeError as e:
        print(f"  Warning: Failed to parse JSON response: {e}")
        return {
            "description": f"Icon representing {icon_name.lower().replace('_', ' ')}",
            "tags": [icon_name.lower(), category.lower()],
            "use_cases": ["General purpose icon"]
        }
    except Exception as e:
        print(f"  Error analyzing icon: {e}")
        return None


def analyze_icon_with_gpt4v(client: OpenAI, image_base64: str, icon_name: str, category: str) -> dict:
    """Use GPT-4 Vision to analyze an icon and generate metadata."""

    prompt = f"""Analyze this icon image and provide metadata in JSON format.
The icon is named "{icon_name}" and is in the "{category}" category.

Provide:
1. "description": A clear, concise description of what the icon visually represents (1-2 sentences)
2. "tags": An array of 5-8 relevant keywords/tags for search (lowercase, single words or short phrases)
3. "use_cases": An array of 2-3 suggested use cases for this icon (e.g., "Data visualization dashboards", "Business presentations")

Important:
- Focus on what the icon actually depicts, not what you think it should be
- Tags should be useful for semantic search
- Keep descriptions professional and objective

Respond with valid JSON only, no markdown formatting."""

    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": prompt
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{image_base64}",
                                "detail": "low"
                            }
                        }
                    ]
                }
            ],
            max_tokens=500,
            temperature=0.3
        )

        # Parse the response
        content = response.choices[0].message.content.strip()
        # Remove markdown code blocks if present
        if content.startswith('```'):
            content = content.split('```')[1]
            if content.startswith('json'):
                content = content[4:]
            content = content.strip()

        return json.loads(content)

    except json.JSONDecodeError as e:
        print(f"  Warning: Failed to parse JSON response: {e}")
        return {
            "description": f"Icon representing {icon_name.lower().replace('_', ' ')}",
            "tags": [icon_name.lower(), category.lower()],
            "use_cases": ["General purpose icon"]
        }
    except Exception as e:
        print(f"  Error analyzing icon: {e}")
        return None


def scan_icons(icons_dir: Path, target_set: str = None) -> list:
    """Scan the icons directory and return a list of icon info."""
    icons = []

    for set_dir in icons_dir.iterdir():
        if not set_dir.is_dir():
            continue

        set_name = set_dir.name

        # Filter by set if specified
        if target_set and set_name != target_set:
            continue

        for category_dir in set_dir.iterdir():
            if not category_dir.is_dir():
                continue

            category = category_dir.name

            for svg_file in category_dir.glob("*.svg"):
                icon_name = svg_file.stem
                icon_id = f"{set_name}_{category}_{icon_name}".lower().replace(' ', '_').replace('-', '_')

                icons.append({
                    "id": icon_id,
                    "name": icon_name,
                    "filename": svg_file.name,
                    "path": str(svg_file.relative_to(icons_dir.parent)).replace("\\", "/"),
                    "category": category,
                    "set": set_name,
                    "full_path": svg_file
                })

    return icons


def load_existing_data(output_file: Path) -> dict:
    """Load existing icons data if it exists."""
    if output_file.exists():
        try:
            with open(output_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            pass
    return {"icons": [], "categories": [], "sets": []}


def main():
    parser = argparse.ArgumentParser(description="Annotate icons using AI")
    parser.add_argument("--set", help="Only process icons from this set")
    parser.add_argument("--force", action="store_true", help="Re-annotate all icons")
    parser.add_argument("--dry-run", action="store_true", help="Don't make API calls, just scan")
    parser.add_argument("--text-only", action="store_true", help="Use text-only mode (no vision API, infer from icon name)")
    args = parser.parse_args()

    # Determine if we should use text-only mode
    use_text_mode = args.text_only or (not HAS_CAIRO and not HAS_SVGLIB)
    if use_text_mode and not args.text_only:
        print("Note: No SVG renderer available, using text-only annotation mode.")

    # Check for API key
    api_key = os.getenv("OPENAI_API_KEY")
    base_url = os.getenv("OPENAI_BASE_URL")
    if not api_key and not args.dry_run:
        print("Error: OPENAI_API_KEY environment variable not set")
        print("Set it with: export OPENAI_API_KEY=your_key_here")
        sys.exit(1)

    # Initialize OpenAI client (supports custom base URL for LiteLLM etc.)
    if api_key:
        client_kwargs = {"api_key": api_key}
        if base_url:
            client_kwargs["base_url"] = base_url
            print(f"Using custom API endpoint: {base_url}")
        client = OpenAI(**client_kwargs)
    else:
        client = None

    # Scan icons
    print(f"Scanning icons in {ICONS_DIR}...")
    icons = scan_icons(ICONS_DIR, args.set)
    print(f"Found {len(icons)} icons")

    if args.dry_run:
        print("\nDry run - not making API calls")
        for icon in icons[:10]:
            print(f"  - {icon['name']} ({icon['category']})")
        if len(icons) > 10:
            print(f"  ... and {len(icons) - 10} more")
        return

    # Load existing data
    existing_data = load_existing_data(OUTPUT_FILE)
    existing_icons = {i["id"]: i for i in existing_data.get("icons", [])}

    # Process icons
    mode_desc = "text-only" if use_text_mode else "GPT-4 Vision"
    print(f"\nAnnotating icons with {mode_desc}...")
    annotated_icons = []
    categories = set()
    sets = set()

    for icon in tqdm(icons, desc="Processing"):
        icon_id = icon["id"]
        categories.add(icon["category"])
        sets.add(icon["set"])

        # Skip if already annotated (unless --force)
        if icon_id in existing_icons and not args.force:
            existing = existing_icons[icon_id]
            if existing.get("description"):
                annotated_icons.append(existing)
                continue

        # Analyze icon using appropriate method
        try:
            if use_text_mode:
                # Text-only mode: infer from name and category
                metadata = analyze_icon_with_text(
                    client, icon["name"], icon["category"]
                )
            else:
                # Vision mode: convert SVG and analyze image
                image_base64 = svg_to_png_base64(icon["full_path"])
                metadata = analyze_icon_with_gpt4v(
                    client, image_base64, icon["name"], icon["category"]
                )

            if metadata:
                icon_data = {
                    "id": icon["id"],
                    "name": icon["name"],
                    "filename": icon["filename"],
                    "path": icon["path"],
                    "category": icon["category"],
                    "set": icon["set"],
                    "description": metadata.get("description", ""),
                    "tags": metadata.get("tags", []),
                    "use_cases": metadata.get("use_cases", [])
                }
                annotated_icons.append(icon_data)
            else:
                # Add without annotation
                annotated_icons.append({
                    "id": icon["id"],
                    "name": icon["name"],
                    "filename": icon["filename"],
                    "path": icon["path"],
                    "category": icon["category"],
                    "set": icon["set"],
                    "description": "",
                    "tags": [],
                    "use_cases": []
                })

        except Exception as e:
            print(f"\n  Error processing {icon['name']}: {e}")
            annotated_icons.append({
                "id": icon["id"],
                "name": icon["name"],
                "filename": icon["filename"],
                "path": icon["path"],
                "category": icon["category"],
                "set": icon["set"],
                "description": "",
                "tags": [],
                "use_cases": []
            })

    # Create output directory
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Save results
    output_data = {
        "icons": annotated_icons,
        "categories": sorted(list(categories)),
        "sets": sorted(list(sets)),
        "meta": {
            "total_icons": len(annotated_icons),
            "annotated": len([i for i in annotated_icons if i.get("description")])
        }
    }

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] Saved {len(annotated_icons)} icons to {OUTPUT_FILE}")
    print(f"  Categories: {len(categories)}")
    print(f"  Sets: {len(sets)}")


if __name__ == "__main__":
    main()
