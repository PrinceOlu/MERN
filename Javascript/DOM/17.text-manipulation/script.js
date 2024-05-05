// Using textContent to update the blog title
const title = document.getElementById("title");
// console.log(title.textContent);
title.textContent = "New Blog title using textContent";
console.log(title);
// lets manipulate the css properties
title.style.backgroundColor = "red";
title.style.color = "white";
title.style.border = "10px solid black";

// using innerHTML
const paragraph = document.getElementById("paragraph");
// using innerHTML to change the HTML element and content of the paragraph
paragraph.innerHTML =
  "<h1>the paragraph element has been changed to header 1 using innerHTML</h1>";

//   using innerText
const commentText = document.querySelector(".commentText");
commentText.innerText = "first comment updated using innerText";
