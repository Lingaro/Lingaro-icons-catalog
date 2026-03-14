import type { Icon } from "@lingaro/icons-client";

interface PreviewBarProps {
  icon: Icon;
  apiBaseUrl: string;
  inserting: boolean;
  onInsert: () => void;
}

export function PreviewBar({ icon, apiBaseUrl, inserting, onInsert }: PreviewBarProps) {
  const iconUrl = `${apiBaseUrl}/icons/${icon.id}/file`;
  const format = icon.filename.endsWith(".svg") ? "SVG" : "PNG";

  return (
    <div className="preview-bar">
      <div className="preview-icon">
        <img src={iconUrl} alt={icon.name} />
      </div>
      <div className="preview-info">
        <div className="preview-name">{icon.name}</div>
        <div className="preview-meta">
          {icon.category} · {format}
        </div>
        {icon.tags.length > 0 && (
          <div className="preview-tags">
            {icon.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="preview-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <button className="insert-button" onClick={onInsert} disabled={inserting}>
        {inserting ? "..." : "Insert"}
      </button>
    </div>
  );
}
