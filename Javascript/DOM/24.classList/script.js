// lets select the P element
const textElement = document.getElementById("textElement");

// lets add class using function
function addClass() {
  // condition to check if a class exist
  const isTrue = textElement.classList.contains("italic");
  console.log(isTrue);
  // let us add multiple classes
  textElement.classList.add("highlight", "italic");
  // adding a single class
  textElement.classList.add("bold");
  //   updating the content
  textElement.textContent = "Class styling Added";
}
// lets remove class using function
function removeClass() {
  // condition to check if a class exist
  const isTrue = textElement.classList.contains("italic");
  console.log(isTrue);
  // let us remove multiple classes
  textElement.classList.remove("highlight", "bold", "italic");
  //   updating the content
  textElement.textContent = "Class styling Removed";
}

// lets toggle class using function
function toggleClass() {
  // condition to check if a class exist
  const isTrue = textElement.classList.contains("italic");
  console.log(isTrue);
  // only takes 1 arguement
  textElement.classList.toggle("bold");
  //   updating the content
  textElement.textContent = "Class styling toggled";
}

// function to checkContains
function checkContains() {
  alert(
    textElement.classList.contains("bold")
      ? "Contains bold"
      : "does not contain bold"
  );
}
// function to replaceClass
function replaceClass() {
  // we have to check if the class exist before we can replace it
  if (textElement.classList.contains("bold")) {
    textElement.classList.replace("bold", "red-text");
  } else {
    textElement.classList.add("red-text");
  }
}

// function to listItem
function listItem() {
  alert("The first class is :" + textElement.classList.item(0));
}

// function to getValue
function getValue() {
  const valUe = textElement.classList.value;
  console.log(valUe);
}
