import React, { Component } from 'react';
import ContactsTable from '../components/CustomTable';
import '../css/ContactsPage.css'

class OrganizationsPage extends Component {

    state = {
        organizations: []
    }

    render() {
        return(
            <React.Fragment>
                <h1>Organizations</h1>
                {/* <ContactsTable title='Industry Professionals' contacts={this.state.organizations} /> */}
            </React.Fragment>
        )
    }

    componentDidMount() {
        fetch('/organizations')
        .then(response => response.json())
        .then(data => {
            this.setState({
                organizations: data
            })
        })
    }
}

export default OrganizationsPage