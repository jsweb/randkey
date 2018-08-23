import { equal } from 'assert';
import rk from './randkey';

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
          equal(true, typeof k === 'string');
          equal(true, Number.isInteger(val));
          equal(true, val > 1e6);
        });
    });

    it('alphanumerical string between 10 and 17 chars if 11 <= n < 37', () => {
      rnd
        .filter((k, i) => i >= 11 && i < 37)
        .forEach((k) => {
          equal(true, typeof k === 'string');
          equal(true, k.length < 18);
          equal(true, /[a-z\d]{10,17}/.test(k));
        });
    });

    it('long integer string if n >= 37', () => {
      rnd
        .filter((k, i) => i >= 37)
        .forEach((k) => {
          const val = Number(k);
          equal(true, typeof k === 'string');
          equal(true, Number.isInteger(val));
          equal(true, val > 1e6);
        });
    });

    it('long integer string if n is not a valid number', () => {
      [null, undefined, true, false, '', 'lorem ipsum', {}, []]
        .map(rk.rand)
        .forEach((k) => {
          const val = Number(k);
          equal(true, typeof k === 'string');
          equal(true, Number.isInteger(val));
          equal(true, val > 1e6);
        });
    });
  });

  describe('id4()', () => {
    it(`string with 4 hexadecimal chars : ${id4}`, () => {
      const num = parseInt(id4, 16);
      equal(true, typeof id4 === 'string');
      equal(true, /[a-f\d]{4}/.test(id4));
      equal(true, Number.isInteger(num));
    });
  });

  describe('id8()', () => {
    it(`string with 8 hexadecimal chars : ${id8}`, () => {
      const num = parseInt(id8, 16);
      equal(true, typeof id8 === 'string');
      equal(true, /[a-f\d]{8}/.test(id8));
      equal(true, Number.isInteger(num));
    });
  });

  describe('id16()', () => {
    it(`string with 16 hexadecimal chars : ${id16}`, () => {
      const num = parseInt(id16, 16);
      equal(true, typeof id16 === 'string');
      equal(true, /[a-f\d]{16}/.test(id16));
      equal(true, Number.isInteger(num));
    });
  });

  describe('id32()', () => {
    it(`string with 32 hexadecimal chars : ${id32}`, () => {
      const num = parseInt(id32, 16);
      equal(true, typeof id32 === 'string');
      equal(true, /[a-f\d]{32}/.test(id32));
      equal(true, Number.isInteger(num));
    });
  });

  describe('id64()', () => {
    it(`string with 64 hexadecimal chars : ${id64}`, () => {
      const num = parseInt(id64, 16);
      equal(true, typeof id64 === 'string');
      equal(true, /[a-f\d]{64}/.test(id64));
      equal(true, Number.isInteger(num));
    });
  });

  describe('uuid()', () => {
    it(`valid UUID v4 string : ${uuid}`, () => {
      equal(true, /^\w{8}-\w{4}-4\w{3}-[89ab]\w{3}-\w{12}$/.test(uuid));
    });
  });
});
