import re

file_path = 'user-dashboard.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <div class="card border-0 shadow-sm rounded-4 h-100 overflow-hidden hover-scale transition">
# that contains <img alt="Video" ... >
content = re.sub(
    r'(<div class="card border-0 shadow-sm rounded-4 h-100 overflow-hidden hover-scale transition")([^>]*>)',
    r'\1 onclick="window.location.href=\'404.html\'" style="cursor:pointer;"\2',
    content
)

# Replace <div class="d-flex align-items-center gap-3"> that has video img
content = re.sub(
    r'(<div class="d-flex align-items-center gap-3">)(\s*<div class="position-relative">\s*<img alt="Video")',
    r'<div class="d-flex align-items-center gap-3 hover-scale transition" onclick="window.location.href=\'404.html\'" style="cursor:pointer;">\2',
    content
)

content = re.sub(
    r'(<div class="d-flex align-items-center gap-3 border-bottom pb-3">)(\s*<div class="position-relative">\s*<img alt="Video")',
    r'<div class="d-flex align-items-center gap-3 border-bottom pb-3 hover-scale transition" onclick="window.location.href=\'404.html\'" style="cursor:pointer;">\2',
    content
)

# Replace <div class="d-flex align-items-start gap-4 ...">
content = re.sub(
    r'(<div class="d-flex align-items-start gap-4 p-3 bg-white rounded-4 shadow-sm border border-light">)(\s*<div class="position-relative">\s*<img alt="Video")',
    r'<div class="d-flex align-items-start gap-4 p-3 bg-white rounded-4 shadow-sm border border-light hover-scale transition" onclick="window.location.href=\'404.html\'" style="cursor:pointer;">\2',
    content
)

# Replace <div class="d-flex align-items-center gap-4 ...">
content = re.sub(
    r'(<div class="d-flex align-items-center gap-4 p-3 bg-white rounded-4 shadow-sm border border-light">)(\s*<i[^>]*>\s*</i>\s*<img alt="Video")',
    r'<div class="d-flex align-items-center gap-4 p-3 bg-white rounded-4 shadow-sm border border-light hover-scale transition" onclick="window.location.href=\'404.html\'" style="cursor:pointer;">\2',
    content
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated user-dashboard.html")
