import React from 'react';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUsers: null
		};
	}
	
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				activeUsers: 1273
			});
		}, 2500);
	}
	
	render() {
		return(
			<div>
				<h1>Active Users: {this.state.activeUsers} </h1>
			</div>
			);
	}
	
}
	
	