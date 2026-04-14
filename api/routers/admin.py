"""Admin endpoints -- export, import, re-annotate."""

import json
import re

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, UploadFile, File

from ..database import insert_icon, get_icon, refresh_category_counts, DEFAULT_DB_PATH
from ..dependencies import get_database, require_admin
from ..services.search import SearchService

router = APIRouter(prefix="/api/admin", tags=["admin"])

# Track refresh status per provider
_refresh_status = {
    "azure": {"running": False, "last_result": None},
    "gcp": {"running": False, "last_result": None},
}


@router.get("/export")
async def export_catalog(_auth=Depends(require_admin), db=Depends(get_database)):
    search = SearchService(db)
    icons = search.list_icons(limit=10000)
    categories = search.get_categories()
    return {"icons": icons, "categories": [c["name"] for c in categories], "meta": {"total_icons": len(icons)}}


@router.post("/import")
async def import_catalog(file: UploadFile = File(...), _auth=Depends(require_admin), db=Depends(get_database)):
    content = await file.read()
    try:
        data = json.loads(content)
    except json.JSONDecodeError:
        raise HTTPException(400, "Invalid JSON")
    # Allowlist pattern: icons/<set>/<category>/<file>.(svg|png)
    _SAFE_PATH = re.compile(r"^icons/[a-zA-Z0-9_\- .]+/[a-zA-Z0-9_\- .+]+/[a-zA-Z0-9_\- .]+\.(svg|png)$")
    count = 0
    for icon in data.get("icons", []):
        icon_path = icon.get("path", "")
        if not _SAFE_PATH.match(icon_path):
            continue  # skip icons with suspicious paths
        if get_icon(db, icon["id"]):
            continue
        insert_icon(db, {
            "id": icon["id"], "name": icon["name"], "filename": icon["filename"],
            "path": icon_path, "category": icon.get("category", ""),
            "set_name": icon.get("set", icon.get("set_name", "")),
            "description": icon.get("description"),
            "tags": icon.get("tags", []), "use_cases": icon.get("use_cases", []),
            "status": "ready",
        })
        count += 1
    refresh_category_counts(db)
    return {"imported": count}


def _run_refresh(provider: str):
    """Background task: download and import icons for a provider."""
    status = _refresh_status[provider]
    try:
        status["running"] = True
        if provider == "azure":
            from scripts.import_azure_icons import import_azure_icons
            result = import_azure_icons(DEFAULT_DB_PATH)
        elif provider == "gcp":
            from scripts.import_gcp_icons import import_gcp_icons
            result = import_gcp_icons(DEFAULT_DB_PATH)
        else:
            result = {"error": f"Unknown provider: {provider}"}
        status["last_result"] = result
    except Exception as e:
        status["last_result"] = {"error": str(e)}
    finally:
        status["running"] = False


@router.post("/refresh-azure-icons")
async def refresh_azure_icons(background_tasks: BackgroundTasks, _auth=Depends(require_admin)):
    """Download latest Azure icons from Microsoft and sync with catalog."""
    if _refresh_status["azure"]["running"]:
        return {"status": "already_running", "message": "Azure icons refresh is already in progress"}
    background_tasks.add_task(_run_refresh, "azure")
    return {"status": "started", "message": "Azure icons refresh started in background"}


@router.get("/refresh-azure-icons/status")
async def refresh_azure_icons_status(_auth=Depends(require_admin)):
    return _refresh_status["azure"]


@router.post("/refresh-gcp-icons")
async def refresh_gcp_icons(background_tasks: BackgroundTasks, _auth=Depends(require_admin)):
    """Download latest GCP icons from Google and sync with catalog."""
    if _refresh_status["gcp"]["running"]:
        return {"status": "already_running", "message": "GCP icons refresh is already in progress"}
    background_tasks.add_task(_run_refresh, "gcp")
    return {"status": "started", "message": "GCP icons refresh started in background"}


@router.get("/refresh-gcp-icons/status")
async def refresh_gcp_icons_status(_auth=Depends(require_admin)):
    return _refresh_status["gcp"]
