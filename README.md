# genders

[![NPM Version](https://img.shields.io/npm/v/genders.svg?style=flat)](https://npmjs.org/package/genders)
[![Build Status](https://travis-ci.org/addaleax/genders.svg?style=flat&branch=master)](https://travis-ci.org/addaleax/genders?branch=master)

A JSON library with genders and translations.

Format:

```js
require('genders')
// =>
{
  // english names only here
  "genders": [
    "Agender",
    "Androgyne",
    "Androgynous",
    …
  ],
  "translations": {
    "de": {
      // translation for some of the english names
      "Androgyne": "Androgyn",
      "Androgynous": "Androgyn",
      …
    },
    …
  }
}
```
