function filter() {
    let menu = document.querySelectorAll('.menu'),
        images = document.querySelectorAll('.portfolio-block'),
        empty = document.querySelector('.portfolio-no');

    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', function() {
            for (let i = 0; i < menu.length; i++) {
                menu[i].classList.remove('active');
            }

            this.classList.add('active');

            for (let i = 0; i < images.length; i++) {
                if (images[i].classList.contains(this.classList[1])) {
                    empty.style.display = 'none';
                    images[i].style.display = 'block';
                } else {
                    images[i].style.display = 'none';
                }   
                
                console.log(images[i].classList.contains(this.classList[1]))

                if (images[i].classList.contains(this.classList[1])) {
                    empty.style.display = 'block';
                } 
            }
        });
    }
}

module.exports = filter;