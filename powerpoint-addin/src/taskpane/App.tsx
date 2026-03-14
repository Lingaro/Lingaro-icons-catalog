import { useState, useMemo } from "react";
import { IconsClient } from "@lingaro/icons-client";
import type { Icon } from "@lingaro/icons-client";
import { SearchBar } from "./components/SearchBar";
import { FilterPills } from "./components/FilterPills";
import { IconGrid } from "./components/IconGrid";
import { PreviewBar } from "./components/PreviewBar";
import { Toast } from "./components/Toast";
import { useCollections } from "./hooks/useCollections";
import { useSearch } from "./hooks/useSearch";
import { useInsertIcon } from "./hooks/useInsertIcon";
import "./styles/taskpane.css";

const API_BASE_URL = "https://lingaro-icons-catalog.azurewebsites.net/api";

export function App() {
  const client = useMemo(() => new IconsClient({ baseUrl: API_BASE_URL }), []);

  const [query, setQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);

  const { collections, categories } = useCollections(client);
  const { icons, loading } = useSearch(client, {
    query,
    collection: selectedCollection,
    category: selectedCategory,
  });
  const { inserting, lastInserted, error: insertError, insert } = useInsertIcon(client);

  const handleCollectionChange = (name: string | null) => {
    setSelectedCollection(name);
    setSelectedCategory(null);
    setSelectedIcon(null);
  };

  const handleCategoryChange = (name: string | null) => {
    setSelectedCategory(name);
    setSelectedIcon(null);
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    setSelectedCategory(null);
    setSelectedIcon(null);
  };

  const toastMessage = lastInserted
    ? `${lastInserted} inserted into slide`
    : insertError
      ? insertError.message
      : null;

  const toastType = insertError ? "error" : "success";

  return (
    <>
      <div className="header">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
          <rect x="2" y="2" width="7" height="7" rx="1" />
          <rect x="11" y="2" width="7" height="7" rx="1" />
          <rect x="2" y="11" width="7" height="7" rx="1" />
          <rect x="11" y="11" width="7" height="7" rx="1" />
        </svg>
        <span className="header-title">Lingaro Icons</span>
      </div>

      <SearchBar value={query} onChange={handleSearch} />

      <FilterPills
        collections={collections}
        categories={categories}
        selectedCollection={selectedCollection}
        selectedCategory={selectedCategory}
        onCollectionChange={handleCollectionChange}
        onCategoryChange={handleCategoryChange}
      />

      <IconGrid
        icons={icons}
        loading={loading}
        selectedIcon={selectedIcon}
        apiBaseUrl={API_BASE_URL}
        onSelectIcon={setSelectedIcon}
      />

      {selectedIcon && (
        <PreviewBar
          icon={selectedIcon}
          apiBaseUrl={API_BASE_URL}
          inserting={inserting}
          onInsert={() => insert(selectedIcon)}
        />
      )}

      <Toast message={toastMessage} type={toastType} />
    </>
  );
}
