import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/Data";

function PostDetails() {
  const { postId } = useParams();

  // Find the post based on postId
  const post = posts.find((post) => post.id === parseInt(postId));

  // If post is not found, handle this case (optional)
  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h2>Post Details: {postId}</h2>
      <h2>Post Title: {post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author}</p>
      {/* Uncomment the following line if you have an image URL */}
      <img src={post.image} alt={post.title} />
    </div>
  );
}

export default PostDetails;
