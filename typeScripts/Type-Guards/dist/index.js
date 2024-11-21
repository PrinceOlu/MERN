//Type Guards
function swapIdType(id) {
    if (typeof id === "string") {
        // we can now use string methods
        return parseInt(id);
    }
    else {
        // we can now use number methods
        return id.toString();
    }
}
var idOne = swapIdType(5);
var idTwo = swapIdType("10");
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.age, value.firstname);
    }
}
