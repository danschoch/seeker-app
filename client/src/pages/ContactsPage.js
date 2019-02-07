import React, { Component } from 'react';
import Contacts from '../containers/Contacts';
import '../css/ContactsPage.css'

class ContactsPage extends Component {

    render() {
        return(
            <main>
                <Contacts />
            </main>
        )
    }
}

export default ContactsPage