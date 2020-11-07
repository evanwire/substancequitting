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

//Custom components
import Progress from './components/Progress';


class App extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        username: "",
        daysTilClean: 0,
        daysClean: 7,
        partnerUsername: "",
        key: "progress",
      }
      this.handleSelect = this.handleSelect.bind(this);
    }
  
    handleSelect(key){
        this.setState({
            key: key
        })
    }
  
    componentDidMount(){
      //fetch firebase info
    }
  
    
    render(){
        const key = this.state.key;
        let content;
        if (key === "progress"){
            content = <Progress></Progress>
        } else if (key === "group"){
            content = <h1>Group</h1>
        }else{
            content = <h1>Partner</h1>
        }


        return (
            <div className='OuterWrapper'>

                <Nav className="navbar-dark bg-primary MainNav sticky-top">
                    <h1 className="navbar-brand">Subtance Stopper</h1>
                </Nav>

                <Jumbotron>
                    
                    <h1 className='text-center'>You have been { this.state.daysClean } days clean!</h1>
                </Jumbotron>
                <Nav fill variant="tabs" defaultActiveKey="progress" onSelect={this.handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="progress">My Progress</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="group">Find a group</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="partner">Accountability Partner</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                {content}
                
            </div>
        ) 
    }
  }
  
  export default App;