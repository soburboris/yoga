/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/script.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/data.xml":
/*!*****************************!*\
  !*** ./src/assets/data.xml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"note\":{\"to\":[\"Tove\"],\"from\":[\"Jani\"],\"heading\":[\"Напоминание\"],\"body\":[\"Не забудь обо мне в эти выходные!\"]}}\n\n//# sourceURL=webpack:///./src/assets/data.xml?");

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\r\n    let persons = document.querySelectorAll('.counter-block-input')[0],\r\n        restDays = document.querySelectorAll('.counter-block-input')[1],\r\n        place = document.getElementById('select'),\r\n        totalValue = document.getElementById('total'),\r\n        personsSum = 0,\r\n        daysSum = 0,\r\n        total = 0;\r\n\r\n    totalValue.textContent = 0;\r\n\r\n    persons.addEventListener('change', function () {\r\n        personsSum = +this.value;\r\n        localStorage.setItem(\"people\", personsSum);\r\n        total = (daysSum + personsSum) * 7000;\r\n\r\n        if (restDays.value == '' && isNaN(restDays)) {\r\n            totalValue.textContent = 0;\r\n\r\n        } else if (persons.value == '') {\r\n            totalValue.textContent = 0;\r\n\r\n        } else {\r\n            totalValue.textContent = total;\r\n        }\r\n    });\r\n\r\n    restDays.addEventListener('change', function () {\r\n        daysSum = +this.value;\r\n        localStorage.setItem(\"days\", daysSum);\r\n        total = (daysSum + personsSum) * 7000;\r\n\r\n        if (persons.value == '' && isNaN(persons)) {\r\n            totalValue.textContent = 0;\r\n\r\n        } else if (restDays.value == '') {\r\n            totalValue.textContent = 0;\r\n\r\n        } else {\r\n            totalValue.textContent = total;\r\n        }\r\n    });\r\n\r\n\r\n    place.addEventListener('change', function () {\r\n        if (restDays.value == '' || persons.value == '') {\r\n            totalValue.textContent = 0;\r\n        } else {\r\n            let a = total;\r\n\r\n            totalValue.textContent = a * this.options[this.selectedIndex].value;\r\n        }\r\n\r\n    });\r\n\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form() {\r\n    //Form\r\n  \r\n    \r\n\r\n    \r\n\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Скоро мы с вами свяжемся.',\r\n        failure: 'Что- то пошло не так!'\r\n\r\n    };\r\n\r\n    let form = document.querySelector('.main-form'),\r\n        formContact = document.querySelector('#form'),\r\n        input = form.getElementsByTagName('input'),\r\n        input2 = formContact.getElementsByTagName('input'),\r\n        statusMessadge = document.createElement('div');\r\n    statusMessadge.classList.add('status');\r\n    form.style.height = '150px';\r\n\r\n    function setText() {\r\n\r\n        let timeInterval = setTimeout(updateText, 3000);\r\n\r\n        function updateText() {\r\n            statusMessadge.textContent = '';\r\n\r\n            clearTimeout(timeInterval);\r\n\r\n        }\r\n\r\n    };\r\n\r\n    form.addEventListener('submit', function (event) {\r\n        event.preventDefault();\r\n        form.appendChild(statusMessadge);\r\n        let formData = new FormData(form);\r\n\r\n\r\n        function postData(formData) {\r\n\r\n            return new Promise(function (resolve, reject) {\r\n                let request = new XMLHttpRequest();\r\n                request.open('POST', 'server.php');\r\n                // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // для HTML\r\n                request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // для JSON\r\n\r\n                request.onreadystatechange = () => {\r\n                    if (request.readyState < 4) {\r\n                        resolve()\r\n\r\n                    } else if (request.readyState === 4) {\r\n                        if (request.status == 200 && request.status < 300) {\r\n                            resolve()\r\n                        } else {\r\n                            reject()\r\n                        }\r\n                    }\r\n                }\r\n                //JSON\r\n                formData.forEach(function (value, key) {\r\n                    formData[key] = value;\r\n                });\r\n                let json = JSON.stringify(formData);\r\n                //JSON\r\n\r\n                //JSON\r\n                request.send(json);\r\n                //для HTML\r\n\r\n            })\r\n        }\r\n\r\n        function clearInput() {\r\n\r\n            for (let i = 0; i < input.length; i++) {\r\n                input[i].value = '';\r\n            }\r\n\r\n        }\r\n\r\n        postData(formData)\r\n            .then(() => {\r\n                statusMessadge.textContent = message.loading;\r\n                setText();\r\n            })\r\n            .then(() => {\r\n                statusMessadge.textContent = message.success;\r\n                setText();\r\n            })\r\n            .catch(() => {\r\n                statusMessadge.textContent = message.failure;\r\n                setText();\r\n            })\r\n            .then(clearInput)\r\n\r\n\r\n    });\r\n\r\n\r\n\r\n\r\n\r\n    formContact.addEventListener('submit', function (event) {\r\n        event.preventDefault();\r\n        formContact.appendChild(statusMessadge);\r\n\r\n\r\n\r\n        let request = new XMLHttpRequest();\r\n        request.open('POST', 'server.php');\r\n        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // для HTML\r\n        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // для JSON\r\n\r\n        let formData = new FormData(formContact);\r\n\r\n\r\n        //JSON\r\n\r\n        formData.forEach(function (value, key) {\r\n            formData[key] = value;\r\n\r\n        });\r\n        let json = JSON.stringify(formData);\r\n\r\n\r\n        request.send(json);\r\n        //JSON\r\n\r\n\r\n        //для HTML\r\n        // request.send(formData);\r\n\r\n        statusMessadge.style.color = 'white';\r\n        statusMessadge.style.marginTop = '10px';\r\n        request.addEventListener('readystatechange', () => {\r\n            if (request.readyState < 4) {\r\n                statusMessadge.textContent = message.loading;\r\n                setText();\r\n            } else if (request.readyState === 4 && request.status == 200) {\r\n                statusMessadge.textContent = message.success;\r\n                setText();\r\n            } else {\r\n                statusMessadge.textContent = message.failure;\r\n                setText();\r\n            }\r\n\r\n        });\r\n\r\n        for (let i = 0; i < input2.length; i++) {\r\n            input2[i].value = '';\r\n        }\r\n\r\n        \r\n\r\n    });\r\n\r\n}\r\n\r\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/js/parts/form.js?");

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\r\n\r\n    document.body.addEventListener('click', function (event) {\r\n        let overlay = document.querySelector('.overlay'),\r\n            close = document.querySelector('.popup-close');\r\n\r\n        if (event.target && event.target.classList.contains('description-btn')) {\r\n\r\n            overlay.style.display = 'block';\r\n            event.target.classList.add('more-splash');\r\n            document.body.style.overflow = 'hidden';\r\n        } else if (event.target && event.target.classList.contains('more')) {\r\n\r\n            overlay.style.display = 'block';\r\n            event.target.classList.add('more-splash');\r\n            document.body.style.overflow = 'hidden';\r\n        }\r\n\r\n        close.addEventListener('click', function (event) {\r\n            //     overlay.style.display = 'none';\r\n            $('.overlay').fadeOut(2000);\r\n            document.body.style.overflow = '';\r\n\r\n            this.classList.remove('more-splash');\r\n\r\n\r\n        }.bind(event.target));\r\n\r\n\r\n\r\n    });\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/js/parts/modal.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\r\n    let sliderIndex = 1,\r\n        slides = document.querySelectorAll('.slider-item'),\r\n        prev = document.querySelector('.prev'),\r\n        next = document.querySelector('.next'),\r\n        dotsWarp = document.querySelector('.slider-dots'),\r\n        dots = document.querySelectorAll('.dot');\r\n    showSlides(1);\r\n    autoSlides();\r\n\r\n    document.body.addEventListener('mouseover', (event) => {\r\n        if (event.target && event.target.tagName == 'IMG') {\r\n\r\n            prev.style.display = '';\r\n            next.style.display = '';\r\n        }\r\n    });\r\n\r\n    function autoSlides() {\r\n        setInterval(() => {\r\n            showSlides(sliderIndex);\r\n            sliderIndex++;\r\n            prev.style.display = 'none';\r\n            next.style.display = 'none';\r\n        }, 6000);\r\n\r\n\r\n\r\n\r\n    }\r\n\r\n    function showSlides(n) {\r\n        if (n > slides.length) {\r\n            sliderIndex = 1;\r\n        }\r\n        if (n < 1) {\r\n            sliderIndex = slides.length;\r\n        }\r\n\r\n        slides.forEach((item) => {\r\n            item.style.display = 'none'\r\n        });\r\n\r\n        dots.forEach((item) => {\r\n            item.classList.remove('dot-active')\r\n        });\r\n\r\n        slides[sliderIndex - 1].style.display = '';\r\n        dots[sliderIndex - 1].classList.add('dot-active');\r\n    }\r\n\r\n    function plusSlides(n) {\r\n        showSlides(sliderIndex += n);\r\n    }\r\n\r\n    function currentSlides(n) {\r\n        showSlides(sliderIndex = n);\r\n    }\r\n\r\n    prev.addEventListener('click', () => {\r\n        plusSlides(-1);\r\n    });\r\n\r\n    next.addEventListener('click', () => {\r\n        plusSlides(1);\r\n    });\r\n\r\n    dotsWarp.addEventListener('click', (event) => {\r\n        for (let i = 0; i < dots.length + 1; i++) {\r\n            if (event.target == dots[i - 1] && event.target.classList.contains('dot')) {\r\n                currentSlides(i);\r\n            }\r\n        }\r\n\r\n    });\r\n\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\r\n    let tab = document.querySelectorAll('.info-header-tab'),\r\n        info = document.querySelector('.info-header'),\r\n        tabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\n    function hideTabContent(a) {\r\n        for (let i = a; i < tabContent.length; i++) {\r\n\r\n            tabContent[i].classList.remove('show');\r\n            tabContent[i].classList.add('hide');\r\n        }\r\n    }\r\n\r\n    hideTabContent(1);\r\n\r\n    function showTabContent(b) {\r\n\r\n        if (tabContent[b].classList.contains('hide')) {\r\n\r\n            tabContent[b].classList.remove('hide');\r\n            tabContent[b].classList.add('show');\r\n\r\n\r\n        }\r\n    }\r\n\r\n    info.addEventListener('click', function (event) {\r\n        let target = event.target;\r\n        if (target && target.classList.contains('info-header-tab')) {\r\n            for (let i = 0; i < tab.length; i++) {\r\n                if (target == tab[i]) {\r\n                    hideTabContent(0);\r\n                    showTabContent(i);\r\n                    break;\r\n\r\n                }\r\n\r\n            }\r\n\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/js/parts/tabs.js?");

/***/ }),

