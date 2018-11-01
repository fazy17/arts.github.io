document.addEventListener('DOMContentLoaded', function() {

    "use strict";
    let mainSlider = require('./parts/main-slider'),
        popups = require('./parts/popups'),
        more = require('./parts/more'),
        calc = require('./parts/calc'),
        features = require('./parts/features'),
        form = require('./parts/form'),
        filter = require('./parts/filter');

    mainSlider();
    popups();
    more();
    calc();
    features();
    form();
    filter();
});