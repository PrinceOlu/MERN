// suppose you are working on an e-commerce website, and you need to clculate the total price of items in the user's shopping cart. Each item in the cart is represented as an object in an array with properties such as 'name', 'price', 'quantity'. our task is to calculate the total cost of items in the cart then give 10% discount.
// Initial data
const cart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "phone", price: 500, qty: 2 },
  { name: "TV", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];
console.log(`Product Prices before discount:`, cart);

// Calculate discounted prices and the total after discount
const discount = cart.map((item) => {
  return {
    name: item.name,
    price: item.price * 0.9,
    qty: item.qty,
  };
});
console.log(`Product Prices after discount:`, discount);
const totalafterDiscount = discount.reduce((total, item) => {
  return total + item.price * item.qty; // Total price for each item after discount
}, 0);
console.log(`Total after 10% discount: $${totalafterDiscount.toFixed(2)}`);
