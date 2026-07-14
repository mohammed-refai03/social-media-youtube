/* ==========================================================================
   Stackly - Explore Page JavaScript
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

    // Live Now Data
    const liveData = [
        { title: "LCS Finals 2026", creator: "Riot Games", viewers: "250K", thumb: "images/unsplash-1744ce7337.webp", avatar: "images/unsplash-cd64d41ff5.webp" },
        { title: "24/7 Lofi Hip Hop Radio", creator: "Lofi Girl", viewers: "45K", thumb: "images/unsplash-d343e7dacc.webp", avatar: "images/unsplash-aef994154e.webp" },
        { title: "SpaceX Starship Launch", creator: "SpaceX", viewers: "1.2M", thumb: "images/unsplash-df20b887a3.webp", avatar: "images/unsplash-9b460d4656.webp" },
        { title: "Live Tech Podcast", creator: "TechBros", viewers: "12K", thumb: "images/unsplash-4666ed00d7.webp", avatar: "images/unsplash-b142125486.webp" }
    ];

    const liveGrid = document.getElementById('live-grid');
    if (liveGrid) {
        liveGrid.innerHTML = liveData.map(v => `
            <div class="col-12 col-sm-6 col-lg-3 gs-stagger">
                <div class="video-card position-relative" onclick="window.location.href='404.html'" style="cursor: pointer;">
                    <div class="video-thumbnail">
                        <img src="${v.thumb}" alt="${v.title}">
                        <div class="play-overlay">
                            <div class="play-icon-small"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <span class="duration-badge bg-danger fw-bold"><i class="fa-solid fa-circle me-1 fs-7"></i>LIVE</span>
                        <span class="position-absolute bottom-0 start-0 m-2 px-2 py-1 bg-dark bg-opacity-75 text-white rounded fs-7 fw-medium"><i class="fa-solid fa-user me-1 text-danger"></i>${v.viewers}</span>
                    </div>
                    <div class="p-3">
                        <div class="d-flex gap-3">
                            <img src="${v.avatar}" alt="${v.creator}" class="rounded-circle" width="40" height="40" style="object-fit: cover;">
                            <div class="flex-grow-1 overflow-hidden">
                                <h6 class="mb-1 fw-bold text-truncate text-danger" title="${v.title}">${v.title}</h6>
                                <p class="mb-0 text-muted small">${v.creator} <i class="fa-solid fa-circle-check text-primary fs-7"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Categories Data
    const exploreCats = [
        { name: "Music", img: "images/unsplash-0c8baaa01d.webp" },
        { name: "Gaming", img: "images/unsplash-d0ee836b93.webp" },
        { name: "Education", img: "images/unsplash-05a47422d1.webp" },
        { name: "News", img: "images/unsplash-1b6873a3ba.webp" },
        { name: "Sports", img: "images/unsplash-81fd3522ac.webp" },
        { name: "Fashion", img: "images/unsplash-68868ec981.webp" },
        { name: "Comedy", img: "images/unsplash-9f9f78f838.webp" },
        { name: "Tech", img: "images/unsplash-689ccd59f3.webp" }
    ];

    const catGrid = document.getElementById('explore-categories-grid');
    if (catGrid) {
        catGrid.innerHTML = exploreCats.map(c => `
            <div class="col-6 col-md-4 col-lg-3 gs-stagger">
                <div class="explore-cat-card position-relative rounded-4 overflow-hidden shadow-sm group-hover-zoom" style="height: 120px; cursor: pointer;" onclick="window.location.href='404.html'">
                    <img src="${c.img}" alt="${c.name}" class="w-100 h-100" style="object-fit: cover;">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 hover-bg-dark transition">
                        <h5 class="text-white fw-bold mb-0 shadow-sm">${c.name}</h5>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Top Charts
    const chartsData = [
        { rank: 1, title: "Midnight City (Remastered)", creator: "M83", thumb: "images/midnight-city.webp" },
        { rank: 2, title: "Blinding Lights", creator: "The Weeknd", thumb: "images/unsplash-f4497a0b09.webp" },
        { rank: 3, title: "Levitating", creator: "Dua Lipa", thumb: "images/unsplash-d0f6620fda.webp" },
        { rank: 4, title: "Watermelon Sugar", creator: "Harry Styles", thumb: "images/unsplash-10f7b90ea9.webp" },
        { rank: 5, title: "Stay", creator: "Kid Laroi", thumb: "images/stay-song.webp" },
        { rank: 6, title: "Peaches", creator: "Justin Bieber", thumb: "images/unsplash-cf811f8663.webp" }
    ];

    const chartsContainer = document.getElementById('charts-container');
    if (chartsContainer) {
        chartsContainer.innerHTML = chartsData.map(c => `
            <div class="chart-card bg-white rounded-3 shadow-sm d-flex align-items-center p-2" style="min-width: 350px; cursor: pointer;">
                <div class="fw-bold fs-3 text-muted px-3 opacity-50">${c.rank}</div>
                <img src="${c.thumb}" alt="Cover" class="rounded" width="80" height="80" style="object-fit: cover;">
                <div class="ms-3 overflow-hidden">
                    <h6 class="fw-bold mb-1 text-truncate">${c.title}</h6>
                    <p class="small text-muted mb-0">${c.creator}</p>
                </div>
                <button class="btn btn-link text-primary ms-auto"><i class="fa-solid fa-play-circle fs-3"></i></button>
            </div>
        `).join('');
    }

    const btnChartNext = document.getElementById('charts-next');
    const btnChartPrev = document.getElementById('charts-prev');
    if (btnChartNext && btnChartPrev && chartsContainer) {
        btnChartNext.addEventListener('click', () => {
            chartsContainer.scrollBy({ left: 350, behavior: 'smooth' });
        });
        btnChartPrev.addEventListener('click', () => {
            chartsContainer.scrollBy({ left: -350, behavior: 'smooth' });
        });
    }

    // Gaming Hub
    const gamingData = [
        { title: "Valorant Radiant Ranked Match", creator: "Tenz", views: "300K", time: "5 hrs ago", duration: "42:15", thumb: "images/unsplash-1744ce7337.webp", avatar: "images/unsplash-7927efa233.webp" },
        { title: "Minecraft 1.25 Speedrun Record", creator: "Dream", views: "1.1M", time: "1 day ago", duration: "18:04", thumb: "images/minecraft.webp", avatar: "images/unsplash-aef994154e.webp" },
        { title: "GTA 6 Trailer Breakdown", creator: "IGN", views: "5.5M", time: "2 days ago", duration: "10:30", thumb: "images/unsplash-d343e7dacc.webp", avatar: "images/unsplash-9b460d4656.webp" },
        { title: "Apex Legends Pro Tourney", creator: "ALGS", views: "120K", time: "3 days ago", duration: "2:45:00", thumb: "images/unsplash-c8741873ee.webp", avatar: "images/unsplash-cd64d41ff5.webp" }
    ];

    const gamingGrid = document.getElementById('gaming-grid');
    if (gamingGrid) {
        gamingGrid.innerHTML = gamingData.map(v => `
            <div class="col-12 col-sm-6 col-lg-3 gs-stagger">
                <div class="video-card border-primary border-opacity-25" onclick="window.location.href='404.html'" style="cursor: pointer;">
                    <div class="video-thumbnail">
                        <img src="${v.thumb}" alt="${v.title}">
                        <div class="play-overlay">
                            <div class="play-icon-small"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <span class="duration-badge bg-primary">${v.duration}</span>
                    </div>
                    <div class="p-3">
                        <div class="d-flex gap-3">
                            <img src="${v.avatar}" alt="${v.creator}" class="rounded-circle" width="40" height="40" style="object-fit: cover;">
                            <div class="flex-grow-1 overflow-hidden">
                                <h6 class="mb-1 fw-bold text-truncate" title="${v.title}">${v.title}</h6>
                                <p class="mb-0 text-muted small">${v.creator} <i class="fa-solid fa-circle-check text-primary fs-7"></i></p>
                                <p class="mb-0 text-muted small">${v.views} views • ${v.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Discover Creators
    const discoverData = [
        { name: "Code & Coffee", subs: "120K", type: "Programming", avatar: "images/unsplash-093d86c87d.webp" },
        { name: "Urban Explorer", subs: "45K", type: "Travel", avatar: "images/unsplash-6066bc5a71.webp" },
        { name: "Design Studio", subs: "300K", type: "Design", avatar: "images/unsplash-b5c39b5f33.webp" },
        { name: "Fitness Daily", subs: "89K", type: "Health", avatar: "images/unsplash-38ae10bcc8.webp" }
    ];

    const discoverGrid = document.getElementById('discover-creators-grid');
    if (discoverGrid) {
        discoverGrid.innerHTML = discoverData.map(c => `
            <div class="col-12 col-sm-6 col-lg-3 gs-stagger">
                <div class="creator-card">
                    <img src="${c.avatar}" alt="${c.name}" class="creator-avatar mx-auto d-block">
                    <h5 class="fw-bold mb-1">${c.name}</h5>
                    <p class="text-muted small mb-2">${c.type} • ${c.subs} subs</p>
                    <button class="btn btn-outline-primary rounded-pill w-100 fw-medium mt-2">Follow</button>
                </div>
            </div>
        `).join('');
    }


    // --- 3. GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Entrance
    gsap.from("#mainNav", { y: -100, opacity: 0, duration: 1, ease: "power3.out" });

    // Hero Section Reveal
    const heroTl = gsap.timeline();
    heroTl.from(".gs-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2
    });

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

    // Staggered Cards (Live, Categories, Gaming, Creators)
    const staggerSections = ['#live-grid', '#explore-categories-grid', '#gaming-grid', '#discover-creators-grid'];
    
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
