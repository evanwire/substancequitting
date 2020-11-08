import React, { Component } from "react";
import 'bootswatch/dist/lux/bootstrap.min.css';
import "../css/Progress.css";
import "../css/Dashboard.css";
import ChatComponent from './react-bootstrap-chat-ui-master/chatComponent'
import { makeMessages, timeFormatter, addTextToMessageList } from './react-bootstrap-chat-ui-master/examples/dataMsg'
import {firestore} from "../firebase";


//Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Icon from "react-icons-kit";
import { androidSend } from 'react-icons-kit/ionicons/androidSend'



export default class Group extends React.Component {
    componentRef = React.createRef()
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            msgs: [],
            readError: null,
            displayName: this.props.displayName,
        };
    }

    async componentDidMount(){
        const group = firestore.collection('chats').doc(this.props.chatId);
        const observer = group.onSnapshot(docSnapshot => {
            console.log(`Received doc snapshot: ${docSnapshot.data().pin}`);
            this.setState({msgs: docSnapshot.data().messages})
            
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    uploadNewMessage(text, displayName){
        const group = firestore.collection('chats').doc(this.props.chatId);
        const now = new Date()  
        const secondsSinceEpoch = Math.round(now.getTime() / 1000)
        const message = {
            content: text,
            sender: displayName,
            timestamp: {seconds: secondsSinceEpoch, nanoseconds: 0}
        }
        let msgs = this.state.msgs
        msgs.push(message)
        const unionRes = group.update({
            messages: msgs
          });
        
    }
  
   
    render() {
        return (
            <Container fluid>
                    <ChatComponent
                    messages={this.state.msgs}
                    displayName={this.state.displayName}
                    iconSend={<Icon icon={androidSend} size={15} />}
                    onMessageSend={text => this.uploadNewMessage(text, this.state.displayName)}
                    displayStop={true}
                    onMessageStop={()=>null}></ChatComponent>

                

            </Container>
        );
    }
  }