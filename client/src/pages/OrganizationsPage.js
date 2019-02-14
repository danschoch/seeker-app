import React, { Component } from 'react';
import OrganizationsTable from '../components/tables/OrganizationsTable';
import { connect } from 'react-redux';

class OrganizationsPage extends Component {

    render() {
        return(
            <React.Fragment>
                <h1>Organizations</h1>
                <OrganizationsTable title='All Organizations' orgs={this.props.orgsList} />
            </React.Fragment>
        )
    }
}

const mapPropsToState = (state) => {
    return {orgsList: state.organizations.orgsList}
}

export default connect(mapPropsToState)( OrganizationsPage);