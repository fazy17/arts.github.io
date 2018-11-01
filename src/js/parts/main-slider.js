function mainSlider() {
    let slides = document.querySelectorAll('.main-slider-item'),
        slideIndex = 1;

    slides[0].style.display = 'none';

    function showSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].className = 'animated slideInDown';

    }

    function plusSlides(n) {
        showSlide(slideIndex += n);
    }

    let update = setTimeout(function updateSlider() {
        if (slideIndex <= 1) {
            plusSlides(1)
        } else {
            plusSlides(-1)
        }

        setTimeout(updateSlider, 5000);
    }); 

   
}
module.exports = mainSlider;