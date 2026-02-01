#!/usr/bin/env python3
"""
Run the Lingaro Icons Catalog API server.

Usage:
    python run_api.py                    # Run on default port 8000
    python run_api.py --port 3000        # Run on custom port
    python run_api.py --reload           # Run with auto-reload (development)
"""

import argparse
import os
import sys
from pathlib import Path

# Add project root to path
sys.path.insert(0, str(Path(__file__).parent))


def main():
    parser = argparse.ArgumentParser(description="Run the Icons Catalog API")
    parser.add_argument(
        "--host",
        default="0.0.0.0",
        help="Host to bind to (default: 0.0.0.0)"
    )
    parser.add_argument(
        "--port",
        type=int,
        default=8000,
        help="Port to run on (default: 8000)"
    )
    parser.add_argument(
        "--reload",
        action="store_true",
        help="Enable auto-reload for development"
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=1,
        help="Number of worker processes (default: 1)"
    )
    args = parser.parse_args()

    # Check for OpenAI API key
    if not os.getenv("OPENAI_API_KEY"):
        print("Warning: OPENAI_API_KEY not set. Semantic search will be disabled.")
        print("Set it with: export OPENAI_API_KEY=your_key_here")
        print()

    # Check that icons data exists
    data_file = Path(__file__).parent / "assets" / "data" / "icons.json"
    if not data_file.exists():
        print(f"Error: Icons data file not found: {data_file}")
        print("Run 'python scripts/annotate.py' first to generate icon metadata.")
        sys.exit(1)

    try:
        import uvicorn
    except ImportError:
        print("Error: uvicorn not installed.")
        print("Install with: pip install uvicorn[standard]")
        sys.exit(1)

    print(f"Starting Lingaro Icons Catalog API...")
    print(f"  Host: {args.host}")
    print(f"  Port: {args.port}")
    print(f"  Reload: {args.reload}")
    print()
    print(f"API docs: http://localhost:{args.port}/docs")
    print(f"OpenAPI:  http://localhost:{args.port}/openapi.json")
    print()

    uvicorn.run(
        "api.main:app",
        host=args.host,
        port=args.port,
        reload=args.reload,
        workers=args.workers if not args.reload else 1
    )


if __name__ == "__main__":
    main()
