# PowerPoint Add-in Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an Office.js task pane add-in for PowerPoint that lets internal users search, browse, preview, and insert icons from the Lingaro Icons Catalog API.

**Architecture:** React + TypeScript task pane hosted on the same Azure App Service under `/addin`. Uses existing `@lingaro/icons-client` package (with a new `getCollections()` method) to call the catalog API. Icons inserted via canvas-based SVG→PNG conversion and Office.js `setSelectedDataAsync`.

**Tech Stack:** React 18, TypeScript, Office.js, Fluent UI React v9, Webpack, @lingaro/icons-client

**Spec:** `docs/superpowers/specs/2026-03-14-powerpoint-addin-design.md`

---

## Chunk 1: Prerequisites & Project Scaffold

### Task 1: Add `getCollections()` to `@lingaro/icons-client`

**Files:**
- Modify: `packages/icons-client/src/types.ts`
- Modify: `packages/icons-client/src/client.ts`
- Modify: `packages/icons-client/src/index.ts`

- [ ] **Step 1: Add `Collection` type**

In `packages/icons-client/src/types.ts`, add after `ClientConfig`:

```typescript
export interface Collection {
  name: string;
  icon_count: number;
  categories: string[];
  cover_icon_id: string | null;
}
```

- [ ] **Step 2: Add `getCollections()` method to `IconsClient`**

In `packages/icons-client/src/client.ts`, add before the closing `}` of the `IconsClient` class (line 65), after the `getCategories()` method:

```typescript
async getCollections(): Promise<Collection[]> {
  const res = await fetch(`${this.baseUrl}/collections`, { headers: this.headers() });
  if (!res.ok) throw new Error(`Collections failed: ${res.status}`);
  return res.json();
}
```

Add `Collection` to the import from `./types` at line 1:

```typescript
import type { Icon, SearchResponse, SearchOptions, ClientConfig, Collection } from "./types";
```

- [ ] **Step 3: Export `Collection` type from index**

In `packages/icons-client/src/index.ts`, add `Collection` to the exports:

```typescript
export type { Icon, SearchResponse, SearchOptions, ClientConfig, Collection } from "./types";
```

- [ ] **Step 4: Build the client package**

Run: `cd packages/icons-client && pnpm install && pnpm build`
Expected: Clean build, `dist/` files updated with new `Collection` type and `getCollections` method.

- [ ] **Step 5: Commit**

```bash
git add packages/icons-client/src/types.ts packages/icons-client/src/client.ts packages/icons-client/src/index.ts
git commit -m "feat(icons-client): add getCollections() method and Collection type"
```

---

### Task 2: Scaffold PowerPoint add-in project

**Files:**
- Create: `powerpoint-addin/package.json`
- Create: `powerpoint-addin/tsconfig.json`
- Create: `powerpoint-addin/webpack.config.js`
- Create: `powerpoint-addin/.babelrc`
- Create: `powerpoint-addin/src/taskpane/index.tsx`
- Create: `powerpoint-addin/src/taskpane/index.html`

- [ ] **Step 1: Create `package.json`**

Create `powerpoint-addin/package.json`:

```json
{
  "name": "lingaro-icons-powerpoint-addin",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development",
    "start": "webpack serve --mode development --open"
  },
  "dependencies": {
    "@fluentui/react-components": "^9.54.0",
    "@lingaro/icons-client": "file:../packages/icons-client",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@babel/core": "^7.24.0",
    "@babel/preset-env": "^7.24.0",
    "@babel/preset-react": "^7.24.0",
    "@babel/preset-typescript": "^7.24.0",
    "@types/office-js": "^1.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "babel-loader": "^9.1.0",
    "copy-webpack-plugin": "^12.0.0",
    "css-loader": "^7.1.0",
    "html-webpack-plugin": "^5.6.0",
    "style-loader": "^4.0.0",
    "typescript": "^5.5.0",
    "webpack": "^5.91.0",
    "webpack-cli": "^5.1.0",
    "webpack-dev-server": "^5.0.0"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

Create `powerpoint-addin/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

- [ ] **Step 3: Create `.babelrc`**

Create `powerpoint-addin/.babelrc`:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

