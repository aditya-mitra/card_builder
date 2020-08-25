import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Store/actions/actionCreators';

import { Segment, Grid, Message, Icon } from 'semantic-ui-react';
import Card from '../Components/Card';
import Inputs from '../Components/Inputs';

import { postOne, updateOne } from '../Services/apiCalls';


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

        this.state = {
            name: '',
            shows: '',
            img: '',
            abilities: '',
            err: '',
            loading: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.edit !== prevProps.edit) {
            this.setState({ ...this.props.edit.card });
        }
    }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
    }

    async handleSubmit() {
        this.setState({ loading: true });
        let inputs = { ...this.state };
        // remove the unnecessary fields
        delete inputs['err']; 
        delete inputs['loading'];

        let m;
        if (this.props.edit !== false) m = await updateOne(inputs, this.props.edit.card.id);
        else m = await postOne(inputs);
        console.log('we have m as', m);
        if (m.status === 0) this.setState({ loading: false, err: m.message });
        else if (m.status === 1 && this.props.edit === false) {
            await new Promise(resolve => setTimeout(resolve, 1500)); // needs at least 1 second to put the character in the database
            this.props.doPutOne(m.character_id);

            this.props.hideForm();
            this.setState({
                name: '', shows: '', img: '', abilities: '', err: '', loading: false
            });
        } else if (m.status === 1 && this.props.edit !== false) {
            this.props.doUpdateOne(this.props.edit.card.id, m.character);

            this.props.hideForm();
            this.setState({
                name: '', shows: '', img: '', abilities: '', err: '', loading: false
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