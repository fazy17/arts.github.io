function popups() {
    function popupDesign() {
        let btns = document.querySelectorAll('.button-design'),
        overlay = document.querySelector('.popup-design'),
        close = overlay.querySelector('.popup-close');
    
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function() {
                showModal();
            });
        }

        close.addEventListener('click', function() {
            closeModal();
        });

        overlay.addEventListener('click', function() {
            closeModal();
        });

        function showModal() {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    popupDesign();
    
    // button-consultation
    function popupConsultation() {
        let btns = document.querySelectorAll('.button-consultation'),
        overlay = document.querySelector('.popup-consultation'),
        close = overlay.querySelector('.popup-close');


        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function() {
                showModal();
            });
        }

        close.addEventListener('click', function() {
            closeModal();
        });

        overlay.addEventListener('click', function() {
            closeModal();
        });

        function showModal() {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    popupConsultation();

}

module.exports = popups;