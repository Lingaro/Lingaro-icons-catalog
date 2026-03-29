"""Icon CRUD and file endpoints."""

import os
import re
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, BackgroundTasks, Depends, File, Form, HTTPException, Query, UploadFile
from fastapi.responses import Response

from ..database import insert_icon, update_icon, delete_icon, get_icon, get_db
from ..dependencies import get_database, get_storage_backend, require_auth, require_admin
from ..models import IconResponse, IconUpdate
from ..services.annotation import annotate_icon as run_annotation
from ..services.embeddings import create_icon_text, generate_embedding
from ..services.search import SearchService

router = APIRouter(prefix="/api/icons", tags=["icons"])

MAX_FILE_SIZE = 5 * 1024 * 1024


def _background_annotate(icon_id: str, db_path: str, file_data: bytes, icon_name: str, category: str):
    """Background task: annotate icon and generate embedding."""
    import logging
    logger = logging.getLogger(__name__)

    from openai import OpenAI

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        logger.warning("OPENAI_API_KEY not set, skipping annotation for %s", icon_id)
        conn = get_db(Path(db_path))
        update_icon(conn, icon_id, status="ready")
        conn.close()
        return

    try:
        client_kwargs = {"api_key": api_key}
        base_url = os.getenv("OPENAI_BASE_URL")
        if base_url:
            client_kwargs["base_url"] = base_url
        client = OpenAI(**client_kwargs)

        # Annotate
        svg_data = file_data if icon_name.endswith(".svg") else None
        metadata = run_annotation(client, icon_name, category, svg_data=svg_data)

        # Update metadata
        conn = get_db(Path(db_path))
        update_icon(conn, icon_id,
            description=metadata.get("description"),
            tags=metadata.get("tags", []),
            use_cases=metadata.get("use_cases", []),
            status="ready",
        )
        conn.close()
        logger.info("Annotation complete for %s", icon_id)
    except Exception as e:
        logger.error("Annotation failed for %s: %s", icon_id, e)
        conn = get_db(Path(db_path))
        update_icon(conn, icon_id, status="ready")
        conn.close()


def _make_icon_id(set_name: str, category: str, name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
    cat_slug = re.sub(r"[^a-z0-9]+", "_", category.lower()).strip("_")
    return f"{set_name}_{cat_slug}_{slug}"


@router.get("")
async def list_icons(
    category: Optional[str] = None,
    set: Optional[str] = None,
    limit: int = Query(100, ge=1, le=2000),
    offset: int = Query(0, ge=0),
    user=Depends(require_auth),
    db=Depends(get_database),
):
    search = SearchService(db)
    return search.list_icons(category, set, limit, offset)


@router.get("/{icon_id}")
async def get_icon_detail(icon_id: str, user=Depends(require_auth), db=Depends(get_database)):
    search = SearchService(db)
    icon = search.get_icon_by_id(icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    return icon


@router.post("", status_code=202)
async def upload_icon(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    category: str = Form(...),
    set_name: str = Form("lingaro_set4"),
    name: Optional[str] = Form(None),
    _auth=Depends(require_admin),
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
    icon_path = f"icons/{storage_key}"
    db_path = os.getenv("DATABASE_URL", str(Path(__file__).parent.parent.parent / "data" / "catalog.db"))
    insert_icon(db, {
        "id": icon_id, "name": icon_name, "filename": file.filename,
        "path": icon_path, "category": category, "set_name": set_name,
        "status": "processing",
    })
    background_tasks.add_task(_background_annotate, icon_id, db_path, data, icon_name, category)
    return {"id": icon_id, "status": "processing", "message": "Icon uploaded, annotation in progress"}


@router.patch("/{icon_id}")
async def update_icon_metadata(
    icon_id: str, update: IconUpdate,
    _auth=Depends(require_admin), db=Depends(get_database),
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
    icon_id: str, _auth=Depends(require_admin),
    db=Depends(get_database), storage=Depends(get_storage_backend),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    storage_key = icon["path"].removeprefix("icons/")
    storage.delete(storage_key)
    delete_icon(db, icon_id)


@router.get("/{icon_id}/file")
async def get_icon_file(
    icon_id: str, db=Depends(get_database), storage=Depends(get_storage_backend),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    storage_key = icon["path"].removeprefix("icons/")
    data = storage.get(storage_key)
    if not data:
        raise HTTPException(404, "Icon file not found")
    content_type = "image/svg+xml" if icon["filename"].endswith(".svg") else "image/png"
    return Response(
        content=data, media_type=content_type,
        headers={"Cache-Control": "public, max-age=3600"},  # Cache for 1 hour
    )
