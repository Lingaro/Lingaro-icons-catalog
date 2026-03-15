"""Category and tag endpoints."""

from fastapi import APIRouter, Depends, Query

from ..dependencies import get_database, require_auth
from ..services.search import SearchService

router = APIRouter(prefix="/api", tags=["categories"])


@router.get("/categories")
async def list_categories(user=Depends(require_auth), db=Depends(get_database)):
    search = SearchService(db)
    return search.get_categories()


@router.get("/categories/{category}")
async def get_category_icons(category: str, limit: int = Query(100, ge=1, le=500), user=Depends(require_auth), db=Depends(get_database)):
    search = SearchService(db)
    return search.list_icons(category=category, limit=limit)


@router.get("/tags")
async def list_tags(limit: int = Query(50, ge=1, le=200), user=Depends(require_auth), db=Depends(get_database)):
    search = SearchService(db)
    return search.get_tags(limit)


@router.get("/collections")
async def list_collections(user=Depends(require_auth), db=Depends(get_database)):
    search = SearchService(db)
    return search.get_collections()
