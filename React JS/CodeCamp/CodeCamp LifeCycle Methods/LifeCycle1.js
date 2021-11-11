import React from 'react';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		console.log("This is my quote");
	}
	
	render() {
		return(
			<div />
			);
	}
}