function popups() {
    // 60 сек на страницу
    function startTimer() {
        let overlay = document.querySelector('.popup-consultation');

        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    let present = setTimeout(startTimer, 60000);

    // низ страницы 
    function presentDown() {
        let btns = document.getElementsByTagName('button'),
            btnClick = 0;

        window.addEventListener('scroll', function() {
            if (btnClick == 0) {
                if (document.documentElement.scrollTop) {
                    currentScroll = document.documentElement.scrollTop;
                } else {
                    currentScroll = document.body.scrollTop; 
                }

                totalHeight = document.body.offsetHeight;
                visibleHeight = document.documentElement.clientHeight;    

                if (totalHeight <= currentScroll + visibleHeight ) {
                    let overlay = document.querySelector('.popup-gift'),
                        btns = document.querySelector('.fixed-gift');
                        
                    overlay.style.display = 'flex';
                    btns.style.display = 'none';
                    document.body.style.overflow = 'hidden';

                }             
            }
        });
        
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function() {
                btnClick = 1; 
            });            
        }

    }

    presentDown();

    function popupDesign() {
        let btns = document.querySelectorAll('.button-design'),
            overlay = document.querySelector('.popup-design'),
            close = overlay.querySelector('.popup-close');
    
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function() {
                showModal();
                clearTimeout(present);
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
                clearTimeout(present);
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
            clearTimeout(present);
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