import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";

const Formlogin = ({ handleClose }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setData({ ...data, [name]: value });
    setData[e.target.name] = e.target.value;
  };

  // const handleEmail = (e) => {
  //   setEmail((e.target.name = e.target.value));
  //   console.log(email);
  // };

  // const handlePassword = (e) => {
  //   setPassword((e.target.name = e.target.value));
  //   console.log(password);
  // };

  const submitHandler = (e) => {
    axios
      .post("http://localhost:8000/users/login", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <Form className="form loginForm" onSubmit={submitHandler} method="POST">
        <Form.Row>
          <Form.Group as={Col} controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="loginEmail"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              required
              name="loginPassword"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Formlogin;