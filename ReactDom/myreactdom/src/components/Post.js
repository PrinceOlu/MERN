import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import posts from "../utils/Data";

function Post() {
  return (
    <div>
      <h2>Posts</h2>
      {/* Loop through the posts using .map */}
      {posts.map((post) => (
        <div key={post.id}>
          {/* Use Link to navigate to post details */}
          <Link to={`/postDetails/${post.id}`}>
            <h2>{post.title}</h2>
            {/* Uncomment the following line if you have an image URL */}
            {/* <img src={post.image} alt={post.title} /> */}
            <p>{post.content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Post;
