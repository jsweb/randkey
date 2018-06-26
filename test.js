'use strict';

const rk = require('./dist/randkey'),
  assert = require('assert'),
  [rnd, id4, id8, id16, id32, id64, uuid] = [
    [...Array(50).keys()].map(i => rk.rand(i)),
    rk.id4(),
    rk.id8(),
    rk.id16(),
    rk.id32(),
    rk.id64(),
    rk.uuid()
  ]

describe('randkey', () => {
  describe('rand(n)', () => {
    it('long integer string if n < 11', () => {
      rnd.filter((k, i) => i < 11).forEach(k => {
        assert.equal(false, isNaN(k))
        assert.equal(true, parseInt(k) > 1e6)
        assert.equal(true, typeof k === 'string')
      })
    })

    it('alphanumerical string between 10 and 17 chars if 11 <= n < 37', () => {
      rnd.filter((k, i) => i >= 11 && i < 37).forEach(k => {
        assert.equal(true, k.length < 18)
        assert.equal(true, typeof k === 'string')
        assert.equal(true, /[a-z\d]{10,17}/.test(k))
      })
    })

    it('long integer string if n >= 37', () => {
      rnd.filter((k, i) => i >= 37).forEach(k => {
        assert.equal(false, isNaN(k))
        assert.equal(true, parseInt(k) > 1e6)
        assert.equal(true, typeof k === 'string')
      })
    })

    it('long integer string if n is not a valid number', () => {
      [null, undefined, true, false, '', 'lorem ipsum', {}].map(k => rk.rand(k))
        .forEach(k => {
          assert.equal(false, isNaN(k))
          assert.equal(true, parseInt(k) > 1e6)
          assert.equal(true, typeof k === 'string')
        })
    })
  })

  describe('id4()', () => {
    it(`string with 4 hexadecimal chars : ${id4}`, () => {
      assert.equal(false, isNaN(parseInt(id4, 16)))
      assert.equal(true, typeof id4 === 'string')
      assert.equal(true, /[a-f\d]{4}/.test(id4))
    })
  })

  describe('id8()', () => {
    it(`string with 8 hexadecimal chars : ${id8}`, () => {
      assert.equal(false, isNaN(parseInt(id8, 16)))
      assert.equal(true, typeof id8 === 'string')
      assert.equal(true, /[a-f\d]{8}/.test(id8))
    })
  })

  describe('id16()', () => {
    it(`string with 16 hexadecimal chars : ${id16}`, () => {
      assert.equal(false, isNaN(parseInt(id16, 16)))
      assert.equal(true, typeof id16 === 'string')
      assert.equal(true, /[a-f\d]{16}/.test(id16))
    })
  })

  describe('id32()', () => {
    it(`string with 32 hexadecimal chars : ${id32}`, () => {
      assert.equal(false, isNaN(parseInt(id32, 16)))
      assert.equal(true, typeof id32 === 'string')
      assert.equal(true, /[a-f\d]{32}/.test(id32))
    })
  })

  describe('id64()', () => {
    it(`string with 64 hexadecimal chars : ${id64}`, () => {
      assert.equal(false, isNaN(parseInt(id64, 16)))
      assert.equal(true, typeof id64 === 'string')
      assert.equal(true, /[a-f\d]{64}/.test(id64))
    })
  })

  describe('uuid()', () => {
    it('valid UUID v4 string', () => {
      assert.equal(true, /^\w{8}-\w{4}-4\w{3}-[89ab]\w{3}-\w{12}$/.test(uuid))
    })
  })
})
