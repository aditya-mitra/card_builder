import React from 'react'
import { Grid, Container, Reveal, Image } from 'semantic-ui-react'
import Card from './Card';


const Main = () => (
    <Container>
        <Grid stackable columns={3} centered>
            <Grid.Row>
                <Grid.Column>
                    <Reveal animated='move right'>
                        <Reveal.Content visible>
                            <Card />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src='https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Broly-in-Dragon-Ball-Super-Broly.jpg' size='small' bordered rounded />
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
                <Grid.Column>
                    <Card />
                </Grid.Column>
                <Grid.Column>
                    <Card />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Card />
                </Grid.Column>
                <Grid.Column>
                    <Card />
                </Grid.Column>
                <Grid.Column>

                    <Card />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

export default Main;