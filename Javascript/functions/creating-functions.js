// ----------------------
// function declaration, they are hoisted
// --------------------------------

// function sayHello() {
//   console.log("Hello world!!!");
// }
// sayHello();

// Hoisting function to show the current date
// showDate();
// function showDate() {
//   let currentDate = new Date();
//   console.log(currentDate);
// }
// ------------------------------
// function expression, they are not hoisted
// ----------------------------

// let showDate = function () {
//   let currentDate = new Date();
//   console.log(currentDate);
// };
// showDate();
// ------------------------
// check if even or odd
// -----------------------------
// let mycheck = function () {
//   let value = 29;
//   if (value % 2 === 0) {
//     console.log("value is even");
//     return value;
//   } else {
//     console.log("value is odd");
//     return value;
//   }
// };
// mycheck();
