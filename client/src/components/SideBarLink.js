import React, { Component } from 'react';
import '../css/SideBar.css';

class SideBarLink extends Component {
    
    state = {
        active: false
    }

    createHrefString = (href) => {
        return `/${href}`;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    toggleActiveState = () => {
        debugger
        this.setState( prevState => ({
            active: !prevState.active
        }))
        debugger
        /*
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        ${this.state.active ? 'active' : null}`
        */
    };

    render() {
        return(
            <div className={`navLinkContainer`}>
                <a href={this.createHrefString(this.props.name)} onClick={this.toggleActiveState}>{this.capitalizeFirstLetter(this.props.name)}</a>
            </div>
        )
    }
    
}

export default SideBarLink;