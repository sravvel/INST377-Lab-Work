let slidePosition = 0;
const slides = document.querySelectorAll('carousel_item');
const totalSlides = slides.length;

document.querySelector('carousel_button--next').addEventListener("click", function() {
    moveToNextSlide();

});
