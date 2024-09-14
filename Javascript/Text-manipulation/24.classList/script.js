// lets select the P element
const p = document.getElementById("textElement");

// lets add class using function
function addClass() {
  // condition to check if a class exist
  const isTrue = p.classList.contains("italic");
  console.log(isTrue);
  // let us add multiple classes
  p.classList.add("highlight", "italic");
  // adding a single class
  p.classList.add("bold");
  //   updating the content
  p.textContent = "Class styling Added";
}
// lets remove class using function
function removeClass() {
  // condition to check if a class exist
  const isTrue = p.classList.contains("italic");
  console.log(isTrue);
  // let us remove multiple classes
  p.classList.remove("highlight", "bold", "italic");
  //   updating the content
  p.textContent = "Class styling Removed";
}

// lets toggle class using function
function toggleClass() {
  // condition to check if a class exist
  const isTrue = p.classList.contains("italic");
  console.log(isTrue);
  // only takes 1 arguement
  p.classList.toggle("bold");
  //   updating the content
  p.textContent = "Class styling toggled";
}

// function to checkContains
function checkContains() {
  alert(
    p.classList.contains("bold") ? "Contains bold" : "does not contain bold"
  );
}
// function to replaceClass
function replaceClass() {
  // we have to check if the class exist before we can replace it
  if (p.classList.contains("bold")) {
    p.classList.replace("bold", "red-text");
  } else {
    p.classList.add("red-text");
  }
}

// function to listItem
function listItem() {
  alert("The first class is :" + p.classList.item(0));
}

// function to getValue
function getValue() {
  const valUe = p.classList.value;
  console.log(valUe);
}
