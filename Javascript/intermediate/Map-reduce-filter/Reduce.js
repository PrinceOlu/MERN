let demo = [1, 2, 3, 4, 5, 6, 10];
let sumDemo = demo.reduce(function (acc, current) {
  return acc + current;
}, 0);
console.log(sumDemo);

//using reduce to find the max value in an array

let maxValue = demo.reduce(function (acc, current) {
  if (current > acc) {
    return current;
  } else {
    return acc;
  }
}, 0);
console.log(maxValue);

//using reduce to count the frquency of elements in an array

let fruits = ["Apple", "banana", "Apple", "mango", "Apple", "Orange", "banana"];

let fruitCount = fruits.reduce(function (acc, current) {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

console.log(fruitCount);
