function more() {
    let btn = document.querySelector('.button-styles'),
        more = document.querySelectorAll('.styles-2');
    btn.addEventListener('click', function() {
        showMore();
    });
    
    function showMore() {
        btn.style.display = 'none';
        
        for (let i = 0; i < more.length; i++) {
            more[i].classList.remove('hidden-lg');
            more[i].classList.remove('hidden-md');
            more[i].classList.remove('hidden-sm');
            more[i].classList.remove('hidden-xs');
            more[i].classList.add('col-sm-3');
            more[i].classList.add('col-sm-offset-0');
            more[i].classList.add('col-xs-10');
            more[i].classList.add('col-xs-offset-1');
        }
    }
}

module.exports = more;