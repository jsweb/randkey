# @jsweb/randkey

![js-umd](https://img.shields.io/badge/js-umd-blue.svg?style=for-the-badge)
![ecma-module](https://img.shields.io/badge/ecma-module-blue.svg?style=for-the-badge)
![npm-package](https://img.shields.io/badge/npm-package-blue.svg?style=for-the-badge)
![eslint-standard](https://img.shields.io/badge/eslint-standard-blue.svg?style=for-the-badge)
![transpiler-babel](https://img.shields.io/badge/transpiler-babel-blue.svg?style=for-the-badge)
![tests-mocha](https://img.shields.io/badge/tests-mocha-blue.svg?style=for-the-badge)

Simple JS module to generate random id/key/hash in various formats, including UUID.

See tests at [https://randkey.jsweb.app](https://randkey.jsweb.app)

***

## Installation

You can install it with NPM, Yarn or via Unpkg CDN:

```
npm i -S @jsweb/randkey
```

```
yarn add @jsweb/randkey
```

```html
<script src="https://unpkg.com/@jsweb/randkey"></script>
```

## Usage

### CommonJS

```javascript
const randkey = require('@jsweb/randkey')
```

### ES6

```javascript
import randkey from '@jsweb/randkey'
// or with tree shaking
import { id16, uuid } from '@jsweb/randkey'
```

### Global

If you install a `script` tag to your HTML, `randkey` object will be global available.

## Methods

### randkey.rand(radix = 0)

Generates a random number as string with a radix.

The optional `radix` parameter must be a number from 2 to 36. Any other values will be ignored.

```javascript
randkey.rand()      // 555847878175
randkey.rand(2)     // 1001010000010000000001111111010100000110
randkey.rand(8)     // 2036103777231
randkey.rand(16)    // 12a82628ee7
randkey.rand(32)    // 18vq5b2hq
randkey.rand(36)    // fdqlsnvb
```

### randkey.id4()

Generates a random ID with 4 hexadecimal digits.

```javascript
randkey.id4() // f9c1
```

### randkey.id8()

Generates a random ID with 8 hexadecimal digits.

```javascript
randkey.id8() // bf9c61ed
```

### randkey.id16()

Generates a random ID with 16 hexadecimal digits.

```javascript
randkey.id16() // 6c1f3ac8e0ba611d
```

### randkey.id32()

Generates a random ID with 32 hexadecimal digits.

```javascript
randkey.id32() // f17e3ac8e0ba925a61ed19016c1f2eb0
```

### randkey.id64()

Generates a random ID with 64 hexadecimal digits.

```javascript
randkey.id64() // f17e3ac8e0ba925a61ed19016c1f2eb0f17e3ac8e0ba925a61ed19016c1f2eb0
```

### randkey.uuid()

Generates a valid UUID v4 (RFC 4122 compilant).

```javascript
randkey.uuid() // c30663ff-a2d3-4e5d-b377-9e561e8e599b
```

### randkey.puid()

Generates a random 5x5 ID with base2 progressive radix per block.

```javascript
randkey.puid() // 10100-13110-42720-98222-13prn
```

### randkey.ruid(radix = 0)

Generates a random 5x5 ID using a common radix for all blocks.

The optional `radix` parameter must be a number from 2 to 36. Any other values will be ignored.

```javascript
randkey.ruid(8) // 15124-22432-17325-45517-15522
```

### randkey.huid()

Generates a random 5x5 ID with hexadecimal blocks.

This is only an alias for `ruid(16)`.

```javascript
randkey.huid() // d74b8-124e7-15854-15c73-82909
```

### randkey.wuid()

Generates a random 5x5 ID with full alphanumerical blocks format, like Windows Product Key.

This is only an alias for `ruid(36)`.

```javascript
randkey.wuid() // 4c229-h9dj7-bko4b-db61x-8x2mm
```
