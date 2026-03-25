# Azure Icons Import & Refresh

## Summary

Import Microsoft's official 705 Azure architecture icons into the catalog as a new "Azure" collection, with a permanent UI refresh button to sync updates from Microsoft's CDN.

## Source

- **URL**: `https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V23.zip`
- **Structure**: `Azure_Public_Service_Icons/Icons/<category>/<number>-icon-service-<Name>.svg`
- **29 categories**: ai + machine learning, analytics, compute, networking, etc.
- **705 SVGs** (as of V23, November 2025)

## Design

### 1. Import Script (`scripts/import_azure_icons.py`)

Core logic, reusable by both CLI and API:

```python
def import_azure_icons(db_conn, icons_dir: Path, zip_url: str) -> dict:
    """Download zip, extract SVGs, upsert into DB. Returns {added, removed, unchanged}."""
```

**Steps:**
1. Download zip to temp file
2. Extract SVGs into `icons/Azure/<category>/` (e.g., `icons/Azure/compute/00049-icon-service-Virtual-Machine.svg`)
3. Parse icon name from filename: strip numeric prefix and `icon-service-` prefix, replace hyphens with spaces → "Virtual Machine"
4. Generate icon ID: `Azure_<category>_<cleaned_name>` (slugified)
5. For each SVG:
   - If icon ID not in DB → insert (set_name="Azure", category=folder name, status="ready")
   - If icon ID in DB → skip (unchanged)
6. For existing Azure icons in DB not found in zip → delete from DB + disk
7. Refresh category counts

### 2. API Endpoint

`POST /api/admin/refresh-azure-icons` (in `api/routers/admin.py`)

- Protected with `require_api_key`
- Runs import in background via `BackgroundTasks`
- Returns immediately: `{"status": "started", "message": "Azure icons refresh in progress"}`
- Also callable without API key from the UI button (relaxed auth for this specific endpoint since it's read-only from Microsoft CDN)

Decision: **no API key required** for this endpoint — it only downloads public icons from Microsoft. This allows the UI button to work without authentication.

### 3. UI Refresh Button

On the landing page, inside the Azure collection card or as a global admin action:

- Small refresh icon button on the Azure collection card
- Clicking it calls `POST /api/admin/refresh-azure-icons`
- Shows a spinner/toast while running, then displays results

### 4. Cover Icon

Add "Azure" to `COVER_OVERRIDES` in `SearchService._find_cover_icon` with a recognizable Azure icon (e.g., the Azure logo from the "general" category).

### 5. File Layout

```
icons/
  Azure/
    ai + machine learning/
      00028-icon-service-Batch-AI.svg
      ...
    compute/
      00049-icon-service-Virtual-Machine.svg
      ...
    networking/
      ...
scripts/
  import_azure_icons.py    # Core import logic + CLI entry point
```

## Non-Goals

- No GPT annotation of Azure icons (they have descriptive names already)
- No embedding generation (text search by name/category is sufficient)
- No modification of SVG files (Microsoft TOS forbids it)
