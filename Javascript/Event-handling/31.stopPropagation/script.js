// Lets addevent to the outer div

document.getElementById("outerDiv").addEventListener(
  "click",
  function (e) {
    alert("i am outer div event phase" + e.eventPhase);
  },
  false // bubbling phase
);

// Lets add event to the middle div

document.getElementById("middleDiv").addEventListener(
  "click",
  function (e) {
    alert("i am middle div event phase" + e.eventPhase);
    e.stopPropagation(); // to stop the event propagation
  },
  false // bubbling phase
);
// Lets add event to the inner div

document.getElementById("innerDiv").addEventListener(
  "click",
  function (e) {
    alert("i am inner div event phase" + e.eventPhase);
    // e.stopPropagation(); // to stop the event propagation
  },
  false // bubbling phase
);
