import express from "express";
import userRouter from "../Router/UsersRoute/UsersRoute.js"; // Use ES6 import
const app = express();
const PORT = 3000;

// Use the router as a middleware
app.use("/users", userRouter);

// to be able to allow the client 
// to send data to the server
// we use a middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Home page",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});
