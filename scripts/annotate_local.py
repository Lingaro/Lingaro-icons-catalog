#!/usr/bin/env python3
"""
Local AI icon annotation using open-source models (no API keys needed).

Uses BLIP for image captioning + CLIP for zero-shot tag classification.
Runs fully offline on CPU after one-time model download (~1.3GB total).

Install:
    uv pip install transformers torch Pillow open-clip-torch einops timm svglib reportlab

Usage:
    python scripts/annotate_local.py --set "Microsoft Fabric"
    python scripts/annotate_local.py --set "Microsoft Fabric" --force     # re-annotate all
    python scripts/annotate_local.py --set "Microsoft Fabric" --clip-only  # tags only, faster

Performance: ~10-20 min for 400 icons on CPU (vs 90+ min with LLM API).
"""

import json
import sys
import argparse
import time
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from io import BytesIO

from tqdm import tqdm

# ── Configuration ──────────────────────────────────────────────────────────

PROJECT_ROOT = Path(__file__).parent.parent
ICONS_DIR = PROJECT_ROOT / "icons"
OUTPUT_FILE = PROJECT_ROOT / "assets" / "data" / "icons.json"
DB_PATH = PROJECT_ROOT / "data" / "catalog.db"

# Tag vocabulary for CLIP zero-shot classification (cloud/tech domain)
TAG_VOCABULARY = [
    # Cloud & infrastructure
    "cloud computing", "server", "database", "storage", "networking",
    "compute", "virtual machine", "container", "kubernetes", "docker",
    "load balancer", "firewall", "gateway", "cdn", "dns",
    # Data & analytics
    "data analytics", "data warehouse", "data lake", "data pipeline",
    "etl", "data flow", "data migration", "data catalog", "data governance",
    "big data", "streaming", "real-time", "batch processing",
    "business intelligence", "dashboard", "visualization", "chart", "report",
    # AI & ML
    "artificial intelligence", "machine learning", "deep learning",
    "natural language processing", "computer vision", "model training",
    "cognitive services", "bot", "copilot", "automation",
    # Security & identity
    "security", "encryption", "authentication", "identity", "access control",
    "key vault", "certificate", "compliance", "governance", "audit",
    # Development & DevOps
    "development", "code", "api", "sdk", "devops", "ci cd",
    "git", "pipeline", "deployment", "monitoring", "logging",
    "testing", "debugging", "notebook", "workspace",
    # Integration & messaging
    "integration", "messaging", "event", "queue", "webhook",
    "connector", "sync", "workflow", "logic app", "function",
    # IoT & edge
    "iot", "edge computing", "sensor", "device",
    # General
    "settings", "configuration", "management", "resource",
    "user", "team", "organization", "subscription", "billing",
    "search", "filter", "export", "import", "download", "upload",
    "file", "folder", "document", "template", "marketplace",
    "mobile", "web", "desktop", "app",
    "network", "internet", "globe", "connection", "link",
    "clock", "calendar", "schedule", "timer",
    "money", "cost", "budget", "payment",
    "health", "diagnostics", "performance", "optimization",
    "backup", "restore", "disaster recovery",
    "blockchain", "distributed", "ledger",
    "mixed reality", "spatial", "3d",
    "energy", "sustainability", "green",
    "retail", "commerce", "healthcare",
]

# Use-case templates derived from tags
USE_CASE_MAP = {
    "cloud computing": "Cloud architecture diagrams",
    "database": "Database infrastructure documentation",
    "networking": "Network topology diagrams",
    "security": "Security architecture documentation",
    "data analytics": "Data analytics dashboards",
    "artificial intelligence": "AI/ML pipeline documentation",
    "machine learning": "ML workflow diagrams",
    "development": "Development workflow documentation",
    "devops": "CI/CD pipeline diagrams",
    "monitoring": "Monitoring and observability dashboards",
    "integration": "System integration diagrams",
    "iot": "IoT solution architecture",
    "management": "Infrastructure management documentation",
    "visualization": "Data visualization dashboards",
    "streaming": "Real-time data processing diagrams",
}
DEFAULT_USE_CASES = [
    "Cloud architecture diagrams",
    "Technical documentation and presentations",
    "Infrastructure planning materials",
]


def rasterize_svg(svg_path: Path, size: int = 224) -> "Image.Image":
    """Convert SVG to PIL Image for model input.

    Tries renderers in order: cairosvg > svglib > Pillow (inline SVG via XML).
    """
    from PIL import Image

    # Try cairosvg first (best quality)
    try:
        import cairosvg
        png_data = cairosvg.svg2png(
            url=str(svg_path), output_width=size, output_height=size,
            background_color="white"
        )
        return Image.open(BytesIO(png_data)).convert("RGB")
    except Exception:
        pass

    # Try svglib + reportlab (may fail on Windows without native cairo)
    try:
        from svglib.svglib import svg2rlg
    except Exception:
        svg2rlg = None  # type: ignore
    if svg2rlg:
        try:
            from reportlab.graphics import renderPM
            drawing = svg2rlg(str(svg_path))
            if drawing:
                scale = min(size / (drawing.width or size), size / (drawing.height or size))
                drawing.width *= scale
                drawing.height *= scale
                drawing.scale(scale, scale)
                buf = BytesIO()
                renderPM.drawToFile(drawing, buf, fmt="PNG", bg=0xFFFFFF)
                buf.seek(0)
                return Image.open(buf).convert("RGB")
        except Exception:
            pass

    # Fallback: create a simple placeholder image with the icon name
    # CLIP can still extract some signal from text + basic shape
    return _create_placeholder(svg_path, size)


