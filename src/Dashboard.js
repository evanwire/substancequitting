import React, { Component } from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';

//Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


class App extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        username: "",
        daysTilClean: 1,
        daysClean: 0,
        partnerUsername: "",
      }
    }
  
  
    componentDidMount(){
      
    }
  
    
    render(){
      return (
        <Container fluid>
            <Jumbotron>Sup yo</Jumbotron>
        </Container>
      ) 
    }
  }
  
  export default App;