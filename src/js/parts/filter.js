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

            let classes = ['lovers', 'girl', 'all', 'guy', 'grandmother', 'granddad', 'chef'];
            
            for (let a = 0; a < classes.length; a++) {
                if (menu[i].classList.contains(classes[a]) == images[i].classList.contains(classes[a])) {
                    for (let i = 0; i < images.length; i++) {
                        if (images[i].classList.contains(classes[a])) {
                            empty.style.display = 'none';
                            images[i].style.display = 'block';
                        } else {
                            images[i].style.display = 'none';
                        } 
                    }                
                }
            }
        });

    }

}

module.exports = filter;