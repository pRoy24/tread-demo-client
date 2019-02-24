import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ImageGallery from './ImageGallery';
import UserHome from './UserHome';

export default class Landing extends Component {
    render() {
        const {getUserWall, board} = this.props;
        return (
            <Container>
              <UserHome getUserWall={getUserWall} board={board}/>
              <ImageGallery />
            </Container>
            )
    }
}