# @jsweb/randkey

![js-umd](https://img.shields.io/badge/js-umd-green.svg?style=for-the-badge)
![ecma-module](https://img.shields.io/badge/ecma-module-green.svg?style=for-the-badge)
![transpiler-babel](https://img.shields.io/badge/transpiler-babel-green.svg?style=for-the-badge)
![js-standard-style](https://img.shields.io/badge/code%20style-standard-green.svg?style=for-the-badge)

Simple JS module to generate random id/key/hash in various formats, including UUID.

See tests at [https://randkey.jsweb.app](https://randkey.jsweb.app)

***

## Installation

You can install it with NPM, Yarn or via Unpkg CDN:

### CDN

```html
<script src="https://unpkg.com/@jsweb/randkey"></script>
```

## Usage

### ES6

```javascript
import randkey from '@jsweb/randkey'
```

### CommonJS

```javascript
let randkey = require('@jsweb/randkey')
```

### Global

If you install a `script` tag to your HTML, `randkey` object will be global available.

## Methods

### randkey.rand(n)

a random number or string by operations witn `Math.random()` and `Date.now()`.

The `n` optional argument must to be a number from 2 to 36 to be used with `toString(n)`. Any other values will be ignored.

If a valid `n` was provided, the method will return a string, else will return a number.

```javascript
randkey.rand()      // 555847878175
randkey.rand(2)     // '1001010000010000000001111111010100000110'
randkey.rand(8)     // '2036103777231'
randkey.rand(16)    // '12a82628ee7'
randkey.rand(32)    // '18vq5b2hq'
randkey.rand(36)    // 'fdqlsnvb'
```

**Deprecation note:** the old methods `rand16()`, `rand32()` and `rand36()` was deprecated in favour to `rand(n)`.

### randkey.id4()

hexadecimal number as string with 4 chars.

```javascript
randkey.id4() // 'f9c1'
```

### randkey.id8()

hexadecimal number as string with 8 chars.

```javascript
randkey.id8() // 'bf9c61ed'
```

### randkey.id16()

hexadecimal number as string with 16 chars.

```javascript
randkey.id16() // '6c1f3ac8e0ba611d'
```

### randkey.id32()

hexadecimal number as string with 32 chars.

```javascript
randkey.id32() // 'f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### randkey.id64()

hexadecimal number as string with 64 chars.

```javascript
randkey.id64() // 'f17e3ac8e0ba925a61ed19016c1f2eb0f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### randkey.uuid()

Valid UUID v4 string.

```javascript
randkey.uuid() // 'c30663ff-a2d3-4e5d-b377-9e561e8e599b'
```
