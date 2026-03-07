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

export {
  IconsClient
};
