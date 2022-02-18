let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document.querySelector('#carousel_button--next').addEventListener("click", function() { 
    moveToNextSlide();
});

document.querySelector('#carousel_button--prev').addEventListener("click", function() {
  moveToPrevSlide();
});



/*19:50*/
function updateSlidePosition()

function moveToNextSlide() {
    /*alert("hello next");*/
    if (slidePosition == totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
}

function moveToPrevSlide() {
    alert("hello prev");

}