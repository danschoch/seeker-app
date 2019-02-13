import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import CustomModal from './modals/ContactModal';
import OrganizationModal from './modals/OrganizationModal';
import ContactForm from './forms/contactForm'


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

                <CustomModal show={this.state.contactForm} close={this.closeContactForm} submitAction={this.props.addContact} title='Add Contact' >
                   <ContactForm handleClose={this.closeContactForm} />
                </CustomModal>

                {/* <ContactModal title='Add Contact' show={this.state.contactForm} close={this.closeContactForm} submitAction={this.props.addContact}/> */}
                <OrganizationModal title='Add Organization' show={this.state.organizationForm} close={this.closeOrganizationForm} submitAction={this.props.addContact} />
            </React.Fragment>
        )
    }
}

export default AddItemDropdown

