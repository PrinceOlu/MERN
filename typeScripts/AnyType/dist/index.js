// using Any type
var age = 10;
age = true;
// Any in arrays
var things = [1, "segun", true];
things.push({ id: 123 });
// functions and Any
function addNumbers(number) {
    return number + number;
}
var result1 = addNumbers("hello");
var result2 = addNumbers(5);
console.log(result1);
console.log(result2);
