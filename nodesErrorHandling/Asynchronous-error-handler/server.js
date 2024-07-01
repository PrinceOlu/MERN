const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Route to fetch posts using JSON Placeholder
app.get("/posts", async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data);
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

// Home route
app.get("/", (req, res) => {
  try {
    res.json({
      message: "Welcome to Asynchronous error handling",
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

// Synchronous error example route
app.get("/sync-error", (req, res, next) => {
  try {
    throw new Error("Synchronous error handler");
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
