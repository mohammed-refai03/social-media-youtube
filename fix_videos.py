import os
import re

js_files = []
for root, _, files in os.walk('assets/js'):
    for f in files:
        if f.endswith('.js'):
            js_files.append(os.path.join(root, f))

for file in js_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Replace <div class="video-card... "> with <div class="video-card..." onclick="window.location.href='404.html'" style="cursor: pointer;">
    # Wait, the class attribute might vary, e.g., <div class="video-card border-primary...">
    # We can use regex to inject the attributes.
    content = re.sub(r'<div\s+class="(video-card[^"]*)"', r'<div class="\1" onclick="window.location.href=\'404.html\'" style="cursor: pointer;"', content)
    content = re.sub(r'<div\s+class="(short-card[^"]*)"', r'<div class="\1" onclick="window.location.href=\'404.html\'" style="cursor: pointer;"', content)
    
    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")

print("Done.")
