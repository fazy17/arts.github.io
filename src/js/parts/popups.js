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

        document.addEventListener('click', function(e)  {
            if (e.target.classList.contains('popup-design') || e.target.classList.contains('form')) {
                closeModal(); 
            }
        });

        function showModal() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    popupDesign();
    
    // popup-consultation
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

        document.addEventListener('click', function(e)  {
            if (e.target.classList.contains('popup-consultation') || e.target.classList.contains('popup-content')) {
                closeModal();
            }
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

     // popup-gift
    function popupGift() {
        let btns = document.querySelector('.fixed-gift'),
            overlay = document.querySelector('.popup-gift'),
            close = overlay.querySelector('.popup-close');


        btns.addEventListener('click', function() {
            showModal();
        });

        close.addEventListener('click', function() {
            closeModal();
        });

        document.addEventListener('click', function(e)  {
            if (e.target.classList.contains('popup-gift')) {
                closeModal();
            }
        });

        function showModal() {
            overlay.style.display = 'flex';
            btns.style.display = 'none';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    popupGift();

}

module.exports = popups;