// ==============================
// FADE-IN ANIMATION (SCROLL)
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));


    // ==============================
    // HERO BACKGROUND SLIDESHOW
    // Supports both <img> and <video> elements
    // ==============================

    const slides = document.querySelectorAll('.hero-bg img, .hero-bg video');
    let current = 0;

    function getDuration(slide) {
        if (slide.tagName === 'VIDEO') {
            return new Promise(resolve => {
                if (slide.duration && !isNaN(slide.duration)) {
                    resolve(slide.duration * 1000);
                } else {
                    slide.addEventListener('loadedmetadata', () => {
                        resolve(slide.duration * 1000);
                    }, { once: true });
                }
            });
        }
        return Promise.resolve(parseInt(slide.dataset.duration) || 4000);
    }

    async function nextSlide() {
        if (slides[current].tagName === 'VIDEO') {
            slides[current].pause();
            slides[current].currentTime = 0;
        }
        slides[current].classList.remove('active');

        current = (current + 1) % slides.length;
        slides[current].classList.add('active');

        if (slides[current].tagName === 'VIDEO') {
            slides[current].play();
        }

        const duration = await getDuration(slides[current]);
        setTimeout(nextSlide, duration);
    }

    if (slides.length > 0) {
        slides[current].classList.add('active');
        if (slides[current].tagName === 'VIDEO') {
            slides[current].play();
        }
        getDuration(slides[current]).then(duration => {
            setTimeout(nextSlide, duration);
        });
    }

});


// ==============================
// HERO FADE-IN ON LOAD
// ==============================

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "1";
    }
});
