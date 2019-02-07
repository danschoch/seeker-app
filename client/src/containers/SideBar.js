import React, { Component } from 'react';
import '../css/SideBar.css'

class SideBar extends Component {

    render() {
        return(
            <nav id='sideBar'>
                <div className='navLinkContainer'><a id='navTitle' href="/">SEEKER</a></div>
                <div className='navLinkContainer'><a href="/">Home</a></div>
                <div className='navLinkContainer'><a href="#">Progress</a></div>
                <div className='navLinkContainer'><a href="/activities">Activities</a></div>
                <div className='navLinkContainer'><a href="/contacts">Contacts</a></div>
                <div className='navLinkContainer'><a href="#">Organizations</a></div>
                <div className='navLinkContainer'><a href="#">Calendar</a></div>
                <div className='navLinkContainer'><a href="/settings">Settings</a></div>    
            </nav>
        )
    }
/*
    toggleActiveNav() {
        this.refs.btn.classList.toggle('btn-menu-open');
    }

    componentDidMount() {
        this.refs.btn.addEventListener('click', this.toggleSidenav);
    }

    componentWillUnmount() {
        this.refs.btn.removeEventListener('click', this.toggleSidenav);
    }
*/
}

export default SideBar