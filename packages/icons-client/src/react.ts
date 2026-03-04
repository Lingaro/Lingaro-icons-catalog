import { useState, useEffect } from "react";
import { IconsClient } from "./client";
import type { Icon, SearchResponse, SearchOptions, ClientConfig } from "./types";

export { IconsClient } from "./client";
export type { Icon, SearchResponse, SearchOptions, ClientConfig } from "./types";

export function useIconsClient(config: ClientConfig): IconsClient {
  return new IconsClient(config);
}

export function useIconSearch(
  client: IconsClient,
  query: string,
  options: SearchOptions = {}
) {
  const [icons, setIcons] = useState<Icon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
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

    return () => { cancelled = true; };
  }, [query, options.category, options.set, options.limit, options.semantic]);

  return { icons, loading, error, total };
}

export function useIcon(client: IconsClient, id: string) {
  const [icon, setIcon] = useState<Icon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    client.getIcon(id).then((data) => {
      if (!cancelled) { setIcon(data); setLoading(false); }
    }).catch((err) => {
      if (!cancelled) { setError(err); setLoading(false); }
    });
    return () => { cancelled = true; };
  }, [id]);

  return { icon, loading, error };
}
