"""Lingaro Icons Catalog -- FastAPI application."""

import os
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from .database import init_db, DEFAULT_DB_PATH
from .models import HealthResponse, CatalogStats
from .dependencies import get_database
from .services.search import SearchService
from .routers import search, icons, categories, admin

BASE_DIR = Path(__file__).parent.parent
STATIC_INDEX = BASE_DIR / "index.html"


@asynccontextmanager
async def lifespan(app: FastAPI):
    db_path = Path(os.getenv("DATABASE_URL", str(DEFAULT_DB_PATH)))
    init_db(db_path)
    yield


app = FastAPI(
    title="Lingaro Icons Catalog API",
    description="Search, browse, and manage the Lingaro icon library",
    version="2.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(search.router)
app.include_router(icons.router)
app.include_router(categories.router)
app.include_router(admin.router)

if (BASE_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(BASE_DIR / "assets")), name="assets")
if (BASE_DIR / "icons").exists():
    app.mount("/icons", StaticFiles(directory=str(BASE_DIR / "icons")), name="icons")


@app.get("/", response_class=HTMLResponse)
async def serve_index():
    if STATIC_INDEX.exists():
        return HTMLResponse(content=STATIC_INDEX.read_text(encoding="utf-8"))
    return HTMLResponse(content="<h1>Lingaro Icons Catalog API</h1><p>Visit <a href='/docs'>/docs</a></p>")


@app.get("/api")
async def api_root():
    return {"name": "Lingaro Icons Catalog API", "version": "2.0.0", "docs": "/docs"}


@app.get("/api/health")
async def health_check():
    return HealthResponse(status="ok", version="2.0.0")


@app.get("/api/stats")
async def get_stats(db=Depends(get_database)):
    svc = SearchService(db)
    cats = svc.get_categories()
    return CatalogStats(
        total_icons=svc.count_icons(),
        categories=[c["name"] for c in cats],
        sets=["lingaro_set4"],
        icons_with_embeddings=0,
    )
