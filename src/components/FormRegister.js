import React, { useState } from "react";
import "../css/style.css";
import axios from "axios";
import { Form, Col, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const FormRegister = ({ handleClose, setShow }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    useType: "user",
  });
  const history = useHistory();

  const submitHandler = (e) => {
    axios
      .post("http://localhost:8000/users/register", data)
      .then((response) => {
        if (response.data.message_success === "Register Successful") {
          alert(response.data.message_success);
          setShow(false);
          history.push("/");
        } else {
          alert(response.data.message_error);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <Form
        className="form registerForm"
        onSubmit={submitHandler}
        method="POST"
      >
        <Form.Row>
          <Form.Group as={Col} controlId="registerFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="registerFirstName"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="registerLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="registerLastName"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="registerPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              name="registerPhone"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="registerAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              name="registerAddress"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="registerEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="registerEmail"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="registerPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="registerPassword"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Modal.Footer>
          <Button className="buttonClose" variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button className="buttonSubmit" variant="primary" type="submit">
            Sign Up
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
};

export default FormRegister;
