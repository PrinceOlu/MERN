const Post = require("../model/postModel"); // Adjust the path based on your actual file structure

// show the create form controller
const showCreateForm = (req, res) => {
  res.render("createPost");
};
// show post lists
const showPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("list", { posts });
};
// create Posts
const createPosts = async (req, res) => {
  const { title, content, author } = req.body;
  await Post.create({
    title,
    content,
    author,
  });
  //redirect to the post list
  res.redirect("/list");
};

module.exports = {
  showCreateForm,
  showPosts,
  createPosts,
};
