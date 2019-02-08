import React, { Component } from 'react';
import Moment from 'react-moment';

class ContactRow extends Component {

    render() {
        const { contact } = this.props;
        let formattedDate = <Moment format="MMM. DD gggg" >{contact.lastContact}</Moment>

        return (
            <tr>
                <td>{contact.first_name} {contact.last_name}</td>
                <td>{contact.title}</td>
                <td>{contact.organization.name}</td>
                <td>{formattedDate}</td>
            </tr>
        )
    }
    
}

export default ContactRow;