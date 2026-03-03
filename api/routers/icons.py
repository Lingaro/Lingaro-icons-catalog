"""Icon CRUD and file endpoints."""

import re
from typing import Optional

from fastapi import APIRouter, Depends, File, Form, HTTPException, Query, UploadFile
from fastapi.responses import Response

from ..database import insert_icon, update_icon, delete_icon, get_icon
from ..dependencies import get_database, get_storage_backend, require_api_key
from ..models import IconResponse, IconUpdate
from ..services.search import SearchService

router = APIRouter(prefix="/api/icons", tags=["icons"])

MAX_FILE_SIZE = 5 * 1024 * 1024


def _make_icon_id(set_name: str, category: str, name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
    cat_slug = re.sub(r"[^a-z0-9]+", "_", category.lower()).strip("_")
    return f"{set_name}_{cat_slug}_{slug}"


@router.get("")
async def list_icons(
    category: Optional[str] = None,
    set: Optional[str] = None,
    limit: int = Query(100, ge=1, le=500),
    offset: int = Query(0, ge=0),
    db=Depends(get_database),
):
    search = SearchService(db)
    return search.list_icons(category, set, limit, offset)


@router.get("/{icon_id}")
async def get_icon_detail(icon_id: str, db=Depends(get_database)):
    search = SearchService(db)
    icon = search.get_icon_by_id(icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    return icon


@router.post("", status_code=202)
async def upload_icon(
    file: UploadFile = File(...),
    category: str = Form(...),
    set_name: str = Form("lingaro_set4"),
    name: Optional[str] = Form(None),
    _auth=Depends(require_api_key),
    db=Depends(get_database),
    storage=Depends(get_storage_backend),
):
    if not file.filename.endswith((".svg", ".png")):
        raise HTTPException(400, "Only SVG and PNG files are accepted")
    data = await file.read()
    if len(data) > MAX_FILE_SIZE:
        raise HTTPException(400, f"File too large (max {MAX_FILE_SIZE // 1024 // 1024}MB)")
    icon_name = name or file.filename.rsplit(".", 1)[0]
    icon_id = _make_icon_id(set_name, category, icon_name)
    if get_icon(db, icon_id):
        raise HTTPException(409, f"Icon '{icon_id}' already exists")
    storage_key = f"{set_name}/{category}/{file.filename}"
    storage.save(storage_key, data)
    insert_icon(db, {
        "id": icon_id, "name": icon_name, "filename": file.filename,
        "path": storage_key, "category": category, "set_name": set_name,
        "status": "processing",
    })
    update_icon(db, icon_id, status="ready")
    return {"id": icon_id, "status": "processing", "message": "Icon uploaded, annotation in progress"}


@router.patch("/{icon_id}")
async def update_icon_metadata(
    icon_id: str, update: IconUpdate,
    _auth=Depends(require_api_key), db=Depends(get_database),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    fields = {}
    if update.description is not None:
        fields["description"] = update.description
    if update.tags is not None:
        fields["tags"] = update.tags
    if update.use_cases is not None:
        fields["use_cases"] = update.use_cases
    updated = update_icon(db, icon_id, **fields)
    return updated


@router.delete("/{icon_id}", status_code=204)
async def delete_icon_endpoint(
    icon_id: str, _auth=Depends(require_api_key),
    db=Depends(get_database), storage=Depends(get_storage_backend),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    storage.delete(icon["path"])
    delete_icon(db, icon_id)


@router.get("/{icon_id}/file")
async def get_icon_file(
    icon_id: str, db=Depends(get_database), storage=Depends(get_storage_backend),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    data = storage.get(icon["path"])
    if not data:
        raise HTTPException(404, "Icon file not found")
    content_type = "image/svg+xml" if icon["filename"].endswith(".svg") else "image/png"
    return Response(content=data, media_type=content_type)
