import React, { Component } from 'react';
import { Dropdown, Button, Modal, Form} from 'react-bootstrap';
import ContactFormModal from '../components/ContactsFormModal';

class AddItemDropdown extends Component {

    render() {
        return (
            <Dropdown alignRight>
                <Dropdown.Toggle id="dropdown-basic">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as='button' ><ContactFormModal title='Add Contact' /></Dropdown.Item>
                    <Dropdown.Item as='button' >Add Organization</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default AddItemDropdown