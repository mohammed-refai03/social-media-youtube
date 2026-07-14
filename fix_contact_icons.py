import os

filepath = r"d:\office-tasks\social-media\contact.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the contact information circles to have solid blue backgrounds and white icons
content = content.replace(
    '<div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">\n<i class="fa-solid fa-envelope fs-5"></i>',
    '<div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">\n<i class="fa-solid fa-envelope fs-5"></i>'
)

content = content.replace(
    '<div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">\n<i class="fa-solid fa-phone fs-5"></i>',
    '<div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">\n<i class="fa-solid fa-phone fs-5"></i>'
)

content = content.replace(
    '<div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">\n<i class="fa-solid fa-location-dot fs-5"></i>',
    '<div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">\n<i class="fa-solid fa-location-dot fs-5"></i>'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed contact info icons.")
