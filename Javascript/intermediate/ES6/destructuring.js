// --------------------------------------
// basic destructuring
// --------------------------------------

// Array
// const numbers = [1, 2, 3, 4];

// // const [first, second, third, forth] = numbers;
// // use the code above or this
// const [first, second, third, forth] = [1, 2, 3, 4];
// console.log(forth);

// swapping variables
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a, b);

// ------------Objects destructuring-----
// ---normal object--------
// const username = {
//   name: "segun",
//   age: 30,
//   pwd: "ojugbele",
//   email: "segun@gmail.com",
// };

// console.log(username.email);

// ----- destructure--------
// const { name, age, pwd, email } = {
//   name: "segun",
//   age: 30,
//   pwd: "ojugbele",
//   email: "segun@gmail.com",
// };

// console.log(pwd);

//----function parameter destructure-----
// function demo(userObj) {
//   console.log(`Hello ${userObj.user}, you are ${userObj.age} years old`);
// }

// --to destructure the above-----------
// function demo({ user, age }) {
//   console.log(`Hello ${user}, you are ${age} years old`);
// }

// const myUser = {
//   user: "Segun",
//   age: "30",
// };
// demo(myUser);

// -----normal nested objects----

// const demo = {
//   id: 1,
//   age: 30,
//   info: {
//     username: "segun",
//     pwd: "angel",
//     email: "ojugbele@gmail.com",
//   },
// };

// console.log(demo.age);
// console.log(demo.info.username);
// console.log(demo.info.email);

// ---------destructuring--------------
// const {
//   id,
//   age,
//   info: { username, pwd, email },
// } = {
//   id: 1,
//   age: 30,
//   info: {
//     username: "segun",
//     pwd: "angel",
//     email: "ojugbele@gmail.com",
//   },
// };

// console.log(age);
// console.log(username);
// console.log(email);
