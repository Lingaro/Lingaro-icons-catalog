#!/usr/bin/env python3
"""Lingaro Icons Catalog — MCP server.

Exposes catalog search, browse, and download as MCP tools so Claude can
use them directly without shelling out to the CLI.

Requirements:
    pip install mcp httpx

Configuration (environment variables):
    LINGARO_CATALOG_URL  — base URL (default: http://localhost:8000)
    LINGARO_API_KEY      — Personal API Token or shared API key (optional for local)
"""

import asyncio
import os
import sys
from pathlib import Path

import httpx

try:
    from mcp.server import Server
    from mcp.server.stdio import stdio_server
    from mcp.types import Tool, TextContent, CallToolResult
except ImportError:
    sys.exit(
        "mcp package not installed. Run: pip install mcp\n"
        "Or install via the plugin setup: /lingaro-icons:configure"
    )


BASE_URL = os.environ.get("LINGARO_CATALOG_URL", "https://lingaro-icons-catalog.azurewebsites.net").rstrip("/")
API_KEY = os.environ.get("LINGARO_API_KEY", "")


def _headers() -> dict:
    h = {"Accept": "application/json"}
    if API_KEY:
        h["X-API-Key"] = API_KEY
    return h


def _client() -> httpx.Client:
    return httpx.Client(base_url=BASE_URL, headers=_headers(), timeout=30)


def _fmt_icon(icon: dict) -> str:
    parts = [f"ID: {icon.get('id', '?')}", f"Name: {icon.get('name', '?')}"]
    if icon.get("set_name"):
        parts.append(f"Set: {icon['set_name']}")
    if icon.get("category"):
        parts.append(f"Category: {icon['category']}")
    if icon.get("description"):
        parts.append(f"Description: {icon['description']}")
    if icon.get("tags"):
        tags = icon["tags"] if isinstance(icon["tags"], list) else icon["tags"].split(",")
        parts.append(f"Tags: {', '.join(str(t).strip() for t in tags[:8])}")
    return "\n".join(parts)


server = Server("lingaro-catalog")


@server.list_tools()
async def list_tools() -> list[Tool]:
    return [
        Tool(
            name="search_icons",
            description=(
                "Search the Lingaro Icons Catalog by keyword or semantic meaning. "
                "Returns a ranked list of matching icons with IDs, names, sets, and tags."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query"},
                    "set_name": {"type": "string", "description": "Filter by icon set (e.g. 'Azure', 'GCP', 'Databricks', 'Microsoft Fabric', 'lingaro_set4')"},
                    "category": {"type": "string", "description": "Filter by category"},
                    "semantic": {"type": "boolean", "description": "Use semantic/AI search instead of keyword search", "default": False},
                    "limit": {"type": "integer", "description": "Max results to return (default 10)", "default": 10},
                },
                "required": ["query"],
            },
        ),
        Tool(
            name="get_icon",
            description="Get full details for a specific icon by its ID, including description, tags, and download URL.",
            inputSchema={
                "type": "object",
                "properties": {
                    "icon_id": {"type": "string", "description": "The icon ID (e.g. 'Azure_compute_virtualmachines')"},
                },
                "required": ["icon_id"],
            },
        ),
        Tool(
            name="download_icon",
            description="Download an icon file to a local path. Returns the saved path.",
            inputSchema={
                "type": "object",
                "properties": {
                    "icon_id": {"type": "string", "description": "The icon ID to download"},
                    "output_path": {"type": "string", "description": "Local file path to save the icon (e.g. 'icons/azure-vm.svg')"},
                },
                "required": ["icon_id", "output_path"],
            },
        ),
        Tool(
            name="list_collections",
            description="List all available icon sets/collections in the catalog.",
            inputSchema={"type": "object", "properties": {}},
        ),
        Tool(
            name="list_categories",
            description="List categories available in the catalog, optionally filtered by icon set.",
            inputSchema={
                "type": "object",
                "properties": {
                    "set_name": {"type": "string", "description": "Filter categories by icon set name"},
                },
            },
        ),
    ]


@server.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    with _client() as client:
        if name == "search_icons":
            params = {"q": arguments["query"], "limit": arguments.get("limit", 10)}
            if arguments.get("set_name"):
                params["set"] = arguments["set_name"]
            if arguments.get("category"):
                params["category"] = arguments["category"]
            if arguments.get("semantic"):
                params["semantic"] = "true"
            r = client.get("/api/search", params=params)
            r.raise_for_status()
            data = r.json()
            icons = data.get("results") or data.get("icons") or []
            if not icons:
                return [TextContent(type="text", text="No icons found for that query.")]
            lines = [f"Found {len(icons)} icon(s):\n"]
            for i, icon in enumerate(icons, 1):
                lines.append(f"--- {i} ---\n{_fmt_icon(icon)}")
            return [TextContent(type="text", text="\n".join(lines))]

        elif name == "get_icon":
            icon_id = arguments["icon_id"]
            r = client.get(f"/api/icons/{icon_id}")
            r.raise_for_status()
            icon = r.json()
            return [TextContent(type="text", text=_fmt_icon(icon))]

        elif name == "download_icon":
            icon_id = arguments["icon_id"]
            output_path = Path(arguments["output_path"])
            # Get icon details first to find file URL
            r = client.get(f"/api/icons/{icon_id}")
            r.raise_for_status()
            icon = r.json()
            file_url = icon.get("file_url") or icon.get("url")
            if not file_url:
                # Try constructing from icon path
                file_url = f"/icons/{icon.get('file_path', '')}"
            # Download file
            r2 = client.get(file_url)
            r2.raise_for_status()
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_bytes(r2.content)
            return [TextContent(type="text", text=f"Downloaded to: {output_path.resolve()}")]

        elif name == "list_collections":
            r = client.get("/api/collections")
            r.raise_for_status()
            data = r.json()
            sets = data if isinstance(data, list) else data.get("collections", [])
            lines = ["Available icon sets:\n"]
            for s in sets:
                name_val = s if isinstance(s, str) else s.get("name", str(s))
                lines.append(f"  • {name_val}")
            return [TextContent(type="text", text="\n".join(lines))]

        elif name == "list_categories":
            params = {}
            if arguments.get("set_name"):
                params["set"] = arguments["set_name"]
            r = client.get("/api/categories", params=params)
            r.raise_for_status()
            data = r.json()
            cats = data if isinstance(data, list) else data.get("categories", [])
            lines = ["Categories:\n"]
            for c in cats:
                name_val = c if isinstance(c, str) else c.get("name", str(c))
                lines.append(f"  • {name_val}")
            return [TextContent(type="text", text="\n".join(lines))]

        else:
            return [TextContent(type="text", text=f"Unknown tool: {name}")]


async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream, server.create_initialization_options())


if __name__ == "__main__":
    asyncio.run(main())
