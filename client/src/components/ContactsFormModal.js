import React, { Component } from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
// import '../css/contactsForm.css'

class ContactForm extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderFormGroups = (attrList) => {
        return attrList.map( attr => {
            return (
                <Form.Group key={attr} controlId={`${attr}`}>
                    <Form.Label >{this.capitalizeFirstLetter(attr)}</Form.Label>
                    <Form.Control onChange={this.props.handleChange} placeholder={this.capitalizeFirstLetter(attr)}/> 
                </Form.Group>
            )
        })
    }


  
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={this.props.handleSubmit}>
                        {this.renderFormGroups(this.props.attrList)}


                        {/* <Form.Group controlId="formBasicName">
                            <Form.Label >Name</Form.Label>
                            <Form.Control placeholder="First name" /> 
                            <Form.Control placeholder="Last name" />
                        </Form.Group>

                        <Form.Group controlId="addContactTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" />
                        </Form.Group>

                        <Form.Group controlId="addContactEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="addContactPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group controlId="addContactWebsite">
                            <Form.Label>Website</Form.Label>
                            <Form.Control placeholder="Websiter" />
                        </Form.Group>

                        <Form.Group controlId="addContactOrg">
                            <Form.Label>Select Organization</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group> */}
                        <Button variant="primary" type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                
                {/* <Modal.Footer>
                    <Button variant="primary" type='submit'>
                        Submit
                    </Button>
                </Modal.Footer> */}
            </Modal>
        );
    }
}
  
export default ContactForm;