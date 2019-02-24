import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import {isNonEmptyObject} from '../../utils/ObjectUtils';
import UserWelcome from './UserWelcome';
const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const APP_PATH = process.env.REACT_APP_FRONTEND;
const AUTH_REDIRECT_URI = `${APP_PATH}/auth/callback`;



export default class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "loginView": <span/>
    }
  }
  componentWillMount() {
    this.props.authenticateUser();
  }

    render() {
        const {user: {currentUser, isInit}, addPin} = this.props;
        let rightNav = <span/>;
        if (isInit) {
          rightNav = <span/>;
        } else {
          if (isNonEmptyObject(currentUser)) {
            rightNav = <UserWelcome currentUser={currentUser} addPin={addPin}/>;
          } else {
            rightNav = <div><a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${AUTH_REDIRECT_URI}`} target="_blank">Login</a></div> ;
          }
        }
        return (
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Col lg={8}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Col>
            <Col lg={4}>
              {rightNav}
            </Col>
          </Navbar>
            )
    }
}