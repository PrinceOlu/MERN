const express = require("express");
const app = express();
const PORT = 3000;
// to be able to allow the client 
// to send data to the server
// we use a middleware
app.use(express.json());
// dummy data
const books = [
  {id:"1",name:"Prince"},
  {id:"2",name:"Ade"},
  {id:"3",name:"Mofe"},
];

// lets create the home route
app.get("/",(req,res)=>{
  res.json({
    status:"successfull",
    message:"Welcome to our home page"
  })
})

// get  all books
app.get("/books/",(req,res)=>{
  res.json({
    status:"successful",
    message:"All books found",
    data:books,
  })
})

// Get a single book by ID
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
    // Find the book by matching the ID
  const foundBook = books.find((book) => book.id === id);

  if (foundBook) {
    res.json({
      status: "successful",
      message: "book found",
      data: foundBook
    });
  } else {
    res.json({
      status: "Unsuccessful",
      message: "book not found"
    });
  }
});
// Add a new book
app.post("/books/", (req, res) => {
  const newBook = req.body;
  // Add the new book to the books array
  books.push(newBook);
  res.json({
    status: "Successful",
    message: "Book added successfully",
    data: newBook, // Return the newly added book
  });
});

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
  
})