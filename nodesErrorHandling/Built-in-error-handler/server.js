const express = require("express");
const app = express();
const PORT = 3000;

// simulate builtin error handler
app.use((req, res, next) => {
  // simulate an error condition
  const isError = true;
  console.log("I will always be called...");
  if (isError) {
    // create an error object
    const error = new Error("Simulated error");
    next(error);
  } else {
    next();
  }
});

// home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to built-in error handling",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
