import os

# Fix JS files
for root, _, files in os.walk('assets/js'):
    for f in files:
        if f.endswith('.js'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            if r"\'404.html\'" in content:
                content = content.replace(r"\'404.html\'", "'404.html'")
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f"Fixed {path}")

# Fix HTML files
for f in os.listdir('.'):
    if f.endswith('.html'):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        if r"\'404.html\'" in content:
            content = content.replace(r"\'404.html\'", "'404.html'")
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Fixed {f}")
print("Done.")
