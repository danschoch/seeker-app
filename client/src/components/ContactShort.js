import React, { Component } from 'react';
import Moment from 'react-moment';

class ContactShort extends Component {

    render() {
        const { contact } = this.props;
        let formattedDate = <Moment format="MM/DD/YY" >{contact.lastContact}</Moment>

        return (
            <div className='contactShort'>
                <h4>{contact.first_name} {contact.last_name}</h4>
                <p>{contact.title}</p>
                <p>{contact.organization.name}</p>
                <p>{formattedDate}</p>
            </div>
        )
    }
    
}

export default ContactShort;