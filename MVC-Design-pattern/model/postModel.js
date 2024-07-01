const mongoose = require("mongoose");
//---Post schema and model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
