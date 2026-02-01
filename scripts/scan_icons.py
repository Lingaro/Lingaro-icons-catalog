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


def scan_icons(icons_dir: Path) -> tuple:
    """Scan the icons directory and return icons, categories, and sets."""
    icons = []
    categories = set()
    sets = set()

    for set_dir in sorted(icons_dir.iterdir()):
        if not set_dir.is_dir():
            continue

        set_name = set_dir.name
        sets.add(set_name)

        for category_dir in sorted(set_dir.iterdir()):
            if not category_dir.is_dir():
                continue

            category = category_dir.name
            categories.add(category)

            for svg_file in sorted(category_dir.glob("*.svg")):
                icon_name = svg_file.stem
                icon_id = f"{set_name}_{category}_{icon_name}".lower()
                icon_id = icon_id.replace(' ', '_').replace('-', '_')

                # Generate basic description from name
                description = f"{icon_name.replace('_', ' ').replace('-', ' ')} icon"
                if category:
                    description += f" from {category} category"

                icons.append({
                    "id": icon_id,
                    "name": icon_name,
                    "filename": svg_file.name,
                    "path": str(svg_file.relative_to(icons_dir.parent)).replace("\\", "/"),
                    "category": category,
                    "set": set_name,
                    "description": description,
                    "tags": generate_basic_tags(icon_name, category),
                    "use_cases": []
                })

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

    print(f"\n✓ Saved {len(icons)} icons to {OUTPUT_FILE}")
    print("\nTo add AI-powered annotations, run:")
    print("  python scripts/annotate.py")


if __name__ == "__main__":
    main()
