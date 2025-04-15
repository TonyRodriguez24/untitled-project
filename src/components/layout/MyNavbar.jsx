"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-gray-900">
      <Container>
        <Navbar.Brand href="/" className="text-white">
          JPM and Sons
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-collapse" />
        <Navbar.Collapse id="main-navbar-collapse">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/financing" className="text-white">
              Financing Options
            </Nav.Link>
            <Nav.Link as={Link} href="/estimate" className="text-white">
              Estimate Tool
            </Nav.Link>
            <Nav.Link as={Link} href="/estimate" className="text-white">
              Gallery
            </Nav.Link>
            <NavDropdown title="Services" id="services-dropdown-menu">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="text-white">
              About us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
