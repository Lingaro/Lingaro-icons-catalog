# Deployment Guide

This document describes how to deploy the Lingaro Icons Catalog to various platforms.

## Deploy to Azure Web App

### Quick Deploy (Azure Cloud Shell)

1. **Clone the repo in Azure Cloud Shell:**
   ```bash
   git clone https://github.com/Lingaro/Lingaro-icons-catalog.git
   cd Lingaro-icons-catalog
   ```

2. **Set variables:**
   ```bash
   RG="rg-Lingaro-Databricks-Demo-01"
   PLAN="dc-web-apps"
   APP="lingaro-icons-catalog"
   OPENAI_KEY="your-openai-key"
   ```

3. **Create and configure Web App:**
   ```bash
   # Create web app (skip if exists)
   az webapp create --name $APP --resource-group $RG --plan $PLAN --runtime "PYTHON:3.11"

   # Configure settings
   az webapp config appsettings set --name $APP --resource-group $RG \
     --settings OPENAI_API_KEY=$OPENAI_KEY SCM_DO_BUILD_DURING_DEPLOYMENT=true

   az webapp config set --name $APP --resource-group $RG \
     --startup-file "unicorn -w 2 -k uvicorn.workers.UvicornWorker api.main:app --bind 0.0.0.0:8000"
   ```

4. **Deploy:**
   ```bash
   # Create deployment package
   zip -r deploy.zip api assets icons requirements.txt app.py

   # Deploy
   az webapp deploy --name $APP --resource-group $RG --src-path deploy.zip --type zip
   ```

5. **Access your API:**
   - API: `https://lingaro-icons-catalog.azurewebsites.net`
   - Docs: `https://lingaro-icons-catalog.azurewebsites.net/docs`

### Using PowerShell Script (Local)

```powershell
# Create ZIP and show Cloud Shell commands
.\prepare-deploy.ps1

# Or full deployment (requires Azure CLI)
.\deploy-azure.ps1 -OpenAIKey "your-key"
```

### Update Azure Deployment After Git Pull

```bash
# In Azure Cloud Shell after pulling updates
cd Lingaro-icons-catalog
git pull origin master

# Redeploy
zip -r deploy.zip api assets icons requirements.txt app.py
az webapp deploy --name lingaro-icons-catalog --resource-group rg-Lingaro-Databricks-Demo-01 --src-path deploy.zip --type zip
```

---

## Deploy to GitHub Pages

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

---

## Deploy to Other Platforms

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
