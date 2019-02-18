import React, { Component } from 'react';
// import ContactsTable from '../components/tables/ContactsTable';
import ContactsTableContainer from '../containers/ContactsTableContainer'
import { connect } from 'react-redux';
import '../css/Contacts.css';

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
                <ContactsTableContainer title='Industry' contactsList={this.filterContactType(this.props.contactList, 'industry')} />
                <ContactsTableContainer title='Recruiters' contactsList={this.filterContactType(this.props.contactList, 'recruiter')} />
                <ContactsTableContainer title='Other' contactsList={this.filterContactType(this.props.contactList, 'other')} />
                <ContactsTableContainer title='No Type' contactsList={this.filterContactType(this.props.contactList, null)} />
                {/* <ContactsTable title='Industry Professionals' contacts={this.filterContactType(this.props.contactList, 'industry')} />
                <ContactsTable title='Recruiters'contacts={this.filterContactType(this.props.contactList, 'recruiter')} />
                <ContactsTable title='Other'contacts={this.filterContactType(this.props.contactList, 'other')} />
                <ContactsTable title='No Type'contacts={this.filterContactType(this.props.contactList, null)} /> */}
            </React.Fragment>
        )
    }
}

const mapPropsToState = (state) => {
    return {contactList: state.contacts.contactList}
}
  
export default connect(mapPropsToState)(ContactsPage);