import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import CustomModal from './modals/CustomModal';
import OrganizationModal from './modals/OrganizationModal';
import ContactForm from './forms/contactForm';
import OrganizationForm from './forms/organizationForm';


class AddItemDropdown extends Component {

    state = {
        contactForm: false,
        organizationForm: false
    };


    //Contact Modal Handlers
    showContactForm = () => {
        this.setState({
            contactForm: true
        }) 
    }

    closeContactForm = () => {
        this.setState({
            contactForm: false
        })
    }

    //Organization Modal Handlers
    showOrganizationForm = () => {
        this.setState({
            organizationForm: true
        }) 
    }

    closeOrganizationForm = () => {
        this.setState({
            organizationForm: false
        })
    }


   // Render Dropdown and Modals
    render() {
        return (
            <React.Fragment>
                <Dropdown alignRight>
                    <Dropdown.Toggle id="dropdown-basic">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as='button' onClick={this.showContactForm} >Add Contact</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={this.showOrganizationForm} >Add Organization</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <CustomModal show={this.state.contactForm} close={this.closeContactForm} title='Add Contact' >
                   <ContactForm handleClose={this.closeContactForm} />
                </CustomModal>

                <CustomModal show={this.state.organizationForm} close={this.closeOrganizationForm} title='Add Organization' >
                   <OrganizationForm handleClose={this.closeOrganizationForm} />
                </CustomModal>

            </React.Fragment>
        )
    }
}

export default AddItemDropdown

