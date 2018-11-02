function features() {
    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu'),
        footer = document.querySelector('.footer');
        
    burger.addEventListener('click', function() {
        if (burgerMenu.style.display == '') {
            burgerMenu.style.display = 'block';
        } else {
            burgerMenu.style.display = '';
        }
    });
}

module.exports = features;