import React, { Component } from 'react';
import { Form, Button, Popup, Loader } from 'semantic-ui-react';

class Inputs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Form size='big' onSubmit={this.props.handleSubmit}>
				<Form.Group widths='equal'>
					<Form.Input
						required
						label='The Name of your Awesome Character'
						placeholder='The Flash'
						name='name'
						value={this.props.name}
						onChange={this.props.handleChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						required
						label='Where did you find your character?'
						placeholder='The Justice League'
						name='shows'
						value={this.props.shows}
						onChange={this.props.handleChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Popup inverted trigger={
						<Form.Input
							required
							label='What all stuff your character can do?'
							placeholder='Runs fast, Lightning'
							name='abilities'
							value={this.props.abilities}
							onChange={this.props.handleChange}
						/>}
					>
						<Popup.Content>
							Please enter comma separated values
						</Popup.Content>
					</Popup>
				</Form.Group>
				<Form.Group widths='equal'>
					<Popup inverted trigger={
						<Form.Input
							required
							label='Paste in an image of your character'
							placeholder='https://img1.looper.com/img/gallery/easter-eggs-in-the-flash-only-real-fans-noticed/intro-1576603048.jpg'
							name='img'
							value={this.props.img}
							onChange={this.props.handleChange}
						/>}
					>
						<Popup.Content>
							Please make sure it is a valid URL!
						</Popup.Content>
					</Popup>
				</Form.Group>
				<Button loading={this.props.loading}
					disabled={this.props.loading}
					color='green' inverted
					type='submit'>
					Submit
				</Button>
			</Form>
		);

	}
}

export default Inputs;