import React, { Component } from 'react';
import ContactsTable from '../components/CustomTable';
import '../css/ContactsPage.css'

class ContactsPage extends Component {

    state = {
        contacts: []
    }

    render() {
        return(
            <main>
                <ContactsTable contacts={this.state.contacts} />
            </main>
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