def _create_placeholder(svg_path: Path, size: int = 224) -> "Image.Image":
    """Create a simple white image with the icon name as text.

    This fallback ensures the pipeline works even without a proper SVG renderer.
    CLIP results will be based on icon name text rather than actual icon graphics.
    """
    from PIL import Image, ImageDraw, ImageFont

    img = Image.new("RGB", (size, size), "white")
    draw = ImageDraw.Draw(img)

    # Draw a simple colored rectangle as icon placeholder
    margin = size // 8
    draw.rectangle([margin, margin, size - margin, size - margin],
                   outline="#783cbe", width=3)

    # Draw icon name as text
    name = svg_path.stem.replace("_", " ")
    try:
        font = ImageFont.truetype("arial.ttf", size // 14)
    except (OSError, IOError):
        font = ImageFont.load_default()

    # Word-wrap text to fit
    words = name.split()
    lines = []
    line = ""
    for word in words:
        test = f"{line} {word}".strip()
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] > size - margin * 2:
            if line:
                lines.append(line)
            line = word
        else:
            line = test
    if line:
        lines.append(line)

    y = size // 3
    for ln in lines[:4]:
        bbox = draw.textbbox((0, 0), ln, font=font)
        x = (size - (bbox[2] - bbox[0])) // 2
        draw.text((x, y), ln, fill="#783cbe", font=font)
        y += bbox[3] - bbox[1] + 4

    return img


# ── BLIP captioning ────────────────────────────────────────────────────────

class BLIPCaptioner:
    """Generate image captions using Salesforce BLIP."""

    def __init__(self, model_name: str = "Salesforce/blip-image-captioning-base"):
        import torch
        from transformers import BlipProcessor, BlipForConditionalGeneration

        print(f"Loading BLIP ({model_name})...")
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.processor = BlipProcessor.from_pretrained(model_name)
        self.model = BlipForConditionalGeneration.from_pretrained(model_name).to(self.device)
        self.model.eval()
        print(f"  BLIP loaded on {self.device}")

    def caption(self, image: "Image.Image") -> str:
        """Generate a caption for an image."""
        import torch
        # Conditional captioning with a prompt hint
        inputs = self.processor(image, "an icon of", return_tensors="pt").to(self.device)
        with torch.no_grad():
            out = self.model.generate(**inputs, max_new_tokens=50)
        return self.processor.decode(out[0], skip_special_tokens=True).strip()


# ── CLIP tagging ───────────────────────────────────────────────────────────

class CLIPTagger:
    """Generate tags using CLIP zero-shot classification."""

    def __init__(self, model_name: str = "ViT-B-32", pretrained: str = "laion2b_s34b_b79k"):
        import torch
        import open_clip

        print(f"Loading CLIP ({model_name})...")
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model, _, self.preprocess = open_clip.create_model_and_transforms(
            model_name, pretrained=pretrained, device=self.device
        )
        self.tokenizer = open_clip.get_tokenizer(model_name)
        self.model.eval()

        # Pre-encode tag vocabulary
        print(f"  Encoding {len(TAG_VOCABULARY)} tag candidates...")
        with torch.no_grad():
            text_tokens = self.tokenizer(TAG_VOCABULARY).to(self.device)
            self.text_features = self.model.encode_text(text_tokens)
            self.text_features /= self.text_features.norm(dim=-1, keepdim=True)
        print(f"  CLIP loaded on {self.device}")

    def tag(self, image: "Image.Image", top_k: int = 8, threshold: float = 0.15) -> list[str]:
        """Return top-k tags for an image, filtered by confidence threshold."""
        import torch
        image_input = self.preprocess(image).unsqueeze(0).to(self.device)
        with torch.no_grad():
            image_features = self.model.encode_image(image_input)
            image_features /= image_features.norm(dim=-1, keepdim=True)
            similarities = (image_features @ self.text_features.T).squeeze(0)

        # Get top tags above threshold
        scores = similarities.cpu().numpy()
        indexed = sorted(enumerate(scores), key=lambda x: x[1], reverse=True)
        tags = []
        for idx, score in indexed:
            if score >= threshold and len(tags) < top_k:
                tags.append(TAG_VOCABULARY[idx])
        return tags if tags else [TAG_VOCABULARY[indexed[0][0]]]  # at least 1 tag


