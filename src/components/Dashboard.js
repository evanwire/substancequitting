import React, { Component, useContext } from 'react';
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import {auth, generateUserDocument, firestore} from "../firebase";
import 'bootswatch/dist/lux/bootstrap.min.css';
import '../css/Dashboard.css';
import SignIn from './SignIn';

//Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'

//Custom components
import Progress from './Progress';
import Group from './Group'
import Partner from './Partner'


class Dashboard extends Component {
    constructor(props){
      super(props);
      
      let user;
      if(props.user){
        user = props.user
      }else{
          user = firestore.collection('users').doc(auth.currentUser.uid).get().data;
      }
      console.log(auth.currentUser.uid)
      this.state = {
        user: user,
        key: "progress",
      }
      this.handleSelect = this.handleSelect.bind(this);
    }
  
    handleSelect(key){
        this.setState({
            key: key
        })
    }
    

    
    signOut(){
        auth.signOut().then(function() {
          }).catch(function(error) {
            // An error happened.
          });
          window.location.reload()
    }

    findDaysClean(){
        if(this.state.user.dateQuit.seconds){
            var now = new Date();
            var d = new Date(0); 
            d.setUTCSeconds(this.state.user.dateQuit.seconds); 
            var Difference_In_Time = Math.round(now.getTime() - d.getTime()); 
            var daysClean = Math.round(Difference_In_Time / (1000 * 3600 * 24));
            return daysClean;
        }
        
    }

    componentdid
  
    
    render(){
        const key = this.state.key;
        let daysClean = this.findDaysClean()
        let jumboContent;
        if(daysClean < 0){
            jumboContent = <h1 className='text-center'>Get ready to quit in { daysClean * -1 } days!</h1>
        } else{
            jumboContent = <h1 className='text-center'>You have been { daysClean } days clean!</h1>
        }
        let content;
        if (key === "progress"){
           
            content = <Progress reasonQuit={this.state.user.reasonQuit} dpw={this.state.user.dpw} daysClean={daysClean} daysTilQuit={this.state.user.daysTilQuit}></Progress>
            
            
        } else if (key === "group"){
            content = <Group groupId={this.state.user.groupId} displayName={this.state.user.displayName}></Group>
        }else{
            if(this.state.user.chatId){
                content = <Partner displayName={this.state.user.displayName} chatId={this.state.user.chatId}></Partner> //for now
            }else{
                content = <h2 className="text-center mt-5 mr-5 ml-5">We are currently working to find you an accountability partner. Check back regularly.</h2>
            }
        }

        
          
        return (
            <div className='OuterWrapper'>
                
                    
                <Nav className="navbar-dark bg-primary MainNav sticky-top" style={{ width: "100%" }}>
                    <h1 className="navbar-brand">Addictions Anonymous</h1> 
                    <Button className="btn-secondary ml-auto mt-1 mb-1" onClick={this.signOut}>Sign Out</Button>
                    
                </Nav>

                <Jumbotron>
                    {jumboContent}
                </Jumbotron>

                <Nav fill variant="tabs" defaultActiveKey="progress" onSelect={this.handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="progress">My Progress</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="group">Speak to group</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="partner disabled">Accountability Partner</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                {content}
                
            </div>
        ) 
    }
  }
  
  export default Dashboard;