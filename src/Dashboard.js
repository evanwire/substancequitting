import React, { Component } from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './css/Dashboard.css';

//Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        username: "",
        daysTilClean: 0,
        daysClean: 7,
        partnerUsername: "",
      }
    }
  
  
    componentDidMount(){
      
    }
  
    
    render(){
      return (
        <div className='OuterWrapper'>

            <Nav className="navbar-dark bg-primary MainNav">
                <h1 className="navbar-brand">Subtance Stopper</h1>
            </Nav>

            <Jumbotron>
                <h1 className='text-center'>You have been { this.state.daysClean } days clean!</h1>
            </Jumbotron>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Find a group</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Accountability Partner</Nav.Link>
                </Nav.Item>
                
            </Nav>

            
        </div>
      ) 
    }
  }
  
  export default App;