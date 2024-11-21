const express = require("express");
const { books } = require("../schema/booksSchema"); // Import books data

// Create an instance of Router
const bookRouter = express.Router();

// Get all books
bookRouter.get("/", (req, res) => {
  res.json({
    status: "Successful",
    message: "All books",
    data: books
  });
});

// Get a single book by ID
bookRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const foundBook = books.find((book) => book.id === id);

  if (foundBook) {
    res.json({
      status: "Successful",
      message: "Book found",
      data: foundBook
    });
  } else {
    res.json({
      status: "Unsuccessful",
      message: "Book not found"
    });
  }
});

// Add a new book
bookRouter.post("/", (req, res) => {
  const newBook = req.body;
  newBook.id = (books.length + 1).toString(); // Generate a new ID
  books.push(newBook);

  res.json({
    status: "Successful",
    message: "Book added successfully",
    data: newBook
  });
});

module.exports = bookRouter;
