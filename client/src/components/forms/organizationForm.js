import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';

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
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            name: '',
            about: '',
            phoneNumber: '',
            website: '',
            email: ''
        });

        this.props.handleClose()
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label >Organization Name</Form.Label>
                    <Form.Control placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control placeholder="Website" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Phone Number" />
                </Form.Group>

                <Form.Group controlId="about">
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