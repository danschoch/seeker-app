import React, { Component } from 'react';
import Goals from '../containers/dashboard/Goals';
import ActivitiesDash from '../containers/dashboard/ActivitiesDash';
import ContactsDash from '../containers/dashboard/ContactsDash';

class DashboardPage extends Component {

    render() {
        return(
            <div id='dashBody'>
                <Goals />
                <ActivitiesDash />
                <ContactsDash />
            </div>
        )
    }
}

export default DashboardPage