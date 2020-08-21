import React, { Component } from 'react';

import { Segment, Grid } from 'semantic-ui-react';

import Card from '../Components/Card';
import Inputs from '../Components/Inputs';

class BuiltForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const { status } = this.props;
        if (status === 'edit') {
            this.state = { ...this.props };
            delete this.state[status];
        } else {
            // status is new 
            this.state = {
                name: '',
                shows: '',
                img: '',
                abilities: ''
            }
        }
    }

    handleChange(e, { name, value }) {
        console.log('we have ', name, value);
        this.setState({ [name]: value });
    }

    handleSubmit() {
        console.log('you submitted the values', this.state);
    }

    render() {
        return (
            <Segment piled>
                <Grid columns={3} stackable celled='internally'>
                    <Grid.Column floated='left'>
                        <Card {...this.state} />
                    </Grid.Column>
                    <Grid.Column floated='right'>
                        <Inputs handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state} />
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default BuiltForm;