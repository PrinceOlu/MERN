const express = require("express");
const app = express();
const PORT = 3000;
// receiving data from postman when creating a new book using middle-ware
app.use(express.json());

// Dummy book database
const books = [
  { id: 1, title: "My book 1", author: "Prince" },
  { id: 2, title: "My book 2", author: "Prince 2" },
  { id: 3, title: "My book 3", author: "Prince 3" },
];

// Home route
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to my API DEV class",
  });
});

// Fetch all books route
app.get("/books", (req, res) => {
  res.json({
    status: "Success",
    message: "Books found...",
    data: books,
  });
});

// Fetch a single book by ID route
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convert id to number
  const bookFound = books.find((book) => book.id === id);

  if (bookFound) {
    return res.json({
      status: "Success",
      message: "Book found...",
      data: bookFound,
    });
  } else {
    return res.status(404).json({
      status: "Failure",
      message: "Book not found...",
    });
  }
});
// create a single book
app.post("/books", (req, res) => {
  //   console.log(req.body);
  const newBook = req.body;
  //   lets push the new book into the existing array of books
  books.push(newBook);
  res.json({
    status: "Success",
    message: "Book created successfully...",
    data: books,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
