import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import OrganizationForm from '../forms/organizationForm';
// import '../css/contactsForm.css'

class OrganizationModal extends Component {
  
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   <OrganizationForm action={this.props.submitAction} handleClose={this.props.close} />
                </Modal.Body>
                
            </Modal>
        );
    }
}
  
export default OrganizationModal;