import React, { Component } from 'react';
import '../css/TopNav.css';
import {  Form, Button } from 'react-bootstrap';
import AddItemDropdown from '../components/AddItemDropdown';

class TopNav extends Component {

    render() {
        return(
            <div id='topNav'>
                <Form inline='true'>
                    <Form.Control type='text' placeholder="Search activities or contacts" />
                    <Button size='small' variant='outline-dark'><i className="fa fa-search"></i></Button>
                </Form>

                <AddItemDropdown />


                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Add Contact</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Add Organization</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
            </div>
        )
    }    
}

export default TopNav