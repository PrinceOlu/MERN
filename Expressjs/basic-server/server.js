// 1) Import the module
const express = require("express");

// 2) Create the instance of express
const app = express();

// 3) Create the PORT
const PORT = 8082;

// 4) Define the router handler for the root path to send a plain text
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Define another route to send a JSON object as data
const requestHandler = (req, res) => {
  // lets simulate a dummy db
  const data = {
    id: 123,
    name: "Prince Olusegun",
    email: "olusegun@gmail.com",
  };
  // Set the response header to application/JSON
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
  // console.log(data);
  // to access this route on the browser
  // http://localhost:8082/user

};

// Assign the requestHandler to the /user route
app.get("/user", requestHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
