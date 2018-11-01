function accordion() {
    let accordionBlock = document.querySelectorAll('.accordion-block'),
        accordionTitle = document.querySelectorAll('.accordion-heading');

    function showBlock() {
        for (let i = 0; i < accordionBlock.length; i++) {
            accordionBlock[i].style.display = 'none';
        }
        
        for (let i = 0; i < accordionTitle.length; i++) {
                

            accordionTitle[i].addEventListener('click', function() {
                for (let i = 0; i < accordionTitle.length; i++) {
                    accordionBlock[i].style.display = 'none';
                }

                if (accordionBlock[i].style.display == 'none') {
                    accordionBlock[i].style.display = 'block';
                    accordionBlock[i].className = 'col-md-8 col-md-offset-2 accordion-block animated fadeInDown';
                    accordionTitle[i].style.borderBottom = 'none';
                } else {
                    accordionBlock[i].style.display = 'none';
                }

                
                
            });
        }

    }

    showBlock();
}

module.exports = accordion;