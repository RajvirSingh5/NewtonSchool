import React from 'react';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return(
			<div>
				<Welcome name="Rajvir" />
			</div>
		);
	}
	
};

class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<p>Hello, <strong>{this.props.name}</strong></p>
		);
	}