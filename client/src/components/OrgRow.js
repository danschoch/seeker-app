import React, { Component } from 'react';

class OrgRow extends Component {
    renderPOC = (contact) => {
        if (contact === null) {
            return "N/A"
        } else {
            return `${contact.firstName} ${contact.lastName}`
        }
    }

    render() {
        const { org } = this.props;

        return (
            <tr>
                <td id='orgName'>{org.name}</td>
                <td>{this.renderPOC(org.contacts[0])}</td>
                <td>{org.contacts.length}</td>
                <td>{org.website}</td>
            </tr>
        )
    }
    
}

export default OrgRow;