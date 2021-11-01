/* setState() is a method for updating componet state.
'this.setState() accepts an object with key values pairs.
The keys are your state properties and the values are the udpatd state data.

this.setState({
	username: 'Lewis'
});

  */
import React from 'react';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Initial State"
		}
		this.handleClick = this.handleClick.bind(this);
		
	}
	
	handleClick() {
		this.setState({
			name: 'React Rocks!'
		});
	}
	
	render() {
		const name = this.state.name;
		return (
			<div>
				<button onClick={this.handleClick}>Click me</button>
				<h1>this.state.name}</h1>
				
			</div>
		);	
	}
}