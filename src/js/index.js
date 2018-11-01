document.addEventListener('DOMContentLoaded', function() {

    "use strict";
    let mainSlider = require('./parts/main-slider'),
        popups = require('./parts/popups'),
        more = require('./parts/more'),
        calc = require('./parts/calc');

    mainSlider();
    popups();
    more();
    calc();
});