import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class SelectInput extends Component {

    renderOptions = ()  => {
        return this.props.options.map( option => {
            return <option key={option}>{option}</option>
        })
    }


    render() {
        const { attr, value, options, handleChange } = this.props
        return (
            <Form.Group key={attr} controlId={attr}>
                <Form.Label>{attr}</Form.Label>
                <Form.Control onChange={handleChange} as='select' value={value}>
                    {this.renderOptions(options)}
                </Form.Control>
            </Form.Group>
        );
    }
}

export default SelectInput;
