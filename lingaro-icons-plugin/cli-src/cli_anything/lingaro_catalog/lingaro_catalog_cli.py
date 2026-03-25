"""Lingaro Icons Catalog CLI — main entry point.

Usage:
    cli-anything-lingaro-catalog [--json] [--url URL] [--api-key KEY] COMMAND [ARGS]
    cli-anything-lingaro-catalog repl
"""

import json
import os
import sys
from pathlib import Path

import click

from cli_anything.lingaro_catalog.core.config import CLIConfig
from cli_anything.lingaro_catalog.core.client import CatalogClient, APIError
from cli_anything.lingaro_catalog.utils.output import (
    print_json,
    print_table,
    print_icon_detail,
    print_error,
    print_success,
)


class Context:
    """Shared CLI context."""

    def __init__(self):
        self.config = CLIConfig.load()
        self.json_mode = False
        self._client = None

    @property
    def client(self) -> CatalogClient:
        if self._client is None:
            self._client = CatalogClient(self.config.base_url, self.config.api_key)
        return self._client

    def output(self, data):
        """Output data in the configured format."""
        if self.json_mode:
            print_json(data)
        return data


pass_ctx = click.make_pass_decorator(Context, ensure=True)


def handle_api_error(func):
    """Decorator to catch API errors."""
    import functools

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except APIError as e:
            ctx = args[0] if args and isinstance(args[0], Context) else None
            if ctx and ctx.json_mode:
                print_json({"error": e.detail, "status_code": e.status_code})
            else:
                print_error(e.detail)
            sys.exit(1)

    return wrapper


# ═══════════════════════════════════════════════════════════════
# Root group
# ═══════════════════════════════════════════════════════════════

@click.group(invoke_without_command=True)
@click.option("--json", "json_mode", is_flag=True, help="Output as JSON")
@click.option("--url", envvar="LINGARO_CATALOG_URL", help="API base URL")
@click.option("--api-key", envvar="LINGARO_API_KEY", help="API key")
@click.version_option(package_name="cli-anything-lingaro-catalog")
@click.pass_context
def cli(click_ctx, json_mode, url, api_key):
    """Lingaro Icons Catalog CLI — search, browse, and manage icons."""
    ctx = Context()
    ctx.json_mode = json_mode
    if url:
        ctx.config.base_url = url
    if api_key:
        ctx.config.api_key = api_key
    click_ctx.obj = ctx

    if click_ctx.invoked_subcommand is None:
        click.echo(click_ctx.get_help())


# ═══════════════════════════════════════════════════════════════
# search
# ═══════════════════════════════════════════════════════════════

@cli.command()
@click.argument("query")
@click.option("-c", "--category", help="Filter by category")
@click.option("-s", "--set", "set_name", help="Filter by icon set")
@click.option("-n", "--limit", type=int, default=20, help="Max results")
@click.option("--semantic", is_flag=True, help="Use semantic search")
@pass_ctx
@handle_api_error
def search(ctx, query, category, set_name, limit, semantic):
    """Search for icons by query."""
    result = ctx.client.search(query, category, set_name, limit, semantic)

    if ctx.json_mode:
        ctx.output(result)
        return

    icons = result.get("icons", [])
    total = result.get("total", len(icons))
    mode = "semantic" if result.get("semantic_search") else "text"

    click.echo(f"Found {total} icons ({mode} search):\n")

    if icons:
        rows = []
        for icon in icons:
            rows.append({
                "id": icon.get("id", ""),
                "name": icon.get("name", ""),
                "category": icon.get("category", ""),
                "set": icon.get("set", icon.get("set_name", "")),
                "score": f"{icon.get('score', 0):.2f}" if icon.get("score") else "",
            })
        print_table(rows, ["id", "name", "category", "set", "score"],
                     max_widths={"id": 40, "name": 30})
    else:
        click.echo("  No icons found.")


# ═══════════════════════════════════════════════════════════════
# icons
# ═══════════════════════════════════════════════════════════════

@cli.group()
@pass_ctx
def icons(ctx):
    """Manage icons (list, get, upload, update, delete, download)."""
    pass


