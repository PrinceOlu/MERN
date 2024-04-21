// suppose you are working on an e-commerce website, and you need to clculate the total price of items in the user's shopping cart. Each item in the cart is represented as an object in an array with properties such as 'name', 'price', 'quantity'. our task is to calculate the total cost of items in the cart and also list the names of all the items in the cart for the user's review.

//initial data
const cart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "phone", price: 500, qty: 2 },
  { name: "TV", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];

// using forEach to calculate the total cost of the items in the cart.

let totalCost = 0;
cart.forEach((cart) => {
  // console.log(items);

  totalCost += cart.price * cart.qty;
});
//list all the list of the products

let productNames = [];
cart.forEach((cart) => {
  productNames.push(cart.name);
});

//calculate the total number of items
let totalItems = 0;

cart.forEach((cart) => {
  totalItems += cart.qty;
});
console.log(totalItems);
console.log(productNames);
console.log(totalCost);

// let demo = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// demo.forEach(function (demo, index, array) {
//   //   console.log("demo", demo);
//   //   console.log("index", index);
// //   console.log("array", array);
// });

// let demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let result = 0;
// demo.forEach(function (demo) {
//   result = sum += demo;
// });
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 100];
// numbers.forEach(function (element, index, array) {
//   console.log("Element", element);
//   //   console.log("index", index);
//   //   console.log("array", array);
// });

// Using forEach to sum the elements of an array
// let sum=0;
// numbers.forEach(function(num){
//     sum += num
// })
// console.log('The total sum is:', sum);

// Modifying array elements using forEach
// const numbers  = [1,2,3,4,5,6, ]
// const squares  = []
// numbers.forEach(function(num){
//   squares.push(num*num)
// })
// console.log(squares);
// console.log(numbers);
