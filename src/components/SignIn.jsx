import React, {useState} from "react";
import 'bootswatch/dist/lux/bootstrap.min.css';
import '../css/Dashboard.css'
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";

//Bootstrap components

import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div className="OuterWrapper">
      <Nav className="navbar-dark bg-primary MainNav sticky-top">
          <h1 className="navbar-brand">Subtance Stopper</h1>
      </Nav>
      <Row className="justify-content-center mt-5">
        <Col className="col-4">
        <Form className="text-center">
            <h1>Sign in</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
                name="userEmail"
                value = {email}
                placeholder="E.g: faruq123@gmail.com"
                id="userEmail"
                onChange = {(event) => onChangeHandler(event)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                name="userPassword"
                value = {password}
                placeholder="Your Password"
                id="userPassword"
                onChange = {(event) => onChangeHandler(event)} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
              Sign In
            </Button>
            <p className="text-center my-3">or</p>
            <Button
              className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
              onClick={() => {
                signInWithGoogle();
              }}
            >
              Sign in with Google
            </Button>
            <p className="text-center my-3">
              Don't have an account?{" "}
              <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                Sign up here
              </Link>{" "}
              <br />{" "}
              <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                Forgot Password?
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
      
    </div>
  );
};

export default SignIn;
