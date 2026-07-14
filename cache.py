import os
filepath = r"d:\office-tasks\social-media\explore.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

import re
content = re.sub(r'assets/js/explore\.js(\?v=\d+)?', 'assets/js/explore.js?v=5', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cache busted explore.js")
