type Pizza = {
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: Pizza;
    status: string;
};

const menu: Pizza[] = [
    { name: "meal 1", price: 10 },
    { name: "meal 2", price: 20 },
    { name: "meal 3", price: 30 },
    { name: "meal 4", price: 40 },
];

// Initial register value
let cashInRegister: number = 100;
// Dynamic order ID starting from 1
let nextOrderId: number = 1;
// Orders queue
const orderQueue: Order[] = [];

// Function to add new pizza to the menu
const addNewPizza = (pizzaObj: Pizza) => {
    menu.push(pizzaObj);
};

// Function to place a new order
const placeOrder = (pizzaName: string): Order | undefined => {
    const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
    if (!selectedPizza) {
        console.log("No Selected Pizza");
        return;
    }
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    cashInRegister += selectedPizza.price; // Add the pizza price to the cash register
    return newOrder;
};

// Function to complete the order
function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        console.log("Order not found");
        return;
    }
    order.status = "Completed";
    return order;
}

// Add new pizzas to the menu
addNewPizza({ name: "Pizza 5", price: 50 });
addNewPizza({ name: "Pizza 6", price: 60 });
addNewPizza({ name: "Pizza 7", price: 70 });

// Place and complete orders
placeOrder("Pizza 5");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
