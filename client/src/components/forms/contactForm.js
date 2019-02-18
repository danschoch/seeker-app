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
            const inputVal = this.state[input]
           if (typeof inputVal === 'object') {
                 return <SelectInput  key={input} attr={input} handleChange={this.handleSelectChange} value={inputVal.value} options={inputVal.options} />
           } else {
               return <TextInput key={input} attr={input} handleChange={this.handleTextChange} value={inputVal} />
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
        );
    }
}

export default connect(null, {...dataActions})(ContactForm);