/***/ "./src/js/parts/tel.js":
/*!*****************************!*\
  !*** ./src/js/parts/tel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tel() {\r\n   function setCursorPosition(pos, elem) {\r\n    elem.focus();\r\n    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);\r\n    else if (elem.createTextRange) {\r\n        var range = elem.createTextRange();\r\n        range.collapse(true);\r\n        range.moveEnd(\"character\", pos);\r\n        range.moveStart(\"character\", pos);\r\n        range.select()\r\n    }\r\n}\r\n\r\nfunction mask(event) {\r\n    var matrix = \"+7 (___) ___ ____\",\r\n        i = 0,\r\n        def = matrix.replace(/\\D/g, \"\"),\r\n        val = this.value.replace(/\\D/g, \"\");\r\n    if (def.length >= val.length) val = def;\r\n    this.value = matrix.replace(/./g, function(a) {\r\n        return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\r\n    });\r\n    if (event.type == \"blur\") {\r\n        if (this.value.length == 2) this.value = \"\"\r\n    } else setCursorPosition(this.value.length, this)\r\n};\r\n    var input = document.getElementsByTagName(\"input\")[4];\r\n    input.addEventListener(\"input\", mask, false);\r\n    input.addEventListener(\"focus\", mask, false);\r\n    input.addEventListener(\"blur\", mask, false);\r\n\r\n    var inputs = document.getElementsByTagName(\"input\")[3];\r\n    inputs.addEventListener(\"input\", mask, false);\r\n    inputs.addEventListener(\"focus\", mask, false);\r\n    inputs.addEventListener(\"blur\", mask, false);\r\n\r\n\r\n    \r\n    \r\n}\r\n\r\nmodule.exports = tel;\n\n//# sourceURL=webpack:///./src/js/parts/tel.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\r\n    let deadline = '2020-04-30',\r\n        region = 6;\r\n\r\n    function getTimeRemaining(endtime) {\r\n        let time = Date.parse(deadline) - Date.parse(new Date()),\r\n            seconds = Math.floor((time / 1000) % 60),\r\n            minutes = Math.floor((time / 1000 / 60) % 60),\r\n            hours = Math.floor(((time / 1000 / 60 / 60) - region) % 24),\r\n            days = Math.floor((time / 1000 / 60 / 60 / 24));\r\n\r\n        return {\r\n\r\n            'total': time,\r\n            'days': days,\r\n            'hours': hours,\r\n            'minutes': minutes,\r\n            'seconds': seconds\r\n        };\r\n    }\r\n\r\n    function SetClock(id, endtime) {\r\n        let timer = document.getElementById(id),\r\n            days = timer.querySelector('.days'),\r\n            hours = timer.querySelector('.hours'),\r\n            minutes = timer.querySelector('.minutes'),\r\n            seconds = timer.querySelector('.seconds'),\r\n            timeInterval = setInterval(updateClock, 1000);\r\n        // timer.style.padding = '20px';\r\n\r\n        function updateClock() {\r\n            let t = getTimeRemaining(endtime);\r\n\r\n            if (t.days >= 10) {\r\n                days.textContent = t.days;\r\n\r\n            } else {\r\n                days.textContent = '0' + t.days;\r\n\r\n            }\r\n\r\n            if (t.hours >= 10) {\r\n                hours.textContent = t.hours;\r\n\r\n            } else {\r\n                hours.textContent = '0' + t.hours;\r\n\r\n            }\r\n\r\n            if (t.minutes >= 10) {\r\n                minutes.textContent = t.minutes;\r\n\r\n            } else {\r\n                minutes.textContent = '0' + t.minutes;\r\n\r\n            }\r\n\r\n            if (t.seconds >= 10) {\r\n                seconds.textContent = t.seconds;\r\n\r\n            } else {\r\n                seconds.textContent = '0' + t.seconds;\r\n\r\n            }\r\n\r\n\r\n            if (t.total <= 0) {\r\n                clearInterval(timeInterval);\r\n\r\n            }\r\n        }\r\n\r\n\r\n\r\n    }\r\n    SetClock('timer', deadline);\r\n\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/css/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/css/bootstrap-grid.min.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/json.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/fonts/RobotoCondensed-Regular.ttf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/data.xml */ \"./src/assets/data.xml\");\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n// import less from '@/css/style.less';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n    \r\n  \r\n    let tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/js/parts/tabs.js\"),\r\n        timer = __webpack_require__(/*! ./parts/timer.js */ \"./src/js/parts/timer.js\"),\r\n        modal = __webpack_require__(/*! ./parts/modal.js */ \"./src/js/parts/modal.js\"),\r\n        form = __webpack_require__(/*! ./parts/form.js */ \"./src/js/parts/form.js\"),\r\n        slider = __webpack_require__(/*! ./parts/slider.js */ \"./src/js/parts/slider.js\"),\r\n        tel = __webpack_require__(/*! ./parts/tel.js */ \"./src/js/parts/tel.js\"),\r\n        calc = __webpack_require__(/*! ./parts/calc.js */ \"./src/js/parts/calc.js\");\r\n\r\n    \r\n    tabs();\r\n    calc();\r\n    form();\r\n    slider();\r\n    timer();\r\n    modal();\r\n    tel();\r\n\r\n\r\n    console.log('JSON:', !(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/json.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    console.log('XML:', _assets_data_xml__WEBPACK_IMPORTED_MODULE_2___default.a);\r\n\r\n\r\n\r\n\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });