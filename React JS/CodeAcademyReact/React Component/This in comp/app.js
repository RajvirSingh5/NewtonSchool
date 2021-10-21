import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	get name() {
		return "Rajvr";
	}
	render() {
		return(
			<h1>My name is {this.name}.<h1>
		);
	}
}

ReactDOM(<MyName/>, document.getElementById('app'));

