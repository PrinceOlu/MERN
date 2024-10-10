// -------------------------------------
// The concept of objects been passed by references
// --------------------------------------

// modifying object through a different references

// const person1 = { name: "Alice", age: 20 };
// const person2 = person1;
// console.log("his is person1 : ", person1);
// // modify age in person 2
// person2.age = 30;
// console.log("his is person2 : ", person2);
// console.log("his is person1 : ", person1);
// //  modify name in person 1
// person1.name = "Segun";
// console.log("his is person2 : ", person2);
// console.log("his is person1 : ", person1);

// passing object to a function
// const increaseAge = (personObj) => {
//   personObj.age += 1;
// };

// // person Object
// const bob = {
//   name: "bob",
//   age: 40,
// };
// console.log("Before  :", bob);
// increaseAge(bob);
// console.log("After :", bob);
