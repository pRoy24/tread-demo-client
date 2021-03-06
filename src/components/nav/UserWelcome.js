import React, {Component} from 'react';
import {Button, Modal, FormControl} from 'react-bootstrap';

export default class UserWelcome extends Component {
      constructor(props, context) {
    super(props, context);
        this.state = {pinURI: ""};
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updatePinURI = this.updatePinURI.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.state = {
      show: false,
    };
  }

  handleClose() {
    const {pinURI} = this.state;

    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  saveChanges() {
    const {pinURI} = this.state;
    this.props.addPin({'link': pinURI}); 
    this.setState({ show: false, pinURI: '' });
    
  }
  
  updatePinURI(evt) {
      this.setState({"pinURI": evt.target.value});
  }
    render() {
        const {currentUser} = this.props;
        return (
            <div>

              <Button onClick={this.handleShow} className="add-image-button">Add Image Pin</Button>
              <Button onClick={this.props.logoutUser} className="add-image-button">Logout User</Button>
              
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add link to pin</Modal.Title>
                  </Modal.Header>
                  <FormControl name="imagepin" value={this.state.pinURI} onChange={this.updatePinURI}/>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={this.saveChanges}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
            )
    }
}