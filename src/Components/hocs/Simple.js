import React, { Component } from 'react';
/*
 * Component name should always be starting with Capital letter
 * Otherwise, it will be considered as an html tag
*/
const hoc = (Wrapped) => {
    class EnhancedCompo extends Component {
        render() {
            return (
                <a href="#">
                    <Wrapped />
                </a>
                );
        }
    }
    return EnhancedCompo;
}

export default hoc;