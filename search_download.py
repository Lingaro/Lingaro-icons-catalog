#!/usr/bin/env python3
"""
Simple CLI tool to search and download icons from the Lingaro Icons Catalog.

Usage:
    python search_download.py "data visualization" --top 5
    python search_download.py "money" --output ./my_icons
    python search_download.py "person" --category Personas
"""

import argparse
import json
import shutil
import sys
from pathlib import Path
from urllib.parse import urlencode

try:
    import httpx
    HAS_HTTPX = True
except ImportError:
    HAS_HTTPX = False

# Configuration
DEFAULT_API_URL = "http://localhost:8000"
DEFAULT_OUTPUT_DIR = "./downloaded_icons"


def search_icons_api(query: str, api_url: str, top: int = 5, category: str = None) -> list:
    """Search icons using the API."""
    params = {"q": query, "limit": top}
    if category:
        params["category"] = category

    url = f"{api_url}/search?{urlencode(params)}"

    if HAS_HTTPX:
        response = httpx.get(url, timeout=30)
        response.raise_for_status()
        return response.json()["icons"]
    else:
        # Fallback to urllib
        import urllib.request
        with urllib.request.urlopen(url, timeout=30) as resp:
            data = json.loads(resp.read().decode())
            return data["icons"]


def search_icons_local(query: str, data_file: Path, top: int = 5, category: str = None) -> list:
    """Search icons directly from local JSON file (no API needed)."""
    with open(data_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    icons = data.get("icons", [])
    query_lower = query.lower()
    query_words = query_lower.split()

    results = []
    for icon in icons:
        # Filter by category
        if category and icon.get("category") != category:
            continue

        # Calculate score
        score = 0
        name_lower = icon["name"].lower()

        # Name matching
        if name_lower == query_lower:
            score += 100
        elif name_lower.startswith(query_lower):
            score += 50
        elif query_lower in name_lower:
            score += 30

        # Tag matching
        for tag in icon.get("tags", []):
            tag_lower = tag.lower()
            if tag_lower == query_lower:
                score += 40
            elif query_lower in tag_lower:
                score += 20

        # Description matching
        if query_lower in icon.get("description", "").lower():
            score += 15

        # Category matching
        if query_lower in icon.get("category", "").lower():
            score += 10

        # Multi-word: all words present
        if len(query_words) > 1:
            search_text = " ".join([
                name_lower,
                icon.get("description", "").lower(),
                " ".join(t.lower() for t in icon.get("tags", []))
            ])
            if all(w in search_text for w in query_words):
                score += 25

        if score > 0:
            results.append({**icon, "score": score})

    # Sort by score
    results.sort(key=lambda x: x["score"], reverse=True)
    return results[:top]


def download_icons(icons: list, output_dir: Path, icons_base: Path):
    """Download/copy icons to output directory."""
    output_dir.mkdir(parents=True, exist_ok=True)

    downloaded = []
    for icon in icons:
        src_path = icons_base / icon["path"]
        if src_path.exists():
            # Create safe filename
            safe_name = icon["filename"].replace(" ", "_")
            dst_path = output_dir / safe_name

            shutil.copy2(src_path, dst_path)
            downloaded.append({
                "name": icon["name"],
                "file": str(dst_path),
                "score": icon.get("score", 0)
            })

    return downloaded


def main():
    parser = argparse.ArgumentParser(
        description="Search and download icons from Lingaro Icons Catalog"
    )
    parser.add_argument(
        "query",
        help="Search query (e.g., 'data visualization', 'money', 'person')"
    )
    parser.add_argument(
        "--top", "-n",
        type=int,
        default=5,
        help="Number of top results to download (default: 5)"
    )
    parser.add_argument(
        "--output", "-o",
        default=DEFAULT_OUTPUT_DIR,
        help=f"Output directory (default: {DEFAULT_OUTPUT_DIR})"
    )
    parser.add_argument(
        "--category", "-c",
        help="Filter by category (e.g., 'Money', 'Personas')"
    )
    parser.add_argument(
        "--api",
        default=DEFAULT_API_URL,
        help=f"API URL (default: {DEFAULT_API_URL})"
    )
    parser.add_argument(
        "--local",
        action="store_true",
        help="Use local JSON file instead of API"
    )
    parser.add_argument(
        "--list-only",
        action="store_true",
        help="Only list results, don't download"
    )

    args = parser.parse_args()

    # Paths
    project_root = Path(__file__).parent
    data_file = project_root / "assets" / "data" / "icons.json"
    output_dir = Path(args.output)

    print(f"Searching for: '{args.query}'")
    if args.category:
        print(f"Category filter: {args.category}")
    print()

    # Search
    try:
        if args.local or not is_api_available(args.api):
            if not data_file.exists():
                print(f"Error: Data file not found: {data_file}")
                sys.exit(1)
            print("Using local search...")
            icons = search_icons_local(args.query, data_file, args.top, args.category)
        else:
            print(f"Using API at {args.api}...")
            icons = search_icons_api(args.query, args.api, args.top, args.category)
    except Exception as e:
        print(f"Search error: {e}")
        print("Falling back to local search...")
        if data_file.exists():
            icons = search_icons_local(args.query, data_file, args.top, args.category)
        else:
            print(f"Error: Data file not found: {data_file}")
            sys.exit(1)

    if not icons:
        print("No icons found matching your query.")
        sys.exit(0)

    # Display results
    print(f"\nFound {len(icons)} icons:\n")
    print("-" * 60)
    for i, icon in enumerate(icons, 1):
        score = icon.get("score", 0)
        score_str = f" (score: {score:.2f})" if score else ""
        print(f"{i}. {icon['name']}{score_str}")
        print(f"   Category: {icon['category']}")
        if icon.get("tags"):
            print(f"   Tags: {', '.join(icon['tags'][:5])}")
        print(f"   Path: {icon['path']}")
        print()
    print("-" * 60)

    # Download
    if args.list_only:
        print("List-only mode, skipping download.")
        return

    print(f"\nDownloading to: {output_dir}")
    downloaded = download_icons(icons, output_dir, project_root)

    if downloaded:
        print(f"\nDownloaded {len(downloaded)} icons:")
        for item in downloaded:
            print(f"  - {item['name']} -> {item['file']}")
    else:
        print("No icons were downloaded (files may not exist locally).")


def is_api_available(api_url: str) -> bool:
    """Check if API is running."""
    try:
        if HAS_HTTPX:
            response = httpx.get(f"{api_url}/health", timeout=2)
            return response.status_code == 200
        else:
            import urllib.request
            with urllib.request.urlopen(f"{api_url}/health", timeout=2) as resp:
                return resp.status == 200
    except:
        return False


if __name__ == "__main__":
    main()
