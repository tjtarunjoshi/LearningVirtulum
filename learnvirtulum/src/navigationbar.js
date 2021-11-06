import React from 'react';
import {Navbar, Container, NavbarBrand, NavLink, Nav} from 'react-bootstrap';


export default function NavigationBar() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Profile</Nav.Link>
      <Nav.Link href="#pricing">Tools</Nav.Link>
      <Nav.Link href="#pricing">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
    </div>
  )
}