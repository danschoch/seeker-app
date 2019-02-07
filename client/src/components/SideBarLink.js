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

    render() {
        return(
            <div className={`navLinkContainer  ${this.state.active === true ? 'active' : null}`}>
                <a href={this.createHrefString(this.props.name)} onClick={this.toggleActive}>{this.capitalizeFirstLetter(this.props.name)}</a>
            </div>
        )
    }

    toggleActive() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    
}

export default SideBarLink;