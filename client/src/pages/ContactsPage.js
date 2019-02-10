import React, { Component } from 'react';
import ContactsTable from '../components/ContactsTable';
import { connect } from 'react-redux';
import * as actions from '../actions/contactActions.js';
import '../css/ContactsPage.css'

class ContactsPage extends Component {

    filterContactType = (contactList, type) => {
        return contactList.filter( contact => {
            return contact.contact_type === type
        })
    }

    render() {
        return(
            <React.Fragment>
                <h1>Contacts</h1>
                <ContactsTable title='Industry Professionals' contacts={this.filterContactType(this.props.contactList, 'industry')} />
                <ContactsTable title='Recruiters'contacts={this.filterContactType(this.props.contactList, 'recruiter')} />
                <ContactsTable title='Other'contacts={this.filterContactType(this.props.contactList, 'other')} />
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.props.fetchContacts()
    }
}

const mapPropsToState = (state) => {
    return {contactList: state.contacts.contactList}
}
  
export default connect(mapPropsToState, {...actions})(ContactsPage);