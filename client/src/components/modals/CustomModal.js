import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = props => {
    return (
            <Modal show={props.show} onHide={props.close} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        );
}
  
export default CustomModal;

// capitalizeFirstLetter = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }
  