"""Select Microsoft Fabric SVG icons and organize by type.

- Size 64: item/non-item → root (skip filled)
- Size 20: color → color/, regular → regular/ (skip filled)
"""

import re
import shutil
from pathlib import Path

SRC = Path("icons/Microsoft Fabric/v6.1.0/package/dist/svg")
DST = Path("icons/Microsoft Fabric")

# Pattern: name_size_type.svg
PATTERN = re.compile(r"^(.+)_(\d+)_(filled|regular|color|item|non-item)\.svg$")

def main():
    DST.mkdir(parents=True, exist_ok=True)
    (DST / "color").mkdir(exist_ok=True)
    (DST / "regular").mkdir(exist_ok=True)

    copied = {"color": 0, "regular": 0, "root": 0}
    skipped_filled = 0

    for svg in sorted(SRC.glob("*.svg")):
        m = PATTERN.match(svg.name)
        if not m:
            # No type in filename — copy to root
            dest = DST / svg.name
            shutil.copy2(svg, dest)
            copied["root"] += 1
            continue

        name, size, icon_type = m.group(1), m.group(2), m.group(3)

        # Skip filled always
        if icon_type == "filled":
            skipped_filled += 1
            continue

        # Size 64: item/non-item → root
        if size == "64" and icon_type in ("item", "non-item"):
            dest = DST / svg.name
            copied["root"] += 1
        # Size 20: color → color/, regular → regular/
        elif size == "20" and icon_type == "color":
            dest = DST / "color" / svg.name
            copied["color"] += 1
        elif size == "20" and icon_type == "regular":
            dest = DST / "regular" / svg.name
            copied["regular"] += 1
        else:
            continue

        shutil.copy2(svg, dest)

    # Clean up empty folders
    for sub in ("color", "regular"):
        d = DST / sub
        if d.exists() and not any(d.iterdir()):
            d.rmdir()

    print(f"Copied: {sum(copied.values())} icons")
    print(f"  root: {copied['root']}, color: {copied['color']}, regular: {copied['regular']}")
    print(f"Skipped filled: {skipped_filled}")


if __name__ == "__main__":
    main()
