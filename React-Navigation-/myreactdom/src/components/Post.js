import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import posts from "../utils/Data"; // Assuming this path is correct
import { Card, Container } from 'react-bootstrap';

function Post() {
  return (
    <Container className="mt-4">
      <h2>Posts</h2>
      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body className="d-flex align-items-start"> {/* Flex container */}
            <Link to={`/postDetails/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Card.Img
                variant="top"
                src={post.image || 'https://via.placeholder.com/600x400?text=No+Image+Available'}
                alt={post.title}
                style={{ width: '150px', height: 'auto', marginRight: '20px' }} // Margin for spacing
              />
              <div>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </div>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Post;
