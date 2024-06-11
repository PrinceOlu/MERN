const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Render home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// Render about route
app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

// Render contact route
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

// Render gallery route
app.get("/gallery", (req, res) => {
  res.render("gallery", { title: "Gallery" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
