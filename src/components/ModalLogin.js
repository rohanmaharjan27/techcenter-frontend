import React, { useState } from "react";
import { Button, Modal, Form, Col, NavLink } from "react-bootstrap";
import Formlogin from "./FormLogin";

function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavLink onClick={handleShow}>Login</NavLink>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id="Modal-Login"
        className={"modal-login"}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formlogin handleClose={handleClose} /> {/*Login Code*/}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLogin;
