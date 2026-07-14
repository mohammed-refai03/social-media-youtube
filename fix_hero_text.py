import os

with open('explore.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_header = '''<header class="explore-hero pt-5 mt-5 position-relative bg-dark text-white overflow-hidden" style="min-height: 450px; display: flex; align-items: center;">
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

new_header = '''<header class="explore-hero pt-5 mt-5 position-relative bg-dark overflow-hidden" style="min-height: 450px; display: flex; align-items: center;">
<div class="position-absolute top-0 start-0 w-100 h-100" style="background-image: url('images/unsplash-f108017f1d.webp'); background-size: cover; background-position: center;"></div>
<div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0, 0, 0, 0.45);"></div>
<div class="container-fluid px-4 px-lg-5 position-relative z-1 py-5 text-center w-100">
<span class="badge bg-white text-white bg-opacity-25 px-3 py-2 rounded-pill fw-medium mb-3 gs-reveal backdrop-blur">
<i class="fa-solid fa-compass me-2 text-highlight"></i>Discover What's Next
            </span>
<h1 class="display-3 fw-bolder mb-4 text-white gs-reveal">Explore the World of <span class="text-gradient">Streamly</span></h1>
<p class="lead gs-reveal fw-light text-white mx-auto" style="max-width: 650px; font-size: 1.25rem; opacity: 0.9;">
    Dive into a universe of trending content, discover new creators, and experience live streams from across the globe in breathtaking quality.
</p>
</div>
</header>'''

if old_header in content:
    content = content.replace(old_header, new_header)
    with open('explore.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully replaced header with aligned, visible white text and better overlay.")
else:
    print("Could not find exact old header match.")

