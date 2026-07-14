import os

filepath = r"d:\office-tasks\social-media\login.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('auth.css?v=2', 'auth.css?v=3')
content = content.replace('auth.css"', 'auth.css?v=3"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cache busted login.html")
