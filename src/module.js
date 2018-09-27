const rfc = [8, 9, 'a', 'b']

const pick = (arr = []) => arr[Math.floor(Math.random() * arr.length)]

/**
 * Generates a random number as string with a radix.
 * The optional `radix` parameter must be a number from 2 to 36. Any other values will be ignored.
 *
 * @export {function}
 * @param {number} [radix=0] - Optional radix used to convert the number to string.
 * @returns {string}
 * @example
 * import { rand } from '@jsweb/randkey'
 *
 * rand()      // 555847878175
 * rand(2)     // '1001010000010000000001111111010100000110'
 * rand(8)     // '2036103777231'
 * rand(16)    // '12a82628ee7'
 * rand(32)    // '18vq5b2hq'
 * rand(36)    // 'fdqlsnvb'
 */
export function rand (radix = 0) {
  const vld = radix && isFinite(radix) && radix >= 2 && radix < 37
  const rdx = vld ? parseInt(radix, 10) : 10
  const rnd = Date.now() * Math.random()
  return Math.round(rnd).toString(rdx)
}

/**
 * Generates a random ID with 4 hexadecimal digits.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { id4 } from '@jsweb/randkey'
 *
 * id4()    // 'f9c1'
 */
export function id4 () {
  return rand(16).substr(0, 4)
}

/**
 * Generates a random ID with 8 hexadecimal digits.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { id8 } from '@jsweb/randkey'
 *
 * id8()    // 'bf9c61ed'
 */
export function id8 () {
  return rand(16).substr(0, 8)
}

/**
 * Generates a random ID with 16 hexadecimal digits.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { id16 } from '@jsweb/randkey'
 *
 * id16()    // '6c1f3ac8e0ba611d'
 */
export function id16 () {
  return `${id8()}${id8()}`
}

/**
 * Generates a random ID with 32 hexadecimal digits.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { id32 } from '@jsweb/randkey'
 *
 * id32()    // 'f17e3ac8e0ba925a61ed19016c1f2eb0'
 */
export function id32 () {
  return `${id16()}${id16()}`
}

/**
 * Generates a random ID with 64 hexadecimal digits.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { id64 } from '@jsweb/randkey'
 *
 * id64()    // 'f17e3ac8e0ba925a61ed19016c1f2eb0f17e3ac8e0ba925a61ed19016c1f2eb0'
 */
export function id64 () {
  return `${id32()}${id32()}`
}

/**
 * Generates a valid UUID v4 (RFC 4122 compilant).
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { uuid } from '@jsweb/randkey'
 *
 * uuid()    // 'c30663ff-a2d3-4e5d-b377-9e561e8e599b'
 */
export function uuid () {
  const x = pick(rfc)
  return [
    id8(),
    id4(),
    `4${rand(16).substr(0, 3)}`,
    `${x}${rand(16).substr(0, 3)}`,
    id16().substr(0, 12)
  ].join('-')
}

/**
 * Generates a random 5x5 ID with base2 progressive radix per block.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { puid } from '@jsweb/randkey'
 *
 * puid()    // 10100-13110-42720-98222-13prn
 */
export function puid () {
  return [
    rand(2),
    rand(4),
    rand(8),
    rand(16),
    rand(32)
  ].map((str) => str.substr(0, 5)).join('-')
}

/**
 * Generates a random 5x5 ID using a common radix for all blocks.
 * The optional `radix` parameter must be a number from 2 to 36. Any other values will be ignored.
 *
 * @export {function}
 * @param {number} [radix=0] - Optional radix used to convert block numbers to string.
 * @returns {string}
 * @example
 * import { ruid } from '@jsweb/randkey'
 *
 * ruid(8)    // 15124-22432-17325-45517-15522
 */
export function ruid (radix = 0) {
  return [
    rand(radix),
    rand(radix),
    rand(radix),
    rand(radix),
    rand(radix)
  ].map((str) => str.substr(0, 5)).join('-')
}

/**
 * Generates a random 5x5 ID with hexadecimal blocks.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { huid } from '@jsweb/randkey'
 *
 * huid()    // d74b8-124e7-15854-15c73-82909
 */
export function huid () {
  return ruid(16)
}

/**
 * Generates a random 5x5 ID with full alphanumerical blocks format, like Windows Product Key.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { wuid } from '@jsweb/randkey'
 *
 * wuid()    // 4c229-h9dj7-bko4b-db61x-8x2mm
 */
export function wuid () {
  return ruid(36)
}

/**
 * Literal object with all @jsweb/randkey methods.
 * This is the default export and the global window available object when used by CDN script tag.
 * But by performance reasons, it's preferable to import only necessary methods using tree shaking import.
 *
 * @export {object}
 * @example
 * import randkey from '@jsweb/randkey'
 *
 * randkey.uuid()    // 11fb2b22-e62c-499d-a271-3ffaf1961470
 */
const randkey = {
  rand,
  id4,
  id8,
  id16,
  id32,
  id64,
  uuid,
  puid,
  ruid,
  huid,
  wuid
}

export default randkey
