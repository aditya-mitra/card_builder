import React from 'react'
import {
    Grid,
    Icon,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const SidebarExampleSidebar = (WrappedComponent) => () => {
    //const [visible, setVisible] = React.useState(false)

    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={true}
                width='thin'
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

            <Sidebar.Pusher>
                <Segment basic>
                    <WrappedComponent />
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default SidebarExampleSidebar;