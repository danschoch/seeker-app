import React, { Component } from 'react';
import Moment from 'react-moment';

class Activity extends Component {

    render() {
        const { activity } = this.props;
        let formattedDate = <Moment format="MM/DD/YY" >{activity.dueDate}</Moment>
        return (
            <div>
                <h4>{activity.type} - {activity.title}</h4>
                <p>Contact: {activity.contact} - Due: {formattedDate}</p>
                <p>Notes: {activity.notes}</p>
            </div>
        )
    }
    
}
   


export default Activity;