import React, { Component } from 'react';
import { Dropdown, Button, Modal, Form} from 'react-bootstrap';
import ContactForm from '../components/ContactsFormModal';


class AddItemDropdown extends Component {

    state = {
        contactForm: {
            show: false,
            contactAttributes: {
               firstName: '',
                lastName: '',
                title: '',
                email: '',
                website: ''
            }   
        }
    };


    // Modal Handlers
    showContactForm = () => {
        this.setState({
            contactForm: {
                ...this.state,
                show: true
            }
        }) 
    }

    closeContactForm = () => {
        this.setState({
            contactForm: {
                show: false,
                contactAttributes: {
                   firstName: '',
                    lastName: '',
                    title: '',
                    email: '',
                    website: ''
                }
            }
        })
    }


    // Form Handlers
    handleChange = (event) => {
        this.setState({
            contactForm: {
                contactAttributes: {
                   firstName: '',
                    lastName: '',
                    title: '',
                    email: '',
                    website: ''
                }
            }
        });
    }

    handleSubmit = (event) => {
        // event.preventDefault();
    
        console.log(event)

        this.setState({
            contactForm: {
                show: false,
                contactAttributes: {
                   firstName: '',
                    lastName: '',
                    title: '',
                    email: '',
                    website: ''
                }
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <Dropdown alignRight>
                    <Dropdown.Toggle id="dropdown-basic">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as='button' onClick={this.showContactForm} >Add Contact</Dropdown.Item>
                        <Dropdown.Item as='button' >Add Organization</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <ContactForm title='Add Contact' show={this.state.contactForm.show} close={this.closeContactForm} handleChange={this.handleChange} handleSubmit={this.handleSubmit} attrList={Object.keys(this.state.contactForm.contactAttributes)} />
            </React.Fragment>
        )
    }
}

export default AddItemDropdown

