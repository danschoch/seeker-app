import React, { Component } from 'react';

class Contacts extends Component {

    state = {
        contacts: []
    }

    renderContacts = () => {
        return this.state.contacts.map( contact => {
            return (
                <li>{contact.first_name} {contact.last_name}</li>
            )
        })
    }

    render() {
        return(
            <ul>
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