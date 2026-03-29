#!/usr/bin/env python3
"""
AI-powered icon annotation script using LLM APIs (via OpenAI-compatible endpoint).
Scans SVG icons and generates descriptions, tags, and use cases.

Optimizations:
  - Batch mode: sends multiple icons per LLM call (--batch-size, default 10)
  - Concurrent workers: parallel API calls (--workers, default 4)
  - 382 icons @ batch=10, workers=4 → ~38 calls → ~5-8 min instead of 90 min
"""

import os
import re
import sys
import json
import base64
import argparse
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from io import BytesIO
from threading import Lock

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
PROJECT_ROOT = Path(__file__).parent.parent
ICONS_DIR = PROJECT_ROOT / "icons"
OUTPUT_FILE = PROJECT_ROOT / "assets" / "data" / "icons.json"
DB_PATH = PROJECT_ROOT / "data" / "catalog.db"
DEFAULT_MODEL = "gemini-2.5-flash"
DEFAULT_BATCH_SIZE = 10
DEFAULT_WORKERS = 4
MAX_RETRIES = 3
RETRY_DELAY = 2


def get_model() -> str:
    return os.getenv("OPENAI_MODEL", DEFAULT_MODEL)


def parse_json_response(content: str):
    """Parse JSON from LLM response, handling markdown code fences.
    Returns a dict or list depending on the response."""
    content = content.strip()
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        pass
    m = re.search(r"```(?:json)?\s*([\s\S]*?)```", content)
    if m:
        try:
            return json.loads(m.group(1).strip())
        except json.JSONDecodeError:
            pass
    raise json.JSONDecodeError("Could not parse JSON from response", content, 0)


def svg_to_png_base64(svg_path: Path, size: int = 256) -> str:
    """Convert SVG to base64-encoded PNG for the Vision API."""
    if HAS_CAIRO:
        png_data = cairosvg.svg2png(
            url=str(svg_path), output_width=size, output_height=size,
            background_color="white"
        )
        return base64.b64encode(png_data).decode('utf-8')
    elif HAS_SVGLIB:
        drawing = svg2rlg(str(svg_path))
        if drawing is None:
            raise ValueError(f"Failed to parse SVG: {svg_path}")
        scale = min(size / (drawing.width or size), size / (drawing.height or size))
        drawing.width *= scale
        drawing.height *= scale
        drawing.scale(scale, scale)
        buf = BytesIO()
        renderPM.drawToFile(drawing, buf, fmt="PNG", bg=0xFFFFFF)
        buf.seek(0)
        return base64.b64encode(buf.read()).decode('utf-8')
    else:
        raise RuntimeError("No SVG renderer available.")


# ── Batch annotation (text-only) ──────────────────────────────────────────

def annotate_batch_text(client: OpenAI, icons: list[dict]) -> dict[str, dict]:
    """Annotate a batch of icons in a single LLM call. Returns {icon_name: metadata}."""
    icon_list = "\n".join(
        f'  {i+1}. "{icon["name"]}" (category: "{icon["category"]}")'
        for i, icon in enumerate(icons)
    )

    prompt = f"""Generate metadata for {len(icons)} icons. Return a JSON array with one object per icon, in the same order.

Icons:
{icon_list}

For each icon, provide:
- "name": the icon name exactly as given above
- "description": 1-2 sentence description of what this icon represents
- "tags": array of 5-8 lowercase search keywords
- "use_cases": array of 2-3 suggested use cases

Respond with a valid JSON array only, no markdown formatting."""

    for attempt in range(MAX_RETRIES):
        try:
            response = client.chat.completions.create(
                model=get_model(),
                messages=[{"role": "user", "content": prompt}],
                max_tokens=300 * len(icons),
                temperature=0.3
            )
            content = response.choices[0].message.content
            if not content or not content.strip():
                if attempt < MAX_RETRIES - 1:
                    time.sleep(RETRY_DELAY)
                    continue
                raise ValueError("Empty response from API")

            results = parse_json_response(content)

            # Handle both array and single-object responses
            if isinstance(results, dict):
                results = [results]

            # Map results back to icon names
            output = {}
            for i, icon in enumerate(icons):
                if i < len(results):
                    r = results[i]
                    output[icon["id"]] = {
                        "description": r.get("description", ""),
                        "tags": r.get("tags", []),
                        "use_cases": r.get("use_cases", []),
                    }
            return output

        except json.JSONDecodeError:
            if attempt < MAX_RETRIES - 1:
                time.sleep(RETRY_DELAY)
                continue
            # Fallback: return basic metadata for all icons
            return {
                icon["id"]: {
                    "description": f"Icon representing {icon['name'].lower().replace('_', ' ')}",
                    "tags": [icon["name"].lower(), icon["category"].lower()],
                    "use_cases": ["General purpose icon"],
                }
                for icon in icons
            }
        except Exception as e:
            if attempt < MAX_RETRIES - 1:
                time.sleep(RETRY_DELAY)
                continue
            print(f"\n  Error annotating batch: {e}")
            return {}


