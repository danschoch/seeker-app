import React, { Component } from 'react';

class TableHeader extends Component {

    //Search bar functionality will require state in this component

    render() {
        return(
            <div id='contactsHeader'>
                {this.props.children}
                <p>{this.props.title}</p>
                <form className="search" action="action_page.php">
                    <input type="text" placeholder="Search Names" name="search"></input>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        )
    }

}

export default TableHeader