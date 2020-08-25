import React from 'react';

import "./Card.css";
import { Icon } from 'semantic-ui-react';


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


function randomColour() {
    const colours = ['red', 'green', 'blue'];
    const randIndex = Math.floor(Math.random() * 3);
    return colours[randIndex];
}

function Card(props) {
    let { name, shows, abilities, img, id } = props;
    abilities = Array.isArray(abilities) ? abilities : abilities.split(',');
    let listAbilities = [], counter = 0;
    for (const ability of abilities) {
        const listAbility =
            <label key={counter++} className={"class-badge badge-" + randomColour()}>{ability}</label>
        listAbilities.push(listAbility);
    }
    return (
        <div className={"character-card-v2 card-" + randomColour()}>
            <div className="portrait" style={{ backgroundImage: 'url(' + img + ')' }}>
            </div>
            <div className="details">
                <span onClick={ () => props.doEdit(id) }><Icon link name='pencil alternate' style={{ float: 'right' }} inverted /></span>
                <div className="names">
                    <div className="glitch-wrapper">
                        <div className="glitch" data-text={name}>{name}
                        </div>
                    </div>
                        
                    <small>{shows}</small>
                </div>
                <div className="classes">
                    {listAbilities}
                </div>
            </div>
        </div>);
}

const connectedCard = connect(mapStateToProps, mapDispatchToProps)(Card);
export default connectedCard;