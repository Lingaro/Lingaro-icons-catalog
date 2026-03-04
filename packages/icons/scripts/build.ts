/**
 * Generate index.ts and react.tsx from the icons catalog API export.
 * Usage: tsx scripts/build.ts [--api-url http://localhost:8000/api]
 */

import * as fs from "fs";
import * as path from "path";

const API_URL = process.argv.includes("--api-url")
  ? process.argv[process.argv.indexOf("--api-url") + 1]
  : "http://localhost:8000/api";

function toExportName(name: string): string {
  // "Data Analysis Charts" -> "DataAnalysisCharts"
  return name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

async function main() {
  console.log(`Fetching icons from ${API_URL}/admin/export...`);
  const res = await fetch(`${API_URL}/admin/export`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  const icons: any[] = data.icons;

  const srcDir = path.join(__dirname, "..", "src");
  const distDir = path.join(__dirname, "..", "dist");
  fs.mkdirSync(srcDir, { recursive: true });
  fs.mkdirSync(distDir, { recursive: true });

  // Fetch SVG content for each icon
  const svgExports: string[] = [];
  const reactExports: string[] = [];
  const metadata: any[] = [];
  const seenNames = new Set<string>();

  for (const icon of icons) {
    if (!icon.filename.endsWith(".svg")) continue;

    let exportName = toExportName(icon.name);
    if (seenNames.has(exportName)) {
      exportName += toExportName(icon.category);
    }
    seenNames.add(exportName);

    // Fetch SVG
    const svgRes = await fetch(`${API_URL}/icons/${icon.id}/file`);
    if (!svgRes.ok) continue;
    const svg = await svgRes.text();
    const escaped = svg.replace(/`/g, "\\`").replace(/\$/g, "\\$");

    svgExports.push(`export const ${exportName} = \`${escaped}\`;`);
    reactExports.push(
      `export const ${exportName}Icon: React.FC<IconProps> = ({ size = 24, color, className, ...props }) => (
  <span
    className={className}
    style={{ display: 'inline-flex', width: size, height: size }}
    dangerouslySetInnerHTML={{ __html: ${exportName}.replace(/fill="[^"]*"/g, color ? \`fill="\${color}"\` : '$&') }}
    {...props}
  />
);`
    );
    metadata.push({ name: icon.name, exportName, id: icon.id, category: icon.category, tags: icon.tags });
  }

  // Write index.ts
  fs.writeFileSync(
    path.join(srcDir, "index.ts"),
    svgExports.join("\n\n") + "\n"
  );

  // Write react.tsx
  const reactContent = `import React from "react";
import { ${Array.from(seenNames).join(", ")} } from "./index";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  color?: string;
}

${reactExports.join("\n\n")}
`;
  fs.writeFileSync(path.join(srcDir, "react.tsx"), reactContent);

  // Write metadata
  fs.writeFileSync(path.join(distDir, "metadata.json"), JSON.stringify(metadata, null, 2));

  console.log(`Generated ${svgExports.length} icon exports`);
}

main().catch(console.error);
