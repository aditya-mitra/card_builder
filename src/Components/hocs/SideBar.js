import React, { Component } from 'react';
import {
    Icon,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react';

const VerticalSidebar = ({ animation, direction, visible, hideBar }) => {
    var deviceWidth =  window.innerWidth;
    let width = 'very wide';
    if (deviceWidth < 400) width = 'thin';
    else if (deviceWidth >= 400 && deviceWidth < 600) width = 'wide';
    else width = 'very wide';
    return <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        size='massive'
        width={width}
        onHide={hideBar}
    >
        <Menu.Item as='a'>
            <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='camera' />
          Channels
        </Menu.Item>
    </Sidebar>
}

const SidebarExampleSidebar = (WrappedComponent) => {
    class hoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                visible: false,
            }
            this.handleClick = this.handleClick.bind(this);
            this.hideBar = this.hideBar.bind(this);
        }

        handleClick(e) {
            this.setState(function (prevState, props) {
                return {
                    visible: !prevState.visible,
                };
            })
        }

        hideBar() {
            this.setState(function (prevState, props) {
                return { visible: false };
            })
        }

        render() {
            const animation = 'slide along';
            const direction = 'right';
            const dimmed = true;
            return (
                <div>
                    <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
                        <VerticalSidebar
                            animation={animation}
                            direction={direction}
                            visible={this.state.visible}
                            hideBar={this.hideBar}
                        />
                        <Sidebar.Pusher dimmed={dimmed && this.state.visible}>
                            <WrappedComponent handleClick={this.handleClick} />
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>

                </div>
            )
        }
    }
    return hoc;
}

export default SidebarExampleSidebar;