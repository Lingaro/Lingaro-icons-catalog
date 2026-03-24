# Fixed Collection Cover Icons - Design Specification

**Date:** 2026-03-24
**Status:** Approved
**Author:** Claude (with user input)

## Overview

### Problem Statement

Currently, collection cover icons are selected dynamically using fallback logic:
1. Check hardcoded `COVER_OVERRIDES` dictionary
2. Find icon whose name matches collection name
3. Use first icon alphabetically

This results in inconsistent, non-branded icons for most collections. Users want fixed, recognizable cover icons that represent each collection's brand.

### Goals

- Replace random icon selection with fixed, branded cover icons for all 9 collections
- Ensure each collection displays a consistent, recognizable icon
- Maintain backwards compatibility with existing API and UI

### Non-Goals

- Database schema changes
- New API endpoints
- UI/frontend modifications
- Collection management features

---

## User Requirements

User specified exact icon files for each collection:

| Collection | Icon File |
|------------|-----------|
| databricks | `icons/databricks/11_Databricks.svg` |
| Apache | `icons/Apache/apache_logo.png` |
| Data & Analytics | `icons/lingaro_set4/Data Analysis Charts/Chart 2.svg` |
| ML & AI | `icons/lingaro_set4/Data Analysis Charts/AI 2.svg` |
| DevOps & Infra | `icons/DevOps & Infra/devops.png` |
| Microsoft Fabric | `icons/Microsoft Fabric/services/fabric_20_color.svg` |
| Azure | `icons/Azure/Azure Icon.png` |
| Google Cloud | Existing `icons8-google-cloud-48.svg` (rename to `google-cloud-logo`) |
| lingaro_set4 | `icons/lingaro_set4/branding/lingaro-logo_small_transparent.png` |

---

## Architecture

### Components Affected

1. **`api/services/search.py`**
   - Update `COVER_OVERRIDES` dictionary with all 9 mappings
   - Add validation in `_find_cover_icon()` to log warnings for missing icons
   - Preserve existing fallback logic

2. **`scripts/scan_icons.py`** (or new import script)
   - Add utility function to import individual icon files
   - Handle PNG and SVG files
   - Generate icon IDs following existing convention

3. **Database (`data/catalog.db`)**
   - Add 4 new icon records to `icons` table
   - Update 1 existing record (rename Google Cloud icon)
   - No schema changes

### Data Flow

```
Icon Import Flow:
1. Read icon file from filesystem
2. Generate icon ID: {set_name}_{category}_{filename_without_ext}
3. Insert into icons table with status='ready'
4. Validate successful insertion

Cover Icon Lookup Flow (unchanged):
1. API request to /api/collections
2. SearchService.get_collections()
3. For each collection: _find_cover_icon(set_name)
4. Check COVER_OVERRIDES first
5. Return icon_id
```

---

## Implementation Details

### 1. Icon ID Convention

Format: `{set_name}_{category}_{name}`

**New Icon IDs:**
- `devops_&_infra_devops_&_infra_devops` (devops.png)
- `apache_apache_apache_logo` (apache_logo.png)
- `azure_other_azure_icon` (Azure Icon.png)
- `lingaro_set4_branding_lingaro_logo_small_transparent` (lingaro logo)

**Existing Icon IDs:**
- `databricks_databricks_11_databricks` (11_Databricks.svg) ✓ already exists
- `lingaro_set4_data_analysis_charts_chart_2` (Chart 2.svg) ✓ already exists
- `lingaro_set4_data_analysis_charts_ai_2` (AI 2.svg) ✓ already exists
- `microsoft_fabric_services_fabric_20_color` (fabric_20_color.svg) ✓ already exists

**Renamed Icon ID:**
- `google_cloud_google_cloud_google_cloud_logo` (renamed from icons8-google-cloud-48)

### 2. Updated COVER_OVERRIDES Dictionary

```python
# api/services/search.py

COVER_OVERRIDES = {
    "databricks": "databricks_databricks_11_databricks",
    "Apache": "apache_apache_apache_logo",
    "Data & Analytics": "lingaro_set4_data_analysis_charts_chart_2",
    "ML & AI": "lingaro_set4_data_analysis_charts_ai_2",
    "DevOps & Infra": "devops_&_infra_devops_&_infra_devops",
    "Microsoft Fabric": "microsoft_fabric_services_fabric_20_color",
    "Azure": "azure_other_azure_icon",
    "Google Cloud": "google_cloud_google_cloud_google_cloud_logo",
    "lingaro_set4": "lingaro_set4_branding_lingaro_logo_small_transparent",
}
```

