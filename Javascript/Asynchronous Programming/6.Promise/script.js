// Example 1 with callback

// creation
// function simpleCb(success, cb) {
//   if (success) {
//     cb(null, "the operation was successful");
//   } else {
//     cb("the operation failed", null);
//   }
// }
// // usage
// simpleCb(false, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// Example 1, convert the above to Promise

// creation
// const simplePromise = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve("the Promise was successful....");
//   } else {
//     reject("the promise failed");
//   }
// });

// // usage
// simplePromise
//   .then((resolved) => {
//     console.log(resolved);
//   })
//   .catch((rejected) => {
//     console.log(rejected);
//   });

// / Example 2, checking if a number is even or odd
// const isEvenNumber = new Promise((resolve, reject) => {
//   const newNumber = 11;
//   if (newNumber % 2 === 0) {
//     resolve("The number is even");
//   } else {
//     reject("the number is odd");
//   }
// });
// // usage
// isEvenNumber
//   .then((resolved) => {
//     console.log(resolved);
//   })
//   .catch((rejected) => {
//     console.log(rejected);
//   });
// / Example 3, real world syntax of the above
function isEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("The number is even");
    } else {
      reject("the number is odd");
    }
  });
}
// usage
isEvenNumber(1)
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((rejected) => {
    console.log(rejected);
  });
