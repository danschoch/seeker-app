import React, { Component } from 'react';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';
import ContactRow from './ContactRow';
import Table from 'react-bootstrap/Table';
import uuid from 'uuid';
import '../css/Contacts.css';

class ContactsTable extends Component {

    renderContactRows = () => {
        return this.props.contacts.map( contact => {
            return (
                <ContactRow key={uuid.v4()} contact={contact} />
            )
        })
    }

    render() {
        return (
            <div id='contactsContainer' className='container-fluid'>
               <div id='contactsHeader'>
                    <ContactSvg />
                    <p>Industry Professionals</p>
                    <form className="search" action="action_page.php">
                        <input type="text" placeholder="Search Names" name="search"></input>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

                <Table responsive bordered={ false } >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Organization</th>
                            <th>Title</th>
                            <th>Last Contacted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderContactRows()}
                    </tbody>
                </Table> 
            </div>
        )
    }

}

export default ContactsTable