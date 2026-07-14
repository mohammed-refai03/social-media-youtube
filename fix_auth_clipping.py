import os

filepath = r"d:\office-tasks\social-media\assets\css\auth.css"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the vertical centering bug that causes top overflow clipping
content = content.replace('align-items: center;', 'align-items: flex-start;')

# Add margin: auto to auth-card to vertically center it only when it fits
content = content.replace('.auth-card {\n    width: 100%;', '.auth-card {\n    margin: auto;\n    width: 100%;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed auth.css layout centering bug.")
