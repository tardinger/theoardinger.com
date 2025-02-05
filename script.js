let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides(n) {
    // Ensure index loops correctly
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

// Change slides on button click
function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Initialize and ensure first slide is visible
showSlides(slideIndex);
