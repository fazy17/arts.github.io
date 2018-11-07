function pictures() {
    let sizeBlock = document.querySelectorAll('.sizes-block');
    
    for (let i = 0; i < sizeBlock.length; i++) {
        sizeBlock[i].addEventListener('mouseenter', function() {
            
            let image = sizeBlock[i].querySelector('.image'),
                text = sizeBlock[i].getElementsByTagName('p');

            for (let i = 0; i < text.length; i++) {
                text[i].style.display = 'none';
            }

            if (image.classList.contains('size-1')) {
                image.setAttribute('src', 'img/sizes-1-1.png');
            } else if (image.classList.contains('size-2')) {
                image.setAttribute('src', 'img/sizes-2-1.png');
            } else if (image.classList.contains('size-3')) {
                image.setAttribute('src', 'img/sizes-3-1.png');
                text[3].style.display = 'block';
            } else if (image.classList.contains('size-4')) {
                image.setAttribute('src', 'img/sizes-4-1.png');
            }

        });

        sizeBlock[i].addEventListener('mouseleave', function() {
            
            let image = sizeBlock[i].querySelector('.image'),
                text = sizeBlock[i].getElementsByTagName('p');
                
            for (let i = 0; i < text.length; i++) {
                text[i].style.display = 'block';
            }

            if (image.classList.contains('size-1')) {
                image.setAttribute('src', 'img/sizes-1.png');
            } else if (image.classList.contains('size-2')) {
                image.setAttribute('src', 'img/sizes-2.png');
            } else if (image.classList.contains('size-3')) {
                image.setAttribute('src', 'img/sizes-3.png');
            } else if (image.classList.contains('size-4')) {
                image.setAttribute('src', 'img/sizes-4.png');
            }
        });
    }
}

module.exports = pictures;