@icons.command("list")
@click.option("-c", "--category", help="Filter by category")
@click.option("-s", "--set", "set_name", help="Filter by icon set")
@click.option("-n", "--limit", type=int, default=20, help="Max results")
@click.option("--offset", type=int, default=0, help="Offset for pagination")
@pass_ctx
@handle_api_error
def icons_list(ctx, category, set_name, limit, offset):
    """List icons with optional filters."""
    result = ctx.client.list_icons(category, set_name, limit, offset)

    if ctx.json_mode:
        ctx.output(result)
        return

    icons_data = result if isinstance(result, list) else result.get("icons", [])

    if icons_data:
        rows = [{
            "id": i.get("id", ""),
            "name": i.get("name", ""),
            "category": i.get("category", ""),
            "set": i.get("set", i.get("set_name", "")),
        } for i in icons_data]
        print_table(rows, ["id", "name", "category", "set"],
                     max_widths={"id": 40, "name": 30})
    else:
        click.echo("  No icons found.")


@icons.command("get")
@click.argument("icon_id")
@pass_ctx
@handle_api_error
def icons_get(ctx, icon_id):
    """Get detailed info for an icon."""
    icon = ctx.client.get_icon(icon_id)

    if ctx.json_mode:
        ctx.output(icon)
        return

    print_icon_detail(icon)


@icons.command("download")
@click.argument("icon_id")
@click.option("-o", "--output", "output_path", help="Output file path")
@pass_ctx
@handle_api_error
def icons_download(ctx, icon_id, output_path):
    """Download an icon file."""
    data = ctx.client.download_icon(icon_id)

    if not output_path:
        # Derive filename from icon info
        icon = ctx.client.get_icon(icon_id)
        output_path = icon.get("filename", f"{icon_id}.svg")

    Path(output_path).write_bytes(data)

    if ctx.json_mode:
        ctx.output({"file": output_path, "size": len(data)})
    else:
        print_success(f"Downloaded to {output_path} ({len(data)} bytes)")


@icons.command("upload")
@click.argument("file_path", type=click.Path(exists=True))
@click.option("-c", "--category", required=True, help="Icon category")
@click.option("-s", "--set", "set_name", required=True, help="Icon set name")
@click.option("--name", help="Icon name (defaults to filename)")
@pass_ctx
@handle_api_error
def icons_upload(ctx, file_path, category, set_name, name):
    """Upload a new icon (admin only)."""
    result = ctx.client.upload_icon(file_path, category, set_name, name)

    if ctx.json_mode:
        ctx.output(result)
    else:
        icon_id = result.get("id", "unknown")
        status = result.get("status", "processing")
        print_success(f"Uploaded icon {icon_id} (status: {status})")


@icons.command("update")
@click.argument("icon_id")
@click.option("-d", "--description", help="New description")
@click.option("-t", "--tags", help="Comma-separated tags")
@click.option("-u", "--use-cases", help="Comma-separated use cases")
@pass_ctx
@handle_api_error
def icons_update(ctx, icon_id, description, tags, use_cases):
    """Update icon metadata (admin only)."""
    tag_list = [t.strip() for t in tags.split(",")] if tags else None
    uc_list = [u.strip() for u in use_cases.split(",")] if use_cases else None

    result = ctx.client.update_icon(icon_id, description, tag_list, uc_list)

    if ctx.json_mode:
        ctx.output(result)
    else:
        print_success(f"Updated icon {icon_id}")


@icons.command("delete")
@click.argument("icon_id")
@click.option("--yes", "-y", is_flag=True, help="Skip confirmation")
@pass_ctx
@handle_api_error
def icons_delete(ctx, icon_id, yes):
    """Delete an icon (admin only)."""
    if not yes:
        click.confirm(f"Delete icon {icon_id}?", abort=True)

    result = ctx.client.delete_icon(icon_id)

    if ctx.json_mode:
        ctx.output(result or {"deleted": icon_id})
    else:
        print_success(f"Deleted icon {icon_id}")


# ═══════════════════════════════════════════════════════════════
# categories
# ═══════════════════════════════════════════════════════════════

@cli.group()
@pass_ctx
def categories(ctx):
    """Browse categories, tags, and collections."""
    pass


