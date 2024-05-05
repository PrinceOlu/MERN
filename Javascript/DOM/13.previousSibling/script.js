// lets select the buttons first
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

console.log(button1);

// use previuos sibling to get the preceeding element
const text1 = button1.previousSibling;
const text2 = button2.previousSibling;

// lets change the text content of the preceeding paragraph using the nodeType
if (text1.nodeType === 3) {
  text1.textContent = "Text 1 has been modified";
}
if (text2.nodeType === 3) {
  text2.textContent = "Text 2 has been modified";
}

// console.log(text1);
// console.log(text2);
