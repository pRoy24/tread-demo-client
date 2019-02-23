import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

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
                  <div>Login</div>      
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            )
    }
}