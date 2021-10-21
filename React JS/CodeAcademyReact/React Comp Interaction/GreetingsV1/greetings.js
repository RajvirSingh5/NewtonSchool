import React from 'react';
import ReactDOM from 'react-dom';

class Greetings extends React.Component {
	render() {
		return <h1>Hi there, {this.props.firstName}!</h1>;
	}
}

ReactDOM.render(<Greeting firstName="Rajvir" />, document.getElementById('app'));