- [ ] **Step 4: Create `webpack.config.js`**

Create `powerpoint-addin/webpack.config.js`:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    taskpane: "./src/taskpane/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/taskpane/index.html",
      filename: "taskpane.html",
      chunks: ["taskpane"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "manifest.xml", to: "manifest.xml" },
        { from: "assets", to: "assets", noErrorOnMissing: true },
      ],
    }),
  ],
  devServer: {
    port: 3000,
    https: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
};
```

- [ ] **Step 5: Create `index.html`**

Create `powerpoint-addin/src/taskpane/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lingaro Icons</title>
  <script src="https://appsforoffice.microsoft.com/lib/1/hosted/office.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

- [ ] **Step 6: Create entry point `index.tsx`**

Create `powerpoint-addin/src/taskpane/index.tsx`:

```tsx
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { App } from "./App";

Office.onReady(() => {
  const root = createRoot(document.getElementById("root")!);
  root.render(
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  );
});
```

- [ ] **Step 7: Create placeholder `App.tsx`**

Create `powerpoint-addin/src/taskpane/App.tsx`:

```tsx
export function App() {
  return <div style={{ padding: 12 }}>Lingaro Icons — loading...</div>;
}
```

- [ ] **Step 8: Install dependencies and verify build**

Run:
```bash
cd powerpoint-addin && pnpm install && pnpm build
```

Expected: Clean build, `dist/` contains `taskpane.html` and `taskpane.js`.

- [ ] **Step 9: Commit**

```bash
git add powerpoint-addin/package.json powerpoint-addin/tsconfig.json powerpoint-addin/webpack.config.js powerpoint-addin/.babelrc powerpoint-addin/src/
git commit -m "feat(addin): scaffold PowerPoint add-in project with webpack + react"
```

---

### Task 3: Create XML manifest

**Files:**
- Create: `powerpoint-addin/manifest.xml`

- [ ] **Step 1: Create manifest**

Create `powerpoint-addin/manifest.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<OfficeApp
  xmlns="http://schemas.microsoft.com/office/appforoffice/1.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:type="TaskPaneApp">
  <Id>a1b2c3d4-e5f6-7890-abcd-ef1234567890</Id>
  <Version>1.0.0</Version>
  <ProviderName>Lingaro</ProviderName>
  <DefaultLocale>en-US</DefaultLocale>
  <DisplayName DefaultValue="Lingaro Icons"/>
  <Description DefaultValue="Browse and insert icons from the Lingaro Icons Catalog"/>
  <SupportUrl DefaultValue="https://lingaro-icons-catalog.azurewebsites.net"/>
  <AppDomains>
    <AppDomain>https://lingaro-icons-catalog.azurewebsites.net</AppDomain>
  </AppDomains>
  <Hosts>
    <Host Name="Presentation"/>
  </Hosts>
  <DefaultSettings>
    <SourceLocation DefaultValue="https://lingaro-icons-catalog.azurewebsites.net/addin/taskpane.html"/>
  </DefaultSettings>
  <Permissions>ReadWriteDocument</Permissions>
  <VersionOverrides xmlns="http://schemas.microsoft.com/office/taskpaneappversionoverrides" xsi:type="VersionOverridesV1_0">
    <Hosts>
      <Host xsi:type="Presentation">
        <DesktopFormFactor>
          <ExtensionPoint xsi:type="PrimaryCommandSurface">
            <OfficeTab id="TabHome">
              <Group id="LingaroIconsGroup">
                <Label resid="GroupLabel"/>
                <Control xsi:type="Button" id="LingaroIconsButton">
                  <Label resid="ButtonLabel"/>
                  <Supertip>
                    <Title resid="ButtonLabel"/>
                    <Description resid="ButtonTooltip"/>
                  </Supertip>
                  <Icon>
                    <bt:Image size="16" resid="Icon16"/>
                    <bt:Image size="32" resid="Icon32"/>
                    <bt:Image size="64" resid="Icon64"/>
                    <bt:Image size="80" resid="Icon80"/>
                  </Icon>
                  <Action xsi:type="ShowTaskpane">
                    <TaskpaneId>LingaroIconsPane</TaskpaneId>
                    <SourceLocation resid="TaskpaneUrl"/>
                  </Action>
                </Control>
              </Group>
            </OfficeTab>
          </ExtensionPoint>
        </DesktopFormFactor>
      </Host>
    </Hosts>
    <Resources>
      <bt:Urls>
        <bt:Url id="TaskpaneUrl" DefaultValue="https://lingaro-icons-catalog.azurewebsites.net/addin/taskpane.html"/>
      </bt:Urls>
      <bt:ShortStrings>
        <bt:String id="GroupLabel" DefaultValue="Lingaro Icons"/>
        <bt:String id="ButtonLabel" DefaultValue="Icons Catalog"/>
        <bt:String id="ButtonTooltip" DefaultValue="Browse and insert icons from the Lingaro catalog"/>
      </bt:ShortStrings>
      <bt:Images>
        <bt:Image id="Icon16" DefaultValue="https://lingaro-icons-catalog.azurewebsites.net/addin/assets/icon-16.png"/>
        <bt:Image id="Icon32" DefaultValue="https://lingaro-icons-catalog.azurewebsites.net/addin/assets/icon-32.png"/>
        <bt:Image id="Icon64" DefaultValue="https://lingaro-icons-catalog.azurewebsites.net/addin/assets/icon-64.png"/>
        <bt:Image id="Icon80" DefaultValue="https://lingaro-icons-catalog.azurewebsites.net/addin/assets/icon-80.png"/>
      </bt:Images>
    </Resources>
  </VersionOverrides>
</OfficeApp>
```

