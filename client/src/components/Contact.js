import React, { Component } from 'react';
import Moment from 'react-moment';

class Contact extends Component {

    render() {
        const { contact } = this.props;
        let formattedDate = <Moment format="MM/DD/YY" >{contact.lastContact}</Moment>

        return (
            <div>
                <h4>{contact.name} - {contact.title}</h4>
                <p>Last Contact: {formattedDate}</p>
                <p>Organzation: {contact.organization} - {contact.type}</p>
                <p>Notes: {contact.notes}</p>
            </div>
        )
    }
    
}

export default Contact;