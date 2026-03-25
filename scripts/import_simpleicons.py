"""Import curated technology icons from Simple Icons CDN into the catalog.

Source: https://cdn.simpleicons.org/{slug}

Usage (CLI):
    python -m scripts.import_simpleicons
    python -m scripts.import_simpleicons --collection "Apache"
    python -m scripts.import_simpleicons --collection "ML & AI"
"""

import json
import re
import sqlite3
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import HTTPError

DEFAULT_DB = Path(__file__).parent.parent / "data" / "catalog.db"
ICONS_BASE = Path(__file__).parent.parent / "icons"
CDN_URLS = [
    "https://cdn.simpleicons.org/{slug}",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/{slug}.svg",
]

# Curated icon lists per collection
COLLECTIONS = {
    "Apache": {
        "dir": "Apache",
        "icons": {
            "apachespark": "Apache Spark",
            "apachekafka": "Apache Kafka",
            "apacheairflow": "Apache Airflow",
            "apacheflink": "Apache Flink",
            "apachehadoop": "Apache Hadoop",
            "apachehive": "Apache Hive",
            "apachecassandra": "Apache Cassandra",
            "apachenifi": "Apache NiFi",
            "apachemaven": "Apache Maven",
            "apachetomcat": "Apache Tomcat",
            "apacheparquet": "Apache Parquet",
            "apachepulsar": "Apache Pulsar",
            "apachedruid": "Apache Druid",
            "apachesuperset": "Apache Superset",
            "apachegroovy": "Apache Groovy",
            "apacheguacamole": "Apache Guacamole",
        },
    },
    "Data & Analytics": {
        "dir": "Data & Analytics",
        "icons": {
            "sap": "SAP",
            "dbt": "dbt",
            "snowflake": "Snowflake",
            "databricks": "Databricks",
            "tableau": "Tableau",
            "powerbi": "Power BI",
            "looker": "Looker",
            "talend": "Talend",
            "informatica": "Informatica",
            "trino": "Trino",
            "duckdb": "DuckDB",
            "clickhouse": "ClickHouse",
            "elastic": "Elasticsearch",
            "apachesolr": "Apache Solr",
            "mongodb": "MongoDB",
            "postgresql": "PostgreSQL",
        },
    },
    "ML & AI": {
        "dir": "ML & AI",
        "icons": {
            "mlflow": "MLflow",
            "openai": "OpenAI",
            "anthropic": "Anthropic",
            "claude": "Claude",
            "googlegemini": "Google Gemini",
            "mistralai": "Mistral AI",
            "meta": "Meta (Llama)",
            "ollama": "Ollama",
            "perplexity": "Perplexity",
            "replicate": "Replicate",
            "crewai": "CrewAI",
            "huggingface": "Hugging Face",
            "tensorflow": "TensorFlow",
            "pytorch": "PyTorch",
            "scikitlearn": "scikit-learn",
            "weightsandbiases": "Weights & Biases",
            "langchain": "LangChain",
            "langgraph": "LangGraph",
            "jupyter": "Jupyter",
            "numpy": "NumPy",
            "pandas": "pandas",
            "opencv": "OpenCV",
            "onnx": "ONNX",
        },
    },
    "DevOps & Infra": {
        "dir": "DevOps & Infra",
        "icons": {
            "git": "Git",
            "github": "GitHub",
            "githubcopilot": "GitHub Copilot",
            "docker": "Docker",
            "kubernetes": "Kubernetes",
            "terraform": "Terraform",
            "jenkins": "Jenkins",
            "githubactions": "GitHub Actions",
            "gitlab": "GitLab",
            "ansible": "Ansible",
            "prometheus": "Prometheus",
            "grafana": "Grafana",
            "helm": "Helm",
            "vault": "Vault",
            "consul": "Consul",
            "nginx": "NGINX",
            "redis": "Redis",
            "rabbitmq": "RabbitMQ",
            "pulumi": "Pulumi",
        },
    },
}


