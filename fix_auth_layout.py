import os
import re

filepath = r"d:\office-tasks\social-media\assets\css\auth.css"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Make the wrapper fixed to the viewport height so only the form side scrolls
content = content.replace('min-height: 100vh;', 'height: 100vh; overflow: hidden;')

# Ensure sidebar and form container are exactly 100vh tall, and form container scrolls
content = re.sub(r'(\.auth-sidebar\s*\{[^}]*display: none;)', r'\1\n    height: 100vh;', content)
content = re.sub(r'(\.auth-form-container\s*\{[^}]*display: flex;)', r'\1\n    height: 100vh;\n    overflow-y: auto;', content)

# To ensure text visibility on the sidebar, add a dark overlay over the image by using an ::after pseudo element
dark_overlay = '''
.auth-sidebar::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
}
.auth-sidebar-content {
    z-index: 2; /* increased so it sits above the overlay */
'''

content = content.replace('.auth-sidebar-content {\n    position: relative;\n    z-index: 1;', dark_overlay + '\n    position: relative;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated auth.css")
