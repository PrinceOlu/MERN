const express = require("express");
// create an instance of the router
const userRouter = express.Router();

// getting all users
userRouter.get("", (req, res) => {
  res.json({
    message: "All users",
  });
});
// getting a single user
userRouter.get("/:id", (req, res) => {
  // const id = id.params.id;
  res.json({
    message: "A single user",
  });
});
// updating a single user
userRouter.put("/:id", (req, res) => {
  // const id = id.params.id;
  res.json({
    message: "Updating A single user",
  });
});
// deleting a single user
userRouter.delete("/:id", (req, res) => {
  // const id = id.params.id;
  res.json({
    message: "deleting A single user",
  });
});
module.exports = userRouter;
