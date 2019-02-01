import React, { Component } from 'react';

class Contact extends Component {

    render() {
        const { contact } = this.props;
        return (
            <div>
                <h4>{contact.name} - {contact.title}</h4>
                <p>Last Contact: {contact.lastContact}</p>
                <p>Organzation: {contact.organizaton} - {contact.type}</p>
                <p>Notes: {contact.notes}</p>
            </div>
        )
    }
    
}

export default Contact;