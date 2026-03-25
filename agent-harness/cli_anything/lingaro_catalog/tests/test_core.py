"""Unit tests for CLI core modules — no external dependencies."""

import json
import os
import tempfile
from pathlib import Path
from unittest.mock import patch, MagicMock

import pytest

from cli_anything.lingaro_catalog.core.config import CLIConfig, CONFIG_FILE
from cli_anything.lingaro_catalog.core.client import CatalogClient, APIError
from cli_anything.lingaro_catalog.utils.output import (
    print_table,
    print_icon_detail,
    truncate,
)


# ═══════════════════════════════════════════════════════════
# Config Tests
# ═══════════════════════════════════════════════════════════

class TestCLIConfig:
    def test_defaults(self):
        with patch.dict(os.environ, {}, clear=True):
            with patch("cli_anything.lingaro_catalog.core.config.CONFIG_FILE",
                       Path("/nonexistent/config.json")):
                cfg = CLIConfig.load()
                assert cfg.base_url == "http://localhost:8000"
                assert cfg.api_key == ""
                assert cfg.default_limit == 20

    def test_env_override(self):
        env = {
            "LINGARO_CATALOG_URL": "http://myserver:9000",
            "LINGARO_API_KEY": "test-key-123",
        }
        with patch.dict(os.environ, env, clear=False):
            with patch("cli_anything.lingaro_catalog.core.config.CONFIG_FILE",
                       Path("/nonexistent/config.json")):
                cfg = CLIConfig.load()
                assert cfg.base_url == "http://myserver:9000"
                assert cfg.api_key == "test-key-123"

    def test_save_and_load(self, tmp_path):
        cfg_file = tmp_path / "config.json"
        with patch("cli_anything.lingaro_catalog.core.config.CONFIG_FILE", cfg_file):
            with patch("cli_anything.lingaro_catalog.core.config.CONFIG_DIR", tmp_path):
                cfg = CLIConfig(base_url="http://test:5000", api_key="abc")
                cfg.save()

                assert cfg_file.exists()
                data = json.loads(cfg_file.read_text())
                assert data["base_url"] == "http://test:5000"
                assert data["api_key"] == "abc"

    def test_set_value(self, tmp_path):
        cfg_file = tmp_path / "config.json"
        with patch("cli_anything.lingaro_catalog.core.config.CONFIG_FILE", cfg_file):
            with patch("cli_anything.lingaro_catalog.core.config.CONFIG_DIR", tmp_path):
                cfg = CLIConfig()
                cfg.set_value("base_url", "http://new:3000")
                assert cfg.base_url == "http://new:3000"

    def test_set_invalid_key(self, tmp_path):
        cfg = CLIConfig()
        with pytest.raises(KeyError):
            cfg.set_value("nonexistent_key", "value")


# ═══════════════════════════════════════════════════════════
# Client Tests
# ═══════════════════════════════════════════════════════════

class TestCatalogClient:
    def test_init(self):
        client = CatalogClient("http://localhost:8000", "my-key")
        assert client.base_url == "http://localhost:8000"
        assert client.api_key == "my-key"

    def test_base_url_trailing_slash(self):
        client = CatalogClient("http://localhost:8000/")
        assert client.base_url == "http://localhost:8000"

    def test_headers_with_key(self):
        client = CatalogClient("http://localhost:8000", "test-key")
        headers = client._headers()
        assert headers["X-API-Key"] == "test-key"
        assert headers["Accept"] == "application/json"

    def test_headers_without_key(self):
        client = CatalogClient("http://localhost:8000")
        headers = client._headers()
        assert "X-API-Key" not in headers

    def test_api_error(self):
        err = APIError(404, "Not found")
        assert err.status_code == 404
        assert err.detail == "Not found"
        assert "404" in str(err)

    @patch("cli_anything.lingaro_catalog.core.client.urlopen")
    def test_get_success(self, mock_urlopen):
        mock_resp = MagicMock()
        mock_resp.read.return_value = b'{"status": "ok"}'
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        client = CatalogClient("http://localhost:8000")
        result = client.get("/api/health")
        assert result == {"status": "ok"}

    @patch("cli_anything.lingaro_catalog.core.client.urlopen")
    def test_get_with_params(self, mock_urlopen):
        mock_resp = MagicMock()
        mock_resp.read.return_value = b'[]'
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        client = CatalogClient("http://localhost:8000")
        client.get("/api/icons", params={"category": "test", "limit": 5})

        call_args = mock_urlopen.call_args
        req = call_args[0][0]
        assert "category=test" in req.full_url
        assert "limit=5" in req.full_url

    @patch("cli_anything.lingaro_catalog.core.client.urlopen")
    def test_post_with_body(self, mock_urlopen):
        mock_resp = MagicMock()
        mock_resp.read.return_value = b'{"id": "new_icon"}'
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        client = CatalogClient("http://localhost:8000")
        result = client.post("/api/search", body={"query": "cloud"})
        assert result == {"id": "new_icon"}


