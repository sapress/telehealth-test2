import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { navLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    state = { activeItem: none };

    handleClick = (event, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary>
                <Menu.Item
                    as={NavLink}
                    to="/"
                    name="Home"
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
}

export default NavBar;
