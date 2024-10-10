// // promise.all

// // promise creation
// const promise1 = Promise.resolve("Promise 1 resolved");
// const promise2 = Promise.resolve("Promise 2 resolved");

// // use promise all
// Promise.all([promise1, promise2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// promise.all

// promise creation
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.reject(new Error("Promise 2 rejected"));

// use promise all
Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
