import React, { Component } from 'react';
import { ReactComponent as ContactSvg } from '../css/contactIcon.svg';
import TableHeader from '../components/tables/TableHeader';
import CustomTable from '../components/tables/CustomTable';
import OrgRow from '../components/tables/OrgRow';
import uuid from 'uuid';
import '../css/Organizations.css';

class OrgsTableContainer extends Component {

    state = {
        columnList: ["Name", "Point of Contact", "Number of Contacts", "Website"]
    }

    renderRows = () => {
        return this.props.orgsList.map( org => {
            return (
                <OrgRow key={uuid.v4()} org={org} />
            )
        })
    }

    render() {
        return (
            <div id='orgTableContainer' className='container-fluid customTableContainer'>
                <TableHeader title='All Organizations' >
                    <ContactSvg/>
                </TableHeader>

                <CustomTable columnList={this.state.columnList}>
                    {this.renderRows()}
                </CustomTable>
            </div>
        )
    }

}

export default OrgsTableContainer