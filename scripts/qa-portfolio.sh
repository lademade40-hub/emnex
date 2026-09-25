#!/bin/bash
# Visual QA of the updated portfolio section (desktop + mobile)
set -u
OUT="/tmp/qa"
mkdir -p "$OUT"

agent-browser open "http://localhost:3000/" >/dev/null 2>&1
agent-browser set viewport 1440 900 >/dev/null 2>&1
sleep 4
# Scroll to portfolio section
agent-browser scrollintoview "#portfolio" >/dev/null 2>&1
sleep 2
agent-browser screenshot "$OUT/work-top.png" >/dev/null 2>&1
# Scroll through portfolio entries (9 projects)
agent-browser scroll down 2400 >/dev/null 2>&1; sleep 1.5
agent-browser screenshot "$OUT/work-new1.png" >/dev/null 2>&1
agent-browser scroll down 2400 >/dev/null 2>&1; sleep 1.5
agent-browser screenshot "$OUT/work-new2.png" >/dev/null 2>&1
agent-browser scroll down 2400 >/dev/null 2>&1; sleep 1.5
agent-browser screenshot "$OUT/work-new3.png" >/dev/null 2>&1
agent-browser scroll down 2400 >/dev/null 2>&1; sleep 1.5
agent-browser screenshot "$OUT/work-new4.png" >/dev/null 2>&1
agent-browser scroll down 2400 >/dev/null 2>&1; sleep 1.5
agent-browser screenshot "$OUT/work-end.png" >/dev/null 2>&1

# Test Creative filter
agent-browser scrollintoview "#portfolio" >/dev/null 2>&1; sleep 1
agent-browser click "text=Creative" >/dev/null 2>&1
sleep 2
agent-browser screenshot "$OUT/filter-creative.png" >/dev/null 2>&1

# Mobile check
agent-browser set viewport 390 844 >/dev/null 2>&1
agent-browser open "http://localhost:3000/" >/dev/null 2>&1
sleep 4
agent-browser scrollintoview "#portfolio" >/dev/null 2>&1
sleep 2
agent-browser screenshot "$OUT/m-work.png" >/dev/null 2>&1
agent-browser scroll down 1600 >/dev/null 2>&1; sleep 1.5
agent-browser screenshot "$OUT/m-work2.png" >/dev/null 2>&1

# horizontal overflow check
agent-browser eval "document.documentElement.scrollWidth - document.documentElement.clientWidth" 2>&1 | tail -1

agent-browser close >/dev/null 2>&1
ls -la "$OUT"
echo DONE
