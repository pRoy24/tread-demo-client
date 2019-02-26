import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ImageGallery from './ImageGallery';
import UserHome from './UserHome';
import {isNonEmptyObject} from '../../utils/ObjectUtils';
import AppHome from './AppHome';
import './landing.scss';

export default class Landing extends Component {
    componentWillMount() {
        
    }
    render() {
        const {getUserWall, board, user, user: {currentUser}, getUserProfiles} = this.props;

        let currentView = <span/>;
        if (user.isInit) {
            currentView = <i className="fa fa-spinner fa-spin"/>;
        } else {
            if (isNonEmptyObject(currentUser)) {
              currentView = <UserHome getUserWall={getUserWall} board={board}/>
            } else {
              currentView = <AppHome board={board} getUserProfiles={getUserProfiles}/>;
            }
        }
        return (
            <Container className="landing-container">
                {currentView}    
            </Container>
            )
    }
}