import React, { Component } from 'react';
import Goals from '../containers/dashboard/Goals';
import ActivitiesDash from '../containers/dashboard/ActivitiesDash';

class DashboardPage extends Component {

    render() {
        return(
            <div id='dashBody'>
                <Goals />
                <ActivitiesDash />
            </div>
        )
    }
}

export default DashboardPage