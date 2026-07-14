import os
from PIL import Image

src_dir = r"C:\Users\ELCOT\.gemini\antigravity\brain\ab149fac-34a9-46b5-bae7-8acfb348bbb3"
dest_dir = r"d:\office-tasks\social-media\images"

files_to_process = {
    "minecraft_speedrun_1784011031346.png": "minecraft.webp",
    "midnight_city_1784011056442.png": "midnight-city.webp",
    "stay_kid_laroi_1784011077095.png": "stay-song.webp"
}

for src_name, dest_name in files_to_process.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        img = Image.open(src_path)
        img = img.convert("RGB") # Just in case it's RGBA
        
        # Resize if it's too large to help compression
        max_size = (800, 800)
        img.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Save as webp with optimization
        quality = 85
        img.save(dest_path, "WEBP", quality=quality, method=6)
        
        # Check size and compress more if needed
        while os.path.getsize(dest_path) > 90 * 1024 and quality > 10:
            quality -= 5
            img.save(dest_path, "WEBP", quality=quality, method=6)
            
        print(f"Saved {dest_name} (Size: {os.path.getsize(dest_path)/1024:.2f} KB, Quality: {quality})")
    else:
        print(f"File not found: {src_path}")

