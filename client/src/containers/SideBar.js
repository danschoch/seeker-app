import React, { Component } from 'react';
import '../css/SideBar.css'

class SideBar extends Component {

    render() {
        return(
            <nav id='sideBar'>
                <div class='navLinkContainer'><a id='navTitle' href="/">SEEKER</a></div>
                <div class='navLinkContainer'><a href="/">Home</a></div>
                <div class='navLinkContainer'><a href="#">Progress</a></div>
                <div class='navLinkContainer'><a href="/activities">Activities</a></div>
                <div class='navLinkContainer'><a href="/contacts">Contacts</a></div>
                <div class='navLinkContainer'><a href="#">Organizations</a></div>
                <div class='navLinkContainer'><a href="#">Calendar</a></div>
                <div class='navLinkContainer'><a href="/settings">Settings</a></div>    
            </nav>
        )
    }
}

export default SideBar