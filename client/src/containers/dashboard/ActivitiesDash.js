import React, { Component } from 'react';
import fakeActivities from '../../mockData'

class ActivitiesDash extends Component {

    render() {
        console.log(fakeActivities)
        
        return(
           <div>
                <h1>Activities</h1>
                <h2>Today</h2>
                <h2>This Week</h2>
           </div>
        )
    }
}

export default ActivitiesDash