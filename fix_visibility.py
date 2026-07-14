import os
import re

filepath = r"d:\office-tasks\social-media\about.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Make headings white
content = content.replace('<h3 class="display-6 fw-bold mb-4">Why Choose Streamly</h3>', '<h3 class="display-6 fw-bold mb-4 text-white">Why Choose Streamly</h3>')
content = content.replace('<h5 class="fw-bold mb-1">Creator-First Policies</h5>', '<h5 class="fw-bold mb-1 text-white">Creator-First Policies</h5>')
content = content.replace('<h5 class="fw-bold mb-1">Unmatched Performance</h5>', '<h5 class="fw-bold mb-1 text-white">Unmatched Performance</h5>')
content = content.replace('<h5 class="fw-bold mb-1">Deep Analytics</h5>', '<h5 class="fw-bold mb-1 text-white">Deep Analytics</h5>')

# Fix background overlay so it doesn't weirdly blend the text
old_bg = '''<div class="position-absolute top-0 start-0 w-100 h-100 opacity-50" style="background-image: url('images/unsplash-e50b21248e.webp'); background-size: cover; background-position: center; mix-blend-mode: overlay;"></div>'''
new_bg = '''<div class="position-absolute top-0 start-0 w-100 h-100" style="background-image: url('images/unsplash-e50b21248e.webp'); background-size: cover; background-position: center;"></div>\n<div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0, 0, 0, 0.75);"></div>'''
content = content.replace(old_bg, new_bg)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed visibility in Why Choose Streamly section.")
