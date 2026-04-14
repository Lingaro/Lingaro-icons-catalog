"""File storage abstraction — local filesystem and Azure Blob backends."""

import os
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Optional


class StorageBackend(ABC):
    """Abstract storage interface."""

    @abstractmethod
    def save(self, key: str, data: bytes) -> str:
        ...

    @abstractmethod
    def get(self, key: str) -> Optional[bytes]:
        ...

    @abstractmethod
    def delete(self, key: str) -> bool:
        ...

    @abstractmethod
    def get_url(self, key: str) -> str:
        ...


class LocalStorage(StorageBackend):
    """Store files on local filesystem."""

    def __init__(self, base_dir: Path = None):
        self.base_dir = (base_dir or Path(__file__).parent.parent.parent / "icons").resolve()

    def _safe_path(self, key: str) -> Path:
        """Resolve key to an absolute path and verify it stays within base_dir."""
        resolved = (self.base_dir / key).resolve()
        if not resolved.is_relative_to(self.base_dir):
            raise ValueError(f"Path traversal blocked: {key!r}")
        return resolved

    def save(self, key: str, data: bytes) -> str:
        path = self._safe_path(key)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
        return str(path)

    def get(self, key: str) -> Optional[bytes]:
        path = self._safe_path(key)
        if path.exists():
            return path.read_bytes()
        return None

    def delete(self, key: str) -> bool:
        path = self._safe_path(key)
        if path.exists():
            path.unlink()
            return True
        return False

    def get_url(self, key: str) -> str:
        return f"/icons/{key}"


class AzureBlobStorage(StorageBackend):
    """Store files in Azure Blob Storage."""

    def __init__(self, connection_string: str = None, container_name: str = "lingaro-icons"):
        from azure.storage.blob import BlobServiceClient
        conn_str = connection_string or os.getenv("AZURE_STORAGE_CONNECTION_STRING")
        if not conn_str:
            raise ValueError("AZURE_STORAGE_CONNECTION_STRING not set")
        self.blob_service = BlobServiceClient.from_connection_string(conn_str)
        self.container_name = container_name
        self.container_client = self.blob_service.get_container_client(container_name)

    def save(self, key: str, data: bytes) -> str:
        blob_client = self.container_client.get_blob_client(key)
        content_type = "image/svg+xml" if key.endswith(".svg") else "image/png"
        blob_client.upload_blob(data, overwrite=True, content_settings={"content_type": content_type})
        return blob_client.url

    def get(self, key: str) -> Optional[bytes]:
        try:
            blob_client = self.container_client.get_blob_client(key)
            return blob_client.download_blob().readall()
        except Exception:
            return None

    def delete(self, key: str) -> bool:
        try:
            blob_client = self.container_client.get_blob_client(key)
            blob_client.delete_blob()
            return True
        except Exception:
            return False

    def get_url(self, key: str) -> str:
        blob_client = self.container_client.get_blob_client(key)
        return blob_client.url


def get_storage() -> StorageBackend:
    """Factory: returns the configured storage backend."""
    backend = os.getenv("STORAGE_BACKEND", "local")
    if backend == "azure":
        return AzureBlobStorage()
    return LocalStorage()
