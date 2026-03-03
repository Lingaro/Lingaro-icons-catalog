"""Admin endpoints -- export, import, re-annotate."""

import json

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File

from ..database import insert_icon, get_icon, refresh_category_counts
from ..dependencies import get_database, require_api_key
from ..services.search import SearchService

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.get("/export")
async def export_catalog(db=Depends(get_database)):
    search = SearchService(db)
    icons = search.list_icons(limit=10000)
    categories = search.get_categories()
    return {"icons": icons, "categories": [c["name"] for c in categories], "meta": {"total_icons": len(icons)}}


@router.post("/import")
async def import_catalog(file: UploadFile = File(...), _auth=Depends(require_api_key), db=Depends(get_database)):
    content = await file.read()
    try:
        data = json.loads(content)
    except json.JSONDecodeError:
        raise HTTPException(400, "Invalid JSON")
    count = 0
    for icon in data.get("icons", []):
        if get_icon(db, icon["id"]):
            continue
        insert_icon(db, {
            "id": icon["id"], "name": icon["name"], "filename": icon["filename"],
            "path": icon["path"], "category": icon.get("category", ""),
            "set_name": icon.get("set", icon.get("set_name", "")),
            "description": icon.get("description"),
            "tags": icon.get("tags", []), "use_cases": icon.get("use_cases", []),
            "status": "ready",
        })
        count += 1
    refresh_category_counts(db)
    return {"imported": count}
