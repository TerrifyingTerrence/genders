var genders = require('./');
var assert = require('assert');

// check that for all translation there is an associated English gender
for (var language in genders.translations) {
  for (var entry in genders.translations[language]) {
    assert.notStrictEqual(genders.genders.indexOf(entry), -1);
  }
}

console.info('OK!');
