"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react.ts
var react_exports = {};
__export(react_exports, {
  IconsClient: () => IconsClient,
  useIcon: () => useIcon,
  useIconSearch: () => useIconSearch,
  useIconsClient: () => useIconsClient
});
module.exports = __toCommonJS(react_exports);
var import_react = require("react");

// src/client.ts
var IconsClient = class {
  constructor(config) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.apiKey = config.apiKey;
  }
  headers() {
    const h = { "Content-Type": "application/json" };
    if (this.apiKey) h["X-API-Key"] = this.apiKey;
    return h;
  }
  async search(query, options = {}) {
    const params = new URLSearchParams({ q: query });
    if (options.category) params.set("category", options.category);
    if (options.set) params.set("set", options.set);
    if (options.limit) params.set("limit", String(options.limit));
    if (options.semantic !== void 0) params.set("semantic", String(options.semantic));
    const res = await fetch(`${this.baseUrl}/search?${params}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Search failed: ${res.status}`);
    return res.json();
  }
  async getIcon(id) {
    const res = await fetch(`${this.baseUrl}/icons/${id}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Icon not found: ${res.status}`);
    return res.json();
  }
  async getIconSvg(id) {
    const res = await fetch(`${this.baseUrl}/icons/${id}/file`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Icon file not found: ${res.status}`);
    return res.text();
  }
  async getIconBlob(id) {
    const res = await fetch(`${this.baseUrl}/icons/${id}/file`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Icon file not found: ${res.status}`);
    return res.blob();
  }
  async listIcons(options = {}) {
    const params = new URLSearchParams();
    if (options.category) params.set("category", options.category);
    if (options.set) params.set("set", options.set);
    if (options.limit) params.set("limit", String(options.limit));
    if (options.offset) params.set("offset", String(options.offset));
    const res = await fetch(`${this.baseUrl}/icons?${params}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`List failed: ${res.status}`);
    return res.json();
  }
  async getCategories() {
    const res = await fetch(`${this.baseUrl}/categories`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Categories failed: ${res.status}`);
    return res.json();
  }
};

// src/react.ts
function useIconsClient(config) {
  return new IconsClient(config);
}
function useIconSearch(client, query, options = {}) {
  const [icons, setIcons] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const [total, setTotal] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    if (!query || query.length < 1) {
      setIcons([]);
      setTotal(0);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    client.search(query, options).then((res) => {
      if (!cancelled) {
        setIcons(res.icons);
        setTotal(res.total);
        setLoading(false);
      }
    }).catch((err) => {
      if (!cancelled) {
        setError(err);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [query, options.category, options.set, options.limit, options.semantic]);
  return { icons, loading, error, total };
}
function useIcon(client, id) {
  const [icon, setIcon] = (0, import_react.useState)(null);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    client.getIcon(id).then((data) => {
      if (!cancelled) {
        setIcon(data);
        setLoading(false);
      }
    }).catch((err) => {
      if (!cancelled) {
        setError(err);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [id]);
  return { icon, loading, error };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IconsClient,
  useIcon,
  useIconSearch,
  useIconsClient
});
