import os

filepath = r"d:\office-tasks\social-media\about.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace fa-video with fa-tv and fa-robot with fa-brain
content = content.replace('fa-solid fa-video', 'fa-solid fa-tv')
content = content.replace('fa-solid fa-robot', 'fa-solid fa-brain')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Icons replaced in about.html")
