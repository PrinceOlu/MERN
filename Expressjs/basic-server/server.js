// 1) import the module
const express = require("express");

// 2) create the instance of express
const app = express();

// 3) Create the PORT
const PORT = 8082;

// 4) Define the router handler
app.get("/", (req, res) => {
  res.send("Hello World");
});

// start the server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// console.log(app);
