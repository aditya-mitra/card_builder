import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Store/actions/actionCreators';

import { Segment, Grid, Message, Icon, Dimmer } from 'semantic-ui-react';
import Card from '../Components/Card';
import Inputs from '../Components/Inputs';

import { postOne } from '../Services/apiCalls';


// functions for store subscriptions
function mapStateToProps(state) {
    return { ...state };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}



class BuiltForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);

        const { status } = this.props;
        if (status === 'edit') {
            this.state = { ...this.props, err: '' };
            delete this.state[status];
        } else {
            // status is new 
            this.state = {
                name: '',
                shows: '',
                img: '',
                abilities: '',
                err: '',
                loading: false
            }
        }
    }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
    }

    async handleSubmit() {
        console.log('submitting data now', this.state);
        this.setState({ loading: true });
        let inputs = { ...this.state };
        delete inputs['err']; // remove the unnecessary fields
        delete inputs['loading'];

        const m = await postOne(inputs);

        if (m.status === 0) this.setState({ loading: false, err: m.message });
        if (m.status === 1) {
            await new Promise(resolve => setTimeout(resolve, 1500)); // needs at least 1 second to get the character
            this.props.doPutOne(m.character_id);
            this.props.hideForm();
            this.setState({
                name: '', shows: '', img: '', abilities: '', err: ''
            });
        }
    }

    handleDismiss() {
        this.setState({ err: '' });
    }

    render() {
        return (
            <Segment piled >
                {(this.state.err && this.state.err.length > 0 ?
                    <Message icon error onDismiss={this.handleDismiss} >
                        <Icon name='times circle' />
                        <Message.Header floated>
                            {this.state.err}
                        </Message.Header>
                    </Message> : null)}
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

const ConnectedBuiltForm = connect(mapStateToProps, mapDispatchToProps)(BuiltForm);

export default ConnectedBuiltForm;