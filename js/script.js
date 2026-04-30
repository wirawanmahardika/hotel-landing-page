// Alpine.js Data
function hotelApp() {
    return {
        scrolled: false,
        mobileMenu: false,
        showVideo: false,
        lightboxOpen: false,
        lightboxImage: '',

        init() {
            // Scroll listener
            window.addEventListener('scroll', () => {
                this.scrolled = window.scrollY > 50;
            });

            // Loader
            window.addEventListener('load', () => {
                setTimeout(() => {
                    document.getElementById('loader').classList.add('hidden-loader');
                }, 1500);
            });

            // Initialize Lucide icons after Alpine renders
            this.$nextTick(() => {
                lucide.createIcons();
            });
        },

        openLightbox(src) {
            this.lightboxImage = src;
            this.lightboxOpen = true;
        },
    };
}

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic',
});

// Initialize Swiper - Rooms
const roomSwiper = new Swiper('.roomSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Initialize Swiper - Testimonials
const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

// Re-init Lucide after DOM updates
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});
