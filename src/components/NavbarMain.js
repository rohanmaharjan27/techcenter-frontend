import React, { useState } from "react";
import { Nav, Navbar, Modal } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

function NavbarMain() {
  return (
    <div>
      <div>9860304670</div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home">TechCenter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <ModalLogin />
            <ModalRegister />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
