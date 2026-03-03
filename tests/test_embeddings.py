"""Tests for the embeddings service."""

from unittest.mock import MagicMock, patch

import pytest

from api.services.embeddings import create_icon_text, generate_embedding


def test_create_icon_text():
    icon = {
        "name": "Cloud",
        "description": "A cloud icon",
        "category": "Data Analysis Charts",
        "tags": ["cloud", "storage"],
        "use_cases": ["Dashboards"],
    }
    text = create_icon_text(icon)
    assert "Cloud" in text
    assert "cloud" in text
    assert "storage" in text
    assert "Dashboards" in text


def test_create_icon_text_minimal():
    icon = {"name": "Foo"}
    text = create_icon_text(icon)
    assert text == "Foo"


@patch("api.services.embeddings.OpenAI")
def test_generate_embedding(mock_cls):
    mock_client = MagicMock()
    mock_cls.return_value = mock_client
    mock_client.embeddings.create.return_value = MagicMock(
        data=[MagicMock(embedding=[0.1] * 256)]
    )
    result = generate_embedding(mock_client, "cloud icon")
    assert len(result) == 256
