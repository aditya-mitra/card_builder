import React, { Component } from 'react';
import { Menu, Button, Icon, Header, Checkbox, Label } from 'semantic-ui-react';

import "./stylesheets/NavBar.css";
import SearchBar from '../Components/SearchBar';

class NavBar extends Component {
    state = { darkmode: true };
    componentDidMount() {
        if (this.state.darkmode) {
            document.body.setAttribute('data-theme', 'dark');
        }
    }
    handleClick() {
        this.setState(function (prevState) {
            return { darkmode: !prevState.darkmode };
        })
        if (!this.state.darkmode) {
            document.body.setAttribute('data-theme', 'dark');
        }
        else {
            document.body.removeAttribute('data-theme', 'dark');
        }
    }
    
    render() {
        const { darkmode } = this.state;
        return (
            <Menu stackable inverted={darkmode} >
                <Menu.Item
                >
                    <Label color={darkmode ? 'violet' : 'blue'} horizontal>
                        {darkmode ? "Dark Mode" : "Light Mode"}
                    </Label>
                    <Checkbox slider onClick={() => this.handleClick.call(this)} className='darkmode-slider' defaultChecked />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button animated='fade' inverted={darkmode} onClick={this.props.handleShow}>
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