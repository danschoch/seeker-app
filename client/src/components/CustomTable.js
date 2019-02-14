import React, { Component } from 'react';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';
import ContactRow from './tables/ContactRow';
import Table from 'react-bootstrap/Table';
import uuid from 'uuid';
import '../css/Contacts.css';

class CustomTable extends Component {

    renderRows = () => {
        return this.props.dataList.map( dataItem => {
            return (
                <ContactRow key={uuid.v4()} data={dataItem} />
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
            </div>
        )
    }

}

export default CustomTable