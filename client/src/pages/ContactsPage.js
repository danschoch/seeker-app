import React, { Component } from 'react';
import ContactsTable from '../components/ContactsTable';
import { connect } from 'react-redux';

class ContactsPage extends Component {

    filterContactType = (contactList, type) => {
        return contactList.filter( contact => {
            return contact.contactType === type
        })
    }

    render() {
        return(
            <React.Fragment>
                <h1>Contacts</h1>
                <ContactsTable title='Industry Professionals' contacts={this.filterContactType(this.props.contactList, 'industry')} />
                <ContactsTable title='Recruiters'contacts={this.filterContactType(this.props.contactList, 'recruiter')} />
                <ContactsTable title='Other'contacts={this.filterContactType(this.props.contactList, 'other')} />
                <ContactsTable title='No Type'contacts={this.filterContactType(this.props.contactList, null)} />
            </React.Fragment>
        )
    }
}

const mapPropsToState = (state) => {
    return {contactList: state.contacts.contactList}
}
  
export default connect(mapPropsToState)(ContactsPage);