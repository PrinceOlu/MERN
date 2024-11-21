function addNumbers  (a:number,b:number): number{
    return a + b;
}

console.log("Add Numbers", addNumbers(5,2));


const subtractNumbers =  (a:number,b:number):number =>{
    return a - b;
}

console.log("Subtract Numbers", subtractNumbers(5,2));




// return type inference
function formatGreetings(name: string, greeting: string) {
    return `${greeting}, ${name}`;
}
const result = formatGreetings("Segun","Hello")
console.log(result);
