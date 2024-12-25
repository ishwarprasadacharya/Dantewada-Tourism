document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slideshow-slide");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        slides[currentIndex].classList.add("active");
    }

    // Initialize the slideshow
    slides[currentIndex].classList.add("active");
    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
