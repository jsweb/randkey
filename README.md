# @jsweb/randkey

Simple JS module to generate random id/key/hash in various formats, including UUID.

See tests at [https://randkey.jsweb.app](https://randkey.jsweb.app)

![npm-package](https://img.shields.io/badge/npm-package-blue.svg?style=for-the-badge)
![es6-module](https://img.shields.io/badge/es6-module-blue.svg?style=for-the-badge)
![tests-mocha](https://img.shields.io/badge/tests-mocha-blue.svg?style=for-the-badge)

## New in v4.0.0

Now, its a full ES module, there is no UMD or CommonJS version.

In modern JS development ES modules are the pattern, already supported in newer versions of Node.js and modern borwsers natively.

Backward compatibility is not a concern here. If you use a module bundler (like Webpack or Rollup) to transpile your code, the result will be compatible according to your setup.

---

## Installation

You can install it with NPM, Yarn or via Unpkg CDN:

`npm i -S @jsweb/randkey`

`yarn add @jsweb/randkey`

## Usage

### ES6

Tree shaking (since v3.3.0):

```javascript
import { id16, uuid, ... } from '@jsweb/randkey'
```

### Example in HTML (installation not required)

```html
<script type="module">
  import { uuid } from 'https://unpkg.com/@jsweb/randkey'

  const key = uuid()
</script>
```

## Methods

### rand(radix: any): string

Generates a random number as string with a radix.

A valid optional `radix` parameter can be a number from 2 to 36. Any other values will be ignored.

```javascript
import { rand } from '@jsweb/randkey'

rand()
//>> '555847878175'

rand(2)
//>> '1001010000010000000001111111010100000110'

rand(8)
//>> '2036103777231'

rand(16)
//>> '12a82628ee7'

rand(32)
//>> '18vq5b2hq'

rand(36)
//>> 'fdqlsnvb'
```

### id4(): string

Generates a random ID with 4 hexadecimal digits.

```javascript
import { id4 } from '@jsweb/randkey'

id4() //>> 'f9c1'
```

### id8(): string

Generates a random ID with 8 hexadecimal digits.

```javascript
import { id8 } from '@jsweb/randkey'

id8() //>> 'bf9c61ed'
```

### id16(): string

Generates a random ID with 16 hexadecimal digits.

```javascript
import { id16 } from '@jsweb/randkey'

id16() //>> '6c1f3ac8e0ba611d'
```

### id32(): string

Generates a random ID with 32 hexadecimal digits.

```javascript
import { id32 } from '@jsweb/randkey'

id32() //>> 'f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### id64(): string

Generates a random ID with 64 hexadecimal digits.

```javascript
import { id64 } from '@jsweb/randkey'

id64() //>> 'f17e3ac8e0ba925a61ed19016c1f2eb0f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### uuid(): string

Generates a valid UUID v4 (RFC 4122 compilant).

```javascript
import { uuid } from '@jsweb/randkey'

uuid() //>> 'c30663ff-a2d3-4e5d-b377-9e561e8e599b'
```

### puid(): string

Generates a random 5x5 ID with base2 progressive radix per block.

```javascript
import { puid } from '@jsweb/randkey'

puid() //>> 10100-13110-42720-98222-13prn
```

### ruid(radix: any): string

Generates a random 5x5 ID using a common radix for all blocks.

A valid optional `radix` parameter can be a number from 2 to 36. Any other values will be ignored.

```javascript
import { ruid } from '@jsweb/randkey'

ruid(8) //>> 15124-22432-17325-45517-15522
```

### huid(): string

Generates a random 5x5 ID with hexadecimal blocks.

This is only an alias for `ruid(16)`.

```javascript
import { huid } from '@jsweb/randkey'

huid() //>> d74b8-124e7-15854-15c73-82909
```

### wuid(): string

Generates a random 5x5 ID with full alphanumerical blocks format, like Windows Product Key.

This is only an alias for `ruid(36)`.

```javascript
import { wuid } from '@jsweb/randkey'

wuid() //>> 7wuiu-e4fw7-ari12-3z50r-iv04x
```
