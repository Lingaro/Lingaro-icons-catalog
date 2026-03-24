"""
Test suite for icon ID generation logic.

Verifies that generate_icon_id() correctly normalizes:
- Spaces → underscores
- Ampersands stay as _&_ (single underscores)
- Hyphens → underscores
- Lowercase conversion
- File extension removal
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from scripts.import_icon import generate_icon_id


def test_generate_icon_id_basic():
    """Basic normalization: spaces and hyphens to underscores."""
    result = generate_icon_id("lingaro set4", "branding", "lingaro-logo.png")
    assert result == "lingaro_set4_branding_lingaro_logo"


def test_generate_icon_id_ampersands():
    """Ampersands stay as _&_ with single underscores."""
    result = generate_icon_id("DevOps & Infra", "DevOps & Infra", "devops.png")
    assert result == "devops_&_infra_devops_&_infra_devops"


def test_generate_icon_id_mixed_case():
    """Mixed case gets lowercased."""
    result = generate_icon_id("Microsoft Fabric", "services", "Fabric-20-Color.svg")
    assert result == "microsoft_fabric_services_fabric_20_color"


def test_generate_icon_id_multiple_spaces_hyphens():
    """Multiple spaces/hyphens get converted to underscores individually."""
    result = generate_icon_id("Data  & Analytics", "some-long-category", "test.svg")
    # Multiple spaces get converted to underscores individually
    expected = "data__&_analytics_some_long_category_test"
    assert result == expected


if __name__ == "__main__":
    test_generate_icon_id_basic()
    test_generate_icon_id_ampersands()
    test_generate_icon_id_mixed_case()
    test_generate_icon_id_multiple_spaces_hyphens()
    print("[OK] All tests passed!")
