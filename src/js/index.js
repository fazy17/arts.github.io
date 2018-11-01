document.addEventListener('DOMContentLoaded', function() {

    "use strict";
    let mainSlider = require('./parts/main-slider'),
        popups = require('./parts/popups');

    mainSlider();
    popups();
});