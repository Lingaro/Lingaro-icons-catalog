"""Configuration management for the Lingaro Catalog CLI."""

import json
import os
from pathlib import Path
from dataclasses import dataclass, field, asdict


def _load_dotenv(path: Path) -> None:
    """Parse a .env file and populate os.environ for keys not already set."""
    if not path.exists():
        return
    with open(path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            os.environ.setdefault(key, value)


CONFIG_DIR = Path.home() / ".config" / "lingaro-catalog-cli"
CONFIG_FILE = CONFIG_DIR / "config.json"

DEFAULTS = {
    "base_url": "http://localhost:8000",
    "api_key": "",
    "output_format": "human",
    "default_limit": 20,
}


@dataclass
class CLIConfig:
    base_url: str = "http://localhost:8000"
    api_key: str = ""
    output_format: str = "human"
    default_limit: int = 20

    @classmethod
    def load(cls) -> "CLIConfig":
        """Load config from file, env vars, then defaults."""
        # Load .env from cwd or home dir (does not override already-set env vars)
        _load_dotenv(Path.cwd() / ".env")
        _load_dotenv(Path.home() / ".env")

        data = dict(DEFAULTS)

        if CONFIG_FILE.exists():
            with open(CONFIG_FILE) as f:
                data.update(json.load(f))

        # Env vars override file config
        if url := os.environ.get("LINGARO_CATALOG_URL"):
            data["base_url"] = url
        if key := os.environ.get("LINGARO_API_KEY"):
            data["api_key"] = key

        return cls(**{k: v for k, v in data.items() if k in cls.__dataclass_fields__})

    def save(self):
        """Persist config to disk."""
        CONFIG_DIR.mkdir(parents=True, exist_ok=True)
        with open(CONFIG_FILE, "w") as f:
            json.dump(asdict(self), f, indent=2)

    def set_value(self, key: str, value: str):
        """Set a config value and save."""
        if key == "default_limit":
            value = int(value)
        if not hasattr(self, key):
            raise KeyError(f"Unknown config key: {key}")
        setattr(self, key, value)
        self.save()
