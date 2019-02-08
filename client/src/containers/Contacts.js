import React, { Component } from 'react';
import uuid from 'uuid';
import '../css/Contacts.css';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';

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
            <div id='contactsContainer'>
                <div id='contactsHeader'>
                    <ContactSvg />
                    <p>Industry Professionals</p>
                    <form className="search" action="action_page.php">
                        <input type="text" placeholder="Search" name="search"></input>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

                <div id='contactsSortBar'>
                    <h4>Name</h4>
                    <h4>Organization</h4>
                    <h4>Title</h4>
                    <h4>Last Contacted</h4>
                </div>
                
                <ul id='contactsList'>
                    {this.renderContacts()}
                </ul>
            </div>
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