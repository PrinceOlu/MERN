// add multiple event to the button
const actionButton = document.getElementById("actionButton");
// single click
actionButton.addEventListener("click", function () {
  console.log("Button clicked!!!");
});
// double click
actionButton.addEventListener("dblclick", function () {
  console.log("double click");
});

// mouse over
actionButton.addEventListener("mouseover", function () {
  console.log("mouse over");
});
