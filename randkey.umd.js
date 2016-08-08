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

    rand16: function rand16() {
      return rk.rand().toString(16)
    },

    rand32: function rand32() {
      return rk.rand().toString(32)
    },

    rand36: function rand36() {
      return rk.rand().toString(36)
    },

    id4bits: function id4bits() {
      return rk.rand16().substr(0, 4)
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
