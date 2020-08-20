import React from 'react'
import { Card, Icon } from 'semantic-ui-react';

import Simple from './hocs/Simple';


const extra = (
    <a>
        <Icon name='user' />
    16 Friends
    </a>
)

const CardExampleCardProps = () => (
    <Card
        image='https://vignette.wikia.nocookie.net/characterprofile/images/a/a6/Broly_artwork.png/revision/latest/scale-to-width-down/340?cb=20190515183751'
        link
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
        raised fluid
    />

)

export default CardExampleCardProps;
