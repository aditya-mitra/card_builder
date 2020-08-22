import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid, Button } from 'semantic-ui-react';
import './stylesheets/Main.css';

import * as actions from '../Store/actions/actionCreators';

import BuiltCard from '../Components/Card';
import SideBar from './hocs/SideBar';


// helper functions
function mapStateToProps(state) {
    return { ...state };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function produceGrid(n, handleClick, cards) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let column =
            <Grid.Column floated='left' key={cards[i].id} onClick={handleClick} >
                <BuiltCard {...cards[i]} key={cards[i].id} />
            </Grid.Column>;
        grid.push(column);
    }
    return grid;
}

class Main extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.props.doGetAll();
    }

    render() {
        const { handleClick, cards } = this.props;
        let grid = produceGrid(cards.length, handleClick, cards);
        return (
            <div className='main container'>
                
                <Grid stackable columns={3} centered>
                    {grid.map(g => g)}
                </Grid>
            </div>
        );

    }
}

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

// the SideBar higher order component will pass the props to the Main Component
export default SideBar(ConnectedMain);