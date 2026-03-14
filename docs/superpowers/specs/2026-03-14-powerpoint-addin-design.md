# PowerPoint Add-in for Lingaro Icons Catalog

**Date:** 2026-03-14
**Status:** Approved

## Problem

Lingaro employees building client presentations need quick access to the company's icon catalog (248+ SVG/PNG icons across multiple collections). Currently they must leave PowerPoint, open the web catalog, download icons, and manually insert them. This breaks flow and wastes time.

## Solution

An Office.js task pane add-in for PowerPoint that lets users search, browse, preview, and insert icons directly from the side panel — powered by the existing API at `lingaro-icons-catalog.azurewebsites.net`.

## Users

Internal Lingaro employees building presentations. No external distribution needed.

## Architecture

```
PowerPoint (Desktop / Web / Mac)
  └── Task Pane (React + TypeScript + Office.js)
        ├── UI: search bar, filter pills, icon grid, preview bar
        ├── Data: @lingaro/icons-client → catalog API (HTTPS)
        └── Insert: Office.js setSelectedDataAsync(base64 image)

Catalog API (existing, no changes needed)
  └── lingaro-icons-catalog.azurewebsites.net
      /api/search, /api/icons, /api/collections, /api/icons/{id}/file
```

The task pane is a React web app hosted on the same Azure App Service (under `/addin` path). The XML manifest tells PowerPoint where to load it from.

No authentication required — internal tool, API has open CORS.

## UI Design

### Layout (300px task pane)

1. **Header** — Lingaro purple (#783cbe) bar with logo and "Lingaro Icons" title
2. **Search bar** — text input with debounced search (300ms), calls `/api/search`
3. **Filter pills** — horizontal scrollable chips for collections (All, Lingaro, Azure, Fabric, GCP, Databricks) and categories (Data Analysis, Buildings, etc.)
4. **Icon grid** — 4-column grid of icon tiles with purple-tinted backgrounds
5. **Preview bar** — appears when an icon is selected; shows larger preview, name, tags, format (SVG/PNG), and "Insert" button
6. **Toast** — brief success/error notification after insert

### Interaction Flow

1. User opens task pane via ribbon button
2. Browses by collection/category pills or types a search query
3. Clicks an icon tile to select it → preview bar slides in below the grid
4. Clicks "Insert" → icon is inserted onto the current slide at 1-inch default size
5. Toast confirms insertion
6. User can resize/move the icon in PowerPoint as usual

### Icon Insert Logic

- If the icon is SVG → fetch from `/api/icons/{id}/file`, convert to base64, insert via `Office.context.document.setSelectedDataAsync()` with `coercionType: Office.CoercionType.Image`
- If the icon is PNG → same flow, already raster
- Default size: 1 inch (72 points)
- No color customization in v1

## Project Structure

```
powerpoint-addin/
├── manifest.xml              # Office Add-in manifest
├── package.json
├── tsconfig.json
├── webpack.config.js
├── src/
│   ├── taskpane/
│   │   ├── index.tsx         # Entry point, Office.onReady()
│   │   ├── App.tsx           # Main app shell + state
│   │   ├── components/
│   │   │   ├── SearchBar.tsx       # Debounced search input
│   │   │   ├── FilterPills.tsx     # Collection + category pill chips
│   │   │   ├── IconGrid.tsx        # 4-column icon grid
│   │   │   ├── IconTile.tsx        # Single icon cell with hover badge
│   │   │   ├── PreviewBar.tsx      # Inline preview + Insert button
│   │   │   └── Toast.tsx           # Success/error notification
│   │   ├── hooks/
│   │   │   ├── useSearch.ts        # Wraps icons-client search
│   │   │   ├── useCollections.ts   # Fetches collections + categories
│   │   │   └── useInsertIcon.ts    # Office.js insert logic
│   │   └── styles/
│   │       └── taskpane.css        # Lingaro purple theme
│   └── commands/
│       └── commands.ts       # Ribbon button handler
└── assets/
    ├── icon-16.png           # Add-in ribbon icons
    ├── icon-32.png
    ├── icon-64.png
    └── icon-128.png
```

## Components

| Component | Responsibility |
|-----------|---------------|
| `App.tsx` | Top-level state: selected collection, category, search query, selected icon |
| `SearchBar` | Debounced input (300ms), triggers API search, clears category filter on search |
| `FilterPills` | Loads collections from `/api/collections` and categories from `/api/categories`, renders as toggleable pill chips, resets categories when collection changes |
| `IconGrid` | Renders search results or browse results in a 4-column grid, loading skeleton while fetching |
| `IconTile` | Single icon cell — shows icon preview, purple highlight + "+" badge on hover |
| `PreviewBar` | Shown when icon selected — larger preview, name, tags, format badge (SVG/PNG), "Insert" button |
| `Toast` | Brief notification after insert (success: green, error: red), auto-dismiss after 3s |
| `useSearch` | Wraps `IconsClient.search()` with debounce and loading state |
| `useCollections` | Fetches and caches collection/category data on mount |
| `useInsertIcon` | Fetches icon file as blob → converts to base64 → calls Office.js insert API |

## Manifest & Distribution

### Phase 1: Sideload

Users receive `manifest.xml` (via Teams, email, or shared drive). They load it manually in PowerPoint:

Insert → My Add-ins → Upload My Add-in → select manifest.xml

The "Lingaro Icons" button appears in the ribbon's Home tab.

### Phase 2: Admin Deployment (future)

IT admin uploads the same manifest to Microsoft 365 Admin Center → Integrated Apps. The add-in auto-appears for all users in the org. No manifest format changes needed.

### Manifest Key Settings

- **Type:** TaskPaneApp
- **Host:** Presentation (PowerPoint only)
- **Permissions:** ReadWriteDocument (insert images)
- **SourceLocation:** `https://lingaro-icons-catalog.azurewebsites.net/addin/taskpane.html`

## Hosting

Hosted on the existing Azure App Service at `lingaro-icons-catalog.azurewebsites.net` under the `/addin` path. The FastAPI app serves the built React app as static files. No additional infrastructure needed.

## Tech Stack

- **React 18** + **TypeScript**
- **Office.js** (via `@microsoft/office-js`)
- **Fluent UI React v9** (`@fluentui/react-components`) — Microsoft's design system, looks native in Office
- **@lingaro/icons-client** — existing TypeScript API client from this repo
- **Webpack** — bundler (standard for Office Add-ins, good Yeoman template support)

## Scope Boundaries

**In scope (v1):**
- Search icons by text query
- Browse by collection and category
- Preview selected icon (name, tags, format)
- Insert SVG or PNG onto current slide at 1-inch default
- Ribbon button to open task pane
- Sideload distribution

**Out of scope (future):**
- Color customization before insert
- Drag-and-drop from grid to slide
- Icon size picker
- Favorites / recently used
- Admin deployment (Phase 2)
- Word / Excel support (manifest change only)
