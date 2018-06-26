'use strict';

const rk = require('./dist/randkey'),
  assert = require('assert'),
  [rnd, id4, id8, i16, i32, i64, uuid] = [
    [...Array(50).keys()].map(i => rk.rand(i)),
    rk.id4bits(),
    rk.id8bits(),
    rk.id16bits(),
    rk.id32bits(),
    rk.id64bits(),
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

  describe('id4bits()', () => {
    it('hexadecimal number as 4 chars string', () => {
      assert.equal(false, isNaN(parseInt(id4, 16)))
      assert.equal(true, typeof id4 === 'string')
      assert.equal(true, /[a-f\d]{4}/.test(id4))
    })
  })

  describe('id8bits()', () => {
    it('hexadecimal number as 8 chars string', () => {
      assert.equal(false, isNaN(parseInt(id8, 16)))
      assert.equal(true, typeof id8 === 'string')
      assert.equal(true, /[a-f\d]{8}/.test(id8))
    })
  })

  describe('id16bits()', () => {
    it('hexadecimal number as 16 chars string', () => {
      assert.equal(false, isNaN(parseInt(i16, 16)))
      assert.equal(true, typeof i16 === 'string')
      assert.equal(true, /[a-f\d]{16}/.test(i16))
    })
  })

  describe('id32bits()', () => {
    it('hexadecimal number as 32 chars string', () => {
      assert.equal(false, isNaN(parseInt(i32, 16)))
      assert.equal(true, typeof i32 === 'string')
      assert.equal(true, /[a-f\d]{32}/.test(i32))
    })
  })

  describe('id64bits()', () => {
    it('hexadecimal number as 64 chars string', () => {
      assert.equal(false, isNaN(parseInt(i64, 16)))
      assert.equal(true, typeof i64 === 'string')
      assert.equal(true, /[a-f\d]{64}/.test(i64))
    })
  })

  describe('uuid()', () => {
    it('valid UUID v4 string', () => {
      assert.equal(true, /^\w{8}-\w{4}-4\w{3}-[89ab]\w{3}-\w{12}$/.test(uuid))
    })
  })
})
