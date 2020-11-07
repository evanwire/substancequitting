import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import '../styles/header.css'

class Header extends Component {

  render() {
    return (
      <Container className="sc-header">
        <h1 className=""> {this.props.teamName} </h1>
      </Container>
    );
  }
}

export default Header;
