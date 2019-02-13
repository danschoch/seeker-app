import React from 'react';


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
        </tr>
    )
}


export default OrgRow;