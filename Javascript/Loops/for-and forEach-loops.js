//----
//For Loops
//----

//Basic for loop to print numbers 0-5

// for(let i=0; i<=5; i++){
//     //code will run
//     console.log(i);
// }

// Looping through an array to print its elements
// const myFruits = ['Apple','Banana','Kiwi']
// for(let i=0; i<myFruits.length; i++){
//     console.log(myFruits[i]);
// }

// Using 'break' to exit the loop early

// for(let i=0; i<=10; i++){
//     //code will run
//   if(i ===5){
//     break
//   }
//   console.log(i);
// }

// Using 'continue' to skip an iteration
// Looping in reverse
// for(let i=5; i>0; i--){
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (let a = 0; a < 10; a++) {
//   if (a === 5) continue;
// //   if (a === 5) break;
//   console.log(a);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ForEach Loop
//---

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
//   console.log("demo", demo);
//   //   console.log("index", index);
//   //   console.log("array", array);
// });

// let demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let result = 0;
// demo.forEach(function (demo) {
//   result = sum += demo;
// });
// console.log(result);

//  const numbers  = [1,2,3,4,5,6, 100]
// numbers.forEach(function(element, index, array){
// console.log('Element', element);
// console.log('index', index);
// console.log('array', array);
// })

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
