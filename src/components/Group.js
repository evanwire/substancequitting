import React, { Component } from "react";
import 'bootswatch/dist/lux/bootstrap.min.css';
import "../css/Progress.css";
import "../css/App.css";

//Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import Launcher from './Launcher'


export default class Group extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: false
        };
    }
  
   
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center mt-2">
                    <Launcher></Launcher>
                </Row>
                

            </Container>
        );
    }
  }