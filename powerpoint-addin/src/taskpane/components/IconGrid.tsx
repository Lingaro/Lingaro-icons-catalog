import type { Icon } from "@lingaro/icons-client";
import { IconTile } from "./IconTile";

interface IconGridProps {
  icons: Icon[];
  loading: boolean;
  selectedIcon: Icon | null;
  apiBaseUrl: string;
  onSelectIcon: (icon: Icon) => void;
}

export function IconGrid({ icons, loading, selectedIcon, apiBaseUrl, onSelectIcon }: IconGridProps) {
  if (loading) {
    return (
      <div className="icon-grid">
        <div className="icon-grid-inner">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="loading-skeleton" />
          ))}
        </div>
      </div>
    );
  }

  if (icons.length === 0) {
    return (
      <div className="icon-grid">
        <div className="empty-state">No icons found</div>
      </div>
    );
  }

  return (
    <div className="icon-grid">
      <div className="icon-grid-inner">
        {icons.map((icon) => (
          <IconTile
            key={icon.id}
            icon={icon}
            selected={selectedIcon?.id === icon.id}
            apiBaseUrl={apiBaseUrl}
            onClick={() => onSelectIcon(icon)}
          />
        ))}
      </div>
    </div>
  );
}
