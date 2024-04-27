// accessing parent element
const parent = document.getElementById("parent");
console.log(`i am parent Node :`, parent);

// transcerving to the grandParent through the parent, Moving UpWards
const grandparent = parent.parentNode;
console.log(`i am grandparent node(transverse) : `, grandparent);
console.log(`i am parent from grandparent node:`, grandparent.childNodes);

// accessing Child Elememnts, moving downward
const firstChild = parent.firstChild;
console.log(`I am first-child of Parent: `, firstChild);
// accessing Child Elememnts, moving downward
const lastChild = parent.lastChild;
console.log(`I am last-child of Parent: `, lastChild);

// Accessing first Children Elements Only
const firstElementChild = parent.firstElementChild;
console.log(`I am first Element Child:`, firstElementChild);
// Accessing last Children Elements Only
const lastElementChild = parent.lastElementChild;
console.log(`I am last Element Child:`, lastElementChild);