@categories.command("list")
@pass_ctx
@handle_api_error
def categories_list(ctx):
    """List all categories with icon counts."""
    result = ctx.client.list_categories()

    if ctx.json_mode:
        ctx.output(result)
        return

    cats = result if isinstance(result, list) else result.get("categories", [])
    if cats:
        rows = [{"name": c.get("name", ""), "count": c.get("count", c.get("icon_count", 0))}
                for c in cats]
        print_table(rows, ["name", "count"])
    else:
        click.echo("  No categories found.")


@categories.command("tags")
@click.option("-n", "--limit", type=int, default=30, help="Max tags to show")
@pass_ctx
@handle_api_error
def categories_tags(ctx, limit):
    """List popular tags."""
    result = ctx.client.list_tags(limit)

    if ctx.json_mode:
        ctx.output(result)
        return

    tags = result if isinstance(result, list) else result.get("tags", [])
    if tags:
        rows = [{"tag": t.get("name", t.get("tag", "")),
                 "count": t.get("count", 0)} for t in tags]
        print_table(rows, ["tag", "count"])
    else:
        click.echo("  No tags found.")


@categories.command("collections")
@pass_ctx
@handle_api_error
def categories_collections(ctx):
    """List icon collections (sets)."""
    result = ctx.client.list_collections()

    if ctx.json_mode:
        ctx.output(result)
        return

    collections = result if isinstance(result, list) else result.get("collections", [])
    if collections:
        rows = [{
            "name": c.get("name", ""),
            "icons": c.get("icon_count", 0),
            "categories": len(c.get("categories", [])),
        } for c in collections]
        print_table(rows, ["name", "icons", "categories"])
    else:
        click.echo("  No collections found.")


# ═══════════════════════════════════════════════════════════════
# admin
# ═══════════════════════════════════════════════════════════════

@cli.group()
@pass_ctx
def admin(ctx):
    """Admin operations (export, import, refresh)."""
    pass


@admin.command("export")
@click.option("-o", "--output", "output_path", help="Output file (default: stdout)")
@pass_ctx
@handle_api_error
def admin_export(ctx, output_path):
    """Export the entire catalog as JSON."""
    result = ctx.client.export_catalog()

    if output_path:
        with open(output_path, "w") as f:
            json.dump(result, f, indent=2)
        if not ctx.json_mode:
            print_success(f"Exported catalog to {output_path}")
    else:
        print_json(result)


@admin.command("import")
@click.argument("file_path", type=click.Path(exists=True))
@pass_ctx
@handle_api_error
def admin_import(ctx, file_path):
    """Import a catalog from JSON file."""
    result = ctx.client.import_catalog(file_path)

    if ctx.json_mode:
        ctx.output(result)
    else:
        print_success(f"Imported catalog from {file_path}")
        if isinstance(result, dict):
            for key, val in result.items():
                click.echo(f"  {key}: {val}")


@admin.command("refresh-azure")
@pass_ctx
@handle_api_error
def admin_refresh_azure(ctx):
    """Refresh Azure icons from Microsoft CDN."""
    result = ctx.client.refresh_azure()

    if ctx.json_mode:
        ctx.output(result)
    else:
        print_success("Azure icon refresh started")
        if isinstance(result, dict):
            for key, val in result.items():
                click.echo(f"  {key}: {val}")


@admin.command("refresh-azure-status")
@pass_ctx
@handle_api_error
def admin_refresh_azure_status(ctx):
    """Check Azure icon refresh status."""
    result = ctx.client.refresh_azure_status()

    if ctx.json_mode:
        ctx.output(result)
    else:
        status = result.get("status", "unknown") if isinstance(result, dict) else result
        click.echo(f"Azure refresh status: {status}")


@admin.command("refresh-gcp")
@pass_ctx
@handle_api_error
def admin_refresh_gcp(ctx):
    """Refresh Google Cloud icons."""
    result = ctx.client.refresh_gcp()

    if ctx.json_mode:
        ctx.output(result)
    else:
        print_success("GCP icon refresh started")


@admin.command("refresh-gcp-status")
@pass_ctx
@handle_api_error
def admin_refresh_gcp_status(ctx):
    """Check GCP icon refresh status."""
    result = ctx.client.refresh_gcp_status()

    if ctx.json_mode:
        ctx.output(result)
    else:
        status = result.get("status", "unknown") if isinstance(result, dict) else result
        click.echo(f"GCP refresh status: {status}")


