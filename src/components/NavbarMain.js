import React, { useContext } from "react";
import "../css/style.css";
import { Nav, Navbar, Modal } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import AboutUs from "./AboutUs";

import { Link, Redirect, Route, Router, Switch } from "react-router-dom";
import Index from "./Index";
import ContactUs from "./ContactUs";
import ProductsMain from "./ProductsMain";
import { UserContext } from "../App";
import Logout from "./Logout";

function NavbarMain() {
  const user = useContext(UserContext);
  const loginStatusMain = user.loginStatus;

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <a href="tel:+977-9860304670">9860304670</a>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products">Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Us {user.name}</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {!loginStatusMain ? (
              <>
                <ModalLogin />
                <ModalRegister />
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/cart">Cart</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/wishlist">Wishlist</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile">Profile</Link>
                </Nav.Link>{" "}
                <Logout />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
