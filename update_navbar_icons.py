import os
import re

dir_path = r"d:\office-tasks\social-media"

replacements = [
    (r'<a class="(nav-link[^"]*)" href="index\.html">Home</a>', r'<a class="\1" href="index.html"><i class="fa-solid fa-house me-1"></i> Home</a>'),
    (r'<a class="(nav-link[^"]*)" href="explore\.html">Explore</a>', r'<a class="\1" href="explore.html"><i class="fa-solid fa-compass me-1"></i> Explore</a>'),
    (r'<a class="(nav-link[^"]*)" href="about\.html">About Us</a>', r'<a class="\1" href="about.html"><i class="fa-solid fa-circle-info me-1"></i> About Us</a>'),
    (r'<a class="(nav-link[^"]*)" href="blog\.html">Blog</a>', r'<a class="\1" href="blog.html"><i class="fa-solid fa-newspaper me-1"></i> Blog</a>'),
    (r'<a class="(nav-link[^"]*)" href="contact\.html">Contact</a>', r'<a class="\1" href="contact.html"><i class="fa-solid fa-envelope me-1"></i> Contact</a>')
]

for filename in os.listdir(dir_path):
    if filename.endswith(".html"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        for old, new in replacements:
            new_content = re.sub(old, new, new_content)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")

