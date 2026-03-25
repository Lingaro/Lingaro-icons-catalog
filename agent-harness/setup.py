"""Setup for cli-anything-lingaro-catalog."""

from setuptools import setup, find_namespace_packages

setup(
    name="cli-anything-lingaro-catalog",
    version="0.1.0",
    description="CLI harness for the Lingaro Icons Catalog API",
    author="Lingaro",
    python_requires=">=3.10",
    packages=find_namespace_packages(include=["cli_anything.*"]),
    install_requires=[
        "click>=8.0",
    ],
    entry_points={
        "console_scripts": [
            "cli-anything-lingaro-catalog=cli_anything.lingaro_catalog.lingaro_catalog_cli:main",
        ],
    },
)
