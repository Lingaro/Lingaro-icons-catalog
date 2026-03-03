"""Category and tag endpoints."""

from fastapi import APIRouter, Depends, Query

from ..dependencies import get_database
from ..services.search import SearchService

router = APIRouter(prefix="/api", tags=["categories"])


@router.get("/categories")
async def list_categories(db=Depends(get_database)):
    search = SearchService(db)
    return search.get_categories()


@router.get("/categories/{category}")
async def get_category_icons(category: str, limit: int = Query(100, ge=1, le=500), db=Depends(get_database)):
    search = SearchService(db)
    return search.list_icons(category=category, limit=limit)


@router.get("/tags")
async def list_tags(limit: int = Query(50, ge=1, le=200), db=Depends(get_database)):
    search = SearchService(db)
    return search.get_tags(limit)
