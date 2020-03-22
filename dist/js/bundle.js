/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tabs = __webpack_require__(1),
        timer = __webpack_require__(2),
        modal = __webpack_require__(3),
        form = __webpack_require__(4),
        slider = __webpack_require__(5),
        calc = __webpack_require__(6);

    tabs();
    calc();
    form();
    slider();
    timer();
    modal();







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





// class Options {
//     constructor(height, width, background, margin, fontSize, textAlign) {
//         this.height = height + 'px';
//         this.width = width + 'px';
//         this.background = background;
//         this.marginTop = margin + 'px';
//         this.fontSize = fontSize + 'px';
//         this.textAlign = textAlign;
//     }


//     createDiv() {
//         let wrap = document.querySelector('.description'),
//             div = document.createElement('div');
//         wrap.appendChild(div);
//         div.textContent = 'Hello Boris!';
//         div.style.height = this.height;
//         div.style.width = this.width;
//         div.style.marginTop = this.marginTop;
//         div.style.background = this.background;
//         div.style.fontSize = this.fontSize;
//         div.style.textAlign = this.textAlign;
//         div.style.borderRadius = this.borderRadius;
//         div.classList.add('option');

//     }
// }

// class Passion extends Options {
//     constructor(height, width, background, margin, fontSize, textAlign, borderRadius) {
//         super(height, width, background, margin, fontSize, textAlign);
//         this.borderRadius = borderRadius + 'px';
//     }

//     Adds() {

//         super.createDiv();

//     }

// }

// let divs = new Options(40, 180, 'yellow', 10, 25, 'center');
// divs.createDiv();
// // console.log(typeof divs.createDiv);

// let der = new Passion(40, 180, 'blue', 10, 25, 'center', 5);
// der.Adds();
// //   der.createDiv();
// console.log(divs);
// console.log(der);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function tabs() {
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
}

module.exports = tabs;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function timer() {
    let deadline = '2020-04-30',
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

}

module.exports = timer;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function modal() {
    
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
}

module.exports = modal;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function slider() {
    let sliderIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWarp = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    showSlides(1);
    autoSlides();

    document.body.addEventListener('mouseover', (event) => {
        if (event.target && event.target.tagName == 'IMG') {

            prev.style.display = '';
            next.style.display = '';
        }
    });

    function autoSlides() {
        setInterval(() => {
            showSlides(sliderIndex);
            sliderIndex++;
            prev.style.display = 'none';
            next.style.display = 'none';
        }, 6000);




    }

    function showSlides(n) {
        if (n > slides.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = slides.length;
        }

        slides.forEach((item) => {
            item.style.display = 'none'
        });

        dots.forEach((item) => {
            item.classList.remove('dot-active')
        });

        slides[sliderIndex - 1].style.display = '';
        dots[sliderIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(sliderIndex += n);
    }

    function currentSlides(n) {
        showSlides(sliderIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    dotsWarp.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target == dots[i - 1] && event.target.classList.contains('dot')) {
                currentSlides(i);
            }
        }

    });

}

module.exports = slider;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        localStorage.setItem("people", personsSum);
        total = (daysSum + personsSum) * 7000;

        if (restDays.value == '' && isNaN(restDays)) {
            totalValue.textContent = 0;

        } else if (persons.value == '') {
            totalValue.textContent = 0;

        } else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        localStorage.setItem("days", daysSum);
        total = (daysSum + personsSum) * 7000;

        if (persons.value == '' && isNaN(persons)) {
            totalValue.textContent = 0;

        } else if (restDays.value == '') {
            totalValue.textContent = 0;

        } else {
            totalValue.textContent = total;
        }
    });


    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.textContent = 0;
        } else {
            let a = total;

            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }

    });

}

module.exports = calc;

/***/ })
/******/ ]);