- [ ] **Step 2: Create placeholder icon assets**

Run:
```bash
mkdir -p powerpoint-addin/assets
```

Generate simple purple square PNGs for the ribbon icons (16, 32, 64, 80px). Use a canvas-based script or download from the catalog. For now, create placeholder files:

```bash
# Generate simple purple placeholder icons using Python
python -c "
from PIL import Image
for size in [16, 32, 64, 80]:
    img = Image.new('RGBA', (size, size), (120, 60, 190, 255))
    img.save(f'powerpoint-addin/assets/icon-{size}.png')
print('Icons created')
"
```

If `pillow` is not installed, install it: `uv pip install Pillow`

- [ ] **Step 3: Verify build includes manifest and assets**

Run: `cd powerpoint-addin && pnpm build && ls dist/`

Expected: `dist/` contains `taskpane.html`, `taskpane.js`, `manifest.xml`, `assets/icon-*.png`

- [ ] **Step 4: Commit**

```bash
git add powerpoint-addin/manifest.xml powerpoint-addin/assets/
git commit -m "feat(addin): add Office XML manifest and ribbon icon assets"
```

---

## Chunk 2: Hooks & Data Layer

### Task 4: Implement `useCollections` hook

**Files:**
- Create: `powerpoint-addin/src/taskpane/hooks/useCollections.ts`

- [ ] **Step 1: Create the hook**

Create `powerpoint-addin/src/taskpane/hooks/useCollections.ts`:

```typescript
import { useState, useEffect, useRef } from "react";
import { IconsClient } from "@lingaro/icons-client";
import type { Collection } from "@lingaro/icons-client";

interface CollectionsState {
  collections: Collection[];
  categories: { name: string; count: number }[];
  loading: boolean;
  error: Error | null;
}

export function useCollections(client: IconsClient): CollectionsState {
  const [state, setState] = useState<CollectionsState>({
    collections: [],
    categories: [],
    loading: true,
    error: null,
  });
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    Promise.all([client.getCollections(), client.getCategories()])
      .then(([collections, categories]) => {
        setState({ collections, categories, loading: false, error: null });
      })
      .catch((error) => {
        setState({ collections: [], categories: [], loading: false, error });
      });
  }, [client]);

  return state;
}
```

- [ ] **Step 2: Commit**

```bash
git add powerpoint-addin/src/taskpane/hooks/useCollections.ts
git commit -m "feat(addin): add useCollections hook"
```

---

### Task 5: Implement `useSearch` hook

**Files:**
- Create: `powerpoint-addin/src/taskpane/hooks/useSearch.ts`

