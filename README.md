# @jsweb/randkey

Simple JS module to generate random id/key/hash in various formats, including UUID.

See tests at [https://randkey.jsweb.app](https://randkey.jsweb.app)

![npm-package](https://img.shields.io/badge/npm-package-blue.svg?style=for-the-badge)
![es6-module](https://img.shields.io/badge/es6-module-blue.svg?style=for-the-badge)
![tests-mocha](https://img.shields.io/badge/tests-mocha-blue.svg?style=for-the-badge)

---

## Installation

You can install it with NPM, Yarn or get from Unpkg CDN:

`npm i -S @jsweb/randkey`

`yarn add @jsweb/randkey`

Unpkg CDN: https://unpkg.com/@jsweb/randkey

## Usage

`@jsweb/randkey` is a full ES module, there is no UMD or CommonJS versions.

ES modules are the pattern in modern JS development, already natively supported by newer versions of Node.js and modern browsers.

Backward compatibility is not a concern here. If you use a module bundler (like Webpack or Rollup) to transpile your code, the result will be compatible according to your setup.

### ES6

Tree shaking:

```javascript
import { id16, uuid, ... } from '@jsweb/randkey'
```

### From Unpkg CDN (installation not required)

```html
<script type="module">
  import { uuid } from 'https://unpkg.com/@jsweb/randkey'

  const key = uuid()
</script>
```

## Methods

### rand(radix = 10, limit = 40)

Generates a random number as string with optional radix and size limit.

The `radix` parameter can be a number from 2 to 36. Default is 10, which generates base 10 random numbers.

The `limit` size parameter can be a number from 1 to 40. Default is 40, which is the bigger possible.

Keep in mind that `radix` can automatic limit the result max size.

```javascript
import { rand } from '@jsweb/randkey'

rand()
// > '555847878175'

rand(2)
// > '1001010000010000000001111111010100000110'

rand(8)
// > '2036103777231'

rand(16)
// > '12a82628ee7'

rand(32)
// > '18vq5b2hq'

rand(36)
// > 'fdqlsnvb'
```

### hex(limit = 11)

Generates a random hexadecimal number as string with optional custom size limit.

Size limit must be from 1 to 11. Default is 11, which is the bigger possible.

It is just an alias for `rand(16, limit)`.

```javascript
import { hex } from '@jsweb/randkey'

hex(6) // > 'f9c1d0'
```

### id4()

Generates a random ID with 4 hexadecimal digits. It is just an alias for `hex(4)`.

```javascript
import { id4 } from '@jsweb/randkey'

id4() // > 'f9c1'
```

### id8()

Generates a random ID with 8 hexadecimal digits. It is just an alias for `hex(8)`.

```javascript
import { id8 } from '@jsweb/randkey'

id8() // > 'bf9c61ed'
```

### id16()

Generates a random ID with 16 hexadecimal digits.

```javascript
import { id16 } from '@jsweb/randkey'

id16() // > '6c1f3ac8e0ba611d'
```

### id32()

Generates a random ID with 32 hexadecimal digits.

```javascript
import { id32 } from '@jsweb/randkey'

id32() // > 'f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### id64()

Generates a random ID with 64 hexadecimal digits.

```javascript
import { id64 } from '@jsweb/randkey'

id64() // > 'f17e3ac8e0ba925a61ed19016c1f2eb0f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### uuid()

Generates a valid UUID v4 (RFC 4122 compilant).

```javascript
import { uuid } from '@jsweb/randkey'

uuid() // > 'c30663ff-a2d3-4e5d-b377-9e561e8e599b'
```

### puid()

Generates a random 5x5 ID with base2 progressive radix per block.

```javascript
import { puid } from '@jsweb/randkey'

puid() // > 10100-13110-42720-98222-13prn
```

### ruid(radix = 10)

Generates a random 5x5 ID using a common radix for all blocks using `rand(radix, 5)`.

The `radix` parameter can be a number from 2 to 36. Default is 10, which generates base 10 random blocks.

```javascript
import { ruid } from '@jsweb/randkey'

ruid(8) // > 15124-22432-17325-45517-15522
```

### huid()

Generates a random 5x5 ID with hexadecimal blocks.

It is just an alias for `ruid(16)`.

```javascript
import { huid } from '@jsweb/randkey'

huid() // > d74b8-124e7-15854-15c73-82909
```

### wuid()

Generates a random 5x5 ID with alphanumerical blocks, like Windows Product Key.

It is just an alias for `ruid(36)`.

```javascript
import { wuid } from '@jsweb/randkey'

wuid() // > 7wuiu-e4fw7-ari12-3z50r-iv04x
```
