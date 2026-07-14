import os
import re
import urllib.request
import hashlib
from io import BytesIO
from PIL import Image

MAX_SIZE = 90 * 1024
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(ROOT_DIR, 'images')

if not os.path.exists(IMAGES_DIR):
    os.makedirs(IMAGES_DIR)

def get_hash(s):
    return hashlib.md5(s.encode('utf-8')).hexdigest()[:10]

def process_image(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = response.read()
        
        img = Image.open(BytesIO(data))
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        quality = 80
        width, height = img.size
        
        while True:
            out = BytesIO()
            img.save(out, format='WEBP', quality=quality)
            if out.tell() <= MAX_SIZE or quality <= 20:
                if out.tell() > MAX_SIZE:
                    width = int(width * 0.8)
                    height = int(height * 0.8)
                    img = img.resize((width, height), Image.Resampling.LANCZOS)
                    quality = 60
                    continue
                break
            quality -= 20
        
        filename = f"unsplash-{get_hash(url)}.webp"
        filepath = os.path.join(IMAGES_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(out.getvalue())
        print(f"Saved: {filename} ({out.tell() // 1024}KB)")
        return f"images/{filename}"
    except Exception as e:
        print(f"Error processing {url}: {e}")
        return None

def main():
    file_exts = ['.html', '.js']
    files_to_process = []
    
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'node_modules' in root or '.git' in root or 'images' in root:
            continue
        for file in files:
            if any(file.endswith(ext) for ext in file_exts):
                files_to_process.append(os.path.join(root, file))
                
    url_regex = re.compile(r'https://(?:images|source)\.unsplash\.com/[^"\'\s\)]+')
    url_map = {}
    
    for file in files_to_process:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        matches = url_regex.findall(content)
        if matches:
            modified = False
            for url in matches:
                clean_url = url.replace('&amp;', '&')
                if clean_url not in url_map:
                    print(f"Processing URL: {clean_url}")
                    new_path = process_image(clean_url)
                    if new_path:
                        url_map[clean_url] = new_path
                
                local_path = url_map.get(clean_url)
                if local_path:
                    content = content.replace(url, local_path)
                    modified = True
            
            if modified:
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {file}")

if __name__ == "__main__":
    main()
