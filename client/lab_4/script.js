let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document.
    querySelector('#carousel_button--next')
    .addEventListener("click", function() {
        moveToNextSlide();
    });
document.
    querySelector('#carousel_button--prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('item');
        slide.classList.add('itemm')
    }

    slides[slidePosition].classList.add('item')
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition ++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = 0;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}