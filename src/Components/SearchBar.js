import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Store/actions/actionCreators';

// functions for store subscriptions
function mapStateToProps(state) {
    return { ...state };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    state = {
        loading: false,
        results: [],
        value: ''
    }

    handleSearchChange(event, data) {
        const { value } = data;
        this.setState({ value, loading: true });

        const { cards } = this.props;

        let items = cards.filter(card =>
            card["name"].includes(value.toLowerCase()) ||
            card["shows"].includes(value.toLowerCase())
        );

        items = items.map(item => {
            return {
                title: item.name,
                description: item.shows,
                image: item.img
            };
        });

        this.setState({ results: items, loading: false });
    }

    render() {
        return (
            <Search fluid
                loading={this.state.loading}
                value={this.state.value}
                results={this.state.results}
                onSearchChange={this.handleSearchChange}
            />
            )
    }
}

const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default ConnectedSearchBar;