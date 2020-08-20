import React from 'react';
import { Dimmer, Form } from 'semantic-ui-react';
import './stylesheets/Form.css';

const showForm =
    <Form size='huge' widths={35}>
        <Form.Group widths={12}>
            <Form.Input
                label='Name'
                placeholder='Your Character'
                name='name'
            //value={name}
            //onChange={handleChange}
            />
        </Form.Group>
        <Form.Group widths={12}>
            <Form.Input
                label='Abilities'
                placeholder='The awesome abilities of your character ...'
                name='abilities'
            />
        </Form.Group>
        <Form.Group widths={12}>
            <Form.Button content='Submit' fluid />
        </Form.Group>
    </Form>;


const NewForm = WrappedComponent => {
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
                        <div className='align-middle'>
                            {showForm}
                        </div>
                    </Dimmer>

                </Dimmer.Dimmable>
            );
        }
    }
    return Hoc;
}

export default NewForm;