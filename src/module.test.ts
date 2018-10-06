import { strictEqual as equal } from 'assert';
import * as rk from './module';

const [rnd, id4, id8, id16, id32, id64, uuid, puid, huid, wuid] = [
  [...Array(50).keys()].map(rk.rand),
  rk.id4(),
  rk.id8(),
  rk.id16(),
  rk.id32(),
  rk.id64(),
  rk.uuid(),
  rk.puid(),
  rk.huid(),
  rk.wuid(),
];

const big = (k: any) => {
  const val = Number(k);
  equal(val > 1e9, true, k);
};

describe('@jsweb/randkey', () => {
  describe('rand(n)', () => {
    it('big integer string if n < 11', () => {
      rnd
        .filter((k, i) => k && i < 11)
        .forEach(big);
    });

    it('alphanumerical string with 7 to 12 chars if 11 <= n < 37', () => {
      rnd
        .filter((k, i) => k && i >= 11 && i < 37)
        .forEach((k) => {
          equal(/[a-z\d]{7,12}/.test(k), true, k);
        });
    });

    it('big integer string if n >= 37', () => {
      rnd
        .filter((k, i) => k && i >= 37)
        .forEach(big);
    });

    it('big integer string if n is not a valid number', () => {
      [null, undefined, true, false, '', 'lorem ipsum', {}, []]
        .map(rk.rand)
        .forEach(big);
    });
  });

  describe('id4()', () => {
    it(`string with 4 hexadecimal chars : ${id4}`, () => {
      equal(/[a-f\d]{4}/.test(id4), true, id4);
    });
  });

  describe('id8()', () => {
    it(`string with 8 hexadecimal chars : ${id8}`, () => {
      equal(/[a-f\d]{8}/.test(id8), true, id8);
    });
  });

  describe('id16()', () => {
    it(`string with 16 hexadecimal chars : ${id16}`, () => {
      equal(/[a-f\d]{16}/.test(id16), true, id16);
    });
  });

  describe('id32()', () => {
    it(`string with 32 hexadecimal chars : ${id32}`, () => {
      equal(/[a-f\d]{32}/.test(id32), true, id32);
    });
  });

  describe('id64()', () => {
    it(`string with 64 hexadecimal chars : ${id64}`, () => {
      equal(/[a-f\d]{64}/.test(id64), true, id64);
    });
  });

  describe('uuid()', () => {
    it(`valid UUID v4 : ${uuid}`, () => {
      equal(/^\w{8}-\w{4}-4\w{3}-[89ab]\w{3}-\w{12}$/.test(uuid), true, uuid);
    });
  });

  describe('puid()', () => {
    it(`progressive base2 unique ID : ${puid}`, () => {
      equal(/^[01]{5}-[0-3]{5}-[0-7]{5}-[a-f\d]{5}-[a-v\d]{5}$/.test(puid), true, puid);
    });
  });

  describe('huid()', () => {
    it(`hexadecimal unique ID : ${huid}`, () => {
      equal(/^[a-f\d]{5}-[a-f\d]{5}-[a-f\d]{5}-[a-f\d]{5}-[a-f\d]{5}$/.test(huid), true, huid);
    });
  });

  describe('wuid()', () => {
    it(`Windows Key like unique ID : ${wuid}`, () => {
      equal(/^[a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5}$/.test(wuid), true, wuid);
    });
  });
});
