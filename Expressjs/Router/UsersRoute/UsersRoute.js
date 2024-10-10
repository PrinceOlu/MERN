import express from "express"; // Use ES6 import
const userRouter = express.Router();

// Getting all users
userRouter.get("", (req, res) => {
  res.json({
    message: "All users",
  });
});

// Getting a single user
userRouter.get("/:id", (req, res) => {
  res.json({
    message: "A single user",
  });
});

// Updating a single user
userRouter.put("/:id", (req, res) => {
  res.json({
    message: "Updating A single user",
  });
});

// Deleting a single user
userRouter.delete("/:id", (req, res) => {
  res.json({
    message: "Deleting A single user",
  });
});

// Export the router
export default userRouter;
