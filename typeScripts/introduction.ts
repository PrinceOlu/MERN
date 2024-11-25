//  1) Basics
let digit: number = 3;
let company: string = "my company name is Nmap"
let isPublished: boolean = true


// define an array of numbers
let digits : number [] = [1,2,3,4,5,6,7]
let Companies : string [] = ["Nmap","Technology","google"]
let xAny: any[] = [1,"segun",true]



const concatValues = (a: string, b: string) : string =>{
    return a + b;
}
// console.log("hello","world")
// 2)  Interface (mostly used for Objects) and optional
interface UserInterface{
    idNumber: number,
    name: string,
    age?: number //? make this value optional
}

const Customer: UserInterface = {
    idNumber: 1,
    name: "Prince",
    // age: 20
}
// console.log(Customer);

// 3) Type and Unions (| i.e or)
const PrintID = (id: number | string)=>{
    console.log("ID is", id);
    
}
PrintID("PrinceId")
// OR by using type definition
type PrintIDType = string | number;

const PrintID2 = (id: PrintIDType)=>{
    console.log("ID is", id);
    
}
PrintID("PrinceId")

// 4) intersection &
type Person2 = {
    name: string;
    age: number;
    
  };
  
  type Employee = {
    employeeId: number;
    department: string;
  };
  
  type Manager = Person2 & Employee; // Intersection of Person and Employee
  
  const manager: Manager = {
    name: "Alice",
    age: 35,
    employeeId: 101,
    department: "HR",
 };
  
//   console.log(`Manager Name: ${manager.name}`);
//   console.log(`Age: ${manager.age}`);
//   console.log(`Employee ID: ${manager.employeeId}`);
//   console.log(`Department: ${manager.department}`);
  
// 5) Enum
enum Direction {
    North,
    South,
    East,
    West,
  }
  
  function getDirectionMessage(direction: Direction): string {
    switch (direction) {
      case Direction.North:
        return "You are heading North!";
      case Direction.South:
        return "You are heading South!";
      case Direction.East:
        return "You are heading East!";
      case Direction.West:
        return "You are heading West!";
      default:
        return "Unknown direction!";
    }
  }
  
  // 6) Using the enum
  const myDirection: Direction = Direction.North;
  
//   console.log(getDirectionMessage(myDirection)); // Output: You are heading North!
//   console.log(Direction.East); // Output: 2 (default enum values are indexed starting at 0)
  
// 7) Generic