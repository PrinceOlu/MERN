// transversing from the top greatGrandParent
const greatGrandParent = document.getElementById("outerDiv");
console.log(greatGrandParent);
// transversing from the top
const GrandParent = greatGrandParent.childNodes;
console.log(GrandParent);
// transversing from the top and using array method to access the child
const GrandParentFIRST = greatGrandParent.childNodes[0];
console.log(GrandParentFIRST);
const GrandParentSECOND = greatGrandParent.childNodes[1];
console.log(GrandParentSECOND);
