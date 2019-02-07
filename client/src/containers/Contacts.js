import React, { Component } from 'react';
import uuid from 'uuid';
import '../css/Contacts.css';

class Contacts extends Component {

    state = {
        contacts: []
    }

    renderContacts = () => {
        return this.state.contacts.map( contact => {
            return (
                <li key={uuid.v4()}>{contact.first_name} {contact.last_name}</li>
            )
        })
    }

    render() {
        return(
            <ul id='contactsList'>
                {this.renderContacts()}
            </ul>
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

export default Contacts