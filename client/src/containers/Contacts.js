import React, { Component } from 'react';
import uuid from 'uuid';
import '../css/Contacts.css';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';
import ContactShort from '../components/ContactShort';
import { Table } from 'react-bootstrap'


class Contacts extends Component {

    state = {
        contacts: []
    }

    renderContacts = () => {
        return this.state.contacts.map( contact => {
            return (
                <ContactShort key={uuid.v4()} contact={contact} />
            )
        })
    }

    render() {
        return(
            <div id='contactsContainer'>

                <div id='contactsHeader'>
                    <ContactSvg />
                    <p>Industry Professionals</p>
                    <form className="search" action="action_page.php">
                        <input type="text" placeholder="Search Names" name="search"></input>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
{/* 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Organization</th>
                            <th>Title</th>
                            <th>Last Contacted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>; */}

                <div id='contactsSortBar'>
                    <h4>Name</h4>
                    <h4>Organization</h4>
                    <h4>Title</h4>
                    <h4>Last Contacted</h4>
                </div>
                
                <div id='contactsList'>
                    {this.renderContacts()}
                </div>
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