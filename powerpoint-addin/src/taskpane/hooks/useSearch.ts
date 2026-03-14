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
