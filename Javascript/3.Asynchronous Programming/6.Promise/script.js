//========== simple promise ==============
// creation
// function simplePromise() {
//   return new Promise((resolve, reject) => {
//     const success = false;
//     if (success) {
//       // reslove the promise
//       resolve("the operation was succesful... ");
//     } else {
//       // rejected the promise
//       reject("the operation failed");
//     }
//   });
// }
// // // Promise Usage
// simplePromise()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log(
//       "this will always run, regardless of the outcome of the operation"
//     );
//   });

//=========== sample 2 using Promise========
// creation
// function isEvenNumber(number) {
//   return new Promise((resolve, rejected) => {
//     if (number % 2 === 0) {
//       // resolve the promise
//       resolve(`the number ${number} is an even number`);
//     } else {
//       rejected(`the number ${number} is not an even number`);
//     }
//   });
// }
// // usage
// isEvenNumber(41)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//========== example 3 ================

// function addNums(a, b) {
//   return new Promise((resolve, reject) => {
//     console.log("promise starts here...");
//     const a = 5;
//     const b = 12;
//     const ans = a + b;
//     if (ans) {
//       resolve(ans);
//     } else {
//       reject("no answer");
//     }
//   });
// }
// addNums()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
