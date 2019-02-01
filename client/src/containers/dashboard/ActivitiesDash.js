import React, { Component } from 'react';
import fakeActivities from '../../mockData';
import Activity from '../../components/Activity';

class ActivitiesDash extends Component {

    state = {
        activities: fakeActivities
    }

    renderActivities = () => {
        return this.state.activities.map( (activity, i) => {
            return <Activity key={i} activity={activity} />
        })
    }


    render() {
        return(
           <div>
                <h1>Activities</h1>
                {this.renderActivities()}
           </div>
        )
    }
}

export default ActivitiesDash