"""Tests for API key authentication."""

import os
from unittest.mock import patch

import pytest
from fastapi import HTTPException

from api.dependencies import require_api_key


def test_require_api_key_valid():
    with patch.dict(os.environ, {"API_KEY": "test-key-123"}):
        result = require_api_key("test-key-123")
        assert result is True


def test_require_api_key_invalid():
    with patch.dict(os.environ, {"API_KEY": "test-key-123"}):
        with pytest.raises(HTTPException) as exc_info:
            require_api_key("wrong-key")
        assert exc_info.value.status_code == 401


def test_require_api_key_missing_header():
    with patch.dict(os.environ, {"API_KEY": "test-key-123"}):
        with pytest.raises(HTTPException) as exc_info:
            require_api_key(None)
        assert exc_info.value.status_code == 401


def test_require_api_key_no_env_var():
    with patch.dict(os.environ, {}, clear=True):
        result = require_api_key(None)
        assert result is True
