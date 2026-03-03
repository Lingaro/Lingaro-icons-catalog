# Lingaro Icons Catalog — Evolution Design

**Date:** 2026-03-03
**Status:** Approved
**Scope:** Evolve from static GitHub Pages site to full-featured icon management platform

## Context

The Lingaro Icons Catalog currently has 248+ SVG icons with AI-generated metadata and semantic search via OpenAI embeddings. It runs as a FastAPI app serving both a static frontend and REST API, with `icons.json` as the sole data store.

### Requirements

1. **Server-hosted API** — deploy on Azure Web App (not static GitHub Pages)
2. **Semantic search** — keep and improve existing embedding-based search
3. **Icon uploads** — upload SVG/PNG, auto-annotate with GPT-4, auto-generate embeddings
4. **Package consumption** — other apps (React/TS diagramming app) can use icons via API client and static npm package
5. **API key auth** — protect write operations, keep reads open

## Architecture: Monolith Evolution

Single FastAPI process with SQLite + Azure Blob Storage.

```
FastAPI app
├── REST API (search, CRUD, upload, admin)
├── SQLite database (metadata + vectors via sqlite-vec)
├── Azure Blob Storage (icon files, production)
├── Local filesystem (icon files, development)
├── Background tasks (annotation + embedding generation)
├── Static frontend (existing catalog UI)
└── Deployed as Azure Web App
```

**Why this approach:** ~250 icons growing to low thousands. SQLite with sqlite-vec handles vector search without external DB infrastructure. Azure Blob stores files. One deployment unit. Migration to PostgreSQL + pgvector is straightforward if ever needed.

## Storage Layer

### SQLite Database (`data/catalog.db`)

```sql
CREATE TABLE icons (
    id TEXT PRIMARY KEY,           -- e.g. "lingaro_set4_absract_brainstorm"
    name TEXT NOT NULL,
    filename TEXT NOT NULL,
    path TEXT NOT NULL,            -- blob path or local path
    category TEXT NOT NULL,
    set_name TEXT NOT NULL,
    description TEXT,
    tags TEXT,                     -- JSON array
    use_cases TEXT,                -- JSON array
    blob_url TEXT,                 -- Azure Blob URL (null for local)
    status TEXT DEFAULT 'ready',   -- 'processing' | 'ready' | 'error'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- sqlite-vec virtual table for embeddings
CREATE VIRTUAL TABLE icon_embeddings USING vec0(
    icon_id TEXT PRIMARY KEY,
    embedding float[256]
);

CREATE TABLE categories (
    name TEXT PRIMARY KEY,
    icon_count INTEGER DEFAULT 0
);
```

### File Storage

- **Production:** Azure Blob Storage, container `lingaro-icons`, path `{set}/{category}/{filename}`
- **Development:** Local `icons/` directory (current layout)
- **Toggle:** `STORAGE_BACKEND` env var (`local` or `azure`)

### Migration

One-time script reads `icons.json`, populates SQLite, and (optionally) uploads existing SVGs to Blob. The JSON file remains as an export/backup format.

## API Endpoints

### Search & Browse

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/search?q=&category=&set=&limit=` | Text + semantic search |
| POST | `/api/search` | Search with JSON body (complex filters) |
| GET | `/api/icons?page=&per_page=&category=&set=` | Paginated browse |
| GET | `/api/icons/{id}` | Single icon with full metadata |
| GET | `/api/categories` | List categories with counts |
| GET | `/api/tags` | Popular tags |

### Icon Files

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/icons/{id}/file` | Serve SVG/PNG from storage |
| GET | `/api/icons/{id}/png?size=128` | On-the-fly SVG-to-PNG at requested size |

### Upload & CRUD (API key required)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/icons` | Upload icon (multipart: file + name + category + set) |
| PUT | `/api/icons/{id}` | Replace icon file |
| PATCH | `/api/icons/{id}` | Update metadata |
| DELETE | `/api/icons/{id}` | Remove icon |
| POST | `/api/icons/bulk` | Upload multiple icons (ZIP or multiple files) |

### Admin (API key required)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/icons/{id}/annotate` | Re-run AI annotation |
| POST | `/api/icons/{id}/embed` | Re-generate embedding |
| GET | `/api/export` | Export full catalog as JSON |
| POST | `/api/import` | Import from JSON |

### Authentication

- Read endpoints: open (no auth)
- Write endpoints: `X-API-Key` header checked against `API_KEY` env var
- Implemented via FastAPI dependency injection

