import React from 'react'
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const SidebarExampleSidebar = () => {
    //const [visible, setVisible] = React.useState(false)

    return (
        <Grid stackable>
            <Grid.Column>
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
                            <wrappedComponent />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
        </Grid>
    )
}

export default SidebarExampleSidebar;