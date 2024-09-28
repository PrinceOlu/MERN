const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// serve the static files/folders
// using a middleware
app.use(express.static(path.join(__dirname, "public")));

// setup the ejs view engine
app.set("view engine", "ejs");

// render home route
app.get("/", (req, res) => {
  res.render("home");
});
// render about route
app.get("/about", (req, res) => {
  res.render("about");
});
// render contact route
app.get("/contact", (req, res) => {
  res.render("contact");
});
// render gallery route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
// render user data route
app.get("/users", (req, res) => {
  // dummy db
  const userData = {
    username: "Prince",
    age: 20,
    isPremiumUser: false,
    email: "prince@gmail.com",
  };
  res.render("userData.ejs", userData);
});

// start the server
app.listen(PORT, () => {
  console.log("server is running...");
});
