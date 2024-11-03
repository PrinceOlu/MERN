
// using Any type
let age: any = 10
age=true;

// Any in arrays
let things: any[] =[1, "segun",true] 
things.push({id:123})



// functions and Any
function addNumbers (number:any):any{
    return number + number
}
const result1 = addNumbers("hello")
const result2 = addNumbers(5)
console.log(result1);
console.log(result2);

