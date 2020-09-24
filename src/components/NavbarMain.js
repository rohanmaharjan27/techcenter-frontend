import React, { useContext } from "react";
import "../css/style.css";
import { Nav, Navbar } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

import { Link } from "react-router-dom";
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
          <a href="tel:+977-9860304670" className="link">
            9860304670
          </a>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className="link">
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="link">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="link">
                Contact Us {user.name}
              </Link>
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
                  <Link to="/cart" className="link">
                    Cart
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/wishlist" className="link">
                    Wishlist
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile" className="link">
                    Profile
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/orders" className="link">
                    Your Orders
                  </Link>
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
