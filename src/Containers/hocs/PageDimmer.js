import React from 'react';
import { Dimmer } from 'semantic-ui-react';

import "./PageDimmer.css";

import BuiltForm from '../Form';

const PageDimmer = WrappedComponent => {
    class Hoc extends React.Component {
        constructor(props) {
            super(props);
            this.state = { active: true };
            this.handleShow = this.handleShow.bind(this);
            this.handleHide = this.handleHide.bind(this);
        }

        handleShow = () => this.setState({ active: true })
        handleHide = () => this.setState({ active: false })

        render() {
            const { active } = this.state;
            return (
                <Dimmer.Dimmable dimmed={active}>
                    <WrappedComponent handleHide={this.handleHide} handleShow={this.handleShow} />

                    <Dimmer
                        active={active}
                        onClickOutside={this.handleHide}
                        verticalAlign='top'
                    >
                        <div className='builtform container'>
                            <BuiltForm hideForm={this.handleHide} />
                        </div>
                    </Dimmer>

                </Dimmer.Dimmable>
            );
        }
    }
    return Hoc;
}

export default PageDimmer;