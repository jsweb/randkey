(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('randkey', factory) :
  (global.randkey = factory());
}(this, function () { 'use strict';

  var rk = {
    rand: function rand() {
      var n = Math.random() * Date.now()
      return Math.round(n)
    },

    randx: function randx() {
      return rk.rand().toString(16)
    },

    randxx: function randxx() {
      return rk.rand().toString(32)
    },

    randxxx: function randxxx() {
      return rk.rand().toString(36)
    },

    id4bits: function id4bits() {
      return rk.randxxx().substr(0, 4)
    },

    id8bits: function id8bits() {
      return [rk.id4bits(), rk.id4bits()].join('')
    },

    id16bits: function id16bits() {
      return [rk.id8bits(), rk.id8bits()].join('')
    },

    id32bits: function id32bits() {
      return [rk.id16bits(), rk.id16bits()].join('')
    },

    uuid: function uuid() {
      return [
        rk.id8bits(),
        rk.id4bits(),
        rk.id4bits(),
        rk.id4bits(),
        rk.id16bits().substr(0, 12)
      ].join('-')
    }
  }

  return rk;

}));