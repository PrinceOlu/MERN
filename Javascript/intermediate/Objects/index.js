// using object literals

// let book = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   available: true,
//   price: 9.99,
// };
// console.log(book);

// using dot notation to access object properties

// let bookTitle = book.title;
// console.log(book.title);
// console.log(book.author);
// console.log(book.available);
// console.log(book.price);

// using bracket notation to access object properties
// console.log(book["title"]);
// console.log(book["author"]);
// console.log(book["available"]);
// console.log(book["price"]);

//properties with special xter
let person = {
  "first name": "Segun",
  "last name": "Ojugbele",
};
console.log(person["first name"]);
console.log(person["last name"]);

//adding properties to objects
person.age = 30;
person.gender = "male";
console.log(person.age);
console.log(person.gender);

// adding an object to an object
person.address = {
  city: "Surrey",
  Province: "BC",
};
console.log(person.address);
console.log(person.address.city);
console.log(person);
