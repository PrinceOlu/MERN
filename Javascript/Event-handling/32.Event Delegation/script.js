//  add event to the parent UL
document.getElementById("itemList").addEventListener("click", function (e) {
  console.log(e);
  const clickedElement = e.target;
  //   check if the clicked element ia s list item
  console.log(clickedElement.tagName);
  if (clickedElement.tagName === "LI") {
    const itemNumber = clickedElement.getAttribute("data-item");
    console.log(`You clicked on item number : ${itemNumber}`);
  }
});
