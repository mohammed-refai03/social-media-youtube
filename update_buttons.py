import os
import re

def update_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We only want to modify inside the <main class="dashboard-main"> ... </main> area
    # But more specifically, inside <div class="dashboard-content">
    # We'll use a regex replacement function for buttons and links.
    
    # Find the dashboard-content block to avoid messing with topbar
    try:
        start_idx = content.index('<div class="dashboard-content">')
    except ValueError:
        return
        
    pre_content = content[:start_idx]
    main_content = content[start_idx:]
    
    # 1. Update <button> tags
    # Only update buttons that don't already have an onclick, data-bs-toggle, data-bs-dismiss, id="mobileToggle", or type="submit"
    def button_repl(match):
        button_tag = match.group(0)
        if 'onclick=' in button_tag or 'data-bs-toggle' in button_tag or 'data-bs-target' in button_tag or 'type="submit"' in button_tag or 'mobileToggle' in button_tag:
            return button_tag
        # Add onclick="window.location.href='404.html'"
        # Insert before the closing > of the button tag
        return button_tag.replace('>', ' onclick="window.location.href=\'404.html\'">', 1)
        
    main_content = re.sub(r'<button[^>]*>', button_repl, main_content)
    
    # 2. Update <a> tags
    # Only update links with href="#" or href="" and no data-bs-toggle, data-bs-target, data-target
    def link_repl(match):
        a_tag = match.group(0)
        if 'data-bs-toggle' in a_tag or 'data-bs-target' in a_tag or 'data-target' in a_tag:
            return a_tag
        if 'href="#"' in a_tag:
            return a_tag.replace('href="#"', 'href="404.html"')
        if 'href=""' in a_tag:
            return a_tag.replace('href=""', 'href="404.html"')
        return a_tag
        
    main_content = re.sub(r'<a\s+[^>]*>', link_repl, main_content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(pre_content + main_content)

update_html(r'd:\office-tasks\social-media\admin-dashboard.html')
update_html(r'd:\office-tasks\social-media\user-dashboard.html')

print("Updated buttons and links to 404.html in main content area.")
