// initialise expres
const express = require("express");
// create an intance of express
const app = express();
// create the port
const PORT = 3000;

// lets add a middle-ware to catch the post from the new book added
app.use(express.json());

// lets create a dummy db
const books = [
  { id: "1", title: "Prince Book", author: "Prince" },
  { id: "2", title: "Moyo Book", author: "Moyo" },
  { id: "3", title: "Ade Book", author: "Ade" },
];

// lets create the home route
app.get("/", (req, res) => {
  res.json({
    status: "Succesful",
    message: "Welcome to my home page",
  });
});
// lets create all the book route
app.get("/books", (req, res) => {
  res.json({
    status: "Succesful",
    message: "All books",
    data: books,
  });
});
// lets create a single book route
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  if (bookFound) {
    res.json({
      status: "Succesful",
      message: "All books",
      data: bookFound,
    });
  } else {
    res.json({
      status: "Succesful",
      message: "All books",
      data: "Book not found",
    });
  }
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
