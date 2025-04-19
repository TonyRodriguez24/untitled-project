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
            <Nav.Link
              as={Link}
              href="/"
              className="text-white hover:!text-amber-400">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/financing"
              className="text-white hover:!text-amber-400">
              Financing Options
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/estimate"
              className="text-white hover:!text-amber-400">
              Estimate Tool
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/gallery"
              className="text-white hover:!text-amber-400">
              Gallery
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="services-dropdown-menu"
              className="hover:!text-amber-400">
              <NavDropdown.Item href="/services/asphalt">Asphalt</NavDropdown.Item>
              <NavDropdown.Item href="/services/concrete">Concrete</NavDropdown.Item>
              <NavDropdown.Item href="/services/home-improvement">Home Improvement</NavDropdown.Item>
              <NavDropdown.Item href="/services/masonry">Masonry</NavDropdown.Item>
              <NavDropdown.Item href="/services/paver-sealing">Paver Sealing</NavDropdown.Item>
              <NavDropdown.Item href="/services/pressure-washing">Pressure Washing</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Link href="/about-us" className="text-white hover:!text-amber-400">
              About us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
