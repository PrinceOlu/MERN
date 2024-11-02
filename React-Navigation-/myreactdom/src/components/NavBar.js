import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>MyApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/post" className={({ isActive }) => (isActive ? 'active' : '')}>
            Post
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
