// using a setTimeOut inside async/await

// // creation
// const waitAndRun = async (value) => {
//   // async must return a promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, 3000);
//   });
// };
// // usage
// // await must be in an async function
// const getValue = async () => {
//   const result = await waitAndRun("this is a simple async await");
//   console.log(result);
// };
// getValue();

// fetching values from multiple async/awaits
// const myName = async () => {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove("Segun");
//     }, 1000);
//   });
// };
// const myAge = async () => {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove(30);
//     });
//   });
// };

// const getValues = async () => {
//   const result = await Promise.all([myName(), myAge()]);
//   console.log(result);
// };
// getValues();

// ===== add numbers===========
// const addNum = async (a, b) => {
//   return new Promise((resolve, reject) => {
//     const a = 5;
//     const b = 10;
//     const ans = a + b;
//     if (ans) {
//       resolve(ans);
//     } else {
//       reject("error");
//     }
//   });
// };
// const getValue = async () => {
//   const result = await addNum();
//   console.log(result);
// };
// getValue();
