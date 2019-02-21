import React, { Component } from 'react';

class Voter extends Component {

    state = {
        voteCount: 0
    }

    submitVote() {
        this.setState({
            voteCount: this.state.voteCount + 1
        })
    }

    render() {
        return(
            <React.Fragment>
               <button onClick={this.submitVote}>
                    Vote
                </button>

                <span>{this.state.voteCount}</span> 
            </React.Fragment>
        ) 
    }
}

export default Voter