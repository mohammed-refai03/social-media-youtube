import os

filepath = r"d:\office-tasks\social-media\contact.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add flex-shrink-0 to prevent the flex layout from squishing the circles
old_div = '<div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">'
new_div = '<div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style="width: 50px; height: 50px;">'

content = content.replace(old_div, new_div)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Added flex-shrink-0 to contact icons.")
