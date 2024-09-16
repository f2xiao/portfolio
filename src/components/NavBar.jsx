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
          <Nav.Link href="/">Home</Nav.Link>
          {["work", "experience", "contact"].map((name) => (
            <Nav.Link href={`#${name}`} key={name}>
              {name}
            </Nav.Link>
          ))}
          <Nav.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://f2xiao.github.io/site"
          >
            Blogs
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://f2xiao.github.io/Fangfang%20Xiao%20Resume.pdf"
            style={{ background: "pink", borderRadius: "5px" }}
            className="cta__link"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
