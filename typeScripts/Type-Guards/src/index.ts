//Type Guards

type Id = number | string;

function swapIdType (id: Id){
    if(typeof id === "string"){
        // we can now use string methods
        return parseInt(id)
    }else{
        // we can now use number methods
        return id.toString()
    }
}
const idOne = swapIdType(5)
const idTwo = swapIdType("10")

console.log(idOne, idTwo);


// tagged Interfaces
interface User {
    type: "user"
    username: string
    email : string
    id: Id
}

interface Person {
    type: "person"
    firstname : string
    age: number
    id: Id
}
function logDetails(value: User | Person): void{
        if(value.type === "user"){
            console.log(value.email, value.username);
            
        }
        if(value.type === "person"){
            console.log(value.age, value.firstname);
            
        }
}