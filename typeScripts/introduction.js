//  1) Basics
var digit = 3;
var company = "my company name is Nmap";
var isPublished = true;
// define an array of numbers
var digits = [1, 2, 3, 4, 5, 6, 7];
var Companies = ["Nmap", "Technology", "google"];
var xAny = [1, "segun", true];
var concatValues = function (a, b) {
    return a + b;
};
var Customer = {
    idNumber: 1,
    name: "Prince",
    // age: 20
};
// console.log(Customer);
// 3) Type and Unions (| i.e or)
var PrintID = function (id) {
    console.log("ID is", id);
};
PrintID("PrinceId");
var PrintID2 = function (id) {
    console.log("ID is", id);
};
PrintID("PrinceId");
var manager = {
    name: "Alice",
    age: 35,
    employeeId: 101,
    department: "HR",
};
console.log("Manager Name: ".concat(manager.name));
console.log("Age: ".concat(manager.age));
console.log("Employee ID: ".concat(manager.employeeId));
console.log("Department: ".concat(manager.department));
