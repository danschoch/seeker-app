import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import '../css/Contacts.css';

class CustomTable extends Component {

    capFirstChar = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderColumnNames = () => {
        return this.props.columnList.map( columnName => {
            return <th>{ this.capFirstChar(columnName) }</th>
        })
    }

    render() {
        return (
            <Table responsive bordered={ false } >
                <thead>
                    <tr>
                        {this.renderColumnNames()}
                        {/* <th>Name</th>
                        <th>Title</th>
                        <th>Organization</th>
                        <th>Last Contacted</th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </Table> 
        )
    }

}

export default CustomTable