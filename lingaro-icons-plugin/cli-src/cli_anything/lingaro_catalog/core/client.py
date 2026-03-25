"""HTTP client for the Lingaro Icons Catalog API."""

import json
from pathlib import Path
from typing import Any, Optional
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, quote


class APIError(Exception):
    """Raised when the API returns an error."""

    def __init__(self, status_code: int, detail: str):
        self.status_code = status_code
        self.detail = detail
        super().__init__(f"HTTP {status_code}: {detail}")


class CatalogClient:
    """Low-level HTTP client for the Lingaro Catalog API."""

    def __init__(self, base_url: str, api_key: str = ""):
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key

    def _headers(self) -> dict:
        headers = {"Accept": "application/json"}
        if self.api_key:
            headers["X-API-Key"] = self.api_key
        return headers

    def _request(self, method: str, path: str, body: Any = None,
                 params: dict = None, raw: bool = False) -> Any:
        """Make an HTTP request to the API."""
        url = f"{self.base_url}{path}"
        if params:
            filtered = {k: v for k, v in params.items() if v is not None}
            if filtered:
                url += "?" + urlencode(filtered, doseq=True)

        headers = self._headers()
        data = None

        if body is not None:
            headers["Content-Type"] = "application/json"
            data = json.dumps(body).encode("utf-8")

        req = Request(url, data=data, headers=headers, method=method)

        try:
            with urlopen(req, timeout=30) as resp:
                if raw:
                    return resp.read()
                content = resp.read().decode("utf-8")
                if not content:
                    return None
                return json.loads(content)
        except HTTPError as e:
            body_text = e.read().decode("utf-8", errors="replace")
            try:
                detail = json.loads(body_text).get("detail", body_text)
            except (json.JSONDecodeError, AttributeError):
                detail = body_text
            raise APIError(e.code, detail)
        except URLError as e:
            raise APIError(0, f"Connection failed: {e.reason}")

    def get(self, path: str, params: dict = None, raw: bool = False) -> Any:
        return self._request("GET", path, params=params, raw=raw)

    def post(self, path: str, body: Any = None, params: dict = None) -> Any:
        return self._request("POST", path, body=body, params=params)

    def patch(self, path: str, body: Any = None) -> Any:
        return self._request("PATCH", path, body=body)

    def delete(self, path: str) -> Any:
        return self._request("DELETE", path)

    def upload(self, path: str, file_path: str, fields: dict = None) -> Any:
        """Upload a file using multipart/form-data."""
        import mimetypes
        boundary = "----CLIBoundary7MA4YWxkTrZu0gW"
        fp = Path(file_path)

        mime_type = mimetypes.guess_type(fp.name)[0] or "application/octet-stream"

        parts = []
        if fields:
            for key, value in fields.items():
                parts.append(
                    f'--{boundary}\r\n'
                    f'Content-Disposition: form-data; name="{key}"\r\n\r\n'
                    f'{value}\r\n'
                )

        file_data = fp.read_bytes()
        parts.append(
            f'--{boundary}\r\n'
            f'Content-Disposition: form-data; name="file"; filename="{fp.name}"\r\n'
            f'Content-Type: {mime_type}\r\n\r\n'
        )

        body = b""
        for part in parts:
            body += part.encode("utf-8")
        body += file_data
        body += f"\r\n--{boundary}--\r\n".encode("utf-8")

        url = f"{self.base_url}{path}"
        headers = self._headers()
        headers["Content-Type"] = f"multipart/form-data; boundary={boundary}"
        headers.pop("Accept", None)

        req = Request(url, data=body, headers=headers, method="POST")

        try:
            with urlopen(req, timeout=60) as resp:
                content = resp.read().decode("utf-8")
                return json.loads(content) if content else None
        except HTTPError as e:
            body_text = e.read().decode("utf-8", errors="replace")
            try:
                detail = json.loads(body_text).get("detail", body_text)
            except (json.JSONDecodeError, AttributeError):
                detail = body_text
            raise APIError(e.code, detail)

    # --- High-level methods ---

    def health(self) -> dict:
        return self.get("/api/health")

    def stats(self) -> dict:
        return self.get("/api/stats")

    def me(self) -> dict:
        return self.get("/api/me")

    def search(self, query: str, category: str = None, set_name: str = None,
               limit: int = 20, semantic: bool = False) -> dict:
        return self.get("/api/search", params={
            "q": query,
            "category": category,
            "set": set_name,
            "limit": limit,
            "semantic": str(semantic).lower() if semantic else None,
        })

    def list_icons(self, category: str = None, set_name: str = None,
                   limit: int = 20, offset: int = 0) -> list:
        return self.get("/api/icons", params={
            "category": category,
            "set": set_name,
            "limit": limit,
            "offset": offset,
        })

    def get_icon(self, icon_id: str) -> dict:
        return self.get(f"/api/icons/{quote(icon_id, safe='')}")

    def download_icon(self, icon_id: str) -> bytes:
        return self.get(f"/api/icons/{quote(icon_id, safe='')}/file", raw=True)

    def upload_icon(self, file_path: str, category: str, set_name: str,
                    name: str = None) -> dict:
        fields = {"category": category, "set_name": set_name}
        if name:
            fields["name"] = name
        return self.upload("/api/icons", file_path, fields)

    def update_icon(self, icon_id: str, description: str = None,
                    tags: list = None, use_cases: list = None) -> dict:
        body = {}
        if description is not None:
            body["description"] = description
        if tags is not None:
            body["tags"] = tags
        if use_cases is not None:
            body["use_cases"] = use_cases
        return self.patch(f"/api/icons/{quote(icon_id, safe='')}", body=body)

    def delete_icon(self, icon_id: str) -> dict:
        return self.delete(f"/api/icons/{quote(icon_id, safe='')}")

    def list_categories(self) -> list:
        return self.get("/api/categories")

    def get_category(self, category: str) -> list:
        return self.get(f"/api/categories/{quote(category, safe='')}")

    def list_tags(self, limit: int = 30) -> list:
        return self.get("/api/tags", params={"limit": limit})

    def list_collections(self) -> list:
        return self.get("/api/collections")

    def export_catalog(self) -> dict:
        return self.get("/api/admin/export")

    def import_catalog(self, file_path: str) -> dict:
        return self.upload("/api/admin/import", file_path)

    def refresh_azure(self) -> dict:
        return self.post("/api/admin/refresh-azure-icons")

    def refresh_azure_status(self) -> dict:
        return self.get("/api/admin/refresh-azure-icons/status")

    def refresh_gcp(self) -> dict:
        return self.post("/api/admin/refresh-gcp-icons")

    def refresh_gcp_status(self) -> dict:
        return self.get("/api/admin/refresh-gcp-icons/status")
