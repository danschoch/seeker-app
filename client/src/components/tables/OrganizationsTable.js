import React, { Component } from 'react';
import { ReactComponent as ContactSvg } from '../../css/contactIcon.svg';
import OrgRow from './OrgRow';
import { Table } from 'react-bootstrap';
import CustomTable from '../CustomTable';
import uuid from 'uuid';
import '../../css/Organizations.css';


class OrganizationsTable extends Component {

    renderOrgRows = () => {
        return this.props.orgs.map( org => {
            return (
                <OrgRow key={uuid.v4()} org={org} />
            )
        })
    }

    render() {
        return (
            <div id='orgTableContainer'className='container-fluid customTableContainer'>
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
                                <th>Point of Contact</th>
                                <th>Number of Contacts</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderOrgRows()}
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

export default OrganizationsTable