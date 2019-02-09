import React, { Component } from 'react';
import ContactsTable from '../components/CustomTable';
import '../css/ContactsPage.css'

class ContactsPage extends Component {

    state = {
        contacts: []
    }

    filterContactType = (contactList, type) => {
        return contactList.filter( contact => {
            return contact.contact_type === type
        })
    }

    render() {
        console.log(this.filterContactType(this.state.contacts, 'other'))
        return(
            <React.Fragment>
                <h1>Contacts</h1>
                <ContactsTable title='Industry Professionals' contacts={this.filterContactType(this.state.contacts, 'industry')} />
                <ContactsTable title='Recruiters'contacts={this.filterContactType(this.state.contacts, 'recruiter')} />
                <ContactsTable title='Other'contacts={this.filterContactType(this.state.contacts, 'other')} />
            </React.Fragment>
        )
    }

    componentDidMount() {
        fetch('/contacts')
        .then(response => response.json())
        .then(data => {
            this.setState({
                contacts: data
            })
        })
    }
}

export default ContactsPage