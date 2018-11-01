function more() {
    let btn = document.querySelector('.button-styles'),
        more = document.querySelectorAll('.styles-2');
    btn.addEventListener('click', function() {
        showMore();
    });
    
    function showMore() {
        btn.style.display = 'none';
        
        for (let i = 0; i < more.length; i++) {
            more[i].className = '';
            more[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2';
        }
    }
}

module.exports = more;