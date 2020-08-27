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
        this.handleResultSelect = this.handleResultSelect.bind(this);
    }
    state = {
        loading: false,
        results: [],
        value: ''
    }

    timer = null;

    handleSearchChange(event, data) {
        const { value } = data;
        this.setState({ value, loading: true });
        if (!value || value === '') {
            clearTimeout(this.timer);
            this.props.doClearSearch();
            this.setState({ loading: false });
            return;
        }

        const { cards } = this.props;

        const items = cards.filter(card =>
            card["name"].includes(value.toLowerCase()) ||
            card["shows"].includes(value.toLowerCase())
        );

        clearTimeout(this.timer);
        this.timer = setTimeout(()=> {
            this.props.doFilterCards([...items]);
            this.setState({ loading: false });
        }, 300); // we will be dispatching after delay, otherwise the search typing will be slow

        const searchResults = items.map(item => {
            return {
                title: item.name,
                description: item.shows,
                image: item.img
            };
        });

        this.setState({ results: searchResults });
    }

    handleResultSelect(event, data) {
        const value = data.result.title;
        this.setState({ value, loading: false });
        const { cards } = this.props;
        const items = cards.filter(card =>
            card["name"].includes(value.toLowerCase()) ||
            card["shows"].includes(value.toLowerCase())
        );
        this.props.doFilterCards([...items]);
    }

    render() {
        return (
            <Search fluid size='big'
                loading={this.state.loading}
                value={this.state.value}
                results={this.state.results}
                onSearchChange={this.handleSearchChange}
                onResultSelect={this.handleResultSelect}
            />
            )
    }
}

const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default ConnectedSearchBar;