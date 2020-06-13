/**
 * @name @jsweb/randkey
 * @version 4.0.4
 * @desc Simple JS module to generate random id/key/hash in various formats, including UUID v4
 * @author Alex Bruno Cáceres <git.alexbr@outlook.com>
 * @create date 2016-06-26 03:21:18
 * @modify date 2020-06-13 20:12:45
 */
const rfc = [8, 9, 'a', 'b'];
const pick = (arr = []) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Generates a random number as string with a radix.
 * A valid optional `radix` parameter can be a number from 2 to 36. Any other values will be ignored.
 *
 * @export {function}
 * @param {*} [radix] - Optional radix used to convert the number to string.
 * @returns {string}
 * @example
 * import { rand } from '@jsweb/randkey'
 *
 * rand()      // '555847878175'
 * rand(2)     // '1001010000010000000001111111010100000110'
 * rand(8)     // '2036103777231'
 * rand(16)    // '12a82628ee7'
 * rand(32)    // '18vq5b2hq'
 * rand(36)    // 'fdqlsnvb'
 */
function rand(radix) {
  const vld = radix && isFinite(radix) && radix >= 2 && radix < 37;
  const rdx = vld ? parseInt(radix, 10) : 10;
  const rnd = Date.now() * Math.random();
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
function id4() {
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
function id8() {
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
function id16() {
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
function id32() {
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
function id64() {
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
function uuid() {
  const x = pick(rfc);
  return [
    id8(),
    id4(),
    `4${rand(16).substr(0, 3)}`,
    `${x}${rand(16).substr(0, 3)}`,
    id16().substr(0, 12),
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
function puid() {
  return [rand(2), rand(4), rand(8), rand(16), rand(32)]
    .map((str) => str.substr(0, 5))
    .join('-')
}

/**
 * Generates a random 5x5 ID using a common radix for all blocks.
 * A valid optional `radix` parameter can be a number from 2 to 36. Any other values will be ignored.
 *
 * @export {function}
 * @param {number} [radix=0] - Optional radix used to convert block numbers to string.
 * @returns {string}
 * @example
 * import { ruid } from '@jsweb/randkey'
 *
 * ruid(8)    // 15124-22432-17325-45517-15522
 */
function ruid(radix) {
  return [rand(radix), rand(radix), rand(radix), rand(radix), rand(radix)]
    .map((str) => str.substr(0, 5))
    .join('-')
}

/**
 * Generates a random 5x5 ID with hexadecimal blocks.
 * This is only an alias for `ruid(16)`.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { huid } from '@jsweb/randkey'
 *
 * huid()    // d74b8-124e7-15854-15c73-82909
 */
function huid() {
  return ruid(16)
}

/**
 * Generates a random 5x5 ID with full alphanumerical blocks format, like Windows Product Key.
 * This is only an alias for `ruid(36)`.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { wuid } from '@jsweb/randkey'
 *
 * wuid()    // 7wuiu-e4fw7-ari12-3z50r-iv04x
 */
function wuid() {
  return ruid(36)
}

export { huid, id16, id32, id4, id64, id8, puid, rand, ruid, uuid, wuid };
