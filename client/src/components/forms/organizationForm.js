import React, { Component } from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
// import '../css/contactsForm.css'

class OrganizationForm extends Component {

    state = {
        name: '',
        about: '',
        phone_number: '',
        website: '',
        email: ''
    };

     // Form Handlers
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });

        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(this.state)

        this.setState({
            name: '',
            about: '',
            phone_number: '',
            website: '',
            email: ''
        });

        this.props.handleClose()
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label >Organization Name</Form.Label>
                    <Form.Control placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="addContactTitle">
                    <Form.Label>Website</Form.Label>
                    <Form.Control placeholder="Website" />
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
                    <Form.Label>About</Form.Label>
                    <Form.Control type='textarea' placeholder="About" />
                </Form.Group>

                <Button variant="primary" type='submit'>
                    Submit
                </Button>
            </Form>
        );
    }
}
  
export default OrganizationForm;