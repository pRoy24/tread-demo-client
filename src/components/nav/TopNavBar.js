import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Row, Col, Container, Button} from 'react-bootstrap';
import {isNonEmptyObject} from '../../utils/ObjectUtils';
import UserWelcome from './UserWelcome';
import './nav.scss';
import {Link} from 'react-router-dom';

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
            rightNav = <UserWelcome currentUser={currentUser} addPin={addPin} logoutUser={this.props.logoutUser}/>;
          } else {
            rightNav = <div>
            <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${AUTH_REDIRECT_URI}`} target="_blank">
                     <Button className="add-image-button">
             Login With Github
             </Button>
             </a>
            </div> ;
          }
        }
        let greetings = <span/>;
        if (currentUser && currentUser.userName) {
          greetings = `Hello ${currentUser.userName}`;
        }
        return (
         <Container  >
             <Row className="nav-container">
               <Col lg={6}>
               <div className="title-box">{greetings} Welcome to <Link to='/'>Tread Project Demo</Link></div>
               </Col>
               <Col lg={6}>
              <span>{rightNav}</span>
              </Col>
             </Row>

        </Container>
            )
    }
}