# Landing Page with Collection Cards — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current single-page icon browser with a landing page showing collection cards, where clicking a card navigates to the existing browse view filtered to that collection.

**Architecture:** Two-view SPA in the existing vanilla JS app. Landing view shows hero + collection cards. Browse view shows the existing icon grid filtered by collection. URL hash (`#collection=X`) controls which view is active. New `/api/collections` endpoint provides collection metadata.

**Tech Stack:** FastAPI (Python), vanilla JS, CSS — no new dependencies.

---

### Task 1: Add `/api/collections` API endpoint

**Files:**
- Modify: `api/services/search.py` — add `get_collections()` method
- Modify: `api/routers/categories.py` — add `/api/collections` route
- Modify: `api/main.py:95` — fix hardcoded sets list in `/api/stats`

**Step 1: Add `get_collections()` to SearchService**

In `api/services/search.py`, add method after `count_icons()`:

```python
def get_collections(self):
    cursor = self.conn.execute("""
        SELECT set_name, COUNT(*) as icon_count,
               GROUP_CONCAT(DISTINCT category) as categories
        FROM icons WHERE status = 'ready'
        GROUP BY set_name ORDER BY icon_count DESC
    """)
    results = []
    for row in cursor.fetchall():
        name = row[0]
        # Find a cover icon: try matching set name, fallback to first icon
        cover = self._find_cover_icon(name)
        results.append({
            "name": name,
            "icon_count": row[1],
            "categories": row[2].split(",") if row[2] else [],
            "cover_icon_id": cover,
        })
    return results

def _find_cover_icon(self, set_name):
    """Find best cover icon for a collection: icon name matching set name, else first icon."""
    slug = set_name.lower().replace(" ", "").replace("_", "")
    cursor = self.conn.execute(
        "SELECT id, name FROM icons WHERE set_name = ? AND status = 'ready' ORDER BY name",
        (set_name,)
    )
    first_id = None
    for row in cursor.fetchall():
        if first_id is None:
            first_id = row[0]
        if row[1].lower().replace(" ", "").replace("_", "") == slug:
            return row[0]
    return first_id
```

**Step 2: Add route in `api/routers/categories.py`**

Add after the existing routes:

```python
@router.get("/collections")
async def list_collections(db=Depends(get_database)):
    search = SearchService(db)
    return search.get_collections()
```

**Step 3: Fix `/api/stats` to use dynamic sets**

In `api/main.py`, replace the hardcoded `sets=["lingaro_set4"]` line:

```python
sets_cursor = db.execute("SELECT DISTINCT set_name FROM icons WHERE status = 'ready'")
sets_list = [row[0] for row in sets_cursor.fetchall()]
return CatalogStats(
    total_icons=svc.count_icons(),
    categories=[c["name"] for c in cats],
    sets=sets_list,
    icons_with_embeddings=0,
)
```

**Step 4: Test endpoint**

Run: `curl http://localhost:8000/api/collections`
Expected: JSON array with 3-4 collections, each with `name`, `icon_count`, `categories`, `cover_icon_id`.

**Step 5: Commit**

```bash
git add api/services/search.py api/routers/categories.py api/main.py
git commit -m "feat: add /api/collections endpoint with cover icon detection"
```

---

### Task 2: Update HTML structure for two-view layout

**Files:**
- Modify: `index.html`

**Step 1: Restructure index.html**

Replace the `<main>` content with two views. The hero + collection cards is the landing view. The existing search/grid is the browse view (hidden by default):

```html
<main class="main">
  <div class="hero-wave">
    <img src="assets/branding/lingaro-wave.webp" alt="" aria-hidden="true">
  </div>

  <!-- LANDING VIEW -->
  <div id="landing-view" class="container">
    <section class="hero">
      <h1 class="hero-title"><img src="assets/branding/lingaro-logo.png" alt="Lingaro" class="hero-logo"> <span>Icons</span> Catalog</h1>
      <p class="hero-subtitle">
        Search through 248+ beautifully crafted SVG icons.
        AI-powered semantic search helps you find the perfect icon.
      </p>
    </section>

    <div class="landing-search-container">
      <div class="search-box">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input type="text" class="search-input" id="landing-search-input" placeholder="Search icons across all collections...">
      </div>
    </div>

    <section class="collections-section">
      <div class="collections-grid" id="collections-grid">
        <div class="loading">
          <div class="loading-spinner"></div>
          <span>Loading collections...</span>
        </div>
      </div>
    </section>
  </div>

  <!-- BROWSE VIEW (hidden by default) -->
  <div id="browse-view" class="container" style="display:none">
    <div class="browse-header">
      <button class="btn btn--back" id="back-to-landing" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        All Collections
      </button>
      <h2 class="browse-collection-title" id="browse-collection-title"></h2>
    </div>

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
```

