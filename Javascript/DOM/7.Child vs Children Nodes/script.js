// fetch element with the id='parent'
const parent = document.querySelector("#parent");
// console.log(parent.childNodes);

// use forEach to acces all the items
parent.childNodes.forEach((element) => {
  //   console.log(element);
});

// fetch all child element nodes of the parent element
// use forEach to acces all the items
const convertChildren = Array.from(parent.children);
convertChildren.forEach((element) => {
  console.log(element);
});
console.log(parent.children);
