// using setAttribute to change the product image, by passing it through the ID
const product1 = document.getElementById("product1").querySelector("img");

// to change the image using setAttribute
product1.setAttribute(
  "src",
  "https://media.istockphoto.com/id/588223710/photo/diwali-oil-lamp.jpg?s=2048x2048&w=is&k=20&c=TjbcdE6m5dMMfYXjFwB5VFo1v7TsvNTfuW2xRlaMrX0="
);
console.log(product1);
// lets set the alt attribute for the image
product1.setAttribute("alt", "New image");
// to change the link, you have to select it with the id
const productlink = document.getElementById("product1").querySelector("a");
// console.log(productlink);
productlink.setAttribute("href", "newlink.html");
console.log(productlink);
