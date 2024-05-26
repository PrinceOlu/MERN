// initialise expres
const express = require("express");

// create an intance of the router
const userRouter = express.Router();

// Getting all users
userRouter.get("/", (req, res) => {
  res.json({
    message: "All Users Route",
  });
});
// Getting a user
userRouter.get("/:id", (req, res) => {
  res.json({
    message: "All Users Route",
  });
});

// updating a single user
userRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    message: "Single User Updated",
  });
});

// deleting a single user
userRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    message: "A User deleted",
  });
});
module.exports = userRouter;
