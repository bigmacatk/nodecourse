// CommonJS, Every file is a module

const names = require("./names");
const sayHi = require("./utils");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
