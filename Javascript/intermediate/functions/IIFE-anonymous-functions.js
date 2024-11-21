// ---------------------------------
// Anonymous functions (IIfE)
//     In JavaScript, an IIFE stands for Immediately Invoked Function Expression. It's a design pattern where a function is defined and then immediately invoked or executed. This pattern is often used to create a local scope for variables and prevent them from polluting the global scope.
// )
// ------------------------------

// (function () {
//   console.log("hello world");
// })();

// calculate the square of a number
// (function () {
//   let value = 5;
//   let demo = value * value;
//   console.log(demo);
// })();

// concactinating strings
(function () {
  let fname = "Segun";
  let sname = "Ojugbele";
  let fullname = fname + " " + sname;
  console.log(fullname);
})();
