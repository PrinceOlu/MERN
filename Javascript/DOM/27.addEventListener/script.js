// ========== eventistener and chaining ====

// ========== basic method =========
// const clickButton = document.getElementById("clickButton");
// clickButton.addEventListener("click", function () {
//   console.log("click event is called");
// });

// =========chaining====================
// ============= advance method 1======
// document.getElementById("clickButton").addEventListener("click", function () {
//   console.log("click event is called");
// });

// ===== advance method 2 ========
function ClickButton() {
  console.log("click event is called");
}
document.getElementById("clickButton").addEventListener("click", ClickButton);

//   ===double click basic method =====
// const doubleClickButton = document.getElementById("doubleClickButton");
// doubleClickButton.addEventListener("dblclick", function doubleClickButton() {
//   console.log("double click event called");
// });
//   ===double click method 1=====
// document
//   .getElementById("doubleClickButton")
//   .addEventListener("dblclick", function () {
//     console.log("double click event called");
//   });
//   ===double click method 2=====

function doubleClickButton() {
  console.log("double click event called");
}
document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", doubleClickButton);

//   ======== mouse over advance method 2======
function hoverDiv() {
  console.log("on mouse over");
}
document.getElementById("hoverDiv").addEventListener("mouseover", hoverDiv);
