import React from 'react'
import { Grid, Reveal, Image, GridColumn } from 'semantic-ui-react';

import Card from './Card';
import SideBar from './hocs/SideBar';


// helper functions
function produceGrid(n, handleClick) {
    const m = 3;
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
        <Grid stackable columns={3} centered>
            {grid.map(g => g)}
        </Grid>
    )
}

export default SideBar(Main);