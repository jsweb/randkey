# randkey

Dead simple JS module to generate random keys in various formats, including UUID like.

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

Returns a random number or string by operations witn `Math.random()` and `Date.now()`.

The `n` optional argument must to be a number from 2 to 36 to be used with `toString(n)`. Any other values will be ignored.

If a valid `n` was provided, the method will return a string, else will return a number.

```javascript
randkey.rand()      // something like 555847878175
randkey.rand(2)     // something like '1001010000010000000001111111010100000110'
randkey.rand(8)     // something like '2036103777231'
randkey.rand(16)    // something like '12a82628ee7'
randkey.rand(32)    // something like '18vq5b2hq'
randkey.rand(36)    // something like 'fdqlsnvb'
```

**Deprecation note:** the old methods `rand16()`, `rand32()` and `rand36()` was deprecated in favour to `rand(n)`.

### randkey.id4bits()

Returns hexadecimal number as string with 4 chars.

```javascript
randkey.id4bits() // returns something like 'h9c1'
```

### randkey.id8bits()

Returns hexadecimal number as string with 8 chars.

```javascript
randkey.id8bits() // returns something like 'bf9c61ed'
```

### randkey.id16bits()

Returns hexadecimal number as string with 16 chars.

```javascript
randkey.id16bits() // returns something like '6c1f3ac8e0ba611d'
```

### randkey.id32bits()

Returns hexadecimal number as string with 32 chars.

```javascript
randkey.id32bits() // returns something like 'f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### randkey.uuid()

Returns UUID like string.

```javascript
randkey.uuid() // returns something like 'cb3721d3-efbf-4cbc-ab97-d267a2ce198b'
```
