const path = require("path");

// 1) getting the file directory
// const filedetails = path.dirname("./sample.pdf");
// console.log(`The file details is `, filedetails);

// 2) getting the extenion name
// const filedetails = path.extname("./sample.pdf");
// console.log(`The file details is `, filedetails);

// 2) joining files
const joinfiles = path.extname("/user", "MERN", "exercise.pdf");
console.log(`The file details is `, joinfiles);
