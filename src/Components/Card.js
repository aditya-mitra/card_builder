import React from 'react'
import { Card, Icon } from 'semantic-ui-react';

const extra = (
    <a>
        <Icon name='user' />
    16 Friends
    </a>
)

const FullCard = (props) => (
    <Card
        image={props.img}
        link
        header={props.name.toUpperCase()}
        meta={props.shows}
        description={props.abilities.toString()}
        extra={extra}
        raised fluid
    />

)

export default FullCard;
