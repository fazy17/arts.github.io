function features() {
    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu');

    window.addEventListener('resize',function(){
        if (window.innerWidth <= 768) {
            burger.addEventListener('click', function() {
                if (burgerMenu.style.display == '') {
                    burgerMenu.style.display = 'block';
                } else {
                    burgerMenu.style.display = '';
                }
            });
        } else {
            burgerMenu.style.display = '';
        }

    });
    
}

module.exports = features;