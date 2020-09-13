import React, { useState } from "react";
import { Button, Modal, Form, Col, Nav } from "react-bootstrap";
import FormRegister from "./FormRegister";

function ModalRegister() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Nav.Link onClick={handleShow}>Register</Nav.Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id="Modal-Login"
        className={"modal-login"}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormRegister handleClose={handleClose} setShow={setShow} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalRegister;
