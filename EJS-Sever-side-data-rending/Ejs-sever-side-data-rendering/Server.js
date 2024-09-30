const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Setup the EJS view engine
app.set("view engine", "ejs");

// Render home route
app.get("/", (req, res) => {
  res.render("home");
});

// Render about route
app.get("/about", (req, res) => {
  res.render("about");
});

// Render contact route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Render gallery route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

// Render user data route
app.get("/users", (req, res) => {
  const userData = {
    username: "Prince",
    age: 20,
    isPremiumUser: false,
    email: "prince@gmail.com",
  };
  res.render("userData", userData); // Adjusted to use userData.ejs
});

// Render product data route
app.get("/products", (req, res) => { // Changed the path to /products
  const productData = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];
  res.render("productData", {productData }); // Pass products data
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
