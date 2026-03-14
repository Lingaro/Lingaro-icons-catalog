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
