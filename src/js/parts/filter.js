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

            if (menu[i].classList.contains('girl')) {
                for (let i = 0; i < images.length; i++) {

                    if (images[i].classList.contains('girl')) {
                        empty.style.display = 'none';
                        images[i].style.display = 'block';
                    } else {
                        images[i].style.display = 'none';
                    } 
                }                
            }

            if (menu[i].classList.contains('chef')) {
                for (let i = 0; i < images.length; i++) {

                    if (images[i].classList.contains('chef')) {
                        empty.style.display = 'none';
                        images[i].style.display = 'block';
                    } else {
                        images[i].style.display = 'none';
                    } 
                }                
            }

            if (menu[i].classList.contains('lovers')) {
                for (let i = 0; i < images.length; i++) {

                    if (images[i].classList.contains('lovers')) {
                        empty.style.display = 'none';
                        images[i].style.display = 'block';
                    } else {
                        images[i].style.display = 'none';
                    } 
                }                
            }

            if (menu[i].classList.contains('all')) {
                for (let i = 0; i < images.length; i++) {

                    if (images[i].classList.contains('all')) {
                        empty.style.display = 'none';
                        images[i].style.display = 'block';
                    } else {
                        images[i].style.display = 'none';
                    } 
                }                
            } 

            if (menu[i].classList.contains('guy')) {
                for (let i = 0; i < images.length; i++) {

                    if (images[i].classList.contains('guy')) {
                        empty.style.display = 'none';
                        images[i].style.display = 'block';
                    } else {
                        images[i].style.display = 'none';
                    } 
                }                
            } 

            if (menu[i].classList.contains('grandmother')) {
                for (let i = 0; i < images.length; i++) {

                    if (images[i].classList.contains('grandmother')) {
                        empty.style.display = 'none';
                        images[i].style.display = 'block';
                    } else {
                        images[i].style.display = 'none';
                    }

                    if (images[i].classList.contains('grandmother') == 0) {
                        empty.style.display = 'block';
                    }
                }                
            } 

            if (menu[i].classList.contains('granddad')) {
                for (let i = 0; i < images.length; i++) {

                    if (images[i].classList.contains('granddad')) {
                        empty.style.display = 'none';
                        images[i].style.display = 'block';
                    } else {
                        images[i].style.display = 'none';
                    } 

                    if (images[i].classList.contains('granddad') == 0) {
                        empty.style.display = 'block';
                    }
                }                
            } 

        });

    }

}

module.exports = filter;