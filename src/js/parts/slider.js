function slider() {
    let slides = document.querySelectorAll('.feedback-slider-item'),
        next = document.querySelector('.main-next-btn'),
        prev = document.querySelector('.main-prev-btn'),
        slideIndex = 1;

    showSlide(slideIndex);

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    
    function showSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';
        slides[slideIndex - 1].className = 'feedback-slider-item animated fadeInRight';

    }

    function plusSlides(n) {
        showSlide(slideIndex += n);
    }

    let update = setTimeout(function updateSlider() {
        if (slideIndex <= slides.length) {
            plusSlides(1)
        } else {
            plusSlides(-1)
        }

        setTimeout(updateSlider, 10000);
    }); 
}

module.exports = slider;