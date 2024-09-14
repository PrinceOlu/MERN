// using textContent to update the blog title
// textContent is used to change ONLY the content
const title = document.getElementById("title");
title.textContent =
  "New Blog Title, textContent is used to change ONLY the content";
title.style.color = "red";

// using innerHTML to add another paragraph
// innerHTML is used to change the HTML element and the content too
const paragraph = document.getElementById("paragraph");
paragraph.innerHTML = "<h1>I have changed the paragraph element to h1.</h1> ";
// use it to add another paragraph
paragraph.innerHTML +=
  "<h2>InnerHTML is used to change the HTML element and the content too</h2> ";

// using innerText
const comment1 = document.getElementById("comment1");
comment1.innerText = "Edited Comment";
