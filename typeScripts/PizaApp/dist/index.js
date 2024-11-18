"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetails = void 0;
// Initial register value
let cashInRegister = 100;
// Dynamic order and pizza IDs
let nextOrderId = 1;
let nextPizzaId = 1;
// Orders queue
const orderQueue = [];
// Pizza menu
const menu = [
    { id: nextPizzaId++, name: "meal 1", price: 10 },
    { id: nextPizzaId++, name: "meal 2", price: 20 },
    { id: nextPizzaId++, name: "meal 3", price: 30 },
    { id: nextPizzaId++, name: "meal 4", price: 40 },
];
// Function to add new pizza to the menu
const addNewPizza = (pizzaObj) => {
    const exists = menu.some((pizza) => pizza.name.toLowerCase() === pizzaObj.name.toLowerCase());
    if (exists) {
        console.log(`Pizza "${pizzaObj.name}" already exists.`);
        return;
    }
    const newPizza = Object.assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
};
// Function to place a new order
const placeOrder = (pizzaName) => {
    const selectedPizza = menu.find((pizza) => pizza.name.toLowerCase() === pizzaName.toLowerCase());
    if (!selectedPizza) {
        console.log("Pizza not found in the menu.");
        return;
    }
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    cashInRegister += selectedPizza.price; // Add pizza price to the cash register
    return newOrder;
};
// Function to complete an order
const completeOrder = (orderId) => {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        console.log("Order not found.");
        return;
    }
    if (order.status === "Completed") {
        console.log("Order is already completed.");
        return order;
    }
    order.status = "Completed";
    return order;
};
// Get pizza details using type narrowing
const getPizzaDetails = (identifier) => {
    if (typeof identifier === "string") {
        return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === "number") {
        return menu.find((pizza) => pizza.id === identifier);
    }
    else {
        throw new Error("Invalid identifier type. Must be a string or number.");
    }
};
exports.getPizzaDetails = getPizzaDetails;
// Add new pizzas to the menu
addNewPizza({ name: "Pizza 5", price: 50 });
addNewPizza({ name: "Pizza 6", price: 60 });
addNewPizza({ name: "Pizza 7", price: 70 });
// Place and complete orders
placeOrder("Pizza 5");
completeOrder(1);
// Output results
console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
// Test getPizzaDetails
console.log("Get Pizza by Name:", (0, exports.getPizzaDetails)("Pizza 5"));
console.log("Get Pizza by ID:", (0, exports.getPizzaDetails)(2));
