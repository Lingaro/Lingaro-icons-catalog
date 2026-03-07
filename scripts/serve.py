#!/usr/bin/env python3
"""
Development server for the Lingaro Icons Catalog.
Launches the FastAPI app with auto-reload.

Usage:
    python scripts/serve.py              # Run on default port 8000
    python scripts/serve.py --port 3000  # Run on custom port
"""

import argparse
import sys
from pathlib import Path

# Add project root to path
ROOT_DIR = Path(__file__).parent.parent
sys.path.insert(0, str(ROOT_DIR))

# Load .env
from dotenv import load_dotenv
load_dotenv(ROOT_DIR / ".env")


def main():
    import os

    parser = argparse.ArgumentParser(description="Run the Icons Catalog dev server")
    parser.add_argument("--host", default="0.0.0.0", help="Host to bind to (default: 0.0.0.0)")
    parser.add_argument("--port", type=int, default=8000, help="Port to run on (default: 8000)")
    parser.add_argument("--no-reload", action="store_true", help="Disable auto-reload")
    args = parser.parse_args()

    if not os.getenv("OPENAI_API_KEY"):
        print("Warning: OPENAI_API_KEY not set. Icon annotation will use fallback metadata.")
        print()

    try:
        import uvicorn
    except ImportError:
        print("Error: uvicorn not installed. Run: pip install uvicorn[standard]")
        sys.exit(1)

    print(f"Starting Lingaro Icons Catalog...")
    print(f"  URL:    http://localhost:{args.port}")
    print(f"  Docs:   http://localhost:{args.port}/docs")
    print(f"  Reload: {not args.no_reload}")
    print()

    uvicorn.run(
        "api.main:app",
        host=args.host,
        port=args.port,
        reload=not args.no_reload,
    )


if __name__ == "__main__":
    main()
