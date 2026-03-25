#!/usr/bin/env python3
"""
Run the Lingaro Icons Catalog API server.

Usage:
    python app.py                    # Run on default port 8000 with auto-reload
    python app.py --port 3000        # Run on custom port
    python app.py --no-reload        # Disable auto-reload
    python app.py --workers 4        # Production: multiple workers
"""

import argparse
import os
import sys
from pathlib import Path

# Add project root to path
sys.path.insert(0, str(Path(__file__).parent))

# Load .env file
from dotenv import load_dotenv
load_dotenv(Path(__file__).parent / ".env")


def main():
    parser = argparse.ArgumentParser(description="Run the Icons Catalog API")
    parser.add_argument("--host", default="0.0.0.0", help="Host to bind to (default: 0.0.0.0)")
    parser.add_argument("--port", type=int, default=8000, help="Port to run on (default: 8000)")
    parser.add_argument("--no-reload", action="store_true", help="Disable auto-reload")
    parser.add_argument("--workers", type=int, default=1, help="Number of worker processes (default: 1)")
    args = parser.parse_args()

    reload = not args.no_reload and args.workers == 1

    if not os.getenv("OPENAI_API_KEY"):
        print("Warning: OPENAI_API_KEY not set. Icon annotation will use fallback metadata.")
        print()

    try:
        import uvicorn
    except ImportError:
        print("Error: uvicorn not installed. Run: pip install uvicorn[standard]")
        sys.exit(1)

    print(f"Starting Lingaro Icons Catalog...")
    print(f"  URL:     http://localhost:{args.port}")
    print(f"  Docs:    http://localhost:{args.port}/docs")
    print(f"  Reload:  {reload}")
    print(f"  Workers: {args.workers}")
    print()

    uvicorn.run(
        "api.main:app",
        host=args.host,
        port=args.port,
        reload=reload,
        workers=args.workers if not reload else 1,
    )


if __name__ == "__main__":
    main()
