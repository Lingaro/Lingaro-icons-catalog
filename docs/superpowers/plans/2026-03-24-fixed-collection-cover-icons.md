# Fixed Collection Cover Icons Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace random collection cover icon selection with fixed, branded icons for all 9 collections.

**Architecture:** Add import utility to insert 4 missing icon files into database, rename 1 existing icon, update COVER_OVERRIDES dictionary with all 9 fixed mappings, and enhance validation logic in SearchService.

**Tech Stack:** Python 3.12, SQLite3, FastAPI, existing icon catalog infrastructure

**Related Spec:** `docs/superpowers/specs/2026-03-24-fixed-collection-cover-icons-design.md`

---

## File Structure

### Files to Create
- `scripts/import_icon.py` - Standalone utility for importing single icon files into database

### Files to Modify
- `api/services/search.py` - Update COVER_OVERRIDES dictionary, enhance _find_cover_icon() validation
- `data/catalog.db` - Add 4 new icon records, update 1 existing record

### Files to Reference
- `scripts/scan_icons.py` - Existing scanner for understanding icon ID generation logic
- Spec document for complete requirements and icon mappings

---

## Task 1: Create Icon Import Utility

**Files:**
- Create: `scripts/import_icon.py`

- [ ] **Step 1: Create import utility with icon ID generation**

Create `scripts/import_icon.py`:

```python
"""
Utility to import individual icon files into the catalog database.
Used for adding collection cover icons and other one-off imports.
"""

import os
import sqlite3
import sys
from pathlib import Path


def generate_icon_id(set_name: str, category: str, filename: str) -> str:
    """
    Generate icon ID following the convention: {set_name}_{category}_{name}.

    Args:
        set_name: Collection name (e.g., "Apache", "Azure")
        category: Category within collection
        filename: Icon filename with extension

    Returns:
        Generated icon ID (normalized)
    """
    # Remove extension and normalize
    name = Path(filename).stem.replace(" ", "_").replace("-", "_").lower()
    set_slug = set_name.replace(" ", "_").replace("&", "_&_").replace("-", "_").lower()
    cat_slug = category.replace(" ", "_").replace("&", "_&_").replace("-", "_").lower()

    return f"{set_slug}_{cat_slug}_{name}"


def import_single_icon(
    file_path: str,
    set_name: str,
    category: str,
    description: str = "",
    tags: list[str] = None,
    use_cases: list[str] = None,
    db_path: str = "data/catalog.db"
) -> str:
    """
    Import a single icon file into the database.

    Args:
        file_path: Path to icon file (relative or absolute)
        set_name: Collection name
        category: Category within collection
        description: Icon description
        tags: List of tags
        use_cases: List of use cases
        db_path: Path to database file

    Returns:
        Generated icon ID

    Raises:
        FileNotFoundError: If icon file doesn't exist
        ValueError: If icon ID already exists
    """
    import json

    # Validate file exists
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Icon file not found: {file_path}")

    # Generate icon ID
    filename = os.path.basename(file_path)
    icon_id = generate_icon_id(set_name, category, filename)
    name = Path(filename).stem

    # Connect to database
    conn = sqlite3.connect(db_path, check_same_thread=False)
    conn.row_factory = sqlite3.Row

    try:
        # Check if icon already exists
        existing = conn.execute("SELECT id FROM icons WHERE id = ?", (icon_id,)).fetchone()
        if existing:
            raise ValueError(f"Icon ID already exists: {icon_id}")

        # Prepare data
        tags_json = json.dumps(tags if tags else [])
        use_cases_json = json.dumps(use_cases if use_cases else [])
        path = file_path.replace("\\", "/")  # Normalize path separators

        # Insert into database
        conn.execute("""
            INSERT INTO icons (
                id, name, filename, path, category, set_name,
                description, tags, use_cases, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'ready')
        """, (
            icon_id, name, filename, path, category, set_name,
            description, tags_json, use_cases_json
        ))

        conn.commit()
        print(f"✓ Imported: {icon_id}")
        print(f"  File: {file_path}")
        print(f"  Set: {set_name} / {category}")
        return icon_id

    finally:
        conn.close()


def main():
    """CLI interface for importing icons."""
    if len(sys.argv) < 4:
        print("Usage: python import_icon.py <file_path> <set_name> <category> [description]")
        print("Example: python import_icon.py 'icons/Apache/apache_logo.png' 'Apache' 'Apache' 'Apache logo'")
        sys.exit(1)

    file_path = sys.argv[1]
    set_name = sys.argv[2]
    category = sys.argv[3]
    description = sys.argv[4] if len(sys.argv) > 4 else ""

    try:
        icon_id = import_single_icon(file_path, set_name, category, description)
        print(f"\n✓ Success! Icon ID: {icon_id}")
    except Exception as e:
        print(f"\n✗ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Test import utility with dry run**

Test that the script can be imported and icon ID generation works:

```bash
python -c "from scripts.import_icon import generate_icon_id; print(generate_icon_id('Apache', 'Apache', 'apache_logo.png'))"
```

Expected output: `apache_apache_apache_logo`

- [ ] **Step 3: Commit import utility**

```bash
git add scripts/import_icon.py
git commit -m "feat: add icon import utility

