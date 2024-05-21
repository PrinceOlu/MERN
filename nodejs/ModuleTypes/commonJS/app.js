// 1. Single function
//  lets call greetings module
// const greetings = require("./util");

// console.log(greetings("Prince"));

// 2. Object export
// Destructuring the object
// because it is an object, we can destructure it
// const { addFunction, subtractFunction } = require("./util");

// console.log("App started...");
// console.log(addFunction(9, 3));
// console.log(subtractFunction(9, 3));

// 3 and 4.Named function export
const { sayHello, saybye } = require("./util");
console.log(sayHello("Segun"));
console.log(saybye("Segun"));
