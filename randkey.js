!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define("randkey",i):t.randkey=i()}(this,function(){"use strict";var t=function(){};return t.prototype.rand=function(t){return void 0===t&&(t=0),t&&!isNaN(t)&&t>1&&t<37?this.rand().toString(parseInt(t)):Math.round(Math.random()*Date.now())},t.prototype.id4bits=function(){return this.rand(16).substr(0,4)},t.prototype.id8bits=function(){return[this.id4bits(),this.id4bits()].join("")},t.prototype.id16bits=function(){return[this.id8bits(),this.id8bits()].join("")},t.prototype.id32bits=function(){return[this.id16bits(),this.id16bits()].join("")},t.prototype.uuid=function(){var t,i;for(i=t="";t++<36;i+=51*t&52?(15^t?8^Math.random()*(20^t?16:4):4).toString(16):"-");return i},new t});
