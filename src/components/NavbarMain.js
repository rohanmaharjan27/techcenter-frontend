import React from "react";
import "../css/style.css";
import { Nav, Navbar, Modal } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import AboutUs from "./AboutUs";

import { Link, Redirect, Route, Router, Switch } from "react-router-dom";
import Index from "./Index";
import ContactUs from "./ContactUs";
import ProductsMain from "./ProductsMain";

function NavbarMain() {
  return (
    <div>
      <a className="tel" href="tel:+977-9860304670">
        9860304670
      </a>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/products">Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
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