## Upload & Annotation Pipeline

```
POST /api/icons (multipart form)
  1. Validate file (SVG or PNG, <5MB)
  2. Extract metadata (name from filename, category from param)
  3. Store file → Azure Blob or local disk
  4. Insert metadata row in SQLite (status: "processing")
  5. Return 202 Accepted with icon ID
  6. Background task:
     a. Annotate via GPT-4 (Lingaro LLM proxy)
        - SVG → convert to PNG for vision API
        - Generate: description, tags, use_cases
     b. Generate embedding (text-embedding-3-small, 256 dims)
     c. Update SQLite row (status: "ready")
```

Annotation and embedding logic lives in shared service modules (`api/services/`) used by both API handlers and CLI scripts.

## Client Packages

### `@lingaro/icons-client` — API Client

Lightweight TypeScript package wrapping the catalog REST API.

```typescript
import { IconsClient } from '@lingaro/icons-client';

const client = new IconsClient({
  baseUrl: 'https://icons.lingaro.com/api',
  apiKey: 'optional-for-writes'
});

// Search icons
const results = await client.search('database', { category: 'Data Analysis Charts' });

// Get SVG string
const svg = await client.getIconSvg('lingaro_set4_data_analysis_charts_cloud');

// Get PNG blob at specific size
const png = await client.getIconPng('lingaro_set4_data_analysis_charts_cloud', { size: 64 });

// React hook
import { useIconSearch } from '@lingaro/icons-client/react';
const { icons, loading, error } = useIconSearch('database');
```

Published to npm (or private registry). ~5KB bundled.

### `@lingaro/icons` — Static Icon Package

All SVG files as named exports for direct bundling (no runtime API dependency).

```typescript
// SVG strings
import { Cloud, Database, Brainstorm } from '@lingaro/icons';

// React components
import { CloudIcon, DatabaseIcon } from '@lingaro/icons/react';
<CloudIcon size={24} color="#783cbe" />
```

Generated by a build script that reads the catalog. Contains:
- `dist/index.js` — named SVG string exports
- `dist/react.js` — React component wrappers
- `dist/metadata.json` — name, tags, category per icon

Republished when icons change (CI/CD or manual).

## Project Structure

```
Lingaro-icons-catalog/
├── api/
│   ├── main.py              # FastAPI app setup + middleware
│   ├── models.py            # Pydantic models
│   ├── database.py          # SQLite connection + migrations
│   ├── dependencies.py      # Auth (API key), DB session
│   ├── services/
│   │   ├── search.py        # Search engine (sqlite-vec)
│   │   ├── storage.py       # Abstract storage (local / Azure Blob)
│   │   ├── annotation.py    # GPT-4 annotation
│   │   └── embeddings.py    # Embedding generation
│   └── routers/
│       ├── icons.py         # Icon CRUD + file endpoints
│       ├── search.py        # Search endpoints
│       ├── categories.py    # Category endpoints
│       └── admin.py         # Admin / import / export
├── packages/
│   ├── icons-client/        # @lingaro/icons-client
│   │   ├── src/
│   │   │   ├── client.ts    # API client
│   │   │   ├── types.ts     # TypeScript types
│   │   │   └── react.ts     # React hooks
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── icons/               # @lingaro/icons
│       ├── scripts/
│       │   └── build.ts     # Generate exports from catalog
│       ├── src/
│       │   ├── index.ts     # SVG string exports
│       │   └── react.tsx    # React components
│       └── package.json
├── scripts/                  # CLI scripts (refactored to use api/services/)
├── data/                     # SQLite database (gitignored)
├── icons/                    # Local icon storage
├── assets/                   # Frontend (existing)
├── docs/
│   └── plans/
└── run_api.py               # Entry point
```

## Key Dependencies (new)

- `sqlite-vec` — vector search extension for SQLite
- `azure-storage-blob` — Azure Blob Storage SDK
- `python-multipart` — file upload handling in FastAPI
- `cairosvg` — SVG to PNG conversion (for annotation + on-the-fly PNG endpoint)

## Environment Variables

```env
# Existing
OPENAI_API_KEY=...
OPENAI_BASE_URL=https://llm.lingarogroup.com

# New
API_KEY=...                          # For write-operation auth
STORAGE_BACKEND=local                # "local" or "azure"
AZURE_STORAGE_CONNECTION_STRING=...  # When STORAGE_BACKEND=azure
AZURE_STORAGE_CONTAINER=lingaro-icons
DATABASE_URL=data/catalog.db         # SQLite path
```
