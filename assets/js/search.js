/**
 * Lingaro Icons Catalog - Search and UI functionality
 * Features: Collections filter, PNG download, Copy to clipboard
 */

(function() {
  'use strict';

  // State
  let iconsData = null;
  let filteredIcons = [];
  let currentQuery = '';
  let currentCategory = '';
  let selectedCollections = new Set(); // Multi-select collections

  // DOM elements (initialized after DOM ready)
  let searchInput, clearButton, categoryFilter, collectionsFilter, resultsCount, iconsGrid;

  // Initialize
  document.addEventListener('DOMContentLoaded', init);

  async function init() {
    try {
      // Get DOM elements after DOM is ready
      searchInput = document.getElementById('search-input');
      clearButton = document.getElementById('clear-search');
      categoryFilter = document.getElementById('category-filter');
      collectionsFilter = document.getElementById('collections-filter');
      resultsCount = document.getElementById('results-count');
      iconsGrid = document.querySelector('.icons-grid');

      await loadIconsData();

      if (!iconsData) {
        console.error('Failed to load icons data');
        return;
      }

      setupEventListeners();
      populateFilters();
      renderIcons(iconsData.icons);
    } catch (error) {
      console.error('Init error:', error);
    }
  }

  // Load icons data from JSON
  async function loadIconsData() {
    try {
      showLoading();
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
        if (collectionsFilter) collectionsFilter.innerHTML = '<span style="color:red">Error: No data</span>';
        return;
      }

      // Populate collections (sets) as checkboxes
      const filterEl = document.getElementById('collections-filter');
      const sets = iconsData.sets || [];

      if (filterEl && sets.length > 0) {
        let html = '';
        for (const set of sets) {
          const count = iconsData.icons.filter(i => i.set === set).length;
          const displayName = formatSetName(set);
          html += `<label class="collection-checkbox">
            <input type="checkbox" value="${set}" checked>
            <span class="collection-name">${displayName}</span>
            <span class="collection-count">(${count})</span>
          </label>`;
          selectedCollections.add(set);
        }
        filterEl.innerHTML = html;
        filterEl.addEventListener('change', handleCollectionChange);
      } else {
        if (filterEl) filterEl.innerHTML = '<span style="color:red">No collections found</span>';
      }

      // Populate category dropdown
      if (categoryFilter && iconsData.categories) {
        iconsData.categories.forEach(cat => {
          const option = document.createElement('option');
          option.value = cat;
          option.textContent = cat;
          categoryFilter.appendChild(option);
        });
      }
    } catch (error) {
      console.error('populateFilters error:', error);
      const filterEl = document.getElementById('collections-filter');
      if (filterEl) filterEl.innerHTML = '<span style="color:red">Error: ' + error.message + '</span>';
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

  // Copy SVG content to clipboard
  async function copySvgToClipboard(path, element) {
    const fullUrl = `${window.location.origin}${window.BASE_URL || ''}/${path}`;

    try {
      const response = await fetch(fullUrl);
      const svgText = await response.text();

      // Try to copy as both text and image
      try {
        // Modern clipboard API with SVG as image
        const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/plain': new Blob([svgText], { type: 'text/plain' }),
          })
        ]);
      } catch {
        // Fallback to text-only copy
        await navigator.clipboard.writeText(svgText);
      }

      // Visual feedback
      showCopyFeedback(element, 'SVG copied!');
      showToast('SVG copied to clipboard!', 'success');

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
      const blob = await response.blob();

      // Copy image to clipboard
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);

      // Visual feedback
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

  // Copy to clipboard helper
  async function copyToClipboard(text, button, message) {
    try {
      await navigator.clipboard.writeText(text);
      showCopyFeedback(button, message);
      showToast(message, 'success');
    } catch (err) {
      showToast('Failed to copy', 'error');
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
      const response = await fetch(`/api/icons/${encodeURIComponent(iconId)}`, {
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
          <div class="modal-icon-preview">
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

})();
