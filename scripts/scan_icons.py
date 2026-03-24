#!/usr/bin/env python3
"""
Simple icon scanner - creates basic icons.json without AI annotation.
Use this for initial setup or when you don't want to use OpenAI API.
"""

import json
from pathlib import Path

# Configuration
ICONS_DIR = Path(__file__).parent.parent / "icons"
OUTPUT_FILE = Path(__file__).parent.parent / "assets" / "data" / "icons.json"


def generate_basic_tags(name: str, category: str) -> list:
    """Generate basic tags from icon name and category."""
    tags = []

    # Split name into words
    words = name.lower().replace('_', ' ').replace('-', ' ').split()
    tags.extend(words)

    # Add category
    category_words = category.lower().replace('_', ' ').replace('-', ' ').split()
    tags.extend(category_words)

    # Remove duplicates and short words
    tags = list(set(w for w in tags if len(w) > 2))

    return tags[:8]


VARIANT_DIRS = ("color", "regular")


def _make_icon_entry(icon_file: Path, set_name: str, category: str, icons_dir: Path,
                     variant: str = "") -> dict:
    """Create an icon metadata entry from an icon file (SVG or PNG)."""
    icon_name = icon_file.stem
    if variant:
        icon_id = f"{set_name}_{category}_{variant}_{icon_name}".lower()
    else:
        icon_id = f"{set_name}_{category}_{icon_name}".lower()
    icon_id = icon_id.replace(' ', '_').replace('-', '_')

    description = f"{icon_name.replace('_', ' ').replace('-', ' ')} icon"
    if category:
        description += f" from {category} category"
    if variant:
        description += f" ({variant})"

    tags = generate_basic_tags(icon_name, category)
    if variant:
        tags.append(variant)

    return {
        "id": icon_id,
        "name": icon_name,
        "filename": icon_file.name,
        "path": str(icon_file.relative_to(icons_dir.parent)).replace("\\", "/"),
        "category": category,
        "set": set_name,
        "description": description,
        "tags": tags,
        "use_cases": []
    }


def scan_icons(icons_dir: Path) -> tuple:
    """Scan the icons directory and return icons, categories, and sets.

    Supports both nested (set/category/*.svg) and flat (set/*.svg) layouts.
    For flat directories the set name is used as the category.
    """
    icons = []
    categories = set()
    sets = set()

    for set_dir in sorted(icons_dir.iterdir()):
        if not set_dir.is_dir():
            continue

        set_name = set_dir.name
        sets.add(set_name)

        # Check for icon files directly in the set directory (flat layout)
        flat_icons = sorted(list(set_dir.glob("*.svg")) + list(set_dir.glob("*.png")))
        if flat_icons:
            category = set_name  # use set name as category for flat dirs
            categories.add(category)
            for icon_file in flat_icons:
                icons.append(_make_icon_entry(icon_file, set_name, category, icons_dir))

        # Check for category subdirectories (nested layout)
        for category_dir in sorted(set_dir.iterdir()):
            if not category_dir.is_dir():
                continue
            # Skip known non-category dirs (e.g. raw source folders)
            if category_dir.name in ("svg", "raw"):
                continue
            # Variant dirs (color/regular) at set level are handled as
            # set-level categories with a variant tag
            if category_dir.name in VARIANT_DIRS:
                category = set_name
                categories.add(category)
                variant = category_dir.name
                for icon_file in sorted(list(category_dir.glob("*.svg")) + list(category_dir.glob("*.png"))):
                    icons.append(_make_icon_entry(icon_file, set_name, category, icons_dir, variant=variant))
                continue

            category = category_dir.name
            categories.add(category)

            # Check for variant subdirectories inside category (e.g. fabric items/color/)
            has_variant_subdirs = any(
                (category_dir / v).is_dir() for v in VARIANT_DIRS
            )
            if has_variant_subdirs:
                for variant_dir in sorted(category_dir.iterdir()):
                    if not variant_dir.is_dir():
                        continue
                    if variant_dir.name in VARIANT_DIRS:
                        variant = variant_dir.name
                        for icon_file in sorted(list(variant_dir.glob("*.svg")) + list(variant_dir.glob("*.png"))):
                            icons.append(_make_icon_entry(icon_file, set_name, category, icons_dir, variant=variant))
                # Also pick up any icons directly in the category dir
                for icon_file in sorted(list(category_dir.glob("*.svg")) + list(category_dir.glob("*.png"))):
                    icons.append(_make_icon_entry(icon_file, set_name, category, icons_dir))
            else:
                for icon_file in sorted(list(category_dir.glob("*.svg")) + list(category_dir.glob("*.png"))):
                    icons.append(_make_icon_entry(icon_file, set_name, category, icons_dir))

    return icons, sorted(list(categories)), sorted(list(sets))


def main():
    print(f"Scanning icons in {ICONS_DIR}...")

    icons, categories, sets = scan_icons(ICONS_DIR)

    print(f"Found {len(icons)} icons in {len(categories)} categories from {len(sets)} sets")

    # Create output directory
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Save results
    output_data = {
        "icons": icons,
        "categories": categories,
        "sets": sets,
        "meta": {
            "total_icons": len(icons),
            "annotated": 0,
            "note": "Basic scan without AI annotation. Run annotate.py for AI-powered descriptions."
        }
    }

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] Saved {len(icons)} icons to {OUTPUT_FILE}")
    print("\nTo add AI-powered annotations, run:")
    print("  python scripts/annotate.py")


if __name__ == "__main__":
    main()
