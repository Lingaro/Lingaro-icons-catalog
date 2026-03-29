#!/usr/bin/env python3
"""
Smart annotation for Microsoft Fabric icons.
Extracts clean display names from filenames and generates metadata without LLM.

Filename patterns:
  color:   add_pipeline_64_non-item.svg    -> "Add Pipeline"
  regular: arrow_curved_right_circle_20_regular.svg -> "Arrow Curved Right Circle"
  services: data_engineering_20_color.svg   -> "Data Engineering"
"""

import json
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
ICONS_JSON = PROJECT_ROOT / "assets" / "data" / "icons.json"

# Suffixes to strip from filenames (order matters - check longer patterns first)
STRIP_SUFFIXES = [
    r"_\d+_non-item$",
    r"_\d+_item$",
    r"_\d+_regular$",
    r"_\d+_color$",
    r"_\d+_filed$",
]

# Known Fabric product names that need special casing
SPECIAL_NAMES = {
    "kql": "KQL",
    "sql": "SQL",
    "rdl": "RDL",
    "api": "API",
    "bi": "BI",
    "ai": "AI",
    "py": "Python",
    "gen2": "Gen2",
    "ltr": "LTR",
    "rtl": "RTL",
    "ui": "UI",
}

# Category-specific tag pools
CATEGORY_TAGS = {
    "fabric items/color": ["microsoft fabric", "fabric item", "color icon", "data platform"],
    "fabric items/regular": ["microsoft fabric", "fabric icon", "regular icon", "ui icon"],
    "services": ["microsoft fabric", "fabric service", "cloud service", "data platform"],
}

# Semantic tag mapping: if the name contains a keyword, add related tags
KEYWORD_TAGS = {
    "data": ["data", "analytics"],
    "database": ["database", "storage", "data"],
    "arrow": ["navigation", "direction", "flow"],
    "window": ["interface", "ui", "application"],
    "chart": ["visualization", "chart", "analytics"],
    "report": ["report", "analytics", "business intelligence"],
    "dashboard": ["dashboard", "visualization", "monitoring"],
    "pipeline": ["pipeline", "etl", "data flow"],
    "notebook": ["notebook", "code", "development"],
    "lakehouse": ["lakehouse", "data lake", "storage"],
    "warehouse": ["data warehouse", "storage", "analytics"],
    "stream": ["streaming", "real-time", "event"],
    "spark": ["apache spark", "big data", "processing"],
    "model": ["model", "machine learning", "ai"],
    "cloud": ["cloud", "cloud computing"],
    "calendar": ["calendar", "time", "scheduling"],
    "person": ["people", "user", "identity"],
    "text": ["text", "content", "formatting"],
    "column": ["column", "table", "structure"],
    "branch": ["version control", "branching", "git"],
    "connector": ["connector", "integration", "connection"],
    "calculator": ["calculator", "computation", "math"],
    "scorecard": ["scorecard", "kpi", "metrics"],
    "semantic": ["semantic", "data model", "metadata"],
    "copilot": ["copilot", "ai assistant", "automation"],
    "purview": ["governance", "compliance", "data catalog"],
    "energy": ["energy", "sustainability", "green"],
    "healthcare": ["healthcare", "health", "medical"],
    "retail": ["retail", "commerce", "shopping"],
    "workspace": ["workspace", "collaboration", "project"],
    "folder": ["folder", "organization", "file management"],
    "security": ["security", "access control", "protection"],
    "link": ["link", "connection", "reference"],
    "filter": ["filter", "search", "query"],
    "graph": ["graph", "network", "relationship"],
    "code": ["code", "development", "programming"],
    "table": ["table", "data", "structure"],
    "export": ["export", "import", "data transfer"],
}

# Use case templates based on category
USE_CASES = {
    "fabric items/color": [
        "Microsoft Fabric workspace dashboards",
        "Data platform architecture diagrams",
        "Technical documentation and presentations",
    ],
    "fabric items/regular": [
        "UI elements in Fabric-based applications",
        "Technical documentation icons",
        "Data platform interface design",
    ],
    "services": [
        "Microsoft Fabric service architecture diagrams",
        "Cloud platform documentation",
        "Data platform presentations",
    ],
}


def extract_clean_name(filename: str) -> str:
    """Extract a clean display name from a Fabric icon filename."""
    stem = Path(filename).stem

    # Strip known suffixes
    for pattern in STRIP_SUFFIXES:
        stem = re.sub(pattern, "", stem)

    # Split on underscores
    words = stem.split("_")

    # Apply special casing
    titled = []
    for word in words:
        lower = word.lower()
        if lower in SPECIAL_NAMES:
            titled.append(SPECIAL_NAMES[lower])
        else:
            titled.append(word.capitalize())

    return " ".join(titled)


def generate_tags(name: str, category: str) -> list[str]:
    """Generate relevant tags from icon name and category."""
    tags = set()

    # Add category-specific tags
    for cat_key, cat_tags in CATEGORY_TAGS.items():
        if cat_key in category.lower():
            tags.update(cat_tags)
            break

    # Add keyword-based tags
    name_lower = name.lower()
    for keyword, keyword_tags in KEYWORD_TAGS.items():
        if keyword in name_lower:
            tags.update(keyword_tags)

    # Add the name words as individual tags
    for word in name.lower().split():
        if len(word) > 2 and word not in ("the", "and", "for", "non"):
            tags.add(word)

    return sorted(tags)[:8]


def generate_description(name: str, category: str) -> str:
    """Generate a description from icon name and category."""
    cat_label = category.replace("/", " - ")
    return f"Microsoft Fabric {cat_label} icon representing {name.lower()}"


def main():
    # Load existing icons.json
    with open(ICONS_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Index existing icons
    icons_by_id = {i["id"]: i for i in data["icons"]}

    updated = 0
    skipped = 0

    for icon_id, icon in icons_by_id.items():
        if icon.get("set") != "Microsoft Fabric":
            continue

        # Build category path from the icon path
        # e.g. "icons/Microsoft Fabric/fabric items/color/add_pipeline_64_non-item.svg"
        parts = icon["path"].split("/")
        # Category is everything between set name and filename
        if len(parts) >= 4:
            category = "/".join(parts[2:-1])  # e.g. "fabric items/color"
        else:
            category = icon.get("category", "")

        # Extract clean name
        clean_name = extract_clean_name(icon["filename"])

        # Generate metadata
        description = generate_description(clean_name, category)
        tags = generate_tags(clean_name, category)
        use_cases = USE_CASES.get(category, [
            "Microsoft Fabric documentation",
            "Data platform presentations",
            "Technical architecture diagrams",
        ])

        # Update the icon
        icon["name"] = clean_name
        icon["description"] = description
        icon["tags"] = tags
        icon["use_cases"] = use_cases
        updated += 1

    # Update meta counts
    data["meta"]["annotated"] = len([i for i in data["icons"] if i.get("description")])

    # Save
    with open(ICONS_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Updated {updated} Microsoft Fabric icons in icons.json")
    print(f"Total icons: {data['meta']['total_icons']}, Annotated: {data['meta']['annotated']}")

    # Show some examples
    print("\nExamples:")
    count = 0
    for icon in data["icons"]:
        if icon.get("set") == "Microsoft Fabric" and count < 10:
            print(f"  {icon['filename']:50s} -> {icon['name']}")
            count += 1


if __name__ == "__main__":
    main()
