import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Headbar = () => (
  <Navbar variant="dark" expand="lg">
    <Navbar.Brand>covid19-campania</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/franjsco/covid19-campania">Informazioni sul progetto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Headbar;
