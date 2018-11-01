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
            empty.style.display = 'none';
        }
    });
    
    grandmother.addEventListener('click', function() {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
        }

        this.classList.add('active')

        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('grandmother')) {
                empty.style.display = 'none';
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
                empty.style.display = 'none';
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
                empty.style.display = 'none';
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
                empty.style.display = 'none';
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
                empty.style.display = 'none';
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
                empty.style.display = 'none';
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            } 
        }
    });
}

module.exports = filter;