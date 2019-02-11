import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions.js';
// import '../css/contactsForm.css'

class ContactForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        website: '',
        phoneNumber: ''
    };
    
    ////// CAN BE USED TO ABSTRACT FORM TO ITS OWN FILE, MAYBE

    // renderFormGroup = (attr, label) => {
    //     return(
    //         <Form.Group controlId={`contact${attr}`}>
    //             <Form.Label>{label}</Form.Label>
    //             <Form.Control onChange={this.handleChange} controlId={attr} placeholder={label} />
    //         </Form.Group>
    //     ) 
    // }

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

        this.props.addContact(this.state);

        this.setState({
            firstName: '',
            lastName: '',
            title: '',
            email: '',
            website: '',
            phoneNumber: ''
        });

        this.props.handleClose()
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label >First Name</Form.Label>
                    <Form.Control onChange={this.handleChange} placeholder="First name" /> 
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label >Last Name</Form.Label>
                    <Form.Control onChange={this.handleChange} placeholder="Last name" />
                </Form.Group>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleChange} placeholder="Title" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.handleChange} placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={this.handleChange} placeholder="Phone Number" />
                </Form.Group>

                <Form.Group controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control onChange={this.handleChange} placeholder="Website" />
                </Form.Group>

                {/* <Form.Group controlId="addContactOrg">
                    <Form.Label>Select Organization</Form.Label>
                    <Form.Control onChange={this.handleChange} controlId={attr} as="select">
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
        );
    }
}
  
export default connect(null, {...dataActions})(ContactForm);