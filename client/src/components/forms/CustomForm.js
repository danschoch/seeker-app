import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';

class ChangeItemForm extends Component {

    createFormGroup = (attr) => {
        return(
            <Form.Group key={attr} controlId={`${attr}`}>
                <Form.Label>{attr}</Form.Label>
                <Form.Control onChange={this.props.handleChange} placeholder={attr} value={this.props.propertyList.attr} />
            </Form.Group>
        ) 
    }

    renderGroups = (list) => {
        return Object.keys(this.props.propertyList).map( property => {
            return this.createFormGroup(property)
        })
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>

                {this.renderGroups()}
               
                <Button variant="primary" type='submit'>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default ChangeItemForm;



// renderLocalState = (list) => {
//     const stateObj = {}
//     const keyList = Object.keys(list[0])
//     const valueForKey = (key) => {
//         if (typeof key === "string") {
//             return '';
//         } else if (typeof key === "number") {
//             return 0;
//         } else { return null };
//     }

//     const localState = () => {
//         keyList.forEach( key => {
//             stateObj[key] = valueForKey(key);
//         })
//     }

//     return localState()
// }

// state = this.renderLocalState(this.props.contactList);


//TO BE PASSED IN: <CustomForm 