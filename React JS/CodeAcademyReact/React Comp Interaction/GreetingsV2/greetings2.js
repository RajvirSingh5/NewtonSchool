import React from 'react';
//import ReactDOM from 'react-dom';

export class Greetings extends React.Component {
	render() {
		return <h1>Hi there, {this.props.name}! </h1>
	}
}

//ReactDOM.render(<Greetings name="Rajvir" />, document.getElementById('app'));

