"""
Lingaro Icons Catalog API

FastAPI-based REST API with semantic search capabilities for browsing
and searching through the Lingaro icon collection.
"""

from contextlib import asynccontextmanager
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

from .models import (
    CatalogStats,
    HealthResponse,
    IconResponse,
    IconUpdate,
    SearchRequest,
    SearchResponse,
)
from .search import get_search_engine, IconsSearchEngine


# Paths
BASE_DIR = Path(__file__).parent.parent
ICONS_DIR = BASE_DIR / "icons"
ASSETS_DIR = BASE_DIR / "assets"
STATIC_INDEX = BASE_DIR / "index.html"


# Lifespan handler for startup/shutdown
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize search engine
    engine = get_search_engine()
    print(f"Loaded {len(engine.icons)} icons")
    print(f"Embedding search: {'enabled' if engine.embedding_enabled else 'disabled'}")
    yield
    # Shutdown: cleanup if needed


# Create FastAPI app
app = FastAPI(
    title="Lingaro Icons Catalog API",
    description="Search and browse 248+ SVG icons with AI-powered semantic search",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/api/docs",
    openapi_url="/api/openapi.json",
)

# CORS middleware for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Mount static files
if ASSETS_DIR.exists():
    app.mount("/assets", StaticFiles(directory=ASSETS_DIR), name="assets")

if ICONS_DIR.exists():
    app.mount("/icons", StaticFiles(directory=ICONS_DIR), name="icons")


# ============================================================================
# Static Site - Serve index.html at root
# ============================================================================

@app.get("/", response_class=HTMLResponse, include_in_schema=False)
async def serve_index():
    """Serve the static landing page."""
    if STATIC_INDEX.exists():
        return FileResponse(STATIC_INDEX)
    # Fallback to API info if no index.html
    return HTMLResponse(content="""
        <html>
        <head><title>Lingaro Icons Catalog</title></head>
        <body>
            <h1>Lingaro Icons Catalog API</h1>
            <p>API docs: <a href="/api/docs">/api/docs</a></p>
        </body>
        </html>
    """)


# ============================================================================
# Health & Info Endpoints
# ============================================================================

@app.get("/api", tags=["Info"])
async def api_root():
    """API root - returns basic info."""
    return {
        "name": "Lingaro Icons Catalog API",
        "version": "1.0.0",
        "docs": "/api/docs",
        "openapi": "/api/openapi.json"
    }


@app.get("/api/health", response_model=HealthResponse, tags=["Info"])
async def health_check():
    """Health check endpoint."""
    engine = get_search_engine()
    return HealthResponse(
        status="ok",
        version="1.0.0",
        embedding_enabled=engine.embedding_enabled
    )


@app.get("/api/stats", response_model=CatalogStats, tags=["Info"])
async def get_stats():
    """Get catalog statistics."""
    engine = get_search_engine()
    return CatalogStats(
        total_icons=len(engine.icons),
        categories=engine.categories,
        sets=engine.sets,
        icons_with_embeddings=len(engine.icon_ids),
        embedding_model=engine.meta.get("embedding_model"),
        embedding_dimensions=engine.meta.get("embedding_dimensions")
    )


# ============================================================================
# Search Endpoints
# ============================================================================

@app.get("/api/search", response_model=SearchResponse, tags=["Search"])
async def search_icons(
    q: str = Query(..., min_length=1, max_length=500, description="Search query"),
    category: Optional[str] = Query(None, description="Filter by category"),
    set: Optional[str] = Query(None, description="Filter by icon set"),
    limit: int = Query(50, ge=1, le=200, description="Maximum results"),
    semantic: bool = Query(True, description="Use semantic search if available")
):
    """
    Search icons by query.

    Supports both text-based and semantic (AI-powered) search.
    Semantic search uses embeddings to find conceptually similar icons.

    Examples:
    - `/search?q=money` - Find financial icons
    - `/search?q=data visualization` - Find chart/graph icons
    - `/search?q=person&category=Personas` - Find person icons in Personas category
    """
    engine = get_search_engine()

    request = SearchRequest(
        query=q,
        category=category,
        set=set,
        limit=limit,
        semantic=semantic
    )

    results, used_semantic = engine.search(request)

    return SearchResponse(
        query=q,
        total=len(results),
        icons=results,
        semantic_search=used_semantic
    )


@app.post("/api/search", response_model=SearchResponse, tags=["Search"])
async def search_icons_post(request: SearchRequest):
    """
    Search icons by query (POST version for complex queries).

    Same as GET /search but accepts JSON body.
    """
    engine = get_search_engine()
    results, used_semantic = engine.search(request)

    return SearchResponse(
        query=request.query,
        total=len(results),
        icons=results,
        semantic_search=used_semantic
    )


# ============================================================================
# Icons Endpoints
# ============================================================================