# ═══════════════════════════════════════════════════════════
# Output Tests
# ═══════════════════════════════════════════════════════════

class TestOutput:
    def test_truncate_short(self):
        assert truncate("hello", 10) == "hello"

    def test_truncate_long(self):
        result = truncate("hello world this is long", 10)
        assert len(result) == 10
        assert result.endswith("\u2026")

    def test_print_table(self, capsys):
        rows = [
            {"name": "cloud", "count": 5},
            {"name": "database", "count": 3},
        ]
        print_table(rows, ["name", "count"])
        output = capsys.readouterr().out
        assert "cloud" in output
        assert "database" in output
        assert "name" in output

    def test_print_table_empty(self, capsys):
        print_table([], ["name", "count"])
        output = capsys.readouterr().out
        assert "no results" in output

    def test_print_icon_detail(self, capsys):
        icon = {
            "id": "test_icon",
            "name": "Test Icon",
            "category": "Test",
            "set": "test_set",
            "status": "ready",
            "description": "A test icon",
            "tags": ["test", "icon"],
            "use_cases": ["testing"],
            "score": 0.95,
        }
        print_icon_detail(icon)
        output = capsys.readouterr().out
        assert "test_icon" in output
        assert "Test Icon" in output
        assert "test, icon" in output
        assert "0.95" in output

    def test_print_icon_detail_json_tags(self, capsys):
        icon = {
            "id": "test",
            "name": "Test",
            "category": "Cat",
            "tags": '["a", "b"]',
            "status": "ready",
        }
        print_icon_detail(icon)
        output = capsys.readouterr().out
        assert "a, b" in output


# ═══════════════════════════════════════════════════════════
# CLI Subprocess Tests
# ═══════════════════════════════════════════════════════════

class TestCLISubprocess:
    """Test the installed CLI command via subprocess."""

    @staticmethod
    def _resolve_cli(name: str) -> str:
        """Resolve CLI executable path."""
        import shutil
        path = shutil.which(name)
        if path:
            return path
        if os.environ.get("CLI_ANYTHING_FORCE_INSTALLED"):
            pytest.skip(f"{name} not found in PATH")
        # Fall back to module invocation
        return None

    def _run(self, *args, expect_success: bool = True):
        import subprocess
        cli_path = self._resolve_cli("cli-anything-lingaro-catalog")
        if cli_path:
            cmd = [cli_path] + list(args)
        else:
            cmd = ["python", "-m",
                   "cli_anything.lingaro_catalog.lingaro_catalog_cli"] + list(args)

        result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
        if expect_success:
            assert result.returncode == 0, f"stderr: {result.stderr}"
        return result

    def test_version(self):
        result = self._run("--version")
        assert "0.1.0" in result.stdout

    def test_help(self):
        result = self._run("--help")
        assert "search" in result.stdout
        assert "icons" in result.stdout
        assert "categories" in result.stdout
        assert "admin" in result.stdout

    def test_config_show(self):
        result = self._run("config", "show")
        assert "base_url" in result.stdout

    def test_json_config_show(self):
        result = self._run("--json", "config", "show")
        data = json.loads(result.stdout)
        assert "base_url" in data
