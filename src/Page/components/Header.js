import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
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
          <Navbar.Brand href="/main" style={{ fontSize: "23px" }}>
            Yulieth Lubo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto pr-1">
              <Nav.Link className="mr-1 text-light" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mr-1 text-light" href="/">
                About
              </Nav.Link>
              <Nav.Link className="mr-1 text-light" href="/">
                Services
              </Nav.Link>
              <Nav.Link className="mr-1 text-light" href="/">
                Portfolio
              </Nav.Link>
              <Nav.Link className="mr-0 text-light" href="/">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
