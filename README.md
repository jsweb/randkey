# randkey

Dead simple JS module to generate random id/key/hash in various formats, including valid UUID v4.

***

## Installation

### CDN

```html
<script src="https://unpkg.com/randkey"></script>
```

### NPM

`npm i -S randkey`

### Yarn

`yarn add randkey`

### Snipacks

`snipacks add unpkg rk.js randkey`

## Usage

### ES6

```javascript
import randkey from 'randkey'
```

### CommonJS

```javascript
let randkey = require('randkey')
```

### AMD

```javascript
require(['randkey'], randkey => {
    //codes go here
})
```

### Global

If you add a `script` tag to your HTML, `randkey` object will be global available.

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

### randkey.id4bits()

hexadecimal number as string with 4 chars.

```javascript
randkey.id4bits() // 'h9c1'
```

### randkey.id8bits()

hexadecimal number as string with 8 chars.

```javascript
randkey.id8bits() // 'bf9c61ed'
```

### randkey.id16bits()

hexadecimal number as string with 16 chars.

```javascript
randkey.id16bits() // '6c1f3ac8e0ba611d'
```

### randkey.id32bits()

hexadecimal number as string with 32 chars.

```javascript
randkey.id32bits() // 'f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### randkey.uuid()

Valid UUID v4 string.

```javascript
randkey.uuid() // 'c30663ff-a2d3-4e5d-b377-9e561e8e599b'
```