Add standalone utility for importing individual icon files into the
catalog database. Generates icon IDs following existing convention.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 2: Import Missing Icons

**Files:**
- Run: `scripts/import_icon.py`
- Modify: `data/catalog.db`

- [ ] **Step 1: Import DevOps & Infra icon**

```bash
python scripts/import_icon.py "icons/DevOps & Infra/devops.png" "DevOps & Infra" "DevOps & Infra" "DevOps & Infrastructure logo"
```

Expected: `✓ Imported: devops_&_infra_devops_&_infra_devops`

- [ ] **Step 2: Import Apache icon**

```bash
python scripts/import_icon.py "icons/Apache/apache_logo.png" "Apache" "Apache" "Apache logo"
```

Expected: `✓ Imported: apache_apache_apache_logo`

- [ ] **Step 3: Import Azure icon**

```bash
python scripts/import_icon.py "icons/Azure/Azure Icon.png" "Azure" "other" "Microsoft Azure logo"
```

Expected: `✓ Imported: azure_other_azure_icon`

- [ ] **Step 4: Import Lingaro logo**

```bash
python scripts/import_icon.py "icons/lingaro_set4/branding/lingaro-logo_small_transparent.png" "lingaro_set4" "branding" "Lingaro Group logo"
```

Expected: `✓ Imported: lingaro_set4_branding_lingaro_logo_small_transparent`

- [ ] **Step 5: Verify all imports in database**

```bash
python -c "
import sqlite3
conn = sqlite3.connect('data/catalog.db')
cur = conn.cursor()
icon_ids = [
    'devops_&_infra_devops_&_infra_devops',
    'apache_apache_apache_logo',
    'azure_other_azure_icon',
    'lingaro_set4_branding_lingaro_logo_small_transparent'
]
for icon_id in icon_ids:
    cur.execute('SELECT id, name, status FROM icons WHERE id = ?', (icon_id,))
    row = cur.fetchone()
    if row:
        print(f'✓ {icon_id}: {row[1]} ({row[2]})')
    else:
        print(f'✗ {icon_id}: NOT FOUND')
"
```

Expected: All 4 icons show `✓` with status `ready`

- [ ] **Step 6: Commit database changes**

```bash
git add data/catalog.db
git commit -m "data: import 4 collection cover icons

Import missing cover icons for collections:
- DevOps & Infra: devops.png
- Apache: apache_logo.png
- Azure: Azure Icon.png
- lingaro_set4: lingaro-logo_small_transparent.png

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Rename Google Cloud Icon

**Files:**
- Modify: `data/catalog.db`

- [ ] **Step 1: Verify existing Google Cloud icon**

```bash
python -c "
import sqlite3
conn = sqlite3.connect('data/catalog.db')
cur = conn.cursor()
cur.execute('SELECT id, name, filename FROM icons WHERE id = ?', ('google_cloud_google_cloud_icons8_google_cloud_48',))
row = cur.fetchone()
if row:
    print(f'Found: {row[0]}')
    print(f'  Name: {row[1]}')
    print(f'  File: {row[2]}')
else:
    print('NOT FOUND - check icon ID')