# ── Single icon annotation (vision mode) ──────────────────────────────────

def annotate_single_vision(client: OpenAI, icon: dict) -> dict | None:
    """Annotate a single icon using vision API."""
    prompt = f"""Analyze this icon image and provide metadata in JSON format.
The icon is named "{icon['name']}" and is in the "{icon['category']}" category.

Provide:
1. "description": 1-2 sentence description of what the icon visually represents
2. "tags": array of 5-8 lowercase search keywords
3. "use_cases": array of 2-3 suggested use cases

Respond with valid JSON only, no markdown formatting."""

    for attempt in range(MAX_RETRIES):
        try:
            image_base64 = svg_to_png_base64(icon["full_path"])
            response = client.chat.completions.create(
                model=get_model(),
                messages=[{
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {"type": "image_url", "image_url": {
                            "url": f"data:image/png;base64,{image_base64}",
                            "detail": "low"
                        }}
                    ]
                }],
                max_tokens=500,
                temperature=0.3
            )
            content = response.choices[0].message.content
            if not content or not content.strip():
                if attempt < MAX_RETRIES - 1:
                    time.sleep(RETRY_DELAY)
                    continue
                raise ValueError("Empty response")
            return parse_json_response(content)
        except json.JSONDecodeError:
            if attempt < MAX_RETRIES - 1:
                time.sleep(RETRY_DELAY)
                continue
            return {
                "description": f"Icon representing {icon['name'].lower().replace('_', ' ')}",
                "tags": [icon["name"].lower(), icon["category"].lower()],
                "use_cases": ["General purpose icon"],
            }
        except Exception as e:
            if attempt < MAX_RETRIES - 1:
                time.sleep(RETRY_DELAY)
                continue
            print(f"\n  Error analyzing {icon['name']}: {e}")
            return None


# ── Directory scanning ─────────────────────────────────────────────────────

def scan_icons(icons_dir: Path, target_set: str = None) -> list:
    """Scan the icons directory recursively."""
    icons = []
    for set_dir in sorted(icons_dir.iterdir()):
        if not set_dir.is_dir():
            continue
        set_name = set_dir.name
        if target_set and set_name != target_set:
            continue
        for svg_file in sorted(set_dir.rglob("*.svg")):
            rel_to_set = svg_file.parent.relative_to(set_dir)
            category = str(rel_to_set).replace("\\", "/")
            if category == ".":
                category = set_name
            icon_id = f"{set_name}_{category}_{svg_file.stem}".lower().replace(' ', '_').replace('-', '_').replace('/', '_')
            icons.append({
                "id": icon_id,
                "name": svg_file.stem,
                "filename": svg_file.name,
                "path": str(svg_file.relative_to(icons_dir.parent)).replace("\\", "/"),
                "category": category,
                "set": set_name,
                "full_path": svg_file,
            })
    return icons


