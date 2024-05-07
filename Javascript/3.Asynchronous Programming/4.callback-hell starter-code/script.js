// // === Nested timeout functions=========

// const task1 = (callback) => {
//   setTimeout(() => {
//     console.log("task 1 completed!");
//     callback();
//   }, 3000);
// };
// const task2 = (callback) => {
//   setTimeout(() => {
//     console.log("task 2 completed!");
//     callback();
//   }, 2000);
// };
// const task3 = (callback) => {
//   setTimeout(() => {
//     console.log("task 3 completed!");
//     callback();
//   }, 1000);
// };
// task1(() => {
//   // start the second task once the first task is completed.
//   task2(() => {
//     // start the third task once the second task is completed.
//     task3(() => {
//       console.log("All the task completed");
//     });
//   });
// });

//  fetching dummy user data
