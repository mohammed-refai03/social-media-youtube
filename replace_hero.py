import os

with open('explore.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_header = '''<header class="explore-hero pt-5 mt-5 position-relative bg-dark text-white overflow-hidden">
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
<a class="text-white text-decoration-none hover-primary badge rounded-pill border border-white border-opacity-25 px-3 py-1" href="404.html">AI Tech</a>
<a class="text-white text-decoration-none hover-primary badge rounded-pill border border-white border-opacity-25 px-3 py-1" href="404.html">Esports 2026</a>
<a class="text-white text-decoration-none hover-primary badge rounded-pill border border-white border-opacity-25 px-3 py-1" href="404.html">Lofi Mix</a>
<a class="text-white text-decoration-none hover-primary badge rounded-pill border border-white border-opacity-25 px-3 py-1" href="404.html">Travel Vlog</a>
</div>
</div>
</div>
</header>'''

new_header = '''<header class="explore-hero pt-5 mt-5 position-relative bg-dark text-white overflow-hidden" style="min-height: 450px; display: flex; align-items: center;">
<div class="position-absolute top-0 start-0 w-100 h-100 opacity-50" style="background-image: url('images/unsplash-a48072d881.webp'); background-size: cover; background-position: center;"></div>
<div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0, 0, 0, 0.65);"></div>
<div class="container-fluid px-4 px-lg-5 position-relative z-1 py-5 text-center">
<span class="badge bg-white text-dark bg-opacity-10 px-3 py-2 rounded-pill fw-medium mb-3 gs-reveal backdrop-blur">
<i class="fa-solid fa-compass me-2 text-highlight"></i>Discover What's Next
            </span>
<h1 class="display-3 fw-bolder mb-4 gs-reveal">Explore the World of <span class="text-gradient">Streamly</span></h1>
<p class="lead gs-reveal fw-light mx-auto" style="max-width: 650px; font-size: 1.25rem;">
    Dive into a universe of trending content, discover new creators, and experience live streams from across the globe in breathtaking quality.
</p>
</div>
</header>'''

if old_header in content:
    content = content.replace(old_header, new_header)
    with open('explore.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully replaced.")
else:
    print("Could not find exact old header match. Please check line breaks.")

