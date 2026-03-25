# Test Plan — cli-anything-lingaro-catalog

## Unit Tests (`test_core.py`)

### Config
- [x] Default values load correctly
- [x] Environment variables override file config
- [x] Save and reload from disk
- [x] Set individual config values
- [x] Reject unknown config keys

### Client
- [x] Initialization with/without API key
- [x] Trailing slash normalization
- [x] Headers with/without API key
- [x] APIError construction
- [x] GET request success
- [x] GET with query parameters
- [x] POST with JSON body

### Output
- [x] Truncate short strings (no-op)
- [x] Truncate long strings with ellipsis
- [x] Print table with data
- [x] Print empty table
- [x] Print icon detail
- [x] Parse JSON string tags in icon detail

### CLI Subprocess
- [x] `--version` prints version
- [x] `--help` shows all command groups
- [x] `config show` works
- [x] `--json config show` returns valid JSON

## E2E Tests (`test_full_e2e.py`)

Requires running API server. Skipped automatically if server unavailable.

### Health & Stats
- [x] Health check returns status
- [x] Stats returns dict

### Search
- [x] Text search for "cloud"
- [x] Search with limit
- [x] Empty query rejected (422)

### Icons
- [x] List icons
- [x] List icons by category
- [x] Get single icon by ID
- [x] Download icon file
- [x] 404 on nonexistent icon

### Categories
- [x] List categories (non-empty)
- [x] List tags
- [x] List collections (non-empty)

### Workflows
- [x] Search → get detail
- [x] Browse collections → filter by set
- [x] Download → verify file on disk

## Test Results

```
============================= 39 passed in 50.29s =============================

Unit tests (test_core.py):      23 passed
E2E tests (test_full_e2e.py):   16 passed
Total:                          39 passed, 0 failed
Pass rate:                      100%

Platform: Windows 11, Python 3.12.11
Date: 2026-03-15
```
