# Lingaro Icons Catalog

A searchable web catalog for the Lingaro icon collection featuring 248+ SVG icons with AI-powered annotations and semantic search capabilities.

![Lingaro Icons Catalog](https://img.shields.io/badge/icons-248+-purple)
![Built with Jekyll](https://img.shields.io/badge/built%20with-Jekyll-red)

## Overview

The Lingaro Icons Catalog is a web-based interface for browsing, searching, and downloading corporate icons. All icons use the Lingaro brand color (`#783cbe`) and are organized into thematic categories.

**Key Features:**
- 🔍 Full-text search with AI-powered semantic matching
- 📁 18 organized categories (Data Analysis, Marketing, Logistics, etc.)
- 🏷️ Automated tagging and descriptions using OpenAI
- 📱 Responsive grid layout
- ⬇️ One-click SVG download
- 🚀 Static site deployment (GitHub Pages ready)

## Prerequisites

### For Running the Catalog
- **Ruby** (2.7 or higher) - for Jekyll
- **Bundler** - Ruby dependency manager

### For Icon Management
- **Python** (3.8 or higher)
- **OpenAI API access** - for icon annotation (optional)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Lingaro-icons-catalog.git
cd Lingaro-icons-catalog
```

### 2. Install Ruby Dependencies

```bash
gem install bundler
bundle install
```

### 3. Install Python Dependencies (for icon management)

```bash
cd scripts
python -m venv ../.venv
source ../.venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Configure Environment (Optional)

Create a `.env` file in the project root for OpenAI API access:

```env
OPENAI_API_KEY=your-api-key-here
OPENAI_BASE_URL=https://api.openai.com/v1
```

## Usage

### Launch the Catalog Locally

#### Option 1: Using Jekyll (Recommended)

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000/Lingaro-icons-catalog/` in your browser.

#### Option 2: Using Python Server

```bash
python scripts/serve.py
```

Visit `http://localhost:8000` in your browser.

### Search and Browse Icons

- **Search bar**: Type keywords (e.g., "data", "cloud", "arrow")
- **Category filter**: Click category buttons to filter by theme
- **Download**: Click any icon card to download the SVG file

## Managing Icons

### Adding New Icons

1. **Organize icons** in the directory structure:
   ```
   icons/
     lingaro_set4/
       YourCategory/
         your-icon.svg
   ```

2. **Follow naming conventions**:
   - Use lowercase with hyphens: `user-profile.svg`
   - Descriptive names: `cloud-storage.svg` instead of `icon1.svg`

3. **Ensure consistent format**:
   - SVG format with XML declaration
   - Fill color using `.cls-1` class
   - Lingaro purple: `#783cbe`

### Scanning Icons

After adding new icons, scan the directory to update the catalog:

```bash
cd scripts
python scan_icons.py
```

This creates/updates `assets/data/icons.json` with:
- File paths
- Icon names
- Categories
- Basic tags (derived from filename and category)

**Output:** `assets/data/icons.json`

### Annotating Icons with AI

For enhanced search and descriptions, use AI annotation:

```bash
cd scripts
python annotate.py
```

This script:
- Reads all icons from `icons.json`
- Converts SVG to PNG for vision analysis
- Sends images to OpenAI with icon metadata
- Generates semantic descriptions and tags
- Updates `icons.json` with enriched data

**Requirements:**
- Valid `OPENAI_API_KEY` in `.env`
- Internet connection
- OpenAI API credits

**Cost consideration:** Processes ~248 icons with vision API calls.

### Generating Search Embeddings (Optional)

For semantic search capabilities:

```bash
cd scripts
python generate_embeddings.py
```

This generates vector embeddings for each icon's description to enable similarity-based search.

## Deployment

### Deploy to GitHub Pages

1. **Update configuration** in `_config.yml`:
   ```yaml
   url: "https://your-username.github.io"
   baseurl: "/Lingaro-icons-catalog"
   github_repo: "https://github.com/your-username/Lingaro-icons-catalog"
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`

4. **Access your catalog** at:
   `https://your-username.github.io/Lingaro-icons-catalog/`

### Deploy to Other Platforms

The `_site` directory contains the built static site and can be deployed to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

Build the site first:
```bash
bundle exec jekyll build
```

Then upload the `_site` directory contents.

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
│   ├── serve.py               # Dev server
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

## Configuration

### Jekyll Configuration (`_config.yml`)

Key settings:
- `title`: Site title
- `description`: Site description
- `baseurl`: Path prefix for GitHub Pages
- `icon_color`: Brand color for icons
- `github_repo`: Repository URL

### Icon Metadata (`assets/data/icons.json`)

Generated by scan/annotate scripts. Structure:
```json
{
  "icons": [
    {
      "name": "cloud-storage",
      "path": "icons/lingaro_set4/Data Analysis Charts/cloud-storage.svg",
      "category": "Data Analysis Charts",
      "set": "lingaro_set4",
      "tags": ["cloud", "storage", "data", "server"],
      "description": "Cloud storage icon representing data storage services",
      "color": "#783cbe"
    }
  ],
  "categories": ["Abstract", "Data Analysis Charts", ...],
  "sets": ["lingaro_set4"]
}
```

## Icon Categories

The catalog includes 18 categories:
- **Abstract** - Conceptual icons (brainstorm, puzzle, rocket)
- **Arrows Icons** - Navigation and directional
- **Buildings** - Corporate, warehouse, home
- **Data Analysis Charts** - AI, cloud, database, charts
- **Documents** - Document types, awards, certificates
- **Globes** - Network and planet icons
- **Green Energy** - Ecology and sustainability
- **Hands** - Hand gestures
- **Health** - Health, sports, wellness
- **Logistic** - Shipping and transportation
- **Marketing** - Marketing and communication
- **Mobile phones** - Device icons
- **Money** - Financial icons
- **Monitors** - Screens and displays
- **Personas** - People and users
- **Safety** - Security icons
- **Social Media** - Social platform icons
- **Time** - Clocks and calendars

## Troubleshooting

### Jekyll won't start
```bash
# Update dependencies
bundle update
bundle exec jekyll serve --trace
```

### Python scripts fail
```bash
# Verify Python version
python --version  # Should be 3.8+

# Reinstall dependencies
pip install -r scripts/requirements.txt --upgrade
```

### Icons not appearing
1. Check `assets/data/icons.json` exists and is valid JSON
2. Run `python scripts/scan_icons.py` to regenerate
3. Clear Jekyll cache: `rm -rf _site .jekyll-cache`

### OpenAI annotation fails
1. Verify `.env` file exists with valid `OPENAI_API_KEY`
2. Check API quota and billing
3. Test with smaller batch: modify `annotate.py` to process fewer icons

## Contributing

### Adding Icons
1. Place SVG in appropriate category folder
2. Run `scan_icons.py` to update catalog
3. Optionally run `annotate.py` for AI descriptions
4. Commit changes including updated `icons.json`

### Modifying Design
- Edit Sass files in `_sass/`
- Update layouts in `_layouts/`
- Modify components in `_includes/`

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
