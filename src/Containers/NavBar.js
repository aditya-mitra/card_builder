import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

import SearchBar from '../Components/SearchBar';

class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state;
        return (
            <Menu inverted stackable>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button animated='fade' inverted onClick={this.props.handleShow}>
                            <Button.Content visible>Create New</Button.Content>
                            <Button.Content hidden ><Icon name='plus' /></Button.Content>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <SearchBar />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default NavBar;