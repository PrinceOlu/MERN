"use strict";
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b]; // Return as an array
}
const color1 = getRandomColor();
const color2 = getRandomColor();
console.log(color1, color2);
const userone = { name: "Prince", score: 50 };
function createUser(user) {
    console.log((`${user.name} has a score of ${user.score}`));
}
createUser(userone);
createUser({
    name: "Olu",
    score: 20
});