### 3. Icon Import Process

**Function signature:**
```python
def import_single_icon(
    file_path: str,
    set_name: str,
    category: str,
    description: str = "",
    tags: list[str] = None
) -> str:
    """
    Import a single icon file into the database.

    Args:
        file_path: Absolute or relative path to icon file
        set_name: Collection name (e.g., "Apache", "Azure")
        category: Category within collection (e.g., "Apache", "other")
        description: Optional icon description
        tags: Optional list of tags

    Returns:
        Generated icon ID

    Raises:
        FileNotFoundError: If icon file doesn't exist
        ValueError: If icon ID already exists (duplicate)
    """
```

**Import commands:**
```python
import_single_icon(
    "icons/DevOps & Infra/devops.png",
    "DevOps & Infra",
    "DevOps & Infra",
    "DevOps & Infrastructure logo"
)

import_single_icon(
    "icons/Apache/apache_logo.png",
    "Apache",
    "Apache",
    "Apache logo"
)

import_single_icon(
    "icons/Azure/Azure Icon.png",
    "Azure",
    "other",
    "Microsoft Azure logo"
)

import_single_icon(
    "icons/lingaro_set4/branding/lingaro-logo_small_transparent.png",
    "lingaro_set4",
    "branding",
    "Lingaro Group logo"
)
```

### 4. Google Cloud Icon Rename

**SQL Update:**
```sql
UPDATE icons
SET
    name = 'google-cloud-logo',
    id = 'google_cloud_google_cloud_google_cloud_logo'
WHERE id = 'google_cloud_google_cloud_icons8_google_cloud_48';
```

### 5. Validation Logic Enhancement

```python
def _find_cover_icon(self, set_name):
    """Find best cover icon for a collection: explicit override, name match, or first icon."""

    # Check explicit overrides first
    if set_name in self.COVER_OVERRIDES:
        override_id = self.COVER_OVERRIDES[set_name]
        row = self.conn.execute(
            "SELECT id FROM icons WHERE id = ? AND status = 'ready'",
            (override_id,)
        ).fetchone()
        if row:
            return row[0]
        else:
            # Log warning but continue to fallback logic
            import logging
            logging.warning(
                f"Cover override for '{set_name}' points to non-existent icon: {override_id}"
            )

    # Fallback: name match logic (existing code)
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

---

## Error Handling

### File Import Errors

**Scenario:** Icon file doesn't exist or can't be read
- **Handling:** Raise `FileNotFoundError` with clear message
- **User Impact:** Import script fails with helpful error

**Scenario:** Icon file is corrupted or invalid format
- **Handling:** Log warning, skip file, continue with other imports
- **User Impact:** Partial import, report lists failed files

### Database Errors

**Scenario:** Icon ID already exists (duplicate)
- **Handling:** Check before insert, skip with warning
- **User Impact:** No duplicate entries, idempotent operation

**Scenario:** Cover override points to non-existent icon
- **Handling:** Log warning, fall back to name-match logic
- **User Impact:** Collection still gets a cover icon (fallback behavior)

### Rename Operation

**Scenario:** Google Cloud icon doesn't exist in DB
- **Handling:** Log error, skip rename, keep old ID in COVER_OVERRIDES
- **User Impact:** Uses old icon ID (still works)

### Backwards Compatibility

**Preserves existing behavior:**
- Collections not in COVER_OVERRIDES still use fallback logic
- API endpoints unchanged (same response format)
- Existing icon IDs still work
- Frontend requires no changes

---

## Testing & Verification

### Unit Tests (Optional)

```python
def test_cover_overrides_exist():
    """Verify all COVER_OVERRIDES point to existing icons."""
    from api.services.search import SearchService

    conn = sqlite3.connect('data/catalog.db')
    service = SearchService(conn)

    for set_name, icon_id in service.COVER_OVERRIDES.items():
        icon = service.get_icon_by_id(icon_id)
        assert icon is not None, f"Cover override for '{set_name}' points to missing icon: {icon_id}"
        assert icon['status'] == 'ready'
