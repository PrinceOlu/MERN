// for this example, we will create a simple web page that displays a list of fruits. We will provide a javascript function to remove a specific fruits based on its name.

// lets create a function to add a new fruit
function addFruit(name) {
  const fruitList = document.getElementById("fruitList");
  //   becasue it is a list, so lets create <li> elements
  const Li = document.createElement("li");
  //   lets add some classes to the li for styling
  Li.className = "fruit";
  //   lets add content to the li
  Li.textContent = name;
  //   now lets append the li into the frutlists
  fruitList.appendChild(Li);
  //   console.log(Li);
  //   console.log(fruitList);
}
addFruit("Apple");
addFruit("orange");
addFruit("cherry");
addFruit("banana");

// now let us remove fruit from the list
// lets create a function to carry this out
function removeFruit(name) {
  // lets target the parent container
  const fruitList = document.getElementById("fruitList");
  let fruitFound = false;
  //   let us loop through the fruits list to find the fruit we want to remove.
  //   using for-of-loop
  for (const Li of fruitList.children) {
    // console.log(Li);
    if (Li.textContent === name) {
      fruitFound = true;

      //   now lets remove the fruits
      fruitList.removeChild(Li);
      break;
    }
  }
  //   let us update the user that the fruit has been removed successfully
  //   let us target the message div
  const message = (document.getElementById("message").textContent = fruitFound
    ? `${name} was removed successfully!`
    : `${name} not found`);
}
removeFruit("mango");
