import os

with open('explore.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if '<span class="me-2">Trending Searches:</span>' in line:
        break
    new_lines.append(line)

fixed_content = """<li class="nav-item">
<a class="nav-link" href="contact.html">Contact</a>
</li>
</ul>
<!-- Right Side Elements -->
<div class="d-flex align-items-center nav-actions flex-wrap gap-3 mt-3 mt-lg-0">
<a class="btn btn-primary rounded-pill px-4 fw-medium d-flex align-items-center hover-scale transition" href="login.html">
<i class="fa-solid fa-right-to-bracket me-2"></i> Login
                    </a>
</div>
</div>
</div>
</nav>

<!-- 2. Explore Header / Hero -->
<header class="explore-hero pt-5 mt-5 position-relative bg-dark text-white overflow-hidden">
<div class="position-absolute top-0 start-0 w-100 h-100 opacity-50" style="background-image: url('images/unsplash-a48072d881.webp'); background-size: cover; background-position: center;"></div>
<div class="position-absolute top-0 start-0 w-100 h-100" style="background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.85) 0%, rgba(15, 23, 42, 0.95) 75%);"></div>
<div class="container-fluid px-4 px-lg-5 position-relative z-1 py-5 my-md-4 text-center">
<span class="badge bg-white text-dark bg-opacity-10 px-3 py-2 rounded-pill fw-medium mb-3 gs-reveal backdrop-blur">
<i class="fa-solid fa-compass me-2 text-highlight"></i>Discover What's Next
            </span>
<h1 class="display-4 fw-bolder mb-4 gs-reveal">Explore the World of <span class="text-gradient">Streamly</span></h1>
<div class="search-container mx-auto mt-5 gs-reveal" style="max-width: 700px;">
<div class="input-group input-group-lg bg-white rounded-pill p-1 shadow-lg border border-white border-opacity-25 form-container-custom">
<span class="input-group-text bg-transparent border-0 ps-4 text-muted"><i class="fa-solid fa-search"></i></span>
<input aria-label="Search" class="form-control border-0 bg-transparent px-3 shadow-none text-dark fs-5" placeholder="Search videos, creators, or categories..." type="text"/>
<button class="btn btn-primary rounded-pill px-5 fw-bold tracking-wider">Search</button>
</div>
<div class="mt-4 d-flex flex-wrap justify-content-center gap-2 text-white-50 small">
<span class="me-2">Trending Searches:</span>
"""

with open('explore.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
    f.write(fixed_content)
    
    start_writing = False
    for line in lines:
        if '<a class="text-white text-decoration-none hover-primary badge rounded-pill' in line and not start_writing:
            start_writing = True
        
        if start_writing:
            f.write(line)
