import React, { Component } from "react";
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

/*
    -Calculate money savings
    -Reset progress button/extend time until quit button
    -Goals?
    -Points -> rewards system?
    -Reason why you are quitting
*/
export default class Progress extends React.Component {
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
                    <Col className="col-8">
                        <Row className="justify-content-center mt-2">
                            <Card className="text-white bg-primary mb-3 mr-1 ">
                                <div className="card-body">
                                    <h4 className="card-title">Money Saved</h4>
                                    <p className="card-text">$12.00</p>
                                </div>
                            </Card>
                            <Card className="text-white bg-primary mb-3 ml-1 ">
                                <div className="card-body">
                                    <h4 className="card-title">Remember why you quit:</h4>
                                    <p className="card-text">To save money.</p>
                                </div>
                            </Card>
                            <Card className="text-white bg-primary mb-3 mr-1 ">
                                <div className="card-body">
                                    <h4 className="card-title">It is okay if you fall off the wagon!</h4>
                                    <p className="card-text">Everyone has good days and bad days, it is nothing to feel bad about if you need to reset your progress.
                                    All we ask is that you remember why you were tempted, and work to fight that trigger going forward.</p>
                                </div>
                                <Button className='btn-secondary'>Reset Progress</Button>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                
               
                
                <br></br>

            </Container>
        );
    }
  }