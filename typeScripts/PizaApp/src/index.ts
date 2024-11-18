type Pizza = {
    id: number; // Unique identification
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: Pizza;
    status: "ordered" | "Completed";
};

// Initial register value
let cashInRegister: number = 100;
// Dynamic order and pizza IDs
let nextOrderId: number = 1;
let nextPizzaId: number = 1;
// Orders queue
const orderQueue: Order[] = [];

// Pizza menu
const menu: Pizza[] = [
    { id: nextPizzaId++, name: "meal 1", price: 10 },
    { id: nextPizzaId++, name: "meal 2", price: 20 },
    { id: nextPizzaId++, name: "meal 3", price: 30 },
    { id: nextPizzaId++, name: "meal 4", price: 40 },
];

// Function to add new pizza to the menu
const addNewPizza = (pizzaObj: Omit<Pizza, "id">): void => {
    const exists = menu.some((pizza) => pizza.name.toLowerCase() === pizzaObj.name.toLowerCase());
    if (exists) {
        console.log(`Pizza "${pizzaObj.name}" already exists.`);
        return;
    }
    const newPizza: Pizza = { id: nextPizzaId++, ...pizzaObj };
    menu.push(newPizza);
};

// Function to place a new order
const placeOrder = (pizzaName: string): Order | undefined => {
    const selectedPizza = menu.find((pizza) => pizza.name.toLowerCase() === pizzaName.toLowerCase());
    if (!selectedPizza) {
        console.log("Pizza not found in the menu.");
        return;
    }
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    cashInRegister += selectedPizza.price; // Add pizza price to the cash register
    return newOrder;
};

// Function to complete an order
const completeOrder = (orderId: number): Order | undefined => {
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
export const getPizzaDetails = (identifier: string | number): Pizza | undefined => {
    if (typeof identifier === "string") {
        return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === "number") {
        return menu.find((pizza) => pizza.id === identifier);
    } else {
        throw new Error("Invalid identifier type. Must be a string or number.");
    }
};

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
console.log("Get Pizza by Name:", getPizzaDetails("Pizza 5"));
console.log("Get Pizza by ID:", getPizzaDetails(2));
