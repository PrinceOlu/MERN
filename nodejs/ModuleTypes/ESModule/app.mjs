// default export
// import greeting from "./utils.mjs";
// console.log(greeting("Prince"));

// named export
// import { add, subtract } from "./utils.mjs";

// console.log(add(5, 6));
// console.log(subtract(15, 6));

// mixed export (default + named)

// import greeting, { add, subtract } from "./utils.mjs";

// console.log(greeting("Prince"));
// console.log(add(5, 6));
// console.log(subtract(15, 6));

// import everything
import * as utils from "./utils.mjs";

console.log(utils.add(5, 6));
console.log(utils.subtract(15, 6));
