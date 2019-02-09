import React, { Component } from 'react';
import '../css/TopNav.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class TopNav extends Component {

    render() {
        return(
            <div id='topNav'>
                <Form inline='true'>
                    <Form.Control type='text' placeholder="Search activities or contacts" />
                    <Button size='small' variant='outline-dark'><i className="fa fa-search"></i></Button>
                </Form>

                {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
            </div>
        )
    }    
}

export default TopNav