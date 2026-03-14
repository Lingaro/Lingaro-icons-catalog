import type { Collection } from "@lingaro/icons-client";

interface FilterPillsProps {
  collections: Collection[];
  categories: { name: string; count: number }[];
  selectedCollection: string | null;
  selectedCategory: string | null;
  onCollectionChange: (name: string | null) => void;
  onCategoryChange: (name: string | null) => void;
}

export function FilterPills({
  collections,
  categories,
  selectedCollection,
  selectedCategory,
  onCollectionChange,
  onCategoryChange,
}: FilterPillsProps) {
  return (
    <>
      <div className="pills-container">
        <div className="pills-label">Collections</div>
        <div className="pills">
          <button
            className={`pill ${selectedCollection === null ? "active" : ""}`}
            onClick={() => onCollectionChange(null)}
          >
            All
          </button>
          {collections.map((c) => (
            <button
              key={c.name}
              className={`pill ${selectedCollection === c.name ? "active" : ""}`}
              onClick={() =>
                onCollectionChange(selectedCollection === c.name ? null : c.name)
              }
            >
              {c.name} ({c.icon_count})
            </button>
          ))}
        </div>
      </div>
      <div className="pills-container">
        <div className="pills-label">Categories</div>
        <div className="pills">
          <button
            className={`pill ${selectedCategory === null ? "active" : ""}`}
            onClick={() => onCategoryChange(null)}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              className={`pill ${selectedCategory === c.name ? "active" : ""}`}
              onClick={() =>
                onCategoryChange(selectedCategory === c.name ? null : c.name)
              }
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
