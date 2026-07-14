import os

filepath = r"d:\office-tasks\social-media\assets\js\explore.js"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    "https://images.unsplash.com/photo-1600861194942-f883de0b2841?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80": "images/minecraft.webp",
    "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80": "images/midnight-city.webp",
    "https://images.unsplash.com/photo-1516280440502-8598b7ce6b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80": "images/stay-song.webp"
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced Unsplash links with local WebP images.")
