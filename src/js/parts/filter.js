function filter() {
    let allWorks = document.querySelector('.all '),
        lovers = document.querySelector('.lovers'),
        chef = document.querySelector('.chef'),
        girl = document.querySelector('.girl'),
        guy = document.querySelector('.guy'),
        grandmother = document.querySelector('.grandmother'),
        granddad = document.querySelector('.granddad'),
        menu = document.querySelectorAll('.menu'),
        images = document.querySelectorAll('.portfolio-block'),
        empty = document.querySelector('.portfolio-no');
          
    allWorks.addEventListener('click', function() {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }

        this.classList.add('active')

        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
        }
    });
    
    grandmother.addEventListener('click', function() {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }

        this.classList.add('active')

        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('grandmother')) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }

            if(images[i].classList.contains('grandmother') == 0) {
                empty.style.display = 'block';
            }
        }
    });

    granddad.addEventListener('click', function() {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }
        
        this.classList.add('active')

        for (let i = 0; i < images.length; i++) {

            if (images[i].classList.contains('granddad')) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }

            if (images[i].classList.contains('granddad') == 0) {
                empty.style.display = 'block';
            }
        }
    });

    lovers.addEventListener('click', function() {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }
        
        this.classList.add('active')
        
        for (let i = 0; i < images.length; i++) {

            if (images[i].classList.contains('lovers')) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }
        }

    });

    girl.addEventListener('click', function() {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }
        
        this.classList.add('active')
        
        for (let i = 0; i < images.length; i++) {

            if (images[i].classList.contains('girl')) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            } 
        }
    });
    
    guy.addEventListener('click', function() {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }
        
        this.classList.add('active')
        
        for (let i = 0; i < images.length; i++) {

            if (images[i].classList.contains('guy')) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            } 
        }
    });

    chef.addEventListener('click', function() { 
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }
        
        this.classList.add('active')
        
        for (let i = 0; i < images.length; i++) {

            if (images[i].classList.contains('chef')) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            } 
        }
    });
}

module.exports = filter;