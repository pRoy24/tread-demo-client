import React, {Component} from 'react';
import {Button, Modal, FormControl} from 'react-bootstrap';

export default class UserWelcome extends Component {
      constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
    render() {
        const {currentUser} = this.props;
        return (
            <div>
              Welcome 
              <Button onClick={this.handleShow}>Add Image Pin</Button>
              
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <FormControl />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        
            </div>
            )
    }
}