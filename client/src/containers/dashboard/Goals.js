import React, { Component } from 'react';
import Goal from '../../components/Goal'

class Goals extends Component {

    renderGoals = () => {
        return ['Goal 1', 'Goal 2', 'Goal 3'].map( goal => {
            return <Goal goal={goal} />
        })
    }

    render() {
        return(
           <div>
               <h1>Goals</h1>
               {this.renderGoals()}
           </div>
        )
    }
}

export default Goals