# ═══════════════════════════════════════════════════════════════
# config
# ═══════════════════════════════════════════════════════════════

@cli.group()
@pass_ctx
def config(ctx):
    """Manage CLI configuration."""
    pass


@config.command("show")
@pass_ctx
def config_show(ctx):
    """Show current configuration."""
    from dataclasses import asdict
    data = asdict(ctx.config)
    # Mask API key
    if data.get("api_key"):
        data["api_key"] = data["api_key"][:4] + "****"

    if ctx.json_mode:
        ctx.output(data)
    else:
        for key, val in data.items():
            click.echo(f"  {key}: {val}")


@config.command("set")
@click.argument("key")
@click.argument("value")
@pass_ctx
def config_set(ctx, key, value):
    """Set a configuration value."""
    # Normalize key names
    key = key.replace("-", "_")
    try:
        ctx.config.set_value(key, value)
        if ctx.json_mode:
            ctx.output({"key": key, "value": value})
        else:
            print_success(f"Set {key} = {value}")
    except KeyError as e:
        print_error(str(e))
        sys.exit(1)


# ═══════════════════════════════════════════════════════════════
# server
# ═══════════════════════════════════════════════════════════════

@cli.group()
@pass_ctx
def server(ctx):
    """Start or check the API server."""
    pass


@server.command("start")
@click.option("--host", default="0.0.0.0", help="Bind host")
@click.option("--port", type=int, default=8000, help="Bind port")
@click.option("--no-reload", is_flag=True, help="Disable auto-reload")
@pass_ctx
def server_start(ctx, host, port, no_reload):
    """Start the Lingaro Catalog API server."""
    import subprocess
    # Find the project root (2 levels up from this file's package)
    project_root = Path(__file__).resolve().parents[3]
    run_api = project_root / "run_api.py"

    if not run_api.exists():
        print_error(f"run_api.py not found at {run_api}")
        sys.exit(1)

    cmd = [sys.executable, str(run_api), "--host", host, "--port", str(port)]
    if no_reload:
        cmd.append("--no-reload")

    click.echo(f"Starting server at {host}:{port}...")
    subprocess.run(cmd, cwd=str(project_root))


@server.command("health")
@pass_ctx
@handle_api_error
def server_health(ctx):
    """Check if the API server is running."""
    result = ctx.client.health()

    if ctx.json_mode:
        ctx.output(result)
    else:
        status = result.get("status", "unknown")
        click.echo(f"Server: {status}")
        if isinstance(result, dict):
            for key, val in result.items():
                if key != "status":
                    click.echo(f"  {key}: {val}")


@server.command("stats")
@pass_ctx
@handle_api_error
def server_stats(ctx):
    """Show catalog statistics."""
    result = ctx.client.stats()

    if ctx.json_mode:
        ctx.output(result)
    else:
        click.echo("Catalog Statistics:")
        if isinstance(result, dict):
            for key, val in result.items():
                click.echo(f"  {key}: {val}")


# ═══════════════════════════════════════════════════════════════
# repl
# ═══════════════════════════════════════════════════════════════

