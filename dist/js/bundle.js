!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/js/index.js")}({"./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */function(e,t,n){document.addEventListener("DOMContentLoaded",function(){"use strict";let e=n(/*! ./parts/main-slider */"./src/js/parts/main-slider.js"),t=n(/*! ./parts/popups */"./src/js/parts/popups.js"),o=n(/*! ./parts/more */"./src/js/parts/more.js"),l=n(/*! ./parts/calc */"./src/js/parts/calc.js");e(),t(),o(),l()})},"./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=document.getElementsByTagName("select")[0],t=document.getElementsByTagName("select")[1],n=document.getElementsByTagName("select")[2],o=document.querySelector(".promocode"),l=document.querySelector(".calc-price"),s=0;e.addEventListener("change",function(){totalSize=+this[this.selectedIndex].value,"Выберите материал картины"==t[t.selectedIndex].value||"Выберите размер картины"==e[e.selectedIndex].value?l.textContent="Для расчета нужно выбрать размер картины и материал картины":(s=totalSize+totalMaterial,l.textContent=s,"IWANTPOPART"==o.value&&(s-=s/100*30,l.textContent=s))}),t.addEventListener("click",function(){totalMaterial=+this[this.selectedIndex].value,"Выберите размер картины"==e[e.selectedIndex].value||"Выберите материал картины"==t[t.selectedIndex].value?l.textContent="Для расчета нужно выбрать размер картины и материал картины":(s=totalSize+totalMaterial,l.textContent=s,"IWANTPOPART"==o.value&&(s-=s/100*30,l.textContent=s))}),n.addEventListener("click",function(){totalOthersAmenities=+this[this.selectedIndex].value,"Выберите размер картины"==e[e.selectedIndex].value||"Выберите материал картины"==t[t.selectedIndex].value||"Дополнительные услуги"==n[n.selectedIndex].value?l.textContent=s:(totalOthers=totalSize+totalMaterial+totalOthersAmenities,l.textContent=totalOthers,"IWANTPOPART"==o.value&&(totalOthers-=totalOthers/100*30,l.textContent=totalOthers))}),o.addEventListener("change",function(){"Дополнительные услуги"!=n[n.selectedIndex].value&&"IWANTPOPART"==this.value?(totalPromo=totalOthers-totalOthers/100*30,l.textContent=totalPromo):"Дополнительные услуги"!=n[n.selectedIndex].value?l.textContent=totalOthers:l.textContent=s})}},"./src/js/parts/main-slider.js":
/*!*************************************!*\
  !*** ./src/js/parts/main-slider.js ***!
  \*************************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=document.querySelectorAll(".main-slider-item"),t=1;function n(n){!function(n){n>e.length&&(t=1),n<1&&(t=e.length),e.forEach(e=>e.style.display="none"),e[t-1].style.display="block",e[t-1].className="animated slideInDown"}(t+=n)}e[0].style.display="none",setTimeout(function e(){n(t<=1?1:-1),setTimeout(e,5e3)})}},"./src/js/parts/more.js":
/*!******************************!*\
  !*** ./src/js/parts/more.js ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=document.querySelector(".button-styles"),t=document.querySelectorAll(".styles-2");e.addEventListener("click",function(){!function(){e.style.display="none";for(let e=0;e<t.length;e++)t[e].className="",t[e].className="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2"}()})}},"./src/js/parts/popups.js":
/*!********************************!*\
  !*** ./src/js/parts/popups.js ***!
  \********************************/
/*! no static exports found */function(e,t){e.exports=function(){!function(){let e=document.querySelectorAll(".button-design"),t=document.querySelector(".popup-design"),n=t.querySelector(".popup-close");for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(){t.style.display="flex",document.body.style.overflow="hidden"});function o(){t.style.display="none",document.body.style.overflow=""}n.addEventListener("click",function(){o()}),t.addEventListener("click",function(){o()})}(),function(){let e=document.querySelectorAll(".button-consultation"),t=document.querySelector(".popup-consultation"),n=t.querySelector(".popup-close");for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(){t.style.display="flex",document.body.style.overflow="hidden"});function o(){t.style.display="none",document.body.style.overflow=""}n.addEventListener("click",function(){o()}),t.addEventListener("click",function(){o()})}(),function(){let e=document.querySelector(".fixed-gift"),t=document.querySelector(".popup-gift"),n=t.querySelector(".popup-close");function o(){t.style.display="none",document.body.style.overflow=""}e.addEventListener("click",function(){t.style.display="flex",e.style.display="none",document.body.style.overflow="hidden"}),n.addEventListener("click",function(){o()}),t.addEventListener("click",function(){o()})}()}}});