/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2016-06-26 03:21:18
 * @desc Simple JS module to generate random id/key/hash in various formats, including UUID
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.randkey = factory());
}(this, (function () { 'use strict';

  var randkey = {rand(a){const b=Math.random().toString().substr(2),c=a&&!isNaN(a)&&2<=a&&37>a,d=c?parseInt(a):10,e=parseInt(b);return e.toString(d)},id4(){return this.rand(16).substr(0,4)},id8(){return this.rand(16).substr(0,8)},id16(){return `${this.id8()}${this.id8()}`},id32(){return `${this.id16()}${this.id16()}`},id64(){return `${this.id32()}${this.id32()}`},uuid(){let c,d;for(d=c='';36>c++;d+=52&51*c?(15^c?8^Math.random()*(20^c?16:4):4).toString(16):'-');return d}};

  return randkey;

})));
