import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { UserContext } from "../App";

function Logout() {
  const user = useContext(UserContext);
  const loginStatus = sessionStorage.getItem("loginStatus");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userDetails = JSON.parse(localStorage.getItem("userData"));

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
      <Button onClick={handleShow}>Logout</Button>
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
