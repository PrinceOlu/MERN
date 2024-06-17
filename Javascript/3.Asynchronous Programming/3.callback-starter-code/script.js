// create a callback function
// ===== basic method 1============
// function simpleFunction() {
//   console.log("sample simple callBack function");
// }

// // pass the function as a callback
// function passCallBack(callBack) {
//   // call the function as a callback
//   callBack();
// }
// // pass simpleFunction as a callback
// passCallBack(simpleFunction);

// ==== more advance method 2 ======

// function passCallBack(callBack) {
//     // call the function as a callback
//     callBack();
//   }
//   passCallBack(() => {
//     console.log("this is an advance callback");
//   });

// ==== more advance method 3 ======
// returning a callback function
// function passCallBack(callback) {
//   // call the function as a callback
//   callback();
//   console.log(callback());
// }
// passCallBack(() => {
//   return "this is a callBack return ";
// });
// ====== more advance callback=======
// Extracting callBack function as a variable
// function passCallBack(callBack) {
//   // call the function as a callback
//   const result = callBack();
//   console.log(result);
// }
// passCallBack(() => {
//   return "this is a more advance callBack return ";
// });

// passing parameters to a callback function
// callback with arguements
// =============== =====================
// I have converted the function below into an anonymous function and passed it directly into the call back
// ===================================
// const simpleFunction = (firstname, lastname) => {
//   return `Hello ${firstname} ${lastname}`;
// };

// function greetingCallback(callback) {
//   callback();
//   console.log(callback("segun", "ojugbele"));
// }
// greetingCallback((firstname, lastname) => {
//   return `hello ${firstname} ${lastname}`;
// });
// Simple function with parameter and callback function

// const calcSum = (a, b, callback) => {
//   const result = a + b;
//   callback(result);
// };
// calcSum(2, 3, (result) => {
//   console.log(result);
// });

