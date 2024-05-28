// initialize express
const express = require("express");
// create an instance of express
const app = express();
// create PORT
const PORT = 3000;

// import router and user as middle ware
const userRouter = require("./UersRoute/UsersRoute");
// use it as a middle ware
app.use("/users", userRouter);
// create home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome home",
  });
  console.log("Welcome home");
});
// START SERVER
app.listen(PORT, () => {
  console.log("server running...");
});
