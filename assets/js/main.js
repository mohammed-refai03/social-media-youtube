/* ==========================================================================
   Stackly - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navbar Scroll Effect ---
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Data Population ---

    // Categories Data
    const categories = [
        { icon: 'fa-fire', name: 'All', active: true },
        { icon: 'fa-music', name: 'Music' },
        { icon: 'fa-gamepad', name: 'Gaming' },
        { icon: 'fa-graduation-cap', name: 'Education' },
        { icon: 'fa-microchip', name: 'Technology' },
        { icon: 'fa-plane', name: 'Travel' },
        { icon: 'fa-mug-hot', name: 'Lifestyle' },
        { icon: 'fa-basketball', name: 'Sports' },
        { icon: 'fa-masks-theater', name: 'Comedy' },
        { icon: 'fa-film', name: 'Movies' },
        { icon: 'fa-newspaper', name: 'News' }
    ];

    const catContainer = document.getElementById('categories-container');
    if (catContainer) {
        catContainer.innerHTML = categories.map(c => `
            <button class="category-chip ${c.active ? 'active' : ''}">
                <i class="fa-solid ${c.icon} me-2"></i> ${c.name}
            </button>
        `).join('');

        // Add click event for chips
        const chips = catContainer.querySelectorAll('.category-chip');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            });
        });
    }

    // Video Data
    const videoData = [
        { id: 1, title: "Building a Next-Gen Web App in 2026", creator: "DevMaster", views: "1.2M", time: "2 hours ago", duration: "18:45", thumb: "images/unsplash-caeb4c16d5.webp", avatar: "images/unsplash-f6bf77a26e.webp", verified: true },
        { id: 2, title: "Top 10 Hidden Gems in Japan", creator: "Travel Diaries", views: "850K", time: "5 hours ago", duration: "24:10", thumb: "images/unsplash-6e1ece4bc6.webp", avatar: "images/unsplash-f50e3e5cb8.webp", verified: true },
        { id: 3, title: "Modern Interior Design Trends", creator: "Home & Style", views: "420K", time: "1 day ago", duration: "12:30", thumb: "images/unsplash-7f0b75525e.webp", avatar: "images/unsplash-2e7ba71d3c.webp", verified: false },
        { id: 4, title: "Advanced CSS Animations Tutorial", creator: "CodeNinja", views: "210K", time: "2 days ago", duration: "45:00", thumb: "images/unsplash-706b3200a7.webp", avatar: "images/unsplash-b142125486.webp", verified: true },
        { id: 5, title: "The Ultimate Gaming Setup 2026", creator: "TechReviewer", views: "3.4M", time: "3 days ago", duration: "15:20", thumb: "images/unsplash-1744ce7337.webp", avatar: "images/unsplash-9db82641d6.webp", verified: true },
        { id: 6, title: "Healthy Meal Prep for the Week", creator: "FitLife", views: "900K", time: "4 days ago", duration: "20:15", thumb: "images/unsplash-3a547a7ea6.webp", avatar: "images/unsplash-e41a0860d4.webp", verified: false },
        { id: 7, title: "Electric Cars: What to expect", creator: "AutoVision", views: "1.5M", time: "1 week ago", duration: "28:40", thumb: "images/unsplash-a586c485f7.webp", avatar: "images/unsplash-9b460d4656.webp", verified: true },
        { id: 8, title: "Lo-Fi Beats to Relax/Study to", creator: "Chill Vibes", views: "10M+", time: "Live", duration: "LIVE", thumb: "images/unsplash-d343e7dacc.webp", avatar: "images/unsplash-aef994154e.webp", verified: true }
    ];

    const createVideoCard = (v) => `
        <div class="col-12 col-sm-6 col-lg-3 video-card-wrapper gs-stagger">
            <div class="video-card" onclick="window.location.href='404.html'" style="cursor: pointer;">
                <div class="video-thumbnail">
                    <img src="${v.thumb}" alt="${v.title}">
                    <div class="play-overlay">
                        <div class="play-icon-small"><i class="fa-solid fa-play"></i></div>
                    </div>
                    <span class="duration-badge ${v.duration === 'LIVE' ? 'bg-danger' : ''}">${v.duration}</span>
                </div>
                <div class="p-3">
                    <div class="d-flex gap-3">
                        <img src="${v.avatar}" alt="${v.creator}" class="rounded-circle" width="40" height="40" style="object-fit: cover;">
                        <div class="flex-grow-1 overflow-hidden">
                            <h6 class="mb-1 fw-bold text-truncate" title="${v.title}">${v.title}</h6>
                            <p class="mb-0 text-muted small d-flex align-items-center gap-1">
                                ${v.creator} ${v.verified ? '<i class="fa-solid fa-circle-check text-primary fs-7"></i>' : ''}
                            </p>
                            <p class="mb-0 text-muted small">${v.views} views • ${v.time}</p>
                        </div>
                        <button class="btn btn-link text-muted p-0 shadow-none"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const trendingGrid = document.getElementById('trending-grid');
    if (trendingGrid) {
        trendingGrid.innerHTML = videoData.map(createVideoCard).join('');
    }

    const recommendedGrid = document.getElementById('recommended-grid');
    if (recommendedGrid) {
        // Reverse array for recommended
        recommendedGrid.innerHTML = [...videoData].reverse().map(createVideoCard).join('');
    }

    // Shorts Data
    const shortsData = [
        { title: "Crazy Gaming Setup", creator: "TechBro", views: "2M", thumb: "images/unsplash-8f59b8cc74.webp" },
        { title: "Quick CSS Trick", creator: "CodeNinja", views: "800K", thumb: "images/unsplash-0fb80d6bad.webp" },
        { title: "Sunset Timelapse", creator: "NatureLove", views: "1.5M", thumb: "images/unsplash-0b3fdd0f4b.webp" },
        { title: "Street Food Tour", creator: "Foodie", views: "4M", thumb: "images/unsplash-e5a61d623a.webp" },
        { title: "Workout Motivation", creator: "FitLife", views: "1.2M", thumb: "images/unsplash-e6bb15eea0.webp" },
        { title: "Piano Cover", creator: "MusicMaker", views: "500K", thumb: "images/unsplash-b64d7cdf0b.webp" },
        { title: "DIY Room Decor", creator: "Crafty", views: "3M", thumb: "images/unsplash-a9443d8012.webp" },
        { title: "Funny Cat Moment", creator: "PetLovers", views: "10M", thumb: "images/unsplash-7761e194b5.webp" },
    ];

    const shortsContainer = document.getElementById('shorts-container');
    if (shortsContainer) {
        shortsContainer.innerHTML = shortsData.map(s => `
            <div class="short-card" onclick="window.location.href='404.html'" style="cursor: pointer;">
                <img src="${s.thumb}" alt="${s.title}" class="short-img">
                <div class="short-overlay text-white">
                    <h6 class="fw-bold mb-1 text-truncate text-white">${s.title}</h6>
                    <p class="small mb-2 opacity-75">${s.views} views</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="small fw-medium">${s.creator}</span>
                        <div class="d-flex gap-2">
                            <i class="fa-solid fa-thumbs-up"></i>
                            <i class="fa-solid fa-comment"></i>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Shorts scrolling
    const btnNext = document.getElementById('shorts-next');
    const btnPrev = document.getElementById('shorts-prev');
    if (btnNext && btnPrev && shortsContainer) {
        btnNext.addEventListener('click', () => {
            shortsContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
        btnPrev.addEventListener('click', () => {
            shortsContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    // Creators Data
    const creatorsData = [
        { name: "TechVision", subs: "2.4M", type: "Technology", avatar: "images/unsplash-347ff20b77.webp" },
        { name: "Sarah Jenkins", subs: "1.8M", type: "Lifestyle", avatar: "images/unsplash-4aa8ce792b.webp" },
        { name: "GameKnight", subs: "5.1M", type: "Gaming", avatar: "images/unsplash-7b9e48b450.webp" },
        { name: "Chef Studio", subs: "850K", type: "Cooking", avatar: "images/unsplash-82a6eb2a7f.webp" },
    ];

    const creatorsGrid = document.getElementById('creators-grid');
    if (creatorsGrid) {
        creatorsGrid.innerHTML = creatorsData.map(c => `
            <div class="col-12 col-sm-6 col-lg-3 gs-stagger">
                <div class="creator-card">
                    <img src="${c.avatar}" alt="${c.name}" class="creator-avatar mx-auto d-block">
                    <h5 class="fw-bold mb-1">${c.name} <i class="fa-solid fa-circle-check text-primary fs-7"></i></h5>
                    <p class="text-muted small mb-2">${c.type} • ${c.subs} subscribers</p>
                    <p class="text-muted small mb-4">Creating amazing content for the community.</p>
                    <button class="btn btn-outline-primary rounded-pill w-100 fw-medium">Follow</button>
                </div>
            </div>
        `).join('');
    }

    // Features Data
    const featuresData = [
        { icon: 'fa-brain', title: 'AI Recommendations', desc: 'Our smart algorithm learns what you love and suggests videos tailored specifically for you.' },
        { icon: 'fa-bolt', title: 'Lightning Fast Streaming', desc: 'Experience zero buffering with our globally distributed CDN delivering up to 4K HDR quality.' },
        { icon: 'fa-mobile-screen-button', title: 'Cross Device Sync', desc: 'Start watching on your phone, finish on your TV. Your progress is synced instantly.' },
        { icon: 'fa-moon', title: 'Sleek Dark Mode', desc: 'Easy on the eyes. Our beautifully designed dark mode activates automatically based on your system preference.' }
    ];

    const featuresGrid = document.getElementById('features-grid');
    if (featuresGrid) {
        featuresGrid.innerHTML = featuresData.map(f => `
            <div class="col-12 col-md-6 col-lg-3 gs-stagger">
                <div class="feature-card text-center">
                    <div class="feature-icon mx-auto">
                        <i class="fa-solid ${f.icon}"></i>
                    </div>
                    <h5 class="fw-bold mb-3">${f.title}</h5>
                    <p class="text-muted">${f.desc}</p>
                </div>
            </div>
        `).join('');
    }


    // --- 3. GSAP Animations ---

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Entrance
    gsap.from("#mainNav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Hero Section Reveal
    const heroTl = gsap.timeline();
    heroTl.from(".gs-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2
    })
    .from(".gs-reveal-card", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    .from(".gs-float", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.5)"
    }, "-=0.3")
    .from(".gs-float-delayed", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.5)"
    }, "-=0.2");

    // Scroll Fade Up Elements
    gsap.utils.toArray('.gs-fade-up').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Staggered Cards (Trending, Recommended, Features, Creators)
    const staggerSections = ['#trending-grid', '#recommended-grid', '#features-grid', '#creators-grid'];
    
    staggerSections.forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            gsap.from(container.querySelectorAll('.gs-stagger'), {
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    });

    // Animated Counters
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        gsap.to(counter, {
            scrollTrigger: {
                trigger: ".stats-section",
                start: "top 75%",
            },
            innerHTML: counter.getAttribute('data-target'),
            duration: 2.5,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function() {
                counter.innerHTML = Math.ceil(this.targets()[0].innerHTML);
            }
        });
    });
    
    // Stats Icons reveal
    gsap.from(".gs-stat", {
        scrollTrigger: {
            trigger: ".stats-section",
            start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


    // Carousel Animation Trigger
    const heroCarousel = document.getElementById('heroSlider');
    if (heroCarousel && typeof gsap !== 'undefined') {
        heroCarousel.addEventListener('slid.bs.carousel', function (e) {
            const activeSlide = e.relatedTarget;
            const elementsToAnimate = activeSlide.querySelectorAll('.gs-reveal, .gs-reveal-card');
            gsap.fromTo(elementsToAnimate, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', overwrite: true });
        });
    }
