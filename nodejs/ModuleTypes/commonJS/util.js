// ====== 4 different ways of exporting modules in custom js
// ===========================

// 1. Single function export
// 2. Object export
// 3.Named function export
// 4. using export shorthand

// // 1. Single function export
// const fname = "Prince";
// const greetings = (name) => {
//   return `Hello ${name}`;
// };

// // to export greetings as a module and make it re-usable in othe pages
// module.exports = greetings;

// 2. Object export
// lets create functions
// const addFunction = (a, b) => {
//   return a + b;
// };
// const subtractFunction = (a, b) => {
//   return a - b;
// };
// module.exports = {
//   addFunction,
//   subtractFunction,
// };

// 3.Named function export
// we have to chain the function to the export
// module.exports.sayHello = (name) => {
//   return `Hello ${name}`;
// };
// module.exports.saybye = (name) => {
//   return `Good-bye ${name}`;
// };

// 4. using export shorthand
//  we can remove the module keyword
exports.sayHello = (name) => {
  return `Hello ${name}`;
};
exports.saybye = (name) => {
  return `Good-bye ${name}`;
};
