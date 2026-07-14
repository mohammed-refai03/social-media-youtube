/* ==========================================================================
   Stackly - Global Advanced Animations (Cursor, Magnetic, Parallax, etc.)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {



    // --- 2. Magnetic Buttons ---
    const magneticBtns = document.querySelectorAll('.btn, .social-icon');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            if (typeof gsap !== 'undefined') {
                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        btn.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        });
    });

    // --- 3. 3D Card Tilt ---
    const tiltCards = document.querySelectorAll('.feature-card, .blog-card, .team-card, .video-card');
    tiltCards.forEach(card => {
        card.classList.add('tilt-card');
        const innerElements = card.children;
        Array.from(innerElements).forEach(child => child.classList.add('tilt-card-inner'));

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });

    // --- 4. Parallax Backgrounds ---
    const parallaxBgs = document.querySelectorAll('.position-absolute.top-0');
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        parallaxBgs.forEach(bg => {
            if(bg.style.backgroundImage) {
                // If the element has background-attachment: fixed, it's already CSS parallaxed
                if (window.getComputedStyle(bg).backgroundAttachment === 'fixed') return;
                
                // Make sure the element is a bit taller and shifted so it doesn't show edges
                bg.style.height = '120%';
                bg.style.top = '-10%';
                
                gsap.to(bg, {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: bg.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        });
    }

    // --- 5. Prevent default jump for dummy links ---
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
    });

});
