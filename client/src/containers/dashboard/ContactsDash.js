import React, { Component } from 'react';
import { fakeContacts } from '../../mockData';
import Contact from '../../components/dash/Contact';

class ContactsDash extends Component {

    state = {
        contacts: fakeContacts
    }

    renderContacts = () => {
        return this.state.contacts.map( (contact, i) => {
            return <Contact key={i} contact={contact} />
        })
    }

    render() {
        return(
           <div>
               <h1>Contacts</h1>
               {this.renderContacts()}
           </div>
        )
    }

    
}

export default ContactsDash