Key changes:
- Hero and title only in `#landing-view`
- Collections filter checkboxes removed from browse view (single collection at a time now)
- Added back button + collection title header in browse view
- Landing search bar is separate (`#landing-search-input`)

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: restructure HTML for landing + browse two-view layout"
```

---

### Task 3: Add CSS for collection cards and landing layout

**Files:**
- Modify: `assets/css/style.css`

**Step 1: Add collection card and landing styles**

Append to `style.css`:

```css
/* Landing page */
.landing-search-container{max-width:800px;margin:0 auto 48px}

/* Collection cards */
.collections-section{margin-bottom:48px}
.collections-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px}
.collection-card{background:#fff;border:1px solid #e5e5f0;border-radius:16px;padding:28px;display:flex;gap:24px;align-items:flex-start;cursor:pointer;transition:all 0.25s ease;text-decoration:none;color:inherit}
.collection-card:hover{border-color:#783cbe;box-shadow:0 8px 24px rgba(120,60,190,0.12);transform:translateY(-4px)}
.collection-card-icon{width:72px;height:72px;flex-shrink:0;background:linear-gradient(135deg,#f8f8fc 0%,#f0f0f8 100%);border-radius:12px;display:flex;align-items:center;justify-content:center;padding:12px}
.collection-card-icon img{width:100%;height:100%;object-fit:contain}
.collection-card-body{flex:1;min-width:0}
.collection-card-name{font-size:1.25rem;font-weight:700;color:#1a1a2e;margin-bottom:4px}
.collection-card-count{font-size:0.875rem;color:#783cbe;font-weight:600;margin-bottom:12px}
.collection-card-categories{display:flex;flex-wrap:wrap;gap:6px}
.collection-card-cat{font-size:0.75rem;color:#64648c;background:#f5f5fa;padding:4px 10px;border-radius:12px}

/* Browse header */
.browse-header{display:flex;align-items:center;gap:16px;margin-bottom:24px}
.browse-collection-title{font-size:1.5rem;font-weight:700;color:#1a1a2e}
.btn--back{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;font-size:0.875rem;font-weight:500;border:1px solid #e5e5f0;border-radius:8px;background:#fff;color:#64648c;cursor:pointer;transition:all 0.2s ease;font-family:inherit}
.btn--back:hover{border-color:#783cbe;color:#783cbe}

@media (max-width:768px){
  .collections-grid{grid-template-columns:1fr}
  .collection-card{padding:20px;gap:16px}
  .collection-card-icon{width:56px;height:56px}
}
```

**Step 2: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: add collection card and landing page styles"
```

---

### Task 4: Implement landing view JS logic

**Files:**
- Modify: `assets/js/search.js`

**Step 1: Add landing view logic**

At the top of the IIFE, add new state variables:

```javascript
let collectionsData = null;
let currentView = 'landing'; // 'landing' or 'browse'
let currentCollection = null; // set_name for browse view
```

Replace the `init()` function to load collections first and show the landing view:

```javascript
async function init() {
  try {
    // Check URL hash for direct collection link
    const hash = window.location.hash;
    const collectionMatch = hash.match(/collection=(.+)/);

    // Load collections for landing page
    await loadCollections();

    if (collectionMatch) {
      const collectionName = decodeURIComponent(collectionMatch[1]);
      showBrowseView(collectionName);
    } else {
      showLandingView();
    }

    // Landing search handler
    const landingSearch = document.getElementById('landing-search-input');
    if (landingSearch) {
      landingSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && landingSearch.value.trim()) {
          // Search across all collections — go to browse with no collection filter
          showBrowseView(null, landingSearch.value.trim());
        }
      });
    }

    // Back button
    const backBtn = document.getElementById('back-to-landing');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '';
        showLandingView();
      });
    }

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
      const h = window.location.hash;
      const m = h.match(/collection=(.+)/);
      if (m) {
        showBrowseView(decodeURIComponent(m[1]));
      } else if (!h || h === '#') {
        showLandingView();
      }
    });
  } catch (error) {
    console.error('Init error:', error);
  }
}
```

Add `loadCollections()`:

```javascript
async function loadCollections() {
  try {
    const apiBase = window.API_URL || '';
    const res = await fetch(`${apiBase}/api/collections`);
    collectionsData = await res.json();
  } catch (e) {
    console.error('Failed to load collections:', e);
    collectionsData = [];
  }
}
```

Add `renderCollectionCards()`:

```javascript
function renderCollectionCards() {
  const grid = document.getElementById('collections-grid');
  if (!grid || !collectionsData) return;
  const apiBase = window.API_URL || '';

  grid.innerHTML = collectionsData
    .filter(c => c.name !== 'test_set')
    .map(c => {
      const displayName = formatCollectionName(c.name);
      const coverUrl = c.cover_icon_id
        ? `${apiBase}/api/icons/${c.cover_icon_id}/file`
        : '';
      const cats = c.categories.slice(0, 5)
        .map(cat => `<span class="collection-card-cat">${cat}</span>`)
        .join('');
      const moreCats = c.categories.length > 5
        ? `<span class="collection-card-cat">+${c.categories.length - 5} more</span>`
        : '';
      return `
        <div class="collection-card" data-collection="${c.name}">
          <div class="collection-card-icon">
            ${coverUrl ? `<img src="${coverUrl}" alt="${displayName}">` : ''}
          </div>
          <div class="collection-card-body">
            <div class="collection-card-name">${displayName}</div>
            <div class="collection-card-count">${c.icon_count} icon${c.icon_count !== 1 ? 's' : ''}</div>
            <div class="collection-card-categories">${cats}${moreCats}</div>
          </div>
        </div>`;
    }).join('');

  // Click handlers
  grid.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.dataset.collection;
      window.location.hash = `collection=${encodeURIComponent(name)}`;
      showBrowseView(name);
    });
  });
}

function formatCollectionName(name) {
  // "lingaro_set4" → "Lingaro Set 4", "Microsoft Fabric" stays
  return name
    .replace(/_/g, ' ')
    .replace(/([a-z])(\d)/g, '$1 $2')
    .replace(/\b\w/g, c => c.toUpperCase());
}
```

Add view switching functions:

```javascript
function showLandingView() {
  currentView = 'landing';
  currentCollection = null;
  document.getElementById('landing-view').style.display = '';
  document.getElementById('browse-view').style.display = 'none';
  renderCollectionCards();
}

async function showBrowseView(collectionName, searchQuery) {
  currentView = 'browse';
  currentCollection = collectionName;
  document.getElementById('landing-view').style.display = 'none';
  document.getElementById('browse-view').style.display = '';

  // Update title
  const title = document.getElementById('browse-collection-title');
  if (title) {
    title.textContent = collectionName
      ? formatCollectionName(collectionName)
      : 'All Collections';
  }

  // Initialize browse view DOM refs
  searchInput = document.getElementById('search-input');
  clearButton = document.getElementById('clear-search');
  categoryFilter = document.getElementById('category-filter');
  resultsCount = document.getElementById('results-count');
  iconsGrid = document.querySelector('#browse-view .icons-grid');

  // Load icons for this collection
  selectedCollections = new Set();
  if (collectionName) {
    selectedCollections.add(collectionName);
  }

  await loadIconsData();
  if (!iconsData) return;

  setupEventListeners();
  populateFilters();

  if (searchQuery) {
    searchInput.value = searchQuery;
    currentQuery = searchQuery;
    performSearch();
  } else {
    renderIcons(iconsData.icons);
  }
}
```

Remove the old `populateFilters` collections-checkbox code (the collections filter is no longer needed in browse view since we filter by one collection at a time).

**Step 2: Update `loadIconsData` to respect `currentCollection`**

The existing `loadIconsData` fetches from `/api/icons?set=X`. Make sure it passes the `currentCollection`:

```javascript
// In the API fetch section of loadIconsData:
let url = `${apiBase}/api/icons?limit=500`;
if (currentCollection) {
  url += `&set=${encodeURIComponent(currentCollection)}`;
}
```

**Step 3: Commit**

```bash
git add assets/js/search.js
git commit -m "feat: implement landing view with collection cards and view switching"
```

---

### Task 5: Update footer icon count to be dynamic

**Files:**
- Modify: `index.html` — change footer text

**Step 1: Make footer count dynamic**

Change the footer paragraph to:

```html
<p>&copy; 2024 Lingaro. <span id="footer-count">248</span> icons available.</p>
```

In `search.js` `loadCollections()`, after loading, update the count:

```javascript
const totalIcons = collectionsData.reduce((sum, c) => sum + c.icon_count, 0);
const footerCount = document.getElementById('footer-count');
if (footerCount) footerCount.textContent = totalIcons;
```

**Step 2: Commit**

```bash
git add index.html assets/js/search.js
git commit -m "feat: dynamic icon count in footer from collections data"
```

---

### Task 6: Verify and test

**Step 1: Start server and test landing page**

Run: `python run_api.py`

Verify:
- Landing page shows hero title, search bar, and 3 collection cards (Lingaro Set 4, Databricks, Microsoft Fabric)
- Each card shows cover icon, name, category chips, icon count
- `test_set` is filtered out

**Step 2: Test navigation**

- Click a collection card → browse view with filtered icons, back button visible
- Click back button → returns to landing
- Browser back/forward works
- Direct URL `http://localhost:8000/#collection=databricks` → opens browse view for Databricks

**Step 3: Test landing search**

- Type query in landing search, press Enter → browse view with search results across all collections
- Search within a collection works as before

**Step 4: Final commit if any fixes needed**