- [ ] **Step 1: Create the hook**

Create `powerpoint-addin/src/taskpane/hooks/useSearch.ts`:

```typescript
import { useState, useEffect, useRef } from "react";
import { IconsClient } from "@lingaro/icons-client";
import type { Icon } from "@lingaro/icons-client";

interface SearchState {
  icons: Icon[];
  loading: boolean;
  error: Error | null;
  total: number;
}

interface SearchParams {
  query: string;
  collection: string | null;
  category: string | null;
}

export function useSearch(client: IconsClient, params: SearchParams): SearchState {
  const [state, setState] = useState<SearchState>({
    icons: [],
    loading: true,
    error: null,
    total: 0,
  });
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        if (params.query.trim()) {
          const res = await client.search(params.query, {
            set: params.collection ?? undefined,
            category: params.category ?? undefined,
            limit: 100,
            semantic: false,
          });
          setState({ icons: res.icons, loading: false, error: null, total: res.total });
        } else {
          const icons = await client.listIcons({
            set: params.collection ?? undefined,
            category: params.category ?? undefined,
            limit: 100,
          });
          setState({ icons, loading: false, error: null, total: icons.length });
        }
      } catch (error) {
        setState({ icons: [], loading: false, error: error as Error, total: 0 });
      }
    }, params.query.trim() ? 300 : 0);

    return () => clearTimeout(debounceRef.current);
  }, [client, params.query, params.collection, params.category]);

  return state;
}
```

- [ ] **Step 2: Commit**

```bash
git add powerpoint-addin/src/taskpane/hooks/useSearch.ts
git commit -m "feat(addin): add useSearch hook with debounce"
```

---

### Task 6: Implement `useInsertIcon` hook

**Files:**
- Create: `powerpoint-addin/src/taskpane/hooks/useInsertIcon.ts`

- [ ] **Step 1: Create the hook**

This hook handles fetching the icon file, SVG→PNG canvas conversion, and Office.js insertion.

Create `powerpoint-addin/src/taskpane/hooks/useInsertIcon.ts`:

```typescript
import { useState, useCallback } from "react";
import { IconsClient } from "@lingaro/icons-client";
import type { Icon } from "@lingaro/icons-client";

interface InsertState {
  inserting: boolean;
  lastInserted: string | null;
  error: Error | null;
}

async function iconToBase64Png(blob: Blob, filename: string): Promise<string> {
  const isSvg = filename.endsWith(".svg");

  if (!isSvg) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // SVG → PNG via canvas at 4x resolution
  const svgText = await blob.text();
  const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = 4;
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth * scale;
      canvas.height = img.naturalHeight * scale;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);

      const dataUrl = canvas.toDataURL("image/png");
      resolve(dataUrl.split(",")[1]);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to render SVG to canvas"));
    };
    img.src = url;
  });
}

export function useInsertIcon(client: IconsClient) {
  const [state, setState] = useState<InsertState>({
    inserting: false,
    lastInserted: null,
    error: null,
  });

  const insert = useCallback(
    async (icon: Icon) => {
      setState({ inserting: true, lastInserted: null, error: null });

      try {
        const blob = await client.getIconBlob(icon.id);
        const base64 = await iconToBase64Png(blob, icon.filename);

        await new Promise<void>((resolve, reject) => {
          Office.context.document.setSelectedDataAsync(
            base64,
            {
              coercionType: Office.CoercionType.Image,
              imageWidth: 72,
            } as any,
            (result) => {
              if (result.status === Office.AsyncResultStatus.Succeeded) {
                resolve();
              } else {
                reject(new Error(result.error?.message ?? "Insert failed"));
              }
            }
          );
        });

        setState({ inserting: false, lastInserted: icon.name, error: null });
      } catch (error) {
        setState({ inserting: false, lastInserted: null, error: error as Error });
      }
    },
    [client]
  );

  return { ...state, insert };
}
```

- [ ] **Step 2: Verify build**

