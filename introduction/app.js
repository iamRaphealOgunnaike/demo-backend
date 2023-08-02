// modules

// Common JS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const sayHi = require("./5-utilis");

const names = require("./4-names");
const data = require("./6-alternative-flavor");
require('./7-mind-grenade')
sayHi("susan");
sayHi(names.peter);
sayHi(names.john);
