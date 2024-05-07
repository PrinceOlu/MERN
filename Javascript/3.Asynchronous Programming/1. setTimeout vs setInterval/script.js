// ==== using set Timeout =======

// ===== method 1 ===========
// create the function
// const showMessage = () => {
//   console.log("show message after 3 seconds");
// };

// // set the time out
// setTimeout(showMessage, 3000);
// console.log("waiting for the message to show up after 3 seconds");

// ===== method 2 advance ===========
// =====using arrow function
// setTimeout(() => {
//   console.log("show message after 3");
// }, 3000);
// console.log("waiting for the message to show up");

// canceling setTimeout
// const TimeoutId = setTimeout(() => {
//   console.log("this message will not show");
// }, 3000);
// console.log("This message is before clear time out");
// clearTimeout(TimeoutId);
// console.log("This message is after clear time out");

// ====== set Intervals ================
// setInterval(() => {
//   console.log("this is recuring message");
// }, 2000);
// console.log("this is normal message");

// === sample logic
let counter = 0;
const IntervalsId = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter >= 5) {
    clearInterval(IntervalsId);
    console.log("counter breaks, interval cleared");
  }
  // console.log(counter);
}, 2000);
