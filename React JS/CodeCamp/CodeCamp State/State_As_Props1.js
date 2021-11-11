/* Unidirectional Data flow. State flows in one direction down the tree of your application's components,
from stateful parent component to child component. The child components only receive the state data they need.

2nd method: Complex stateful apps can be broken down into just a few or single stateful component.
The rest of components receive state from the parent as props and render a UI from that state.
The principle of seperating state logic from UI logic is one of React's key principle.
 */


import React from 'react';

class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'CamperBot'
		};
	}
	
	render() {
		return(
			<div>
				<Navbar name = {this.state.name} />
			</div>
			);
	}
	
}

class Navbar extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div>
				<h1>Hello, my name is: {this.props.name}  </h1>
			</div>
		);
	}
	
}

