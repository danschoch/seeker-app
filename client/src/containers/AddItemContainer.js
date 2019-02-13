import React, { Component } from 'react';
import CustomModal from '../components/modals/CustomModal';
import ContactForm from '../components/forms/contactForm';
import OrganizationForm from '../components/forms/organizationForm';
import AddItemDropdown from '../components/AddItemDropdown'


class AddItemContainer extends Component {

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
        return(
            <React.Fragment>
                <AddItemDropdown showContactForm={this.showContactForm} showOrgForm={this.showOrganizationForm } />

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

export default AddItemContainer