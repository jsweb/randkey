'use strict';

const rk = require('../randkey'),
    assert = require('assert'),
    [rnd, id4, id8, i16, i32, uuid] = [
        [...Array(37).keys()].map(i => rk.rand(i)),
        rk.id4bits(),
        rk.id8bits(),
        rk.id16bits(),
        rk.id32bits(),
        rk.uuid()
    ]

describe('randkey', () => {
    describe('rand(n)', () => {
        it('long integer if n < 2 or n > 36 or not a valid number', () => {
            rnd.slice(0, 2)
                .concat([37, null, undefined, '', 'lorem ipsum'])
                .map(i => rk.rand(i)).forEach(r => {
                    assert.equal(false, isNaN(r))
                    assert.equal(true, r > 1e6)
                })
        })
        
        it('long integer string with 11 to 41 chars if 2 <= n < 11', () => {
            rnd.slice(2, 11).forEach(r => {
                assert.equal(true, typeof r === 'string')
                assert.equal(true, 10 < r.length && r.length < 42)
                assert.equal(false, isNaN(r))
            })
        })
        
        it('alphanumerical string with 7 to 12 chars if 11 <= n < 37', () => {
            rnd.slice(11).forEach(r => {
                assert.equal(true, typeof r === 'string')
                assert.equal(true, 6 < r.length && r.length < 13)
                assert.equal(true, /\w+/.test(r))
            })
        })
    })
    
    describe('id4bits()', () => {
        it('hexadecimal number as string with 4 chars', () => {
            assert.equal(false, isNaN(parseInt(id4, 16)))
            assert.equal(true, typeof id4 === 'string')
            assert.equal(true, /\w+/.test(id4))
            assert.equal(4, id4.length)
        })
    })
    
    describe('id8bits()', () => {
        it('hexadecimal number as string with 8 chars', () => {
            assert.equal(false, isNaN(parseInt(id8, 16)))
            assert.equal(true, typeof id8 === 'string')
            assert.equal(true, /\w+/.test(id8))
            assert.equal(8, id8.length)
        })
    })
    
    describe('id16bits()', () => {
        it('hexadecimal number as string with 16 chars', () => {
            assert.equal(false, isNaN(parseInt(i16, 16)))
            assert.equal(true, typeof i16 === 'string')
            assert.equal(true, /\w+/.test(i16))
            assert.equal(16, i16.length)
        })
    })
    
    describe('id32bits()', () => {
        it('hexadecimal number as string with 32 chars', () => {
            assert.equal(false, isNaN(parseInt(i32, 16)))
            assert.equal(true, typeof i32 === 'string')
            assert.equal(true, /\w+/.test(i32))
            assert.equal(32, i32.length)
        })
    })
    
    describe('uuid()', () => {
        it('UUID like string', () => {
            assert.equal(true, /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(uuid))
        })
    })
})