def load_existing_data(output_file: Path) -> dict:
    if output_file.exists():
        try:
            with open(output_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return {"icons": [], "categories": [], "sets": [], "meta": {"total_icons": 0, "annotated": 0}}


def update_database(annotated: list[dict]) -> int:
    if not DB_PATH.exists():
        print(f"  Database not found at {DB_PATH}, skipping.")
        return 0
    sys.path.insert(0, str(PROJECT_ROOT))
    from api.database import get_db, refresh_category_counts
    conn = get_db(DB_PATH)
    updated = 0
    for icon in annotated:
        conn.execute(
            "UPDATE icons SET name=?, description=?, tags=?, use_cases=?, updated_at=CURRENT_TIMESTAMP WHERE id=?",
            (icon["name"], icon.get("description", ""), json.dumps(icon.get("tags", [])),
             json.dumps(icon.get("use_cases", [])), icon["id"])
        )
        if conn.execute("SELECT changes()").fetchone()[0] > 0:
            updated += 1
    conn.commit()
    refresh_category_counts(conn)
    conn.close()
    return updated


# ── Main ───────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Annotate icons using AI")
    parser.add_argument("--set", help="Only process icons from this set")
    parser.add_argument("--force", action="store_true", help="Re-annotate all icons")
    parser.add_argument("--dry-run", action="store_true", help="Don't make API calls, just scan")
    parser.add_argument("--text-only", action="store_true", help="Text-only mode (no vision)")
    parser.add_argument("--no-db", action="store_true", help="Skip SQLite database update")
    parser.add_argument("--batch-size", type=int, default=DEFAULT_BATCH_SIZE,
                        help=f"Icons per LLM call in text mode (default: {DEFAULT_BATCH_SIZE})")
    parser.add_argument("--workers", type=int, default=DEFAULT_WORKERS,
                        help=f"Parallel API workers (default: {DEFAULT_WORKERS})")
    args = parser.parse_args()

    use_text_mode = args.text_only or (not HAS_CAIRO and not HAS_SVGLIB)
    if use_text_mode and not args.text_only:
        print("Note: No SVG renderer available, using text-only mode.")

    api_key = os.getenv("OPENAI_API_KEY")
    base_url = os.getenv("OPENAI_BASE_URL")
    if not api_key and not args.dry_run:
        print("Error: OPENAI_API_KEY not set")
        sys.exit(1)

    if api_key:
        client_kwargs = {"api_key": api_key}
        if base_url:
            client_kwargs["base_url"] = base_url
            print(f"Using endpoint: {base_url}")
        client = OpenAI(**client_kwargs)
        print(f"Using model: {get_model()}")
    else:
        client = None

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

    existing_data = load_existing_data(OUTPUT_FILE)
    existing_icons = {i["id"]: i for i in existing_data.get("icons", [])}

    # Filter to icons that need annotation
    to_annotate = []
    for icon in icons:
        if icon["id"] in existing_icons and not args.force:
            if existing_icons[icon["id"]].get("description"):
                continue
        to_annotate.append(icon)

    if not to_annotate:
        print("All icons already annotated. Use --force to re-annotate.")
        return

    mode_desc = "text-only batched" if use_text_mode else "Vision"
    print(f"\nAnnotating {len(to_annotate)} icons with {mode_desc} ({get_model()})...")
    if use_text_mode:
        print(f"  Batch size: {args.batch_size}, Workers: {args.workers}")
        total_calls = (len(to_annotate) + args.batch_size - 1) // args.batch_size
        print(f"  Estimated API calls: {total_calls}")

    newly_annotated = []
    lock = Lock()
    errors = 0

    if use_text_mode:
        # ── Batched + concurrent text-only mode ──
        batches = [
            to_annotate[i:i + args.batch_size]
            for i in range(0, len(to_annotate), args.batch_size)
        ]

        pbar = tqdm(total=len(to_annotate), desc="Processing")

        def process_batch(batch):
            nonlocal errors
            results = annotate_batch_text(client, batch)
            annotated = []
            for icon in batch:
                metadata = results.get(icon["id"])
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
                        "use_cases": metadata.get("use_cases", []),
                    }
                    annotated.append(icon_data)
                else:
                    errors += 1
            return annotated

        with ThreadPoolExecutor(max_workers=args.workers) as executor:
            futures = {executor.submit(process_batch, batch): batch for batch in batches}
            for future in as_completed(futures):
                batch_results = future.result()
                with lock:
                    for icon_data in batch_results:
                        existing_icons[icon_data["id"]] = icon_data
                        newly_annotated.append(icon_data)
                    pbar.update(len(futures[future]))

        pbar.close()

    else:
        # ── Concurrent vision mode (one icon per call) ──
        pbar = tqdm(total=len(to_annotate), desc="Processing")

        def process_single(icon):
            nonlocal errors
            metadata = annotate_single_vision(client, icon)
            if metadata:
                return {
                    "id": icon["id"],
                    "name": icon["name"],
                    "filename": icon["filename"],
                    "path": icon["path"],
                    "category": icon["category"],
                    "set": icon["set"],
                    "description": metadata.get("description", ""),
                    "tags": metadata.get("tags", []),
                    "use_cases": metadata.get("use_cases", []),
                }
            errors += 1
            return None

        with ThreadPoolExecutor(max_workers=args.workers) as executor:
            futures = {executor.submit(process_single, icon): icon for icon in to_annotate}
            for future in as_completed(futures):
                result = future.result()
                with lock:
                    if result:
                        existing_icons[result["id"]] = result
                        newly_annotated.append(result)
                    pbar.update(1)

        pbar.close()

    # Add any unannotated icons that weren't in existing data
    for icon in to_annotate:
        if icon["id"] not in existing_icons:
            existing_icons[icon["id"]] = {
                "id": icon["id"], "name": icon["name"],
                "filename": icon["filename"], "path": icon["path"],
                "category": icon["category"], "set": icon["set"],
                "description": "", "tags": [], "use_cases": [],
            }

    # Save
    all_icons = list(existing_icons.values())
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    output_data = {
        "icons": all_icons,
        "categories": sorted(set(i.get("category", "") for i in all_icons)),
        "sets": sorted(set(i.get("set", "") for i in all_icons)),
        "meta": {
            "total_icons": len(all_icons),
            "annotated": len([i for i in all_icons if i.get("description")])
        }
    }
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] Saved {len(all_icons)} icons to {OUTPUT_FILE}")
    print(f"  Newly annotated: {len(newly_annotated)}")
    if errors:
        print(f"  Failed: {errors}")
    print(f"  Total annotated: {output_data['meta']['annotated']}/{len(all_icons)}")

    if not args.no_db and newly_annotated:
        print(f"\nUpdating SQLite database...")
        db_count = update_database(newly_annotated)
        print(f"  Updated {db_count} icons in database")


if __name__ == "__main__":
    main()
