type Rgb = [number, number, number];

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b]; // Return as an array
}

const color1 = getRandomColor()
const color2 = getRandomColor()
console.log(color1, color2);


// example 2 - object literals
type User = {
    name: string
    score: number
}

const userone : User = {name: "Prince", score: 50}

function createUser(user: User): void {
    console.log((`${user.name} has a score of ${user.score}`));
    
}
createUser(userone)
createUser({
    name:"Olu",
    score: 20
})