def derive_use_cases(tags: list[str]) -> list[str]:
    """Derive use cases from tags."""
    use_cases = []
    for tag in tags:
        for keyword, use_case in USE_CASE_MAP.items():
            if keyword in tag and use_case not in use_cases:
                use_cases.append(use_case)
                break
        if len(use_cases) >= 3:
            break
    # Pad with defaults
    for uc in DEFAULT_USE_CASES:
        if uc not in use_cases and len(use_cases) < 3:
            use_cases.append(uc)
    return use_cases[:3]


# ── Directory scanning (shared with annotate_ai.py) ───────────────────────

def scan_icons(icons_dir: Path, target_set: str = None) -> list:
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
                "id": icon_id, "name": svg_file.stem,
                "filename": svg_file.name,
                "path": str(svg_file.relative_to(icons_dir.parent)).replace("\\", "/"),
                "category": category, "set": set_name,
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
    parser = argparse.ArgumentParser(
        description="Annotate icons using local AI models (Florence-2 + CLIP)"
    )
    parser.add_argument("--set", help="Only process icons from this set")
    parser.add_argument("--force", action="store_true", help="Re-annotate all icons")
    parser.add_argument("--dry-run", action="store_true", help="Just scan, don't annotate")
    parser.add_argument("--no-db", action="store_true", help="Skip SQLite database update")
    parser.add_argument("--limit", type=int, help="Process only N icons (for testing)")
    parser.add_argument("--clip-only", action="store_true",
                        help="Use only CLIP (skip Florence-2, faster but no descriptions)")
    parser.add_argument("--caption-model", default="Salesforce/blip-image-captioning-base",
                        help="Florence-2 model (default: Salesforce/blip-image-captioning-base)")
    parser.add_argument("--top-k", type=int, default=8, help="Number of tags per icon (default: 8)")
    args = parser.parse_args()

    # Scan icons
    print(f"Scanning icons in {ICONS_DIR}...")
    icons = scan_icons(ICONS_DIR, args.set)
    print(f"Found {len(icons)} icons")

    if args.dry_run:
        print("\nDry run - not loading models")
        for icon in icons[:10]:
            print(f"  - {icon['name']} ({icon['category']})")
        if len(icons) > 10:
            print(f"  ... and {len(icons) - 10} more")
        return

    # Filter to icons that need annotation
    existing_data = load_existing_data(OUTPUT_FILE)
    existing_icons = {i["id"]: i for i in existing_data.get("icons", [])}

    to_annotate = []
    for icon in icons:
        if icon["id"] in existing_icons and not args.force:
            if existing_icons[icon["id"]].get("description"):
                continue
        to_annotate.append(icon)

    if args.limit:
        to_annotate = to_annotate[:args.limit]

    if not to_annotate:
        print("All icons already annotated. Use --force to re-annotate.")
        return

    print(f"\nAnnotating {len(to_annotate)} icons with local models...")

    # Load models
    t0 = time.time()
    clip_tagger = CLIPTagger()
    captioner = None if args.clip_only else BLIPCaptioner(args.caption_model)
    model_load_time = time.time() - t0
    print(f"Models loaded in {model_load_time:.1f}s\n")

    # Process icons
    newly_annotated = []
    errors = 0

    for icon in tqdm(to_annotate, desc="Annotating"):
        try:
            image = rasterize_svg(icon["full_path"])

            # Get tags from CLIP
            tags = clip_tagger.tag(image, top_k=args.top_k)

            # Get description from Florence-2
            if captioner:
                description = captioner.caption(image)
            else:
                description = f"Icon representing {icon['name'].lower().replace('_', ' ')}"

            # Derive use cases from tags
            use_cases = derive_use_cases(tags)

            icon_data = {
                "id": icon["id"],
                "name": icon["name"],
                "filename": icon["filename"],
                "path": icon["path"],
                "category": icon["category"],
                "set": icon["set"],
                "description": description,
                "tags": tags,
                "use_cases": use_cases,
            }
            existing_icons[icon["id"]] = icon_data
            newly_annotated.append(icon_data)

        except Exception as e:
            errors += 1
            tqdm.write(f"  Error: {icon['name']}: {e}")
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

    total_time = time.time() - t0
    print(f"\n[OK] Saved {len(all_icons)} icons to {OUTPUT_FILE}")
    print(f"  Newly annotated: {len(newly_annotated)}")
    if errors:
        print(f"  Failed: {errors}")
    print(f"  Total annotated: {output_data['meta']['annotated']}/{len(all_icons)}")
    print(f"  Time: {total_time:.1f}s ({total_time/max(len(newly_annotated),1):.2f}s/icon)")

    if not args.no_db and newly_annotated:
        print(f"\nUpdating SQLite database...")
        db_count = update_database(newly_annotated)
        print(f"  Updated {db_count} icons in database")


if __name__ == "__main__":
    main()
