import React, { Component } from 'react';
import ContactsTable from '../components/CustomTable';
import { connect } from 'react-redux';

class OrganizationsPage extends Component {

    render() {
        console.log(this.props.orgsList)
        return(
            <React.Fragment>
                <h1>Organizations</h1>
                {/* <ContactsTable title='Industry Professionals' contacts={this.state.organizations} /> */}
            </React.Fragment>
        )
    }
}

const mapPropsToState = (state) => {
    return {orgsList: state.organizations.orgsList}
}

export default connect(mapPropsToState)( OrganizationsPage);