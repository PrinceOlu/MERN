function addNumbers(a, b) {
    return a + b;
}
console.log("Add Numbers", addNumbers(5, 2));
var subtractNumbers = function (a, b) {
    return a - b;
};
console.log("Subtract Numbers", subtractNumbers(5, 2));
// return type inference
function formatGreetings(name, greeting) {
    return "".concat(greeting, ", ").concat(name);
}
var result = formatGreetings("Segun", "Hello");
console.log(result);
