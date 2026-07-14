import os

filepath = r"d:\office-tasks\social-media\about.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the first card (4K HDR Streaming)
content = content.replace(
    'bg-primary bg-opacity-10 text-primary',
    'bg-primary text-white'
)

# Fix the second card (AI Recommendations)
content = content.replace(
    'bg-highlight bg-opacity-10 text-highlight',
    'bg-highlight text-white'
)

# Fix the third card (Instant Monetization) to match, even though bg-success works, consistency is good!
content = content.replace(
    'bg-success bg-opacity-10 text-success',
    'bg-success text-white'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed Platform Features icons visibility in about.html")
