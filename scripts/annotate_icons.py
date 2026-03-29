#!/usr/bin/env python3
"""
Smart annotation for cloud provider icons (Google Cloud, Azure, Microsoft Fabric).
Extracts clean display names from filenames and generates metadata without LLM.

Filename patterns per set:
  Google Cloud:      snake_case.svg                              -> "Snake Case"
  Azure:             NNNNN-icon-service-Hyphenated-Name.svg      -> "Hyphenated Name"
  Microsoft Fabric:  name_64_item.svg / name_20_regular.svg      -> "Name"
"""

import json
import re
import sqlite3
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
ICONS_JSON = PROJECT_ROOT / "assets" / "data" / "icons.json"
DB_PATH = PROJECT_ROOT / "data" / "catalog.db"

# ── Acronyms & special words (shared across all sets) ──────────────────────

SPECIAL_WORDS = {
    "ai": "AI", "api": "API", "apis": "APIs", "bi": "BI", "cdn": "CDN",
    "ci": "CI", "cli": "CLI", "cms": "CMS", "cpu": "CPU", "crm": "CRM",
    "db": "DB", "ddos": "DDoS", "dns": "DNS", "etl": "ETL",
    "gpu": "GPU", "gke": "GKE", "gcp": "GCP", "hpc": "HPC",
    "iam": "IAM", "iot": "IoT", "ip": "IP", "ir": "IR",
    "kql": "KQL", "ml": "ML", "nat": "NAT", "nfs": "NFS",
    "os": "OS", "py": "Python", "qna": "QnA", "rdl": "RDL",
    "sdk": "SDK", "sla": "SLA", "sql": "SQL", "ssl": "SSL",
    "ssis": "SSIS", "tpu": "TPU", "ui": "UI", "url": "URL",
    "vm": "VM", "vpn": "VPN", "vpc": "VPC", "waf": "WAF",
    "xml": "XML", "gen2": "Gen2", "ltr": "LTR", "rtl": "RTL",
    # Azure product names
    "devops": "DevOps", "automl": "AutoML", "mysql": "MySQL",
    "mariadb": "MariaDB", "postgresql": "PostgreSQL", "cosmosdb": "CosmosDB",
    "kubernetes": "Kubernetes", "apigee": "Apigee", "anthos": "Anthos",
    "stackdriver": "Stackdriver", "bigtable": "BigTable", "bigquery": "BigQuery",
    "vertexai": "VertexAI", "tensorflow": "TensorFlow", "powershell": "PowerShell",
    "vmware": "VMware",
}

# ── Name extraction per set ────────────────────────────────────────────────

def extract_name_google_cloud(filename: str) -> str:
    """Google Cloud: snake_case.svg -> Title Case"""
    stem = Path(filename).stem
    # speech-to-text.svg or text-to-speech.svg -> keep hyphens as spaces
    stem = stem.replace("-", " ").replace("_", " ")
    words = stem.split()
    return _title_words(words)


def extract_name_azure(filename: str) -> str:
    """Azure: batch_ai.svg -> Batch AI (or legacy NNNNN-icon-service-Name.svg)"""
    stem = Path(filename).stem
    # Legacy format: strip leading number prefix
    m = re.match(r"^\d+-icon-service-(.+)$", stem)
    if m:
        name_part = m.group(1)
        words = name_part.split("-")
    else:
        # New snake_case format or stripped prefix
        name_part = re.sub(r"^\d+-?", "", stem)
        words = name_part.replace("-", "_").split("_")

    cleaned = []
    for w in words:
        if w.startswith("(") and w.endswith(")"):
            cleaned.append(w)
        elif w:
            cleaned.append(w)
    return _title_words(cleaned)


# Fabric suffixes to strip
_FABRIC_SUFFIXES = [
    r"_\d+_non-item$", r"_\d+_item$", r"_\d+_regular$",
    r"_\d+_color$", r"_\d+_filed$",
]

