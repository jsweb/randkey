'use strict';

var assert = require('assert');

var rk = {
  rand(n) {
    const rnd = Math.random().toString().substr(2);
    const vld = n && !isNaN(n) && n >= 2 && n < 37;
    const rdx = vld ? parseInt(n) : 10;
    const num = parseInt(rnd);
    return num.toString(rdx);
  },

  id4() {
    return this.rand(16).substr(0, 4);
  },

  id8() {
    return this.rand(16).substr(0, 8);
  },

  id16() {
    return `${this.id8()}${this.id8()}`;
  },

  id32() {
    return `${this.id16()}${this.id16()}`;
  },

  id64() {
    return `${this.id32()}${this.id32()}`;
  },

  uuid() {
    let a, b;
    for (b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-');
    return b;
  }
};

const [rnd, id4, id8, id16, id32, id64, uuid] = [
  [...Array(50).keys()].map(rk.rand),
  rk.id4(),
  rk.id8(),
  rk.id16(),
  rk.id32(),
  rk.id64(),
  rk.uuid(),
];

describe('@jsweb/randkey', () => {
  describe('rand(n)', () => {
    it('long integer string if n < 11', () => {
      rnd
        .filter((k, i) => i < 11)
        .forEach((k) => {
          const val = Number(k);
          assert.equal(true, typeof k === 'string');
          assert.equal(true, Number.isInteger(val));
          assert.equal(true, val > 1e6);
        });
    });

    it('alphanumerical string between 10 and 17 chars if 11 <= n < 37', () => {
      rnd
        .filter((k, i) => i >= 11 && i < 37)
        .forEach((k) => {
          assert.equal(true, typeof k === 'string');
          assert.equal(true, k.length < 18);
          assert.equal(true, /[a-z\d]{10,17}/.test(k));
        });
    });

    it('long integer string if n >= 37', () => {
      rnd
        .filter((k, i) => i >= 37)
        .forEach((k) => {
          const val = Number(k);
          assert.equal(true, typeof k === 'string');
          assert.equal(true, Number.isInteger(val));
          assert.equal(true, val > 1e6);
        });
    });

    it('long integer string if n is not a valid number', () => {
      [null, undefined, true, false, '', 'lorem ipsum', {}, []]
        .map(rk.rand)
        .forEach((k) => {
          const val = Number(k);
          assert.equal(true, typeof k === 'string');
          assert.equal(true, Number.isInteger(val));
          assert.equal(true, val > 1e6);
        });
    });
  });

  describe('id4()', () => {
    it(`string with 4 hexadecimal chars : ${id4}`, () => {
      const num = parseInt(id4, 16);
      assert.equal(true, typeof id4 === 'string');
      assert.equal(true, /[a-f\d]{4}/.test(id4));
      assert.equal(true, Number.isInteger(num));
    });
  });

  describe('id8()', () => {
    it(`string with 8 hexadecimal chars : ${id8}`, () => {
      const num = parseInt(id8, 16);
      assert.equal(true, typeof id8 === 'string');
      assert.equal(true, /[a-f\d]{8}/.test(id8));
      assert.equal(true, Number.isInteger(num));
    });
  });

  describe('id16()', () => {
    it(`string with 16 hexadecimal chars : ${id16}`, () => {
      const num = parseInt(id16, 16);
      assert.equal(true, typeof id16 === 'string');
      assert.equal(true, /[a-f\d]{16}/.test(id16));
      assert.equal(true, Number.isInteger(num));
    });
  });

  describe('id32()', () => {
    it(`string with 32 hexadecimal chars : ${id32}`, () => {
      const num = parseInt(id32, 16);
      assert.equal(true, typeof id32 === 'string');
      assert.equal(true, /[a-f\d]{32}/.test(id32));
      assert.equal(true, Number.isInteger(num));
    });
  });

  describe('id64()', () => {
    it(`string with 64 hexadecimal chars : ${id64}`, () => {
      const num = parseInt(id64, 16);
      assert.equal(true, typeof id64 === 'string');
      assert.equal(true, /[a-f\d]{64}/.test(id64));
      assert.equal(true, Number.isInteger(num));
    });
  });

  describe('uuid()', () => {
    it(`valid UUID v4 string : ${uuid}`, () => {
      assert.equal(true, /^\w{8}-\w{4}-4\w{3}-[89ab]\w{3}-\w{12}$/.test(uuid));
    });
  });
});
