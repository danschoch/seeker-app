import React, { Component } from 'react';
import { Button, Modal, Form, Row, Col} from 'react-bootstrap';
// import '../css/contactsForm.css'

class ContactForm extends Component {

    state = {
        show: false,
    };
  
    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    render() {
      return (
          <React.Fragment>
                <Button onClick={this.handleShow}>
                    {this.props.title}
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label >Name</Form.Label>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Control placeholder="First name" /> 
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" />
                            </Form.Group>

                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Website</Form.Label>
                                <Form.Control placeholder="Phone Number" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
          </React.Fragment>
      );
    }
  }
  
  export default ContactForm;