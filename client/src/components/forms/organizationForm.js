import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions.js';
import TextInput from './TextInput';
import SelectInput from './SelectInput';


class OrganizationForm extends Component {

    state = {
        // {...this.props.initialState}
        name: '',
        about: '',
        phoneNumber: '',
        website: '',
        email: ''
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

        this.props.addOrganization({
            ...this.state,
        });

        this.setState({
            name: '',
            about: '',
            phoneNumber: '',
            website: '',
            email: ''
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
  
export default connect(null, {...dataActions})(OrganizationForm);