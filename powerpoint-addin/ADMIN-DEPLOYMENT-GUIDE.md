# Lingaro Icons — PowerPoint Add-in Deployment Guide

## What is this?

A PowerPoint add-in that lets Lingaro employees search, browse, and insert icons from the company's Icons Catalog directly inside PowerPoint. No downloads, no browser switching — just click and insert.

**Add-in manifest URL:**
```
https://lingaro-icons-catalog.azurewebsites.net/addin/manifest.xml
```

**Live demo (browser preview):**
```
https://lingaro-icons-catalog.azurewebsites.net/addin/taskpane.html
```

---

## Deployment via Microsoft 365 Admin Center

### Step 1: Open Integrated Apps

1. Go to [Microsoft 365 Admin Center](https://admin.microsoft.com)
2. Navigate to **Settings** → **Integrated Apps**
3. Click **Upload custom apps**

### Step 2: Upload the Manifest

1. Select **Office Add-in** as the app type
2. Choose **Provide link to manifest file**
3. Paste the manifest URL:
   ```
   https://lingaro-icons-catalog.azurewebsites.net/addin/manifest.xml
   ```
4. Click **Validate** — it should pass validation
5. Click **Next**

### Step 3: Assign Users

1. Choose who gets the add-in:
   - **Entire organization** — all users get it automatically
   - **Specific users/groups** — select the relevant teams
2. Click **Next**

### Step 4: Review & Deploy

1. Review the permissions summary:
   - **App name:** Lingaro Icons
   - **Host:** PowerPoint
   - **Permissions:** ReadWriteDocument (insert images only)
2. Click **Accept permissions** → **Deploy**
3. Deployment may take up to 24 hours to propagate to all users

---

## What Users Will See

After deployment, users open PowerPoint and:

1. A **"Lingaro Icons"** group appears in the **Home** ribbon tab
2. Clicking **"Icons Catalog"** opens a side panel with:
   - Search bar (type to find icons by name or description)
   - Collection filters (Lingaro, Azure, Fabric, GCP, Databricks, etc.)
   - Category filters (Data Analysis, Buildings, Personas, etc.)
   - Icon grid (click to preview, then click "Insert" to place on slide)
3. Icons are inserted at 1-inch default size, centered on the current slide

---

## Security & Permissions

| Item | Detail |
|------|--------|
| **Permission level** | ReadWriteDocument — can insert images into presentations |
| **Data access** | None — no access to user data, emails, or files |
| **Network calls** | HTTPS only, to `lingaro-icons-catalog.azurewebsites.net` |
| **Hosting** | Existing Lingaro Azure App Service (`rg-Lingaro-Databricks-Demo-01`) |
| **Authentication** | None required — internal tool |
| **AppSource** | Not published — internal deployment only |
| **Platforms** | PowerPoint Desktop (Windows/Mac), PowerPoint for Web |

---

## Troubleshooting

**Add-in not appearing after deployment:**
- Allow up to 24 hours for propagation
- User may need to restart PowerPoint
- Check: Insert → Get Add-ins → Admin Managed — it should appear there

**Add-in shows blank panel:**
- Verify `https://lingaro-icons-catalog.azurewebsites.net` is accessible from the corporate network
- Check if any web content filtering is blocking the domain

**Manifest validation fails:**
- Ensure the URL is exactly: `https://lingaro-icons-catalog.azurewebsites.net/addin/manifest.xml`
- Try downloading the manifest and uploading the file directly

---

## Alternative: Manual Sideload (for testing)

If you want to test before org-wide deployment:

1. Download the manifest: `https://lingaro-icons-catalog.azurewebsites.net/addin/manifest.xml`
2. In PowerPoint: **Insert** → **Get Add-ins** → **Upload My Add-in**
3. Browse to the downloaded `manifest.xml`
4. The add-in loads immediately (for the current user only)

---

## Contact

For questions about the add-in, contact the development team or visit:
https://lingaro-icons-catalog.azurewebsites.net
