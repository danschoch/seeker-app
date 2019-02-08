import React, { Component } from 'react';
import '../css/SideBar.css';
import SideBarLink from '../components/SideBarLink';
import { NavLink }from 'react-router-dom';

class SideBar extends Component {

    state = {
        links: ['home', 'progress', 'activities', 'contacts', 'organizations', 'calendar', 'settings']
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderLinks = () => {
        return this.state.links.map( link => {
            return (
            <div key={ link } className='navLinkContainer'>
                <NavLink to={`/${link}`} activeClassName='active' >{this.capitalizeFirstLetter(link)}</NavLink>
                <span className='rectangle'/>
            </div>  
            )
        })
    }

    render() {
        return(
            <nav id='sideBar'>
                <div className='navLinkContainer'id='navTitleContainer'><NavLink to="/home" id='navTitle'>SEEKER</NavLink></div>

                {this.renderLinks()}
            </nav>
        )
    }
}

export default SideBar