import React, {Component } from 'react';

const hoc = (wrapped) => {
    class inside extends Component {
        render() {
            return <wrapped />
        }
    }
}

export default hoc;