def _make_icon_id(collection: str, slug: str) -> str:
    col_slug = re.sub(r"[^a-z0-9]+", "_", collection.lower()).strip("_")
    return f"{col_slug}_{slug}"


def _fetch_svg(slug: str) -> bytes | None:
    for cdn_url in CDN_URLS:
        url = cdn_url.format(slug=slug)
        req = Request(url, headers={"User-Agent": "LingaroIconsCatalog/1.0"})
        try:
            return urlopen(req, timeout=10).read()
        except (HTTPError, Exception):
            continue
    print(f"  Warning: failed to fetch {slug} from all CDNs")
    return None


def import_collection(
    collection_name: str,
    db_path: Path = DEFAULT_DB,
) -> dict:
    """Import a single collection from Simple Icons CDN.

    Returns dict with keys: added, removed, unchanged, skipped, total.
    """
    if collection_name not in COLLECTIONS:
        return {"error": f"Unknown collection: {collection_name}"}

    config = COLLECTIONS[collection_name]
    icons_dir = ICONS_BASE / config["dir"]
    icons_dir.mkdir(parents=True, exist_ok=True)

    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    existing = {
        row["id"]: dict(row)
        for row in conn.execute(
            "SELECT * FROM icons WHERE set_name = ?", (collection_name,)
        ).fetchall()
    }

    added = 0
    unchanged = 0
    skipped = 0

    new_icon_ids = set()
    for slug, name in config["icons"].items():
        icon_id = _make_icon_id(collection_name, slug)
        new_icon_ids.add(icon_id)
        filename = f"{slug}.svg"
        rel_path = f"icons/{config['dir']}/{filename}"

        # Always fetch SVG to keep files up to date
        svg_data = _fetch_svg(slug)
        if not svg_data:
            skipped += 1
            continue

        (icons_dir / filename).write_bytes(svg_data)

        if icon_id in existing:
            unchanged += 1
        else:
            conn.execute(
                """INSERT OR IGNORE INTO icons
                   (id, name, filename, path, category, set_name, description, tags, use_cases, status)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                (
                    icon_id, name, f"{config['dir']}/{filename}", rel_path,
                    "general", collection_name,
                    f"{collection_name} icon: {name}",
                    json.dumps([collection_name.lower(), slug]),
                    json.dumps(["architecture diagrams", "presentations", "documentation"]),
                    "ready",
                ),
            )
            added += 1

    # Remove icons no longer in curated list
    removed = 0
    for icon_id, icon in existing.items():
        if icon_id not in new_icon_ids:
            conn.execute("DELETE FROM icons WHERE id = ?", (icon_id,))
            old_path = Path(__file__).parent.parent / icon["path"]
            if old_path.exists():
                old_path.unlink()
            removed += 1

    # Refresh category counts
    conn.execute("DELETE FROM categories")
    conn.execute(
        """INSERT INTO categories (name, icon_count)
           SELECT category, COUNT(*) FROM icons GROUP BY category"""
    )
    conn.commit()
    conn.close()

    result = {
        "added": added,
        "removed": removed,
        "unchanged": unchanged,
        "skipped": skipped,
        "total": added + unchanged,
    }
    return result


def import_all(db_path: Path = DEFAULT_DB) -> dict:
    """Import all curated collections."""
    results = {}
    for name in COLLECTIONS:
        print(f"Importing {name}...")
        results[name] = import_collection(name, db_path)
        print(f"  {results[name]}")
    return results


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Import technology icons from Simple Icons")
    parser.add_argument("--db", type=Path, default=DEFAULT_DB, help="Database path")
    parser.add_argument("--collection", type=str, default=None,
                        help=f"Import a specific collection: {', '.join(COLLECTIONS.keys())}")
    args = parser.parse_args()

    if args.collection:
        result = import_collection(args.collection, args.db)
        print(f"Import {args.collection}: {result}")
    else:
        import_all(args.db)
