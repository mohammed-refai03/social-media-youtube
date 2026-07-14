import os

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content.replace('Streamly', 'Stackly')
        new_content = new_content.replace('streamly', 'stackly')
        new_content = new_content.replace('STREAMLY', 'STACKLY')
        
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

for root, dirs, files in os.walk(r"d:\office-tasks\social-media"):
    if ".git" in root or "node_modules" in root:
        continue
    for file in files:
        if file.endswith('.html') or file.endswith('.css') or file.endswith('.js') or file.endswith('.json'):
            replace_in_file(os.path.join(root, file))

print("Search and replace complete.")
