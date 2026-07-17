/**
 * Aadi Shakti Electrical & Plumbing Services - Main JavaScript
 * Custom animations and interactions with advanced GSAP effects
 */

document.addEventListener('DOMContentLoaded', function () {
    // Register ScrollTrigger and SplitText plugins
    gsap.registerPlugin(ScrollTrigger);

    // ===== HERO SECTION ANIMATIONS =====
    // Animate hero title with character animation
    gsap.fromTo('.hero-title',
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power3.out', 
            delay: 0.2 
        }
    );

    // Staggered text animation
    gsap.fromTo('.hero-text',
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power3.out', 
            delay: 0.5 
        }
    );

    // Button entrance with scale effect
    gsap.fromTo('.hero-btn-box',
        { opacity: 0, y: 20, scale: 0.95 },
        { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.6, 
            ease: 'back.out(1.7)', 
            delay: 0.8 
        }
    );

    // Hero images with parallax effect
    gsap.fromTo('.hero-image-box',
        { opacity: 0, scale: 0.9, y: 30 },
        { 
            opacity: 1, 
            scale: 1,
            y: 0, 
            duration: 1, 
            ease: 'power3.out', 
            delay: 0.3 
        }
    );

    // ===== SECTION TITLE ANIMATIONS =====
    // Animate all section subtitles with slide in effect
    gsap.utils.toArray('.section-subtitle-box').forEach((box) => {
        gsap.fromTo(box,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: 'power3.out',
                delay: 0.1,
                scrollTrigger: {
                    trigger: box,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Scroll-triggered animations for section titles
    gsap.utils.toArray('.section-title-box').forEach((section) => {
        gsap.fromTo(section,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // ===== SERVICE BLOCKS ANIMATION WITH STAGGER =====
    gsap.utils.toArray('.service-block-box, .service-block').forEach((block, i) => {
        gsap.fromTo(block,
            { opacity: 0, y: 40, rotation: -2 },
            {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.7,
                delay: i * 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Service block hover effect
    document.querySelectorAll('.service-block, .service-block-box').forEach(block => {
        block.addEventListener('mouseenter', function () {
            gsap.to(this, { 
                y: -10, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });

        block.addEventListener('mouseleave', function () {
            gsap.to(this, { 
                y: 0, 
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });
    });

    // ===== TEAM MEMBERS ANIMATION WITH HOVER EFFECTS =====
    gsap.utils.toArray('.team-block').forEach((block, i) => {
        // Initial entrance animation
        gsap.fromTo(block,
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay: i * 0.12,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Hover effect - lift and glow
        block.addEventListener('mouseenter', function () {
            gsap.to(this, { 
                y: -15, 
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });

        block.addEventListener('mouseleave', function () {
            gsap.to(this, { 
                y: 0, 
                boxShadow: 'none', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });
    });

    // ===== STATS/FUN FACTS ANIMATION WITH NUMBER COUNTER =====
    gsap.utils.toArray('.fun-fact-block, .counter-box').forEach((block, i) => {
        gsap.fromTo(block,
            { opacity: 0, scale: 0.85, rotation: -5 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.7,
                delay: i * 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Add hover effect
        block.addEventListener('mouseenter', function () {
            gsap.to(this, { 
                scale: 1.05, 
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });

        block.addEventListener('mouseleave', function () {
            gsap.to(this, { 
                scale: 1, 
                boxShadow: 'none', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });
    });

    // ===== PRICING CARDS ANIMATION =====
    gsap.utils.toArray('.pricing-plan-box, .pricing-block').forEach((block, i) => {
        gsap.fromTo(block,
            { opacity: 0, y: 50, skewY: 5 },
            {
                opacity: 1,
                y: 0,
                skewY: 0,
                duration: 0.7,
                delay: i * 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Pricing card hover effect
        block.addEventListener('mouseenter', function () {
            gsap.to(this, { 
                y: -20, 
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });

        block.addEventListener('mouseleave', function () {
            gsap.to(this, { 
                y: 0, 
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });
    });

    // ===== COUNTER ANIMATION WITH NUMBER INCREMENT =====
    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
        if (isNaN(target)) return;

        const suffix = element.textContent.replace(/[0-9]/g, '');
        gsap.fromTo(element,
            { innerText: 0 },
            {
                innerText: target,
                duration: 2.5,
                ease: 'power2.out',
                snap: { innerText: 1 },
                onUpdate: function () {
                    element.textContent = Math.round(gsap.getProperty(element, 'innerText')) + suffix;
                },
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Animate count numbers
    document.querySelectorAll('.fun-fact-count, .fun-fact-count-st, .counter-value').forEach(animateCounter);

    // Mobile menu functionality
    const menuButton = document.querySelector('.mobile-menu-open-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu-close-btn');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.add('active');
        });
    }

    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    }

    // Close mobile menu when a link is clicked
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                gsap.to(header, { boxShadow: '0 5px 20px rgba(0,0,0,0.1)', duration: 0.3 });
            } else {
                header.classList.remove('scrolled');
                gsap.to(header, { boxShadow: 'none', duration: 0.3 });
            }
        });
    }

    // ===== ADDITIONAL ADVANCED ANIMATIONS =====

    // Animate about section with parallax effect
    gsap.fromTo('.about-content-box',
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        }
    );

    gsap.fromTo('.about-image-box',
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        }
    );

    // Animate project cards with scale effect
    gsap.utils.toArray('.project-slide, .project-block').forEach((block, i) => {
        gsap.fromTo(block,
            { opacity: 0, scale: 0.9, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                delay: i * 0.1,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Testimonial blocks animation
    gsap.utils.toArray('.testimonial-block').forEach((block, i) => {
        gsap.fromTo(block,
            { opacity: 0, y: 40, rotation: -2 },
            {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Contact form animation with stagger
    gsap.utils.toArray('.contact-form-group').forEach((group, i) => {
        gsap.fromTo(group,
            { opacity: 0, x: 30, y: 20 },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.5,
                delay: i * 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // CTA section with scale and fade
    gsap.fromTo('.call-to-action',
        { opacity: 0, scale: 0.95 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.call-to-action',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    gsap.fromTo('.cta-content',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
                trigger: '.call-to-action',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    // News/Blog cards animation
    gsap.utils.toArray('.news-block').forEach((block, i) => {
        gsap.fromTo(block,
            { opacity: 0, y: 40, rotation: 3 },
            {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.6,
                delay: i * 0.12,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Hover effect for news blocks
        block.addEventListener('mouseenter', function () {
            gsap.to(this, { 
                y: -10, 
                boxShadow: '0 20px 45px rgba(0,0,0,0.15)', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });

        block.addEventListener('mouseleave', function () {
            gsap.to(this, { 
                y: 0, 
                boxShadow: 'none', 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });
    });

    // Footer animation
    gsap.fromTo('.main-footer',
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.main-footer',
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        }
    );

    // ===== BUTTON ANIMATIONS =====
    // Animate all buttons with hover effect
    document.querySelectorAll('.theme-button, .w-button').forEach(button => {
        button.addEventListener('mouseenter', function () {
            gsap.to(this, { 
                scale: 1.05, 
                duration: 0.2, 
                ease: 'power2.out' 
            });
        });

        button.addEventListener('mouseleave', function () {
            gsap.to(this, { 
                scale: 1, 
                duration: 0.2, 
                ease: 'power2.out' 
            });
        });
    });

    // ===== IMAGE ANIMATIONS =====
    // Lazy load images with fade in animation
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', function () {
            gsap.from(this, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });

    // Animate all images on scroll
    gsap.utils.toArray('img').forEach(img => {
        if (!img.classList.contains('no-animate')) {
            gsap.fromTo(img,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    });

    // Hero slider images with rotation
    document.querySelectorAll('.hero-image').forEach((img, i) => {
        gsap.fromTo(img,
            { opacity: 0, rotateY: 90 },
            {
                opacity: 1,
                rotateY: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: i * 0.2
            }
        );
    });

    console.log('Aadi Shakti Electrical & Plumbing Services - Advanced GSAP Animations Loaded Successfully!');
});
