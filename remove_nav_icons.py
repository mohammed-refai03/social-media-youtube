import os
import re

directory = r"d:\office-tasks\social-media"

# We want to replace these specific icon patterns across all HTML files
replacements = [
    (r'<i class="fa-solid fa-house me-1"></i>\s*Home', 'Home'),
    (r'<i class="fa-solid fa-compass me-1"></i>\s*Explore', 'Explore'),
    (r'<i class="fa-solid fa-circle-info me-1"></i>\s*About Us', 'About Us'),
    (r'<i class="fa-solid fa-newspaper me-1"></i>\s*Blog', 'Blog'),
    (r'<i class="fa-solid fa-envelope me-1"></i>\s*Contact', 'Contact')
]

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            for old_pattern, new_text in replacements:
                content = re.sub(old_pattern, new_text, content)
                
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {file}")

print("Navbar icons removed successfully.")
