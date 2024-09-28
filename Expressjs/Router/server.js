// initialise expres
const express = require("express");
// create an intance of express
const app = express();
// create the port
const PORT = 3000;
// import the Route
const userRouter = require("./UsersRoute/UsersRoute");
// use the router as a middleware
app.use("/users", userRouter);
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
