window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tel = require('./parts/tel.js'),
        calc = require('./parts/calc.js');

    tabs();
    calc();
    form();
    slider();
    timer();
    modal();
    tel();







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