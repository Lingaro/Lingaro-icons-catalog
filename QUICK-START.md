# Quick Start Guide

## Starting the Web Server

**Step 1:** Install Python dependencies
```bash
pip install -r requirements.txt
```

**Step 2 (Optional):** Set OpenAI API key for AI features
```bash
# Create .env file with:
OPENAI_API_KEY=your-key-here
```

**Step 3:** Start the web server

```bash
python app.py
```

✅ **The web server is now running!**
- **Web App:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs

Press `Ctrl+C` to stop the server.

> **Note:** The `gunicorn` command is for Linux/Azure deployment only. On Windows, always use `python app.py`.

---

## Server Options

### Custom Port
```bash
python app.py --port 3000
```

### Production Mode (Multiple Workers)
```bash
python app.py --workers 4 --no-reload
```

### Available Options
- `--host` - Host to bind to (default: 0.0.0.0)
- `--port` - Port number (default: 8000)
- `--workers` - Number of worker processes (default: 1)
- `--no-reload` - Disable auto-reload

---

## Common Tasks

### Search for Icons
- Use the search bar on the web UI
- Filter by category
- Click to download SVG

### Add New Icons
```bash
# 1. Add SVG files to icons/lingaro_set4/YourCategory/
# 2. Scan to update catalog
python scripts/scan_icons.py

# 3. (Optional) Generate AI descriptions
python scripts/annotate.py
```

### API Usage
```python
import requests

# Search icons
response = requests.get("http://localhost:8000/search?q=cloud")
icons = response.json()["icons"]

# Get all categories
categories = requests.get("http://localhost:8000/categories").json()
```

---

## Troubleshooting

**Port already in use?**
```bash
python app.py --port 3000
```

**Missing dependencies?**
```bash
pip install -r requirements.txt --upgrade
```

**Icons not showing?**
```bash
python scripts/scan_icons.py
```

For deployment instructions, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
