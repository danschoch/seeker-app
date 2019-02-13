import React, { Component } from 'react';
import '../css/TopNav.css';
import {  Form, Button } from 'react-bootstrap';
import AddItemContainer from '../containers/AddItemContainer';

class TopNav extends Component {

    render() {
        return(
            <div id='topNav'>
                <Form inline='true' id='topNavSearch'>
                    <Form.Control type='text' placeholder="Search activities or contacts" />
                    <Button size='small' variant='outline-dark'><i className="fa fa-search"></i></Button>
                </Form>

                <AddItemContainer />
                <span className='rectangle'/>
                <div id='profileContainer'>
                    <p>Username &or;   &#9711;</p>
                </div>
            </div>
        )
    }    
}

export default TopNav