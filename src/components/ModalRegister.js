import React, { useState } from "react";
import { Button, Modal, Form, Col, Nav } from "react-bootstrap";

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
          <Form className="form registerForm" method="POST">
            <Form.Row>
              <Form.Group as={Col} controlId="registerFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group as={Col} controlId="registerLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="registerPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group as={Col} controlId="registerAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="registerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Sign Up</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalRegister;
