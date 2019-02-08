import React, { Component } from 'react';
import Moment from 'react-moment';

class ContactShort extends Component {

    render() {
        const { contact } = this.props;
        let formattedDate = <Moment format="MM/DD/YY" >{contact.lastContact}</Moment>

        return (
            <div className='contactShort'>
                <p>{contact.first_name} {contact.last_name}</p>
                <p>{contact.title}</p>
                <p>{contact.organization.name}</p>
                <p>{formattedDate}</p>
            </div>
        )
    }
    
}

export default ContactShort;