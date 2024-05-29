// initialise expres
const express = require("express");
// create an intance of express
const app = express();
// create the port
const PORT = 3000;

// sample BUILTIN MIDDLEWARES
// 1) to sever a static file
app.use(express.static());
// 2 To get incoming data in json format
app.use(express.json());

// APPLICATION LEVEL MIDDLEWARE
// can be used globally
// login details of every request
app.use((req, res, next) => {
  console.log("i am application level middleware");
  next();
});
// lHome page route
app.get("/", (req, res) => {
  res.json({
    status: "Succesful",
    message: "Wecome to Homepage",
  });
});
// lets add new book route
app.post("/books", (req, res) => {
  // console.log(req.body);
  const addBook = req.body;
  books.push(addBook);
  res.json({
    status: "Succesful",
    message: "book added successfully",
    data: addBook,
  });
});
// start the server
app.listen(PORT, () => {
  console.log("Server started...");
});
