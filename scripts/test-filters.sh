#!/bin/bash
# Deterministic filter test: click each filter, count visible project articles
set -u
agent-browser open "http://localhost:3000/" >/dev/null 2>&1
agent-browser set viewport 1440 900 >/dev/null 2>&1
sleep 4

count_articles() {
  agent-browser eval "document.querySelectorAll('#portfolio article').length" 2>&1 | tail -1
}

echo "All: $(count_articles) articles (expect 9)"

for label in Travel "Real Estate" Hospitality Creative Business; do
  agent-browser eval "
    const btns = Array.from(document.querySelectorAll('#portfolio [role=tab]'));
    const b = btns.find(x => x.textContent.trim() === '$label');
    b.click();
  " >/dev/null 2>&1
  sleep 1.5
  echo "$label: $(count_articles) article(s)"
done
agent-browser close >/dev/null 2>&1
echo DONE
