import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../Store/actions/actionCreators';

import { Grid, Button } from 'semantic-ui-react';
import './stylesheets/Main.css';

import Card from './Card';
import SideBar from './hocs/SideBar';


// helper functions
function mapStateToProps(state) {
    console.log(state, 'at map state to props');
    return { ...state };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function produceGrid(n, handleClick) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let column =
            <Grid.Column key={i} onClick={handleClick} >
                <Card />
            </Grid.Column>;
        grid.push(column);
    }
    return grid;
}

const Main = (props) => {
    const handleClick = props.handleClick;
    let grid = produceGrid(6, handleClick);
    return (
        <div className='container'>
            <Button onClick={props.doGetAll} > Get All </Button>
            <Grid stackable columns={3} centered>
            {grid.map(g => g)}
            </Grid>
        </div>
    )
}

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

// the SideBar higher order component will pass the props to the Main Component
export default SideBar(ConnectedMain);