import React from 'react';

import fallbackImage from '../assets/fallback.jpg';
import "./Card.css";
import { Icon, Label } from 'semantic-ui-react';


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
            <div className="portrait" style={{ backgroundImage: 'url(' + img + "), url(" + fallbackImage +")" }}>
            </div>
            <div className="details">
                <Label style={{ float: 'right', cursor:'pointer', color: 'white', background: 'black' }} size='mini' onClick={() => { props.doEdit({ name, shows, abilities, img, id }); props.handleShow(); }}>
                    <Icon name='pencil alternate' inverted size='large' /> Edit
                </Label>
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