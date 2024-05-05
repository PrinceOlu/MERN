// transversing up using data attribute
const child1 = document.querySelector('[data-item="fruit"');
console.log(child1);
// transversing up to the <ul> elementusing data attribute
const parent = child1.parentNode;
console.log(parent);
// transversing up using data attribute
const grandParent = parent.parentNode;
console.log(grandParent);
// transversing up using data attribute
const greatGrandParent = grandParent.parentNode;
console.log(greatGrandParent);
