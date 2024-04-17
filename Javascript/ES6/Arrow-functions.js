// ------------------------------------
// basic syntax of arrow function
// -------------------------------------
//Normal syntax to  basic arrow function
// function multiply(a, b) {
//   return a * b;
// }
// const multiply = (a, b) => a * b;
// const result = multiply(3, 5);

//simple arrow function to block body syntax
// const greet = (name) => {
//   return `hello ${name}`;
// };
// const greet = (name) => `hello ${name}`;
// const greetfunction = greet("Emmanuel");

// single parameter

const square = (x) => x * x;
const squarefuction = square(5);

// No parameter/No parenthesis

const random = () => Math.random();
const randomNumber = random();

// object literals Return

// const getUser = () => {
//   return {
//     name: "Segun",
//     age: 30,
//   };
// };

const getUser = () => ({ name: "Segun", age: 30 });
const getUserunction = getUser();
