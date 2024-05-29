const express = require("express");
// create an instance of the router
const userRouter = express.Router();
// using the route() method for chaining

// getting all users
userRouter.route("/").get((req, res) => {
  res.json({
    message: "All users",
  });
});
// getting a single user
userRouter
  .route("/:id")
  .get((req, res) => {
    res.json({
      message: "A single user",
    });
    // updating a single user
  })
  .put("/:id", (req, res) => {
    res.json({
      message: "Updating A single user",
    });
    // deleting a single user
  })
  .delete("/:id", (req, res) => {
    res.json({
      message: "deleting A single user",
    });
  });
module.exports = userRouter;
