import type { Icon, SearchResponse, SearchOptions, ClientConfig, Collection } from "./types";

export class IconsClient {
  private baseUrl: string;
  private apiKey?: string;

  constructor(config: ClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.apiKey = config.apiKey;
  }

  private headers(): Record<string, string> {
    const h: Record<string, string> = { "Content-Type": "application/json" };
    if (this.apiKey) h["X-API-Key"] = this.apiKey;
    return h;
  }

  async search(query: string, options: SearchOptions = {}): Promise<SearchResponse> {
    const params = new URLSearchParams({ q: query });
    if (options.category) params.set("category", options.category);
    if (options.set) params.set("set", options.set);
    if (options.limit) params.set("limit", String(options.limit));
    if (options.semantic !== undefined) params.set("semantic", String(options.semantic));

    const res = await fetch(`${this.baseUrl}/search?${params}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Search failed: ${res.status}`);
    return res.json();
  }

  async getIcon(id: string): Promise<Icon> {
    const res = await fetch(`${this.baseUrl}/icons/${id}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Icon not found: ${res.status}`);
    return res.json();
  }

  async getIconSvg(id: string): Promise<string> {
    const res = await fetch(`${this.baseUrl}/icons/${id}/file`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Icon file not found: ${res.status}`);
    return res.text();
  }

  async getIconBlob(id: string): Promise<Blob> {
    const res = await fetch(`${this.baseUrl}/icons/${id}/file`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Icon file not found: ${res.status}`);
    return res.blob();
  }

  async listIcons(options: { category?: string; set?: string; limit?: number; offset?: number } = {}): Promise<Icon[]> {
    const params = new URLSearchParams();
    if (options.category) params.set("category", options.category);
    if (options.set) params.set("set", options.set);
    if (options.limit) params.set("limit", String(options.limit));
    if (options.offset) params.set("offset", String(options.offset));

    const res = await fetch(`${this.baseUrl}/icons?${params}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`List failed: ${res.status}`);
    return res.json();
  }

  async getCategories(): Promise<{ name: string; count: number }[]> {
    const res = await fetch(`${this.baseUrl}/categories`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Categories failed: ${res.status}`);
    return res.json();
  }

  async getCollections(): Promise<Collection[]> {
    const res = await fetch(`${this.baseUrl}/collections`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Collections failed: ${res.status}`);
    return res.json();
  }
}
