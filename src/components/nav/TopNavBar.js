import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const APP_PATH = process.env.REACT_APP_FRONTEND;
const AUTH_REDIRECT_URI = `${APP_PATH}/auth/callback`;

console.log(AUTH_REDIRECT_URI);

export default class TopNavBar extends Component {
  componentWillMount() {
    this.props.authenticateUser();
  }
    render() {
        return (
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                  <div><a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${AUTH_REDIRECT_URI}`} target="_blank">Login</a></div>      
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            )
    }
}