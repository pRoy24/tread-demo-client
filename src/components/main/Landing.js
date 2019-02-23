import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ImageGallery from './ImageGallery';

export default class Landing extends Component {
    render() {
        return (
            <Container>
              <ImageGallery/>
            </Container>
            )
    }
}