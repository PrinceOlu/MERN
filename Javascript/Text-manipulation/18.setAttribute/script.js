const product1El = document.getElementById("product1").querySelector("img");
product1El.setAttribute(
  "src",
  "https://media.istockphoto.com/id/588223710/photo/diwali-oil-lamp.jpg?s=2048x2048&w=is&k=20&c=TjbcdE6m5dMMfYXjFwB5VFo1v7TsvNTfuW2xRlaMrX0="
);
// to change the alt
product1El.setAttribute("alt", "lamp");
console.log(product1El);

// lets change the link
const product1Anchor = document.getElementById("product1").querySelector("a");
product1Anchor.setAttribute("href", "www.buyme.com");

console.log(product1Anchor);
