# coprimes-between

List of [coprimes](https://en.wikipedia.org/wiki/Coprime_integers) numbers between A and B (inclusive) for a given C.

[![Build Status](https://travis-ci.org/garciagomezluis/coprimes-between.svg?branch=master)](https://travis-ci.org/garciagomezluis/coprimes-between)

## example

``` js
var coprimesBetween = require('coprimes-between');
var result = coprimesBetween(2, 10, 15); //coprimesBetween(A, B, C)
console.log(result); //[2, 4, 7, 8]
```

## install

With [npm](http://npmjs.org) do:

```
npm install coprimes-between
```

## license

MIT