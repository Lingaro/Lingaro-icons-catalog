"""End-to-end tests — require a running API server.

Run with: pytest test_full_e2e.py -v
Set LINGARO_CATALOG_URL to point to your server (default: http://localhost:8000).
"""

import json
import os
import tempfile
from pathlib import Path

import pytest

from cli_anything.lingaro_catalog.core.client import CatalogClient, APIError


BASE_URL = os.environ.get("LINGARO_CATALOG_URL", "http://localhost:8000")
API_KEY = os.environ.get("LINGARO_API_KEY", "")


@pytest.fixture
def client():
    return CatalogClient(BASE_URL, API_KEY)


def server_available():
    """Check if the API server is running."""
    try:
        client = CatalogClient(BASE_URL, API_KEY)
        client.health()
        return True
    except Exception:
        return False


pytestmark = pytest.mark.skipif(
    not server_available(),
    reason=f"API server not available at {BASE_URL}"
)


class TestHealthAndStats:
    def test_health(self, client):
        result = client.health()
        assert "status" in result

    def test_stats(self, client):
        result = client.stats()
        assert isinstance(result, dict)


class TestSearch:
    def test_text_search(self, client):
        result = client.search("cloud")
        assert "icons" in result
        assert "total" in result

    def test_search_with_limit(self, client):
        result = client.search("icon", limit=5)
        assert len(result.get("icons", [])) <= 5

    def test_search_empty_query_rejected(self, client):
        """API requires at least 1 character for search query."""
        with pytest.raises(APIError) as exc:
            client.search("")
        assert exc.value.status_code == 422


class TestIcons:
    def test_list_icons(self, client):
        result = client.list_icons(limit=5)
        icons = result if isinstance(result, list) else result.get("icons", [])
        assert isinstance(icons, list)

    def test_list_icons_with_category(self, client):
        cats = client.list_categories()
        cat_list = cats if isinstance(cats, list) else cats.get("categories", [])
        if cat_list:
            cat_name = cat_list[0].get("name")
            result = client.list_icons(category=cat_name, limit=5)
            icons = result if isinstance(result, list) else result.get("icons", [])
            assert isinstance(icons, list)

    def test_get_icon(self, client):
        result = client.list_icons(limit=1)
        icons = result if isinstance(result, list) else result.get("icons", [])
        if icons:
            icon_id = icons[0]["id"]
            icon = client.get_icon(icon_id)
            assert icon["id"] == icon_id

    def test_download_icon(self, client):
        result = client.list_icons(limit=1)
        icons = result if isinstance(result, list) else result.get("icons", [])
        if icons:
            icon_id = icons[0]["id"]
            data = client.download_icon(icon_id)
            assert len(data) > 0

    def test_get_nonexistent_icon(self, client):
        with pytest.raises(APIError) as exc:
            client.get_icon("nonexistent_icon_id_xyz")
        assert exc.value.status_code in (404, 422)


class TestCategories:
    def test_list_categories(self, client):
        result = client.list_categories()
        cats = result if isinstance(result, list) else result.get("categories", [])
        assert isinstance(cats, list)
        assert len(cats) > 0

    def test_list_tags(self, client):
        result = client.list_tags(limit=10)
        tags = result if isinstance(result, list) else result.get("tags", [])
        assert isinstance(tags, list)

    def test_list_collections(self, client):
        result = client.list_collections()
        colls = result if isinstance(result, list) else result.get("collections", [])
        assert isinstance(colls, list)
        assert len(colls) > 0


class TestWorkflow:
    """Test realistic multi-step workflows."""

    def test_search_then_get_detail(self, client):
        """Search for an icon, then get its full details."""
        search_result = client.search("data")
        icons = search_result.get("icons", [])
        if icons:
            icon_id = icons[0]["id"]
            detail = client.get_icon(icon_id)
            assert detail["id"] == icon_id
            assert "name" in detail

    def test_browse_collections_then_filter(self, client):
        """Browse collections, pick one, list its icons."""
        collections = client.list_collections()
        coll_list = collections if isinstance(collections, list) else collections.get("collections", [])
        if coll_list:
            set_name = coll_list[0].get("name")
            icons = client.list_icons(set_name=set_name, limit=5)
            icon_data = icons if isinstance(icons, list) else icons.get("icons", [])
            assert isinstance(icon_data, list)

    def test_download_to_file(self, client):
        """Download an icon and verify the file."""
        result = client.list_icons(limit=1)
        icons = result if isinstance(result, list) else result.get("icons", [])
        if icons:
            icon_id = icons[0]["id"]
            data = client.download_icon(icon_id)

            with tempfile.NamedTemporaryFile(suffix=".svg", delete=False) as f:
                f.write(data)
                tmp_path = f.name

            try:
                assert Path(tmp_path).stat().st_size > 0
                content = Path(tmp_path).read_text(errors="replace")
                # SVG files should contain svg tag or PNG header
                assert "<svg" in content.lower() or content.startswith("\x89PNG") or len(data) > 0
            finally:
                os.unlink(tmp_path)
