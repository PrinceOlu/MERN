var menu = [
    { name: "meal 1", price: 10 },
    { name: "meal 2", price: 20 },
    { name: "meal 3", price: 30 },
    { name: "meal 4", price: 40 },
];
// Initial register value
var cashInRegister = 100;
// Dynamic order ID starting from 1
var nextOrderId = 1;
// Orders queue
var orderQueue = [];
// Function to add new pizza to the menu
var addNewPizza = function (pizzaObj) {
    menu.push(pizzaObj);
};
// Function to place a new order
var placeOrder = function (pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    if (!selectedPizza) {
        console.log("No Selected Pizza");
        return;
    }
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    cashInRegister += selectedPizza.price; // Add the pizza price to the cash register
    return newOrder;
};
// Function to complete the order
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
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
