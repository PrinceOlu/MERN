// add event listener to the parent div
document.getElementById("parentDiv").addEventListener(
  "click",
  function (e) {
    alert("Div clicked ..." + e.eventPhase);
  },
  //   capturing phase
  true
);

// Add event listener to the ul
document.getElementById("list").addEventListener(
  "click",
  function (e) {
    alert("UL clicked ..." + e.eventPhase);
  },
  //   capturing phase
  true
);

// Add event listener to the individual li's
document.getElementById("item1").addEventListener(
  "click",
  function (e) {
    alert("list 1 clicked ..." + e.eventPhase);
  },
  //   bubbling phase
  false
);

// Add event listener to the individual li's
document.getElementById("item2").addEventListener(
  "click",
  function (e) {
    alert("list 2 clicked ..." + e.eventPhase);
  },
  //   bubbling phase
  false
);
