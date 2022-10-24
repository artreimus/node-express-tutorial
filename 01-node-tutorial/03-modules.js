// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (rule: only share minimum)

const names = require('./04-names');
console.log(names);

const sayHi = require('./05-utils');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

const data = require('./06-alternative-flavor');
console.log(data);

require('./07-mind-grenade');
