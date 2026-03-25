interface Icon {
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
interface SearchResponse {
    query: string;
    total: number;
    icons: Icon[];
    semantic_search: boolean;
}
interface SearchOptions {
    category?: string;
    set?: string;
    limit?: number;
    semantic?: boolean;
}
interface ClientConfig {
    baseUrl: string;
    apiKey?: string;
}
interface Collection {
    name: string;
    icon_count: number;
    categories: string[];
    cover_icon_id: string | null;
}

declare class IconsClient {
    private baseUrl;
    private apiKey?;
    constructor(config: ClientConfig);
    private headers;
    search(query: string, options?: SearchOptions): Promise<SearchResponse>;
    getIcon(id: string): Promise<Icon>;
    getIconSvg(id: string): Promise<string>;
    getIconBlob(id: string): Promise<Blob>;
    listIcons(options?: {
        category?: string;
        set?: string;
        limit?: number;
        offset?: number;
    }): Promise<Icon[]>;
    getCategories(): Promise<{
        name: string;
        count: number;
    }[]>;
    getCollections(): Promise<Collection[]>;
}

export { type ClientConfig, type Collection, type Icon, IconsClient, type SearchOptions, type SearchResponse };
