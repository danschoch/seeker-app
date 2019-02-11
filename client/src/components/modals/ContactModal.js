import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import ContactForm from '../forms/contactForm';
// import '../css/contactsForm.css'

class ContactModal extends Component {

   

    // capitalizeFirstLetter = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }

    // renderFormGroups = (attrList) => {
    //     return attrList.map( attr => {
    //         return (
    //             <Form.Group key={attr} controlId={`${attr}`}>
    //                 <Form.Label >{this.capitalizeFirstLetter(attr)}</Form.Label>
    //                 <Form.Control onChange={this.handleChange} placeholder={this.capitalizeFirstLetter(attr)}/> 
    //             </Form.Group>
    //         )
    //     })
    // }
  
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close} >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   <ContactForm action={this.props.submitAction} handleClose={this.props.close} />
                </Modal.Body>
                
            </Modal>
        );
    }
}
  
export default ContactModal;