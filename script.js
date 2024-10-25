document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const statsContents = document.querySelectorAll('.stats-content');
    let currentSlide = 0;

    function animateCounter(counter, target) {
        let current = parseInt(counter.textContent);
        const increment = (target - current) / 50;
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.round(current);
            if (Math.abs(target - current) < 1) {
                clearInterval(timer);
                counter.textContent = target;
            }
        }, 20);
    }

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        statsContents[currentSlide].classList.remove('active');
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        statsContents[index].classList.add('active');
        
        const counters = statsContents[index].querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
        });
        
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    showSlide(0);

    const videoPlayButton = document.querySelector('.video-play-button');
    const videoOverlay = document.querySelector('.video-overlay');
    const closeVideoButton = document.querySelector('.close-video-button');
    const heroVideo = document.getElementById('hero-video');
    
    if (videoPlayButton && videoOverlay && closeVideoButton && heroVideo) {
        videoPlayButton.addEventListener('click', () => {
            videoOverlay.classList.add('active');
            heroVideo.play();
        });

        closeVideoButton.addEventListener('click', () => {
            videoOverlay.classList.remove('active');
            heroVideo.pause();
            heroVideo.currentTime = 0;
        });
    }

    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-section .dot');
    let currentTestimonialSlide = 0;

    function showTestimonialSlide(index) {
        testimonialSlides[currentTestimonialSlide].classList.remove('active');
        testimonialDots[currentTestimonialSlide].classList.remove('active');
        
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        
        currentTestimonialSlide = index;
    }

    function nextTestimonialSlide() {
        let nextIndex = (currentTestimonialSlide + 1) % testimonialSlides.length;
        showTestimonialSlide(nextIndex);
    }

    setInterval(nextTestimonialSlide, 7000);

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonialSlide(index));
    });
});