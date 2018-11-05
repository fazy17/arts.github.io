function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failed: 'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('form'),
        inputs = document.getElementsByTagName('input'),
        textarea = document.getElementsByTagName('textarea'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
    
        function sendForm(elem) {
            elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {

                return new Promise(function(resolve,reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    
                    request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve() 
                            }
                            else {
                                reject()
                            }
                        }
                    }

                    let obj = {};
                    formData.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    request.send(json);
                });
    
            }

            function clearInput() {
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }

                for (let i = 0; i < textarea.length; i++) {
                    textarea[i].value = '';
                }
            }

            let messageStatus = document.getElementsByTagName('h1')[0];

            postData(formData)
                .then(()=> {
                    statusMessage.textContent = message.loading; })
                .then(()=> {
                    let overlayDesign = document.querySelector('.popup-design'),
                    overlayConsultation = document.querySelector('.popup-consultation'),
                    overlay = document.querySelector('.modal-wrapper');
        
                    overlayDesign.style.display = 'none';
                    overlayConsultation.style.display = 'none';
                    document.body.style.overflow = '';
                    
                    messageStatus.textContent = message.success;
                    overlay.classList.add('open');
                    overlay.addEventListener('click', function() {
                        overlay.classList.remove('open');
                        statusMessage.remove()
                    }); 
                })
                .catch(()=> {
                    let overlayDesign = document.querySelector('.popup-design'),
                    overlayConsultation = document.querySelector('.popup-consultation'),
                    overlay = document.querySelector('.modal-wrapper');
        
                    overlayDesign.style.display = 'none';
                    overlayConsultation.style.display = 'none';
                    document.body.style.overflow = '';
                    
                    messageStatus.textContent = message.failed;
                    overlay.classList.add('open');
                    overlay.addEventListener('click', function() {
                        overlay.classList.remove('open');
                        statusMessage.remove()
                    }); 
                })
                .then(clearInput)
        });

    }       

    for (let i = 0; i < form.length; i++) {
        sendForm(form[i]); 
    }
    // Маска телефона 

    let phone = document.querySelectorAll('.phone-form');

    for (let i = 0; i < phone.length; i++) {
                phone[i].addEventListener('input', function() {
                let matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');

                if (def.length >= val.length) val = def;
                
                this.value = matrix.replace(/./g, function(a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
                });

            });
    }

    // Заполнение имени - только на русском языке.

    let nameEnglish = document.querySelectorAll('.name-form');

    for (let i = 0; i < nameEnglish.length; i++) {
        nameEnglish[i].addEventListener('input', function() {
            this.value = this.value.replace(/[^аА-яё]/g, '')
        });
    }

    // Заполнение комментариев - только на русском языке.

    let commentEnglish = document.querySelectorAll('.comment-form');

    for (let i = 0; i < commentEnglish.length; i++) {
        commentEnglish[i].addEventListener('input', function() {
            this.value = this.value.replace(/[^аА-яё]/g, '')
        });
    }
}

module.exports = form;