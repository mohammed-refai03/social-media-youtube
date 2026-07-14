import os
import re

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to replace href="#" with href="404.html"
    # ONLY if the <a> tag DOES NOT contain:
    # data-target, data-bs-toggle, data-bs-slide, id="logoutBtn"
    
    def replacer(match):
        tag = match.group(0)
        if 'data-target' in tag or 'data-bs-toggle' in tag or 'data-bs-slide' in tag or 'logoutBtn' in tag or 'menu-item' in tag:
            return tag
        return tag.replace('href="#"', 'href="404.html"')

    # Regex to match full <a> tags that contain href="#"
    new_content = re.sub(r'<a\s+[^>]*href="#"[^>]*>', replacer, content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

def main():
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'node_modules' in root or '.git' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