def extract_name_fabric(filename: str) -> str:
    """Microsoft Fabric: name_64_item.svg -> Name"""
    stem = Path(filename).stem
    for pattern in _FABRIC_SUFFIXES:
        stem = re.sub(pattern, "", stem)
    words = stem.split("_")
    return _title_words(words)


def _title_words(words: list[str]) -> str:
    """Title-case words with special acronym handling."""
    titled = []
    for word in words:
        lower = word.lower()
        if lower in SPECIAL_WORDS:
            titled.append(SPECIAL_WORDS[lower])
        elif word.isupper() and len(word) > 1:
            titled.append(word)  # Keep existing acronyms
        elif word.startswith("("):
            titled.append(word)  # Keep parentheticals
        else:
            titled.append(word.capitalize())
    return " ".join(titled)


# ── Name extractor dispatch ────────────────────────────────────────────────

NAME_EXTRACTORS = {
    "Google Cloud": extract_name_google_cloud,
    "Azure": extract_name_azure,
    "Microsoft Fabric": extract_name_fabric,
}

# ── Tag generation ─────────────────────────────────────────────────────────

SET_TAGS = {
    "Google Cloud": ["google cloud", "gcp", "cloud service"],
    "Azure": ["azure", "microsoft azure", "cloud service"],
    "Microsoft Fabric": ["microsoft fabric", "data platform"],
}

KEYWORD_TAGS = {
    "data": ["data", "analytics"],
    "database": ["database", "storage"],
    "machine learning": ["machine learning", "ai", "ml"],
    "virtual": ["virtual", "virtualization"],
    "network": ["networking", "infrastructure"],
    "security": ["security", "protection"],
    "storage": ["storage", "data"],
    "compute": ["compute", "processing"],
    "container": ["container", "docker", "kubernetes"],
    "monitor": ["monitoring", "observability"],
    "identity": ["identity", "authentication", "iam"],
    "migration": ["migration", "cloud migration"],
    "iot": ["iot", "internet of things"],
    "blockchain": ["blockchain", "distributed ledger"],
    "devops": ["devops", "ci/cd"],
    "integration": ["integration", "middleware"],
    "analytics": ["analytics", "business intelligence"],
    "cognitive": ["cognitive services", "ai"],
    "speech": ["speech", "voice", "audio"],
    "vision": ["vision", "image", "computer vision"],
    "language": ["language", "nlp", "text"],
    "search": ["search", "discovery"],
    "web": ["web", "web services"],
    "mobile": ["mobile", "app"],
    "batch": ["batch", "processing"],
    "stream": ["streaming", "real-time"],
    "pipeline": ["pipeline", "data flow", "etl"],
    "warehouse": ["data warehouse", "analytics"],
    "dashboard": ["dashboard", "visualization"],
    "report": ["report", "business intelligence"],
    "connector": ["connector", "integration"],
    "model": ["model", "machine learning"],
    "cloud": ["cloud", "cloud computing"],
    "governance": ["governance", "compliance"],
    "firewall": ["firewall", "security", "network"],
    "load balancer": ["load balancing", "traffic"],
    "gateway": ["gateway", "networking"],
    "cache": ["cache", "performance"],
    "queue": ["queue", "messaging"],
    "function": ["serverless", "function"],
    "cosmos": ["cosmosdb", "nosql", "database"],
    "synapse": ["synapse", "analytics", "big data"],
    "purview": ["purview", "governance", "data catalog"],
    "sentinel": ["sentinel", "siem", "security"],
    "logic app": ["logic app", "workflow", "automation"],
}


def generate_tags(name: str, category: str, set_name: str) -> list[str]:
    """Generate relevant tags from icon name, category, and set."""
    tags = set()

    # Set-level tags
    tags.update(SET_TAGS.get(set_name, []))

    # Category as tag
    cat_clean = category.lower().replace("+", "").replace("/", " ").strip()
    if cat_clean and len(cat_clean) > 2:
        tags.add(cat_clean)

    # Keyword-based tags
    name_lower = name.lower()
    for keyword, kw_tags in KEYWORD_TAGS.items():
        if keyword in name_lower:
            tags.update(kw_tags)

    # Individual words from name as tags
    for word in name_lower.split():
        if len(word) > 2 and word not in ("the", "and", "for", "non", "icon", "service"):
            tags.add(word)

    return sorted(tags)[:8]


