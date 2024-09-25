const express = require("express");
const app = express();
const PORT = 3000;

// import the Route
const userRouter = require("./UsersRoute/UsersRoute");
// import isAthenticated
const isAthenticated = require("../Router-Middleware/middleware/isAuthenticated");

// use the router as a middleware
app.use("/users", isAthenticated, userRouter);

// home route
app.get("/", (req, res) => {
  res.json({
    message: "Home page",
  });
});

// start the server
app.listen(PORT, () => {
  console.log("Server started.....!");
});
