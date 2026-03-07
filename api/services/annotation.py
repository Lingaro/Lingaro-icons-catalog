"""AI annotation service — generates descriptions, tags, and use_cases for icons."""

import base64
import json
import os
from io import BytesIO
from pathlib import Path
from typing import Optional

from openai import OpenAI

DEFAULT_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o")

try:
    import cairosvg
    HAS_CAIRO = True
except (ImportError, OSError):
    HAS_CAIRO = False

try:
    from svglib.svglib import svg2rlg
    from reportlab.graphics import renderPM
    HAS_SVGLIB = True
except (ImportError, OSError):
    HAS_SVGLIB = False


def svg_to_png_base64(svg_data: bytes, size: int = 256) -> Optional[str]:
    """Convert SVG bytes to base64-encoded PNG for the Vision API."""
    if HAS_CAIRO:
        png_data = cairosvg.svg2png(bytestring=svg_data, output_width=size, output_height=size, background_color="white")
        return base64.b64encode(png_data).decode("utf-8")
    elif HAS_SVGLIB:
        import tempfile
        with tempfile.NamedTemporaryFile(suffix=".svg", delete=False) as f:
            f.write(svg_data)
            f.flush()
            drawing = svg2rlg(f.name)
        if drawing is None:
            return None
        scale = min(size / (drawing.width or size), size / (drawing.height or size))
        drawing.width *= scale
        drawing.height *= scale
        drawing.scale(scale, scale)
        buf = BytesIO()
        renderPM.drawToFile(drawing, buf, fmt="PNG", bg=0xFFFFFF)
        buf.seek(0)
        return base64.b64encode(buf.read()).decode("utf-8")
    return None


def parse_llm_json(raw: str) -> Optional[dict]:
    """Parse JSON from LLM response, stripping markdown fences if present."""
    text = raw.strip()
    if text.startswith("```"):
        text = text.split("```")[1]
        if text.startswith("json"):
            text = text[4:]
        text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return None


def annotate_icon(client: OpenAI, icon_name: str, category: str, svg_data: Optional[bytes] = None) -> dict:
    """Generate metadata for an icon using GPT-4."""
    if svg_data:
        image_b64 = svg_to_png_base64(svg_data)
        if image_b64:
            return _annotate_vision(client, icon_name, category, image_b64)
    return _annotate_text(client, icon_name, category)


ANNOTATION_PROMPT = """Generate metadata for an icon in JSON format.
The icon is named "{name}" and is in the "{category}" category.

Provide:
1. "description": A clear, concise description of what this icon represents (1-2 sentences)
2. "tags": An array of 5-8 relevant keywords/tags for search (lowercase)
3. "use_cases": An array of 2-3 suggested use cases

Respond with valid JSON only, no markdown formatting."""


def _annotate_text(client: OpenAI, name: str, category: str) -> dict:
    try:
        response = client.chat.completions.create(
            model=DEFAULT_MODEL,
            messages=[{"role": "user", "content": ANNOTATION_PROMPT.format(name=name, category=category)}],
            max_tokens=500, temperature=0.3,
        )
        result = parse_llm_json(response.choices[0].message.content)
        if result:
            return result
    except Exception:
        pass
    return _fallback_metadata(name, category)


def _annotate_vision(client: OpenAI, name: str, category: str, image_b64: str) -> dict:
    prompt = ANNOTATION_PROMPT.format(name=name, category=category).replace(
        "Generate metadata for an icon", "Analyze this icon image and provide metadata",
    )
    try:
        response = client.chat.completions.create(
            model=DEFAULT_MODEL,
            messages=[{"role": "user", "content": [
                {"type": "text", "text": prompt},
                {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_b64}", "detail": "low"}},
            ]}],
            max_tokens=500, temperature=0.3,
        )
        result = parse_llm_json(response.choices[0].message.content)
        if result:
            return result
    except Exception:
        pass
    return _fallback_metadata(name, category)


def _fallback_metadata(name: str, category: str) -> dict:
    return {
        "description": f"Icon representing {name.lower().replace('_', ' ')}",
        "tags": [name.lower(), category.lower()],
        "use_cases": ["General purpose icon"],
    }
