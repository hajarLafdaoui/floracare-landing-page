// Preloader animation
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const text = "FloraCare";
    const preloaderText = document.getElementById('preloaderText');
    preloaderText.innerHTML = "";

    // Animate icon in
    gsap.fromTo('.preloader-icon', {
        opacity: 0,
        scale: 0.7
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: function() {
            // Animate text letter by letter
            let tl = gsap.timeline({onComplete: fadeOutPreloader});
            for (let i = 0; i < text.length; i++) {
                let span = document.createElement('span');
                span.textContent = text[i];
                span.style.opacity = 0;
                preloaderText.appendChild(span);
                tl.to(span, {
                    opacity: 1,
                    duration: 0.12,
                    ease: 'power1.out'
                }, "+=0.08");
            }
            function fadeOutPreloader() {
                gsap.to('.preloader-logo', {
                    opacity: 0,
                    y: -20,
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'power2.inOut',
                    onComplete: function() {
                        preloader.classList.add('hidden');
                        document.getElementById('app').style.display = 'block';
                        initVueApp();
                    }
                });
            }
        }
    });
});

function initVueApp() {
    const app = new Vue({
        el: '#app',
        data: {
            isScrolled: false,
            headerVisible: false,
            testimonials: [
                {
                    text: "FloraCare completely transformed my indoor jungle! Their team is knowledgeable, punctual, and truly cares about the plants. My home has never looked more vibrant.",
                    name: "Sarah Johnson",
                    position: "Homeowner, Seattle",
                    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                    text: "As a busy professional, I had no time for my garden. FloraCare brought it back to life and now it's the envy of the neighborhood. Worth every penny!",
                    name: "Michael Chen",
                    position: "Software Engineer, San Francisco",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                    text: "Their irrigation system saved my plants during the heatwave. I was about to give up on gardening, but FloraCare made it possible again. Highly recommended!",
                    name: "Emma Rodriguez",
                    position: "Teacher, Austin",
                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                    text: "The personalized care plan they created for my exotic plants was exceptional. I've seen more growth in 3 months than in the previous year. Truly experts!",
                    name: "David Kim",
                    position: "Plant Collector, Miami",
                    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                    text: "FloraCare helped me create a sustainable garden that thrives with minimal water. Their eco-friendly approach is exactly what I was looking for!",
                    name: "Sophia Williams",
                    position: "Environmental Scientist, Portland",
                    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                    text: "After moving to a new home, I needed help with my neglected backyard. FloraCare transformed it into a beautiful oasis in just two months!",
                    name: "James Wilson",
                    position: "Architect, Denver",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                    text: "The team at FloraCare has been maintaining our office plants for over a year now. Our workspace has never looked better, and the plants are thriving!",
                    name: "Olivia Martinez",
                    position: "Office Manager, Chicago",
                    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=100&h=100&q=80"
                }
            ],
            currentTestimonial: 0,
            testimonialInterval: null,
            testimonialsPerView: 2,
            currentTestimonialSet: 0
        },
        computed: {
            visibleTestimonials() {
                const arr = [];
                for (let i = 0; i < this.testimonialsPerView; i++) {
                    arr.push(
                        this.testimonials[
                            (this.currentTestimonialSet + i) % this.testimonials.length
                        ]
                    );
                }
                return arr;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            
            // Initialize GSAP animations
            this.initAnimations();
            
            // Start testimonial carousel
            this.startCarousel();
        },
        methods: {
            handleScroll() {
                this.isScrolled = window.scrollY > 50;
            },
            initAnimations() {
                // Register ScrollTrigger plugin
                gsap.registerPlugin(ScrollTrigger);
                
                // Header animation
                gsap.to('header', {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    onComplete: () => {
                        this.headerVisible = true;
                    }
                });
                
                // Logo and CTA button animations
                gsap.to('.logo', {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    delay: 0.3,
                    ease: 'power2.out'
                });
                
                gsap.to('.cta-button', {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    delay: 0.5,
                    ease: 'power2.out'
                });
                
                // Hero section animation
                gsap.to('#hero', {
                    duration: 0.5,
                    opacity: 1,
                    onComplete: () => {
                        // Hero title animation
                        gsap.to('.hero-title', {
                            duration: 1,
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            ease: 'power3.out'
                        });
                        
                        // Hero subtitle animation
                        gsap.to('.hero-subtitle', {
                            duration: 0.8,
                            opacity: 1,
                            y: 0,
                            delay: 0.4,
                            ease: 'power2.out'
                        });
                        
                        // Hero buttons animation
                        gsap.to('.hero-buttons', {
                            duration: 0.8,
                            opacity: 1,
                            y: 0,
                            delay: 0.6,
                            ease: 'power2.out'
                        });
                        
                        // Hero image animation
                        gsap.to('.hero-image', {
                            duration: 1.2,
                            opacity: 1,
                            x: 0,
                            delay: 0.8,
                            ease: 'power3.out'
                        });
                    }
                });
                
                // Features title animation
                gsap.to('.section-title', {
                    scrollTrigger: {
                        trigger: '.features',
                        start: 'top 90%'
                    },
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out'
                });
                
                // Features animation
                gsap.to('.feature-card', {
                    scrollTrigger: {
                        trigger: '.features',
                        start: 'top 80%'
                    },
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    ease: 'power2.out'
                });
                
                // Steps animation
                gsap.to('.step', {
                    scrollTrigger: {
                        trigger: '.how-it-works',
                        start: 'top 80%'
                    },
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    stagger: 0.3,
                    ease: 'power2.out'
                });
                
                // Testimonial animation
                gsap.to('.testimonial-card', {
                    scrollTrigger: {
                        trigger: '.testimonials',
                        start: 'top 80%'
                    },
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out'
                });
                
                // CTA animation
                gsap.to('.cta-section', {
                    scrollTrigger: {
                        trigger: '.cta-section',
                        start: 'top 90%'
                    },
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.to('.cta-form', {
                            duration: 0.8,
                            opacity: 1,
                            y: 0,
                            delay: 0.2,
                            ease: 'power2.out'
                        });
                    }
                });
                
                // Footer animation
                gsap.to('footer', {
                    scrollTrigger: {
                        trigger: 'footer',
                        start: 'top 90%'
                    },
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out'
                });
            },
            startCarousel() {
                this.testimonialInterval = setInterval(() => {
                    this.nextTestimonialSet();
                }, 3000);
            },
            nextTestimonialSet() {
                this.currentTestimonialSet =
                    (this.currentTestimonialSet + 1) % this.testimonials.length;
            },
            prevTestimonialSet() {
                this.currentTestimonialSet =
                    (this.currentTestimonialSet - 1 + this.testimonials.length) % this.testimonials.length;
            }
        },
        beforeDestroy() {
            clearInterval(this.testimonialInterval);
        }
    });
}