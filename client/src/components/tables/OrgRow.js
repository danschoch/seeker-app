import React from 'react';
import Voter from '../Voter';


const renderPOC = (contact) => {
    if (contact === null || []) {
        return "N/A"
    } else {
        return `${contact.firstName} ${contact.lastName}`
    }
}

const OrgRow = ({ org }) => {
    return (
        <tr>
            <td id='orgName'>{org.name}</td>
            <td>{renderPOC(org.contacts[0])}</td>
            <td className='indentToCenter'>{org.contacts.length}</td>
            <td>{org.website}</td>
            <Voter />
        </tr>
    )
}


export default OrgRow;