const express = require("express");
const PORT = 3000;
const app = express();
const bookRouter = require("./routes/booksRouter");

// Middleware to handle JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    status: "Successful",
    message: "Welcome home"
  });
});

// Use the book router and pass the books array to it
app.use("/books", bookRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
