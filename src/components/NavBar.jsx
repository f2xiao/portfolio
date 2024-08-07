import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar variant="light" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://avatars.githubusercontent.com/u/25191617?s=400&u=bda4e2d6456c927b05b8259154bc353056fe75cb&v=4"
          alt="Fangfang"
          width="40px"
          height="40px"
          style={{ borderRadius: "50%" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {["work", "about", "experience", "contact"].map((name) => (
            <Nav.Link as={Link} to={`#${name}`}>
              {name}
            </Nav.Link>
          ))}
          <Nav.Link
            as={Link}
            target="_blank"
            rel="noopener noreferrer"
            to="/Fangfang Xiao Resume.pdf"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
