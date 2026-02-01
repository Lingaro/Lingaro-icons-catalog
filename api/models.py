"""
Pydantic models for the Icons Catalog API.
"""

from typing import Optional
from pydantic import BaseModel, Field


class IconBase(BaseModel):
    """Base icon model with common fields."""
    id: str
    name: str
    filename: str
    path: str
    category: str
    set: str = Field(alias="set")
    description: Optional[str] = None
    tags: list[str] = []
    use_cases: list[str] = []


class IconResponse(IconBase):
    """Icon response model with optional similarity score."""
    score: Optional[float] = None

    class Config:
        populate_by_name = True


class SearchRequest(BaseModel):
    """Search request model."""
    query: str = Field(..., min_length=1, max_length=500, description="Search query")
    category: Optional[str] = Field(None, description="Filter by category")
    set: Optional[str] = Field(None, description="Filter by icon set")
    limit: int = Field(50, ge=1, le=200, description="Maximum results to return")
    semantic: bool = Field(True, description="Use semantic search (embeddings)")


class SearchResponse(BaseModel):
    """Search response model."""
    query: str
    total: int
    icons: list[IconResponse]
    semantic_search: bool = False


class CatalogStats(BaseModel):
    """Catalog statistics."""
    total_icons: int
    categories: list[str]
    sets: list[str]
    icons_with_embeddings: int
    embedding_model: Optional[str] = None
    embedding_dimensions: Optional[int] = None


class HealthResponse(BaseModel):
    """Health check response."""
    status: str = "ok"
    version: str = "1.0.0"
    embedding_enabled: bool = False


class IconUpdate(BaseModel):
    """Model for updating icon metadata."""
    description: Optional[str] = Field(None, description="Icon description")
    tags: Optional[list[str]] = Field(None, description="List of tags")
    use_cases: Optional[list[str]] = Field(None, description="List of use cases")
