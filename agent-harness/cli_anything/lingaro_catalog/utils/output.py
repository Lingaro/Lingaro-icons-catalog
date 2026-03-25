"""Output formatting utilities for human and JSON modes."""

import json
import sys
from typing import Any


def print_json(data: Any):
    """Print data as formatted JSON."""
    print(json.dumps(data, indent=2, default=str))


def print_table(rows: list[dict], columns: list[str], max_widths: dict = None):
    """Print a simple ASCII table."""
    if not rows:
        print("  (no results)")
        return

    max_widths = max_widths or {}

    # Calculate column widths
    widths = {}
    for col in columns:
        widths[col] = max(
            len(col),
            max((len(str(row.get(col, ""))) for row in rows), default=0)
        )
        if col in max_widths:
            widths[col] = min(widths[col], max_widths[col])

    # Header
    header = "  ".join(str(col).ljust(widths[col]) for col in columns)
    print(header)
    print("  ".join("-" * widths[col] for col in columns))

    # Rows
    for row in rows:
        cells = []
        for col in columns:
            val = str(row.get(col, ""))
            w = widths[col]
            if len(val) > w:
                val = val[: w - 1] + "\u2026"
            cells.append(val.ljust(w))
        print("  ".join(cells))


def print_icon_detail(icon: dict):
    """Print detailed icon info."""
    print(f"  ID:          {icon.get('id', 'N/A')}")
    print(f"  Name:        {icon.get('name', 'N/A')}")
    print(f"  Category:    {icon.get('category', 'N/A')}")
    print(f"  Set:         {icon.get('set', icon.get('set_name', 'N/A'))}")
    print(f"  Status:      {icon.get('status', 'N/A')}")

    if desc := icon.get("description"):
        print(f"  Description: {desc}")

    if tags := icon.get("tags"):
        if isinstance(tags, str):
            tags = json.loads(tags)
        print(f"  Tags:        {', '.join(tags)}")

    if use_cases := icon.get("use_cases"):
        if isinstance(use_cases, str):
            use_cases = json.loads(use_cases)
        print(f"  Use Cases:   {', '.join(use_cases)}")

    if score := icon.get("score"):
        print(f"  Score:       {score:.4f}")

    if blob_url := icon.get("blob_url"):
        print(f"  URL:         {blob_url}")


def print_error(msg: str):
    """Print error message to stderr."""
    print(f"Error: {msg}", file=sys.stderr)


def print_success(msg: str):
    """Print success message."""
    print(f"OK: {msg}")


def truncate(s: str, length: int = 60) -> str:
    """Truncate string with ellipsis."""
    if len(s) <= length:
        return s
    return s[: length - 1] + "\u2026"
