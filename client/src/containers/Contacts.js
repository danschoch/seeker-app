import React, { Component } from 'react';
import uuid from 'uuid';
import '../css/Contacts.css';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';
import ContactRow from '../components/ContactShort';
import Table from 'react-bootstrap/Table'


class Contacts extends Component {

    state = {
        contacts: []
    }

    renderContacts = () => {
        return this.state.contacts.map( contact => {
            return (
                <ContactRow key={uuid.v4()} contact={contact} />
            )
        })
    }

    render() {
        return(
            <div id='contactsContainer' className='container-fluid'>

                <div id='contactsHeader'>
                    <ContactSvg />
                    <p>Industry Professionals</p>
                    <form className="search" action="action_page.php">
                        <input type="text" placeholder="Search Names" name="search"></input>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

                <Table bordered={ false } hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Organization</th>
                            <th>Title</th>
                            <th>Last Contacted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderContacts()}
                    </tbody>
                </Table>

                {/* <div id='contactsSortBar'>
                    <h4>Name</h4>
                    <h4>Organization</h4>
                    <h4>Title</h4>
                    <h4>Last Contacted</h4>
                </div>
                
                <div id='contactsList'>
                    {this.renderContacts()}
                </div> */}
            </div>
        )
    }

    componentDidMount() {
        fetch('/contacts')
          .then(response => response.json())
          .then(data => {
            this.setState({
              contacts: data
            })
          })
    }
}

export default Contacts