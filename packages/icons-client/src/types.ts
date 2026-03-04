export interface Icon {
  id: string;
  name: string;
  filename: string;
  path: string;
  category: string;
  set: string;
  description?: string;
  tags: string[];
  use_cases: string[];
  score?: number;
}

export interface SearchResponse {
  query: string;
  total: number;
  icons: Icon[];
  semantic_search: boolean;
}

export interface SearchOptions {
  category?: string;
  set?: string;
  limit?: number;
  semantic?: boolean;
}

export interface ClientConfig {
  baseUrl: string;
  apiKey?: string;
}
