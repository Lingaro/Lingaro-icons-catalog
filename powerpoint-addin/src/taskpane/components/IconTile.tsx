import type { Icon } from "@lingaro/icons-client";

interface IconTileProps {
  icon: Icon;
  selected: boolean;
  apiBaseUrl: string;
  onClick: () => void;
}

export function IconTile({ icon, selected, apiBaseUrl, onClick }: IconTileProps) {
  const iconUrl = `${apiBaseUrl}/icons/${icon.id}/file`;

  return (
    <div
      className={`icon-tile ${selected ? "selected" : ""}`}
      onClick={onClick}
      title={icon.name}
    >
      <img src={iconUrl} alt={icon.name} loading="lazy" />
      <span className="hover-badge">+</span>
    </div>
  );
}
