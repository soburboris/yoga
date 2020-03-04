window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {

            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {

        if (tabContent[b].classList.contains('hide')) {

            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');


        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;

                }

            }

        }
    });


    //// TIMER
    let deadline = '2020-03-06',
        region = 6;

    function getTimeRemaining(endtime) {
        let time = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor(((time / 1000 / 60 / 60) - region) % 24),
            days = Math.floor((time / 1000 / 60 / 60 / 24));

        return {

            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function SetClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        // timer.style.padding = '20px';

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.days >= 10) {
                days.textContent = t.days;

            } else {
                days.textContent = '0' + t.days;

            }

            if (t.hours >= 10) {
                hours.textContent = t.hours;

            } else {
                hours.textContent = '0' + t.hours;

            }

            if (t.minutes >= 10) {
                minutes.textContent = t.minutes;

            } else {
                minutes.textContent = '0' + t.minutes;

            }

            if (t.seconds >= 10) {
                seconds.textContent = t.seconds;

            } else {
                seconds.textContent = '0' + t.seconds;

            }


            if (t.total <= 0) {
                clearInterval(timeInterval);

            }
        }



    }
    SetClock('timer', deadline);



    //Modal


    document.body.addEventListener('click', function (event) {
        let overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');

        if (event.target && event.target.classList.contains('description-btn')) {

            overlay.style.display = 'block';
            event.target.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        } else if (event.target && event.target.classList.contains('more')) {

            overlay.style.display = 'block';
            event.target.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }

        close.addEventListener('click', function (event) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';

            this.classList.remove('more-splash');


        }.bind(event.target));


    });

    //Form

    /* Инициализируем маски для каждого из них */
    var inputs = document.querySelectorAll('input[type="tel"]');

    //   Array.prototype.forEach.call(inputs, function(input) {
    //     new InputMask({
    //       selector: input,
    //       layout: input.dataset.mask // читаем дата-атрибут, установленный в html и устанавливаем его значение в качестве маски
    //     })
    //   })


    //   Одиночный вызов может выглядеть так: 

    new InputMask({
        selector: '#tel',
        layout: '+7(___) ___-__-__'
    });

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
        console.log(formData);

        function postData(formData) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // для HTML
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // для JSON

                request.onreadystatechange =  () => {
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
                let obj = {};
                formData.forEach(function (value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
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
        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

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

});





// window.addEventListener("DOMContentLoaded", function() {
// function setCursorPosition(pos, elem) {
//     elem.focus();
//     if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
//     else if (elem.createTextRange) {
//         var range = elem.createTextRange();
//         range.collapse(true);
//         range.moveEnd("character", pos);
//         range.moveStart("character", pos);
//         range.select()
//     }
// }

// function mask(event) {
//     var matrix = "+7 (___) ___ ____",
//         i = 0,
//         def = matrix.replace(/\D/g, ""),
//         val = this.value.replace(/\D/g, "");
//     if (def.length >= val.length) val = def;
//     this.value = matrix.replace(/./g, function(a) {
//         return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//     });
//     if (event.type == "blur") {
//         if (this.value.length == 2) this.value = ""
//     } else setCursorPosition(this.value.length, this)
// };
//     var input = document.getElementsByTagName("input")[4];
//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
// });



function InputMask(options) {
    this.el = this.getElement(options.selector);
    console.log(this.getElement(options.selector));
    if (!this.el) return console.log('Что-то не так с селектором');
    this.layout = options.layout || '+_ (___) ___-__-__';
    this.maskreg = this.getRegexp();
    this.setListeners();
}

InputMask.prototype.getRegexp = function () {
    var str = this.layout.replace(/_/g, '\\d');
    str = str.replace(/\(/g, '\\(');
    str = str.replace(/\)/g, '\\)');
    str = str.replace(/\+/g, '\\+');
    str = str.replace(/\s/g, '\\s');
    return str;
};

InputMask.prototype.mask = function (e) {
    var _this = e.target,
        matrix = this.layout,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = _this.value.replace(/\D/g, "");

    if (def.length >= val.length) val = def;
    _this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });

    if (e.type == "blur") {
        var regexp = new RegExp(this.maskreg);
        if (!regexp.test(_this.value)) _this.value = "";
    } else {
        this.setCursorPosition(_this.value.length, _this);
    }
};

InputMask.prototype.setCursorPosition = function (pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
};

InputMask.prototype.setListeners = function () {
    this.el.addEventListener("input", this.mask.bind(this), false);
    this.el.addEventListener("focus", this.mask.bind(this), false);
    this.el.addEventListener("blur", this.mask.bind(this), false);
};

InputMask.prototype.getElement = function (selector) {
    if (selector === undefined) return false;
    if (this.isElement(selector)) return selector;

    if (typeof selector == 'string') {
        var el = document.querySelector(selector);
        if (this.isElement(el)) return el;
    }

    return false;
};

InputMask.prototype.isElement = function (element) {
    return element instanceof Element || element instanceof HTMLDocument;
};

class Options {
    constructor(height, width, background, margin, fontSize, textAlign) {
        this.height = height + 'px';
        this.width = width + 'px';
        this.background = background;
        this.marginTop = margin + 'px';
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
    }


    createDiv() {
        let wrap = document.querySelector('.description'),
            div = document.createElement('div');
        wrap.appendChild(div);
        div.textContent = 'Hello Boris!';
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.marginTop = this.marginTop;
        div.style.background = this.background;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        div.style.borderRadius = this.borderRadius;
        div.classList.add('option');

    }
}

class Passion extends Options {
    constructor(height, width, background, margin, fontSize, textAlign, borderRadius) {
        super(height, width, background, margin, fontSize, textAlign);
        this.borderRadius = borderRadius + 'px';
    }

    Adds() {

        super.createDiv();

    }

}

let divs = new Options(40, 180, 'yellow', 10, 25, 'center');
divs.createDiv();
// console.log(typeof divs.createDiv);

let der = new Passion(40, 180, 'blue', 10, 25, 'center', 5);
der.Adds();
//   der.createDiv();
console.log(divs);
console.log(der);