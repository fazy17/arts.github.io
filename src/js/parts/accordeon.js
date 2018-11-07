function accordion() {
    let accordionBlock = document.querySelectorAll('.accordion-block'),
        accordionTitle = document.querySelectorAll('.accordion-heading');

    function showBlock() {
        for (let i = 0; i < accordionBlock.length; i++) {
            accordionBlock[i].style.display = 'none';
        }
        
        for (let i = 0; i < accordionTitle.length; i++) {
            accordionTitle[i].addEventListener('click', function() {

                if (accordionBlock[i].style.display == 'none') {
                    clear();
                    accordionBlock[i].style.display = 'block';
                    accordionBlock[i].className = 'col-md-8 col-md-offset-2 accordion-block animated fadeInDown';
                    accordionTitle[i].style.color = '#c818bc';
                } else {
                    clear();   
                }

            });
        }
    }

    function clear() {
        for (let i = 0; i < accordionBlock.length; i++) {
            accordionBlock[i].style.display = 'none';
            accordionTitle[i].style.color = '#333';
            
        }
    }

    showBlock();
}

module.exports = accordion;