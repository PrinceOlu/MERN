const express = require("express");

const {
  showCreateForm,
  showPosts,
  createPosts,
} = require("../controllers/postController");

// Router
const postRouter = express.Router();

//! Show the create form
postRouter.get("/create", showCreateForm);
//! To get all posts
postRouter.get("/list", showPosts);
//! Create the post (The main logic)
postRouter.post("/create", createPosts);

module.exports = postRouter;
