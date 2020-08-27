import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react';
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

function produceGrid(n, handleClick, cards, handleShow) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let column =
            <Grid.Column floated='left' key={cards[i].id} onClick={handleClick} >
                <BuiltCard {...cards[i]} handleShow={handleShow} key={cards[i].id} />
            </Grid.Column>;
        grid.push(column);
    }
    return grid;
}

class Main extends Component {

    componentDidMount() {
        this.props.doGetAll();
    }

    render() {
        const { handleClick, cards, handleShow } = this.props;
        let grid = produceGrid(cards.length, handleClick, cards, handleShow);
        return (
            <div className='main container'>
                <Grid stackable columns={3} celled='internally'>
                    {grid.map(g => g)}
                </Grid>
            </div>
        );

    }
}

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

// the SideBar higher order component will pass the props to the Main Component
export default SideBar(ConnectedMain);