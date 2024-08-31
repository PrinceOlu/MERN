// select all elements with the class name fiction

const fictionBooks = document.getElementsByClassName("fiction");

const nonFictionSection = document.getElementById("nonFictionSection");

const nonfictionBooks = nonFictionSection.getElementsByClassName("non-fiction");

// console.log(nonfictionBooks);
// console.log(nonfictionBooks[0]);
// console.log(nonfictionBooks[1]);
// console.log(nonfictionBooks[0].innerHTML);
// console.log(nonfictionBooks[1].innerHTML);
// console.log(nonFictionSection);
console.log(fictionBooks);

// let us convert `fictionBooks` to an array using array.from,
const fictionBooksArr = Array.from(fictionBooks);
// console.log(fictionBooksArr);

// then, lets  loop through the Html collections usng map()
const fictionBooksTitles = fictionBooksArr.map((fictionBooksArr) => {
  return fictionBooksArr.innerHTML;
});

// Log the array of fiction book titles
console.log(fictionBooksTitles);
const fictionSegun = document.getElementsByClassName("fiction");
console.log(fictionSegun[0].innerHTML);
