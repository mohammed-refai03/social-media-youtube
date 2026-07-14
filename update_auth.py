import os

files = [
    r"d:\office-tasks\social-media\login.html",
    r"d:\office-tasks\social-media\signup.html"
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('auth.css?v=3', 'auth.css?v=4')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Bumped auth.css version to 4")
