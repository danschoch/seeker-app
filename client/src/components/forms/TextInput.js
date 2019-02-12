import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class TextInput extends Component {


    render() {
        const { attr, value, handleChange } = this.props
        return (
            <Form.Group key={attr} controlId={attr}>
                <Form.Label>{attr}</Form.Label>
                <Form.Control onChange={handleChange} placeholder={attr} value={value} />
            </Form.Group>
        );
    }
}

export default TextInput;
