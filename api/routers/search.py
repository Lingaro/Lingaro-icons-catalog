"""Search endpoints."""

from typing import Optional

from fastapi import APIRouter, Depends, Query

from ..dependencies import get_database, require_auth
from ..models import SearchRequest, SearchResponse, IconResponse
from ..services.search import SearchService

router = APIRouter(prefix="/api", tags=["search"])


@router.get("/search")
async def search_icons(
    q: str = Query(..., min_length=1, description="Search query"),
    category: Optional[str] = None,
    set: Optional[str] = None,
    limit: int = Query(50, ge=1, le=200),
    semantic: bool = True,
    user=Depends(require_auth),
    db=Depends(get_database),
):
    search = SearchService(db)
    results = search.search(q, category, set, limit)
    return SearchResponse(
        query=q, total=len(results),
        icons=[IconResponse(**r) for r in results],
        semantic_search=semantic,
    )


@router.post("/search")
async def search_icons_post(request: SearchRequest, user=Depends(require_auth), db=Depends(get_database)):
    search = SearchService(db)
    results = search.search(request.query, request.category, request.set, request.limit)
    return SearchResponse(
        query=request.query, total=len(results),
        icons=[IconResponse(**r) for r in results],
        semantic_search=request.semantic,
    )
