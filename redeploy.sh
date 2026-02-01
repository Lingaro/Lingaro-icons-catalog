#!/bin/bash
# Redeploy Lingaro Icons Catalog to Azure Web App
# Run this in Azure Cloud Shell

set -e

# Configuration
APP="lingaro-icons-catalog"
RG="rg-Lingaro-Databricks-Demo-01"

echo "=== Lingaro Icons Catalog - Redeploy ==="

# Pull latest changes
echo ">> Pulling latest from GitHub..."
git pull origin master

# Create deployment package
echo ">> Creating deployment package..."
rm -f deploy.zip
zip -r deploy.zip api assets icons _site requirements.txt run_api.py

# Deploy
echo ">> Deploying to Azure..."
az webapp deploy --name $APP --resource-group $RG --src-path deploy.zip --type zip --clean true

# Restart
echo ">> Restarting app..."
az webapp restart --name $APP --resource-group $RG

# Done
echo ""
echo "=== Deployment complete! ==="
echo "Site: https://$APP.azurewebsites.net"
echo "API:  https://$APP.azurewebsites.net/api/docs"
