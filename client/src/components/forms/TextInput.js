import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = props => {
    return (
            <Form.Group key={props.attr} controlId={props.attr}>
                <Form.Label>{props.attr}</Form.Label>
                <Form.Control onChange={props.handleChange} placeholder={props.attr} value={props.value} />
            </Form.Group>
        );
}

export default TextInput;
