import { IconsClient, Icon, SearchOptions, ClientConfig } from './index.mjs';
export { SearchResponse } from './index.mjs';

declare function useIconsClient(config: ClientConfig): IconsClient;
declare function useIconSearch(client: IconsClient, query: string, options?: SearchOptions): {
    icons: Icon[];
    loading: boolean;
    error: Error | null;
    total: number;
};
declare function useIcon(client: IconsClient, id: string): {
    icon: Icon | null;
    loading: boolean;
    error: Error | null;
};

export { ClientConfig, Icon, IconsClient, SearchOptions, useIcon, useIconSearch, useIconsClient };
