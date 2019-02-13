import React from 'react';
import { Form } from 'react-bootstrap';


const renderOptions = (options)  => {
    return options.map( option => {
        return <option key={option}>{option}</option>
    })
}

const SelectInput = props => {
    return (
        <Form.Group key={props.attr} controlId={props.attr}>
            <Form.Label>{props.attr}</Form.Label>
            <Form.Control onChange={props.handleChange} as='select' value={props.value}>
                {renderOptions(props.options)}
            </Form.Control>
        </Form.Group>
    );
}

export default SelectInput;