"
```

Expected: Shows existing icon details

- [ ] **Step 2: Rename icon ID and name**

```bash
python -c "
import sqlite3
conn = sqlite3.connect('data/catalog.db')
conn.execute('''
    UPDATE icons
    SET
        name = 'google-cloud-logo',
        id = 'google_cloud_google_cloud_google_cloud_logo'
    WHERE id = 'google_cloud_google_cloud_icons8_google_cloud_48'
''')
conn.commit()
print('✓ Renamed Google Cloud icon')
"
```

- [ ] **Step 3: Verify rename**

```bash
python -c "
import sqlite3
conn = sqlite3.connect('data/catalog.db')
cur = conn.cursor()
cur.execute('SELECT id, name FROM icons WHERE id = ?', ('google_cloud_google_cloud_google_cloud_logo',))
row = cur.fetchone()
if row:
    print(f'✓ Verified: {row[0]}')
    print(f'  Name: {row[1]}')
else:
    print('✗ NOT FOUND - rename may have failed')
"
```

Expected: Shows new icon ID and name

- [ ] **Step 4: Commit database changes**

```bash
git add data/catalog.db
git commit -m "data: rename Google Cloud icon to google-cloud-logo

Rename icon8-google-cloud-48 to google-cloud-logo for consistency
with collection cover icon naming.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Update COVER_OVERRIDES Dictionary

**Files:**
- Modify: `api/services/search.py:193-202`

- [ ] **Step 1: Read current COVER_OVERRIDES**

Open `api/services/search.py` and locate the `COVER_OVERRIDES` dictionary (around line 193-202).

Current content:
```python
COVER_OVERRIDES = {
    "Microsoft Fabric": "Microsoft Fabric_color_fabric_color",
    "Azure": "Azure_other_azure_a",
    "Google Cloud": "GCP_google_cloud_logo",
    "Apache": "apache_apachespark",
    "Data & Analytics": "data_analytics_cover",
    "ML & AI": "ml_ai_openai",
    "DevOps & Infra": "devops_infra_github",
}
```

- [ ] **Step 2: Replace with complete COVER_OVERRIDES**

Replace the `COVER_OVERRIDES` dictionary in `api/services/search.py` with:

```python
# Explicit cover icon overrides per collection (icon ID)
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

- [ ] **Step 3: Commit COVER_OVERRIDES update**

```bash
git add api/services/search.py
git commit -m "feat: update COVER_OVERRIDES with all 9 collections

Replace old COVER_OVERRIDES with complete mappings for all 9
collections using fixed, branded icons.

Collections updated:
- databricks, Apache, Data & Analytics, ML & AI
- DevOps & Infra, Microsoft Fabric, Azure, Google Cloud, lingaro_set4

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 5: Add Validation to _find_cover_icon()

**Files:**
- Modify: `api/services/search.py:204-224`

- [ ] **Step 1: Locate _find_cover_icon() method**

Open `api/services/search.py` and find the `_find_cover_icon()` method (around line 204-224).

- [ ] **Step 2: Add validation logic at the start**

Replace the `_find_cover_icon()` method with this enhanced version:

```python
def _find_cover_icon(self, set_name):
    """Find best cover icon for a collection: explicit override, name match, or first icon."""
    import logging

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
            logging.warning(
                f"Cover override for '{set_name}' points to non-existent icon: {override_id}"
            )

    # Fallback: try name match
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

- [ ] **Step 3: Commit validation enhancement**

```bash
git add api/services/search.py
git commit -m "feat: add validation to _find_cover_icon

Add logging for missing cover override icons. If an override points to
a non-existent icon, log a warning and fall back to name-match logic.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 6: End-to-End Verification

**Files:**
- Test: API and database

- [ ] **Step 1: Verify all 9 cover icons exist in database**

```bash
python -c "
import sqlite3
conn = sqlite3.connect('data/catalog.db')
cur = conn.cursor()

cover_overrides = {
    'databricks': 'databricks_databricks_11_databricks',
    'Apache': 'apache_apache_apache_logo',
    'Data & Analytics': 'lingaro_set4_data_analysis_charts_chart_2',
    'ML & AI': 'lingaro_set4_data_analysis_charts_ai_2',
    'DevOps & Infra': 'devops_&_infra_devops_&_infra_devops',
    'Microsoft Fabric': 'microsoft_fabric_services_fabric_20_color',
    'Azure': 'azure_other_azure_icon',
    'Google Cloud': 'google_cloud_google_cloud_google_cloud_logo',
    'lingaro_set4': 'lingaro_set4_branding_lingaro_logo_small_transparent',
}

print('Verifying all cover icons exist...')
all_good = True
for collection, icon_id in cover_overrides.items():
    cur.execute('SELECT id, name, status FROM icons WHERE id = ?', (icon_id,))
    row = cur.fetchone()
    if row and row[2] == 'ready':
        print(f'✓ {collection:20} -> {icon_id}')
    else:
        print(f'✗ {collection:20} -> {icon_id} (NOT FOUND)')
        all_good = False

if all_good:
    print('\n✓ All 9 cover icons verified!')
else:
    print('\n✗ Some cover icons missing!')
"
```

