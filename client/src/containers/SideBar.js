import React, { Component } from 'react';
import '../css/SideBar.css';
import SideBarLink from '../components/SideBarLink';

class SideBar extends Component {

    state = {
        links: ['home', 'progress', 'activities', 'contacts', 'organizations', 'calendar', 'settings']
    }

    renderLinks = () => {
        return this.state.links.map( link => {
            return <SideBarLink key={ link } name={ link } />
        })
    }

    render() {
        return(
            <nav id='sideBar'>
                <div className='navLinkContainer'><a id='navTitle' href="/">SEEKER</a></div>

                {this.renderLinks()}
            </nav>
        )
    }
}

export default SideBar