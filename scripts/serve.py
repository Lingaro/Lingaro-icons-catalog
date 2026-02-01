#!/usr/bin/env python3
"""
Simple development server for the Lingaro Icons Catalog.
Compiles SCSS and serves the site without requiring Ruby/Jekyll.
"""

import http.server
import socketserver
import os
import shutil
from pathlib import Path

try:
    import sass
    HAS_SASS = True
except ImportError:
    HAS_SASS = False
    print("Warning: libsass not installed. SCSS will not be compiled.")

# Configuration
PORT = 4000
ROOT_DIR = Path(__file__).parent.parent
BUILD_DIR = ROOT_DIR / "_site"


def compile_scss():
    """Compile SCSS to CSS."""
    if not HAS_SASS:
        return False

    scss_file = ROOT_DIR / "_sass" / "main.scss"
    css_output = BUILD_DIR / "assets" / "css" / "style.css"

    if not scss_file.exists():
        print(f"SCSS file not found: {scss_file}")
        return False

    css_output.parent.mkdir(parents=True, exist_ok=True)

    try:
        css_content = sass.compile(filename=str(scss_file), output_style='compressed')
        with open(css_output, 'w', encoding='utf-8') as f:
            f.write(css_content)
        print(f"[OK] Compiled SCSS to {css_output}")
        return True
    except Exception as e:
        print(f"Error compiling SCSS: {e}")
        return False


def build_site():
    """Build the static site."""
    print("Building site...")

    # Clean build directory
    if BUILD_DIR.exists():
        try:
            shutil.rmtree(BUILD_DIR)
        except PermissionError:
            print("Warning: Could not delete _site directory. Trying to clean it instead...")
            # Try to remove individual files instead
            import time
            time.sleep(0.5)  # Brief pause to release file handles
            shutil.rmtree(BUILD_DIR, ignore_errors=True)
    BUILD_DIR.mkdir(exist_ok=True)

    # Copy static assets
    assets_src = ROOT_DIR / "assets"
    assets_dst = BUILD_DIR / "assets"
    if assets_src.exists():
        shutil.copytree(assets_src, assets_dst, dirs_exist_ok=True)
        print(f"[OK] Copied assets")

    # Copy icons
    icons_src = ROOT_DIR / "icons"
    icons_dst = BUILD_DIR / "icons"
    if icons_src.exists():
        shutil.copytree(icons_src, icons_dst, dirs_exist_ok=True)
        print(f"[OK] Copied icons")

    # Compile SCSS
    compile_scss()

    # Copy index.html from root (use the actual index.html, not generated)
    index_src = ROOT_DIR / "index.html"
    index_dst = BUILD_DIR / "index.html"
    if index_src.exists():
        shutil.copy2(index_src, index_dst)
        print(f"[OK] Copied index.html")
    else:
        # Fallback to generated HTML if no index.html exists
        create_index_html()

    print(f"\n[OK] Site built in {BUILD_DIR}")


def create_index_html():
    """Create a simple index.html without Jekyll."""
    html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lingaro Icons Catalog</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" type="image/svg+xml" href="icons/lingaro_set4/Absract/Idea.svg">
</head>
<body>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#783cbe"/>
          <path d="M7 12h10M12 7v10" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="logo-text">Lingaro Icons</span>
      </a>
      <nav class="nav">
        <a href="/" class="nav-link active">Browse</a>
      </nav>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <section class="hero">
        <h1 class="hero-title">Lingaro <span>Icons</span> Catalog</h1>
        <p class="hero-subtitle">
          Search through 248+ beautifully crafted SVG icons.
          AI-powered semantic search helps you find the perfect icon.
        </p>
      </section>

      <div class="search-container">
        <div class="search-box">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input type="text" class="search-input" id="search-input" placeholder="Search icons by name, tag, or description...">
          <button class="search-clear" id="clear-search" type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="search-filters">
          <div class="filter-group filter-group--collections">
            <label class="filter-label">Collections:</label>
            <div id="collections-filter" class="collections-checkboxes">
              <span class="loading-text">Loading collections...</span>
            </div>
          </div>
          <div class="filter-group">
            <label class="filter-label">Category:</label>
            <select class="filter-select" id="category-filter">
              <option value="">All Categories</option>
            </select>
          </div>
          <span class="search-stats" id="results-count">Loading...</span>
        </div>
      </div>

      <section class="icons-section">
        <div class="icons-grid" id="icons-grid">
          <div class="loading">
            <div class="loading-spinner"></div>
            <span>Loading icons...</span>
          </div>
        </div>
      </section>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Lingaro. 248 icons available.</p>
      <p class="footer-tech">Built with AI-powered semantic search</p>
    </div>
  </footer>

  <script>
    window.ICONS_DATA_URL = 'assets/data/icons.json';
    window.BASE_URL = '';
  </script>
  <script src="assets/js/search.js"></script>
  <script>
    // Debug: Direct collections population as fallback
    window.addEventListener('load', function() {
      setTimeout(function() {
        var el = document.getElementById('collections-filter');
        if (el && el.textContent.indexOf('Loading') !== -1) {
          // Still loading - try to fetch and populate directly
          fetch('assets/data/icons.json')
            .then(function(r) { return r.json(); })
            .then(function(data) {
              if (data.sets && data.sets.length > 0) {
                var html = '';
                data.sets.forEach(function(set) {
                  var count = data.icons.filter(function(i) { return i.set === set; }).length;
                  var name = set.replace(/_/g, ' ').replace(/\\b\\w/g, function(l) { return l.toUpperCase(); });
                  html += '<label class="collection-checkbox"><input type="checkbox" value="' + set + '" checked><span class="collection-name">' + name + '</span><span class="collection-count">(' + count + ')</span></label>';
                });
                el.innerHTML = html;
              }
            })
            .catch(function(e) { el.innerHTML = '<span style="color:red">Fallback error: ' + e.message + '</span>'; });
        }
      }, 1000);
    });
  </script>
</body>
</html>
'''

    index_path = BUILD_DIR / "index.html"
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"[OK] Created index.html")


def serve():
    """Start the development server."""
    os.chdir(BUILD_DIR)

    handler = http.server.SimpleHTTPRequestHandler

    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"\nServing at http://localhost:{PORT}/")
        print("Press Ctrl+C to stop\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")


if __name__ == "__main__":
    build_site()
    serve()
