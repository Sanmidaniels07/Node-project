// Modules
// every file is a module by default
// modules - encapsulated code 

const names = require('./4-name')
const sayHi = require('./5-utils')
console.log(names);

const data = require('./6-alternative-flavour')
console.log(data);
require('./7-mind-grenade')  // not set to a variable

sayHi('susan')
sayHi('john')
sayHi('peter')