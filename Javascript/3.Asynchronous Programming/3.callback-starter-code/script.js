// create a callback function
// ===== basic method 1============
// function simpleFunction() {
//   console.log("sample simple callBack function ");
// }
// // pass the function as a callBack
// function passCallBack(simpleFunction) {
//   // call the function as a callback
//   simpleFunction();
// }
// passCallBack(simpleFunction);

// ==== more advance method 2 ======
// function passCallBack(simpleFunction) {
//   // call the function as a callback
//   simpleFunction();
// }
// passCallBack(() => {
//   console.log("this is an advance callback");
// });
// ==== more advance method 3 ======
// returning a callback function
// function passCallBack(simpleFunction) {
//   // call the function as a callback
//   simpleFunction();
//   console.log(simpleFunction());
// }
// passCallBack(() => {
//   return "this is a callBack return ";
// });

// Extracting callBak function
// function passCallBack(simpleFunction) {
//   // call the function as a callback
//   const result = simpleFunction();
//   console.log(result);
// }
// passCallBack(() => {
//   return "this is a simple callBack return ";
// });

// passing parameters to a callback function

// const simpleFunction = (callBackunction) => {
//   const result = callBackunction("Segun", "Ojugbele");
//   console.log(result);
// };
// // callback wit arguements
// const callBackunction = (firstname, lastname) => {
//   return `Hello ${firstname} ${lastname}`;
// };
// simpleFunction(callBackunction);

// Simple function with parameter and callback function

const calcSum = (a, b, callback) => {
  const result = a + b;
  callback(result);
};
calcSum(2, 3, (result) => {
  console.log(result);
});
