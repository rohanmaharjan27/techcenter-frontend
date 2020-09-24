import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Col, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const FormLogin = ({ handleClose, setShow }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const user = useContext(UserContext);

  console.log({ user });

  const history = useHistory();

  const submitHandler = (e) => {
    axios
      .post("http://localhost:8000/users/login", data)
      .then((response) => {
        if (response.data.token != null) {
          user.setLoginStatus({ value: true });

          sessionStorage.setItem("loginStatus", true);

          localStorage.setItem("userData", JSON.stringify(response.data));

          alert(response.data.message_success);

          setShow(false);
          user.setName({ value: response.data.firstName });
          history.push("/products");
        } else {
          alert(response.data.message_error);
        }
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
        <Modal.Footer>
          <Button className="buttonClose" variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button className="buttonSubmit" variant="primary" type="submit">
            Sign In
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
};

export default FormLogin;
