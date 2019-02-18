import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrgsTableContainer from '../containers/OrgsTableContainer';

class OrganizationsPage extends Component {

    render() {
        return(
            <React.Fragment>
                <h1>Organizations</h1>
                <OrgsTableContainer orgsList={ this.props.orgsList } />
            </React.Fragment>
        )
    }
}

const mapPropsToState = (state) => {
    return {orgsList: state.organizations.orgsList}
}

export default connect(mapPropsToState)( OrganizationsPage);