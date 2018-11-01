function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failed: 'Что-то пошло не так...'
    };

    let form = document.getElementsByTagName('form')[0],
        inputs = form.getElementsByTagName('input'),
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
            }

            postData(formData)
                .then(()=> statusMessage.textContent = message.loading)
                .then(()=> statusMessage.textContent = message.success)
                .catch(()=> statusMessage.textContent = message.failed)
                .then(clearInput)
        });

    }       
    sendForm(form);        
}

module.exports = form;