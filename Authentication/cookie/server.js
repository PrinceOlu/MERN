const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
// lets set the viw engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// simulated user database
const users = [
  {
    username: "Prince",
    password: "123",
    role: "admin",
  },
  {
    username: "PrinMoyoce",
    password: "456",
    role: "user",
  },
];

// lets create the home route
app.get("/", (req, res) => {
  res.render("home");
});

// lets create the login-form route
app.get("/login", (req, res) => {
  res.render("login");
});

// lets create the login route logic
app.post("/login", (req, res) => {});

// lets create the dashboard route
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
// lets create the logout route
app.get("/logout", (req, res) => {});

// Start the server
app.listen(PORT, () => {
  console.log("server started...");
});
