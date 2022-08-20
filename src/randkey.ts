import { getRandomItem } from '@jsweb/utils/modules/array'
import { isBetween } from '@jsweb/utils/modules/number'

/**
 * Generates a random number as string with optional radix and size limit.
 * The `radix` parameter can be a number from 2 to 36. Default is 10, which generates base 10 random numbers.
 * The `limit` size parameter can be a number from 1 to 40. Default is 40, which is the bigger possible.
 * Keep in mind that `radix` can automatic limit the result max size.
 *
 * @export {function}
 * @param {number} [radix=10] - Optional radix used to convert the number to string.
 * @param {number} [limit=40] - Optional size limit used to cut the string result.
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
export function rand(radix: number = 10, limit: number = 40): string {
  const rnd = Date.now() * Math.random()
  const rdx = isBetween(radix, 2, 36) ? radix : 10
  const cut = isBetween(limit, 1, 40) ? limit : 40
  const result = Math.round(rnd).toString(rdx).substring(0, cut)

  return result
}

/**
 * Generates a random hexadecimal number as string with optional custom size limit.
 * Size limit must be from 1 to 11. Default is 11, which is the bigger possible.
 * It is just an alias for `rand(16, limit)`.
 *
 * @export {function}
 * @param {number} [limit=11] - Optional size limit used to cut the string result.
 * @returns {string}
 * @example
 * import { hex } from '@jsweb/randkey'
 *
 * hex(6)    // 'f9c1d0'
 */
export function hex(limit: number = 11): string {
  return rand(16, limit)
}

/**
 * Generates a random ID with 4 hexadecimal digits. It is just an alias for `hex(4)`.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { id4 } from '@jsweb/randkey'
 *
 * id4()    // 'f9c1'
 */
export function id4(): string {
  return hex(4)
}

/**
 * Generates a random ID with 8 hexadecimal digits. It is just an alias for `hex(8)`.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { id8 } from '@jsweb/randkey'
 *
 * id8()    // 'd74b8ed'
 */
export function id8(): string {
  return hex(8)
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
export function id16(): string {
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
export function id32(): string {
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
export function id64(): string {
  return `${id32()}${id32()}`
}

/**
 * Generates a valid UUID v4 (RFC 4122 compliant).
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { uuid } from '@jsweb/randkey'
 *
 * uuid()    // 'c30663ff-a2d3-4e5d-b377-9e561e8e599b'
 */
export function uuid(): string {
  const rfc = [8, 9, 'a', 'b']

  return [
    id8(),
    id4(),
    `4${hex(3)}`,
    `${getRandomItem(rfc)}${hex(3)}`,
    `${hex(6)}${hex(6)}`,
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
export function puid(): string {
  return [2, 4, 6, 8, 16].map((i) => rand(i, 5)).join('-')
}

/**
 * Generates a random 5x5 ID using a common radix for all blocks using `rand(radix, 5)`.
 * The `radix` parameter can be a number from 2 to 36. Default is 10, which generates base 10 random blocks.
 *
 * @export {function}
 * @param {number} [radix=10] - Optional radix used to convert block numbers to string.
 * @returns {string}
 * @example
 * import { ruid } from '@jsweb/randkey'
 *
 * ruid(8)    // 15124-22432-17325-45517-15522
 */
export function ruid(radix: number = 10): string {
  return Array(5)
    .fill(radix)
    .map((i) => rand(i, 5))
    .join('-')
}

/**
 * Generates a random 5x5 ID with hexadecimal blocks.
 * It is just an alias for `ruid(16)`.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { huid } from '@jsweb/randkey'
 *
 * huid()    // d74b8-124e7-15854-15c73-82909
 */
export function huid(): string {
  return ruid(16)
}

/**
 * Generates a random 5x5 ID with alphanumerical blocks, like Windows Product Key.
 * It is just an alias for `ruid(36)`.
 *
 * @export {function}
 * @returns {string}
 * @example
 * import { wuid } from '@jsweb/randkey'
 *
 * wuid()    // 7wuiu-e4fw7-ari12-3z50r-iv04x
 */
export function wuid(): string {
  return ruid(36)
}
