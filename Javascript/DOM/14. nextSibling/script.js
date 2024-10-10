// lets get the container element first
const container = document.getElementById("container");
// console.log(container);
// lets get all the buttons within the container

const buttons = document.querySelectorAll("button");
// console.log(buttons);

// loop through each button and change the text of its next siblings
buttons.forEach((button) => {
  const nextElement = button.nextSibling;
  //   console.log(nextElement);
  //   check the node type
  if (nextElement && nextElement.nodeType === 3) {
    nextElement.textContent = " the next element has been changed";
  }
});
