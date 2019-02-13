import React from 'react';
import Moment from 'react-moment';

const renderOrg = (org) => {
    if (org === null) {
        return "None"
    } else {
        return org.name
    }
}

const ContactRow = ({ contact }) => {
    const formattedDate = <Moment format="MMM. DD gggg" >{contact.lastContact}</Moment>

    return (
        <tr>
            <td id='contactName'>{contact.firstName} {contact.lastName}</td>
            <td>{contact.title}</td>
            <td>{renderOrg(contact.organization)}</td>
            <td>{contact.email}</td>
        </tr>
    )
}

export default ContactRow;