// ==== creating a blocking===========
// console.log("starting a blocking operation");
// // create a blocking code using exponential
// for (let i = 0; i < 1e9; i++) {
//   //   console.log(i);
// }
// console.log("finished blocking operations");

// === Non-Blocking code======
console.log("starting a non-blocking operation");
setTimeout(() => {
  console.log("Async operaion, non-blocking");
}, 4000);

console.log("finished non-blocking operations");
