import React, { useState, useContext } from "react";
import 'bootswatch/dist/lux/bootstrap.min.css';
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";

//Bootstrap components

import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div className="OuterWrapper">
      <Nav className="navbar-dark bg-primary MainNav sticky-top">
          <h1 className="navbar-brand">Addictions Anonymous</h1>
      </Nav>
      <Row className="justify-content-center mt-5">
        <Col className="col-4">
        <Form className="text-center">
            <h1>Reset Password</h1>
            <Form.Group controlId="formBasicEmail" >
              <Form.Label className="mt-2">Email address</Form.Label>
              <Form.Control type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            className="mb-3 w-full px-1 py-2"/>
            </Form.Group>
            <Form.Group>
            <Button
            className="w-full bg-blue-400 text-white py-3 mt-1"
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </Button>
            </Form.Group>
            
            <Link
          to="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
          &larr; back to sign in page
        </Link>
          </Form>
        </Col>
      </Row>     
    </div>



   
  );
};

export default PasswordReset;
