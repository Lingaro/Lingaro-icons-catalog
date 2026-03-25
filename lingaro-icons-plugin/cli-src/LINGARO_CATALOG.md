# Lingaro Icons Catalog — CLI Harness SOP

## Overview

The Lingaro Icons Catalog CLI (`cli-anything-lingaro-catalog`) provides complete command-line access to the icon catalog API. It wraps the FastAPI REST API with a rich CLI experience supporting one-shot commands, REPL mode, and JSON output for agent consumption.

## Architecture

```
CLI (Click) → API Client → FastAPI Server → SQLite + Filesystem
```

The CLI communicates exclusively through the REST API — it never touches the database or filesystem directly. This ensures consistency with the web frontend.

## Command Groups

| Group | Purpose | Key Commands |
|-------|---------|-------------|
| `search` | Find icons | `search <query>`, `search --semantic` |
| `icons` | CRUD operations | `list`, `get`, `upload`, `update`, `delete`, `download` |
| `categories` | Browse catalog | `list`, `tags`, `collections` |
| `admin` | Manage catalog | `export`, `import`, `refresh-azure`, `refresh-gcp` |
| `server` | Run API | `start`, `health` |
| `config` | Settings | `set`, `show` |

## Authentication

The CLI supports two auth modes:
1. **API Key** — Set via `config set api-key <key>` or `LINGARO_API_KEY` env var
2. **Azure AD** — Device code flow via `config login`

## Output Modes

- **Human** (default): Formatted tables and colored output
- **JSON** (`--json`): Machine-readable JSON for piping/scripting

## REPL Mode

Launch with `cli-anything-lingaro-catalog repl` for an interactive session with command history, tab completion, and persistent connection.
