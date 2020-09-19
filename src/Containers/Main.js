import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './stylesheets/Main.css';
import { Grid, Button, Divider } from 'semantic-ui-react';

import * as actions from '../Store/actions/actionCreators';

import BuiltCard from '../Components/Card';


// helper functions
function mapStateToProps(state) {
    return { ...state };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function produceGrid(n, handleClick, cards, handleShow) {
    let grid = [];
    for (let i = 0; i < n; i+=3) {
        let row = [];
        for (let j = i; j < i+3 && j < n; j++) {
            let column =
                <Grid.Column key={cards[j].id} onClick={handleClick} >
                    <BuiltCard {...cards[j]} handleShow={handleShow} key={cards[j].id} cardId={cards[j].id}/>
                </Grid.Column>;
            row.push(column);
        }
        row = <Grid.Row key={i}> { row } </ Grid.Row>;
        grid.push(row);
    }
    return grid;
}

const loader = (
    <div className="loader-container">
        {JSON.parse(localStorage.getItem('darkmode')) ? 
            <div className="spinner-box">
                <div className="blue-orbit leo">
                </div>

                <div className="green-orbit leo">
                </div>

                <div className="red-orbit leo">
                </div>

                <div className="white-orbit w1 leo">
                </div><div className="white-orbit w2 leo">
                </div><div className="white-orbit w3 leo">
                </div>
            </div>
            :
            <div className="loader loader10" />            
        }
        <div>
            <h1>Loading ...</h1>
        </div>
    </div>
);

class Main extends Component {

    state = { loading: true };

    componentDidMount() {
        this.props.doGetAll();
        if (this.props.cards.length > 0) {
            this.setState({ loading: false });
        }

    }

    render() {
        const { handleClick, cards, filteredCards, handleShow } = this.props;


        if (this.state.loading && cards.length === 0) {
            return loader;
        }

        const trueCards = (filteredCards.length > 0) ? filteredCards : cards;
        const grid = produceGrid(trueCards.length, handleClick, trueCards, handleShow);

        const showOnSearch = filteredCards.length > 0 ?
            <span><Button size='huge' floated='right' onClick={this.props.doClearSearch}>SHOW ALL CARDS</Button>
                <Divider horizontal>SEARCH RESULTS</Divider></span> : null;
        return (
            <div className='main container'>
                {showOnSearch}
                <Grid stackable columns={3} celled='internally'>
                    {grid.map(g => g)}
                </Grid>
            </div>
        );

    }
}

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectedMain;