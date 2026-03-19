"""Lingaro Icons Catalog -- FastAPI application."""

import os
from contextlib import asynccontextmanager
from pathlib import Path

from dotenv import load_dotenv
load_dotenv(Path(__file__).parent.parent / ".env")

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from .auth import CurrentUser
from .database import init_db, DEFAULT_DB_PATH
from .models import HealthResponse, CatalogStats
from .dependencies import get_database, require_auth
from .services.search import SearchService
from .routers import search, icons, categories, admin, tokens

BASE_DIR = Path(__file__).parent.parent
STATIC_INDEX = BASE_DIR / "index.html"


@asynccontextmanager
async def lifespan(app: FastAPI):
    db_path = Path(os.getenv("DATABASE_URL", str(DEFAULT_DB_PATH)))
    init_db(db_path)

    # Auto-seed from icons.json if DB is empty
    from .database import get_db
    conn = get_db(db_path)
    count = conn.execute("SELECT COUNT(*) FROM icons").fetchone()[0]
    if count == 0:
        json_path = BASE_DIR / "assets" / "data" / "icons.json"
        if json_path.exists():
            from scripts.migrate_to_sqlite import migrate_icons_json
            conn.close()
            imported = migrate_icons_json(json_path, db_path)
            print(f"Auto-seeded {imported} icons from icons.json")
            conn = get_db(db_path)

    conn.close()
    yield


app = FastAPI(
    title="Lingaro Icons Catalog API",
    description="Search, browse, and manage the Lingaro icon library",
    version="2.0.0",
    lifespan=lifespan,
)

CORS_ORIGINS = [
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "https://lingaro-icons-catalog.azurewebsites.net",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(search.router)
app.include_router(icons.router)
app.include_router(categories.router)
app.include_router(admin.router)
app.include_router(tokens.router)

if (BASE_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(BASE_DIR / "assets")), name="assets")
if (BASE_DIR / "icons").exists():
    app.mount("/icons", StaticFiles(directory=str(BASE_DIR / "icons")), name="icons")
if (BASE_DIR / "powerpoint-addin" / "dist").exists():
    app.mount("/addin", StaticFiles(directory=str(BASE_DIR / "powerpoint-addin" / "dist"), html=True), name="addin")


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


@app.get("/api/me")
async def get_current_user(user: CurrentUser = Depends(require_auth)):
    import os
    admin_emails = [e.strip().lower() for e in os.getenv("ADMIN_EMAILS", "").split(",") if e.strip()]
    user.is_admin = user.email.lower() in admin_emails or user.email in ("api-key-user", "dev-mode")
    return {"email": user.email, "name": user.name, "is_admin": user.is_admin}


@app.get("/api/stats")
async def get_stats(user: CurrentUser = Depends(require_auth), db=Depends(get_database)):
    svc = SearchService(db)
    cats = svc.get_categories()
    sets_cursor = db.execute("SELECT DISTINCT set_name FROM icons WHERE status = 'ready'")
    sets_list = [row[0] for row in sets_cursor.fetchall()]
    return CatalogStats(
        total_icons=svc.count_icons(),
        categories=[c["name"] for c in cats],
        sets=sets_list,
        icons_with_embeddings=0,
    )
