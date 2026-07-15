/* ==========================================================================
   Stackly - Pages Specific JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navbar Scroll Effect (Shared) ---
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 1.5 Navbar Body Scroll Lock ---
    const navbarContent = document.getElementById('navbarContent');
    if (navbarContent) {
        navbarContent.addEventListener('show.bs.collapse', () => {
            document.body.classList.add('body-no-scroll');
            document.documentElement.classList.add('body-no-scroll');
        });
        navbarContent.addEventListener('hide.bs.collapse', () => {
            document.body.classList.remove('body-no-scroll');
            document.documentElement.classList.remove('body-no-scroll');
        });
    }

    // --- 2. About Page Data Population ---
    const teamData = [
        { name: "Sarah Jenkins", role: "CEO & Co-Founder", avatar: "images/unsplash-4aa8ce792b.webp" },
        { name: "David Chen", role: "Chief Technology Officer", avatar: "images/unsplash-8b823c8980.webp" },
        { name: "Elena Rodriguez", role: "Head of Product", avatar: "images/unsplash-093d86c87d.webp" },
        { name: "Marcus Johnson", role: "Lead Designer", avatar: "images/unsplash-7b9e48b450.webp" },
        { name: "Aisha Patel", role: "VP of Engineering", avatar: "images/unsplash-fecbba7995.webp" },
        { name: "Tom Baker", role: "Head of Marketing", avatar: "images/unsplash-6066bc5a71.webp" },
        { name: "Sophie Laurent", role: "Community Director", avatar: "images/unsplash-8a1ee6574d.webp" },
        { name: "Kenji Sato", role: "Lead AI Researcher", avatar: "images/unsplash-38ae10bcc8.webp" }
    ];

    const teamGrid = document.getElementById('team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = teamData.map(member => `
            <div class="col-12 col-sm-6 col-lg-3 gs-stagger">
                <div class="team-card">
                    <img src="${member.avatar}" alt="${member.name}" class="creator-avatar mx-auto d-block">
                    <h5 class="fw-bold mb-1">${member.name}</h5>
                    <p class="text-primary small mb-3 fw-medium">${member.role}</p>
                    <div class="d-flex gap-2 justify-content-center">
                        <a href="404.html" class="text-muted hover-primary transition"><i class="fa-brands fa-linkedin fs-5"></i></a>
                        <a href="404.html" class="text-muted hover-primary transition"><i class="fa-brands fa-twitter fs-5"></i></a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- 3. Blog Page Data Population ---
    const blogData = [
        { title: "How to Build a Loyal Audience in 2026", category: "Creators", date: "July 10, 2026", readTime: "4 min", thumb: "images/unsplash-6a2bb117a7.webp", excerpt: "Discover the latest strategies top creators use to maintain high engagement." },
        { title: "Stackly Desktop App is Here", category: "Updates", date: "July 8, 2026", readTime: "3 min", thumb: "images/unsplash-caeb4c16d5.webp", excerpt: "Enjoy a native 4K streaming experience directly from your desktop. Download now." },
        { title: "The Best Cameras for Vlogging", category: "Gear", date: "July 5, 2026", readTime: "6 min", thumb: "images/unsplash-e3364f6a0a.webp", excerpt: "Our comprehensive guide to the best entry-level and professional cameras." },
        { title: "Community Guidelines Update", category: "Community", date: "July 1, 2026", readTime: "2 min", thumb: "images/unsplash-0e9ad36e00.webp", excerpt: "We're updating our guidelines to ensure a safer space for all users." },
        { title: "Monetization 101: Maximizing Revenue", category: "Creators", date: "June 28, 2026", readTime: "8 min", thumb: "images/unsplash-fdd338b223.webp", excerpt: "A deep dive into ads, memberships, and super-chats to boost your earnings." },
        { title: "Behind the Scenes at Stackly HQ", category: "Community", date: "June 25, 2026", readTime: "5 min", thumb: "images/unsplash-ad03a1ebad.webp", excerpt: "Take a tour of our new office and meet the people building the platform." },
        { title: "Mastering Video Analytics", category: "Creators", date: "June 20, 2026", readTime: "7 min", thumb: "images/unsplash-6fa775e6ab.webp", excerpt: "Learn how to read and interpret your analytics to skyrocket your growth." },
        { title: "Stackly Partner Program Expanded", category: "Updates", date: "June 15, 2026", readTime: "3 min", thumb: "images/unsplash-c493b756e8.webp", excerpt: "We've lowered the requirements for our partner program. See if you qualify." },
        { title: "Best Lighting Setups on a Budget", category: "Gear", date: "June 10, 2026", readTime: "5 min", thumb: "images/unsplash-e3364f6a0a.webp", excerpt: "You don't need to spend thousands to have incredible lighting in your videos." },
        { title: "How to Edit Faster in Premiere Pro", category: "Tutorials", date: "June 5, 2026", readTime: "6 min", thumb: "images/unsplash-0fb80d6bad.webp", excerpt: "Keyboard shortcuts and workflow hacks to cut your editing time in half." },
        { title: "Understanding the New Algorithm", category: "Updates", date: "June 1, 2026", readTime: "4 min", thumb: "images/unsplash-68868ec981.webp", excerpt: "A breakdown of how our new recommendation engine surfaces your content." },
        { title: "Top 5 Microphones for Streaming", category: "Gear", date: "May 28, 2026", readTime: "5 min", thumb: "images/unsplash-7927efa233.webp", excerpt: "Audio is half the experience. Ensure you sound crystal clear with these mics." },
        { title: "Collaborating with Other Creators", category: "Community", date: "May 22, 2026", readTime: "7 min", thumb: "images/unsplash-1b6873a3ba.webp", excerpt: "How to network, plan, and execute collaborations that benefit both channels." },
        { title: "The Future of Live Streaming", category: "Industry", date: "May 15, 2026", readTime: "9 min", thumb: "images/unsplash-706b3200a7.webp", excerpt: "Interactive overlays, low latency, and what to expect in the next 5 years." },
        { title: "Dealing with Creator Burnout", category: "Mental Health", date: "May 10, 2026", readTime: "6 min", thumb: "images/unsplash-093d86c87d.webp", excerpt: "Recognizing the signs and taking steps to protect your peace and creativity." }
    ];

    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid) {
        blogGrid.innerHTML = blogData.map(post => `
            <div class="col-12 col-md-6 col-lg-4 gs-stagger">
                <div class="blog-card d-flex flex-column">
                    <div class="blog-thumbnail overflow-hidden position-relative">
                        <img src="${post.thumb}" alt="${post.title}">
                        <span class="position-absolute top-0 start-0 m-3 badge bg-primary bg-opacity-75 backdrop-blur">${post.category}</span>
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <p class="text-muted small mb-2">${post.date} • ${post.readTime} read</p>
                        <h5 class="fw-bold mb-3">${post.title}</h5>
                        <p class="text-muted small mb-4 flex-grow-1">${post.excerpt}</p>
                        <a href="404.html" class="btn btn-outline-primary rounded-pill w-100 fw-medium mt-auto hover-scale transition">Read Article</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- 4. Contact Page Data Population ---
    const faqData = [
        { q: "How do I start creating content on Stackly?", a: "Simply click the 'Join as Creator' button on the homepage, fill out your profile, and start uploading! Our creator studio provides all the tools you need." },
        { q: "What is the revenue split for creators?", a: "We believe creators should earn the lion's share. Stackly offers an industry-leading 80/20 split on all ad revenue and premium subscriptions." },
        { q: "Is Stackly available globally?", a: "Yes, Stackly is available in over 150 countries. We utilize a globally distributed CDN to ensure fast streaming everywhere." },
        { q: "How does the AI Recommendation system work?", a: "Our proprietary AI analyzes viewing habits, watch time, and interactions to suggest content tailored specifically to your interests." },
        { q: "Can I stream in 4K?", a: "Absolutely. 4K HDR streaming is supported for all creators at no extra cost, provided your upload bandwidth can support it." }
    ];

    const faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) {
        faqAccordion.innerHTML = faqData.map((faq, index) => `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                        ${faq.q}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${faq.a}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- 5. GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Reveals
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

    // Staggered Cards (Team, Blog)
    const staggerSections = ['#team-grid', '#blog-grid', '#values-grid'];
    
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

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Since required attributes are handled by HTML5 validation,
            // reaching this point means the form is valid.
            window.location.href = '404.html';
        });
    }

});