Run: `cd powerpoint-addin && pnpm build`
Expected: Clean build with no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add powerpoint-addin/src/taskpane/hooks/useInsertIcon.ts
git commit -m "feat(addin): add useInsertIcon hook with SVG→PNG canvas conversion"
```

---

## Chunk 3: UI Components

### Task 7: Create styles and Toast component

**Files:**
- Create: `powerpoint-addin/src/taskpane/styles/taskpane.css`
- Create: `powerpoint-addin/src/taskpane/components/Toast.tsx`

- [ ] **Step 1: Create `taskpane.css`**

Create `powerpoint-addin/src/taskpane/styles/taskpane.css`:

```css
:root {
  --lingaro-purple: #783cbe;
  --lingaro-purple-light: #f0e6ff;
  --lingaro-purple-bg: #f9f5ff;
  --lingaro-purple-border: #e8daf5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", -apple-system, sans-serif;
  font-size: 13px;
  color: #333;
  overflow-x: hidden;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background: var(--lingaro-purple);
  color: white;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.header-title {
  font-weight: 600;
  font-size: 14px;
}

.search-container {
  padding: 8px 12px;
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #f5f5f5;
  font-size: 12px;
  outline: none;
  transition: border-color 0.15s;
}

.search-input:focus {
  border-color: var(--lingaro-purple);
  background: white;
}

.pills-container {
  padding: 4px 12px 8px;
  flex-shrink: 0;
}

.pills-label {
  font-weight: 600;
  font-size: 10px;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.pill {
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 10px;
  cursor: pointer;
  border: none;
  background: #f5f5f5;
  color: #666;
  transition: all 0.15s;
}

.pill:hover {
  background: #e8e8e8;
}

.pill.active {
  background: var(--lingaro-purple-light);
  color: var(--lingaro-purple);
  font-weight: 500;
}

.icon-grid {
  flex: 1;
  overflow-y: auto;
  padding: 4px 12px 12px;
}

.icon-grid-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.icon-tile {
  aspect-ratio: 1;
  background: var(--lingaro-purple-bg);
  border: 1px solid var(--lingaro-purple-border);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.15s;
  padding: 6px;
}

.icon-tile:hover {
  border-color: var(--lingaro-purple);
  box-shadow: 0 0 0 1px var(--lingaro-purple);
}

.icon-tile.selected {
  border-color: var(--lingaro-purple);
  box-shadow: 0 0 0 2px rgba(120, 60, 190, 0.2);
}

.icon-tile img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.icon-tile .hover-badge {
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: var(--lingaro-purple);
  color: white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.icon-tile:hover .hover-badge {
  display: flex;
}

.preview-bar {
  flex-shrink: 0;
  margin: 0 12px 12px;
  background: var(--lingaro-purple-bg);
  border: 1px solid var(--lingaro-purple-border);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.preview-bar .preview-icon {
  background: white;
  border: 1px solid var(--lingaro-purple-border);
  border-radius: 6px;
  padding: 8px;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-bar .preview-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.preview-bar .preview-info {
  flex: 1;
  min-width: 0;
}

.preview-bar .preview-name {
  font-weight: 600;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.preview-bar .preview-meta {
  color: #888;
  font-size: 9px;
  margin-top: 1px;
}

.preview-bar .preview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 3px;
}

.preview-bar .preview-tag {
  background: var(--lingaro-purple-border);
  color: var(--lingaro-purple);
  padding: 1px 5px;
  border-radius: 6px;
  font-size: 8px;
}

.insert-button {
  background: var(--lingaro-purple);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}

.insert-button:hover {
  background: #6a34a8;
}

.insert-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.toast {
  position: fixed;
  bottom: 12px;
  left: 12px;
  right: 12px;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  animation: slideUp 0.2s ease-out;
  z-index: 100;
}

.toast.success {
  background: #e8f5e9;
  border: 1px solid #a5d6a7;
  color: #2e7d32;
}

.toast.error {
  background: #ffebee;
  border: 1px solid #ef9a9a;
  color: #c62828;
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.empty-state {
  text-align: center;
  padding: 32px 16px;
  color: #999;
}

.loading-skeleton {
  aspect-ratio: 1;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 6px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

- [ ] **Step 2: Create `Toast.tsx`**

Create `powerpoint-addin/src/taskpane/components/Toast.tsx`:

```tsx
import { useEffect, useState } from "react";

interface ToastProps {
  message: string | null;
  type: "success" | "error";
}

export function Toast({ message, type }: ToastProps) {
  const [visible, setVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);

  useEffect(() => {
    if (message) {
      setCurrentMessage(message);
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible || !currentMessage) return null;

  return (
    <div className={`toast ${type}`}>
      <span>{type === "success" ? "\u2705" : "\u274C"}</span>
      <span>{currentMessage}</span>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add powerpoint-addin/src/taskpane/styles/taskpane.css powerpoint-addin/src/taskpane/components/Toast.tsx
git commit -m "feat(addin): add taskpane styles and Toast component"
```

---

### Task 8: Create SearchBar component

**Files:**
- Create: `powerpoint-addin/src/taskpane/components/SearchBar.tsx`

- [ ] **Step 1: Create `SearchBar.tsx`**

Create `powerpoint-addin/src/taskpane/components/SearchBar.tsx`:

```tsx
import { useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        className="search-input"
        type="text"
        placeholder="Search icons..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add powerpoint-addin/src/taskpane/components/SearchBar.tsx
git commit -m "feat(addin): add SearchBar component"
```

---

### Task 9: Create FilterPills component

**Files:**
- Create: `powerpoint-addin/src/taskpane/components/FilterPills.tsx`

- [ ] **Step 1: Create `FilterPills.tsx`**

Create `powerpoint-addin/src/taskpane/components/FilterPills.tsx`:

```tsx
import type { Collection } from "@lingaro/icons-client";

interface FilterPillsProps {
  collections: Collection[];
  categories: { name: string; count: number }[];
  selectedCollection: string | null;
  selectedCategory: string | null;
  onCollectionChange: (name: string | null) => void;
  onCategoryChange: (name: string | null) => void;
}

export function FilterPills({
  collections,
  categories,
  selectedCollection,
  selectedCategory,
  onCollectionChange,
  onCategoryChange,
}: FilterPillsProps) {
  return (
    <>
      <div className="pills-container">
        <div className="pills-label">Collections</div>
        <div className="pills">
          <button
            className={`pill ${selectedCollection === null ? "active" : ""}`}
            onClick={() => onCollectionChange(null)}
          >
            All
          </button>
          {collections.map((c) => (
            <button
              key={c.name}
              className={`pill ${selectedCollection === c.name ? "active" : ""}`}
              onClick={() =>
                onCollectionChange(selectedCollection === c.name ? null : c.name)
              }
            >
              {c.name} ({c.icon_count})
            </button>
          ))}
        </div>
      </div>
      <div className="pills-container">
        <div className="pills-label">Categories</div>
        <div className="pills">
          <button
            className={`pill ${selectedCategory === null ? "active" : ""}`}
            onClick={() => onCategoryChange(null)}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              className={`pill ${selectedCategory === c.name ? "active" : ""}`}
              onClick={() =>
                onCategoryChange(selectedCategory === c.name ? null : c.name)
              }
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add powerpoint-addin/src/taskpane/components/FilterPills.tsx
git commit -m "feat(addin): add FilterPills component"
```

---

### Task 10: Create IconTile and IconGrid components

**Files:**
- Create: `powerpoint-addin/src/taskpane/components/IconTile.tsx`
- Create: `powerpoint-addin/src/taskpane/components/IconGrid.tsx`

- [ ] **Step 1: Create `IconTile.tsx`**

Create `powerpoint-addin/src/taskpane/components/IconTile.tsx`:

```tsx
import type { Icon } from "@lingaro/icons-client";

interface IconTileProps {
  icon: Icon;
  selected: boolean;
  apiBaseUrl: string;
  onClick: () => void;
}

export function IconTile({ icon, selected, apiBaseUrl, onClick }: IconTileProps) {
  const iconUrl = `${apiBaseUrl}/icons/${icon.id}/file`;

  return (
    <div
      className={`icon-tile ${selected ? "selected" : ""}`}
      onClick={onClick}
      title={icon.name}
    >
      <img src={iconUrl} alt={icon.name} loading="lazy" />
      <span className="hover-badge">+</span>
    </div>
  );
}
```

- [ ] **Step 2: Create `IconGrid.tsx`**

Create `powerpoint-addin/src/taskpane/components/IconGrid.tsx`:

```tsx
import type { Icon } from "@lingaro/icons-client";
import { IconTile } from "./IconTile";

interface IconGridProps {
  icons: Icon[];
  loading: boolean;
  selectedIcon: Icon | null;
  apiBaseUrl: string;
  onSelectIcon: (icon: Icon) => void;
}

export function IconGrid({ icons, loading, selectedIcon, apiBaseUrl, onSelectIcon }: IconGridProps) {
  if (loading) {
    return (
      <div className="icon-grid">
        <div className="icon-grid-inner">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="loading-skeleton" />
          ))}
        </div>
      </div>
    );
  }

  if (icons.length === 0) {
    return (
      <div className="icon-grid">
        <div className="empty-state">No icons found</div>
      </div>
    );
  }

  return (
    <div className="icon-grid">
      <div className="icon-grid-inner">
        {icons.map((icon) => (
          <IconTile
            key={icon.id}
            icon={icon}
            selected={selectedIcon?.id === icon.id}
            apiBaseUrl={apiBaseUrl}
            onClick={() => onSelectIcon(icon)}
          />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add powerpoint-addin/src/taskpane/components/IconTile.tsx powerpoint-addin/src/taskpane/components/IconGrid.tsx
git commit -m "feat(addin): add IconTile and IconGrid components"
```

---

### Task 11: Create PreviewBar component

**Files:**
- Create: `powerpoint-addin/src/taskpane/components/PreviewBar.tsx`

- [ ] **Step 1: Create `PreviewBar.tsx`**

Create `powerpoint-addin/src/taskpane/components/PreviewBar.tsx`:

```tsx
import type { Icon } from "@lingaro/icons-client";

interface PreviewBarProps {
  icon: Icon;
  apiBaseUrl: string;
  inserting: boolean;
  onInsert: () => void;
}

export function PreviewBar({ icon, apiBaseUrl, inserting, onInsert }: PreviewBarProps) {
  const iconUrl = `${apiBaseUrl}/icons/${icon.id}/file`;
  const format = icon.filename.endsWith(".svg") ? "SVG" : "PNG";

  return (
    <div className="preview-bar">
      <div className="preview-icon">
        <img src={iconUrl} alt={icon.name} />
      </div>
      <div className="preview-info">
        <div className="preview-name">{icon.name}</div>
        <div className="preview-meta">
          {icon.category} · {format}
        </div>
        {icon.tags.length > 0 && (
          <div className="preview-tags">
            {icon.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="preview-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <button className="insert-button" onClick={onInsert} disabled={inserting}>
        {inserting ? "..." : "Insert"}
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add powerpoint-addin/src/taskpane/components/PreviewBar.tsx
git commit -m "feat(addin): add PreviewBar component"
```

---

## Chunk 4: App Assembly & Hosting

### Task 12: Wire up App.tsx with all components

**Files:**
- Modify: `powerpoint-addin/src/taskpane/App.tsx`

- [ ] **Step 1: Rewrite `App.tsx`**

Replace `powerpoint-addin/src/taskpane/App.tsx` with:

```tsx
import { useState, useMemo } from "react";
import { IconsClient } from "@lingaro/icons-client";
import type { Icon } from "@lingaro/icons-client";
import { SearchBar } from "./components/SearchBar";
import { FilterPills } from "./components/FilterPills";
import { IconGrid } from "./components/IconGrid";
import { PreviewBar } from "./components/PreviewBar";
import { Toast } from "./components/Toast";
import { useCollections } from "./hooks/useCollections";
import { useSearch } from "./hooks/useSearch";
import { useInsertIcon } from "./hooks/useInsertIcon";
import "./styles/taskpane.css";

const API_BASE_URL = "https://lingaro-icons-catalog.azurewebsites.net/api";

export function App() {
  const client = useMemo(() => new IconsClient({ baseUrl: API_BASE_URL }), []);

  const [query, setQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);

  const { collections, categories } = useCollections(client);
  const { icons, loading } = useSearch(client, {
    query,
    collection: selectedCollection,
    category: selectedCategory,
  });
  const { inserting, lastInserted, error: insertError, insert } = useInsertIcon(client);

  const handleCollectionChange = (name: string | null) => {
    setSelectedCollection(name);
    setSelectedCategory(null);
    setSelectedIcon(null);
  };

  const handleCategoryChange = (name: string | null) => {
    setSelectedCategory(name);
    setSelectedIcon(null);
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    setSelectedIcon(null);
  };

  const toastMessage = lastInserted
    ? `${lastInserted} inserted into slide`
    : insertError
      ? insertError.message
      : null;

  const toastType = insertError ? "error" : "success";

  return (
    <>
      <div className="header">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
          <rect x="2" y="2" width="7" height="7" rx="1" />
          <rect x="11" y="2" width="7" height="7" rx="1" />
          <rect x="2" y="11" width="7" height="7" rx="1" />
          <rect x="11" y="11" width="7" height="7" rx="1" />
        </svg>
        <span className="header-title">Lingaro Icons</span>
      </div>

      <SearchBar value={query} onChange={handleSearch} />

      <FilterPills
        collections={collections}
        categories={categories}
        selectedCollection={selectedCollection}
        selectedCategory={selectedCategory}
        onCollectionChange={handleCollectionChange}
        onCategoryChange={handleCategoryChange}
      />

      <IconGrid
        icons={icons}
        loading={loading}
        selectedIcon={selectedIcon}
        apiBaseUrl={API_BASE_URL}
        onSelectIcon={setSelectedIcon}
      />

      {selectedIcon && (
        <PreviewBar
          icon={selectedIcon}
          apiBaseUrl={API_BASE_URL}
          inserting={inserting}
          onInsert={() => insert(selectedIcon)}
        />
      )}

      <Toast message={toastMessage} type={toastType} />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd powerpoint-addin && pnpm build`
Expected: Clean build, no errors.

- [ ] **Step 3: Commit**

```bash
git add powerpoint-addin/src/taskpane/App.tsx
git commit -m "feat(addin): wire up App with all components and hooks"
```

---

### Task 13: Add `/addin` static mount to FastAPI

**Files:**
- Modify: `api/main.py:65-68`

- [ ] **Step 1: Add the static mount**

In `api/main.py`, add after line 68 (`app.mount("/icons", ...)`):

```python
if (BASE_DIR / "powerpoint-addin" / "dist").exists():
    app.mount("/addin", StaticFiles(directory=str(BASE_DIR / "powerpoint-addin" / "dist"), html=True), name="addin")
```

- [ ] **Step 2: Verify locally**

Run:
```bash
cd powerpoint-addin && pnpm build
cd .. && python -m api.main
```

Then visit `http://localhost:8000/addin/taskpane.html` — should show the task pane UI.

- [ ] **Step 3: Commit**

```bash
git add api/main.py
git commit -m "feat(api): add /addin static mount for PowerPoint add-in"
```

---

### Task 14: End-to-end test in PowerPoint

This is a manual verification task.

- [ ] **Step 1: Build and deploy**

```bash
cd powerpoint-addin && pnpm build
```

- [ ] **Step 2: Sideload in PowerPoint**

1. Open PowerPoint Desktop
2. Go to Insert → My Add-ins → Upload My Add-in
3. Browse to `powerpoint-addin/dist/manifest.xml`
4. Click "Lingaro Icons" button in the ribbon

For local dev testing, update `manifest.xml` SourceLocation to `https://localhost:3000/taskpane.html` and run `pnpm dev`.

- [ ] **Step 3: Verify functionality**

Test the following:
- Task pane opens with header, search bar, and filter pills
- Collections and categories load from the API
- Typing in search shows matching icons after 300ms
- Clicking a collection pill filters icons
- Clicking an icon shows the preview bar
- Clicking "Insert" places the icon on the current slide
- Toast shows success message
- SVG and PNG icons both insert correctly

- [ ] **Step 4: Final commit**

```bash
git add -A powerpoint-addin/
git commit -m "feat(addin): PowerPoint add-in v1 complete"
```