```

### Manual Verification Steps

1. **Check imported icons exist:**
   ```sql
   SELECT id, name, set_name, status FROM icons WHERE id IN (
     'devops_&_infra_devops_&_infra_devops',
     'apache_apache_apache_logo',
     'azure_other_azure_icon',
     'lingaro_set4_branding_lingaro_logo_small_transparent'
   );
   ```
   Expected: 4 rows with status='ready'

2. **Check Google Cloud rename:**
   ```sql
   SELECT id, name FROM icons
   WHERE id = 'google_cloud_google_cloud_google_cloud_logo';
   ```
   Expected: 1 row with name='google-cloud-logo'

3. **Test collections API:**
   ```bash
   curl http://localhost:8000/api/collections | jq '.[] | {name, cover_icon_id}'
   ```
   Expected: Each collection has correct `cover_icon_id`

4. **Visual verification in UI:**
   - Open http://localhost:8000
   - Check each collection card shows correct branded icon
   - Verify no broken images
   - Test in both light/dark mode (if applicable)

### Verification Checklist

- [ ] All 9 collections have fixed cover icons (not random)
- [ ] DevOps & Infra shows devops.png
- [ ] Apache shows apache_logo.png
- [ ] Azure shows Azure Icon.png
- [ ] lingaro_set4 shows lingaro logo
- [ ] Google Cloud shows google-cloud-logo (renamed)
- [ ] Databricks shows 11_Databricks
- [ ] Data & Analytics shows Chart 2
- [ ] ML & AI shows AI 2
- [ ] Microsoft Fabric shows fabric_20_color
- [ ] No console errors or warnings
- [ ] Icons display correctly on collection cards
- [ ] API response format unchanged

---

## Rollback Plan

If something goes wrong during deployment:

1. **Revert code changes:**
   ```bash
   git revert <commit-hash>
   ```

2. **Delete newly imported icons:**
   ```sql
   DELETE FROM icons WHERE id IN (
     'devops_&_infra_devops_&_infra_devops',
     'apache_apache_apache_logo',
     'azure_other_azure_icon',
     'lingaro_set4_branding_lingaro_logo_small_transparent'
   );
   ```

3. **Restore Google Cloud icon name:**
   ```sql
   UPDATE icons
   SET
       name = 'icons8-google-cloud-48',
       id = 'google_cloud_google_cloud_icons8_google_cloud_48'
   WHERE id = 'google_cloud_google_cloud_google_cloud_logo';
   ```

4. **Restart API server:**
   ```bash
   # Kill existing process
   pkill -f "python app.py"

   # Restart
   python app.py --port 8000
   ```

---

## Performance Impact

**Expected:** Negligible to none

- No additional database queries (same query, different results)
- No API changes or new endpoints
- Icon imports happen once at setup time (one-time operation)
- Cover icon lookup already checks COVER_OVERRIDES first (no performance change)
- No change to response payload size

---

## Security Considerations

- **File Path Validation:** Import script should validate file paths to prevent directory traversal
- **File Type Validation:** Verify file extensions match actual file types (PNG/SVG)
- **Database Injection:** Use parameterized queries (already done)
- **Access Control:** No changes to existing authentication/authorization

---

## Future Enhancements (Out of Scope)

- UI for managing collection cover icons
- Collections table with metadata
- Ability to upload new cover icons via API
- Cover icon versioning
- Multiple cover icon variants (light/dark mode)

---

## Appendix: Icon Status Summary

| Collection | Status | Icon File | Icon ID |
|------------|--------|-----------|---------|
| databricks | ✅ Ready | 11_Databricks.svg | databricks_databricks_11_databricks |
| Apache | 📥 Import | apache_logo.png | apache_apache_apache_logo |
| Data & Analytics | ✅ Ready | Chart 2.svg | lingaro_set4_data_analysis_charts_chart_2 |
| ML & AI | ✅ Ready | AI 2.svg | lingaro_set4_data_analysis_charts_ai_2 |
| DevOps & Infra | 📥 Import | devops.png | devops_&_infra_devops_&_infra_devops |
| Microsoft Fabric | ✅ Ready | fabric_20_color.svg | microsoft_fabric_services_fabric_20_color |
| Azure | 📥 Import | Azure Icon.png | azure_other_azure_icon |
| Google Cloud | 🔄 Rename | icons8-google-cloud-48.svg | google_cloud_google_cloud_google_cloud_logo |
| lingaro_set4 | 📥 Import | lingaro-logo_small_transparent.png | lingaro_set4_branding_lingaro_logo_small_transparent |

**Legend:**
- ✅ Ready: Icon already exists in database
- 📥 Import: Icon file exists, needs database import
- 🔄 Rename: Icon exists but needs ID/name change
