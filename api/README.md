# Lingaro Icons Catalog API

FastAPI-based REST API with semantic search capabilities for browsing and searching through the Lingaro icon collection.

## Features

- **Semantic Search**: AI-powered search using OpenAI embeddings to find conceptually similar icons
- **Text Search**: Fallback text-based search with relevance scoring
- **Category/Tag Browsing**: Browse icons by category or tags
- **Pagination**: Support for paginated results
- **CORS**: Cross-origin support for frontend integration

## Quick Start

### 1. Install Dependencies

```bash
pip install -r api/requirements.txt
```

Or install from the main requirements file:
```bash
pip install -r scripts/requirements.txt
```

### 2. Set Environment Variables

For semantic search (optional but recommended):
```bash
export OPENAI_API_KEY=your_openai_api_key
```

### 3. Run the API

```bash
python app.py
```

Or with development auto-reload:
```bash
python app.py --reload
```

The API will be available at `http://localhost:8000`.

## API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI JSON**: http://localhost:8000/openapi.json

## Endpoints

### Search

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/search?q={query}` | Search icons by query |
| POST | `/search` | Search with JSON body |

**Query Parameters:**
- `q` (required): Search query
- `category`: Filter by category
- `set`: Filter by icon set
- `limit`: Max results (default: 50)
- `semantic`: Use semantic search (default: true)

**Example:**
```bash
curl "http://localhost:8000/search?q=data%20visualization&limit=10"
```

### Icons

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/icons` | List all icons (paginated) |
| GET | `/icons/{id}` | Get icon by ID |
| GET | `/icons/{id}/file` | Download SVG file |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | List all categories |
| GET | `/categories/{name}` | Get icons in category |

### Tags

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tags` | List popular tags |
| GET | `/tags/{tag}` | Get icons with tag |

### Info

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/stats` | Catalog statistics |

## Search Examples

### Basic Search
```bash
# Find money/finance icons
curl "http://localhost:8000/search?q=money"

# Find icons about data
curl "http://localhost:8000/search?q=data%20analytics"
```

### Filtered Search
```bash
# Search in specific category
curl "http://localhost:8000/search?q=chart&category=Data%20Analysis%20Charts"

# Search with pagination
curl "http://localhost:8000/search?q=person&limit=20"
```

### Semantic vs Text Search
```bash
# Semantic search (uses embeddings)
curl "http://localhost:8000/search?q=financial%20growth&semantic=true"

# Text-only search
curl "http://localhost:8000/search?q=money&semantic=false"
```

## Response Format

### Search Response
```json
{
  "query": "data visualization",
  "total": 15,
  "semantic_search": true,
  "icons": [
    {
      "id": "lingaro_set4_data_analysis_charts_bar_chart",
      "name": "Bar Chart",
      "filename": "Bar Chart.svg",
      "path": "icons/lingaro_set4/Data Analysis Charts/Bar Chart.svg",
      "category": "Data Analysis Charts",
      "set": "lingaro_set4",
      "description": "A bar chart icon representing data visualization...",
      "tags": ["chart", "data", "visualization", "analytics"],
      "use_cases": ["Business dashboards", "Data reports"],
      "score": 0.8542
    }
  ]
}
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for embeddings | No (disables semantic search) |

### Run Options

```bash
python app.py --help

Options:
  --host TEXT      Host to bind to (default: 0.0.0.0)
  --port INTEGER   Port to run on (default: 8000)
  --reload         Enable auto-reload for development
  --workers INT    Number of worker processes
```

## Integration with Frontend

The API supports CORS, so you can call it from your frontend:

```javascript
// JavaScript example
async function searchIcons(query) {
  const response = await fetch(`http://localhost:8000/search?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.icons;
}
```

## Architecture

```
api/
├── __init__.py      # Package marker
├── main.py          # FastAPI application & routes
├── models.py        # Pydantic data models
├── search.py        # Search engine implementation
├── requirements.txt # API-specific dependencies
└── README.md        # This file
```

## How Semantic Search Works

1. **Icon Embeddings**: Each icon's metadata (name, description, tags, use cases) is converted to a 256-dimensional vector using OpenAI's `text-embedding-3-small` model.

2. **Query Embedding**: When you search, your query is converted to the same vector space.

3. **Similarity**: Cosine similarity is computed between your query vector and all icon vectors.

4. **Ranking**: Icons are ranked by similarity score, with text-match boosts for exact matches.

This allows the API to find conceptually related icons even when the exact words don't match. For example, searching "revenue growth" might find icons tagged with "finance", "chart", or "increase".
