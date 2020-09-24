import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Modal, Nav } from "react-bootstrap";
import { UserContext } from "../App";

function Logout() {
  const user = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const logoutHandler = () => {
    sessionStorage.setItem("loginStatus", false);
    user.setLoginStatus({ value: true });

    localStorage.clear();
    sessionStorage.clear();
    setShow(false);
    alert("Logged Out Successfully!");
    history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <Nav.Link>
        <Link onClick={handleShow} className="link">
          Logout
        </Link>
      </Nav.Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id="Modal-Login"
        className={"modal-login"}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to Logout?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button className="buttonClose" variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="buttonSubmit"
            variant="primary"
            onClick={logoutHandler}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Logout;
