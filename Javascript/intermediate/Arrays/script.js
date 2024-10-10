//-------
//Creating Array using Array Literal
//-------

//synatx

const studentAges = [20, 30, 25, 50, 31, 20, 10];
// Accessing the first element
const FirstElem = studentAges[0];
// console.log(FirstElem);

//Access the last element
const LastAge = studentAges[studentAges.length - 1];

//Declaring an array of strings
const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "friday"];

// console.log(daysOfTheWeek);

//Declaring an array of mix types

const mixedTypes = [42, "life", true];
// console.log(mixedTypes);

//Declaring an array of with data
const emptyArr = [];

//-----
//Creating Array using Array Constructor
//----

//Create an array with empty data
const emptyArray = new Array();

//Creating an array with a predefined size (5)
const sizeDefinedArr = new Array(5);

//Creating an array with elements
const fruitArr = new Array("Apple", "Banana", "Kiwi");

//Creating an array with mixed types
const mixDataType = new Array(1, false, "Emmanuel");

//----
//Creating Array using Array.of()
//----
// Creating an array with numbers

const numArr = Array.of(1, 2, 3, 4);

//Creating an array with strings

const strArr = Array.of("Apple", "Banana", "Kiwi");

// Creating an array with mixed types
const mixedArr = Array.of("Apple", "Banana", "Kiwi", false, true, 20);

//---
//Creating Array using Array.from()
//---

//cloning array

const originalArr = [1, 2, 3];
const clonedArr = Array.from(originalArr);

//creating an array from an array-like object
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const convertedArr = Array.from(arrayLike);

//-----
//Using push and unshift methods
//-----
// const fruits = ['Apple','Banana']
// console.log('Original fruits', fruits);
// const newArrayOfFruits = fruits.push('Kiwi','Mango')
// console.log('modfied fruits', fruits);

// Using .unshift() to add elements at the beginning of an array
const fruits = ["Apple", "Banana"];
// console.log('Original fruits', fruits);
const newArrayOfFruits = fruits.unshift("Kiwi", "Mango");
// console.log('modfied fruits', fruits);

//----
//Remove Elements (.pop(), .shift())
//-----

const animal = ["Cat", "Dog", "Elephant"];
// console.log('Original Animal', animal);
//pop()
// const popedAnimal = animal.pop()
const shiftedAnimal = animal.shift();
// console.log('After Poped Animal', animal);

//-----
//Array Size (.length)
//-----

const colors = ["Red", "Yellow", "Green", "Black"];
const arrayLength = colors.length;

//Modify the length of the array
colors.length = 2;
// console.log(colors);
