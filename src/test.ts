import test from 'ava'
import * as rk from './randkey'

const rand = [...Array(50).keys()].map((i) => rk.rand(i))

const isBigInt = (k: string) => {
  const val = Number(k)
  return val > 1e9
}

const isHexNum = (k: string, n: number) => {
  const pattern = `[a-f\\d]{${n}}`
  const regex = new RegExp(pattern)
  return regex.test(k)
}

// rand(n)
test('rand(n) returns big integer string if n < 11', (t) => {
  t.plan(11)
  rand.slice(0, 11).forEach((k) => {
    t.true(isBigInt(k))
  })
})
test('rand(n) returns alphanumerical string with 7 to 12 chars if 11 <= n < 37', (t) => {
  t.plan(26)
  rand.slice(11, 37).forEach((k) => {
    t.true(/[a-z\d]{7,12}/.test(k))
  })
})
test('rand(n) returns big integer string if n > 36', (t) => {
  t.plan(13)
  rand.slice(37).forEach((k) => {
    t.true(isBigInt(k))
  })
})
test('rand(n) returns big integer string if n is undefined', (t) => {
  const k = rk.rand()
  t.true(isBigInt(k))
})
test('rand(n, l) returns string with l chars', (t) => {
  const k1 = rk.rand(2, 5)
  const k2 = rk.rand(2, 10)

  t.true(k1.length === 5)
  t.true(k2.length === 10)
})
test('rand(n, l) returns string with max 40 chars if l is undefined or l > 40', (t) => {
  const k1 = rk.rand(2)
  const k2 = rk.rand(2, 41)

  t.true(k1.length === 40)
  t.true(k2.length === 40)
})

// idHex(n)
const hex = rk.hex(5)
test(`idHex(n) returns string with n hexadecimal chars : ${hex}`, (t) => {
  t.true(isHexNum(hex, 5))
})

// id4()
const id4 = rk.id4()
test(`id4() returns string with 4 alphanumeric chars : ${id4}`, (t) => {
  t.true(isHexNum(id4, 4))
})

// id8()
const id8 = rk.id8()
test(`id8() returns string with 8 alphanumeric chars : ${id8}`, (t) => {
  t.true(isHexNum(id8, 8))
})

// id16()
const id16 = rk.id16()
test(`id16() returns string with 16 alphanumeric chars : ${id16}`, (t) => {
  t.true(isHexNum(id16, 16))
})

// id32()
const id32 = rk.id32()
test(`id32() returns string with 32 alphanumeric chars : ${id32}`, (t) => {
  t.true(isHexNum(id32, 32))
})

// id64()
const id64 = rk.id64()
test(`id64() returns string with 64 alphanumeric chars : ${id64}`, (t) => {
  t.true(isHexNum(id64, 64))
})

// uuid()
const uuid = rk.uuid()
test(`uuid() returns a valid UUID v4 : ${uuid}`, (t) => {
  const regex =
    /^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/
  t.true(regex.test(uuid))
})

// puid()
const puid = rk.puid()
test(`progressive base2 unique ID : ${puid}`, (t) => {
  const regex = /^[01]{5}-[0-3]{5}-[0-7]{5}-[a-f\d]{5}-[a-v\d]{5}$/
  t.true(regex.test(puid))
})

// huid()
const huid = rk.huid()
test(`hexadecimal unique ID : ${huid}`, (t) => {
  t.plan(5)
  huid.split('-').forEach((k) => t.true(isHexNum(k, 5)))
})

// wuid()
const wuid = rk.wuid()
test(`Windows Product Key like unique ID : ${wuid}`, (t) => {
  const regex = /^([a-z\d]{5}-?){5}$/
  t.true(regex.test(wuid))
})
