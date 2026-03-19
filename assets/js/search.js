/**
 * Lingaro Icons Catalog - Search and UI functionality
 * Features: Collections filter, PNG download, Copy to clipboard
 */

(function() {
  'use strict';

  // --- MSAL Authentication ---
  let msalInstance = null;
  let currentAccount = null;
  let currentUserInfo = null;

  function initMsal() {
    const config = window.MSAL_CONFIG;
    if (!config || !config.clientId) return false;
    msalInstance = new msal.PublicClientApplication({
      auth: {
        clientId: config.clientId,
        authority: config.authority,
        redirectUri: config.redirectUri,
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
      },
    });
    return true;
  }

  async function handleRedirectAndGetAccount() {
    if (!msalInstance) return null;
    try {
      const response = await msalInstance.handleRedirectPromise();
      if (response) return response.account;
    } catch (e) {
      console.error('MSAL redirect error:', e);
    }
    const accounts = msalInstance.getAllAccounts();
    return accounts.length > 0 ? accounts[0] : null;
  }

  async function getIdToken() {
    if (!msalInstance || !currentAccount) return null;
    try {
      const response = await msalInstance.acquireTokenSilent({
        scopes: ['openid', 'profile', 'email'],
        account: currentAccount,
      });
      return response.idToken;
    } catch (e) {
      console.warn('Silent token acquisition failed, redirecting to login:', e);
      msalInstance.acquireTokenRedirect({ scopes: ['openid', 'profile', 'email'] });
      return null;
    }
  }

  async function authFetch(url, options = {}) {
    const token = await getIdToken();
    if (token) {
      options.headers = options.headers || {};
      if (options.headers instanceof Headers) {
        options.headers.set('Authorization', `Bearer ${token}`);
      } else {
        options.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return fetch(url, options);
  }

  function signIn() {
    if (!msalInstance) return;
    msalInstance.loginRedirect({ scopes: ['openid', 'profile', 'email'] });
  }

  function signOut() {
    if (!msalInstance) return;
    msalInstance.logoutRedirect({ postLogoutRedirectUri: window.location.origin });
  }

  // State
  let iconsData = null;
  let filteredIcons = [];
  let currentQuery = '';
  let currentCategory = '';
  let selectedCollections = new Set(); // Multi-select collections
  let collectionsData = null;
  let currentView = 'landing'; // 'landing' or 'browse'
  let currentCollection = null; // set_name for browse view
  let browseListenersAttached = false; // prevent duplicate event listeners

  // DOM elements (initialized after DOM ready)
  let searchInput, clearButton, categoryFilter, resultsCount, iconsGrid;

  // Initialize
  document.addEventListener('DOMContentLoaded', init);

  async function init() {
    try {
      const msalEnabled = initMsal();

      if (msalEnabled) {
        currentAccount = await handleRedirectAndGetAccount();

        if (!currentAccount) {
          document.getElementById('login-screen').style.display = 'flex';
          document.getElementById('sign-in-btn').addEventListener('click', signIn);
          return;
        }

        document.getElementById('login-screen').style.display = 'none';

        try {
          const apiBase = window.API_URL || '';
          const meRes = await authFetch(`${apiBase}/api/me`);
          if (meRes.ok) {
            currentUserInfo = await meRes.json();
            const userInfoEl = document.getElementById('user-info');
            const userNameEl = document.getElementById('user-name');
            const adminBadge = document.getElementById('admin-badge');
            if (userInfoEl) userInfoEl.style.display = 'flex';
            if (userNameEl) userNameEl.textContent = currentUserInfo.name || currentUserInfo.email;
            if (adminBadge && currentUserInfo.is_admin) adminBadge.style.display = '';
            loadTokenInfo();
          }
        } catch (e) {
          console.error('Failed to fetch user info:', e);
        }

        const signOutBtn = document.getElementById('sign-out-btn');
        if (signOutBtn) signOutBtn.addEventListener('click', signOut);
      }

      await loadCollections();

      const hash = window.location.hash;
      const collectionMatch = hash.match(/collection=(.+)/);

      if (collectionMatch) {
        const collectionName = decodeURIComponent(collectionMatch[1]);
        await showBrowseView(collectionName);
      } else {
        showLandingView();
      }

      const landingSearch = document.getElementById('landing-search-input');
      if (landingSearch) {
        landingSearch.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && landingSearch.value.trim()) {
            showBrowseView(null, landingSearch.value.trim());
          }
        });
      }

      const backBtn = document.getElementById('back-to-landing');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          history.pushState(null, '', window.location.pathname);
          showLandingView();
        });
      }

      function handleNavigation() {
        const h = window.location.hash;
        const m = h.match(/collection=(.+)/);
        if (m) {
          showBrowseView(decodeURIComponent(m[1]));
        } else {
          showLandingView();
        }
      }
      window.addEventListener('hashchange', handleNavigation);
      window.addEventListener('popstate', handleNavigation);
    } catch (error) {
      console.error('Init error:', error);
    }
  }

  async function loadCollections() {
    try {
      const apiBase = window.API_URL || '';
      const res = await authFetch(`${apiBase}/api/collections`);
      collectionsData = await res.json();
      // Update footer count
      const totalIcons = collectionsData.reduce((sum, c) => sum + c.icon_count, 0);
      const footerCount = document.getElementById('footer-count');
      if (footerCount) footerCount.textContent = totalIcons;
    } catch (e) {
      console.error('Failed to load collections:', e);
      collectionsData = [];
    }
  }

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
        const refreshProviders = { 'Azure': 'azure', 'Google Cloud': 'gcp' };
        const isAdmin = new URLSearchParams(window.location.search).has('admin');
        const refreshKey = refreshProviders[c.name];
        const refreshBtn = (refreshKey && isAdmin)
          ? `<button class="collection-card-refresh" data-refresh="${refreshKey}" title="Refresh icons from official source">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/>
               </svg>
             </button>`
          : '';
        return `
          <div class="collection-card" data-collection="${c.name}">
            <div class="collection-card-icon">
              ${coverUrl ? `<img src="${coverUrl}" alt="${displayName}">` : ''}
            </div>
            <div class="collection-card-body">
              <div class="collection-card-name">${displayName}${refreshBtn}</div>
              <div class="collection-card-count">${c.icon_count} icon${c.icon_count !== 1 ? 's' : ''}</div>
              <div class="collection-card-categories">${cats}${moreCats}</div>
            </div>
          </div>`;
      }).join('');

    // Refresh button handlers (stop propagation so card click doesn't fire)
    grid.querySelectorAll('.collection-card-refresh').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const provider = btn.dataset.refresh; // 'azure' or 'gcp'
        const endpoint = `/api/admin/refresh-${provider}-icons`;
        const apiKey = prompt('Enter API key to refresh icons:');
        if (!apiKey) return;
        btn.classList.add('spinning');
        btn.disabled = true;
        try {
          const headers = { 'X-API-Key': apiKey };
          const res = await authFetch(`${apiBase}${endpoint}`, { method: 'POST', headers });
          const data = await res.json();
          if (data.status === 'started' || data.status === 'already_running') {
            const poll = setInterval(async () => {
              const sr = await authFetch(`${apiBase}${endpoint}/status`);
              const st = await sr.json();
              if (!st.running) {
                clearInterval(poll);
                btn.classList.remove('spinning');
                btn.disabled = false;
                const r = st.last_result;
                if (r && !r.error) {
                  alert(`Icons refreshed!\nAdded: ${r.added}, Removed: ${r.removed}, Unchanged: ${r.unchanged}, Total: ${r.total}`);
                  await loadCollections();
                  renderCollectionCards();
                } else {
                  alert(`Refresh failed: ${r ? r.error : 'Unknown error'}`);
                }
              }
            }, 2000);
          }
        } catch (err) {
          btn.classList.remove('spinning');
          btn.disabled = false;
          alert('Failed to start refresh: ' + err.message);
        }
      });
    });

    // Click handlers — only set hash, let hashchange handle navigation
    grid.querySelectorAll('.collection-card').forEach(card => {
      card.addEventListener('click', () => {
        const name = card.dataset.collection;
        window.location.hash = `collection=${encodeURIComponent(name)}`;
      });
    });
  }

  function formatCollectionName(name) {
    return name
      .replace(/_/g, ' ')
      .replace(/([a-z])(\d)/g, '$1 $2')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

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

    if (!browseListenersAttached) {
      setupEventListeners();
      browseListenersAttached = true;
    }
    populateFilters();

    if (searchQuery) {
      searchInput.value = searchQuery;
      currentQuery = searchQuery;
      handleSearch();
    } else {
      renderIcons(iconsData.icons);
    }
  }

  // Load icons data from API (with fallback to static JSON)
  async function loadIconsData() {
    try {
      showLoading();
      const apiBase = window.API_URL || '';

      // Try loading from API first
      try {
        const [iconsRes, catsRes] = await Promise.all([
          authFetch(`${apiBase}/api/icons?limit=500${currentCollection ? '&set=' + encodeURIComponent(currentCollection) : ''}`),
          authFetch(`${apiBase}/api/categories`),
        ]);

        if (iconsRes.ok && catsRes.ok) {
          const icons = await iconsRes.json();
          const categories = await catsRes.json();
          const mappedIcons = icons.map(i => ({
            ...i,
            set: i.set || i.set_name,
            format: (i.filename || '').endsWith('.png') ? 'png' : 'svg',
          }));
          const sets = [...new Set(mappedIcons.map(i => i.set).filter(Boolean))];
          // Derive categories from loaded icons (respects collection filter)
          const iconCats = [...new Set(mappedIcons.map(i => i.category).filter(Boolean))].sort();
          iconsData = {
            icons: mappedIcons,
            categories: iconCats,
            sets,
          };
          filteredIcons = iconsData.icons;
          return;
        }
      } catch (apiErr) {
        console.warn('API not available, falling back to static JSON:', apiErr);
      }

      // Fallback to static JSON
      const response = await fetch(window.ICONS_DATA_URL || '/assets/data/icons.json');
      if (!response.ok) {
        throw new Error('Failed to load icons data');
      }
      iconsData = await response.json();
      filteredIcons = iconsData.icons;

    } catch (error) {
      console.error('Error loading icons:', error);
      showError('Failed to load icons. Please refresh the page.');
    }
  }

  // Setup event listeners
  function setupEventListeners() {
    if (searchInput) {
      searchInput.addEventListener('input', debounce(handleSearch, 150));
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          clearSearch();
        }
      });
    }

    if (clearButton) {
      clearButton.addEventListener('click', clearSearch);
    }

    if (categoryFilter) {
      categoryFilter.addEventListener('change', handleFilterChange);
    }

    // Delegate click events for icon cards
    if (iconsGrid) {
      iconsGrid.addEventListener('click', handleIconAction);
    }

    // Tag clicks
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('tag')) {
        const tag = e.target.dataset.tag;
        if (tag && searchInput) {
          searchInput.value = tag;
          handleSearch();
        }
      }
    });
  }

  // Populate filter dropdowns and checkboxes
  function populateFilters() {
    try {
      if (!iconsData) {
        return;
      }

      // Populate category dropdown
      if (categoryFilter && iconsData.categories) {
        // Clear existing options (keep the first "All categories" option)
        while (categoryFilter.options.length > 1) {
          categoryFilter.remove(1);
        }
        iconsData.categories.forEach(cat => {
          const option = document.createElement('option');
          option.value = cat;
          option.textContent = cat;
          categoryFilter.appendChild(option);
        });
      }
    } catch (error) {
      console.error('populateFilters error:', error);
    }
  }

  // Count icons in a set
  function countIconsInSet(set) {
    return iconsData.icons.filter(icon => icon.set === set).length;
  }

  // Handle collection checkbox changes
  function handleCollectionChange(e) {
    if (e.target.type === 'checkbox') {
      const set = e.target.value;
      if (e.target.checked) {
        selectedCollections.add(set);
      } else {
        selectedCollections.delete(set);
      }
      applyFilters();
    }
  }

  // Handle search input
  function handleSearch() {
    currentQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
    applyFilters();
  }

  // Handle filter changes
  function handleFilterChange() {
    currentCategory = categoryFilter ? categoryFilter.value : '';
    applyFilters();
  }

  // Apply all filters
  function applyFilters() {
    if (!iconsData) return;

    filteredIcons = iconsData.icons.filter(icon => {
      // Collection (set) filter - must be in selected collections
      if (selectedCollections.size > 0 && !selectedCollections.has(icon.set)) {
        return false;
      }

      // Category filter
      if (currentCategory && icon.category !== currentCategory) {
        return false;
      }

      // Search query
      if (currentQuery) {
        return searchIcon(icon, currentQuery);
      }

      return true;
    });

    // If we have embeddings, sort by relevance
    if (currentQuery && iconsData.queryEmbedding) {
      filteredIcons = semanticSearch(filteredIcons, currentQuery);
    }

    renderIcons(filteredIcons);
  }

  // Basic text search (fallback when no embeddings)
  function searchIcon(icon, query) {
    const searchText = [
      icon.name,
      icon.description || '',
      icon.category,
      ...(icon.tags || []),
      ...(icon.use_cases || [])
    ].join(' ').toLowerCase();

    // Split query into words and check if all are present
    const queryWords = query.split(/\s+/);
    return queryWords.every(word => searchText.includes(word));
  }

  // Semantic search using embeddings
  function semanticSearch(icons, query) {
    // If query embeddings are pre-computed, use them
    if (iconsData.queryEmbeddings && iconsData.queryEmbeddings[query]) {
      const queryEmb = iconsData.queryEmbeddings[query];
      return icons
        .map(icon => ({
          ...icon,
          score: icon.embedding ? cosineSimilarity(queryEmb, icon.embedding) : 0
        }))
        .sort((a, b) => b.score - a.score);
    }

    // Otherwise, fall back to text matching with scoring
    return icons
      .map(icon => ({
        ...icon,
        score: calculateTextScore(icon, query)
      }))
      .sort((a, b) => b.score - a.score);
  }

  // Calculate text-based relevance score
  function calculateTextScore(icon, query) {
    let score = 0;
    const queryLower = query.toLowerCase();
    const nameLower = icon.name.toLowerCase();

    // Exact name match
    if (nameLower === queryLower) score += 100;
    // Name starts with query
    else if (nameLower.startsWith(queryLower)) score += 50;
    // Name contains query
    else if (nameLower.includes(queryLower)) score += 30;

    // Tag matches
    if (icon.tags) {
      icon.tags.forEach(tag => {
        if (tag.toLowerCase() === queryLower) score += 40;
        else if (tag.toLowerCase().includes(queryLower)) score += 20;
      });
    }

    // Description match
    if (icon.description && icon.description.toLowerCase().includes(queryLower)) {
      score += 15;
    }

    // Category match
    if (icon.category.toLowerCase().includes(queryLower)) {
      score += 10;
    }

    return score;
  }

  // Cosine similarity for vector comparison
  function cosineSimilarity(a, b) {
    if (!a || !b || a.length !== b.length) return 0;

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  // Clear search
  function clearSearch() {
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    currentQuery = '';
    applyFilters();
  }

  // Render icons to grid
  function renderIcons(icons) {
    if (!iconsGrid) return;

    // Update count
    if (resultsCount) {
      resultsCount.textContent = `${icons.length} icon${icons.length !== 1 ? 's' : ''}`;
    }

    if (icons.length === 0) {
      iconsGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3 class="no-results-title">No icons found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      `;
      return;
    }

    iconsGrid.innerHTML = icons.map(icon => createIconCard(icon)).join('');
  }

  // Create icon card HTML
  function createIconCard(icon) {
    const tags = (icon.tags || []).slice(0, 5).map(tag =>
      `<span class="tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`
    ).join('');

    const description = icon.description || 'No description available';
    const format = icon.format || 'svg';
    const isSvg = format === 'svg';
    const copyAction = isSvg ? 'copy-svg' : 'copy-png';
    const copyLabel = isSvg ? 'Copy SVG' : 'Copy PNG';

    // Build action buttons based on format
    let actionButtons = '';
    if (isSvg) {
      // SVG icons: SVG download, PNG download, Copy SVG
      actionButtons = `
          <button class="btn btn--download" data-action="download-svg" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.filename)}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            SVG
          </button>
          <button class="btn btn--download-png" data-action="download-png" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.name)}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            PNG
          </button>
          <button class="btn btn--copy" data-action="copy-svg" data-path="${escapeHtml(icon.path)}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            Copy
          </button>
          <button class="btn btn--link" data-action="copy-url" data-path="${escapeHtml(icon.path)}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
            Link
          </button>`;
    } else {
      // PNG icons: PNG download only, Copy PNG
      actionButtons = `
          <button class="btn btn--download-png" data-action="download-png-direct" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.filename)}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            PNG
          </button>
          <button class="btn btn--copy" data-action="copy-png" data-path="${escapeHtml(icon.path)}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            Copy
          </button>
          <button class="btn btn--link" data-action="copy-url" data-path="${escapeHtml(icon.path)}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
            Link
          </button>`;
    }

    // Truncate description for tooltip
    const shortDesc = description.length > 120 ? description.substring(0, 120) + '...' : description;

    return `
      <article class="icon-card" data-id="${escapeHtml(icon.id)}" data-format="${format}" title="${escapeHtml(shortDesc)}">
        <div class="icon-preview" data-action="open-detail" data-icon-id="${escapeHtml(icon.id)}">
          <img src="${window.BASE_URL || ''}/${escapeHtml(icon.path)}" alt="${escapeHtml(icon.name)}" loading="lazy" class="icon-image">
          <div class="icon-overlay">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <span>View Details</span>
          </div>
        </div>
        <div class="icon-info">
          <h3 class="icon-name">${escapeHtml(icon.name)}</h3>
          <span class="icon-category">${escapeHtml(icon.category)} &bull; ${escapeHtml(formatSetName(icon.set))}</span>
        </div>
        <div class="icon-actions">${actionButtons}
        </div>
      </article>
    `;
  }

  // Handle icon action buttons
  function handleIconAction(e) {
    const button = e.target.closest('[data-action]');
    if (!button) return;

    const action = button.dataset.action;
    const path = button.dataset.path;
    const name = button.dataset.name;

    switch (action) {
      case 'download-svg':
        downloadIcon(path, name, 'svg');
        break;
      case 'download-png':
        downloadIconAsPng(path, name);
        break;
      case 'download-png-direct':
        downloadPngDirect(path, name);
        break;
      case 'copy-svg':
        copySvgToClipboard(path, button);
        break;
      case 'copy-png':
        copyPngToClipboard(path, button);
        break;
      case 'copy-url':
        copyIconUrl(path, button);
        break;
      case 'copy-embed':
        copyEmbedCode(path, name, button);
        break;
      case 'open-detail':
        const iconId = button.dataset.iconId;
        openIconDetail(iconId);
        break;
    }
  }

  // Download icon as SVG
  function downloadIcon(path, filename, format = 'svg') {
    const fullUrl = `${window.location.origin}${window.BASE_URL || ''}/${path}`;

    fetch(fullUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'icon.svg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('SVG downloaded!', 'success');
      })
      .catch(() => {
        // Fallback: open in new tab
        window.open(fullUrl, '_blank');
      });
  }

  // Download icon as PNG
  async function downloadIconAsPng(path, name, size = 256) {
    const fullUrl = `${window.location.origin}${window.BASE_URL || ''}/${path}`;

    try {
      // Fetch SVG content
      const response = await fetch(fullUrl);
      const svgText = await response.text();

      // Create a blob URL for the SVG
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      // Create image element
      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Fill with transparent background
        ctx.clearRect(0, 0, size, size);

        // Draw SVG to canvas (centered and scaled)
        const scale = Math.min(size / img.width, size / img.height) * 0.9;
        const x = (size - img.width * scale) / 2;
        const y = (size - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        // Convert to PNG and download
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${name || 'icon'}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          URL.revokeObjectURL(svgUrl);
          showToast('PNG downloaded!', 'success');
        }, 'image/png');
      };

      img.onerror = () => {
        URL.revokeObjectURL(svgUrl);
        showToast('Failed to convert to PNG', 'error');
      };

      img.src = svgUrl;

    } catch (error) {
      console.error('PNG download error:', error);
      showToast('Failed to download PNG', 'error');
    }
  }

  // Convert SVG to PNG blob via canvas
  function svgToPngBlob(svgText, scale = 4) {
    return new Promise((resolve, reject) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const svgEl = svgDoc.documentElement;

      // Get dimensions from viewBox or width/height
      let width = parseFloat(svgEl.getAttribute('width')) || 128;
      let height = parseFloat(svgEl.getAttribute('height')) || 128;
      const viewBox = svgEl.getAttribute('viewBox');
      if (viewBox) {
        const parts = viewBox.split(/[\s,]+/).map(Number);
        if (parts.length === 4) {
          width = parts[2];
          height = parts[3];
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');

      const img = new Image();
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        canvas.toBlob(blob => {
          if (blob) resolve(blob);
          else reject(new Error('Canvas toBlob failed'));
        }, 'image/png');
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load SVG as image'));
      };
      img.src = url;
    });
  }

  // Copy SVG as PNG image to clipboard (pasteable in PowerPoint as image)
  async function copySvgToClipboard(path, element) {
    const fullUrl = `${window.location.origin}${window.BASE_URL || ''}/${path}`;

    try {
      const response = await fetch(fullUrl);
      const svgText = await response.text();

      // Convert SVG to PNG and copy as image (works in PowerPoint)
      // Note: browser clipboard API cannot write SVG as vector format,
      // so pasting in PPT creates an image. For editable shapes, use Download SVG
      // and insert via Insert > Pictures in PowerPoint.
      try {
        const pngBlob = await svgToPngBlob(svgText);
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': pngBlob
          })
        ]);
      } catch (clipErr) {
        console.warn('Image clipboard failed, falling back to text:', clipErr);
        await fallbackCopyText(svgText);
      }

      showCopyFeedback(element, 'SVG copied!');
      showToast('SVG copied as image!', 'success');

    } catch (error) {
      console.error('Copy error:', error);
      showToast('Failed to copy SVG', 'error');
    }
  }

  // Download PNG directly (for PNG source files)
  function downloadPngDirect(path, filename) {
    const fullUrl = `${window.location.origin}${window.BASE_URL || ''}/${path}`;

    fetch(fullUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'icon.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('PNG downloaded!', 'success');
      })
      .catch(() => {
        // Fallback: open in new tab
        window.open(fullUrl, '_blank');
      });
  }

  // Copy PNG to clipboard (for PNG source files)
  async function copyPngToClipboard(path, element) {
    const fullUrl = `${window.location.origin}${window.BASE_URL || ''}/${path}`;

    try {
      const response = await fetch(fullUrl);
      const originalBlob = await response.blob();

      // ClipboardItem only supports image/png, convert if needed
      let pngBlob = originalBlob;
      if (originalBlob.type !== 'image/png') {
        const img = new Image();
        const url = URL.createObjectURL(originalBlob);
        pngBlob = await new Promise((resolve, reject) => {
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            canvas.getContext('2d').drawImage(img, 0, 0);
            URL.revokeObjectURL(url);
            canvas.toBlob(b => b ? resolve(b) : reject(new Error('toBlob failed')), 'image/png');
          };
          img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Image load failed')); };
          img.src = url;
        });
      }

      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': pngBlob })
      ]);

      showCopyFeedback(element, 'PNG copied!');
      showToast('PNG copied to clipboard!', 'success');

    } catch (error) {
      console.error('Copy PNG error:', error);
      showToast('Failed to copy PNG', 'error');
    }
  }

  // Copy icon URL
  function copyIconUrl(path, button) {
    const baseUrl = window.location.origin + (window.BASE_URL || '');
    const fullUrl = `${baseUrl}/${path}`;

    copyToClipboard(fullUrl, button, 'URL copied!');
  }

  // Copy embed code
  function copyEmbedCode(path, name, button) {
    const baseUrl = window.location.origin + (window.BASE_URL || '');
    const fullUrl = `${baseUrl}/${path}`;
    const embedCode = `<img src="${fullUrl}" alt="${name}" width="24" height="24">`;

    copyToClipboard(embedCode, button, 'Embed code copied!');
  }

  // Fallback copy for non-secure contexts (http://)
  function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (e) {
      // ignore
    }
    document.body.removeChild(textarea);
  }

  // Copy to clipboard helper with fallback
  async function copyToClipboard(text, button, message) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopyText(text);
      }
      showCopyFeedback(button, message);
      showToast(message, 'success');
    } catch (err) {
      // Try fallback on any error
      try {
        fallbackCopyText(text);
        showCopyFeedback(button, message);
        showToast(message, 'success');
      } catch {
        showToast('Failed to copy', 'error');
      }
    }
  }

  // Show copy feedback on element
  function showCopyFeedback(element, message) {
    if (!element) return;

    // For icon preview, add copied class
    if (element.classList.contains('icon-preview')) {
      element.classList.add('copied');
      setTimeout(() => element.classList.remove('copied'), 1500);
      return;
    }

    // For buttons
    element.classList.add('btn--copied');
    const originalText = element.innerHTML;
    element.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"/></svg> Copied!`;

    setTimeout(() => {
      element.classList.remove('btn--copied');
      element.innerHTML = originalText;
    }, 2000);
  }

  // Show toast notification
  function showToast(message, type = 'info') {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Remove after delay
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Show loading state
  function showLoading() {
    if (iconsGrid) {
      iconsGrid.innerHTML = `
        <div class="loading">
          <div class="loading-spinner"></div>
          <span>Loading icons...</span>
        </div>
      `;
    }
  }

  // Show error state
  function showError(message) {
    if (iconsGrid) {
      iconsGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">⚠️</div>
          <h3 class="no-results-title">Error</h3>
          <p>${escapeHtml(message)}</p>
        </div>
      `;
    }
  }

  // Utility: Debounce
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Utility: Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Utility: Format set name
  function formatSetName(name) {
    return name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  // ==================== Icon Detail Modal ====================

  // Open icon detail modal
  function openIconDetail(iconId) {
    const icon = iconsData.icons.find(i => i.id === iconId);
    if (!icon) return;

    // Find similar icons based on shared tags
    const similarIcons = findSimilarIcons(icon, 6);

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'icon-modal';
    modal.innerHTML = createIconDetailHTML(icon, similarIcons);

    document.body.appendChild(modal);
    document.body.classList.add('modal-open');

    // Inline SVG for proper scaling (SVGs with hardcoded width/height don't scale via <img>)
    const previewEl = modal.querySelector('.modal-icon-preview');
    const iconPath = previewEl.dataset.iconPath;
    if (iconPath && iconPath.endsWith('.svg')) {
      fetch(`${window.BASE_URL || ''}/${iconPath}`)
        .then(r => r.text())
        .then(svgText => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(svgText, 'image/svg+xml');
          const svg = doc.querySelector('svg');
          if (svg) {
            svg.removeAttribute('width');
            svg.removeAttribute('height');
            svg.style.width = '100%';
            svg.style.height = '100%';
            previewEl.innerHTML = '';
            previewEl.appendChild(svg);
          }
        })
        .catch(() => {}); // keep <img> fallback on error
    }

    // Trigger animation
    requestAnimationFrame(() => modal.classList.add('show'));

    // Setup event listeners
    modal.querySelector('.modal-close').addEventListener('click', closeIconDetail);
    modal.querySelector('.modal-backdrop').addEventListener('click', closeIconDetail);

    // Handle similar icon clicks
    modal.querySelectorAll('.similar-icon').forEach(el => {
      el.addEventListener('click', (e) => {
        const newIconId = e.currentTarget.dataset.iconId;
        closeIconDetail();
        setTimeout(() => openIconDetail(newIconId), 100);
      });
    });

    // Handle action buttons in modal
    modal.addEventListener('click', (e) => {
      const button = e.target.closest('[data-action]');
      if (button) {
        const action = button.dataset.action;
        const path = button.dataset.path;
        const name = button.dataset.name;
        const iconId = button.dataset.iconId;

        switch (action) {
          case 'download-svg':
            downloadIcon(path, name, 'svg');
            break;
          case 'download-png':
            downloadIconAsPng(path, name);
            break;
          case 'download-png-direct':
            downloadPngDirect(path, name);
            break;
          case 'copy-svg':
            copySvgToClipboard(path, button);
            break;
          case 'copy-png':
            copyPngToClipboard(path, button);
            break;
          case 'copy-url':
            copyIconUrl(path, button);
            break;
          case 'copy-embed':
            copyEmbedCode(path, name, button);
            break;
          case 'edit-icon':
            toggleEditForm(modal, true);
            break;
          case 'cancel-edit':
            toggleEditForm(modal, false);
            break;
          case 'save-edit':
            saveIconEdit(modal, iconId);
            break;
        }
      }
    });

    // ESC key to close
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeIconDetail();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  }

  // Close icon detail modal
  function closeIconDetail() {
    const modal = document.querySelector('.icon-modal');
    if (modal) {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
      setTimeout(() => modal.remove(), 300);
    }
  }

  // Toggle edit form visibility
  function toggleEditForm(modal, show) {
    const editForm = modal.querySelector('.edit-form');
    const modalInfo = modal.querySelector('.modal-icon-info');
    const description = modalInfo.querySelector('.modal-icon-description');
    const tags = modalInfo.querySelector('.modal-icon-tags');
    const useCases = modalInfo.querySelector('.modal-use-cases');
    const actions = modalInfo.querySelector('.modal-actions');

    if (show) {
      // Hide view elements, show edit form
      if (description) description.style.display = 'none';
      if (tags) tags.style.display = 'none';
      if (useCases) useCases.style.display = 'none';
      if (actions) actions.style.display = 'none';
      editForm.style.display = 'block';
    } else {
      // Show view elements, hide edit form
      if (description) description.style.display = '';
      if (tags) tags.style.display = '';
      if (useCases) useCases.style.display = '';
      if (actions) actions.style.display = '';
      editForm.style.display = 'none';
    }
  }

  // Save icon edit via API
  async function saveIconEdit(modal, iconId) {
    const editForm = modal.querySelector('.edit-form');
    const descriptionInput = editForm.querySelector('#edit-description');
    const tagsInput = editForm.querySelector('#edit-tags');
    const useCasesInput = editForm.querySelector('#edit-use-cases');

    const description = descriptionInput.value.trim();
    const tags = tagsInput.value.split(',').map(t => t.trim()).filter(t => t);
    const useCases = useCasesInput.value.split('\n').map(uc => uc.trim()).filter(uc => uc);

    const saveButton = editForm.querySelector('[data-action="save-edit"]');
    const originalText = saveButton.innerHTML;
    saveButton.innerHTML = 'Saving...';
    saveButton.disabled = true;

    try {
      const response = await authFetch(`${window.API_URL || ''}/api/icons/${encodeURIComponent(iconId)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: description || null,
          tags: tags.length > 0 ? tags : null,
          use_cases: useCases.length > 0 ? useCases : null
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save changes');
      }

      const updatedIcon = await response.json();

      // Update local data
      const iconIndex = iconsData.icons.findIndex(i => i.id === iconId);
      if (iconIndex !== -1) {
        iconsData.icons[iconIndex].description = updatedIcon.description;
        iconsData.icons[iconIndex].tags = updatedIcon.tags;
        iconsData.icons[iconIndex].use_cases = updatedIcon.use_cases;
      }

      // Update the modal view
      const modalInfo = modal.querySelector('.modal-icon-info');
      const descEl = modalInfo.querySelector('.modal-icon-description');
      if (descEl) descEl.textContent = description || 'No description available';

      // Update tags
      const tagsEl = modalInfo.querySelector('.modal-icon-tags');
      if (tagsEl) {
        if (tags.length > 0) {
          tagsEl.innerHTML = tags.map(tag =>
            `<span class="detail-tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`
          ).join('');
          tagsEl.style.display = '';
        } else {
          tagsEl.innerHTML = '';
        }
      }

      // Update use cases
      const useCasesEl = modalInfo.querySelector('.modal-use-cases');
      if (useCasesEl) {
        if (useCases.length > 0) {
          useCasesEl.innerHTML = `<h4>Use Cases</h4><ul>${useCases.map(uc => `<li>${escapeHtml(uc)}</li>`).join('')}</ul>`;
          useCasesEl.style.display = '';
        } else {
          useCasesEl.innerHTML = '';
        }
      }

      showToast('Changes saved successfully!', 'success');
      toggleEditForm(modal, false);

    } catch (error) {
      console.error('Save error:', error);
      showToast('Failed to save changes', 'error');
    } finally {
      saveButton.innerHTML = originalText;
      saveButton.disabled = false;
    }
  }

  // Find similar icons based on shared tags
  function findSimilarIcons(icon, limit = 6) {
    const iconTags = new Set(icon.tags || []);
    if (iconTags.size === 0) return [];

    const scored = iconsData.icons
      .filter(i => i.id !== icon.id)
      .map(i => {
        const iTags = new Set(i.tags || []);
        let score = 0;
        iconTags.forEach(tag => {
          if (iTags.has(tag)) score++;
        });
        // Small bonus for same set (same icon collection)
        if (i.set === icon.set) score += 0.25;
        return { icon: i, score };
      })
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return scored.map(s => s.icon);
  }

  // Create icon detail HTML
  function createIconDetailHTML(icon, similarIcons) {
    const format = icon.format || 'svg';
    const isSvg = format === 'svg';

    const tags = (icon.tags || []).map(tag =>
      `<span class="detail-tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`
    ).join('');

    const useCases = (icon.use_cases || []).map(uc =>
      `<li>${escapeHtml(uc)}</li>`
    ).join('');

    // Build action buttons
    let actionButtons = '';
    if (isSvg) {
      actionButtons = `
        <button class="btn btn--primary" data-action="download-svg" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.filename)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download SVG
        </button>
        <button class="btn" data-action="download-png" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.name)}">
          Download PNG
        </button>
        <button class="btn" data-action="copy-svg" data-path="${escapeHtml(icon.path)}">
          Copy SVG
        </button>
        <button class="btn" data-action="copy-url" data-path="${escapeHtml(icon.path)}">
          Copy Link
        </button>
        <button class="btn" data-action="copy-embed" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.name)}">
          Copy Embed
        </button>`;
    } else {
      actionButtons = `
        <button class="btn btn--primary" data-action="download-png-direct" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.filename)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download PNG
        </button>
        <button class="btn" data-action="copy-png" data-path="${escapeHtml(icon.path)}">
          Copy PNG
        </button>
        <button class="btn" data-action="copy-url" data-path="${escapeHtml(icon.path)}">
          Copy Link
        </button>
        <button class="btn" data-action="copy-embed" data-path="${escapeHtml(icon.path)}" data-name="${escapeHtml(icon.name)}">
          Copy Embed
        </button>`;
    }

    // Edit button
    const editButton = `
      <button class="btn btn--edit" data-action="edit-icon" data-icon-id="${escapeHtml(icon.id)}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
        Edit
      </button>`;

    // Similar icons HTML
    let similarHTML = '';
    if (similarIcons.length > 0) {
      const similarItems = similarIcons.map(si => `
        <div class="similar-icon" data-icon-id="${escapeHtml(si.id)}" title="${escapeHtml(si.name)}">
          <img src="${window.BASE_URL || ''}/${escapeHtml(si.path)}" alt="${escapeHtml(si.name)}" loading="lazy">
          <span class="similar-icon-name">${escapeHtml(si.name)}</span>
        </div>
      `).join('');

      similarHTML = `
        <div class="similar-icons-section">
          <h4>Similar Icons</h4>
          <div class="similar-icons-grid">${similarItems}</div>
        </div>
      `;
    }

    return `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <button class="modal-close" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div class="modal-body">
          <div class="modal-icon-preview" data-icon-path="${escapeHtml(icon.path)}">
            <img src="${window.BASE_URL || ''}/${escapeHtml(icon.path)}" alt="${escapeHtml(icon.name)}">
          </div>

          <div class="modal-icon-info">
            <h2 class="modal-icon-name">${escapeHtml(icon.name)}</h2>
            <div class="modal-icon-meta">
              <span class="meta-item">${escapeHtml(formatSetName(icon.set))}</span>
              <span class="meta-separator">/</span>
              <span class="meta-item">${escapeHtml(icon.category)}</span>
            </div>

            <p class="modal-icon-description">${escapeHtml(icon.description || 'No description available')}</p>

            ${tags ? `<div class="modal-icon-tags">${tags}</div>` : ''}

            ${useCases ? `
              <div class="modal-use-cases">
                <h4>Use Cases</h4>
                <ul>${useCases}</ul>
              </div>
            ` : ''}

            <div class="modal-actions">
              ${actionButtons}
              ${editButton}
            </div>

            <!-- Edit Form (hidden by default) -->
            <div class="edit-form" style="display: none;" data-icon-id="${escapeHtml(icon.id)}">
              <h4>Edit Icon Metadata</h4>
              <div class="form-group">
                <label for="edit-description">Description</label>
                <textarea id="edit-description" rows="3" placeholder="Enter icon description...">${escapeHtml(icon.description || '')}</textarea>
              </div>
              <div class="form-group">
                <label for="edit-tags">Tags (comma-separated)</label>
                <input type="text" id="edit-tags" placeholder="tag1, tag2, tag3..." value="${escapeHtml((icon.tags || []).join(', '))}">
              </div>
              <div class="form-group">
                <label for="edit-use-cases">Use Cases (one per line)</label>
                <textarea id="edit-use-cases" rows="3" placeholder="Enter use cases...">${escapeHtml((icon.use_cases || []).join('\n'))}</textarea>
              </div>
              <div class="edit-form-actions">
                <button class="btn btn--primary" data-action="save-edit" data-icon-id="${escapeHtml(icon.id)}">Save Changes</button>
                <button class="btn" data-action="cancel-edit">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        ${similarHTML}
      </div>
    `;
  }

  // ==================== Upload Icon Modal ====================

  function initUpload() {
    const uploadBtn = document.getElementById('upload-btn');
    if (uploadBtn) {
      uploadBtn.addEventListener('click', openUploadModal);
    }
  }

  function openUploadModal() {
    const modal = document.createElement('div');
    modal.className = 'icon-modal upload-modal';
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content" style="max-width:500px;">
        <button class="modal-close" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div style="padding:32px;">
          <h2 style="margin:0 0 20px;font-size:1.25rem;font-weight:700;">Add Icon</h2>

          <div class="add-icon-tabs">
            <button class="add-icon-tab active" data-tab="upload">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
              </svg>
              Upload File
            </button>
            <button class="add-icon-tab" data-tab="link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
              </svg>
              From URL
            </button>
            <button class="add-icon-tab" data-tab="folder">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
              </svg>
              Upload Folder
            </button>
          </div>

          <form id="upload-form" class="edit-form" novalidate style="display:block;border:none;margin:0;padding:0;">
            <!-- Upload tab -->
            <div id="tab-upload" class="add-icon-tab-content">
              <div class="form-group">
                <label for="upload-file">Icon file (SVG or PNG)</label>
                <input type="file" id="upload-file" accept=".svg,.png"
                  style="padding:10px 12px;border:1px solid #e5e5f0;border-radius:6px;width:100%;font-size:0.875rem;background:#fff;">
              </div>
            </div>

            <!-- Link tab -->
            <div id="tab-link" class="add-icon-tab-content" style="display:none;">
              <div class="form-group">
                <label for="upload-url">Icon URL (SVG or PNG)</label>
                <input type="url" id="upload-url" placeholder="https://example.com/icon.svg">
              </div>
            </div>

            <!-- Folder tab -->
            <div id="tab-folder" class="add-icon-tab-content" style="display:none;">
              <div class="form-group">
                <label for="upload-folder">Select folder with icons (subfolders = categories)</label>
                <input type="file" id="upload-folder" multiple
                  style="padding:10px 12px;border:1px solid #e5e5f0;border-radius:6px;width:100%;font-size:0.875rem;background:#fff;">
              </div>
              <div id="folder-summary" style="display:none;margin-bottom:16px;padding:12px;background:#f8f8fc;border-radius:8px;font-size:0.85rem;">
              </div>
            </div>

            <!-- Shared fields for upload/link tabs -->
            <div id="single-upload-fields">
              <div class="form-group">
                <label for="upload-name">Name (optional, defaults to filename)</label>
                <input type="text" id="upload-name" placeholder="e.g. Cloud Database">
              </div>
              <div class="form-group">
                <label for="upload-category">Category</label>
                <input type="text" id="upload-category" placeholder="e.g. Data Analysis Charts" required>
              </div>
            </div>
            <div class="form-group">
              <label for="upload-set">Collection</label>
              <input type="text" id="upload-set" value="lingaro_set4" placeholder="e.g. lingaro_set4">
            </div>
            <div class="form-group">
              <label for="upload-api-key">API Key <span style="color:#64648c;font-weight:400;">(optional in dev mode)</span></label>
              <input type="text" id="upload-api-key" placeholder="Leave empty if API_KEY is not set on server">
            </div>
            <div id="upload-preview" style="display:none;text-align:center;margin-bottom:16px;">
              <img id="upload-preview-img" style="max-width:80px;max-height:80px;background:#f8f8fc;border-radius:6px;padding:8px;" alt="Preview">
            </div>
            <div id="upload-status" style="display:none;margin-bottom:16px;padding:10px 14px;border-radius:6px;font-size:0.875rem;"></div>
            <div class="edit-form-actions">
              <button type="submit" class="btn btn--primary" id="upload-submit">Add &amp; Annotate</button>
              <button type="button" class="btn" data-action="cancel-upload">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.classList.add('show'));

    // Set webkitdirectory programmatically (more reliable than HTML attribute)
    const folderEl = modal.querySelector('#upload-folder');
    folderEl.webkitdirectory = true;
    folderEl.directory = true; // Firefox compat

    // Tab switching
    let activeTab = 'upload';
    modal.querySelectorAll('.add-icon-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        activeTab = tab.dataset.tab;
        modal.querySelectorAll('.add-icon-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        modal.querySelector('#tab-upload').style.display = activeTab === 'upload' ? '' : 'none';
        modal.querySelector('#tab-link').style.display = activeTab === 'link' ? '' : 'none';
        modal.querySelector('#tab-folder').style.display = activeTab === 'folder' ? '' : 'none';
        // Hide name/category fields for folder tab (derived from folder structure)
        modal.querySelector('#single-upload-fields').style.display = activeTab === 'folder' ? 'none' : '';
        // Update category required attribute
        modal.querySelector('#upload-category').required = activeTab !== 'folder';
        // Update submit button text
        modal.querySelector('#upload-submit').textContent = activeTab === 'folder' ? 'Upload All' : 'Add & Annotate';
        // Update preview
        const preview = modal.querySelector('#upload-preview');
        preview.style.display = 'none';
        if (activeTab === 'link') {
          const url = modal.querySelector('#upload-url').value.trim();
          if (url) showLinkPreview(modal, url);
        }
      });
    });

    // File preview
    modal.querySelector('#upload-file').addEventListener('change', (e) => {
      const file = e.target.files[0];
      const preview = modal.querySelector('#upload-preview');
      const img = modal.querySelector('#upload-preview-img');
      if (file) {
        img.src = URL.createObjectURL(file);
        preview.style.display = 'block';
      } else {
        preview.style.display = 'none';
      }
    });

    // Folder input change — show summary
    modal.querySelector('#upload-folder').addEventListener('change', (e) => {
      const files = Array.from(e.target.files).filter(f => /\.(svg|png)$/i.test(f.name));
      const summary = modal.querySelector('#folder-summary');
      if (files.length === 0) {
        summary.style.display = 'none';
        return;
      }
      const parsed = parseFolderFiles(files);
      const catList = Object.entries(parsed)
        .map(([cat, items]) => `<strong>${cat}</strong>: ${items.length} icon${items.length !== 1 ? 's' : ''}`)
        .join('<br>');
      summary.innerHTML = `<div style="margin-bottom:8px;font-weight:600;">Found ${files.length} icons in ${Object.keys(parsed).length} categories:</div>${catList}`;
      summary.style.display = '';
    });

    // URL preview on blur
    modal.querySelector('#upload-url').addEventListener('blur', (e) => {
      const url = e.target.value.trim();
      if (url) showLinkPreview(modal, url);
    });

    // Close handlers
    modal.querySelector('.modal-close').addEventListener('click', () => closeUploadModal(modal));
    modal.querySelector('.modal-backdrop').addEventListener('click', () => closeUploadModal(modal));
    modal.querySelector('[data-action="cancel-upload"]').addEventListener('click', () => closeUploadModal(modal));

    // Submit — detect active tab
    modal.querySelector('#upload-form').addEventListener('submit', (e) => {
      e.preventDefault();
      if (activeTab === 'upload') {
        handleUploadSubmit(modal);
      } else if (activeTab === 'folder') {
        handleFolderUpload(modal);
      } else {
        handleLinkSubmit(modal);
      }
    });

    // ESC key
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeUploadModal(modal);
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  }

  function showLinkPreview(modal, url) {
    const preview = modal.querySelector('#upload-preview');
    const img = modal.querySelector('#upload-preview-img');
    if (/\.(svg|png)(\?.*)?$/i.test(url)) {
      img.src = url;
      preview.style.display = 'block';
    }
  }

  function closeUploadModal(modal) {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    setTimeout(() => modal.remove(), 300);
  }

  async function handleUploadSubmit(modal) {
    const fileInput = modal.querySelector('#upload-file');
    const nameInput = modal.querySelector('#upload-name');
    const categoryInput = modal.querySelector('#upload-category');
    const setInput = modal.querySelector('#upload-set');
    const apiKeyInput = modal.querySelector('#upload-api-key');
    const submitBtn = modal.querySelector('#upload-submit');
    const statusEl = modal.querySelector('#upload-status');

    const file = fileInput.files[0];
    if (!file) {
      showUploadStatus(statusEl, 'Please select a file', 'error');
      return;
    }

    const apiKey = apiKeyInput.value.trim();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Uploading...';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', categoryInput.value.trim());
    formData.append('set_name', setInput.value.trim() || 'lingaro_set4');
    if (nameInput.value.trim()) {
      formData.append('name', nameInput.value.trim());
    }

    const headers = {};
    if (apiKey) headers['X-API-Key'] = apiKey;

    try {
      const response = await authFetch(`${window.API_URL || ''}/api/icons`, {
        method: 'POST',
        headers,
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Upload failed');
      }

      showUploadStatus(statusEl, `Icon added! ID: ${data.id}. Annotation is running in the background.`, 'success');
      submitBtn.textContent = 'Done';
      showToast('Icon added successfully!', 'success');

      // Reload icons to show the new one
      await loadIconsData();
      applyFilters();

    } catch (error) {
      showUploadStatus(statusEl, error.message, 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Add & Annotate';
    }
  }

  async function handleLinkSubmit(modal) {
    const urlInput = modal.querySelector('#upload-url');
    const nameInput = modal.querySelector('#upload-name');
    const categoryInput = modal.querySelector('#upload-category');
    const setInput = modal.querySelector('#upload-set');
    const apiKeyInput = modal.querySelector('#upload-api-key');
    const submitBtn = modal.querySelector('#upload-submit');
    const statusEl = modal.querySelector('#upload-status');

    const url = urlInput.value.trim();
    if (!url) {
      showUploadStatus(statusEl, 'Please enter a URL', 'error');
      return;
    }

    const apiKey = apiKeyInput.value.trim();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Fetching & uploading...';

    try {
      // Fetch the file from the URL
      const fileResponse = await fetch(url);
      if (!fileResponse.ok) {
        throw new Error('Failed to fetch icon from URL');
      }

      const blob = await fileResponse.blob();
      const contentType = fileResponse.headers.get('content-type') || '';

      // Determine filename and extension
      let filename = url.split('/').pop().split('?')[0] || 'icon';
      if (!filename.match(/\.(svg|png)$/i)) {
        if (contentType.includes('svg')) {
          filename += '.svg';
        } else if (contentType.includes('png')) {
          filename += '.png';
        } else {
          throw new Error('URL must point to an SVG or PNG file');
        }
      }

      const file = new File([blob], filename, { type: blob.type || contentType });

      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', categoryInput.value.trim());
      formData.append('set_name', setInput.value.trim() || 'lingaro_set4');
      if (nameInput.value.trim()) {
        formData.append('name', nameInput.value.trim());
      }

      const headers = {};
      if (apiKey) headers['X-API-Key'] = apiKey;

      const response = await authFetch(`${window.API_URL || ''}/api/icons`, {
        method: 'POST',
        headers,
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Upload failed');
      }

      showUploadStatus(statusEl, `Icon added! ID: ${data.id}. Annotation is running in the background.`, 'success');
      submitBtn.textContent = 'Done';
      showToast('Icon added successfully!', 'success');

      // Reload icons to show the new one
      await loadIconsData();
      applyFilters();

    } catch (error) {
      showUploadStatus(statusEl, error.message, 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Add & Annotate';
    }
  }

  function showUploadStatus(el, message, type) {
    el.style.display = 'block';
    el.innerHTML = message;
    el.style.background = type === 'error' ? 'rgba(239,68,68,0.1)' : 'rgba(16,185,129,0.1)';
    el.style.color = type === 'error' ? '#dc2626' : '#059669';
  }

  /**
   * Parse folder files into { category: [{file, cleanName}] } structure.
   * Folder name = category, filename cleaned of numbers and special chars.
   */
  function parseFolderFiles(files) {
    const categories = {};
    for (const file of files) {
      // webkitRelativePath: "FolderName/SubFolder/file.svg"
      const parts = file.webkitRelativePath.split('/');
      // Use immediate parent folder as category, or root folder if no subfolder
      let category;
      if (parts.length >= 3) {
        // e.g. "MyIcons/DataCharts/icon.svg" → category = "DataCharts"
        category = parts[parts.length - 2];
      } else if (parts.length === 2) {
        // e.g. "MyIcons/icon.svg" → category from root folder name
        category = parts[0];
      } else {
        category = 'General';
      }
      // Clean icon name from filename: remove extension, replace separators with spaces
      const rawName = file.name.replace(/\.(svg|png)$/i, '');
      const cleanName = rawName
        .replace(/[_\-]+/g, ' ')      // replace _ and - with space
        .replace(/\s+/g, ' ')         // collapse whitespace
        .trim();
      const iconName = cleanName || rawName;

      if (!categories[category]) categories[category] = [];
      categories[category].push({ file, cleanName: iconName });
    }
    return categories;
  }

  /**
   * Handle bulk folder upload — upload all icons sequentially.
   */
  async function handleFolderUpload(modal) {
    const folderInput = modal.querySelector('#upload-folder');
    const setInput = modal.querySelector('#upload-set');
    const apiKeyInput = modal.querySelector('#upload-api-key');
    const submitBtn = modal.querySelector('#upload-submit');
    const statusEl = modal.querySelector('#upload-status');

    const rawFiles = Array.from(folderInput.files);
    const allFiles = rawFiles.filter(f => /\.(svg|png)$/i.test(f.name));
    if (allFiles.length === 0) {
      const msg = rawFiles.length === 0
        ? 'No folder selected — please choose a folder first'
        : `Found ${rawFiles.length} files but none are SVG or PNG`;
      showUploadStatus(statusEl, msg, 'error');
      return;
    }

    const parsed = parseFolderFiles(allFiles);
    const setName = setInput.value.trim() || 'lingaro_set4';
    const apiKey = apiKeyInput.value.trim();
    const headers = {};
    if (apiKey) headers['X-API-Key'] = apiKey;

    submitBtn.disabled = true;
    let uploaded = 0;
    let failed = 0;
    const total = allFiles.length;
    const errors = [];

    for (const [category, items] of Object.entries(parsed)) {
      for (const { file, cleanName } of items) {
        uploaded++;
        submitBtn.textContent = `Uploading ${uploaded}/${total}...`;
        showUploadStatus(statusEl,
          `Uploading <strong>${cleanName}</strong> to <strong>${category}</strong> (${uploaded}/${total})...`, 'success');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('category', category);
        formData.append('set_name', setName);
        formData.append('name', cleanName);

        try {
          const response = await authFetch(`${window.API_URL || ''}/api/icons`, {
            method: 'POST',
            headers,
            body: formData,
          });
          const data = await response.json();
          if (!response.ok) {
            failed++;
            errors.push(`${cleanName}: ${data.detail || 'failed'}`);
          }
        } catch (err) {
          failed++;
          errors.push(`${cleanName}: ${err.message}`);
        }
      }
    }

    // Final summary
    const successCount = total - failed;
    let msg = `Done! ${successCount}/${total} icons uploaded to collection <strong>${setName}</strong>.`;
    if (failed > 0) {
      msg += `<br>${failed} failed: ${errors.slice(0, 5).join(', ')}${errors.length > 5 ? '...' : ''}`;
    }
    showUploadStatus(statusEl, msg, failed > 0 ? 'error' : 'success');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Done';
    if (successCount > 0) {
      showToast(`${successCount} icons uploaded!`, 'success');
      await loadCollections();
      if (currentView === 'browse') {
        await loadIconsData();
        applyFilters();
      }
    }
  }

  // Initialize upload button after DOM ready
  document.addEventListener('DOMContentLoaded', initUpload);

  // ── Personal API Token management ─────────────────────────────────────────

  async function loadTokenInfo() {
    try {
      const resp = await authFetch('/api/tokens/me');
      if (resp.status === 404) {
        showTokenState('none');
      } else if (resp.ok) {
        const data = await resp.json();
        showTokenState(data.expired ? 'expired' : 'exists', data);
      }
    } catch (e) {
      console.warn('Could not load token info', e);
    }
  }

  function showTokenState(state, data) {
    document.getElementById('token-panel').style.display = 'inline-block';
    document.getElementById('token-none').style.display = state === 'none' ? 'inline-block' : 'none';
    document.getElementById('token-new').style.display = state === 'new' ? 'block' : 'none';
    document.getElementById('token-exists').style.display = state === 'exists' ? 'inline-block' : 'none';
    document.getElementById('token-expired').style.display = state === 'expired' ? 'inline-block' : 'none';

    if (state === 'exists' && data) {
      const expires = new Date(data.expires_at).toLocaleDateString();
      document.getElementById('token-meta').textContent =
        `Token "${data.name}" — expires ${expires}`;
    }
    if (state === 'expired' && data) {
      const expires = new Date(data.expires_at).toLocaleDateString();
      document.getElementById('token-expired-meta').textContent =
        `Token "${data.name}" — expired ${expires}`;
    }
  }

  async function generateToken() {
    const selected = document.querySelector('input[name="token-expires"]:checked');
    const days = selected ? parseInt(selected.value) : 90;
    const name = document.getElementById('token-name-input').value.trim() || 'My CLI token';
    try {
      const resp = await authFetch('/api/tokens/me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expires_days: days, name }),
      });
      if (!resp.ok) { alert('Failed to generate token'); return; }
      const data = await resp.json();
      document.getElementById('token-value').value = data.token;
      document.getElementById('token-expires-info').textContent =
        `Expires: ${new Date(data.expires_at).toLocaleDateString()}`;
      showTokenState('new');
    } catch (e) {
      alert('Error generating token: ' + e.message);
    }
  }

  function copyToken() {
    const input = document.getElementById('token-value');
    input.select();
    navigator.clipboard.writeText(input.value).catch(() => {
      document.execCommand('copy');
    });
  }

  function dismissToken() {
    loadTokenInfo();
  }

  async function revokeToken() {
    if (!confirm('Revoke your API token? CLI access will stop working immediately.')) return;
    try {
      const resp = await authFetch('/api/tokens/me', { method: 'DELETE' });
      if (resp.ok || resp.status === 404) {
        showTokenState('none');
      } else {
        alert('Failed to revoke token');
      }
    } catch (e) {
      alert('Error revoking token: ' + e.message);
    }
  }

  // Expose token functions globally for inline onclick handlers
  window.generateToken = generateToken;
  window.copyToken = copyToken;
  window.dismissToken = dismissToken;
  window.revokeToken = revokeToken;
  window.showTokenState = showTokenState;

})();
