#!/bin/bash
# Capture real website screenshots (hero + mid + low) for the 4 new portfolio projects
# Matches existing specs: 1440x900, JPEG
set -u

OUT="/home/z/my-project/public/projects"
TMP="/tmp/shots"
mkdir -p "$TMP" "$OUT"

capture_site() {
  local name="$1"
  local url="$2"
  echo "=== Capturing $name ==="
  agent-browser open "$url" >/dev/null 2>&1
  agent-browser set viewport 1440 900 >/dev/null 2>&1
  sleep 5
  agent-browser screenshot "$TMP/${name}-hero.png" 2>&1 | tail -1
  agent-browser scroll down 1900 >/dev/null 2>&1
  sleep 2.5
  agent-browser screenshot "$TMP/${name}-mid.png" 2>&1 | tail -1
  agent-browser scroll down 1900 >/dev/null 2>&1
  sleep 2
  agent-browser screenshot "$TMP/${name}-low.png" 2>&1 | tail -1
}

capture_site "kova"      "https://f1b3181pads0-d.space-z.ai/"
capture_site "wrenfield" "https://q1n3b885bag0-d.space-z.ai/"
capture_site "emberroast" "https://s1b3186k5w81-d.space-z.ai/"
capture_site "voyara"    "https://w1f3j81whdn1-d.space-z.ai/"

agent-browser close >/dev/null 2>&1
ls -la "$TMP"/*.png 2>/dev/null
echo "DONE"
