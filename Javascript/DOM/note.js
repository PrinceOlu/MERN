// NodeList example (static)
const nodes = document.querySelectorAll("div"); // Contains all <div> elements as a static NodeList

// HTMLCollection example (live)
const divsByTagName = document.getElementsByTagName("div"); // Contains all <div> elements as a live HTMLCollection

// Adding a new <div> to the document
document.body.appendChild(document.createElement("div"));

console.log(nodes.length); // Number remains unchanged
console.log(divsByTagName.length); // Number increases by one
