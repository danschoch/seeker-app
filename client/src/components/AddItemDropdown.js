import React from 'react';
import { Dropdown } from 'react-bootstrap';

const AddItemDropdown = ({ showContactForm, showOrgForm }) => {
    return (
        <Dropdown alignRight>
            <Dropdown.Toggle id="dropdown-basic">
                <i className="fa fa-plus" aria-hidden="true"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as='button' onClick={showContactForm} >Add Contact</Dropdown.Item>
                <Dropdown.Item as='button' onClick={showOrgForm} >Add Organization</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AddItemDropdown

