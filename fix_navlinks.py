import os

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# Navbar replacements
nav_replacements = [
    ('href="404.html">Home</a>', 'href="index.html">Home</a>'),
    ('href="404.html">Explore</a>', 'href="explore.html">Explore</a>'),
    ('href="404.html">About Us</a>', 'href="about.html">About Us</a>'),
    ('href="404.html">Blog</a>', 'href="blog.html">Blog</a>'),
    ('href="404.html">Contact</a>', 'href="contact.html">Contact</a>'),
    ('href="404.html">Contact Us</a>', 'href="contact.html">Contact Us</a>')
]

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    for old, new in nav_replacements:
        content = content.replace(old, new)
        
    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")

print("Done.")
