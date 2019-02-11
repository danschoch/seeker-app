import React, { Component } from 'react';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';
import ContactRow from './ContactRow';
import { Table } from 'react-bootstrap';
import CustomTable from './CustomTable';
import uuid from 'uuid';
import '../css/Contacts.css';


class ContactsTable extends Component {

    /* TODO: Separate out stateless parts */

    /* 
        TODO on other pages:
         - Add organizations page with table component (this will be my third route/page)
    */

    renderContactRows = () => {
        return this.props.contacts.map( contact => {
            return (
                <ContactRow key={uuid.v4()} contact={contact} />
            )
        })
    }

    render() {
        return (
            <div className='container-fluid customTableContainer'>
               <div id='contactsHeader'>
                    <ContactSvg />
                    <p>{this.props.title}</p>
                    <form className="search" action="action_page.php">
                        <input type="text" placeholder="Search Names" name="search"></input>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

                  <Table responsive bordered={ false } >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Organization</th>
                                <th>Last Contacted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderContactRows()}
                        </tbody>
                    </Table> 

                {/* <CustomTable columnNames dataRows >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Organization</th>
                            <th>Last Contacted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderContactRows()}
                    </tbody>
                </Table>  */}
            </div>
        )
    }

}

export default ContactsTable