// NodeList (static)
const nodeList = document.querySelectorAll(".item");
console.log("Initial NodeList length:", nodeList.length); // Output: 2

// HTMLCollection (live)
const htmlCollection = document.getElementsByClassName("item");
console.log("Initial HTMLCollection length:", htmlCollection.length); // Output: 2

// Adding a new <div> to the container
const container = document.getElementById("container");
container.appendChild(document.createElement("div")).className = "item";

// Checking lengths after modification
console.log("Updated NodeList length:", nodeList.length); // Output: 2 (unchanged)
console.log("Updated HTMLCollection length:", htmlCollection.length); // Output: 3 (increased)