@cli.command()
@pass_ctx
def repl(ctx):
    """Start an interactive REPL session."""
    click.echo("Lingaro Icons Catalog CLI — Interactive Mode")
    click.echo("Type 'help' for commands, 'quit' to exit.\n")

    # Check server connectivity
    try:
        health = ctx.client.health()
        click.echo(f"Connected to {ctx.config.base_url} (status: {health.get('status', 'ok')})\n")
    except APIError:
        click.echo(f"Warning: Cannot connect to {ctx.config.base_url}\n")

    while True:
        try:
            line = input("lingaro> ").strip()
        except (EOFError, KeyboardInterrupt):
            click.echo("\nBye!")
            break

        if not line:
            continue
        if line in ("quit", "exit", "q"):
            click.echo("Bye!")
            break
        if line == "help":
            click.echo("Commands:")
            click.echo("  search <query>           - Search icons")
            click.echo("  search --semantic <query> - Semantic search")
            click.echo("  icons list               - List icons")
            click.echo("  icons get <id>           - Get icon details")
            click.echo("  icons download <id>      - Download icon")
            click.echo("  categories list          - List categories")
            click.echo("  categories tags          - List tags")
            click.echo("  categories collections   - List collections")
            click.echo("  config show              - Show config")
            click.echo("  health                   - Check server")
            click.echo("  stats                    - Catalog stats")
            click.echo("  quit                     - Exit")
            continue

        # Parse and dispatch
        parts = line.split()
        cmd = parts[0]

        try:
            if cmd == "search":
                query = " ".join(parts[1:]).strip()
                semantic = False
                if "--semantic" in query:
                    semantic = True
                    query = query.replace("--semantic", "").strip()
                if query:
                    result = ctx.client.search(query, semantic=semantic)
                    icons_list = result.get("icons", [])
                    mode = "semantic" if result.get("semantic_search") else "text"
                    click.echo(f"Found {result.get('total', len(icons_list))} icons ({mode}):")
                    for icon in icons_list[:10]:
                        score = f" ({icon['score']:.2f})" if icon.get("score") else ""
                        click.echo(f"  {icon['id']} — {icon.get('name', '')}{score}")
                else:
                    click.echo("Usage: search <query>")

            elif cmd == "icons":
                subcmd = parts[1] if len(parts) > 1 else "list"
                if subcmd == "list":
                    result = ctx.client.list_icons(limit=10)
                    icon_data = result if isinstance(result, list) else result.get("icons", [])
                    for icon in icon_data:
                        click.echo(f"  {icon['id']} — {icon.get('name', '')}")
                elif subcmd == "get" and len(parts) > 2:
                    icon = ctx.client.get_icon(parts[2])
                    print_icon_detail(icon)
                elif subcmd == "download" and len(parts) > 2:
                    data = ctx.client.download_icon(parts[2])
                    icon = ctx.client.get_icon(parts[2])
                    fname = icon.get("filename", f"{parts[2]}.svg")
                    Path(fname).write_bytes(data)
                    click.echo(f"  Downloaded {fname} ({len(data)} bytes)")
                else:
                    click.echo("Usage: icons [list|get <id>|download <id>]")

            elif cmd == "categories":
                subcmd = parts[1] if len(parts) > 1 else "list"
                if subcmd == "list":
                    cats = ctx.client.list_categories()
                    cat_list = cats if isinstance(cats, list) else cats.get("categories", [])
                    for c in cat_list:
                        click.echo(f"  {c.get('name', '')} ({c.get('count', c.get('icon_count', 0))})")
                elif subcmd == "tags":
                    tags = ctx.client.list_tags()
                    tag_list = tags if isinstance(tags, list) else tags.get("tags", [])
                    for t in tag_list[:20]:
                        click.echo(f"  {t.get('name', t.get('tag', ''))} ({t.get('count', 0)})")
                elif subcmd == "collections":
                    colls = ctx.client.list_collections()
                    coll_list = colls if isinstance(colls, list) else colls.get("collections", [])
                    for c in coll_list:
                        click.echo(f"  {c.get('name', '')} ({c.get('icon_count', 0)} icons)")
                else:
                    click.echo("Usage: categories [list|tags|collections]")

            elif cmd == "health":
                result = ctx.client.health()
                click.echo(f"Server: {result.get('status', 'ok')}")

            elif cmd == "stats":
                result = ctx.client.stats()
                for k, v in result.items():
                    click.echo(f"  {k}: {v}")

            elif cmd == "config":
                subcmd = parts[1] if len(parts) > 1 else "show"
                if subcmd == "show":
                    from dataclasses import asdict
                    for k, v in asdict(ctx.config).items():
                        if k == "api_key" and v:
                            v = v[:4] + "****"
                        click.echo(f"  {k}: {v}")
                else:
                    click.echo("Usage: config show")

            else:
                click.echo(f"Unknown command: {cmd}. Type 'help' for commands.")

        except APIError as e:
            click.echo(f"  Error: {e.detail}")
        except Exception as e:
            click.echo(f"  Error: {e}")


def main():
    cli()


if __name__ == "__main__":
    main()
