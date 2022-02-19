import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarHeader = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h3 className="title">Typescript React Boilerplate</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text>
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/page2" className="nav-link">
                Page 2
              </Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
