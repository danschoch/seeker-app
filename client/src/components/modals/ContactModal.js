import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import ContactForm from '../forms/contactForm';

class CustomModal extends Component {

    // capitalizeFirstLetter = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }
  
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close} >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this.props.children}
                   {/* <ContactForm action={this.props.submitAction} handleClose={this.props.close} /> */}
                </Modal.Body>
                
            </Modal>
        );
    }
}
  
export default CustomModal;