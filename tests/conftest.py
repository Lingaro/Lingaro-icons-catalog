"""Shared test fixtures for the Lingaro Icons Catalog."""

import json
import os
import sqlite3
import tempfile
from pathlib import Path

import pytest
from fastapi.testclient import TestClient


@pytest.fixture
def tmp_dir(tmp_path):
    """Temporary directory for test files."""
    return tmp_path


@pytest.fixture
def sample_svg():
    """A minimal valid SVG string."""
    return '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="10" fill="#783cbe"/>
</svg>'''


@pytest.fixture
def sample_icon_data():
    """Sample icon metadata dict."""
    return {
        "id": "test_set_category_icon",
        "name": "Test Icon",
        "filename": "Test Icon.svg",
        "path": "icons/test_set/category/Test Icon.svg",
        "category": "category",
        "set": "test_set",
        "description": "A test icon",
        "tags": ["test", "sample"],
        "use_cases": ["Testing"],
    }
