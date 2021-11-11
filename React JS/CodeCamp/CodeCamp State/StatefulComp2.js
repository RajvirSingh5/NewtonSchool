/* Another way  to access 'state' in a component.*/

import React from 'react';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Rajvir Singh Badgujar"
		}
	}
	
	render() {
		const name = this.state.name;
		return (
			<div>
				<h1>{name}</h1>
			</div>
		);	
	}
	
}