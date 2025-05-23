# To automate badge generation for future builds, this script is
# developed to ensure the process works well within the Git environment

import json
from pathlib import Path

# Path to your Fontspector markdown report\
report_md = Path("out/fontspector/fontspector-report.md")

# Check if it contains any error keywords
if report_md.exists():
    content = report_md.read_text()
    has_errors = any(kw in content for kw in ["FAIL", "ERROR"])
else:
    has_errors = True  # treat missing report as error

# Badge data
badge = {
    "schemaVersion": 1,
    "label": "Fontspector",
    "message": "passing" if not has_errors else "failing",
    "color": "green" if not has_errors else "red"
}

# Write badge
badge_path = Path("out/fontspector/fontspector-badge.json")
badge_path.parent.mkdir(parents=True, exist_ok=True)
badge_path.write_text(json.dumps(badge, indent=2))
