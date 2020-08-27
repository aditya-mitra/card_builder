import React from 'react';
import { Form, Button, Popup } from 'semantic-ui-react';

function Inputs (props) {
	return (
		<Form size='big' onSubmit={props.handleSubmit}>
			<Form.Group widths='equal'>
				<Form.Input
					required
					label='The Name of your Awesome Character'
					placeholder='The Flash'
					name='name'
					value={props.name}
					onChange={props.handleChange}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					required
					label='Where did you find your character?'
					placeholder='The Justice League'
					name='shows'
					value={props.shows}
					onChange={props.handleChange}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Popup inverted trigger={
					<Form.Input
						required
						label='What all stuff your character can do?'
						placeholder='Runs fast, Lightning'
						name='abilities'
						value={props.abilities}
						onChange={props.handleChange}
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
						value={props.img}
						onChange={props.handleChange}
					/>}
				>
					<Popup.Content>
						Please make sure it is a valid URL!
					</Popup.Content>
				</Popup>
			</Form.Group>
			<Button loading={props.loading}
				disabled={props.loading}
				color='green' inverted
				type='submit'>
				Submit
			</Button>
		</Form>
	);
}

export default Inputs;