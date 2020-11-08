import React, { useContext, useState } from "react";
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Link } from "@reach/router";
import { auth, firestore } from "../firebase";


//Bootstrap components

import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [dpw, setDPW] = useState(0);
  const [reasonQuit, setReasonQuit] = useState("");
  const [dateQuit, setDateQuit] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      const helper = firestore.collection("helper").doc("helper")

      const doc = await helper.get();
      const chatuid = doc.data().userNotPaired
      const numChats = doc.data().numChats

      console.log(chatuid)
      console.log(numChats)

      let chatId = ""
      if(chatuid){
        firestore.collection("chats").doc(numChats.toString()).set({messages: []})
        firestore.collection("helper").doc("helper").update({userNotPaired: "", numChats: (numChats + 1) })
        firestore.collection("users").doc(chatuid.toString()).update({chatId: numChats.toString()})
        chatId = numChats.toString()
        
      }else{
        firestore.collection('helper').doc("helper").update({userNotPaired: user.uid})
      }

      const randRoom = Math.floor(Math.random() * doc.data().numRooms)
      console.log(dateQuit)
      let dateObj = Date.parse(dateQuit)
      console.log(dateObj.toString())
      const secondsSinceEpoch = Math.round(dateObj / 1000)


      
      firestore.collection('users').doc(user.uid).set({
                                                        chatId: chatId,
                                                        dateQuit: {seconds: secondsSinceEpoch, nanoseconds: 0},
                                                        displayName: displayName,
                                                        dpw: parseInt(dpw),
                                                        email: email,
                                                        groupId: randRoom.toString(),
                                                        reasonQuit: reasonQuit
                                                        });
      
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
    
      
      
  
      
    setEmail("");
    setPassword("");
    setDisplayName("");
    setDPW(0);
    setReasonQuit("");
    setDateQuit("");


  };

  

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "dpw"){
      setDPW(value)
    } else if (name === "reasonQuit"){
      setReasonQuit(value)
    } else if (name === "dateQuit"){
      setDateQuit(value)
    }
  };

  return (
    <div className="OuterWrapper">
      <Nav className="navbar-dark bg-primary MainNav sticky-top">
          <h1 className="navbar-brand">Addictions Anonymous</h1>
      </Nav>
      <Row className="justify-content-center mt-5">
        <Col className="col-4">
        <Form className="text-center">
            <h1>Sign up</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Please select a display name different than your real name</Form.Label>
              <Form.Control type="text"
                className="my-1 p-1 w-full "
                name="displayName"
                value={displayName}
                placeholder="E.g: Faruq"
                id="displayName"
                onChange={event => onChangeHandler(event)}>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
                name="userEmail"
                value = {email}
                placeholder="E.g: faruq123@gmail.com"
                id="userEmail"
                onChange = {(event) => onChangeHandler(event)}/>
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


            <Form.Group controlId="formBasicEmail">
              <Form.Label>About how many dollars per week do you spend on your addiction?</Form.Label>
              <Form.Control type="number"
                name="dpw"
                value = {dpw}
                id="dpw"
                onChange = {(event) => onChangeHandler(event)}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Why do you wish to quit?</Form.Label>
              <Form.Control type="string"
                name="reasonQuit"
                value = {reasonQuit}
                placeholder="E.g: To save money"
                id="reasonQuit"
                onChange = {(event) => onChangeHandler(event)}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Give the date you quit/date you plan to quit</Form.Label>
              <Form.Control type="date"
                name="dateQuit"
                value = {dateQuit}
                placeholder=""
                id="dateQuit"
                onChange = {(event) => onChangeHandler(event)}/>
            </Form.Group>

            <Button variant="primary" onClick = {(event) => {createUserWithEmailAndPasswordHandler(event, email, password)}}>
              <Link to="/" className="text-white">Sign Up</Link> 
            </Button>
            <p className="text-center my-3">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 hover:text-blue-600">
                Sign in here
              </Link>{" "}
              
            </p>
          </Form>
        </Col>
      </Row>     
    </div>
  );
};

export default SignUp;
