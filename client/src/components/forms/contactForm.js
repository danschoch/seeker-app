import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions.js';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

class ContactForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        website: '',
        phoneNumber: '',
        contactType: {
            value: '',
            options: ['industry', 'recruiter', 'other']
        }  
    };

     // Form Handlers
    handleSelectChange = ( event ) => {
        this.setState({
            ...this.state,
            [event.target.id]: {
                ...this.state[event.target.id],
                value: event.target.value
            }
        });
    }

    handleTextChange = ( event ) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        }); 
    }
    

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addContact({
            ...this.state,
            contactType: this.state.contactType.value
        });

        this.setState({
            firstName: '',
            lastName: '',
            title: '',
            email: '',
            website: '',
            phoneNumber: '',
            contactType: {
                value: '',
                options: ['industry', 'recruiter', 'other']
            }
        });

        this.props.handleClose()
    };

    // Render Inputs
    renderInputs = () => {
        return Object.keys(this.state).map( input => {
            const realInput = this.state[input]
           if (typeof realInput === 'object') {
                 return <SelectInput  key={input} attr={input} handleChange={this.handleSelectChange} value={realInput.value} options={realInput.options} />
           } else {
               return <TextInput key={input} attr={input} handleChange={this.handleTextChange} value={realInput} />
           }
          
       });
    }



    render() {
        return (
           
            <Form onSubmit={this.handleSubmit}>
                {this.renderInputs()}

                <Button variant="primary" type='submit'>
                    Submit
                </Button>
            </Form>
            
            /* // <Form onSubmit={this.handleSubmit}>
            //     <Form.Group controlId="firstName">
            //         <Form.Label >First Name</Form.Label>
            //         <Form.Control onChange={this.handleChange} placeholder="First name" /> 
            //     </Form.Group>

            //     <Form.Group controlId="lastName">
            //         <Form.Label >Last Name</Form.Label>
            //         <Form.Control onChange={this.handleChange} placeholder="Last name" />
            //     </Form.Group>

            //     <Form.Group controlId="title">
            //         <Form.Label>Title</Form.Label>
            //         <Form.Control onChange={this.handleChange} placeholder="Title" />
            //     </Form.Group>

            //     <Form.Group controlId="email">
            //         <Form.Label>Email</Form.Label>
            //         <Form.Control onChange={this.handleChange} placeholder="Email" />
            //     </Form.Group>

            //     <Form.Group controlId="phoneNumber">
            //         <Form.Label>Phone Number</Form.Label>
            //         <Form.Control onChange={this.handleChange} placeholder="Phone Number" />
            //     </Form.Group>

            //     <Form.Group controlId="website">
            //         <Form.Label>Website</Form.Label>
            //         <Form.Control onChange={this.handleChange} placeholder="Website" />
            //     </Form.Group>

                /* <Form.Group controlId="addContactOrg">
                    <Form.Label>Select Organization</Form.Label>
                    <Form.Control onChange={this.handleChange} controlId={attr} as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group> */
            //    
            // </Form> */}
        );
    }
}

export default connect(null, {...dataActions})(ContactForm);