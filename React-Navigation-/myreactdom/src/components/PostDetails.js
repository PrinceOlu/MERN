import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/Data"; // Ensure this path is correct
import { Button, Card, Container } from 'react-bootstrap';

function PostDetails() {
  const { postId } = useParams();

  // Find the post based on postId
  const post = posts.find((post) => post.id === parseInt(postId));

  // Log the post data for debugging
  console.log("Post ID:", postId);
  console.log("Found Post:", post);

  // If post is not found, handle this case
  if (!post) return <h2 className="text-center">Post not found</h2>;

  return (
    <Container className="mt-4">
      <Card style={{ maxWidth: '600px', margin: '20px auto' }}>
        <Card.Img
          variant="top"
          src={post.image || 'https://via.placeholder.com/600x400?text=No+Image+Available'}
          alt={post.title}
        />
        <Card.Body>
          <Card.Text><strong>Post ID:</strong> {post.id}</Card.Text>
          <Card.Title>Post Title: {post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Card.Footer className="text-muted">
            <small>Author: {post.author} | Date: {post.date}</small>
          </Card.Footer>
          <Button variant="primary" onClick={() => alert('Action coming soon!')}>
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PostDetails;