Expected: All 9 collections show `✓`

- [ ] **Step 2: Test collections API endpoint**

Start the API server if not running:
```bash
python app.py --port 8000
```

Test the collections endpoint:
```bash
curl http://localhost:8000/api/collections | python -m json.tool | grep -A2 "name\|cover_icon_id"
```

Expected: Each collection has a `cover_icon_id` field with the correct icon ID

- [ ] **Step 3: Visual verification in UI**

Open http://localhost:8000 in a browser and verify:
- [ ] All 9 collection cards display correctly
- [ ] Each collection shows its branded icon (not random)
- [ ] No broken image icons
- [ ] Icons are visually appropriate for each collection

- [ ] **Step 4: Check for warnings in logs**

Check API logs for any warnings about missing cover icons:
```bash
grep "Cover override" <api-log-file>
```

Expected: No warnings (all overrides point to existing icons)

- [ ] **Step 5: Document verification results**

Create a simple verification report:
```bash
echo "# Collection Cover Icons Verification Report
Date: $(date)

## Database Verification
$(python -c 'import sqlite3; conn = sqlite3.connect(\"data/catalog.db\"); cur = conn.cursor(); cur.execute(\"SELECT COUNT(*) FROM icons WHERE id IN (SELECT DISTINCT cover_icon_id FROM (SELECT id as cover_icon_id FROM icons WHERE set_name IN (SELECT DISTINCT set_name FROM icons)))\"); print(f\"Icons in DB: {cur.fetchone()[0]}\")')

## Collections API
All collections return cover_icon_id: [✓/✗]

## UI Visual Check
All collection cards display branded icons: [✓/✗]

## Result
Implementation: [SUCCESS/FAILED]
" > verification-report.txt

cat verification-report.txt
```

- [ ] **Step 6: Final commit**

```bash
git add verification-report.txt
git commit -m "docs: add collection cover icons verification report

Document verification of fixed collection cover icons implementation.
All 9 collections now display consistent, branded icons.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Rollback Instructions

If issues are discovered after implementation:

1. **Revert all commits:**
   ```bash
   git log --oneline -n 6  # Find commit hashes
   git revert <commit-hash>..HEAD
   ```

2. **Delete imported icons from database:**
   ```bash
   python -c "
   import sqlite3
   conn = sqlite3.connect('data/catalog.db')
   conn.execute('''
       DELETE FROM icons WHERE id IN (
           'devops_&_infra_devops_&_infra_devops',
           'apache_apache_apache_logo',
           'azure_other_azure_icon',
           'lingaro_set4_branding_lingaro_logo_small_transparent'
       )
   ''')
   conn.commit()
   print('Deleted imported icons')
   "
   ```

3. **Restore Google Cloud icon:**
   ```bash
   python -c "
   import sqlite3
   conn = sqlite3.connect('data/catalog.db')
   conn.execute('''
       UPDATE icons
       SET
           name = 'icons8-google-cloud-48',
           id = 'google_cloud_google_cloud_icons8_google_cloud_48'
       WHERE id = 'google_cloud_google_cloud_google_cloud_logo'
   ''')
   conn.commit()
   print('Restored Google Cloud icon')
   "
   ```

4. **Restart API server:**
   ```bash
   pkill -f "python app.py"
   python app.py --port 8000
   ```

---

## Success Criteria

- [ ] All 9 collections have fixed cover icons (no random selection)
- [ ] Database contains all required icon records with status='ready'
- [ ] COVER_OVERRIDES dictionary has 9 entries
- [ ] _find_cover_icon() includes validation/logging
- [ ] Collections API returns correct cover_icon_id for each collection
- [ ] UI displays branded icons for all collection cards
- [ ] No warnings in API logs about missing icons
- [ ] All changes committed with descriptive messages

**Estimated Time:** 20-30 minutes
