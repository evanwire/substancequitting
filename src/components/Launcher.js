import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import launcherIconActive from './../assets/close-icon.png';
import 'bootswatch/dist/lux/bootstrap.min.css';
import '../styles/launcher.css'

//Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  render() {
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : ''),
    ];
    return (
      <Container>
        <Row className="justify-content-center mt-2">
          <Col className="col-10"> 
            <ChatWindow
              messageList={this.props.messageList}
              onUserInputSubmit={this.props.onMessageWasSent}
              agentProfile={this.props.agentProfile}
              isOpen={isOpen}
              onClose={this.handleClick.bind(this)}
              showEmoji={this.props.showEmoji}
              showFile={this.props.showFile}
              onKeyPress={this.props.onKeyPress}
              onKeyPressDebounce={this.props.onKeyPressDebounce}
              onDelete={this.props.onDelete}
            />
          </Col>
        </Row>
        
      </Container>
    );
  }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) { return null }
  return (
    <div className={"sc-new-messsages-count"}>
      {props.count}
    </div>
  )
}

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  showEmoji: PropTypes.bool,
  showFile: PropTypes.bool,
  onKeyPress: PropTypes.func,
  onDelete: PropTypes.func
};

Launcher.defaultProps = {
  newMessagesCount: 0
}

export default Launcher;