@app.get("/api/icons", response_model=list[IconResponse], tags=["Icons"])
async def list_icons(
    category: Optional[str] = Query(None, description="Filter by category"),
    set: Optional[str] = Query(None, description="Filter by icon set"),
    limit: int = Query(100, ge=1, le=500, description="Maximum results"),
    offset: int = Query(0, ge=0, description="Offset for pagination")
):
    """
    List all icons with optional filtering and pagination.
    """
    engine = get_search_engine()
    return engine.list_all(
        category=category,
        icon_set=set,
        limit=limit,
        offset=offset
    )


@app.get("/api/icons/{icon_id}", response_model=IconResponse, tags=["Icons"])
async def get_icon(icon_id: str):
    """
    Get a specific icon by ID.

    Icon IDs follow the pattern: `{set}_{category}_{name}`
    Example: `lingaro_set4_absract_brainstorm`
    """
    engine = get_search_engine()
    icon = engine.get_icon_by_id(icon_id)

    if not icon:
        raise HTTPException(status_code=404, detail=f"Icon not found: {icon_id}")

    return icon


@app.patch("/api/icons/{icon_id}", response_model=IconResponse, tags=["Icons"])
async def update_icon(icon_id: str, update: IconUpdate):
    """
    Update icon metadata (description, tags, use_cases).

    Only provided fields will be updated.
    """
    engine = get_search_engine()

    updated = engine.update_icon(
        icon_id=icon_id,
        description=update.description,
        tags=update.tags,
        use_cases=update.use_cases
    )

    if not updated:
        raise HTTPException(status_code=404, detail=f"Icon not found: {icon_id}")

    return IconResponse(
        id=updated["id"],
        name=updated["name"],
        filename=updated["filename"],
        path=updated["path"],
        category=updated["category"],
        set=updated["set"],
        description=updated.get("description"),
        tags=updated.get("tags", []),
        use_cases=updated.get("use_cases", [])
    )


@app.get("/api/icons/{icon_id}/file", tags=["Icons"])
async def get_icon_file(icon_id: str):
    """
    Get the SVG file for an icon.

    Returns the actual SVG file content.
    """
    engine = get_search_engine()
    icon = engine.get_icon_by_id(icon_id)

    if not icon:
        raise HTTPException(status_code=404, detail=f"Icon not found: {icon_id}")

    file_path = BASE_DIR / icon.path

    if not file_path.exists():
        raise HTTPException(status_code=404, detail=f"Icon file not found")

    return FileResponse(
        path=file_path,
        media_type="image/svg+xml",
        filename=icon.filename
    )


# ============================================================================
# Categories Endpoints
# ============================================================================

@app.get("/api/categories", response_model=list[str], tags=["Categories"])
async def list_categories():
    """Get list of all icon categories."""
    engine = get_search_engine()
    return engine.categories


@app.get("/api/categories/{category}", response_model=list[IconResponse], tags=["Categories"])
async def get_category_icons(
    category: str,
    limit: int = Query(100, ge=1, le=500)
):
    """Get all icons in a specific category."""
    engine = get_search_engine()

    if category not in engine.categories:
        raise HTTPException(status_code=404, detail=f"Category not found: {category}")

    return engine.get_icons_by_category(category, limit)


# ============================================================================
# Tags Endpoints
# ============================================================================

@app.get("/api/tags", tags=["Tags"])
async def list_tags(limit: int = Query(100, ge=1, le=500)):
    """
    Get list of most common tags across all icons.
    """
    engine = get_search_engine()

    # Count tag occurrences
    tag_counts: dict[str, int] = {}
    for icon in engine.icons:
        for tag in icon.get("tags", []):
            tag_lower = tag.lower()
            tag_counts[tag_lower] = tag_counts.get(tag_lower, 0) + 1

    # Sort by count and return
    sorted_tags = sorted(tag_counts.items(), key=lambda x: x[1], reverse=True)
    return [{"tag": tag, "count": count} for tag, count in sorted_tags[:limit]]


@app.get("/api/tags/{tag}", response_model=list[IconResponse], tags=["Tags"])
async def get_icons_by_tag(
    tag: str,
    limit: int = Query(50, ge=1, le=200)
):
    """
    Get icons that have a specific tag.
    """
    engine = get_search_engine()
    tag_lower = tag.lower()

    results = []
    for icon in engine.icons:
        icon_tags = [t.lower() for t in icon.get("tags", [])]
        if tag_lower in icon_tags:
            results.append(IconResponse(
                id=icon["id"],
                name=icon["name"],
                filename=icon["filename"],
                path=icon["path"],
                category=icon["category"],
                set=icon["set"],
                description=icon.get("description"),
                tags=icon.get("tags", []),
                use_cases=icon.get("use_cases", [])
            ))
            if len(results) >= limit:
                break

    return results


# ============================================================================
# Entry point for running directly
# ============================================================================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
