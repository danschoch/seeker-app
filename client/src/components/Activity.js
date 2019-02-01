import React, { Component } from 'react';

class Activity extends Component {

    render() {
        const { activity } = this.props;
        debugger

        return (
            <div>
                <h4>{activity.type} - {activity.title}</h4>
                <p>Contact: {activity.contact} - Due: {activity.dueDate}</p>
                <p>Notes: {activity.notes}</p>
            </div>
        )
    }
    
}
   


export default Activity;