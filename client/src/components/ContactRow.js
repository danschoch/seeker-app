import React, { Component } from 'react';
import Moment from 'react-moment';

class ContactRow extends Component {
    renderOrg = (org) => {
        if (org === null) {
            return "None"
        } else {
            return org.name
        }
    }

    render() {
        const { contact } = this.props;
        let formattedDate = <Moment format="MMM. DD gggg" >{contact.lastContact}</Moment>

        return (
            <tr>
                <td id='contactName'>{contact.firstName} {contact.lastName}</td>
                <td>{contact.title}</td>
                <td>{this.renderOrg(contact.organization)}</td>
                <td>{formattedDate}</td>
            </tr>
        )
    }
    
}

export default ContactRow;