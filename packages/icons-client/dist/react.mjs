import {
  IconsClient
} from "./chunk-QEVIUQB3.mjs";

// src/react.ts
import { useState, useEffect } from "react";
function useIconsClient(config) {
  return new IconsClient(config);
}
function useIconSearch(client, query, options = {}) {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
    return () => {
      cancelled = true;
    };
  }, [query, options.category, options.set, options.limit, options.semantic]);
  return { icons, loading, error, total };
}
function useIcon(client, id) {
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
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
export {
  IconsClient,
  useIcon,
  useIconSearch,
  useIconsClient
};
