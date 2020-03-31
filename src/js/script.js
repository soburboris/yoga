'use strict';

import * as $ from 'jquery';
import style from '../css/style.css';
import bootstrap from '../css/bootstrap-grid.min.css'; // import less from '@/css/style.less';


import json from '../json.json';
import font from '../fonts/RobotoCondensed-Regular.ttf';
import xml from '../assets/data.xml';
window.addEventListener('DOMContentLoaded', function () {

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
  console.log('JSON:', json);
  console.log('XML:', xml);
});