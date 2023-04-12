import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ImageHeader from "../img/fondototal1.png";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          variant="dark"
          collapseOnSelect
          expand="lg"
          sticky="top"
          style={{ height: "60px", width: "100%", justifyContent:"space-between", paddingLeft:"50px", paddingRight:"50px", backgroundImage:`url(${ImageHeader})`}}
        >
          <Navbar.Brand href="/" style={{ fontSize: "23px" }}>
            Yulieth Lubo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto pr-1">
              <Nav.Link className="mr-1 text-light" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mr-1 text-light" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="mr-1 text-light" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="mr-1 text-light" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="mr-0 text-light" href="https://cherry-web.vercel.app/" target="_blank">
                Cherry Studio Creativo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
