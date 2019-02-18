import React, { Component } from 'react';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';
import TableHeader from '../components/TableHeader';
import CustomTable from '../components/CustomTable';
import ContactRow from '../components/tables/ContactRow';
import uuid from 'uuid';
import '../css/Contacts.css';

class ContactsTableContainer extends Component {

    state = {
        columnList: ["Name", "Title", "Organization", "Email"]
    }

    renderRows = () => {
        return this.props.contactsList.map( contact => {
            return (
                <ContactRow key={uuid.v4()} contact={contact} />
            )
        })
    }

    render() {
        return (
            <div className='container-fluid customTableContainer'>
                <TableHeader title={this.props.title} >
                    <ContactSvg/>
                </TableHeader>

                <CustomTable columnList={this.state.columnList}>
                    {this.renderRows()}
                </CustomTable>
            </div>
        )
    }

}

export default ContactsTableContainer