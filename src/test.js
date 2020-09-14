import { strictEqual as equal } from 'assert'
import * as rk from './index.js'

const [rand, hex, id4, id8, id16, id32, id64, uuid, puid, huid, wuid] = [
  [...Array(50).keys()].map((i) => rk.rand(i)),
  rk.hex(5),
  rk.id4(),
  rk.id8(),
  rk.id16(),
  rk.id32(),
  rk.id64(),
  rk.uuid(),
  rk.puid(),
  rk.huid(),
  rk.wuid(),
]

const bigTest = (k) => {
  const val = Number(k)
  equal(val > 1e9, true, k)
}

const hexTest = (k, n) => {
  const pattern = `[a-f\\d]{${n}}`
  const regex = new RegExp(pattern)
  const test = regex.test(k)
  equal(test, true, k)
}

describe('@jsweb/randkey', () => {
  describe('rand(n)', () => {
    it('big integer string if n < 11', () => rand.slice(0, 11).forEach(bigTest))

    it('alphanumerical string with 7 to 12 chars if 11 <= n < 37', () => {
      rand.slice(11, 26).forEach((k) => equal(/[a-z\d]{7,12}/.test(k), true, k))
    })

    it('big integer string if n >= 37', () => rand.slice(37).forEach(bigTest))

    it('big integer string if n is not a valid number', () => {
      ;[null, undefined, true, false, 'lorem', {}, []]
        .map((k) => rk.rand(k))
        .forEach(bigTest)
    })
  })

  describe('idHex(n)', () => {
    it(`string with 'n' hexadecimal chars : ${hex}`, () => hexTest(hex, 5))
  })

  describe('id4()', () => {
    it(`string with 4 hexadecimal chars : ${id4}`, () => hexTest(id4, 4))
  })

  describe('id8()', () => {
    it(`string with 8 hexadecimal chars : ${id8}`, () => hexTest(id8, 8))
  })

  describe('id16()', () => {
    it(`string with 16 hexadecimal chars : ${id16}`, () => hexTest(id16, 16))
  })

  describe('id32()', () => {
    it(`string with 32 hexadecimal chars : ${id32}`, () => hexTest(id32, 32))
  })

  describe('id64()', () => {
    it(`string with 64 hexadecimal chars : ${id64}`, () => hexTest(id64, 64))
  })

  describe('uuid()', () => {
    it(`valid UUID v4 : ${uuid}`, () => {
      const parts = uuid.split('-')

      hexTest(parts[0], 8)
      hexTest(parts[1], 4)
      hexTest(parts[2], 4)
      hexTest(parts[3], 4)
      hexTest(parts[4], 12)

      equal(parts[2].startsWith(4), true, parts[2])
      equal(/^[89ab]/.test(parts[3]), true, parts[3])
    })
  })

  describe('puid()', () => {
    it(`progressive base2 unique ID : ${puid}`, () => {
      const regex = /^[01]{5}-[0-3]{5}-[0-7]{5}-[a-f\d]{5}-[a-v\d]{5}$/
      equal(regex.test(puid), true, puid)
    })
  })

  describe('huid()', () => {
    it(`hexadecimal unique ID : ${huid}`, () => {
      huid.split('-').forEach((k) => hexTest(k, 5))
    })
  })

  describe('wuid()', () => {
    it(`Windows Key like unique ID : ${wuid}`, () => {
      const regex = /^([a-z\d]{5}-?){5}$/
      equal(regex.test(wuid), true, wuid)
    })
  })
})