# ── Description generation ─────────────────────────────────────────────────

def generate_description(name: str, category: str, set_name: str) -> str:
    """Generate a description from icon name, category, and set."""
    cat_label = category.replace("/", " - ").replace("+", "&").strip()
    if cat_label:
        return f"{set_name} {cat_label} icon representing {name}"
    return f"{set_name} icon representing {name}"


# ── Use cases ──────────────────────────────────────────────────────────────

SET_USE_CASES = {
    "Google Cloud": [
        "Google Cloud architecture diagrams",
        "Cloud infrastructure documentation",
        "Technical presentations and proposals",
    ],
    "Azure": [
        "Azure architecture diagrams",
        "Cloud infrastructure documentation",
        "Technical presentations and proposals",
    ],
    "Microsoft Fabric": [
        "Microsoft Fabric workspace dashboards",
        "Data platform architecture diagrams",
        "Technical documentation and presentations",
    ],
}


# ── Database sync ─────────────────────────────────────────────────────────

def sync_annotations_to_db(icons: list[dict]) -> int:
    """Sync annotations from icons list into SQLite database."""
    if not DB_PATH.exists():
        print(f"  Database not found at {DB_PATH}, skipping DB sync")
        return 0

    conn = sqlite3.connect(str(DB_PATH))
    updated = 0
    for icon in icons:
        tags_json = json.dumps(icon.get("tags", []))
        use_cases_json = json.dumps(icon.get("use_cases", []))
        description = icon.get("description", "")
        name = icon.get("name", "")
        icon_id = icon.get("id", "")

        cur = conn.execute(
            "UPDATE icons SET description=?, tags=?, use_cases=?, name=? WHERE id=?",
            (description, tags_json, use_cases_json, name, icon_id)
        )
        if cur.rowcount > 0:
            updated += 1

    conn.commit()
    conn.close()
    return updated


# ── Main ───────────────────────────────────────────────────────────────────

def main():
    target_sets = sys.argv[1:] if len(sys.argv) > 1 else list(NAME_EXTRACTORS.keys())

    # Validate
    for s in target_sets:
        if s not in NAME_EXTRACTORS:
            print(f"Error: Unknown set '{s}'. Available: {list(NAME_EXTRACTORS.keys())}")
            sys.exit(1)

    # Load existing icons.json
    with open(ICONS_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    total_updated = 0

    for set_name in target_sets:
        extractor = NAME_EXTRACTORS[set_name]
        updated = 0

        for icon in data["icons"]:
            if icon.get("set") != set_name:
                continue

            # Extract clean name
            clean_name = extractor(icon["filename"])
            category = icon.get("category", "")

            # Generate metadata
            icon["name"] = clean_name
            icon["description"] = generate_description(clean_name, category, set_name)
            icon["tags"] = generate_tags(clean_name, category, set_name)
            icon["use_cases"] = SET_USE_CASES.get(set_name, [
                "Cloud architecture diagrams",
                "Technical documentation",
                "Infrastructure presentations",
            ])
            updated += 1

        print(f"\n{'='*60}")
        print(f" {set_name}: updated {updated} icons")
        print(f"{'='*60}")

        # Show examples
        count = 0
        for icon in data["icons"]:
            if icon.get("set") == set_name and count < 8:
                print(f"  {icon['filename']:55s} -> \"{icon['name']}\"")
                count += 1

        total_updated += updated

    # Update meta counts
    data["meta"]["annotated"] = len([i for i in data["icons"] if i.get("description")])

    # Save icons.json
    with open(ICONS_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    # Sync annotations to SQLite database
    db_updated = sync_annotations_to_db(data["icons"])

    print(f"\nTotal updated: {total_updated} icons (icons.json), {db_updated} icons (database)")
    print(f"Total in catalog: {data['meta']['total_icons']}, Annotated: {data['meta']['annotated']}")


if __name__ == "__main__":
    main()
