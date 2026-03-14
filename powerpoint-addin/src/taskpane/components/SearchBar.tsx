import { useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        className="search-input"
        type="text"
        placeholder="Search icons..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
