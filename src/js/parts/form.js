function form() {
    //Form
  
    

    

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что- то пошло не так!'

    };

    let form = document.querySelector('.main-form'),
        formContact = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        input2 = formContact.getElementsByTagName('input'),
        statusMessadge = document.createElement('div');
    statusMessadge.classList.add('status');
    form.style.height = '150px';

    function setText() {

        let timeInterval = setTimeout(updateText, 3000);

        function updateText() {
            statusMessadge.textContent = '';

            clearTimeout(timeInterval);

        }

    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessadge);
        let formData = new FormData(form);


        function postData(formData) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // для HTML
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // для JSON

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve()

                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve()
                        } else {
                            reject()
                        }
                    }
                }
                //JSON
                formData.forEach(function (value, key) {
                    formData[key] = value;
                });
                let json = JSON.stringify(formData);
                //JSON

                //JSON
                request.send(json);
                //для HTML

            })
        }

        function clearInput() {

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }

        }

        postData(formData)
            .then(() => {
                statusMessadge.textContent = message.loading;
                setText();
            })
            .then(() => {
                statusMessadge.textContent = message.success;
                setText();
            })
            .catch(() => {
                statusMessadge.textContent = message.failure;
                setText();
            })
            .then(clearInput)


    });





    formContact.addEventListener('submit', function (event) {
        event.preventDefault();
        formContact.appendChild(statusMessadge);



        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // для HTML
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // для JSON

        let formData = new FormData(formContact);


        //JSON

        formData.forEach(function (value, key) {
            formData[key] = value;

        });
        let json = JSON.stringify(formData);


        request.send(json);
        //JSON


        //для HTML
        // request.send(formData);

        statusMessadge.style.color = 'white';
        statusMessadge.style.marginTop = '10px';
        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessadge.textContent = message.loading;
                setText();
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessadge.textContent = message.success;
                setText();
            } else {
                statusMessadge.textContent = message.failure;
                setText();
            }

        });

        for (let i = 0; i < input2.length; i++) {
            input2[i].value = '';
        }

        

    });

}

module.exports = form;