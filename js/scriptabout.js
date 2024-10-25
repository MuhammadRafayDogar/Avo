document.addEventListener('DOMContentLoaded', () => {
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