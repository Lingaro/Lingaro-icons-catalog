# Lingaro Icons Catalog

A searchable web catalog for the Lingaro icon collection featuring 248+ SVG icons with AI-powered annotations and semantic search capabilities.

![Lingaro Icons Catalog](https://img.shields.io/badge/icons-248+-purple)

## Quick Start

### Start the Web Server

```bash
# Install dependencies
pip install -r requirements.txt

# Start web server (Windows)
python app.py
```

✅ **Web UI:** http://localhost:8000
📚 **API Docs:** http://localhost:8000/docs

> **Note:** On Linux/Azure use `gunicorn -c gunicorn.conf.py api.main:app` instead.

See [QUICK-START.md](QUICK-START.md) for more options.

## Features

- 🔍 Full-text search with AI-powered semantic matching
- 📁 18 organized categories (Data Analysis, Marketing, Logistics, etc.)
- 🏷️ Automated tagging and descriptions using OpenAI
- 📱 Responsive grid layout
- ⬇️ One-click SVG download
- 🚀 REST API with FastAPI

## Managing Icons

### Adding New Icons

1. Place SVG files in `icons/lingaro_set4/YourCategory/`
2. Follow naming conventions: lowercase with hyphens (`user-profile.svg`)
3. Ensure Lingaro purple color: `#783cbe`

### Update Catalog

```bash
# Scan for new icons
python scripts/scan_icons.py

# (Optional) Generate AI descriptions
python scripts/annotate.py
```

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions for Azure, GitHub Pages, and other platforms.

## Project Structure

```
Lingaro-icons-catalog/
├── icons/                      # SVG icon files
│   └── lingaro_set4/          # Main icon set
│       ├── Abstract/
│       ├── Data Analysis Charts/
│       ├── Marketing/
│       └── ...
├── assets/
│   ├── data/
│   │   └── icons.json         # Icon metadata (generated)
│   ├── js/
│   │   └── search.js          # Search functionality
│   └── css/
│       └── style.scss         # Styling
├── scripts/
│   ├── scan_icons.py          # Scan icons directory
│   ├── annotate.py            # AI annotation
│   ├── generate_embeddings.py # Semantic search embeddings
│   └── requirements.txt       # Python dependencies
├── _includes/
│   ├── icon-card.html         # Icon card component
│   └── search-bar.html        # Search UI
├── _layouts/
│   └── default.html           # Page template
├── _sass/                      # Sass stylesheets
├── index.html                  # Main catalog page
├── categories.html             # Category browsing page
├── _config.yml                 # Jekyll configuration
├── Gemfile                     # Ruby dependencies
└── README.md                   # This file
```

## API Endpoints

- `GET /search?q={query}` - Search icons with text/semantic matching
- `GET /icons` - List all icons (paginated)
- `GET /icons/{id}` - Get specific icon
- `GET /categories` - List all categories
- `GET /tags` - Popular tags

Full API documentation at http://localhost:8000/docs

## Categories

18 organized categories including:
- Data Analysis Charts (AI, cloud, database)
- Marketing & Communication
- Logistics & Transportation
- Documents & Certificates
- And more...

---

## How It Works

The app is a **single-page web application** served by FastAPI:

- **Frontend:** `index.html` + `assets/` (HTML/CSS/JS)
- **Backend:** FastAPI server (`api/` folder)
- **Data:** SQLite database (`icons.db`) + SVG files (`icons/` folder)

When you run `python app.py`:
1. FastAPI serves `index.html` at http://localhost:8000
2. The web UI loads and calls REST API endpoints
3. No build step needed - just start the server!

### Project Structure
```
index.html              # Main web app
assets/
  css/style.css        # Styles
  js/                  # Client-side JavaScript
  data/icons.json      # Icon metadata (legacy)
icons/                 # SVG icon files organized by category
api/                   # FastAPI backend
  main.py             # API routes and server setup
  models.py           # Data models
  search.py           # Search engine
icons.db              # SQLite database
app.py                # Server launcher
scripts/
  scan_icons.py       # Scan icons directory
  annotate.py         # AI annotation
```

### Contributing
1. Add SVG files to appropriate category
2. Run `python scripts/scan_icons.py` to update catalog
3. Optionally run `python scripts/annotate.py` for AI descriptions
4. Commit changes including updated metadata

## License

Copyright © 2024 Lingaro. All rights reserved.

Icons are proprietary to Lingaro and intended for internal use.

## Support

For questions or issues:
- Create an issue in the GitHub repository
- Contact the Lingaro design team
- See `CLAUDE.md` for AI assistant guidance

---

**Built with** ❤️ **by Lingaro**
