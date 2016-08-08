# randkey

Simple JS module to generate random keys in various formats, including UUID

***

## Installation

You can install it with Bower or NPM:

### Bower

`bower i -S randkey`

### NPM

`npm i -S randkey`

If you are using **JSPM** you can install randkey from NPM:

`jspm i randkey=npm:randkey`

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

```html
<script src="path/to/randkey/randkey.min.js"></script>
```

## Methods

### randkey.rand()

Returns a random number by operations witn `Math.random()` and `Date.now()`.

```javascript
randkey.rand() // returns something like 954523098947
```

### randkey.rand16()

Returns a random number stringified to hexadecimals with `toString(16)`.

```javascript
randkey.rand16() // returns something like 'b812712a08'
```

### randkey.rand32()

Returns a random number stringified with `toString(32)`.

```javascript
randkey.rand32() // returns something like 'n0972ag8'
```

### randkey.rand36()

Returns a random number stringified with `toString(36)`.

```javascript
randkey.rand36() // returns something like 'a36sxqtk'
```

### randkey.id4bits()

Returns a random string with 4 characters.

```javascript
randkey.id4bits() // returns something like 'h9c1'
```

### randkey.id8bits()

Returns a random string with 8 characters.

```javascript
randkey.id8bits() // returns something like 'bf9c61ed'
```

### randkey.id16bits()

Returns a random string with 16 characters.

```javascript
randkey.id16bits() // returns something like '6c1f3ac8e0ba611d'
```

### randkey.id32bits()

Returns a random string with 32 characters.

```javascript
randkey.id32bits() // returns something like 'f17e3ac8e0ba925a61ed19016c1f2eb0'
```

### randkey.uuid()

Returns a random UUID pattern string.

```javascript
randkey.uuid() // returns something like 'cb3721d3-efbf-4cbc-ab97-d267a2ce198b'
```
