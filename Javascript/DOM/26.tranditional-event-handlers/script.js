// =========== mouse event and using chaining ============
// const clickButton = document.getElementById("clickButton");
// clickButton.onclick = function clickButton() {
//   console.log("click event");
// };

// ===== OR using chaining===========
document.getElementById("clickButton").onclick = function clickButton() {
  console.log("click event");
};
//=========== double click==========
// const doubleClickButton = document.getElementById("doubleClickButton");
// doubleClickButton.ondblclick = function doubleClickButton() {
//   console.log("double click event");
// };
// ===== OR using chaining===========
document.getElementById("doubleClickButton").ondblclick =
  function doubleClickButton() {
    console.log("double click event");
  };

//=========== hover ==================
document.getElementById("hoverDiv").onmouseover = function hoverDiv() {
  console.log("on mouse over is called");
};
document.getElementById("hoverDiv").onmouseout = function hoverDiv() {
  console.log("on mouse out is called");
};
