"""Tests for the annotation service."""

from unittest.mock import MagicMock, patch

import pytest

from api.services.annotation import annotate_icon, parse_llm_json


def test_parse_llm_json_clean():
    raw = '{"description": "A cloud icon", "tags": ["cloud"], "use_cases": ["dashboards"]}'
    result = parse_llm_json(raw)
    assert result["description"] == "A cloud icon"


def test_parse_llm_json_with_markdown_fence():
    raw = '```json\n{"description": "x", "tags": ["a"], "use_cases": ["b"]}\n```'
    result = parse_llm_json(raw)
    assert result["description"] == "x"


def test_parse_llm_json_invalid_returns_none():
    assert parse_llm_json("not json at all") is None


@patch("api.services.annotation.OpenAI")
def test_annotate_icon_text_only(mock_openai_cls):
    mock_client = MagicMock()
    mock_openai_cls.return_value = mock_client
    mock_client.chat.completions.create.return_value = MagicMock(
        choices=[MagicMock(message=MagicMock(
            content='{"description": "Test", "tags": ["t"], "use_cases": ["u"]}'
        ))]
    )
    result = annotate_icon(mock_client, "Cloud", "Data Analysis Charts")
    assert result["description"] == "Test"
    assert result["tags"] == ["t"]
